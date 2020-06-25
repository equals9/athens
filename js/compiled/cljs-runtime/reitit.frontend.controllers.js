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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57793,match){
var map__57794 = p__57793;
var map__57794__$1 = (((((!((map__57794 == null))))?(((((map__57794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57794):map__57794);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57794__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57794__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57794__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57797(s__57798){
return (new cljs.core.LazySeq(null,(function (){
var s__57798__$1 = s__57798;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57798__$1);
if(temp__5735__auto__){
var s__57798__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57798__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57798__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57800 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57799 = (0);
while(true){
if((i__57799 < size__4581__auto__)){
var vec__57802 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57799);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57802,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57802,(1),null);
cljs.core.chunk_append(b__57800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57821 = (i__57799 + (1));
i__57799 = G__57821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57800),reitit$frontend$controllers$get_identity_$_iter__57797(cljs.core.chunk_rest(s__57798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57800),null);
}
} else {
var vec__57806 = cljs.core.first(s__57798__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57806,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57806,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57797(cljs.core.rest(s__57798__$2)));
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
var G__57809 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57809) : f.call(null,G__57809));
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
var seq__57810_57822 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57811_57823 = null;
var count__57812_57824 = (0);
var i__57813_57825 = (0);
while(true){
if((i__57813_57825 < count__57812_57824)){
var controller_57826 = chunk__57811_57823.cljs$core$IIndexed$_nth$arity$2(null,i__57813_57825);
reitit.frontend.controllers.apply_controller(controller_57826,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57827 = seq__57810_57822;
var G__57828 = chunk__57811_57823;
var G__57829 = count__57812_57824;
var G__57830 = (i__57813_57825 + (1));
seq__57810_57822 = G__57827;
chunk__57811_57823 = G__57828;
count__57812_57824 = G__57829;
i__57813_57825 = G__57830;
continue;
} else {
var temp__5735__auto___57831 = cljs.core.seq(seq__57810_57822);
if(temp__5735__auto___57831){
var seq__57810_57832__$1 = temp__5735__auto___57831;
if(cljs.core.chunked_seq_QMARK_(seq__57810_57832__$1)){
var c__4609__auto___57833 = cljs.core.chunk_first(seq__57810_57832__$1);
var G__57834 = cljs.core.chunk_rest(seq__57810_57832__$1);
var G__57835 = c__4609__auto___57833;
var G__57836 = cljs.core.count(c__4609__auto___57833);
var G__57837 = (0);
seq__57810_57822 = G__57834;
chunk__57811_57823 = G__57835;
count__57812_57824 = G__57836;
i__57813_57825 = G__57837;
continue;
} else {
var controller_57838 = cljs.core.first(seq__57810_57832__$1);
reitit.frontend.controllers.apply_controller(controller_57838,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57840 = cljs.core.next(seq__57810_57832__$1);
var G__57841 = null;
var G__57842 = (0);
var G__57843 = (0);
seq__57810_57822 = G__57840;
chunk__57811_57823 = G__57841;
count__57812_57824 = G__57842;
i__57813_57825 = G__57843;
continue;
}
} else {
}
}
break;
}

var seq__57814_57844 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57815_57845 = null;
var count__57816_57846 = (0);
var i__57817_57847 = (0);
while(true){
if((i__57817_57847 < count__57816_57846)){
var controller_57848 = chunk__57815_57845.cljs$core$IIndexed$_nth$arity$2(null,i__57817_57847);
reitit.frontend.controllers.apply_controller(controller_57848,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57849 = seq__57814_57844;
var G__57850 = chunk__57815_57845;
var G__57851 = count__57816_57846;
var G__57852 = (i__57817_57847 + (1));
seq__57814_57844 = G__57849;
chunk__57815_57845 = G__57850;
count__57816_57846 = G__57851;
i__57817_57847 = G__57852;
continue;
} else {
var temp__5735__auto___57853 = cljs.core.seq(seq__57814_57844);
if(temp__5735__auto___57853){
var seq__57814_57854__$1 = temp__5735__auto___57853;
if(cljs.core.chunked_seq_QMARK_(seq__57814_57854__$1)){
var c__4609__auto___57855 = cljs.core.chunk_first(seq__57814_57854__$1);
var G__57856 = cljs.core.chunk_rest(seq__57814_57854__$1);
var G__57857 = c__4609__auto___57855;
var G__57858 = cljs.core.count(c__4609__auto___57855);
var G__57859 = (0);
seq__57814_57844 = G__57856;
chunk__57815_57845 = G__57857;
count__57816_57846 = G__57858;
i__57817_57847 = G__57859;
continue;
} else {
var controller_57860 = cljs.core.first(seq__57814_57854__$1);
reitit.frontend.controllers.apply_controller(controller_57860,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57861 = cljs.core.next(seq__57814_57854__$1);
var G__57862 = null;
var G__57863 = (0);
var G__57864 = (0);
seq__57814_57844 = G__57861;
chunk__57815_57845 = G__57862;
count__57816_57846 = G__57863;
i__57817_57847 = G__57864;
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
