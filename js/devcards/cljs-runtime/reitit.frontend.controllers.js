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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__54566,match){
var map__54567 = p__54566;
var map__54567__$1 = (((((!((map__54567 == null))))?(((((map__54567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54567):map__54567);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__54569(s__54570){
return (new cljs.core.LazySeq(null,(function (){
var s__54570__$1 = s__54570;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54570__$1);
if(temp__5735__auto__){
var s__54570__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54570__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54570__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54572 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54571 = (0);
while(true){
if((i__54571 < size__4528__auto__)){
var vec__54574 = cljs.core._nth(c__4527__auto__,i__54571);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54574,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54574,(1),null);
cljs.core.chunk_append(b__54572,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__54590 = (i__54571 + (1));
i__54571 = G__54590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54572),reitit$frontend$controllers$get_identity_$_iter__54569(cljs.core.chunk_rest(s__54570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54572),null);
}
} else {
var vec__54577 = cljs.core.first(s__54570__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54577,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54577,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__54569(cljs.core.rest(s__54570__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
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
var G__54580 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54580) : f.call(null,G__54580));
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
var seq__54581_54591 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__54582_54592 = null;
var count__54583_54593 = (0);
var i__54584_54594 = (0);
while(true){
if((i__54584_54594 < count__54583_54593)){
var controller_54595 = chunk__54582_54592.cljs$core$IIndexed$_nth$arity$2(null,i__54584_54594);
reitit.frontend.controllers.apply_controller(controller_54595,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54596 = seq__54581_54591;
var G__54597 = chunk__54582_54592;
var G__54598 = count__54583_54593;
var G__54599 = (i__54584_54594 + (1));
seq__54581_54591 = G__54596;
chunk__54582_54592 = G__54597;
count__54583_54593 = G__54598;
i__54584_54594 = G__54599;
continue;
} else {
var temp__5735__auto___54601 = cljs.core.seq(seq__54581_54591);
if(temp__5735__auto___54601){
var seq__54581_54602__$1 = temp__5735__auto___54601;
if(cljs.core.chunked_seq_QMARK_(seq__54581_54602__$1)){
var c__4556__auto___54603 = cljs.core.chunk_first(seq__54581_54602__$1);
var G__54604 = cljs.core.chunk_rest(seq__54581_54602__$1);
var G__54605 = c__4556__auto___54603;
var G__54606 = cljs.core.count(c__4556__auto___54603);
var G__54607 = (0);
seq__54581_54591 = G__54604;
chunk__54582_54592 = G__54605;
count__54583_54593 = G__54606;
i__54584_54594 = G__54607;
continue;
} else {
var controller_54608 = cljs.core.first(seq__54581_54602__$1);
reitit.frontend.controllers.apply_controller(controller_54608,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54609 = cljs.core.next(seq__54581_54602__$1);
var G__54610 = null;
var G__54611 = (0);
var G__54612 = (0);
seq__54581_54591 = G__54609;
chunk__54582_54592 = G__54610;
count__54583_54593 = G__54611;
i__54584_54594 = G__54612;
continue;
}
} else {
}
}
break;
}

var seq__54585_54613 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__54586_54614 = null;
var count__54587_54615 = (0);
var i__54588_54616 = (0);
while(true){
if((i__54588_54616 < count__54587_54615)){
var controller_54617 = chunk__54586_54614.cljs$core$IIndexed$_nth$arity$2(null,i__54588_54616);
reitit.frontend.controllers.apply_controller(controller_54617,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54618 = seq__54585_54613;
var G__54619 = chunk__54586_54614;
var G__54620 = count__54587_54615;
var G__54621 = (i__54588_54616 + (1));
seq__54585_54613 = G__54618;
chunk__54586_54614 = G__54619;
count__54587_54615 = G__54620;
i__54588_54616 = G__54621;
continue;
} else {
var temp__5735__auto___54622 = cljs.core.seq(seq__54585_54613);
if(temp__5735__auto___54622){
var seq__54585_54623__$1 = temp__5735__auto___54622;
if(cljs.core.chunked_seq_QMARK_(seq__54585_54623__$1)){
var c__4556__auto___54624 = cljs.core.chunk_first(seq__54585_54623__$1);
var G__54625 = cljs.core.chunk_rest(seq__54585_54623__$1);
var G__54626 = c__4556__auto___54624;
var G__54627 = cljs.core.count(c__4556__auto___54624);
var G__54628 = (0);
seq__54585_54613 = G__54625;
chunk__54586_54614 = G__54626;
count__54587_54615 = G__54627;
i__54588_54616 = G__54628;
continue;
} else {
var controller_54629 = cljs.core.first(seq__54585_54623__$1);
reitit.frontend.controllers.apply_controller(controller_54629,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54630 = cljs.core.next(seq__54585_54623__$1);
var G__54631 = null;
var G__54632 = (0);
var G__54633 = (0);
seq__54585_54613 = G__54630;
chunk__54586_54614 = G__54631;
count__54587_54615 = G__54632;
i__54588_54616 = G__54633;
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
