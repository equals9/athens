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
var G__60351_60523 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60352_60524 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60351_60523,G__60352_60524) : re_frame.core.reg_fx.call(null,G__60351_60523,G__60352_60524));
var G__60353_60532 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60354_60533 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60353_60532,G__60354_60533) : re_frame.core.reg_fx.call(null,G__60353_60532,G__60354_60533));
var G__60355_60534 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60356_60535 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60355_60534,G__60356_60535) : re_frame.core.reg_fx.call(null,G__60355_60534,G__60356_60535));
var G__60358_60536 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60359_60537 = (function (p__60360){
var map__60361 = p__60360;
var map__60361__$1 = (((((!((map__60361 == null))))?(((((map__60361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60361):map__60361);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60361__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60361__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60361__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60361__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60361__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60419){
var state_val_60420 = (state_60419[(1)]);
if((state_val_60420 === (7))){
var inst_60378 = (state_60419[(7)]);
var inst_60378__$1 = (state_60419[(2)]);
var inst_60381 = (inst_60378__$1 == null);
var inst_60382 = cljs.core.not(inst_60381);
var state_60419__$1 = (function (){var statearr_60426 = state_60419;
(statearr_60426[(7)] = inst_60378__$1);

return statearr_60426;
})();
if(inst_60382){
var statearr_60427_60542 = state_60419__$1;
(statearr_60427_60542[(1)] = (8));

} else {
var statearr_60428_60550 = state_60419__$1;
(statearr_60428_60550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (1))){
var state_60419__$1 = state_60419;
var G__60429_60551 = method;
var G__60429_60552__$1 = (((G__60429_60551 instanceof cljs.core.Keyword))?G__60429_60551.fqn:null);
switch (G__60429_60552__$1) {
case "post":
var statearr_60430_60554 = state_60419__$1;
(statearr_60430_60554[(1)] = (3));


break;
case "get":
var statearr_60431_60555 = state_60419__$1;
(statearr_60431_60555[(1)] = (4));


break;
case "put":
var statearr_60432_60556 = state_60419__$1;
(statearr_60432_60556[(1)] = (5));


break;
case "delete":
var statearr_60442_60557 = state_60419__$1;
(statearr_60442_60557[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60429_60552__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (4))){
var state_60419__$1 = state_60419;
var statearr_60443_60566 = state_60419__$1;
(statearr_60443_60566[(2)] = cljs_http.client.get);

(statearr_60443_60566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (15))){
var inst_60378 = (state_60419[(7)]);
var state_60419__$1 = state_60419;
var statearr_60444_60568 = state_60419__$1;
(statearr_60444_60568[(2)] = inst_60378);

(statearr_60444_60568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (13))){
var inst_60395 = (state_60419[(2)]);
var state_60419__$1 = state_60419;
var statearr_60449_60576 = state_60419__$1;
(statearr_60449_60576[(2)] = inst_60395);

(statearr_60449_60576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (6))){
var state_60419__$1 = state_60419;
var statearr_60450_60577 = state_60419__$1;
(statearr_60450_60577[(2)] = cljs_http.client.delete$);

(statearr_60450_60577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (17))){
var inst_60405 = (state_60419[(8)]);
var inst_60407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60405);
var inst_60408 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60407) : re_frame.core.dispatch.call(null,inst_60407));
var state_60419__$1 = state_60419;
var statearr_60454_60582 = state_60419__$1;
(statearr_60454_60582[(2)] = inst_60408);

(statearr_60454_60582[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (3))){
var state_60419__$1 = state_60419;
var statearr_60455_60583 = state_60419__$1;
(statearr_60455_60583[(2)] = cljs_http.client.post);

(statearr_60455_60583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (12))){
var state_60419__$1 = state_60419;
var statearr_60458_60584 = state_60419__$1;
(statearr_60458_60584[(2)] = false);

(statearr_60458_60584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (2))){
var inst_60375 = (state_60419[(2)]);
var inst_60376 = (inst_60375.cljs$core$IFn$_invoke$arity$2 ? inst_60375.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60375.call(null,url,opts));
var state_60419__$1 = state_60419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60419__$1,(7),inst_60376);
} else {
if((state_val_60420 === (19))){
var inst_60414 = (state_60419[(2)]);
var state_60419__$1 = state_60419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60419__$1,inst_60414);
} else {
if((state_val_60420 === (11))){
var state_60419__$1 = state_60419;
var statearr_60461_60586 = state_60419__$1;
(statearr_60461_60586[(2)] = true);

(statearr_60461_60586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (9))){
var state_60419__$1 = state_60419;
var statearr_60465_60587 = state_60419__$1;
(statearr_60465_60587[(2)] = false);

(statearr_60465_60587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (5))){
var state_60419__$1 = state_60419;
var statearr_60466_60588 = state_60419__$1;
(statearr_60466_60588[(2)] = cljs_http.client.put);

(statearr_60466_60588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (14))){
var inst_60378 = (state_60419[(7)]);
var inst_60400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60378);
var state_60419__$1 = state_60419;
var statearr_60468_60589 = state_60419__$1;
(statearr_60468_60589[(2)] = inst_60400);

(statearr_60468_60589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (16))){
var inst_60403 = (state_60419[(9)]);
var inst_60403__$1 = (state_60419[(2)]);
var inst_60404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60403__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60403__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60419__$1 = (function (){var statearr_60476 = state_60419;
(statearr_60476[(9)] = inst_60403__$1);

(statearr_60476[(8)] = inst_60405);

return statearr_60476;
})();
if(cljs.core.truth_(inst_60404)){
var statearr_60477_60590 = state_60419__$1;
(statearr_60477_60590[(1)] = (17));

} else {
var statearr_60478_60591 = state_60419__$1;
(statearr_60478_60591[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (10))){
var inst_60398 = (state_60419[(2)]);
var state_60419__$1 = state_60419;
if(cljs.core.truth_(inst_60398)){
var statearr_60479_60592 = state_60419__$1;
(statearr_60479_60592[(1)] = (14));

} else {
var statearr_60480_60593 = state_60419__$1;
(statearr_60480_60593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (18))){
var inst_60403 = (state_60419[(9)]);
var inst_60411 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60403);
var inst_60412 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60411) : re_frame.core.dispatch.call(null,inst_60411));
var state_60419__$1 = state_60419;
var statearr_60485_60594 = state_60419__$1;
(statearr_60485_60594[(2)] = inst_60412);

(statearr_60485_60594[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (8))){
var inst_60378 = (state_60419[(7)]);
var inst_60387 = inst_60378.cljs$lang$protocol_mask$partition0$;
var inst_60388 = (inst_60387 & (64));
var inst_60389 = inst_60378.cljs$core$ISeq$;
var inst_60390 = (cljs.core.PROTOCOL_SENTINEL === inst_60389);
var inst_60391 = ((inst_60388) || (inst_60390));
var state_60419__$1 = state_60419;
if(cljs.core.truth_(inst_60391)){
var statearr_60490_60595 = state_60419__$1;
(statearr_60490_60595[(1)] = (11));

} else {
var statearr_60491_60597 = state_60419__$1;
(statearr_60491_60597[(1)] = (12));

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
var statearr_60496 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60496[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60496[(1)] = (1));

return statearr_60496;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60419){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60419);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60497){if((e60497 instanceof Object)){
var ex__34210__auto__ = e60497;
var statearr_60498_60601 = state_60419;
(statearr_60498_60601[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60602 = state_60419;
state_60419 = G__60602;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60419){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60504 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60504[(6)] = c__34274__auto__);

return statearr_60504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60358_60536,G__60359_60537) : re_frame.core.reg_fx.call(null,G__60358_60536,G__60359_60537));
var G__60507_60603 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60508_60604 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60510){
var map__60511 = p__60510;
var map__60511__$1 = (((((!((map__60511 == null))))?(((((map__60511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60511):map__60511);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60511__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60511__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60511__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60511__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60514 = action;
var G__60514__$1 = (((G__60514 instanceof cljs.core.Keyword))?G__60514.fqn:null);
switch (G__60514__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60514__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60507_60603,G__60508_60604) : re_frame.core.reg_fx.call(null,G__60507_60603,G__60508_60604));

//# sourceMappingURL=athens.effects.js.map
