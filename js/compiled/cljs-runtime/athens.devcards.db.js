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
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58172){
var state_val_58173 = (state_58172[(1)]);
if((state_val_58173 === (7))){
var state_58172__$1 = state_58172;
var statearr_58174_58196 = state_58172__$1;
(statearr_58174_58196[(2)] = false);

(statearr_58174_58196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (1))){
var inst_58135 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58136 = [false];
var inst_58137 = cljs.core.PersistentHashMap.fromArrays(inst_58135,inst_58136);
var inst_58138 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58137], 0));
var state_58172__$1 = state_58172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58172__$1,(2),inst_58138);
} else {
if((state_val_58173 === (4))){
var state_58172__$1 = state_58172;
var statearr_58175_58197 = state_58172__$1;
(statearr_58175_58197[(2)] = false);

(statearr_58175_58197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (13))){
var inst_58168 = alert("Failed to retrieve data from GitHub");
var state_58172__$1 = state_58172;
var statearr_58176_58198 = state_58172__$1;
(statearr_58176_58198[(2)] = inst_58168);

(statearr_58176_58198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (6))){
var state_58172__$1 = state_58172;
var statearr_58177_58199 = state_58172__$1;
(statearr_58177_58199[(2)] = true);

(statearr_58177_58199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (3))){
var inst_58140 = (state_58172[(7)]);
var inst_58145 = inst_58140.cljs$lang$protocol_mask$partition0$;
var inst_58146 = (inst_58145 & (64));
var inst_58147 = inst_58140.cljs$core$ISeq$;
var inst_58148 = (cljs.core.PROTOCOL_SENTINEL === inst_58147);
var inst_58149 = ((inst_58146) || (inst_58148));
var state_58172__$1 = state_58172;
if(cljs.core.truth_(inst_58149)){
var statearr_58178_58200 = state_58172__$1;
(statearr_58178_58200[(1)] = (6));

} else {
var statearr_58179_58201 = state_58172__$1;
(statearr_58179_58201[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (12))){
var inst_58163 = (state_58172[(8)]);
var inst_58165 = athens.db.str_to_db_tx(inst_58163);
var inst_58166 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58165) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58165));
var state_58172__$1 = state_58172;
var statearr_58180_58202 = state_58172__$1;
(statearr_58180_58202[(2)] = inst_58166);

(statearr_58180_58202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (2))){
var inst_58140 = (state_58172[(7)]);
var inst_58140__$1 = (state_58172[(2)]);
var inst_58142 = (inst_58140__$1 == null);
var inst_58143 = cljs.core.not(inst_58142);
var state_58172__$1 = (function (){var statearr_58181 = state_58172;
(statearr_58181[(7)] = inst_58140__$1);

return statearr_58181;
})();
if(inst_58143){
var statearr_58182_58203 = state_58172__$1;
(statearr_58182_58203[(1)] = (3));

} else {
var statearr_58183_58204 = state_58172__$1;
(statearr_58183_58204[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (11))){
var inst_58161 = (state_58172[(2)]);
var inst_58162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58161,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58161,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58172__$1 = (function (){var statearr_58184 = state_58172;
(statearr_58184[(8)] = inst_58163);

return statearr_58184;
})();
if(cljs.core.truth_(inst_58162)){
var statearr_58185_58205 = state_58172__$1;
(statearr_58185_58205[(1)] = (12));

} else {
var statearr_58186_58206 = state_58172__$1;
(statearr_58186_58206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (9))){
var inst_58140 = (state_58172[(7)]);
var inst_58158 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58140);
var state_58172__$1 = state_58172;
var statearr_58187_58207 = state_58172__$1;
(statearr_58187_58207[(2)] = inst_58158);

(statearr_58187_58207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (5))){
var inst_58156 = (state_58172[(2)]);
var state_58172__$1 = state_58172;
if(cljs.core.truth_(inst_58156)){
var statearr_58188_58208 = state_58172__$1;
(statearr_58188_58208[(1)] = (9));

} else {
var statearr_58189_58209 = state_58172__$1;
(statearr_58189_58209[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (14))){
var inst_58170 = (state_58172[(2)]);
var state_58172__$1 = state_58172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58172__$1,inst_58170);
} else {
if((state_val_58173 === (10))){
var inst_58140 = (state_58172[(7)]);
var state_58172__$1 = state_58172;
var statearr_58190_58210 = state_58172__$1;
(statearr_58190_58210[(2)] = inst_58140);

(statearr_58190_58210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58173 === (8))){
var inst_58153 = (state_58172[(2)]);
var state_58172__$1 = state_58172;
var statearr_58191_58211 = state_58172__$1;
(statearr_58191_58211[(2)] = inst_58153);

(statearr_58191_58211[(1)] = (5));


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
var statearr_58192 = [null,null,null,null,null,null,null,null,null];
(statearr_58192[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58192[(1)] = (1));

return statearr_58192;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58172){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58172);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58193){if((e58193 instanceof Object)){
var ex__38792__auto__ = e58193;
var statearr_58194_58212 = state_58172;
(statearr_58194_58212[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58213 = state_58172;
state_58172 = G__58213;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58172){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58195 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58195[(6)] = c__38856__auto__);

return statearr_58195;
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
