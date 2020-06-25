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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57795,match){
var map__57796 = p__57795;
var map__57796__$1 = (((((!((map__57796 == null))))?(((((map__57796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57796):map__57796);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57796__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57796__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57796__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57798(s__57799){
return (new cljs.core.LazySeq(null,(function (){
var s__57799__$1 = s__57799;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57799__$1);
if(temp__5735__auto__){
var s__57799__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57799__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57799__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57801 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57800 = (0);
while(true){
if((i__57800 < size__4581__auto__)){
var vec__57803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57800);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57803,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57803,(1),null);
cljs.core.chunk_append(b__57801,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57820 = (i__57800 + (1));
i__57800 = G__57820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57801),reitit$frontend$controllers$get_identity_$_iter__57798(cljs.core.chunk_rest(s__57799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57801),null);
}
} else {
var vec__57806 = cljs.core.first(s__57799__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57806,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57806,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57798(cljs.core.rest(s__57799__$2)));
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
var G__57810 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57810) : f.call(null,G__57810));
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
var seq__57812_57824 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57813_57825 = null;
var count__57814_57826 = (0);
var i__57815_57827 = (0);
while(true){
if((i__57815_57827 < count__57814_57826)){
var controller_57828 = chunk__57813_57825.cljs$core$IIndexed$_nth$arity$2(null,i__57815_57827);
reitit.frontend.controllers.apply_controller(controller_57828,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57829 = seq__57812_57824;
var G__57830 = chunk__57813_57825;
var G__57831 = count__57814_57826;
var G__57832 = (i__57815_57827 + (1));
seq__57812_57824 = G__57829;
chunk__57813_57825 = G__57830;
count__57814_57826 = G__57831;
i__57815_57827 = G__57832;
continue;
} else {
var temp__5735__auto___57833 = cljs.core.seq(seq__57812_57824);
if(temp__5735__auto___57833){
var seq__57812_57834__$1 = temp__5735__auto___57833;
if(cljs.core.chunked_seq_QMARK_(seq__57812_57834__$1)){
var c__4609__auto___57835 = cljs.core.chunk_first(seq__57812_57834__$1);
var G__57836 = cljs.core.chunk_rest(seq__57812_57834__$1);
var G__57837 = c__4609__auto___57835;
var G__57838 = cljs.core.count(c__4609__auto___57835);
var G__57839 = (0);
seq__57812_57824 = G__57836;
chunk__57813_57825 = G__57837;
count__57814_57826 = G__57838;
i__57815_57827 = G__57839;
continue;
} else {
var controller_57840 = cljs.core.first(seq__57812_57834__$1);
reitit.frontend.controllers.apply_controller(controller_57840,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57841 = cljs.core.next(seq__57812_57834__$1);
var G__57842 = null;
var G__57843 = (0);
var G__57844 = (0);
seq__57812_57824 = G__57841;
chunk__57813_57825 = G__57842;
count__57814_57826 = G__57843;
i__57815_57827 = G__57844;
continue;
}
} else {
}
}
break;
}

var seq__57816_57845 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57817_57846 = null;
var count__57818_57847 = (0);
var i__57819_57848 = (0);
while(true){
if((i__57819_57848 < count__57818_57847)){
var controller_57849 = chunk__57817_57846.cljs$core$IIndexed$_nth$arity$2(null,i__57819_57848);
reitit.frontend.controllers.apply_controller(controller_57849,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57850 = seq__57816_57845;
var G__57851 = chunk__57817_57846;
var G__57852 = count__57818_57847;
var G__57853 = (i__57819_57848 + (1));
seq__57816_57845 = G__57850;
chunk__57817_57846 = G__57851;
count__57818_57847 = G__57852;
i__57819_57848 = G__57853;
continue;
} else {
var temp__5735__auto___57854 = cljs.core.seq(seq__57816_57845);
if(temp__5735__auto___57854){
var seq__57816_57855__$1 = temp__5735__auto___57854;
if(cljs.core.chunked_seq_QMARK_(seq__57816_57855__$1)){
var c__4609__auto___57856 = cljs.core.chunk_first(seq__57816_57855__$1);
var G__57857 = cljs.core.chunk_rest(seq__57816_57855__$1);
var G__57858 = c__4609__auto___57856;
var G__57859 = cljs.core.count(c__4609__auto___57856);
var G__57860 = (0);
seq__57816_57845 = G__57857;
chunk__57817_57846 = G__57858;
count__57818_57847 = G__57859;
i__57819_57848 = G__57860;
continue;
} else {
var controller_57861 = cljs.core.first(seq__57816_57855__$1);
reitit.frontend.controllers.apply_controller(controller_57861,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57862 = cljs.core.next(seq__57816_57855__$1);
var G__57863 = null;
var G__57864 = (0);
var G__57865 = (0);
seq__57816_57845 = G__57862;
chunk__57817_57846 = G__57863;
count__57818_57847 = G__57864;
i__57819_57848 = G__57865;
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
