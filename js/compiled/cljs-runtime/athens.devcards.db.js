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
var f__38856__auto__ = (function (){var switch__38788__auto__ = (function (state_58140){
var state_val_58141 = (state_58140[(1)]);
if((state_val_58141 === (7))){
var state_58140__$1 = state_58140;
var statearr_58142_58164 = state_58140__$1;
(statearr_58142_58164[(2)] = false);

(statearr_58142_58164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (1))){
var inst_58103 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58104 = [false];
var inst_58105 = cljs.core.PersistentHashMap.fromArrays(inst_58103,inst_58104);
var inst_58106 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58105], 0));
var state_58140__$1 = state_58140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58140__$1,(2),inst_58106);
} else {
if((state_val_58141 === (4))){
var state_58140__$1 = state_58140;
var statearr_58143_58165 = state_58140__$1;
(statearr_58143_58165[(2)] = false);

(statearr_58143_58165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (13))){
var inst_58136 = alert("Failed to retrieve data from GitHub");
var state_58140__$1 = state_58140;
var statearr_58144_58166 = state_58140__$1;
(statearr_58144_58166[(2)] = inst_58136);

(statearr_58144_58166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (6))){
var state_58140__$1 = state_58140;
var statearr_58145_58167 = state_58140__$1;
(statearr_58145_58167[(2)] = true);

(statearr_58145_58167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (3))){
var inst_58108 = (state_58140[(7)]);
var inst_58113 = inst_58108.cljs$lang$protocol_mask$partition0$;
var inst_58114 = (inst_58113 & (64));
var inst_58115 = inst_58108.cljs$core$ISeq$;
var inst_58116 = (cljs.core.PROTOCOL_SENTINEL === inst_58115);
var inst_58117 = ((inst_58114) || (inst_58116));
var state_58140__$1 = state_58140;
if(cljs.core.truth_(inst_58117)){
var statearr_58146_58168 = state_58140__$1;
(statearr_58146_58168[(1)] = (6));

} else {
var statearr_58147_58169 = state_58140__$1;
(statearr_58147_58169[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (12))){
var inst_58131 = (state_58140[(8)]);
var inst_58133 = athens.db.str_to_db_tx(inst_58131);
var inst_58134 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58133) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58133));
var state_58140__$1 = state_58140;
var statearr_58148_58170 = state_58140__$1;
(statearr_58148_58170[(2)] = inst_58134);

(statearr_58148_58170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (2))){
var inst_58108 = (state_58140[(7)]);
var inst_58108__$1 = (state_58140[(2)]);
var inst_58110 = (inst_58108__$1 == null);
var inst_58111 = cljs.core.not(inst_58110);
var state_58140__$1 = (function (){var statearr_58149 = state_58140;
(statearr_58149[(7)] = inst_58108__$1);

return statearr_58149;
})();
if(inst_58111){
var statearr_58150_58171 = state_58140__$1;
(statearr_58150_58171[(1)] = (3));

} else {
var statearr_58151_58172 = state_58140__$1;
(statearr_58151_58172[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (11))){
var inst_58129 = (state_58140[(2)]);
var inst_58130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58129,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58129,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58140__$1 = (function (){var statearr_58152 = state_58140;
(statearr_58152[(8)] = inst_58131);

return statearr_58152;
})();
if(cljs.core.truth_(inst_58130)){
var statearr_58153_58173 = state_58140__$1;
(statearr_58153_58173[(1)] = (12));

} else {
var statearr_58154_58174 = state_58140__$1;
(statearr_58154_58174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (9))){
var inst_58108 = (state_58140[(7)]);
var inst_58126 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58108);
var state_58140__$1 = state_58140;
var statearr_58155_58175 = state_58140__$1;
(statearr_58155_58175[(2)] = inst_58126);

(statearr_58155_58175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (5))){
var inst_58124 = (state_58140[(2)]);
var state_58140__$1 = state_58140;
if(cljs.core.truth_(inst_58124)){
var statearr_58156_58176 = state_58140__$1;
(statearr_58156_58176[(1)] = (9));

} else {
var statearr_58157_58177 = state_58140__$1;
(statearr_58157_58177[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (14))){
var inst_58138 = (state_58140[(2)]);
var state_58140__$1 = state_58140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58140__$1,inst_58138);
} else {
if((state_val_58141 === (10))){
var inst_58108 = (state_58140[(7)]);
var state_58140__$1 = state_58140;
var statearr_58158_58178 = state_58140__$1;
(statearr_58158_58178[(2)] = inst_58108);

(statearr_58158_58178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (8))){
var inst_58121 = (state_58140[(2)]);
var state_58140__$1 = state_58140;
var statearr_58159_58179 = state_58140__$1;
(statearr_58159_58179[(2)] = inst_58121);

(statearr_58159_58179[(1)] = (5));


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
var statearr_58160 = [null,null,null,null,null,null,null,null,null];
(statearr_58160[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58160[(1)] = (1));

return statearr_58160;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58140){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58140);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58161){if((e58161 instanceof Object)){
var ex__38792__auto__ = e58161;
var statearr_58162_58180 = state_58140;
(statearr_58162_58180[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58181 = state_58140;
state_58140 = G__58181;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58140){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38857__auto__ = (function (){var statearr_58163 = (f__38856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38856__auto__.cljs$core$IFn$_invoke$arity$0() : f__38856__auto__.call(null));
(statearr_58163[(6)] = c__38855__auto__);

return statearr_58163;
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
