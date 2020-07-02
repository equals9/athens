goog.provide('shadow.remote.runtime.cljs.js_builtins');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.core.protocols');
goog.object.set(clojure.core.protocols.Datafiable,"object",true);

var G__60456_60462 = clojure.core.protocols.datafy;
var G__60457_60463 = "object";
var G__60458_60464 = (function (o){
if((!((o.__proto__ === Object.prototype)))){
return o;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,key){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,key,goog.object.get(o,key));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),goog.object.getKeys(o))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),(function (coll,k,v){
return goog.object.get(o,k);
})], null));
}
});
goog.object.set(G__60456_60462,G__60457_60463,G__60458_60464);

goog.object.set(clojure.core.protocols.Datafiable,"array",true);

var G__60459_60465 = clojure.core.protocols.datafy;
var G__60460_60466 = "array";
var G__60461_60467 = (function (o){
return cljs.core.vec(o);
});
goog.object.set(G__60459_60465,G__60460_60466,G__60461_60467);

//# sourceMappingURL=shadow.remote.runtime.cljs.js_builtins.js.map
