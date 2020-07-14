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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50233,match){
var map__50234 = p__50233;
var map__50234__$1 = (((((!((map__50234 == null))))?(((((map__50234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50234):map__50234);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50234__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50234__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50234__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50237(s__50238){
return (new cljs.core.LazySeq(null,(function (){
var s__50238__$1 = s__50238;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50238__$1);
if(temp__5735__auto__){
var s__50238__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50238__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50238__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50240 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50239 = (0);
while(true){
if((i__50239 < size__4581__auto__)){
var vec__50241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50239);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50241,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50241,(1),null);
cljs.core.chunk_append(b__50240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50259 = (i__50239 + (1));
i__50239 = G__50259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50240),reitit$frontend$controllers$get_identity_$_iter__50237(cljs.core.chunk_rest(s__50238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50240),null);
}
} else {
var vec__50244 = cljs.core.first(s__50238__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50244,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50244,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50237(cljs.core.rest(s__50238__$2)));
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
var G__50247 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50247) : f.call(null,G__50247));
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
var seq__50248_50260 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50249_50261 = null;
var count__50250_50262 = (0);
var i__50251_50263 = (0);
while(true){
if((i__50251_50263 < count__50250_50262)){
var controller_50264 = chunk__50249_50261.cljs$core$IIndexed$_nth$arity$2(null,i__50251_50263);
reitit.frontend.controllers.apply_controller(controller_50264,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50265 = seq__50248_50260;
var G__50266 = chunk__50249_50261;
var G__50267 = count__50250_50262;
var G__50268 = (i__50251_50263 + (1));
seq__50248_50260 = G__50265;
chunk__50249_50261 = G__50266;
count__50250_50262 = G__50267;
i__50251_50263 = G__50268;
continue;
} else {
var temp__5735__auto___50269 = cljs.core.seq(seq__50248_50260);
if(temp__5735__auto___50269){
var seq__50248_50271__$1 = temp__5735__auto___50269;
if(cljs.core.chunked_seq_QMARK_(seq__50248_50271__$1)){
var c__4609__auto___50272 = cljs.core.chunk_first(seq__50248_50271__$1);
var G__50273 = cljs.core.chunk_rest(seq__50248_50271__$1);
var G__50274 = c__4609__auto___50272;
var G__50275 = cljs.core.count(c__4609__auto___50272);
var G__50276 = (0);
seq__50248_50260 = G__50273;
chunk__50249_50261 = G__50274;
count__50250_50262 = G__50275;
i__50251_50263 = G__50276;
continue;
} else {
var controller_50277 = cljs.core.first(seq__50248_50271__$1);
reitit.frontend.controllers.apply_controller(controller_50277,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50278 = cljs.core.next(seq__50248_50271__$1);
var G__50279 = null;
var G__50280 = (0);
var G__50281 = (0);
seq__50248_50260 = G__50278;
chunk__50249_50261 = G__50279;
count__50250_50262 = G__50280;
i__50251_50263 = G__50281;
continue;
}
} else {
}
}
break;
}

var seq__50252_50282 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50253_50283 = null;
var count__50254_50284 = (0);
var i__50255_50285 = (0);
while(true){
if((i__50255_50285 < count__50254_50284)){
var controller_50286 = chunk__50253_50283.cljs$core$IIndexed$_nth$arity$2(null,i__50255_50285);
reitit.frontend.controllers.apply_controller(controller_50286,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50287 = seq__50252_50282;
var G__50288 = chunk__50253_50283;
var G__50289 = count__50254_50284;
var G__50290 = (i__50255_50285 + (1));
seq__50252_50282 = G__50287;
chunk__50253_50283 = G__50288;
count__50254_50284 = G__50289;
i__50255_50285 = G__50290;
continue;
} else {
var temp__5735__auto___50291 = cljs.core.seq(seq__50252_50282);
if(temp__5735__auto___50291){
var seq__50252_50292__$1 = temp__5735__auto___50291;
if(cljs.core.chunked_seq_QMARK_(seq__50252_50292__$1)){
var c__4609__auto___50293 = cljs.core.chunk_first(seq__50252_50292__$1);
var G__50294 = cljs.core.chunk_rest(seq__50252_50292__$1);
var G__50295 = c__4609__auto___50293;
var G__50296 = cljs.core.count(c__4609__auto___50293);
var G__50297 = (0);
seq__50252_50282 = G__50294;
chunk__50253_50283 = G__50295;
count__50254_50284 = G__50296;
i__50255_50285 = G__50297;
continue;
} else {
var controller_50298 = cljs.core.first(seq__50252_50292__$1);
reitit.frontend.controllers.apply_controller(controller_50298,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50299 = cljs.core.next(seq__50252_50292__$1);
var G__50300 = null;
var G__50301 = (0);
var G__50302 = (0);
seq__50252_50282 = G__50299;
chunk__50253_50283 = G__50300;
count__50254_50284 = G__50301;
i__50255_50285 = G__50302;
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
