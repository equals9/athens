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
var G__61277_61369 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61278_61370 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61277_61369,G__61278_61370) : re_frame.core.reg_fx.call(null,G__61277_61369,G__61278_61370));
var G__61279_61371 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61280_61372 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61279_61371,G__61280_61372) : re_frame.core.reg_fx.call(null,G__61279_61371,G__61280_61372));
var G__61281_61373 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61282_61374 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61281_61373,G__61282_61374) : re_frame.core.reg_fx.call(null,G__61281_61373,G__61282_61374));
var G__61283_61375 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61284_61376 = (function (p__61285){
var map__61286 = p__61285;
var map__61286__$1 = (((((!((map__61286 == null))))?(((((map__61286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61286):map__61286);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36985__auto__ = (function (){var switch__36917__auto__ = (function (state_61330){
var state_val_61331 = (state_61330[(1)]);
if((state_val_61331 === (7))){
var inst_61297 = (state_61330[(7)]);
var inst_61297__$1 = (state_61330[(2)]);
var inst_61299 = (inst_61297__$1 == null);
var inst_61300 = cljs.core.not(inst_61299);
var state_61330__$1 = (function (){var statearr_61332 = state_61330;
(statearr_61332[(7)] = inst_61297__$1);

return statearr_61332;
})();
if(inst_61300){
var statearr_61333_61377 = state_61330__$1;
(statearr_61333_61377[(1)] = (8));

} else {
var statearr_61334_61378 = state_61330__$1;
(statearr_61334_61378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (1))){
var state_61330__$1 = state_61330;
var G__61335_61379 = method;
var G__61335_61380__$1 = (((G__61335_61379 instanceof cljs.core.Keyword))?G__61335_61379.fqn:null);
switch (G__61335_61380__$1) {
case "post":
var statearr_61336_61382 = state_61330__$1;
(statearr_61336_61382[(1)] = (3));


break;
case "get":
var statearr_61337_61383 = state_61330__$1;
(statearr_61337_61383[(1)] = (4));


break;
case "put":
var statearr_61338_61384 = state_61330__$1;
(statearr_61338_61384[(1)] = (5));


break;
case "delete":
var statearr_61339_61385 = state_61330__$1;
(statearr_61339_61385[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61335_61380__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (4))){
var state_61330__$1 = state_61330;
var statearr_61340_61386 = state_61330__$1;
(statearr_61340_61386[(2)] = cljs_http.client.get);

(statearr_61340_61386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (15))){
var inst_61297 = (state_61330[(7)]);
var state_61330__$1 = state_61330;
var statearr_61341_61387 = state_61330__$1;
(statearr_61341_61387[(2)] = inst_61297);

(statearr_61341_61387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (13))){
var inst_61310 = (state_61330[(2)]);
var state_61330__$1 = state_61330;
var statearr_61342_61388 = state_61330__$1;
(statearr_61342_61388[(2)] = inst_61310);

(statearr_61342_61388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (6))){
var state_61330__$1 = state_61330;
var statearr_61343_61389 = state_61330__$1;
(statearr_61343_61389[(2)] = cljs_http.client.delete$);

(statearr_61343_61389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (17))){
var inst_61320 = (state_61330[(8)]);
var inst_61322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61320);
var inst_61323 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61322) : re_frame.core.dispatch.call(null,inst_61322));
var state_61330__$1 = state_61330;
var statearr_61344_61390 = state_61330__$1;
(statearr_61344_61390[(2)] = inst_61323);

(statearr_61344_61390[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (3))){
var state_61330__$1 = state_61330;
var statearr_61345_61391 = state_61330__$1;
(statearr_61345_61391[(2)] = cljs_http.client.post);

(statearr_61345_61391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (12))){
var state_61330__$1 = state_61330;
var statearr_61346_61392 = state_61330__$1;
(statearr_61346_61392[(2)] = false);

(statearr_61346_61392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (2))){
var inst_61294 = (state_61330[(2)]);
var inst_61295 = (inst_61294.cljs$core$IFn$_invoke$arity$2 ? inst_61294.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61294.call(null,url,opts));
var state_61330__$1 = state_61330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61330__$1,(7),inst_61295);
} else {
if((state_val_61331 === (19))){
var inst_61328 = (state_61330[(2)]);
var state_61330__$1 = state_61330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61330__$1,inst_61328);
} else {
if((state_val_61331 === (11))){
var state_61330__$1 = state_61330;
var statearr_61347_61393 = state_61330__$1;
(statearr_61347_61393[(2)] = true);

(statearr_61347_61393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (9))){
var state_61330__$1 = state_61330;
var statearr_61348_61394 = state_61330__$1;
(statearr_61348_61394[(2)] = false);

(statearr_61348_61394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (5))){
var state_61330__$1 = state_61330;
var statearr_61349_61395 = state_61330__$1;
(statearr_61349_61395[(2)] = cljs_http.client.put);

(statearr_61349_61395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (14))){
var inst_61297 = (state_61330[(7)]);
var inst_61315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61297);
var state_61330__$1 = state_61330;
var statearr_61350_61396 = state_61330__$1;
(statearr_61350_61396[(2)] = inst_61315);

(statearr_61350_61396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (16))){
var inst_61318 = (state_61330[(9)]);
var inst_61318__$1 = (state_61330[(2)]);
var inst_61319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61318__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61318__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61330__$1 = (function (){var statearr_61351 = state_61330;
(statearr_61351[(8)] = inst_61320);

(statearr_61351[(9)] = inst_61318__$1);

return statearr_61351;
})();
if(cljs.core.truth_(inst_61319)){
var statearr_61352_61397 = state_61330__$1;
(statearr_61352_61397[(1)] = (17));

} else {
var statearr_61353_61398 = state_61330__$1;
(statearr_61353_61398[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (10))){
var inst_61313 = (state_61330[(2)]);
var state_61330__$1 = state_61330;
if(cljs.core.truth_(inst_61313)){
var statearr_61354_61399 = state_61330__$1;
(statearr_61354_61399[(1)] = (14));

} else {
var statearr_61355_61400 = state_61330__$1;
(statearr_61355_61400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (18))){
var inst_61318 = (state_61330[(9)]);
var inst_61325 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61318);
var inst_61326 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61325) : re_frame.core.dispatch.call(null,inst_61325));
var state_61330__$1 = state_61330;
var statearr_61356_61401 = state_61330__$1;
(statearr_61356_61401[(2)] = inst_61326);

(statearr_61356_61401[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61331 === (8))){
var inst_61297 = (state_61330[(7)]);
var inst_61302 = inst_61297.cljs$lang$protocol_mask$partition0$;
var inst_61303 = (inst_61302 & (64));
var inst_61304 = inst_61297.cljs$core$ISeq$;
var inst_61305 = (cljs.core.PROTOCOL_SENTINEL === inst_61304);
var inst_61306 = ((inst_61303) || (inst_61305));
var state_61330__$1 = state_61330;
if(cljs.core.truth_(inst_61306)){
var statearr_61357_61402 = state_61330__$1;
(statearr_61357_61402[(1)] = (11));

} else {
var statearr_61358_61403 = state_61330__$1;
(statearr_61358_61403[(1)] = (12));

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
var statearr_61359 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61359[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61359[(1)] = (1));

return statearr_61359;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61330){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61330);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61360){if((e61360 instanceof Object)){
var ex__36921__auto__ = e61360;
var statearr_61361_61404 = state_61330;
(statearr_61361_61404[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61405 = state_61330;
state_61330 = G__61405;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61330){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36986__auto__ = (function (){var statearr_61362 = (f__36985__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36985__auto__.cljs$core$IFn$_invoke$arity$0() : f__36985__auto__.call(null));
(statearr_61362[(6)] = c__36984__auto__);

return statearr_61362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36986__auto__);
}));

return c__36984__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61283_61375,G__61284_61376) : re_frame.core.reg_fx.call(null,G__61283_61375,G__61284_61376));
var G__61363_61406 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61364_61407 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61365){
var map__61366 = p__61365;
var map__61366__$1 = (((((!((map__61366 == null))))?(((((map__61366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61366):map__61366);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61368 = action;
var G__61368__$1 = (((G__61368 instanceof cljs.core.Keyword))?G__61368.fqn:null);
switch (G__61368__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61368__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61363_61406,G__61364_61407) : re_frame.core.reg_fx.call(null,G__61363_61406,G__61364_61407));

//# sourceMappingURL=athens.effects.js.map
