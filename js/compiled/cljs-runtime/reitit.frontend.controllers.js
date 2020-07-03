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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__63104,match){
var map__63105 = p__63104;
var map__63105__$1 = (((((!((map__63105 == null))))?(((((map__63105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63105):map__63105);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63105__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63105__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63105__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__63108(s__63109){
return (new cljs.core.LazySeq(null,(function (){
var s__63109__$1 = s__63109;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63109__$1);
if(temp__5735__auto__){
var s__63109__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63109__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63109__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63111 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63110 = (0);
while(true){
if((i__63110 < size__4581__auto__)){
var vec__63113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63110);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63113,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63113,(1),null);
cljs.core.chunk_append(b__63111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__63130 = (i__63110 + (1));
i__63110 = G__63130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63111),reitit$frontend$controllers$get_identity_$_iter__63108(cljs.core.chunk_rest(s__63109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63111),null);
}
} else {
var vec__63116 = cljs.core.first(s__63109__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63116,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63116,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__63108(cljs.core.rest(s__63109__$2)));
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
var G__63119 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63119) : f.call(null,G__63119));
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
var seq__63120_63132 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__63121_63133 = null;
var count__63122_63134 = (0);
var i__63123_63135 = (0);
while(true){
if((i__63123_63135 < count__63122_63134)){
var controller_63136 = chunk__63121_63133.cljs$core$IIndexed$_nth$arity$2(null,i__63123_63135);
reitit.frontend.controllers.apply_controller(controller_63136,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__63137 = seq__63120_63132;
var G__63138 = chunk__63121_63133;
var G__63139 = count__63122_63134;
var G__63140 = (i__63123_63135 + (1));
seq__63120_63132 = G__63137;
chunk__63121_63133 = G__63138;
count__63122_63134 = G__63139;
i__63123_63135 = G__63140;
continue;
} else {
var temp__5735__auto___63141 = cljs.core.seq(seq__63120_63132);
if(temp__5735__auto___63141){
var seq__63120_63142__$1 = temp__5735__auto___63141;
if(cljs.core.chunked_seq_QMARK_(seq__63120_63142__$1)){
var c__4609__auto___63143 = cljs.core.chunk_first(seq__63120_63142__$1);
var G__63144 = cljs.core.chunk_rest(seq__63120_63142__$1);
var G__63145 = c__4609__auto___63143;
var G__63146 = cljs.core.count(c__4609__auto___63143);
var G__63147 = (0);
seq__63120_63132 = G__63144;
chunk__63121_63133 = G__63145;
count__63122_63134 = G__63146;
i__63123_63135 = G__63147;
continue;
} else {
var controller_63148 = cljs.core.first(seq__63120_63142__$1);
reitit.frontend.controllers.apply_controller(controller_63148,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__63149 = cljs.core.next(seq__63120_63142__$1);
var G__63150 = null;
var G__63151 = (0);
var G__63152 = (0);
seq__63120_63132 = G__63149;
chunk__63121_63133 = G__63150;
count__63122_63134 = G__63151;
i__63123_63135 = G__63152;
continue;
}
} else {
}
}
break;
}

var seq__63124_63154 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__63125_63155 = null;
var count__63126_63156 = (0);
var i__63127_63157 = (0);
while(true){
if((i__63127_63157 < count__63126_63156)){
var controller_63158 = chunk__63125_63155.cljs$core$IIndexed$_nth$arity$2(null,i__63127_63157);
reitit.frontend.controllers.apply_controller(controller_63158,new cljs.core.Keyword(null,"start","start",-355208981));


var G__63159 = seq__63124_63154;
var G__63160 = chunk__63125_63155;
var G__63161 = count__63126_63156;
var G__63162 = (i__63127_63157 + (1));
seq__63124_63154 = G__63159;
chunk__63125_63155 = G__63160;
count__63126_63156 = G__63161;
i__63127_63157 = G__63162;
continue;
} else {
var temp__5735__auto___63163 = cljs.core.seq(seq__63124_63154);
if(temp__5735__auto___63163){
var seq__63124_63164__$1 = temp__5735__auto___63163;
if(cljs.core.chunked_seq_QMARK_(seq__63124_63164__$1)){
var c__4609__auto___63165 = cljs.core.chunk_first(seq__63124_63164__$1);
var G__63166 = cljs.core.chunk_rest(seq__63124_63164__$1);
var G__63167 = c__4609__auto___63165;
var G__63168 = cljs.core.count(c__4609__auto___63165);
var G__63169 = (0);
seq__63124_63154 = G__63166;
chunk__63125_63155 = G__63167;
count__63126_63156 = G__63168;
i__63127_63157 = G__63169;
continue;
} else {
var controller_63170 = cljs.core.first(seq__63124_63164__$1);
reitit.frontend.controllers.apply_controller(controller_63170,new cljs.core.Keyword(null,"start","start",-355208981));


var G__63171 = cljs.core.next(seq__63124_63164__$1);
var G__63172 = null;
var G__63173 = (0);
var G__63174 = (0);
seq__63124_63154 = G__63171;
chunk__63125_63155 = G__63172;
count__63126_63156 = G__63173;
i__63127_63157 = G__63174;
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
