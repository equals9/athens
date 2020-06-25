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
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58074){
var state_val_58075 = (state_58074[(1)]);
if((state_val_58075 === (7))){
var state_58074__$1 = state_58074;
var statearr_58076_58098 = state_58074__$1;
(statearr_58076_58098[(2)] = false);

(statearr_58076_58098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (1))){
var inst_58037 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58038 = [false];
var inst_58039 = cljs.core.PersistentHashMap.fromArrays(inst_58037,inst_58038);
var inst_58040 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58039], 0));
var state_58074__$1 = state_58074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58074__$1,(2),inst_58040);
} else {
if((state_val_58075 === (4))){
var state_58074__$1 = state_58074;
var statearr_58077_58099 = state_58074__$1;
(statearr_58077_58099[(2)] = false);

(statearr_58077_58099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (13))){
var inst_58070 = alert("Failed to retrieve data from GitHub");
var state_58074__$1 = state_58074;
var statearr_58078_58100 = state_58074__$1;
(statearr_58078_58100[(2)] = inst_58070);

(statearr_58078_58100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (6))){
var state_58074__$1 = state_58074;
var statearr_58079_58101 = state_58074__$1;
(statearr_58079_58101[(2)] = true);

(statearr_58079_58101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (3))){
var inst_58042 = (state_58074[(7)]);
var inst_58047 = inst_58042.cljs$lang$protocol_mask$partition0$;
var inst_58048 = (inst_58047 & (64));
var inst_58049 = inst_58042.cljs$core$ISeq$;
var inst_58050 = (cljs.core.PROTOCOL_SENTINEL === inst_58049);
var inst_58051 = ((inst_58048) || (inst_58050));
var state_58074__$1 = state_58074;
if(cljs.core.truth_(inst_58051)){
var statearr_58080_58102 = state_58074__$1;
(statearr_58080_58102[(1)] = (6));

} else {
var statearr_58081_58103 = state_58074__$1;
(statearr_58081_58103[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (12))){
var inst_58065 = (state_58074[(8)]);
var inst_58067 = athens.db.str_to_db_tx(inst_58065);
var inst_58068 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58067) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58067));
var state_58074__$1 = state_58074;
var statearr_58082_58104 = state_58074__$1;
(statearr_58082_58104[(2)] = inst_58068);

(statearr_58082_58104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (2))){
var inst_58042 = (state_58074[(7)]);
var inst_58042__$1 = (state_58074[(2)]);
var inst_58044 = (inst_58042__$1 == null);
var inst_58045 = cljs.core.not(inst_58044);
var state_58074__$1 = (function (){var statearr_58083 = state_58074;
(statearr_58083[(7)] = inst_58042__$1);

return statearr_58083;
})();
if(inst_58045){
var statearr_58084_58105 = state_58074__$1;
(statearr_58084_58105[(1)] = (3));

} else {
var statearr_58085_58106 = state_58074__$1;
(statearr_58085_58106[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (11))){
var inst_58063 = (state_58074[(2)]);
var inst_58064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58063,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58063,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58074__$1 = (function (){var statearr_58086 = state_58074;
(statearr_58086[(8)] = inst_58065);

return statearr_58086;
})();
if(cljs.core.truth_(inst_58064)){
var statearr_58087_58107 = state_58074__$1;
(statearr_58087_58107[(1)] = (12));

} else {
var statearr_58088_58108 = state_58074__$1;
(statearr_58088_58108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (9))){
var inst_58042 = (state_58074[(7)]);
var inst_58060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58042);
var state_58074__$1 = state_58074;
var statearr_58089_58109 = state_58074__$1;
(statearr_58089_58109[(2)] = inst_58060);

(statearr_58089_58109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (5))){
var inst_58058 = (state_58074[(2)]);
var state_58074__$1 = state_58074;
if(cljs.core.truth_(inst_58058)){
var statearr_58090_58110 = state_58074__$1;
(statearr_58090_58110[(1)] = (9));

} else {
var statearr_58091_58111 = state_58074__$1;
(statearr_58091_58111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (14))){
var inst_58072 = (state_58074[(2)]);
var state_58074__$1 = state_58074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58074__$1,inst_58072);
} else {
if((state_val_58075 === (10))){
var inst_58042 = (state_58074[(7)]);
var state_58074__$1 = state_58074;
var statearr_58092_58112 = state_58074__$1;
(statearr_58092_58112[(2)] = inst_58042);

(statearr_58092_58112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58075 === (8))){
var inst_58055 = (state_58074[(2)]);
var state_58074__$1 = state_58074;
var statearr_58093_58113 = state_58074__$1;
(statearr_58093_58113[(2)] = inst_58055);

(statearr_58093_58113[(1)] = (5));


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
var statearr_58094 = [null,null,null,null,null,null,null,null,null];
(statearr_58094[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58094[(1)] = (1));

return statearr_58094;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58074){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58074);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58095){if((e58095 instanceof Object)){
var ex__38792__auto__ = e58095;
var statearr_58096_58114 = state_58074;
(statearr_58096_58114[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58115 = state_58074;
state_58074 = G__58115;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58074){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58097 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58097[(6)] = c__38856__auto__);

return statearr_58097;
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
