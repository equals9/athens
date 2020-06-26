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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57863,match){
var map__57864 = p__57863;
var map__57864__$1 = (((((!((map__57864 == null))))?(((((map__57864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57864):map__57864);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57867(s__57868){
return (new cljs.core.LazySeq(null,(function (){
var s__57868__$1 = s__57868;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57868__$1);
if(temp__5735__auto__){
var s__57868__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57868__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57868__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57870 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57869 = (0);
while(true){
if((i__57869 < size__4581__auto__)){
var vec__57871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57869);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57871,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57871,(1),null);
cljs.core.chunk_append(b__57870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57889 = (i__57869 + (1));
i__57869 = G__57889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57870),reitit$frontend$controllers$get_identity_$_iter__57867(cljs.core.chunk_rest(s__57868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57870),null);
}
} else {
var vec__57874 = cljs.core.first(s__57868__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57874,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57874,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57867(cljs.core.rest(s__57868__$2)));
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
var G__57877 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57877) : f.call(null,G__57877));
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
var seq__57878_57891 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57879_57892 = null;
var count__57880_57893 = (0);
var i__57881_57894 = (0);
while(true){
if((i__57881_57894 < count__57880_57893)){
var controller_57895 = chunk__57879_57892.cljs$core$IIndexed$_nth$arity$2(null,i__57881_57894);
reitit.frontend.controllers.apply_controller(controller_57895,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57896 = seq__57878_57891;
var G__57897 = chunk__57879_57892;
var G__57898 = count__57880_57893;
var G__57899 = (i__57881_57894 + (1));
seq__57878_57891 = G__57896;
chunk__57879_57892 = G__57897;
count__57880_57893 = G__57898;
i__57881_57894 = G__57899;
continue;
} else {
var temp__5735__auto___57900 = cljs.core.seq(seq__57878_57891);
if(temp__5735__auto___57900){
var seq__57878_57901__$1 = temp__5735__auto___57900;
if(cljs.core.chunked_seq_QMARK_(seq__57878_57901__$1)){
var c__4609__auto___57902 = cljs.core.chunk_first(seq__57878_57901__$1);
var G__57903 = cljs.core.chunk_rest(seq__57878_57901__$1);
var G__57904 = c__4609__auto___57902;
var G__57905 = cljs.core.count(c__4609__auto___57902);
var G__57906 = (0);
seq__57878_57891 = G__57903;
chunk__57879_57892 = G__57904;
count__57880_57893 = G__57905;
i__57881_57894 = G__57906;
continue;
} else {
var controller_57907 = cljs.core.first(seq__57878_57901__$1);
reitit.frontend.controllers.apply_controller(controller_57907,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57908 = cljs.core.next(seq__57878_57901__$1);
var G__57909 = null;
var G__57910 = (0);
var G__57911 = (0);
seq__57878_57891 = G__57908;
chunk__57879_57892 = G__57909;
count__57880_57893 = G__57910;
i__57881_57894 = G__57911;
continue;
}
} else {
}
}
break;
}

var seq__57882_57912 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57883_57913 = null;
var count__57884_57914 = (0);
var i__57885_57915 = (0);
while(true){
if((i__57885_57915 < count__57884_57914)){
var controller_57916 = chunk__57883_57913.cljs$core$IIndexed$_nth$arity$2(null,i__57885_57915);
reitit.frontend.controllers.apply_controller(controller_57916,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57917 = seq__57882_57912;
var G__57918 = chunk__57883_57913;
var G__57919 = count__57884_57914;
var G__57920 = (i__57885_57915 + (1));
seq__57882_57912 = G__57917;
chunk__57883_57913 = G__57918;
count__57884_57914 = G__57919;
i__57885_57915 = G__57920;
continue;
} else {
var temp__5735__auto___57921 = cljs.core.seq(seq__57882_57912);
if(temp__5735__auto___57921){
var seq__57882_57922__$1 = temp__5735__auto___57921;
if(cljs.core.chunked_seq_QMARK_(seq__57882_57922__$1)){
var c__4609__auto___57923 = cljs.core.chunk_first(seq__57882_57922__$1);
var G__57924 = cljs.core.chunk_rest(seq__57882_57922__$1);
var G__57925 = c__4609__auto___57923;
var G__57926 = cljs.core.count(c__4609__auto___57923);
var G__57927 = (0);
seq__57882_57912 = G__57924;
chunk__57883_57913 = G__57925;
count__57884_57914 = G__57926;
i__57885_57915 = G__57927;
continue;
} else {
var controller_57928 = cljs.core.first(seq__57882_57922__$1);
reitit.frontend.controllers.apply_controller(controller_57928,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57929 = cljs.core.next(seq__57882_57922__$1);
var G__57930 = null;
var G__57931 = (0);
var G__57932 = (0);
seq__57882_57912 = G__57929;
chunk__57883_57913 = G__57930;
count__57884_57914 = G__57931;
i__57885_57915 = G__57932;
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
