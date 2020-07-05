goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45104){
var map__45105 = p__45104;
var map__45105__$1 = (((((!((map__45105 == null))))?(((((map__45105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45105):map__45105);
var m = map__45105__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45105__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45107_45315 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45108_45316 = null;
var count__45109_45317 = (0);
var i__45110_45318 = (0);
while(true){
if((i__45110_45318 < count__45109_45317)){
var f_45319 = chunk__45108_45316.cljs$core$IIndexed$_nth$arity$2(null,i__45110_45318);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45319], 0));


var G__45320 = seq__45107_45315;
var G__45321 = chunk__45108_45316;
var G__45322 = count__45109_45317;
var G__45323 = (i__45110_45318 + (1));
seq__45107_45315 = G__45320;
chunk__45108_45316 = G__45321;
count__45109_45317 = G__45322;
i__45110_45318 = G__45323;
continue;
} else {
var temp__5735__auto___45324 = cljs.core.seq(seq__45107_45315);
if(temp__5735__auto___45324){
var seq__45107_45325__$1 = temp__5735__auto___45324;
if(cljs.core.chunked_seq_QMARK_(seq__45107_45325__$1)){
var c__4609__auto___45326 = cljs.core.chunk_first(seq__45107_45325__$1);
var G__45327 = cljs.core.chunk_rest(seq__45107_45325__$1);
var G__45328 = c__4609__auto___45326;
var G__45329 = cljs.core.count(c__4609__auto___45326);
var G__45330 = (0);
seq__45107_45315 = G__45327;
chunk__45108_45316 = G__45328;
count__45109_45317 = G__45329;
i__45110_45318 = G__45330;
continue;
} else {
var f_45332 = cljs.core.first(seq__45107_45325__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45332], 0));


var G__45333 = cljs.core.next(seq__45107_45325__$1);
var G__45334 = null;
var G__45335 = (0);
var G__45336 = (0);
seq__45107_45315 = G__45333;
chunk__45108_45316 = G__45334;
count__45109_45317 = G__45335;
i__45110_45318 = G__45336;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45337 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45337], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45337)))?cljs.core.second(arglists_45337):arglists_45337)], 0));
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
var seq__45112_45338 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45113_45339 = null;
var count__45114_45340 = (0);
var i__45115_45341 = (0);
while(true){
if((i__45115_45341 < count__45114_45340)){
var vec__45127_45342 = chunk__45113_45339.cljs$core$IIndexed$_nth$arity$2(null,i__45115_45341);
var name_45343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127_45342,(0),null);
var map__45130_45344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127_45342,(1),null);
var map__45130_45345__$1 = (((((!((map__45130_45344 == null))))?(((((map__45130_45344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45130_45344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45130_45344):map__45130_45344);
var doc_45346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130_45345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130_45345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45343], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45347], 0));

if(cljs.core.truth_(doc_45346)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45346], 0));
} else {
}


var G__45348 = seq__45112_45338;
var G__45349 = chunk__45113_45339;
var G__45350 = count__45114_45340;
var G__45351 = (i__45115_45341 + (1));
seq__45112_45338 = G__45348;
chunk__45113_45339 = G__45349;
count__45114_45340 = G__45350;
i__45115_45341 = G__45351;
continue;
} else {
var temp__5735__auto___45352 = cljs.core.seq(seq__45112_45338);
if(temp__5735__auto___45352){
var seq__45112_45353__$1 = temp__5735__auto___45352;
if(cljs.core.chunked_seq_QMARK_(seq__45112_45353__$1)){
var c__4609__auto___45354 = cljs.core.chunk_first(seq__45112_45353__$1);
var G__45355 = cljs.core.chunk_rest(seq__45112_45353__$1);
var G__45356 = c__4609__auto___45354;
var G__45357 = cljs.core.count(c__4609__auto___45354);
var G__45358 = (0);
seq__45112_45338 = G__45355;
chunk__45113_45339 = G__45356;
count__45114_45340 = G__45357;
i__45115_45341 = G__45358;
continue;
} else {
var vec__45132_45359 = cljs.core.first(seq__45112_45353__$1);
var name_45360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45132_45359,(0),null);
var map__45135_45361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45132_45359,(1),null);
var map__45135_45362__$1 = (((((!((map__45135_45361 == null))))?(((((map__45135_45361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45135_45361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45135_45361):map__45135_45361);
var doc_45363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45135_45362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45135_45362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45360], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45364], 0));

if(cljs.core.truth_(doc_45363)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45363], 0));
} else {
}


var G__45365 = cljs.core.next(seq__45112_45353__$1);
var G__45366 = null;
var G__45367 = (0);
var G__45368 = (0);
seq__45112_45338 = G__45365;
chunk__45113_45339 = G__45366;
count__45114_45340 = G__45367;
i__45115_45341 = G__45368;
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

var seq__45141 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45142 = null;
var count__45143 = (0);
var i__45144 = (0);
while(true){
if((i__45144 < count__45143)){
var role = chunk__45142.cljs$core$IIndexed$_nth$arity$2(null,i__45144);
var temp__5735__auto___45369__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45369__$1)){
var spec_45370 = temp__5735__auto___45369__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45370)], 0));
} else {
}


var G__45371 = seq__45141;
var G__45372 = chunk__45142;
var G__45373 = count__45143;
var G__45374 = (i__45144 + (1));
seq__45141 = G__45371;
chunk__45142 = G__45372;
count__45143 = G__45373;
i__45144 = G__45374;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45141);
if(temp__5735__auto____$1){
var seq__45141__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45141__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45141__$1);
var G__45375 = cljs.core.chunk_rest(seq__45141__$1);
var G__45376 = c__4609__auto__;
var G__45377 = cljs.core.count(c__4609__auto__);
var G__45378 = (0);
seq__45141 = G__45375;
chunk__45142 = G__45376;
count__45143 = G__45377;
i__45144 = G__45378;
continue;
} else {
var role = cljs.core.first(seq__45141__$1);
var temp__5735__auto___45383__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45383__$2)){
var spec_45384 = temp__5735__auto___45383__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45384)], 0));
} else {
}


var G__45385 = cljs.core.next(seq__45141__$1);
var G__45386 = null;
var G__45387 = (0);
var G__45388 = (0);
seq__45141 = G__45385;
chunk__45142 = G__45386;
count__45143 = G__45387;
i__45144 = G__45388;
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
var G__45391 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45392 = cljs.core.ex_cause(t);
via = G__45391;
t = G__45392;
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
var map__45169 = datafied_throwable;
var map__45169__$1 = (((((!((map__45169 == null))))?(((((map__45169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45169):map__45169);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45169__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45170 = cljs.core.last(via);
var map__45170__$1 = (((((!((map__45170 == null))))?(((((map__45170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45170):map__45170);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45171 = data;
var map__45171__$1 = (((((!((map__45171 == null))))?(((((map__45171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45171):map__45171);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45172 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45172__$1 = (((((!((map__45172 == null))))?(((((map__45172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45172):map__45172);
var top_data = map__45172__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45172__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45194 = phase;
var G__45194__$1 = (((G__45194 instanceof cljs.core.Keyword))?G__45194.fqn:null);
switch (G__45194__$1) {
case "read-source":
var map__45195 = data;
var map__45195__$1 = (((((!((map__45195 == null))))?(((((map__45195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45195):map__45195);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45195__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45195__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45205 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45205__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45205,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45205);
var G__45205__$2 = (cljs.core.truth_((function (){var fexpr__45208 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45208.cljs$core$IFn$_invoke$arity$1 ? fexpr__45208.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45208.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45205__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45205__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45205__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45205__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45214 = top_data;
var G__45214__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45214,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45214);
var G__45214__$2 = (cljs.core.truth_((function (){var fexpr__45224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45224.cljs$core$IFn$_invoke$arity$1 ? fexpr__45224.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45224.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45214__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45214__$1);
var G__45214__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45214__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45214__$2);
var G__45214__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45214__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45214__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45214__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45214__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45225 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45225,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45225,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45225,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45225,(3),null);
var G__45228 = top_data;
var G__45228__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45228,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45228);
var G__45228__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45228__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45228__$1);
var G__45228__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45228__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45228__$2);
var G__45228__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45228__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45228__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45228__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45228__$4;
}

break;
case "execution":
var vec__45236 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45164_SHARP_){
var or__4185__auto__ = (p1__45164_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45240 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45240.cljs$core$IFn$_invoke$arity$1 ? fexpr__45240.cljs$core$IFn$_invoke$arity$1(p1__45164_SHARP_) : fexpr__45240.call(null,p1__45164_SHARP_));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45194__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45271){
var map__45272 = p__45271;
var map__45272__$1 = (((((!((map__45272 == null))))?(((((map__45272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45272):map__45272);
var triage_data = map__45272__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45275 = phase;
var G__45275__$1 = (((G__45275 instanceof cljs.core.Keyword))?G__45275.fqn:null);
switch (G__45275__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45276 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45278 = loc;
var G__45279 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45280_45398 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45281_45399 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45282_45400 = true;
var _STAR_print_fn_STAR__temp_val__45283_45401 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45282_45400);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45283_45401);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45269_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45269_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45281_45399);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45280_45398);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45276,G__45277,G__45278,G__45279) : format.call(null,G__45276,G__45277,G__45278,G__45279));

break;
case "macroexpansion":
var G__45285 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45286 = cause_type;
var G__45287 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45288 = loc;
var G__45289 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45285,G__45286,G__45287,G__45288,G__45289) : format.call(null,G__45285,G__45286,G__45287,G__45288,G__45289));

break;
case "compile-syntax-check":
var G__45290 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45291 = cause_type;
var G__45292 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45293 = loc;
var G__45294 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45290,G__45291,G__45292,G__45293,G__45294) : format.call(null,G__45290,G__45291,G__45292,G__45293,G__45294));

break;
case "compilation":
var G__45295 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45296 = cause_type;
var G__45297 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45298 = loc;
var G__45299 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45295,G__45296,G__45297,G__45298,G__45299) : format.call(null,G__45295,G__45296,G__45297,G__45298,G__45299));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45300 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45301 = symbol;
var G__45302 = loc;
var G__45303 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45304_45403 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45305_45404 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45306_45405 = true;
var _STAR_print_fn_STAR__temp_val__45307_45406 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45306_45405);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45307_45406);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45270_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45270_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45305_45404);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45304_45403);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45300,G__45301,G__45302,G__45303) : format.call(null,G__45300,G__45301,G__45302,G__45303));
} else {
var G__45309 = "Execution error%s at %s(%s).\n%s\n";
var G__45310 = cause_type;
var G__45311 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45312 = loc;
var G__45313 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45309,G__45310,G__45311,G__45312,G__45313) : format.call(null,G__45309,G__45310,G__45311,G__45312,G__45313));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45275__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
