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
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58144){
var state_val_58145 = (state_58144[(1)]);
if((state_val_58145 === (7))){
var state_58144__$1 = state_58144;
var statearr_58146_58168 = state_58144__$1;
(statearr_58146_58168[(2)] = false);

(statearr_58146_58168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (1))){
var inst_58107 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58108 = [false];
var inst_58109 = cljs.core.PersistentHashMap.fromArrays(inst_58107,inst_58108);
var inst_58110 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58109], 0));
var state_58144__$1 = state_58144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58144__$1,(2),inst_58110);
} else {
if((state_val_58145 === (4))){
var state_58144__$1 = state_58144;
var statearr_58147_58169 = state_58144__$1;
(statearr_58147_58169[(2)] = false);

(statearr_58147_58169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (13))){
var inst_58140 = alert("Failed to retrieve data from GitHub");
var state_58144__$1 = state_58144;
var statearr_58148_58170 = state_58144__$1;
(statearr_58148_58170[(2)] = inst_58140);

(statearr_58148_58170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (6))){
var state_58144__$1 = state_58144;
var statearr_58149_58171 = state_58144__$1;
(statearr_58149_58171[(2)] = true);

(statearr_58149_58171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (3))){
var inst_58112 = (state_58144[(7)]);
var inst_58117 = inst_58112.cljs$lang$protocol_mask$partition0$;
var inst_58118 = (inst_58117 & (64));
var inst_58119 = inst_58112.cljs$core$ISeq$;
var inst_58120 = (cljs.core.PROTOCOL_SENTINEL === inst_58119);
var inst_58121 = ((inst_58118) || (inst_58120));
var state_58144__$1 = state_58144;
if(cljs.core.truth_(inst_58121)){
var statearr_58150_58172 = state_58144__$1;
(statearr_58150_58172[(1)] = (6));

} else {
var statearr_58151_58173 = state_58144__$1;
(statearr_58151_58173[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (12))){
var inst_58135 = (state_58144[(8)]);
var inst_58137 = athens.db.str_to_db_tx(inst_58135);
var inst_58138 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58137) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58137));
var state_58144__$1 = state_58144;
var statearr_58152_58174 = state_58144__$1;
(statearr_58152_58174[(2)] = inst_58138);

(statearr_58152_58174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (2))){
var inst_58112 = (state_58144[(7)]);
var inst_58112__$1 = (state_58144[(2)]);
var inst_58114 = (inst_58112__$1 == null);
var inst_58115 = cljs.core.not(inst_58114);
var state_58144__$1 = (function (){var statearr_58153 = state_58144;
(statearr_58153[(7)] = inst_58112__$1);

return statearr_58153;
})();
if(inst_58115){
var statearr_58154_58175 = state_58144__$1;
(statearr_58154_58175[(1)] = (3));

} else {
var statearr_58155_58176 = state_58144__$1;
(statearr_58155_58176[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (11))){
var inst_58133 = (state_58144[(2)]);
var inst_58134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58133,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58133,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58144__$1 = (function (){var statearr_58156 = state_58144;
(statearr_58156[(8)] = inst_58135);

return statearr_58156;
})();
if(cljs.core.truth_(inst_58134)){
var statearr_58157_58177 = state_58144__$1;
(statearr_58157_58177[(1)] = (12));

} else {
var statearr_58158_58178 = state_58144__$1;
(statearr_58158_58178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (9))){
var inst_58112 = (state_58144[(7)]);
var inst_58130 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58112);
var state_58144__$1 = state_58144;
var statearr_58159_58179 = state_58144__$1;
(statearr_58159_58179[(2)] = inst_58130);

(statearr_58159_58179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (5))){
var inst_58128 = (state_58144[(2)]);
var state_58144__$1 = state_58144;
if(cljs.core.truth_(inst_58128)){
var statearr_58160_58180 = state_58144__$1;
(statearr_58160_58180[(1)] = (9));

} else {
var statearr_58161_58181 = state_58144__$1;
(statearr_58161_58181[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (14))){
var inst_58142 = (state_58144[(2)]);
var state_58144__$1 = state_58144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58144__$1,inst_58142);
} else {
if((state_val_58145 === (10))){
var inst_58112 = (state_58144[(7)]);
var state_58144__$1 = state_58144;
var statearr_58162_58182 = state_58144__$1;
(statearr_58162_58182[(2)] = inst_58112);

(statearr_58162_58182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58145 === (8))){
var inst_58125 = (state_58144[(2)]);
var state_58144__$1 = state_58144;
var statearr_58163_58183 = state_58144__$1;
(statearr_58163_58183[(2)] = inst_58125);

(statearr_58163_58183[(1)] = (5));


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
var statearr_58164 = [null,null,null,null,null,null,null,null,null];
(statearr_58164[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58164[(1)] = (1));

return statearr_58164;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58144){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58144);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58165){if((e58165 instanceof Object)){
var ex__38792__auto__ = e58165;
var statearr_58166_58184 = state_58144;
(statearr_58166_58184[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58185 = state_58144;
state_58144 = G__58185;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58144){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58167 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58167[(6)] = c__38856__auto__);

return statearr_58167;
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
