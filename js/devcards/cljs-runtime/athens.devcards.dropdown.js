goog.provide('athens.devcards.dropdown');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.views.dropdown');
goog.require('athens.views.textinput');
goog.require('devcards.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.dropdown","athens.devcards.dropdown",1847323484),new cljs.core.Keyword(null,"Slash-Menu","Slash-Menu",-1412883759)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Slash-Menu",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.dropdown !== 'undefined') && (typeof athens.devcards.dropdown.t_athens$devcards$dropdown61049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.dropdown.t_athens$devcards$dropdown61049 = (function (meta61050){
this.meta61050 = meta61050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.dropdown.t_athens$devcards$dropdown61049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61051,meta61050__$1){
var self__ = this;
var _61051__$1 = this;
return (new athens.devcards.dropdown.t_athens$devcards$dropdown61049(meta61050__$1));
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61051){
var self__ = this;
var _61051__$1 = this;
return self__.meta61050;
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61049.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.dropdown.t_athens$devcards$dropdown61049.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42216__auto__,devcard_opts__42217__auto__){
var self__ = this;
var this__42216__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42217__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42235__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.slash_menu_component], null);
if(cljs.core.fn_QMARK_(v__42235__auto__)){
return (function (data_atom__42236__auto__,owner__42237__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42235__auto__,data_atom__42236__auto__,owner__42237__auto__], null));
});
} else {
return reagent.core.as_element(v__42235__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42217__auto__))], 0))], 0));
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61050","meta61050",-325550090,null)], null);
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61049.cljs$lang$type = true);

(athens.devcards.dropdown.t_athens$devcards$dropdown61049.cljs$lang$ctorStr = "athens.devcards.dropdown/t_athens$devcards$dropdown61049");

(athens.devcards.dropdown.t_athens$devcards$dropdown61049.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.dropdown/t_athens$devcards$dropdown61049");
}));

/**
 * Positional factory function for athens.devcards.dropdown/t_athens$devcards$dropdown61049.
 */
athens.devcards.dropdown.__GT_t_athens$devcards$dropdown61049 = (function athens$devcards$dropdown$__GT_t_athens$devcards$dropdown61049(meta61050){
return (new athens.devcards.dropdown.t_athens$devcards$dropdown61049(meta61050));
});

}

return (new athens.devcards.dropdown.t_athens$devcards$dropdown61049(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.dropdown","athens.devcards.dropdown",1847323484),new cljs.core.Keyword(null,"Block-Context-Menu","Block-Context-Menu",-1981593447)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Block-Context-Menu",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.dropdown !== 'undefined') && (typeof athens.devcards.dropdown.t_athens$devcards$dropdown61052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.dropdown.t_athens$devcards$dropdown61052 = (function (meta61053){
this.meta61053 = meta61053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.dropdown.t_athens$devcards$dropdown61052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61054,meta61053__$1){
var self__ = this;
var _61054__$1 = this;
return (new athens.devcards.dropdown.t_athens$devcards$dropdown61052(meta61053__$1));
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61054){
var self__ = this;
var _61054__$1 = this;
return self__.meta61053;
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61052.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.dropdown.t_athens$devcards$dropdown61052.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42216__auto__,devcard_opts__42217__auto__){
var self__ = this;
var this__42216__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42217__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42235__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.block_context_menu_component], null);
if(cljs.core.fn_QMARK_(v__42235__auto__)){
return (function (data_atom__42236__auto__,owner__42237__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42235__auto__,data_atom__42236__auto__,owner__42237__auto__], null));
});
} else {
return reagent.core.as_element(v__42235__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42217__auto__))], 0))], 0));
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61053","meta61053",-1310324164,null)], null);
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61052.cljs$lang$type = true);

(athens.devcards.dropdown.t_athens$devcards$dropdown61052.cljs$lang$ctorStr = "athens.devcards.dropdown/t_athens$devcards$dropdown61052");

(athens.devcards.dropdown.t_athens$devcards$dropdown61052.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.dropdown/t_athens$devcards$dropdown61052");
}));

/**
 * Positional factory function for athens.devcards.dropdown/t_athens$devcards$dropdown61052.
 */
athens.devcards.dropdown.__GT_t_athens$devcards$dropdown61052 = (function athens$devcards$dropdown$__GT_t_athens$devcards$dropdown61052(meta61053){
return (new athens.devcards.dropdown.t_athens$devcards$dropdown61052(meta61053));
});

}

return (new athens.devcards.dropdown.t_athens$devcards$dropdown61052(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.dropdown","athens.devcards.dropdown",1847323484),new cljs.core.Keyword(null,"Filter-Dropdown","Filter-Dropdown",-1945816069)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Filter-Dropdown",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.dropdown !== 'undefined') && (typeof athens.devcards.dropdown.t_athens$devcards$dropdown61055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.dropdown.t_athens$devcards$dropdown61055 = (function (meta61056){
this.meta61056 = meta61056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.dropdown.t_athens$devcards$dropdown61055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61057,meta61056__$1){
var self__ = this;
var _61057__$1 = this;
return (new athens.devcards.dropdown.t_athens$devcards$dropdown61055(meta61056__$1));
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61057){
var self__ = this;
var _61057__$1 = this;
return self__.meta61056;
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61055.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.dropdown.t_athens$devcards$dropdown61055.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42216__auto__,devcard_opts__42217__auto__){
var self__ = this;
var this__42216__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42217__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42235__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.filter_dropdown_component], null);
if(cljs.core.fn_QMARK_(v__42235__auto__)){
return (function (data_atom__42236__auto__,owner__42237__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42235__auto__,data_atom__42236__auto__,owner__42237__auto__], null));
});
} else {
return reagent.core.as_element(v__42235__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42217__auto__))], 0))], 0));
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61056","meta61056",-501972601,null)], null);
}));

(athens.devcards.dropdown.t_athens$devcards$dropdown61055.cljs$lang$type = true);

(athens.devcards.dropdown.t_athens$devcards$dropdown61055.cljs$lang$ctorStr = "athens.devcards.dropdown/t_athens$devcards$dropdown61055");

(athens.devcards.dropdown.t_athens$devcards$dropdown61055.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.dropdown/t_athens$devcards$dropdown61055");
}));

/**
 * Positional factory function for athens.devcards.dropdown/t_athens$devcards$dropdown61055.
 */
athens.devcards.dropdown.__GT_t_athens$devcards$dropdown61055 = (function athens$devcards$dropdown$__GT_t_athens$devcards$dropdown61055(meta61056){
return (new athens.devcards.dropdown.t_athens$devcards$dropdown61055(meta61056));
});

}

return (new athens.devcards.dropdown.t_athens$devcards$dropdown61055(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.dropdown.js.map
