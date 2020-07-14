goog.provide('athens.devcards.breadcrumbs');
goog.require('cljs.core');
goog.require('athens.views.breadcrumbs');
goog.require('devcards.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Normal-Breadcrumb","Normal-Breadcrumb",1775524535)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Normal-Breadcrumb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266 = (function (meta58267){
this.meta58267 = meta58267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58268,meta58267__$1){
var self__ = this;
var _58268__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266(meta58267__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58268){
var self__ = this;
var _58268__$1 = this;
return self__.meta58267;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Athens"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Components"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Breadcrumbs"], null)], null);
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58267","meta58267",5992890,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58266");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58266");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58266.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58266 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58266(meta58267){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266(meta58267));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58266(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"One-Item","One-Item",566296987)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"One-Item",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269 = (function (meta58270){
this.meta58270 = meta58270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58271,meta58270__$1){
var self__ = this;
var _58271__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269(meta58270__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58271){
var self__ = this;
var _58271__$1 = this;
return self__.meta58270;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Athens"], null)], null);
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58270","meta58270",-859309414,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58269");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58269");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58269.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58269 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58269(meta58270){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269(meta58270));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58269(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-many-items","Breadcrumb-with-many-items",456733386)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-many-items",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272 = (function (meta58273){
this.meta58273 = meta58273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58274,meta58273__$1){
var self__ = this;
var _58274__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272(meta58273__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58274){
var self__ = this;
var _58274__$1 = this;
return self__.meta58273;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = cljs.core.PersistentVector.fromArray([athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"a"], null),"Lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"d"], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"g"], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h"], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"i"], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"a"], null),"Lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"d"], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"g"], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h"], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"i"], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"a"], null),"Lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"d"], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"g"], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h"], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"i"], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"a"], null),"Lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"d"], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"g"], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h"], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"i"], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"j"], null),"Necessitatibus"], null)], true);
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58273","meta58273",-800497218,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58272");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58272");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58272.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58272 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58272(meta58273){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272(meta58273));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58272(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-long-items","Breadcrumb-with-long-items",84935351)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-long-items",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278 = (function (meta58279){
this.meta58279 = meta58279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58280,meta58279__$1){
var self__ = this;
var _58280__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278(meta58279__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58280){
var self__ = this;
var _58280__$1 = this;
return self__.meta58279;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Exercitationem qui dicta officia aut alias eum asperiores voluptates exercitationem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Sapiente ad quia sunt libero"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Accusantium veritatis placeat quaerat unde odio officia"], null)], null);
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58279","meta58279",-1666175592,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58278");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58278");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58278.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58278 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58278(meta58279){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278(meta58279));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58278(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-one-long-item-at-start","Breadcrumb-with-one-long-item-at-start",-1820972041)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-one-long-item-at-start",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284 = (function (meta58285){
this.meta58285 = meta58285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58286,meta58285__$1){
var self__ = this;
var _58286__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284(meta58285__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58286){
var self__ = this;
var _58286__$1 = this;
return self__.meta58285;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Voluptates exercitationem dicta officia aut alias eum asperiores voluptates exercitationem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Libero"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),"Unde"], null)], null);
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58285","meta58285",724095962,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58284");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58284");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58284.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58284 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58284(meta58285){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284(meta58285));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58284(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-one-long-item-at-end","Breadcrumb-with-one-long-item-at-end",1243888517)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-one-long-item-at-end",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287 = (function (meta58288){
this.meta58288 = meta58288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58289,meta58288__$1){
var self__ = this;
var _58289__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287(meta58288__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58289){
var self__ = this;
var _58289__$1 = this;
return self__.meta58288;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42243__auto__,devcard_opts__42244__auto__){
var self__ = this;
var this__42243__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42244__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42262__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Unde"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Libero"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Exercitationem qui dicta officia aut alias eum asperiores voluptates exercitationem dicta officia aut alias eum asperiores voluptates exercitationem"], null)], null);
if(cljs.core.fn_QMARK_(v__42262__auto__)){
return (function (data_atom__42263__auto__,owner__42264__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42262__auto__,data_atom__42263__auto__,owner__42264__auto__], null));
});
} else {
return reagent.core.as_element(v__42262__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42244__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58288","meta58288",-1403393149,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58287");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58287");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58287.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58287 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58287(meta58288){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287(meta58288));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58287(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.breadcrumbs.js.map
