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
var G__60373_60465 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60374_60466 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60373_60465,G__60374_60466) : re_frame.core.reg_fx.call(null,G__60373_60465,G__60374_60466));
var G__60375_60467 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60376_60468 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60375_60467,G__60376_60468) : re_frame.core.reg_fx.call(null,G__60375_60467,G__60376_60468));
var G__60377_60469 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60378_60470 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60377_60469,G__60378_60470) : re_frame.core.reg_fx.call(null,G__60377_60469,G__60378_60470));
var G__60379_60471 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60380_60472 = (function (p__60381){
var map__60382 = p__60381;
var map__60382__$1 = (((((!((map__60382 == null))))?(((((map__60382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60382):map__60382);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60382__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60382__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60382__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60382__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60382__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60426){
var state_val_60427 = (state_60426[(1)]);
if((state_val_60427 === (7))){
var inst_60393 = (state_60426[(7)]);
var inst_60393__$1 = (state_60426[(2)]);
var inst_60395 = (inst_60393__$1 == null);
var inst_60396 = cljs.core.not(inst_60395);
var state_60426__$1 = (function (){var statearr_60428 = state_60426;
(statearr_60428[(7)] = inst_60393__$1);

return statearr_60428;
})();
if(inst_60396){
var statearr_60429_60473 = state_60426__$1;
(statearr_60429_60473[(1)] = (8));

} else {
var statearr_60430_60474 = state_60426__$1;
(statearr_60430_60474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (1))){
var state_60426__$1 = state_60426;
var G__60431_60475 = method;
var G__60431_60476__$1 = (((G__60431_60475 instanceof cljs.core.Keyword))?G__60431_60475.fqn:null);
switch (G__60431_60476__$1) {
case "post":
var statearr_60432_60478 = state_60426__$1;
(statearr_60432_60478[(1)] = (3));


break;
case "get":
var statearr_60433_60479 = state_60426__$1;
(statearr_60433_60479[(1)] = (4));


break;
case "put":
var statearr_60434_60480 = state_60426__$1;
(statearr_60434_60480[(1)] = (5));


break;
case "delete":
var statearr_60435_60481 = state_60426__$1;
(statearr_60435_60481[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60431_60476__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (4))){
var state_60426__$1 = state_60426;
var statearr_60436_60482 = state_60426__$1;
(statearr_60436_60482[(2)] = cljs_http.client.get);

(statearr_60436_60482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (15))){
var inst_60393 = (state_60426[(7)]);
var state_60426__$1 = state_60426;
var statearr_60437_60483 = state_60426__$1;
(statearr_60437_60483[(2)] = inst_60393);

(statearr_60437_60483[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (13))){
var inst_60406 = (state_60426[(2)]);
var state_60426__$1 = state_60426;
var statearr_60438_60484 = state_60426__$1;
(statearr_60438_60484[(2)] = inst_60406);

(statearr_60438_60484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (6))){
var state_60426__$1 = state_60426;
var statearr_60439_60485 = state_60426__$1;
(statearr_60439_60485[(2)] = cljs_http.client.delete$);

(statearr_60439_60485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (17))){
var inst_60416 = (state_60426[(8)]);
var inst_60418 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60416);
var inst_60419 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60418) : re_frame.core.dispatch.call(null,inst_60418));
var state_60426__$1 = state_60426;
var statearr_60440_60486 = state_60426__$1;
(statearr_60440_60486[(2)] = inst_60419);

(statearr_60440_60486[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (3))){
var state_60426__$1 = state_60426;
var statearr_60441_60487 = state_60426__$1;
(statearr_60441_60487[(2)] = cljs_http.client.post);

(statearr_60441_60487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (12))){
var state_60426__$1 = state_60426;
var statearr_60442_60488 = state_60426__$1;
(statearr_60442_60488[(2)] = false);

(statearr_60442_60488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (2))){
var inst_60390 = (state_60426[(2)]);
var inst_60391 = (inst_60390.cljs$core$IFn$_invoke$arity$2 ? inst_60390.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60390.call(null,url,opts));
var state_60426__$1 = state_60426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60426__$1,(7),inst_60391);
} else {
if((state_val_60427 === (19))){
var inst_60424 = (state_60426[(2)]);
var state_60426__$1 = state_60426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60426__$1,inst_60424);
} else {
if((state_val_60427 === (11))){
var state_60426__$1 = state_60426;
var statearr_60443_60489 = state_60426__$1;
(statearr_60443_60489[(2)] = true);

(statearr_60443_60489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (9))){
var state_60426__$1 = state_60426;
var statearr_60444_60490 = state_60426__$1;
(statearr_60444_60490[(2)] = false);

(statearr_60444_60490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (5))){
var state_60426__$1 = state_60426;
var statearr_60445_60491 = state_60426__$1;
(statearr_60445_60491[(2)] = cljs_http.client.put);

(statearr_60445_60491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (14))){
var inst_60393 = (state_60426[(7)]);
var inst_60411 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60393);
var state_60426__$1 = state_60426;
var statearr_60446_60492 = state_60426__$1;
(statearr_60446_60492[(2)] = inst_60411);

(statearr_60446_60492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (16))){
var inst_60414 = (state_60426[(9)]);
var inst_60414__$1 = (state_60426[(2)]);
var inst_60415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60414__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60414__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60426__$1 = (function (){var statearr_60447 = state_60426;
(statearr_60447[(8)] = inst_60416);

(statearr_60447[(9)] = inst_60414__$1);

return statearr_60447;
})();
if(cljs.core.truth_(inst_60415)){
var statearr_60448_60493 = state_60426__$1;
(statearr_60448_60493[(1)] = (17));

} else {
var statearr_60449_60494 = state_60426__$1;
(statearr_60449_60494[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (10))){
var inst_60409 = (state_60426[(2)]);
var state_60426__$1 = state_60426;
if(cljs.core.truth_(inst_60409)){
var statearr_60450_60495 = state_60426__$1;
(statearr_60450_60495[(1)] = (14));

} else {
var statearr_60451_60496 = state_60426__$1;
(statearr_60451_60496[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (18))){
var inst_60414 = (state_60426[(9)]);
var inst_60421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60414);
var inst_60422 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60421) : re_frame.core.dispatch.call(null,inst_60421));
var state_60426__$1 = state_60426;
var statearr_60452_60497 = state_60426__$1;
(statearr_60452_60497[(2)] = inst_60422);

(statearr_60452_60497[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60427 === (8))){
var inst_60393 = (state_60426[(7)]);
var inst_60398 = inst_60393.cljs$lang$protocol_mask$partition0$;
var inst_60399 = (inst_60398 & (64));
var inst_60400 = inst_60393.cljs$core$ISeq$;
var inst_60401 = (cljs.core.PROTOCOL_SENTINEL === inst_60400);
var inst_60402 = ((inst_60399) || (inst_60401));
var state_60426__$1 = state_60426;
if(cljs.core.truth_(inst_60402)){
var statearr_60453_60498 = state_60426__$1;
(statearr_60453_60498[(1)] = (11));

} else {
var statearr_60454_60499 = state_60426__$1;
(statearr_60454_60499[(1)] = (12));

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
var athens$effects$state_machine__34207__auto__ = null;
var athens$effects$state_machine__34207__auto____0 = (function (){
var statearr_60455 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60455[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60455[(1)] = (1));

return statearr_60455;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60426){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60426);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60456){if((e60456 instanceof Object)){
var ex__34210__auto__ = e60456;
var statearr_60457_60500 = state_60426;
(statearr_60457_60500[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60501 = state_60426;
state_60426 = G__60501;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60426){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60458 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60458[(6)] = c__34274__auto__);

return statearr_60458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60379_60471,G__60380_60472) : re_frame.core.reg_fx.call(null,G__60379_60471,G__60380_60472));
var G__60459_60502 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60460_60503 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60461){
var map__60462 = p__60461;
var map__60462__$1 = (((((!((map__60462 == null))))?(((((map__60462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60462):map__60462);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60464 = action;
var G__60464__$1 = (((G__60464 instanceof cljs.core.Keyword))?G__60464.fqn:null);
switch (G__60464__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60464__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60459_60502,G__60460_60503) : re_frame.core.reg_fx.call(null,G__60459_60502,G__60460_60503));

//# sourceMappingURL=athens.effects.js.map
