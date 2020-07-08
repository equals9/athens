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
var G__61366_61458 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61367_61459 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61366_61458,G__61367_61459) : re_frame.core.reg_fx.call(null,G__61366_61458,G__61367_61459));
var G__61368_61460 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61369_61461 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61368_61460,G__61369_61461) : re_frame.core.reg_fx.call(null,G__61368_61460,G__61369_61461));
var G__61370_61462 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61371_61463 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61370_61462,G__61371_61463) : re_frame.core.reg_fx.call(null,G__61370_61462,G__61371_61463));
var G__61372_61464 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61373_61465 = (function (p__61374){
var map__61375 = p__61374;
var map__61375__$1 = (((((!((map__61375 == null))))?(((((map__61375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61375):map__61375);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61419){
var state_val_61420 = (state_61419[(1)]);
if((state_val_61420 === (7))){
var inst_61386 = (state_61419[(7)]);
var inst_61386__$1 = (state_61419[(2)]);
var inst_61388 = (inst_61386__$1 == null);
var inst_61389 = cljs.core.not(inst_61388);
var state_61419__$1 = (function (){var statearr_61421 = state_61419;
(statearr_61421[(7)] = inst_61386__$1);

return statearr_61421;
})();
if(inst_61389){
var statearr_61422_61466 = state_61419__$1;
(statearr_61422_61466[(1)] = (8));

} else {
var statearr_61423_61467 = state_61419__$1;
(statearr_61423_61467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (1))){
var state_61419__$1 = state_61419;
var G__61424_61468 = method;
var G__61424_61469__$1 = (((G__61424_61468 instanceof cljs.core.Keyword))?G__61424_61468.fqn:null);
switch (G__61424_61469__$1) {
case "post":
var statearr_61425_61471 = state_61419__$1;
(statearr_61425_61471[(1)] = (3));


break;
case "get":
var statearr_61426_61472 = state_61419__$1;
(statearr_61426_61472[(1)] = (4));


break;
case "put":
var statearr_61427_61473 = state_61419__$1;
(statearr_61427_61473[(1)] = (5));


break;
case "delete":
var statearr_61428_61474 = state_61419__$1;
(statearr_61428_61474[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61424_61469__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (4))){
var state_61419__$1 = state_61419;
var statearr_61429_61475 = state_61419__$1;
(statearr_61429_61475[(2)] = cljs_http.client.get);

(statearr_61429_61475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (15))){
var inst_61386 = (state_61419[(7)]);
var state_61419__$1 = state_61419;
var statearr_61430_61476 = state_61419__$1;
(statearr_61430_61476[(2)] = inst_61386);

(statearr_61430_61476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (13))){
var inst_61399 = (state_61419[(2)]);
var state_61419__$1 = state_61419;
var statearr_61431_61477 = state_61419__$1;
(statearr_61431_61477[(2)] = inst_61399);

(statearr_61431_61477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (6))){
var state_61419__$1 = state_61419;
var statearr_61432_61478 = state_61419__$1;
(statearr_61432_61478[(2)] = cljs_http.client.delete$);

(statearr_61432_61478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (17))){
var inst_61409 = (state_61419[(8)]);
var inst_61411 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61409);
var inst_61412 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61411) : re_frame.core.dispatch.call(null,inst_61411));
var state_61419__$1 = state_61419;
var statearr_61433_61479 = state_61419__$1;
(statearr_61433_61479[(2)] = inst_61412);

(statearr_61433_61479[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (3))){
var state_61419__$1 = state_61419;
var statearr_61434_61480 = state_61419__$1;
(statearr_61434_61480[(2)] = cljs_http.client.post);

(statearr_61434_61480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (12))){
var state_61419__$1 = state_61419;
var statearr_61435_61481 = state_61419__$1;
(statearr_61435_61481[(2)] = false);

(statearr_61435_61481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (2))){
var inst_61383 = (state_61419[(2)]);
var inst_61384 = (inst_61383.cljs$core$IFn$_invoke$arity$2 ? inst_61383.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61383.call(null,url,opts));
var state_61419__$1 = state_61419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61419__$1,(7),inst_61384);
} else {
if((state_val_61420 === (19))){
var inst_61417 = (state_61419[(2)]);
var state_61419__$1 = state_61419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61419__$1,inst_61417);
} else {
if((state_val_61420 === (11))){
var state_61419__$1 = state_61419;
var statearr_61436_61482 = state_61419__$1;
(statearr_61436_61482[(2)] = true);

(statearr_61436_61482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (9))){
var state_61419__$1 = state_61419;
var statearr_61437_61483 = state_61419__$1;
(statearr_61437_61483[(2)] = false);

(statearr_61437_61483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (5))){
var state_61419__$1 = state_61419;
var statearr_61438_61484 = state_61419__$1;
(statearr_61438_61484[(2)] = cljs_http.client.put);

(statearr_61438_61484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (14))){
var inst_61386 = (state_61419[(7)]);
var inst_61404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61386);
var state_61419__$1 = state_61419;
var statearr_61439_61485 = state_61419__$1;
(statearr_61439_61485[(2)] = inst_61404);

(statearr_61439_61485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (16))){
var inst_61407 = (state_61419[(9)]);
var inst_61407__$1 = (state_61419[(2)]);
var inst_61408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61407__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61407__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61419__$1 = (function (){var statearr_61440 = state_61419;
(statearr_61440[(9)] = inst_61407__$1);

(statearr_61440[(8)] = inst_61409);

return statearr_61440;
})();
if(cljs.core.truth_(inst_61408)){
var statearr_61441_61486 = state_61419__$1;
(statearr_61441_61486[(1)] = (17));

} else {
var statearr_61442_61487 = state_61419__$1;
(statearr_61442_61487[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (10))){
var inst_61402 = (state_61419[(2)]);
var state_61419__$1 = state_61419;
if(cljs.core.truth_(inst_61402)){
var statearr_61443_61488 = state_61419__$1;
(statearr_61443_61488[(1)] = (14));

} else {
var statearr_61444_61489 = state_61419__$1;
(statearr_61444_61489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (18))){
var inst_61407 = (state_61419[(9)]);
var inst_61414 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61407);
var inst_61415 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61414) : re_frame.core.dispatch.call(null,inst_61414));
var state_61419__$1 = state_61419;
var statearr_61445_61490 = state_61419__$1;
(statearr_61445_61490[(2)] = inst_61415);

(statearr_61445_61490[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61420 === (8))){
var inst_61386 = (state_61419[(7)]);
var inst_61391 = inst_61386.cljs$lang$protocol_mask$partition0$;
var inst_61392 = (inst_61391 & (64));
var inst_61393 = inst_61386.cljs$core$ISeq$;
var inst_61394 = (cljs.core.PROTOCOL_SENTINEL === inst_61393);
var inst_61395 = ((inst_61392) || (inst_61394));
var state_61419__$1 = state_61419;
if(cljs.core.truth_(inst_61395)){
var statearr_61446_61491 = state_61419__$1;
(statearr_61446_61491[(1)] = (11));

} else {
var statearr_61447_61492 = state_61419__$1;
(statearr_61447_61492[(1)] = (12));

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
var athens$effects$state_machine__36948__auto__ = null;
var athens$effects$state_machine__36948__auto____0 = (function (){
var statearr_61448 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61448[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61448[(1)] = (1));

return statearr_61448;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61419){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61419);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61449){if((e61449 instanceof Object)){
var ex__36951__auto__ = e61449;
var statearr_61450_61493 = state_61419;
(statearr_61450_61493[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61494 = state_61419;
state_61419 = G__61494;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61419){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61451 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61451[(6)] = c__37015__auto__);

return statearr_61451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61372_61464,G__61373_61465) : re_frame.core.reg_fx.call(null,G__61372_61464,G__61373_61465));
var G__61452_61495 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61453_61496 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61454){
var map__61455 = p__61454;
var map__61455__$1 = (((((!((map__61455 == null))))?(((((map__61455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61455):map__61455);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61455__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61455__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61455__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61457 = action;
var G__61457__$1 = (((G__61457 instanceof cljs.core.Keyword))?G__61457.fqn:null);
switch (G__61457__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61457__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61452_61495,G__61453_61496) : re_frame.core.reg_fx.call(null,G__61452_61495,G__61453_61496));

//# sourceMappingURL=athens.effects.js.map
