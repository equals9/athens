goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.data_browser');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
goog.require('goog.events.KeyCodes');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)"], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__60467){
var map__60468 = p__60467;
var map__60468__$1 = (((((!((map__60468 == null))))?(((((map__60468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60468):map__60468);
var box = map__60468__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__60470 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e60473){if((e60473 instanceof Error)){
var e = e60473;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e60473;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60470,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60470,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__60474_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60474_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__37021__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37022__auto__ = (function (){var switch__36954__auto__ = (function (state_60514){
var state_val_60515 = (state_60514[(1)]);
if((state_val_60515 === (7))){
var state_60514__$1 = state_60514;
var statearr_60516_60576 = state_60514__$1;
(statearr_60516_60576[(2)] = false);

(statearr_60516_60576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (1))){
var inst_60476 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60477 = [false];
var inst_60478 = cljs.core.PersistentHashMap.fromArrays(inst_60476,inst_60477);
var inst_60479 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60478], 0));
var state_60514__$1 = state_60514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60514__$1,(2),inst_60479);
} else {
if((state_val_60515 === (4))){
var state_60514__$1 = state_60514;
var statearr_60517_60577 = state_60514__$1;
(statearr_60517_60577[(2)] = false);

(statearr_60517_60577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (13))){
var inst_60510 = alert("Failed to retrieve data from GitHub");
var state_60514__$1 = state_60514;
var statearr_60518_60578 = state_60514__$1;
(statearr_60518_60578[(2)] = inst_60510);

(statearr_60518_60578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (6))){
var state_60514__$1 = state_60514;
var statearr_60519_60579 = state_60514__$1;
(statearr_60519_60579[(2)] = true);

(statearr_60519_60579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (3))){
var inst_60481 = (state_60514[(7)]);
var inst_60486 = inst_60481.cljs$lang$protocol_mask$partition0$;
var inst_60487 = (inst_60486 & (64));
var inst_60488 = inst_60481.cljs$core$ISeq$;
var inst_60489 = (cljs.core.PROTOCOL_SENTINEL === inst_60488);
var inst_60490 = ((inst_60487) || (inst_60489));
var state_60514__$1 = state_60514;
if(cljs.core.truth_(inst_60490)){
var statearr_60520_60580 = state_60514__$1;
(statearr_60520_60580[(1)] = (6));

} else {
var statearr_60521_60581 = state_60514__$1;
(statearr_60521_60581[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (12))){
var inst_60504 = (state_60514[(8)]);
var inst_60506 = athens.db.str_to_db_tx(inst_60504);
var inst_60507 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_60506);
var inst_60508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_60514__$1 = (function (){var statearr_60522 = state_60514;
(statearr_60522[(9)] = inst_60507);

return statearr_60522;
})();
var statearr_60523_60582 = state_60514__$1;
(statearr_60523_60582[(2)] = inst_60508);

(statearr_60523_60582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (2))){
var inst_60481 = (state_60514[(7)]);
var inst_60481__$1 = (state_60514[(2)]);
var inst_60483 = (inst_60481__$1 == null);
var inst_60484 = cljs.core.not(inst_60483);
var state_60514__$1 = (function (){var statearr_60524 = state_60514;
(statearr_60524[(7)] = inst_60481__$1);

return statearr_60524;
})();
if(inst_60484){
var statearr_60525_60583 = state_60514__$1;
(statearr_60525_60583[(1)] = (3));

} else {
var statearr_60526_60584 = state_60514__$1;
(statearr_60526_60584[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (11))){
var inst_60502 = (state_60514[(2)]);
var inst_60503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60502,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60502,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60514__$1 = (function (){var statearr_60527 = state_60514;
(statearr_60527[(8)] = inst_60504);

return statearr_60527;
})();
if(cljs.core.truth_(inst_60503)){
var statearr_60528_60585 = state_60514__$1;
(statearr_60528_60585[(1)] = (12));

} else {
var statearr_60529_60586 = state_60514__$1;
(statearr_60529_60586[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (9))){
var inst_60481 = (state_60514[(7)]);
var inst_60499 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60481);
var state_60514__$1 = state_60514;
var statearr_60530_60587 = state_60514__$1;
(statearr_60530_60587[(2)] = inst_60499);

(statearr_60530_60587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (5))){
var inst_60497 = (state_60514[(2)]);
var state_60514__$1 = state_60514;
if(cljs.core.truth_(inst_60497)){
var statearr_60531_60588 = state_60514__$1;
(statearr_60531_60588[(1)] = (9));

} else {
var statearr_60532_60589 = state_60514__$1;
(statearr_60532_60589[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (14))){
var inst_60512 = (state_60514[(2)]);
var state_60514__$1 = state_60514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60514__$1,inst_60512);
} else {
if((state_val_60515 === (10))){
var inst_60481 = (state_60514[(7)]);
var state_60514__$1 = state_60514;
var statearr_60533_60590 = state_60514__$1;
(statearr_60533_60590[(2)] = inst_60481);

(statearr_60533_60590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (8))){
var inst_60494 = (state_60514[(2)]);
var state_60514__$1 = state_60514;
var statearr_60534_60591 = state_60514__$1;
(statearr_60534_60591[(2)] = inst_60494);

(statearr_60534_60591[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto____0 = (function (){
var statearr_60535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60535[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto__);

(statearr_60535[(1)] = (1));

return statearr_60535;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto____1 = (function (state_60514){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_60514);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e60536){if((e60536 instanceof Object)){
var ex__36958__auto__ = e60536;
var statearr_60537_60592 = state_60514;
(statearr_60537_60592[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60593 = state_60514;
state_60514 = G__60593;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto__ = function(state_60514){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto____1.call(this,state_60514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36955__auto__;
})()
})();
var state__37023__auto__ = (function (){var statearr_60538 = (f__37022__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37022__auto__.cljs$core$IFn$_invoke$arity$0() : f__37022__auto__.call(null));
(statearr_60538[(6)] = c__37021__auto__);

return statearr_60538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37023__auto__);
}));

return c__37021__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60539 = (function (meta60540){
this.meta60540 = meta60540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60541,meta60540__$1){
var self__ = this;
var _60541__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60539(meta60540__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60541){
var self__ = this;
var _60541__$1 = this;
return self__.meta60540;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60539.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60539.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60540","meta60540",319925287,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60539.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60539.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60539");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60539.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60539");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60539.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60539 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60539(meta60540){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60539(meta60540));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60539(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60542 = (function (meta60543){
this.meta60543 = meta60543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60544,meta60543__$1){
var self__ = this;
var _60544__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60542(meta60543__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60544){
var self__ = this;
var _60544__$1 = this;
return self__.meta60543;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60542.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60542.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60543","meta60543",1753529537,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60542.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60542.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60542");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60542.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60542");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60542.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60542 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60542(meta60543){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60542(meta60543));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60542(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__60546 = arguments.length;
switch (G__60546) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__60547){
var map__60548 = p__60547;
var map__60548__$1 = (((((!((map__60548 == null))))?(((((map__60548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60548):map__60548);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60548__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60548__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60548__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.views.data_browser.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.views.data_browser.attr_many_QMARK_(attr)) && (athens.views.data_browser.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60550(s__60551){
return (new cljs.core.LazySeq(null,(function (){
var s__60551__$1 = s__60551;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60551__$1);
if(temp__5735__auto__){
var s__60551__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60551__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60551__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60553 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60552 = (0);
while(true){
if((i__60552 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60552);
cljs.core.chunk_append(b__60553,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60554 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60554) : athens.devcards.db_boxes.cell.call(null,G__60554));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60595 = (i__60552 + (1));
i__60552 = G__60595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60553),athens$devcards$db_boxes$cell_$_iter__60550(cljs.core.chunk_rest(s__60551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60553),null);
}
} else {
var v = cljs.core.first(s__60551__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60555 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60555) : athens.devcards.db_boxes.cell.call(null,G__60555));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60550(cljs.core.rest(s__60551__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(cljs.core.truth_(athens.views.data_browser.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60556(s__60557){
return (new cljs.core.LazySeq(null,(function (){
var s__60557__$1 = s__60557;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60557__$1);
if(temp__5735__auto__){
var s__60557__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60557__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60557__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60559 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60558 = (0);
while(true){
if((i__60558 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60558);
cljs.core.chunk_append(b__60559,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60560 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60560) : athens.devcards.db_boxes.cell.call(null,G__60560));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60596 = (i__60558 + (1));
i__60558 = G__60596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60559),athens$devcards$db_boxes$cell_$_iter__60556(cljs.core.chunk_rest(s__60557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60559),null);
}
} else {
var v = cljs.core.first(s__60557__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60561 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60561) : athens.devcards.db_boxes.cell.call(null,G__60561));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60556(cljs.core.rest(s__60557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(athens.views.data_browser.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60562(s__60563){
return (new cljs.core.LazySeq(null,(function (){
var s__60563__$1 = s__60563;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60563__$1);
if(temp__5735__auto__){
var s__60563__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60563__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60563__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60565 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60564 = (0);
while(true){
if((i__60564 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60564);
cljs.core.chunk_append(b__60565,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60566 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60566) : athens.devcards.db_boxes.cell.call(null,G__60566));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60597 = (i__60564 + (1));
i__60564 = G__60597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60565),athens$devcards$db_boxes$cell_$_iter__60562(cljs.core.chunk_rest(s__60563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60565),null);
}
} else {
var v = cljs.core.first(s__60563__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60567 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60567) : athens.devcards.db_boxes.cell.call(null,G__60567));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60562(cljs.core.rest(s__60563__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key = e.keyCode;
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.TAB)){
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);
} else {
return null;

}
}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__60568 = cljs.core.deref(box_state);
var map__60568__$1 = (((((!((map__60568 == null))))?(((((map__60568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60568):map__60568);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60568__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60568__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60568__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60570 = (function (meta60571){
this.meta60571 = meta60571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60572,meta60571__$1){
var self__ = this;
var _60572__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60570(meta60571__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60572){
var self__ = this;
var _60572__$1 = this;
return self__.meta60571;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60570.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60570.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60571","meta60571",-1093948633,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60570.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60570.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60570");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60570.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60570");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60570.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60570 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60570(meta60571){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60570(meta60571));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60570(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60573 = (function (meta60574){
this.meta60574 = meta60574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60575,meta60574__$1){
var self__ = this;
var _60575__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60573(meta60574__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60575){
var self__ = this;
var _60575__$1 = this;
return self__.meta60574;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60573.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60573.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60574","meta60574",763747709,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60573.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60573.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60573");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60573.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60573");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60573.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60573 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60573(meta60574){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60573(meta60574));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60573(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
