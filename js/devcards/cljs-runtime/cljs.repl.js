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
var seq__45104_45311 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45105_45312 = null;
var count__45106_45313 = (0);
var i__45107_45314 = (0);
while(true){
if((i__45107_45314 < count__45106_45313)){
var f_45315 = chunk__45105_45312.cljs$core$IIndexed$_nth$arity$2(null,i__45107_45314);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45315], 0));


var G__45316 = seq__45104_45311;
var G__45317 = chunk__45105_45312;
var G__45318 = count__45106_45313;
var G__45319 = (i__45107_45314 + (1));
seq__45104_45311 = G__45316;
chunk__45105_45312 = G__45317;
count__45106_45313 = G__45318;
i__45107_45314 = G__45319;
continue;
} else {
var temp__5735__auto___45321 = cljs.core.seq(seq__45104_45311);
if(temp__5735__auto___45321){
var seq__45104_45322__$1 = temp__5735__auto___45321;
if(cljs.core.chunked_seq_QMARK_(seq__45104_45322__$1)){
var c__4609__auto___45323 = cljs.core.chunk_first(seq__45104_45322__$1);
var G__45324 = cljs.core.chunk_rest(seq__45104_45322__$1);
var G__45325 = c__4609__auto___45323;
var G__45326 = cljs.core.count(c__4609__auto___45323);
var G__45327 = (0);
seq__45104_45311 = G__45324;
chunk__45105_45312 = G__45325;
count__45106_45313 = G__45326;
i__45107_45314 = G__45327;
continue;
} else {
var f_45328 = cljs.core.first(seq__45104_45322__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45328], 0));


var G__45329 = cljs.core.next(seq__45104_45322__$1);
var G__45330 = null;
var G__45331 = (0);
var G__45332 = (0);
seq__45104_45311 = G__45329;
chunk__45105_45312 = G__45330;
count__45106_45313 = G__45331;
i__45107_45314 = G__45332;
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
var seq__45109_45334 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45110_45335 = null;
var count__45111_45336 = (0);
var i__45112_45337 = (0);
while(true){
if((i__45112_45337 < count__45111_45336)){
var vec__45128_45338 = chunk__45110_45335.cljs$core$IIndexed$_nth$arity$2(null,i__45112_45337);
var name_45339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45128_45338,(0),null);
var map__45131_45340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45128_45338,(1),null);
var map__45131_45341__$1 = (((((!((map__45131_45340 == null))))?(((((map__45131_45340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45131_45340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45131_45340):map__45131_45340);
var doc_45342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131_45341__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131_45341__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45339], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45343], 0));

if(cljs.core.truth_(doc_45342)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45342], 0));
} else {
}


var G__45344 = seq__45109_45334;
var G__45345 = chunk__45110_45335;
var G__45346 = count__45111_45336;
var G__45347 = (i__45112_45337 + (1));
seq__45109_45334 = G__45344;
chunk__45110_45335 = G__45345;
count__45111_45336 = G__45346;
i__45112_45337 = G__45347;
continue;
} else {
var temp__5735__auto___45348 = cljs.core.seq(seq__45109_45334);
if(temp__5735__auto___45348){
var seq__45109_45349__$1 = temp__5735__auto___45348;
if(cljs.core.chunked_seq_QMARK_(seq__45109_45349__$1)){
var c__4609__auto___45350 = cljs.core.chunk_first(seq__45109_45349__$1);
var G__45351 = cljs.core.chunk_rest(seq__45109_45349__$1);
var G__45352 = c__4609__auto___45350;
var G__45353 = cljs.core.count(c__4609__auto___45350);
var G__45354 = (0);
seq__45109_45334 = G__45351;
chunk__45110_45335 = G__45352;
count__45111_45336 = G__45353;
i__45112_45337 = G__45354;
continue;
} else {
var vec__45133_45355 = cljs.core.first(seq__45109_45349__$1);
var name_45356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45133_45355,(0),null);
var map__45136_45357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45133_45355,(1),null);
var map__45136_45358__$1 = (((((!((map__45136_45357 == null))))?(((((map__45136_45357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45136_45357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45136_45357):map__45136_45357);
var doc_45359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45136_45358__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45136_45358__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45356], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45360], 0));

if(cljs.core.truth_(doc_45359)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45359], 0));
} else {
}


var G__45361 = cljs.core.next(seq__45109_45349__$1);
var G__45362 = null;
var G__45363 = (0);
var G__45364 = (0);
seq__45109_45334 = G__45361;
chunk__45110_45335 = G__45362;
count__45111_45336 = G__45363;
i__45112_45337 = G__45364;
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

var seq__45146 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45147 = null;
var count__45148 = (0);
var i__45149 = (0);
while(true){
if((i__45149 < count__45148)){
var role = chunk__45147.cljs$core$IIndexed$_nth$arity$2(null,i__45149);
var temp__5735__auto___45365__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45365__$1)){
var spec_45366 = temp__5735__auto___45365__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45366)], 0));
} else {
}


var G__45367 = seq__45146;
var G__45368 = chunk__45147;
var G__45369 = count__45148;
var G__45370 = (i__45149 + (1));
seq__45146 = G__45367;
chunk__45147 = G__45368;
count__45148 = G__45369;
i__45149 = G__45370;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45146);
if(temp__5735__auto____$1){
var seq__45146__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45146__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45146__$1);
var G__45375 = cljs.core.chunk_rest(seq__45146__$1);
var G__45376 = c__4609__auto__;
var G__45377 = cljs.core.count(c__4609__auto__);
var G__45378 = (0);
seq__45146 = G__45375;
chunk__45147 = G__45376;
count__45148 = G__45377;
i__45149 = G__45378;
continue;
} else {
var role = cljs.core.first(seq__45146__$1);
var temp__5735__auto___45379__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45379__$2)){
var spec_45380 = temp__5735__auto___45379__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45380)], 0));
} else {
}


var G__45381 = cljs.core.next(seq__45146__$1);
var G__45382 = null;
var G__45383 = (0);
var G__45384 = (0);
seq__45146 = G__45381;
chunk__45147 = G__45382;
count__45148 = G__45383;
i__45149 = G__45384;
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
var G__45389 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45390 = cljs.core.ex_cause(t);
via = G__45389;
t = G__45390;
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
var map__45213 = datafied_throwable;
var map__45213__$1 = (((((!((map__45213 == null))))?(((((map__45213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45213):map__45213);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45213__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45213__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45213__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45214 = cljs.core.last(via);
var map__45214__$1 = (((((!((map__45214 == null))))?(((((map__45214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45214):map__45214);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45214__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45214__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45214__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45215 = data;
var map__45215__$1 = (((((!((map__45215 == null))))?(((((map__45215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45215):map__45215);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45216 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45216__$1 = (((((!((map__45216 == null))))?(((((map__45216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45216):map__45216);
var top_data = map__45216__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45216__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45235 = phase;
var G__45235__$1 = (((G__45235 instanceof cljs.core.Keyword))?G__45235.fqn:null);
switch (G__45235__$1) {
case "read-source":
var map__45240 = data;
var map__45240__$1 = (((((!((map__45240 == null))))?(((((map__45240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45240):map__45240);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45240__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45240__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45246 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45246__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45246);
var G__45246__$2 = (cljs.core.truth_((function (){var fexpr__45247 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45247.cljs$core$IFn$_invoke$arity$1 ? fexpr__45247.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45247.call(null,source));
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
var G__45248 = top_data;
var G__45248__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45248);
var G__45248__$2 = (cljs.core.truth_((function (){var fexpr__45253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45253.cljs$core$IFn$_invoke$arity$1 ? fexpr__45253.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45253.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45248__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45248__$1);
var G__45248__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45248__$2);
var G__45248__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45248__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45248__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45254 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(3),null);
var G__45257 = top_data;
var G__45257__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45257);
var G__45257__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45257__$1);
var G__45257__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45257__$2);
var G__45257__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45257__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45257__$4;
}

break;
case "execution":
var vec__45258 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45205_SHARP_){
var or__4185__auto__ = (p1__45205_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45263.cljs$core$IFn$_invoke$arity$1 ? fexpr__45263.cljs$core$IFn$_invoke$arity$1(p1__45205_SHARP_) : fexpr__45263.call(null,p1__45205_SHARP_));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45235__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45268){
var map__45269 = p__45268;
var map__45269__$1 = (((((!((map__45269 == null))))?(((((map__45269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45269):map__45269);
var triage_data = map__45269__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45271 = phase;
var G__45271__$1 = (((G__45271 instanceof cljs.core.Keyword))?G__45271.fqn:null);
switch (G__45271__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45272 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45273 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45274 = loc;
var G__45275 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45277_45394 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45278_45395 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45279_45396 = true;
var _STAR_print_fn_STAR__temp_val__45280_45397 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45279_45396);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45280_45397);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45266_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45266_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45278_45395);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45277_45394);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45272,G__45273,G__45274,G__45275) : format.call(null,G__45272,G__45273,G__45274,G__45275));

break;
case "macroexpansion":
var G__45281 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45282 = cause_type;
var G__45283 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45284 = loc;
var G__45285 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45281,G__45282,G__45283,G__45284,G__45285) : format.call(null,G__45281,G__45282,G__45283,G__45284,G__45285));

break;
case "compile-syntax-check":
var G__45286 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45287 = cause_type;
var G__45288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45289 = loc;
var G__45290 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45286,G__45287,G__45288,G__45289,G__45290) : format.call(null,G__45286,G__45287,G__45288,G__45289,G__45290));

break;
case "compilation":
var G__45291 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45292 = cause_type;
var G__45293 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45294 = loc;
var G__45295 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45291,G__45292,G__45293,G__45294,G__45295) : format.call(null,G__45291,G__45292,G__45293,G__45294,G__45295));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45297 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45298 = symbol;
var G__45299 = loc;
var G__45300 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45301_45399 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45302_45400 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45303_45401 = true;
var _STAR_print_fn_STAR__temp_val__45304_45402 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45303_45401);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45304_45402);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45267_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45267_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45302_45400);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45301_45399);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45297,G__45298,G__45299,G__45300) : format.call(null,G__45297,G__45298,G__45299,G__45300));
} else {
var G__45305 = "Execution error%s at %s(%s).\n%s\n";
var G__45306 = cause_type;
var G__45307 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45308 = loc;
var G__45309 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45305,G__45306,G__45307,G__45308,G__45309) : format.call(null,G__45305,G__45306,G__45307,G__45308,G__45309));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45271__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
