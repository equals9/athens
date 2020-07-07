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
var G__60239 = xs;
args__$2 = G__60239;
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
var G__60240 = xs;
args__$2 = G__60240;
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
var len__4789__auto___60241 = arguments.length;
var i__4790__auto___60242 = (0);
while(true){
if((i__4790__auto___60242 < len__4789__auto___60241)){
args__4795__auto__.push((arguments[i__4790__auto___60242]));

var G__60243 = (i__4790__auto___60242 + (1));
i__4790__auto___60242 = G__60243;
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
var G__60244 = ctx__$2;
var G__60245 = rest_let_bindings;
ctx__$1 = G__60244;
let_bindings__$1 = G__60245;
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
var G__60246 = nexprs;
exprs__$1 = G__60246;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59473){
var G__59474 = cljs.core.first(seq59473);
var seq59473__$1 = cljs.core.next(seq59473);
var G__59475 = cljs.core.first(seq59473__$1);
var seq59473__$2 = cljs.core.next(seq59473__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59474,G__59475,seq59473__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59476){
var vec__59477 = p__59476;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59477,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59477,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59477,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59477,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59480 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59481 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59480,G__59481) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59480,G__59481));
})())?(function (){var G__59482 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59482,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59482;
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
var vec__59486 = libspec;
var seq__59487 = cljs.core.seq(vec__59486);
var first__59488 = cljs.core.first(seq__59487);
var seq__59487__$1 = cljs.core.next(seq__59487);
var lib_name = first__59488;
var opts = seq__59487__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59492 = opts;
var vec__59493 = G__59492;
var seq__59494 = cljs.core.seq(vec__59493);
var first__59495 = cljs.core.first(seq__59494);
var seq__59494__$1 = cljs.core.next(seq__59494);
var opt_name = first__59495;
var first__59495__$1 = cljs.core.first(seq__59494__$1);
var seq__59494__$2 = cljs.core.next(seq__59494__$1);
var fst_opt = first__59495__$1;
var rst_opts = seq__59494__$2;
var ret__$1 = ret;
var G__59492__$1 = G__59492;
while(true){
var ret__$2 = ret__$1;
var vec__59503 = G__59492__$1;
var seq__59504 = cljs.core.seq(vec__59503);
var first__59505 = cljs.core.first(seq__59504);
var seq__59504__$1 = cljs.core.next(seq__59504);
var opt_name__$1 = first__59505;
var first__59505__$1 = cljs.core.first(seq__59504__$1);
var seq__59504__$2 = cljs.core.next(seq__59504__$1);
var fst_opt__$1 = first__59505__$1;
var rst_opts__$1 = seq__59504__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59507 = opt_name__$1;
var G__59507__$1 = (((G__59507 instanceof cljs.core.Keyword))?G__59507.fqn:null);
switch (G__59507__$1) {
case "as":
var G__60248 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__60249 = rst_opts__$1;
ret__$1 = G__60248;
G__59492__$1 = G__60249;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__60250 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__60251 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__60250;
G__59492__$1 = G__60251;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__60252 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__60253 = rst_opts__$1;
ret__$1 = G__60252;
G__59492__$1 = G__60253;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59507__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59508){
var vec__59509 = p__59508;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59509,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59512){
var map__59513 = p__59512;
var map__59513__$1 = (((((!((map__59513 == null))))?(((((map__59513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59513):map__59513);
var _parsed_libspec = map__59513__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59513__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59513__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59513__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59513__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59513__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59517 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59518 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59517,G__59518) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59517,G__59518));
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
var vec__59519 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59519,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59519,(1),null);
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
var map__59522 = sci.impl.interpreter.parse_libspec(libspec);
var map__59522__$1 = (((((!((map__59522 == null))))?(((((map__59522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59522):map__59522);
var parsed_libspec = map__59522__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59522__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59522__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59524 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59524) : load_fn.call(null,G__59524));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59525 = temp__5733__auto____$2;
var map__59525__$1 = (((((!((map__59525 == null))))?(((((map__59525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59525):map__59525);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59525__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59525__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59528_60254 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59529_60255 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59528_60254,G__59529_60255) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59528_60254,G__59529_60255));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59527){if((e59527 instanceof Error)){
var e_60256 = e59527;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_60256;
} else {
throw e59527;

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
var len__4789__auto___60257 = arguments.length;
var i__4790__auto___60258 = (0);
while(true){
if((i__4790__auto___60258 < len__4789__auto___60257)){
args__4795__auto__.push((arguments[i__4790__auto___60258]));

var G__60259 = (i__4790__auto___60258 + (1));
i__4790__auto___60258 = G__60259;
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
var ret = (function (){var G__59543 = ctx;
var G__59544 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59543,G__59544) : sci.impl.interpreter.interpret.call(null,G__59543,G__59544));
})();
if((ret instanceof cljs.core.Symbol)){
var G__60260 = (function (){var G__59546 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59546,current_libspec);
} else {
return G__59546;
}
})();
var G__60261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__60262 = cljs.core.next(args__$1);
libspecs = G__60260;
current_libspec = G__60261;
args__$1 = G__60262;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__60263 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__60264 = null;
var G__60265 = cljs.core.next(args__$1);
libspecs = G__60263;
current_libspec = G__60264;
args__$1 = G__60265;
continue;
} else {
var G__60266 = (function (){var G__59549 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59549,current_libspec);
} else {
return G__59549;
}
})();
var G__60267 = ret;
var G__60268 = cljs.core.next(args__$1);
libspecs = G__60266;
current_libspec = G__60267;
args__$1 = G__60268;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59550 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59550,current_libspec);
} else {
return G__59550;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59531_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59531_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59532){
var G__59533 = cljs.core.first(seq59532);
var seq59532__$1 = cljs.core.next(seq59532);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59533,seq59532__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60269 = arguments.length;
var i__4790__auto___60270 = (0);
while(true){
if((i__4790__auto___60270 < len__4789__auto___60269)){
args__4795__auto__.push((arguments[i__4790__auto___60270]));

var G__60271 = (i__4790__auto___60270 + (1));
i__4790__auto___60270 = G__60271;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59552){
var G__59553 = cljs.core.first(seq59552);
var seq59552__$1 = cljs.core.next(seq59552);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59553,seq59552__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59557){
var vec__59558 = p__59557;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59558,(0),null);
var map__59561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59558,(1),null);
var map__59561__$1 = (((((!((map__59561 == null))))?(((((map__59561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59561):map__59561);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59561__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59561__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59561__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59563 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59563,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59563,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__59570 = ctx;
var G__59571 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59570,G__59571) : sci.impl.interpreter.interpret.call(null,G__59570,G__59571));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__59580 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__59580__$1 = (((((!((map__59580 == null))))?(((((map__59580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59580):map__59580);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59580__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59580__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59580__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__59591 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__59592 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__59592);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__59591);
}}catch (e59582){if((e59582 instanceof Error)){
var e = e59582;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__59586 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__59587 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59586,G__59587) : sci.impl.interpreter.interpret.call(null,G__59586,G__59587));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59588 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59588,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59588,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e59582;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__59593){
var vec__59594 = p__59593;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59594,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59594,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59597_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59597_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59597_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__59599){
var vec__59600 = p__59599;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59600,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59600,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59600,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59598_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59598_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59598_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__59605,p__59606){
var map__59607 = p__59605;
var map__59607__$1 = (((((!((map__59607 == null))))?(((((map__59607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59607):map__59607);
var ctx = map__59607__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59607__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__59608 = p__59606;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59608,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59608,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59608,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59608,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59604_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59604_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59604_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__59612){
var vec__59613 = p__59612;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59613,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59613,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__59616){
var vec__59617 = p__59616;
var seq__59618 = cljs.core.seq(vec__59617);
var first__59619 = cljs.core.first(seq__59618);
var seq__59618__$1 = cljs.core.next(seq__59618);
var _ = first__59619;
var first__59619__$1 = cljs.core.first(seq__59618__$1);
var seq__59618__$2 = cljs.core.next(seq__59618__$1);
var ns_sym = first__59619__$1;
var exprs = seq__59618__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__59620 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59620,(1),null);
var G__59623_60272 = k;
var G__59623_60273__$1 = (((G__59623_60272 instanceof cljs.core.Keyword))?G__59623_60272.fqn:null);
switch (G__59623_60273__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__59623_60272,G__59623_60273__$1,vec__59620,k,v,ns_sym__$1,vec__59617,seq__59618,first__59619,seq__59618__$1,_,first__59619__$1,seq__59618__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__59623_60272,G__59623_60273__$1,vec__59620,k,v,ns_sym__$1,vec__59617,seq__59618,first__59619,seq__59618__$1,_,first__59619__$1,seq__59618__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59623_60273__$1)].join('')));

}

var G__60275 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60275;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__59624){
var vec__59625 = p__59624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59625,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59625,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59625,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__59631 = exprs;
var vec__59632 = G__59631;
var seq__59633 = cljs.core.seq(vec__59632);
var first__59634 = cljs.core.first(seq__59633);
var seq__59633__$1 = cljs.core.next(seq__59633);
var expr = first__59634;
var exprs__$1 = seq__59633__$1;
var G__59631__$1 = G__59631;
while(true){
var vec__59635 = G__59631__$1;
var seq__59636 = cljs.core.seq(vec__59635);
var first__59637 = cljs.core.first(seq__59636);
var seq__59636__$1 = cljs.core.next(seq__59636);
var expr__$1 = first__59637;
var exprs__$2 = seq__59636__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e59638){if((e59638 instanceof Error)){
var e = e59638;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e59638;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__60276 = exprs__$3;
G__59631__$1 = G__60276;
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
var G__59831 = cljs.core.count(args);
switch (G__59831) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg59641 = (function (){var G__59832 = ctx;
var G__59833 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59832,G__59833) : sci.impl.interpreter.interpret.call(null,G__59832,G__59833));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg59641) : f.call(null,arg59641));

break;
case (2):
var arg59642 = (function (){var G__59834 = ctx;
var G__59835 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59834,G__59835) : sci.impl.interpreter.interpret.call(null,G__59834,G__59835));
})();
var args__$1 = cljs.core.rest(args);
var arg59643 = (function (){var G__59836 = ctx;
var G__59837 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59836,G__59837) : sci.impl.interpreter.interpret.call(null,G__59836,G__59837));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg59642,arg59643) : f.call(null,arg59642,arg59643));

break;
case (3):
var arg59644 = (function (){var G__59838 = ctx;
var G__59839 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59838,G__59839) : sci.impl.interpreter.interpret.call(null,G__59838,G__59839));
})();
var args__$1 = cljs.core.rest(args);
var arg59645 = (function (){var G__59840 = ctx;
var G__59841 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59840,G__59841) : sci.impl.interpreter.interpret.call(null,G__59840,G__59841));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59646 = (function (){var G__59842 = ctx;
var G__59843 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59842,G__59843) : sci.impl.interpreter.interpret.call(null,G__59842,G__59843));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg59644,arg59645,arg59646) : f.call(null,arg59644,arg59645,arg59646));

break;
case (4):
var arg59647 = (function (){var G__59844 = ctx;
var G__59845 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59844,G__59845) : sci.impl.interpreter.interpret.call(null,G__59844,G__59845));
})();
var args__$1 = cljs.core.rest(args);
var arg59648 = (function (){var G__59846 = ctx;
var G__59847 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59846,G__59847) : sci.impl.interpreter.interpret.call(null,G__59846,G__59847));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59649 = (function (){var G__59848 = ctx;
var G__59849 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59848,G__59849) : sci.impl.interpreter.interpret.call(null,G__59848,G__59849));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59650 = (function (){var G__59850 = ctx;
var G__59851 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59850,G__59851) : sci.impl.interpreter.interpret.call(null,G__59850,G__59851));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg59647,arg59648,arg59649,arg59650) : f.call(null,arg59647,arg59648,arg59649,arg59650));

break;
case (5):
var arg59651 = (function (){var G__59852 = ctx;
var G__59853 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59852,G__59853) : sci.impl.interpreter.interpret.call(null,G__59852,G__59853));
})();
var args__$1 = cljs.core.rest(args);
var arg59652 = (function (){var G__59854 = ctx;
var G__59855 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59854,G__59855) : sci.impl.interpreter.interpret.call(null,G__59854,G__59855));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59653 = (function (){var G__59856 = ctx;
var G__59857 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59856,G__59857) : sci.impl.interpreter.interpret.call(null,G__59856,G__59857));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59654 = (function (){var G__59858 = ctx;
var G__59859 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59858,G__59859) : sci.impl.interpreter.interpret.call(null,G__59858,G__59859));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59655 = (function (){var G__59860 = ctx;
var G__59861 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59860,G__59861) : sci.impl.interpreter.interpret.call(null,G__59860,G__59861));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg59651,arg59652,arg59653,arg59654,arg59655) : f.call(null,arg59651,arg59652,arg59653,arg59654,arg59655));

break;
case (6):
var arg59656 = (function (){var G__59862 = ctx;
var G__59863 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59862,G__59863) : sci.impl.interpreter.interpret.call(null,G__59862,G__59863));
})();
var args__$1 = cljs.core.rest(args);
var arg59657 = (function (){var G__59864 = ctx;
var G__59865 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59864,G__59865) : sci.impl.interpreter.interpret.call(null,G__59864,G__59865));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59658 = (function (){var G__59866 = ctx;
var G__59867 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59866,G__59867) : sci.impl.interpreter.interpret.call(null,G__59866,G__59867));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59659 = (function (){var G__59868 = ctx;
var G__59869 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59868,G__59869) : sci.impl.interpreter.interpret.call(null,G__59868,G__59869));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59660 = (function (){var G__59870 = ctx;
var G__59871 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59870,G__59871) : sci.impl.interpreter.interpret.call(null,G__59870,G__59871));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59661 = (function (){var G__59872 = ctx;
var G__59873 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59872,G__59873) : sci.impl.interpreter.interpret.call(null,G__59872,G__59873));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg59656,arg59657,arg59658,arg59659,arg59660,arg59661) : f.call(null,arg59656,arg59657,arg59658,arg59659,arg59660,arg59661));

break;
case (7):
var arg59662 = (function (){var G__59874 = ctx;
var G__59875 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59874,G__59875) : sci.impl.interpreter.interpret.call(null,G__59874,G__59875));
})();
var args__$1 = cljs.core.rest(args);
var arg59663 = (function (){var G__59876 = ctx;
var G__59877 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59876,G__59877) : sci.impl.interpreter.interpret.call(null,G__59876,G__59877));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59664 = (function (){var G__59878 = ctx;
var G__59879 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59878,G__59879) : sci.impl.interpreter.interpret.call(null,G__59878,G__59879));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59665 = (function (){var G__59880 = ctx;
var G__59881 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59880,G__59881) : sci.impl.interpreter.interpret.call(null,G__59880,G__59881));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59666 = (function (){var G__59882 = ctx;
var G__59883 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59882,G__59883) : sci.impl.interpreter.interpret.call(null,G__59882,G__59883));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59667 = (function (){var G__59884 = ctx;
var G__59885 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59884,G__59885) : sci.impl.interpreter.interpret.call(null,G__59884,G__59885));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59668 = (function (){var G__59886 = ctx;
var G__59887 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59886,G__59887) : sci.impl.interpreter.interpret.call(null,G__59886,G__59887));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg59662,arg59663,arg59664,arg59665,arg59666,arg59667,arg59668) : f.call(null,arg59662,arg59663,arg59664,arg59665,arg59666,arg59667,arg59668));

break;
case (8):
var arg59669 = (function (){var G__59888 = ctx;
var G__59889 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59888,G__59889) : sci.impl.interpreter.interpret.call(null,G__59888,G__59889));
})();
var args__$1 = cljs.core.rest(args);
var arg59670 = (function (){var G__59890 = ctx;
var G__59891 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59890,G__59891) : sci.impl.interpreter.interpret.call(null,G__59890,G__59891));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59671 = (function (){var G__59892 = ctx;
var G__59893 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59892,G__59893) : sci.impl.interpreter.interpret.call(null,G__59892,G__59893));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59672 = (function (){var G__59894 = ctx;
var G__59895 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59894,G__59895) : sci.impl.interpreter.interpret.call(null,G__59894,G__59895));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59673 = (function (){var G__59896 = ctx;
var G__59897 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59896,G__59897) : sci.impl.interpreter.interpret.call(null,G__59896,G__59897));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59674 = (function (){var G__59898 = ctx;
var G__59899 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59898,G__59899) : sci.impl.interpreter.interpret.call(null,G__59898,G__59899));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59675 = (function (){var G__59900 = ctx;
var G__59901 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59900,G__59901) : sci.impl.interpreter.interpret.call(null,G__59900,G__59901));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59676 = (function (){var G__59902 = ctx;
var G__59903 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59902,G__59903) : sci.impl.interpreter.interpret.call(null,G__59902,G__59903));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg59669,arg59670,arg59671,arg59672,arg59673,arg59674,arg59675,arg59676) : f.call(null,arg59669,arg59670,arg59671,arg59672,arg59673,arg59674,arg59675,arg59676));

break;
case (9):
var arg59677 = (function (){var G__59904 = ctx;
var G__59905 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59904,G__59905) : sci.impl.interpreter.interpret.call(null,G__59904,G__59905));
})();
var args__$1 = cljs.core.rest(args);
var arg59678 = (function (){var G__59906 = ctx;
var G__59907 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59906,G__59907) : sci.impl.interpreter.interpret.call(null,G__59906,G__59907));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59679 = (function (){var G__59908 = ctx;
var G__59909 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59908,G__59909) : sci.impl.interpreter.interpret.call(null,G__59908,G__59909));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59680 = (function (){var G__59910 = ctx;
var G__59911 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59910,G__59911) : sci.impl.interpreter.interpret.call(null,G__59910,G__59911));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59681 = (function (){var G__59912 = ctx;
var G__59913 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59912,G__59913) : sci.impl.interpreter.interpret.call(null,G__59912,G__59913));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59682 = (function (){var G__59914 = ctx;
var G__59915 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59914,G__59915) : sci.impl.interpreter.interpret.call(null,G__59914,G__59915));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59683 = (function (){var G__59916 = ctx;
var G__59917 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59916,G__59917) : sci.impl.interpreter.interpret.call(null,G__59916,G__59917));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59684 = (function (){var G__59918 = ctx;
var G__59919 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59918,G__59919) : sci.impl.interpreter.interpret.call(null,G__59918,G__59919));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59685 = (function (){var G__59920 = ctx;
var G__59921 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59920,G__59921) : sci.impl.interpreter.interpret.call(null,G__59920,G__59921));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg59677,arg59678,arg59679,arg59680,arg59681,arg59682,arg59683,arg59684,arg59685) : f.call(null,arg59677,arg59678,arg59679,arg59680,arg59681,arg59682,arg59683,arg59684,arg59685));

break;
case (10):
var arg59686 = (function (){var G__59922 = ctx;
var G__59923 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59922,G__59923) : sci.impl.interpreter.interpret.call(null,G__59922,G__59923));
})();
var args__$1 = cljs.core.rest(args);
var arg59687 = (function (){var G__59924 = ctx;
var G__59925 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59924,G__59925) : sci.impl.interpreter.interpret.call(null,G__59924,G__59925));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59688 = (function (){var G__59926 = ctx;
var G__59927 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59926,G__59927) : sci.impl.interpreter.interpret.call(null,G__59926,G__59927));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59689 = (function (){var G__59928 = ctx;
var G__59929 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59928,G__59929) : sci.impl.interpreter.interpret.call(null,G__59928,G__59929));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59690 = (function (){var G__59930 = ctx;
var G__59931 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59930,G__59931) : sci.impl.interpreter.interpret.call(null,G__59930,G__59931));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59691 = (function (){var G__59932 = ctx;
var G__59933 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59932,G__59933) : sci.impl.interpreter.interpret.call(null,G__59932,G__59933));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59692 = (function (){var G__59934 = ctx;
var G__59935 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59934,G__59935) : sci.impl.interpreter.interpret.call(null,G__59934,G__59935));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59693 = (function (){var G__59936 = ctx;
var G__59937 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59936,G__59937) : sci.impl.interpreter.interpret.call(null,G__59936,G__59937));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59694 = (function (){var G__59938 = ctx;
var G__59939 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59938,G__59939) : sci.impl.interpreter.interpret.call(null,G__59938,G__59939));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59695 = (function (){var G__59940 = ctx;
var G__59941 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59940,G__59941) : sci.impl.interpreter.interpret.call(null,G__59940,G__59941));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg59686,arg59687,arg59688,arg59689,arg59690,arg59691,arg59692,arg59693,arg59694,arg59695) : f.call(null,arg59686,arg59687,arg59688,arg59689,arg59690,arg59691,arg59692,arg59693,arg59694,arg59695));

break;
case (11):
var arg59696 = (function (){var G__59942 = ctx;
var G__59943 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59942,G__59943) : sci.impl.interpreter.interpret.call(null,G__59942,G__59943));
})();
var args__$1 = cljs.core.rest(args);
var arg59697 = (function (){var G__59944 = ctx;
var G__59945 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59944,G__59945) : sci.impl.interpreter.interpret.call(null,G__59944,G__59945));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59698 = (function (){var G__59946 = ctx;
var G__59947 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59946,G__59947) : sci.impl.interpreter.interpret.call(null,G__59946,G__59947));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59699 = (function (){var G__59948 = ctx;
var G__59949 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59948,G__59949) : sci.impl.interpreter.interpret.call(null,G__59948,G__59949));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59700 = (function (){var G__59950 = ctx;
var G__59951 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59950,G__59951) : sci.impl.interpreter.interpret.call(null,G__59950,G__59951));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59701 = (function (){var G__59952 = ctx;
var G__59953 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59952,G__59953) : sci.impl.interpreter.interpret.call(null,G__59952,G__59953));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59702 = (function (){var G__59954 = ctx;
var G__59955 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59954,G__59955) : sci.impl.interpreter.interpret.call(null,G__59954,G__59955));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59703 = (function (){var G__59956 = ctx;
var G__59957 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59956,G__59957) : sci.impl.interpreter.interpret.call(null,G__59956,G__59957));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59704 = (function (){var G__59958 = ctx;
var G__59959 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59958,G__59959) : sci.impl.interpreter.interpret.call(null,G__59958,G__59959));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59705 = (function (){var G__59960 = ctx;
var G__59961 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59960,G__59961) : sci.impl.interpreter.interpret.call(null,G__59960,G__59961));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59706 = (function (){var G__59962 = ctx;
var G__59963 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59962,G__59963) : sci.impl.interpreter.interpret.call(null,G__59962,G__59963));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg59696,arg59697,arg59698,arg59699,arg59700,arg59701,arg59702,arg59703,arg59704,arg59705,arg59706) : f.call(null,arg59696,arg59697,arg59698,arg59699,arg59700,arg59701,arg59702,arg59703,arg59704,arg59705,arg59706));

break;
case (12):
var arg59707 = (function (){var G__59964 = ctx;
var G__59965 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59964,G__59965) : sci.impl.interpreter.interpret.call(null,G__59964,G__59965));
})();
var args__$1 = cljs.core.rest(args);
var arg59708 = (function (){var G__59966 = ctx;
var G__59967 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59966,G__59967) : sci.impl.interpreter.interpret.call(null,G__59966,G__59967));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59709 = (function (){var G__59968 = ctx;
var G__59969 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59968,G__59969) : sci.impl.interpreter.interpret.call(null,G__59968,G__59969));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59710 = (function (){var G__59970 = ctx;
var G__59971 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59970,G__59971) : sci.impl.interpreter.interpret.call(null,G__59970,G__59971));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59711 = (function (){var G__59972 = ctx;
var G__59973 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59972,G__59973) : sci.impl.interpreter.interpret.call(null,G__59972,G__59973));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59712 = (function (){var G__59974 = ctx;
var G__59975 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59974,G__59975) : sci.impl.interpreter.interpret.call(null,G__59974,G__59975));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59713 = (function (){var G__59976 = ctx;
var G__59977 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59976,G__59977) : sci.impl.interpreter.interpret.call(null,G__59976,G__59977));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59714 = (function (){var G__59978 = ctx;
var G__59979 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59978,G__59979) : sci.impl.interpreter.interpret.call(null,G__59978,G__59979));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59715 = (function (){var G__59980 = ctx;
var G__59981 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59980,G__59981) : sci.impl.interpreter.interpret.call(null,G__59980,G__59981));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59716 = (function (){var G__59982 = ctx;
var G__59983 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59982,G__59983) : sci.impl.interpreter.interpret.call(null,G__59982,G__59983));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59717 = (function (){var G__59984 = ctx;
var G__59985 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59984,G__59985) : sci.impl.interpreter.interpret.call(null,G__59984,G__59985));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59718 = (function (){var G__59986 = ctx;
var G__59987 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59986,G__59987) : sci.impl.interpreter.interpret.call(null,G__59986,G__59987));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg59707,arg59708,arg59709,arg59710,arg59711,arg59712,arg59713,arg59714,arg59715,arg59716,arg59717,arg59718) : f.call(null,arg59707,arg59708,arg59709,arg59710,arg59711,arg59712,arg59713,arg59714,arg59715,arg59716,arg59717,arg59718));

break;
case (13):
var arg59719 = (function (){var G__59988 = ctx;
var G__59989 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59988,G__59989) : sci.impl.interpreter.interpret.call(null,G__59988,G__59989));
})();
var args__$1 = cljs.core.rest(args);
var arg59720 = (function (){var G__59990 = ctx;
var G__59991 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59990,G__59991) : sci.impl.interpreter.interpret.call(null,G__59990,G__59991));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59721 = (function (){var G__59992 = ctx;
var G__59993 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59992,G__59993) : sci.impl.interpreter.interpret.call(null,G__59992,G__59993));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59722 = (function (){var G__59994 = ctx;
var G__59995 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59994,G__59995) : sci.impl.interpreter.interpret.call(null,G__59994,G__59995));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59723 = (function (){var G__59996 = ctx;
var G__59997 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59996,G__59997) : sci.impl.interpreter.interpret.call(null,G__59996,G__59997));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59724 = (function (){var G__59998 = ctx;
var G__59999 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59998,G__59999) : sci.impl.interpreter.interpret.call(null,G__59998,G__59999));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59725 = (function (){var G__60000 = ctx;
var G__60001 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60000,G__60001) : sci.impl.interpreter.interpret.call(null,G__60000,G__60001));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59726 = (function (){var G__60002 = ctx;
var G__60003 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60002,G__60003) : sci.impl.interpreter.interpret.call(null,G__60002,G__60003));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59727 = (function (){var G__60004 = ctx;
var G__60005 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60004,G__60005) : sci.impl.interpreter.interpret.call(null,G__60004,G__60005));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59728 = (function (){var G__60006 = ctx;
var G__60007 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60006,G__60007) : sci.impl.interpreter.interpret.call(null,G__60006,G__60007));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59729 = (function (){var G__60008 = ctx;
var G__60009 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60008,G__60009) : sci.impl.interpreter.interpret.call(null,G__60008,G__60009));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59730 = (function (){var G__60010 = ctx;
var G__60011 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60010,G__60011) : sci.impl.interpreter.interpret.call(null,G__60010,G__60011));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59731 = (function (){var G__60012 = ctx;
var G__60013 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60012,G__60013) : sci.impl.interpreter.interpret.call(null,G__60012,G__60013));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg59719,arg59720,arg59721,arg59722,arg59723,arg59724,arg59725,arg59726,arg59727,arg59728,arg59729,arg59730,arg59731) : f.call(null,arg59719,arg59720,arg59721,arg59722,arg59723,arg59724,arg59725,arg59726,arg59727,arg59728,arg59729,arg59730,arg59731));

break;
case (14):
var arg59732 = (function (){var G__60014 = ctx;
var G__60015 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60014,G__60015) : sci.impl.interpreter.interpret.call(null,G__60014,G__60015));
})();
var args__$1 = cljs.core.rest(args);
var arg59733 = (function (){var G__60016 = ctx;
var G__60017 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60016,G__60017) : sci.impl.interpreter.interpret.call(null,G__60016,G__60017));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59734 = (function (){var G__60018 = ctx;
var G__60019 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60018,G__60019) : sci.impl.interpreter.interpret.call(null,G__60018,G__60019));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59735 = (function (){var G__60020 = ctx;
var G__60021 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60020,G__60021) : sci.impl.interpreter.interpret.call(null,G__60020,G__60021));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59736 = (function (){var G__60022 = ctx;
var G__60023 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60022,G__60023) : sci.impl.interpreter.interpret.call(null,G__60022,G__60023));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59737 = (function (){var G__60024 = ctx;
var G__60025 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60024,G__60025) : sci.impl.interpreter.interpret.call(null,G__60024,G__60025));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59738 = (function (){var G__60026 = ctx;
var G__60027 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60026,G__60027) : sci.impl.interpreter.interpret.call(null,G__60026,G__60027));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59739 = (function (){var G__60028 = ctx;
var G__60029 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60028,G__60029) : sci.impl.interpreter.interpret.call(null,G__60028,G__60029));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59740 = (function (){var G__60030 = ctx;
var G__60031 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60030,G__60031) : sci.impl.interpreter.interpret.call(null,G__60030,G__60031));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59741 = (function (){var G__60032 = ctx;
var G__60033 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60032,G__60033) : sci.impl.interpreter.interpret.call(null,G__60032,G__60033));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59742 = (function (){var G__60034 = ctx;
var G__60035 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60034,G__60035) : sci.impl.interpreter.interpret.call(null,G__60034,G__60035));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59743 = (function (){var G__60036 = ctx;
var G__60037 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60036,G__60037) : sci.impl.interpreter.interpret.call(null,G__60036,G__60037));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59744 = (function (){var G__60038 = ctx;
var G__60039 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60038,G__60039) : sci.impl.interpreter.interpret.call(null,G__60038,G__60039));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59745 = (function (){var G__60040 = ctx;
var G__60041 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60040,G__60041) : sci.impl.interpreter.interpret.call(null,G__60040,G__60041));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg59732,arg59733,arg59734,arg59735,arg59736,arg59737,arg59738,arg59739,arg59740,arg59741,arg59742,arg59743,arg59744,arg59745) : f.call(null,arg59732,arg59733,arg59734,arg59735,arg59736,arg59737,arg59738,arg59739,arg59740,arg59741,arg59742,arg59743,arg59744,arg59745));

break;
case (15):
var arg59746 = (function (){var G__60042 = ctx;
var G__60043 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60042,G__60043) : sci.impl.interpreter.interpret.call(null,G__60042,G__60043));
})();
var args__$1 = cljs.core.rest(args);
var arg59747 = (function (){var G__60044 = ctx;
var G__60045 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60044,G__60045) : sci.impl.interpreter.interpret.call(null,G__60044,G__60045));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59748 = (function (){var G__60046 = ctx;
var G__60047 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60046,G__60047) : sci.impl.interpreter.interpret.call(null,G__60046,G__60047));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59749 = (function (){var G__60048 = ctx;
var G__60049 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60048,G__60049) : sci.impl.interpreter.interpret.call(null,G__60048,G__60049));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59750 = (function (){var G__60050 = ctx;
var G__60051 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60050,G__60051) : sci.impl.interpreter.interpret.call(null,G__60050,G__60051));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59751 = (function (){var G__60052 = ctx;
var G__60053 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60052,G__60053) : sci.impl.interpreter.interpret.call(null,G__60052,G__60053));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59752 = (function (){var G__60054 = ctx;
var G__60055 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60054,G__60055) : sci.impl.interpreter.interpret.call(null,G__60054,G__60055));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59753 = (function (){var G__60056 = ctx;
var G__60057 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60056,G__60057) : sci.impl.interpreter.interpret.call(null,G__60056,G__60057));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59754 = (function (){var G__60058 = ctx;
var G__60059 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60058,G__60059) : sci.impl.interpreter.interpret.call(null,G__60058,G__60059));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59755 = (function (){var G__60060 = ctx;
var G__60061 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60060,G__60061) : sci.impl.interpreter.interpret.call(null,G__60060,G__60061));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59756 = (function (){var G__60062 = ctx;
var G__60063 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60062,G__60063) : sci.impl.interpreter.interpret.call(null,G__60062,G__60063));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59757 = (function (){var G__60064 = ctx;
var G__60065 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60064,G__60065) : sci.impl.interpreter.interpret.call(null,G__60064,G__60065));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59758 = (function (){var G__60066 = ctx;
var G__60067 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60066,G__60067) : sci.impl.interpreter.interpret.call(null,G__60066,G__60067));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59759 = (function (){var G__60068 = ctx;
var G__60069 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60068,G__60069) : sci.impl.interpreter.interpret.call(null,G__60068,G__60069));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59760 = (function (){var G__60070 = ctx;
var G__60071 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60070,G__60071) : sci.impl.interpreter.interpret.call(null,G__60070,G__60071));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg59746,arg59747,arg59748,arg59749,arg59750,arg59751,arg59752,arg59753,arg59754,arg59755,arg59756,arg59757,arg59758,arg59759,arg59760) : f.call(null,arg59746,arg59747,arg59748,arg59749,arg59750,arg59751,arg59752,arg59753,arg59754,arg59755,arg59756,arg59757,arg59758,arg59759,arg59760));

break;
case (16):
var arg59761 = (function (){var G__60072 = ctx;
var G__60073 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60072,G__60073) : sci.impl.interpreter.interpret.call(null,G__60072,G__60073));
})();
var args__$1 = cljs.core.rest(args);
var arg59762 = (function (){var G__60074 = ctx;
var G__60075 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60074,G__60075) : sci.impl.interpreter.interpret.call(null,G__60074,G__60075));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59763 = (function (){var G__60076 = ctx;
var G__60077 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60076,G__60077) : sci.impl.interpreter.interpret.call(null,G__60076,G__60077));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59764 = (function (){var G__60078 = ctx;
var G__60079 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60078,G__60079) : sci.impl.interpreter.interpret.call(null,G__60078,G__60079));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59765 = (function (){var G__60080 = ctx;
var G__60081 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60080,G__60081) : sci.impl.interpreter.interpret.call(null,G__60080,G__60081));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59766 = (function (){var G__60082 = ctx;
var G__60083 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60082,G__60083) : sci.impl.interpreter.interpret.call(null,G__60082,G__60083));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59767 = (function (){var G__60084 = ctx;
var G__60085 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60084,G__60085) : sci.impl.interpreter.interpret.call(null,G__60084,G__60085));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59768 = (function (){var G__60086 = ctx;
var G__60087 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60086,G__60087) : sci.impl.interpreter.interpret.call(null,G__60086,G__60087));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59769 = (function (){var G__60088 = ctx;
var G__60089 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60088,G__60089) : sci.impl.interpreter.interpret.call(null,G__60088,G__60089));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59770 = (function (){var G__60090 = ctx;
var G__60091 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60090,G__60091) : sci.impl.interpreter.interpret.call(null,G__60090,G__60091));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59771 = (function (){var G__60092 = ctx;
var G__60093 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60092,G__60093) : sci.impl.interpreter.interpret.call(null,G__60092,G__60093));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59772 = (function (){var G__60094 = ctx;
var G__60095 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60094,G__60095) : sci.impl.interpreter.interpret.call(null,G__60094,G__60095));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59773 = (function (){var G__60096 = ctx;
var G__60097 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60096,G__60097) : sci.impl.interpreter.interpret.call(null,G__60096,G__60097));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59774 = (function (){var G__60098 = ctx;
var G__60099 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60098,G__60099) : sci.impl.interpreter.interpret.call(null,G__60098,G__60099));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59775 = (function (){var G__60100 = ctx;
var G__60101 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60100,G__60101) : sci.impl.interpreter.interpret.call(null,G__60100,G__60101));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59776 = (function (){var G__60102 = ctx;
var G__60103 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60102,G__60103) : sci.impl.interpreter.interpret.call(null,G__60102,G__60103));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg59761,arg59762,arg59763,arg59764,arg59765,arg59766,arg59767,arg59768,arg59769,arg59770,arg59771,arg59772,arg59773,arg59774,arg59775,arg59776) : f.call(null,arg59761,arg59762,arg59763,arg59764,arg59765,arg59766,arg59767,arg59768,arg59769,arg59770,arg59771,arg59772,arg59773,arg59774,arg59775,arg59776));

break;
case (17):
var arg59777 = (function (){var G__60104 = ctx;
var G__60105 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60104,G__60105) : sci.impl.interpreter.interpret.call(null,G__60104,G__60105));
})();
var args__$1 = cljs.core.rest(args);
var arg59778 = (function (){var G__60106 = ctx;
var G__60107 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60106,G__60107) : sci.impl.interpreter.interpret.call(null,G__60106,G__60107));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59779 = (function (){var G__60108 = ctx;
var G__60109 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60108,G__60109) : sci.impl.interpreter.interpret.call(null,G__60108,G__60109));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59780 = (function (){var G__60110 = ctx;
var G__60111 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60110,G__60111) : sci.impl.interpreter.interpret.call(null,G__60110,G__60111));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59781 = (function (){var G__60112 = ctx;
var G__60113 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60112,G__60113) : sci.impl.interpreter.interpret.call(null,G__60112,G__60113));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59782 = (function (){var G__60114 = ctx;
var G__60115 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60114,G__60115) : sci.impl.interpreter.interpret.call(null,G__60114,G__60115));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59783 = (function (){var G__60116 = ctx;
var G__60117 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60116,G__60117) : sci.impl.interpreter.interpret.call(null,G__60116,G__60117));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59784 = (function (){var G__60118 = ctx;
var G__60119 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60118,G__60119) : sci.impl.interpreter.interpret.call(null,G__60118,G__60119));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59785 = (function (){var G__60120 = ctx;
var G__60121 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60120,G__60121) : sci.impl.interpreter.interpret.call(null,G__60120,G__60121));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59786 = (function (){var G__60122 = ctx;
var G__60123 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60122,G__60123) : sci.impl.interpreter.interpret.call(null,G__60122,G__60123));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59787 = (function (){var G__60124 = ctx;
var G__60125 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60124,G__60125) : sci.impl.interpreter.interpret.call(null,G__60124,G__60125));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59788 = (function (){var G__60126 = ctx;
var G__60127 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60126,G__60127) : sci.impl.interpreter.interpret.call(null,G__60126,G__60127));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59789 = (function (){var G__60128 = ctx;
var G__60129 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60128,G__60129) : sci.impl.interpreter.interpret.call(null,G__60128,G__60129));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59790 = (function (){var G__60130 = ctx;
var G__60131 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60130,G__60131) : sci.impl.interpreter.interpret.call(null,G__60130,G__60131));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59791 = (function (){var G__60132 = ctx;
var G__60133 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60132,G__60133) : sci.impl.interpreter.interpret.call(null,G__60132,G__60133));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59792 = (function (){var G__60134 = ctx;
var G__60135 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60134,G__60135) : sci.impl.interpreter.interpret.call(null,G__60134,G__60135));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59793 = (function (){var G__60136 = ctx;
var G__60137 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60136,G__60137) : sci.impl.interpreter.interpret.call(null,G__60136,G__60137));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg59777,arg59778,arg59779,arg59780,arg59781,arg59782,arg59783,arg59784,arg59785,arg59786,arg59787,arg59788,arg59789,arg59790,arg59791,arg59792,arg59793) : f.call(null,arg59777,arg59778,arg59779,arg59780,arg59781,arg59782,arg59783,arg59784,arg59785,arg59786,arg59787,arg59788,arg59789,arg59790,arg59791,arg59792,arg59793));

break;
case (18):
var arg59794 = (function (){var G__60138 = ctx;
var G__60139 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60138,G__60139) : sci.impl.interpreter.interpret.call(null,G__60138,G__60139));
})();
var args__$1 = cljs.core.rest(args);
var arg59795 = (function (){var G__60140 = ctx;
var G__60141 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60140,G__60141) : sci.impl.interpreter.interpret.call(null,G__60140,G__60141));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59796 = (function (){var G__60142 = ctx;
var G__60143 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60142,G__60143) : sci.impl.interpreter.interpret.call(null,G__60142,G__60143));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59797 = (function (){var G__60144 = ctx;
var G__60145 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60144,G__60145) : sci.impl.interpreter.interpret.call(null,G__60144,G__60145));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59798 = (function (){var G__60146 = ctx;
var G__60147 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60146,G__60147) : sci.impl.interpreter.interpret.call(null,G__60146,G__60147));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59799 = (function (){var G__60148 = ctx;
var G__60149 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60148,G__60149) : sci.impl.interpreter.interpret.call(null,G__60148,G__60149));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59800 = (function (){var G__60150 = ctx;
var G__60151 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60150,G__60151) : sci.impl.interpreter.interpret.call(null,G__60150,G__60151));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59801 = (function (){var G__60152 = ctx;
var G__60153 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60152,G__60153) : sci.impl.interpreter.interpret.call(null,G__60152,G__60153));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59802 = (function (){var G__60154 = ctx;
var G__60155 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60154,G__60155) : sci.impl.interpreter.interpret.call(null,G__60154,G__60155));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59803 = (function (){var G__60156 = ctx;
var G__60157 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60156,G__60157) : sci.impl.interpreter.interpret.call(null,G__60156,G__60157));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59804 = (function (){var G__60158 = ctx;
var G__60159 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60158,G__60159) : sci.impl.interpreter.interpret.call(null,G__60158,G__60159));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59805 = (function (){var G__60160 = ctx;
var G__60161 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60160,G__60161) : sci.impl.interpreter.interpret.call(null,G__60160,G__60161));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59806 = (function (){var G__60162 = ctx;
var G__60163 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60162,G__60163) : sci.impl.interpreter.interpret.call(null,G__60162,G__60163));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59807 = (function (){var G__60164 = ctx;
var G__60165 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60164,G__60165) : sci.impl.interpreter.interpret.call(null,G__60164,G__60165));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59808 = (function (){var G__60166 = ctx;
var G__60167 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60166,G__60167) : sci.impl.interpreter.interpret.call(null,G__60166,G__60167));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59809 = (function (){var G__60168 = ctx;
var G__60169 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60168,G__60169) : sci.impl.interpreter.interpret.call(null,G__60168,G__60169));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59810 = (function (){var G__60170 = ctx;
var G__60171 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60170,G__60171) : sci.impl.interpreter.interpret.call(null,G__60170,G__60171));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59811 = (function (){var G__60172 = ctx;
var G__60173 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60172,G__60173) : sci.impl.interpreter.interpret.call(null,G__60172,G__60173));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg59794,arg59795,arg59796,arg59797,arg59798,arg59799,arg59800,arg59801,arg59802,arg59803,arg59804,arg59805,arg59806,arg59807,arg59808,arg59809,arg59810,arg59811) : f.call(null,arg59794,arg59795,arg59796,arg59797,arg59798,arg59799,arg59800,arg59801,arg59802,arg59803,arg59804,arg59805,arg59806,arg59807,arg59808,arg59809,arg59810,arg59811));

break;
case (19):
var arg59812 = (function (){var G__60174 = ctx;
var G__60175 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60174,G__60175) : sci.impl.interpreter.interpret.call(null,G__60174,G__60175));
})();
var args__$1 = cljs.core.rest(args);
var arg59813 = (function (){var G__60176 = ctx;
var G__60177 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60176,G__60177) : sci.impl.interpreter.interpret.call(null,G__60176,G__60177));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59814 = (function (){var G__60178 = ctx;
var G__60179 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60178,G__60179) : sci.impl.interpreter.interpret.call(null,G__60178,G__60179));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59815 = (function (){var G__60180 = ctx;
var G__60181 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60180,G__60181) : sci.impl.interpreter.interpret.call(null,G__60180,G__60181));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59816 = (function (){var G__60182 = ctx;
var G__60183 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60182,G__60183) : sci.impl.interpreter.interpret.call(null,G__60182,G__60183));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59817 = (function (){var G__60184 = ctx;
var G__60185 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60184,G__60185) : sci.impl.interpreter.interpret.call(null,G__60184,G__60185));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59818 = (function (){var G__60186 = ctx;
var G__60187 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60186,G__60187) : sci.impl.interpreter.interpret.call(null,G__60186,G__60187));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59819 = (function (){var G__60188 = ctx;
var G__60189 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60188,G__60189) : sci.impl.interpreter.interpret.call(null,G__60188,G__60189));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59820 = (function (){var G__60190 = ctx;
var G__60191 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60190,G__60191) : sci.impl.interpreter.interpret.call(null,G__60190,G__60191));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59821 = (function (){var G__60192 = ctx;
var G__60193 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60192,G__60193) : sci.impl.interpreter.interpret.call(null,G__60192,G__60193));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59822 = (function (){var G__60194 = ctx;
var G__60195 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60194,G__60195) : sci.impl.interpreter.interpret.call(null,G__60194,G__60195));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59823 = (function (){var G__60196 = ctx;
var G__60197 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60196,G__60197) : sci.impl.interpreter.interpret.call(null,G__60196,G__60197));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59824 = (function (){var G__60198 = ctx;
var G__60199 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60198,G__60199) : sci.impl.interpreter.interpret.call(null,G__60198,G__60199));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59825 = (function (){var G__60200 = ctx;
var G__60201 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60200,G__60201) : sci.impl.interpreter.interpret.call(null,G__60200,G__60201));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59826 = (function (){var G__60202 = ctx;
var G__60203 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60202,G__60203) : sci.impl.interpreter.interpret.call(null,G__60202,G__60203));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59827 = (function (){var G__60204 = ctx;
var G__60205 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60204,G__60205) : sci.impl.interpreter.interpret.call(null,G__60204,G__60205));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59828 = (function (){var G__60206 = ctx;
var G__60207 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60206,G__60207) : sci.impl.interpreter.interpret.call(null,G__60206,G__60207));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59829 = (function (){var G__60208 = ctx;
var G__60209 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60208,G__60209) : sci.impl.interpreter.interpret.call(null,G__60208,G__60209));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg59830 = (function (){var G__60210 = ctx;
var G__60211 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60210,G__60211) : sci.impl.interpreter.interpret.call(null,G__60210,G__60211));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg59812,arg59813,arg59814,arg59815,arg59816,arg59817,arg59818,arg59819,arg59820,arg59821,arg59822,arg59823,arg59824,arg59825,arg59826,arg59827,arg59828,arg59829,arg59830) : f.call(null,arg59812,arg59813,arg59814,arg59815,arg59816,arg59817,arg59818,arg59819,arg59820,arg59821,arg59822,arg59823,arg59824,arg59825,arg59826,arg59827,arg59828,arg59829,arg59830));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__60212 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__60212)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__60212)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__60212)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__60212)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__60212)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__60212)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__60213 = ctx;
var G__60214 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60213,G__60214) : sci.impl.interpreter.interpret.call(null,G__60213,G__60214));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__60212)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__60212)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__60212)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__60212)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__60212)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__60212)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__60212)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__60212)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__60212)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__60215 = ctx;
var G__60216 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60215,G__60216) : sci.impl.interpreter.interpret.call(null,G__60215,G__60216));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__60212)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__60212)){
return (new cljs.core.LazySeq(null,(function (){var G__60217 = ctx;
var G__60218 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60217,G__60218) : sci.impl.interpreter.interpret.call(null,G__60217,G__60218));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__60212)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__60212)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__60212)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__60212)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60212)].join('')));

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
if(cljs.core.truth_((function (){var G__60220 = op;
var G__60221 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60220,G__60221) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60220,G__60221));
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
}catch (e60219){if((e60219 instanceof Error)){
var e = e60219;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e60219;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__60228 = op;
var G__60228__$1 = (((G__60228 instanceof cljs.core.Keyword))?G__60228.fqn:null);
switch (G__60228__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60225_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60225_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60225_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60226_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60226_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60226_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60227_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60227_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60227_SHARP_));
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
var G__60279 = cljs.core.rest(exprs);
var G__60280 = (function (){var G__60231 = ctx;
var G__60232 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__60231,G__60232) : sci.impl.interpreter.eval_form.call(null,G__60231,G__60232));
})();
exprs = G__60279;
ret = G__60280;
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
if(cljs.core.truth_((function (){var G__60235 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__60236 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60235,G__60236) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60235,G__60236));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__60281 = ret__$1;
ret = G__60281;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__60238 = arguments.length;
switch (G__60238) {
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
