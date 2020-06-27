goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.patterns');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__60158,editing_uid,linked_refs,unlinked_refs){
var map__60159 = p__60158;
var map__60159__$1 = (((((!((map__60159 == null))))?(((((map__60159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60159):map__60159);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60159__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60159__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60159__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,editing_uid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),e.target.value], null)], null)], null);
})], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60161(s__60162){
return (new cljs.core.LazySeq(null,(function (){
var s__60162__$1 = s__60162;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60162__$1);
if(temp__5735__auto__){
var s__60162__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60162__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60162__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60164 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60163 = (0);
while(true){
if((i__60163 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60163);
cljs.core.chunk_append(b__60164,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)));

var G__60183 = (i__60163 + (1));
i__60163 = G__60183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60164),athens$devcards$node_page$node_page_el_$_iter__60161(cljs.core.chunk_rest(s__60162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60164),null);
}
} else {
var child = cljs.core.first(s__60162__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)),athens$devcards$node_page$node_page_el_$_iter__60161(cljs.core.rest(s__60162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Linked References"], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60165(s__60166){
return (new cljs.core.LazySeq(null,(function (){
var s__60166__$1 = s__60166;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60166__$1);
if(temp__5735__auto__){
var s__60166__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60166__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60166__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60168 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60167 = (0);
while(true){
if((i__60167 < size__4581__auto__)){
var ref = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60167);
cljs.core.chunk_append(b__60168,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)));

var G__60184 = (i__60167 + (1));
i__60167 = G__60184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60168),athens$devcards$node_page$node_page_el_$_iter__60165(cljs.core.chunk_rest(s__60166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60168),null);
}
} else {
var ref = cljs.core.first(s__60166__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)),athens$devcards$node_page$node_page_el_$_iter__60165(cljs.core.rest(s__60166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(linked_refs);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Unlinked References"], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60169(s__60170){
return (new cljs.core.LazySeq(null,(function (){
var s__60170__$1 = s__60170;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60170__$1);
if(temp__5735__auto__){
var s__60170__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60170__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60170__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60172 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60171 = (0);
while(true){
if((i__60171 < size__4581__auto__)){
var ref = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60171);
cljs.core.chunk_append(b__60172,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)));

var G__60185 = (i__60171 + (1));
i__60171 = G__60185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60172),athens$devcards$node_page$node_page_el_$_iter__60169(cljs.core.chunk_rest(s__60170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60172),null);
}
} else {
var ref = cljs.core.first(s__60170__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)),athens$devcards$node_page$node_page_el_$_iter__60169(cljs.core.rest(s__60170__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(unlinked_refs);
})()], null)], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var node = athens.db.sort_block(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.node_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.node_pull_pattern,ident))));
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__60173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60173) : re_frame.core.subscribe.call(null,G__60173));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var linked_ref_entids = cljs.core.deref((function (){var G__60174 = athens.db.q_refs;
var G__60175 = athens.db.dsdb;
var G__60176 = athens.patterns.linked(title);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60174,G__60175,G__60176) : posh.reagent.q.call(null,G__60174,G__60175,G__60176));
})());
var unlinked_ref_entids = cljs.core.deref((function (){var G__60177 = athens.db.q_refs;
var G__60178 = athens.db.dsdb;
var G__60179 = athens.patterns.unlinked(title);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60177,G__60178,G__60179) : posh.reagent.q.call(null,G__60177,G__60178,G__60179));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,linked_ref_entids,unlinked_ref_entids], null);
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.node_page","athens.devcards.node_page",-728487734),new cljs.core.Keyword(null,"Node-Page","Node-Page",2010568893)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Node-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"pull entity 4093: \"Hyperlink\" page",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page60180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page60180 = (function (meta60181){
this.meta60181 = meta60181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page60180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60182,meta60181__$1){
var self__ = this;
var _60182__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page60180(meta60181__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page60180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60182){
var self__ = this;
var _60182__$1 = this;
return self__.meta60181;
}));

(athens.devcards.node_page.t_athens$devcards$node_page60180.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page60180.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,(4093)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.node_page.t_athens$devcards$node_page60180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60181","meta60181",1526050528,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page60180.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page60180.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page60180");

(athens.devcards.node_page.t_athens$devcards$node_page60180.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page60180");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page60180.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page60180 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page60180(meta60181){
return (new athens.devcards.node_page.t_athens$devcards$node_page60180(meta60181));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page60180(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
