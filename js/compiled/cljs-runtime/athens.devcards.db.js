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
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58222){
var state_val_58223 = (state_58222[(1)]);
if((state_val_58223 === (7))){
var state_58222__$1 = state_58222;
var statearr_58224_58246 = state_58222__$1;
(statearr_58224_58246[(2)] = false);

(statearr_58224_58246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (1))){
var inst_58185 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58186 = [false];
var inst_58187 = cljs.core.PersistentHashMap.fromArrays(inst_58185,inst_58186);
var inst_58188 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58187], 0));
var state_58222__$1 = state_58222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58222__$1,(2),inst_58188);
} else {
if((state_val_58223 === (4))){
var state_58222__$1 = state_58222;
var statearr_58225_58247 = state_58222__$1;
(statearr_58225_58247[(2)] = false);

(statearr_58225_58247[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (13))){
var inst_58218 = alert("Failed to retrieve data from GitHub");
var state_58222__$1 = state_58222;
var statearr_58226_58248 = state_58222__$1;
(statearr_58226_58248[(2)] = inst_58218);

(statearr_58226_58248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (6))){
var state_58222__$1 = state_58222;
var statearr_58227_58249 = state_58222__$1;
(statearr_58227_58249[(2)] = true);

(statearr_58227_58249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (3))){
var inst_58190 = (state_58222[(7)]);
var inst_58195 = inst_58190.cljs$lang$protocol_mask$partition0$;
var inst_58196 = (inst_58195 & (64));
var inst_58197 = inst_58190.cljs$core$ISeq$;
var inst_58198 = (cljs.core.PROTOCOL_SENTINEL === inst_58197);
var inst_58199 = ((inst_58196) || (inst_58198));
var state_58222__$1 = state_58222;
if(cljs.core.truth_(inst_58199)){
var statearr_58228_58250 = state_58222__$1;
(statearr_58228_58250[(1)] = (6));

} else {
var statearr_58229_58251 = state_58222__$1;
(statearr_58229_58251[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (12))){
var inst_58213 = (state_58222[(8)]);
var inst_58215 = athens.db.str_to_db_tx(inst_58213);
var inst_58216 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58215) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58215));
var state_58222__$1 = state_58222;
var statearr_58230_58252 = state_58222__$1;
(statearr_58230_58252[(2)] = inst_58216);

(statearr_58230_58252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (2))){
var inst_58190 = (state_58222[(7)]);
var inst_58190__$1 = (state_58222[(2)]);
var inst_58192 = (inst_58190__$1 == null);
var inst_58193 = cljs.core.not(inst_58192);
var state_58222__$1 = (function (){var statearr_58231 = state_58222;
(statearr_58231[(7)] = inst_58190__$1);

return statearr_58231;
})();
if(inst_58193){
var statearr_58232_58253 = state_58222__$1;
(statearr_58232_58253[(1)] = (3));

} else {
var statearr_58233_58254 = state_58222__$1;
(statearr_58233_58254[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (11))){
var inst_58211 = (state_58222[(2)]);
var inst_58212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58211,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58211,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58222__$1 = (function (){var statearr_58234 = state_58222;
(statearr_58234[(8)] = inst_58213);

return statearr_58234;
})();
if(cljs.core.truth_(inst_58212)){
var statearr_58235_58255 = state_58222__$1;
(statearr_58235_58255[(1)] = (12));

} else {
var statearr_58236_58256 = state_58222__$1;
(statearr_58236_58256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (9))){
var inst_58190 = (state_58222[(7)]);
var inst_58208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58190);
var state_58222__$1 = state_58222;
var statearr_58237_58257 = state_58222__$1;
(statearr_58237_58257[(2)] = inst_58208);

(statearr_58237_58257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (5))){
var inst_58206 = (state_58222[(2)]);
var state_58222__$1 = state_58222;
if(cljs.core.truth_(inst_58206)){
var statearr_58238_58258 = state_58222__$1;
(statearr_58238_58258[(1)] = (9));

} else {
var statearr_58239_58259 = state_58222__$1;
(statearr_58239_58259[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (14))){
var inst_58220 = (state_58222[(2)]);
var state_58222__$1 = state_58222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58222__$1,inst_58220);
} else {
if((state_val_58223 === (10))){
var inst_58190 = (state_58222[(7)]);
var state_58222__$1 = state_58222;
var statearr_58240_58260 = state_58222__$1;
(statearr_58240_58260[(2)] = inst_58190);

(statearr_58240_58260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58223 === (8))){
var inst_58203 = (state_58222[(2)]);
var state_58222__$1 = state_58222;
var statearr_58241_58261 = state_58222__$1;
(statearr_58241_58261[(2)] = inst_58203);

(statearr_58241_58261[(1)] = (5));


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
var statearr_58242 = [null,null,null,null,null,null,null,null,null];
(statearr_58242[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58242[(1)] = (1));

return statearr_58242;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58222){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58222);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58243){if((e58243 instanceof Object)){
var ex__38792__auto__ = e58243;
var statearr_58244_58262 = state_58222;
(statearr_58244_58262[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58263 = state_58222;
state_58222 = G__58263;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58222){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58245 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58245[(6)] = c__38856__auto__);

return statearr_58245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
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
