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
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58188){
var state_val_58189 = (state_58188[(1)]);
if((state_val_58189 === (7))){
var state_58188__$1 = state_58188;
var statearr_58190_58212 = state_58188__$1;
(statearr_58190_58212[(2)] = false);

(statearr_58190_58212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (1))){
var inst_58151 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58152 = [false];
var inst_58153 = cljs.core.PersistentHashMap.fromArrays(inst_58151,inst_58152);
var inst_58154 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58153], 0));
var state_58188__$1 = state_58188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58188__$1,(2),inst_58154);
} else {
if((state_val_58189 === (4))){
var state_58188__$1 = state_58188;
var statearr_58191_58213 = state_58188__$1;
(statearr_58191_58213[(2)] = false);

(statearr_58191_58213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (13))){
var inst_58184 = alert("Failed to retrieve data from GitHub");
var state_58188__$1 = state_58188;
var statearr_58192_58214 = state_58188__$1;
(statearr_58192_58214[(2)] = inst_58184);

(statearr_58192_58214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (6))){
var state_58188__$1 = state_58188;
var statearr_58193_58215 = state_58188__$1;
(statearr_58193_58215[(2)] = true);

(statearr_58193_58215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (3))){
var inst_58156 = (state_58188[(7)]);
var inst_58161 = inst_58156.cljs$lang$protocol_mask$partition0$;
var inst_58162 = (inst_58161 & (64));
var inst_58163 = inst_58156.cljs$core$ISeq$;
var inst_58164 = (cljs.core.PROTOCOL_SENTINEL === inst_58163);
var inst_58165 = ((inst_58162) || (inst_58164));
var state_58188__$1 = state_58188;
if(cljs.core.truth_(inst_58165)){
var statearr_58194_58216 = state_58188__$1;
(statearr_58194_58216[(1)] = (6));

} else {
var statearr_58195_58217 = state_58188__$1;
(statearr_58195_58217[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (12))){
var inst_58179 = (state_58188[(8)]);
var inst_58181 = athens.db.str_to_db_tx(inst_58179);
var inst_58182 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58181) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58181));
var state_58188__$1 = state_58188;
var statearr_58196_58218 = state_58188__$1;
(statearr_58196_58218[(2)] = inst_58182);

(statearr_58196_58218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (2))){
var inst_58156 = (state_58188[(7)]);
var inst_58156__$1 = (state_58188[(2)]);
var inst_58158 = (inst_58156__$1 == null);
var inst_58159 = cljs.core.not(inst_58158);
var state_58188__$1 = (function (){var statearr_58197 = state_58188;
(statearr_58197[(7)] = inst_58156__$1);

return statearr_58197;
})();
if(inst_58159){
var statearr_58198_58219 = state_58188__$1;
(statearr_58198_58219[(1)] = (3));

} else {
var statearr_58199_58220 = state_58188__$1;
(statearr_58199_58220[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (11))){
var inst_58177 = (state_58188[(2)]);
var inst_58178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58177,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58177,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58188__$1 = (function (){var statearr_58200 = state_58188;
(statearr_58200[(8)] = inst_58179);

return statearr_58200;
})();
if(cljs.core.truth_(inst_58178)){
var statearr_58201_58221 = state_58188__$1;
(statearr_58201_58221[(1)] = (12));

} else {
var statearr_58202_58222 = state_58188__$1;
(statearr_58202_58222[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (9))){
var inst_58156 = (state_58188[(7)]);
var inst_58174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58156);
var state_58188__$1 = state_58188;
var statearr_58203_58223 = state_58188__$1;
(statearr_58203_58223[(2)] = inst_58174);

(statearr_58203_58223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (5))){
var inst_58172 = (state_58188[(2)]);
var state_58188__$1 = state_58188;
if(cljs.core.truth_(inst_58172)){
var statearr_58204_58224 = state_58188__$1;
(statearr_58204_58224[(1)] = (9));

} else {
var statearr_58205_58225 = state_58188__$1;
(statearr_58205_58225[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (14))){
var inst_58186 = (state_58188[(2)]);
var state_58188__$1 = state_58188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58188__$1,inst_58186);
} else {
if((state_val_58189 === (10))){
var inst_58156 = (state_58188[(7)]);
var state_58188__$1 = state_58188;
var statearr_58206_58226 = state_58188__$1;
(statearr_58206_58226[(2)] = inst_58156);

(statearr_58206_58226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (8))){
var inst_58169 = (state_58188[(2)]);
var state_58188__$1 = state_58188;
var statearr_58207_58227 = state_58188__$1;
(statearr_58207_58227[(2)] = inst_58169);

(statearr_58207_58227[(1)] = (5));


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
var statearr_58208 = [null,null,null,null,null,null,null,null,null];
(statearr_58208[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58208[(1)] = (1));

return statearr_58208;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58188){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58188);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58209){if((e58209 instanceof Object)){
var ex__38792__auto__ = e58209;
var statearr_58210_58228 = state_58188;
(statearr_58210_58228[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58229 = state_58188;
state_58188 = G__58229;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58188){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58211 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58211[(6)] = c__38856__auto__);

return statearr_58211;
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
