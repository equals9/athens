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
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_42756){
var state_val_42757 = (state_42756[(1)]);
if((state_val_42757 === (7))){
var state_42756__$1 = state_42756;
var statearr_42758_42786 = state_42756__$1;
(statearr_42758_42786[(2)] = false);

(statearr_42758_42786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (1))){
var inst_42719 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42720 = [false];
var inst_42721 = cljs.core.PersistentHashMap.fromArrays(inst_42719,inst_42720);
var inst_42722 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42721], 0));
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42756__$1,(2),inst_42722);
} else {
if((state_val_42757 === (4))){
var state_42756__$1 = state_42756;
var statearr_42759_42787 = state_42756__$1;
(statearr_42759_42787[(2)] = false);

(statearr_42759_42787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (13))){
var inst_42752 = alert("Failed to retrieve data from GitHub");
var state_42756__$1 = state_42756;
var statearr_42760_42788 = state_42756__$1;
(statearr_42760_42788[(2)] = inst_42752);

(statearr_42760_42788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (6))){
var state_42756__$1 = state_42756;
var statearr_42761_42789 = state_42756__$1;
(statearr_42761_42789[(2)] = true);

(statearr_42761_42789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (3))){
var inst_42724 = (state_42756[(7)]);
var inst_42729 = inst_42724.cljs$lang$protocol_mask$partition0$;
var inst_42730 = (inst_42729 & (64));
var inst_42731 = inst_42724.cljs$core$ISeq$;
var inst_42732 = (cljs.core.PROTOCOL_SENTINEL === inst_42731);
var inst_42733 = ((inst_42730) || (inst_42732));
var state_42756__$1 = state_42756;
if(cljs.core.truth_(inst_42733)){
var statearr_42762_42790 = state_42756__$1;
(statearr_42762_42790[(1)] = (6));

} else {
var statearr_42763_42791 = state_42756__$1;
(statearr_42763_42791[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (12))){
var inst_42747 = (state_42756[(8)]);
var inst_42749 = athens.db.str_to_db_tx(inst_42747);
var inst_42750 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_42749) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_42749));
var state_42756__$1 = state_42756;
var statearr_42764_42792 = state_42756__$1;
(statearr_42764_42792[(2)] = inst_42750);

(statearr_42764_42792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (2))){
var inst_42724 = (state_42756[(7)]);
var inst_42724__$1 = (state_42756[(2)]);
var inst_42726 = (inst_42724__$1 == null);
var inst_42727 = cljs.core.not(inst_42726);
var state_42756__$1 = (function (){var statearr_42765 = state_42756;
(statearr_42765[(7)] = inst_42724__$1);

return statearr_42765;
})();
if(inst_42727){
var statearr_42766_42793 = state_42756__$1;
(statearr_42766_42793[(1)] = (3));

} else {
var statearr_42767_42794 = state_42756__$1;
(statearr_42767_42794[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (11))){
var inst_42745 = (state_42756[(2)]);
var inst_42746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42745,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_42747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42745,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_42756__$1 = (function (){var statearr_42768 = state_42756;
(statearr_42768[(8)] = inst_42747);

return statearr_42768;
})();
if(cljs.core.truth_(inst_42746)){
var statearr_42769_42795 = state_42756__$1;
(statearr_42769_42795[(1)] = (12));

} else {
var statearr_42770_42796 = state_42756__$1;
(statearr_42770_42796[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (9))){
var inst_42724 = (state_42756[(7)]);
var inst_42742 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42724);
var state_42756__$1 = state_42756;
var statearr_42771_42797 = state_42756__$1;
(statearr_42771_42797[(2)] = inst_42742);

(statearr_42771_42797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (5))){
var inst_42740 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
if(cljs.core.truth_(inst_42740)){
var statearr_42772_42798 = state_42756__$1;
(statearr_42772_42798[(1)] = (9));

} else {
var statearr_42773_42799 = state_42756__$1;
(statearr_42773_42799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (14))){
var inst_42754 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42756__$1,inst_42754);
} else {
if((state_val_42757 === (10))){
var inst_42724 = (state_42756[(7)]);
var state_42756__$1 = state_42756;
var statearr_42774_42800 = state_42756__$1;
(statearr_42774_42800[(2)] = inst_42724);

(statearr_42774_42800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (8))){
var inst_42737 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
var statearr_42775_42801 = state_42756__$1;
(statearr_42775_42801[(2)] = inst_42737);

(statearr_42775_42801[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto____0 = (function (){
var statearr_42776 = [null,null,null,null,null,null,null,null,null];
(statearr_42776[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto__);

(statearr_42776[(1)] = (1));

return statearr_42776;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto____1 = (function (state_42756){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_42756);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e42777){if((e42777 instanceof Object)){
var ex__34203__auto__ = e42777;
var statearr_42778_42802 = state_42756;
(statearr_42778_42802[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42803 = state_42756;
state_42756 = G__42803;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto__ = function(state_42756){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto____1.call(this,state_42756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_42779 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_42779[(6)] = c__34267__auto__);

return statearr_42779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42780 = (function (meta42781){
this.meta42781 = meta42781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42782,meta42781__$1){
var self__ = this;
var _42782__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42780(meta42781__$1));
}));

(athens.devcards.db.t_athens$devcards$db42780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42782){
var self__ = this;
var _42782__$1 = this;
return self__.meta42781;
}));

(athens.devcards.db.t_athens$devcards$db42780.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42780.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38808__auto__,devcard_opts__38809__auto__){
var self__ = this;
var this__38808__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38809__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38827__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__38827__auto__)){
return (function (data_atom__38828__auto__,owner__38829__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38827__auto__,data_atom__38828__auto__,owner__38829__auto__], null));
});
} else {
return reagent.core.as_element(v__38827__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38809__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42781","meta42781",-2133615513,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42780.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42780.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42780");

(athens.devcards.db.t_athens$devcards$db42780.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42780");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42780.
 */
athens.devcards.db.__GT_t_athens$devcards$db42780 = (function athens$devcards$db$__GT_t_athens$devcards$db42780(meta42781){
return (new athens.devcards.db.t_athens$devcards$db42780(meta42781));
});

}

return (new athens.devcards.db.t_athens$devcards$db42780(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42783 = (function (meta42784){
this.meta42784 = meta42784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42785,meta42784__$1){
var self__ = this;
var _42785__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42783(meta42784__$1));
}));

(athens.devcards.db.t_athens$devcards$db42783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42785){
var self__ = this;
var _42785__$1 = this;
return self__.meta42784;
}));

(athens.devcards.db.t_athens$devcards$db42783.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42783.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38808__auto__,devcard_opts__38809__auto__){
var self__ = this;
var this__38808__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38809__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38827__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__38827__auto__)){
return (function (data_atom__38828__auto__,owner__38829__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38827__auto__,data_atom__38828__auto__,owner__38829__auto__], null));
});
} else {
return reagent.core.as_element(v__38827__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38809__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42784","meta42784",-64272760,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42783.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42783.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42783");

(athens.devcards.db.t_athens$devcards$db42783.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42783");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42783.
 */
athens.devcards.db.__GT_t_athens$devcards$db42783 = (function athens$devcards$db$__GT_t_athens$devcards$db42783(meta42784){
return (new athens.devcards.db.t_athens$devcards$db42783(meta42784));
});

}

return (new athens.devcards.db.t_athens$devcards$db42783(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
