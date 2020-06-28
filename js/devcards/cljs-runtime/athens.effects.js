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
var G__61045_61139 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61046_61140 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61045_61139,G__61046_61140) : re_frame.core.reg_fx.call(null,G__61045_61139,G__61046_61140));
var G__61047_61141 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61048_61142 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61047_61141,G__61048_61142) : re_frame.core.reg_fx.call(null,G__61047_61141,G__61048_61142));
var G__61049_61143 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61050_61144 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61049_61143,G__61050_61144) : re_frame.core.reg_fx.call(null,G__61049_61143,G__61050_61144));
var G__61051_61145 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61052_61146 = (function (p__61053){
var map__61054 = p__61053;
var map__61054__$1 = (((((!((map__61054 == null))))?(((((map__61054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61054):map__61054);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61054__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61054__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61054__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61054__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61054__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_61098){
var state_val_61099 = (state_61098[(1)]);
if((state_val_61099 === (7))){
var inst_61065 = (state_61098[(7)]);
var inst_61065__$1 = (state_61098[(2)]);
var inst_61067 = (inst_61065__$1 == null);
var inst_61068 = cljs.core.not(inst_61067);
var state_61098__$1 = (function (){var statearr_61100 = state_61098;
(statearr_61100[(7)] = inst_61065__$1);

return statearr_61100;
})();
if(inst_61068){
var statearr_61101_61147 = state_61098__$1;
(statearr_61101_61147[(1)] = (8));

} else {
var statearr_61102_61148 = state_61098__$1;
(statearr_61102_61148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (1))){
var state_61098__$1 = state_61098;
var G__61103_61149 = method;
var G__61103_61150__$1 = (((G__61103_61149 instanceof cljs.core.Keyword))?G__61103_61149.fqn:null);
switch (G__61103_61150__$1) {
case "post":
var statearr_61104_61152 = state_61098__$1;
(statearr_61104_61152[(1)] = (3));


break;
case "get":
var statearr_61105_61153 = state_61098__$1;
(statearr_61105_61153[(1)] = (4));


break;
case "put":
var statearr_61106_61154 = state_61098__$1;
(statearr_61106_61154[(1)] = (5));


break;
case "delete":
var statearr_61107_61155 = state_61098__$1;
(statearr_61107_61155[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61103_61150__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (4))){
var state_61098__$1 = state_61098;
var statearr_61108_61156 = state_61098__$1;
(statearr_61108_61156[(2)] = cljs_http.client.get);

(statearr_61108_61156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (15))){
var inst_61065 = (state_61098[(7)]);
var state_61098__$1 = state_61098;
var statearr_61109_61157 = state_61098__$1;
(statearr_61109_61157[(2)] = inst_61065);

(statearr_61109_61157[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (13))){
var inst_61078 = (state_61098[(2)]);
var state_61098__$1 = state_61098;
var statearr_61110_61158 = state_61098__$1;
(statearr_61110_61158[(2)] = inst_61078);

(statearr_61110_61158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (6))){
var state_61098__$1 = state_61098;
var statearr_61111_61159 = state_61098__$1;
(statearr_61111_61159[(2)] = cljs_http.client.delete$);

(statearr_61111_61159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (17))){
var inst_61088 = (state_61098[(8)]);
var inst_61090 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61088);
var inst_61091 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61090) : re_frame.core.dispatch.call(null,inst_61090));
var state_61098__$1 = state_61098;
var statearr_61112_61160 = state_61098__$1;
(statearr_61112_61160[(2)] = inst_61091);

(statearr_61112_61160[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (3))){
var state_61098__$1 = state_61098;
var statearr_61113_61161 = state_61098__$1;
(statearr_61113_61161[(2)] = cljs_http.client.post);

(statearr_61113_61161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (12))){
var state_61098__$1 = state_61098;
var statearr_61114_61162 = state_61098__$1;
(statearr_61114_61162[(2)] = false);

(statearr_61114_61162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (2))){
var inst_61062 = (state_61098[(2)]);
var inst_61063 = (inst_61062.cljs$core$IFn$_invoke$arity$2 ? inst_61062.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61062.call(null,url,opts));
var state_61098__$1 = state_61098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61098__$1,(7),inst_61063);
} else {
if((state_val_61099 === (19))){
var inst_61096 = (state_61098[(2)]);
var state_61098__$1 = state_61098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61098__$1,inst_61096);
} else {
if((state_val_61099 === (11))){
var state_61098__$1 = state_61098;
var statearr_61115_61163 = state_61098__$1;
(statearr_61115_61163[(2)] = true);

(statearr_61115_61163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (9))){
var state_61098__$1 = state_61098;
var statearr_61116_61164 = state_61098__$1;
(statearr_61116_61164[(2)] = false);

(statearr_61116_61164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (5))){
var state_61098__$1 = state_61098;
var statearr_61117_61165 = state_61098__$1;
(statearr_61117_61165[(2)] = cljs_http.client.put);

(statearr_61117_61165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (14))){
var inst_61065 = (state_61098[(7)]);
var inst_61083 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61065);
var state_61098__$1 = state_61098;
var statearr_61118_61166 = state_61098__$1;
(statearr_61118_61166[(2)] = inst_61083);

(statearr_61118_61166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (16))){
var inst_61086 = (state_61098[(9)]);
var inst_61086__$1 = (state_61098[(2)]);
var inst_61087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61086__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61086__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61098__$1 = (function (){var statearr_61121 = state_61098;
(statearr_61121[(8)] = inst_61088);

(statearr_61121[(9)] = inst_61086__$1);

return statearr_61121;
})();
if(cljs.core.truth_(inst_61087)){
var statearr_61122_61167 = state_61098__$1;
(statearr_61122_61167[(1)] = (17));

} else {
var statearr_61123_61168 = state_61098__$1;
(statearr_61123_61168[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (10))){
var inst_61081 = (state_61098[(2)]);
var state_61098__$1 = state_61098;
if(cljs.core.truth_(inst_61081)){
var statearr_61124_61169 = state_61098__$1;
(statearr_61124_61169[(1)] = (14));

} else {
var statearr_61125_61170 = state_61098__$1;
(statearr_61125_61170[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (18))){
var inst_61086 = (state_61098[(9)]);
var inst_61093 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61086);
var inst_61094 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61093) : re_frame.core.dispatch.call(null,inst_61093));
var state_61098__$1 = state_61098;
var statearr_61126_61171 = state_61098__$1;
(statearr_61126_61171[(2)] = inst_61094);

(statearr_61126_61171[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61099 === (8))){
var inst_61065 = (state_61098[(7)]);
var inst_61070 = inst_61065.cljs$lang$protocol_mask$partition0$;
var inst_61071 = (inst_61070 & (64));
var inst_61072 = inst_61065.cljs$core$ISeq$;
var inst_61073 = (cljs.core.PROTOCOL_SENTINEL === inst_61072);
var inst_61074 = ((inst_61071) || (inst_61073));
var state_61098__$1 = state_61098;
if(cljs.core.truth_(inst_61074)){
var statearr_61127_61173 = state_61098__$1;
(statearr_61127_61173[(1)] = (11));

} else {
var statearr_61128_61174 = state_61098__$1;
(statearr_61128_61174[(1)] = (12));

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
var statearr_61129 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61129[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_61129[(1)] = (1));

return statearr_61129;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_61098){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_61098);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e61130){if((e61130 instanceof Object)){
var ex__34210__auto__ = e61130;
var statearr_61131_61176 = state_61098;
(statearr_61131_61176[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61180 = state_61098;
state_61098 = G__61180;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_61098){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_61098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_61132 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_61132[(6)] = c__34273__auto__);

return statearr_61132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61051_61145,G__61052_61146) : re_frame.core.reg_fx.call(null,G__61051_61145,G__61052_61146));
var G__61133_61185 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61134_61186 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61135){
var map__61136 = p__61135;
var map__61136__$1 = (((((!((map__61136 == null))))?(((((map__61136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61136):map__61136);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61138 = action;
var G__61138__$1 = (((G__61138 instanceof cljs.core.Keyword))?G__61138.fqn:null);
switch (G__61138__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61138__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61133_61185,G__61134_61186) : re_frame.core.reg_fx.call(null,G__61133_61185,G__61134_61186));

//# sourceMappingURL=athens.effects.js.map
