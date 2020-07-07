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
var G__61331_61423 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61332_61424 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61331_61423,G__61332_61424) : re_frame.core.reg_fx.call(null,G__61331_61423,G__61332_61424));
var G__61333_61425 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61334_61426 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61333_61425,G__61334_61426) : re_frame.core.reg_fx.call(null,G__61333_61425,G__61334_61426));
var G__61335_61427 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61336_61428 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61335_61427,G__61336_61428) : re_frame.core.reg_fx.call(null,G__61335_61427,G__61336_61428));
var G__61337_61429 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61338_61430 = (function (p__61339){
var map__61340 = p__61339;
var map__61340__$1 = (((((!((map__61340 == null))))?(((((map__61340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61340):map__61340);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37004__auto__ = (function (){var switch__36935__auto__ = (function (state_61384){
var state_val_61385 = (state_61384[(1)]);
if((state_val_61385 === (7))){
var inst_61351 = (state_61384[(7)]);
var inst_61351__$1 = (state_61384[(2)]);
var inst_61353 = (inst_61351__$1 == null);
var inst_61354 = cljs.core.not(inst_61353);
var state_61384__$1 = (function (){var statearr_61386 = state_61384;
(statearr_61386[(7)] = inst_61351__$1);

return statearr_61386;
})();
if(inst_61354){
var statearr_61387_61431 = state_61384__$1;
(statearr_61387_61431[(1)] = (8));

} else {
var statearr_61388_61432 = state_61384__$1;
(statearr_61388_61432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (1))){
var state_61384__$1 = state_61384;
var G__61389_61433 = method;
var G__61389_61434__$1 = (((G__61389_61433 instanceof cljs.core.Keyword))?G__61389_61433.fqn:null);
switch (G__61389_61434__$1) {
case "post":
var statearr_61390_61436 = state_61384__$1;
(statearr_61390_61436[(1)] = (3));


break;
case "get":
var statearr_61391_61437 = state_61384__$1;
(statearr_61391_61437[(1)] = (4));


break;
case "put":
var statearr_61392_61438 = state_61384__$1;
(statearr_61392_61438[(1)] = (5));


break;
case "delete":
var statearr_61393_61439 = state_61384__$1;
(statearr_61393_61439[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61389_61434__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (4))){
var state_61384__$1 = state_61384;
var statearr_61394_61440 = state_61384__$1;
(statearr_61394_61440[(2)] = cljs_http.client.get);

(statearr_61394_61440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (15))){
var inst_61351 = (state_61384[(7)]);
var state_61384__$1 = state_61384;
var statearr_61395_61441 = state_61384__$1;
(statearr_61395_61441[(2)] = inst_61351);

(statearr_61395_61441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (13))){
var inst_61364 = (state_61384[(2)]);
var state_61384__$1 = state_61384;
var statearr_61396_61442 = state_61384__$1;
(statearr_61396_61442[(2)] = inst_61364);

(statearr_61396_61442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (6))){
var state_61384__$1 = state_61384;
var statearr_61397_61443 = state_61384__$1;
(statearr_61397_61443[(2)] = cljs_http.client.delete$);

(statearr_61397_61443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (17))){
var inst_61374 = (state_61384[(8)]);
var inst_61376 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61374);
var inst_61377 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61376) : re_frame.core.dispatch.call(null,inst_61376));
var state_61384__$1 = state_61384;
var statearr_61398_61444 = state_61384__$1;
(statearr_61398_61444[(2)] = inst_61377);

(statearr_61398_61444[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (3))){
var state_61384__$1 = state_61384;
var statearr_61399_61445 = state_61384__$1;
(statearr_61399_61445[(2)] = cljs_http.client.post);

(statearr_61399_61445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (12))){
var state_61384__$1 = state_61384;
var statearr_61400_61446 = state_61384__$1;
(statearr_61400_61446[(2)] = false);

(statearr_61400_61446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (2))){
var inst_61348 = (state_61384[(2)]);
var inst_61349 = (inst_61348.cljs$core$IFn$_invoke$arity$2 ? inst_61348.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61348.call(null,url,opts));
var state_61384__$1 = state_61384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61384__$1,(7),inst_61349);
} else {
if((state_val_61385 === (19))){
var inst_61382 = (state_61384[(2)]);
var state_61384__$1 = state_61384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61384__$1,inst_61382);
} else {
if((state_val_61385 === (11))){
var state_61384__$1 = state_61384;
var statearr_61401_61447 = state_61384__$1;
(statearr_61401_61447[(2)] = true);

(statearr_61401_61447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (9))){
var state_61384__$1 = state_61384;
var statearr_61402_61448 = state_61384__$1;
(statearr_61402_61448[(2)] = false);

(statearr_61402_61448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (5))){
var state_61384__$1 = state_61384;
var statearr_61403_61449 = state_61384__$1;
(statearr_61403_61449[(2)] = cljs_http.client.put);

(statearr_61403_61449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (14))){
var inst_61351 = (state_61384[(7)]);
var inst_61369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61351);
var state_61384__$1 = state_61384;
var statearr_61404_61450 = state_61384__$1;
(statearr_61404_61450[(2)] = inst_61369);

(statearr_61404_61450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (16))){
var inst_61372 = (state_61384[(9)]);
var inst_61372__$1 = (state_61384[(2)]);
var inst_61373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61372__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61372__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61384__$1 = (function (){var statearr_61405 = state_61384;
(statearr_61405[(9)] = inst_61372__$1);

(statearr_61405[(8)] = inst_61374);

return statearr_61405;
})();
if(cljs.core.truth_(inst_61373)){
var statearr_61406_61451 = state_61384__$1;
(statearr_61406_61451[(1)] = (17));

} else {
var statearr_61407_61452 = state_61384__$1;
(statearr_61407_61452[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (10))){
var inst_61367 = (state_61384[(2)]);
var state_61384__$1 = state_61384;
if(cljs.core.truth_(inst_61367)){
var statearr_61408_61453 = state_61384__$1;
(statearr_61408_61453[(1)] = (14));

} else {
var statearr_61409_61454 = state_61384__$1;
(statearr_61409_61454[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (18))){
var inst_61372 = (state_61384[(9)]);
var inst_61379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61372);
var inst_61380 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61379) : re_frame.core.dispatch.call(null,inst_61379));
var state_61384__$1 = state_61384;
var statearr_61410_61455 = state_61384__$1;
(statearr_61410_61455[(2)] = inst_61380);

(statearr_61410_61455[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61385 === (8))){
var inst_61351 = (state_61384[(7)]);
var inst_61356 = inst_61351.cljs$lang$protocol_mask$partition0$;
var inst_61357 = (inst_61356 & (64));
var inst_61358 = inst_61351.cljs$core$ISeq$;
var inst_61359 = (cljs.core.PROTOCOL_SENTINEL === inst_61358);
var inst_61360 = ((inst_61357) || (inst_61359));
var state_61384__$1 = state_61384;
if(cljs.core.truth_(inst_61360)){
var statearr_61411_61456 = state_61384__$1;
(statearr_61411_61456[(1)] = (11));

} else {
var statearr_61412_61457 = state_61384__$1;
(statearr_61412_61457[(1)] = (12));

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
var athens$effects$state_machine__36936__auto__ = null;
var athens$effects$state_machine__36936__auto____0 = (function (){
var statearr_61413 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61413[(0)] = athens$effects$state_machine__36936__auto__);

(statearr_61413[(1)] = (1));

return statearr_61413;
});
var athens$effects$state_machine__36936__auto____1 = (function (state_61384){
while(true){
var ret_value__36937__auto__ = (function (){try{while(true){
var result__36938__auto__ = switch__36935__auto__(state_61384);
if(cljs.core.keyword_identical_QMARK_(result__36938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36938__auto__;
}
break;
}
}catch (e61414){if((e61414 instanceof Object)){
var ex__36939__auto__ = e61414;
var statearr_61415_61458 = state_61384;
(statearr_61415_61458[(5)] = ex__36939__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61459 = state_61384;
state_61384 = G__61459;
continue;
} else {
return ret_value__36937__auto__;
}
break;
}
});
athens$effects$state_machine__36936__auto__ = function(state_61384){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36936__auto____0.call(this);
case 1:
return athens$effects$state_machine__36936__auto____1.call(this,state_61384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36936__auto____0;
athens$effects$state_machine__36936__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36936__auto____1;
return athens$effects$state_machine__36936__auto__;
})()
})();
var state__37005__auto__ = (function (){var statearr_61416 = (f__37004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37004__auto__.cljs$core$IFn$_invoke$arity$0() : f__37004__auto__.call(null));
(statearr_61416[(6)] = c__37003__auto__);

return statearr_61416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37005__auto__);
}));

return c__37003__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61337_61429,G__61338_61430) : re_frame.core.reg_fx.call(null,G__61337_61429,G__61338_61430));
var G__61417_61460 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61418_61461 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61419){
var map__61420 = p__61419;
var map__61420__$1 = (((((!((map__61420 == null))))?(((((map__61420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61420):map__61420);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61422 = action;
var G__61422__$1 = (((G__61422 instanceof cljs.core.Keyword))?G__61422.fqn:null);
switch (G__61422__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61422__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61417_61460,G__61418_61461) : re_frame.core.reg_fx.call(null,G__61417_61460,G__61418_61461));

//# sourceMappingURL=athens.effects.js.map
