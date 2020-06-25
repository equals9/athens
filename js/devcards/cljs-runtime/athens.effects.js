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
var G__60360_60484 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60361_60485 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60360_60484,G__60361_60485) : re_frame.core.reg_fx.call(null,G__60360_60484,G__60361_60485));
var G__60362_60489 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60363_60490 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60362_60489,G__60363_60490) : re_frame.core.reg_fx.call(null,G__60362_60489,G__60363_60490));
var G__60364_60491 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60365_60492 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60364_60491,G__60365_60492) : re_frame.core.reg_fx.call(null,G__60364_60491,G__60365_60492));
var G__60366_60496 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60367_60497 = (function (p__60368){
var map__60369 = p__60368;
var map__60369__$1 = (((((!((map__60369 == null))))?(((((map__60369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60369):map__60369);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60415){
var state_val_60416 = (state_60415[(1)]);
if((state_val_60416 === (7))){
var inst_60381 = (state_60415[(7)]);
var inst_60381__$1 = (state_60415[(2)]);
var inst_60383 = (inst_60381__$1 == null);
var inst_60384 = cljs.core.not(inst_60383);
var state_60415__$1 = (function (){var statearr_60419 = state_60415;
(statearr_60419[(7)] = inst_60381__$1);

return statearr_60419;
})();
if(inst_60384){
var statearr_60420_60507 = state_60415__$1;
(statearr_60420_60507[(1)] = (8));

} else {
var statearr_60421_60508 = state_60415__$1;
(statearr_60421_60508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (1))){
var state_60415__$1 = state_60415;
var G__60422_60509 = method;
var G__60422_60510__$1 = (((G__60422_60509 instanceof cljs.core.Keyword))?G__60422_60509.fqn:null);
switch (G__60422_60510__$1) {
case "post":
var statearr_60424_60512 = state_60415__$1;
(statearr_60424_60512[(1)] = (3));


break;
case "get":
var statearr_60428_60513 = state_60415__$1;
(statearr_60428_60513[(1)] = (4));


break;
case "put":
var statearr_60429_60514 = state_60415__$1;
(statearr_60429_60514[(1)] = (5));


break;
case "delete":
var statearr_60430_60515 = state_60415__$1;
(statearr_60430_60515[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60422_60510__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (4))){
var state_60415__$1 = state_60415;
var statearr_60432_60516 = state_60415__$1;
(statearr_60432_60516[(2)] = cljs_http.client.get);

(statearr_60432_60516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (15))){
var inst_60381 = (state_60415[(7)]);
var state_60415__$1 = state_60415;
var statearr_60433_60517 = state_60415__$1;
(statearr_60433_60517[(2)] = inst_60381);

(statearr_60433_60517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (13))){
var inst_60395 = (state_60415[(2)]);
var state_60415__$1 = state_60415;
var statearr_60434_60518 = state_60415__$1;
(statearr_60434_60518[(2)] = inst_60395);

(statearr_60434_60518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (6))){
var state_60415__$1 = state_60415;
var statearr_60436_60520 = state_60415__$1;
(statearr_60436_60520[(2)] = cljs_http.client.delete$);

(statearr_60436_60520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (17))){
var inst_60405 = (state_60415[(8)]);
var inst_60407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60405);
var inst_60408 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60407) : re_frame.core.dispatch.call(null,inst_60407));
var state_60415__$1 = state_60415;
var statearr_60440_60521 = state_60415__$1;
(statearr_60440_60521[(2)] = inst_60408);

(statearr_60440_60521[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (3))){
var state_60415__$1 = state_60415;
var statearr_60445_60522 = state_60415__$1;
(statearr_60445_60522[(2)] = cljs_http.client.post);

(statearr_60445_60522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (12))){
var state_60415__$1 = state_60415;
var statearr_60446_60523 = state_60415__$1;
(statearr_60446_60523[(2)] = false);

(statearr_60446_60523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (2))){
var inst_60378 = (state_60415[(2)]);
var inst_60379 = (inst_60378.cljs$core$IFn$_invoke$arity$2 ? inst_60378.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60378.call(null,url,opts));
var state_60415__$1 = state_60415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60415__$1,(7),inst_60379);
} else {
if((state_val_60416 === (19))){
var inst_60413 = (state_60415[(2)]);
var state_60415__$1 = state_60415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60415__$1,inst_60413);
} else {
if((state_val_60416 === (11))){
var state_60415__$1 = state_60415;
var statearr_60451_60524 = state_60415__$1;
(statearr_60451_60524[(2)] = true);

(statearr_60451_60524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (9))){
var state_60415__$1 = state_60415;
var statearr_60452_60525 = state_60415__$1;
(statearr_60452_60525[(2)] = false);

(statearr_60452_60525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (5))){
var state_60415__$1 = state_60415;
var statearr_60454_60526 = state_60415__$1;
(statearr_60454_60526[(2)] = cljs_http.client.put);

(statearr_60454_60526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (14))){
var inst_60381 = (state_60415[(7)]);
var inst_60400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60381);
var state_60415__$1 = state_60415;
var statearr_60455_60527 = state_60415__$1;
(statearr_60455_60527[(2)] = inst_60400);

(statearr_60455_60527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (16))){
var inst_60403 = (state_60415[(9)]);
var inst_60403__$1 = (state_60415[(2)]);
var inst_60404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60403__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60403__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60415__$1 = (function (){var statearr_60456 = state_60415;
(statearr_60456[(9)] = inst_60403__$1);

(statearr_60456[(8)] = inst_60405);

return statearr_60456;
})();
if(cljs.core.truth_(inst_60404)){
var statearr_60457_60534 = state_60415__$1;
(statearr_60457_60534[(1)] = (17));

} else {
var statearr_60458_60535 = state_60415__$1;
(statearr_60458_60535[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (10))){
var inst_60398 = (state_60415[(2)]);
var state_60415__$1 = state_60415;
if(cljs.core.truth_(inst_60398)){
var statearr_60460_60536 = state_60415__$1;
(statearr_60460_60536[(1)] = (14));

} else {
var statearr_60464_60537 = state_60415__$1;
(statearr_60464_60537[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (18))){
var inst_60403 = (state_60415[(9)]);
var inst_60410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60403);
var inst_60411 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60410) : re_frame.core.dispatch.call(null,inst_60410));
var state_60415__$1 = state_60415;
var statearr_60465_60538 = state_60415__$1;
(statearr_60465_60538[(2)] = inst_60411);

(statearr_60465_60538[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60416 === (8))){
var inst_60381 = (state_60415[(7)]);
var inst_60386 = inst_60381.cljs$lang$protocol_mask$partition0$;
var inst_60387 = (inst_60386 & (64));
var inst_60388 = inst_60381.cljs$core$ISeq$;
var inst_60389 = (cljs.core.PROTOCOL_SENTINEL === inst_60388);
var inst_60390 = ((inst_60387) || (inst_60389));
var state_60415__$1 = state_60415;
if(cljs.core.truth_(inst_60390)){
var statearr_60469_60539 = state_60415__$1;
(statearr_60469_60539[(1)] = (11));

} else {
var statearr_60470_60540 = state_60415__$1;
(statearr_60470_60540[(1)] = (12));

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
var statearr_60471 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60471[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60471[(1)] = (1));

return statearr_60471;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60415){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60415);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60473){if((e60473 instanceof Object)){
var ex__34210__auto__ = e60473;
var statearr_60474_60541 = state_60415;
(statearr_60474_60541[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60542 = state_60415;
state_60415 = G__60542;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60415){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60475 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60475[(6)] = c__34274__auto__);

return statearr_60475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60366_60496,G__60367_60497) : re_frame.core.reg_fx.call(null,G__60366_60496,G__60367_60497));
var G__60477_60543 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60478_60544 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60479){
var map__60480 = p__60479;
var map__60480__$1 = (((((!((map__60480 == null))))?(((((map__60480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60480):map__60480);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60482 = action;
var G__60482__$1 = (((G__60482 instanceof cljs.core.Keyword))?G__60482.fqn:null);
switch (G__60482__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60482__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60477_60543,G__60478_60544) : re_frame.core.reg_fx.call(null,G__60477_60543,G__60478_60544));

//# sourceMappingURL=athens.effects.js.map
