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
var G__61425_61517 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61426_61518 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61425_61517,G__61426_61518) : re_frame.core.reg_fx.call(null,G__61425_61517,G__61426_61518));
var G__61427_61519 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61428_61520 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61427_61519,G__61428_61520) : re_frame.core.reg_fx.call(null,G__61427_61519,G__61428_61520));
var G__61429_61521 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61430_61522 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61429_61521,G__61430_61522) : re_frame.core.reg_fx.call(null,G__61429_61521,G__61430_61522));
var G__61431_61523 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61432_61524 = (function (p__61433){
var map__61434 = p__61433;
var map__61434__$1 = (((((!((map__61434 == null))))?(((((map__61434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61434):map__61434);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61478){
var state_val_61479 = (state_61478[(1)]);
if((state_val_61479 === (7))){
var inst_61445 = (state_61478[(7)]);
var inst_61445__$1 = (state_61478[(2)]);
var inst_61447 = (inst_61445__$1 == null);
var inst_61448 = cljs.core.not(inst_61447);
var state_61478__$1 = (function (){var statearr_61480 = state_61478;
(statearr_61480[(7)] = inst_61445__$1);

return statearr_61480;
})();
if(inst_61448){
var statearr_61481_61525 = state_61478__$1;
(statearr_61481_61525[(1)] = (8));

} else {
var statearr_61482_61526 = state_61478__$1;
(statearr_61482_61526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (1))){
var state_61478__$1 = state_61478;
var G__61483_61527 = method;
var G__61483_61528__$1 = (((G__61483_61527 instanceof cljs.core.Keyword))?G__61483_61527.fqn:null);
switch (G__61483_61528__$1) {
case "post":
var statearr_61484_61530 = state_61478__$1;
(statearr_61484_61530[(1)] = (3));


break;
case "get":
var statearr_61485_61531 = state_61478__$1;
(statearr_61485_61531[(1)] = (4));


break;
case "put":
var statearr_61486_61532 = state_61478__$1;
(statearr_61486_61532[(1)] = (5));


break;
case "delete":
var statearr_61487_61533 = state_61478__$1;
(statearr_61487_61533[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61483_61528__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (4))){
var state_61478__$1 = state_61478;
var statearr_61488_61534 = state_61478__$1;
(statearr_61488_61534[(2)] = cljs_http.client.get);

(statearr_61488_61534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (15))){
var inst_61445 = (state_61478[(7)]);
var state_61478__$1 = state_61478;
var statearr_61489_61535 = state_61478__$1;
(statearr_61489_61535[(2)] = inst_61445);

(statearr_61489_61535[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (13))){
var inst_61458 = (state_61478[(2)]);
var state_61478__$1 = state_61478;
var statearr_61490_61536 = state_61478__$1;
(statearr_61490_61536[(2)] = inst_61458);

(statearr_61490_61536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (6))){
var state_61478__$1 = state_61478;
var statearr_61491_61537 = state_61478__$1;
(statearr_61491_61537[(2)] = cljs_http.client.delete$);

(statearr_61491_61537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (17))){
var inst_61468 = (state_61478[(8)]);
var inst_61470 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61468);
var inst_61471 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61470) : re_frame.core.dispatch.call(null,inst_61470));
var state_61478__$1 = state_61478;
var statearr_61492_61538 = state_61478__$1;
(statearr_61492_61538[(2)] = inst_61471);

(statearr_61492_61538[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (3))){
var state_61478__$1 = state_61478;
var statearr_61493_61539 = state_61478__$1;
(statearr_61493_61539[(2)] = cljs_http.client.post);

(statearr_61493_61539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (12))){
var state_61478__$1 = state_61478;
var statearr_61494_61540 = state_61478__$1;
(statearr_61494_61540[(2)] = false);

(statearr_61494_61540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (2))){
var inst_61442 = (state_61478[(2)]);
var inst_61443 = (inst_61442.cljs$core$IFn$_invoke$arity$2 ? inst_61442.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61442.call(null,url,opts));
var state_61478__$1 = state_61478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61478__$1,(7),inst_61443);
} else {
if((state_val_61479 === (19))){
var inst_61476 = (state_61478[(2)]);
var state_61478__$1 = state_61478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61478__$1,inst_61476);
} else {
if((state_val_61479 === (11))){
var state_61478__$1 = state_61478;
var statearr_61495_61541 = state_61478__$1;
(statearr_61495_61541[(2)] = true);

(statearr_61495_61541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (9))){
var state_61478__$1 = state_61478;
var statearr_61496_61542 = state_61478__$1;
(statearr_61496_61542[(2)] = false);

(statearr_61496_61542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (5))){
var state_61478__$1 = state_61478;
var statearr_61497_61543 = state_61478__$1;
(statearr_61497_61543[(2)] = cljs_http.client.put);

(statearr_61497_61543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (14))){
var inst_61445 = (state_61478[(7)]);
var inst_61463 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61445);
var state_61478__$1 = state_61478;
var statearr_61498_61544 = state_61478__$1;
(statearr_61498_61544[(2)] = inst_61463);

(statearr_61498_61544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (16))){
var inst_61466 = (state_61478[(9)]);
var inst_61466__$1 = (state_61478[(2)]);
var inst_61467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61466__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61466__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61478__$1 = (function (){var statearr_61499 = state_61478;
(statearr_61499[(8)] = inst_61468);

(statearr_61499[(9)] = inst_61466__$1);

return statearr_61499;
})();
if(cljs.core.truth_(inst_61467)){
var statearr_61500_61545 = state_61478__$1;
(statearr_61500_61545[(1)] = (17));

} else {
var statearr_61501_61546 = state_61478__$1;
(statearr_61501_61546[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (10))){
var inst_61461 = (state_61478[(2)]);
var state_61478__$1 = state_61478;
if(cljs.core.truth_(inst_61461)){
var statearr_61502_61547 = state_61478__$1;
(statearr_61502_61547[(1)] = (14));

} else {
var statearr_61503_61548 = state_61478__$1;
(statearr_61503_61548[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (18))){
var inst_61466 = (state_61478[(9)]);
var inst_61473 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61466);
var inst_61474 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61473) : re_frame.core.dispatch.call(null,inst_61473));
var state_61478__$1 = state_61478;
var statearr_61504_61549 = state_61478__$1;
(statearr_61504_61549[(2)] = inst_61474);

(statearr_61504_61549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (8))){
var inst_61445 = (state_61478[(7)]);
var inst_61450 = inst_61445.cljs$lang$protocol_mask$partition0$;
var inst_61451 = (inst_61450 & (64));
var inst_61452 = inst_61445.cljs$core$ISeq$;
var inst_61453 = (cljs.core.PROTOCOL_SENTINEL === inst_61452);
var inst_61454 = ((inst_61451) || (inst_61453));
var state_61478__$1 = state_61478;
if(cljs.core.truth_(inst_61454)){
var statearr_61505_61550 = state_61478__$1;
(statearr_61505_61550[(1)] = (11));

} else {
var statearr_61506_61551 = state_61478__$1;
(statearr_61506_61551[(1)] = (12));

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
var statearr_61507 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61507[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61507[(1)] = (1));

return statearr_61507;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61478){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61478);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61508){if((e61508 instanceof Object)){
var ex__36951__auto__ = e61508;
var statearr_61509_61552 = state_61478;
(statearr_61509_61552[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61553 = state_61478;
state_61478 = G__61553;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61478){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61510 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61510[(6)] = c__37015__auto__);

return statearr_61510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61431_61523,G__61432_61524) : re_frame.core.reg_fx.call(null,G__61431_61523,G__61432_61524));
var G__61511_61554 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61512_61555 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61513){
var map__61514 = p__61513;
var map__61514__$1 = (((((!((map__61514 == null))))?(((((map__61514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61514):map__61514);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61516 = action;
var G__61516__$1 = (((G__61516 instanceof cljs.core.Keyword))?G__61516.fqn:null);
switch (G__61516__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61516__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61511_61554,G__61512_61555) : re_frame.core.reg_fx.call(null,G__61511_61554,G__61512_61555));

//# sourceMappingURL=athens.effects.js.map
