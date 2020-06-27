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
var G__61006_61100 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61007_61101 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61006_61100,G__61007_61101) : re_frame.core.reg_fx.call(null,G__61006_61100,G__61007_61101));
var G__61008_61102 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61009_61103 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61008_61102,G__61009_61103) : re_frame.core.reg_fx.call(null,G__61008_61102,G__61009_61103));
var G__61010_61104 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61011_61105 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61010_61104,G__61011_61105) : re_frame.core.reg_fx.call(null,G__61010_61104,G__61011_61105));
var G__61012_61106 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61013_61107 = (function (p__61014){
var map__61015 = p__61014;
var map__61015__$1 = (((((!((map__61015 == null))))?(((((map__61015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61015):map__61015);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_61059){
var state_val_61060 = (state_61059[(1)]);
if((state_val_61060 === (7))){
var inst_61026 = (state_61059[(7)]);
var inst_61026__$1 = (state_61059[(2)]);
var inst_61028 = (inst_61026__$1 == null);
var inst_61029 = cljs.core.not(inst_61028);
var state_61059__$1 = (function (){var statearr_61061 = state_61059;
(statearr_61061[(7)] = inst_61026__$1);

return statearr_61061;
})();
if(inst_61029){
var statearr_61062_61108 = state_61059__$1;
(statearr_61062_61108[(1)] = (8));

} else {
var statearr_61063_61109 = state_61059__$1;
(statearr_61063_61109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (1))){
var state_61059__$1 = state_61059;
var G__61064_61110 = method;
var G__61064_61111__$1 = (((G__61064_61110 instanceof cljs.core.Keyword))?G__61064_61110.fqn:null);
switch (G__61064_61111__$1) {
case "post":
var statearr_61065_61113 = state_61059__$1;
(statearr_61065_61113[(1)] = (3));


break;
case "get":
var statearr_61066_61114 = state_61059__$1;
(statearr_61066_61114[(1)] = (4));


break;
case "put":
var statearr_61067_61115 = state_61059__$1;
(statearr_61067_61115[(1)] = (5));


break;
case "delete":
var statearr_61068_61116 = state_61059__$1;
(statearr_61068_61116[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61064_61111__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (4))){
var state_61059__$1 = state_61059;
var statearr_61069_61117 = state_61059__$1;
(statearr_61069_61117[(2)] = cljs_http.client.get);

(statearr_61069_61117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (15))){
var inst_61026 = (state_61059[(7)]);
var state_61059__$1 = state_61059;
var statearr_61070_61118 = state_61059__$1;
(statearr_61070_61118[(2)] = inst_61026);

(statearr_61070_61118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (13))){
var inst_61039 = (state_61059[(2)]);
var state_61059__$1 = state_61059;
var statearr_61071_61119 = state_61059__$1;
(statearr_61071_61119[(2)] = inst_61039);

(statearr_61071_61119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (6))){
var state_61059__$1 = state_61059;
var statearr_61072_61120 = state_61059__$1;
(statearr_61072_61120[(2)] = cljs_http.client.delete$);

(statearr_61072_61120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (17))){
var inst_61049 = (state_61059[(8)]);
var inst_61051 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61049);
var inst_61052 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61051) : re_frame.core.dispatch.call(null,inst_61051));
var state_61059__$1 = state_61059;
var statearr_61073_61121 = state_61059__$1;
(statearr_61073_61121[(2)] = inst_61052);

(statearr_61073_61121[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (3))){
var state_61059__$1 = state_61059;
var statearr_61074_61122 = state_61059__$1;
(statearr_61074_61122[(2)] = cljs_http.client.post);

(statearr_61074_61122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (12))){
var state_61059__$1 = state_61059;
var statearr_61075_61123 = state_61059__$1;
(statearr_61075_61123[(2)] = false);

(statearr_61075_61123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (2))){
var inst_61023 = (state_61059[(2)]);
var inst_61024 = (inst_61023.cljs$core$IFn$_invoke$arity$2 ? inst_61023.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61023.call(null,url,opts));
var state_61059__$1 = state_61059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61059__$1,(7),inst_61024);
} else {
if((state_val_61060 === (19))){
var inst_61057 = (state_61059[(2)]);
var state_61059__$1 = state_61059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61059__$1,inst_61057);
} else {
if((state_val_61060 === (11))){
var state_61059__$1 = state_61059;
var statearr_61076_61124 = state_61059__$1;
(statearr_61076_61124[(2)] = true);

(statearr_61076_61124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (9))){
var state_61059__$1 = state_61059;
var statearr_61077_61125 = state_61059__$1;
(statearr_61077_61125[(2)] = false);

(statearr_61077_61125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (5))){
var state_61059__$1 = state_61059;
var statearr_61078_61126 = state_61059__$1;
(statearr_61078_61126[(2)] = cljs_http.client.put);

(statearr_61078_61126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (14))){
var inst_61026 = (state_61059[(7)]);
var inst_61044 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61026);
var state_61059__$1 = state_61059;
var statearr_61079_61127 = state_61059__$1;
(statearr_61079_61127[(2)] = inst_61044);

(statearr_61079_61127[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (16))){
var inst_61047 = (state_61059[(9)]);
var inst_61047__$1 = (state_61059[(2)]);
var inst_61048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61047__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61047__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61059__$1 = (function (){var statearr_61080 = state_61059;
(statearr_61080[(8)] = inst_61049);

(statearr_61080[(9)] = inst_61047__$1);

return statearr_61080;
})();
if(cljs.core.truth_(inst_61048)){
var statearr_61081_61128 = state_61059__$1;
(statearr_61081_61128[(1)] = (17));

} else {
var statearr_61082_61129 = state_61059__$1;
(statearr_61082_61129[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (10))){
var inst_61042 = (state_61059[(2)]);
var state_61059__$1 = state_61059;
if(cljs.core.truth_(inst_61042)){
var statearr_61083_61130 = state_61059__$1;
(statearr_61083_61130[(1)] = (14));

} else {
var statearr_61084_61131 = state_61059__$1;
(statearr_61084_61131[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (18))){
var inst_61047 = (state_61059[(9)]);
var inst_61054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61047);
var inst_61055 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61054) : re_frame.core.dispatch.call(null,inst_61054));
var state_61059__$1 = state_61059;
var statearr_61085_61132 = state_61059__$1;
(statearr_61085_61132[(2)] = inst_61055);

(statearr_61085_61132[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61060 === (8))){
var inst_61026 = (state_61059[(7)]);
var inst_61031 = inst_61026.cljs$lang$protocol_mask$partition0$;
var inst_61032 = (inst_61031 & (64));
var inst_61033 = inst_61026.cljs$core$ISeq$;
var inst_61034 = (cljs.core.PROTOCOL_SENTINEL === inst_61033);
var inst_61035 = ((inst_61032) || (inst_61034));
var state_61059__$1 = state_61059;
if(cljs.core.truth_(inst_61035)){
var statearr_61086_61133 = state_61059__$1;
(statearr_61086_61133[(1)] = (11));

} else {
var statearr_61087_61134 = state_61059__$1;
(statearr_61087_61134[(1)] = (12));

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
var statearr_61088 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61088[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_61088[(1)] = (1));

return statearr_61088;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_61059){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_61059);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e61089){if((e61089 instanceof Object)){
var ex__34210__auto__ = e61089;
var statearr_61090_61135 = state_61059;
(statearr_61090_61135[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61136 = state_61059;
state_61059 = G__61136;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_61059){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_61059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_61091 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_61091[(6)] = c__34273__auto__);

return statearr_61091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61012_61106,G__61013_61107) : re_frame.core.reg_fx.call(null,G__61012_61106,G__61013_61107));
var G__61094_61137 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61095_61138 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61096){
var map__61097 = p__61096;
var map__61097__$1 = (((((!((map__61097 == null))))?(((((map__61097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61097):map__61097);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61097__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61097__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61097__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61097__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61099 = action;
var G__61099__$1 = (((G__61099 instanceof cljs.core.Keyword))?G__61099.fqn:null);
switch (G__61099__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61099__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61094_61137,G__61095_61138) : re_frame.core.reg_fx.call(null,G__61094_61137,G__61095_61138));

//# sourceMappingURL=athens.effects.js.map
