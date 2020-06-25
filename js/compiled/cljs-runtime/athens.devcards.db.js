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
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58072){
var state_val_58073 = (state_58072[(1)]);
if((state_val_58073 === (7))){
var state_58072__$1 = state_58072;
var statearr_58074_58096 = state_58072__$1;
(statearr_58074_58096[(2)] = false);

(statearr_58074_58096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (1))){
var inst_58035 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58036 = [false];
var inst_58037 = cljs.core.PersistentHashMap.fromArrays(inst_58035,inst_58036);
var inst_58038 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58037], 0));
var state_58072__$1 = state_58072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58072__$1,(2),inst_58038);
} else {
if((state_val_58073 === (4))){
var state_58072__$1 = state_58072;
var statearr_58075_58097 = state_58072__$1;
(statearr_58075_58097[(2)] = false);

(statearr_58075_58097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (13))){
var inst_58068 = alert("Failed to retrieve data from GitHub");
var state_58072__$1 = state_58072;
var statearr_58076_58098 = state_58072__$1;
(statearr_58076_58098[(2)] = inst_58068);

(statearr_58076_58098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (6))){
var state_58072__$1 = state_58072;
var statearr_58077_58099 = state_58072__$1;
(statearr_58077_58099[(2)] = true);

(statearr_58077_58099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (3))){
var inst_58040 = (state_58072[(7)]);
var inst_58045 = inst_58040.cljs$lang$protocol_mask$partition0$;
var inst_58046 = (inst_58045 & (64));
var inst_58047 = inst_58040.cljs$core$ISeq$;
var inst_58048 = (cljs.core.PROTOCOL_SENTINEL === inst_58047);
var inst_58049 = ((inst_58046) || (inst_58048));
var state_58072__$1 = state_58072;
if(cljs.core.truth_(inst_58049)){
var statearr_58078_58100 = state_58072__$1;
(statearr_58078_58100[(1)] = (6));

} else {
var statearr_58079_58101 = state_58072__$1;
(statearr_58079_58101[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (12))){
var inst_58063 = (state_58072[(8)]);
var inst_58065 = athens.db.str_to_db_tx(inst_58063);
var inst_58066 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58065) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58065));
var state_58072__$1 = state_58072;
var statearr_58080_58102 = state_58072__$1;
(statearr_58080_58102[(2)] = inst_58066);

(statearr_58080_58102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (2))){
var inst_58040 = (state_58072[(7)]);
var inst_58040__$1 = (state_58072[(2)]);
var inst_58042 = (inst_58040__$1 == null);
var inst_58043 = cljs.core.not(inst_58042);
var state_58072__$1 = (function (){var statearr_58081 = state_58072;
(statearr_58081[(7)] = inst_58040__$1);

return statearr_58081;
})();
if(inst_58043){
var statearr_58082_58103 = state_58072__$1;
(statearr_58082_58103[(1)] = (3));

} else {
var statearr_58083_58104 = state_58072__$1;
(statearr_58083_58104[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (11))){
var inst_58061 = (state_58072[(2)]);
var inst_58062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58061,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58061,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58072__$1 = (function (){var statearr_58084 = state_58072;
(statearr_58084[(8)] = inst_58063);

return statearr_58084;
})();
if(cljs.core.truth_(inst_58062)){
var statearr_58085_58105 = state_58072__$1;
(statearr_58085_58105[(1)] = (12));

} else {
var statearr_58086_58106 = state_58072__$1;
(statearr_58086_58106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (9))){
var inst_58040 = (state_58072[(7)]);
var inst_58058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58040);
var state_58072__$1 = state_58072;
var statearr_58087_58107 = state_58072__$1;
(statearr_58087_58107[(2)] = inst_58058);

(statearr_58087_58107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (5))){
var inst_58056 = (state_58072[(2)]);
var state_58072__$1 = state_58072;
if(cljs.core.truth_(inst_58056)){
var statearr_58088_58108 = state_58072__$1;
(statearr_58088_58108[(1)] = (9));

} else {
var statearr_58089_58109 = state_58072__$1;
(statearr_58089_58109[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (14))){
var inst_58070 = (state_58072[(2)]);
var state_58072__$1 = state_58072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58072__$1,inst_58070);
} else {
if((state_val_58073 === (10))){
var inst_58040 = (state_58072[(7)]);
var state_58072__$1 = state_58072;
var statearr_58090_58110 = state_58072__$1;
(statearr_58090_58110[(2)] = inst_58040);

(statearr_58090_58110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58073 === (8))){
var inst_58053 = (state_58072[(2)]);
var state_58072__$1 = state_58072;
var statearr_58091_58111 = state_58072__$1;
(statearr_58091_58111[(2)] = inst_58053);

(statearr_58091_58111[(1)] = (5));


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
var statearr_58092 = [null,null,null,null,null,null,null,null,null];
(statearr_58092[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58092[(1)] = (1));

return statearr_58092;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58072){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58072);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58093){if((e58093 instanceof Object)){
var ex__38792__auto__ = e58093;
var statearr_58094_58112 = state_58072;
(statearr_58094_58112[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58113 = state_58072;
state_58072 = G__58113;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58072){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58095 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58095[(6)] = c__38856__auto__);

return statearr_58095;
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
