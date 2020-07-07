goog.provide('athens.devcards.devtool');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.views.buttons');
goog.require('athens.views.devtool');
goog.require('datascript.db');
goog.require('devcards.core');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('reagent.ratom');
goog.require('shadow.remote.runtime.cljs.browser');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61049 = (function (meta61050){
this.meta61050 = meta61050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61051,meta61050__$1){
var self__ = this;
var _61051__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61049(meta61050__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61051){
var self__ = this;
var _61051__$1 = this;
return self__.meta61050;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61049.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61049.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42216__auto__,devcard_opts__42217__auto__){
var self__ = this;
var this__42216__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42217__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42235__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__42235__auto__)){
return (function (data_atom__42236__auto__,owner__42237__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42235__auto__,data_atom__42236__auto__,owner__42237__auto__], null));
});
} else {
return reagent.core.as_element(v__42235__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42217__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61050","meta61050",-325550090,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61049.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61049.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61049");

(athens.devcards.devtool.t_athens$devcards$devtool61049.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61049");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61049.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61049 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61049(meta61050){
return (new athens.devcards.devtool.t_athens$devcards$devtool61049(meta61050));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61049(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61052 = (function (meta61053){
this.meta61053 = meta61053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61054,meta61053__$1){
var self__ = this;
var _61054__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61052(meta61053__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61054){
var self__ = this;
var _61054__$1 = this;
return self__.meta61053;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61052.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61052.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42216__auto__,devcard_opts__42217__auto__){
var self__ = this;
var this__42216__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42217__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42235__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),athens.views.devtool.handler,new cljs.core.Keyword(null,"label","label",1718410804),"Create Test Pages and Blocks"], null)], null);
if(cljs.core.fn_QMARK_(v__42235__auto__)){
return (function (data_atom__42236__auto__,owner__42237__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42235__auto__,data_atom__42236__auto__,owner__42237__auto__], null));
});
} else {
return reagent.core.as_element(v__42235__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42217__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61053","meta61053",-1310324164,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61052.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61052.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61052");

(athens.devcards.devtool.t_athens$devcards$devtool61052.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61052");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61052.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61052 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61052(meta61053){
return (new athens.devcards.devtool.t_athens$devcards$devtool61052(meta61053));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61052(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61055 = (function (meta61056){
this.meta61056 = meta61056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61057,meta61056__$1){
var self__ = this;
var _61057__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61055(meta61056__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61057){
var self__ = this;
var _61057__$1 = this;
return self__.meta61056;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61055.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61055.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42216__auto__,devcard_opts__42217__auto__){
var self__ = this;
var this__42216__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42217__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42235__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.views.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),new cljs.core.Keyword(null,"eval-str","eval-str",752008756).cljs$core$IFn$_invoke$arity$1(athens.devcards.devtool.initial_state));

return (athens.devcards.devtool.eval_box_BANG_.cljs$core$IFn$_invoke$arity$0 ? athens.devcards.devtool.eval_box_BANG_.cljs$core$IFn$_invoke$arity$0() : athens.devcards.devtool.eval_box_BANG_.call(null));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset"], null)], null);
});
if(cljs.core.fn_QMARK_(v__42235__auto__)){
return (function (data_atom__42236__auto__,owner__42237__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42235__auto__,data_atom__42236__auto__,owner__42237__auto__], null));
});
} else {
return reagent.core.as_element(v__42235__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42217__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61056","meta61056",-501972601,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61055.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61055.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61055");

(athens.devcards.devtool.t_athens$devcards$devtool61055.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61055");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61055.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61055 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61055(meta61056){
return (new athens.devcards.devtool.t_athens$devcards$devtool61055(meta61056));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61055(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Devtool-box","Devtool-box",1953946451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Devtool-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61058 = (function (meta61059){
this.meta61059 = meta61059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61060,meta61059__$1){
var self__ = this;
var _61060__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61058(meta61059__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61060){
var self__ = this;
var _61060__$1 = this;
return self__.meta61059;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61058.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61058.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42216__auto__,devcard_opts__42217__auto__){
var self__ = this;
var this__42216__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42217__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42235__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_component], null)], null);
if(cljs.core.fn_QMARK_(v__42235__auto__)){
return (function (data_atom__42236__auto__,owner__42237__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42235__auto__,data_atom__42236__auto__,owner__42237__auto__], null));
});
} else {
return reagent.core.as_element(v__42235__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42217__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61059","meta61059",-12289368,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61058.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61058.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61058");

(athens.devcards.devtool.t_athens$devcards$devtool61058.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61058");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61058.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61058 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61058(meta61059){
return (new athens.devcards.devtool.t_athens$devcards$devtool61058(meta61059));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61058(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.devtool.js.map
