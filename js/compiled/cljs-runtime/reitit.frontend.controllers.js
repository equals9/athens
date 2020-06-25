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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57788,match){
var map__57789 = p__57788;
var map__57789__$1 = (((((!((map__57789 == null))))?(((((map__57789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57789):map__57789);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57789__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57789__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57789__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57791(s__57792){
return (new cljs.core.LazySeq(null,(function (){
var s__57792__$1 = s__57792;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57792__$1);
if(temp__5735__auto__){
var s__57792__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57792__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57792__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57794 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57793 = (0);
while(true){
if((i__57793 < size__4581__auto__)){
var vec__57795 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57793);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57795,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57795,(1),null);
cljs.core.chunk_append(b__57794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57813 = (i__57793 + (1));
i__57793 = G__57813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57794),reitit$frontend$controllers$get_identity_$_iter__57791(cljs.core.chunk_rest(s__57792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57794),null);
}
} else {
var vec__57798 = cljs.core.first(s__57792__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57798,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57798,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57791(cljs.core.rest(s__57792__$2)));
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
var G__57801 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57801) : f.call(null,G__57801));
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
var seq__57803_57814 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57804_57815 = null;
var count__57805_57816 = (0);
var i__57806_57817 = (0);
while(true){
if((i__57806_57817 < count__57805_57816)){
var controller_57818 = chunk__57804_57815.cljs$core$IIndexed$_nth$arity$2(null,i__57806_57817);
reitit.frontend.controllers.apply_controller(controller_57818,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57819 = seq__57803_57814;
var G__57820 = chunk__57804_57815;
var G__57821 = count__57805_57816;
var G__57822 = (i__57806_57817 + (1));
seq__57803_57814 = G__57819;
chunk__57804_57815 = G__57820;
count__57805_57816 = G__57821;
i__57806_57817 = G__57822;
continue;
} else {
var temp__5735__auto___57824 = cljs.core.seq(seq__57803_57814);
if(temp__5735__auto___57824){
var seq__57803_57825__$1 = temp__5735__auto___57824;
if(cljs.core.chunked_seq_QMARK_(seq__57803_57825__$1)){
var c__4609__auto___57826 = cljs.core.chunk_first(seq__57803_57825__$1);
var G__57827 = cljs.core.chunk_rest(seq__57803_57825__$1);
var G__57828 = c__4609__auto___57826;
var G__57829 = cljs.core.count(c__4609__auto___57826);
var G__57830 = (0);
seq__57803_57814 = G__57827;
chunk__57804_57815 = G__57828;
count__57805_57816 = G__57829;
i__57806_57817 = G__57830;
continue;
} else {
var controller_57832 = cljs.core.first(seq__57803_57825__$1);
reitit.frontend.controllers.apply_controller(controller_57832,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57833 = cljs.core.next(seq__57803_57825__$1);
var G__57834 = null;
var G__57835 = (0);
var G__57836 = (0);
seq__57803_57814 = G__57833;
chunk__57804_57815 = G__57834;
count__57805_57816 = G__57835;
i__57806_57817 = G__57836;
continue;
}
} else {
}
}
break;
}

var seq__57809_57838 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57810_57839 = null;
var count__57811_57840 = (0);
var i__57812_57841 = (0);
while(true){
if((i__57812_57841 < count__57811_57840)){
var controller_57842 = chunk__57810_57839.cljs$core$IIndexed$_nth$arity$2(null,i__57812_57841);
reitit.frontend.controllers.apply_controller(controller_57842,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57843 = seq__57809_57838;
var G__57844 = chunk__57810_57839;
var G__57845 = count__57811_57840;
var G__57846 = (i__57812_57841 + (1));
seq__57809_57838 = G__57843;
chunk__57810_57839 = G__57844;
count__57811_57840 = G__57845;
i__57812_57841 = G__57846;
continue;
} else {
var temp__5735__auto___57847 = cljs.core.seq(seq__57809_57838);
if(temp__5735__auto___57847){
var seq__57809_57848__$1 = temp__5735__auto___57847;
if(cljs.core.chunked_seq_QMARK_(seq__57809_57848__$1)){
var c__4609__auto___57849 = cljs.core.chunk_first(seq__57809_57848__$1);
var G__57850 = cljs.core.chunk_rest(seq__57809_57848__$1);
var G__57851 = c__4609__auto___57849;
var G__57852 = cljs.core.count(c__4609__auto___57849);
var G__57853 = (0);
seq__57809_57838 = G__57850;
chunk__57810_57839 = G__57851;
count__57811_57840 = G__57852;
i__57812_57841 = G__57853;
continue;
} else {
var controller_57854 = cljs.core.first(seq__57809_57848__$1);
reitit.frontend.controllers.apply_controller(controller_57854,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57855 = cljs.core.next(seq__57809_57848__$1);
var G__57856 = null;
var G__57857 = (0);
var G__57858 = (0);
seq__57809_57838 = G__57855;
chunk__57810_57839 = G__57856;
count__57811_57840 = G__57857;
i__57812_57841 = G__57858;
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
