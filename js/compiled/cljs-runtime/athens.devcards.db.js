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
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58121){
var state_val_58122 = (state_58121[(1)]);
if((state_val_58122 === (7))){
var state_58121__$1 = state_58121;
var statearr_58123_58145 = state_58121__$1;
(statearr_58123_58145[(2)] = false);

(statearr_58123_58145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (1))){
var inst_58084 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58085 = [false];
var inst_58086 = cljs.core.PersistentHashMap.fromArrays(inst_58084,inst_58085);
var inst_58087 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58086], 0));
var state_58121__$1 = state_58121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58121__$1,(2),inst_58087);
} else {
if((state_val_58122 === (4))){
var state_58121__$1 = state_58121;
var statearr_58124_58146 = state_58121__$1;
(statearr_58124_58146[(2)] = false);

(statearr_58124_58146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (13))){
var inst_58117 = alert("Failed to retrieve data from GitHub");
var state_58121__$1 = state_58121;
var statearr_58125_58147 = state_58121__$1;
(statearr_58125_58147[(2)] = inst_58117);

(statearr_58125_58147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (6))){
var state_58121__$1 = state_58121;
var statearr_58126_58148 = state_58121__$1;
(statearr_58126_58148[(2)] = true);

(statearr_58126_58148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (3))){
var inst_58089 = (state_58121[(7)]);
var inst_58094 = inst_58089.cljs$lang$protocol_mask$partition0$;
var inst_58095 = (inst_58094 & (64));
var inst_58096 = inst_58089.cljs$core$ISeq$;
var inst_58097 = (cljs.core.PROTOCOL_SENTINEL === inst_58096);
var inst_58098 = ((inst_58095) || (inst_58097));
var state_58121__$1 = state_58121;
if(cljs.core.truth_(inst_58098)){
var statearr_58127_58149 = state_58121__$1;
(statearr_58127_58149[(1)] = (6));

} else {
var statearr_58128_58150 = state_58121__$1;
(statearr_58128_58150[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (12))){
var inst_58112 = (state_58121[(8)]);
var inst_58114 = athens.db.str_to_db_tx(inst_58112);
var inst_58115 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58114) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58114));
var state_58121__$1 = state_58121;
var statearr_58129_58151 = state_58121__$1;
(statearr_58129_58151[(2)] = inst_58115);

(statearr_58129_58151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (2))){
var inst_58089 = (state_58121[(7)]);
var inst_58089__$1 = (state_58121[(2)]);
var inst_58091 = (inst_58089__$1 == null);
var inst_58092 = cljs.core.not(inst_58091);
var state_58121__$1 = (function (){var statearr_58130 = state_58121;
(statearr_58130[(7)] = inst_58089__$1);

return statearr_58130;
})();
if(inst_58092){
var statearr_58131_58152 = state_58121__$1;
(statearr_58131_58152[(1)] = (3));

} else {
var statearr_58132_58153 = state_58121__$1;
(statearr_58132_58153[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (11))){
var inst_58110 = (state_58121[(2)]);
var inst_58111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58110,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58110,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58121__$1 = (function (){var statearr_58133 = state_58121;
(statearr_58133[(8)] = inst_58112);

return statearr_58133;
})();
if(cljs.core.truth_(inst_58111)){
var statearr_58134_58154 = state_58121__$1;
(statearr_58134_58154[(1)] = (12));

} else {
var statearr_58135_58155 = state_58121__$1;
(statearr_58135_58155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (9))){
var inst_58089 = (state_58121[(7)]);
var inst_58107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58089);
var state_58121__$1 = state_58121;
var statearr_58136_58156 = state_58121__$1;
(statearr_58136_58156[(2)] = inst_58107);

(statearr_58136_58156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (5))){
var inst_58105 = (state_58121[(2)]);
var state_58121__$1 = state_58121;
if(cljs.core.truth_(inst_58105)){
var statearr_58137_58157 = state_58121__$1;
(statearr_58137_58157[(1)] = (9));

} else {
var statearr_58138_58158 = state_58121__$1;
(statearr_58138_58158[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (14))){
var inst_58119 = (state_58121[(2)]);
var state_58121__$1 = state_58121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58121__$1,inst_58119);
} else {
if((state_val_58122 === (10))){
var inst_58089 = (state_58121[(7)]);
var state_58121__$1 = state_58121;
var statearr_58139_58159 = state_58121__$1;
(statearr_58139_58159[(2)] = inst_58089);

(statearr_58139_58159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58122 === (8))){
var inst_58102 = (state_58121[(2)]);
var state_58121__$1 = state_58121;
var statearr_58140_58160 = state_58121__$1;
(statearr_58140_58160[(2)] = inst_58102);

(statearr_58140_58160[(1)] = (5));


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
var statearr_58141 = [null,null,null,null,null,null,null,null,null];
(statearr_58141[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58141[(1)] = (1));

return statearr_58141;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58121){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58121);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58142){if((e58142 instanceof Object)){
var ex__38792__auto__ = e58142;
var statearr_58143_58161 = state_58121;
(statearr_58143_58161[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58162 = state_58121;
state_58121 = G__58162;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58121){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58144 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58144[(6)] = c__38856__auto__);

return statearr_58144;
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
