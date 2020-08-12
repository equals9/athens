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
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(posh.reagent.transact_BANG_(athens.db.dsdb,datoms));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__60337){
var map__60338 = p__60337;
var map__60338__$1 = (((((!((map__60338 == null))))?(((((map__60338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60338):map__60338);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60338__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60338__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60338__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60338__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60338__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_60382){
var state_val_60383 = (state_60382[(1)]);
if((state_val_60383 === (7))){
var inst_60349 = (state_60382[(7)]);
var inst_60349__$1 = (state_60382[(2)]);
var inst_60351 = (inst_60349__$1 == null);
var inst_60352 = cljs.core.not(inst_60351);
var state_60382__$1 = (function (){var statearr_60384 = state_60382;
(statearr_60384[(7)] = inst_60349__$1);

return statearr_60384;
})();
if(inst_60352){
var statearr_60385_60420 = state_60382__$1;
(statearr_60385_60420[(1)] = (8));

} else {
var statearr_60386_60421 = state_60382__$1;
(statearr_60386_60421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (1))){
var state_60382__$1 = state_60382;
var G__60387_60422 = method;
var G__60387_60423__$1 = (((G__60387_60422 instanceof cljs.core.Keyword))?G__60387_60422.fqn:null);
switch (G__60387_60423__$1) {
case "post":
var statearr_60388_60425 = state_60382__$1;
(statearr_60388_60425[(1)] = (3));


break;
case "get":
var statearr_60389_60426 = state_60382__$1;
(statearr_60389_60426[(1)] = (4));


break;
case "put":
var statearr_60390_60427 = state_60382__$1;
(statearr_60390_60427[(1)] = (5));


break;
case "delete":
var statearr_60391_60428 = state_60382__$1;
(statearr_60391_60428[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60387_60423__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (4))){
var state_60382__$1 = state_60382;
var statearr_60392_60429 = state_60382__$1;
(statearr_60392_60429[(2)] = cljs_http.client.get);

(statearr_60392_60429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (15))){
var inst_60349 = (state_60382[(7)]);
var state_60382__$1 = state_60382;
var statearr_60393_60430 = state_60382__$1;
(statearr_60393_60430[(2)] = inst_60349);

(statearr_60393_60430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (13))){
var inst_60362 = (state_60382[(2)]);
var state_60382__$1 = state_60382;
var statearr_60394_60431 = state_60382__$1;
(statearr_60394_60431[(2)] = inst_60362);

(statearr_60394_60431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (6))){
var state_60382__$1 = state_60382;
var statearr_60395_60432 = state_60382__$1;
(statearr_60395_60432[(2)] = cljs_http.client.delete$);

(statearr_60395_60432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (17))){
var inst_60372 = (state_60382[(8)]);
var inst_60374 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60372);
var inst_60375 = re_frame.core.dispatch(inst_60374);
var state_60382__$1 = state_60382;
var statearr_60396_60433 = state_60382__$1;
(statearr_60396_60433[(2)] = inst_60375);

(statearr_60396_60433[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (3))){
var state_60382__$1 = state_60382;
var statearr_60397_60434 = state_60382__$1;
(statearr_60397_60434[(2)] = cljs_http.client.post);

(statearr_60397_60434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (12))){
var state_60382__$1 = state_60382;
var statearr_60398_60435 = state_60382__$1;
(statearr_60398_60435[(2)] = false);

(statearr_60398_60435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (2))){
var inst_60346 = (state_60382[(2)]);
var inst_60347 = (inst_60346.cljs$core$IFn$_invoke$arity$2 ? inst_60346.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60346.call(null,url,opts));
var state_60382__$1 = state_60382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60382__$1,(7),inst_60347);
} else {
if((state_val_60383 === (19))){
var inst_60380 = (state_60382[(2)]);
var state_60382__$1 = state_60382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60382__$1,inst_60380);
} else {
if((state_val_60383 === (11))){
var state_60382__$1 = state_60382;
var statearr_60399_60436 = state_60382__$1;
(statearr_60399_60436[(2)] = true);

(statearr_60399_60436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (9))){
var state_60382__$1 = state_60382;
var statearr_60400_60437 = state_60382__$1;
(statearr_60400_60437[(2)] = false);

(statearr_60400_60437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (5))){
var state_60382__$1 = state_60382;
var statearr_60401_60438 = state_60382__$1;
(statearr_60401_60438[(2)] = cljs_http.client.put);

(statearr_60401_60438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (14))){
var inst_60349 = (state_60382[(7)]);
var inst_60367 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60349);
var state_60382__$1 = state_60382;
var statearr_60402_60439 = state_60382__$1;
(statearr_60402_60439[(2)] = inst_60367);

(statearr_60402_60439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (16))){
var inst_60370 = (state_60382[(9)]);
var inst_60370__$1 = (state_60382[(2)]);
var inst_60371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60370__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60370__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60382__$1 = (function (){var statearr_60403 = state_60382;
(statearr_60403[(8)] = inst_60372);

(statearr_60403[(9)] = inst_60370__$1);

return statearr_60403;
})();
if(cljs.core.truth_(inst_60371)){
var statearr_60404_60440 = state_60382__$1;
(statearr_60404_60440[(1)] = (17));

} else {
var statearr_60405_60441 = state_60382__$1;
(statearr_60405_60441[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (10))){
var inst_60365 = (state_60382[(2)]);
var state_60382__$1 = state_60382;
if(cljs.core.truth_(inst_60365)){
var statearr_60406_60442 = state_60382__$1;
(statearr_60406_60442[(1)] = (14));

} else {
var statearr_60407_60443 = state_60382__$1;
(statearr_60407_60443[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (18))){
var inst_60370 = (state_60382[(9)]);
var inst_60377 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60370);
var inst_60378 = re_frame.core.dispatch(inst_60377);
var state_60382__$1 = state_60382;
var statearr_60408_60444 = state_60382__$1;
(statearr_60408_60444[(2)] = inst_60378);

(statearr_60408_60444[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60383 === (8))){
var inst_60349 = (state_60382[(7)]);
var inst_60354 = inst_60349.cljs$lang$protocol_mask$partition0$;
var inst_60355 = (inst_60354 & (64));
var inst_60356 = inst_60349.cljs$core$ISeq$;
var inst_60357 = (cljs.core.PROTOCOL_SENTINEL === inst_60356);
var inst_60358 = ((inst_60355) || (inst_60357));
var state_60382__$1 = state_60382;
if(cljs.core.truth_(inst_60358)){
var statearr_60409_60445 = state_60382__$1;
(statearr_60409_60445[(1)] = (11));

} else {
var statearr_60410_60446 = state_60382__$1;
(statearr_60410_60446[(1)] = (12));

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
var athens$effects$state_machine__42484__auto__ = null;
var athens$effects$state_machine__42484__auto____0 = (function (){
var statearr_60411 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60411[(0)] = athens$effects$state_machine__42484__auto__);

(statearr_60411[(1)] = (1));

return statearr_60411;
});
var athens$effects$state_machine__42484__auto____1 = (function (state_60382){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_60382);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e60412){var ex__42487__auto__ = e60412;
var statearr_60413_60447 = state_60382;
(statearr_60413_60447[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_60382[(4)]))){
var statearr_60414_60448 = state_60382;
(statearr_60414_60448[(1)] = cljs.core.first((state_60382[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60449 = state_60382;
state_60382 = G__60449;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
athens$effects$state_machine__42484__auto__ = function(state_60382){
switch(arguments.length){
case 0:
return athens$effects$state_machine__42484__auto____0.call(this);
case 1:
return athens$effects$state_machine__42484__auto____1.call(this,state_60382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__42484__auto____0;
athens$effects$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__42484__auto____1;
return athens$effects$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_60415 = f__42520__auto__();
(statearr_60415[(6)] = c__42519__auto__);

return statearr_60415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60416){
var map__60417 = p__60416;
var map__60417__$1 = (((((!((map__60417 == null))))?(((((map__60417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60417):map__60417);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60419 = action;
var G__60419__$1 = (((G__60419 instanceof cljs.core.Keyword))?G__60419.fqn:null);
switch (G__60419__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60419__$1)].join('')));

}
});
})());

//# sourceMappingURL=athens.effects.js.map
