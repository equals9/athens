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
var G__61068_61160 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61069_61161 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61068_61160,G__61069_61161) : re_frame.core.reg_fx.call(null,G__61068_61160,G__61069_61161));
var G__61070_61162 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61071_61163 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61070_61162,G__61071_61163) : re_frame.core.reg_fx.call(null,G__61070_61162,G__61071_61163));
var G__61072_61164 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61073_61165 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61072_61164,G__61073_61165) : re_frame.core.reg_fx.call(null,G__61072_61164,G__61073_61165));
var G__61074_61166 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61075_61167 = (function (p__61076){
var map__61077 = p__61076;
var map__61077__$1 = (((((!((map__61077 == null))))?(((((map__61077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61077):map__61077);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61077__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61077__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61077__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61077__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61077__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61121){
var state_val_61122 = (state_61121[(1)]);
if((state_val_61122 === (7))){
var inst_61088 = (state_61121[(7)]);
var inst_61088__$1 = (state_61121[(2)]);
var inst_61090 = (inst_61088__$1 == null);
var inst_61091 = cljs.core.not(inst_61090);
var state_61121__$1 = (function (){var statearr_61123 = state_61121;
(statearr_61123[(7)] = inst_61088__$1);

return statearr_61123;
})();
if(inst_61091){
var statearr_61124_61168 = state_61121__$1;
(statearr_61124_61168[(1)] = (8));

} else {
var statearr_61125_61169 = state_61121__$1;
(statearr_61125_61169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (1))){
var state_61121__$1 = state_61121;
var G__61126_61170 = method;
var G__61126_61171__$1 = (((G__61126_61170 instanceof cljs.core.Keyword))?G__61126_61170.fqn:null);
switch (G__61126_61171__$1) {
case "post":
var statearr_61127_61173 = state_61121__$1;
(statearr_61127_61173[(1)] = (3));


break;
case "get":
var statearr_61128_61174 = state_61121__$1;
(statearr_61128_61174[(1)] = (4));


break;
case "put":
var statearr_61129_61175 = state_61121__$1;
(statearr_61129_61175[(1)] = (5));


break;
case "delete":
var statearr_61130_61176 = state_61121__$1;
(statearr_61130_61176[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61126_61171__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (4))){
var state_61121__$1 = state_61121;
var statearr_61131_61177 = state_61121__$1;
(statearr_61131_61177[(2)] = cljs_http.client.get);

(statearr_61131_61177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (15))){
var inst_61088 = (state_61121[(7)]);
var state_61121__$1 = state_61121;
var statearr_61132_61178 = state_61121__$1;
(statearr_61132_61178[(2)] = inst_61088);

(statearr_61132_61178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (13))){
var inst_61101 = (state_61121[(2)]);
var state_61121__$1 = state_61121;
var statearr_61133_61179 = state_61121__$1;
(statearr_61133_61179[(2)] = inst_61101);

(statearr_61133_61179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (6))){
var state_61121__$1 = state_61121;
var statearr_61134_61180 = state_61121__$1;
(statearr_61134_61180[(2)] = cljs_http.client.delete$);

(statearr_61134_61180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (17))){
var inst_61111 = (state_61121[(8)]);
var inst_61113 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61111);
var inst_61114 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61113) : re_frame.core.dispatch.call(null,inst_61113));
var state_61121__$1 = state_61121;
var statearr_61135_61181 = state_61121__$1;
(statearr_61135_61181[(2)] = inst_61114);

(statearr_61135_61181[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (3))){
var state_61121__$1 = state_61121;
var statearr_61136_61182 = state_61121__$1;
(statearr_61136_61182[(2)] = cljs_http.client.post);

(statearr_61136_61182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (12))){
var state_61121__$1 = state_61121;
var statearr_61137_61183 = state_61121__$1;
(statearr_61137_61183[(2)] = false);

(statearr_61137_61183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (2))){
var inst_61085 = (state_61121[(2)]);
var inst_61086 = (inst_61085.cljs$core$IFn$_invoke$arity$2 ? inst_61085.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61085.call(null,url,opts));
var state_61121__$1 = state_61121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61121__$1,(7),inst_61086);
} else {
if((state_val_61122 === (19))){
var inst_61119 = (state_61121[(2)]);
var state_61121__$1 = state_61121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61121__$1,inst_61119);
} else {
if((state_val_61122 === (11))){
var state_61121__$1 = state_61121;
var statearr_61138_61184 = state_61121__$1;
(statearr_61138_61184[(2)] = true);

(statearr_61138_61184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (9))){
var state_61121__$1 = state_61121;
var statearr_61139_61185 = state_61121__$1;
(statearr_61139_61185[(2)] = false);

(statearr_61139_61185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (5))){
var state_61121__$1 = state_61121;
var statearr_61140_61186 = state_61121__$1;
(statearr_61140_61186[(2)] = cljs_http.client.put);

(statearr_61140_61186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (14))){
var inst_61088 = (state_61121[(7)]);
var inst_61106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61088);
var state_61121__$1 = state_61121;
var statearr_61141_61187 = state_61121__$1;
(statearr_61141_61187[(2)] = inst_61106);

(statearr_61141_61187[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (16))){
var inst_61109 = (state_61121[(9)]);
var inst_61109__$1 = (state_61121[(2)]);
var inst_61110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61109__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61109__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61121__$1 = (function (){var statearr_61142 = state_61121;
(statearr_61142[(9)] = inst_61109__$1);

(statearr_61142[(8)] = inst_61111);

return statearr_61142;
})();
if(cljs.core.truth_(inst_61110)){
var statearr_61143_61188 = state_61121__$1;
(statearr_61143_61188[(1)] = (17));

} else {
var statearr_61144_61189 = state_61121__$1;
(statearr_61144_61189[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (10))){
var inst_61104 = (state_61121[(2)]);
var state_61121__$1 = state_61121;
if(cljs.core.truth_(inst_61104)){
var statearr_61145_61190 = state_61121__$1;
(statearr_61145_61190[(1)] = (14));

} else {
var statearr_61146_61191 = state_61121__$1;
(statearr_61146_61191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (18))){
var inst_61109 = (state_61121[(9)]);
var inst_61116 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61109);
var inst_61117 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61116) : re_frame.core.dispatch.call(null,inst_61116));
var state_61121__$1 = state_61121;
var statearr_61147_61192 = state_61121__$1;
(statearr_61147_61192[(2)] = inst_61117);

(statearr_61147_61192[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (8))){
var inst_61088 = (state_61121[(7)]);
var inst_61093 = inst_61088.cljs$lang$protocol_mask$partition0$;
var inst_61094 = (inst_61093 & (64));
var inst_61095 = inst_61088.cljs$core$ISeq$;
var inst_61096 = (cljs.core.PROTOCOL_SENTINEL === inst_61095);
var inst_61097 = ((inst_61094) || (inst_61096));
var state_61121__$1 = state_61121;
if(cljs.core.truth_(inst_61097)){
var statearr_61148_61193 = state_61121__$1;
(statearr_61148_61193[(1)] = (11));

} else {
var statearr_61149_61194 = state_61121__$1;
(statearr_61149_61194[(1)] = (12));

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
var statearr_61150 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61150[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61150[(1)] = (1));

return statearr_61150;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61121){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61121);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61151){if((e61151 instanceof Object)){
var ex__36921__auto__ = e61151;
var statearr_61152_61195 = state_61121;
(statearr_61152_61195[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61151;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61196 = state_61121;
state_61121 = G__61196;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61121){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61153 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61153[(6)] = c__36985__auto__);

return statearr_61153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61074_61166,G__61075_61167) : re_frame.core.reg_fx.call(null,G__61074_61166,G__61075_61167));
var G__61154_61197 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61155_61198 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61156){
var map__61157 = p__61156;
var map__61157__$1 = (((((!((map__61157 == null))))?(((((map__61157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61157):map__61157);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61159 = action;
var G__61159__$1 = (((G__61159 instanceof cljs.core.Keyword))?G__61159.fqn:null);
switch (G__61159__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61159__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61154_61197,G__61155_61198) : re_frame.core.reg_fx.call(null,G__61154_61197,G__61155_61198));

//# sourceMappingURL=athens.effects.js.map
