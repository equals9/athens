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
var G__61040_61132 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61041_61133 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61040_61132,G__61041_61133) : re_frame.core.reg_fx.call(null,G__61040_61132,G__61041_61133));
var G__61042_61134 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61043_61135 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61042_61134,G__61043_61135) : re_frame.core.reg_fx.call(null,G__61042_61134,G__61043_61135));
var G__61044_61136 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61045_61137 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61044_61136,G__61045_61137) : re_frame.core.reg_fx.call(null,G__61044_61136,G__61045_61137));
var G__61046_61138 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61047_61139 = (function (p__61048){
var map__61049 = p__61048;
var map__61049__$1 = (((((!((map__61049 == null))))?(((((map__61049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61049):map__61049);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61049__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61049__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61049__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61049__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61049__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_61093){
var state_val_61094 = (state_61093[(1)]);
if((state_val_61094 === (7))){
var inst_61060 = (state_61093[(7)]);
var inst_61060__$1 = (state_61093[(2)]);
var inst_61062 = (inst_61060__$1 == null);
var inst_61063 = cljs.core.not(inst_61062);
var state_61093__$1 = (function (){var statearr_61095 = state_61093;
(statearr_61095[(7)] = inst_61060__$1);

return statearr_61095;
})();
if(inst_61063){
var statearr_61096_61140 = state_61093__$1;
(statearr_61096_61140[(1)] = (8));

} else {
var statearr_61097_61141 = state_61093__$1;
(statearr_61097_61141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (1))){
var state_61093__$1 = state_61093;
var G__61098_61142 = method;
var G__61098_61143__$1 = (((G__61098_61142 instanceof cljs.core.Keyword))?G__61098_61142.fqn:null);
switch (G__61098_61143__$1) {
case "post":
var statearr_61099_61145 = state_61093__$1;
(statearr_61099_61145[(1)] = (3));


break;
case "get":
var statearr_61100_61146 = state_61093__$1;
(statearr_61100_61146[(1)] = (4));


break;
case "put":
var statearr_61101_61147 = state_61093__$1;
(statearr_61101_61147[(1)] = (5));


break;
case "delete":
var statearr_61102_61148 = state_61093__$1;
(statearr_61102_61148[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61098_61143__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (4))){
var state_61093__$1 = state_61093;
var statearr_61103_61149 = state_61093__$1;
(statearr_61103_61149[(2)] = cljs_http.client.get);

(statearr_61103_61149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (15))){
var inst_61060 = (state_61093[(7)]);
var state_61093__$1 = state_61093;
var statearr_61104_61150 = state_61093__$1;
(statearr_61104_61150[(2)] = inst_61060);

(statearr_61104_61150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (13))){
var inst_61073 = (state_61093[(2)]);
var state_61093__$1 = state_61093;
var statearr_61105_61151 = state_61093__$1;
(statearr_61105_61151[(2)] = inst_61073);

(statearr_61105_61151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (6))){
var state_61093__$1 = state_61093;
var statearr_61106_61152 = state_61093__$1;
(statearr_61106_61152[(2)] = cljs_http.client.delete$);

(statearr_61106_61152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (17))){
var inst_61083 = (state_61093[(8)]);
var inst_61085 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61083);
var inst_61086 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61085) : re_frame.core.dispatch.call(null,inst_61085));
var state_61093__$1 = state_61093;
var statearr_61107_61153 = state_61093__$1;
(statearr_61107_61153[(2)] = inst_61086);

(statearr_61107_61153[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (3))){
var state_61093__$1 = state_61093;
var statearr_61108_61154 = state_61093__$1;
(statearr_61108_61154[(2)] = cljs_http.client.post);

(statearr_61108_61154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (12))){
var state_61093__$1 = state_61093;
var statearr_61109_61155 = state_61093__$1;
(statearr_61109_61155[(2)] = false);

(statearr_61109_61155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (2))){
var inst_61057 = (state_61093[(2)]);
var inst_61058 = (inst_61057.cljs$core$IFn$_invoke$arity$2 ? inst_61057.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61057.call(null,url,opts));
var state_61093__$1 = state_61093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61093__$1,(7),inst_61058);
} else {
if((state_val_61094 === (19))){
var inst_61091 = (state_61093[(2)]);
var state_61093__$1 = state_61093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61093__$1,inst_61091);
} else {
if((state_val_61094 === (11))){
var state_61093__$1 = state_61093;
var statearr_61110_61156 = state_61093__$1;
(statearr_61110_61156[(2)] = true);

(statearr_61110_61156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (9))){
var state_61093__$1 = state_61093;
var statearr_61111_61157 = state_61093__$1;
(statearr_61111_61157[(2)] = false);

(statearr_61111_61157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (5))){
var state_61093__$1 = state_61093;
var statearr_61112_61158 = state_61093__$1;
(statearr_61112_61158[(2)] = cljs_http.client.put);

(statearr_61112_61158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (14))){
var inst_61060 = (state_61093[(7)]);
var inst_61078 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61060);
var state_61093__$1 = state_61093;
var statearr_61113_61159 = state_61093__$1;
(statearr_61113_61159[(2)] = inst_61078);

(statearr_61113_61159[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (16))){
var inst_61081 = (state_61093[(9)]);
var inst_61081__$1 = (state_61093[(2)]);
var inst_61082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61081__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61081__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61093__$1 = (function (){var statearr_61114 = state_61093;
(statearr_61114[(9)] = inst_61081__$1);

(statearr_61114[(8)] = inst_61083);

return statearr_61114;
})();
if(cljs.core.truth_(inst_61082)){
var statearr_61115_61160 = state_61093__$1;
(statearr_61115_61160[(1)] = (17));

} else {
var statearr_61116_61161 = state_61093__$1;
(statearr_61116_61161[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (10))){
var inst_61076 = (state_61093[(2)]);
var state_61093__$1 = state_61093;
if(cljs.core.truth_(inst_61076)){
var statearr_61117_61162 = state_61093__$1;
(statearr_61117_61162[(1)] = (14));

} else {
var statearr_61118_61163 = state_61093__$1;
(statearr_61118_61163[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (18))){
var inst_61081 = (state_61093[(9)]);
var inst_61088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61081);
var inst_61089 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61088) : re_frame.core.dispatch.call(null,inst_61088));
var state_61093__$1 = state_61093;
var statearr_61119_61164 = state_61093__$1;
(statearr_61119_61164[(2)] = inst_61089);

(statearr_61119_61164[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (8))){
var inst_61060 = (state_61093[(7)]);
var inst_61065 = inst_61060.cljs$lang$protocol_mask$partition0$;
var inst_61066 = (inst_61065 & (64));
var inst_61067 = inst_61060.cljs$core$ISeq$;
var inst_61068 = (cljs.core.PROTOCOL_SENTINEL === inst_61067);
var inst_61069 = ((inst_61066) || (inst_61068));
var state_61093__$1 = state_61093;
if(cljs.core.truth_(inst_61069)){
var statearr_61120_61165 = state_61093__$1;
(statearr_61120_61165[(1)] = (11));

} else {
var statearr_61121_61166 = state_61093__$1;
(statearr_61121_61166[(1)] = (12));

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
var statearr_61122 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61122[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_61122[(1)] = (1));

return statearr_61122;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_61093){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_61093);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e61123){if((e61123 instanceof Object)){
var ex__34210__auto__ = e61123;
var statearr_61124_61167 = state_61093;
(statearr_61124_61167[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61168 = state_61093;
state_61093 = G__61168;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_61093){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_61093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_61125 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_61125[(6)] = c__34274__auto__);

return statearr_61125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61046_61138,G__61047_61139) : re_frame.core.reg_fx.call(null,G__61046_61138,G__61047_61139));
var G__61126_61169 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61127_61170 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61128){
var map__61129 = p__61128;
var map__61129__$1 = (((((!((map__61129 == null))))?(((((map__61129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61129):map__61129);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61131 = action;
var G__61131__$1 = (((G__61131 instanceof cljs.core.Keyword))?G__61131.fqn:null);
switch (G__61131__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61131__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61126_61169,G__61127_61170) : re_frame.core.reg_fx.call(null,G__61126_61169,G__61127_61170));

//# sourceMappingURL=athens.effects.js.map
