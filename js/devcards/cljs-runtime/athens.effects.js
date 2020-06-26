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
var G__60347_60441 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60348_60442 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60347_60441,G__60348_60442) : re_frame.core.reg_fx.call(null,G__60347_60441,G__60348_60442));
var G__60349_60443 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60350_60444 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60349_60443,G__60350_60444) : re_frame.core.reg_fx.call(null,G__60349_60443,G__60350_60444));
var G__60351_60445 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60352_60446 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60351_60445,G__60352_60446) : re_frame.core.reg_fx.call(null,G__60351_60445,G__60352_60446));
var G__60353_60447 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60354_60448 = (function (p__60355){
var map__60356 = p__60355;
var map__60356__$1 = (((((!((map__60356 == null))))?(((((map__60356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60356):map__60356);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60400){
var state_val_60401 = (state_60400[(1)]);
if((state_val_60401 === (7))){
var inst_60367 = (state_60400[(7)]);
var inst_60367__$1 = (state_60400[(2)]);
var inst_60369 = (inst_60367__$1 == null);
var inst_60370 = cljs.core.not(inst_60369);
var state_60400__$1 = (function (){var statearr_60402 = state_60400;
(statearr_60402[(7)] = inst_60367__$1);

return statearr_60402;
})();
if(inst_60370){
var statearr_60403_60449 = state_60400__$1;
(statearr_60403_60449[(1)] = (8));

} else {
var statearr_60404_60450 = state_60400__$1;
(statearr_60404_60450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (1))){
var state_60400__$1 = state_60400;
var G__60405_60451 = method;
var G__60405_60452__$1 = (((G__60405_60451 instanceof cljs.core.Keyword))?G__60405_60451.fqn:null);
switch (G__60405_60452__$1) {
case "post":
var statearr_60406_60454 = state_60400__$1;
(statearr_60406_60454[(1)] = (3));


break;
case "get":
var statearr_60407_60455 = state_60400__$1;
(statearr_60407_60455[(1)] = (4));


break;
case "put":
var statearr_60408_60456 = state_60400__$1;
(statearr_60408_60456[(1)] = (5));


break;
case "delete":
var statearr_60409_60457 = state_60400__$1;
(statearr_60409_60457[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60405_60452__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (4))){
var state_60400__$1 = state_60400;
var statearr_60410_60458 = state_60400__$1;
(statearr_60410_60458[(2)] = cljs_http.client.get);

(statearr_60410_60458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (15))){
var inst_60367 = (state_60400[(7)]);
var state_60400__$1 = state_60400;
var statearr_60411_60459 = state_60400__$1;
(statearr_60411_60459[(2)] = inst_60367);

(statearr_60411_60459[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (13))){
var inst_60380 = (state_60400[(2)]);
var state_60400__$1 = state_60400;
var statearr_60412_60460 = state_60400__$1;
(statearr_60412_60460[(2)] = inst_60380);

(statearr_60412_60460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (6))){
var state_60400__$1 = state_60400;
var statearr_60413_60461 = state_60400__$1;
(statearr_60413_60461[(2)] = cljs_http.client.delete$);

(statearr_60413_60461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (17))){
var inst_60390 = (state_60400[(8)]);
var inst_60392 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60390);
var inst_60393 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60392) : re_frame.core.dispatch.call(null,inst_60392));
var state_60400__$1 = state_60400;
var statearr_60414_60462 = state_60400__$1;
(statearr_60414_60462[(2)] = inst_60393);

(statearr_60414_60462[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (3))){
var state_60400__$1 = state_60400;
var statearr_60415_60463 = state_60400__$1;
(statearr_60415_60463[(2)] = cljs_http.client.post);

(statearr_60415_60463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (12))){
var state_60400__$1 = state_60400;
var statearr_60416_60464 = state_60400__$1;
(statearr_60416_60464[(2)] = false);

(statearr_60416_60464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (2))){
var inst_60364 = (state_60400[(2)]);
var inst_60365 = (inst_60364.cljs$core$IFn$_invoke$arity$2 ? inst_60364.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60364.call(null,url,opts));
var state_60400__$1 = state_60400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60400__$1,(7),inst_60365);
} else {
if((state_val_60401 === (19))){
var inst_60398 = (state_60400[(2)]);
var state_60400__$1 = state_60400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60400__$1,inst_60398);
} else {
if((state_val_60401 === (11))){
var state_60400__$1 = state_60400;
var statearr_60419_60465 = state_60400__$1;
(statearr_60419_60465[(2)] = true);

(statearr_60419_60465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (9))){
var state_60400__$1 = state_60400;
var statearr_60420_60466 = state_60400__$1;
(statearr_60420_60466[(2)] = false);

(statearr_60420_60466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (5))){
var state_60400__$1 = state_60400;
var statearr_60421_60467 = state_60400__$1;
(statearr_60421_60467[(2)] = cljs_http.client.put);

(statearr_60421_60467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (14))){
var inst_60367 = (state_60400[(7)]);
var inst_60385 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60367);
var state_60400__$1 = state_60400;
var statearr_60422_60468 = state_60400__$1;
(statearr_60422_60468[(2)] = inst_60385);

(statearr_60422_60468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (16))){
var inst_60388 = (state_60400[(9)]);
var inst_60388__$1 = (state_60400[(2)]);
var inst_60389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60388__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60388__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60400__$1 = (function (){var statearr_60423 = state_60400;
(statearr_60423[(8)] = inst_60390);

(statearr_60423[(9)] = inst_60388__$1);

return statearr_60423;
})();
if(cljs.core.truth_(inst_60389)){
var statearr_60424_60469 = state_60400__$1;
(statearr_60424_60469[(1)] = (17));

} else {
var statearr_60425_60470 = state_60400__$1;
(statearr_60425_60470[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (10))){
var inst_60383 = (state_60400[(2)]);
var state_60400__$1 = state_60400;
if(cljs.core.truth_(inst_60383)){
var statearr_60426_60471 = state_60400__$1;
(statearr_60426_60471[(1)] = (14));

} else {
var statearr_60427_60472 = state_60400__$1;
(statearr_60427_60472[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (18))){
var inst_60388 = (state_60400[(9)]);
var inst_60395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60388);
var inst_60396 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60395) : re_frame.core.dispatch.call(null,inst_60395));
var state_60400__$1 = state_60400;
var statearr_60428_60473 = state_60400__$1;
(statearr_60428_60473[(2)] = inst_60396);

(statearr_60428_60473[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60401 === (8))){
var inst_60367 = (state_60400[(7)]);
var inst_60372 = inst_60367.cljs$lang$protocol_mask$partition0$;
var inst_60373 = (inst_60372 & (64));
var inst_60374 = inst_60367.cljs$core$ISeq$;
var inst_60375 = (cljs.core.PROTOCOL_SENTINEL === inst_60374);
var inst_60376 = ((inst_60373) || (inst_60375));
var state_60400__$1 = state_60400;
if(cljs.core.truth_(inst_60376)){
var statearr_60429_60474 = state_60400__$1;
(statearr_60429_60474[(1)] = (11));

} else {
var statearr_60430_60475 = state_60400__$1;
(statearr_60430_60475[(1)] = (12));

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
var statearr_60431 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60431[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60431[(1)] = (1));

return statearr_60431;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60400){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60400);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60432){if((e60432 instanceof Object)){
var ex__34210__auto__ = e60432;
var statearr_60433_60477 = state_60400;
(statearr_60433_60477[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60478 = state_60400;
state_60400 = G__60478;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60400){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60434 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60434[(6)] = c__34274__auto__);

return statearr_60434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60353_60447,G__60354_60448) : re_frame.core.reg_fx.call(null,G__60353_60447,G__60354_60448));
var G__60435_60479 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60436_60480 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60437){
var map__60438 = p__60437;
var map__60438__$1 = (((((!((map__60438 == null))))?(((((map__60438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60438):map__60438);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60438__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60438__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60438__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60438__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60440 = action;
var G__60440__$1 = (((G__60440 instanceof cljs.core.Keyword))?G__60440.fqn:null);
switch (G__60440__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60440__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60435_60479,G__60436_60480) : re_frame.core.reg_fx.call(null,G__60435_60479,G__60436_60480));

//# sourceMappingURL=athens.effects.js.map
