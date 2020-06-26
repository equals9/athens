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
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58087){
var state_val_58088 = (state_58087[(1)]);
if((state_val_58088 === (7))){
var state_58087__$1 = state_58087;
var statearr_58089_58111 = state_58087__$1;
(statearr_58089_58111[(2)] = false);

(statearr_58089_58111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (1))){
var inst_58050 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58051 = [false];
var inst_58052 = cljs.core.PersistentHashMap.fromArrays(inst_58050,inst_58051);
var inst_58053 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58052], 0));
var state_58087__$1 = state_58087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58087__$1,(2),inst_58053);
} else {
if((state_val_58088 === (4))){
var state_58087__$1 = state_58087;
var statearr_58090_58112 = state_58087__$1;
(statearr_58090_58112[(2)] = false);

(statearr_58090_58112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (13))){
var inst_58083 = alert("Failed to retrieve data from GitHub");
var state_58087__$1 = state_58087;
var statearr_58091_58113 = state_58087__$1;
(statearr_58091_58113[(2)] = inst_58083);

(statearr_58091_58113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (6))){
var state_58087__$1 = state_58087;
var statearr_58092_58114 = state_58087__$1;
(statearr_58092_58114[(2)] = true);

(statearr_58092_58114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (3))){
var inst_58055 = (state_58087[(7)]);
var inst_58060 = inst_58055.cljs$lang$protocol_mask$partition0$;
var inst_58061 = (inst_58060 & (64));
var inst_58062 = inst_58055.cljs$core$ISeq$;
var inst_58063 = (cljs.core.PROTOCOL_SENTINEL === inst_58062);
var inst_58064 = ((inst_58061) || (inst_58063));
var state_58087__$1 = state_58087;
if(cljs.core.truth_(inst_58064)){
var statearr_58093_58115 = state_58087__$1;
(statearr_58093_58115[(1)] = (6));

} else {
var statearr_58094_58116 = state_58087__$1;
(statearr_58094_58116[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (12))){
var inst_58078 = (state_58087[(8)]);
var inst_58080 = athens.db.str_to_db_tx(inst_58078);
var inst_58081 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58080) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58080));
var state_58087__$1 = state_58087;
var statearr_58095_58117 = state_58087__$1;
(statearr_58095_58117[(2)] = inst_58081);

(statearr_58095_58117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (2))){
var inst_58055 = (state_58087[(7)]);
var inst_58055__$1 = (state_58087[(2)]);
var inst_58057 = (inst_58055__$1 == null);
var inst_58058 = cljs.core.not(inst_58057);
var state_58087__$1 = (function (){var statearr_58096 = state_58087;
(statearr_58096[(7)] = inst_58055__$1);

return statearr_58096;
})();
if(inst_58058){
var statearr_58097_58118 = state_58087__$1;
(statearr_58097_58118[(1)] = (3));

} else {
var statearr_58098_58119 = state_58087__$1;
(statearr_58098_58119[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (11))){
var inst_58076 = (state_58087[(2)]);
var inst_58077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58076,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58076,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58087__$1 = (function (){var statearr_58099 = state_58087;
(statearr_58099[(8)] = inst_58078);

return statearr_58099;
})();
if(cljs.core.truth_(inst_58077)){
var statearr_58100_58120 = state_58087__$1;
(statearr_58100_58120[(1)] = (12));

} else {
var statearr_58101_58121 = state_58087__$1;
(statearr_58101_58121[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (9))){
var inst_58055 = (state_58087[(7)]);
var inst_58073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58055);
var state_58087__$1 = state_58087;
var statearr_58102_58122 = state_58087__$1;
(statearr_58102_58122[(2)] = inst_58073);

(statearr_58102_58122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (5))){
var inst_58071 = (state_58087[(2)]);
var state_58087__$1 = state_58087;
if(cljs.core.truth_(inst_58071)){
var statearr_58103_58123 = state_58087__$1;
(statearr_58103_58123[(1)] = (9));

} else {
var statearr_58104_58124 = state_58087__$1;
(statearr_58104_58124[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (14))){
var inst_58085 = (state_58087[(2)]);
var state_58087__$1 = state_58087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58087__$1,inst_58085);
} else {
if((state_val_58088 === (10))){
var inst_58055 = (state_58087[(7)]);
var state_58087__$1 = state_58087;
var statearr_58105_58125 = state_58087__$1;
(statearr_58105_58125[(2)] = inst_58055);

(statearr_58105_58125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58088 === (8))){
var inst_58068 = (state_58087[(2)]);
var state_58087__$1 = state_58087;
var statearr_58106_58126 = state_58087__$1;
(statearr_58106_58126[(2)] = inst_58068);

(statearr_58106_58126[(1)] = (5));


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
var statearr_58107 = [null,null,null,null,null,null,null,null,null];
(statearr_58107[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58107[(1)] = (1));

return statearr_58107;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58087){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58087);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58108){if((e58108 instanceof Object)){
var ex__38792__auto__ = e58108;
var statearr_58109_58127 = state_58087;
(statearr_58109_58127[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58128 = state_58087;
state_58087 = G__58128;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58087){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58110 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58110[(6)] = c__38856__auto__);

return statearr_58110;
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
