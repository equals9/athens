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
var G__61483_61575 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61484_61576 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61483_61575,G__61484_61576) : re_frame.core.reg_fx.call(null,G__61483_61575,G__61484_61576));
var G__61485_61577 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61486_61578 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61485_61577,G__61486_61578) : re_frame.core.reg_fx.call(null,G__61485_61577,G__61486_61578));
var G__61487_61579 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61488_61580 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61487_61579,G__61488_61580) : re_frame.core.reg_fx.call(null,G__61487_61579,G__61488_61580));
var G__61489_61581 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61490_61582 = (function (p__61491){
var map__61492 = p__61491;
var map__61492__$1 = (((((!((map__61492 == null))))?(((((map__61492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61492):map__61492);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37021__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37022__auto__ = (function (){var switch__36954__auto__ = (function (state_61536){
var state_val_61537 = (state_61536[(1)]);
if((state_val_61537 === (7))){
var inst_61503 = (state_61536[(7)]);
var inst_61503__$1 = (state_61536[(2)]);
var inst_61505 = (inst_61503__$1 == null);
var inst_61506 = cljs.core.not(inst_61505);
var state_61536__$1 = (function (){var statearr_61538 = state_61536;
(statearr_61538[(7)] = inst_61503__$1);

return statearr_61538;
})();
if(inst_61506){
var statearr_61539_61583 = state_61536__$1;
(statearr_61539_61583[(1)] = (8));

} else {
var statearr_61540_61584 = state_61536__$1;
(statearr_61540_61584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (1))){
var state_61536__$1 = state_61536;
var G__61541_61585 = method;
var G__61541_61586__$1 = (((G__61541_61585 instanceof cljs.core.Keyword))?G__61541_61585.fqn:null);
switch (G__61541_61586__$1) {
case "post":
var statearr_61542_61588 = state_61536__$1;
(statearr_61542_61588[(1)] = (3));


break;
case "get":
var statearr_61543_61589 = state_61536__$1;
(statearr_61543_61589[(1)] = (4));


break;
case "put":
var statearr_61544_61590 = state_61536__$1;
(statearr_61544_61590[(1)] = (5));


break;
case "delete":
var statearr_61545_61591 = state_61536__$1;
(statearr_61545_61591[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61541_61586__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (4))){
var state_61536__$1 = state_61536;
var statearr_61546_61592 = state_61536__$1;
(statearr_61546_61592[(2)] = cljs_http.client.get);

(statearr_61546_61592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (15))){
var inst_61503 = (state_61536[(7)]);
var state_61536__$1 = state_61536;
var statearr_61547_61593 = state_61536__$1;
(statearr_61547_61593[(2)] = inst_61503);

(statearr_61547_61593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (13))){
var inst_61516 = (state_61536[(2)]);
var state_61536__$1 = state_61536;
var statearr_61548_61594 = state_61536__$1;
(statearr_61548_61594[(2)] = inst_61516);

(statearr_61548_61594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (6))){
var state_61536__$1 = state_61536;
var statearr_61549_61595 = state_61536__$1;
(statearr_61549_61595[(2)] = cljs_http.client.delete$);

(statearr_61549_61595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (17))){
var inst_61526 = (state_61536[(8)]);
var inst_61528 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61526);
var inst_61529 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61528) : re_frame.core.dispatch.call(null,inst_61528));
var state_61536__$1 = state_61536;
var statearr_61550_61596 = state_61536__$1;
(statearr_61550_61596[(2)] = inst_61529);

(statearr_61550_61596[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (3))){
var state_61536__$1 = state_61536;
var statearr_61551_61597 = state_61536__$1;
(statearr_61551_61597[(2)] = cljs_http.client.post);

(statearr_61551_61597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (12))){
var state_61536__$1 = state_61536;
var statearr_61552_61598 = state_61536__$1;
(statearr_61552_61598[(2)] = false);

(statearr_61552_61598[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (2))){
var inst_61500 = (state_61536[(2)]);
var inst_61501 = (inst_61500.cljs$core$IFn$_invoke$arity$2 ? inst_61500.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61500.call(null,url,opts));
var state_61536__$1 = state_61536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61536__$1,(7),inst_61501);
} else {
if((state_val_61537 === (19))){
var inst_61534 = (state_61536[(2)]);
var state_61536__$1 = state_61536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61536__$1,inst_61534);
} else {
if((state_val_61537 === (11))){
var state_61536__$1 = state_61536;
var statearr_61553_61599 = state_61536__$1;
(statearr_61553_61599[(2)] = true);

(statearr_61553_61599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (9))){
var state_61536__$1 = state_61536;
var statearr_61554_61600 = state_61536__$1;
(statearr_61554_61600[(2)] = false);

(statearr_61554_61600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (5))){
var state_61536__$1 = state_61536;
var statearr_61555_61601 = state_61536__$1;
(statearr_61555_61601[(2)] = cljs_http.client.put);

(statearr_61555_61601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (14))){
var inst_61503 = (state_61536[(7)]);
var inst_61521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61503);
var state_61536__$1 = state_61536;
var statearr_61556_61602 = state_61536__$1;
(statearr_61556_61602[(2)] = inst_61521);

(statearr_61556_61602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (16))){
var inst_61524 = (state_61536[(9)]);
var inst_61524__$1 = (state_61536[(2)]);
var inst_61525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61524__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61524__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61536__$1 = (function (){var statearr_61557 = state_61536;
(statearr_61557[(8)] = inst_61526);

(statearr_61557[(9)] = inst_61524__$1);

return statearr_61557;
})();
if(cljs.core.truth_(inst_61525)){
var statearr_61558_61603 = state_61536__$1;
(statearr_61558_61603[(1)] = (17));

} else {
var statearr_61559_61604 = state_61536__$1;
(statearr_61559_61604[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (10))){
var inst_61519 = (state_61536[(2)]);
var state_61536__$1 = state_61536;
if(cljs.core.truth_(inst_61519)){
var statearr_61560_61605 = state_61536__$1;
(statearr_61560_61605[(1)] = (14));

} else {
var statearr_61561_61606 = state_61536__$1;
(statearr_61561_61606[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (18))){
var inst_61524 = (state_61536[(9)]);
var inst_61531 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61524);
var inst_61532 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61531) : re_frame.core.dispatch.call(null,inst_61531));
var state_61536__$1 = state_61536;
var statearr_61562_61607 = state_61536__$1;
(statearr_61562_61607[(2)] = inst_61532);

(statearr_61562_61607[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61537 === (8))){
var inst_61503 = (state_61536[(7)]);
var inst_61508 = inst_61503.cljs$lang$protocol_mask$partition0$;
var inst_61509 = (inst_61508 & (64));
var inst_61510 = inst_61503.cljs$core$ISeq$;
var inst_61511 = (cljs.core.PROTOCOL_SENTINEL === inst_61510);
var inst_61512 = ((inst_61509) || (inst_61511));
var state_61536__$1 = state_61536;
if(cljs.core.truth_(inst_61512)){
var statearr_61563_61608 = state_61536__$1;
(statearr_61563_61608[(1)] = (11));

} else {
var statearr_61564_61609 = state_61536__$1;
(statearr_61564_61609[(1)] = (12));

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
var athens$effects$state_machine__36955__auto__ = null;
var athens$effects$state_machine__36955__auto____0 = (function (){
var statearr_61565 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61565[(0)] = athens$effects$state_machine__36955__auto__);

(statearr_61565[(1)] = (1));

return statearr_61565;
});
var athens$effects$state_machine__36955__auto____1 = (function (state_61536){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_61536);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e61566){if((e61566 instanceof Object)){
var ex__36958__auto__ = e61566;
var statearr_61567_61610 = state_61536;
(statearr_61567_61610[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61611 = state_61536;
state_61536 = G__61611;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
athens$effects$state_machine__36955__auto__ = function(state_61536){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36955__auto____0.call(this);
case 1:
return athens$effects$state_machine__36955__auto____1.call(this,state_61536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36955__auto____0;
athens$effects$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36955__auto____1;
return athens$effects$state_machine__36955__auto__;
})()
})();
var state__37023__auto__ = (function (){var statearr_61568 = (f__37022__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37022__auto__.cljs$core$IFn$_invoke$arity$0() : f__37022__auto__.call(null));
(statearr_61568[(6)] = c__37021__auto__);

return statearr_61568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37023__auto__);
}));

return c__37021__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61489_61581,G__61490_61582) : re_frame.core.reg_fx.call(null,G__61489_61581,G__61490_61582));
var G__61569_61612 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61570_61613 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61571){
var map__61572 = p__61571;
var map__61572__$1 = (((((!((map__61572 == null))))?(((((map__61572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61572):map__61572);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61572__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61572__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61572__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61572__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61574 = action;
var G__61574__$1 = (((G__61574 instanceof cljs.core.Keyword))?G__61574.fqn:null);
switch (G__61574__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61574__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61569_61612,G__61570_61613) : re_frame.core.reg_fx.call(null,G__61569_61612,G__61570_61613));

//# sourceMappingURL=athens.effects.js.map
