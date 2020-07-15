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
var G__61741_61833 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61742_61834 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61741_61833,G__61742_61834) : re_frame.core.reg_fx.call(null,G__61741_61833,G__61742_61834));
var G__61743_61835 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61744_61836 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61743_61835,G__61744_61836) : re_frame.core.reg_fx.call(null,G__61743_61835,G__61744_61836));
var G__61745_61837 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61746_61838 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61745_61837,G__61746_61838) : re_frame.core.reg_fx.call(null,G__61745_61837,G__61746_61838));
var G__61747_61839 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61748_61840 = (function (p__61749){
var map__61750 = p__61749;
var map__61750__$1 = (((((!((map__61750 == null))))?(((((map__61750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61750):map__61750);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61750__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61750__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61750__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61750__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61750__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_61794){
var state_val_61795 = (state_61794[(1)]);
if((state_val_61795 === (7))){
var inst_61761 = (state_61794[(7)]);
var inst_61761__$1 = (state_61794[(2)]);
var inst_61763 = (inst_61761__$1 == null);
var inst_61764 = cljs.core.not(inst_61763);
var state_61794__$1 = (function (){var statearr_61796 = state_61794;
(statearr_61796[(7)] = inst_61761__$1);

return statearr_61796;
})();
if(inst_61764){
var statearr_61797_61841 = state_61794__$1;
(statearr_61797_61841[(1)] = (8));

} else {
var statearr_61798_61842 = state_61794__$1;
(statearr_61798_61842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (1))){
var state_61794__$1 = state_61794;
var G__61799_61843 = method;
var G__61799_61844__$1 = (((G__61799_61843 instanceof cljs.core.Keyword))?G__61799_61843.fqn:null);
switch (G__61799_61844__$1) {
case "post":
var statearr_61800_61846 = state_61794__$1;
(statearr_61800_61846[(1)] = (3));


break;
case "get":
var statearr_61801_61847 = state_61794__$1;
(statearr_61801_61847[(1)] = (4));


break;
case "put":
var statearr_61802_61848 = state_61794__$1;
(statearr_61802_61848[(1)] = (5));


break;
case "delete":
var statearr_61803_61849 = state_61794__$1;
(statearr_61803_61849[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61799_61844__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (4))){
var state_61794__$1 = state_61794;
var statearr_61804_61850 = state_61794__$1;
(statearr_61804_61850[(2)] = cljs_http.client.get);

(statearr_61804_61850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (15))){
var inst_61761 = (state_61794[(7)]);
var state_61794__$1 = state_61794;
var statearr_61805_61851 = state_61794__$1;
(statearr_61805_61851[(2)] = inst_61761);

(statearr_61805_61851[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (13))){
var inst_61774 = (state_61794[(2)]);
var state_61794__$1 = state_61794;
var statearr_61806_61852 = state_61794__$1;
(statearr_61806_61852[(2)] = inst_61774);

(statearr_61806_61852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (6))){
var state_61794__$1 = state_61794;
var statearr_61807_61853 = state_61794__$1;
(statearr_61807_61853[(2)] = cljs_http.client.delete$);

(statearr_61807_61853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (17))){
var inst_61784 = (state_61794[(8)]);
var inst_61786 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61784);
var inst_61787 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61786) : re_frame.core.dispatch.call(null,inst_61786));
var state_61794__$1 = state_61794;
var statearr_61808_61854 = state_61794__$1;
(statearr_61808_61854[(2)] = inst_61787);

(statearr_61808_61854[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (3))){
var state_61794__$1 = state_61794;
var statearr_61809_61855 = state_61794__$1;
(statearr_61809_61855[(2)] = cljs_http.client.post);

(statearr_61809_61855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (12))){
var state_61794__$1 = state_61794;
var statearr_61810_61856 = state_61794__$1;
(statearr_61810_61856[(2)] = false);

(statearr_61810_61856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (2))){
var inst_61758 = (state_61794[(2)]);
var inst_61759 = (inst_61758.cljs$core$IFn$_invoke$arity$2 ? inst_61758.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61758.call(null,url,opts));
var state_61794__$1 = state_61794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61794__$1,(7),inst_61759);
} else {
if((state_val_61795 === (19))){
var inst_61792 = (state_61794[(2)]);
var state_61794__$1 = state_61794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61794__$1,inst_61792);
} else {
if((state_val_61795 === (11))){
var state_61794__$1 = state_61794;
var statearr_61811_61857 = state_61794__$1;
(statearr_61811_61857[(2)] = true);

(statearr_61811_61857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (9))){
var state_61794__$1 = state_61794;
var statearr_61812_61858 = state_61794__$1;
(statearr_61812_61858[(2)] = false);

(statearr_61812_61858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (5))){
var state_61794__$1 = state_61794;
var statearr_61813_61859 = state_61794__$1;
(statearr_61813_61859[(2)] = cljs_http.client.put);

(statearr_61813_61859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (14))){
var inst_61761 = (state_61794[(7)]);
var inst_61779 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61761);
var state_61794__$1 = state_61794;
var statearr_61814_61860 = state_61794__$1;
(statearr_61814_61860[(2)] = inst_61779);

(statearr_61814_61860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (16))){
var inst_61782 = (state_61794[(9)]);
var inst_61782__$1 = (state_61794[(2)]);
var inst_61783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61782__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61782__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61794__$1 = (function (){var statearr_61815 = state_61794;
(statearr_61815[(9)] = inst_61782__$1);

(statearr_61815[(8)] = inst_61784);

return statearr_61815;
})();
if(cljs.core.truth_(inst_61783)){
var statearr_61816_61861 = state_61794__$1;
(statearr_61816_61861[(1)] = (17));

} else {
var statearr_61817_61862 = state_61794__$1;
(statearr_61817_61862[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (10))){
var inst_61777 = (state_61794[(2)]);
var state_61794__$1 = state_61794;
if(cljs.core.truth_(inst_61777)){
var statearr_61818_61863 = state_61794__$1;
(statearr_61818_61863[(1)] = (14));

} else {
var statearr_61819_61864 = state_61794__$1;
(statearr_61819_61864[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (18))){
var inst_61782 = (state_61794[(9)]);
var inst_61789 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61782);
var inst_61790 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61789) : re_frame.core.dispatch.call(null,inst_61789));
var state_61794__$1 = state_61794;
var statearr_61820_61865 = state_61794__$1;
(statearr_61820_61865[(2)] = inst_61790);

(statearr_61820_61865[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61795 === (8))){
var inst_61761 = (state_61794[(7)]);
var inst_61766 = inst_61761.cljs$lang$protocol_mask$partition0$;
var inst_61767 = (inst_61766 & (64));
var inst_61768 = inst_61761.cljs$core$ISeq$;
var inst_61769 = (cljs.core.PROTOCOL_SENTINEL === inst_61768);
var inst_61770 = ((inst_61767) || (inst_61769));
var state_61794__$1 = state_61794;
if(cljs.core.truth_(inst_61770)){
var statearr_61821_61866 = state_61794__$1;
(statearr_61821_61866[(1)] = (11));

} else {
var statearr_61822_61867 = state_61794__$1;
(statearr_61822_61867[(1)] = (12));

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
var athens$effects$state_machine__37203__auto__ = null;
var athens$effects$state_machine__37203__auto____0 = (function (){
var statearr_61823 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61823[(0)] = athens$effects$state_machine__37203__auto__);

(statearr_61823[(1)] = (1));

return statearr_61823;
});
var athens$effects$state_machine__37203__auto____1 = (function (state_61794){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_61794);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e61824){if((e61824 instanceof Object)){
var ex__37206__auto__ = e61824;
var statearr_61825_61868 = state_61794;
(statearr_61825_61868[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61869 = state_61794;
state_61794 = G__61869;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$effects$state_machine__37203__auto__ = function(state_61794){
switch(arguments.length){
case 0:
return athens$effects$state_machine__37203__auto____0.call(this);
case 1:
return athens$effects$state_machine__37203__auto____1.call(this,state_61794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__37203__auto____0;
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__37203__auto____1;
return athens$effects$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_61826 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_61826[(6)] = c__37270__auto__);

return statearr_61826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61747_61839,G__61748_61840) : re_frame.core.reg_fx.call(null,G__61747_61839,G__61748_61840));
var G__61827_61870 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61828_61871 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61829){
var map__61830 = p__61829;
var map__61830__$1 = (((((!((map__61830 == null))))?(((((map__61830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61830):map__61830);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61830__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61830__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61830__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61830__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61832 = action;
var G__61832__$1 = (((G__61832 instanceof cljs.core.Keyword))?G__61832.fqn:null);
switch (G__61832__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61832__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61827_61870,G__61828_61871) : re_frame.core.reg_fx.call(null,G__61827_61870,G__61828_61871));

//# sourceMappingURL=athens.effects.js.map
