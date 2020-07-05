goog.provide('shadow.remote.runtime.cljs.js_builtins');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.core.protocols');
goog.object.set(clojure.core.protocols.Datafiable,"object",true);

var G__68164_68170 = clojure.core.protocols.datafy;
var G__68165_68171 = "object";
var G__68166_68172 = (function (o){
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
goog.object.set(G__68164_68170,G__68165_68171,G__68166_68172);

goog.object.set(clojure.core.protocols.Datafiable,"array",true);

var G__68167_68173 = clojure.core.protocols.datafy;
var G__68168_68174 = "array";
var G__68169_68175 = (function (o){
return cljs.core.vec(o);
});
goog.object.set(G__68167_68173,G__68168_68174,G__68169_68175);

//# sourceMappingURL=shadow.remote.runtime.cljs.js_builtins.js.map
