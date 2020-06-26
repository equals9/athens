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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57816,match){
var map__57817 = p__57816;
var map__57817__$1 = (((((!((map__57817 == null))))?(((((map__57817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57817):map__57817);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57817__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57817__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57817__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57820(s__57821){
return (new cljs.core.LazySeq(null,(function (){
var s__57821__$1 = s__57821;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57821__$1);
if(temp__5735__auto__){
var s__57821__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57821__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57821__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57823 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57822 = (0);
while(true){
if((i__57822 < size__4581__auto__)){
var vec__57825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57822);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57825,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57825,(1),null);
cljs.core.chunk_append(b__57823,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57844 = (i__57822 + (1));
i__57822 = G__57844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57823),reitit$frontend$controllers$get_identity_$_iter__57820(cljs.core.chunk_rest(s__57821__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57823),null);
}
} else {
var vec__57828 = cljs.core.first(s__57821__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57828,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57828,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57820(cljs.core.rest(s__57821__$2)));
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
var G__57832 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57832) : f.call(null,G__57832));
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
var seq__57833_57845 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57834_57846 = null;
var count__57835_57847 = (0);
var i__57836_57848 = (0);
while(true){
if((i__57836_57848 < count__57835_57847)){
var controller_57849 = chunk__57834_57846.cljs$core$IIndexed$_nth$arity$2(null,i__57836_57848);
reitit.frontend.controllers.apply_controller(controller_57849,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57850 = seq__57833_57845;
var G__57851 = chunk__57834_57846;
var G__57852 = count__57835_57847;
var G__57853 = (i__57836_57848 + (1));
seq__57833_57845 = G__57850;
chunk__57834_57846 = G__57851;
count__57835_57847 = G__57852;
i__57836_57848 = G__57853;
continue;
} else {
var temp__5735__auto___57854 = cljs.core.seq(seq__57833_57845);
if(temp__5735__auto___57854){
var seq__57833_57855__$1 = temp__5735__auto___57854;
if(cljs.core.chunked_seq_QMARK_(seq__57833_57855__$1)){
var c__4609__auto___57856 = cljs.core.chunk_first(seq__57833_57855__$1);
var G__57857 = cljs.core.chunk_rest(seq__57833_57855__$1);
var G__57858 = c__4609__auto___57856;
var G__57859 = cljs.core.count(c__4609__auto___57856);
var G__57860 = (0);
seq__57833_57845 = G__57857;
chunk__57834_57846 = G__57858;
count__57835_57847 = G__57859;
i__57836_57848 = G__57860;
continue;
} else {
var controller_57861 = cljs.core.first(seq__57833_57855__$1);
reitit.frontend.controllers.apply_controller(controller_57861,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57862 = cljs.core.next(seq__57833_57855__$1);
var G__57863 = null;
var G__57864 = (0);
var G__57865 = (0);
seq__57833_57845 = G__57862;
chunk__57834_57846 = G__57863;
count__57835_57847 = G__57864;
i__57836_57848 = G__57865;
continue;
}
} else {
}
}
break;
}

var seq__57837_57866 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57838_57867 = null;
var count__57839_57868 = (0);
var i__57840_57869 = (0);
while(true){
if((i__57840_57869 < count__57839_57868)){
var controller_57871 = chunk__57838_57867.cljs$core$IIndexed$_nth$arity$2(null,i__57840_57869);
reitit.frontend.controllers.apply_controller(controller_57871,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57872 = seq__57837_57866;
var G__57873 = chunk__57838_57867;
var G__57874 = count__57839_57868;
var G__57875 = (i__57840_57869 + (1));
seq__57837_57866 = G__57872;
chunk__57838_57867 = G__57873;
count__57839_57868 = G__57874;
i__57840_57869 = G__57875;
continue;
} else {
var temp__5735__auto___57876 = cljs.core.seq(seq__57837_57866);
if(temp__5735__auto___57876){
var seq__57837_57877__$1 = temp__5735__auto___57876;
if(cljs.core.chunked_seq_QMARK_(seq__57837_57877__$1)){
var c__4609__auto___57878 = cljs.core.chunk_first(seq__57837_57877__$1);
var G__57879 = cljs.core.chunk_rest(seq__57837_57877__$1);
var G__57880 = c__4609__auto___57878;
var G__57881 = cljs.core.count(c__4609__auto___57878);
var G__57882 = (0);
seq__57837_57866 = G__57879;
chunk__57838_57867 = G__57880;
count__57839_57868 = G__57881;
i__57840_57869 = G__57882;
continue;
} else {
var controller_57883 = cljs.core.first(seq__57837_57877__$1);
reitit.frontend.controllers.apply_controller(controller_57883,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57884 = cljs.core.next(seq__57837_57877__$1);
var G__57885 = null;
var G__57886 = (0);
var G__57887 = (0);
seq__57837_57866 = G__57884;
chunk__57838_57867 = G__57885;
count__57839_57868 = G__57886;
i__57840_57869 = G__57887;
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
