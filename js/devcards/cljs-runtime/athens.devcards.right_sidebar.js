goog.provide('athens.devcards.right_sidebar');
goog.require('cljs.core');
goog.require('athens.views.buttons');
goog.require('athens.views.right_sidebar');
goog.require('devcards.core');
goog.require('re_frame.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.right_sidebar","athens.devcards.right_sidebar",-251367266),new cljs.core.Keyword(null,"Toggle","Toggle",-1755095056)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.right_sidebar !== 'undefined') && (typeof athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551 = (function (meta61552){
this.meta61552 = meta61552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61553,meta61552__$1){
var self__ = this;
var _61553__$1 = this;
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551(meta61552__$1));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61553){
var self__ = this;
var _61553__$1 = this;
return self__.meta61552;
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Toggle",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__61554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61554) : re_frame.core.dispatch.call(null,G__61554));
})], null)], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61552","meta61552",-32001741,null)], null);
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551.cljs$lang$type = true);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551.cljs$lang$ctorStr = "athens.devcards.right-sidebar/t_athens$devcards$right_sidebar61551");

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.right-sidebar/t_athens$devcards$right_sidebar61551");
}));

/**
 * Positional factory function for athens.devcards.right-sidebar/t_athens$devcards$right_sidebar61551.
 */
athens.devcards.right_sidebar.__GT_t_athens$devcards$right_sidebar61551 = (function athens$devcards$right_sidebar$__GT_t_athens$devcards$right_sidebar61551(meta61552){
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551(meta61552));
});

}

return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61551(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.right_sidebar","athens.devcards.right_sidebar",-251367266),new cljs.core.Keyword(null,"Right-Sidebar","Right-Sidebar",-1012062233)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Right-Sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.right_sidebar !== 'undefined') && (typeof athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555 = (function (meta61556){
this.meta61556 = meta61556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61557,meta61556__$1){
var self__ = this;
var _61557__$1 = this;
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555(meta61556__$1));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61557){
var self__ = this;
var _61557__$1 = this;
return self__.meta61556;
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42491__auto__,devcard_opts__42492__auto__){
var self__ = this;
var this__42491__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42492__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42510__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"60vh",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.right_sidebar.right_sidebar_component], null)], null);
if(cljs.core.fn_QMARK_(v__42510__auto__)){
return (function (data_atom__42511__auto__,owner__42512__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42510__auto__,data_atom__42511__auto__,owner__42512__auto__], null));
});
} else {
return reagent.core.as_element(v__42510__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42492__auto__))], 0))], 0));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61556","meta61556",1638541529,null)], null);
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555.cljs$lang$type = true);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555.cljs$lang$ctorStr = "athens.devcards.right-sidebar/t_athens$devcards$right_sidebar61555");

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.right-sidebar/t_athens$devcards$right_sidebar61555");
}));

/**
 * Positional factory function for athens.devcards.right-sidebar/t_athens$devcards$right_sidebar61555.
 */
athens.devcards.right_sidebar.__GT_t_athens$devcards$right_sidebar61555 = (function athens$devcards$right_sidebar$__GT_t_athens$devcards$right_sidebar61555(meta61556){
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555(meta61556));
});

}

return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar61555(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.right_sidebar.js.map
