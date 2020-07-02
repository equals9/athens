goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__32135__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32141__i = 0, G__32141__a = new Array(arguments.length -  0);
while (G__32141__i < G__32141__a.length) {G__32141__a[G__32141__i] = arguments[G__32141__i + 0]; ++G__32141__i;}
  args = new cljs.core.IndexedSeq(G__32141__a,0,null);
} 
return G__32135__delegate.call(this,args);};
G__32135.cljs$lang$maxFixedArity = 0;
G__32135.cljs$lang$applyTo = (function (arglist__32142){
var args = cljs.core.seq(arglist__32142);
return G__32135__delegate(args);
});
G__32135.cljs$core$IFn$_invoke$arity$variadic = G__32135__delegate;
return G__32135;
})()
);

(o.error = (function() { 
var G__32148__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32149__i = 0, G__32149__a = new Array(arguments.length -  0);
while (G__32149__i < G__32149__a.length) {G__32149__a[G__32149__i] = arguments[G__32149__i + 0]; ++G__32149__i;}
  args = new cljs.core.IndexedSeq(G__32149__a,0,null);
} 
return G__32148__delegate.call(this,args);};
G__32148.cljs$lang$maxFixedArity = 0;
G__32148.cljs$lang$applyTo = (function (arglist__32150){
var args = cljs.core.seq(arglist__32150);
return G__32148__delegate(args);
});
G__32148.cljs$core$IFn$_invoke$arity$variadic = G__32148__delegate;
return G__32148;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
