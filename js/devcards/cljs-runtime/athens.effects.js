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
var G__61305_61397 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61306_61398 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61305_61397,G__61306_61398) : re_frame.core.reg_fx.call(null,G__61305_61397,G__61306_61398));
var G__61307_61399 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61308_61400 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61307_61399,G__61308_61400) : re_frame.core.reg_fx.call(null,G__61307_61399,G__61308_61400));
var G__61309_61401 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61310_61402 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61309_61401,G__61310_61402) : re_frame.core.reg_fx.call(null,G__61309_61401,G__61310_61402));
var G__61311_61403 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61312_61404 = (function (p__61313){
var map__61314 = p__61313;
var map__61314__$1 = (((((!((map__61314 == null))))?(((((map__61314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61314):map__61314);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61314__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61314__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61314__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61314__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61314__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61358){
var state_val_61359 = (state_61358[(1)]);
if((state_val_61359 === (7))){
var inst_61325 = (state_61358[(7)]);
var inst_61325__$1 = (state_61358[(2)]);
var inst_61327 = (inst_61325__$1 == null);
var inst_61328 = cljs.core.not(inst_61327);
var state_61358__$1 = (function (){var statearr_61360 = state_61358;
(statearr_61360[(7)] = inst_61325__$1);

return statearr_61360;
})();
if(inst_61328){
var statearr_61361_61405 = state_61358__$1;
(statearr_61361_61405[(1)] = (8));

} else {
var statearr_61362_61406 = state_61358__$1;
(statearr_61362_61406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (1))){
var state_61358__$1 = state_61358;
var G__61363_61407 = method;
var G__61363_61408__$1 = (((G__61363_61407 instanceof cljs.core.Keyword))?G__61363_61407.fqn:null);
switch (G__61363_61408__$1) {
case "post":
var statearr_61364_61410 = state_61358__$1;
(statearr_61364_61410[(1)] = (3));


break;
case "get":
var statearr_61365_61411 = state_61358__$1;
(statearr_61365_61411[(1)] = (4));


break;
case "put":
var statearr_61366_61412 = state_61358__$1;
(statearr_61366_61412[(1)] = (5));


break;
case "delete":
var statearr_61367_61413 = state_61358__$1;
(statearr_61367_61413[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61363_61408__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (4))){
var state_61358__$1 = state_61358;
var statearr_61368_61414 = state_61358__$1;
(statearr_61368_61414[(2)] = cljs_http.client.get);

(statearr_61368_61414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (15))){
var inst_61325 = (state_61358[(7)]);
var state_61358__$1 = state_61358;
var statearr_61369_61415 = state_61358__$1;
(statearr_61369_61415[(2)] = inst_61325);

(statearr_61369_61415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (13))){
var inst_61338 = (state_61358[(2)]);
var state_61358__$1 = state_61358;
var statearr_61370_61416 = state_61358__$1;
(statearr_61370_61416[(2)] = inst_61338);

(statearr_61370_61416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (6))){
var state_61358__$1 = state_61358;
var statearr_61371_61417 = state_61358__$1;
(statearr_61371_61417[(2)] = cljs_http.client.delete$);

(statearr_61371_61417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (17))){
var inst_61348 = (state_61358[(8)]);
var inst_61350 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61348);
var inst_61351 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61350) : re_frame.core.dispatch.call(null,inst_61350));
var state_61358__$1 = state_61358;
var statearr_61372_61418 = state_61358__$1;
(statearr_61372_61418[(2)] = inst_61351);

(statearr_61372_61418[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (3))){
var state_61358__$1 = state_61358;
var statearr_61373_61419 = state_61358__$1;
(statearr_61373_61419[(2)] = cljs_http.client.post);

(statearr_61373_61419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (12))){
var state_61358__$1 = state_61358;
var statearr_61374_61420 = state_61358__$1;
(statearr_61374_61420[(2)] = false);

(statearr_61374_61420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (2))){
var inst_61322 = (state_61358[(2)]);
var inst_61323 = (inst_61322.cljs$core$IFn$_invoke$arity$2 ? inst_61322.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61322.call(null,url,opts));
var state_61358__$1 = state_61358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61358__$1,(7),inst_61323);
} else {
if((state_val_61359 === (19))){
var inst_61356 = (state_61358[(2)]);
var state_61358__$1 = state_61358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61358__$1,inst_61356);
} else {
if((state_val_61359 === (11))){
var state_61358__$1 = state_61358;
var statearr_61375_61421 = state_61358__$1;
(statearr_61375_61421[(2)] = true);

(statearr_61375_61421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (9))){
var state_61358__$1 = state_61358;
var statearr_61376_61422 = state_61358__$1;
(statearr_61376_61422[(2)] = false);

(statearr_61376_61422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (5))){
var state_61358__$1 = state_61358;
var statearr_61377_61423 = state_61358__$1;
(statearr_61377_61423[(2)] = cljs_http.client.put);

(statearr_61377_61423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (14))){
var inst_61325 = (state_61358[(7)]);
var inst_61343 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61325);
var state_61358__$1 = state_61358;
var statearr_61378_61424 = state_61358__$1;
(statearr_61378_61424[(2)] = inst_61343);

(statearr_61378_61424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (16))){
var inst_61346 = (state_61358[(9)]);
var inst_61346__$1 = (state_61358[(2)]);
var inst_61347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61346__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61346__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61358__$1 = (function (){var statearr_61379 = state_61358;
(statearr_61379[(8)] = inst_61348);

(statearr_61379[(9)] = inst_61346__$1);

return statearr_61379;
})();
if(cljs.core.truth_(inst_61347)){
var statearr_61380_61425 = state_61358__$1;
(statearr_61380_61425[(1)] = (17));

} else {
var statearr_61381_61426 = state_61358__$1;
(statearr_61381_61426[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (10))){
var inst_61341 = (state_61358[(2)]);
var state_61358__$1 = state_61358;
if(cljs.core.truth_(inst_61341)){
var statearr_61382_61427 = state_61358__$1;
(statearr_61382_61427[(1)] = (14));

} else {
var statearr_61383_61428 = state_61358__$1;
(statearr_61383_61428[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (18))){
var inst_61346 = (state_61358[(9)]);
var inst_61353 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61346);
var inst_61354 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61353) : re_frame.core.dispatch.call(null,inst_61353));
var state_61358__$1 = state_61358;
var statearr_61384_61429 = state_61358__$1;
(statearr_61384_61429[(2)] = inst_61354);

(statearr_61384_61429[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61359 === (8))){
var inst_61325 = (state_61358[(7)]);
var inst_61330 = inst_61325.cljs$lang$protocol_mask$partition0$;
var inst_61331 = (inst_61330 & (64));
var inst_61332 = inst_61325.cljs$core$ISeq$;
var inst_61333 = (cljs.core.PROTOCOL_SENTINEL === inst_61332);
var inst_61334 = ((inst_61331) || (inst_61333));
var state_61358__$1 = state_61358;
if(cljs.core.truth_(inst_61334)){
var statearr_61385_61430 = state_61358__$1;
(statearr_61385_61430[(1)] = (11));

} else {
var statearr_61386_61431 = state_61358__$1;
(statearr_61386_61431[(1)] = (12));

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
var statearr_61387 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61387[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61387[(1)] = (1));

return statearr_61387;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61358){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61358);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61388){if((e61388 instanceof Object)){
var ex__36921__auto__ = e61388;
var statearr_61389_61432 = state_61358;
(statearr_61389_61432[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61388;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61433 = state_61358;
state_61358 = G__61433;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61358){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61390 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61390[(6)] = c__36985__auto__);

return statearr_61390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61311_61403,G__61312_61404) : re_frame.core.reg_fx.call(null,G__61311_61403,G__61312_61404));
var G__61391_61434 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61392_61435 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61393){
var map__61394 = p__61393;
var map__61394__$1 = (((((!((map__61394 == null))))?(((((map__61394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61394):map__61394);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61396 = action;
var G__61396__$1 = (((G__61396 instanceof cljs.core.Keyword))?G__61396.fqn:null);
switch (G__61396__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61396__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61391_61434,G__61392_61435) : re_frame.core.reg_fx.call(null,G__61391_61434,G__61392_61435));

//# sourceMappingURL=athens.effects.js.map
