goog.provide('sci.impl.io');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('sci.impl.unrestrict');
goog.require('sci.impl.vars');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__58417 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58418 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58418);

try{var G__58419 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__58419);

return G__58419;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58417);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__58420 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58421 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58421);

try{var G__58422 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__58422);

return G__58422;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58420);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__58423 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58424 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58424);

try{var G__58425 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__58425);

return G__58425;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58423);
}})();
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58448 = arguments.length;
var i__4790__auto___58449 = (0);
while(true){
if((i__4790__auto___58449 < len__4789__auto___58448)){
args__4795__auto__.push((arguments[i__4790__auto___58449]));

var G__58450 = (i__4790__auto___58449 + (1));
i__4790__auto___58449 = G__58450;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58429 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58430 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58430);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58429);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq58426){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58426));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58451 = arguments.length;
var i__4790__auto___58452 = (0);
while(true){
if((i__4790__auto___58452 < len__4789__auto___58451)){
args__4795__auto__.push((arguments[i__4790__auto___58452]));

var G__58453 = (i__4790__auto___58452 + (1));
i__4790__auto___58452 = G__58453;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58435 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58436 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58436);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58435);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq58434){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58434));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58454 = arguments.length;
var i__4790__auto___58455 = (0);
while(true){
if((i__4790__auto___58455 < len__4789__auto___58454)){
args__4795__auto__.push((arguments[i__4790__auto___58455]));

var G__58456 = (i__4790__auto___58455 + (1));
i__4790__auto___58455 = G__58456;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58438 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58439 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58439);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58438);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq58437){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58437));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58457 = arguments.length;
var i__4790__auto___58458 = (0);
while(true){
if((i__4790__auto___58458 < len__4789__auto___58457)){
args__4795__auto__.push((arguments[i__4790__auto___58458]));

var G__58459 = (i__4790__auto___58458 + (1));
i__4790__auto___58458 = G__58459;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58441 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58442 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58442);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58441);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq58440){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58440));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58461 = arguments.length;
var i__4790__auto___58462 = (0);
while(true){
if((i__4790__auto___58462 < len__4789__auto___58461)){
args__4795__auto__.push((arguments[i__4790__auto___58462]));

var G__58463 = (i__4790__auto___58462 + (1));
i__4790__auto___58462 = G__58463;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__58443__auto__","s__58443__auto__",-841387094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__58443__auto__","s__58443__auto__",-841387094,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__58443__auto__","s__58443__auto__",-841387094,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq58444){
var G__58445 = cljs.core.first(seq58444);
var seq58444__$1 = cljs.core.next(seq58444);
var G__58446 = cljs.core.first(seq58444__$1);
var seq58444__$2 = cljs.core.next(seq58444__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58445,G__58446,seq58444__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
