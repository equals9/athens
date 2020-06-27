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
var G__59797 = xs;
args__$2 = G__59797;
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
var G__59798 = xs;
args__$2 = G__59798;
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
var len__4789__auto___59799 = arguments.length;
var i__4790__auto___59800 = (0);
while(true){
if((i__4790__auto___59800 < len__4789__auto___59799)){
args__4795__auto__.push((arguments[i__4790__auto___59800]));

var G__59801 = (i__4790__auto___59800 + (1));
i__4790__auto___59800 = G__59801;
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
var G__59802 = ctx__$2;
var G__59803 = rest_let_bindings;
ctx__$1 = G__59802;
let_bindings__$1 = G__59803;
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
var G__59804 = nexprs;
exprs__$1 = G__59804;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59031){
var G__59032 = cljs.core.first(seq59031);
var seq59031__$1 = cljs.core.next(seq59031);
var G__59033 = cljs.core.first(seq59031__$1);
var seq59031__$2 = cljs.core.next(seq59031__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59032,G__59033,seq59031__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59036){
var vec__59038 = p__59036;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59038,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59038,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59038,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59038,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59041 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59042 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59041,G__59042) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59041,G__59042));
})())?(function (){var G__59043 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59043,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59043;
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
var vec__59048 = libspec;
var seq__59049 = cljs.core.seq(vec__59048);
var first__59050 = cljs.core.first(seq__59049);
var seq__59049__$1 = cljs.core.next(seq__59049);
var lib_name = first__59050;
var opts = seq__59049__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59054 = opts;
var vec__59055 = G__59054;
var seq__59056 = cljs.core.seq(vec__59055);
var first__59057 = cljs.core.first(seq__59056);
var seq__59056__$1 = cljs.core.next(seq__59056);
var opt_name = first__59057;
var first__59057__$1 = cljs.core.first(seq__59056__$1);
var seq__59056__$2 = cljs.core.next(seq__59056__$1);
var fst_opt = first__59057__$1;
var rst_opts = seq__59056__$2;
var ret__$1 = ret;
var G__59054__$1 = G__59054;
while(true){
var ret__$2 = ret__$1;
var vec__59062 = G__59054__$1;
var seq__59063 = cljs.core.seq(vec__59062);
var first__59064 = cljs.core.first(seq__59063);
var seq__59063__$1 = cljs.core.next(seq__59063);
var opt_name__$1 = first__59064;
var first__59064__$1 = cljs.core.first(seq__59063__$1);
var seq__59063__$2 = cljs.core.next(seq__59063__$1);
var fst_opt__$1 = first__59064__$1;
var rst_opts__$1 = seq__59063__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59065 = opt_name__$1;
var G__59065__$1 = (((G__59065 instanceof cljs.core.Keyword))?G__59065.fqn:null);
switch (G__59065__$1) {
case "as":
var G__59806 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__59807 = rst_opts__$1;
ret__$1 = G__59806;
G__59054__$1 = G__59807;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__59808 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__59809 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__59808;
G__59054__$1 = G__59809;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__59810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__59811 = rst_opts__$1;
ret__$1 = G__59810;
G__59054__$1 = G__59811;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59065__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59066){
var vec__59067 = p__59066;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59067,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59070){
var map__59071 = p__59070;
var map__59071__$1 = (((((!((map__59071 == null))))?(((((map__59071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59071):map__59071);
var _parsed_libspec = map__59071__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59075 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59076 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59075,G__59076) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59075,G__59076));
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
var vec__59077 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59077,(1),null);
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
var map__59081 = sci.impl.interpreter.parse_libspec(libspec);
var map__59081__$1 = (((((!((map__59081 == null))))?(((((map__59081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59081):map__59081);
var parsed_libspec = map__59081__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59081__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59081__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59083 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59083) : load_fn.call(null,G__59083));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59084 = temp__5733__auto____$2;
var map__59084__$1 = (((((!((map__59084 == null))))?(((((map__59084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59084):map__59084);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59084__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59084__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59088_59812 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59089_59813 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59088_59812,G__59089_59813) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59088_59812,G__59089_59813));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59086){if((e59086 instanceof Error)){
var e_59814 = e59086;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_59814;
} else {
throw e59086;

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
var len__4789__auto___59815 = arguments.length;
var i__4790__auto___59816 = (0);
while(true){
if((i__4790__auto___59816 < len__4789__auto___59815)){
args__4795__auto__.push((arguments[i__4790__auto___59816]));

var G__59817 = (i__4790__auto___59816 + (1));
i__4790__auto___59816 = G__59817;
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
var ret = (function (){var G__59105 = ctx;
var G__59106 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59105,G__59106) : sci.impl.interpreter.interpret.call(null,G__59105,G__59106));
})();
if((ret instanceof cljs.core.Symbol)){
var G__59818 = (function (){var G__59107 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59107,current_libspec);
} else {
return G__59107;
}
})();
var G__59819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__59820 = cljs.core.next(args__$1);
libspecs = G__59818;
current_libspec = G__59819;
args__$1 = G__59820;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__59821 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__59822 = null;
var G__59823 = cljs.core.next(args__$1);
libspecs = G__59821;
current_libspec = G__59822;
args__$1 = G__59823;
continue;
} else {
var G__59824 = (function (){var G__59110 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59110,current_libspec);
} else {
return G__59110;
}
})();
var G__59825 = ret;
var G__59826 = cljs.core.next(args__$1);
libspecs = G__59824;
current_libspec = G__59825;
args__$1 = G__59826;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59112 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59112,current_libspec);
} else {
return G__59112;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59096_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59096_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59097){
var G__59098 = cljs.core.first(seq59097);
var seq59097__$1 = cljs.core.next(seq59097);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59098,seq59097__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59827 = arguments.length;
var i__4790__auto___59828 = (0);
while(true){
if((i__4790__auto___59828 < len__4789__auto___59827)){
args__4795__auto__.push((arguments[i__4790__auto___59828]));

var G__59829 = (i__4790__auto___59828 + (1));
i__4790__auto___59828 = G__59829;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59113){
var G__59114 = cljs.core.first(seq59113);
var seq59113__$1 = cljs.core.next(seq59113);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59114,seq59113__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59127){
var vec__59128 = p__59127;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59128,(0),null);
var map__59131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59128,(1),null);
var map__59131__$1 = (((((!((map__59131 == null))))?(((((map__59131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59131):map__59131);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59136 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59136,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59136,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__59139 = ctx;
var G__59140 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59139,G__59140) : sci.impl.interpreter.interpret.call(null,G__59139,G__59140));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__59141 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__59141__$1 = (((((!((map__59141 == null))))?(((((map__59141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59141):map__59141);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59141__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59141__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59141__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__59149 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__59150 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__59150);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__59149);
}}catch (e59143){if((e59143 instanceof Error)){
var e = e59143;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__59144 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__59145 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59144,G__59145) : sci.impl.interpreter.interpret.call(null,G__59144,G__59145));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59146 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e59143;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__59151){
var vec__59152 = p__59151;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59152,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59152,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59155_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59155_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59155_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__59157){
var vec__59158 = p__59157;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59158,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59158,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59158,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59156_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59156_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59156_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__59163,p__59164){
var map__59165 = p__59163;
var map__59165__$1 = (((((!((map__59165 == null))))?(((((map__59165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59165):map__59165);
var ctx = map__59165__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59165__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__59166 = p__59164;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59166,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59166,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59166,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59166,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59162_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59162_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59162_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__59170){
var vec__59171 = p__59170;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59171,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59171,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__59174){
var vec__59175 = p__59174;
var seq__59176 = cljs.core.seq(vec__59175);
var first__59177 = cljs.core.first(seq__59176);
var seq__59176__$1 = cljs.core.next(seq__59176);
var _ = first__59177;
var first__59177__$1 = cljs.core.first(seq__59176__$1);
var seq__59176__$2 = cljs.core.next(seq__59176__$1);
var ns_sym = first__59177__$1;
var exprs = seq__59176__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__59178 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59178,(1),null);
var G__59181_59830 = k;
var G__59181_59831__$1 = (((G__59181_59830 instanceof cljs.core.Keyword))?G__59181_59830.fqn:null);
switch (G__59181_59831__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__59181_59830,G__59181_59831__$1,vec__59178,k,v,ns_sym__$1,vec__59175,seq__59176,first__59177,seq__59176__$1,_,first__59177__$1,seq__59176__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__59181_59830,G__59181_59831__$1,vec__59178,k,v,ns_sym__$1,vec__59175,seq__59176,first__59177,seq__59176__$1,_,first__59177__$1,seq__59176__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59181_59831__$1)].join('')));

}

var G__59833 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__59833;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__59182){
var vec__59183 = p__59182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59183,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59183,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59183,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__59189 = exprs;
var vec__59190 = G__59189;
var seq__59191 = cljs.core.seq(vec__59190);
var first__59192 = cljs.core.first(seq__59191);
var seq__59191__$1 = cljs.core.next(seq__59191);
var expr = first__59192;
var exprs__$1 = seq__59191__$1;
var G__59189__$1 = G__59189;
while(true){
var vec__59193 = G__59189__$1;
var seq__59194 = cljs.core.seq(vec__59193);
var first__59195 = cljs.core.first(seq__59194);
var seq__59194__$1 = cljs.core.next(seq__59194);
var expr__$1 = first__59195;
var exprs__$2 = seq__59194__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e59196){if((e59196 instanceof Error)){
var e = e59196;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e59196;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__59834 = exprs__$3;
G__59189__$1 = G__59834;
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
var G__59389 = cljs.core.count(args);
switch (G__59389) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg59199 = (function (){var G__59390 = ctx;
var G__59391 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59390,G__59391) : sci.impl.interpreter.interpret.call(null,G__59390,G__59391));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg59199) : f.call(null,arg59199));

break;
case (2):
var arg59200 = (function (){var G__59392 = ctx;
var G__59393 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59392,G__59393) : sci.impl.interpreter.interpret.call(null,G__59392,G__59393));
})();
var args__$1 = cljs.core.rest(args);
var arg59201 = (function (){var G__59394 = ctx;
var G__59395 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59394,G__59395) : sci.impl.interpreter.interpret.call(null,G__59394,G__59395));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg59200,arg59201) : f.call(null,arg59200,arg59201));

break;
case (3):
var arg59202 = (function (){var G__59396 = ctx;
var G__59397 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59396,G__59397) : sci.impl.interpreter.interpret.call(null,G__59396,G__59397));
})();
var args__$1 = cljs.core.rest(args);
var arg59203 = (function (){var G__59398 = ctx;
var G__59399 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59398,G__59399) : sci.impl.interpreter.interpret.call(null,G__59398,G__59399));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59204 = (function (){var G__59400 = ctx;
var G__59401 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59400,G__59401) : sci.impl.interpreter.interpret.call(null,G__59400,G__59401));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg59202,arg59203,arg59204) : f.call(null,arg59202,arg59203,arg59204));

break;
case (4):
var arg59205 = (function (){var G__59402 = ctx;
var G__59403 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59402,G__59403) : sci.impl.interpreter.interpret.call(null,G__59402,G__59403));
})();
var args__$1 = cljs.core.rest(args);
var arg59206 = (function (){var G__59404 = ctx;
var G__59405 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59404,G__59405) : sci.impl.interpreter.interpret.call(null,G__59404,G__59405));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59207 = (function (){var G__59406 = ctx;
var G__59407 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59406,G__59407) : sci.impl.interpreter.interpret.call(null,G__59406,G__59407));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59208 = (function (){var G__59408 = ctx;
var G__59409 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59408,G__59409) : sci.impl.interpreter.interpret.call(null,G__59408,G__59409));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg59205,arg59206,arg59207,arg59208) : f.call(null,arg59205,arg59206,arg59207,arg59208));

break;
case (5):
var arg59209 = (function (){var G__59410 = ctx;
var G__59411 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59410,G__59411) : sci.impl.interpreter.interpret.call(null,G__59410,G__59411));
})();
var args__$1 = cljs.core.rest(args);
var arg59210 = (function (){var G__59412 = ctx;
var G__59413 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59412,G__59413) : sci.impl.interpreter.interpret.call(null,G__59412,G__59413));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59211 = (function (){var G__59414 = ctx;
var G__59415 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59414,G__59415) : sci.impl.interpreter.interpret.call(null,G__59414,G__59415));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59212 = (function (){var G__59416 = ctx;
var G__59417 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59416,G__59417) : sci.impl.interpreter.interpret.call(null,G__59416,G__59417));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59213 = (function (){var G__59418 = ctx;
var G__59419 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59418,G__59419) : sci.impl.interpreter.interpret.call(null,G__59418,G__59419));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg59209,arg59210,arg59211,arg59212,arg59213) : f.call(null,arg59209,arg59210,arg59211,arg59212,arg59213));

break;
case (6):
var arg59214 = (function (){var G__59420 = ctx;
var G__59421 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59420,G__59421) : sci.impl.interpreter.interpret.call(null,G__59420,G__59421));
})();
var args__$1 = cljs.core.rest(args);
var arg59215 = (function (){var G__59422 = ctx;
var G__59423 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59422,G__59423) : sci.impl.interpreter.interpret.call(null,G__59422,G__59423));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59216 = (function (){var G__59424 = ctx;
var G__59425 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59424,G__59425) : sci.impl.interpreter.interpret.call(null,G__59424,G__59425));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59217 = (function (){var G__59426 = ctx;
var G__59427 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59426,G__59427) : sci.impl.interpreter.interpret.call(null,G__59426,G__59427));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59218 = (function (){var G__59428 = ctx;
var G__59429 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59428,G__59429) : sci.impl.interpreter.interpret.call(null,G__59428,G__59429));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59219 = (function (){var G__59430 = ctx;
var G__59431 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59430,G__59431) : sci.impl.interpreter.interpret.call(null,G__59430,G__59431));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg59214,arg59215,arg59216,arg59217,arg59218,arg59219) : f.call(null,arg59214,arg59215,arg59216,arg59217,arg59218,arg59219));

break;
case (7):
var arg59220 = (function (){var G__59432 = ctx;
var G__59433 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59432,G__59433) : sci.impl.interpreter.interpret.call(null,G__59432,G__59433));
})();
var args__$1 = cljs.core.rest(args);
var arg59221 = (function (){var G__59434 = ctx;
var G__59435 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59434,G__59435) : sci.impl.interpreter.interpret.call(null,G__59434,G__59435));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59222 = (function (){var G__59436 = ctx;
var G__59437 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59436,G__59437) : sci.impl.interpreter.interpret.call(null,G__59436,G__59437));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59223 = (function (){var G__59438 = ctx;
var G__59439 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59438,G__59439) : sci.impl.interpreter.interpret.call(null,G__59438,G__59439));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59224 = (function (){var G__59440 = ctx;
var G__59441 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59440,G__59441) : sci.impl.interpreter.interpret.call(null,G__59440,G__59441));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59225 = (function (){var G__59442 = ctx;
var G__59443 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59442,G__59443) : sci.impl.interpreter.interpret.call(null,G__59442,G__59443));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59226 = (function (){var G__59444 = ctx;
var G__59445 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59444,G__59445) : sci.impl.interpreter.interpret.call(null,G__59444,G__59445));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg59220,arg59221,arg59222,arg59223,arg59224,arg59225,arg59226) : f.call(null,arg59220,arg59221,arg59222,arg59223,arg59224,arg59225,arg59226));

break;
case (8):
var arg59227 = (function (){var G__59446 = ctx;
var G__59447 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59446,G__59447) : sci.impl.interpreter.interpret.call(null,G__59446,G__59447));
})();
var args__$1 = cljs.core.rest(args);
var arg59228 = (function (){var G__59448 = ctx;
var G__59449 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59448,G__59449) : sci.impl.interpreter.interpret.call(null,G__59448,G__59449));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59229 = (function (){var G__59450 = ctx;
var G__59451 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59450,G__59451) : sci.impl.interpreter.interpret.call(null,G__59450,G__59451));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59230 = (function (){var G__59452 = ctx;
var G__59453 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59452,G__59453) : sci.impl.interpreter.interpret.call(null,G__59452,G__59453));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59231 = (function (){var G__59454 = ctx;
var G__59455 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59454,G__59455) : sci.impl.interpreter.interpret.call(null,G__59454,G__59455));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59232 = (function (){var G__59456 = ctx;
var G__59457 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59456,G__59457) : sci.impl.interpreter.interpret.call(null,G__59456,G__59457));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59233 = (function (){var G__59458 = ctx;
var G__59459 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59458,G__59459) : sci.impl.interpreter.interpret.call(null,G__59458,G__59459));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59234 = (function (){var G__59460 = ctx;
var G__59461 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59460,G__59461) : sci.impl.interpreter.interpret.call(null,G__59460,G__59461));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg59227,arg59228,arg59229,arg59230,arg59231,arg59232,arg59233,arg59234) : f.call(null,arg59227,arg59228,arg59229,arg59230,arg59231,arg59232,arg59233,arg59234));

break;
case (9):
var arg59235 = (function (){var G__59462 = ctx;
var G__59463 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59462,G__59463) : sci.impl.interpreter.interpret.call(null,G__59462,G__59463));
})();
var args__$1 = cljs.core.rest(args);
var arg59236 = (function (){var G__59464 = ctx;
var G__59465 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59464,G__59465) : sci.impl.interpreter.interpret.call(null,G__59464,G__59465));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59237 = (function (){var G__59466 = ctx;
var G__59467 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59466,G__59467) : sci.impl.interpreter.interpret.call(null,G__59466,G__59467));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59238 = (function (){var G__59468 = ctx;
var G__59469 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59468,G__59469) : sci.impl.interpreter.interpret.call(null,G__59468,G__59469));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59239 = (function (){var G__59470 = ctx;
var G__59471 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59470,G__59471) : sci.impl.interpreter.interpret.call(null,G__59470,G__59471));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59240 = (function (){var G__59472 = ctx;
var G__59473 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59472,G__59473) : sci.impl.interpreter.interpret.call(null,G__59472,G__59473));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59241 = (function (){var G__59474 = ctx;
var G__59475 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59474,G__59475) : sci.impl.interpreter.interpret.call(null,G__59474,G__59475));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59242 = (function (){var G__59476 = ctx;
var G__59477 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59476,G__59477) : sci.impl.interpreter.interpret.call(null,G__59476,G__59477));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59243 = (function (){var G__59478 = ctx;
var G__59479 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59478,G__59479) : sci.impl.interpreter.interpret.call(null,G__59478,G__59479));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg59235,arg59236,arg59237,arg59238,arg59239,arg59240,arg59241,arg59242,arg59243) : f.call(null,arg59235,arg59236,arg59237,arg59238,arg59239,arg59240,arg59241,arg59242,arg59243));

break;
case (10):
var arg59244 = (function (){var G__59480 = ctx;
var G__59481 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59480,G__59481) : sci.impl.interpreter.interpret.call(null,G__59480,G__59481));
})();
var args__$1 = cljs.core.rest(args);
var arg59245 = (function (){var G__59482 = ctx;
var G__59483 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59482,G__59483) : sci.impl.interpreter.interpret.call(null,G__59482,G__59483));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59246 = (function (){var G__59484 = ctx;
var G__59485 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59484,G__59485) : sci.impl.interpreter.interpret.call(null,G__59484,G__59485));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59247 = (function (){var G__59486 = ctx;
var G__59487 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59486,G__59487) : sci.impl.interpreter.interpret.call(null,G__59486,G__59487));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59248 = (function (){var G__59488 = ctx;
var G__59489 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59488,G__59489) : sci.impl.interpreter.interpret.call(null,G__59488,G__59489));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59249 = (function (){var G__59490 = ctx;
var G__59491 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59490,G__59491) : sci.impl.interpreter.interpret.call(null,G__59490,G__59491));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59250 = (function (){var G__59492 = ctx;
var G__59493 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59492,G__59493) : sci.impl.interpreter.interpret.call(null,G__59492,G__59493));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59251 = (function (){var G__59494 = ctx;
var G__59495 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59494,G__59495) : sci.impl.interpreter.interpret.call(null,G__59494,G__59495));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59252 = (function (){var G__59496 = ctx;
var G__59497 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59496,G__59497) : sci.impl.interpreter.interpret.call(null,G__59496,G__59497));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59253 = (function (){var G__59498 = ctx;
var G__59499 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59498,G__59499) : sci.impl.interpreter.interpret.call(null,G__59498,G__59499));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg59244,arg59245,arg59246,arg59247,arg59248,arg59249,arg59250,arg59251,arg59252,arg59253) : f.call(null,arg59244,arg59245,arg59246,arg59247,arg59248,arg59249,arg59250,arg59251,arg59252,arg59253));

break;
case (11):
var arg59254 = (function (){var G__59500 = ctx;
var G__59501 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59500,G__59501) : sci.impl.interpreter.interpret.call(null,G__59500,G__59501));
})();
var args__$1 = cljs.core.rest(args);
var arg59255 = (function (){var G__59502 = ctx;
var G__59503 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59502,G__59503) : sci.impl.interpreter.interpret.call(null,G__59502,G__59503));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59256 = (function (){var G__59504 = ctx;
var G__59505 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59504,G__59505) : sci.impl.interpreter.interpret.call(null,G__59504,G__59505));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59257 = (function (){var G__59506 = ctx;
var G__59507 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59506,G__59507) : sci.impl.interpreter.interpret.call(null,G__59506,G__59507));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59258 = (function (){var G__59508 = ctx;
var G__59509 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59508,G__59509) : sci.impl.interpreter.interpret.call(null,G__59508,G__59509));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59259 = (function (){var G__59510 = ctx;
var G__59511 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59510,G__59511) : sci.impl.interpreter.interpret.call(null,G__59510,G__59511));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59260 = (function (){var G__59512 = ctx;
var G__59513 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59512,G__59513) : sci.impl.interpreter.interpret.call(null,G__59512,G__59513));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59261 = (function (){var G__59514 = ctx;
var G__59515 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59514,G__59515) : sci.impl.interpreter.interpret.call(null,G__59514,G__59515));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59262 = (function (){var G__59516 = ctx;
var G__59517 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59516,G__59517) : sci.impl.interpreter.interpret.call(null,G__59516,G__59517));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59263 = (function (){var G__59518 = ctx;
var G__59519 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59518,G__59519) : sci.impl.interpreter.interpret.call(null,G__59518,G__59519));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59264 = (function (){var G__59520 = ctx;
var G__59521 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59520,G__59521) : sci.impl.interpreter.interpret.call(null,G__59520,G__59521));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg59254,arg59255,arg59256,arg59257,arg59258,arg59259,arg59260,arg59261,arg59262,arg59263,arg59264) : f.call(null,arg59254,arg59255,arg59256,arg59257,arg59258,arg59259,arg59260,arg59261,arg59262,arg59263,arg59264));

break;
case (12):
var arg59265 = (function (){var G__59522 = ctx;
var G__59523 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59522,G__59523) : sci.impl.interpreter.interpret.call(null,G__59522,G__59523));
})();
var args__$1 = cljs.core.rest(args);
var arg59266 = (function (){var G__59524 = ctx;
var G__59525 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59524,G__59525) : sci.impl.interpreter.interpret.call(null,G__59524,G__59525));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59267 = (function (){var G__59526 = ctx;
var G__59527 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59526,G__59527) : sci.impl.interpreter.interpret.call(null,G__59526,G__59527));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59268 = (function (){var G__59528 = ctx;
var G__59529 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59528,G__59529) : sci.impl.interpreter.interpret.call(null,G__59528,G__59529));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59269 = (function (){var G__59530 = ctx;
var G__59531 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59530,G__59531) : sci.impl.interpreter.interpret.call(null,G__59530,G__59531));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59270 = (function (){var G__59532 = ctx;
var G__59533 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59532,G__59533) : sci.impl.interpreter.interpret.call(null,G__59532,G__59533));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59271 = (function (){var G__59534 = ctx;
var G__59535 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59534,G__59535) : sci.impl.interpreter.interpret.call(null,G__59534,G__59535));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59272 = (function (){var G__59536 = ctx;
var G__59537 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59536,G__59537) : sci.impl.interpreter.interpret.call(null,G__59536,G__59537));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59273 = (function (){var G__59538 = ctx;
var G__59539 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59538,G__59539) : sci.impl.interpreter.interpret.call(null,G__59538,G__59539));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59274 = (function (){var G__59540 = ctx;
var G__59541 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59540,G__59541) : sci.impl.interpreter.interpret.call(null,G__59540,G__59541));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59275 = (function (){var G__59542 = ctx;
var G__59543 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59542,G__59543) : sci.impl.interpreter.interpret.call(null,G__59542,G__59543));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59276 = (function (){var G__59544 = ctx;
var G__59545 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59544,G__59545) : sci.impl.interpreter.interpret.call(null,G__59544,G__59545));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg59265,arg59266,arg59267,arg59268,arg59269,arg59270,arg59271,arg59272,arg59273,arg59274,arg59275,arg59276) : f.call(null,arg59265,arg59266,arg59267,arg59268,arg59269,arg59270,arg59271,arg59272,arg59273,arg59274,arg59275,arg59276));

break;
case (13):
var arg59277 = (function (){var G__59546 = ctx;
var G__59547 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59546,G__59547) : sci.impl.interpreter.interpret.call(null,G__59546,G__59547));
})();
var args__$1 = cljs.core.rest(args);
var arg59278 = (function (){var G__59548 = ctx;
var G__59549 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59548,G__59549) : sci.impl.interpreter.interpret.call(null,G__59548,G__59549));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59279 = (function (){var G__59550 = ctx;
var G__59551 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59550,G__59551) : sci.impl.interpreter.interpret.call(null,G__59550,G__59551));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59280 = (function (){var G__59552 = ctx;
var G__59553 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59552,G__59553) : sci.impl.interpreter.interpret.call(null,G__59552,G__59553));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59281 = (function (){var G__59554 = ctx;
var G__59555 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59554,G__59555) : sci.impl.interpreter.interpret.call(null,G__59554,G__59555));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59282 = (function (){var G__59556 = ctx;
var G__59557 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59556,G__59557) : sci.impl.interpreter.interpret.call(null,G__59556,G__59557));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59283 = (function (){var G__59558 = ctx;
var G__59559 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59558,G__59559) : sci.impl.interpreter.interpret.call(null,G__59558,G__59559));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59284 = (function (){var G__59560 = ctx;
var G__59561 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59560,G__59561) : sci.impl.interpreter.interpret.call(null,G__59560,G__59561));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59285 = (function (){var G__59562 = ctx;
var G__59563 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59562,G__59563) : sci.impl.interpreter.interpret.call(null,G__59562,G__59563));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59286 = (function (){var G__59564 = ctx;
var G__59565 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59564,G__59565) : sci.impl.interpreter.interpret.call(null,G__59564,G__59565));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59287 = (function (){var G__59566 = ctx;
var G__59567 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59566,G__59567) : sci.impl.interpreter.interpret.call(null,G__59566,G__59567));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59288 = (function (){var G__59568 = ctx;
var G__59569 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59568,G__59569) : sci.impl.interpreter.interpret.call(null,G__59568,G__59569));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59289 = (function (){var G__59570 = ctx;
var G__59571 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59570,G__59571) : sci.impl.interpreter.interpret.call(null,G__59570,G__59571));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg59277,arg59278,arg59279,arg59280,arg59281,arg59282,arg59283,arg59284,arg59285,arg59286,arg59287,arg59288,arg59289) : f.call(null,arg59277,arg59278,arg59279,arg59280,arg59281,arg59282,arg59283,arg59284,arg59285,arg59286,arg59287,arg59288,arg59289));

break;
case (14):
var arg59290 = (function (){var G__59572 = ctx;
var G__59573 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59572,G__59573) : sci.impl.interpreter.interpret.call(null,G__59572,G__59573));
})();
var args__$1 = cljs.core.rest(args);
var arg59291 = (function (){var G__59574 = ctx;
var G__59575 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59574,G__59575) : sci.impl.interpreter.interpret.call(null,G__59574,G__59575));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59292 = (function (){var G__59576 = ctx;
var G__59577 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59576,G__59577) : sci.impl.interpreter.interpret.call(null,G__59576,G__59577));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59293 = (function (){var G__59578 = ctx;
var G__59579 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59578,G__59579) : sci.impl.interpreter.interpret.call(null,G__59578,G__59579));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59294 = (function (){var G__59580 = ctx;
var G__59581 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59580,G__59581) : sci.impl.interpreter.interpret.call(null,G__59580,G__59581));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59295 = (function (){var G__59582 = ctx;
var G__59583 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59582,G__59583) : sci.impl.interpreter.interpret.call(null,G__59582,G__59583));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59296 = (function (){var G__59584 = ctx;
var G__59585 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59584,G__59585) : sci.impl.interpreter.interpret.call(null,G__59584,G__59585));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59297 = (function (){var G__59586 = ctx;
var G__59587 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59586,G__59587) : sci.impl.interpreter.interpret.call(null,G__59586,G__59587));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59298 = (function (){var G__59588 = ctx;
var G__59589 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59588,G__59589) : sci.impl.interpreter.interpret.call(null,G__59588,G__59589));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59299 = (function (){var G__59590 = ctx;
var G__59591 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59590,G__59591) : sci.impl.interpreter.interpret.call(null,G__59590,G__59591));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59300 = (function (){var G__59592 = ctx;
var G__59593 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59592,G__59593) : sci.impl.interpreter.interpret.call(null,G__59592,G__59593));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59301 = (function (){var G__59594 = ctx;
var G__59595 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59594,G__59595) : sci.impl.interpreter.interpret.call(null,G__59594,G__59595));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59302 = (function (){var G__59596 = ctx;
var G__59597 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59596,G__59597) : sci.impl.interpreter.interpret.call(null,G__59596,G__59597));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59303 = (function (){var G__59598 = ctx;
var G__59599 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59598,G__59599) : sci.impl.interpreter.interpret.call(null,G__59598,G__59599));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg59290,arg59291,arg59292,arg59293,arg59294,arg59295,arg59296,arg59297,arg59298,arg59299,arg59300,arg59301,arg59302,arg59303) : f.call(null,arg59290,arg59291,arg59292,arg59293,arg59294,arg59295,arg59296,arg59297,arg59298,arg59299,arg59300,arg59301,arg59302,arg59303));

break;
case (15):
var arg59304 = (function (){var G__59600 = ctx;
var G__59601 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59600,G__59601) : sci.impl.interpreter.interpret.call(null,G__59600,G__59601));
})();
var args__$1 = cljs.core.rest(args);
var arg59305 = (function (){var G__59602 = ctx;
var G__59603 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59602,G__59603) : sci.impl.interpreter.interpret.call(null,G__59602,G__59603));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59306 = (function (){var G__59604 = ctx;
var G__59605 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59604,G__59605) : sci.impl.interpreter.interpret.call(null,G__59604,G__59605));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59307 = (function (){var G__59606 = ctx;
var G__59607 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59606,G__59607) : sci.impl.interpreter.interpret.call(null,G__59606,G__59607));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59308 = (function (){var G__59608 = ctx;
var G__59609 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59608,G__59609) : sci.impl.interpreter.interpret.call(null,G__59608,G__59609));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59309 = (function (){var G__59610 = ctx;
var G__59611 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59610,G__59611) : sci.impl.interpreter.interpret.call(null,G__59610,G__59611));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59310 = (function (){var G__59612 = ctx;
var G__59613 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59612,G__59613) : sci.impl.interpreter.interpret.call(null,G__59612,G__59613));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59311 = (function (){var G__59614 = ctx;
var G__59615 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59614,G__59615) : sci.impl.interpreter.interpret.call(null,G__59614,G__59615));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59312 = (function (){var G__59616 = ctx;
var G__59617 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59616,G__59617) : sci.impl.interpreter.interpret.call(null,G__59616,G__59617));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59313 = (function (){var G__59618 = ctx;
var G__59619 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59618,G__59619) : sci.impl.interpreter.interpret.call(null,G__59618,G__59619));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59314 = (function (){var G__59620 = ctx;
var G__59621 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59620,G__59621) : sci.impl.interpreter.interpret.call(null,G__59620,G__59621));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59315 = (function (){var G__59622 = ctx;
var G__59623 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59622,G__59623) : sci.impl.interpreter.interpret.call(null,G__59622,G__59623));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59316 = (function (){var G__59624 = ctx;
var G__59625 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59624,G__59625) : sci.impl.interpreter.interpret.call(null,G__59624,G__59625));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59317 = (function (){var G__59626 = ctx;
var G__59627 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59626,G__59627) : sci.impl.interpreter.interpret.call(null,G__59626,G__59627));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59318 = (function (){var G__59628 = ctx;
var G__59629 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59628,G__59629) : sci.impl.interpreter.interpret.call(null,G__59628,G__59629));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg59304,arg59305,arg59306,arg59307,arg59308,arg59309,arg59310,arg59311,arg59312,arg59313,arg59314,arg59315,arg59316,arg59317,arg59318) : f.call(null,arg59304,arg59305,arg59306,arg59307,arg59308,arg59309,arg59310,arg59311,arg59312,arg59313,arg59314,arg59315,arg59316,arg59317,arg59318));

break;
case (16):
var arg59319 = (function (){var G__59630 = ctx;
var G__59631 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59630,G__59631) : sci.impl.interpreter.interpret.call(null,G__59630,G__59631));
})();
var args__$1 = cljs.core.rest(args);
var arg59320 = (function (){var G__59632 = ctx;
var G__59633 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59632,G__59633) : sci.impl.interpreter.interpret.call(null,G__59632,G__59633));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59321 = (function (){var G__59634 = ctx;
var G__59635 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59634,G__59635) : sci.impl.interpreter.interpret.call(null,G__59634,G__59635));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59322 = (function (){var G__59636 = ctx;
var G__59637 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59636,G__59637) : sci.impl.interpreter.interpret.call(null,G__59636,G__59637));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59323 = (function (){var G__59638 = ctx;
var G__59639 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59638,G__59639) : sci.impl.interpreter.interpret.call(null,G__59638,G__59639));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59324 = (function (){var G__59640 = ctx;
var G__59641 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59640,G__59641) : sci.impl.interpreter.interpret.call(null,G__59640,G__59641));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59325 = (function (){var G__59642 = ctx;
var G__59643 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59642,G__59643) : sci.impl.interpreter.interpret.call(null,G__59642,G__59643));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59326 = (function (){var G__59644 = ctx;
var G__59645 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59644,G__59645) : sci.impl.interpreter.interpret.call(null,G__59644,G__59645));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59327 = (function (){var G__59646 = ctx;
var G__59647 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59646,G__59647) : sci.impl.interpreter.interpret.call(null,G__59646,G__59647));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59328 = (function (){var G__59648 = ctx;
var G__59649 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59648,G__59649) : sci.impl.interpreter.interpret.call(null,G__59648,G__59649));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59329 = (function (){var G__59650 = ctx;
var G__59651 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59650,G__59651) : sci.impl.interpreter.interpret.call(null,G__59650,G__59651));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59330 = (function (){var G__59652 = ctx;
var G__59653 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59652,G__59653) : sci.impl.interpreter.interpret.call(null,G__59652,G__59653));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59331 = (function (){var G__59654 = ctx;
var G__59655 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59654,G__59655) : sci.impl.interpreter.interpret.call(null,G__59654,G__59655));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59332 = (function (){var G__59656 = ctx;
var G__59657 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59656,G__59657) : sci.impl.interpreter.interpret.call(null,G__59656,G__59657));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59333 = (function (){var G__59658 = ctx;
var G__59659 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59658,G__59659) : sci.impl.interpreter.interpret.call(null,G__59658,G__59659));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59334 = (function (){var G__59660 = ctx;
var G__59661 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59660,G__59661) : sci.impl.interpreter.interpret.call(null,G__59660,G__59661));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg59319,arg59320,arg59321,arg59322,arg59323,arg59324,arg59325,arg59326,arg59327,arg59328,arg59329,arg59330,arg59331,arg59332,arg59333,arg59334) : f.call(null,arg59319,arg59320,arg59321,arg59322,arg59323,arg59324,arg59325,arg59326,arg59327,arg59328,arg59329,arg59330,arg59331,arg59332,arg59333,arg59334));

break;
case (17):
var arg59335 = (function (){var G__59662 = ctx;
var G__59663 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59662,G__59663) : sci.impl.interpreter.interpret.call(null,G__59662,G__59663));
})();
var args__$1 = cljs.core.rest(args);
var arg59336 = (function (){var G__59664 = ctx;
var G__59665 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59664,G__59665) : sci.impl.interpreter.interpret.call(null,G__59664,G__59665));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59337 = (function (){var G__59666 = ctx;
var G__59667 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59666,G__59667) : sci.impl.interpreter.interpret.call(null,G__59666,G__59667));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59338 = (function (){var G__59668 = ctx;
var G__59669 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59668,G__59669) : sci.impl.interpreter.interpret.call(null,G__59668,G__59669));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59339 = (function (){var G__59670 = ctx;
var G__59671 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59670,G__59671) : sci.impl.interpreter.interpret.call(null,G__59670,G__59671));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59340 = (function (){var G__59672 = ctx;
var G__59673 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59672,G__59673) : sci.impl.interpreter.interpret.call(null,G__59672,G__59673));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59341 = (function (){var G__59674 = ctx;
var G__59675 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59674,G__59675) : sci.impl.interpreter.interpret.call(null,G__59674,G__59675));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59342 = (function (){var G__59676 = ctx;
var G__59677 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59676,G__59677) : sci.impl.interpreter.interpret.call(null,G__59676,G__59677));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59343 = (function (){var G__59678 = ctx;
var G__59679 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59678,G__59679) : sci.impl.interpreter.interpret.call(null,G__59678,G__59679));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59344 = (function (){var G__59680 = ctx;
var G__59681 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59680,G__59681) : sci.impl.interpreter.interpret.call(null,G__59680,G__59681));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59345 = (function (){var G__59682 = ctx;
var G__59683 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59682,G__59683) : sci.impl.interpreter.interpret.call(null,G__59682,G__59683));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59346 = (function (){var G__59684 = ctx;
var G__59685 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59684,G__59685) : sci.impl.interpreter.interpret.call(null,G__59684,G__59685));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59347 = (function (){var G__59686 = ctx;
var G__59687 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59686,G__59687) : sci.impl.interpreter.interpret.call(null,G__59686,G__59687));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59348 = (function (){var G__59688 = ctx;
var G__59689 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59688,G__59689) : sci.impl.interpreter.interpret.call(null,G__59688,G__59689));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59349 = (function (){var G__59690 = ctx;
var G__59691 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59690,G__59691) : sci.impl.interpreter.interpret.call(null,G__59690,G__59691));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59350 = (function (){var G__59692 = ctx;
var G__59693 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59692,G__59693) : sci.impl.interpreter.interpret.call(null,G__59692,G__59693));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59351 = (function (){var G__59694 = ctx;
var G__59695 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59694,G__59695) : sci.impl.interpreter.interpret.call(null,G__59694,G__59695));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg59335,arg59336,arg59337,arg59338,arg59339,arg59340,arg59341,arg59342,arg59343,arg59344,arg59345,arg59346,arg59347,arg59348,arg59349,arg59350,arg59351) : f.call(null,arg59335,arg59336,arg59337,arg59338,arg59339,arg59340,arg59341,arg59342,arg59343,arg59344,arg59345,arg59346,arg59347,arg59348,arg59349,arg59350,arg59351));

break;
case (18):
var arg59352 = (function (){var G__59696 = ctx;
var G__59697 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59696,G__59697) : sci.impl.interpreter.interpret.call(null,G__59696,G__59697));
})();
var args__$1 = cljs.core.rest(args);
var arg59353 = (function (){var G__59698 = ctx;
var G__59699 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59698,G__59699) : sci.impl.interpreter.interpret.call(null,G__59698,G__59699));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59354 = (function (){var G__59700 = ctx;
var G__59701 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59700,G__59701) : sci.impl.interpreter.interpret.call(null,G__59700,G__59701));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59355 = (function (){var G__59702 = ctx;
var G__59703 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59702,G__59703) : sci.impl.interpreter.interpret.call(null,G__59702,G__59703));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59356 = (function (){var G__59704 = ctx;
var G__59705 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59704,G__59705) : sci.impl.interpreter.interpret.call(null,G__59704,G__59705));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59357 = (function (){var G__59706 = ctx;
var G__59707 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59706,G__59707) : sci.impl.interpreter.interpret.call(null,G__59706,G__59707));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59358 = (function (){var G__59708 = ctx;
var G__59709 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59708,G__59709) : sci.impl.interpreter.interpret.call(null,G__59708,G__59709));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59359 = (function (){var G__59710 = ctx;
var G__59711 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59710,G__59711) : sci.impl.interpreter.interpret.call(null,G__59710,G__59711));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59360 = (function (){var G__59712 = ctx;
var G__59713 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59712,G__59713) : sci.impl.interpreter.interpret.call(null,G__59712,G__59713));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59361 = (function (){var G__59714 = ctx;
var G__59715 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59714,G__59715) : sci.impl.interpreter.interpret.call(null,G__59714,G__59715));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59362 = (function (){var G__59716 = ctx;
var G__59717 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59716,G__59717) : sci.impl.interpreter.interpret.call(null,G__59716,G__59717));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59363 = (function (){var G__59718 = ctx;
var G__59719 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59718,G__59719) : sci.impl.interpreter.interpret.call(null,G__59718,G__59719));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59364 = (function (){var G__59720 = ctx;
var G__59721 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59720,G__59721) : sci.impl.interpreter.interpret.call(null,G__59720,G__59721));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59365 = (function (){var G__59722 = ctx;
var G__59723 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59722,G__59723) : sci.impl.interpreter.interpret.call(null,G__59722,G__59723));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59366 = (function (){var G__59724 = ctx;
var G__59725 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59724,G__59725) : sci.impl.interpreter.interpret.call(null,G__59724,G__59725));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59367 = (function (){var G__59726 = ctx;
var G__59727 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59726,G__59727) : sci.impl.interpreter.interpret.call(null,G__59726,G__59727));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59368 = (function (){var G__59728 = ctx;
var G__59729 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59728,G__59729) : sci.impl.interpreter.interpret.call(null,G__59728,G__59729));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59369 = (function (){var G__59730 = ctx;
var G__59731 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59730,G__59731) : sci.impl.interpreter.interpret.call(null,G__59730,G__59731));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg59352,arg59353,arg59354,arg59355,arg59356,arg59357,arg59358,arg59359,arg59360,arg59361,arg59362,arg59363,arg59364,arg59365,arg59366,arg59367,arg59368,arg59369) : f.call(null,arg59352,arg59353,arg59354,arg59355,arg59356,arg59357,arg59358,arg59359,arg59360,arg59361,arg59362,arg59363,arg59364,arg59365,arg59366,arg59367,arg59368,arg59369));

break;
case (19):
var arg59370 = (function (){var G__59732 = ctx;
var G__59733 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59732,G__59733) : sci.impl.interpreter.interpret.call(null,G__59732,G__59733));
})();
var args__$1 = cljs.core.rest(args);
var arg59371 = (function (){var G__59734 = ctx;
var G__59735 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59734,G__59735) : sci.impl.interpreter.interpret.call(null,G__59734,G__59735));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59372 = (function (){var G__59736 = ctx;
var G__59737 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59736,G__59737) : sci.impl.interpreter.interpret.call(null,G__59736,G__59737));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59373 = (function (){var G__59738 = ctx;
var G__59739 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59738,G__59739) : sci.impl.interpreter.interpret.call(null,G__59738,G__59739));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59374 = (function (){var G__59740 = ctx;
var G__59741 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59740,G__59741) : sci.impl.interpreter.interpret.call(null,G__59740,G__59741));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59375 = (function (){var G__59742 = ctx;
var G__59743 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59742,G__59743) : sci.impl.interpreter.interpret.call(null,G__59742,G__59743));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59376 = (function (){var G__59744 = ctx;
var G__59745 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59744,G__59745) : sci.impl.interpreter.interpret.call(null,G__59744,G__59745));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59377 = (function (){var G__59746 = ctx;
var G__59747 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59746,G__59747) : sci.impl.interpreter.interpret.call(null,G__59746,G__59747));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59378 = (function (){var G__59748 = ctx;
var G__59749 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59748,G__59749) : sci.impl.interpreter.interpret.call(null,G__59748,G__59749));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59379 = (function (){var G__59750 = ctx;
var G__59751 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59750,G__59751) : sci.impl.interpreter.interpret.call(null,G__59750,G__59751));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59380 = (function (){var G__59752 = ctx;
var G__59753 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59752,G__59753) : sci.impl.interpreter.interpret.call(null,G__59752,G__59753));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59381 = (function (){var G__59754 = ctx;
var G__59755 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59754,G__59755) : sci.impl.interpreter.interpret.call(null,G__59754,G__59755));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59382 = (function (){var G__59756 = ctx;
var G__59757 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59756,G__59757) : sci.impl.interpreter.interpret.call(null,G__59756,G__59757));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59383 = (function (){var G__59758 = ctx;
var G__59759 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59758,G__59759) : sci.impl.interpreter.interpret.call(null,G__59758,G__59759));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59384 = (function (){var G__59760 = ctx;
var G__59761 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59760,G__59761) : sci.impl.interpreter.interpret.call(null,G__59760,G__59761));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59385 = (function (){var G__59762 = ctx;
var G__59763 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59762,G__59763) : sci.impl.interpreter.interpret.call(null,G__59762,G__59763));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59386 = (function (){var G__59764 = ctx;
var G__59765 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59764,G__59765) : sci.impl.interpreter.interpret.call(null,G__59764,G__59765));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59387 = (function (){var G__59766 = ctx;
var G__59767 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59766,G__59767) : sci.impl.interpreter.interpret.call(null,G__59766,G__59767));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg59388 = (function (){var G__59768 = ctx;
var G__59769 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59768,G__59769) : sci.impl.interpreter.interpret.call(null,G__59768,G__59769));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg59370,arg59371,arg59372,arg59373,arg59374,arg59375,arg59376,arg59377,arg59378,arg59379,arg59380,arg59381,arg59382,arg59383,arg59384,arg59385,arg59386,arg59387,arg59388) : f.call(null,arg59370,arg59371,arg59372,arg59373,arg59374,arg59375,arg59376,arg59377,arg59378,arg59379,arg59380,arg59381,arg59382,arg59383,arg59384,arg59385,arg59386,arg59387,arg59388));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__59770 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__59770)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__59770)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__59770)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__59770)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__59770)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__59770)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__59771 = ctx;
var G__59772 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59771,G__59772) : sci.impl.interpreter.interpret.call(null,G__59771,G__59772));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__59770)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__59770)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__59770)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__59770)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__59770)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__59770)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__59770)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__59770)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__59770)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__59773 = ctx;
var G__59774 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59773,G__59774) : sci.impl.interpreter.interpret.call(null,G__59773,G__59774));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__59770)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__59770)){
return (new cljs.core.LazySeq(null,(function (){var G__59775 = ctx;
var G__59776 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59775,G__59776) : sci.impl.interpreter.interpret.call(null,G__59775,G__59776));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__59770)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__59770)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__59770)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__59770)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59770)].join('')));

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
if(cljs.core.truth_((function (){var G__59778 = op;
var G__59779 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59778,G__59779) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59778,G__59779));
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
}catch (e59777){if((e59777 instanceof Error)){
var e = e59777;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e59777;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__59786 = op;
var G__59786__$1 = (((G__59786 instanceof cljs.core.Keyword))?G__59786.fqn:null);
switch (G__59786__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59783_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59783_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59783_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59784_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59784_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59784_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59785_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59785_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59785_SHARP_));
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
var G__59837 = cljs.core.rest(exprs);
var G__59838 = (function (){var G__59789 = ctx;
var G__59790 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__59789,G__59790) : sci.impl.interpreter.eval_form.call(null,G__59789,G__59790));
})();
exprs = G__59837;
ret = G__59838;
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
if(cljs.core.truth_((function (){var G__59793 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__59794 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59793,G__59794) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59793,G__59794));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__59839 = ret__$1;
ret = G__59839;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__59796 = arguments.length;
switch (G__59796) {
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
