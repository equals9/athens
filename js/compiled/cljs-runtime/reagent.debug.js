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
var G__32130__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32136__i = 0, G__32136__a = new Array(arguments.length -  0);
while (G__32136__i < G__32136__a.length) {G__32136__a[G__32136__i] = arguments[G__32136__i + 0]; ++G__32136__i;}
  args = new cljs.core.IndexedSeq(G__32136__a,0,null);
} 
return G__32130__delegate.call(this,args);};
G__32130.cljs$lang$maxFixedArity = 0;
G__32130.cljs$lang$applyTo = (function (arglist__32137){
var args = cljs.core.seq(arglist__32137);
return G__32130__delegate(args);
});
G__32130.cljs$core$IFn$_invoke$arity$variadic = G__32130__delegate;
return G__32130;
})()
);

(o.error = (function() { 
var G__32138__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32144__i = 0, G__32144__a = new Array(arguments.length -  0);
while (G__32144__i < G__32144__a.length) {G__32144__a[G__32144__i] = arguments[G__32144__i + 0]; ++G__32144__i;}
  args = new cljs.core.IndexedSeq(G__32144__a,0,null);
} 
return G__32138__delegate.call(this,args);};
G__32138.cljs$lang$maxFixedArity = 0;
G__32138.cljs$lang$applyTo = (function (arglist__32145){
var args = cljs.core.seq(arglist__32145);
return G__32138__delegate(args);
});
G__32138.cljs$core$IFn$_invoke$arity$variadic = G__32138__delegate;
return G__32138;
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
