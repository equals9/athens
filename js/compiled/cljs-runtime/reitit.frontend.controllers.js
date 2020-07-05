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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57918,match){
var map__57919 = p__57918;
var map__57919__$1 = (((((!((map__57919 == null))))?(((((map__57919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57919):map__57919);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57919__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57919__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57919__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57921(s__57922){
return (new cljs.core.LazySeq(null,(function (){
var s__57922__$1 = s__57922;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57922__$1);
if(temp__5735__auto__){
var s__57922__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57922__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57922__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57924 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57923 = (0);
while(true){
if((i__57923 < size__4581__auto__)){
var vec__57928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57923);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57928,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57928,(1),null);
cljs.core.chunk_append(b__57924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57947 = (i__57923 + (1));
i__57923 = G__57947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57924),reitit$frontend$controllers$get_identity_$_iter__57921(cljs.core.chunk_rest(s__57922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57924),null);
}
} else {
var vec__57931 = cljs.core.first(s__57922__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57931,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57931,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57921(cljs.core.rest(s__57922__$2)));
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
var G__57934 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57934) : f.call(null,G__57934));
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
var seq__57935_57948 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57936_57949 = null;
var count__57937_57950 = (0);
var i__57938_57951 = (0);
while(true){
if((i__57938_57951 < count__57937_57950)){
var controller_57952 = chunk__57936_57949.cljs$core$IIndexed$_nth$arity$2(null,i__57938_57951);
reitit.frontend.controllers.apply_controller(controller_57952,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57953 = seq__57935_57948;
var G__57954 = chunk__57936_57949;
var G__57955 = count__57937_57950;
var G__57956 = (i__57938_57951 + (1));
seq__57935_57948 = G__57953;
chunk__57936_57949 = G__57954;
count__57937_57950 = G__57955;
i__57938_57951 = G__57956;
continue;
} else {
var temp__5735__auto___57957 = cljs.core.seq(seq__57935_57948);
if(temp__5735__auto___57957){
var seq__57935_57958__$1 = temp__5735__auto___57957;
if(cljs.core.chunked_seq_QMARK_(seq__57935_57958__$1)){
var c__4609__auto___57959 = cljs.core.chunk_first(seq__57935_57958__$1);
var G__57960 = cljs.core.chunk_rest(seq__57935_57958__$1);
var G__57961 = c__4609__auto___57959;
var G__57962 = cljs.core.count(c__4609__auto___57959);
var G__57963 = (0);
seq__57935_57948 = G__57960;
chunk__57936_57949 = G__57961;
count__57937_57950 = G__57962;
i__57938_57951 = G__57963;
continue;
} else {
var controller_57964 = cljs.core.first(seq__57935_57958__$1);
reitit.frontend.controllers.apply_controller(controller_57964,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57965 = cljs.core.next(seq__57935_57958__$1);
var G__57966 = null;
var G__57967 = (0);
var G__57968 = (0);
seq__57935_57948 = G__57965;
chunk__57936_57949 = G__57966;
count__57937_57950 = G__57967;
i__57938_57951 = G__57968;
continue;
}
} else {
}
}
break;
}

var seq__57942_57969 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57943_57970 = null;
var count__57944_57971 = (0);
var i__57945_57972 = (0);
while(true){
if((i__57945_57972 < count__57944_57971)){
var controller_57973 = chunk__57943_57970.cljs$core$IIndexed$_nth$arity$2(null,i__57945_57972);
reitit.frontend.controllers.apply_controller(controller_57973,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57974 = seq__57942_57969;
var G__57975 = chunk__57943_57970;
var G__57976 = count__57944_57971;
var G__57977 = (i__57945_57972 + (1));
seq__57942_57969 = G__57974;
chunk__57943_57970 = G__57975;
count__57944_57971 = G__57976;
i__57945_57972 = G__57977;
continue;
} else {
var temp__5735__auto___57978 = cljs.core.seq(seq__57942_57969);
if(temp__5735__auto___57978){
var seq__57942_57979__$1 = temp__5735__auto___57978;
if(cljs.core.chunked_seq_QMARK_(seq__57942_57979__$1)){
var c__4609__auto___57980 = cljs.core.chunk_first(seq__57942_57979__$1);
var G__57981 = cljs.core.chunk_rest(seq__57942_57979__$1);
var G__57982 = c__4609__auto___57980;
var G__57983 = cljs.core.count(c__4609__auto___57980);
var G__57984 = (0);
seq__57942_57969 = G__57981;
chunk__57943_57970 = G__57982;
count__57944_57971 = G__57983;
i__57945_57972 = G__57984;
continue;
} else {
var controller_57985 = cljs.core.first(seq__57942_57979__$1);
reitit.frontend.controllers.apply_controller(controller_57985,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57987 = cljs.core.next(seq__57942_57979__$1);
var G__57988 = null;
var G__57989 = (0);
var G__57990 = (0);
seq__57942_57969 = G__57987;
chunk__57943_57970 = G__57988;
count__57944_57971 = G__57989;
i__57945_57972 = G__57990;
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
