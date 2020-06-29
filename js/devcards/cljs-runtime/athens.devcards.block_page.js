goog.provide('athens.devcards.block_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.router');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.block_page.block_page_el = (function athens$devcards$block_page$block_page_el(p__57948,parents,editing_uid){
var map__57949 = p__57948;
var map__57949__$1 = (((((!((map__57949 == null))))?(((((map__57949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57949):map__57949);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57949__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57949__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57949__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.ChevronRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
}),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = (function athens$devcards$block_page$block_page_el_$_iter__57951(s__57952){
return (new cljs.core.LazySeq(null,(function (){
var s__57952__$1 = s__57952;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57952__$1);
if(temp__5735__auto__){
var s__57952__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57952__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57952__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57954 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57953 = (0);
while(true){
if((i__57953 < size__4581__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57953);
var map__57955 = p;
var map__57955__$1 = (((((!((map__57955 == null))))?(((((map__57955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57955):map__57955);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57955__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57955__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57955__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
cljs.core.chunk_append(b__57954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57953,map__57955,map__57955__$1,title,uid__$1,string__$1,p,c__4580__auto__,size__4581__auto__,b__57954,s__57952__$2,temp__5735__auto__,map__57949,map__57949__$1,string,children,uid){
return (function (){
return athens.router.navigate_uid(uid__$1);
});})(i__57953,map__57955,map__57955__$1,title,uid__$1,string__$1,p,c__4580__auto__,size__4581__auto__,b__57954,s__57952__$2,temp__5735__auto__,map__57949,map__57949__$1,string,children,uid))
], null),(function (){var or__4185__auto__ = string__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null));

var G__57975 = (i__57953 + (1));
i__57953 = G__57975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57954),athens$devcards$block_page$block_page_el_$_iter__57951(cljs.core.chunk_rest(s__57952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57954),null);
}
} else {
var p = cljs.core.first(s__57952__$2);
var map__57957 = p;
var map__57957__$1 = (((((!((map__57957 == null))))?(((((map__57957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57957):map__57957);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57957__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57957__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57957__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57957,map__57957__$1,title,uid__$1,string__$1,p,s__57952__$2,temp__5735__auto__,map__57949,map__57949__$1,string,children,uid){
return (function (){
return athens.router.navigate_uid(uid__$1);
});})(map__57957,map__57957__$1,title,uid__$1,string__$1,p,s__57952__$2,temp__5735__auto__,map__57949,map__57949__$1,string,children,uid))
], null),(function (){var or__4185__auto__ = string__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null),athens$devcards$block_page$block_page_el_$_iter__57951(cljs.core.rest(s__57952__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"block-header"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,editing_uid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),string,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__57959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),e.target.value], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57959) : re_frame.core.dispatch.call(null,G__57959));
})], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$block_page$block_page_el_$_iter__57960(s__57961){
return (new cljs.core.LazySeq(null,(function (){
var s__57961__$1 = s__57961;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57961__$1);
if(temp__5735__auto__){
var s__57961__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57961__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57961__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57963 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57962 = (0);
while(true){
if((i__57962 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57962);
cljs.core.chunk_append(b__57963,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)));

var G__57976 = (i__57962 + (1));
i__57962 = G__57976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57963),athens$devcards$block_page$block_page_el_$_iter__57960(cljs.core.chunk_rest(s__57961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57963),null);
}
} else {
var child = cljs.core.first(s__57961__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)),athens$devcards$block_page$block_page_el_$_iter__57960(cljs.core.rest(s__57961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)], null);
});
athens.devcards.block_page.block_page_component = (function athens$devcards$block_page$block_page_component(id){
var block = cljs.core.deref((function (){var G__57964 = athens.db.dsdb;
var G__57965 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__57966 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__57964,G__57965,G__57966) : posh.reagent.pull.call(null,G__57964,G__57965,G__57966));
})());
var parents = athens.db.shape_parent_query(cljs.core.deref((function (){var G__57967 = athens.db.dsdb;
var G__57968 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__57969 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__57967,G__57968,G__57969) : posh.reagent.pull.call(null,G__57967,G__57968,G__57969));
})()));
var editing_uid = cljs.core.deref((function (){var G__57970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57970) : re_frame.core.subscribe.call(null,G__57970));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block_page.block_page_el,block,parents,editing_uid], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.block_page","athens.devcards.block_page",1745660043),new cljs.core.Keyword(null,"Block-Page","Block-Page",1837866107)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Block-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"pull entity 2347: a block within Athens FAQ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.block_page !== 'undefined') && (typeof athens.devcards.block_page.t_athens$devcards$block_page57971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.block_page.t_athens$devcards$block_page57971 = (function (meta57972){
this.meta57972 = meta57972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.block_page.t_athens$devcards$block_page57971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57973,meta57972__$1){
var self__ = this;
var _57973__$1 = this;
return (new athens.devcards.block_page.t_athens$devcards$block_page57971(meta57972__$1));
}));

(athens.devcards.block_page.t_athens$devcards$block_page57971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57973){
var self__ = this;
var _57973__$1 = this;
return self__.meta57972;
}));

(athens.devcards.block_page.t_athens$devcards$block_page57971.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.block_page.t_athens$devcards$block_page57971.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block_page.block_page_component,(2347)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.block_page.t_athens$devcards$block_page57971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57972","meta57972",1797879077,null)], null);
}));

(athens.devcards.block_page.t_athens$devcards$block_page57971.cljs$lang$type = true);

(athens.devcards.block_page.t_athens$devcards$block_page57971.cljs$lang$ctorStr = "athens.devcards.block-page/t_athens$devcards$block_page57971");

(athens.devcards.block_page.t_athens$devcards$block_page57971.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.block-page/t_athens$devcards$block_page57971");
}));

/**
 * Positional factory function for athens.devcards.block-page/t_athens$devcards$block_page57971.
 */
athens.devcards.block_page.__GT_t_athens$devcards$block_page57971 = (function athens$devcards$block_page$__GT_t_athens$devcards$block_page57971(meta57972){
return (new athens.devcards.block_page.t_athens$devcards$block_page57971(meta57972));
});

}

return (new athens.devcards.block_page.t_athens$devcards$block_page57971(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.block_page.js.map
