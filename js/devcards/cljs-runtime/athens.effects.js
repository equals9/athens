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
var G__61041_61133 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61042_61134 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61041_61133,G__61042_61134) : re_frame.core.reg_fx.call(null,G__61041_61133,G__61042_61134));
var G__61043_61135 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61044_61136 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61043_61135,G__61044_61136) : re_frame.core.reg_fx.call(null,G__61043_61135,G__61044_61136));
var G__61045_61137 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61046_61138 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61045_61137,G__61046_61138) : re_frame.core.reg_fx.call(null,G__61045_61137,G__61046_61138));
var G__61047_61139 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61048_61140 = (function (p__61049){
var map__61050 = p__61049;
var map__61050__$1 = (((((!((map__61050 == null))))?(((((map__61050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61050):map__61050);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36985__auto__ = (function (){var switch__36917__auto__ = (function (state_61094){
var state_val_61095 = (state_61094[(1)]);
if((state_val_61095 === (7))){
var inst_61061 = (state_61094[(7)]);
var inst_61061__$1 = (state_61094[(2)]);
var inst_61063 = (inst_61061__$1 == null);
var inst_61064 = cljs.core.not(inst_61063);
var state_61094__$1 = (function (){var statearr_61096 = state_61094;
(statearr_61096[(7)] = inst_61061__$1);

return statearr_61096;
})();
if(inst_61064){
var statearr_61097_61141 = state_61094__$1;
(statearr_61097_61141[(1)] = (8));

} else {
var statearr_61098_61142 = state_61094__$1;
(statearr_61098_61142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (1))){
var state_61094__$1 = state_61094;
var G__61099_61143 = method;
var G__61099_61144__$1 = (((G__61099_61143 instanceof cljs.core.Keyword))?G__61099_61143.fqn:null);
switch (G__61099_61144__$1) {
case "post":
var statearr_61100_61146 = state_61094__$1;
(statearr_61100_61146[(1)] = (3));


break;
case "get":
var statearr_61101_61147 = state_61094__$1;
(statearr_61101_61147[(1)] = (4));


break;
case "put":
var statearr_61102_61148 = state_61094__$1;
(statearr_61102_61148[(1)] = (5));


break;
case "delete":
var statearr_61103_61149 = state_61094__$1;
(statearr_61103_61149[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61099_61144__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (4))){
var state_61094__$1 = state_61094;
var statearr_61104_61150 = state_61094__$1;
(statearr_61104_61150[(2)] = cljs_http.client.get);

(statearr_61104_61150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (15))){
var inst_61061 = (state_61094[(7)]);
var state_61094__$1 = state_61094;
var statearr_61105_61151 = state_61094__$1;
(statearr_61105_61151[(2)] = inst_61061);

(statearr_61105_61151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (13))){
var inst_61074 = (state_61094[(2)]);
var state_61094__$1 = state_61094;
var statearr_61106_61152 = state_61094__$1;
(statearr_61106_61152[(2)] = inst_61074);

(statearr_61106_61152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (6))){
var state_61094__$1 = state_61094;
var statearr_61107_61153 = state_61094__$1;
(statearr_61107_61153[(2)] = cljs_http.client.delete$);

(statearr_61107_61153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (17))){
var inst_61084 = (state_61094[(8)]);
var inst_61086 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61084);
var inst_61087 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61086) : re_frame.core.dispatch.call(null,inst_61086));
var state_61094__$1 = state_61094;
var statearr_61108_61154 = state_61094__$1;
(statearr_61108_61154[(2)] = inst_61087);

(statearr_61108_61154[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (3))){
var state_61094__$1 = state_61094;
var statearr_61109_61155 = state_61094__$1;
(statearr_61109_61155[(2)] = cljs_http.client.post);

(statearr_61109_61155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (12))){
var state_61094__$1 = state_61094;
var statearr_61110_61156 = state_61094__$1;
(statearr_61110_61156[(2)] = false);

(statearr_61110_61156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (2))){
var inst_61058 = (state_61094[(2)]);
var inst_61059 = (inst_61058.cljs$core$IFn$_invoke$arity$2 ? inst_61058.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61058.call(null,url,opts));
var state_61094__$1 = state_61094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61094__$1,(7),inst_61059);
} else {
if((state_val_61095 === (19))){
var inst_61092 = (state_61094[(2)]);
var state_61094__$1 = state_61094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61094__$1,inst_61092);
} else {
if((state_val_61095 === (11))){
var state_61094__$1 = state_61094;
var statearr_61111_61157 = state_61094__$1;
(statearr_61111_61157[(2)] = true);

(statearr_61111_61157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (9))){
var state_61094__$1 = state_61094;
var statearr_61112_61158 = state_61094__$1;
(statearr_61112_61158[(2)] = false);

(statearr_61112_61158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (5))){
var state_61094__$1 = state_61094;
var statearr_61113_61159 = state_61094__$1;
(statearr_61113_61159[(2)] = cljs_http.client.put);

(statearr_61113_61159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (14))){
var inst_61061 = (state_61094[(7)]);
var inst_61079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61061);
var state_61094__$1 = state_61094;
var statearr_61114_61160 = state_61094__$1;
(statearr_61114_61160[(2)] = inst_61079);

(statearr_61114_61160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (16))){
var inst_61082 = (state_61094[(9)]);
var inst_61082__$1 = (state_61094[(2)]);
var inst_61083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61082__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61082__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61094__$1 = (function (){var statearr_61115 = state_61094;
(statearr_61115[(8)] = inst_61084);

(statearr_61115[(9)] = inst_61082__$1);

return statearr_61115;
})();
if(cljs.core.truth_(inst_61083)){
var statearr_61116_61161 = state_61094__$1;
(statearr_61116_61161[(1)] = (17));

} else {
var statearr_61117_61162 = state_61094__$1;
(statearr_61117_61162[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (10))){
var inst_61077 = (state_61094[(2)]);
var state_61094__$1 = state_61094;
if(cljs.core.truth_(inst_61077)){
var statearr_61118_61163 = state_61094__$1;
(statearr_61118_61163[(1)] = (14));

} else {
var statearr_61119_61164 = state_61094__$1;
(statearr_61119_61164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (18))){
var inst_61082 = (state_61094[(9)]);
var inst_61089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61082);
var inst_61090 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61089) : re_frame.core.dispatch.call(null,inst_61089));
var state_61094__$1 = state_61094;
var statearr_61120_61165 = state_61094__$1;
(statearr_61120_61165[(2)] = inst_61090);

(statearr_61120_61165[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61095 === (8))){
var inst_61061 = (state_61094[(7)]);
var inst_61066 = inst_61061.cljs$lang$protocol_mask$partition0$;
var inst_61067 = (inst_61066 & (64));
var inst_61068 = inst_61061.cljs$core$ISeq$;
var inst_61069 = (cljs.core.PROTOCOL_SENTINEL === inst_61068);
var inst_61070 = ((inst_61067) || (inst_61069));
var state_61094__$1 = state_61094;
if(cljs.core.truth_(inst_61070)){
var statearr_61121_61166 = state_61094__$1;
(statearr_61121_61166[(1)] = (11));

} else {
var statearr_61122_61167 = state_61094__$1;
(statearr_61122_61167[(1)] = (12));

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
var athens$effects$state_machine__36918__auto__ = null;
var athens$effects$state_machine__36918__auto____0 = (function (){
var statearr_61123 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61123[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61123[(1)] = (1));

return statearr_61123;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61094){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61094);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61124){if((e61124 instanceof Object)){
var ex__36921__auto__ = e61124;
var statearr_61125_61168 = state_61094;
(statearr_61125_61168[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61169 = state_61094;
state_61094 = G__61169;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61094){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36986__auto__ = (function (){var statearr_61126 = (f__36985__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36985__auto__.cljs$core$IFn$_invoke$arity$0() : f__36985__auto__.call(null));
(statearr_61126[(6)] = c__36984__auto__);

return statearr_61126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36986__auto__);
}));

return c__36984__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61047_61139,G__61048_61140) : re_frame.core.reg_fx.call(null,G__61047_61139,G__61048_61140));
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
