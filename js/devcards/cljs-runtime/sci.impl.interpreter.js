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
var G__59808 = xs;
args__$2 = G__59808;
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
var G__59809 = xs;
args__$2 = G__59809;
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
var len__4789__auto___59810 = arguments.length;
var i__4790__auto___59811 = (0);
while(true){
if((i__4790__auto___59811 < len__4789__auto___59810)){
args__4795__auto__.push((arguments[i__4790__auto___59811]));

var G__59812 = (i__4790__auto___59811 + (1));
i__4790__auto___59811 = G__59812;
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
var G__59813 = ctx__$2;
var G__59814 = rest_let_bindings;
ctx__$1 = G__59813;
let_bindings__$1 = G__59814;
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
var G__59815 = nexprs;
exprs__$1 = G__59815;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59027){
var G__59028 = cljs.core.first(seq59027);
var seq59027__$1 = cljs.core.next(seq59027);
var G__59029 = cljs.core.first(seq59027__$1);
var seq59027__$2 = cljs.core.next(seq59027__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59028,G__59029,seq59027__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59033){
var vec__59034 = p__59033;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59034,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59034,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59034,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59034,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59037 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59038 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59037,G__59038) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59037,G__59038));
})())?(function (){var G__59039 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59039,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59039;
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
var vec__59040 = libspec;
var seq__59041 = cljs.core.seq(vec__59040);
var first__59042 = cljs.core.first(seq__59041);
var seq__59041__$1 = cljs.core.next(seq__59041);
var lib_name = first__59042;
var opts = seq__59041__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59046 = opts;
var vec__59047 = G__59046;
var seq__59048 = cljs.core.seq(vec__59047);
var first__59049 = cljs.core.first(seq__59048);
var seq__59048__$1 = cljs.core.next(seq__59048);
var opt_name = first__59049;
var first__59049__$1 = cljs.core.first(seq__59048__$1);
var seq__59048__$2 = cljs.core.next(seq__59048__$1);
var fst_opt = first__59049__$1;
var rst_opts = seq__59048__$2;
var ret__$1 = ret;
var G__59046__$1 = G__59046;
while(true){
var ret__$2 = ret__$1;
var vec__59057 = G__59046__$1;
var seq__59058 = cljs.core.seq(vec__59057);
var first__59059 = cljs.core.first(seq__59058);
var seq__59058__$1 = cljs.core.next(seq__59058);
var opt_name__$1 = first__59059;
var first__59059__$1 = cljs.core.first(seq__59058__$1);
var seq__59058__$2 = cljs.core.next(seq__59058__$1);
var fst_opt__$1 = first__59059__$1;
var rst_opts__$1 = seq__59058__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59060 = opt_name__$1;
var G__59060__$1 = (((G__59060 instanceof cljs.core.Keyword))?G__59060.fqn:null);
switch (G__59060__$1) {
case "as":
var G__59817 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__59818 = rst_opts__$1;
ret__$1 = G__59817;
G__59046__$1 = G__59818;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__59819 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__59820 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__59819;
G__59046__$1 = G__59820;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__59821 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__59822 = rst_opts__$1;
ret__$1 = G__59821;
G__59046__$1 = G__59822;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59060__$1)].join('')));

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
var vec__59068 = p__59066;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59068,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59068,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59073){
var map__59075 = p__59073;
var map__59075__$1 = (((((!((map__59075 == null))))?(((((map__59075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59075):map__59075);
var _parsed_libspec = map__59075__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59075__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59075__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59075__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59075__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59075__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59079 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59080 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59079,G__59080) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59079,G__59080));
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
var vec__59081 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59081,(1),null);
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
var map__59084 = sci.impl.interpreter.parse_libspec(libspec);
var map__59084__$1 = (((((!((map__59084 == null))))?(((((map__59084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59084):map__59084);
var parsed_libspec = map__59084__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59084__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59084__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59086 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59086) : load_fn.call(null,G__59086));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59087 = temp__5733__auto____$2;
var map__59087__$1 = (((((!((map__59087 == null))))?(((((map__59087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59087):map__59087);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59087__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59087__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59090_59823 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59091_59824 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59090_59823,G__59091_59824) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59090_59823,G__59091_59824));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59089){if((e59089 instanceof Error)){
var e_59825 = e59089;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_59825;
} else {
throw e59089;

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
var len__4789__auto___59826 = arguments.length;
var i__4790__auto___59827 = (0);
while(true){
if((i__4790__auto___59827 < len__4789__auto___59826)){
args__4795__auto__.push((arguments[i__4790__auto___59827]));

var G__59828 = (i__4790__auto___59827 + (1));
i__4790__auto___59827 = G__59828;
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
var ret = (function (){var G__59103 = ctx;
var G__59104 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59103,G__59104) : sci.impl.interpreter.interpret.call(null,G__59103,G__59104));
})();
if((ret instanceof cljs.core.Symbol)){
var G__59829 = (function (){var G__59105 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59105,current_libspec);
} else {
return G__59105;
}
})();
var G__59830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__59831 = cljs.core.next(args__$1);
libspecs = G__59829;
current_libspec = G__59830;
args__$1 = G__59831;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__59832 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__59833 = null;
var G__59834 = cljs.core.next(args__$1);
libspecs = G__59832;
current_libspec = G__59833;
args__$1 = G__59834;
continue;
} else {
var G__59835 = (function (){var G__59107 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59107,current_libspec);
} else {
return G__59107;
}
})();
var G__59836 = ret;
var G__59837 = cljs.core.next(args__$1);
libspecs = G__59835;
current_libspec = G__59836;
args__$1 = G__59837;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59109 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59109,current_libspec);
} else {
return G__59109;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59092_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59092_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59093){
var G__59094 = cljs.core.first(seq59093);
var seq59093__$1 = cljs.core.next(seq59093);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59094,seq59093__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59838 = arguments.length;
var i__4790__auto___59839 = (0);
while(true){
if((i__4790__auto___59839 < len__4789__auto___59838)){
args__4795__auto__.push((arguments[i__4790__auto___59839]));

var G__59840 = (i__4790__auto___59839 + (1));
i__4790__auto___59839 = G__59840;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59112){
var G__59113 = cljs.core.first(seq59112);
var seq59112__$1 = cljs.core.next(seq59112);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59113,seq59112__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59114){
var vec__59115 = p__59114;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59115,(0),null);
var map__59118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59115,(1),null);
var map__59118__$1 = (((((!((map__59118 == null))))?(((((map__59118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59118):map__59118);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59118__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59118__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59118__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59120 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59120,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59120,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__59123 = ctx;
var G__59124 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59123,G__59124) : sci.impl.interpreter.interpret.call(null,G__59123,G__59124));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__59125 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__59125__$1 = (((((!((map__59125 == null))))?(((((map__59125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59125):map__59125);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__59133 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__59134 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__59134);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__59133);
}}catch (e59127){if((e59127 instanceof Error)){
var e = e59127;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__59128 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__59129 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59128,G__59129) : sci.impl.interpreter.interpret.call(null,G__59128,G__59129));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59130 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59130,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59130,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e59127;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__59135){
var vec__59136 = p__59135;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59136,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59136,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59139_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59139_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59139_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__59141){
var vec__59142 = p__59141;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59142,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59142,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59142,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59140_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59140_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59140_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__59147,p__59148){
var map__59149 = p__59147;
var map__59149__$1 = (((((!((map__59149 == null))))?(((((map__59149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59149):map__59149);
var ctx = map__59149__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59149__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__59150 = p__59148;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59150,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59150,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59150,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59150,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59146_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59146_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59146_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__59155){
var vec__59156 = p__59155;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59156,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59156,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__59159){
var vec__59160 = p__59159;
var seq__59161 = cljs.core.seq(vec__59160);
var first__59162 = cljs.core.first(seq__59161);
var seq__59161__$1 = cljs.core.next(seq__59161);
var _ = first__59162;
var first__59162__$1 = cljs.core.first(seq__59161__$1);
var seq__59161__$2 = cljs.core.next(seq__59161__$1);
var ns_sym = first__59162__$1;
var exprs = seq__59161__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__59164 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59164,(1),null);
var G__59169_59841 = k;
var G__59169_59842__$1 = (((G__59169_59841 instanceof cljs.core.Keyword))?G__59169_59841.fqn:null);
switch (G__59169_59842__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__59169_59841,G__59169_59842__$1,vec__59164,k,v,ns_sym__$1,vec__59160,seq__59161,first__59162,seq__59161__$1,_,first__59162__$1,seq__59161__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__59169_59841,G__59169_59842__$1,vec__59164,k,v,ns_sym__$1,vec__59160,seq__59161,first__59162,seq__59161__$1,_,first__59162__$1,seq__59161__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59169_59842__$1)].join('')));

}

var G__59844 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__59844;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__59175){
var vec__59176 = p__59175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59176,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59176,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59176,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__59185 = exprs;
var vec__59186 = G__59185;
var seq__59187 = cljs.core.seq(vec__59186);
var first__59188 = cljs.core.first(seq__59187);
var seq__59187__$1 = cljs.core.next(seq__59187);
var expr = first__59188;
var exprs__$1 = seq__59187__$1;
var G__59185__$1 = G__59185;
while(true){
var vec__59189 = G__59185__$1;
var seq__59190 = cljs.core.seq(vec__59189);
var first__59191 = cljs.core.first(seq__59190);
var seq__59190__$1 = cljs.core.next(seq__59190);
var expr__$1 = first__59191;
var exprs__$2 = seq__59190__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e59192){if((e59192 instanceof Error)){
var e = e59192;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e59192;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__59845 = exprs__$3;
G__59185__$1 = G__59845;
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
var G__59393 = cljs.core.count(args);
switch (G__59393) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg59199 = (function (){var G__59398 = ctx;
var G__59399 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59398,G__59399) : sci.impl.interpreter.interpret.call(null,G__59398,G__59399));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg59199) : f.call(null,arg59199));

break;
case (2):
var arg59200 = (function (){var G__59400 = ctx;
var G__59401 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59400,G__59401) : sci.impl.interpreter.interpret.call(null,G__59400,G__59401));
})();
var args__$1 = cljs.core.rest(args);
var arg59201 = (function (){var G__59403 = ctx;
var G__59404 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59403,G__59404) : sci.impl.interpreter.interpret.call(null,G__59403,G__59404));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg59200,arg59201) : f.call(null,arg59200,arg59201));

break;
case (3):
var arg59202 = (function (){var G__59407 = ctx;
var G__59408 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59407,G__59408) : sci.impl.interpreter.interpret.call(null,G__59407,G__59408));
})();
var args__$1 = cljs.core.rest(args);
var arg59203 = (function (){var G__59409 = ctx;
var G__59410 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59409,G__59410) : sci.impl.interpreter.interpret.call(null,G__59409,G__59410));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59204 = (function (){var G__59411 = ctx;
var G__59412 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59411,G__59412) : sci.impl.interpreter.interpret.call(null,G__59411,G__59412));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg59202,arg59203,arg59204) : f.call(null,arg59202,arg59203,arg59204));

break;
case (4):
var arg59205 = (function (){var G__59413 = ctx;
var G__59414 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59413,G__59414) : sci.impl.interpreter.interpret.call(null,G__59413,G__59414));
})();
var args__$1 = cljs.core.rest(args);
var arg59206 = (function (){var G__59415 = ctx;
var G__59416 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59415,G__59416) : sci.impl.interpreter.interpret.call(null,G__59415,G__59416));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59207 = (function (){var G__59417 = ctx;
var G__59418 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59417,G__59418) : sci.impl.interpreter.interpret.call(null,G__59417,G__59418));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59208 = (function (){var G__59419 = ctx;
var G__59420 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59419,G__59420) : sci.impl.interpreter.interpret.call(null,G__59419,G__59420));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg59205,arg59206,arg59207,arg59208) : f.call(null,arg59205,arg59206,arg59207,arg59208));

break;
case (5):
var arg59209 = (function (){var G__59421 = ctx;
var G__59422 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59421,G__59422) : sci.impl.interpreter.interpret.call(null,G__59421,G__59422));
})();
var args__$1 = cljs.core.rest(args);
var arg59210 = (function (){var G__59423 = ctx;
var G__59424 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59423,G__59424) : sci.impl.interpreter.interpret.call(null,G__59423,G__59424));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59211 = (function (){var G__59425 = ctx;
var G__59426 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59425,G__59426) : sci.impl.interpreter.interpret.call(null,G__59425,G__59426));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59212 = (function (){var G__59427 = ctx;
var G__59428 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59427,G__59428) : sci.impl.interpreter.interpret.call(null,G__59427,G__59428));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59213 = (function (){var G__59429 = ctx;
var G__59430 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59429,G__59430) : sci.impl.interpreter.interpret.call(null,G__59429,G__59430));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg59209,arg59210,arg59211,arg59212,arg59213) : f.call(null,arg59209,arg59210,arg59211,arg59212,arg59213));

break;
case (6):
var arg59214 = (function (){var G__59431 = ctx;
var G__59432 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59431,G__59432) : sci.impl.interpreter.interpret.call(null,G__59431,G__59432));
})();
var args__$1 = cljs.core.rest(args);
var arg59215 = (function (){var G__59433 = ctx;
var G__59434 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59433,G__59434) : sci.impl.interpreter.interpret.call(null,G__59433,G__59434));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59216 = (function (){var G__59435 = ctx;
var G__59436 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59435,G__59436) : sci.impl.interpreter.interpret.call(null,G__59435,G__59436));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59217 = (function (){var G__59437 = ctx;
var G__59438 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59437,G__59438) : sci.impl.interpreter.interpret.call(null,G__59437,G__59438));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59218 = (function (){var G__59439 = ctx;
var G__59440 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59439,G__59440) : sci.impl.interpreter.interpret.call(null,G__59439,G__59440));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59219 = (function (){var G__59441 = ctx;
var G__59442 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59441,G__59442) : sci.impl.interpreter.interpret.call(null,G__59441,G__59442));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg59214,arg59215,arg59216,arg59217,arg59218,arg59219) : f.call(null,arg59214,arg59215,arg59216,arg59217,arg59218,arg59219));

break;
case (7):
var arg59224 = (function (){var G__59443 = ctx;
var G__59444 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59443,G__59444) : sci.impl.interpreter.interpret.call(null,G__59443,G__59444));
})();
var args__$1 = cljs.core.rest(args);
var arg59225 = (function (){var G__59445 = ctx;
var G__59446 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59445,G__59446) : sci.impl.interpreter.interpret.call(null,G__59445,G__59446));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59226 = (function (){var G__59447 = ctx;
var G__59448 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59447,G__59448) : sci.impl.interpreter.interpret.call(null,G__59447,G__59448));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59227 = (function (){var G__59449 = ctx;
var G__59450 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59449,G__59450) : sci.impl.interpreter.interpret.call(null,G__59449,G__59450));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59228 = (function (){var G__59451 = ctx;
var G__59452 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59451,G__59452) : sci.impl.interpreter.interpret.call(null,G__59451,G__59452));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59229 = (function (){var G__59453 = ctx;
var G__59454 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59453,G__59454) : sci.impl.interpreter.interpret.call(null,G__59453,G__59454));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59230 = (function (){var G__59455 = ctx;
var G__59456 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59455,G__59456) : sci.impl.interpreter.interpret.call(null,G__59455,G__59456));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg59224,arg59225,arg59226,arg59227,arg59228,arg59229,arg59230) : f.call(null,arg59224,arg59225,arg59226,arg59227,arg59228,arg59229,arg59230));

break;
case (8):
var arg59231 = (function (){var G__59457 = ctx;
var G__59458 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59457,G__59458) : sci.impl.interpreter.interpret.call(null,G__59457,G__59458));
})();
var args__$1 = cljs.core.rest(args);
var arg59232 = (function (){var G__59459 = ctx;
var G__59460 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59459,G__59460) : sci.impl.interpreter.interpret.call(null,G__59459,G__59460));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59233 = (function (){var G__59461 = ctx;
var G__59462 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59461,G__59462) : sci.impl.interpreter.interpret.call(null,G__59461,G__59462));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59234 = (function (){var G__59463 = ctx;
var G__59464 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59463,G__59464) : sci.impl.interpreter.interpret.call(null,G__59463,G__59464));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59235 = (function (){var G__59465 = ctx;
var G__59466 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59465,G__59466) : sci.impl.interpreter.interpret.call(null,G__59465,G__59466));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59236 = (function (){var G__59467 = ctx;
var G__59468 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59467,G__59468) : sci.impl.interpreter.interpret.call(null,G__59467,G__59468));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59237 = (function (){var G__59469 = ctx;
var G__59470 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59469,G__59470) : sci.impl.interpreter.interpret.call(null,G__59469,G__59470));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59238 = (function (){var G__59471 = ctx;
var G__59472 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59471,G__59472) : sci.impl.interpreter.interpret.call(null,G__59471,G__59472));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg59231,arg59232,arg59233,arg59234,arg59235,arg59236,arg59237,arg59238) : f.call(null,arg59231,arg59232,arg59233,arg59234,arg59235,arg59236,arg59237,arg59238));

break;
case (9):
var arg59239 = (function (){var G__59473 = ctx;
var G__59474 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59473,G__59474) : sci.impl.interpreter.interpret.call(null,G__59473,G__59474));
})();
var args__$1 = cljs.core.rest(args);
var arg59240 = (function (){var G__59475 = ctx;
var G__59476 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59475,G__59476) : sci.impl.interpreter.interpret.call(null,G__59475,G__59476));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59241 = (function (){var G__59477 = ctx;
var G__59478 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59477,G__59478) : sci.impl.interpreter.interpret.call(null,G__59477,G__59478));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59242 = (function (){var G__59479 = ctx;
var G__59480 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59479,G__59480) : sci.impl.interpreter.interpret.call(null,G__59479,G__59480));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59243 = (function (){var G__59481 = ctx;
var G__59482 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59481,G__59482) : sci.impl.interpreter.interpret.call(null,G__59481,G__59482));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59244 = (function (){var G__59483 = ctx;
var G__59484 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59483,G__59484) : sci.impl.interpreter.interpret.call(null,G__59483,G__59484));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59245 = (function (){var G__59485 = ctx;
var G__59486 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59485,G__59486) : sci.impl.interpreter.interpret.call(null,G__59485,G__59486));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59246 = (function (){var G__59487 = ctx;
var G__59488 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59487,G__59488) : sci.impl.interpreter.interpret.call(null,G__59487,G__59488));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59247 = (function (){var G__59489 = ctx;
var G__59490 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59489,G__59490) : sci.impl.interpreter.interpret.call(null,G__59489,G__59490));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg59239,arg59240,arg59241,arg59242,arg59243,arg59244,arg59245,arg59246,arg59247) : f.call(null,arg59239,arg59240,arg59241,arg59242,arg59243,arg59244,arg59245,arg59246,arg59247));

break;
case (10):
var arg59248 = (function (){var G__59491 = ctx;
var G__59492 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59491,G__59492) : sci.impl.interpreter.interpret.call(null,G__59491,G__59492));
})();
var args__$1 = cljs.core.rest(args);
var arg59249 = (function (){var G__59493 = ctx;
var G__59494 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59493,G__59494) : sci.impl.interpreter.interpret.call(null,G__59493,G__59494));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59250 = (function (){var G__59495 = ctx;
var G__59496 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59495,G__59496) : sci.impl.interpreter.interpret.call(null,G__59495,G__59496));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59251 = (function (){var G__59497 = ctx;
var G__59498 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59497,G__59498) : sci.impl.interpreter.interpret.call(null,G__59497,G__59498));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59252 = (function (){var G__59499 = ctx;
var G__59500 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59499,G__59500) : sci.impl.interpreter.interpret.call(null,G__59499,G__59500));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59253 = (function (){var G__59501 = ctx;
var G__59502 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59501,G__59502) : sci.impl.interpreter.interpret.call(null,G__59501,G__59502));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59254 = (function (){var G__59503 = ctx;
var G__59504 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59503,G__59504) : sci.impl.interpreter.interpret.call(null,G__59503,G__59504));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59255 = (function (){var G__59505 = ctx;
var G__59506 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59505,G__59506) : sci.impl.interpreter.interpret.call(null,G__59505,G__59506));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59256 = (function (){var G__59507 = ctx;
var G__59508 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59507,G__59508) : sci.impl.interpreter.interpret.call(null,G__59507,G__59508));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59257 = (function (){var G__59509 = ctx;
var G__59510 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59509,G__59510) : sci.impl.interpreter.interpret.call(null,G__59509,G__59510));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg59248,arg59249,arg59250,arg59251,arg59252,arg59253,arg59254,arg59255,arg59256,arg59257) : f.call(null,arg59248,arg59249,arg59250,arg59251,arg59252,arg59253,arg59254,arg59255,arg59256,arg59257));

break;
case (11):
var arg59258 = (function (){var G__59511 = ctx;
var G__59512 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59511,G__59512) : sci.impl.interpreter.interpret.call(null,G__59511,G__59512));
})();
var args__$1 = cljs.core.rest(args);
var arg59259 = (function (){var G__59513 = ctx;
var G__59514 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59513,G__59514) : sci.impl.interpreter.interpret.call(null,G__59513,G__59514));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59260 = (function (){var G__59515 = ctx;
var G__59516 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59515,G__59516) : sci.impl.interpreter.interpret.call(null,G__59515,G__59516));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59261 = (function (){var G__59517 = ctx;
var G__59518 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59517,G__59518) : sci.impl.interpreter.interpret.call(null,G__59517,G__59518));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59262 = (function (){var G__59519 = ctx;
var G__59520 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59519,G__59520) : sci.impl.interpreter.interpret.call(null,G__59519,G__59520));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59263 = (function (){var G__59521 = ctx;
var G__59522 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59521,G__59522) : sci.impl.interpreter.interpret.call(null,G__59521,G__59522));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59264 = (function (){var G__59523 = ctx;
var G__59524 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59523,G__59524) : sci.impl.interpreter.interpret.call(null,G__59523,G__59524));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59265 = (function (){var G__59525 = ctx;
var G__59526 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59525,G__59526) : sci.impl.interpreter.interpret.call(null,G__59525,G__59526));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59266 = (function (){var G__59527 = ctx;
var G__59528 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59527,G__59528) : sci.impl.interpreter.interpret.call(null,G__59527,G__59528));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59267 = (function (){var G__59529 = ctx;
var G__59530 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59529,G__59530) : sci.impl.interpreter.interpret.call(null,G__59529,G__59530));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59268 = (function (){var G__59531 = ctx;
var G__59532 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59531,G__59532) : sci.impl.interpreter.interpret.call(null,G__59531,G__59532));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg59258,arg59259,arg59260,arg59261,arg59262,arg59263,arg59264,arg59265,arg59266,arg59267,arg59268) : f.call(null,arg59258,arg59259,arg59260,arg59261,arg59262,arg59263,arg59264,arg59265,arg59266,arg59267,arg59268));

break;
case (12):
var arg59269 = (function (){var G__59533 = ctx;
var G__59534 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59533,G__59534) : sci.impl.interpreter.interpret.call(null,G__59533,G__59534));
})();
var args__$1 = cljs.core.rest(args);
var arg59270 = (function (){var G__59535 = ctx;
var G__59536 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59535,G__59536) : sci.impl.interpreter.interpret.call(null,G__59535,G__59536));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59271 = (function (){var G__59537 = ctx;
var G__59538 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59537,G__59538) : sci.impl.interpreter.interpret.call(null,G__59537,G__59538));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59272 = (function (){var G__59539 = ctx;
var G__59540 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59539,G__59540) : sci.impl.interpreter.interpret.call(null,G__59539,G__59540));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59273 = (function (){var G__59541 = ctx;
var G__59542 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59541,G__59542) : sci.impl.interpreter.interpret.call(null,G__59541,G__59542));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59274 = (function (){var G__59543 = ctx;
var G__59544 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59543,G__59544) : sci.impl.interpreter.interpret.call(null,G__59543,G__59544));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59275 = (function (){var G__59545 = ctx;
var G__59546 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59545,G__59546) : sci.impl.interpreter.interpret.call(null,G__59545,G__59546));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59276 = (function (){var G__59547 = ctx;
var G__59548 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59547,G__59548) : sci.impl.interpreter.interpret.call(null,G__59547,G__59548));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59277 = (function (){var G__59549 = ctx;
var G__59550 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59549,G__59550) : sci.impl.interpreter.interpret.call(null,G__59549,G__59550));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59278 = (function (){var G__59551 = ctx;
var G__59552 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59551,G__59552) : sci.impl.interpreter.interpret.call(null,G__59551,G__59552));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59279 = (function (){var G__59553 = ctx;
var G__59554 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59553,G__59554) : sci.impl.interpreter.interpret.call(null,G__59553,G__59554));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59280 = (function (){var G__59555 = ctx;
var G__59556 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59555,G__59556) : sci.impl.interpreter.interpret.call(null,G__59555,G__59556));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg59269,arg59270,arg59271,arg59272,arg59273,arg59274,arg59275,arg59276,arg59277,arg59278,arg59279,arg59280) : f.call(null,arg59269,arg59270,arg59271,arg59272,arg59273,arg59274,arg59275,arg59276,arg59277,arg59278,arg59279,arg59280));

break;
case (13):
var arg59281 = (function (){var G__59557 = ctx;
var G__59558 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59557,G__59558) : sci.impl.interpreter.interpret.call(null,G__59557,G__59558));
})();
var args__$1 = cljs.core.rest(args);
var arg59282 = (function (){var G__59559 = ctx;
var G__59560 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59559,G__59560) : sci.impl.interpreter.interpret.call(null,G__59559,G__59560));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59283 = (function (){var G__59561 = ctx;
var G__59562 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59561,G__59562) : sci.impl.interpreter.interpret.call(null,G__59561,G__59562));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59284 = (function (){var G__59563 = ctx;
var G__59564 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59563,G__59564) : sci.impl.interpreter.interpret.call(null,G__59563,G__59564));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59285 = (function (){var G__59565 = ctx;
var G__59566 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59565,G__59566) : sci.impl.interpreter.interpret.call(null,G__59565,G__59566));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59286 = (function (){var G__59567 = ctx;
var G__59568 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59567,G__59568) : sci.impl.interpreter.interpret.call(null,G__59567,G__59568));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59287 = (function (){var G__59569 = ctx;
var G__59570 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59569,G__59570) : sci.impl.interpreter.interpret.call(null,G__59569,G__59570));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59288 = (function (){var G__59571 = ctx;
var G__59572 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59571,G__59572) : sci.impl.interpreter.interpret.call(null,G__59571,G__59572));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59289 = (function (){var G__59573 = ctx;
var G__59574 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59573,G__59574) : sci.impl.interpreter.interpret.call(null,G__59573,G__59574));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59290 = (function (){var G__59575 = ctx;
var G__59576 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59575,G__59576) : sci.impl.interpreter.interpret.call(null,G__59575,G__59576));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59291 = (function (){var G__59577 = ctx;
var G__59578 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59577,G__59578) : sci.impl.interpreter.interpret.call(null,G__59577,G__59578));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59292 = (function (){var G__59579 = ctx;
var G__59580 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59579,G__59580) : sci.impl.interpreter.interpret.call(null,G__59579,G__59580));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59293 = (function (){var G__59581 = ctx;
var G__59582 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59581,G__59582) : sci.impl.interpreter.interpret.call(null,G__59581,G__59582));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg59281,arg59282,arg59283,arg59284,arg59285,arg59286,arg59287,arg59288,arg59289,arg59290,arg59291,arg59292,arg59293) : f.call(null,arg59281,arg59282,arg59283,arg59284,arg59285,arg59286,arg59287,arg59288,arg59289,arg59290,arg59291,arg59292,arg59293));

break;
case (14):
var arg59294 = (function (){var G__59583 = ctx;
var G__59584 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59583,G__59584) : sci.impl.interpreter.interpret.call(null,G__59583,G__59584));
})();
var args__$1 = cljs.core.rest(args);
var arg59295 = (function (){var G__59585 = ctx;
var G__59586 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59585,G__59586) : sci.impl.interpreter.interpret.call(null,G__59585,G__59586));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59296 = (function (){var G__59587 = ctx;
var G__59588 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59587,G__59588) : sci.impl.interpreter.interpret.call(null,G__59587,G__59588));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59297 = (function (){var G__59589 = ctx;
var G__59590 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59589,G__59590) : sci.impl.interpreter.interpret.call(null,G__59589,G__59590));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59298 = (function (){var G__59591 = ctx;
var G__59592 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59591,G__59592) : sci.impl.interpreter.interpret.call(null,G__59591,G__59592));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59299 = (function (){var G__59593 = ctx;
var G__59594 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59593,G__59594) : sci.impl.interpreter.interpret.call(null,G__59593,G__59594));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59300 = (function (){var G__59595 = ctx;
var G__59596 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59595,G__59596) : sci.impl.interpreter.interpret.call(null,G__59595,G__59596));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59301 = (function (){var G__59597 = ctx;
var G__59598 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59597,G__59598) : sci.impl.interpreter.interpret.call(null,G__59597,G__59598));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59302 = (function (){var G__59599 = ctx;
var G__59600 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59599,G__59600) : sci.impl.interpreter.interpret.call(null,G__59599,G__59600));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59303 = (function (){var G__59601 = ctx;
var G__59602 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59601,G__59602) : sci.impl.interpreter.interpret.call(null,G__59601,G__59602));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59304 = (function (){var G__59603 = ctx;
var G__59604 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59603,G__59604) : sci.impl.interpreter.interpret.call(null,G__59603,G__59604));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59305 = (function (){var G__59605 = ctx;
var G__59606 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59605,G__59606) : sci.impl.interpreter.interpret.call(null,G__59605,G__59606));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59306 = (function (){var G__59607 = ctx;
var G__59608 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59607,G__59608) : sci.impl.interpreter.interpret.call(null,G__59607,G__59608));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59307 = (function (){var G__59609 = ctx;
var G__59610 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59609,G__59610) : sci.impl.interpreter.interpret.call(null,G__59609,G__59610));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg59294,arg59295,arg59296,arg59297,arg59298,arg59299,arg59300,arg59301,arg59302,arg59303,arg59304,arg59305,arg59306,arg59307) : f.call(null,arg59294,arg59295,arg59296,arg59297,arg59298,arg59299,arg59300,arg59301,arg59302,arg59303,arg59304,arg59305,arg59306,arg59307));

break;
case (15):
var arg59308 = (function (){var G__59611 = ctx;
var G__59612 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59611,G__59612) : sci.impl.interpreter.interpret.call(null,G__59611,G__59612));
})();
var args__$1 = cljs.core.rest(args);
var arg59309 = (function (){var G__59613 = ctx;
var G__59614 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59613,G__59614) : sci.impl.interpreter.interpret.call(null,G__59613,G__59614));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59310 = (function (){var G__59615 = ctx;
var G__59616 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59615,G__59616) : sci.impl.interpreter.interpret.call(null,G__59615,G__59616));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59311 = (function (){var G__59617 = ctx;
var G__59618 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59617,G__59618) : sci.impl.interpreter.interpret.call(null,G__59617,G__59618));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59312 = (function (){var G__59619 = ctx;
var G__59620 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59619,G__59620) : sci.impl.interpreter.interpret.call(null,G__59619,G__59620));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59313 = (function (){var G__59621 = ctx;
var G__59622 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59621,G__59622) : sci.impl.interpreter.interpret.call(null,G__59621,G__59622));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59314 = (function (){var G__59623 = ctx;
var G__59624 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59623,G__59624) : sci.impl.interpreter.interpret.call(null,G__59623,G__59624));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59315 = (function (){var G__59625 = ctx;
var G__59626 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59625,G__59626) : sci.impl.interpreter.interpret.call(null,G__59625,G__59626));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59316 = (function (){var G__59627 = ctx;
var G__59628 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59627,G__59628) : sci.impl.interpreter.interpret.call(null,G__59627,G__59628));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59317 = (function (){var G__59629 = ctx;
var G__59630 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59629,G__59630) : sci.impl.interpreter.interpret.call(null,G__59629,G__59630));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59318 = (function (){var G__59631 = ctx;
var G__59632 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59631,G__59632) : sci.impl.interpreter.interpret.call(null,G__59631,G__59632));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59319 = (function (){var G__59633 = ctx;
var G__59634 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59633,G__59634) : sci.impl.interpreter.interpret.call(null,G__59633,G__59634));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59320 = (function (){var G__59635 = ctx;
var G__59636 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59635,G__59636) : sci.impl.interpreter.interpret.call(null,G__59635,G__59636));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59321 = (function (){var G__59637 = ctx;
var G__59638 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59637,G__59638) : sci.impl.interpreter.interpret.call(null,G__59637,G__59638));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59322 = (function (){var G__59639 = ctx;
var G__59640 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59639,G__59640) : sci.impl.interpreter.interpret.call(null,G__59639,G__59640));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg59308,arg59309,arg59310,arg59311,arg59312,arg59313,arg59314,arg59315,arg59316,arg59317,arg59318,arg59319,arg59320,arg59321,arg59322) : f.call(null,arg59308,arg59309,arg59310,arg59311,arg59312,arg59313,arg59314,arg59315,arg59316,arg59317,arg59318,arg59319,arg59320,arg59321,arg59322));

break;
case (16):
var arg59323 = (function (){var G__59641 = ctx;
var G__59642 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59641,G__59642) : sci.impl.interpreter.interpret.call(null,G__59641,G__59642));
})();
var args__$1 = cljs.core.rest(args);
var arg59324 = (function (){var G__59643 = ctx;
var G__59644 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59643,G__59644) : sci.impl.interpreter.interpret.call(null,G__59643,G__59644));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59325 = (function (){var G__59645 = ctx;
var G__59646 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59645,G__59646) : sci.impl.interpreter.interpret.call(null,G__59645,G__59646));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59326 = (function (){var G__59647 = ctx;
var G__59648 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59647,G__59648) : sci.impl.interpreter.interpret.call(null,G__59647,G__59648));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59327 = (function (){var G__59649 = ctx;
var G__59650 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59649,G__59650) : sci.impl.interpreter.interpret.call(null,G__59649,G__59650));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59328 = (function (){var G__59651 = ctx;
var G__59652 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59651,G__59652) : sci.impl.interpreter.interpret.call(null,G__59651,G__59652));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59329 = (function (){var G__59653 = ctx;
var G__59654 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59653,G__59654) : sci.impl.interpreter.interpret.call(null,G__59653,G__59654));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59330 = (function (){var G__59655 = ctx;
var G__59656 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59655,G__59656) : sci.impl.interpreter.interpret.call(null,G__59655,G__59656));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59331 = (function (){var G__59657 = ctx;
var G__59658 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59657,G__59658) : sci.impl.interpreter.interpret.call(null,G__59657,G__59658));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59332 = (function (){var G__59659 = ctx;
var G__59660 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59659,G__59660) : sci.impl.interpreter.interpret.call(null,G__59659,G__59660));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59333 = (function (){var G__59661 = ctx;
var G__59662 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59661,G__59662) : sci.impl.interpreter.interpret.call(null,G__59661,G__59662));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59334 = (function (){var G__59663 = ctx;
var G__59664 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59663,G__59664) : sci.impl.interpreter.interpret.call(null,G__59663,G__59664));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59335 = (function (){var G__59665 = ctx;
var G__59666 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59665,G__59666) : sci.impl.interpreter.interpret.call(null,G__59665,G__59666));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59336 = (function (){var G__59667 = ctx;
var G__59668 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59667,G__59668) : sci.impl.interpreter.interpret.call(null,G__59667,G__59668));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59337 = (function (){var G__59669 = ctx;
var G__59670 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59669,G__59670) : sci.impl.interpreter.interpret.call(null,G__59669,G__59670));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59338 = (function (){var G__59671 = ctx;
var G__59672 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59671,G__59672) : sci.impl.interpreter.interpret.call(null,G__59671,G__59672));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg59323,arg59324,arg59325,arg59326,arg59327,arg59328,arg59329,arg59330,arg59331,arg59332,arg59333,arg59334,arg59335,arg59336,arg59337,arg59338) : f.call(null,arg59323,arg59324,arg59325,arg59326,arg59327,arg59328,arg59329,arg59330,arg59331,arg59332,arg59333,arg59334,arg59335,arg59336,arg59337,arg59338));

break;
case (17):
var arg59339 = (function (){var G__59673 = ctx;
var G__59674 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59673,G__59674) : sci.impl.interpreter.interpret.call(null,G__59673,G__59674));
})();
var args__$1 = cljs.core.rest(args);
var arg59340 = (function (){var G__59675 = ctx;
var G__59676 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59675,G__59676) : sci.impl.interpreter.interpret.call(null,G__59675,G__59676));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59341 = (function (){var G__59677 = ctx;
var G__59678 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59677,G__59678) : sci.impl.interpreter.interpret.call(null,G__59677,G__59678));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59342 = (function (){var G__59679 = ctx;
var G__59680 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59679,G__59680) : sci.impl.interpreter.interpret.call(null,G__59679,G__59680));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59343 = (function (){var G__59681 = ctx;
var G__59682 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59681,G__59682) : sci.impl.interpreter.interpret.call(null,G__59681,G__59682));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59344 = (function (){var G__59683 = ctx;
var G__59684 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59683,G__59684) : sci.impl.interpreter.interpret.call(null,G__59683,G__59684));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59345 = (function (){var G__59685 = ctx;
var G__59686 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59685,G__59686) : sci.impl.interpreter.interpret.call(null,G__59685,G__59686));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59346 = (function (){var G__59687 = ctx;
var G__59688 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59687,G__59688) : sci.impl.interpreter.interpret.call(null,G__59687,G__59688));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59347 = (function (){var G__59689 = ctx;
var G__59690 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59689,G__59690) : sci.impl.interpreter.interpret.call(null,G__59689,G__59690));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59348 = (function (){var G__59691 = ctx;
var G__59692 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59691,G__59692) : sci.impl.interpreter.interpret.call(null,G__59691,G__59692));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59349 = (function (){var G__59693 = ctx;
var G__59694 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59693,G__59694) : sci.impl.interpreter.interpret.call(null,G__59693,G__59694));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59350 = (function (){var G__59695 = ctx;
var G__59696 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59695,G__59696) : sci.impl.interpreter.interpret.call(null,G__59695,G__59696));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59351 = (function (){var G__59697 = ctx;
var G__59698 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59697,G__59698) : sci.impl.interpreter.interpret.call(null,G__59697,G__59698));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59352 = (function (){var G__59699 = ctx;
var G__59700 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59699,G__59700) : sci.impl.interpreter.interpret.call(null,G__59699,G__59700));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59353 = (function (){var G__59701 = ctx;
var G__59702 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59701,G__59702) : sci.impl.interpreter.interpret.call(null,G__59701,G__59702));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59354 = (function (){var G__59703 = ctx;
var G__59704 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59703,G__59704) : sci.impl.interpreter.interpret.call(null,G__59703,G__59704));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59355 = (function (){var G__59705 = ctx;
var G__59706 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59705,G__59706) : sci.impl.interpreter.interpret.call(null,G__59705,G__59706));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg59339,arg59340,arg59341,arg59342,arg59343,arg59344,arg59345,arg59346,arg59347,arg59348,arg59349,arg59350,arg59351,arg59352,arg59353,arg59354,arg59355) : f.call(null,arg59339,arg59340,arg59341,arg59342,arg59343,arg59344,arg59345,arg59346,arg59347,arg59348,arg59349,arg59350,arg59351,arg59352,arg59353,arg59354,arg59355));

break;
case (18):
var arg59356 = (function (){var G__59707 = ctx;
var G__59708 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59707,G__59708) : sci.impl.interpreter.interpret.call(null,G__59707,G__59708));
})();
var args__$1 = cljs.core.rest(args);
var arg59357 = (function (){var G__59709 = ctx;
var G__59710 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59709,G__59710) : sci.impl.interpreter.interpret.call(null,G__59709,G__59710));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59358 = (function (){var G__59711 = ctx;
var G__59712 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59711,G__59712) : sci.impl.interpreter.interpret.call(null,G__59711,G__59712));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59359 = (function (){var G__59713 = ctx;
var G__59714 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59713,G__59714) : sci.impl.interpreter.interpret.call(null,G__59713,G__59714));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59360 = (function (){var G__59715 = ctx;
var G__59716 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59715,G__59716) : sci.impl.interpreter.interpret.call(null,G__59715,G__59716));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59361 = (function (){var G__59717 = ctx;
var G__59718 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59717,G__59718) : sci.impl.interpreter.interpret.call(null,G__59717,G__59718));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59362 = (function (){var G__59719 = ctx;
var G__59720 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59719,G__59720) : sci.impl.interpreter.interpret.call(null,G__59719,G__59720));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59363 = (function (){var G__59721 = ctx;
var G__59722 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59721,G__59722) : sci.impl.interpreter.interpret.call(null,G__59721,G__59722));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59364 = (function (){var G__59723 = ctx;
var G__59724 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59723,G__59724) : sci.impl.interpreter.interpret.call(null,G__59723,G__59724));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59365 = (function (){var G__59725 = ctx;
var G__59726 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59725,G__59726) : sci.impl.interpreter.interpret.call(null,G__59725,G__59726));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59366 = (function (){var G__59727 = ctx;
var G__59728 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59727,G__59728) : sci.impl.interpreter.interpret.call(null,G__59727,G__59728));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59367 = (function (){var G__59729 = ctx;
var G__59730 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59729,G__59730) : sci.impl.interpreter.interpret.call(null,G__59729,G__59730));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59368 = (function (){var G__59731 = ctx;
var G__59732 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59731,G__59732) : sci.impl.interpreter.interpret.call(null,G__59731,G__59732));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59369 = (function (){var G__59733 = ctx;
var G__59734 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59733,G__59734) : sci.impl.interpreter.interpret.call(null,G__59733,G__59734));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59370 = (function (){var G__59735 = ctx;
var G__59736 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59735,G__59736) : sci.impl.interpreter.interpret.call(null,G__59735,G__59736));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59371 = (function (){var G__59737 = ctx;
var G__59738 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59737,G__59738) : sci.impl.interpreter.interpret.call(null,G__59737,G__59738));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59372 = (function (){var G__59739 = ctx;
var G__59740 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59739,G__59740) : sci.impl.interpreter.interpret.call(null,G__59739,G__59740));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59373 = (function (){var G__59741 = ctx;
var G__59742 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59741,G__59742) : sci.impl.interpreter.interpret.call(null,G__59741,G__59742));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg59356,arg59357,arg59358,arg59359,arg59360,arg59361,arg59362,arg59363,arg59364,arg59365,arg59366,arg59367,arg59368,arg59369,arg59370,arg59371,arg59372,arg59373) : f.call(null,arg59356,arg59357,arg59358,arg59359,arg59360,arg59361,arg59362,arg59363,arg59364,arg59365,arg59366,arg59367,arg59368,arg59369,arg59370,arg59371,arg59372,arg59373));

break;
case (19):
var arg59374 = (function (){var G__59743 = ctx;
var G__59744 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59743,G__59744) : sci.impl.interpreter.interpret.call(null,G__59743,G__59744));
})();
var args__$1 = cljs.core.rest(args);
var arg59375 = (function (){var G__59745 = ctx;
var G__59746 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59745,G__59746) : sci.impl.interpreter.interpret.call(null,G__59745,G__59746));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59376 = (function (){var G__59747 = ctx;
var G__59748 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59747,G__59748) : sci.impl.interpreter.interpret.call(null,G__59747,G__59748));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59377 = (function (){var G__59749 = ctx;
var G__59750 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59749,G__59750) : sci.impl.interpreter.interpret.call(null,G__59749,G__59750));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59378 = (function (){var G__59751 = ctx;
var G__59752 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59751,G__59752) : sci.impl.interpreter.interpret.call(null,G__59751,G__59752));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59379 = (function (){var G__59753 = ctx;
var G__59754 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59753,G__59754) : sci.impl.interpreter.interpret.call(null,G__59753,G__59754));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59380 = (function (){var G__59755 = ctx;
var G__59756 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59755,G__59756) : sci.impl.interpreter.interpret.call(null,G__59755,G__59756));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59381 = (function (){var G__59757 = ctx;
var G__59758 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59757,G__59758) : sci.impl.interpreter.interpret.call(null,G__59757,G__59758));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59382 = (function (){var G__59759 = ctx;
var G__59760 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59759,G__59760) : sci.impl.interpreter.interpret.call(null,G__59759,G__59760));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59383 = (function (){var G__59761 = ctx;
var G__59762 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59761,G__59762) : sci.impl.interpreter.interpret.call(null,G__59761,G__59762));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59384 = (function (){var G__59763 = ctx;
var G__59764 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59763,G__59764) : sci.impl.interpreter.interpret.call(null,G__59763,G__59764));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59385 = (function (){var G__59765 = ctx;
var G__59766 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59765,G__59766) : sci.impl.interpreter.interpret.call(null,G__59765,G__59766));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59386 = (function (){var G__59767 = ctx;
var G__59768 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59767,G__59768) : sci.impl.interpreter.interpret.call(null,G__59767,G__59768));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59387 = (function (){var G__59769 = ctx;
var G__59770 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59769,G__59770) : sci.impl.interpreter.interpret.call(null,G__59769,G__59770));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59388 = (function (){var G__59771 = ctx;
var G__59772 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59771,G__59772) : sci.impl.interpreter.interpret.call(null,G__59771,G__59772));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59389 = (function (){var G__59773 = ctx;
var G__59774 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59773,G__59774) : sci.impl.interpreter.interpret.call(null,G__59773,G__59774));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59390 = (function (){var G__59775 = ctx;
var G__59776 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59775,G__59776) : sci.impl.interpreter.interpret.call(null,G__59775,G__59776));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59391 = (function (){var G__59777 = ctx;
var G__59778 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59777,G__59778) : sci.impl.interpreter.interpret.call(null,G__59777,G__59778));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg59392 = (function (){var G__59779 = ctx;
var G__59780 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59779,G__59780) : sci.impl.interpreter.interpret.call(null,G__59779,G__59780));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg59374,arg59375,arg59376,arg59377,arg59378,arg59379,arg59380,arg59381,arg59382,arg59383,arg59384,arg59385,arg59386,arg59387,arg59388,arg59389,arg59390,arg59391,arg59392) : f.call(null,arg59374,arg59375,arg59376,arg59377,arg59378,arg59379,arg59380,arg59381,arg59382,arg59383,arg59384,arg59385,arg59386,arg59387,arg59388,arg59389,arg59390,arg59391,arg59392));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__59781 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__59781)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__59781)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__59781)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__59781)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__59781)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__59781)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__59782 = ctx;
var G__59783 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59782,G__59783) : sci.impl.interpreter.interpret.call(null,G__59782,G__59783));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__59781)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__59781)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__59781)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__59781)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__59781)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__59781)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__59781)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__59781)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__59781)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__59784 = ctx;
var G__59785 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59784,G__59785) : sci.impl.interpreter.interpret.call(null,G__59784,G__59785));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__59781)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__59781)){
return (new cljs.core.LazySeq(null,(function (){var G__59786 = ctx;
var G__59787 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59786,G__59787) : sci.impl.interpreter.interpret.call(null,G__59786,G__59787));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__59781)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__59781)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__59781)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__59781)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59781)].join('')));

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
if(cljs.core.truth_((function (){var G__59789 = op;
var G__59790 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59789,G__59790) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59789,G__59790));
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
}catch (e59788){if((e59788 instanceof Error)){
var e = e59788;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e59788;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__59797 = op;
var G__59797__$1 = (((G__59797 instanceof cljs.core.Keyword))?G__59797.fqn:null);
switch (G__59797__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59794_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59794_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59794_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59795_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59795_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59795_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59796_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59796_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59796_SHARP_));
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
var G__59848 = cljs.core.rest(exprs);
var G__59849 = (function (){var G__59800 = ctx;
var G__59801 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__59800,G__59801) : sci.impl.interpreter.eval_form.call(null,G__59800,G__59801));
})();
exprs = G__59848;
ret = G__59849;
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
if(cljs.core.truth_((function (){var G__59804 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__59805 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59804,G__59805) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59804,G__59805));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__59850 = ret__$1;
ret = G__59850;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__59807 = arguments.length;
switch (G__59807) {
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