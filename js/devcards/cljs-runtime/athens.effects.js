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
var G__61261_61353 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61262_61354 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61261_61353,G__61262_61354) : re_frame.core.reg_fx.call(null,G__61261_61353,G__61262_61354));
var G__61263_61355 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61264_61356 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61263_61355,G__61264_61356) : re_frame.core.reg_fx.call(null,G__61263_61355,G__61264_61356));
var G__61265_61357 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61266_61358 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61265_61357,G__61266_61358) : re_frame.core.reg_fx.call(null,G__61265_61357,G__61266_61358));
var G__61267_61359 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61268_61360 = (function (p__61269){
var map__61270 = p__61269;
var map__61270__$1 = (((((!((map__61270 == null))))?(((((map__61270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61270):map__61270);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61270__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61270__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61270__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61270__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61270__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36985__auto__ = (function (){var switch__36917__auto__ = (function (state_61314){
var state_val_61315 = (state_61314[(1)]);
if((state_val_61315 === (7))){
var inst_61281 = (state_61314[(7)]);
var inst_61281__$1 = (state_61314[(2)]);
var inst_61283 = (inst_61281__$1 == null);
var inst_61284 = cljs.core.not(inst_61283);
var state_61314__$1 = (function (){var statearr_61316 = state_61314;
(statearr_61316[(7)] = inst_61281__$1);

return statearr_61316;
})();
if(inst_61284){
var statearr_61317_61361 = state_61314__$1;
(statearr_61317_61361[(1)] = (8));

} else {
var statearr_61318_61362 = state_61314__$1;
(statearr_61318_61362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (1))){
var state_61314__$1 = state_61314;
var G__61319_61363 = method;
var G__61319_61364__$1 = (((G__61319_61363 instanceof cljs.core.Keyword))?G__61319_61363.fqn:null);
switch (G__61319_61364__$1) {
case "post":
var statearr_61320_61366 = state_61314__$1;
(statearr_61320_61366[(1)] = (3));


break;
case "get":
var statearr_61321_61367 = state_61314__$1;
(statearr_61321_61367[(1)] = (4));


break;
case "put":
var statearr_61322_61368 = state_61314__$1;
(statearr_61322_61368[(1)] = (5));


break;
case "delete":
var statearr_61323_61369 = state_61314__$1;
(statearr_61323_61369[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61319_61364__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (4))){
var state_61314__$1 = state_61314;
var statearr_61324_61370 = state_61314__$1;
(statearr_61324_61370[(2)] = cljs_http.client.get);

(statearr_61324_61370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (15))){
var inst_61281 = (state_61314[(7)]);
var state_61314__$1 = state_61314;
var statearr_61325_61371 = state_61314__$1;
(statearr_61325_61371[(2)] = inst_61281);

(statearr_61325_61371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (13))){
var inst_61294 = (state_61314[(2)]);
var state_61314__$1 = state_61314;
var statearr_61326_61372 = state_61314__$1;
(statearr_61326_61372[(2)] = inst_61294);

(statearr_61326_61372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (6))){
var state_61314__$1 = state_61314;
var statearr_61327_61373 = state_61314__$1;
(statearr_61327_61373[(2)] = cljs_http.client.delete$);

(statearr_61327_61373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (17))){
var inst_61304 = (state_61314[(8)]);
var inst_61306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61304);
var inst_61307 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61306) : re_frame.core.dispatch.call(null,inst_61306));
var state_61314__$1 = state_61314;
var statearr_61328_61374 = state_61314__$1;
(statearr_61328_61374[(2)] = inst_61307);

(statearr_61328_61374[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (3))){
var state_61314__$1 = state_61314;
var statearr_61329_61375 = state_61314__$1;
(statearr_61329_61375[(2)] = cljs_http.client.post);

(statearr_61329_61375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (12))){
var state_61314__$1 = state_61314;
var statearr_61330_61376 = state_61314__$1;
(statearr_61330_61376[(2)] = false);

(statearr_61330_61376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (2))){
var inst_61278 = (state_61314[(2)]);
var inst_61279 = (inst_61278.cljs$core$IFn$_invoke$arity$2 ? inst_61278.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61278.call(null,url,opts));
var state_61314__$1 = state_61314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61314__$1,(7),inst_61279);
} else {
if((state_val_61315 === (19))){
var inst_61312 = (state_61314[(2)]);
var state_61314__$1 = state_61314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61314__$1,inst_61312);
} else {
if((state_val_61315 === (11))){
var state_61314__$1 = state_61314;
var statearr_61331_61377 = state_61314__$1;
(statearr_61331_61377[(2)] = true);

(statearr_61331_61377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (9))){
var state_61314__$1 = state_61314;
var statearr_61332_61378 = state_61314__$1;
(statearr_61332_61378[(2)] = false);

(statearr_61332_61378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (5))){
var state_61314__$1 = state_61314;
var statearr_61333_61379 = state_61314__$1;
(statearr_61333_61379[(2)] = cljs_http.client.put);

(statearr_61333_61379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (14))){
var inst_61281 = (state_61314[(7)]);
var inst_61299 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61281);
var state_61314__$1 = state_61314;
var statearr_61334_61380 = state_61314__$1;
(statearr_61334_61380[(2)] = inst_61299);

(statearr_61334_61380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (16))){
var inst_61302 = (state_61314[(9)]);
var inst_61302__$1 = (state_61314[(2)]);
var inst_61303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61302__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61302__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61314__$1 = (function (){var statearr_61335 = state_61314;
(statearr_61335[(8)] = inst_61304);

(statearr_61335[(9)] = inst_61302__$1);

return statearr_61335;
})();
if(cljs.core.truth_(inst_61303)){
var statearr_61336_61381 = state_61314__$1;
(statearr_61336_61381[(1)] = (17));

} else {
var statearr_61337_61382 = state_61314__$1;
(statearr_61337_61382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (10))){
var inst_61297 = (state_61314[(2)]);
var state_61314__$1 = state_61314;
if(cljs.core.truth_(inst_61297)){
var statearr_61338_61383 = state_61314__$1;
(statearr_61338_61383[(1)] = (14));

} else {
var statearr_61339_61384 = state_61314__$1;
(statearr_61339_61384[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (18))){
var inst_61302 = (state_61314[(9)]);
var inst_61309 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61302);
var inst_61310 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61309) : re_frame.core.dispatch.call(null,inst_61309));
var state_61314__$1 = state_61314;
var statearr_61340_61385 = state_61314__$1;
(statearr_61340_61385[(2)] = inst_61310);

(statearr_61340_61385[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61315 === (8))){
var inst_61281 = (state_61314[(7)]);
var inst_61286 = inst_61281.cljs$lang$protocol_mask$partition0$;
var inst_61287 = (inst_61286 & (64));
var inst_61288 = inst_61281.cljs$core$ISeq$;
var inst_61289 = (cljs.core.PROTOCOL_SENTINEL === inst_61288);
var inst_61290 = ((inst_61287) || (inst_61289));
var state_61314__$1 = state_61314;
if(cljs.core.truth_(inst_61290)){
var statearr_61341_61386 = state_61314__$1;
(statearr_61341_61386[(1)] = (11));

} else {
var statearr_61342_61387 = state_61314__$1;
(statearr_61342_61387[(1)] = (12));

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
var athens$effects$state_machine__36918__auto__ = null;
var athens$effects$state_machine__36918__auto____0 = (function (){
var statearr_61343 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61343[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61343[(1)] = (1));

return statearr_61343;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61314){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61314);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61344){if((e61344 instanceof Object)){
var ex__36921__auto__ = e61344;
var statearr_61345_61388 = state_61314;
(statearr_61345_61388[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61389 = state_61314;
state_61314 = G__61389;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61314){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36986__auto__ = (function (){var statearr_61346 = (f__36985__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36985__auto__.cljs$core$IFn$_invoke$arity$0() : f__36985__auto__.call(null));
(statearr_61346[(6)] = c__36984__auto__);

return statearr_61346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36986__auto__);
}));

return c__36984__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61267_61359,G__61268_61360) : re_frame.core.reg_fx.call(null,G__61267_61359,G__61268_61360));
var G__61347_61390 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61348_61391 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61349){
var map__61350 = p__61349;
var map__61350__$1 = (((((!((map__61350 == null))))?(((((map__61350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61350):map__61350);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61350__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61350__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61350__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61352 = action;
var G__61352__$1 = (((G__61352 instanceof cljs.core.Keyword))?G__61352.fqn:null);
switch (G__61352__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61352__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61347_61390,G__61348_61391) : re_frame.core.reg_fx.call(null,G__61347_61390,G__61348_61391));

//# sourceMappingURL=athens.effects.js.map
