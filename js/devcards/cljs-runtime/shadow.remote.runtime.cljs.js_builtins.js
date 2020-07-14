goog.provide('shadow.remote.runtime.cljs.js_builtins');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.core.protocols');
goog.object.set(clojure.core.protocols.Datafiable,"object",true);

var G__60942_60948 = clojure.core.protocols.datafy;
var G__60943_60949 = "object";
var G__60944_60950 = (function (o){
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
goog.object.set(G__60942_60948,G__60943_60949,G__60944_60950);

goog.object.set(clojure.core.protocols.Datafiable,"array",true);

var G__60945_60951 = clojure.core.protocols.datafy;
var G__60946_60952 = "array";
var G__60947_60953 = (function (o){
return cljs.core.vec(o);
});
goog.object.set(G__60945_60951,G__60946_60952,G__60947_60953);

//# sourceMappingURL=shadow.remote.runtime.cljs.js_builtins.js.map
