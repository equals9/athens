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
var f__38856__auto__ = (function (){var switch__38788__auto__ = (function (state_58166){
var state_val_58167 = (state_58166[(1)]);
if((state_val_58167 === (7))){
var state_58166__$1 = state_58166;
var statearr_58168_58190 = state_58166__$1;
(statearr_58168_58190[(2)] = false);

(statearr_58168_58190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (1))){
var inst_58129 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58130 = [false];
var inst_58131 = cljs.core.PersistentHashMap.fromArrays(inst_58129,inst_58130);
var inst_58132 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58131], 0));
var state_58166__$1 = state_58166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58166__$1,(2),inst_58132);
} else {
if((state_val_58167 === (4))){
var state_58166__$1 = state_58166;
var statearr_58169_58191 = state_58166__$1;
(statearr_58169_58191[(2)] = false);

(statearr_58169_58191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (13))){
var inst_58162 = alert("Failed to retrieve data from GitHub");
var state_58166__$1 = state_58166;
var statearr_58170_58192 = state_58166__$1;
(statearr_58170_58192[(2)] = inst_58162);

(statearr_58170_58192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (6))){
var state_58166__$1 = state_58166;
var statearr_58171_58193 = state_58166__$1;
(statearr_58171_58193[(2)] = true);

(statearr_58171_58193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (3))){
var inst_58134 = (state_58166[(7)]);
var inst_58139 = inst_58134.cljs$lang$protocol_mask$partition0$;
var inst_58140 = (inst_58139 & (64));
var inst_58141 = inst_58134.cljs$core$ISeq$;
var inst_58142 = (cljs.core.PROTOCOL_SENTINEL === inst_58141);
var inst_58143 = ((inst_58140) || (inst_58142));
var state_58166__$1 = state_58166;
if(cljs.core.truth_(inst_58143)){
var statearr_58172_58194 = state_58166__$1;
(statearr_58172_58194[(1)] = (6));

} else {
var statearr_58173_58195 = state_58166__$1;
(statearr_58173_58195[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (12))){
var inst_58157 = (state_58166[(8)]);
var inst_58159 = athens.db.str_to_db_tx(inst_58157);
var inst_58160 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58159) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58159));
var state_58166__$1 = state_58166;
var statearr_58174_58196 = state_58166__$1;
(statearr_58174_58196[(2)] = inst_58160);

(statearr_58174_58196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (2))){
var inst_58134 = (state_58166[(7)]);
var inst_58134__$1 = (state_58166[(2)]);
var inst_58136 = (inst_58134__$1 == null);
var inst_58137 = cljs.core.not(inst_58136);
var state_58166__$1 = (function (){var statearr_58175 = state_58166;
(statearr_58175[(7)] = inst_58134__$1);

return statearr_58175;
})();
if(inst_58137){
var statearr_58176_58197 = state_58166__$1;
(statearr_58176_58197[(1)] = (3));

} else {
var statearr_58177_58198 = state_58166__$1;
(statearr_58177_58198[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (11))){
var inst_58155 = (state_58166[(2)]);
var inst_58156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58155,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58155,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58166__$1 = (function (){var statearr_58178 = state_58166;
(statearr_58178[(8)] = inst_58157);

return statearr_58178;
})();
if(cljs.core.truth_(inst_58156)){
var statearr_58179_58199 = state_58166__$1;
(statearr_58179_58199[(1)] = (12));

} else {
var statearr_58180_58200 = state_58166__$1;
(statearr_58180_58200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (9))){
var inst_58134 = (state_58166[(7)]);
var inst_58152 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58134);
var state_58166__$1 = state_58166;
var statearr_58181_58201 = state_58166__$1;
(statearr_58181_58201[(2)] = inst_58152);

(statearr_58181_58201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (5))){
var inst_58150 = (state_58166[(2)]);
var state_58166__$1 = state_58166;
if(cljs.core.truth_(inst_58150)){
var statearr_58182_58202 = state_58166__$1;
(statearr_58182_58202[(1)] = (9));

} else {
var statearr_58183_58203 = state_58166__$1;
(statearr_58183_58203[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (14))){
var inst_58164 = (state_58166[(2)]);
var state_58166__$1 = state_58166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58166__$1,inst_58164);
} else {
if((state_val_58167 === (10))){
var inst_58134 = (state_58166[(7)]);
var state_58166__$1 = state_58166;
var statearr_58184_58204 = state_58166__$1;
(statearr_58184_58204[(2)] = inst_58134);

(statearr_58184_58204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58167 === (8))){
var inst_58147 = (state_58166[(2)]);
var state_58166__$1 = state_58166;
var statearr_58185_58205 = state_58166__$1;
(statearr_58185_58205[(2)] = inst_58147);

(statearr_58185_58205[(1)] = (5));


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
var statearr_58186 = [null,null,null,null,null,null,null,null,null];
(statearr_58186[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58186[(1)] = (1));

return statearr_58186;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58166){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58166);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58187){if((e58187 instanceof Object)){
var ex__38792__auto__ = e58187;
var statearr_58188_58206 = state_58166;
(statearr_58188_58206[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58207 = state_58166;
state_58166 = G__58207;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58166){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38857__auto__ = (function (){var statearr_58189 = (f__38856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38856__auto__.cljs$core$IFn$_invoke$arity$0() : f__38856__auto__.call(null));
(statearr_58189[(6)] = c__38855__auto__);

return statearr_58189;
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
