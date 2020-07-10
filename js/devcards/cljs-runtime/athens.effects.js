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
var G__61399_61491 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61400_61492 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61399_61491,G__61400_61492) : re_frame.core.reg_fx.call(null,G__61399_61491,G__61400_61492));
var G__61401_61493 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61402_61494 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61401_61493,G__61402_61494) : re_frame.core.reg_fx.call(null,G__61401_61493,G__61402_61494));
var G__61403_61495 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61404_61496 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61403_61495,G__61404_61496) : re_frame.core.reg_fx.call(null,G__61403_61495,G__61404_61496));
var G__61405_61497 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61406_61498 = (function (p__61407){
var map__61408 = p__61407;
var map__61408__$1 = (((((!((map__61408 == null))))?(((((map__61408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61408):map__61408);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61452){
var state_val_61453 = (state_61452[(1)]);
if((state_val_61453 === (7))){
var inst_61419 = (state_61452[(7)]);
var inst_61419__$1 = (state_61452[(2)]);
var inst_61421 = (inst_61419__$1 == null);
var inst_61422 = cljs.core.not(inst_61421);
var state_61452__$1 = (function (){var statearr_61454 = state_61452;
(statearr_61454[(7)] = inst_61419__$1);

return statearr_61454;
})();
if(inst_61422){
var statearr_61455_61499 = state_61452__$1;
(statearr_61455_61499[(1)] = (8));

} else {
var statearr_61456_61500 = state_61452__$1;
(statearr_61456_61500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (1))){
var state_61452__$1 = state_61452;
var G__61457_61501 = method;
var G__61457_61502__$1 = (((G__61457_61501 instanceof cljs.core.Keyword))?G__61457_61501.fqn:null);
switch (G__61457_61502__$1) {
case "post":
var statearr_61458_61504 = state_61452__$1;
(statearr_61458_61504[(1)] = (3));


break;
case "get":
var statearr_61459_61505 = state_61452__$1;
(statearr_61459_61505[(1)] = (4));


break;
case "put":
var statearr_61460_61506 = state_61452__$1;
(statearr_61460_61506[(1)] = (5));


break;
case "delete":
var statearr_61461_61507 = state_61452__$1;
(statearr_61461_61507[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61457_61502__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (4))){
var state_61452__$1 = state_61452;
var statearr_61462_61508 = state_61452__$1;
(statearr_61462_61508[(2)] = cljs_http.client.get);

(statearr_61462_61508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (15))){
var inst_61419 = (state_61452[(7)]);
var state_61452__$1 = state_61452;
var statearr_61463_61509 = state_61452__$1;
(statearr_61463_61509[(2)] = inst_61419);

(statearr_61463_61509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (13))){
var inst_61432 = (state_61452[(2)]);
var state_61452__$1 = state_61452;
var statearr_61464_61510 = state_61452__$1;
(statearr_61464_61510[(2)] = inst_61432);

(statearr_61464_61510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (6))){
var state_61452__$1 = state_61452;
var statearr_61465_61511 = state_61452__$1;
(statearr_61465_61511[(2)] = cljs_http.client.delete$);

(statearr_61465_61511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (17))){
var inst_61442 = (state_61452[(8)]);
var inst_61444 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61442);
var inst_61445 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61444) : re_frame.core.dispatch.call(null,inst_61444));
var state_61452__$1 = state_61452;
var statearr_61466_61512 = state_61452__$1;
(statearr_61466_61512[(2)] = inst_61445);

(statearr_61466_61512[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (3))){
var state_61452__$1 = state_61452;
var statearr_61467_61513 = state_61452__$1;
(statearr_61467_61513[(2)] = cljs_http.client.post);

(statearr_61467_61513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (12))){
var state_61452__$1 = state_61452;
var statearr_61468_61514 = state_61452__$1;
(statearr_61468_61514[(2)] = false);

(statearr_61468_61514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (2))){
var inst_61416 = (state_61452[(2)]);
var inst_61417 = (inst_61416.cljs$core$IFn$_invoke$arity$2 ? inst_61416.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61416.call(null,url,opts));
var state_61452__$1 = state_61452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61452__$1,(7),inst_61417);
} else {
if((state_val_61453 === (19))){
var inst_61450 = (state_61452[(2)]);
var state_61452__$1 = state_61452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61452__$1,inst_61450);
} else {
if((state_val_61453 === (11))){
var state_61452__$1 = state_61452;
var statearr_61469_61515 = state_61452__$1;
(statearr_61469_61515[(2)] = true);

(statearr_61469_61515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (9))){
var state_61452__$1 = state_61452;
var statearr_61470_61516 = state_61452__$1;
(statearr_61470_61516[(2)] = false);

(statearr_61470_61516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (5))){
var state_61452__$1 = state_61452;
var statearr_61471_61517 = state_61452__$1;
(statearr_61471_61517[(2)] = cljs_http.client.put);

(statearr_61471_61517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (14))){
var inst_61419 = (state_61452[(7)]);
var inst_61437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61419);
var state_61452__$1 = state_61452;
var statearr_61472_61518 = state_61452__$1;
(statearr_61472_61518[(2)] = inst_61437);

(statearr_61472_61518[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (16))){
var inst_61440 = (state_61452[(9)]);
var inst_61440__$1 = (state_61452[(2)]);
var inst_61441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61440__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61440__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61452__$1 = (function (){var statearr_61473 = state_61452;
(statearr_61473[(9)] = inst_61440__$1);

(statearr_61473[(8)] = inst_61442);

return statearr_61473;
})();
if(cljs.core.truth_(inst_61441)){
var statearr_61474_61519 = state_61452__$1;
(statearr_61474_61519[(1)] = (17));

} else {
var statearr_61475_61520 = state_61452__$1;
(statearr_61475_61520[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (10))){
var inst_61435 = (state_61452[(2)]);
var state_61452__$1 = state_61452;
if(cljs.core.truth_(inst_61435)){
var statearr_61476_61521 = state_61452__$1;
(statearr_61476_61521[(1)] = (14));

} else {
var statearr_61477_61522 = state_61452__$1;
(statearr_61477_61522[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (18))){
var inst_61440 = (state_61452[(9)]);
var inst_61447 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61440);
var inst_61448 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61447) : re_frame.core.dispatch.call(null,inst_61447));
var state_61452__$1 = state_61452;
var statearr_61478_61523 = state_61452__$1;
(statearr_61478_61523[(2)] = inst_61448);

(statearr_61478_61523[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (8))){
var inst_61419 = (state_61452[(7)]);
var inst_61424 = inst_61419.cljs$lang$protocol_mask$partition0$;
var inst_61425 = (inst_61424 & (64));
var inst_61426 = inst_61419.cljs$core$ISeq$;
var inst_61427 = (cljs.core.PROTOCOL_SENTINEL === inst_61426);
var inst_61428 = ((inst_61425) || (inst_61427));
var state_61452__$1 = state_61452;
if(cljs.core.truth_(inst_61428)){
var statearr_61479_61524 = state_61452__$1;
(statearr_61479_61524[(1)] = (11));

} else {
var statearr_61480_61525 = state_61452__$1;
(statearr_61480_61525[(1)] = (12));

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
var statearr_61481 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61481[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61481[(1)] = (1));

return statearr_61481;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61452){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61452);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61482){if((e61482 instanceof Object)){
var ex__36951__auto__ = e61482;
var statearr_61483_61526 = state_61452;
(statearr_61483_61526[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61527 = state_61452;
state_61452 = G__61527;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61452){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61484 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61484[(6)] = c__37015__auto__);

return statearr_61484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61405_61497,G__61406_61498) : re_frame.core.reg_fx.call(null,G__61405_61497,G__61406_61498));
var G__61485_61528 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61486_61529 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61487){
var map__61488 = p__61487;
var map__61488__$1 = (((((!((map__61488 == null))))?(((((map__61488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61488):map__61488);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61490 = action;
var G__61490__$1 = (((G__61490 instanceof cljs.core.Keyword))?G__61490.fqn:null);
switch (G__61490__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61490__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61485_61528,G__61486_61529) : re_frame.core.reg_fx.call(null,G__61485_61528,G__61486_61529));

//# sourceMappingURL=athens.effects.js.map
