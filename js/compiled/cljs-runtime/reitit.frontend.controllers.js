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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57865,match){
var map__57866 = p__57865;
var map__57866__$1 = (((((!((map__57866 == null))))?(((((map__57866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57866):map__57866);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57866__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57866__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57866__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57868(s__57869){
return (new cljs.core.LazySeq(null,(function (){
var s__57869__$1 = s__57869;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57869__$1);
if(temp__5735__auto__){
var s__57869__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57869__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57869__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57871 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57870 = (0);
while(true){
if((i__57870 < size__4581__auto__)){
var vec__57873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57870);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57873,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57873,(1),null);
cljs.core.chunk_append(b__57871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57890 = (i__57870 + (1));
i__57870 = G__57890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57871),reitit$frontend$controllers$get_identity_$_iter__57868(cljs.core.chunk_rest(s__57869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57871),null);
}
} else {
var vec__57876 = cljs.core.first(s__57869__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57876,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57876,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57868(cljs.core.rest(s__57869__$2)));
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
var G__57880 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57880) : f.call(null,G__57880));
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
var seq__57882_57894 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57883_57895 = null;
var count__57884_57896 = (0);
var i__57885_57897 = (0);
while(true){
if((i__57885_57897 < count__57884_57896)){
var controller_57898 = chunk__57883_57895.cljs$core$IIndexed$_nth$arity$2(null,i__57885_57897);
reitit.frontend.controllers.apply_controller(controller_57898,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57899 = seq__57882_57894;
var G__57900 = chunk__57883_57895;
var G__57901 = count__57884_57896;
var G__57902 = (i__57885_57897 + (1));
seq__57882_57894 = G__57899;
chunk__57883_57895 = G__57900;
count__57884_57896 = G__57901;
i__57885_57897 = G__57902;
continue;
} else {
var temp__5735__auto___57903 = cljs.core.seq(seq__57882_57894);
if(temp__5735__auto___57903){
var seq__57882_57904__$1 = temp__5735__auto___57903;
if(cljs.core.chunked_seq_QMARK_(seq__57882_57904__$1)){
var c__4609__auto___57905 = cljs.core.chunk_first(seq__57882_57904__$1);
var G__57906 = cljs.core.chunk_rest(seq__57882_57904__$1);
var G__57907 = c__4609__auto___57905;
var G__57908 = cljs.core.count(c__4609__auto___57905);
var G__57909 = (0);
seq__57882_57894 = G__57906;
chunk__57883_57895 = G__57907;
count__57884_57896 = G__57908;
i__57885_57897 = G__57909;
continue;
} else {
var controller_57910 = cljs.core.first(seq__57882_57904__$1);
reitit.frontend.controllers.apply_controller(controller_57910,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57911 = cljs.core.next(seq__57882_57904__$1);
var G__57912 = null;
var G__57913 = (0);
var G__57914 = (0);
seq__57882_57894 = G__57911;
chunk__57883_57895 = G__57912;
count__57884_57896 = G__57913;
i__57885_57897 = G__57914;
continue;
}
} else {
}
}
break;
}

var seq__57886_57915 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57887_57916 = null;
var count__57888_57917 = (0);
var i__57889_57918 = (0);
while(true){
if((i__57889_57918 < count__57888_57917)){
var controller_57919 = chunk__57887_57916.cljs$core$IIndexed$_nth$arity$2(null,i__57889_57918);
reitit.frontend.controllers.apply_controller(controller_57919,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57920 = seq__57886_57915;
var G__57921 = chunk__57887_57916;
var G__57922 = count__57888_57917;
var G__57923 = (i__57889_57918 + (1));
seq__57886_57915 = G__57920;
chunk__57887_57916 = G__57921;
count__57888_57917 = G__57922;
i__57889_57918 = G__57923;
continue;
} else {
var temp__5735__auto___57924 = cljs.core.seq(seq__57886_57915);
if(temp__5735__auto___57924){
var seq__57886_57925__$1 = temp__5735__auto___57924;
if(cljs.core.chunked_seq_QMARK_(seq__57886_57925__$1)){
var c__4609__auto___57926 = cljs.core.chunk_first(seq__57886_57925__$1);
var G__57927 = cljs.core.chunk_rest(seq__57886_57925__$1);
var G__57928 = c__4609__auto___57926;
var G__57929 = cljs.core.count(c__4609__auto___57926);
var G__57930 = (0);
seq__57886_57915 = G__57927;
chunk__57887_57916 = G__57928;
count__57888_57917 = G__57929;
i__57889_57918 = G__57930;
continue;
} else {
var controller_57931 = cljs.core.first(seq__57886_57925__$1);
reitit.frontend.controllers.apply_controller(controller_57931,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57932 = cljs.core.next(seq__57886_57925__$1);
var G__57933 = null;
var G__57934 = (0);
var G__57935 = (0);
seq__57886_57915 = G__57932;
chunk__57887_57916 = G__57933;
count__57888_57917 = G__57934;
i__57889_57918 = G__57935;
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
