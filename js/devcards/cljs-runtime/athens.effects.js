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
var G__61039_61133 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61040_61134 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61039_61133,G__61040_61134) : re_frame.core.reg_fx.call(null,G__61039_61133,G__61040_61134));
var G__61041_61135 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61042_61136 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61041_61135,G__61042_61136) : re_frame.core.reg_fx.call(null,G__61041_61135,G__61042_61136));
var G__61043_61137 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61044_61138 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61043_61137,G__61044_61138) : re_frame.core.reg_fx.call(null,G__61043_61137,G__61044_61138));
var G__61045_61139 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61046_61140 = (function (p__61047){
var map__61048 = p__61047;
var map__61048__$1 = (((((!((map__61048 == null))))?(((((map__61048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61048):map__61048);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_61092){
var state_val_61093 = (state_61092[(1)]);
if((state_val_61093 === (7))){
var inst_61059 = (state_61092[(7)]);
var inst_61059__$1 = (state_61092[(2)]);
var inst_61061 = (inst_61059__$1 == null);
var inst_61062 = cljs.core.not(inst_61061);
var state_61092__$1 = (function (){var statearr_61094 = state_61092;
(statearr_61094[(7)] = inst_61059__$1);

return statearr_61094;
})();
if(inst_61062){
var statearr_61095_61141 = state_61092__$1;
(statearr_61095_61141[(1)] = (8));

} else {
var statearr_61096_61142 = state_61092__$1;
(statearr_61096_61142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (1))){
var state_61092__$1 = state_61092;
var G__61097_61143 = method;
var G__61097_61144__$1 = (((G__61097_61143 instanceof cljs.core.Keyword))?G__61097_61143.fqn:null);
switch (G__61097_61144__$1) {
case "post":
var statearr_61098_61146 = state_61092__$1;
(statearr_61098_61146[(1)] = (3));


break;
case "get":
var statearr_61099_61147 = state_61092__$1;
(statearr_61099_61147[(1)] = (4));


break;
case "put":
var statearr_61100_61148 = state_61092__$1;
(statearr_61100_61148[(1)] = (5));


break;
case "delete":
var statearr_61101_61149 = state_61092__$1;
(statearr_61101_61149[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61097_61144__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (4))){
var state_61092__$1 = state_61092;
var statearr_61102_61150 = state_61092__$1;
(statearr_61102_61150[(2)] = cljs_http.client.get);

(statearr_61102_61150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (15))){
var inst_61059 = (state_61092[(7)]);
var state_61092__$1 = state_61092;
var statearr_61103_61151 = state_61092__$1;
(statearr_61103_61151[(2)] = inst_61059);

(statearr_61103_61151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (13))){
var inst_61072 = (state_61092[(2)]);
var state_61092__$1 = state_61092;
var statearr_61104_61152 = state_61092__$1;
(statearr_61104_61152[(2)] = inst_61072);

(statearr_61104_61152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (6))){
var state_61092__$1 = state_61092;
var statearr_61105_61153 = state_61092__$1;
(statearr_61105_61153[(2)] = cljs_http.client.delete$);

(statearr_61105_61153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (17))){
var inst_61082 = (state_61092[(8)]);
var inst_61084 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61082);
var inst_61085 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61084) : re_frame.core.dispatch.call(null,inst_61084));
var state_61092__$1 = state_61092;
var statearr_61106_61154 = state_61092__$1;
(statearr_61106_61154[(2)] = inst_61085);

(statearr_61106_61154[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (3))){
var state_61092__$1 = state_61092;
var statearr_61107_61155 = state_61092__$1;
(statearr_61107_61155[(2)] = cljs_http.client.post);

(statearr_61107_61155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (12))){
var state_61092__$1 = state_61092;
var statearr_61108_61156 = state_61092__$1;
(statearr_61108_61156[(2)] = false);

(statearr_61108_61156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (2))){
var inst_61056 = (state_61092[(2)]);
var inst_61057 = (inst_61056.cljs$core$IFn$_invoke$arity$2 ? inst_61056.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61056.call(null,url,opts));
var state_61092__$1 = state_61092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61092__$1,(7),inst_61057);
} else {
if((state_val_61093 === (19))){
var inst_61090 = (state_61092[(2)]);
var state_61092__$1 = state_61092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61092__$1,inst_61090);
} else {
if((state_val_61093 === (11))){
var state_61092__$1 = state_61092;
var statearr_61109_61157 = state_61092__$1;
(statearr_61109_61157[(2)] = true);

(statearr_61109_61157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (9))){
var state_61092__$1 = state_61092;
var statearr_61110_61158 = state_61092__$1;
(statearr_61110_61158[(2)] = false);

(statearr_61110_61158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (5))){
var state_61092__$1 = state_61092;
var statearr_61111_61159 = state_61092__$1;
(statearr_61111_61159[(2)] = cljs_http.client.put);

(statearr_61111_61159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (14))){
var inst_61059 = (state_61092[(7)]);
var inst_61077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61059);
var state_61092__$1 = state_61092;
var statearr_61112_61160 = state_61092__$1;
(statearr_61112_61160[(2)] = inst_61077);

(statearr_61112_61160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (16))){
var inst_61080 = (state_61092[(9)]);
var inst_61080__$1 = (state_61092[(2)]);
var inst_61081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61080__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61080__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61092__$1 = (function (){var statearr_61113 = state_61092;
(statearr_61113[(9)] = inst_61080__$1);

(statearr_61113[(8)] = inst_61082);

return statearr_61113;
})();
if(cljs.core.truth_(inst_61081)){
var statearr_61114_61161 = state_61092__$1;
(statearr_61114_61161[(1)] = (17));

} else {
var statearr_61115_61162 = state_61092__$1;
(statearr_61115_61162[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (10))){
var inst_61075 = (state_61092[(2)]);
var state_61092__$1 = state_61092;
if(cljs.core.truth_(inst_61075)){
var statearr_61116_61163 = state_61092__$1;
(statearr_61116_61163[(1)] = (14));

} else {
var statearr_61117_61164 = state_61092__$1;
(statearr_61117_61164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (18))){
var inst_61080 = (state_61092[(9)]);
var inst_61087 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61080);
var inst_61088 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61087) : re_frame.core.dispatch.call(null,inst_61087));
var state_61092__$1 = state_61092;
var statearr_61118_61165 = state_61092__$1;
(statearr_61118_61165[(2)] = inst_61088);

(statearr_61118_61165[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61093 === (8))){
var inst_61059 = (state_61092[(7)]);
var inst_61064 = inst_61059.cljs$lang$protocol_mask$partition0$;
var inst_61065 = (inst_61064 & (64));
var inst_61066 = inst_61059.cljs$core$ISeq$;
var inst_61067 = (cljs.core.PROTOCOL_SENTINEL === inst_61066);
var inst_61068 = ((inst_61065) || (inst_61067));
var state_61092__$1 = state_61092;
if(cljs.core.truth_(inst_61068)){
var statearr_61119_61166 = state_61092__$1;
(statearr_61119_61166[(1)] = (11));

} else {
var statearr_61120_61167 = state_61092__$1;
(statearr_61120_61167[(1)] = (12));

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
var statearr_61121 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61121[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_61121[(1)] = (1));

return statearr_61121;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_61092){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_61092);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e61122){if((e61122 instanceof Object)){
var ex__34210__auto__ = e61122;
var statearr_61123_61168 = state_61092;
(statearr_61123_61168[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61169 = state_61092;
state_61092 = G__61169;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_61092){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_61092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_61124 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_61124[(6)] = c__34274__auto__);

return statearr_61124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61045_61139,G__61046_61140) : re_frame.core.reg_fx.call(null,G__61045_61139,G__61046_61140));
var G__61127_61170 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61128_61171 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61129){
var map__61130 = p__61129;
var map__61130__$1 = (((((!((map__61130 == null))))?(((((map__61130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61130):map__61130);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61132 = action;
var G__61132__$1 = (((G__61132 instanceof cljs.core.Keyword))?G__61132.fqn:null);
switch (G__61132__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61132__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61127_61170,G__61128_61171) : re_frame.core.reg_fx.call(null,G__61127_61170,G__61128_61171));

//# sourceMappingURL=athens.effects.js.map
