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
var G__60361_60499 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60362_60500 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60361_60499,G__60362_60500) : re_frame.core.reg_fx.call(null,G__60361_60499,G__60362_60500));
var G__60364_60501 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60365_60502 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60364_60501,G__60365_60502) : re_frame.core.reg_fx.call(null,G__60364_60501,G__60365_60502));
var G__60366_60503 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60367_60504 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60366_60503,G__60367_60504) : re_frame.core.reg_fx.call(null,G__60366_60503,G__60367_60504));
var G__60368_60505 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60369_60506 = (function (p__60370){
var map__60371 = p__60370;
var map__60371__$1 = (((((!((map__60371 == null))))?(((((map__60371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60371):map__60371);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60417){
var state_val_60418 = (state_60417[(1)]);
if((state_val_60418 === (7))){
var inst_60383 = (state_60417[(7)]);
var inst_60383__$1 = (state_60417[(2)]);
var inst_60385 = (inst_60383__$1 == null);
var inst_60386 = cljs.core.not(inst_60385);
var state_60417__$1 = (function (){var statearr_60432 = state_60417;
(statearr_60432[(7)] = inst_60383__$1);

return statearr_60432;
})();
if(inst_60386){
var statearr_60433_60508 = state_60417__$1;
(statearr_60433_60508[(1)] = (8));

} else {
var statearr_60434_60509 = state_60417__$1;
(statearr_60434_60509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (1))){
var state_60417__$1 = state_60417;
var G__60436_60510 = method;
var G__60436_60511__$1 = (((G__60436_60510 instanceof cljs.core.Keyword))?G__60436_60510.fqn:null);
switch (G__60436_60511__$1) {
case "post":
var statearr_60440_60513 = state_60417__$1;
(statearr_60440_60513[(1)] = (3));


break;
case "get":
var statearr_60441_60514 = state_60417__$1;
(statearr_60441_60514[(1)] = (4));


break;
case "put":
var statearr_60442_60515 = state_60417__$1;
(statearr_60442_60515[(1)] = (5));


break;
case "delete":
var statearr_60443_60516 = state_60417__$1;
(statearr_60443_60516[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60436_60511__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (4))){
var state_60417__$1 = state_60417;
var statearr_60444_60517 = state_60417__$1;
(statearr_60444_60517[(2)] = cljs_http.client.get);

(statearr_60444_60517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (15))){
var inst_60383 = (state_60417[(7)]);
var state_60417__$1 = state_60417;
var statearr_60446_60523 = state_60417__$1;
(statearr_60446_60523[(2)] = inst_60383);

(statearr_60446_60523[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (13))){
var inst_60396 = (state_60417[(2)]);
var state_60417__$1 = state_60417;
var statearr_60447_60525 = state_60417__$1;
(statearr_60447_60525[(2)] = inst_60396);

(statearr_60447_60525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (6))){
var state_60417__$1 = state_60417;
var statearr_60448_60526 = state_60417__$1;
(statearr_60448_60526[(2)] = cljs_http.client.delete$);

(statearr_60448_60526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (17))){
var inst_60407 = (state_60417[(8)]);
var inst_60409 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60407);
var inst_60410 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60409) : re_frame.core.dispatch.call(null,inst_60409));
var state_60417__$1 = state_60417;
var statearr_60449_60527 = state_60417__$1;
(statearr_60449_60527[(2)] = inst_60410);

(statearr_60449_60527[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (3))){
var state_60417__$1 = state_60417;
var statearr_60450_60528 = state_60417__$1;
(statearr_60450_60528[(2)] = cljs_http.client.post);

(statearr_60450_60528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (12))){
var state_60417__$1 = state_60417;
var statearr_60455_60529 = state_60417__$1;
(statearr_60455_60529[(2)] = false);

(statearr_60455_60529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (2))){
var inst_60380 = (state_60417[(2)]);
var inst_60381 = (inst_60380.cljs$core$IFn$_invoke$arity$2 ? inst_60380.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60380.call(null,url,opts));
var state_60417__$1 = state_60417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60417__$1,(7),inst_60381);
} else {
if((state_val_60418 === (19))){
var inst_60415 = (state_60417[(2)]);
var state_60417__$1 = state_60417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60417__$1,inst_60415);
} else {
if((state_val_60418 === (11))){
var state_60417__$1 = state_60417;
var statearr_60459_60530 = state_60417__$1;
(statearr_60459_60530[(2)] = true);

(statearr_60459_60530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (9))){
var state_60417__$1 = state_60417;
var statearr_60460_60531 = state_60417__$1;
(statearr_60460_60531[(2)] = false);

(statearr_60460_60531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (5))){
var state_60417__$1 = state_60417;
var statearr_60461_60532 = state_60417__$1;
(statearr_60461_60532[(2)] = cljs_http.client.put);

(statearr_60461_60532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (14))){
var inst_60383 = (state_60417[(7)]);
var inst_60401 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60383);
var state_60417__$1 = state_60417;
var statearr_60463_60533 = state_60417__$1;
(statearr_60463_60533[(2)] = inst_60401);

(statearr_60463_60533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (16))){
var inst_60404 = (state_60417[(9)]);
var inst_60404__$1 = (state_60417[(2)]);
var inst_60405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60404__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60404__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60417__$1 = (function (){var statearr_60464 = state_60417;
(statearr_60464[(9)] = inst_60404__$1);

(statearr_60464[(8)] = inst_60407);

return statearr_60464;
})();
if(cljs.core.truth_(inst_60405)){
var statearr_60466_60534 = state_60417__$1;
(statearr_60466_60534[(1)] = (17));

} else {
var statearr_60467_60535 = state_60417__$1;
(statearr_60467_60535[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (10))){
var inst_60399 = (state_60417[(2)]);
var state_60417__$1 = state_60417;
if(cljs.core.truth_(inst_60399)){
var statearr_60468_60536 = state_60417__$1;
(statearr_60468_60536[(1)] = (14));

} else {
var statearr_60469_60537 = state_60417__$1;
(statearr_60469_60537[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (18))){
var inst_60404 = (state_60417[(9)]);
var inst_60412 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60404);
var inst_60413 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60412) : re_frame.core.dispatch.call(null,inst_60412));
var state_60417__$1 = state_60417;
var statearr_60470_60538 = state_60417__$1;
(statearr_60470_60538[(2)] = inst_60413);

(statearr_60470_60538[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60418 === (8))){
var inst_60383 = (state_60417[(7)]);
var inst_60388 = inst_60383.cljs$lang$protocol_mask$partition0$;
var inst_60389 = (inst_60388 & (64));
var inst_60390 = inst_60383.cljs$core$ISeq$;
var inst_60391 = (cljs.core.PROTOCOL_SENTINEL === inst_60390);
var inst_60392 = ((inst_60389) || (inst_60391));
var state_60417__$1 = state_60417;
if(cljs.core.truth_(inst_60392)){
var statearr_60471_60539 = state_60417__$1;
(statearr_60471_60539[(1)] = (11));

} else {
var statearr_60473_60540 = state_60417__$1;
(statearr_60473_60540[(1)] = (12));

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
var statearr_60474 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60474[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60474[(1)] = (1));

return statearr_60474;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60417){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60417);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60475){if((e60475 instanceof Object)){
var ex__34210__auto__ = e60475;
var statearr_60476_60541 = state_60417;
(statearr_60476_60541[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60542 = state_60417;
state_60417 = G__60542;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60417){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60480 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60480[(6)] = c__34274__auto__);

return statearr_60480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60368_60505,G__60369_60506) : re_frame.core.reg_fx.call(null,G__60368_60505,G__60369_60506));
var G__60481_60543 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60482_60544 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60486){
var map__60487 = p__60486;
var map__60487__$1 = (((((!((map__60487 == null))))?(((((map__60487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60487):map__60487);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60492 = action;
var G__60492__$1 = (((G__60492 instanceof cljs.core.Keyword))?G__60492.fqn:null);
switch (G__60492__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60492__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60481_60543,G__60482_60544) : re_frame.core.reg_fx.call(null,G__60481_60543,G__60482_60544));

//# sourceMappingURL=athens.effects.js.map
