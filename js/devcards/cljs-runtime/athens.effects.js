goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__61236_61328 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61237_61329 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61236_61328,G__61237_61329) : re_frame.core.reg_fx.call(null,G__61236_61328,G__61237_61329));
var G__61238_61330 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61239_61331 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61238_61330,G__61239_61331) : re_frame.core.reg_fx.call(null,G__61238_61330,G__61239_61331));
var G__61240_61332 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61241_61333 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61240_61332,G__61241_61333) : re_frame.core.reg_fx.call(null,G__61240_61332,G__61241_61333));
var G__61242_61334 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61243_61335 = (function (p__61244){
var map__61245 = p__61244;
var map__61245__$1 = (((((!((map__61245 == null))))?(((((map__61245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61245):map__61245);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61245__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61245__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61245__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61245__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61245__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61289){
var state_val_61290 = (state_61289[(1)]);
if((state_val_61290 === (7))){
var inst_61256 = (state_61289[(7)]);
var inst_61256__$1 = (state_61289[(2)]);
var inst_61258 = (inst_61256__$1 == null);
var inst_61259 = cljs.core.not(inst_61258);
var state_61289__$1 = (function (){var statearr_61291 = state_61289;
(statearr_61291[(7)] = inst_61256__$1);

return statearr_61291;
})();
if(inst_61259){
var statearr_61292_61336 = state_61289__$1;
(statearr_61292_61336[(1)] = (8));

} else {
var statearr_61293_61337 = state_61289__$1;
(statearr_61293_61337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (1))){
var state_61289__$1 = state_61289;
var G__61294_61338 = method;
var G__61294_61339__$1 = (((G__61294_61338 instanceof cljs.core.Keyword))?G__61294_61338.fqn:null);
switch (G__61294_61339__$1) {
case "post":
var statearr_61295_61341 = state_61289__$1;
(statearr_61295_61341[(1)] = (3));


break;
case "get":
var statearr_61296_61342 = state_61289__$1;
(statearr_61296_61342[(1)] = (4));


break;
case "put":
var statearr_61297_61343 = state_61289__$1;
(statearr_61297_61343[(1)] = (5));


break;
case "delete":
var statearr_61298_61344 = state_61289__$1;
(statearr_61298_61344[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61294_61339__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (4))){
var state_61289__$1 = state_61289;
var statearr_61299_61345 = state_61289__$1;
(statearr_61299_61345[(2)] = cljs_http.client.get);

(statearr_61299_61345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (15))){
var inst_61256 = (state_61289[(7)]);
var state_61289__$1 = state_61289;
var statearr_61300_61346 = state_61289__$1;
(statearr_61300_61346[(2)] = inst_61256);

(statearr_61300_61346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (13))){
var inst_61269 = (state_61289[(2)]);
var state_61289__$1 = state_61289;
var statearr_61301_61347 = state_61289__$1;
(statearr_61301_61347[(2)] = inst_61269);

(statearr_61301_61347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (6))){
var state_61289__$1 = state_61289;
var statearr_61302_61348 = state_61289__$1;
(statearr_61302_61348[(2)] = cljs_http.client.delete$);

(statearr_61302_61348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (17))){
var inst_61279 = (state_61289[(8)]);
var inst_61281 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61279);
var inst_61282 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61281) : re_frame.core.dispatch.call(null,inst_61281));
var state_61289__$1 = state_61289;
var statearr_61303_61349 = state_61289__$1;
(statearr_61303_61349[(2)] = inst_61282);

(statearr_61303_61349[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (3))){
var state_61289__$1 = state_61289;
var statearr_61304_61350 = state_61289__$1;
(statearr_61304_61350[(2)] = cljs_http.client.post);

(statearr_61304_61350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (12))){
var state_61289__$1 = state_61289;
var statearr_61305_61351 = state_61289__$1;
(statearr_61305_61351[(2)] = false);

(statearr_61305_61351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (2))){
var inst_61253 = (state_61289[(2)]);
var inst_61254 = (inst_61253.cljs$core$IFn$_invoke$arity$2 ? inst_61253.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61253.call(null,url,opts));
var state_61289__$1 = state_61289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61289__$1,(7),inst_61254);
} else {
if((state_val_61290 === (19))){
var inst_61287 = (state_61289[(2)]);
var state_61289__$1 = state_61289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61289__$1,inst_61287);
} else {
if((state_val_61290 === (11))){
var state_61289__$1 = state_61289;
var statearr_61306_61352 = state_61289__$1;
(statearr_61306_61352[(2)] = true);

(statearr_61306_61352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (9))){
var state_61289__$1 = state_61289;
var statearr_61307_61353 = state_61289__$1;
(statearr_61307_61353[(2)] = false);

(statearr_61307_61353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (5))){
var state_61289__$1 = state_61289;
var statearr_61308_61354 = state_61289__$1;
(statearr_61308_61354[(2)] = cljs_http.client.put);

(statearr_61308_61354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (14))){
var inst_61256 = (state_61289[(7)]);
var inst_61274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61256);
var state_61289__$1 = state_61289;
var statearr_61309_61355 = state_61289__$1;
(statearr_61309_61355[(2)] = inst_61274);

(statearr_61309_61355[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (16))){
var inst_61277 = (state_61289[(9)]);
var inst_61277__$1 = (state_61289[(2)]);
var inst_61278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61277__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61277__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61289__$1 = (function (){var statearr_61310 = state_61289;
(statearr_61310[(8)] = inst_61279);

(statearr_61310[(9)] = inst_61277__$1);

return statearr_61310;
})();
if(cljs.core.truth_(inst_61278)){
var statearr_61311_61356 = state_61289__$1;
(statearr_61311_61356[(1)] = (17));

} else {
var statearr_61312_61357 = state_61289__$1;
(statearr_61312_61357[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (10))){
var inst_61272 = (state_61289[(2)]);
var state_61289__$1 = state_61289;
if(cljs.core.truth_(inst_61272)){
var statearr_61313_61358 = state_61289__$1;
(statearr_61313_61358[(1)] = (14));

} else {
var statearr_61314_61359 = state_61289__$1;
(statearr_61314_61359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (18))){
var inst_61277 = (state_61289[(9)]);
var inst_61284 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61277);
var inst_61285 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61284) : re_frame.core.dispatch.call(null,inst_61284));
var state_61289__$1 = state_61289;
var statearr_61315_61360 = state_61289__$1;
(statearr_61315_61360[(2)] = inst_61285);

(statearr_61315_61360[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61290 === (8))){
var inst_61256 = (state_61289[(7)]);
var inst_61261 = inst_61256.cljs$lang$protocol_mask$partition0$;
var inst_61262 = (inst_61261 & (64));
var inst_61263 = inst_61256.cljs$core$ISeq$;
var inst_61264 = (cljs.core.PROTOCOL_SENTINEL === inst_61263);
var inst_61265 = ((inst_61262) || (inst_61264));
var state_61289__$1 = state_61289;
if(cljs.core.truth_(inst_61265)){
var statearr_61316_61361 = state_61289__$1;
(statearr_61316_61361[(1)] = (11));

} else {
var statearr_61317_61362 = state_61289__$1;
(statearr_61317_61362[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__36918__auto__ = null;
var athens$effects$state_machine__36918__auto____0 = (function (){
var statearr_61318 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61318[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61318[(1)] = (1));

return statearr_61318;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61289){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61289);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61319){if((e61319 instanceof Object)){
var ex__36921__auto__ = e61319;
var statearr_61320_61363 = state_61289;
(statearr_61320_61363[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61319;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61364 = state_61289;
state_61289 = G__61364;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61289){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61321 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61321[(6)] = c__36985__auto__);

return statearr_61321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61242_61334,G__61243_61335) : re_frame.core.reg_fx.call(null,G__61242_61334,G__61243_61335));
var G__61322_61365 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61323_61366 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61324){
var map__61325 = p__61324;
var map__61325__$1 = (((((!((map__61325 == null))))?(((((map__61325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61325):map__61325);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61325__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61325__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61325__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61325__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61327 = action;
var G__61327__$1 = (((G__61327 instanceof cljs.core.Keyword))?G__61327.fqn:null);
switch (G__61327__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61327__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61322_61365,G__61323_61366) : re_frame.core.reg_fx.call(null,G__61322_61365,G__61323_61366));

//# sourceMappingURL=athens.effects.js.map
