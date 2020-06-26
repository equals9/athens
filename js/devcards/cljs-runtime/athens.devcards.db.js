goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_42763){
var state_val_42764 = (state_42763[(1)]);
if((state_val_42764 === (7))){
var state_42763__$1 = state_42763;
var statearr_42765_42793 = state_42763__$1;
(statearr_42765_42793[(2)] = false);

(statearr_42765_42793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (1))){
var inst_42726 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42727 = [false];
var inst_42728 = cljs.core.PersistentHashMap.fromArrays(inst_42726,inst_42727);
var inst_42729 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42728], 0));
var state_42763__$1 = state_42763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42763__$1,(2),inst_42729);
} else {
if((state_val_42764 === (4))){
var state_42763__$1 = state_42763;
var statearr_42766_42794 = state_42763__$1;
(statearr_42766_42794[(2)] = false);

(statearr_42766_42794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (13))){
var inst_42759 = alert("Failed to retrieve data from GitHub");
var state_42763__$1 = state_42763;
var statearr_42767_42795 = state_42763__$1;
(statearr_42767_42795[(2)] = inst_42759);

(statearr_42767_42795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (6))){
var state_42763__$1 = state_42763;
var statearr_42768_42796 = state_42763__$1;
(statearr_42768_42796[(2)] = true);

(statearr_42768_42796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (3))){
var inst_42731 = (state_42763[(7)]);
var inst_42736 = inst_42731.cljs$lang$protocol_mask$partition0$;
var inst_42737 = (inst_42736 & (64));
var inst_42738 = inst_42731.cljs$core$ISeq$;
var inst_42739 = (cljs.core.PROTOCOL_SENTINEL === inst_42738);
var inst_42740 = ((inst_42737) || (inst_42739));
var state_42763__$1 = state_42763;
if(cljs.core.truth_(inst_42740)){
var statearr_42769_42797 = state_42763__$1;
(statearr_42769_42797[(1)] = (6));

} else {
var statearr_42770_42798 = state_42763__$1;
(statearr_42770_42798[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (12))){
var inst_42754 = (state_42763[(8)]);
var inst_42756 = athens.db.str_to_db_tx(inst_42754);
var inst_42757 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_42756) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_42756));
var state_42763__$1 = state_42763;
var statearr_42771_42799 = state_42763__$1;
(statearr_42771_42799[(2)] = inst_42757);

(statearr_42771_42799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (2))){
var inst_42731 = (state_42763[(7)]);
var inst_42731__$1 = (state_42763[(2)]);
var inst_42733 = (inst_42731__$1 == null);
var inst_42734 = cljs.core.not(inst_42733);
var state_42763__$1 = (function (){var statearr_42772 = state_42763;
(statearr_42772[(7)] = inst_42731__$1);

return statearr_42772;
})();
if(inst_42734){
var statearr_42773_42800 = state_42763__$1;
(statearr_42773_42800[(1)] = (3));

} else {
var statearr_42774_42801 = state_42763__$1;
(statearr_42774_42801[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (11))){
var inst_42752 = (state_42763[(2)]);
var inst_42753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42752,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_42754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42752,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_42763__$1 = (function (){var statearr_42775 = state_42763;
(statearr_42775[(8)] = inst_42754);

return statearr_42775;
})();
if(cljs.core.truth_(inst_42753)){
var statearr_42776_42802 = state_42763__$1;
(statearr_42776_42802[(1)] = (12));

} else {
var statearr_42777_42803 = state_42763__$1;
(statearr_42777_42803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (9))){
var inst_42731 = (state_42763[(7)]);
var inst_42749 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42731);
var state_42763__$1 = state_42763;
var statearr_42778_42804 = state_42763__$1;
(statearr_42778_42804[(2)] = inst_42749);

(statearr_42778_42804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (5))){
var inst_42747 = (state_42763[(2)]);
var state_42763__$1 = state_42763;
if(cljs.core.truth_(inst_42747)){
var statearr_42779_42805 = state_42763__$1;
(statearr_42779_42805[(1)] = (9));

} else {
var statearr_42780_42806 = state_42763__$1;
(statearr_42780_42806[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (14))){
var inst_42761 = (state_42763[(2)]);
var state_42763__$1 = state_42763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42763__$1,inst_42761);
} else {
if((state_val_42764 === (10))){
var inst_42731 = (state_42763[(7)]);
var state_42763__$1 = state_42763;
var statearr_42781_42807 = state_42763__$1;
(statearr_42781_42807[(2)] = inst_42731);

(statearr_42781_42807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42764 === (8))){
var inst_42744 = (state_42763[(2)]);
var state_42763__$1 = state_42763;
var statearr_42782_42808 = state_42763__$1;
(statearr_42782_42808[(2)] = inst_42744);

(statearr_42782_42808[(1)] = (5));


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
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto____0 = (function (){
var statearr_42783 = [null,null,null,null,null,null,null,null,null];
(statearr_42783[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto__);

(statearr_42783[(1)] = (1));

return statearr_42783;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto____1 = (function (state_42763){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_42763);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e42784){if((e42784 instanceof Object)){
var ex__34210__auto__ = e42784;
var statearr_42785_42809 = state_42763;
(statearr_42785_42809[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42810 = state_42763;
state_42763 = G__42810;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto__ = function(state_42763){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto____1.call(this,state_42763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_42786 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_42786[(6)] = c__34274__auto__);

return statearr_42786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset DB"], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42787 = (function (meta42788){
this.meta42788 = meta42788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42789,meta42788__$1){
var self__ = this;
var _42789__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42787(meta42788__$1));
}));

(athens.devcards.db.t_athens$devcards$db42787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42789){
var self__ = this;
var _42789__$1 = this;
return self__.meta42788;
}));

(athens.devcards.db.t_athens$devcards$db42787.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42787.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42788","meta42788",1647694281,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42787.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42787.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42787");

(athens.devcards.db.t_athens$devcards$db42787.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42787");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42787.
 */
athens.devcards.db.__GT_t_athens$devcards$db42787 = (function athens$devcards$db$__GT_t_athens$devcards$db42787(meta42788){
return (new athens.devcards.db.t_athens$devcards$db42787(meta42788));
});

}

return (new athens.devcards.db.t_athens$devcards$db42787(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42790 = (function (meta42791){
this.meta42791 = meta42791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42792,meta42791__$1){
var self__ = this;
var _42792__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42790(meta42791__$1));
}));

(athens.devcards.db.t_athens$devcards$db42790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42792){
var self__ = this;
var _42792__$1 = this;
return self__.meta42791;
}));

(athens.devcards.db.t_athens$devcards$db42790.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42790.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42791","meta42791",274484758,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42790.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42790.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42790");

(athens.devcards.db.t_athens$devcards$db42790.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42790");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42790.
 */
athens.devcards.db.__GT_t_athens$devcards$db42790 = (function athens$devcards$db$__GT_t_athens$devcards$db42790(meta42791){
return (new athens.devcards.db.t_athens$devcards$db42790(meta42791));
});

}

return (new athens.devcards.db.t_athens$devcards$db42790(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
