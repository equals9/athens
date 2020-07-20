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
var G__61777_61869 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61778_61870 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61777_61869,G__61778_61870) : re_frame.core.reg_fx.call(null,G__61777_61869,G__61778_61870));
var G__61779_61871 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61780_61872 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61779_61871,G__61780_61872) : re_frame.core.reg_fx.call(null,G__61779_61871,G__61780_61872));
var G__61781_61873 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61782_61874 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61781_61873,G__61782_61874) : re_frame.core.reg_fx.call(null,G__61781_61873,G__61782_61874));
var G__61783_61875 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61784_61876 = (function (p__61785){
var map__61786 = p__61785;
var map__61786__$1 = (((((!((map__61786 == null))))?(((((map__61786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61786):map__61786);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61786__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61786__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61786__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61786__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61786__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_61830){
var state_val_61831 = (state_61830[(1)]);
if((state_val_61831 === (7))){
var inst_61797 = (state_61830[(7)]);
var inst_61797__$1 = (state_61830[(2)]);
var inst_61799 = (inst_61797__$1 == null);
var inst_61800 = cljs.core.not(inst_61799);
var state_61830__$1 = (function (){var statearr_61832 = state_61830;
(statearr_61832[(7)] = inst_61797__$1);

return statearr_61832;
})();
if(inst_61800){
var statearr_61833_61877 = state_61830__$1;
(statearr_61833_61877[(1)] = (8));

} else {
var statearr_61834_61878 = state_61830__$1;
(statearr_61834_61878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (1))){
var state_61830__$1 = state_61830;
var G__61835_61879 = method;
var G__61835_61880__$1 = (((G__61835_61879 instanceof cljs.core.Keyword))?G__61835_61879.fqn:null);
switch (G__61835_61880__$1) {
case "post":
var statearr_61836_61882 = state_61830__$1;
(statearr_61836_61882[(1)] = (3));


break;
case "get":
var statearr_61837_61883 = state_61830__$1;
(statearr_61837_61883[(1)] = (4));


break;
case "put":
var statearr_61838_61884 = state_61830__$1;
(statearr_61838_61884[(1)] = (5));


break;
case "delete":
var statearr_61839_61885 = state_61830__$1;
(statearr_61839_61885[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61835_61880__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (4))){
var state_61830__$1 = state_61830;
var statearr_61840_61886 = state_61830__$1;
(statearr_61840_61886[(2)] = cljs_http.client.get);

(statearr_61840_61886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (15))){
var inst_61797 = (state_61830[(7)]);
var state_61830__$1 = state_61830;
var statearr_61841_61887 = state_61830__$1;
(statearr_61841_61887[(2)] = inst_61797);

(statearr_61841_61887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (13))){
var inst_61810 = (state_61830[(2)]);
var state_61830__$1 = state_61830;
var statearr_61842_61888 = state_61830__$1;
(statearr_61842_61888[(2)] = inst_61810);

(statearr_61842_61888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (6))){
var state_61830__$1 = state_61830;
var statearr_61843_61889 = state_61830__$1;
(statearr_61843_61889[(2)] = cljs_http.client.delete$);

(statearr_61843_61889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (17))){
var inst_61820 = (state_61830[(8)]);
var inst_61822 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61820);
var inst_61823 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61822) : re_frame.core.dispatch.call(null,inst_61822));
var state_61830__$1 = state_61830;
var statearr_61844_61890 = state_61830__$1;
(statearr_61844_61890[(2)] = inst_61823);

(statearr_61844_61890[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (3))){
var state_61830__$1 = state_61830;
var statearr_61845_61891 = state_61830__$1;
(statearr_61845_61891[(2)] = cljs_http.client.post);

(statearr_61845_61891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (12))){
var state_61830__$1 = state_61830;
var statearr_61846_61892 = state_61830__$1;
(statearr_61846_61892[(2)] = false);

(statearr_61846_61892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (2))){
var inst_61794 = (state_61830[(2)]);
var inst_61795 = (inst_61794.cljs$core$IFn$_invoke$arity$2 ? inst_61794.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61794.call(null,url,opts));
var state_61830__$1 = state_61830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61830__$1,(7),inst_61795);
} else {
if((state_val_61831 === (19))){
var inst_61828 = (state_61830[(2)]);
var state_61830__$1 = state_61830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61830__$1,inst_61828);
} else {
if((state_val_61831 === (11))){
var state_61830__$1 = state_61830;
var statearr_61847_61893 = state_61830__$1;
(statearr_61847_61893[(2)] = true);

(statearr_61847_61893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (9))){
var state_61830__$1 = state_61830;
var statearr_61848_61894 = state_61830__$1;
(statearr_61848_61894[(2)] = false);

(statearr_61848_61894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (5))){
var state_61830__$1 = state_61830;
var statearr_61849_61895 = state_61830__$1;
(statearr_61849_61895[(2)] = cljs_http.client.put);

(statearr_61849_61895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (14))){
var inst_61797 = (state_61830[(7)]);
var inst_61815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61797);
var state_61830__$1 = state_61830;
var statearr_61850_61896 = state_61830__$1;
(statearr_61850_61896[(2)] = inst_61815);

(statearr_61850_61896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (16))){
var inst_61818 = (state_61830[(9)]);
var inst_61818__$1 = (state_61830[(2)]);
var inst_61819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61818__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61818__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61830__$1 = (function (){var statearr_61851 = state_61830;
(statearr_61851[(8)] = inst_61820);

(statearr_61851[(9)] = inst_61818__$1);

return statearr_61851;
})();
if(cljs.core.truth_(inst_61819)){
var statearr_61852_61897 = state_61830__$1;
(statearr_61852_61897[(1)] = (17));

} else {
var statearr_61853_61898 = state_61830__$1;
(statearr_61853_61898[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (10))){
var inst_61813 = (state_61830[(2)]);
var state_61830__$1 = state_61830;
if(cljs.core.truth_(inst_61813)){
var statearr_61854_61899 = state_61830__$1;
(statearr_61854_61899[(1)] = (14));

} else {
var statearr_61855_61900 = state_61830__$1;
(statearr_61855_61900[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (18))){
var inst_61818 = (state_61830[(9)]);
var inst_61825 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61818);
var inst_61826 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61825) : re_frame.core.dispatch.call(null,inst_61825));
var state_61830__$1 = state_61830;
var statearr_61856_61901 = state_61830__$1;
(statearr_61856_61901[(2)] = inst_61826);

(statearr_61856_61901[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61831 === (8))){
var inst_61797 = (state_61830[(7)]);
var inst_61802 = inst_61797.cljs$lang$protocol_mask$partition0$;
var inst_61803 = (inst_61802 & (64));
var inst_61804 = inst_61797.cljs$core$ISeq$;
var inst_61805 = (cljs.core.PROTOCOL_SENTINEL === inst_61804);
var inst_61806 = ((inst_61803) || (inst_61805));
var state_61830__$1 = state_61830;
if(cljs.core.truth_(inst_61806)){
var statearr_61857_61902 = state_61830__$1;
(statearr_61857_61902[(1)] = (11));

} else {
var statearr_61858_61903 = state_61830__$1;
(statearr_61858_61903[(1)] = (12));

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
var athens$effects$state_machine__37201__auto__ = null;
var athens$effects$state_machine__37201__auto____0 = (function (){
var statearr_61859 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61859[(0)] = athens$effects$state_machine__37201__auto__);

(statearr_61859[(1)] = (1));

return statearr_61859;
});
var athens$effects$state_machine__37201__auto____1 = (function (state_61830){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_61830);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e61860){if((e61860 instanceof Object)){
var ex__37204__auto__ = e61860;
var statearr_61861_61904 = state_61830;
(statearr_61861_61904[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61905 = state_61830;
state_61830 = G__61905;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
athens$effects$state_machine__37201__auto__ = function(state_61830){
switch(arguments.length){
case 0:
return athens$effects$state_machine__37201__auto____0.call(this);
case 1:
return athens$effects$state_machine__37201__auto____1.call(this,state_61830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__37201__auto____0;
athens$effects$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__37201__auto____1;
return athens$effects$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_61862 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_61862[(6)] = c__37268__auto__);

return statearr_61862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));

return c__37268__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61783_61875,G__61784_61876) : re_frame.core.reg_fx.call(null,G__61783_61875,G__61784_61876));
var G__61863_61906 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61864_61907 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61865){
var map__61866 = p__61865;
var map__61866__$1 = (((((!((map__61866 == null))))?(((((map__61866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61866):map__61866);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61866__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61866__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61866__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61866__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61868 = action;
var G__61868__$1 = (((G__61868 instanceof cljs.core.Keyword))?G__61868.fqn:null);
switch (G__61868__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61868__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61863_61906,G__61864_61907) : re_frame.core.reg_fx.call(null,G__61863_61906,G__61864_61907));

//# sourceMappingURL=athens.effects.js.map
