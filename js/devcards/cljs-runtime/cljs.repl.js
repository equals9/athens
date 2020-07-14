goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45129){
var map__45130 = p__45129;
var map__45130__$1 = (((((!((map__45130 == null))))?(((((map__45130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45130):map__45130);
var m = map__45130__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45133_45338 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45134_45339 = null;
var count__45135_45340 = (0);
var i__45136_45341 = (0);
while(true){
if((i__45136_45341 < count__45135_45340)){
var f_45342 = chunk__45134_45339.cljs$core$IIndexed$_nth$arity$2(null,i__45136_45341);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45342], 0));


var G__45343 = seq__45133_45338;
var G__45344 = chunk__45134_45339;
var G__45345 = count__45135_45340;
var G__45346 = (i__45136_45341 + (1));
seq__45133_45338 = G__45343;
chunk__45134_45339 = G__45344;
count__45135_45340 = G__45345;
i__45136_45341 = G__45346;
continue;
} else {
var temp__5735__auto___45348 = cljs.core.seq(seq__45133_45338);
if(temp__5735__auto___45348){
var seq__45133_45349__$1 = temp__5735__auto___45348;
if(cljs.core.chunked_seq_QMARK_(seq__45133_45349__$1)){
var c__4609__auto___45350 = cljs.core.chunk_first(seq__45133_45349__$1);
var G__45351 = cljs.core.chunk_rest(seq__45133_45349__$1);
var G__45352 = c__4609__auto___45350;
var G__45353 = cljs.core.count(c__4609__auto___45350);
var G__45354 = (0);
seq__45133_45338 = G__45351;
chunk__45134_45339 = G__45352;
count__45135_45340 = G__45353;
i__45136_45341 = G__45354;
continue;
} else {
var f_45355 = cljs.core.first(seq__45133_45349__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45355], 0));


var G__45356 = cljs.core.next(seq__45133_45349__$1);
var G__45357 = null;
var G__45358 = (0);
var G__45359 = (0);
seq__45133_45338 = G__45356;
chunk__45134_45339 = G__45357;
count__45135_45340 = G__45358;
i__45136_45341 = G__45359;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45360 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45360], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45360)))?cljs.core.second(arglists_45360):arglists_45360)], 0));
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
var seq__45137_45362 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45138_45363 = null;
var count__45139_45364 = (0);
var i__45140_45365 = (0);
while(true){
if((i__45140_45365 < count__45139_45364)){
var vec__45152_45366 = chunk__45138_45363.cljs$core$IIndexed$_nth$arity$2(null,i__45140_45365);
var name_45367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45152_45366,(0),null);
var map__45155_45368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45152_45366,(1),null);
var map__45155_45369__$1 = (((((!((map__45155_45368 == null))))?(((((map__45155_45368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45155_45368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45155_45368):map__45155_45368);
var doc_45370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45155_45369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45155_45369__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45367], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45371], 0));

if(cljs.core.truth_(doc_45370)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45370], 0));
} else {
}


var G__45373 = seq__45137_45362;
var G__45374 = chunk__45138_45363;
var G__45375 = count__45139_45364;
var G__45376 = (i__45140_45365 + (1));
seq__45137_45362 = G__45373;
chunk__45138_45363 = G__45374;
count__45139_45364 = G__45375;
i__45140_45365 = G__45376;
continue;
} else {
var temp__5735__auto___45377 = cljs.core.seq(seq__45137_45362);
if(temp__5735__auto___45377){
var seq__45137_45378__$1 = temp__5735__auto___45377;
if(cljs.core.chunked_seq_QMARK_(seq__45137_45378__$1)){
var c__4609__auto___45379 = cljs.core.chunk_first(seq__45137_45378__$1);
var G__45380 = cljs.core.chunk_rest(seq__45137_45378__$1);
var G__45381 = c__4609__auto___45379;
var G__45382 = cljs.core.count(c__4609__auto___45379);
var G__45383 = (0);
seq__45137_45362 = G__45380;
chunk__45138_45363 = G__45381;
count__45139_45364 = G__45382;
i__45140_45365 = G__45383;
continue;
} else {
var vec__45157_45384 = cljs.core.first(seq__45137_45378__$1);
var name_45385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45157_45384,(0),null);
var map__45160_45386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45157_45384,(1),null);
var map__45160_45387__$1 = (((((!((map__45160_45386 == null))))?(((((map__45160_45386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45160_45386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45160_45386):map__45160_45386);
var doc_45388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45160_45387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45160_45387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45385], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45389], 0));

if(cljs.core.truth_(doc_45388)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45388], 0));
} else {
}


var G__45390 = cljs.core.next(seq__45137_45378__$1);
var G__45391 = null;
var G__45392 = (0);
var G__45393 = (0);
seq__45137_45362 = G__45390;
chunk__45138_45363 = G__45391;
count__45139_45364 = G__45392;
i__45140_45365 = G__45393;
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

var seq__45166 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45167 = null;
var count__45168 = (0);
var i__45169 = (0);
while(true){
if((i__45169 < count__45168)){
var role = chunk__45167.cljs$core$IIndexed$_nth$arity$2(null,i__45169);
var temp__5735__auto___45394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45394__$1)){
var spec_45395 = temp__5735__auto___45394__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45395)], 0));
} else {
}


var G__45396 = seq__45166;
var G__45397 = chunk__45167;
var G__45398 = count__45168;
var G__45399 = (i__45169 + (1));
seq__45166 = G__45396;
chunk__45167 = G__45397;
count__45168 = G__45398;
i__45169 = G__45399;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45166);
if(temp__5735__auto____$1){
var seq__45166__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45166__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45166__$1);
var G__45400 = cljs.core.chunk_rest(seq__45166__$1);
var G__45401 = c__4609__auto__;
var G__45402 = cljs.core.count(c__4609__auto__);
var G__45403 = (0);
seq__45166 = G__45400;
chunk__45167 = G__45401;
count__45168 = G__45402;
i__45169 = G__45403;
continue;
} else {
var role = cljs.core.first(seq__45166__$1);
var temp__5735__auto___45404__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45404__$2)){
var spec_45405 = temp__5735__auto___45404__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45405)], 0));
} else {
}


var G__45406 = cljs.core.next(seq__45166__$1);
var G__45407 = null;
var G__45408 = (0);
var G__45409 = (0);
seq__45166 = G__45406;
chunk__45167 = G__45407;
count__45168 = G__45408;
i__45169 = G__45409;
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
var G__45410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45411 = cljs.core.ex_cause(t);
via = G__45410;
t = G__45411;
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
var map__45197 = datafied_throwable;
var map__45197__$1 = (((((!((map__45197 == null))))?(((((map__45197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45197):map__45197);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45197__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45197__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45197__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45198 = cljs.core.last(via);
var map__45198__$1 = (((((!((map__45198 == null))))?(((((map__45198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45198):map__45198);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45199 = data;
var map__45199__$1 = (((((!((map__45199 == null))))?(((((map__45199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45199):map__45199);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45199__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45199__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45199__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45200 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45200__$1 = (((((!((map__45200 == null))))?(((((map__45200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45200):map__45200);
var top_data = map__45200__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45200__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45219 = phase;
var G__45219__$1 = (((G__45219 instanceof cljs.core.Keyword))?G__45219.fqn:null);
switch (G__45219__$1) {
case "read-source":
var map__45220 = data;
var map__45220__$1 = (((((!((map__45220 == null))))?(((((map__45220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45220):map__45220);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45220__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45220__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45226 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45226__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45226,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45226);
var G__45226__$2 = (cljs.core.truth_((function (){var fexpr__45232 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45232.cljs$core$IFn$_invoke$arity$1 ? fexpr__45232.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45232.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45226__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45226__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45226__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45226__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45239 = top_data;
var G__45239__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45239,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45239);
var G__45239__$2 = (cljs.core.truth_((function (){var fexpr__45249 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45249.cljs$core$IFn$_invoke$arity$1 ? fexpr__45249.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45249.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45239__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45239__$1);
var G__45239__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45239__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45239__$2);
var G__45239__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45239__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45239__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45239__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45239__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45250 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45250,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45250,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45250,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45250,(3),null);
var G__45253 = top_data;
var G__45253__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45253,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45253);
var G__45253__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45253__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45253__$1);
var G__45253__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45253__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45253__$2);
var G__45253__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45253__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45253__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45253__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45253__$4;
}

break;
case "execution":
var vec__45258 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45189_SHARP_){
var or__4185__auto__ = (p1__45189_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45265.cljs$core$IFn$_invoke$arity$1 ? fexpr__45265.cljs$core$IFn$_invoke$arity$1(p1__45189_SHARP_) : fexpr__45265.call(null,p1__45189_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45266 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45266__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45266,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45266);
var G__45266__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45266__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45266__$1);
var G__45266__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45266__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45266__$2);
var G__45266__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45266__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45266__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45266__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45266__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45219__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45291){
var map__45292 = p__45291;
var map__45292__$1 = (((((!((map__45292 == null))))?(((((map__45292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45292):map__45292);
var triage_data = map__45292__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45298 = phase;
var G__45298__$1 = (((G__45298 instanceof cljs.core.Keyword))?G__45298.fqn:null);
switch (G__45298__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45299 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45301 = loc;
var G__45302 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45303_45423 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45304_45424 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45305_45425 = true;
var _STAR_print_fn_STAR__temp_val__45306_45426 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45305_45425);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45306_45426);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45281_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45281_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45304_45424);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45303_45423);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45299,G__45300,G__45301,G__45302) : format.call(null,G__45299,G__45300,G__45301,G__45302));

break;
case "macroexpansion":
var G__45308 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45309 = cause_type;
var G__45310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45311 = loc;
var G__45312 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45308,G__45309,G__45310,G__45311,G__45312) : format.call(null,G__45308,G__45309,G__45310,G__45311,G__45312));

break;
case "compile-syntax-check":
var G__45313 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45314 = cause_type;
var G__45315 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45316 = loc;
var G__45317 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45313,G__45314,G__45315,G__45316,G__45317) : format.call(null,G__45313,G__45314,G__45315,G__45316,G__45317));

break;
case "compilation":
var G__45319 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45320 = cause_type;
var G__45321 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45322 = loc;
var G__45323 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45319,G__45320,G__45321,G__45322,G__45323) : format.call(null,G__45319,G__45320,G__45321,G__45322,G__45323));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45324 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45325 = symbol;
var G__45326 = loc;
var G__45327 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45328_45427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45329_45428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45330_45429 = true;
var _STAR_print_fn_STAR__temp_val__45331_45430 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45330_45429);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45331_45430);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45286_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45286_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45329_45428);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45328_45427);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45324,G__45325,G__45326,G__45327) : format.call(null,G__45324,G__45325,G__45326,G__45327));
} else {
var G__45332 = "Execution error%s at %s(%s).\n%s\n";
var G__45333 = cause_type;
var G__45334 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45335 = loc;
var G__45336 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45332,G__45333,G__45334,G__45335,G__45336) : format.call(null,G__45332,G__45333,G__45334,G__45335,G__45336));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45298__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
