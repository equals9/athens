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
var G__60349_60467 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60350_60468 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60349_60467,G__60350_60468) : re_frame.core.reg_fx.call(null,G__60349_60467,G__60350_60468));
var G__60351_60472 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60352_60473 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60351_60472,G__60352_60473) : re_frame.core.reg_fx.call(null,G__60351_60472,G__60352_60473));
var G__60353_60474 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60354_60475 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60353_60474,G__60354_60475) : re_frame.core.reg_fx.call(null,G__60353_60474,G__60354_60475));
var G__60355_60476 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60356_60477 = (function (p__60357){
var map__60358 = p__60357;
var map__60358__$1 = (((((!((map__60358 == null))))?(((((map__60358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60358):map__60358);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60358__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60358__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60358__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60358__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60358__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_60402){
var state_val_60403 = (state_60402[(1)]);
if((state_val_60403 === (7))){
var inst_60369 = (state_60402[(7)]);
var inst_60369__$1 = (state_60402[(2)]);
var inst_60371 = (inst_60369__$1 == null);
var inst_60372 = cljs.core.not(inst_60371);
var state_60402__$1 = (function (){var statearr_60404 = state_60402;
(statearr_60404[(7)] = inst_60369__$1);

return statearr_60404;
})();
if(inst_60372){
var statearr_60405_60481 = state_60402__$1;
(statearr_60405_60481[(1)] = (8));

} else {
var statearr_60406_60485 = state_60402__$1;
(statearr_60406_60485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (1))){
var state_60402__$1 = state_60402;
var G__60407_60486 = method;
var G__60407_60487__$1 = (((G__60407_60486 instanceof cljs.core.Keyword))?G__60407_60486.fqn:null);
switch (G__60407_60487__$1) {
case "post":
var statearr_60408_60489 = state_60402__$1;
(statearr_60408_60489[(1)] = (3));


break;
case "get":
var statearr_60410_60493 = state_60402__$1;
(statearr_60410_60493[(1)] = (4));


break;
case "put":
var statearr_60411_60494 = state_60402__$1;
(statearr_60411_60494[(1)] = (5));


break;
case "delete":
var statearr_60412_60495 = state_60402__$1;
(statearr_60412_60495[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60407_60487__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (4))){
var state_60402__$1 = state_60402;
var statearr_60413_60496 = state_60402__$1;
(statearr_60413_60496[(2)] = cljs_http.client.get);

(statearr_60413_60496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (15))){
var inst_60369 = (state_60402[(7)]);
var state_60402__$1 = state_60402;
var statearr_60414_60499 = state_60402__$1;
(statearr_60414_60499[(2)] = inst_60369);

(statearr_60414_60499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (13))){
var inst_60382 = (state_60402[(2)]);
var state_60402__$1 = state_60402;
var statearr_60415_60501 = state_60402__$1;
(statearr_60415_60501[(2)] = inst_60382);

(statearr_60415_60501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (6))){
var state_60402__$1 = state_60402;
var statearr_60417_60503 = state_60402__$1;
(statearr_60417_60503[(2)] = cljs_http.client.delete$);

(statearr_60417_60503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (17))){
var inst_60392 = (state_60402[(8)]);
var inst_60394 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60392);
var inst_60395 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60394) : re_frame.core.dispatch.call(null,inst_60394));
var state_60402__$1 = state_60402;
var statearr_60418_60510 = state_60402__$1;
(statearr_60418_60510[(2)] = inst_60395);

(statearr_60418_60510[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (3))){
var state_60402__$1 = state_60402;
var statearr_60419_60511 = state_60402__$1;
(statearr_60419_60511[(2)] = cljs_http.client.post);

(statearr_60419_60511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (12))){
var state_60402__$1 = state_60402;
var statearr_60421_60512 = state_60402__$1;
(statearr_60421_60512[(2)] = false);

(statearr_60421_60512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (2))){
var inst_60366 = (state_60402[(2)]);
var inst_60367 = (inst_60366.cljs$core$IFn$_invoke$arity$2 ? inst_60366.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60366.call(null,url,opts));
var state_60402__$1 = state_60402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60402__$1,(7),inst_60367);
} else {
if((state_val_60403 === (19))){
var inst_60400 = (state_60402[(2)]);
var state_60402__$1 = state_60402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60402__$1,inst_60400);
} else {
if((state_val_60403 === (11))){
var state_60402__$1 = state_60402;
var statearr_60422_60517 = state_60402__$1;
(statearr_60422_60517[(2)] = true);

(statearr_60422_60517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (9))){
var state_60402__$1 = state_60402;
var statearr_60423_60522 = state_60402__$1;
(statearr_60423_60522[(2)] = false);

(statearr_60423_60522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (5))){
var state_60402__$1 = state_60402;
var statearr_60425_60523 = state_60402__$1;
(statearr_60425_60523[(2)] = cljs_http.client.put);

(statearr_60425_60523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (14))){
var inst_60369 = (state_60402[(7)]);
var inst_60387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60369);
var state_60402__$1 = state_60402;
var statearr_60426_60524 = state_60402__$1;
(statearr_60426_60524[(2)] = inst_60387);

(statearr_60426_60524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (16))){
var inst_60390 = (state_60402[(9)]);
var inst_60390__$1 = (state_60402[(2)]);
var inst_60391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60390__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60390__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60402__$1 = (function (){var statearr_60427 = state_60402;
(statearr_60427[(9)] = inst_60390__$1);

(statearr_60427[(8)] = inst_60392);

return statearr_60427;
})();
if(cljs.core.truth_(inst_60391)){
var statearr_60429_60526 = state_60402__$1;
(statearr_60429_60526[(1)] = (17));

} else {
var statearr_60433_60527 = state_60402__$1;
(statearr_60433_60527[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (10))){
var inst_60385 = (state_60402[(2)]);
var state_60402__$1 = state_60402;
if(cljs.core.truth_(inst_60385)){
var statearr_60434_60528 = state_60402__$1;
(statearr_60434_60528[(1)] = (14));

} else {
var statearr_60436_60529 = state_60402__$1;
(statearr_60436_60529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (18))){
var inst_60390 = (state_60402[(9)]);
var inst_60397 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60390);
var inst_60398 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60397) : re_frame.core.dispatch.call(null,inst_60397));
var state_60402__$1 = state_60402;
var statearr_60437_60530 = state_60402__$1;
(statearr_60437_60530[(2)] = inst_60398);

(statearr_60437_60530[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60403 === (8))){
var inst_60369 = (state_60402[(7)]);
var inst_60374 = inst_60369.cljs$lang$protocol_mask$partition0$;
var inst_60375 = (inst_60374 & (64));
var inst_60376 = inst_60369.cljs$core$ISeq$;
var inst_60377 = (cljs.core.PROTOCOL_SENTINEL === inst_60376);
var inst_60378 = ((inst_60375) || (inst_60377));
var state_60402__$1 = state_60402;
if(cljs.core.truth_(inst_60378)){
var statearr_60438_60536 = state_60402__$1;
(statearr_60438_60536[(1)] = (11));

} else {
var statearr_60440_60538 = state_60402__$1;
(statearr_60440_60538[(1)] = (12));

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
var statearr_60444 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60444[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60444[(1)] = (1));

return statearr_60444;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60402){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60402);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60449){if((e60449 instanceof Object)){
var ex__34210__auto__ = e60449;
var statearr_60450_60539 = state_60402;
(statearr_60450_60539[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60540 = state_60402;
state_60402 = G__60540;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60402){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_60455 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_60455[(6)] = c__34272__auto__);

return statearr_60455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34272__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60355_60476,G__60356_60477) : re_frame.core.reg_fx.call(null,G__60355_60476,G__60356_60477));
var G__60456_60541 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60457_60542 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60459){
var map__60460 = p__60459;
var map__60460__$1 = (((((!((map__60460 == null))))?(((((map__60460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60460):map__60460);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60460__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60460__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60460__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60460__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60462 = action;
var G__60462__$1 = (((G__60462 instanceof cljs.core.Keyword))?G__60462.fqn:null);
switch (G__60462__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60462__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60456_60541,G__60457_60542) : re_frame.core.reg_fx.call(null,G__60456_60541,G__60457_60542));

//# sourceMappingURL=athens.effects.js.map
