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
var f__38856__auto__ = (function (){var switch__38788__auto__ = (function (state_58063){
var state_val_58064 = (state_58063[(1)]);
if((state_val_58064 === (7))){
var state_58063__$1 = state_58063;
var statearr_58065_58087 = state_58063__$1;
(statearr_58065_58087[(2)] = false);

(statearr_58065_58087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (1))){
var inst_58026 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58027 = [false];
var inst_58028 = cljs.core.PersistentHashMap.fromArrays(inst_58026,inst_58027);
var inst_58029 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58028], 0));
var state_58063__$1 = state_58063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58063__$1,(2),inst_58029);
} else {
if((state_val_58064 === (4))){
var state_58063__$1 = state_58063;
var statearr_58066_58088 = state_58063__$1;
(statearr_58066_58088[(2)] = false);

(statearr_58066_58088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (13))){
var inst_58059 = alert("Failed to retrieve data from GitHub");
var state_58063__$1 = state_58063;
var statearr_58067_58089 = state_58063__$1;
(statearr_58067_58089[(2)] = inst_58059);

(statearr_58067_58089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (6))){
var state_58063__$1 = state_58063;
var statearr_58068_58090 = state_58063__$1;
(statearr_58068_58090[(2)] = true);

(statearr_58068_58090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (3))){
var inst_58031 = (state_58063[(7)]);
var inst_58036 = inst_58031.cljs$lang$protocol_mask$partition0$;
var inst_58037 = (inst_58036 & (64));
var inst_58038 = inst_58031.cljs$core$ISeq$;
var inst_58039 = (cljs.core.PROTOCOL_SENTINEL === inst_58038);
var inst_58040 = ((inst_58037) || (inst_58039));
var state_58063__$1 = state_58063;
if(cljs.core.truth_(inst_58040)){
var statearr_58069_58091 = state_58063__$1;
(statearr_58069_58091[(1)] = (6));

} else {
var statearr_58070_58092 = state_58063__$1;
(statearr_58070_58092[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (12))){
var inst_58054 = (state_58063[(8)]);
var inst_58056 = athens.db.str_to_db_tx(inst_58054);
var inst_58057 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58056) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58056));
var state_58063__$1 = state_58063;
var statearr_58071_58093 = state_58063__$1;
(statearr_58071_58093[(2)] = inst_58057);

(statearr_58071_58093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (2))){
var inst_58031 = (state_58063[(7)]);
var inst_58031__$1 = (state_58063[(2)]);
var inst_58033 = (inst_58031__$1 == null);
var inst_58034 = cljs.core.not(inst_58033);
var state_58063__$1 = (function (){var statearr_58072 = state_58063;
(statearr_58072[(7)] = inst_58031__$1);

return statearr_58072;
})();
if(inst_58034){
var statearr_58073_58094 = state_58063__$1;
(statearr_58073_58094[(1)] = (3));

} else {
var statearr_58074_58095 = state_58063__$1;
(statearr_58074_58095[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (11))){
var inst_58052 = (state_58063[(2)]);
var inst_58053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58052,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58052,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58063__$1 = (function (){var statearr_58075 = state_58063;
(statearr_58075[(8)] = inst_58054);

return statearr_58075;
})();
if(cljs.core.truth_(inst_58053)){
var statearr_58076_58096 = state_58063__$1;
(statearr_58076_58096[(1)] = (12));

} else {
var statearr_58077_58097 = state_58063__$1;
(statearr_58077_58097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (9))){
var inst_58031 = (state_58063[(7)]);
var inst_58049 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58031);
var state_58063__$1 = state_58063;
var statearr_58078_58098 = state_58063__$1;
(statearr_58078_58098[(2)] = inst_58049);

(statearr_58078_58098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (5))){
var inst_58047 = (state_58063[(2)]);
var state_58063__$1 = state_58063;
if(cljs.core.truth_(inst_58047)){
var statearr_58079_58099 = state_58063__$1;
(statearr_58079_58099[(1)] = (9));

} else {
var statearr_58080_58100 = state_58063__$1;
(statearr_58080_58100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (14))){
var inst_58061 = (state_58063[(2)]);
var state_58063__$1 = state_58063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58063__$1,inst_58061);
} else {
if((state_val_58064 === (10))){
var inst_58031 = (state_58063[(7)]);
var state_58063__$1 = state_58063;
var statearr_58081_58101 = state_58063__$1;
(statearr_58081_58101[(2)] = inst_58031);

(statearr_58081_58101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58064 === (8))){
var inst_58044 = (state_58063[(2)]);
var state_58063__$1 = state_58063;
var statearr_58082_58102 = state_58063__$1;
(statearr_58082_58102[(2)] = inst_58044);

(statearr_58082_58102[(1)] = (5));


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
var statearr_58083 = [null,null,null,null,null,null,null,null,null];
(statearr_58083[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58083[(1)] = (1));

return statearr_58083;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58063){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58063);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58084){if((e58084 instanceof Object)){
var ex__38792__auto__ = e58084;
var statearr_58085_58103 = state_58063;
(statearr_58085_58103[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58104 = state_58063;
state_58063 = G__58104;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58063){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38857__auto__ = (function (){var statearr_58086 = (f__38856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38856__auto__.cljs$core$IFn$_invoke$arity$0() : f__38856__auto__.call(null));
(statearr_58086[(6)] = c__38855__auto__);

return statearr_58086;
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
