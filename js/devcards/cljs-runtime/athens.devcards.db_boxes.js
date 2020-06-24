goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.color');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
goog.require('stylefy.core');
athens.devcards.db_boxes.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 3, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)",new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__59990){
var map__59991 = p__59990;
var map__59991__$1 = (((((!((map__59991 == null))))?(((((map__59991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59991):map__59991);
var box = map__59991__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59991__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__59993 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e59996){if((e59996 instanceof Error)){
var e = e59996;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e59996;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59993,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59993,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__59997_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59997_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.increase_limit_BANG_ = (function athens$devcards$db_boxes$increase_limit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.db_boxes.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_60037){
var state_val_60038 = (state_60037[(1)]);
if((state_val_60038 === (7))){
var state_60037__$1 = state_60037;
var statearr_60039_60161 = state_60037__$1;
(statearr_60039_60161[(2)] = false);

(statearr_60039_60161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (1))){
var inst_59999 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60000 = [false];
var inst_60001 = cljs.core.PersistentHashMap.fromArrays(inst_59999,inst_60000);
var inst_60002 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60001], 0));
var state_60037__$1 = state_60037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60037__$1,(2),inst_60002);
} else {
if((state_val_60038 === (4))){
var state_60037__$1 = state_60037;
var statearr_60040_60162 = state_60037__$1;
(statearr_60040_60162[(2)] = false);

(statearr_60040_60162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (13))){
var inst_60033 = alert("Failed to retrieve data from GitHub");
var state_60037__$1 = state_60037;
var statearr_60041_60163 = state_60037__$1;
(statearr_60041_60163[(2)] = inst_60033);

(statearr_60041_60163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (6))){
var state_60037__$1 = state_60037;
var statearr_60042_60164 = state_60037__$1;
(statearr_60042_60164[(2)] = true);

(statearr_60042_60164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (3))){
var inst_60004 = (state_60037[(7)]);
var inst_60009 = inst_60004.cljs$lang$protocol_mask$partition0$;
var inst_60010 = (inst_60009 & (64));
var inst_60011 = inst_60004.cljs$core$ISeq$;
var inst_60012 = (cljs.core.PROTOCOL_SENTINEL === inst_60011);
var inst_60013 = ((inst_60010) || (inst_60012));
var state_60037__$1 = state_60037;
if(cljs.core.truth_(inst_60013)){
var statearr_60043_60165 = state_60037__$1;
(statearr_60043_60165[(1)] = (6));

} else {
var statearr_60044_60166 = state_60037__$1;
(statearr_60044_60166[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (12))){
var inst_60027 = (state_60037[(8)]);
var inst_60029 = athens.db.str_to_db_tx(inst_60027);
var inst_60030 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_60029);
var inst_60031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_60037__$1 = (function (){var statearr_60045 = state_60037;
(statearr_60045[(9)] = inst_60030);

return statearr_60045;
})();
var statearr_60046_60167 = state_60037__$1;
(statearr_60046_60167[(2)] = inst_60031);

(statearr_60046_60167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (2))){
var inst_60004 = (state_60037[(7)]);
var inst_60004__$1 = (state_60037[(2)]);
var inst_60006 = (inst_60004__$1 == null);
var inst_60007 = cljs.core.not(inst_60006);
var state_60037__$1 = (function (){var statearr_60047 = state_60037;
(statearr_60047[(7)] = inst_60004__$1);

return statearr_60047;
})();
if(inst_60007){
var statearr_60048_60168 = state_60037__$1;
(statearr_60048_60168[(1)] = (3));

} else {
var statearr_60049_60169 = state_60037__$1;
(statearr_60049_60169[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (11))){
var inst_60025 = (state_60037[(2)]);
var inst_60026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60025,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60025,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60037__$1 = (function (){var statearr_60050 = state_60037;
(statearr_60050[(8)] = inst_60027);

return statearr_60050;
})();
if(cljs.core.truth_(inst_60026)){
var statearr_60051_60170 = state_60037__$1;
(statearr_60051_60170[(1)] = (12));

} else {
var statearr_60052_60171 = state_60037__$1;
(statearr_60052_60171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (9))){
var inst_60004 = (state_60037[(7)]);
var inst_60022 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60004);
var state_60037__$1 = state_60037;
var statearr_60053_60172 = state_60037__$1;
(statearr_60053_60172[(2)] = inst_60022);

(statearr_60053_60172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (5))){
var inst_60020 = (state_60037[(2)]);
var state_60037__$1 = state_60037;
if(cljs.core.truth_(inst_60020)){
var statearr_60054_60173 = state_60037__$1;
(statearr_60054_60173[(1)] = (9));

} else {
var statearr_60055_60174 = state_60037__$1;
(statearr_60055_60174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (14))){
var inst_60035 = (state_60037[(2)]);
var state_60037__$1 = state_60037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60037__$1,inst_60035);
} else {
if((state_val_60038 === (10))){
var inst_60004 = (state_60037[(7)]);
var state_60037__$1 = state_60037;
var statearr_60056_60175 = state_60037__$1;
(statearr_60056_60175[(2)] = inst_60004);

(statearr_60056_60175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60038 === (8))){
var inst_60017 = (state_60037[(2)]);
var state_60037__$1 = state_60037;
var statearr_60057_60176 = state_60037__$1;
(statearr_60057_60176[(2)] = inst_60017);

(statearr_60057_60176[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto____0 = (function (){
var statearr_60058 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60058[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto__);

(statearr_60058[(1)] = (1));

return statearr_60058;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto____1 = (function (state_60037){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_60037);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e60059){if((e60059 instanceof Object)){
var ex__34203__auto__ = e60059;
var statearr_60060_60177 = state_60037;
(statearr_60060_60177[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60178 = state_60037;
state_60037 = G__60178;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto__ = function(state_60037){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto____1.call(this,state_60037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_60061 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_60061[(6)] = c__34267__auto__);

return statearr_60061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60062 = (function (meta60063){
this.meta60063 = meta60063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60064,meta60063__$1){
var self__ = this;
var _60064__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60062(meta60063__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60064){
var self__ = this;
var _60064__$1 = this;
return self__.meta60063;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60062.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60062.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38808__auto__,devcard_opts__38809__auto__){
var self__ = this;
var this__38808__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38809__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38827__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__38827__auto__)){
return (function (data_atom__38828__auto__,owner__38829__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38827__auto__,data_atom__38828__auto__,owner__38829__auto__], null));
});
} else {
return reagent.core.as_element(v__38827__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38809__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60063","meta60063",-1082028540,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60062.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60062.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60062");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60062.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60062");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60062.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60062 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60062(meta60063){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60062(meta60063));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60062(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60065 = (function (meta60066){
this.meta60066 = meta60066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60067,meta60066__$1){
var self__ = this;
var _60067__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60065(meta60066__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60067){
var self__ = this;
var _60067__$1 = this;
return self__.meta60066;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60065.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60065.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38808__auto__,devcard_opts__38809__auto__){
var self__ = this;
var this__38808__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38809__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38827__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__38827__auto__)){
return (function (data_atom__38828__auto__,owner__38829__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38827__auto__,data_atom__38828__auto__,owner__38829__auto__], null));
});
} else {
return reagent.core.as_element(v__38827__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38809__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60066","meta60066",-1558565060,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60065.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60065.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60065");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60065.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60065");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60065.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60065 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60065(meta60066){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60065(meta60066));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60065(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.attr_unique_QMARK_ = (function athens$devcards$db_boxes$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.devcards.db_boxes.attr_many_QMARK_ = (function athens$devcards$db_boxes$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.devcards.db_boxes.attr_ref_QMARK_ = (function athens$devcards$db_boxes$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.devcards.db_boxes.attr_reverse_QMARK_ = (function athens$devcards$db_boxes$attr_reverse_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return clojure.string.starts_with_QMARK_(cljs.core.name(attr),"_");
} else {
return null;
}
});
athens.devcards.db_boxes.headings = (function athens$devcards$db_boxes$headings(data,mode){
var G__60068 = mode;
var G__60068__$1 = (((G__60068 instanceof cljs.core.Keyword))?G__60068.fqn:null);
switch (G__60068__$1) {
case "coll":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","val"], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","val"], null);

break;
case "tuples":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,data))));

break;
case "maps":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60068__$1)].join('')));

}
});
athens.devcards.db_boxes.coll_rows = (function athens$devcards$db_boxes$coll_rows(coll){
var row = (function (p__60069){
var vec__60070 = p__60069;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.db_boxes.reverse_refs_for_attr = (function athens$devcards$db_boxes$reverse_refs_for_attr(attr,eid){
var G__60073 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__60074 = cljs.core.deref(athens.db.dsdb);
var G__60075 = attr;
var G__60076 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__60073,G__60074,G__60075,G__60076) : datascript.core.q.call(null,G__60073,G__60074,G__60075,G__60076));
});
athens.devcards.db_boxes.reverse_attr = (function athens$devcards$db_boxes$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.db_boxes.wrap_with_db_id = (function athens$devcards$db_boxes$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.db_boxes.reverse_refs = (function athens$devcards$db_boxes$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$reverse_refs_$_iter__60077(s__60078){
return (new cljs.core.LazySeq(null,(function (){
var s__60078__$1 = s__60078;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60078__$1);
if(temp__5735__auto__){
var s__60078__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60078__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60078__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60080 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60079 = (0);
while(true){
if((i__60079 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60079);
cljs.core.chunk_append(b__60080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null));

var G__60180 = (i__60079 + (1));
i__60079 = G__60180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60080),athens$devcards$db_boxes$reverse_refs_$_iter__60077(cljs.core.chunk_rest(s__60078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60080),null);
}
} else {
var attr = cljs.core.first(s__60078__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null),athens$devcards$db_boxes$reverse_refs_$_iter__60077(cljs.core.rest(s__60078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_attrs);
})());
});
athens.devcards.db_boxes.reverse_rows = (function athens$devcards$db_boxes$reverse_rows(p__60081){
var map__60082 = p__60081;
var map__60082__$1 = (((((!((map__60082 == null))))?(((((map__60082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60082):map__60082);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60082__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.db_boxes.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.db_boxes.map_rows = (function athens$devcards$db_boxes$map_rows(m){
var row = (function (p__60084){
var vec__60085 = p__60084;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60085,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.db_boxes.reverse_rows(m)));
});
athens.devcards.db_boxes.tuple_rows = (function athens$devcards$db_boxes$tuple_rows(tuples){
var row = (function (p__60088){
var vec__60089 = p__60088;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60089,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60089,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.db_boxes.maps_rows = (function athens$devcards$db_boxes$maps_rows(ms){
var hs = athens.devcards.db_boxes.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$db_boxes$maps_rows_$_iter__60092(s__60093){
return (new cljs.core.LazySeq(null,(function (){
var s__60093__$1 = s__60093;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60093__$1);
if(temp__5735__auto__){
var s__60093__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60093__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60093__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60095 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60094 = (0);
while(true){
if((i__60094 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60094);
cljs.core.chunk_append(b__60095,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__60094,idx,c__4580__auto__,size__4581__auto__,b__60095,s__60093__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__60092_$_iter__60096(s__60097){
return (new cljs.core.LazySeq(null,((function (i__60094,idx,c__4580__auto__,size__4581__auto__,b__60095,s__60093__$2,temp__5735__auto__,hs){
return (function (){
var s__60097__$1 = s__60097;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60097__$1);
if(temp__5735__auto____$1){
var s__60097__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60097__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60097__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60099 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60098 = (0);
while(true){
if((i__60098 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60098);
cljs.core.chunk_append(b__60099,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__60181 = (i__60098 + (1));
i__60098 = G__60181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60099),athens$devcards$db_boxes$maps_rows_$_iter__60092_$_iter__60096(cljs.core.chunk_rest(s__60097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60099),null);
}
} else {
var h = cljs.core.first(s__60097__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__60092_$_iter__60096(cljs.core.rest(s__60097__$2)));
}
} else {
return null;
}
break;
}
});})(i__60094,idx,c__4580__auto__,size__4581__auto__,b__60095,s__60093__$2,temp__5735__auto__,hs))
,null,null));
});})(i__60094,idx,c__4580__auto__,size__4581__auto__,b__60095,s__60093__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__60182 = (i__60094 + (1));
i__60094 = G__60182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60095),athens$devcards$db_boxes$maps_rows_$_iter__60092(cljs.core.chunk_rest(s__60093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60095),null);
}
} else {
var idx = cljs.core.first(s__60093__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__60093__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__60092_$_iter__60100(s__60101){
return (new cljs.core.LazySeq(null,(function (){
var s__60101__$1 = s__60101;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60101__$1);
if(temp__5735__auto____$1){
var s__60101__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60101__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60101__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60103 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60102 = (0);
while(true){
if((i__60102 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60102);
cljs.core.chunk_append(b__60103,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__60183 = (i__60102 + (1));
i__60102 = G__60183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60103),athens$devcards$db_boxes$maps_rows_$_iter__60092_$_iter__60100(cljs.core.chunk_rest(s__60101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60103),null);
}
} else {
var h = cljs.core.first(s__60101__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__60092_$_iter__60100(cljs.core.rest(s__60101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__60093__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$maps_rows_$_iter__60092(cljs.core.rest(s__60093__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms)));
});
athens.devcards.db_boxes.get_rows = (function athens$devcards$db_boxes$get_rows(data,mode){
var G__60104 = mode;
var G__60104__$1 = (((G__60104 instanceof cljs.core.Keyword))?G__60104.fqn:null);
switch (G__60104__$1) {
case "coll":
return athens.devcards.db_boxes.coll_rows(data);

break;
case "map":
return athens.devcards.db_boxes.map_rows(data);

break;
case "tuples":
return athens.devcards.db_boxes.tuple_rows(data);

break;
case "maps":
return athens.devcards.db_boxes.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60104__$1)].join('')));

}
});
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__60106 = arguments.length;
switch (G__60106) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__60107){
var map__60108 = p__60107;
var map__60108__$1 = (((((!((map__60108 == null))))?(((((map__60108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60108):map__60108);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
if(athens.devcards.db_boxes.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.devcards.db_boxes.attr_many_QMARK_(attr)) && (athens.devcards.db_boxes.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60110(s__60111){
return (new cljs.core.LazySeq(null,(function (){
var s__60111__$1 = s__60111;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60111__$1);
if(temp__5735__auto__){
var s__60111__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60111__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60111__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60113 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60112 = (0);
while(true){
if((i__60112 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60112);
cljs.core.chunk_append(b__60113,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60114 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60114) : athens.devcards.db_boxes.cell.call(null,G__60114));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60186 = (i__60112 + (1));
i__60112 = G__60186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60113),athens$devcards$db_boxes$cell_$_iter__60110(cljs.core.chunk_rest(s__60111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60113),null);
}
} else {
var v = cljs.core.first(s__60111__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60115 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60115) : athens.devcards.db_boxes.cell.call(null,G__60115));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60110(cljs.core.rest(s__60111__$2)));
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
if(cljs.core.truth_(athens.devcards.db_boxes.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60116(s__60117){
return (new cljs.core.LazySeq(null,(function (){
var s__60117__$1 = s__60117;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60117__$1);
if(temp__5735__auto__){
var s__60117__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60117__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60117__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60119 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60118 = (0);
while(true){
if((i__60118 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60118);
cljs.core.chunk_append(b__60119,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60120 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60120) : athens.devcards.db_boxes.cell.call(null,G__60120));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60187 = (i__60118 + (1));
i__60118 = G__60187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60119),athens$devcards$db_boxes$cell_$_iter__60116(cljs.core.chunk_rest(s__60117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60119),null);
}
} else {
var v = cljs.core.first(s__60117__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60121 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60121) : athens.devcards.db_boxes.cell.call(null,G__60121));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60116(cljs.core.rest(s__60117__$2)));
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
if(athens.devcards.db_boxes.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60122(s__60123){
return (new cljs.core.LazySeq(null,(function (){
var s__60123__$1 = s__60123;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60123__$1);
if(temp__5735__auto__){
var s__60123__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60123__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60123__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60125 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60124 = (0);
while(true){
if((i__60124 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60124);
cljs.core.chunk_append(b__60125,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60126 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60126) : athens.devcards.db_boxes.cell.call(null,G__60126));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60188 = (i__60124 + (1));
i__60124 = G__60188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60125),athens$devcards$db_boxes$cell_$_iter__60122(cljs.core.chunk_rest(s__60123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60125),null);
}
} else {
var v = cljs.core.first(s__60123__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60127 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60127) : athens.devcards.db_boxes.cell.call(null,G__60127));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60122(cljs.core.rest(s__60123__$2)));
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
athens.devcards.db_boxes.table_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),garden.color.opacify(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.db_boxes.footer_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null)], null);
athens.devcards.db_boxes.table_view = (function athens$devcards$db_boxes$table_view(data,mode,limit){
var hs = athens.devcards.db_boxes.headings(data,mode);
var rows = athens.devcards.db_boxes.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__60128(s__60129){
return (new cljs.core.LazySeq(null,(function (){
var s__60129__$1 = s__60129;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60129__$1);
if(temp__5735__auto__){
var s__60129__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60129__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60129__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60131 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60130 = (0);
while(true){
if((i__60130 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60130);
cljs.core.chunk_append(b__60131,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__60189 = (i__60130 + (1));
i__60130 = G__60189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60131),athens$devcards$db_boxes$table_view_$_iter__60128(cljs.core.chunk_rest(s__60129__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60131),null);
}
} else {
var h = cljs.core.first(s__60129__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__60128(cljs.core.rest(s__60129__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__60132(s__60133){
return (new cljs.core.LazySeq(null,(function (){
var s__60133__$1 = s__60133;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60133__$1);
if(temp__5735__auto__){
var s__60133__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60133__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60133__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60135 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60134 = (0);
while(true){
if((i__60134 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60134);
cljs.core.chunk_append(b__60135,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__60134,row,c__4580__auto__,size__4581__auto__,b__60135,s__60133__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__60132_$_iter__60136(s__60137){
return (new cljs.core.LazySeq(null,((function (i__60134,row,c__4580__auto__,size__4581__auto__,b__60135,s__60133__$2,temp__5735__auto__,hs,rows){
return (function (){
var s__60137__$1 = s__60137;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60137__$1);
if(temp__5735__auto____$1){
var s__60137__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60137__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60137__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60139 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60138 = (0);
while(true){
if((i__60138 < size__4581__auto____$1)){
var map__60140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60138);
var map__60140__$1 = (((((!((map__60140 == null))))?(((((map__60140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60140):map__60140);
var c = map__60140__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60140__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60140__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__60139,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__60190 = (i__60138 + (1));
i__60138 = G__60190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60139),athens$devcards$db_boxes$table_view_$_iter__60132_$_iter__60136(cljs.core.chunk_rest(s__60137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60139),null);
}
} else {
var map__60142 = cljs.core.first(s__60137__$2);
var map__60142__$1 = (((((!((map__60142 == null))))?(((((map__60142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60142):map__60142);
var c = map__60142__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60142__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60142__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__60132_$_iter__60136(cljs.core.rest(s__60137__$2)));
}
} else {
return null;
}
break;
}
});})(i__60134,row,c__4580__auto__,size__4581__auto__,b__60135,s__60133__$2,temp__5735__auto__,hs,rows))
,null,null));
});})(i__60134,row,c__4580__auto__,size__4581__auto__,b__60135,s__60133__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__60191 = (i__60134 + (1));
i__60134 = G__60191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60135),athens$devcards$db_boxes$table_view_$_iter__60132(cljs.core.chunk_rest(s__60133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60135),null);
}
} else {
var row = cljs.core.first(s__60133__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__60133__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__60132_$_iter__60144(s__60145){
return (new cljs.core.LazySeq(null,(function (){
var s__60145__$1 = s__60145;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60145__$1);
if(temp__5735__auto____$1){
var s__60145__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60145__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60145__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60147 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60146 = (0);
while(true){
if((i__60146 < size__4581__auto__)){
var map__60148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60146);
var map__60148__$1 = (((((!((map__60148 == null))))?(((((map__60148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60148):map__60148);
var c = map__60148__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60148__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60148__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__60147,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__60192 = (i__60146 + (1));
i__60146 = G__60192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60147),athens$devcards$db_boxes$table_view_$_iter__60132_$_iter__60144(cljs.core.chunk_rest(s__60145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60147),null);
}
} else {
var map__60150 = cljs.core.first(s__60145__$2);
var map__60150__$1 = (((((!((map__60150 == null))))?(((((map__60150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60150):map__60150);
var c = map__60150__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60150__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60150__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__60132_$_iter__60144(cljs.core.rest(s__60145__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__60133__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__60132(cljs.core.rest(s__60133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"map","map",1371690461)))?rows:cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,rows)));
})()], null)], null)], null);
});
athens.devcards.db_boxes.coll_of_maps_QMARK_ = (function athens$devcards$db_boxes$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,x)));
});
athens.devcards.db_boxes.tuples_QMARK_ = (function athens$devcards$db_boxes$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,x)));
});
athens.devcards.db_boxes.browser_component = (function athens$devcards$db_boxes$browser_component(result,limit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.db_boxes.coll_of_maps_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),limit):((cljs.core.map_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),limit):((athens.devcards.db_boxes.tuples_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),limit):((cljs.core.coll_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),limit):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.footer_style),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((limit < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.db_boxes.increase_limit_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
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
var key_code = e.keyCode;
var shift_QMARK_ = e.shiftKey;
var k = (athens.devcards.db_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1(key_code) : athens.devcards.db_boxes.key_code__GT_key.call(null,key_code));
var G__60152 = k;
var G__60152__$1 = (((G__60152 instanceof cljs.core.Keyword))?G__60152.fqn:null);
switch (G__60152__$1) {
case "return":
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}

break;
case "tab":
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);

break;
default:
return null;

}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__60153 = cljs.core.deref(box_state);
var map__60153__$1 = (((((!((map__60153 == null))))?(((((map__60153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60153):map__60153);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60153__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60153__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60153__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60153__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result,limit):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60155 = (function (meta60156){
this.meta60156 = meta60156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60157,meta60156__$1){
var self__ = this;
var _60157__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60155(meta60156__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60157){
var self__ = this;
var _60157__$1 = this;
return self__.meta60156;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60155.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60155.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38808__auto__,devcard_opts__38809__auto__){
var self__ = this;
var this__38808__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38809__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38827__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__38827__auto__)){
return (function (data_atom__38828__auto__,owner__38829__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38827__auto__,data_atom__38828__auto__,owner__38829__auto__], null));
});
} else {
return reagent.core.as_element(v__38827__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38809__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60156","meta60156",1929554869,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60155.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60155.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60155");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60155.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60155");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60155.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60155 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60155(meta60156){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60155(meta60156));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60155(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60158 = (function (meta60159){
this.meta60159 = meta60159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60160,meta60159__$1){
var self__ = this;
var _60160__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60158(meta60159__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60160){
var self__ = this;
var _60160__$1 = this;
return self__.meta60159;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60158.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60158.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38808__auto__,devcard_opts__38809__auto__){
var self__ = this;
var this__38808__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38809__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38827__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__38827__auto__)){
return (function (data_atom__38828__auto__,owner__38829__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38827__auto__,data_atom__38828__auto__,owner__38829__auto__], null));
});
} else {
return reagent.core.as_element(v__38827__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38809__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60159","meta60159",-2004164025,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60158.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60158.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60158");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60158.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60158");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60158.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60158 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60158(meta60159){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60158(meta60159));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60158(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
