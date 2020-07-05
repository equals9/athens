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
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58251){
var state_val_58252 = (state_58251[(1)]);
if((state_val_58252 === (7))){
var state_58251__$1 = state_58251;
var statearr_58253_58275 = state_58251__$1;
(statearr_58253_58275[(2)] = false);

(statearr_58253_58275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (1))){
var inst_58214 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58215 = [false];
var inst_58216 = cljs.core.PersistentHashMap.fromArrays(inst_58214,inst_58215);
var inst_58217 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58216], 0));
var state_58251__$1 = state_58251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58251__$1,(2),inst_58217);
} else {
if((state_val_58252 === (4))){
var state_58251__$1 = state_58251;
var statearr_58254_58276 = state_58251__$1;
(statearr_58254_58276[(2)] = false);

(statearr_58254_58276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (13))){
var inst_58247 = alert("Failed to retrieve data from GitHub");
var state_58251__$1 = state_58251;
var statearr_58255_58277 = state_58251__$1;
(statearr_58255_58277[(2)] = inst_58247);

(statearr_58255_58277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (6))){
var state_58251__$1 = state_58251;
var statearr_58256_58278 = state_58251__$1;
(statearr_58256_58278[(2)] = true);

(statearr_58256_58278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (3))){
var inst_58219 = (state_58251[(7)]);
var inst_58224 = inst_58219.cljs$lang$protocol_mask$partition0$;
var inst_58225 = (inst_58224 & (64));
var inst_58226 = inst_58219.cljs$core$ISeq$;
var inst_58227 = (cljs.core.PROTOCOL_SENTINEL === inst_58226);
var inst_58228 = ((inst_58225) || (inst_58227));
var state_58251__$1 = state_58251;
if(cljs.core.truth_(inst_58228)){
var statearr_58257_58279 = state_58251__$1;
(statearr_58257_58279[(1)] = (6));

} else {
var statearr_58258_58280 = state_58251__$1;
(statearr_58258_58280[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (12))){
var inst_58242 = (state_58251[(8)]);
var inst_58244 = athens.db.str_to_db_tx(inst_58242);
var inst_58245 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58244) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58244));
var state_58251__$1 = state_58251;
var statearr_58259_58281 = state_58251__$1;
(statearr_58259_58281[(2)] = inst_58245);

(statearr_58259_58281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (2))){
var inst_58219 = (state_58251[(7)]);
var inst_58219__$1 = (state_58251[(2)]);
var inst_58221 = (inst_58219__$1 == null);
var inst_58222 = cljs.core.not(inst_58221);
var state_58251__$1 = (function (){var statearr_58260 = state_58251;
(statearr_58260[(7)] = inst_58219__$1);

return statearr_58260;
})();
if(inst_58222){
var statearr_58261_58282 = state_58251__$1;
(statearr_58261_58282[(1)] = (3));

} else {
var statearr_58262_58283 = state_58251__$1;
(statearr_58262_58283[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (11))){
var inst_58240 = (state_58251[(2)]);
var inst_58241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58240,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58240,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58251__$1 = (function (){var statearr_58263 = state_58251;
(statearr_58263[(8)] = inst_58242);

return statearr_58263;
})();
if(cljs.core.truth_(inst_58241)){
var statearr_58264_58284 = state_58251__$1;
(statearr_58264_58284[(1)] = (12));

} else {
var statearr_58265_58285 = state_58251__$1;
(statearr_58265_58285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (9))){
var inst_58219 = (state_58251[(7)]);
var inst_58237 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58219);
var state_58251__$1 = state_58251;
var statearr_58266_58286 = state_58251__$1;
(statearr_58266_58286[(2)] = inst_58237);

(statearr_58266_58286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (5))){
var inst_58235 = (state_58251[(2)]);
var state_58251__$1 = state_58251;
if(cljs.core.truth_(inst_58235)){
var statearr_58267_58287 = state_58251__$1;
(statearr_58267_58287[(1)] = (9));

} else {
var statearr_58268_58288 = state_58251__$1;
(statearr_58268_58288[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (14))){
var inst_58249 = (state_58251[(2)]);
var state_58251__$1 = state_58251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58251__$1,inst_58249);
} else {
if((state_val_58252 === (10))){
var inst_58219 = (state_58251[(7)]);
var state_58251__$1 = state_58251;
var statearr_58269_58289 = state_58251__$1;
(statearr_58269_58289[(2)] = inst_58219);

(statearr_58269_58289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58252 === (8))){
var inst_58232 = (state_58251[(2)]);
var state_58251__$1 = state_58251;
var statearr_58270_58290 = state_58251__$1;
(statearr_58270_58290[(2)] = inst_58232);

(statearr_58270_58290[(1)] = (5));


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
var statearr_58271 = [null,null,null,null,null,null,null,null,null];
(statearr_58271[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58271[(1)] = (1));

return statearr_58271;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58251){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58251);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58272){if((e58272 instanceof Object)){
var ex__38792__auto__ = e58272;
var statearr_58273_58291 = state_58251;
(statearr_58273_58291[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58292 = state_58251;
state_58251 = G__58292;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58251){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58274 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58274[(6)] = c__38856__auto__);

return statearr_58274;
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
