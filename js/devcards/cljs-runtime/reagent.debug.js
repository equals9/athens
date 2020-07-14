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
var G__31587__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31592__i = 0, G__31592__a = new Array(arguments.length -  0);
while (G__31592__i < G__31592__a.length) {G__31592__a[G__31592__i] = arguments[G__31592__i + 0]; ++G__31592__i;}
  args = new cljs.core.IndexedSeq(G__31592__a,0,null);
} 
return G__31587__delegate.call(this,args);};
G__31587.cljs$lang$maxFixedArity = 0;
G__31587.cljs$lang$applyTo = (function (arglist__31593){
var args = cljs.core.seq(arglist__31593);
return G__31587__delegate(args);
});
G__31587.cljs$core$IFn$_invoke$arity$variadic = G__31587__delegate;
return G__31587;
})()
);

(o.error = (function() { 
var G__31594__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31595__i = 0, G__31595__a = new Array(arguments.length -  0);
while (G__31595__i < G__31595__a.length) {G__31595__a[G__31595__i] = arguments[G__31595__i + 0]; ++G__31595__i;}
  args = new cljs.core.IndexedSeq(G__31595__a,0,null);
} 
return G__31594__delegate.call(this,args);};
G__31594.cljs$lang$maxFixedArity = 0;
G__31594.cljs$lang$applyTo = (function (arglist__31596){
var args = cljs.core.seq(arglist__31596);
return G__31594__delegate(args);
});
G__31594.cljs$core$IFn$_invoke$arity$variadic = G__31594__delegate;
return G__31594;
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
