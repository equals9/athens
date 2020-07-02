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
var G__61227_61321 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61228_61322 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61227_61321,G__61228_61322) : re_frame.core.reg_fx.call(null,G__61227_61321,G__61228_61322));
var G__61229_61323 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61230_61324 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61229_61323,G__61230_61324) : re_frame.core.reg_fx.call(null,G__61229_61323,G__61230_61324));
var G__61231_61325 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61232_61326 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61231_61325,G__61232_61326) : re_frame.core.reg_fx.call(null,G__61231_61325,G__61232_61326));
var G__61233_61327 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61234_61328 = (function (p__61235){
var map__61236 = p__61235;
var map__61236__$1 = (((((!((map__61236 == null))))?(((((map__61236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61236):map__61236);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36985__auto__ = (function (){var switch__36917__auto__ = (function (state_61280){
var state_val_61281 = (state_61280[(1)]);
if((state_val_61281 === (7))){
var inst_61247 = (state_61280[(7)]);
var inst_61247__$1 = (state_61280[(2)]);
var inst_61249 = (inst_61247__$1 == null);
var inst_61250 = cljs.core.not(inst_61249);
var state_61280__$1 = (function (){var statearr_61282 = state_61280;
(statearr_61282[(7)] = inst_61247__$1);

return statearr_61282;
})();
if(inst_61250){
var statearr_61283_61329 = state_61280__$1;
(statearr_61283_61329[(1)] = (8));

} else {
var statearr_61284_61330 = state_61280__$1;
(statearr_61284_61330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (1))){
var state_61280__$1 = state_61280;
var G__61285_61331 = method;
var G__61285_61332__$1 = (((G__61285_61331 instanceof cljs.core.Keyword))?G__61285_61331.fqn:null);
switch (G__61285_61332__$1) {
case "post":
var statearr_61286_61334 = state_61280__$1;
(statearr_61286_61334[(1)] = (3));


break;
case "get":
var statearr_61287_61335 = state_61280__$1;
(statearr_61287_61335[(1)] = (4));


break;
case "put":
var statearr_61288_61336 = state_61280__$1;
(statearr_61288_61336[(1)] = (5));


break;
case "delete":
var statearr_61289_61337 = state_61280__$1;
(statearr_61289_61337[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61285_61332__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (4))){
var state_61280__$1 = state_61280;
var statearr_61290_61338 = state_61280__$1;
(statearr_61290_61338[(2)] = cljs_http.client.get);

(statearr_61290_61338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (15))){
var inst_61247 = (state_61280[(7)]);
var state_61280__$1 = state_61280;
var statearr_61291_61339 = state_61280__$1;
(statearr_61291_61339[(2)] = inst_61247);

(statearr_61291_61339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (13))){
var inst_61260 = (state_61280[(2)]);
var state_61280__$1 = state_61280;
var statearr_61292_61340 = state_61280__$1;
(statearr_61292_61340[(2)] = inst_61260);

(statearr_61292_61340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (6))){
var state_61280__$1 = state_61280;
var statearr_61293_61341 = state_61280__$1;
(statearr_61293_61341[(2)] = cljs_http.client.delete$);

(statearr_61293_61341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (17))){
var inst_61270 = (state_61280[(8)]);
var inst_61272 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61270);
var inst_61273 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61272) : re_frame.core.dispatch.call(null,inst_61272));
var state_61280__$1 = state_61280;
var statearr_61294_61342 = state_61280__$1;
(statearr_61294_61342[(2)] = inst_61273);

(statearr_61294_61342[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (3))){
var state_61280__$1 = state_61280;
var statearr_61295_61343 = state_61280__$1;
(statearr_61295_61343[(2)] = cljs_http.client.post);

(statearr_61295_61343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (12))){
var state_61280__$1 = state_61280;
var statearr_61296_61344 = state_61280__$1;
(statearr_61296_61344[(2)] = false);

(statearr_61296_61344[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (2))){
var inst_61244 = (state_61280[(2)]);
var inst_61245 = (inst_61244.cljs$core$IFn$_invoke$arity$2 ? inst_61244.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61244.call(null,url,opts));
var state_61280__$1 = state_61280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61280__$1,(7),inst_61245);
} else {
if((state_val_61281 === (19))){
var inst_61278 = (state_61280[(2)]);
var state_61280__$1 = state_61280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61280__$1,inst_61278);
} else {
if((state_val_61281 === (11))){
var state_61280__$1 = state_61280;
var statearr_61297_61345 = state_61280__$1;
(statearr_61297_61345[(2)] = true);

(statearr_61297_61345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (9))){
var state_61280__$1 = state_61280;
var statearr_61298_61346 = state_61280__$1;
(statearr_61298_61346[(2)] = false);

(statearr_61298_61346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (5))){
var state_61280__$1 = state_61280;
var statearr_61299_61347 = state_61280__$1;
(statearr_61299_61347[(2)] = cljs_http.client.put);

(statearr_61299_61347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (14))){
var inst_61247 = (state_61280[(7)]);
var inst_61265 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61247);
var state_61280__$1 = state_61280;
var statearr_61300_61348 = state_61280__$1;
(statearr_61300_61348[(2)] = inst_61265);

(statearr_61300_61348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (16))){
var inst_61268 = (state_61280[(9)]);
var inst_61268__$1 = (state_61280[(2)]);
var inst_61269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61268__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61268__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61280__$1 = (function (){var statearr_61301 = state_61280;
(statearr_61301[(9)] = inst_61268__$1);

(statearr_61301[(8)] = inst_61270);

return statearr_61301;
})();
if(cljs.core.truth_(inst_61269)){
var statearr_61302_61349 = state_61280__$1;
(statearr_61302_61349[(1)] = (17));

} else {
var statearr_61303_61350 = state_61280__$1;
(statearr_61303_61350[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (10))){
var inst_61263 = (state_61280[(2)]);
var state_61280__$1 = state_61280;
if(cljs.core.truth_(inst_61263)){
var statearr_61304_61351 = state_61280__$1;
(statearr_61304_61351[(1)] = (14));

} else {
var statearr_61305_61352 = state_61280__$1;
(statearr_61305_61352[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (18))){
var inst_61268 = (state_61280[(9)]);
var inst_61275 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61268);
var inst_61276 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61275) : re_frame.core.dispatch.call(null,inst_61275));
var state_61280__$1 = state_61280;
var statearr_61306_61353 = state_61280__$1;
(statearr_61306_61353[(2)] = inst_61276);

(statearr_61306_61353[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61281 === (8))){
var inst_61247 = (state_61280[(7)]);
var inst_61252 = inst_61247.cljs$lang$protocol_mask$partition0$;
var inst_61253 = (inst_61252 & (64));
var inst_61254 = inst_61247.cljs$core$ISeq$;
var inst_61255 = (cljs.core.PROTOCOL_SENTINEL === inst_61254);
var inst_61256 = ((inst_61253) || (inst_61255));
var state_61280__$1 = state_61280;
if(cljs.core.truth_(inst_61256)){
var statearr_61307_61354 = state_61280__$1;
(statearr_61307_61354[(1)] = (11));

} else {
var statearr_61308_61355 = state_61280__$1;
(statearr_61308_61355[(1)] = (12));

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
var statearr_61309 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61309[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61309[(1)] = (1));

return statearr_61309;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61280){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61280);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61310){if((e61310 instanceof Object)){
var ex__36921__auto__ = e61310;
var statearr_61311_61356 = state_61280;
(statearr_61311_61356[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61357 = state_61280;
state_61280 = G__61357;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61280){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36986__auto__ = (function (){var statearr_61314 = (f__36985__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36985__auto__.cljs$core$IFn$_invoke$arity$0() : f__36985__auto__.call(null));
(statearr_61314[(6)] = c__36984__auto__);

return statearr_61314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36986__auto__);
}));

return c__36984__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61233_61327,G__61234_61328) : re_frame.core.reg_fx.call(null,G__61233_61327,G__61234_61328));
var G__61315_61358 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61316_61359 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61317){
var map__61318 = p__61317;
var map__61318__$1 = (((((!((map__61318 == null))))?(((((map__61318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61318):map__61318);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61320 = action;
var G__61320__$1 = (((G__61320 instanceof cljs.core.Keyword))?G__61320.fqn:null);
switch (G__61320__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61320__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61315_61358,G__61316_61359) : re_frame.core.reg_fx.call(null,G__61315_61358,G__61316_61359));

//# sourceMappingURL=athens.effects.js.map
