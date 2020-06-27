goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__67508 = xs;
args__$2 = G__67508;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__67509 = xs;
args__$2 = G__67509;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67510 = arguments.length;
var i__4790__auto___67511 = (0);
while(true){
if((i__4790__auto___67511 < len__4789__auto___67510)){
args__4795__auto__.push((arguments[i__4790__auto___67511]));

var G__67512 = (i__4790__auto___67511 + (1));
i__4790__auto___67511 = G__67512;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__67513 = ctx__$2;
var G__67514 = rest_let_bindings;
ctx__$1 = G__67513;
let_bindings__$1 = G__67514;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__67515 = nexprs;
exprs__$1 = G__67515;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq66727){
var G__66728 = cljs.core.first(seq66727);
var seq66727__$1 = cljs.core.next(seq66727);
var G__66729 = cljs.core.first(seq66727__$1);
var seq66727__$2 = cljs.core.next(seq66727__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66728,G__66729,seq66727__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__66733){
var vec__66734 = p__66733;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66734,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66734,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66734,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66734,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((function (){var G__66737 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__66738 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__66737,G__66738) : sci.impl.utils.kw_identical_QMARK_.call(null,G__66737,G__66738));
})())?(function (){var G__66739 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__66739,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__66739;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__66740 = libspec;
var seq__66741 = cljs.core.seq(vec__66740);
var first__66742 = cljs.core.first(seq__66741);
var seq__66741__$1 = cljs.core.next(seq__66741);
var lib_name = first__66742;
var opts = seq__66741__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__66746 = opts;
var vec__66747 = G__66746;
var seq__66748 = cljs.core.seq(vec__66747);
var first__66749 = cljs.core.first(seq__66748);
var seq__66748__$1 = cljs.core.next(seq__66748);
var opt_name = first__66749;
var first__66749__$1 = cljs.core.first(seq__66748__$1);
var seq__66748__$2 = cljs.core.next(seq__66748__$1);
var fst_opt = first__66749__$1;
var rst_opts = seq__66748__$2;
var ret__$1 = ret;
var G__66746__$1 = G__66746;
while(true){
var ret__$2 = ret__$1;
var vec__66754 = G__66746__$1;
var seq__66755 = cljs.core.seq(vec__66754);
var first__66756 = cljs.core.first(seq__66755);
var seq__66755__$1 = cljs.core.next(seq__66755);
var opt_name__$1 = first__66756;
var first__66756__$1 = cljs.core.first(seq__66755__$1);
var seq__66755__$2 = cljs.core.next(seq__66755__$1);
var fst_opt__$1 = first__66756__$1;
var rst_opts__$1 = seq__66755__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__66757 = opt_name__$1;
var G__66757__$1 = (((G__66757 instanceof cljs.core.Keyword))?G__66757.fqn:null);
switch (G__66757__$1) {
case "as":
var G__67517 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__67518 = rst_opts__$1;
ret__$1 = G__67517;
G__66746__$1 = G__67518;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__67519 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__67520 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__67519;
G__66746__$1 = G__67520;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__67521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__67522 = rst_opts__$1;
ret__$1 = G__67521;
G__66746__$1 = G__67522;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66757__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__66761){
var vec__66763 = p__66761;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66763,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__66768){
var map__66769 = p__66768;
var map__66769__$1 = (((((!((map__66769 == null))))?(((((map__66769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66769):map__66769);
var _parsed_libspec = map__66769__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66769__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66769__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66769__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66769__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66769__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__66776 = new cljs.core.Keyword(null,"all","all",892129742);
var G__66777 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__66776,G__66777) : sci.impl.utils.kw_identical_QMARK_.call(null,G__66776,G__66777));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66780 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66780,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__66784 = sci.impl.interpreter.parse_libspec(libspec);
var map__66784__$1 = (((((!((map__66784 == null))))?(((((map__66784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66784):map__66784);
var parsed_libspec = map__66784__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66784__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66784__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__66786 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__66786) : load_fn.call(null,G__66786));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__66787 = temp__5733__auto____$2;
var map__66787__$1 = (((((!((map__66787 == null))))?(((((map__66787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66787):map__66787);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66787__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__66790_67523 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__66791_67524 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__66790_67523,G__66791_67524) : sci.impl.interpreter.eval_string_STAR_.call(null,G__66790_67523,G__66791_67524));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e66789){if((e66789 instanceof Error)){
var e_67525 = e66789;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_67525;
} else {
throw e66789;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67526 = arguments.length;
var i__4790__auto___67527 = (0);
while(true){
if((i__4790__auto___67527 < len__4789__auto___67526)){
args__4795__auto__.push((arguments[i__4790__auto___67527]));

var G__67528 = (i__4790__auto___67527 + (1));
i__4790__auto___67527 = G__67528;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__66800 = ctx;
var G__66801 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66800,G__66801) : sci.impl.interpreter.interpret.call(null,G__66800,G__66801));
})();
if((ret instanceof cljs.core.Symbol)){
var G__67529 = (function (){var G__66802 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66802,current_libspec);
} else {
return G__66802;
}
})();
var G__67530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__67531 = cljs.core.next(args__$1);
libspecs = G__67529;
current_libspec = G__67530;
args__$1 = G__67531;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__67532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__67533 = null;
var G__67534 = cljs.core.next(args__$1);
libspecs = G__67532;
current_libspec = G__67533;
args__$1 = G__67534;
continue;
} else {
var G__67535 = (function (){var G__66803 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66803,current_libspec);
} else {
return G__66803;
}
})();
var G__67536 = ret;
var G__67537 = cljs.core.next(args__$1);
libspecs = G__67535;
current_libspec = G__67536;
args__$1 = G__67537;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__66806 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66806,current_libspec);
} else {
return G__66806;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__66792_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__66792_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq66793){
var G__66794 = cljs.core.first(seq66793);
var seq66793__$1 = cljs.core.next(seq66793);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66794,seq66793__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67538 = arguments.length;
var i__4790__auto___67539 = (0);
while(true){
if((i__4790__auto___67539 < len__4789__auto___67538)){
args__4795__auto__.push((arguments[i__4790__auto___67539]));

var G__67540 = (i__4790__auto___67539 + (1));
i__4790__auto___67539 = G__67540;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq66808){
var G__66809 = cljs.core.first(seq66808);
var seq66808__$1 = cljs.core.next(seq66808);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66809,seq66808__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__66814){
var vec__66815 = p__66814;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66815,(0),null);
var map__66818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66815,(1),null);
var map__66818__$1 = (((((!((map__66818 == null))))?(((((map__66818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66818):map__66818);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66818__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66818__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66818__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66820 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66820,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66820,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__66823 = ctx;
var G__66824 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66823,G__66824) : sci.impl.interpreter.interpret.call(null,G__66823,G__66824));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__66825 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__66825__$1 = (((((!((map__66825 == null))))?(((((map__66825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66825):map__66825);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66825__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66825__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66825__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__66833 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__66834 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__66834);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__66833);
}}catch (e66827){if((e66827 instanceof Error)){
var e = e66827;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__66828 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__66829 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66828,G__66829) : sci.impl.interpreter.interpret.call(null,G__66828,G__66829));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66830 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66830,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66830,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e66827;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__66835){
var vec__66836 = p__66835;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66836,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66836,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66839_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66839_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66839_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__66841){
var vec__66842 = p__66841;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66842,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66842,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66842,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66840_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66840_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66840_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__66847,p__66848){
var map__66849 = p__66847;
var map__66849__$1 = (((((!((map__66849 == null))))?(((((map__66849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66849):map__66849);
var ctx = map__66849__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66849__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__66850 = p__66848;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66850,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66850,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66850,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66850,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66846_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66846_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66846_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__66854){
var vec__66855 = p__66854;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66855,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66855,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__66859){
var vec__66860 = p__66859;
var seq__66861 = cljs.core.seq(vec__66860);
var first__66862 = cljs.core.first(seq__66861);
var seq__66861__$1 = cljs.core.next(seq__66861);
var _ = first__66862;
var first__66862__$1 = cljs.core.first(seq__66861__$1);
var seq__66861__$2 = cljs.core.next(seq__66861__$1);
var ns_sym = first__66862__$1;
var exprs = seq__66861__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__66863 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66863,(1),null);
var G__66866_67541 = k;
var G__66866_67542__$1 = (((G__66866_67541 instanceof cljs.core.Keyword))?G__66866_67541.fqn:null);
switch (G__66866_67542__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__66866_67541,G__66866_67542__$1,vec__66863,k,v,ns_sym__$1,vec__66860,seq__66861,first__66862,seq__66861__$1,_,first__66862__$1,seq__66861__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__66866_67541,G__66866_67542__$1,vec__66863,k,v,ns_sym__$1,vec__66860,seq__66861,first__66862,seq__66861__$1,_,first__66862__$1,seq__66861__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66866_67542__$1)].join('')));

}

var G__67544 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__67544;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__66874){
var vec__66875 = p__66874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66875,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66875,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66875,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__66882 = exprs;
var vec__66883 = G__66882;
var seq__66884 = cljs.core.seq(vec__66883);
var first__66885 = cljs.core.first(seq__66884);
var seq__66884__$1 = cljs.core.next(seq__66884);
var expr = first__66885;
var exprs__$1 = seq__66884__$1;
var G__66882__$1 = G__66882;
while(true){
var vec__66886 = G__66882__$1;
var seq__66887 = cljs.core.seq(vec__66886);
var first__66888 = cljs.core.first(seq__66887);
var seq__66887__$1 = cljs.core.next(seq__66887);
var expr__$1 = first__66888;
var exprs__$2 = seq__66887__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e66889){if((e66889 instanceof Error)){
var e = e66889;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e66889;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__67545 = exprs__$3;
G__66882__$1 = G__67545;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__67085 = cljs.core.count(args);
switch (G__67085) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg66895 = (function (){var G__67086 = ctx;
var G__67087 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67086,G__67087) : sci.impl.interpreter.interpret.call(null,G__67086,G__67087));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg66895) : f.call(null,arg66895));

break;
case (2):
var arg66896 = (function (){var G__67088 = ctx;
var G__67089 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67088,G__67089) : sci.impl.interpreter.interpret.call(null,G__67088,G__67089));
})();
var args__$1 = cljs.core.rest(args);
var arg66897 = (function (){var G__67090 = ctx;
var G__67091 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67090,G__67091) : sci.impl.interpreter.interpret.call(null,G__67090,G__67091));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg66896,arg66897) : f.call(null,arg66896,arg66897));

break;
case (3):
var arg66898 = (function (){var G__67092 = ctx;
var G__67093 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67092,G__67093) : sci.impl.interpreter.interpret.call(null,G__67092,G__67093));
})();
var args__$1 = cljs.core.rest(args);
var arg66899 = (function (){var G__67098 = ctx;
var G__67099 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67098,G__67099) : sci.impl.interpreter.interpret.call(null,G__67098,G__67099));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66900 = (function (){var G__67100 = ctx;
var G__67101 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67100,G__67101) : sci.impl.interpreter.interpret.call(null,G__67100,G__67101));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg66898,arg66899,arg66900) : f.call(null,arg66898,arg66899,arg66900));

break;
case (4):
var arg66901 = (function (){var G__67106 = ctx;
var G__67107 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67106,G__67107) : sci.impl.interpreter.interpret.call(null,G__67106,G__67107));
})();
var args__$1 = cljs.core.rest(args);
var arg66902 = (function (){var G__67108 = ctx;
var G__67109 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67108,G__67109) : sci.impl.interpreter.interpret.call(null,G__67108,G__67109));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66903 = (function (){var G__67110 = ctx;
var G__67111 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67110,G__67111) : sci.impl.interpreter.interpret.call(null,G__67110,G__67111));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66904 = (function (){var G__67116 = ctx;
var G__67117 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67116,G__67117) : sci.impl.interpreter.interpret.call(null,G__67116,G__67117));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg66901,arg66902,arg66903,arg66904) : f.call(null,arg66901,arg66902,arg66903,arg66904));

break;
case (5):
var arg66905 = (function (){var G__67118 = ctx;
var G__67119 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67118,G__67119) : sci.impl.interpreter.interpret.call(null,G__67118,G__67119));
})();
var args__$1 = cljs.core.rest(args);
var arg66906 = (function (){var G__67120 = ctx;
var G__67121 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67120,G__67121) : sci.impl.interpreter.interpret.call(null,G__67120,G__67121));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66907 = (function (){var G__67123 = ctx;
var G__67124 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67123,G__67124) : sci.impl.interpreter.interpret.call(null,G__67123,G__67124));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66908 = (function (){var G__67127 = ctx;
var G__67128 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67127,G__67128) : sci.impl.interpreter.interpret.call(null,G__67127,G__67128));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66909 = (function (){var G__67129 = ctx;
var G__67130 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67129,G__67130) : sci.impl.interpreter.interpret.call(null,G__67129,G__67130));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg66905,arg66906,arg66907,arg66908,arg66909) : f.call(null,arg66905,arg66906,arg66907,arg66908,arg66909));

break;
case (6):
var arg66910 = (function (){var G__67131 = ctx;
var G__67132 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67131,G__67132) : sci.impl.interpreter.interpret.call(null,G__67131,G__67132));
})();
var args__$1 = cljs.core.rest(args);
var arg66911 = (function (){var G__67133 = ctx;
var G__67134 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67133,G__67134) : sci.impl.interpreter.interpret.call(null,G__67133,G__67134));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66912 = (function (){var G__67135 = ctx;
var G__67136 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67135,G__67136) : sci.impl.interpreter.interpret.call(null,G__67135,G__67136));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66913 = (function (){var G__67137 = ctx;
var G__67138 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67137,G__67138) : sci.impl.interpreter.interpret.call(null,G__67137,G__67138));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66914 = (function (){var G__67139 = ctx;
var G__67140 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67139,G__67140) : sci.impl.interpreter.interpret.call(null,G__67139,G__67140));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66915 = (function (){var G__67141 = ctx;
var G__67142 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67141,G__67142) : sci.impl.interpreter.interpret.call(null,G__67141,G__67142));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg66910,arg66911,arg66912,arg66913,arg66914,arg66915) : f.call(null,arg66910,arg66911,arg66912,arg66913,arg66914,arg66915));

break;
case (7):
var arg66916 = (function (){var G__67143 = ctx;
var G__67144 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67143,G__67144) : sci.impl.interpreter.interpret.call(null,G__67143,G__67144));
})();
var args__$1 = cljs.core.rest(args);
var arg66917 = (function (){var G__67145 = ctx;
var G__67146 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67145,G__67146) : sci.impl.interpreter.interpret.call(null,G__67145,G__67146));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66918 = (function (){var G__67147 = ctx;
var G__67148 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67147,G__67148) : sci.impl.interpreter.interpret.call(null,G__67147,G__67148));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66919 = (function (){var G__67149 = ctx;
var G__67150 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67149,G__67150) : sci.impl.interpreter.interpret.call(null,G__67149,G__67150));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66920 = (function (){var G__67151 = ctx;
var G__67152 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67151,G__67152) : sci.impl.interpreter.interpret.call(null,G__67151,G__67152));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66921 = (function (){var G__67153 = ctx;
var G__67154 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67153,G__67154) : sci.impl.interpreter.interpret.call(null,G__67153,G__67154));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg66922 = (function (){var G__67155 = ctx;
var G__67156 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67155,G__67156) : sci.impl.interpreter.interpret.call(null,G__67155,G__67156));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg66916,arg66917,arg66918,arg66919,arg66920,arg66921,arg66922) : f.call(null,arg66916,arg66917,arg66918,arg66919,arg66920,arg66921,arg66922));

break;
case (8):
var arg66923 = (function (){var G__67157 = ctx;
var G__67158 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67157,G__67158) : sci.impl.interpreter.interpret.call(null,G__67157,G__67158));
})();
var args__$1 = cljs.core.rest(args);
var arg66924 = (function (){var G__67159 = ctx;
var G__67160 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67159,G__67160) : sci.impl.interpreter.interpret.call(null,G__67159,G__67160));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66925 = (function (){var G__67161 = ctx;
var G__67162 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67161,G__67162) : sci.impl.interpreter.interpret.call(null,G__67161,G__67162));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66926 = (function (){var G__67163 = ctx;
var G__67164 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67163,G__67164) : sci.impl.interpreter.interpret.call(null,G__67163,G__67164));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66927 = (function (){var G__67165 = ctx;
var G__67166 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67165,G__67166) : sci.impl.interpreter.interpret.call(null,G__67165,G__67166));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66928 = (function (){var G__67167 = ctx;
var G__67168 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67167,G__67168) : sci.impl.interpreter.interpret.call(null,G__67167,G__67168));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg66929 = (function (){var G__67169 = ctx;
var G__67170 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67169,G__67170) : sci.impl.interpreter.interpret.call(null,G__67169,G__67170));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg66930 = (function (){var G__67171 = ctx;
var G__67172 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67171,G__67172) : sci.impl.interpreter.interpret.call(null,G__67171,G__67172));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg66923,arg66924,arg66925,arg66926,arg66927,arg66928,arg66929,arg66930) : f.call(null,arg66923,arg66924,arg66925,arg66926,arg66927,arg66928,arg66929,arg66930));

break;
case (9):
var arg66931 = (function (){var G__67173 = ctx;
var G__67174 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67173,G__67174) : sci.impl.interpreter.interpret.call(null,G__67173,G__67174));
})();
var args__$1 = cljs.core.rest(args);
var arg66932 = (function (){var G__67175 = ctx;
var G__67176 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67175,G__67176) : sci.impl.interpreter.interpret.call(null,G__67175,G__67176));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66933 = (function (){var G__67177 = ctx;
var G__67178 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67177,G__67178) : sci.impl.interpreter.interpret.call(null,G__67177,G__67178));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66934 = (function (){var G__67179 = ctx;
var G__67180 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67179,G__67180) : sci.impl.interpreter.interpret.call(null,G__67179,G__67180));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66935 = (function (){var G__67181 = ctx;
var G__67182 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67181,G__67182) : sci.impl.interpreter.interpret.call(null,G__67181,G__67182));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66936 = (function (){var G__67183 = ctx;
var G__67184 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67183,G__67184) : sci.impl.interpreter.interpret.call(null,G__67183,G__67184));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg66937 = (function (){var G__67185 = ctx;
var G__67186 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67185,G__67186) : sci.impl.interpreter.interpret.call(null,G__67185,G__67186));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg66938 = (function (){var G__67187 = ctx;
var G__67188 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67187,G__67188) : sci.impl.interpreter.interpret.call(null,G__67187,G__67188));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg66939 = (function (){var G__67189 = ctx;
var G__67190 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67189,G__67190) : sci.impl.interpreter.interpret.call(null,G__67189,G__67190));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg66931,arg66932,arg66933,arg66934,arg66935,arg66936,arg66937,arg66938,arg66939) : f.call(null,arg66931,arg66932,arg66933,arg66934,arg66935,arg66936,arg66937,arg66938,arg66939));

break;
case (10):
var arg66940 = (function (){var G__67191 = ctx;
var G__67192 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67191,G__67192) : sci.impl.interpreter.interpret.call(null,G__67191,G__67192));
})();
var args__$1 = cljs.core.rest(args);
var arg66941 = (function (){var G__67193 = ctx;
var G__67194 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67193,G__67194) : sci.impl.interpreter.interpret.call(null,G__67193,G__67194));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66942 = (function (){var G__67195 = ctx;
var G__67196 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67195,G__67196) : sci.impl.interpreter.interpret.call(null,G__67195,G__67196));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66943 = (function (){var G__67197 = ctx;
var G__67198 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67197,G__67198) : sci.impl.interpreter.interpret.call(null,G__67197,G__67198));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66944 = (function (){var G__67199 = ctx;
var G__67200 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67199,G__67200) : sci.impl.interpreter.interpret.call(null,G__67199,G__67200));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66945 = (function (){var G__67201 = ctx;
var G__67202 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67201,G__67202) : sci.impl.interpreter.interpret.call(null,G__67201,G__67202));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg66946 = (function (){var G__67203 = ctx;
var G__67204 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67203,G__67204) : sci.impl.interpreter.interpret.call(null,G__67203,G__67204));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg66947 = (function (){var G__67205 = ctx;
var G__67206 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67205,G__67206) : sci.impl.interpreter.interpret.call(null,G__67205,G__67206));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg66948 = (function (){var G__67207 = ctx;
var G__67208 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67207,G__67208) : sci.impl.interpreter.interpret.call(null,G__67207,G__67208));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg66949 = (function (){var G__67209 = ctx;
var G__67210 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67209,G__67210) : sci.impl.interpreter.interpret.call(null,G__67209,G__67210));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg66940,arg66941,arg66942,arg66943,arg66944,arg66945,arg66946,arg66947,arg66948,arg66949) : f.call(null,arg66940,arg66941,arg66942,arg66943,arg66944,arg66945,arg66946,arg66947,arg66948,arg66949));

break;
case (11):
var arg66950 = (function (){var G__67211 = ctx;
var G__67212 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67211,G__67212) : sci.impl.interpreter.interpret.call(null,G__67211,G__67212));
})();
var args__$1 = cljs.core.rest(args);
var arg66951 = (function (){var G__67213 = ctx;
var G__67214 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67213,G__67214) : sci.impl.interpreter.interpret.call(null,G__67213,G__67214));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66952 = (function (){var G__67215 = ctx;
var G__67216 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67215,G__67216) : sci.impl.interpreter.interpret.call(null,G__67215,G__67216));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66953 = (function (){var G__67217 = ctx;
var G__67218 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67217,G__67218) : sci.impl.interpreter.interpret.call(null,G__67217,G__67218));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66954 = (function (){var G__67219 = ctx;
var G__67220 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67219,G__67220) : sci.impl.interpreter.interpret.call(null,G__67219,G__67220));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66955 = (function (){var G__67221 = ctx;
var G__67222 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67221,G__67222) : sci.impl.interpreter.interpret.call(null,G__67221,G__67222));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg66956 = (function (){var G__67223 = ctx;
var G__67224 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67223,G__67224) : sci.impl.interpreter.interpret.call(null,G__67223,G__67224));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg66957 = (function (){var G__67225 = ctx;
var G__67226 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67225,G__67226) : sci.impl.interpreter.interpret.call(null,G__67225,G__67226));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg66958 = (function (){var G__67227 = ctx;
var G__67228 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67227,G__67228) : sci.impl.interpreter.interpret.call(null,G__67227,G__67228));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg66959 = (function (){var G__67229 = ctx;
var G__67230 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67229,G__67230) : sci.impl.interpreter.interpret.call(null,G__67229,G__67230));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg66960 = (function (){var G__67231 = ctx;
var G__67232 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67231,G__67232) : sci.impl.interpreter.interpret.call(null,G__67231,G__67232));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg66950,arg66951,arg66952,arg66953,arg66954,arg66955,arg66956,arg66957,arg66958,arg66959,arg66960) : f.call(null,arg66950,arg66951,arg66952,arg66953,arg66954,arg66955,arg66956,arg66957,arg66958,arg66959,arg66960));

break;
case (12):
var arg66961 = (function (){var G__67233 = ctx;
var G__67234 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67233,G__67234) : sci.impl.interpreter.interpret.call(null,G__67233,G__67234));
})();
var args__$1 = cljs.core.rest(args);
var arg66962 = (function (){var G__67235 = ctx;
var G__67236 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67235,G__67236) : sci.impl.interpreter.interpret.call(null,G__67235,G__67236));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66963 = (function (){var G__67237 = ctx;
var G__67238 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67237,G__67238) : sci.impl.interpreter.interpret.call(null,G__67237,G__67238));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66964 = (function (){var G__67239 = ctx;
var G__67240 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67239,G__67240) : sci.impl.interpreter.interpret.call(null,G__67239,G__67240));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66965 = (function (){var G__67241 = ctx;
var G__67242 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67241,G__67242) : sci.impl.interpreter.interpret.call(null,G__67241,G__67242));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66966 = (function (){var G__67243 = ctx;
var G__67244 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67243,G__67244) : sci.impl.interpreter.interpret.call(null,G__67243,G__67244));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg66967 = (function (){var G__67245 = ctx;
var G__67246 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67245,G__67246) : sci.impl.interpreter.interpret.call(null,G__67245,G__67246));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg66968 = (function (){var G__67247 = ctx;
var G__67248 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67247,G__67248) : sci.impl.interpreter.interpret.call(null,G__67247,G__67248));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg66969 = (function (){var G__67249 = ctx;
var G__67250 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67249,G__67250) : sci.impl.interpreter.interpret.call(null,G__67249,G__67250));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg66970 = (function (){var G__67251 = ctx;
var G__67252 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67251,G__67252) : sci.impl.interpreter.interpret.call(null,G__67251,G__67252));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg66971 = (function (){var G__67253 = ctx;
var G__67254 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67253,G__67254) : sci.impl.interpreter.interpret.call(null,G__67253,G__67254));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg66972 = (function (){var G__67255 = ctx;
var G__67256 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67255,G__67256) : sci.impl.interpreter.interpret.call(null,G__67255,G__67256));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg66961,arg66962,arg66963,arg66964,arg66965,arg66966,arg66967,arg66968,arg66969,arg66970,arg66971,arg66972) : f.call(null,arg66961,arg66962,arg66963,arg66964,arg66965,arg66966,arg66967,arg66968,arg66969,arg66970,arg66971,arg66972));

break;
case (13):
var arg66973 = (function (){var G__67257 = ctx;
var G__67258 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67257,G__67258) : sci.impl.interpreter.interpret.call(null,G__67257,G__67258));
})();
var args__$1 = cljs.core.rest(args);
var arg66974 = (function (){var G__67259 = ctx;
var G__67260 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67259,G__67260) : sci.impl.interpreter.interpret.call(null,G__67259,G__67260));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66975 = (function (){var G__67261 = ctx;
var G__67262 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67261,G__67262) : sci.impl.interpreter.interpret.call(null,G__67261,G__67262));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66976 = (function (){var G__67263 = ctx;
var G__67264 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67263,G__67264) : sci.impl.interpreter.interpret.call(null,G__67263,G__67264));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66977 = (function (){var G__67265 = ctx;
var G__67266 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67265,G__67266) : sci.impl.interpreter.interpret.call(null,G__67265,G__67266));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66978 = (function (){var G__67267 = ctx;
var G__67268 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67267,G__67268) : sci.impl.interpreter.interpret.call(null,G__67267,G__67268));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg66979 = (function (){var G__67269 = ctx;
var G__67270 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67269,G__67270) : sci.impl.interpreter.interpret.call(null,G__67269,G__67270));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg66980 = (function (){var G__67271 = ctx;
var G__67272 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67271,G__67272) : sci.impl.interpreter.interpret.call(null,G__67271,G__67272));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg66981 = (function (){var G__67273 = ctx;
var G__67274 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67273,G__67274) : sci.impl.interpreter.interpret.call(null,G__67273,G__67274));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg66982 = (function (){var G__67275 = ctx;
var G__67276 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67275,G__67276) : sci.impl.interpreter.interpret.call(null,G__67275,G__67276));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg66983 = (function (){var G__67277 = ctx;
var G__67278 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67277,G__67278) : sci.impl.interpreter.interpret.call(null,G__67277,G__67278));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg66984 = (function (){var G__67279 = ctx;
var G__67280 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67279,G__67280) : sci.impl.interpreter.interpret.call(null,G__67279,G__67280));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg66985 = (function (){var G__67281 = ctx;
var G__67282 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67281,G__67282) : sci.impl.interpreter.interpret.call(null,G__67281,G__67282));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg66973,arg66974,arg66975,arg66976,arg66977,arg66978,arg66979,arg66980,arg66981,arg66982,arg66983,arg66984,arg66985) : f.call(null,arg66973,arg66974,arg66975,arg66976,arg66977,arg66978,arg66979,arg66980,arg66981,arg66982,arg66983,arg66984,arg66985));

break;
case (14):
var arg66986 = (function (){var G__67283 = ctx;
var G__67284 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67283,G__67284) : sci.impl.interpreter.interpret.call(null,G__67283,G__67284));
})();
var args__$1 = cljs.core.rest(args);
var arg66987 = (function (){var G__67285 = ctx;
var G__67286 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67285,G__67286) : sci.impl.interpreter.interpret.call(null,G__67285,G__67286));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66988 = (function (){var G__67287 = ctx;
var G__67288 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67287,G__67288) : sci.impl.interpreter.interpret.call(null,G__67287,G__67288));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66989 = (function (){var G__67289 = ctx;
var G__67290 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67289,G__67290) : sci.impl.interpreter.interpret.call(null,G__67289,G__67290));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66990 = (function (){var G__67291 = ctx;
var G__67292 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67291,G__67292) : sci.impl.interpreter.interpret.call(null,G__67291,G__67292));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg66991 = (function (){var G__67293 = ctx;
var G__67294 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67293,G__67294) : sci.impl.interpreter.interpret.call(null,G__67293,G__67294));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg66992 = (function (){var G__67295 = ctx;
var G__67296 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67295,G__67296) : sci.impl.interpreter.interpret.call(null,G__67295,G__67296));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg66993 = (function (){var G__67297 = ctx;
var G__67298 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67297,G__67298) : sci.impl.interpreter.interpret.call(null,G__67297,G__67298));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg66994 = (function (){var G__67299 = ctx;
var G__67300 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67299,G__67300) : sci.impl.interpreter.interpret.call(null,G__67299,G__67300));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg66995 = (function (){var G__67301 = ctx;
var G__67302 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67301,G__67302) : sci.impl.interpreter.interpret.call(null,G__67301,G__67302));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg66996 = (function (){var G__67303 = ctx;
var G__67304 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67303,G__67304) : sci.impl.interpreter.interpret.call(null,G__67303,G__67304));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg66997 = (function (){var G__67305 = ctx;
var G__67306 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67305,G__67306) : sci.impl.interpreter.interpret.call(null,G__67305,G__67306));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg66998 = (function (){var G__67307 = ctx;
var G__67308 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67307,G__67308) : sci.impl.interpreter.interpret.call(null,G__67307,G__67308));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg66999 = (function (){var G__67309 = ctx;
var G__67310 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67309,G__67310) : sci.impl.interpreter.interpret.call(null,G__67309,G__67310));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg66986,arg66987,arg66988,arg66989,arg66990,arg66991,arg66992,arg66993,arg66994,arg66995,arg66996,arg66997,arg66998,arg66999) : f.call(null,arg66986,arg66987,arg66988,arg66989,arg66990,arg66991,arg66992,arg66993,arg66994,arg66995,arg66996,arg66997,arg66998,arg66999));

break;
case (15):
var arg67000 = (function (){var G__67311 = ctx;
var G__67312 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67311,G__67312) : sci.impl.interpreter.interpret.call(null,G__67311,G__67312));
})();
var args__$1 = cljs.core.rest(args);
var arg67001 = (function (){var G__67313 = ctx;
var G__67314 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67313,G__67314) : sci.impl.interpreter.interpret.call(null,G__67313,G__67314));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67002 = (function (){var G__67315 = ctx;
var G__67316 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67315,G__67316) : sci.impl.interpreter.interpret.call(null,G__67315,G__67316));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67003 = (function (){var G__67317 = ctx;
var G__67318 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67317,G__67318) : sci.impl.interpreter.interpret.call(null,G__67317,G__67318));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67004 = (function (){var G__67319 = ctx;
var G__67320 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67319,G__67320) : sci.impl.interpreter.interpret.call(null,G__67319,G__67320));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67005 = (function (){var G__67321 = ctx;
var G__67322 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67321,G__67322) : sci.impl.interpreter.interpret.call(null,G__67321,G__67322));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67006 = (function (){var G__67323 = ctx;
var G__67324 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67323,G__67324) : sci.impl.interpreter.interpret.call(null,G__67323,G__67324));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67007 = (function (){var G__67325 = ctx;
var G__67326 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67325,G__67326) : sci.impl.interpreter.interpret.call(null,G__67325,G__67326));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67008 = (function (){var G__67327 = ctx;
var G__67328 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67327,G__67328) : sci.impl.interpreter.interpret.call(null,G__67327,G__67328));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67009 = (function (){var G__67329 = ctx;
var G__67330 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67329,G__67330) : sci.impl.interpreter.interpret.call(null,G__67329,G__67330));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67010 = (function (){var G__67331 = ctx;
var G__67332 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67331,G__67332) : sci.impl.interpreter.interpret.call(null,G__67331,G__67332));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67011 = (function (){var G__67333 = ctx;
var G__67334 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67333,G__67334) : sci.impl.interpreter.interpret.call(null,G__67333,G__67334));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67012 = (function (){var G__67335 = ctx;
var G__67336 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67335,G__67336) : sci.impl.interpreter.interpret.call(null,G__67335,G__67336));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67013 = (function (){var G__67337 = ctx;
var G__67338 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67337,G__67338) : sci.impl.interpreter.interpret.call(null,G__67337,G__67338));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67014 = (function (){var G__67339 = ctx;
var G__67340 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67339,G__67340) : sci.impl.interpreter.interpret.call(null,G__67339,G__67340));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg67000,arg67001,arg67002,arg67003,arg67004,arg67005,arg67006,arg67007,arg67008,arg67009,arg67010,arg67011,arg67012,arg67013,arg67014) : f.call(null,arg67000,arg67001,arg67002,arg67003,arg67004,arg67005,arg67006,arg67007,arg67008,arg67009,arg67010,arg67011,arg67012,arg67013,arg67014));

break;
case (16):
var arg67015 = (function (){var G__67341 = ctx;
var G__67342 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67341,G__67342) : sci.impl.interpreter.interpret.call(null,G__67341,G__67342));
})();
var args__$1 = cljs.core.rest(args);
var arg67016 = (function (){var G__67343 = ctx;
var G__67344 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67343,G__67344) : sci.impl.interpreter.interpret.call(null,G__67343,G__67344));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67017 = (function (){var G__67345 = ctx;
var G__67346 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67345,G__67346) : sci.impl.interpreter.interpret.call(null,G__67345,G__67346));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67018 = (function (){var G__67347 = ctx;
var G__67348 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67347,G__67348) : sci.impl.interpreter.interpret.call(null,G__67347,G__67348));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67019 = (function (){var G__67349 = ctx;
var G__67350 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67349,G__67350) : sci.impl.interpreter.interpret.call(null,G__67349,G__67350));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67020 = (function (){var G__67351 = ctx;
var G__67352 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67351,G__67352) : sci.impl.interpreter.interpret.call(null,G__67351,G__67352));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67021 = (function (){var G__67353 = ctx;
var G__67354 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67353,G__67354) : sci.impl.interpreter.interpret.call(null,G__67353,G__67354));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67022 = (function (){var G__67355 = ctx;
var G__67356 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67355,G__67356) : sci.impl.interpreter.interpret.call(null,G__67355,G__67356));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67023 = (function (){var G__67357 = ctx;
var G__67358 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67357,G__67358) : sci.impl.interpreter.interpret.call(null,G__67357,G__67358));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67024 = (function (){var G__67359 = ctx;
var G__67360 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67359,G__67360) : sci.impl.interpreter.interpret.call(null,G__67359,G__67360));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67025 = (function (){var G__67361 = ctx;
var G__67362 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67361,G__67362) : sci.impl.interpreter.interpret.call(null,G__67361,G__67362));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67026 = (function (){var G__67363 = ctx;
var G__67364 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67363,G__67364) : sci.impl.interpreter.interpret.call(null,G__67363,G__67364));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67027 = (function (){var G__67365 = ctx;
var G__67366 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67365,G__67366) : sci.impl.interpreter.interpret.call(null,G__67365,G__67366));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67028 = (function (){var G__67367 = ctx;
var G__67368 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67367,G__67368) : sci.impl.interpreter.interpret.call(null,G__67367,G__67368));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67029 = (function (){var G__67369 = ctx;
var G__67370 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67369,G__67370) : sci.impl.interpreter.interpret.call(null,G__67369,G__67370));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67030 = (function (){var G__67371 = ctx;
var G__67372 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67371,G__67372) : sci.impl.interpreter.interpret.call(null,G__67371,G__67372));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg67015,arg67016,arg67017,arg67018,arg67019,arg67020,arg67021,arg67022,arg67023,arg67024,arg67025,arg67026,arg67027,arg67028,arg67029,arg67030) : f.call(null,arg67015,arg67016,arg67017,arg67018,arg67019,arg67020,arg67021,arg67022,arg67023,arg67024,arg67025,arg67026,arg67027,arg67028,arg67029,arg67030));

break;
case (17):
var arg67031 = (function (){var G__67373 = ctx;
var G__67374 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67373,G__67374) : sci.impl.interpreter.interpret.call(null,G__67373,G__67374));
})();
var args__$1 = cljs.core.rest(args);
var arg67032 = (function (){var G__67375 = ctx;
var G__67376 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67375,G__67376) : sci.impl.interpreter.interpret.call(null,G__67375,G__67376));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67033 = (function (){var G__67377 = ctx;
var G__67378 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67377,G__67378) : sci.impl.interpreter.interpret.call(null,G__67377,G__67378));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67034 = (function (){var G__67379 = ctx;
var G__67380 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67379,G__67380) : sci.impl.interpreter.interpret.call(null,G__67379,G__67380));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67035 = (function (){var G__67381 = ctx;
var G__67382 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67381,G__67382) : sci.impl.interpreter.interpret.call(null,G__67381,G__67382));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67036 = (function (){var G__67383 = ctx;
var G__67384 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67383,G__67384) : sci.impl.interpreter.interpret.call(null,G__67383,G__67384));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67037 = (function (){var G__67385 = ctx;
var G__67386 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67385,G__67386) : sci.impl.interpreter.interpret.call(null,G__67385,G__67386));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67038 = (function (){var G__67387 = ctx;
var G__67388 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67387,G__67388) : sci.impl.interpreter.interpret.call(null,G__67387,G__67388));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67039 = (function (){var G__67389 = ctx;
var G__67390 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67389,G__67390) : sci.impl.interpreter.interpret.call(null,G__67389,G__67390));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67040 = (function (){var G__67391 = ctx;
var G__67392 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67391,G__67392) : sci.impl.interpreter.interpret.call(null,G__67391,G__67392));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67041 = (function (){var G__67393 = ctx;
var G__67394 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67393,G__67394) : sci.impl.interpreter.interpret.call(null,G__67393,G__67394));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67042 = (function (){var G__67395 = ctx;
var G__67396 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67395,G__67396) : sci.impl.interpreter.interpret.call(null,G__67395,G__67396));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67043 = (function (){var G__67397 = ctx;
var G__67398 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67397,G__67398) : sci.impl.interpreter.interpret.call(null,G__67397,G__67398));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67044 = (function (){var G__67399 = ctx;
var G__67400 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67399,G__67400) : sci.impl.interpreter.interpret.call(null,G__67399,G__67400));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67045 = (function (){var G__67401 = ctx;
var G__67402 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67401,G__67402) : sci.impl.interpreter.interpret.call(null,G__67401,G__67402));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67046 = (function (){var G__67403 = ctx;
var G__67404 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67403,G__67404) : sci.impl.interpreter.interpret.call(null,G__67403,G__67404));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67047 = (function (){var G__67405 = ctx;
var G__67406 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67405,G__67406) : sci.impl.interpreter.interpret.call(null,G__67405,G__67406));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg67031,arg67032,arg67033,arg67034,arg67035,arg67036,arg67037,arg67038,arg67039,arg67040,arg67041,arg67042,arg67043,arg67044,arg67045,arg67046,arg67047) : f.call(null,arg67031,arg67032,arg67033,arg67034,arg67035,arg67036,arg67037,arg67038,arg67039,arg67040,arg67041,arg67042,arg67043,arg67044,arg67045,arg67046,arg67047));

break;
case (18):
var arg67048 = (function (){var G__67407 = ctx;
var G__67408 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67407,G__67408) : sci.impl.interpreter.interpret.call(null,G__67407,G__67408));
})();
var args__$1 = cljs.core.rest(args);
var arg67049 = (function (){var G__67409 = ctx;
var G__67410 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67409,G__67410) : sci.impl.interpreter.interpret.call(null,G__67409,G__67410));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67050 = (function (){var G__67411 = ctx;
var G__67412 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67411,G__67412) : sci.impl.interpreter.interpret.call(null,G__67411,G__67412));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67051 = (function (){var G__67413 = ctx;
var G__67414 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67413,G__67414) : sci.impl.interpreter.interpret.call(null,G__67413,G__67414));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67052 = (function (){var G__67415 = ctx;
var G__67416 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67415,G__67416) : sci.impl.interpreter.interpret.call(null,G__67415,G__67416));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67053 = (function (){var G__67417 = ctx;
var G__67418 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67417,G__67418) : sci.impl.interpreter.interpret.call(null,G__67417,G__67418));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67054 = (function (){var G__67419 = ctx;
var G__67420 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67419,G__67420) : sci.impl.interpreter.interpret.call(null,G__67419,G__67420));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67055 = (function (){var G__67421 = ctx;
var G__67422 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67421,G__67422) : sci.impl.interpreter.interpret.call(null,G__67421,G__67422));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67056 = (function (){var G__67423 = ctx;
var G__67424 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67423,G__67424) : sci.impl.interpreter.interpret.call(null,G__67423,G__67424));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67057 = (function (){var G__67425 = ctx;
var G__67426 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67425,G__67426) : sci.impl.interpreter.interpret.call(null,G__67425,G__67426));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67058 = (function (){var G__67427 = ctx;
var G__67428 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67427,G__67428) : sci.impl.interpreter.interpret.call(null,G__67427,G__67428));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67059 = (function (){var G__67429 = ctx;
var G__67430 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67429,G__67430) : sci.impl.interpreter.interpret.call(null,G__67429,G__67430));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67060 = (function (){var G__67431 = ctx;
var G__67432 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67431,G__67432) : sci.impl.interpreter.interpret.call(null,G__67431,G__67432));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67061 = (function (){var G__67433 = ctx;
var G__67434 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67433,G__67434) : sci.impl.interpreter.interpret.call(null,G__67433,G__67434));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67062 = (function (){var G__67435 = ctx;
var G__67436 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67435,G__67436) : sci.impl.interpreter.interpret.call(null,G__67435,G__67436));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67063 = (function (){var G__67437 = ctx;
var G__67438 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67437,G__67438) : sci.impl.interpreter.interpret.call(null,G__67437,G__67438));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67064 = (function (){var G__67439 = ctx;
var G__67440 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67439,G__67440) : sci.impl.interpreter.interpret.call(null,G__67439,G__67440));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67065 = (function (){var G__67441 = ctx;
var G__67442 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67441,G__67442) : sci.impl.interpreter.interpret.call(null,G__67441,G__67442));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg67048,arg67049,arg67050,arg67051,arg67052,arg67053,arg67054,arg67055,arg67056,arg67057,arg67058,arg67059,arg67060,arg67061,arg67062,arg67063,arg67064,arg67065) : f.call(null,arg67048,arg67049,arg67050,arg67051,arg67052,arg67053,arg67054,arg67055,arg67056,arg67057,arg67058,arg67059,arg67060,arg67061,arg67062,arg67063,arg67064,arg67065));

break;
case (19):
var arg67066 = (function (){var G__67443 = ctx;
var G__67444 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67443,G__67444) : sci.impl.interpreter.interpret.call(null,G__67443,G__67444));
})();
var args__$1 = cljs.core.rest(args);
var arg67067 = (function (){var G__67445 = ctx;
var G__67446 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67445,G__67446) : sci.impl.interpreter.interpret.call(null,G__67445,G__67446));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67068 = (function (){var G__67447 = ctx;
var G__67448 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67447,G__67448) : sci.impl.interpreter.interpret.call(null,G__67447,G__67448));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67069 = (function (){var G__67449 = ctx;
var G__67450 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67449,G__67450) : sci.impl.interpreter.interpret.call(null,G__67449,G__67450));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67070 = (function (){var G__67451 = ctx;
var G__67452 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67451,G__67452) : sci.impl.interpreter.interpret.call(null,G__67451,G__67452));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67071 = (function (){var G__67453 = ctx;
var G__67454 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67453,G__67454) : sci.impl.interpreter.interpret.call(null,G__67453,G__67454));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67072 = (function (){var G__67455 = ctx;
var G__67456 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67455,G__67456) : sci.impl.interpreter.interpret.call(null,G__67455,G__67456));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67073 = (function (){var G__67457 = ctx;
var G__67458 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67457,G__67458) : sci.impl.interpreter.interpret.call(null,G__67457,G__67458));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67074 = (function (){var G__67459 = ctx;
var G__67460 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67459,G__67460) : sci.impl.interpreter.interpret.call(null,G__67459,G__67460));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67075 = (function (){var G__67461 = ctx;
var G__67462 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67461,G__67462) : sci.impl.interpreter.interpret.call(null,G__67461,G__67462));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67076 = (function (){var G__67463 = ctx;
var G__67464 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67463,G__67464) : sci.impl.interpreter.interpret.call(null,G__67463,G__67464));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67077 = (function (){var G__67465 = ctx;
var G__67466 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67465,G__67466) : sci.impl.interpreter.interpret.call(null,G__67465,G__67466));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67078 = (function (){var G__67467 = ctx;
var G__67468 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67467,G__67468) : sci.impl.interpreter.interpret.call(null,G__67467,G__67468));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67079 = (function (){var G__67469 = ctx;
var G__67470 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67469,G__67470) : sci.impl.interpreter.interpret.call(null,G__67469,G__67470));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67080 = (function (){var G__67471 = ctx;
var G__67472 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67471,G__67472) : sci.impl.interpreter.interpret.call(null,G__67471,G__67472));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67081 = (function (){var G__67473 = ctx;
var G__67474 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67473,G__67474) : sci.impl.interpreter.interpret.call(null,G__67473,G__67474));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67082 = (function (){var G__67475 = ctx;
var G__67476 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67475,G__67476) : sci.impl.interpreter.interpret.call(null,G__67475,G__67476));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67083 = (function (){var G__67477 = ctx;
var G__67478 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67477,G__67478) : sci.impl.interpreter.interpret.call(null,G__67477,G__67478));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg67084 = (function (){var G__67479 = ctx;
var G__67480 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67479,G__67480) : sci.impl.interpreter.interpret.call(null,G__67479,G__67480));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg67066,arg67067,arg67068,arg67069,arg67070,arg67071,arg67072,arg67073,arg67074,arg67075,arg67076,arg67077,arg67078,arg67079,arg67080,arg67081,arg67082,arg67083,arg67084) : f.call(null,arg67066,arg67067,arg67068,arg67069,arg67070,arg67071,arg67072,arg67073,arg67074,arg67075,arg67076,arg67077,arg67078,arg67079,arg67080,arg67081,arg67082,arg67083,arg67084));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__67481 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__67481)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__67481)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__67481)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__67481)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__67481)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__67481)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__67482 = ctx;
var G__67483 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67482,G__67483) : sci.impl.interpreter.interpret.call(null,G__67482,G__67483));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__67481)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__67481)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__67481)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__67481)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__67481)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__67481)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__67481)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__67481)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__67481)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__67484 = ctx;
var G__67485 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67484,G__67485) : sci.impl.interpreter.interpret.call(null,G__67484,G__67485));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__67481)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__67481)){
return (new cljs.core.LazySeq(null,(function (){var G__67486 = ctx;
var G__67487 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67486,G__67487) : sci.impl.interpreter.interpret.call(null,G__67486,G__67487));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__67481)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__67481)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__67481)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__67481)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67481)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__67489 = op;
var G__67490 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67489,G__67490) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67489,G__67490));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e67488){if((e67488 instanceof Error)){
var e = e67488;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e67488;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__67497 = op;
var G__67497__$1 = (((G__67497 instanceof cljs.core.Keyword))?G__67497.fqn:null);
switch (G__67497__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67494_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67494_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67494_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67495_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67495_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67495_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67496_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67496_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67496_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__67548 = cljs.core.rest(exprs);
var G__67549 = (function (){var G__67500 = ctx;
var G__67501 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__67500,G__67501) : sci.impl.interpreter.eval_form.call(null,G__67500,G__67501));
})();
exprs = G__67548;
ret = G__67549;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((function (){var G__67504 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__67505 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67504,G__67505) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67504,G__67505));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__67550 = ret__$1;
ret = G__67550;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__67507 = arguments.length;
switch (G__67507) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
