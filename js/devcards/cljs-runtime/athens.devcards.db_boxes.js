goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.data_browser');
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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__59983){
var map__59984 = p__59983;
var map__59984__$1 = (((((!((map__59984 == null))))?(((((map__59984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59984):map__59984);
var box = map__59984__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59984__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__59986 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e59989){if((e59989 instanceof Error)){
var e = e59989;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e59989;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59986,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59986,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__59990_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59990_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60030){
var state_val_60031 = (state_60030[(1)]);
if((state_val_60031 === (7))){
var state_60030__$1 = state_60030;
var statearr_60032_60092 = state_60030__$1;
(statearr_60032_60092[(2)] = false);

(statearr_60032_60092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (1))){
var inst_59992 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_59993 = [false];
var inst_59994 = cljs.core.PersistentHashMap.fromArrays(inst_59992,inst_59993);
var inst_59995 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59994], 0));
var state_60030__$1 = state_60030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60030__$1,(2),inst_59995);
} else {
if((state_val_60031 === (4))){
var state_60030__$1 = state_60030;
var statearr_60033_60093 = state_60030__$1;
(statearr_60033_60093[(2)] = false);

(statearr_60033_60093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (13))){
var inst_60026 = alert("Failed to retrieve data from GitHub");
var state_60030__$1 = state_60030;
var statearr_60034_60094 = state_60030__$1;
(statearr_60034_60094[(2)] = inst_60026);

(statearr_60034_60094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (6))){
var state_60030__$1 = state_60030;
var statearr_60035_60095 = state_60030__$1;
(statearr_60035_60095[(2)] = true);

(statearr_60035_60095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (3))){
var inst_59997 = (state_60030[(7)]);
var inst_60002 = inst_59997.cljs$lang$protocol_mask$partition0$;
var inst_60003 = (inst_60002 & (64));
var inst_60004 = inst_59997.cljs$core$ISeq$;
var inst_60005 = (cljs.core.PROTOCOL_SENTINEL === inst_60004);
var inst_60006 = ((inst_60003) || (inst_60005));
var state_60030__$1 = state_60030;
if(cljs.core.truth_(inst_60006)){
var statearr_60036_60096 = state_60030__$1;
(statearr_60036_60096[(1)] = (6));

} else {
var statearr_60037_60097 = state_60030__$1;
(statearr_60037_60097[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (12))){
var inst_60020 = (state_60030[(8)]);
var inst_60022 = athens.db.str_to_db_tx(inst_60020);
var inst_60023 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_60022);
var inst_60024 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_60030__$1 = (function (){var statearr_60038 = state_60030;
(statearr_60038[(9)] = inst_60023);

return statearr_60038;
})();
var statearr_60039_60098 = state_60030__$1;
(statearr_60039_60098[(2)] = inst_60024);

(statearr_60039_60098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (2))){
var inst_59997 = (state_60030[(7)]);
var inst_59997__$1 = (state_60030[(2)]);
var inst_59999 = (inst_59997__$1 == null);
var inst_60000 = cljs.core.not(inst_59999);
var state_60030__$1 = (function (){var statearr_60040 = state_60030;
(statearr_60040[(7)] = inst_59997__$1);

return statearr_60040;
})();
if(inst_60000){
var statearr_60041_60099 = state_60030__$1;
(statearr_60041_60099[(1)] = (3));

} else {
var statearr_60042_60100 = state_60030__$1;
(statearr_60042_60100[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (11))){
var inst_60018 = (state_60030[(2)]);
var inst_60019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60018,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60018,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60030__$1 = (function (){var statearr_60043 = state_60030;
(statearr_60043[(8)] = inst_60020);

return statearr_60043;
})();
if(cljs.core.truth_(inst_60019)){
var statearr_60044_60101 = state_60030__$1;
(statearr_60044_60101[(1)] = (12));

} else {
var statearr_60045_60102 = state_60030__$1;
(statearr_60045_60102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (9))){
var inst_59997 = (state_60030[(7)]);
var inst_60015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59997);
var state_60030__$1 = state_60030;
var statearr_60046_60103 = state_60030__$1;
(statearr_60046_60103[(2)] = inst_60015);

(statearr_60046_60103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (5))){
var inst_60013 = (state_60030[(2)]);
var state_60030__$1 = state_60030;
if(cljs.core.truth_(inst_60013)){
var statearr_60047_60104 = state_60030__$1;
(statearr_60047_60104[(1)] = (9));

} else {
var statearr_60048_60105 = state_60030__$1;
(statearr_60048_60105[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (14))){
var inst_60028 = (state_60030[(2)]);
var state_60030__$1 = state_60030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60030__$1,inst_60028);
} else {
if((state_val_60031 === (10))){
var inst_59997 = (state_60030[(7)]);
var state_60030__$1 = state_60030;
var statearr_60049_60106 = state_60030__$1;
(statearr_60049_60106[(2)] = inst_59997);

(statearr_60049_60106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60031 === (8))){
var inst_60010 = (state_60030[(2)]);
var state_60030__$1 = state_60030;
var statearr_60050_60107 = state_60030__$1;
(statearr_60050_60107[(2)] = inst_60010);

(statearr_60050_60107[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____0 = (function (){
var statearr_60051 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60051[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__);

(statearr_60051[(1)] = (1));

return statearr_60051;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____1 = (function (state_60030){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60030);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60052){if((e60052 instanceof Object)){
var ex__34210__auto__ = e60052;
var statearr_60053_60108 = state_60030;
(statearr_60053_60108[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60109 = state_60030;
state_60030 = G__60109;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__ = function(state_60030){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____1.call(this,state_60030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60054 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60054[(6)] = c__34274__auto__);

return statearr_60054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60055 = (function (meta60056){
this.meta60056 = meta60056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60057,meta60056__$1){
var self__ = this;
var _60057__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60055(meta60056__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60057){
var self__ = this;
var _60057__$1 = this;
return self__.meta60056;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60055.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60055.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60056","meta60056",450392782,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60055.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60055.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60055");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60055.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60055");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60055.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60055 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60055(meta60056){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60055(meta60056));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60055(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60058 = (function (meta60059){
this.meta60059 = meta60059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60060,meta60059__$1){
var self__ = this;
var _60060__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60058(meta60059__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60060){
var self__ = this;
var _60060__$1 = this;
return self__.meta60059;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60058.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60058.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60059","meta60059",1397754714,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60058.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60058.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60058");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60058.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60058");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60058.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60058 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60058(meta60059){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60058(meta60059));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60058(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__60062 = arguments.length;
switch (G__60062) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__60063){
var map__60064 = p__60063;
var map__60064__$1 = (((((!((map__60064 == null))))?(((((map__60064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60064):map__60064);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60064__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60064__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60064__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
if(athens.devcards.data_browser.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.devcards.data_browser.attr_many_QMARK_(attr)) && (athens.devcards.data_browser.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60066(s__60067){
return (new cljs.core.LazySeq(null,(function (){
var s__60067__$1 = s__60067;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60067__$1);
if(temp__5735__auto__){
var s__60067__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60067__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60067__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60069 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60068 = (0);
while(true){
if((i__60068 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60068);
cljs.core.chunk_append(b__60069,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60070 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60070) : athens.devcards.db_boxes.cell.call(null,G__60070));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60111 = (i__60068 + (1));
i__60068 = G__60111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60069),athens$devcards$db_boxes$cell_$_iter__60066(cljs.core.chunk_rest(s__60067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60069),null);
}
} else {
var v = cljs.core.first(s__60067__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60071 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60071) : athens.devcards.db_boxes.cell.call(null,G__60071));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60066(cljs.core.rest(s__60067__$2)));
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
if(cljs.core.truth_(athens.devcards.data_browser.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60072(s__60073){
return (new cljs.core.LazySeq(null,(function (){
var s__60073__$1 = s__60073;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60073__$1);
if(temp__5735__auto__){
var s__60073__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60073__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60073__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60075 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60074 = (0);
while(true){
if((i__60074 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60074);
cljs.core.chunk_append(b__60075,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60076 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60076) : athens.devcards.db_boxes.cell.call(null,G__60076));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60112 = (i__60074 + (1));
i__60074 = G__60112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60075),athens$devcards$db_boxes$cell_$_iter__60072(cljs.core.chunk_rest(s__60073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60075),null);
}
} else {
var v = cljs.core.first(s__60073__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60077 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60077) : athens.devcards.db_boxes.cell.call(null,G__60077));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60072(cljs.core.rest(s__60073__$2)));
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
if(athens.devcards.data_browser.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60078(s__60079){
return (new cljs.core.LazySeq(null,(function (){
var s__60079__$1 = s__60079;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60079__$1);
if(temp__5735__auto__){
var s__60079__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60079__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60079__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60081 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60080 = (0);
while(true){
if((i__60080 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60080);
cljs.core.chunk_append(b__60081,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60082 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60082) : athens.devcards.db_boxes.cell.call(null,G__60082));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60113 = (i__60080 + (1));
i__60080 = G__60113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60081),athens$devcards$db_boxes$cell_$_iter__60078(cljs.core.chunk_rest(s__60079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60081),null);
}
} else {
var v = cljs.core.first(s__60079__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60083 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60083) : athens.devcards.db_boxes.cell.call(null,G__60083));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60078(cljs.core.rest(s__60079__$2)));
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
var map__60084 = cljs.core.deref(box_state);
var map__60084__$1 = (((((!((map__60084 == null))))?(((((map__60084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60084):map__60084);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60084__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60084__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60084__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60086 = (function (meta60087){
this.meta60087 = meta60087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60088,meta60087__$1){
var self__ = this;
var _60088__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60086(meta60087__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60088){
var self__ = this;
var _60088__$1 = this;
return self__.meta60087;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60086.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60086.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60087","meta60087",-1580441901,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60086.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60086.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60086");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60086.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60086");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60086.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60086 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60086(meta60087){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60086(meta60087));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60086(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60089 = (function (meta60090){
this.meta60090 = meta60090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60091,meta60090__$1){
var self__ = this;
var _60091__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60089(meta60090__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60091){
var self__ = this;
var _60091__$1 = this;
return self__.meta60090;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60089.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60089.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60090","meta60090",1771663205,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60089.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60089.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60089");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60089.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60089");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60089.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60089 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60089(meta60090){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60089(meta60090));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60089(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
