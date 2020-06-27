goog.provide('clojure.core.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.core.protocols.Datafiable = function(){};

/**
 * return a representation of o as data (default identity)
 */
clojure.core.protocols.datafy = (function clojure$core$protocols$datafy(o){
if((((!((o == null)))) && ((!((o.clojure$core$protocols$Datafiable$datafy$arity$1 == null)))))){
return o.clojure$core$protocols$Datafiable$datafy$arity$1(o);
} else {
var x__4487__auto__ = (((o == null))?null:o);
var m__4488__auto__ = (clojure.core.protocols.datafy[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(o) : m__4488__auto__.call(null,o));
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(o),new cljs.core.Symbol("clojure.core.protocols","datafy","clojure.core.protocols/datafy",707534751,null));
if(temp__5733__auto__){
var meta_impl__4486__auto__ = temp__5733__auto__;
return (meta_impl__4486__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4486__auto__.cljs$core$IFn$_invoke$arity$1(o) : meta_impl__4486__auto__.call(null,o));
} else {
var m__4485__auto__ = (clojure.core.protocols.datafy["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(o) : m__4485__auto__.call(null,o));
} else {
throw cljs.core.missing_protocol("Datafiable.datafy",o);
}
}
}
}
});

goog.object.set(clojure.core.protocols.Datafiable,"null",true);

var G__60113_60122 = clojure.core.protocols.datafy;
var G__60114_60123 = "null";
var G__60115_60124 = (function (_){
return null;
});
goog.object.set(G__60113_60122,G__60114_60123,G__60115_60124);

goog.object.set(clojure.core.protocols.Datafiable,"_",true);

var G__60116_60125 = clojure.core.protocols.datafy;
var G__60117_60126 = "_";
var G__60118_60127 = (function (o){
return o;
});
goog.object.set(G__60116_60125,G__60117_60126,G__60118_60127);

/**
 * @interface
 */
clojure.core.protocols.Navigable = function(){};

/**
 * return (possibly transformed) v in the context of coll and k (a key/index or nil),
 * defaults to returning v.
 */
clojure.core.protocols.nav = (function clojure$core$protocols$nav(coll,k,v){
if((((!((coll == null)))) && ((!((coll.clojure$core$protocols$Navigable$nav$arity$3 == null)))))){
return coll.clojure$core$protocols$Navigable$nav$arity$3(coll,k,v);
} else {
var x__4487__auto__ = (((coll == null))?null:coll);
var m__4488__auto__ = (clojure.core.protocols.nav[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : m__4488__auto__.call(null,coll,k,v));
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(coll),new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null));
if(temp__5733__auto__){
var meta_impl__4486__auto__ = temp__5733__auto__;
return (meta_impl__4486__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__4486__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : meta_impl__4486__auto__.call(null,coll,k,v));
} else {
var m__4485__auto__ = (clojure.core.protocols.nav["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : m__4485__auto__.call(null,coll,k,v));
} else {
throw cljs.core.missing_protocol("Navigable.nav",coll);
}
}
}
}
});

goog.object.set(clojure.core.protocols.Navigable,"_",true);

var G__60119_60128 = clojure.core.protocols.nav;
var G__60120_60129 = "_";
var G__60121_60130 = (function (_,___$1,x){
return x;
});
goog.object.set(G__60119_60128,G__60120_60129,G__60121_60130);

//# sourceMappingURL=clojure.core.protocols.js.map
