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
var G__61046_61140 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61047_61141 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61046_61140,G__61047_61141) : re_frame.core.reg_fx.call(null,G__61046_61140,G__61047_61141));
var G__61048_61142 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61049_61143 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61048_61142,G__61049_61143) : re_frame.core.reg_fx.call(null,G__61048_61142,G__61049_61143));
var G__61050_61144 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61051_61145 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61050_61144,G__61051_61145) : re_frame.core.reg_fx.call(null,G__61050_61144,G__61051_61145));
var G__61052_61146 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61053_61147 = (function (p__61054){
var map__61055 = p__61054;
var map__61055__$1 = (((((!((map__61055 == null))))?(((((map__61055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61055):map__61055);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_61099){
var state_val_61100 = (state_61099[(1)]);
if((state_val_61100 === (7))){
var inst_61066 = (state_61099[(7)]);
var inst_61066__$1 = (state_61099[(2)]);
var inst_61068 = (inst_61066__$1 == null);
var inst_61069 = cljs.core.not(inst_61068);
var state_61099__$1 = (function (){var statearr_61101 = state_61099;
(statearr_61101[(7)] = inst_61066__$1);

return statearr_61101;
})();
if(inst_61069){
var statearr_61102_61148 = state_61099__$1;
(statearr_61102_61148[(1)] = (8));

} else {
var statearr_61103_61149 = state_61099__$1;
(statearr_61103_61149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (1))){
var state_61099__$1 = state_61099;
var G__61104_61150 = method;
var G__61104_61151__$1 = (((G__61104_61150 instanceof cljs.core.Keyword))?G__61104_61150.fqn:null);
switch (G__61104_61151__$1) {
case "post":
var statearr_61105_61153 = state_61099__$1;
(statearr_61105_61153[(1)] = (3));


break;
case "get":
var statearr_61106_61154 = state_61099__$1;
(statearr_61106_61154[(1)] = (4));


break;
case "put":
var statearr_61107_61155 = state_61099__$1;
(statearr_61107_61155[(1)] = (5));


break;
case "delete":
var statearr_61108_61156 = state_61099__$1;
(statearr_61108_61156[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61104_61151__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (4))){
var state_61099__$1 = state_61099;
var statearr_61109_61157 = state_61099__$1;
(statearr_61109_61157[(2)] = cljs_http.client.get);

(statearr_61109_61157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (15))){
var inst_61066 = (state_61099[(7)]);
var state_61099__$1 = state_61099;
var statearr_61110_61158 = state_61099__$1;
(statearr_61110_61158[(2)] = inst_61066);

(statearr_61110_61158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (13))){
var inst_61079 = (state_61099[(2)]);
var state_61099__$1 = state_61099;
var statearr_61111_61159 = state_61099__$1;
(statearr_61111_61159[(2)] = inst_61079);

(statearr_61111_61159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (6))){
var state_61099__$1 = state_61099;
var statearr_61112_61160 = state_61099__$1;
(statearr_61112_61160[(2)] = cljs_http.client.delete$);

(statearr_61112_61160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (17))){
var inst_61089 = (state_61099[(8)]);
var inst_61091 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61089);
var inst_61092 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61091) : re_frame.core.dispatch.call(null,inst_61091));
var state_61099__$1 = state_61099;
var statearr_61113_61161 = state_61099__$1;
(statearr_61113_61161[(2)] = inst_61092);

(statearr_61113_61161[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (3))){
var state_61099__$1 = state_61099;
var statearr_61114_61162 = state_61099__$1;
(statearr_61114_61162[(2)] = cljs_http.client.post);

(statearr_61114_61162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (12))){
var state_61099__$1 = state_61099;
var statearr_61115_61163 = state_61099__$1;
(statearr_61115_61163[(2)] = false);

(statearr_61115_61163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (2))){
var inst_61063 = (state_61099[(2)]);
var inst_61064 = (inst_61063.cljs$core$IFn$_invoke$arity$2 ? inst_61063.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61063.call(null,url,opts));
var state_61099__$1 = state_61099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61099__$1,(7),inst_61064);
} else {
if((state_val_61100 === (19))){
var inst_61097 = (state_61099[(2)]);
var state_61099__$1 = state_61099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61099__$1,inst_61097);
} else {
if((state_val_61100 === (11))){
var state_61099__$1 = state_61099;
var statearr_61116_61164 = state_61099__$1;
(statearr_61116_61164[(2)] = true);

(statearr_61116_61164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (9))){
var state_61099__$1 = state_61099;
var statearr_61117_61165 = state_61099__$1;
(statearr_61117_61165[(2)] = false);

(statearr_61117_61165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (5))){
var state_61099__$1 = state_61099;
var statearr_61118_61166 = state_61099__$1;
(statearr_61118_61166[(2)] = cljs_http.client.put);

(statearr_61118_61166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (14))){
var inst_61066 = (state_61099[(7)]);
var inst_61084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61066);
var state_61099__$1 = state_61099;
var statearr_61119_61167 = state_61099__$1;
(statearr_61119_61167[(2)] = inst_61084);

(statearr_61119_61167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (16))){
var inst_61087 = (state_61099[(9)]);
var inst_61087__$1 = (state_61099[(2)]);
var inst_61088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61087__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61087__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61099__$1 = (function (){var statearr_61120 = state_61099;
(statearr_61120[(8)] = inst_61089);

(statearr_61120[(9)] = inst_61087__$1);

return statearr_61120;
})();
if(cljs.core.truth_(inst_61088)){
var statearr_61121_61168 = state_61099__$1;
(statearr_61121_61168[(1)] = (17));

} else {
var statearr_61122_61169 = state_61099__$1;
(statearr_61122_61169[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (10))){
var inst_61082 = (state_61099[(2)]);
var state_61099__$1 = state_61099;
if(cljs.core.truth_(inst_61082)){
var statearr_61123_61170 = state_61099__$1;
(statearr_61123_61170[(1)] = (14));

} else {
var statearr_61124_61171 = state_61099__$1;
(statearr_61124_61171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (18))){
var inst_61087 = (state_61099[(9)]);
var inst_61094 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61087);
var inst_61095 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61094) : re_frame.core.dispatch.call(null,inst_61094));
var state_61099__$1 = state_61099;
var statearr_61127_61172 = state_61099__$1;
(statearr_61127_61172[(2)] = inst_61095);

(statearr_61127_61172[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61100 === (8))){
var inst_61066 = (state_61099[(7)]);
var inst_61071 = inst_61066.cljs$lang$protocol_mask$partition0$;
var inst_61072 = (inst_61071 & (64));
var inst_61073 = inst_61066.cljs$core$ISeq$;
var inst_61074 = (cljs.core.PROTOCOL_SENTINEL === inst_61073);
var inst_61075 = ((inst_61072) || (inst_61074));
var state_61099__$1 = state_61099;
if(cljs.core.truth_(inst_61075)){
var statearr_61128_61173 = state_61099__$1;
(statearr_61128_61173[(1)] = (11));

} else {
var statearr_61129_61174 = state_61099__$1;
(statearr_61129_61174[(1)] = (12));

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
var statearr_61130 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61130[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_61130[(1)] = (1));

return statearr_61130;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_61099){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_61099);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e61131){if((e61131 instanceof Object)){
var ex__34210__auto__ = e61131;
var statearr_61132_61175 = state_61099;
(statearr_61132_61175[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61131;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61176 = state_61099;
state_61099 = G__61176;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_61099){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_61099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_61133 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_61133[(6)] = c__34274__auto__);

return statearr_61133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61052_61146,G__61053_61147) : re_frame.core.reg_fx.call(null,G__61052_61146,G__61053_61147));
var G__61134_61177 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61135_61178 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61136){
var map__61137 = p__61136;
var map__61137__$1 = (((((!((map__61137 == null))))?(((((map__61137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61137):map__61137);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61139 = action;
var G__61139__$1 = (((G__61139 instanceof cljs.core.Keyword))?G__61139.fqn:null);
switch (G__61139__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61139__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61134_61177,G__61135_61178) : re_frame.core.reg_fx.call(null,G__61134_61177,G__61135_61178));

//# sourceMappingURL=athens.effects.js.map
