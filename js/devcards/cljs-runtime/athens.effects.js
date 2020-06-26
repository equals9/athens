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
var G__60348_60442 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60349_60443 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60348_60442,G__60349_60443) : re_frame.core.reg_fx.call(null,G__60348_60442,G__60349_60443));
var G__60350_60444 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60351_60445 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60350_60444,G__60351_60445) : re_frame.core.reg_fx.call(null,G__60350_60444,G__60351_60445));
var G__60352_60446 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60353_60447 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60352_60446,G__60353_60447) : re_frame.core.reg_fx.call(null,G__60352_60446,G__60353_60447));
var G__60354_60448 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60355_60449 = (function (p__60356){
var map__60357 = p__60356;
var map__60357__$1 = (((((!((map__60357 == null))))?(((((map__60357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60357):map__60357);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60403){
var state_val_60404 = (state_60403[(1)]);
if((state_val_60404 === (7))){
var inst_60368 = (state_60403[(7)]);
var inst_60368__$1 = (state_60403[(2)]);
var inst_60370 = (inst_60368__$1 == null);
var inst_60371 = cljs.core.not(inst_60370);
var state_60403__$1 = (function (){var statearr_60405 = state_60403;
(statearr_60405[(7)] = inst_60368__$1);

return statearr_60405;
})();
if(inst_60371){
var statearr_60406_60450 = state_60403__$1;
(statearr_60406_60450[(1)] = (8));

} else {
var statearr_60407_60451 = state_60403__$1;
(statearr_60407_60451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (1))){
var state_60403__$1 = state_60403;
var G__60408_60452 = method;
var G__60408_60453__$1 = (((G__60408_60452 instanceof cljs.core.Keyword))?G__60408_60452.fqn:null);
switch (G__60408_60453__$1) {
case "post":
var statearr_60409_60455 = state_60403__$1;
(statearr_60409_60455[(1)] = (3));


break;
case "get":
var statearr_60410_60456 = state_60403__$1;
(statearr_60410_60456[(1)] = (4));


break;
case "put":
var statearr_60411_60457 = state_60403__$1;
(statearr_60411_60457[(1)] = (5));


break;
case "delete":
var statearr_60412_60458 = state_60403__$1;
(statearr_60412_60458[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60408_60453__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (4))){
var state_60403__$1 = state_60403;
var statearr_60413_60459 = state_60403__$1;
(statearr_60413_60459[(2)] = cljs_http.client.get);

(statearr_60413_60459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (15))){
var inst_60368 = (state_60403[(7)]);
var state_60403__$1 = state_60403;
var statearr_60414_60460 = state_60403__$1;
(statearr_60414_60460[(2)] = inst_60368);

(statearr_60414_60460[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (13))){
var inst_60383 = (state_60403[(2)]);
var state_60403__$1 = state_60403;
var statearr_60415_60461 = state_60403__$1;
(statearr_60415_60461[(2)] = inst_60383);

(statearr_60415_60461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (6))){
var state_60403__$1 = state_60403;
var statearr_60416_60462 = state_60403__$1;
(statearr_60416_60462[(2)] = cljs_http.client.delete$);

(statearr_60416_60462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (17))){
var inst_60393 = (state_60403[(8)]);
var inst_60395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60393);
var inst_60396 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60395) : re_frame.core.dispatch.call(null,inst_60395));
var state_60403__$1 = state_60403;
var statearr_60417_60463 = state_60403__$1;
(statearr_60417_60463[(2)] = inst_60396);

(statearr_60417_60463[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (3))){
var state_60403__$1 = state_60403;
var statearr_60418_60465 = state_60403__$1;
(statearr_60418_60465[(2)] = cljs_http.client.post);

(statearr_60418_60465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (12))){
var state_60403__$1 = state_60403;
var statearr_60419_60466 = state_60403__$1;
(statearr_60419_60466[(2)] = false);

(statearr_60419_60466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (2))){
var inst_60365 = (state_60403[(2)]);
var inst_60366 = (inst_60365.cljs$core$IFn$_invoke$arity$2 ? inst_60365.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60365.call(null,url,opts));
var state_60403__$1 = state_60403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60403__$1,(7),inst_60366);
} else {
if((state_val_60404 === (19))){
var inst_60401 = (state_60403[(2)]);
var state_60403__$1 = state_60403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60403__$1,inst_60401);
} else {
if((state_val_60404 === (11))){
var state_60403__$1 = state_60403;
var statearr_60420_60467 = state_60403__$1;
(statearr_60420_60467[(2)] = true);

(statearr_60420_60467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (9))){
var state_60403__$1 = state_60403;
var statearr_60421_60470 = state_60403__$1;
(statearr_60421_60470[(2)] = false);

(statearr_60421_60470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (5))){
var state_60403__$1 = state_60403;
var statearr_60422_60490 = state_60403__$1;
(statearr_60422_60490[(2)] = cljs_http.client.put);

(statearr_60422_60490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (14))){
var inst_60368 = (state_60403[(7)]);
var inst_60388 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60368);
var state_60403__$1 = state_60403;
var statearr_60423_60491 = state_60403__$1;
(statearr_60423_60491[(2)] = inst_60388);

(statearr_60423_60491[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (16))){
var inst_60391 = (state_60403[(9)]);
var inst_60391__$1 = (state_60403[(2)]);
var inst_60392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60391__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60391__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60403__$1 = (function (){var statearr_60424 = state_60403;
(statearr_60424[(9)] = inst_60391__$1);

(statearr_60424[(8)] = inst_60393);

return statearr_60424;
})();
if(cljs.core.truth_(inst_60392)){
var statearr_60425_60496 = state_60403__$1;
(statearr_60425_60496[(1)] = (17));

} else {
var statearr_60426_60497 = state_60403__$1;
(statearr_60426_60497[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (10))){
var inst_60386 = (state_60403[(2)]);
var state_60403__$1 = state_60403;
if(cljs.core.truth_(inst_60386)){
var statearr_60427_60498 = state_60403__$1;
(statearr_60427_60498[(1)] = (14));

} else {
var statearr_60428_60499 = state_60403__$1;
(statearr_60428_60499[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (18))){
var inst_60391 = (state_60403[(9)]);
var inst_60398 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60391);
var inst_60399 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60398) : re_frame.core.dispatch.call(null,inst_60398));
var state_60403__$1 = state_60403;
var statearr_60429_60503 = state_60403__$1;
(statearr_60429_60503[(2)] = inst_60399);

(statearr_60429_60503[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60404 === (8))){
var inst_60368 = (state_60403[(7)]);
var inst_60373 = inst_60368.cljs$lang$protocol_mask$partition0$;
var inst_60374 = (inst_60373 & (64));
var inst_60375 = inst_60368.cljs$core$ISeq$;
var inst_60376 = (cljs.core.PROTOCOL_SENTINEL === inst_60375);
var inst_60377 = ((inst_60374) || (inst_60376));
var state_60403__$1 = state_60403;
if(cljs.core.truth_(inst_60377)){
var statearr_60430_60504 = state_60403__$1;
(statearr_60430_60504[(1)] = (11));

} else {
var statearr_60431_60505 = state_60403__$1;
(statearr_60431_60505[(1)] = (12));

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
var statearr_60432 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60432[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60432[(1)] = (1));

return statearr_60432;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60403){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60403);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60433){if((e60433 instanceof Object)){
var ex__34210__auto__ = e60433;
var statearr_60434_60508 = state_60403;
(statearr_60434_60508[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60509 = state_60403;
state_60403 = G__60509;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60403){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60435 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60435[(6)] = c__34274__auto__);

return statearr_60435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60354_60448,G__60355_60449) : re_frame.core.reg_fx.call(null,G__60354_60448,G__60355_60449));
var G__60436_60510 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60437_60511 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60438){
var map__60439 = p__60438;
var map__60439__$1 = (((((!((map__60439 == null))))?(((((map__60439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60439):map__60439);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60439__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60439__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60439__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60441 = action;
var G__60441__$1 = (((G__60441 instanceof cljs.core.Keyword))?G__60441.fqn:null);
switch (G__60441__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60441__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60436_60510,G__60437_60511) : re_frame.core.reg_fx.call(null,G__60436_60510,G__60437_60511));

//# sourceMappingURL=athens.effects.js.map
