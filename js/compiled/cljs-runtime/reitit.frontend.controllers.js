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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57796,match){
var map__57797 = p__57796;
var map__57797__$1 = (((((!((map__57797 == null))))?(((((map__57797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57797):map__57797);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57797__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57797__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57797__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57800(s__57801){
return (new cljs.core.LazySeq(null,(function (){
var s__57801__$1 = s__57801;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57801__$1);
if(temp__5735__auto__){
var s__57801__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57801__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57801__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57803 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57802 = (0);
while(true){
if((i__57802 < size__4581__auto__)){
var vec__57805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57802);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57805,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57805,(1),null);
cljs.core.chunk_append(b__57803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57822 = (i__57802 + (1));
i__57802 = G__57822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57803),reitit$frontend$controllers$get_identity_$_iter__57800(cljs.core.chunk_rest(s__57801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57803),null);
}
} else {
var vec__57808 = cljs.core.first(s__57801__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57808,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57808,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57800(cljs.core.rest(s__57801__$2)));
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
var G__57812 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57812) : f.call(null,G__57812));
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
var seq__57813_57825 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57814_57826 = null;
var count__57815_57827 = (0);
var i__57816_57828 = (0);
while(true){
if((i__57816_57828 < count__57815_57827)){
var controller_57829 = chunk__57814_57826.cljs$core$IIndexed$_nth$arity$2(null,i__57816_57828);
reitit.frontend.controllers.apply_controller(controller_57829,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57830 = seq__57813_57825;
var G__57831 = chunk__57814_57826;
var G__57832 = count__57815_57827;
var G__57833 = (i__57816_57828 + (1));
seq__57813_57825 = G__57830;
chunk__57814_57826 = G__57831;
count__57815_57827 = G__57832;
i__57816_57828 = G__57833;
continue;
} else {
var temp__5735__auto___57834 = cljs.core.seq(seq__57813_57825);
if(temp__5735__auto___57834){
var seq__57813_57835__$1 = temp__5735__auto___57834;
if(cljs.core.chunked_seq_QMARK_(seq__57813_57835__$1)){
var c__4609__auto___57836 = cljs.core.chunk_first(seq__57813_57835__$1);
var G__57837 = cljs.core.chunk_rest(seq__57813_57835__$1);
var G__57838 = c__4609__auto___57836;
var G__57839 = cljs.core.count(c__4609__auto___57836);
var G__57840 = (0);
seq__57813_57825 = G__57837;
chunk__57814_57826 = G__57838;
count__57815_57827 = G__57839;
i__57816_57828 = G__57840;
continue;
} else {
var controller_57841 = cljs.core.first(seq__57813_57835__$1);
reitit.frontend.controllers.apply_controller(controller_57841,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57842 = cljs.core.next(seq__57813_57835__$1);
var G__57843 = null;
var G__57844 = (0);
var G__57845 = (0);
seq__57813_57825 = G__57842;
chunk__57814_57826 = G__57843;
count__57815_57827 = G__57844;
i__57816_57828 = G__57845;
continue;
}
} else {
}
}
break;
}

var seq__57817_57846 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57818_57847 = null;
var count__57819_57848 = (0);
var i__57820_57849 = (0);
while(true){
if((i__57820_57849 < count__57819_57848)){
var controller_57850 = chunk__57818_57847.cljs$core$IIndexed$_nth$arity$2(null,i__57820_57849);
reitit.frontend.controllers.apply_controller(controller_57850,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57851 = seq__57817_57846;
var G__57852 = chunk__57818_57847;
var G__57853 = count__57819_57848;
var G__57854 = (i__57820_57849 + (1));
seq__57817_57846 = G__57851;
chunk__57818_57847 = G__57852;
count__57819_57848 = G__57853;
i__57820_57849 = G__57854;
continue;
} else {
var temp__5735__auto___57855 = cljs.core.seq(seq__57817_57846);
if(temp__5735__auto___57855){
var seq__57817_57856__$1 = temp__5735__auto___57855;
if(cljs.core.chunked_seq_QMARK_(seq__57817_57856__$1)){
var c__4609__auto___57857 = cljs.core.chunk_first(seq__57817_57856__$1);
var G__57858 = cljs.core.chunk_rest(seq__57817_57856__$1);
var G__57859 = c__4609__auto___57857;
var G__57860 = cljs.core.count(c__4609__auto___57857);
var G__57861 = (0);
seq__57817_57846 = G__57858;
chunk__57818_57847 = G__57859;
count__57819_57848 = G__57860;
i__57820_57849 = G__57861;
continue;
} else {
var controller_57863 = cljs.core.first(seq__57817_57856__$1);
reitit.frontend.controllers.apply_controller(controller_57863,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57864 = cljs.core.next(seq__57817_57856__$1);
var G__57865 = null;
var G__57866 = (0);
var G__57867 = (0);
seq__57817_57846 = G__57864;
chunk__57818_57847 = G__57865;
count__57819_57848 = G__57866;
i__57820_57849 = G__57867;
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
