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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57844,match){
var map__57845 = p__57844;
var map__57845__$1 = (((((!((map__57845 == null))))?(((((map__57845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57845):map__57845);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57845__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57845__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57845__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57848(s__57849){
return (new cljs.core.LazySeq(null,(function (){
var s__57849__$1 = s__57849;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57849__$1);
if(temp__5735__auto__){
var s__57849__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57849__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57849__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57851 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57850 = (0);
while(true){
if((i__57850 < size__4581__auto__)){
var vec__57852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57850);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57852,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57852,(1),null);
cljs.core.chunk_append(b__57851,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57870 = (i__57850 + (1));
i__57850 = G__57870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57851),reitit$frontend$controllers$get_identity_$_iter__57848(cljs.core.chunk_rest(s__57849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57851),null);
}
} else {
var vec__57855 = cljs.core.first(s__57849__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57848(cljs.core.rest(s__57849__$2)));
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
var G__57858 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57858) : f.call(null,G__57858));
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
var seq__57859_57872 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57860_57873 = null;
var count__57861_57874 = (0);
var i__57862_57875 = (0);
while(true){
if((i__57862_57875 < count__57861_57874)){
var controller_57876 = chunk__57860_57873.cljs$core$IIndexed$_nth$arity$2(null,i__57862_57875);
reitit.frontend.controllers.apply_controller(controller_57876,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57877 = seq__57859_57872;
var G__57878 = chunk__57860_57873;
var G__57879 = count__57861_57874;
var G__57880 = (i__57862_57875 + (1));
seq__57859_57872 = G__57877;
chunk__57860_57873 = G__57878;
count__57861_57874 = G__57879;
i__57862_57875 = G__57880;
continue;
} else {
var temp__5735__auto___57881 = cljs.core.seq(seq__57859_57872);
if(temp__5735__auto___57881){
var seq__57859_57882__$1 = temp__5735__auto___57881;
if(cljs.core.chunked_seq_QMARK_(seq__57859_57882__$1)){
var c__4609__auto___57883 = cljs.core.chunk_first(seq__57859_57882__$1);
var G__57884 = cljs.core.chunk_rest(seq__57859_57882__$1);
var G__57885 = c__4609__auto___57883;
var G__57886 = cljs.core.count(c__4609__auto___57883);
var G__57887 = (0);
seq__57859_57872 = G__57884;
chunk__57860_57873 = G__57885;
count__57861_57874 = G__57886;
i__57862_57875 = G__57887;
continue;
} else {
var controller_57888 = cljs.core.first(seq__57859_57882__$1);
reitit.frontend.controllers.apply_controller(controller_57888,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57889 = cljs.core.next(seq__57859_57882__$1);
var G__57890 = null;
var G__57891 = (0);
var G__57892 = (0);
seq__57859_57872 = G__57889;
chunk__57860_57873 = G__57890;
count__57861_57874 = G__57891;
i__57862_57875 = G__57892;
continue;
}
} else {
}
}
break;
}

var seq__57863_57893 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57864_57894 = null;
var count__57865_57895 = (0);
var i__57866_57896 = (0);
while(true){
if((i__57866_57896 < count__57865_57895)){
var controller_57897 = chunk__57864_57894.cljs$core$IIndexed$_nth$arity$2(null,i__57866_57896);
reitit.frontend.controllers.apply_controller(controller_57897,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57898 = seq__57863_57893;
var G__57899 = chunk__57864_57894;
var G__57900 = count__57865_57895;
var G__57901 = (i__57866_57896 + (1));
seq__57863_57893 = G__57898;
chunk__57864_57894 = G__57899;
count__57865_57895 = G__57900;
i__57866_57896 = G__57901;
continue;
} else {
var temp__5735__auto___57902 = cljs.core.seq(seq__57863_57893);
if(temp__5735__auto___57902){
var seq__57863_57903__$1 = temp__5735__auto___57902;
if(cljs.core.chunked_seq_QMARK_(seq__57863_57903__$1)){
var c__4609__auto___57904 = cljs.core.chunk_first(seq__57863_57903__$1);
var G__57905 = cljs.core.chunk_rest(seq__57863_57903__$1);
var G__57906 = c__4609__auto___57904;
var G__57907 = cljs.core.count(c__4609__auto___57904);
var G__57908 = (0);
seq__57863_57893 = G__57905;
chunk__57864_57894 = G__57906;
count__57865_57895 = G__57907;
i__57866_57896 = G__57908;
continue;
} else {
var controller_57909 = cljs.core.first(seq__57863_57903__$1);
reitit.frontend.controllers.apply_controller(controller_57909,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57910 = cljs.core.next(seq__57863_57903__$1);
var G__57911 = null;
var G__57912 = (0);
var G__57913 = (0);
seq__57863_57893 = G__57910;
chunk__57864_57894 = G__57911;
count__57865_57895 = G__57912;
i__57866_57896 = G__57913;
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
