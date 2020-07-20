goog.provide('athens.devcards.parser');
goog.require('cljs.core');
goog.require('athens.views.blocks');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
athens.devcards.parser.strings = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This is a plain block","This is a [[page link]]","This is a [[nested [[page link]]]]","This is a #hashtag","This is a #[[long hashtag]]","This is a block ref: ((lxMRAb5Y5))","This is a **very** important block","This is an [external link](https://github.com/athensresearch/athens/)","This is an image: ![alt](https://raw.githubusercontent.com/athensresearch/athens/master/doc/athens-puk-patrick-unsplash.jpg)"], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.parser","athens.devcards.parser",1066018574),new cljs.core.Keyword(null,"Parse","Parse",382274654)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Parse",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.parser !== 'undefined') && (typeof athens.devcards.parser.t_athens$devcards$parser61558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.parser.t_athens$devcards$parser61558 = (function (meta61559){
this.meta61559 = meta61559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.parser.t_athens$devcards$parser61558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61560,meta61559__$1){
var self__ = this;
var _61560__$1 = this;
return (new athens.devcards.parser.t_athens$devcards$parser61558(meta61559__$1));
}));

(athens.devcards.parser.t_athens$devcards$parser61558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61560){
var self__ = this;
var _61560__$1 = this;
return self__.meta61559;
}));

(athens.devcards.parser.t_athens$devcards$parser61558.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.parser.t_athens$devcards$parser61558.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42489__auto__,devcard_opts__42490__auto__){
var self__ = this;
var this__42489__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42490__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42508__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4582__auto__ = (function athens$devcards$parser$iter__61561(s__61562){
return (new cljs.core.LazySeq(null,(function (){
var s__61562__$1 = s__61562;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61562__$1);
if(temp__5735__auto__){
var s__61562__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61562__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61562__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61564 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61563 = (0);
while(true){
if((i__61563 < size__4581__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61563);
cljs.core.chunk_append(b__61564,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","string","block/string",-2066596447),s], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__61565 = (i__61563 + (1));
i__61563 = G__61565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61564),athens$devcards$parser$iter__61561(cljs.core.chunk_rest(s__61562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61564),null);
}
} else {
var s = cljs.core.first(s__61562__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","string","block/string",-2066596447),s], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),athens$devcards$parser$iter__61561(cljs.core.rest(s__61562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.parser.strings);
})()], null);
if(cljs.core.fn_QMARK_(v__42508__auto__)){
return (function (data_atom__42509__auto__,owner__42510__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42508__auto__,data_atom__42509__auto__,owner__42510__auto__], null));
});
} else {
return reagent.core.as_element(v__42508__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42490__auto__))], 0))], 0));
}));

(athens.devcards.parser.t_athens$devcards$parser61558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61559","meta61559",-2021978899,null)], null);
}));

(athens.devcards.parser.t_athens$devcards$parser61558.cljs$lang$type = true);

(athens.devcards.parser.t_athens$devcards$parser61558.cljs$lang$ctorStr = "athens.devcards.parser/t_athens$devcards$parser61558");

(athens.devcards.parser.t_athens$devcards$parser61558.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.parser/t_athens$devcards$parser61558");
}));

/**
 * Positional factory function for athens.devcards.parser/t_athens$devcards$parser61558.
 */
athens.devcards.parser.__GT_t_athens$devcards$parser61558 = (function athens$devcards$parser$__GT_t_athens$devcards$parser61558(meta61559){
return (new athens.devcards.parser.t_athens$devcards$parser61558(meta61559));
});

}

return (new athens.devcards.parser.t_athens$devcards$parser61558(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.parser.js.map
