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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57786,match){
var map__57787 = p__57786;
var map__57787__$1 = (((((!((map__57787 == null))))?(((((map__57787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57787):map__57787);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57787__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57787__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57787__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57790(s__57791){
return (new cljs.core.LazySeq(null,(function (){
var s__57791__$1 = s__57791;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57791__$1);
if(temp__5735__auto__){
var s__57791__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57791__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57791__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57793 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57792 = (0);
while(true){
if((i__57792 < size__4581__auto__)){
var vec__57794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57792);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57794,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57794,(1),null);
cljs.core.chunk_append(b__57793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57812 = (i__57792 + (1));
i__57792 = G__57812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57793),reitit$frontend$controllers$get_identity_$_iter__57790(cljs.core.chunk_rest(s__57791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57793),null);
}
} else {
var vec__57797 = cljs.core.first(s__57791__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57797,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57797,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57790(cljs.core.rest(s__57791__$2)));
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
var G__57800 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57800) : f.call(null,G__57800));
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
var seq__57801_57813 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57802_57814 = null;
var count__57803_57815 = (0);
var i__57804_57816 = (0);
while(true){
if((i__57804_57816 < count__57803_57815)){
var controller_57818 = chunk__57802_57814.cljs$core$IIndexed$_nth$arity$2(null,i__57804_57816);
reitit.frontend.controllers.apply_controller(controller_57818,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57819 = seq__57801_57813;
var G__57820 = chunk__57802_57814;
var G__57821 = count__57803_57815;
var G__57822 = (i__57804_57816 + (1));
seq__57801_57813 = G__57819;
chunk__57802_57814 = G__57820;
count__57803_57815 = G__57821;
i__57804_57816 = G__57822;
continue;
} else {
var temp__5735__auto___57823 = cljs.core.seq(seq__57801_57813);
if(temp__5735__auto___57823){
var seq__57801_57824__$1 = temp__5735__auto___57823;
if(cljs.core.chunked_seq_QMARK_(seq__57801_57824__$1)){
var c__4609__auto___57825 = cljs.core.chunk_first(seq__57801_57824__$1);
var G__57826 = cljs.core.chunk_rest(seq__57801_57824__$1);
var G__57827 = c__4609__auto___57825;
var G__57828 = cljs.core.count(c__4609__auto___57825);
var G__57829 = (0);
seq__57801_57813 = G__57826;
chunk__57802_57814 = G__57827;
count__57803_57815 = G__57828;
i__57804_57816 = G__57829;
continue;
} else {
var controller_57830 = cljs.core.first(seq__57801_57824__$1);
reitit.frontend.controllers.apply_controller(controller_57830,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57831 = cljs.core.next(seq__57801_57824__$1);
var G__57832 = null;
var G__57833 = (0);
var G__57834 = (0);
seq__57801_57813 = G__57831;
chunk__57802_57814 = G__57832;
count__57803_57815 = G__57833;
i__57804_57816 = G__57834;
continue;
}
} else {
}
}
break;
}

var seq__57805_57835 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57806_57836 = null;
var count__57807_57837 = (0);
var i__57808_57838 = (0);
while(true){
if((i__57808_57838 < count__57807_57837)){
var controller_57839 = chunk__57806_57836.cljs$core$IIndexed$_nth$arity$2(null,i__57808_57838);
reitit.frontend.controllers.apply_controller(controller_57839,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57840 = seq__57805_57835;
var G__57841 = chunk__57806_57836;
var G__57842 = count__57807_57837;
var G__57843 = (i__57808_57838 + (1));
seq__57805_57835 = G__57840;
chunk__57806_57836 = G__57841;
count__57807_57837 = G__57842;
i__57808_57838 = G__57843;
continue;
} else {
var temp__5735__auto___57844 = cljs.core.seq(seq__57805_57835);
if(temp__5735__auto___57844){
var seq__57805_57845__$1 = temp__5735__auto___57844;
if(cljs.core.chunked_seq_QMARK_(seq__57805_57845__$1)){
var c__4609__auto___57846 = cljs.core.chunk_first(seq__57805_57845__$1);
var G__57847 = cljs.core.chunk_rest(seq__57805_57845__$1);
var G__57848 = c__4609__auto___57846;
var G__57849 = cljs.core.count(c__4609__auto___57846);
var G__57850 = (0);
seq__57805_57835 = G__57847;
chunk__57806_57836 = G__57848;
count__57807_57837 = G__57849;
i__57808_57838 = G__57850;
continue;
} else {
var controller_57851 = cljs.core.first(seq__57805_57845__$1);
reitit.frontend.controllers.apply_controller(controller_57851,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57852 = cljs.core.next(seq__57805_57845__$1);
var G__57853 = null;
var G__57854 = (0);
var G__57855 = (0);
seq__57805_57835 = G__57852;
chunk__57806_57836 = G__57853;
count__57807_57837 = G__57854;
i__57808_57838 = G__57855;
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
