goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__60998_61090 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60999_61091 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60998_61090,G__60999_61091) : re_frame.core.reg_fx.call(null,G__60998_61090,G__60999_61091));
var G__61000_61092 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61001_61093 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61000_61092,G__61001_61093) : re_frame.core.reg_fx.call(null,G__61000_61092,G__61001_61093));
var G__61002_61094 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61003_61095 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61002_61094,G__61003_61095) : re_frame.core.reg_fx.call(null,G__61002_61094,G__61003_61095));
var G__61004_61096 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61005_61097 = (function (p__61006){
var map__61007 = p__61006;
var map__61007__$1 = (((((!((map__61007 == null))))?(((((map__61007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61007):map__61007);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_61051){
var state_val_61052 = (state_61051[(1)]);
if((state_val_61052 === (7))){
var inst_61018 = (state_61051[(7)]);
var inst_61018__$1 = (state_61051[(2)]);
var inst_61020 = (inst_61018__$1 == null);
var inst_61021 = cljs.core.not(inst_61020);
var state_61051__$1 = (function (){var statearr_61053 = state_61051;
(statearr_61053[(7)] = inst_61018__$1);

return statearr_61053;
})();
if(inst_61021){
var statearr_61054_61098 = state_61051__$1;
(statearr_61054_61098[(1)] = (8));

} else {
var statearr_61055_61099 = state_61051__$1;
(statearr_61055_61099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (1))){
var state_61051__$1 = state_61051;
var G__61056_61100 = method;
var G__61056_61101__$1 = (((G__61056_61100 instanceof cljs.core.Keyword))?G__61056_61100.fqn:null);
switch (G__61056_61101__$1) {
case "post":
var statearr_61057_61103 = state_61051__$1;
(statearr_61057_61103[(1)] = (3));


break;
case "get":
var statearr_61058_61104 = state_61051__$1;
(statearr_61058_61104[(1)] = (4));


break;
case "put":
var statearr_61059_61105 = state_61051__$1;
(statearr_61059_61105[(1)] = (5));


break;
case "delete":
var statearr_61060_61106 = state_61051__$1;
(statearr_61060_61106[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61056_61101__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (4))){
var state_61051__$1 = state_61051;
var statearr_61061_61107 = state_61051__$1;
(statearr_61061_61107[(2)] = cljs_http.client.get);

(statearr_61061_61107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (15))){
var inst_61018 = (state_61051[(7)]);
var state_61051__$1 = state_61051;
var statearr_61062_61108 = state_61051__$1;
(statearr_61062_61108[(2)] = inst_61018);

(statearr_61062_61108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (13))){
var inst_61031 = (state_61051[(2)]);
var state_61051__$1 = state_61051;
var statearr_61063_61109 = state_61051__$1;
(statearr_61063_61109[(2)] = inst_61031);

(statearr_61063_61109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (6))){
var state_61051__$1 = state_61051;
var statearr_61064_61110 = state_61051__$1;
(statearr_61064_61110[(2)] = cljs_http.client.delete$);

(statearr_61064_61110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (17))){
var inst_61041 = (state_61051[(8)]);
var inst_61043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61041);
var inst_61044 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61043) : re_frame.core.dispatch.call(null,inst_61043));
var state_61051__$1 = state_61051;
var statearr_61065_61111 = state_61051__$1;
(statearr_61065_61111[(2)] = inst_61044);

(statearr_61065_61111[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (3))){
var state_61051__$1 = state_61051;
var statearr_61066_61112 = state_61051__$1;
(statearr_61066_61112[(2)] = cljs_http.client.post);

(statearr_61066_61112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (12))){
var state_61051__$1 = state_61051;
var statearr_61067_61113 = state_61051__$1;
(statearr_61067_61113[(2)] = false);

(statearr_61067_61113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (2))){
var inst_61015 = (state_61051[(2)]);
var inst_61016 = (inst_61015.cljs$core$IFn$_invoke$arity$2 ? inst_61015.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61015.call(null,url,opts));
var state_61051__$1 = state_61051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61051__$1,(7),inst_61016);
} else {
if((state_val_61052 === (19))){
var inst_61049 = (state_61051[(2)]);
var state_61051__$1 = state_61051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61051__$1,inst_61049);
} else {
if((state_val_61052 === (11))){
var state_61051__$1 = state_61051;
var statearr_61068_61114 = state_61051__$1;
(statearr_61068_61114[(2)] = true);

(statearr_61068_61114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (9))){
var state_61051__$1 = state_61051;
var statearr_61069_61115 = state_61051__$1;
(statearr_61069_61115[(2)] = false);

(statearr_61069_61115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (5))){
var state_61051__$1 = state_61051;
var statearr_61070_61116 = state_61051__$1;
(statearr_61070_61116[(2)] = cljs_http.client.put);

(statearr_61070_61116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (14))){
var inst_61018 = (state_61051[(7)]);
var inst_61036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61018);
var state_61051__$1 = state_61051;
var statearr_61071_61117 = state_61051__$1;
(statearr_61071_61117[(2)] = inst_61036);

(statearr_61071_61117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (16))){
var inst_61039 = (state_61051[(9)]);
var inst_61039__$1 = (state_61051[(2)]);
var inst_61040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61039__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61039__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61051__$1 = (function (){var statearr_61072 = state_61051;
(statearr_61072[(9)] = inst_61039__$1);

(statearr_61072[(8)] = inst_61041);

return statearr_61072;
})();
if(cljs.core.truth_(inst_61040)){
var statearr_61073_61118 = state_61051__$1;
(statearr_61073_61118[(1)] = (17));

} else {
var statearr_61074_61119 = state_61051__$1;
(statearr_61074_61119[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (10))){
var inst_61034 = (state_61051[(2)]);
var state_61051__$1 = state_61051;
if(cljs.core.truth_(inst_61034)){
var statearr_61075_61120 = state_61051__$1;
(statearr_61075_61120[(1)] = (14));

} else {
var statearr_61076_61121 = state_61051__$1;
(statearr_61076_61121[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (18))){
var inst_61039 = (state_61051[(9)]);
var inst_61046 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61039);
var inst_61047 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61046) : re_frame.core.dispatch.call(null,inst_61046));
var state_61051__$1 = state_61051;
var statearr_61077_61122 = state_61051__$1;
(statearr_61077_61122[(2)] = inst_61047);

(statearr_61077_61122[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61052 === (8))){
var inst_61018 = (state_61051[(7)]);
var inst_61023 = inst_61018.cljs$lang$protocol_mask$partition0$;
var inst_61024 = (inst_61023 & (64));
var inst_61025 = inst_61018.cljs$core$ISeq$;
var inst_61026 = (cljs.core.PROTOCOL_SENTINEL === inst_61025);
var inst_61027 = ((inst_61024) || (inst_61026));
var state_61051__$1 = state_61051;
if(cljs.core.truth_(inst_61027)){
var statearr_61078_61123 = state_61051__$1;
(statearr_61078_61123[(1)] = (11));

} else {
var statearr_61079_61124 = state_61051__$1;
(statearr_61079_61124[(1)] = (12));

}

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
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__34207__auto__ = null;
var athens$effects$state_machine__34207__auto____0 = (function (){
var statearr_61080 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61080[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_61080[(1)] = (1));

return statearr_61080;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_61051){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_61051);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e61081){if((e61081 instanceof Object)){
var ex__34210__auto__ = e61081;
var statearr_61082_61125 = state_61051;
(statearr_61082_61125[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61126 = state_61051;
state_61051 = G__61126;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_61051){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_61051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_61083 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_61083[(6)] = c__34273__auto__);

return statearr_61083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61004_61096,G__61005_61097) : re_frame.core.reg_fx.call(null,G__61004_61096,G__61005_61097));
var G__61084_61127 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61085_61128 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61086){
var map__61087 = p__61086;
var map__61087__$1 = (((((!((map__61087 == null))))?(((((map__61087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61087):map__61087);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61089 = action;
var G__61089__$1 = (((G__61089 instanceof cljs.core.Keyword))?G__61089.fqn:null);
switch (G__61089__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61089__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61084_61127,G__61085_61128) : re_frame.core.reg_fx.call(null,G__61084_61127,G__61085_61128));

//# sourceMappingURL=athens.effects.js.map
