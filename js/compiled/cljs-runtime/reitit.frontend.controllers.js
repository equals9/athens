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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57887,match){
var map__57888 = p__57887;
var map__57888__$1 = (((((!((map__57888 == null))))?(((((map__57888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57888):map__57888);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57888__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57888__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57888__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57890(s__57891){
return (new cljs.core.LazySeq(null,(function (){
var s__57891__$1 = s__57891;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57891__$1);
if(temp__5735__auto__){
var s__57891__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57891__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57891__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57893 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57892 = (0);
while(true){
if((i__57892 < size__4581__auto__)){
var vec__57894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57892);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57894,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57894,(1),null);
cljs.core.chunk_append(b__57893,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57912 = (i__57892 + (1));
i__57892 = G__57912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57893),reitit$frontend$controllers$get_identity_$_iter__57890(cljs.core.chunk_rest(s__57891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57893),null);
}
} else {
var vec__57897 = cljs.core.first(s__57891__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57897,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57897,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57890(cljs.core.rest(s__57891__$2)));
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
var G__57900 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57900) : f.call(null,G__57900));
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
var seq__57901_57913 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57902_57914 = null;
var count__57903_57915 = (0);
var i__57904_57916 = (0);
while(true){
if((i__57904_57916 < count__57903_57915)){
var controller_57917 = chunk__57902_57914.cljs$core$IIndexed$_nth$arity$2(null,i__57904_57916);
reitit.frontend.controllers.apply_controller(controller_57917,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57918 = seq__57901_57913;
var G__57919 = chunk__57902_57914;
var G__57920 = count__57903_57915;
var G__57921 = (i__57904_57916 + (1));
seq__57901_57913 = G__57918;
chunk__57902_57914 = G__57919;
count__57903_57915 = G__57920;
i__57904_57916 = G__57921;
continue;
} else {
var temp__5735__auto___57922 = cljs.core.seq(seq__57901_57913);
if(temp__5735__auto___57922){
var seq__57901_57923__$1 = temp__5735__auto___57922;
if(cljs.core.chunked_seq_QMARK_(seq__57901_57923__$1)){
var c__4609__auto___57924 = cljs.core.chunk_first(seq__57901_57923__$1);
var G__57925 = cljs.core.chunk_rest(seq__57901_57923__$1);
var G__57926 = c__4609__auto___57924;
var G__57927 = cljs.core.count(c__4609__auto___57924);
var G__57928 = (0);
seq__57901_57913 = G__57925;
chunk__57902_57914 = G__57926;
count__57903_57915 = G__57927;
i__57904_57916 = G__57928;
continue;
} else {
var controller_57929 = cljs.core.first(seq__57901_57923__$1);
reitit.frontend.controllers.apply_controller(controller_57929,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57930 = cljs.core.next(seq__57901_57923__$1);
var G__57931 = null;
var G__57932 = (0);
var G__57933 = (0);
seq__57901_57913 = G__57930;
chunk__57902_57914 = G__57931;
count__57903_57915 = G__57932;
i__57904_57916 = G__57933;
continue;
}
} else {
}
}
break;
}

var seq__57906_57934 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57907_57935 = null;
var count__57908_57936 = (0);
var i__57909_57937 = (0);
while(true){
if((i__57909_57937 < count__57908_57936)){
var controller_57938 = chunk__57907_57935.cljs$core$IIndexed$_nth$arity$2(null,i__57909_57937);
reitit.frontend.controllers.apply_controller(controller_57938,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57939 = seq__57906_57934;
var G__57940 = chunk__57907_57935;
var G__57941 = count__57908_57936;
var G__57942 = (i__57909_57937 + (1));
seq__57906_57934 = G__57939;
chunk__57907_57935 = G__57940;
count__57908_57936 = G__57941;
i__57909_57937 = G__57942;
continue;
} else {
var temp__5735__auto___57943 = cljs.core.seq(seq__57906_57934);
if(temp__5735__auto___57943){
var seq__57906_57944__$1 = temp__5735__auto___57943;
if(cljs.core.chunked_seq_QMARK_(seq__57906_57944__$1)){
var c__4609__auto___57945 = cljs.core.chunk_first(seq__57906_57944__$1);
var G__57946 = cljs.core.chunk_rest(seq__57906_57944__$1);
var G__57947 = c__4609__auto___57945;
var G__57948 = cljs.core.count(c__4609__auto___57945);
var G__57949 = (0);
seq__57906_57934 = G__57946;
chunk__57907_57935 = G__57947;
count__57908_57936 = G__57948;
i__57909_57937 = G__57949;
continue;
} else {
var controller_57950 = cljs.core.first(seq__57906_57944__$1);
reitit.frontend.controllers.apply_controller(controller_57950,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57951 = cljs.core.next(seq__57906_57944__$1);
var G__57952 = null;
var G__57953 = (0);
var G__57954 = (0);
seq__57906_57934 = G__57951;
chunk__57907_57935 = G__57952;
count__57908_57936 = G__57953;
i__57909_57937 = G__57954;
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
