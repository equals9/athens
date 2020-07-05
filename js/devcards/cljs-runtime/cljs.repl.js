goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45106){
var map__45107 = p__45106;
var map__45107__$1 = (((((!((map__45107 == null))))?(((((map__45107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45107):map__45107);
var m = map__45107__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45107__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45109_45312 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45110_45313 = null;
var count__45111_45314 = (0);
var i__45112_45315 = (0);
while(true){
if((i__45112_45315 < count__45111_45314)){
var f_45316 = chunk__45110_45313.cljs$core$IIndexed$_nth$arity$2(null,i__45112_45315);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45316], 0));


var G__45317 = seq__45109_45312;
var G__45318 = chunk__45110_45313;
var G__45319 = count__45111_45314;
var G__45320 = (i__45112_45315 + (1));
seq__45109_45312 = G__45317;
chunk__45110_45313 = G__45318;
count__45111_45314 = G__45319;
i__45112_45315 = G__45320;
continue;
} else {
var temp__5735__auto___45321 = cljs.core.seq(seq__45109_45312);
if(temp__5735__auto___45321){
var seq__45109_45322__$1 = temp__5735__auto___45321;
if(cljs.core.chunked_seq_QMARK_(seq__45109_45322__$1)){
var c__4609__auto___45324 = cljs.core.chunk_first(seq__45109_45322__$1);
var G__45325 = cljs.core.chunk_rest(seq__45109_45322__$1);
var G__45326 = c__4609__auto___45324;
var G__45327 = cljs.core.count(c__4609__auto___45324);
var G__45328 = (0);
seq__45109_45312 = G__45325;
chunk__45110_45313 = G__45326;
count__45111_45314 = G__45327;
i__45112_45315 = G__45328;
continue;
} else {
var f_45329 = cljs.core.first(seq__45109_45322__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45329], 0));


var G__45330 = cljs.core.next(seq__45109_45322__$1);
var G__45331 = null;
var G__45332 = (0);
var G__45333 = (0);
seq__45109_45312 = G__45330;
chunk__45110_45313 = G__45331;
count__45111_45314 = G__45332;
i__45112_45315 = G__45333;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45334 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45334], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45334)))?cljs.core.second(arglists_45334):arglists_45334)], 0));
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
var seq__45118_45336 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45119_45337 = null;
var count__45120_45338 = (0);
var i__45121_45339 = (0);
while(true){
if((i__45121_45339 < count__45120_45338)){
var vec__45132_45340 = chunk__45119_45337.cljs$core$IIndexed$_nth$arity$2(null,i__45121_45339);
var name_45341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45132_45340,(0),null);
var map__45135_45342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45132_45340,(1),null);
var map__45135_45343__$1 = (((((!((map__45135_45342 == null))))?(((((map__45135_45342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45135_45342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45135_45342):map__45135_45342);
var doc_45344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45135_45343__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45135_45343__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45341], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45345], 0));

if(cljs.core.truth_(doc_45344)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45344], 0));
} else {
}


var G__45347 = seq__45118_45336;
var G__45348 = chunk__45119_45337;
var G__45349 = count__45120_45338;
var G__45350 = (i__45121_45339 + (1));
seq__45118_45336 = G__45347;
chunk__45119_45337 = G__45348;
count__45120_45338 = G__45349;
i__45121_45339 = G__45350;
continue;
} else {
var temp__5735__auto___45351 = cljs.core.seq(seq__45118_45336);
if(temp__5735__auto___45351){
var seq__45118_45352__$1 = temp__5735__auto___45351;
if(cljs.core.chunked_seq_QMARK_(seq__45118_45352__$1)){
var c__4609__auto___45353 = cljs.core.chunk_first(seq__45118_45352__$1);
var G__45354 = cljs.core.chunk_rest(seq__45118_45352__$1);
var G__45355 = c__4609__auto___45353;
var G__45356 = cljs.core.count(c__4609__auto___45353);
var G__45357 = (0);
seq__45118_45336 = G__45354;
chunk__45119_45337 = G__45355;
count__45120_45338 = G__45356;
i__45121_45339 = G__45357;
continue;
} else {
var vec__45137_45358 = cljs.core.first(seq__45118_45352__$1);
var name_45359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45137_45358,(0),null);
var map__45140_45360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45137_45358,(1),null);
var map__45140_45361__$1 = (((((!((map__45140_45360 == null))))?(((((map__45140_45360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45140_45360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45140_45360):map__45140_45360);
var doc_45362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140_45361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140_45361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45359], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45363], 0));

if(cljs.core.truth_(doc_45362)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45362], 0));
} else {
}


var G__45364 = cljs.core.next(seq__45118_45352__$1);
var G__45365 = null;
var G__45366 = (0);
var G__45367 = (0);
seq__45118_45336 = G__45364;
chunk__45119_45337 = G__45365;
count__45120_45338 = G__45366;
i__45121_45339 = G__45367;
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

var seq__45142 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45143 = null;
var count__45144 = (0);
var i__45145 = (0);
while(true){
if((i__45145 < count__45144)){
var role = chunk__45143.cljs$core$IIndexed$_nth$arity$2(null,i__45145);
var temp__5735__auto___45369__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45369__$1)){
var spec_45370 = temp__5735__auto___45369__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45370)], 0));
} else {
}


var G__45371 = seq__45142;
var G__45372 = chunk__45143;
var G__45373 = count__45144;
var G__45374 = (i__45145 + (1));
seq__45142 = G__45371;
chunk__45143 = G__45372;
count__45144 = G__45373;
i__45145 = G__45374;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45142);
if(temp__5735__auto____$1){
var seq__45142__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45142__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45142__$1);
var G__45375 = cljs.core.chunk_rest(seq__45142__$1);
var G__45376 = c__4609__auto__;
var G__45377 = cljs.core.count(c__4609__auto__);
var G__45378 = (0);
seq__45142 = G__45375;
chunk__45143 = G__45376;
count__45144 = G__45377;
i__45145 = G__45378;
continue;
} else {
var role = cljs.core.first(seq__45142__$1);
var temp__5735__auto___45379__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45379__$2)){
var spec_45380 = temp__5735__auto___45379__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45380)], 0));
} else {
}


var G__45381 = cljs.core.next(seq__45142__$1);
var G__45382 = null;
var G__45383 = (0);
var G__45384 = (0);
seq__45142 = G__45381;
chunk__45143 = G__45382;
count__45144 = G__45383;
i__45145 = G__45384;
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
var G__45385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45386 = cljs.core.ex_cause(t);
via = G__45385;
t = G__45386;
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
var map__45186 = datafied_throwable;
var map__45186__$1 = (((((!((map__45186 == null))))?(((((map__45186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45186):map__45186);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45186__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45186__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45186__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45187 = cljs.core.last(via);
var map__45187__$1 = (((((!((map__45187 == null))))?(((((map__45187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45187):map__45187);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45187__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45187__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45187__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45188 = data;
var map__45188__$1 = (((((!((map__45188 == null))))?(((((map__45188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45188):map__45188);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45188__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45189 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45189__$1 = (((((!((map__45189 == null))))?(((((map__45189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45189):map__45189);
var top_data = map__45189__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45218 = phase;
var G__45218__$1 = (((G__45218 instanceof cljs.core.Keyword))?G__45218.fqn:null);
switch (G__45218__$1) {
case "read-source":
var map__45219 = data;
var map__45219__$1 = (((((!((map__45219 == null))))?(((((map__45219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45219):map__45219);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45219__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45219__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45221 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45221__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45221,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45221);
var G__45221__$2 = (cljs.core.truth_((function (){var fexpr__45222 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45222.cljs$core$IFn$_invoke$arity$1 ? fexpr__45222.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45222.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45221__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45221__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45221__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45221__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45223 = top_data;
var G__45223__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45223);
var G__45223__$2 = (cljs.core.truth_((function (){var fexpr__45224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45224.cljs$core$IFn$_invoke$arity$1 ? fexpr__45224.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45224.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45223__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45223__$1);
var G__45223__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45223__$2);
var G__45223__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45223__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45223__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45229 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45229,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45229,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45229,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45229,(3),null);
var G__45235 = top_data;
var G__45235__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45235,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45235);
var G__45235__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45235__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45235__$1);
var G__45235__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45235__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45235__$2);
var G__45235__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45235__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45235__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45235__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45235__$4;
}

break;
case "execution":
var vec__45236 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45236,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45185_SHARP_){
var or__4185__auto__ = (p1__45185_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45247 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45247.cljs$core$IFn$_invoke$arity$1 ? fexpr__45247.cljs$core$IFn$_invoke$arity$1(p1__45185_SHARP_) : fexpr__45247.call(null,p1__45185_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45254 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45254__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45254);
var G__45254__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45254__$1);
var G__45254__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45254__$2);
var G__45254__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45254__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45254__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45218__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45266){
var map__45267 = p__45266;
var map__45267__$1 = (((((!((map__45267 == null))))?(((((map__45267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45267):map__45267);
var triage_data = map__45267__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45273 = phase;
var G__45273__$1 = (((G__45273 instanceof cljs.core.Keyword))?G__45273.fqn:null);
switch (G__45273__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45274 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45275 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45276 = loc;
var G__45277 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45278_45397 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45279_45398 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45280_45399 = true;
var _STAR_print_fn_STAR__temp_val__45281_45400 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45280_45399);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45281_45400);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45264_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45264_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45279_45398);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45278_45397);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45274,G__45275,G__45276,G__45277) : format.call(null,G__45274,G__45275,G__45276,G__45277));

break;
case "macroexpansion":
var G__45283 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45284 = cause_type;
var G__45285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45286 = loc;
var G__45287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45283,G__45284,G__45285,G__45286,G__45287) : format.call(null,G__45283,G__45284,G__45285,G__45286,G__45287));

break;
case "compile-syntax-check":
var G__45288 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45289 = cause_type;
var G__45290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45291 = loc;
var G__45292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45288,G__45289,G__45290,G__45291,G__45292) : format.call(null,G__45288,G__45289,G__45290,G__45291,G__45292));

break;
case "compilation":
var G__45293 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45294 = cause_type;
var G__45295 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45296 = loc;
var G__45297 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45293,G__45294,G__45295,G__45296,G__45297) : format.call(null,G__45293,G__45294,G__45295,G__45296,G__45297));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45298 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45299 = symbol;
var G__45300 = loc;
var G__45301 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45302_45401 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45303_45402 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45304_45403 = true;
var _STAR_print_fn_STAR__temp_val__45305_45404 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45304_45403);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45305_45404);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45265_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45265_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45303_45402);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45302_45401);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45298,G__45299,G__45300,G__45301) : format.call(null,G__45298,G__45299,G__45300,G__45301));
} else {
var G__45307 = "Execution error%s at %s(%s).\n%s\n";
var G__45308 = cause_type;
var G__45309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45310 = loc;
var G__45311 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45307,G__45308,G__45309,G__45310,G__45311) : format.call(null,G__45307,G__45308,G__45309,G__45310,G__45311));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45273__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
