goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__38855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38856__auto__ = (function (){var switch__38788__auto__ = (function (state_63411){
var state_val_63412 = (state_63411[(1)]);
if((state_val_63412 === (7))){
var state_63411__$1 = state_63411;
var statearr_63413_63435 = state_63411__$1;
(statearr_63413_63435[(2)] = false);

(statearr_63413_63435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (1))){
var inst_63374 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_63375 = [false];
var inst_63376 = cljs.core.PersistentHashMap.fromArrays(inst_63374,inst_63375);
var inst_63377 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63376], 0));
var state_63411__$1 = state_63411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63411__$1,(2),inst_63377);
} else {
if((state_val_63412 === (4))){
var state_63411__$1 = state_63411;
var statearr_63414_63436 = state_63411__$1;
(statearr_63414_63436[(2)] = false);

(statearr_63414_63436[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (13))){
var inst_63407 = alert("Failed to retrieve data from GitHub");
var state_63411__$1 = state_63411;
var statearr_63415_63437 = state_63411__$1;
(statearr_63415_63437[(2)] = inst_63407);

(statearr_63415_63437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (6))){
var state_63411__$1 = state_63411;
var statearr_63416_63438 = state_63411__$1;
(statearr_63416_63438[(2)] = true);

(statearr_63416_63438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (3))){
var inst_63379 = (state_63411[(7)]);
var inst_63384 = inst_63379.cljs$lang$protocol_mask$partition0$;
var inst_63385 = (inst_63384 & (64));
var inst_63386 = inst_63379.cljs$core$ISeq$;
var inst_63387 = (cljs.core.PROTOCOL_SENTINEL === inst_63386);
var inst_63388 = ((inst_63385) || (inst_63387));
var state_63411__$1 = state_63411;
if(cljs.core.truth_(inst_63388)){
var statearr_63417_63439 = state_63411__$1;
(statearr_63417_63439[(1)] = (6));

} else {
var statearr_63418_63440 = state_63411__$1;
(statearr_63418_63440[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (12))){
var inst_63402 = (state_63411[(8)]);
var inst_63404 = athens.db.str_to_db_tx(inst_63402);
var inst_63405 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_63404) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_63404));
var state_63411__$1 = state_63411;
var statearr_63419_63441 = state_63411__$1;
(statearr_63419_63441[(2)] = inst_63405);

(statearr_63419_63441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (2))){
var inst_63379 = (state_63411[(7)]);
var inst_63379__$1 = (state_63411[(2)]);
var inst_63381 = (inst_63379__$1 == null);
var inst_63382 = cljs.core.not(inst_63381);
var state_63411__$1 = (function (){var statearr_63420 = state_63411;
(statearr_63420[(7)] = inst_63379__$1);

return statearr_63420;
})();
if(inst_63382){
var statearr_63421_63442 = state_63411__$1;
(statearr_63421_63442[(1)] = (3));

} else {
var statearr_63422_63443 = state_63411__$1;
(statearr_63422_63443[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (11))){
var inst_63400 = (state_63411[(2)]);
var inst_63401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63400,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_63402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63400,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_63411__$1 = (function (){var statearr_63423 = state_63411;
(statearr_63423[(8)] = inst_63402);

return statearr_63423;
})();
if(cljs.core.truth_(inst_63401)){
var statearr_63424_63444 = state_63411__$1;
(statearr_63424_63444[(1)] = (12));

} else {
var statearr_63425_63445 = state_63411__$1;
(statearr_63425_63445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (9))){
var inst_63379 = (state_63411[(7)]);
var inst_63397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63379);
var state_63411__$1 = state_63411;
var statearr_63426_63446 = state_63411__$1;
(statearr_63426_63446[(2)] = inst_63397);

(statearr_63426_63446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (5))){
var inst_63395 = (state_63411[(2)]);
var state_63411__$1 = state_63411;
if(cljs.core.truth_(inst_63395)){
var statearr_63427_63447 = state_63411__$1;
(statearr_63427_63447[(1)] = (9));

} else {
var statearr_63428_63448 = state_63411__$1;
(statearr_63428_63448[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (14))){
var inst_63409 = (state_63411[(2)]);
var state_63411__$1 = state_63411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63411__$1,inst_63409);
} else {
if((state_val_63412 === (10))){
var inst_63379 = (state_63411[(7)]);
var state_63411__$1 = state_63411;
var statearr_63429_63449 = state_63411__$1;
(statearr_63429_63449[(2)] = inst_63379);

(statearr_63429_63449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63412 === (8))){
var inst_63392 = (state_63411[(2)]);
var state_63411__$1 = state_63411;
var statearr_63430_63450 = state_63411__$1;
(statearr_63430_63450[(2)] = inst_63392);

(statearr_63430_63450[(1)] = (5));


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
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0 = (function (){
var statearr_63431 = [null,null,null,null,null,null,null,null,null];
(statearr_63431[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_63431[(1)] = (1));

return statearr_63431;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_63411){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_63411);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e63432){if((e63432 instanceof Object)){
var ex__38792__auto__ = e63432;
var statearr_63433_63451 = state_63411;
(statearr_63433_63451[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63452 = state_63411;
state_63411 = G__63452;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_63411){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_63411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38857__auto__ = (function (){var statearr_63434 = (f__38856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38856__auto__.cljs$core$IFn$_invoke$arity$0() : f__38856__auto__.call(null));
(statearr_63434[(6)] = c__38855__auto__);

return statearr_63434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38857__auto__);
}));

return c__38855__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset DB"], null)], null);
});
});

//# sourceMappingURL=athens.devcards.db.js.map
