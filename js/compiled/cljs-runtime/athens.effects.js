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
var G__52168_52269 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__52169_52270 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52168_52269,G__52169_52270) : re_frame.core.reg_fx.call(null,G__52168_52269,G__52169_52270));
var G__52170_52271 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__52171_52272 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52170_52271,G__52171_52272) : re_frame.core.reg_fx.call(null,G__52170_52271,G__52171_52272));
var G__52172_52273 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__52173_52274 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52172_52273,G__52173_52274) : re_frame.core.reg_fx.call(null,G__52172_52273,G__52173_52274));
var G__52176_52275 = new cljs.core.Keyword(null,"http","http",382524695);
var G__52177_52276 = (function (p__52178){
var map__52179 = p__52178;
var map__52179__$1 = (((((!((map__52179 == null))))?(((((map__52179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52179):map__52179);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__38853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38854__auto__ = (function (){var switch__38788__auto__ = (function (state_52227){
var state_val_52228 = (state_52227[(1)]);
if((state_val_52228 === (7))){
var inst_52191 = (state_52227[(7)]);
var inst_52191__$1 = (state_52227[(2)]);
var inst_52193 = (inst_52191__$1 == null);
var inst_52194 = cljs.core.not(inst_52193);
var state_52227__$1 = (function (){var statearr_52229 = state_52227;
(statearr_52229[(7)] = inst_52191__$1);

return statearr_52229;
})();
if(inst_52194){
var statearr_52230_52277 = state_52227__$1;
(statearr_52230_52277[(1)] = (8));

} else {
var statearr_52231_52278 = state_52227__$1;
(statearr_52231_52278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (1))){
var state_52227__$1 = state_52227;
var G__52232_52279 = method;
var G__52232_52280__$1 = (((G__52232_52279 instanceof cljs.core.Keyword))?G__52232_52279.fqn:null);
switch (G__52232_52280__$1) {
case "post":
var statearr_52235_52282 = state_52227__$1;
(statearr_52235_52282[(1)] = (3));


break;
case "get":
var statearr_52236_52283 = state_52227__$1;
(statearr_52236_52283[(1)] = (4));


break;
case "put":
var statearr_52238_52284 = state_52227__$1;
(statearr_52238_52284[(1)] = (5));


break;
case "delete":
var statearr_52239_52285 = state_52227__$1;
(statearr_52239_52285[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52232_52280__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (4))){
var state_52227__$1 = state_52227;
var statearr_52240_52286 = state_52227__$1;
(statearr_52240_52286[(2)] = cljs_http.client.get);

(statearr_52240_52286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (15))){
var inst_52191 = (state_52227[(7)]);
var state_52227__$1 = state_52227;
var statearr_52241_52287 = state_52227__$1;
(statearr_52241_52287[(2)] = inst_52191);

(statearr_52241_52287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (13))){
var inst_52205 = (state_52227[(2)]);
var state_52227__$1 = state_52227;
var statearr_52242_52288 = state_52227__$1;
(statearr_52242_52288[(2)] = inst_52205);

(statearr_52242_52288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (6))){
var state_52227__$1 = state_52227;
var statearr_52243_52289 = state_52227__$1;
(statearr_52243_52289[(2)] = cljs_http.client.delete$);

(statearr_52243_52289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (17))){
var inst_52216 = (state_52227[(8)]);
var inst_52218 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_52216);
var inst_52219 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52218) : re_frame.core.dispatch.call(null,inst_52218));
var state_52227__$1 = state_52227;
var statearr_52244_52290 = state_52227__$1;
(statearr_52244_52290[(2)] = inst_52219);

(statearr_52244_52290[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (3))){
var state_52227__$1 = state_52227;
var statearr_52245_52291 = state_52227__$1;
(statearr_52245_52291[(2)] = cljs_http.client.post);

(statearr_52245_52291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (12))){
var state_52227__$1 = state_52227;
var statearr_52246_52292 = state_52227__$1;
(statearr_52246_52292[(2)] = false);

(statearr_52246_52292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (2))){
var inst_52188 = (state_52227[(2)]);
var inst_52189 = (inst_52188.cljs$core$IFn$_invoke$arity$2 ? inst_52188.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_52188.call(null,url,opts));
var state_52227__$1 = state_52227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52227__$1,(7),inst_52189);
} else {
if((state_val_52228 === (19))){
var inst_52224 = (state_52227[(2)]);
var state_52227__$1 = state_52227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52227__$1,inst_52224);
} else {
if((state_val_52228 === (11))){
var state_52227__$1 = state_52227;
var statearr_52247_52293 = state_52227__$1;
(statearr_52247_52293[(2)] = true);

(statearr_52247_52293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (9))){
var state_52227__$1 = state_52227;
var statearr_52248_52294 = state_52227__$1;
(statearr_52248_52294[(2)] = false);

(statearr_52248_52294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (5))){
var state_52227__$1 = state_52227;
var statearr_52249_52295 = state_52227__$1;
(statearr_52249_52295[(2)] = cljs_http.client.put);

(statearr_52249_52295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (14))){
var inst_52191 = (state_52227[(7)]);
var inst_52210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52191);
var state_52227__$1 = state_52227;
var statearr_52250_52296 = state_52227__$1;
(statearr_52250_52296[(2)] = inst_52210);

(statearr_52250_52296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (16))){
var inst_52213 = (state_52227[(9)]);
var inst_52213__$1 = (state_52227[(2)]);
var inst_52215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52213__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52213__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52227__$1 = (function (){var statearr_52251 = state_52227;
(statearr_52251[(9)] = inst_52213__$1);

(statearr_52251[(8)] = inst_52216);

return statearr_52251;
})();
if(cljs.core.truth_(inst_52215)){
var statearr_52252_52297 = state_52227__$1;
(statearr_52252_52297[(1)] = (17));

} else {
var statearr_52253_52298 = state_52227__$1;
(statearr_52253_52298[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (10))){
var inst_52208 = (state_52227[(2)]);
var state_52227__$1 = state_52227;
if(cljs.core.truth_(inst_52208)){
var statearr_52254_52299 = state_52227__$1;
(statearr_52254_52299[(1)] = (14));

} else {
var statearr_52255_52300 = state_52227__$1;
(statearr_52255_52300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (18))){
var inst_52213 = (state_52227[(9)]);
var inst_52221 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_52213);
var inst_52222 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52221) : re_frame.core.dispatch.call(null,inst_52221));
var state_52227__$1 = state_52227;
var statearr_52256_52301 = state_52227__$1;
(statearr_52256_52301[(2)] = inst_52222);

(statearr_52256_52301[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52228 === (8))){
var inst_52191 = (state_52227[(7)]);
var inst_52196 = inst_52191.cljs$lang$protocol_mask$partition0$;
var inst_52197 = (inst_52196 & (64));
var inst_52198 = inst_52191.cljs$core$ISeq$;
var inst_52199 = (cljs.core.PROTOCOL_SENTINEL === inst_52198);
var inst_52200 = ((inst_52197) || (inst_52199));
var state_52227__$1 = state_52227;
if(cljs.core.truth_(inst_52200)){
var statearr_52257_52302 = state_52227__$1;
(statearr_52257_52302[(1)] = (11));

} else {
var statearr_52258_52303 = state_52227__$1;
(statearr_52258_52303[(1)] = (12));

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
var athens$effects$state_machine__38789__auto__ = null;
var athens$effects$state_machine__38789__auto____0 = (function (){
var statearr_52259 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52259[(0)] = athens$effects$state_machine__38789__auto__);

(statearr_52259[(1)] = (1));

return statearr_52259;
});
var athens$effects$state_machine__38789__auto____1 = (function (state_52227){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_52227);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e52260){if((e52260 instanceof Object)){
var ex__38792__auto__ = e52260;
var statearr_52261_52304 = state_52227;
(statearr_52261_52304[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52305 = state_52227;
state_52227 = G__52305;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$effects$state_machine__38789__auto__ = function(state_52227){
switch(arguments.length){
case 0:
return athens$effects$state_machine__38789__auto____0.call(this);
case 1:
return athens$effects$state_machine__38789__auto____1.call(this,state_52227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__38789__auto____0;
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__38789__auto____1;
return athens$effects$state_machine__38789__auto__;
})()
})();
var state__38855__auto__ = (function (){var statearr_52262 = (f__38854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38854__auto__.cljs$core$IFn$_invoke$arity$0() : f__38854__auto__.call(null));
(statearr_52262[(6)] = c__38853__auto__);

return statearr_52262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38855__auto__);
}));

return c__38853__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52176_52275,G__52177_52276) : re_frame.core.reg_fx.call(null,G__52176_52275,G__52177_52276));
var G__52263_52306 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__52264_52307 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__52265){
var map__52266 = p__52265;
var map__52266__$1 = (((((!((map__52266 == null))))?(((((map__52266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52266):map__52266);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__52268 = action;
var G__52268__$1 = (((G__52268 instanceof cljs.core.Keyword))?G__52268.fqn:null);
switch (G__52268__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52268__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52263_52306,G__52264_52307) : re_frame.core.reg_fx.call(null,G__52263_52306,G__52264_52307));

//# sourceMappingURL=athens.effects.js.map
