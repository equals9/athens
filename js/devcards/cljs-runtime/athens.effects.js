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
var G__60383_60475 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60384_60476 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60383_60475,G__60384_60476) : re_frame.core.reg_fx.call(null,G__60383_60475,G__60384_60476));
var G__60385_60477 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60386_60478 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60385_60477,G__60386_60478) : re_frame.core.reg_fx.call(null,G__60385_60477,G__60386_60478));
var G__60387_60479 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60388_60480 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60387_60479,G__60388_60480) : re_frame.core.reg_fx.call(null,G__60387_60479,G__60388_60480));
var G__60389_60481 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60390_60482 = (function (p__60391){
var map__60392 = p__60391;
var map__60392__$1 = (((((!((map__60392 == null))))?(((((map__60392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60392):map__60392);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60392__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60392__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60392__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60392__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60392__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60436){
var state_val_60437 = (state_60436[(1)]);
if((state_val_60437 === (7))){
var inst_60403 = (state_60436[(7)]);
var inst_60403__$1 = (state_60436[(2)]);
var inst_60405 = (inst_60403__$1 == null);
var inst_60406 = cljs.core.not(inst_60405);
var state_60436__$1 = (function (){var statearr_60438 = state_60436;
(statearr_60438[(7)] = inst_60403__$1);

return statearr_60438;
})();
if(inst_60406){
var statearr_60439_60483 = state_60436__$1;
(statearr_60439_60483[(1)] = (8));

} else {
var statearr_60440_60484 = state_60436__$1;
(statearr_60440_60484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (1))){
var state_60436__$1 = state_60436;
var G__60441_60485 = method;
var G__60441_60486__$1 = (((G__60441_60485 instanceof cljs.core.Keyword))?G__60441_60485.fqn:null);
switch (G__60441_60486__$1) {
case "post":
var statearr_60442_60488 = state_60436__$1;
(statearr_60442_60488[(1)] = (3));


break;
case "get":
var statearr_60443_60489 = state_60436__$1;
(statearr_60443_60489[(1)] = (4));


break;
case "put":
var statearr_60444_60490 = state_60436__$1;
(statearr_60444_60490[(1)] = (5));


break;
case "delete":
var statearr_60445_60491 = state_60436__$1;
(statearr_60445_60491[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60441_60486__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (4))){
var state_60436__$1 = state_60436;
var statearr_60446_60492 = state_60436__$1;
(statearr_60446_60492[(2)] = cljs_http.client.get);

(statearr_60446_60492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (15))){
var inst_60403 = (state_60436[(7)]);
var state_60436__$1 = state_60436;
var statearr_60447_60493 = state_60436__$1;
(statearr_60447_60493[(2)] = inst_60403);

(statearr_60447_60493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (13))){
var inst_60416 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
var statearr_60448_60494 = state_60436__$1;
(statearr_60448_60494[(2)] = inst_60416);

(statearr_60448_60494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (6))){
var state_60436__$1 = state_60436;
var statearr_60449_60495 = state_60436__$1;
(statearr_60449_60495[(2)] = cljs_http.client.delete$);

(statearr_60449_60495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (17))){
var inst_60426 = (state_60436[(8)]);
var inst_60428 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60426);
var inst_60429 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60428) : re_frame.core.dispatch.call(null,inst_60428));
var state_60436__$1 = state_60436;
var statearr_60450_60496 = state_60436__$1;
(statearr_60450_60496[(2)] = inst_60429);

(statearr_60450_60496[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (3))){
var state_60436__$1 = state_60436;
var statearr_60451_60497 = state_60436__$1;
(statearr_60451_60497[(2)] = cljs_http.client.post);

(statearr_60451_60497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (12))){
var state_60436__$1 = state_60436;
var statearr_60452_60498 = state_60436__$1;
(statearr_60452_60498[(2)] = false);

(statearr_60452_60498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (2))){
var inst_60400 = (state_60436[(2)]);
var inst_60401 = (inst_60400.cljs$core$IFn$_invoke$arity$2 ? inst_60400.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60400.call(null,url,opts));
var state_60436__$1 = state_60436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60436__$1,(7),inst_60401);
} else {
if((state_val_60437 === (19))){
var inst_60434 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60436__$1,inst_60434);
} else {
if((state_val_60437 === (11))){
var state_60436__$1 = state_60436;
var statearr_60453_60499 = state_60436__$1;
(statearr_60453_60499[(2)] = true);

(statearr_60453_60499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (9))){
var state_60436__$1 = state_60436;
var statearr_60454_60500 = state_60436__$1;
(statearr_60454_60500[(2)] = false);

(statearr_60454_60500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (5))){
var state_60436__$1 = state_60436;
var statearr_60455_60501 = state_60436__$1;
(statearr_60455_60501[(2)] = cljs_http.client.put);

(statearr_60455_60501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (14))){
var inst_60403 = (state_60436[(7)]);
var inst_60421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60403);
var state_60436__$1 = state_60436;
var statearr_60456_60502 = state_60436__$1;
(statearr_60456_60502[(2)] = inst_60421);

(statearr_60456_60502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (16))){
var inst_60424 = (state_60436[(9)]);
var inst_60424__$1 = (state_60436[(2)]);
var inst_60425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60424__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60424__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60436__$1 = (function (){var statearr_60457 = state_60436;
(statearr_60457[(8)] = inst_60426);

(statearr_60457[(9)] = inst_60424__$1);

return statearr_60457;
})();
if(cljs.core.truth_(inst_60425)){
var statearr_60458_60503 = state_60436__$1;
(statearr_60458_60503[(1)] = (17));

} else {
var statearr_60459_60504 = state_60436__$1;
(statearr_60459_60504[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (10))){
var inst_60419 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60419)){
var statearr_60460_60505 = state_60436__$1;
(statearr_60460_60505[(1)] = (14));

} else {
var statearr_60461_60506 = state_60436__$1;
(statearr_60461_60506[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (18))){
var inst_60424 = (state_60436[(9)]);
var inst_60431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60424);
var inst_60432 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60431) : re_frame.core.dispatch.call(null,inst_60431));
var state_60436__$1 = state_60436;
var statearr_60462_60507 = state_60436__$1;
(statearr_60462_60507[(2)] = inst_60432);

(statearr_60462_60507[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (8))){
var inst_60403 = (state_60436[(7)]);
var inst_60408 = inst_60403.cljs$lang$protocol_mask$partition0$;
var inst_60409 = (inst_60408 & (64));
var inst_60410 = inst_60403.cljs$core$ISeq$;
var inst_60411 = (cljs.core.PROTOCOL_SENTINEL === inst_60410);
var inst_60412 = ((inst_60409) || (inst_60411));
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60412)){
var statearr_60463_60508 = state_60436__$1;
(statearr_60463_60508[(1)] = (11));

} else {
var statearr_60464_60509 = state_60436__$1;
(statearr_60464_60509[(1)] = (12));

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
var statearr_60465 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60465[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60465[(1)] = (1));

return statearr_60465;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60436){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60436);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60466){if((e60466 instanceof Object)){
var ex__34210__auto__ = e60466;
var statearr_60467_60510 = state_60436;
(statearr_60467_60510[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60511 = state_60436;
state_60436 = G__60511;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60436){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60468 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60468[(6)] = c__34274__auto__);

return statearr_60468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60389_60481,G__60390_60482) : re_frame.core.reg_fx.call(null,G__60389_60481,G__60390_60482));
var G__60469_60512 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60470_60513 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60471){
var map__60472 = p__60471;
var map__60472__$1 = (((((!((map__60472 == null))))?(((((map__60472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60472):map__60472);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60472__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60472__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60472__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60472__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60474 = action;
var G__60474__$1 = (((G__60474 instanceof cljs.core.Keyword))?G__60474.fqn:null);
switch (G__60474__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60474__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60469_60512,G__60470_60513) : re_frame.core.reg_fx.call(null,G__60469_60512,G__60470_60513));

//# sourceMappingURL=athens.effects.js.map
