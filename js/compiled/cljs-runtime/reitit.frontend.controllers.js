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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57890,match){
var map__57891 = p__57890;
var map__57891__$1 = (((((!((map__57891 == null))))?(((((map__57891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57891):map__57891);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57893(s__57894){
return (new cljs.core.LazySeq(null,(function (){
var s__57894__$1 = s__57894;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57894__$1);
if(temp__5735__auto__){
var s__57894__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57894__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57894__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57896 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57895 = (0);
while(true){
if((i__57895 < size__4581__auto__)){
var vec__57898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57895);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(1),null);
cljs.core.chunk_append(b__57896,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57916 = (i__57895 + (1));
i__57895 = G__57916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57896),reitit$frontend$controllers$get_identity_$_iter__57893(cljs.core.chunk_rest(s__57894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57896),null);
}
} else {
var vec__57902 = cljs.core.first(s__57894__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57902,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57902,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57893(cljs.core.rest(s__57894__$2)));
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
var G__57906 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57906) : f.call(null,G__57906));
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
var seq__57907_57919 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57908_57920 = null;
var count__57909_57921 = (0);
var i__57910_57922 = (0);
while(true){
if((i__57910_57922 < count__57909_57921)){
var controller_57923 = chunk__57908_57920.cljs$core$IIndexed$_nth$arity$2(null,i__57910_57922);
reitit.frontend.controllers.apply_controller(controller_57923,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57924 = seq__57907_57919;
var G__57925 = chunk__57908_57920;
var G__57926 = count__57909_57921;
var G__57927 = (i__57910_57922 + (1));
seq__57907_57919 = G__57924;
chunk__57908_57920 = G__57925;
count__57909_57921 = G__57926;
i__57910_57922 = G__57927;
continue;
} else {
var temp__5735__auto___57928 = cljs.core.seq(seq__57907_57919);
if(temp__5735__auto___57928){
var seq__57907_57929__$1 = temp__5735__auto___57928;
if(cljs.core.chunked_seq_QMARK_(seq__57907_57929__$1)){
var c__4609__auto___57930 = cljs.core.chunk_first(seq__57907_57929__$1);
var G__57931 = cljs.core.chunk_rest(seq__57907_57929__$1);
var G__57932 = c__4609__auto___57930;
var G__57933 = cljs.core.count(c__4609__auto___57930);
var G__57934 = (0);
seq__57907_57919 = G__57931;
chunk__57908_57920 = G__57932;
count__57909_57921 = G__57933;
i__57910_57922 = G__57934;
continue;
} else {
var controller_57935 = cljs.core.first(seq__57907_57929__$1);
reitit.frontend.controllers.apply_controller(controller_57935,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57936 = cljs.core.next(seq__57907_57929__$1);
var G__57937 = null;
var G__57938 = (0);
var G__57939 = (0);
seq__57907_57919 = G__57936;
chunk__57908_57920 = G__57937;
count__57909_57921 = G__57938;
i__57910_57922 = G__57939;
continue;
}
} else {
}
}
break;
}

var seq__57911_57940 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57912_57941 = null;
var count__57913_57942 = (0);
var i__57914_57943 = (0);
while(true){
if((i__57914_57943 < count__57913_57942)){
var controller_57944 = chunk__57912_57941.cljs$core$IIndexed$_nth$arity$2(null,i__57914_57943);
reitit.frontend.controllers.apply_controller(controller_57944,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57945 = seq__57911_57940;
var G__57946 = chunk__57912_57941;
var G__57947 = count__57913_57942;
var G__57948 = (i__57914_57943 + (1));
seq__57911_57940 = G__57945;
chunk__57912_57941 = G__57946;
count__57913_57942 = G__57947;
i__57914_57943 = G__57948;
continue;
} else {
var temp__5735__auto___57949 = cljs.core.seq(seq__57911_57940);
if(temp__5735__auto___57949){
var seq__57911_57951__$1 = temp__5735__auto___57949;
if(cljs.core.chunked_seq_QMARK_(seq__57911_57951__$1)){
var c__4609__auto___57952 = cljs.core.chunk_first(seq__57911_57951__$1);
var G__57953 = cljs.core.chunk_rest(seq__57911_57951__$1);
var G__57954 = c__4609__auto___57952;
var G__57955 = cljs.core.count(c__4609__auto___57952);
var G__57956 = (0);
seq__57911_57940 = G__57953;
chunk__57912_57941 = G__57954;
count__57913_57942 = G__57955;
i__57914_57943 = G__57956;
continue;
} else {
var controller_57957 = cljs.core.first(seq__57911_57951__$1);
reitit.frontend.controllers.apply_controller(controller_57957,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57958 = cljs.core.next(seq__57911_57951__$1);
var G__57959 = null;
var G__57960 = (0);
var G__57961 = (0);
seq__57911_57940 = G__57958;
chunk__57912_57941 = G__57959;
count__57913_57942 = G__57960;
i__57914_57943 = G__57961;
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
