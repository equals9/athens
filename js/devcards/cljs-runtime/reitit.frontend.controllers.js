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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50477,match){
var map__50478 = p__50477;
var map__50478__$1 = (((((!((map__50478 == null))))?(((((map__50478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50478):map__50478);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50478__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50478__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50478__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50480(s__50481){
return (new cljs.core.LazySeq(null,(function (){
var s__50481__$1 = s__50481;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50481__$1);
if(temp__5735__auto__){
var s__50481__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50481__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50481__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50483 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50482 = (0);
while(true){
if((i__50482 < size__4581__auto__)){
var vec__50484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50482);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(1),null);
cljs.core.chunk_append(b__50483,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50502 = (i__50482 + (1));
i__50482 = G__50502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50483),reitit$frontend$controllers$get_identity_$_iter__50480(cljs.core.chunk_rest(s__50481__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50483),null);
}
} else {
var vec__50487 = cljs.core.first(s__50481__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50487,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50487,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50480(cljs.core.rest(s__50481__$2)));
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
var G__50490 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50490) : f.call(null,G__50490));
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
var seq__50491_50503 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50492_50504 = null;
var count__50493_50505 = (0);
var i__50494_50506 = (0);
while(true){
if((i__50494_50506 < count__50493_50505)){
var controller_50507 = chunk__50492_50504.cljs$core$IIndexed$_nth$arity$2(null,i__50494_50506);
reitit.frontend.controllers.apply_controller(controller_50507,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50508 = seq__50491_50503;
var G__50509 = chunk__50492_50504;
var G__50510 = count__50493_50505;
var G__50511 = (i__50494_50506 + (1));
seq__50491_50503 = G__50508;
chunk__50492_50504 = G__50509;
count__50493_50505 = G__50510;
i__50494_50506 = G__50511;
continue;
} else {
var temp__5735__auto___50512 = cljs.core.seq(seq__50491_50503);
if(temp__5735__auto___50512){
var seq__50491_50513__$1 = temp__5735__auto___50512;
if(cljs.core.chunked_seq_QMARK_(seq__50491_50513__$1)){
var c__4609__auto___50514 = cljs.core.chunk_first(seq__50491_50513__$1);
var G__50515 = cljs.core.chunk_rest(seq__50491_50513__$1);
var G__50516 = c__4609__auto___50514;
var G__50517 = cljs.core.count(c__4609__auto___50514);
var G__50518 = (0);
seq__50491_50503 = G__50515;
chunk__50492_50504 = G__50516;
count__50493_50505 = G__50517;
i__50494_50506 = G__50518;
continue;
} else {
var controller_50519 = cljs.core.first(seq__50491_50513__$1);
reitit.frontend.controllers.apply_controller(controller_50519,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50520 = cljs.core.next(seq__50491_50513__$1);
var G__50521 = null;
var G__50522 = (0);
var G__50523 = (0);
seq__50491_50503 = G__50520;
chunk__50492_50504 = G__50521;
count__50493_50505 = G__50522;
i__50494_50506 = G__50523;
continue;
}
} else {
}
}
break;
}

var seq__50497_50525 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50498_50526 = null;
var count__50499_50527 = (0);
var i__50500_50528 = (0);
while(true){
if((i__50500_50528 < count__50499_50527)){
var controller_50529 = chunk__50498_50526.cljs$core$IIndexed$_nth$arity$2(null,i__50500_50528);
reitit.frontend.controllers.apply_controller(controller_50529,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50531 = seq__50497_50525;
var G__50532 = chunk__50498_50526;
var G__50533 = count__50499_50527;
var G__50534 = (i__50500_50528 + (1));
seq__50497_50525 = G__50531;
chunk__50498_50526 = G__50532;
count__50499_50527 = G__50533;
i__50500_50528 = G__50534;
continue;
} else {
var temp__5735__auto___50536 = cljs.core.seq(seq__50497_50525);
if(temp__5735__auto___50536){
var seq__50497_50537__$1 = temp__5735__auto___50536;
if(cljs.core.chunked_seq_QMARK_(seq__50497_50537__$1)){
var c__4609__auto___50538 = cljs.core.chunk_first(seq__50497_50537__$1);
var G__50539 = cljs.core.chunk_rest(seq__50497_50537__$1);
var G__50540 = c__4609__auto___50538;
var G__50541 = cljs.core.count(c__4609__auto___50538);
var G__50542 = (0);
seq__50497_50525 = G__50539;
chunk__50498_50526 = G__50540;
count__50499_50527 = G__50541;
i__50500_50528 = G__50542;
continue;
} else {
var controller_50543 = cljs.core.first(seq__50497_50537__$1);
reitit.frontend.controllers.apply_controller(controller_50543,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50544 = cljs.core.next(seq__50497_50537__$1);
var G__50545 = null;
var G__50546 = (0);
var G__50547 = (0);
seq__50497_50525 = G__50544;
chunk__50498_50526 = G__50545;
count__50499_50527 = G__50546;
i__50500_50528 = G__50547;
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
