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
var G__61060_61152 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61061_61153 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61060_61152,G__61061_61153) : re_frame.core.reg_fx.call(null,G__61060_61152,G__61061_61153));
var G__61062_61154 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61063_61155 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61062_61154,G__61063_61155) : re_frame.core.reg_fx.call(null,G__61062_61154,G__61063_61155));
var G__61064_61156 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61065_61157 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61064_61156,G__61065_61157) : re_frame.core.reg_fx.call(null,G__61064_61156,G__61065_61157));
var G__61066_61158 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61067_61159 = (function (p__61068){
var map__61069 = p__61068;
var map__61069__$1 = (((((!((map__61069 == null))))?(((((map__61069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61069):map__61069);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61113){
var state_val_61114 = (state_61113[(1)]);
if((state_val_61114 === (7))){
var inst_61080 = (state_61113[(7)]);
var inst_61080__$1 = (state_61113[(2)]);
var inst_61082 = (inst_61080__$1 == null);
var inst_61083 = cljs.core.not(inst_61082);
var state_61113__$1 = (function (){var statearr_61115 = state_61113;
(statearr_61115[(7)] = inst_61080__$1);

return statearr_61115;
})();
if(inst_61083){
var statearr_61116_61160 = state_61113__$1;
(statearr_61116_61160[(1)] = (8));

} else {
var statearr_61117_61161 = state_61113__$1;
(statearr_61117_61161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (1))){
var state_61113__$1 = state_61113;
var G__61118_61162 = method;
var G__61118_61163__$1 = (((G__61118_61162 instanceof cljs.core.Keyword))?G__61118_61162.fqn:null);
switch (G__61118_61163__$1) {
case "post":
var statearr_61119_61165 = state_61113__$1;
(statearr_61119_61165[(1)] = (3));


break;
case "get":
var statearr_61120_61166 = state_61113__$1;
(statearr_61120_61166[(1)] = (4));


break;
case "put":
var statearr_61121_61167 = state_61113__$1;
(statearr_61121_61167[(1)] = (5));


break;
case "delete":
var statearr_61122_61168 = state_61113__$1;
(statearr_61122_61168[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61118_61163__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (4))){
var state_61113__$1 = state_61113;
var statearr_61123_61169 = state_61113__$1;
(statearr_61123_61169[(2)] = cljs_http.client.get);

(statearr_61123_61169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (15))){
var inst_61080 = (state_61113[(7)]);
var state_61113__$1 = state_61113;
var statearr_61124_61170 = state_61113__$1;
(statearr_61124_61170[(2)] = inst_61080);

(statearr_61124_61170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (13))){
var inst_61093 = (state_61113[(2)]);
var state_61113__$1 = state_61113;
var statearr_61125_61171 = state_61113__$1;
(statearr_61125_61171[(2)] = inst_61093);

(statearr_61125_61171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (6))){
var state_61113__$1 = state_61113;
var statearr_61126_61172 = state_61113__$1;
(statearr_61126_61172[(2)] = cljs_http.client.delete$);

(statearr_61126_61172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (17))){
var inst_61103 = (state_61113[(8)]);
var inst_61105 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61103);
var inst_61106 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61105) : re_frame.core.dispatch.call(null,inst_61105));
var state_61113__$1 = state_61113;
var statearr_61127_61173 = state_61113__$1;
(statearr_61127_61173[(2)] = inst_61106);

(statearr_61127_61173[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (3))){
var state_61113__$1 = state_61113;
var statearr_61128_61174 = state_61113__$1;
(statearr_61128_61174[(2)] = cljs_http.client.post);

(statearr_61128_61174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (12))){
var state_61113__$1 = state_61113;
var statearr_61129_61175 = state_61113__$1;
(statearr_61129_61175[(2)] = false);

(statearr_61129_61175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (2))){
var inst_61077 = (state_61113[(2)]);
var inst_61078 = (inst_61077.cljs$core$IFn$_invoke$arity$2 ? inst_61077.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61077.call(null,url,opts));
var state_61113__$1 = state_61113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61113__$1,(7),inst_61078);
} else {
if((state_val_61114 === (19))){
var inst_61111 = (state_61113[(2)]);
var state_61113__$1 = state_61113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61113__$1,inst_61111);
} else {
if((state_val_61114 === (11))){
var state_61113__$1 = state_61113;
var statearr_61130_61176 = state_61113__$1;
(statearr_61130_61176[(2)] = true);

(statearr_61130_61176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (9))){
var state_61113__$1 = state_61113;
var statearr_61131_61177 = state_61113__$1;
(statearr_61131_61177[(2)] = false);

(statearr_61131_61177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (5))){
var state_61113__$1 = state_61113;
var statearr_61132_61178 = state_61113__$1;
(statearr_61132_61178[(2)] = cljs_http.client.put);

(statearr_61132_61178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (14))){
var inst_61080 = (state_61113[(7)]);
var inst_61098 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61080);
var state_61113__$1 = state_61113;
var statearr_61133_61179 = state_61113__$1;
(statearr_61133_61179[(2)] = inst_61098);

(statearr_61133_61179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (16))){
var inst_61101 = (state_61113[(9)]);
var inst_61101__$1 = (state_61113[(2)]);
var inst_61102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61101__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61101__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61113__$1 = (function (){var statearr_61134 = state_61113;
(statearr_61134[(9)] = inst_61101__$1);

(statearr_61134[(8)] = inst_61103);

return statearr_61134;
})();
if(cljs.core.truth_(inst_61102)){
var statearr_61135_61180 = state_61113__$1;
(statearr_61135_61180[(1)] = (17));

} else {
var statearr_61136_61181 = state_61113__$1;
(statearr_61136_61181[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (10))){
var inst_61096 = (state_61113[(2)]);
var state_61113__$1 = state_61113;
if(cljs.core.truth_(inst_61096)){
var statearr_61137_61182 = state_61113__$1;
(statearr_61137_61182[(1)] = (14));

} else {
var statearr_61138_61183 = state_61113__$1;
(statearr_61138_61183[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (18))){
var inst_61101 = (state_61113[(9)]);
var inst_61108 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61101);
var inst_61109 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61108) : re_frame.core.dispatch.call(null,inst_61108));
var state_61113__$1 = state_61113;
var statearr_61139_61184 = state_61113__$1;
(statearr_61139_61184[(2)] = inst_61109);

(statearr_61139_61184[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61114 === (8))){
var inst_61080 = (state_61113[(7)]);
var inst_61085 = inst_61080.cljs$lang$protocol_mask$partition0$;
var inst_61086 = (inst_61085 & (64));
var inst_61087 = inst_61080.cljs$core$ISeq$;
var inst_61088 = (cljs.core.PROTOCOL_SENTINEL === inst_61087);
var inst_61089 = ((inst_61086) || (inst_61088));
var state_61113__$1 = state_61113;
if(cljs.core.truth_(inst_61089)){
var statearr_61140_61185 = state_61113__$1;
(statearr_61140_61185[(1)] = (11));

} else {
var statearr_61141_61186 = state_61113__$1;
(statearr_61141_61186[(1)] = (12));

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
var statearr_61142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61142[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61142[(1)] = (1));

return statearr_61142;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61113){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61113);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61143){if((e61143 instanceof Object)){
var ex__36921__auto__ = e61143;
var statearr_61144_61187 = state_61113;
(statearr_61144_61187[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61188 = state_61113;
state_61113 = G__61188;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61113){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61145 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61145[(6)] = c__36985__auto__);

return statearr_61145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61066_61158,G__61067_61159) : re_frame.core.reg_fx.call(null,G__61066_61158,G__61067_61159));
var G__61146_61189 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61147_61190 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61148){
var map__61149 = p__61148;
var map__61149__$1 = (((((!((map__61149 == null))))?(((((map__61149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61149):map__61149);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61151 = action;
var G__61151__$1 = (((G__61151 instanceof cljs.core.Keyword))?G__61151.fqn:null);
switch (G__61151__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61151__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61146_61189,G__61147_61190) : re_frame.core.reg_fx.call(null,G__61146_61189,G__61147_61190));

//# sourceMappingURL=athens.effects.js.map
