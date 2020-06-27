goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50196,match){
var map__50197 = p__50196;
var map__50197__$1 = (((((!((map__50197 == null))))?(((((map__50197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50197):map__50197);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50199(s__50200){
return (new cljs.core.LazySeq(null,(function (){
var s__50200__$1 = s__50200;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50200__$1);
if(temp__5735__auto__){
var s__50200__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50200__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50200__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50202 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50201 = (0);
while(true){
if((i__50201 < size__4581__auto__)){
var vec__50203 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50201);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50203,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50203,(1),null);
cljs.core.chunk_append(b__50202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50221 = (i__50201 + (1));
i__50201 = G__50221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50202),reitit$frontend$controllers$get_identity_$_iter__50199(cljs.core.chunk_rest(s__50200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50202),null);
}
} else {
var vec__50206 = cljs.core.first(s__50200__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50206,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50206,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50199(cljs.core.rest(s__50200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__50210 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50210) : f.call(null,G__50210));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__50212_50225 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50213_50226 = null;
var count__50214_50227 = (0);
var i__50215_50228 = (0);
while(true){
if((i__50215_50228 < count__50214_50227)){
var controller_50229 = chunk__50213_50226.cljs$core$IIndexed$_nth$arity$2(null,i__50215_50228);
reitit.frontend.controllers.apply_controller(controller_50229,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50230 = seq__50212_50225;
var G__50231 = chunk__50213_50226;
var G__50232 = count__50214_50227;
var G__50233 = (i__50215_50228 + (1));
seq__50212_50225 = G__50230;
chunk__50213_50226 = G__50231;
count__50214_50227 = G__50232;
i__50215_50228 = G__50233;
continue;
} else {
var temp__5735__auto___50234 = cljs.core.seq(seq__50212_50225);
if(temp__5735__auto___50234){
var seq__50212_50235__$1 = temp__5735__auto___50234;
if(cljs.core.chunked_seq_QMARK_(seq__50212_50235__$1)){
var c__4609__auto___50236 = cljs.core.chunk_first(seq__50212_50235__$1);
var G__50237 = cljs.core.chunk_rest(seq__50212_50235__$1);
var G__50238 = c__4609__auto___50236;
var G__50239 = cljs.core.count(c__4609__auto___50236);
var G__50240 = (0);
seq__50212_50225 = G__50237;
chunk__50213_50226 = G__50238;
count__50214_50227 = G__50239;
i__50215_50228 = G__50240;
continue;
} else {
var controller_50241 = cljs.core.first(seq__50212_50235__$1);
reitit.frontend.controllers.apply_controller(controller_50241,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50242 = cljs.core.next(seq__50212_50235__$1);
var G__50243 = null;
var G__50244 = (0);
var G__50245 = (0);
seq__50212_50225 = G__50242;
chunk__50213_50226 = G__50243;
count__50214_50227 = G__50244;
i__50215_50228 = G__50245;
continue;
}
} else {
}
}
break;
}

var seq__50217_50246 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50218_50247 = null;
var count__50219_50248 = (0);
var i__50220_50249 = (0);
while(true){
if((i__50220_50249 < count__50219_50248)){
var controller_50250 = chunk__50218_50247.cljs$core$IIndexed$_nth$arity$2(null,i__50220_50249);
reitit.frontend.controllers.apply_controller(controller_50250,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50251 = seq__50217_50246;
var G__50252 = chunk__50218_50247;
var G__50253 = count__50219_50248;
var G__50254 = (i__50220_50249 + (1));
seq__50217_50246 = G__50251;
chunk__50218_50247 = G__50252;
count__50219_50248 = G__50253;
i__50220_50249 = G__50254;
continue;
} else {
var temp__5735__auto___50255 = cljs.core.seq(seq__50217_50246);
if(temp__5735__auto___50255){
var seq__50217_50256__$1 = temp__5735__auto___50255;
if(cljs.core.chunked_seq_QMARK_(seq__50217_50256__$1)){
var c__4609__auto___50257 = cljs.core.chunk_first(seq__50217_50256__$1);
var G__50258 = cljs.core.chunk_rest(seq__50217_50256__$1);
var G__50259 = c__4609__auto___50257;
var G__50260 = cljs.core.count(c__4609__auto___50257);
var G__50261 = (0);
seq__50217_50246 = G__50258;
chunk__50218_50247 = G__50259;
count__50219_50248 = G__50260;
i__50220_50249 = G__50261;
continue;
} else {
var controller_50262 = cljs.core.first(seq__50217_50256__$1);
reitit.frontend.controllers.apply_controller(controller_50262,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50263 = cljs.core.next(seq__50217_50256__$1);
var G__50264 = null;
var G__50265 = (0);
var G__50266 = (0);
seq__50217_50246 = G__50263;
chunk__50218_50247 = G__50264;
count__50219_50248 = G__50265;
i__50220_50249 = G__50266;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
