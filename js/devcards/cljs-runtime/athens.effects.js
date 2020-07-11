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
var G__61382_61474 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61383_61475 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61382_61474,G__61383_61475) : re_frame.core.reg_fx.call(null,G__61382_61474,G__61383_61475));
var G__61384_61476 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61385_61477 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61384_61476,G__61385_61477) : re_frame.core.reg_fx.call(null,G__61384_61476,G__61385_61477));
var G__61386_61478 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61387_61479 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61386_61478,G__61387_61479) : re_frame.core.reg_fx.call(null,G__61386_61478,G__61387_61479));
var G__61388_61480 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61389_61481 = (function (p__61390){
var map__61391 = p__61390;
var map__61391__$1 = (((((!((map__61391 == null))))?(((((map__61391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61391):map__61391);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61435){
var state_val_61436 = (state_61435[(1)]);
if((state_val_61436 === (7))){
var inst_61402 = (state_61435[(7)]);
var inst_61402__$1 = (state_61435[(2)]);
var inst_61404 = (inst_61402__$1 == null);
var inst_61405 = cljs.core.not(inst_61404);
var state_61435__$1 = (function (){var statearr_61437 = state_61435;
(statearr_61437[(7)] = inst_61402__$1);

return statearr_61437;
})();
if(inst_61405){
var statearr_61438_61482 = state_61435__$1;
(statearr_61438_61482[(1)] = (8));

} else {
var statearr_61439_61483 = state_61435__$1;
(statearr_61439_61483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (1))){
var state_61435__$1 = state_61435;
var G__61440_61484 = method;
var G__61440_61485__$1 = (((G__61440_61484 instanceof cljs.core.Keyword))?G__61440_61484.fqn:null);
switch (G__61440_61485__$1) {
case "post":
var statearr_61441_61487 = state_61435__$1;
(statearr_61441_61487[(1)] = (3));


break;
case "get":
var statearr_61442_61488 = state_61435__$1;
(statearr_61442_61488[(1)] = (4));


break;
case "put":
var statearr_61443_61489 = state_61435__$1;
(statearr_61443_61489[(1)] = (5));


break;
case "delete":
var statearr_61444_61490 = state_61435__$1;
(statearr_61444_61490[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61440_61485__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (4))){
var state_61435__$1 = state_61435;
var statearr_61445_61491 = state_61435__$1;
(statearr_61445_61491[(2)] = cljs_http.client.get);

(statearr_61445_61491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (15))){
var inst_61402 = (state_61435[(7)]);
var state_61435__$1 = state_61435;
var statearr_61446_61492 = state_61435__$1;
(statearr_61446_61492[(2)] = inst_61402);

(statearr_61446_61492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (13))){
var inst_61415 = (state_61435[(2)]);
var state_61435__$1 = state_61435;
var statearr_61447_61493 = state_61435__$1;
(statearr_61447_61493[(2)] = inst_61415);

(statearr_61447_61493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (6))){
var state_61435__$1 = state_61435;
var statearr_61448_61494 = state_61435__$1;
(statearr_61448_61494[(2)] = cljs_http.client.delete$);

(statearr_61448_61494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (17))){
var inst_61425 = (state_61435[(8)]);
var inst_61427 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61425);
var inst_61428 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61427) : re_frame.core.dispatch.call(null,inst_61427));
var state_61435__$1 = state_61435;
var statearr_61449_61495 = state_61435__$1;
(statearr_61449_61495[(2)] = inst_61428);

(statearr_61449_61495[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (3))){
var state_61435__$1 = state_61435;
var statearr_61450_61496 = state_61435__$1;
(statearr_61450_61496[(2)] = cljs_http.client.post);

(statearr_61450_61496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (12))){
var state_61435__$1 = state_61435;
var statearr_61451_61497 = state_61435__$1;
(statearr_61451_61497[(2)] = false);

(statearr_61451_61497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (2))){
var inst_61399 = (state_61435[(2)]);
var inst_61400 = (inst_61399.cljs$core$IFn$_invoke$arity$2 ? inst_61399.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61399.call(null,url,opts));
var state_61435__$1 = state_61435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61435__$1,(7),inst_61400);
} else {
if((state_val_61436 === (19))){
var inst_61433 = (state_61435[(2)]);
var state_61435__$1 = state_61435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61435__$1,inst_61433);
} else {
if((state_val_61436 === (11))){
var state_61435__$1 = state_61435;
var statearr_61452_61498 = state_61435__$1;
(statearr_61452_61498[(2)] = true);

(statearr_61452_61498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (9))){
var state_61435__$1 = state_61435;
var statearr_61453_61499 = state_61435__$1;
(statearr_61453_61499[(2)] = false);

(statearr_61453_61499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (5))){
var state_61435__$1 = state_61435;
var statearr_61454_61500 = state_61435__$1;
(statearr_61454_61500[(2)] = cljs_http.client.put);

(statearr_61454_61500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (14))){
var inst_61402 = (state_61435[(7)]);
var inst_61420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61402);
var state_61435__$1 = state_61435;
var statearr_61455_61501 = state_61435__$1;
(statearr_61455_61501[(2)] = inst_61420);

(statearr_61455_61501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (16))){
var inst_61423 = (state_61435[(9)]);
var inst_61423__$1 = (state_61435[(2)]);
var inst_61424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61423__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61423__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61435__$1 = (function (){var statearr_61456 = state_61435;
(statearr_61456[(8)] = inst_61425);

(statearr_61456[(9)] = inst_61423__$1);

return statearr_61456;
})();
if(cljs.core.truth_(inst_61424)){
var statearr_61457_61502 = state_61435__$1;
(statearr_61457_61502[(1)] = (17));

} else {
var statearr_61458_61503 = state_61435__$1;
(statearr_61458_61503[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (10))){
var inst_61418 = (state_61435[(2)]);
var state_61435__$1 = state_61435;
if(cljs.core.truth_(inst_61418)){
var statearr_61459_61504 = state_61435__$1;
(statearr_61459_61504[(1)] = (14));

} else {
var statearr_61460_61505 = state_61435__$1;
(statearr_61460_61505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (18))){
var inst_61423 = (state_61435[(9)]);
var inst_61430 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61423);
var inst_61431 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61430) : re_frame.core.dispatch.call(null,inst_61430));
var state_61435__$1 = state_61435;
var statearr_61461_61506 = state_61435__$1;
(statearr_61461_61506[(2)] = inst_61431);

(statearr_61461_61506[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61436 === (8))){
var inst_61402 = (state_61435[(7)]);
var inst_61407 = inst_61402.cljs$lang$protocol_mask$partition0$;
var inst_61408 = (inst_61407 & (64));
var inst_61409 = inst_61402.cljs$core$ISeq$;
var inst_61410 = (cljs.core.PROTOCOL_SENTINEL === inst_61409);
var inst_61411 = ((inst_61408) || (inst_61410));
var state_61435__$1 = state_61435;
if(cljs.core.truth_(inst_61411)){
var statearr_61462_61507 = state_61435__$1;
(statearr_61462_61507[(1)] = (11));

} else {
var statearr_61463_61508 = state_61435__$1;
(statearr_61463_61508[(1)] = (12));

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
var statearr_61464 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61464[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61464[(1)] = (1));

return statearr_61464;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61435){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61435);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61465){if((e61465 instanceof Object)){
var ex__36951__auto__ = e61465;
var statearr_61466_61509 = state_61435;
(statearr_61466_61509[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61510 = state_61435;
state_61435 = G__61510;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61435){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61467 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61467[(6)] = c__37015__auto__);

return statearr_61467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61388_61480,G__61389_61481) : re_frame.core.reg_fx.call(null,G__61388_61480,G__61389_61481));
var G__61468_61511 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61469_61512 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61470){
var map__61471 = p__61470;
var map__61471__$1 = (((((!((map__61471 == null))))?(((((map__61471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61471):map__61471);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61473 = action;
var G__61473__$1 = (((G__61473 instanceof cljs.core.Keyword))?G__61473.fqn:null);
switch (G__61473__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61473__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61468_61511,G__61469_61512) : re_frame.core.reg_fx.call(null,G__61468_61511,G__61469_61512));

//# sourceMappingURL=athens.effects.js.map
