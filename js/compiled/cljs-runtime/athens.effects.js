goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__52170_52262 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__52171_52263 = (function (datoms){
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52170_52262,G__52171_52263) : re_frame.core.reg_fx.call(null,G__52170_52262,G__52171_52263));
var G__52172_52264 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__52173_52265 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52172_52264,G__52173_52265) : re_frame.core.reg_fx.call(null,G__52172_52264,G__52173_52265));
var G__52174_52266 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__52175_52267 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52174_52266,G__52175_52267) : re_frame.core.reg_fx.call(null,G__52174_52266,G__52175_52267));
var G__52176_52268 = new cljs.core.Keyword(null,"http","http",382524695);
var G__52177_52269 = (function (p__52178){
var map__52179 = p__52178;
var map__52179__$1 = (((((!((map__52179 == null))))?(((((map__52179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52179):map__52179);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__38855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38856__auto__ = (function (){var switch__38788__auto__ = (function (state_52223){
var state_val_52224 = (state_52223[(1)]);
if((state_val_52224 === (7))){
var inst_52190 = (state_52223[(7)]);
var inst_52190__$1 = (state_52223[(2)]);
var inst_52192 = (inst_52190__$1 == null);
var inst_52193 = cljs.core.not(inst_52192);
var state_52223__$1 = (function (){var statearr_52225 = state_52223;
(statearr_52225[(7)] = inst_52190__$1);

return statearr_52225;
})();
if(inst_52193){
var statearr_52226_52270 = state_52223__$1;
(statearr_52226_52270[(1)] = (8));

} else {
var statearr_52227_52271 = state_52223__$1;
(statearr_52227_52271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (1))){
var state_52223__$1 = state_52223;
var G__52228_52272 = method;
var G__52228_52273__$1 = (((G__52228_52272 instanceof cljs.core.Keyword))?G__52228_52272.fqn:null);
switch (G__52228_52273__$1) {
case "post":
var statearr_52229_52275 = state_52223__$1;
(statearr_52229_52275[(1)] = (3));


break;
case "get":
var statearr_52230_52276 = state_52223__$1;
(statearr_52230_52276[(1)] = (4));


break;
case "put":
var statearr_52231_52277 = state_52223__$1;
(statearr_52231_52277[(1)] = (5));


break;
case "delete":
var statearr_52232_52278 = state_52223__$1;
(statearr_52232_52278[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52228_52273__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (4))){
var state_52223__$1 = state_52223;
var statearr_52233_52279 = state_52223__$1;
(statearr_52233_52279[(2)] = cljs_http.client.get);

(statearr_52233_52279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (15))){
var inst_52190 = (state_52223[(7)]);
var state_52223__$1 = state_52223;
var statearr_52234_52280 = state_52223__$1;
(statearr_52234_52280[(2)] = inst_52190);

(statearr_52234_52280[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (13))){
var inst_52203 = (state_52223[(2)]);
var state_52223__$1 = state_52223;
var statearr_52235_52281 = state_52223__$1;
(statearr_52235_52281[(2)] = inst_52203);

(statearr_52235_52281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (6))){
var state_52223__$1 = state_52223;
var statearr_52236_52282 = state_52223__$1;
(statearr_52236_52282[(2)] = cljs_http.client.delete$);

(statearr_52236_52282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (17))){
var inst_52213 = (state_52223[(8)]);
var inst_52215 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_52213);
var inst_52216 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52215) : re_frame.core.dispatch.call(null,inst_52215));
var state_52223__$1 = state_52223;
var statearr_52237_52283 = state_52223__$1;
(statearr_52237_52283[(2)] = inst_52216);

(statearr_52237_52283[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (3))){
var state_52223__$1 = state_52223;
var statearr_52238_52284 = state_52223__$1;
(statearr_52238_52284[(2)] = cljs_http.client.post);

(statearr_52238_52284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (12))){
var state_52223__$1 = state_52223;
var statearr_52239_52285 = state_52223__$1;
(statearr_52239_52285[(2)] = false);

(statearr_52239_52285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (2))){
var inst_52187 = (state_52223[(2)]);
var inst_52188 = (inst_52187.cljs$core$IFn$_invoke$arity$2 ? inst_52187.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_52187.call(null,url,opts));
var state_52223__$1 = state_52223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52223__$1,(7),inst_52188);
} else {
if((state_val_52224 === (19))){
var inst_52221 = (state_52223[(2)]);
var state_52223__$1 = state_52223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52223__$1,inst_52221);
} else {
if((state_val_52224 === (11))){
var state_52223__$1 = state_52223;
var statearr_52240_52286 = state_52223__$1;
(statearr_52240_52286[(2)] = true);

(statearr_52240_52286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (9))){
var state_52223__$1 = state_52223;
var statearr_52241_52287 = state_52223__$1;
(statearr_52241_52287[(2)] = false);

(statearr_52241_52287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (5))){
var state_52223__$1 = state_52223;
var statearr_52242_52288 = state_52223__$1;
(statearr_52242_52288[(2)] = cljs_http.client.put);

(statearr_52242_52288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (14))){
var inst_52190 = (state_52223[(7)]);
var inst_52208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52190);
var state_52223__$1 = state_52223;
var statearr_52243_52289 = state_52223__$1;
(statearr_52243_52289[(2)] = inst_52208);

(statearr_52243_52289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (16))){
var inst_52211 = (state_52223[(9)]);
var inst_52211__$1 = (state_52223[(2)]);
var inst_52212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52211__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52211__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52223__$1 = (function (){var statearr_52244 = state_52223;
(statearr_52244[(9)] = inst_52211__$1);

(statearr_52244[(8)] = inst_52213);

return statearr_52244;
})();
if(cljs.core.truth_(inst_52212)){
var statearr_52245_52290 = state_52223__$1;
(statearr_52245_52290[(1)] = (17));

} else {
var statearr_52246_52291 = state_52223__$1;
(statearr_52246_52291[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (10))){
var inst_52206 = (state_52223[(2)]);
var state_52223__$1 = state_52223;
if(cljs.core.truth_(inst_52206)){
var statearr_52247_52292 = state_52223__$1;
(statearr_52247_52292[(1)] = (14));

} else {
var statearr_52248_52293 = state_52223__$1;
(statearr_52248_52293[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (18))){
var inst_52211 = (state_52223[(9)]);
var inst_52218 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_52211);
var inst_52219 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52218) : re_frame.core.dispatch.call(null,inst_52218));
var state_52223__$1 = state_52223;
var statearr_52249_52294 = state_52223__$1;
(statearr_52249_52294[(2)] = inst_52219);

(statearr_52249_52294[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (8))){
var inst_52190 = (state_52223[(7)]);
var inst_52195 = inst_52190.cljs$lang$protocol_mask$partition0$;
var inst_52196 = (inst_52195 & (64));
var inst_52197 = inst_52190.cljs$core$ISeq$;
var inst_52198 = (cljs.core.PROTOCOL_SENTINEL === inst_52197);
var inst_52199 = ((inst_52196) || (inst_52198));
var state_52223__$1 = state_52223;
if(cljs.core.truth_(inst_52199)){
var statearr_52250_52295 = state_52223__$1;
(statearr_52250_52295[(1)] = (11));

} else {
var statearr_52251_52296 = state_52223__$1;
(statearr_52251_52296[(1)] = (12));

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
var statearr_52252 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52252[(0)] = athens$effects$state_machine__38789__auto__);

(statearr_52252[(1)] = (1));

return statearr_52252;
});
var athens$effects$state_machine__38789__auto____1 = (function (state_52223){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_52223);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e52253){if((e52253 instanceof Object)){
var ex__38792__auto__ = e52253;
var statearr_52254_52299 = state_52223;
(statearr_52254_52299[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52300 = state_52223;
state_52223 = G__52300;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$effects$state_machine__38789__auto__ = function(state_52223){
switch(arguments.length){
case 0:
return athens$effects$state_machine__38789__auto____0.call(this);
case 1:
return athens$effects$state_machine__38789__auto____1.call(this,state_52223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__38789__auto____0;
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__38789__auto____1;
return athens$effects$state_machine__38789__auto__;
})()
})();
var state__38857__auto__ = (function (){var statearr_52255 = (f__38856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38856__auto__.cljs$core$IFn$_invoke$arity$0() : f__38856__auto__.call(null));
(statearr_52255[(6)] = c__38855__auto__);

return statearr_52255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38857__auto__);
}));

return c__38855__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52176_52268,G__52177_52269) : re_frame.core.reg_fx.call(null,G__52176_52268,G__52177_52269));
var G__52256_52302 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__52257_52303 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__52258){
var map__52259 = p__52258;
var map__52259__$1 = (((((!((map__52259 == null))))?(((((map__52259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52259):map__52259);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__52261 = action;
var G__52261__$1 = (((G__52261 instanceof cljs.core.Keyword))?G__52261.fqn:null);
switch (G__52261__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52261__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52256_52302,G__52257_52303) : re_frame.core.reg_fx.call(null,G__52256_52302,G__52257_52303));

//# sourceMappingURL=athens.effects.js.map
