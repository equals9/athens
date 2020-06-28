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
var f__38856__auto__ = (function (){var switch__38788__auto__ = (function (state_58208){
var state_val_58209 = (state_58208[(1)]);
if((state_val_58209 === (7))){
var state_58208__$1 = state_58208;
var statearr_58210_58232 = state_58208__$1;
(statearr_58210_58232[(2)] = false);

(statearr_58210_58232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (1))){
var inst_58171 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58172 = [false];
var inst_58173 = cljs.core.PersistentHashMap.fromArrays(inst_58171,inst_58172);
var inst_58174 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58173], 0));
var state_58208__$1 = state_58208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58208__$1,(2),inst_58174);
} else {
if((state_val_58209 === (4))){
var state_58208__$1 = state_58208;
var statearr_58211_58233 = state_58208__$1;
(statearr_58211_58233[(2)] = false);

(statearr_58211_58233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (13))){
var inst_58204 = alert("Failed to retrieve data from GitHub");
var state_58208__$1 = state_58208;
var statearr_58212_58234 = state_58208__$1;
(statearr_58212_58234[(2)] = inst_58204);

(statearr_58212_58234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (6))){
var state_58208__$1 = state_58208;
var statearr_58213_58235 = state_58208__$1;
(statearr_58213_58235[(2)] = true);

(statearr_58213_58235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (3))){
var inst_58176 = (state_58208[(7)]);
var inst_58181 = inst_58176.cljs$lang$protocol_mask$partition0$;
var inst_58182 = (inst_58181 & (64));
var inst_58183 = inst_58176.cljs$core$ISeq$;
var inst_58184 = (cljs.core.PROTOCOL_SENTINEL === inst_58183);
var inst_58185 = ((inst_58182) || (inst_58184));
var state_58208__$1 = state_58208;
if(cljs.core.truth_(inst_58185)){
var statearr_58214_58236 = state_58208__$1;
(statearr_58214_58236[(1)] = (6));

} else {
var statearr_58215_58237 = state_58208__$1;
(statearr_58215_58237[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (12))){
var inst_58199 = (state_58208[(8)]);
var inst_58201 = athens.db.str_to_db_tx(inst_58199);
var inst_58202 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58201) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58201));
var state_58208__$1 = state_58208;
var statearr_58216_58238 = state_58208__$1;
(statearr_58216_58238[(2)] = inst_58202);

(statearr_58216_58238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (2))){
var inst_58176 = (state_58208[(7)]);
var inst_58176__$1 = (state_58208[(2)]);
var inst_58178 = (inst_58176__$1 == null);
var inst_58179 = cljs.core.not(inst_58178);
var state_58208__$1 = (function (){var statearr_58217 = state_58208;
(statearr_58217[(7)] = inst_58176__$1);

return statearr_58217;
})();
if(inst_58179){
var statearr_58218_58239 = state_58208__$1;
(statearr_58218_58239[(1)] = (3));

} else {
var statearr_58219_58240 = state_58208__$1;
(statearr_58219_58240[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (11))){
var inst_58197 = (state_58208[(2)]);
var inst_58198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58197,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58197,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58208__$1 = (function (){var statearr_58220 = state_58208;
(statearr_58220[(8)] = inst_58199);

return statearr_58220;
})();
if(cljs.core.truth_(inst_58198)){
var statearr_58221_58241 = state_58208__$1;
(statearr_58221_58241[(1)] = (12));

} else {
var statearr_58222_58242 = state_58208__$1;
(statearr_58222_58242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (9))){
var inst_58176 = (state_58208[(7)]);
var inst_58194 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58176);
var state_58208__$1 = state_58208;
var statearr_58223_58243 = state_58208__$1;
(statearr_58223_58243[(2)] = inst_58194);

(statearr_58223_58243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (5))){
var inst_58192 = (state_58208[(2)]);
var state_58208__$1 = state_58208;
if(cljs.core.truth_(inst_58192)){
var statearr_58224_58244 = state_58208__$1;
(statearr_58224_58244[(1)] = (9));

} else {
var statearr_58225_58245 = state_58208__$1;
(statearr_58225_58245[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (14))){
var inst_58206 = (state_58208[(2)]);
var state_58208__$1 = state_58208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58208__$1,inst_58206);
} else {
if((state_val_58209 === (10))){
var inst_58176 = (state_58208[(7)]);
var state_58208__$1 = state_58208;
var statearr_58226_58246 = state_58208__$1;
(statearr_58226_58246[(2)] = inst_58176);

(statearr_58226_58246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (8))){
var inst_58189 = (state_58208[(2)]);
var state_58208__$1 = state_58208;
var statearr_58227_58247 = state_58208__$1;
(statearr_58227_58247[(2)] = inst_58189);

(statearr_58227_58247[(1)] = (5));


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
var statearr_58228 = [null,null,null,null,null,null,null,null,null];
(statearr_58228[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58228[(1)] = (1));

return statearr_58228;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58208){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58208);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58229){if((e58229 instanceof Object)){
var ex__38792__auto__ = e58229;
var statearr_58230_58248 = state_58208;
(statearr_58230_58248[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58249 = state_58208;
state_58208 = G__58249;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58208){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38857__auto__ = (function (){var statearr_58231 = (f__38856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38856__auto__.cljs$core$IFn$_invoke$arity$0() : f__38856__auto__.call(null));
(statearr_58231[(6)] = c__38855__auto__);

return statearr_58231;
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
