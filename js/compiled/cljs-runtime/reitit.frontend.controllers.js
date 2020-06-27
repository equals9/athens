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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57888,match){
var map__57889 = p__57888;
var map__57889__$1 = (((((!((map__57889 == null))))?(((((map__57889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57889):map__57889);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57889__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57889__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57889__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57891(s__57892){
return (new cljs.core.LazySeq(null,(function (){
var s__57892__$1 = s__57892;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57892__$1);
if(temp__5735__auto__){
var s__57892__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57892__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57892__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57894 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57893 = (0);
while(true){
if((i__57893 < size__4581__auto__)){
var vec__57895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57893);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57895,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57895,(1),null);
cljs.core.chunk_append(b__57894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57913 = (i__57893 + (1));
i__57893 = G__57913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57894),reitit$frontend$controllers$get_identity_$_iter__57891(cljs.core.chunk_rest(s__57892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57894),null);
}
} else {
var vec__57898 = cljs.core.first(s__57892__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57891(cljs.core.rest(s__57892__$2)));
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
var G__57901 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57901) : f.call(null,G__57901));
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
var seq__57903_57914 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57904_57915 = null;
var count__57905_57916 = (0);
var i__57906_57917 = (0);
while(true){
if((i__57906_57917 < count__57905_57916)){
var controller_57918 = chunk__57904_57915.cljs$core$IIndexed$_nth$arity$2(null,i__57906_57917);
reitit.frontend.controllers.apply_controller(controller_57918,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57919 = seq__57903_57914;
var G__57920 = chunk__57904_57915;
var G__57921 = count__57905_57916;
var G__57922 = (i__57906_57917 + (1));
seq__57903_57914 = G__57919;
chunk__57904_57915 = G__57920;
count__57905_57916 = G__57921;
i__57906_57917 = G__57922;
continue;
} else {
var temp__5735__auto___57923 = cljs.core.seq(seq__57903_57914);
if(temp__5735__auto___57923){
var seq__57903_57924__$1 = temp__5735__auto___57923;
if(cljs.core.chunked_seq_QMARK_(seq__57903_57924__$1)){
var c__4609__auto___57925 = cljs.core.chunk_first(seq__57903_57924__$1);
var G__57926 = cljs.core.chunk_rest(seq__57903_57924__$1);
var G__57927 = c__4609__auto___57925;
var G__57928 = cljs.core.count(c__4609__auto___57925);
var G__57929 = (0);
seq__57903_57914 = G__57926;
chunk__57904_57915 = G__57927;
count__57905_57916 = G__57928;
i__57906_57917 = G__57929;
continue;
} else {
var controller_57930 = cljs.core.first(seq__57903_57924__$1);
reitit.frontend.controllers.apply_controller(controller_57930,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57931 = cljs.core.next(seq__57903_57924__$1);
var G__57932 = null;
var G__57933 = (0);
var G__57934 = (0);
seq__57903_57914 = G__57931;
chunk__57904_57915 = G__57932;
count__57905_57916 = G__57933;
i__57906_57917 = G__57934;
continue;
}
} else {
}
}
break;
}

var seq__57908_57936 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57909_57937 = null;
var count__57910_57938 = (0);
var i__57911_57939 = (0);
while(true){
if((i__57911_57939 < count__57910_57938)){
var controller_57940 = chunk__57909_57937.cljs$core$IIndexed$_nth$arity$2(null,i__57911_57939);
reitit.frontend.controllers.apply_controller(controller_57940,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57942 = seq__57908_57936;
var G__57943 = chunk__57909_57937;
var G__57944 = count__57910_57938;
var G__57945 = (i__57911_57939 + (1));
seq__57908_57936 = G__57942;
chunk__57909_57937 = G__57943;
count__57910_57938 = G__57944;
i__57911_57939 = G__57945;
continue;
} else {
var temp__5735__auto___57947 = cljs.core.seq(seq__57908_57936);
if(temp__5735__auto___57947){
var seq__57908_57948__$1 = temp__5735__auto___57947;
if(cljs.core.chunked_seq_QMARK_(seq__57908_57948__$1)){
var c__4609__auto___57949 = cljs.core.chunk_first(seq__57908_57948__$1);
var G__57950 = cljs.core.chunk_rest(seq__57908_57948__$1);
var G__57951 = c__4609__auto___57949;
var G__57952 = cljs.core.count(c__4609__auto___57949);
var G__57953 = (0);
seq__57908_57936 = G__57950;
chunk__57909_57937 = G__57951;
count__57910_57938 = G__57952;
i__57911_57939 = G__57953;
continue;
} else {
var controller_57954 = cljs.core.first(seq__57908_57948__$1);
reitit.frontend.controllers.apply_controller(controller_57954,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57955 = cljs.core.next(seq__57908_57948__$1);
var G__57956 = null;
var G__57957 = (0);
var G__57958 = (0);
seq__57908_57936 = G__57955;
chunk__57909_57937 = G__57956;
count__57910_57938 = G__57957;
i__57911_57939 = G__57958;
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
