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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50209,match){
var map__50210 = p__50209;
var map__50210__$1 = (((((!((map__50210 == null))))?(((((map__50210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50210):map__50210);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50215(s__50216){
return (new cljs.core.LazySeq(null,(function (){
var s__50216__$1 = s__50216;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50216__$1);
if(temp__5735__auto__){
var s__50216__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50216__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50216__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50218 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50217 = (0);
while(true){
if((i__50217 < size__4581__auto__)){
var vec__50219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50217);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219,(1),null);
cljs.core.chunk_append(b__50218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50235 = (i__50217 + (1));
i__50217 = G__50235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50218),reitit$frontend$controllers$get_identity_$_iter__50215(cljs.core.chunk_rest(s__50216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50218),null);
}
} else {
var vec__50222 = cljs.core.first(s__50216__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50222,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50222,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50215(cljs.core.rest(s__50216__$2)));
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
var G__50225 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50225) : f.call(null,G__50225));
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
var seq__50226_50237 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50227_50238 = null;
var count__50228_50239 = (0);
var i__50229_50240 = (0);
while(true){
if((i__50229_50240 < count__50228_50239)){
var controller_50241 = chunk__50227_50238.cljs$core$IIndexed$_nth$arity$2(null,i__50229_50240);
reitit.frontend.controllers.apply_controller(controller_50241,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50242 = seq__50226_50237;
var G__50243 = chunk__50227_50238;
var G__50244 = count__50228_50239;
var G__50245 = (i__50229_50240 + (1));
seq__50226_50237 = G__50242;
chunk__50227_50238 = G__50243;
count__50228_50239 = G__50244;
i__50229_50240 = G__50245;
continue;
} else {
var temp__5735__auto___50246 = cljs.core.seq(seq__50226_50237);
if(temp__5735__auto___50246){
var seq__50226_50247__$1 = temp__5735__auto___50246;
if(cljs.core.chunked_seq_QMARK_(seq__50226_50247__$1)){
var c__4609__auto___50248 = cljs.core.chunk_first(seq__50226_50247__$1);
var G__50249 = cljs.core.chunk_rest(seq__50226_50247__$1);
var G__50250 = c__4609__auto___50248;
var G__50251 = cljs.core.count(c__4609__auto___50248);
var G__50252 = (0);
seq__50226_50237 = G__50249;
chunk__50227_50238 = G__50250;
count__50228_50239 = G__50251;
i__50229_50240 = G__50252;
continue;
} else {
var controller_50253 = cljs.core.first(seq__50226_50247__$1);
reitit.frontend.controllers.apply_controller(controller_50253,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50254 = cljs.core.next(seq__50226_50247__$1);
var G__50255 = null;
var G__50256 = (0);
var G__50257 = (0);
seq__50226_50237 = G__50254;
chunk__50227_50238 = G__50255;
count__50228_50239 = G__50256;
i__50229_50240 = G__50257;
continue;
}
} else {
}
}
break;
}

var seq__50231_50258 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50232_50259 = null;
var count__50233_50260 = (0);
var i__50234_50261 = (0);
while(true){
if((i__50234_50261 < count__50233_50260)){
var controller_50262 = chunk__50232_50259.cljs$core$IIndexed$_nth$arity$2(null,i__50234_50261);
reitit.frontend.controllers.apply_controller(controller_50262,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50263 = seq__50231_50258;
var G__50264 = chunk__50232_50259;
var G__50265 = count__50233_50260;
var G__50266 = (i__50234_50261 + (1));
seq__50231_50258 = G__50263;
chunk__50232_50259 = G__50264;
count__50233_50260 = G__50265;
i__50234_50261 = G__50266;
continue;
} else {
var temp__5735__auto___50267 = cljs.core.seq(seq__50231_50258);
if(temp__5735__auto___50267){
var seq__50231_50268__$1 = temp__5735__auto___50267;
if(cljs.core.chunked_seq_QMARK_(seq__50231_50268__$1)){
var c__4609__auto___50269 = cljs.core.chunk_first(seq__50231_50268__$1);
var G__50270 = cljs.core.chunk_rest(seq__50231_50268__$1);
var G__50271 = c__4609__auto___50269;
var G__50272 = cljs.core.count(c__4609__auto___50269);
var G__50273 = (0);
seq__50231_50258 = G__50270;
chunk__50232_50259 = G__50271;
count__50233_50260 = G__50272;
i__50234_50261 = G__50273;
continue;
} else {
var controller_50274 = cljs.core.first(seq__50231_50268__$1);
reitit.frontend.controllers.apply_controller(controller_50274,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50276 = cljs.core.next(seq__50231_50268__$1);
var G__50277 = null;
var G__50278 = (0);
var G__50279 = (0);
seq__50231_50258 = G__50276;
chunk__50232_50259 = G__50277;
count__50233_50260 = G__50278;
i__50234_50261 = G__50279;
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
