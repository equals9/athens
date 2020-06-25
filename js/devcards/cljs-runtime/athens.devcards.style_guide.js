goog.provide('athens.devcards.style_guide');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('stylefy.core');
athens.devcards.style_guide.color_group_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat( auto-fit, minmax(9rem, 1fr))",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"3rem 1rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
athens.devcards.style_guide.color_item_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"0.25rem",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"height","height",1025178622),"4rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"4rem"], null)], null)], null)], null);
athens.devcards.style_guide.text_item_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null);
athens.devcards.style_guide.types = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"span.block-ref","span.block-ref",1894783192)], null);
athens.devcards.style_guide.fonts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Serif","serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Sans","sans-serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Mono","monospace"], null)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Colors","Colors",572881364)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Colors",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60243 = (function (meta60244){
this.meta60244 = meta60244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60245,meta60244__$1){
var self__ = this;
var _60245__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60243(meta60244__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60245){
var self__ = this;
var _60245__$1 = this;
return self__.meta60244;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60243.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60243.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.style_guide.color_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], 0))),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__60246(s__60247){
return (new cljs.core.LazySeq(null,(function (){
var s__60247__$1 = s__60247;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60247__$1);
if(temp__5735__auto__){
var s__60247__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60247__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60247__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60249 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60248 = (0);
while(true){
if((i__60248 < size__4581__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60248);
cljs.core.chunk_append(b__60249,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__60278 = (i__60248 + (1));
i__60248 = G__60278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60249),athens$devcards$style_guide$iter__60246(cljs.core.chunk_rest(s__60247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60249),null);
}
} else {
var c = cljs.core.first(s__60247__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),athens$devcards$style_guide$iter__60246(cljs.core.rest(s__60247__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.COLORS));
})())], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60244","meta60244",1920698361,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60243.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60243.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60243");

(athens.devcards.style_guide.t_athens$devcards$style_guide60243.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60243");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60243.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60243 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60243(meta60244){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60243(meta60244));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60243(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Opacities","Opacities",-312274473)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Opacities",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60250 = (function (meta60251){
this.meta60251 = meta60251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60252,meta60251__$1){
var self__ = this;
var _60252__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60250(meta60251__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60252){
var self__ = this;
var _60252__$1 = this;
return self__.meta60251;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60250.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60250.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_group_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__60253(s__60254){
return (new cljs.core.LazySeq(null,(function (){
var s__60254__$1 = s__60254;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60254__$1);
if(temp__5735__auto__){
var s__60254__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60254__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60254__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60256 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60255 = (0);
while(true){
if((i__60255 < size__4581__auto__)){
var o = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60255);
cljs.core.chunk_append(b__60256,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__60279 = (i__60255 + (1));
i__60255 = G__60279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60256),athens$devcards$style_guide$iter__60253(cljs.core.chunk_rest(s__60254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60256),null);
}
} else {
var o = cljs.core.first(s__60254__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),athens$devcards$style_guide$iter__60253(cljs.core.rest(s__60254__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.OPACITIES));
})())], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60251","meta60251",669060183,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60250.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60250.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60250");

(athens.devcards.style_guide.t_athens$devcards$style_guide60250.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60250");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60250.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60250 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60250(meta60251){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60250(meta60251));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60250(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Sans-Types","Sans-Types",-759330260)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Sans-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60257 = (function (meta60258){
this.meta60258 = meta60258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60259,meta60258__$1){
var self__ = this;
var _60259__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60257(meta60258__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60259){
var self__ = this;
var _60259__$1 = this;
return self__.meta60258;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60257.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60257.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__60260(s__60261){
return (new cljs.core.LazySeq(null,(function (){
var s__60261__$1 = s__60261;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60261__$1);
if(temp__5735__auto__){
var s__60261__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60261__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60261__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60263 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60262 = (0);
while(true){
if((i__60262 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60262);
cljs.core.chunk_append(b__60263,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__60280 = (i__60262 + (1));
i__60262 = G__60280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60263),athens$devcards$style_guide$iter__60260(cljs.core.chunk_rest(s__60261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60263),null);
}
} else {
var t = cljs.core.first(s__60261__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__60260(cljs.core.rest(s__60261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60258","meta60258",-1542633110,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60257.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60257.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60257");

(athens.devcards.style_guide.t_athens$devcards$style_guide60257.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60257");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60257.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60257 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60257(meta60258){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60257(meta60258));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60257(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Serif-Types","Serif-Types",-1395581219)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Serif-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60264 = (function (meta60265){
this.meta60265 = meta60265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60266,meta60265__$1){
var self__ = this;
var _60266__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60264(meta60265__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60266){
var self__ = this;
var _60266__$1 = this;
return self__.meta60265;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60264.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60264.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__60267(s__60268){
return (new cljs.core.LazySeq(null,(function (){
var s__60268__$1 = s__60268;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60268__$1);
if(temp__5735__auto__){
var s__60268__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60268__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60268__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60270 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60269 = (0);
while(true){
if((i__60269 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60269);
cljs.core.chunk_append(b__60270,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__60281 = (i__60269 + (1));
i__60269 = G__60281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60270),athens$devcards$style_guide$iter__60267(cljs.core.chunk_rest(s__60268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60270),null);
}
} else {
var t = cljs.core.first(s__60268__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__60267(cljs.core.rest(s__60268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60265","meta60265",1260692727,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60264.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60264.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60264");

(athens.devcards.style_guide.t_athens$devcards$style_guide60264.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60264");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60264.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60264 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60264(meta60265){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60264(meta60265));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60264(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Monospace-Types","Monospace-Types",-1076182681)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Monospace-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide60271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide60271 = (function (meta60272){
this.meta60272 = meta60272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide60271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60273,meta60272__$1){
var self__ = this;
var _60273__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60271(meta60272__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60273){
var self__ = this;
var _60273__$1 = this;
return self__.meta60272;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60271.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide60271.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__60274(s__60275){
return (new cljs.core.LazySeq(null,(function (){
var s__60275__$1 = s__60275;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60275__$1);
if(temp__5735__auto__){
var s__60275__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60275__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60275__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60277 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60276 = (0);
while(true){
if((i__60276 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60276);
cljs.core.chunk_append(b__60277,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__60282 = (i__60276 + (1));
i__60276 = G__60282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60277),athens$devcards$style_guide$iter__60274(cljs.core.chunk_rest(s__60275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60277),null);
}
} else {
var t = cljs.core.first(s__60275__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__60274(cljs.core.rest(s__60275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60272","meta60272",-945047295,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide60271.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide60271.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide60271");

(athens.devcards.style_guide.t_athens$devcards$style_guide60271.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide60271");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide60271.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide60271 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide60271(meta60272){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide60271(meta60272));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide60271(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.style_guide.js.map
