goog.provide('athens.devcards.athena');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.subs');
goog.require('athens.views.athena');
goog.require('athens.views.buttons');
goog.require('datascript.core');
goog.require('devcards.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56067 = (function (meta56068){
this.meta56068 = meta56068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56069,meta56068__$1){
var self__ = this;
var _56069__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56067(meta56068__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56069){
var self__ = this;
var _56069__$1 = this;
return self__.meta56068;
}));

(athens.devcards.athena.t_athens$devcards$athena56067.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56067.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42489__auto__,devcard_opts__42490__auto__){
var self__ = this;
var this__42489__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42490__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42508__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Create Test Pages and Blocks"], null)], null);
if(cljs.core.fn_QMARK_(v__42508__auto__)){
return (function (data_atom__42509__auto__,owner__42510__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42508__auto__,data_atom__42509__auto__,owner__42510__auto__], null));
});
} else {
return reagent.core.as_element(v__42508__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42490__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56068","meta56068",-1883058859,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56067.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56067.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56067");

(athens.devcards.athena.t_athens$devcards$athena56067.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56067");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56067.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56067 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56067(meta56068){
return (new athens.devcards.athena.t_athens$devcards$athena56067(meta56068));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56067(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56070 = (function (meta56071){
this.meta56071 = meta56071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56072,meta56071__$1){
var self__ = this;
var _56072__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56070(meta56071__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56072){
var self__ = this;
var _56072__$1 = this;
return self__.meta56071;
}));

(athens.devcards.athena.t_athens$devcards$athena56070.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56070.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42489__auto__,devcard_opts__42490__auto__){
var self__ = this;
var this__42489__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42490__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42508__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__42508__auto__)){
return (function (data_atom__42509__auto__,owner__42510__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42508__auto__,data_atom__42509__auto__,owner__42510__auto__], null));
});
} else {
return reagent.core.as_element(v__42508__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42490__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56071","meta56071",1091814010,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56070.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56070.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56070");

(athens.devcards.athena.t_athens$devcards$athena56070.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56070");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56070.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56070 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56070(meta56071){
return (new athens.devcards.athena.t_athens$devcards$athena56070(meta56071));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56070(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Athena-Prompt","Athena-Prompt",-1346277474)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Athena-Prompt",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56073 = (function (meta56074){
this.meta56074 = meta56074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56075,meta56074__$1){
var self__ = this;
var _56075__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56073(meta56074__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56075){
var self__ = this;
var _56075__$1 = this;
return self__.meta56074;
}));

(athens.devcards.athena.t_athens$devcards$athena56073.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56073.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42489__auto__,devcard_opts__42490__auto__){
var self__ = this;
var this__42489__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42490__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42508__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_component], null)], null);
if(cljs.core.fn_QMARK_(v__42508__auto__)){
return (function (data_atom__42509__auto__,owner__42510__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42508__auto__,data_atom__42509__auto__,owner__42510__auto__], null));
});
} else {
return reagent.core.as_element(v__42508__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42490__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56074","meta56074",-2113627838,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56073.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56073.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56073");

(athens.devcards.athena.t_athens$devcards$athena56073.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56073");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56073.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56073 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56073(meta56074){
return (new athens.devcards.athena.t_athens$devcards$athena56073(meta56074));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56073(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.athena.js.map
