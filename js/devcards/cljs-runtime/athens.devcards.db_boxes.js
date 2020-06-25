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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__59880){
var map__59881 = p__59880;
var map__59881__$1 = (((((!((map__59881 == null))))?(((((map__59881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59881):map__59881);
var box = map__59881__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59881__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__59883 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e59886){if((e59886 instanceof Error)){
var e = e59886;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e59886;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59883,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59883,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__59887_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59887_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.increase_limit_BANG_ = (function athens$devcards$db_boxes$increase_limit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.db_boxes.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_59927){
var state_val_59928 = (state_59927[(1)]);
if((state_val_59928 === (7))){
var state_59927__$1 = state_59927;
var statearr_59929_60051 = state_59927__$1;
(statearr_59929_60051[(2)] = false);

(statearr_59929_60051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (1))){
var inst_59889 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_59890 = [false];
var inst_59891 = cljs.core.PersistentHashMap.fromArrays(inst_59889,inst_59890);
var inst_59892 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59891], 0));
var state_59927__$1 = state_59927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59927__$1,(2),inst_59892);
} else {
if((state_val_59928 === (4))){
var state_59927__$1 = state_59927;
var statearr_59930_60052 = state_59927__$1;
(statearr_59930_60052[(2)] = false);

(statearr_59930_60052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (13))){
var inst_59923 = alert("Failed to retrieve data from GitHub");
var state_59927__$1 = state_59927;
var statearr_59931_60053 = state_59927__$1;
(statearr_59931_60053[(2)] = inst_59923);

(statearr_59931_60053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (6))){
var state_59927__$1 = state_59927;
var statearr_59932_60054 = state_59927__$1;
(statearr_59932_60054[(2)] = true);

(statearr_59932_60054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (3))){
var inst_59894 = (state_59927[(7)]);
var inst_59899 = inst_59894.cljs$lang$protocol_mask$partition0$;
var inst_59900 = (inst_59899 & (64));
var inst_59901 = inst_59894.cljs$core$ISeq$;
var inst_59902 = (cljs.core.PROTOCOL_SENTINEL === inst_59901);
var inst_59903 = ((inst_59900) || (inst_59902));
var state_59927__$1 = state_59927;
if(cljs.core.truth_(inst_59903)){
var statearr_59933_60055 = state_59927__$1;
(statearr_59933_60055[(1)] = (6));

} else {
var statearr_59934_60056 = state_59927__$1;
(statearr_59934_60056[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (12))){
var inst_59917 = (state_59927[(8)]);
var inst_59919 = athens.db.str_to_db_tx(inst_59917);
var inst_59920 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_59919);
var inst_59921 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_59927__$1 = (function (){var statearr_59935 = state_59927;
(statearr_59935[(9)] = inst_59920);

return statearr_59935;
})();
var statearr_59936_60057 = state_59927__$1;
(statearr_59936_60057[(2)] = inst_59921);

(statearr_59936_60057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (2))){
var inst_59894 = (state_59927[(7)]);
var inst_59894__$1 = (state_59927[(2)]);
var inst_59896 = (inst_59894__$1 == null);
var inst_59897 = cljs.core.not(inst_59896);
var state_59927__$1 = (function (){var statearr_59937 = state_59927;
(statearr_59937[(7)] = inst_59894__$1);

return statearr_59937;
})();
if(inst_59897){
var statearr_59938_60058 = state_59927__$1;
(statearr_59938_60058[(1)] = (3));

} else {
var statearr_59939_60059 = state_59927__$1;
(statearr_59939_60059[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (11))){
var inst_59915 = (state_59927[(2)]);
var inst_59916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59915,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_59917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59915,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_59927__$1 = (function (){var statearr_59940 = state_59927;
(statearr_59940[(8)] = inst_59917);

return statearr_59940;
})();
if(cljs.core.truth_(inst_59916)){
var statearr_59941_60060 = state_59927__$1;
(statearr_59941_60060[(1)] = (12));

} else {
var statearr_59942_60061 = state_59927__$1;
(statearr_59942_60061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (9))){
var inst_59894 = (state_59927[(7)]);
var inst_59912 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59894);
var state_59927__$1 = state_59927;
var statearr_59943_60062 = state_59927__$1;
(statearr_59943_60062[(2)] = inst_59912);

(statearr_59943_60062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (5))){
var inst_59910 = (state_59927[(2)]);
var state_59927__$1 = state_59927;
if(cljs.core.truth_(inst_59910)){
var statearr_59944_60063 = state_59927__$1;
(statearr_59944_60063[(1)] = (9));

} else {
var statearr_59945_60064 = state_59927__$1;
(statearr_59945_60064[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (14))){
var inst_59925 = (state_59927[(2)]);
var state_59927__$1 = state_59927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59927__$1,inst_59925);
} else {
if((state_val_59928 === (10))){
var inst_59894 = (state_59927[(7)]);
var state_59927__$1 = state_59927;
var statearr_59946_60065 = state_59927__$1;
(statearr_59946_60065[(2)] = inst_59894);

(statearr_59946_60065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59928 === (8))){
var inst_59907 = (state_59927[(2)]);
var state_59927__$1 = state_59927;
var statearr_59947_60066 = state_59927__$1;
(statearr_59947_60066[(2)] = inst_59907);

(statearr_59947_60066[(1)] = (5));


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
var statearr_59948 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59948[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__);

(statearr_59948[(1)] = (1));

return statearr_59948;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____1 = (function (state_59927){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_59927);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e59949){if((e59949 instanceof Object)){
var ex__34210__auto__ = e59949;
var statearr_59950_60067 = state_59927;
(statearr_59950_60067[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59949;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60068 = state_59927;
state_59927 = G__60068;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__ = function(state_59927){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____1.call(this,state_59927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_59951 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_59951[(6)] = c__34274__auto__);

return statearr_59951;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59952 = (function (meta59953){
this.meta59953 = meta59953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59954,meta59953__$1){
var self__ = this;
var _59954__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59952(meta59953__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59954){
var self__ = this;
var _59954__$1 = this;
return self__.meta59953;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59952.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59952.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59953","meta59953",186337398,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59952.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59952.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59952");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59952.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59952");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59952.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59952 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59952(meta59953){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59952(meta59953));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59952(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59955 = (function (meta59956){
this.meta59956 = meta59956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59957,meta59956__$1){
var self__ = this;
var _59957__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59955(meta59956__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59957){
var self__ = this;
var _59957__$1 = this;
return self__.meta59956;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59955.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59955.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59956","meta59956",-1651331129,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59955.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59955.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59955");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59955.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59955");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59955.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59955 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59955(meta59956){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59955(meta59956));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59955(null));
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
var G__59958 = mode;
var G__59958__$1 = (((G__59958 instanceof cljs.core.Keyword))?G__59958.fqn:null);
switch (G__59958__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59958__$1)].join('')));

}
});
athens.devcards.db_boxes.coll_rows = (function athens$devcards$db_boxes$coll_rows(coll){
var row = (function (p__59959){
var vec__59960 = p__59959;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59960,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59960,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.db_boxes.reverse_refs_for_attr = (function athens$devcards$db_boxes$reverse_refs_for_attr(attr,eid){
var G__59963 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__59964 = cljs.core.deref(athens.db.dsdb);
var G__59965 = attr;
var G__59966 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__59963,G__59964,G__59965,G__59966) : datascript.core.q.call(null,G__59963,G__59964,G__59965,G__59966));
});
athens.devcards.db_boxes.reverse_attr = (function athens$devcards$db_boxes$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.db_boxes.wrap_with_db_id = (function athens$devcards$db_boxes$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.db_boxes.reverse_refs = (function athens$devcards$db_boxes$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$reverse_refs_$_iter__59967(s__59968){
return (new cljs.core.LazySeq(null,(function (){
var s__59968__$1 = s__59968;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59968__$1);
if(temp__5735__auto__){
var s__59968__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59968__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59968__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59970 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59969 = (0);
while(true){
if((i__59969 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59969);
cljs.core.chunk_append(b__59970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null));

var G__60070 = (i__59969 + (1));
i__59969 = G__60070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59970),athens$devcards$db_boxes$reverse_refs_$_iter__59967(cljs.core.chunk_rest(s__59968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59970),null);
}
} else {
var attr = cljs.core.first(s__59968__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null),athens$devcards$db_boxes$reverse_refs_$_iter__59967(cljs.core.rest(s__59968__$2)));
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
athens.devcards.db_boxes.reverse_rows = (function athens$devcards$db_boxes$reverse_rows(p__59971){
var map__59972 = p__59971;
var map__59972__$1 = (((((!((map__59972 == null))))?(((((map__59972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59972):map__59972);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.db_boxes.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.db_boxes.map_rows = (function athens$devcards$db_boxes$map_rows(m){
var row = (function (p__59974){
var vec__59975 = p__59974;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59975,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.db_boxes.reverse_rows(m)));
});
athens.devcards.db_boxes.tuple_rows = (function athens$devcards$db_boxes$tuple_rows(tuples){
var row = (function (p__59978){
var vec__59979 = p__59978;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59979,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59979,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.db_boxes.maps_rows = (function athens$devcards$db_boxes$maps_rows(ms){
var hs = athens.devcards.db_boxes.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$db_boxes$maps_rows_$_iter__59982(s__59983){
return (new cljs.core.LazySeq(null,(function (){
var s__59983__$1 = s__59983;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59983__$1);
if(temp__5735__auto__){
var s__59983__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59983__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59983__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59985 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59984 = (0);
while(true){
if((i__59984 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59984);
cljs.core.chunk_append(b__59985,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__59984,idx,c__4580__auto__,size__4581__auto__,b__59985,s__59983__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__59982_$_iter__59986(s__59987){
return (new cljs.core.LazySeq(null,((function (i__59984,idx,c__4580__auto__,size__4581__auto__,b__59985,s__59983__$2,temp__5735__auto__,hs){
return (function (){
var s__59987__$1 = s__59987;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59987__$1);
if(temp__5735__auto____$1){
var s__59987__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59987__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__59987__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__59989 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__59988 = (0);
while(true){
if((i__59988 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__59988);
cljs.core.chunk_append(b__59989,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__60071 = (i__59988 + (1));
i__59988 = G__60071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59989),athens$devcards$db_boxes$maps_rows_$_iter__59982_$_iter__59986(cljs.core.chunk_rest(s__59987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59989),null);
}
} else {
var h = cljs.core.first(s__59987__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__59982_$_iter__59986(cljs.core.rest(s__59987__$2)));
}
} else {
return null;
}
break;
}
});})(i__59984,idx,c__4580__auto__,size__4581__auto__,b__59985,s__59983__$2,temp__5735__auto__,hs))
,null,null));
});})(i__59984,idx,c__4580__auto__,size__4581__auto__,b__59985,s__59983__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__60072 = (i__59984 + (1));
i__59984 = G__60072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59985),athens$devcards$db_boxes$maps_rows_$_iter__59982(cljs.core.chunk_rest(s__59983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59985),null);
}
} else {
var idx = cljs.core.first(s__59983__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__59983__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__59982_$_iter__59990(s__59991){
return (new cljs.core.LazySeq(null,(function (){
var s__59991__$1 = s__59991;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59991__$1);
if(temp__5735__auto____$1){
var s__59991__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59991__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59991__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59993 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59992 = (0);
while(true){
if((i__59992 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59992);
cljs.core.chunk_append(b__59993,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__60073 = (i__59992 + (1));
i__59992 = G__60073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59993),athens$devcards$db_boxes$maps_rows_$_iter__59982_$_iter__59990(cljs.core.chunk_rest(s__59991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59993),null);
}
} else {
var h = cljs.core.first(s__59991__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__59982_$_iter__59990(cljs.core.rest(s__59991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__59983__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$maps_rows_$_iter__59982(cljs.core.rest(s__59983__$2)));
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
var G__59994 = mode;
var G__59994__$1 = (((G__59994 instanceof cljs.core.Keyword))?G__59994.fqn:null);
switch (G__59994__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59994__$1)].join('')));

}
});
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__59996 = arguments.length;
switch (G__59996) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__59997){
var map__59998 = p__59997;
var map__59998__$1 = (((((!((map__59998 == null))))?(((((map__59998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59998):map__59998);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60000(s__60001){
return (new cljs.core.LazySeq(null,(function (){
var s__60001__$1 = s__60001;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60001__$1);
if(temp__5735__auto__){
var s__60001__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60001__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60001__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60003 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60002 = (0);
while(true){
if((i__60002 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60002);
cljs.core.chunk_append(b__60003,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60004 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60004) : athens.devcards.db_boxes.cell.call(null,G__60004));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60076 = (i__60002 + (1));
i__60002 = G__60076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60003),athens$devcards$db_boxes$cell_$_iter__60000(cljs.core.chunk_rest(s__60001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60003),null);
}
} else {
var v = cljs.core.first(s__60001__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60005 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60005) : athens.devcards.db_boxes.cell.call(null,G__60005));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60000(cljs.core.rest(s__60001__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60006(s__60007){
return (new cljs.core.LazySeq(null,(function (){
var s__60007__$1 = s__60007;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60007__$1);
if(temp__5735__auto__){
var s__60007__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60007__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60007__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60009 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60008 = (0);
while(true){
if((i__60008 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60008);
cljs.core.chunk_append(b__60009,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60010 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60010) : athens.devcards.db_boxes.cell.call(null,G__60010));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60077 = (i__60008 + (1));
i__60008 = G__60077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60009),athens$devcards$db_boxes$cell_$_iter__60006(cljs.core.chunk_rest(s__60007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60009),null);
}
} else {
var v = cljs.core.first(s__60007__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60011 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60011) : athens.devcards.db_boxes.cell.call(null,G__60011));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60006(cljs.core.rest(s__60007__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60012(s__60013){
return (new cljs.core.LazySeq(null,(function (){
var s__60013__$1 = s__60013;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60013__$1);
if(temp__5735__auto__){
var s__60013__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60013__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60013__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60015 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60014 = (0);
while(true){
if((i__60014 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60014);
cljs.core.chunk_append(b__60015,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60016 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60016) : athens.devcards.db_boxes.cell.call(null,G__60016));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60078 = (i__60014 + (1));
i__60014 = G__60078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60015),athens$devcards$db_boxes$cell_$_iter__60012(cljs.core.chunk_rest(s__60013__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60015),null);
}
} else {
var v = cljs.core.first(s__60013__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60017 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60017) : athens.devcards.db_boxes.cell.call(null,G__60017));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60012(cljs.core.rest(s__60013__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__60018(s__60019){
return (new cljs.core.LazySeq(null,(function (){
var s__60019__$1 = s__60019;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60019__$1);
if(temp__5735__auto__){
var s__60019__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60019__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60019__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60021 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60020 = (0);
while(true){
if((i__60020 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60020);
cljs.core.chunk_append(b__60021,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__60079 = (i__60020 + (1));
i__60020 = G__60079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60021),athens$devcards$db_boxes$table_view_$_iter__60018(cljs.core.chunk_rest(s__60019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60021),null);
}
} else {
var h = cljs.core.first(s__60019__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__60018(cljs.core.rest(s__60019__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__60022(s__60023){
return (new cljs.core.LazySeq(null,(function (){
var s__60023__$1 = s__60023;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60023__$1);
if(temp__5735__auto__){
var s__60023__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60023__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60023__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60025 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60024 = (0);
while(true){
if((i__60024 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60024);
cljs.core.chunk_append(b__60025,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__60024,row,c__4580__auto__,size__4581__auto__,b__60025,s__60023__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__60022_$_iter__60026(s__60027){
return (new cljs.core.LazySeq(null,((function (i__60024,row,c__4580__auto__,size__4581__auto__,b__60025,s__60023__$2,temp__5735__auto__,hs,rows){
return (function (){
var s__60027__$1 = s__60027;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60027__$1);
if(temp__5735__auto____$1){
var s__60027__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60027__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60027__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60029 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60028 = (0);
while(true){
if((i__60028 < size__4581__auto____$1)){
var map__60030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60028);
var map__60030__$1 = (((((!((map__60030 == null))))?(((((map__60030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60030):map__60030);
var c = map__60030__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60030__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60030__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__60029,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__60080 = (i__60028 + (1));
i__60028 = G__60080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60029),athens$devcards$db_boxes$table_view_$_iter__60022_$_iter__60026(cljs.core.chunk_rest(s__60027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60029),null);
}
} else {
var map__60032 = cljs.core.first(s__60027__$2);
var map__60032__$1 = (((((!((map__60032 == null))))?(((((map__60032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60032):map__60032);
var c = map__60032__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__60022_$_iter__60026(cljs.core.rest(s__60027__$2)));
}
} else {
return null;
}
break;
}
});})(i__60024,row,c__4580__auto__,size__4581__auto__,b__60025,s__60023__$2,temp__5735__auto__,hs,rows))
,null,null));
});})(i__60024,row,c__4580__auto__,size__4581__auto__,b__60025,s__60023__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__60081 = (i__60024 + (1));
i__60024 = G__60081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60025),athens$devcards$db_boxes$table_view_$_iter__60022(cljs.core.chunk_rest(s__60023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60025),null);
}
} else {
var row = cljs.core.first(s__60023__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__60023__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__60022_$_iter__60034(s__60035){
return (new cljs.core.LazySeq(null,(function (){
var s__60035__$1 = s__60035;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60035__$1);
if(temp__5735__auto____$1){
var s__60035__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60035__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60035__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60037 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60036 = (0);
while(true){
if((i__60036 < size__4581__auto__)){
var map__60038 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60036);
var map__60038__$1 = (((((!((map__60038 == null))))?(((((map__60038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60038):map__60038);
var c = map__60038__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60038__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60038__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__60037,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__60082 = (i__60036 + (1));
i__60036 = G__60082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60037),athens$devcards$db_boxes$table_view_$_iter__60022_$_iter__60034(cljs.core.chunk_rest(s__60035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60037),null);
}
} else {
var map__60040 = cljs.core.first(s__60035__$2);
var map__60040__$1 = (((((!((map__60040 == null))))?(((((map__60040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60040):map__60040);
var c = map__60040__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__60022_$_iter__60034(cljs.core.rest(s__60035__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__60023__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__60022(cljs.core.rest(s__60023__$2)));
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
var G__60042 = k;
var G__60042__$1 = (((G__60042 instanceof cljs.core.Keyword))?G__60042.fqn:null);
switch (G__60042__$1) {
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
var map__60043 = cljs.core.deref(box_state);
var map__60043__$1 = (((((!((map__60043 == null))))?(((((map__60043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60043):map__60043);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60043__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60043__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60043__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60043__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result,limit):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60045 = (function (meta60046){
this.meta60046 = meta60046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60047,meta60046__$1){
var self__ = this;
var _60047__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60045(meta60046__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60047){
var self__ = this;
var _60047__$1 = this;
return self__.meta60046;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60045.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60045.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60046","meta60046",-1057744587,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60045.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60045.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60045");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60045.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60045");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60045.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60045 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60045(meta60046){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60045(meta60046));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60045(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60048 = (function (meta60049){
this.meta60049 = meta60049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60050,meta60049__$1){
var self__ = this;
var _60050__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60048(meta60049__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60050){
var self__ = this;
var _60050__$1 = this;
return self__.meta60049;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60048.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60048.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60049","meta60049",58131252,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60048.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60048.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60048");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60048.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60048");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60048.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60048 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60048(meta60049){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60048(meta60049));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60048(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
