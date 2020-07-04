goog.provide('sci.impl.io');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('sci.impl.unrestrict');
goog.require('sci.impl.vars');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__58749 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58750 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58750);

try{var G__58751 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__58751);

return G__58751;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58749);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__58753 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58754 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58754);

try{var G__58755 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__58755);

return G__58755;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58753);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__58758 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58759 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58759);

try{var G__58760 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__58760);

return G__58760;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58758);
}})();
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58778 = arguments.length;
var i__4790__auto___58779 = (0);
while(true){
if((i__4790__auto___58779 < len__4789__auto___58778)){
args__4795__auto__.push((arguments[i__4790__auto___58779]));

var G__58781 = (i__4790__auto___58779 + (1));
i__4790__auto___58779 = G__58781;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58762 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58763 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58763);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58762);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq58761){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58761));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58782 = arguments.length;
var i__4790__auto___58783 = (0);
while(true){
if((i__4790__auto___58783 < len__4789__auto___58782)){
args__4795__auto__.push((arguments[i__4790__auto___58783]));

var G__58784 = (i__4790__auto___58783 + (1));
i__4790__auto___58783 = G__58784;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58765 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58766 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58766);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58765);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq58764){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58764));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58785 = arguments.length;
var i__4790__auto___58786 = (0);
while(true){
if((i__4790__auto___58786 < len__4789__auto___58785)){
args__4795__auto__.push((arguments[i__4790__auto___58786]));

var G__58787 = (i__4790__auto___58786 + (1));
i__4790__auto___58786 = G__58787;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58768 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58769 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58769);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58768);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq58767){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58767));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58791 = arguments.length;
var i__4790__auto___58792 = (0);
while(true){
if((i__4790__auto___58792 < len__4789__auto___58791)){
args__4795__auto__.push((arguments[i__4790__auto___58792]));

var G__58793 = (i__4790__auto___58792 + (1));
i__4790__auto___58792 = G__58793;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58771 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58772 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58772);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58771);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq58770){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58770));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58797 = arguments.length;
var i__4790__auto___58798 = (0);
while(true){
if((i__4790__auto___58798 < len__4789__auto___58797)){
args__4795__auto__.push((arguments[i__4790__auto___58798]));

var G__58799 = (i__4790__auto___58798 + (1));
i__4790__auto___58798 = G__58799;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__58773__auto__","s__58773__auto__",-2082012854,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__58773__auto__","s__58773__auto__",-2082012854,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__58773__auto__","s__58773__auto__",-2082012854,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq58774){
var G__58775 = cljs.core.first(seq58774);
var seq58774__$1 = cljs.core.next(seq58774);
var G__58776 = cljs.core.first(seq58774__$1);
var seq58774__$2 = cljs.core.next(seq58774__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58775,G__58776,seq58774__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
