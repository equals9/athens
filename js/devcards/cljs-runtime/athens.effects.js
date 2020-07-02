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
var G__61229_61323 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61230_61324 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61229_61323,G__61230_61324) : re_frame.core.reg_fx.call(null,G__61229_61323,G__61230_61324));
var G__61231_61325 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61232_61326 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61231_61325,G__61232_61326) : re_frame.core.reg_fx.call(null,G__61231_61325,G__61232_61326));
var G__61233_61327 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61234_61328 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61233_61327,G__61234_61328) : re_frame.core.reg_fx.call(null,G__61233_61327,G__61234_61328));
var G__61235_61329 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61236_61330 = (function (p__61237){
var map__61238 = p__61237;
var map__61238__$1 = (((((!((map__61238 == null))))?(((((map__61238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61238):map__61238);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61238__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61238__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61238__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61238__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61238__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61282){
var state_val_61283 = (state_61282[(1)]);
if((state_val_61283 === (7))){
var inst_61249 = (state_61282[(7)]);
var inst_61249__$1 = (state_61282[(2)]);
var inst_61251 = (inst_61249__$1 == null);
var inst_61252 = cljs.core.not(inst_61251);
var state_61282__$1 = (function (){var statearr_61284 = state_61282;
(statearr_61284[(7)] = inst_61249__$1);

return statearr_61284;
})();
if(inst_61252){
var statearr_61285_61331 = state_61282__$1;
(statearr_61285_61331[(1)] = (8));

} else {
var statearr_61286_61332 = state_61282__$1;
(statearr_61286_61332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (1))){
var state_61282__$1 = state_61282;
var G__61287_61333 = method;
var G__61287_61334__$1 = (((G__61287_61333 instanceof cljs.core.Keyword))?G__61287_61333.fqn:null);
switch (G__61287_61334__$1) {
case "post":
var statearr_61288_61336 = state_61282__$1;
(statearr_61288_61336[(1)] = (3));


break;
case "get":
var statearr_61289_61337 = state_61282__$1;
(statearr_61289_61337[(1)] = (4));


break;
case "put":
var statearr_61290_61338 = state_61282__$1;
(statearr_61290_61338[(1)] = (5));


break;
case "delete":
var statearr_61291_61339 = state_61282__$1;
(statearr_61291_61339[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61287_61334__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (4))){
var state_61282__$1 = state_61282;
var statearr_61292_61340 = state_61282__$1;
(statearr_61292_61340[(2)] = cljs_http.client.get);

(statearr_61292_61340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (15))){
var inst_61249 = (state_61282[(7)]);
var state_61282__$1 = state_61282;
var statearr_61293_61341 = state_61282__$1;
(statearr_61293_61341[(2)] = inst_61249);

(statearr_61293_61341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (13))){
var inst_61262 = (state_61282[(2)]);
var state_61282__$1 = state_61282;
var statearr_61294_61342 = state_61282__$1;
(statearr_61294_61342[(2)] = inst_61262);

(statearr_61294_61342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (6))){
var state_61282__$1 = state_61282;
var statearr_61295_61343 = state_61282__$1;
(statearr_61295_61343[(2)] = cljs_http.client.delete$);

(statearr_61295_61343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (17))){
var inst_61272 = (state_61282[(8)]);
var inst_61274 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61272);
var inst_61275 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61274) : re_frame.core.dispatch.call(null,inst_61274));
var state_61282__$1 = state_61282;
var statearr_61296_61344 = state_61282__$1;
(statearr_61296_61344[(2)] = inst_61275);

(statearr_61296_61344[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (3))){
var state_61282__$1 = state_61282;
var statearr_61297_61345 = state_61282__$1;
(statearr_61297_61345[(2)] = cljs_http.client.post);

(statearr_61297_61345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (12))){
var state_61282__$1 = state_61282;
var statearr_61298_61346 = state_61282__$1;
(statearr_61298_61346[(2)] = false);

(statearr_61298_61346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (2))){
var inst_61246 = (state_61282[(2)]);
var inst_61247 = (inst_61246.cljs$core$IFn$_invoke$arity$2 ? inst_61246.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61246.call(null,url,opts));
var state_61282__$1 = state_61282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61282__$1,(7),inst_61247);
} else {
if((state_val_61283 === (19))){
var inst_61280 = (state_61282[(2)]);
var state_61282__$1 = state_61282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61282__$1,inst_61280);
} else {
if((state_val_61283 === (11))){
var state_61282__$1 = state_61282;
var statearr_61299_61347 = state_61282__$1;
(statearr_61299_61347[(2)] = true);

(statearr_61299_61347[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (9))){
var state_61282__$1 = state_61282;
var statearr_61300_61348 = state_61282__$1;
(statearr_61300_61348[(2)] = false);

(statearr_61300_61348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (5))){
var state_61282__$1 = state_61282;
var statearr_61301_61349 = state_61282__$1;
(statearr_61301_61349[(2)] = cljs_http.client.put);

(statearr_61301_61349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (14))){
var inst_61249 = (state_61282[(7)]);
var inst_61267 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61249);
var state_61282__$1 = state_61282;
var statearr_61302_61350 = state_61282__$1;
(statearr_61302_61350[(2)] = inst_61267);

(statearr_61302_61350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (16))){
var inst_61270 = (state_61282[(9)]);
var inst_61270__$1 = (state_61282[(2)]);
var inst_61271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61270__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61270__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61282__$1 = (function (){var statearr_61303 = state_61282;
(statearr_61303[(9)] = inst_61270__$1);

(statearr_61303[(8)] = inst_61272);

return statearr_61303;
})();
if(cljs.core.truth_(inst_61271)){
var statearr_61304_61351 = state_61282__$1;
(statearr_61304_61351[(1)] = (17));

} else {
var statearr_61305_61352 = state_61282__$1;
(statearr_61305_61352[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (10))){
var inst_61265 = (state_61282[(2)]);
var state_61282__$1 = state_61282;
if(cljs.core.truth_(inst_61265)){
var statearr_61308_61353 = state_61282__$1;
(statearr_61308_61353[(1)] = (14));

} else {
var statearr_61309_61354 = state_61282__$1;
(statearr_61309_61354[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (18))){
var inst_61270 = (state_61282[(9)]);
var inst_61277 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61270);
var inst_61278 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61277) : re_frame.core.dispatch.call(null,inst_61277));
var state_61282__$1 = state_61282;
var statearr_61310_61355 = state_61282__$1;
(statearr_61310_61355[(2)] = inst_61278);

(statearr_61310_61355[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (8))){
var inst_61249 = (state_61282[(7)]);
var inst_61254 = inst_61249.cljs$lang$protocol_mask$partition0$;
var inst_61255 = (inst_61254 & (64));
var inst_61256 = inst_61249.cljs$core$ISeq$;
var inst_61257 = (cljs.core.PROTOCOL_SENTINEL === inst_61256);
var inst_61258 = ((inst_61255) || (inst_61257));
var state_61282__$1 = state_61282;
if(cljs.core.truth_(inst_61258)){
var statearr_61311_61356 = state_61282__$1;
(statearr_61311_61356[(1)] = (11));

} else {
var statearr_61312_61357 = state_61282__$1;
(statearr_61312_61357[(1)] = (12));

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
var statearr_61313 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61313[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61313[(1)] = (1));

return statearr_61313;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61282){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61282);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61314){if((e61314 instanceof Object)){
var ex__36921__auto__ = e61314;
var statearr_61315_61358 = state_61282;
(statearr_61315_61358[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61359 = state_61282;
state_61282 = G__61359;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61282){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61316 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61316[(6)] = c__36985__auto__);

return statearr_61316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61235_61329,G__61236_61330) : re_frame.core.reg_fx.call(null,G__61235_61329,G__61236_61330));
var G__61317_61360 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61318_61361 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61319){
var map__61320 = p__61319;
var map__61320__$1 = (((((!((map__61320 == null))))?(((((map__61320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61320):map__61320);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61322 = action;
var G__61322__$1 = (((G__61322 instanceof cljs.core.Keyword))?G__61322.fqn:null);
switch (G__61322__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61322__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61317_61360,G__61318_61361) : re_frame.core.reg_fx.call(null,G__61317_61360,G__61318_61361));

//# sourceMappingURL=athens.effects.js.map
