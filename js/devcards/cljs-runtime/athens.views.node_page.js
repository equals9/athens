goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58122) : re_frame.core.dispatch.call(null,G__58122));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58123 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58124 = athens.db.dsdb;
var G__58125 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58123,G__58124,G__58125) : posh.reagent.q.call(null,G__58123,G__58124,G__58125));
})());
});
athens.views.node_page.merge_parents_and_block = (function athens$views$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.views.node_page.group_by_parent = (function athens$views$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.views.node_page.get_data = (function athens$views$node_page$get_data(pattern){
return cljs.core.seq(athens.views.node_page.group_by_parent(athens.views.node_page.merge_parents_and_block(athens.views.node_page.get_ref_ids(pattern))));
});
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58127 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58126){if((e58126 instanceof Object)){
var _ = e58126;
return false;
} else {
throw e58126;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58130,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58131 = p__58130;
var map__58131__$1 = (((((!((map__58131 == null))))?(((((map__58131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58131):map__58131);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58133 = e.target.value;
var G__58134 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58133,G__58134) : athens.views.node_page.db_handler.call(null,G__58133,G__58134));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58135(s__58136){
return (new cljs.core.LazySeq(null,(function (){
var s__58136__$1 = s__58136;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58136__$1);
if(temp__5735__auto__){
var s__58136__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58136__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58136__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58138 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58137 = (0);
while(true){
if((i__58137 < size__4581__auto__)){
var map__58139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58137);
var map__58139__$1 = (((((!((map__58139 == null))))?(((((map__58139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58139):map__58139);
var child = map__58139__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58138,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58272 = (i__58137 + (1));
i__58137 = G__58272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58138),athens$views$node_page$node_page_el_$_iter__58135(cljs.core.chunk_rest(s__58136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58138),null);
}
} else {
var map__58141 = cljs.core.first(s__58136__$2);
var map__58141__$1 = (((((!((map__58141 == null))))?(((((map__58141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58141):map__58141);
var child = map__58141__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58135(cljs.core.rest(s__58136__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58143(s__58144){
return (new cljs.core.LazySeq(null,(function (){
var s__58144__$1 = s__58144;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58144__$1);
if(temp__5735__auto__){
var s__58144__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58144__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58144__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58146 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58145 = (0);
while(true){
if((i__58145 < size__4581__auto__)){
var vec__58147 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58145);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58147,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58147,(1),null);
cljs.core.chunk_append(b__58146,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58145,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150(s__58151){
return (new cljs.core.LazySeq(null,((function (i__58145,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58151__$1 = s__58151;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58151__$1);
if(temp__5735__auto____$1){
var s__58151__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58151__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58151__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58153 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58152 = (0);
while(true){
if((i__58152 < size__4581__auto____$1)){
var vec__58154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58152);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58154,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58154,(1),null);
cljs.core.chunk_append(b__58153,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58152,i__58145,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58152,i__58145,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58152,i__58145,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157(s__58158){
return (new cljs.core.LazySeq(null,((function (i__58152,i__58145,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58158__$1 = s__58158;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58158__$1);
if(temp__5735__auto____$2){
var s__58158__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58158__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58158__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58160 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58159 = (0);
while(true){
if((i__58159 < size__4581__auto____$2)){
var map__58161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58159);
var map__58161__$1 = (((((!((map__58161 == null))))?(((((map__58161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58161):map__58161);
var block = map__58161__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58160,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58159,i__58152,i__58145,map__58161,map__58161__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58160,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157_$_iter__58163(s__58164){
return (new cljs.core.LazySeq(null,((function (i__58159,i__58152,i__58145,map__58161,map__58161__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58160,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58164__$1 = s__58164;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58164__$1);
if(temp__5735__auto____$3){
var s__58164__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58164__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58164__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58166 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58165 = (0);
while(true){
if((i__58165 < size__4581__auto____$3)){
var map__58167 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58165);
var map__58167__$1 = (((((!((map__58167 == null))))?(((((map__58167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58167):map__58167);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58167__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58167__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58167__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58166,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58165,i__58159,i__58152,i__58145,map__58167,map__58167__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58166,s__58164__$2,temp__5735__auto____$3,map__58161,map__58161__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58160,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58165,i__58159,i__58152,i__58145,map__58167,map__58167__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58166,s__58164__$2,temp__5735__auto____$3,map__58161,map__58161__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58160,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58273 = (i__58165 + (1));
i__58165 = G__58273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58166),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157_$_iter__58163(cljs.core.chunk_rest(s__58164__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58166),null);
}
} else {
var map__58169 = cljs.core.first(s__58164__$2);
var map__58169__$1 = (((((!((map__58169 == null))))?(((((map__58169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58169):map__58169);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58159,i__58152,i__58145,map__58169,map__58169__$1,title__$1,string,uid__$2,s__58164__$2,temp__5735__auto____$3,map__58161,map__58161__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58160,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58159,i__58152,i__58145,map__58169,map__58169__$1,title__$1,string,uid__$2,s__58164__$2,temp__5735__auto____$3,map__58161,map__58161__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58160,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157_$_iter__58163(cljs.core.rest(s__58164__$2)));
}
} else {
return null;
}
break;
}
});})(i__58159,i__58152,i__58145,map__58161,map__58161__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58160,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58159,i__58152,i__58145,map__58161,map__58161__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58160,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58274 = (i__58159 + (1));
i__58159 = G__58274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58160),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157(cljs.core.chunk_rest(s__58158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58160),null);
}
} else {
var map__58171 = cljs.core.first(s__58158__$2);
var map__58171__$1 = (((((!((map__58171 == null))))?(((((map__58171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58171):map__58171);
var block = map__58171__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58171__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58171__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58152,i__58145,map__58171,map__58171__$1,block,uid__$1,parents,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157_$_iter__58173(s__58174){
return (new cljs.core.LazySeq(null,((function (i__58152,i__58145,map__58171,map__58171__$1,block,uid__$1,parents,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58174__$1 = s__58174;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58174__$1);
if(temp__5735__auto____$3){
var s__58174__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58174__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58174__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58176 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58175 = (0);
while(true){
if((i__58175 < size__4581__auto____$2)){
var map__58177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58175);
var map__58177__$1 = (((((!((map__58177 == null))))?(((((map__58177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58177):map__58177);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58177__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58177__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58177__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58176,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58175,i__58152,i__58145,map__58177,map__58177__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58176,s__58174__$2,temp__5735__auto____$3,map__58171,map__58171__$1,block,uid__$1,parents,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58175,i__58152,i__58145,map__58177,map__58177__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58176,s__58174__$2,temp__5735__auto____$3,map__58171,map__58171__$1,block,uid__$1,parents,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58275 = (i__58175 + (1));
i__58175 = G__58275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58176),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157_$_iter__58173(cljs.core.chunk_rest(s__58174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58176),null);
}
} else {
var map__58179 = cljs.core.first(s__58174__$2);
var map__58179__$1 = (((((!((map__58179 == null))))?(((((map__58179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58179):map__58179);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58152,i__58145,map__58179,map__58179__$1,title__$1,string,uid__$2,s__58174__$2,temp__5735__auto____$3,map__58171,map__58171__$1,block,uid__$1,parents,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58152,i__58145,map__58179,map__58179__$1,title__$1,string,uid__$2,s__58174__$2,temp__5735__auto____$3,map__58171,map__58171__$1,block,uid__$1,parents,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157_$_iter__58173(cljs.core.rest(s__58174__$2)));
}
} else {
return null;
}
break;
}
});})(i__58152,i__58145,map__58171,map__58171__$1,block,uid__$1,parents,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58152,i__58145,map__58171,map__58171__$1,block,uid__$1,parents,s__58158__$2,temp__5735__auto____$2,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58157(cljs.core.rest(s__58158__$2)));
}
} else {
return null;
}
break;
}
});})(i__58152,i__58145,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58152,i__58145,vec__58154,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58153,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58276 = (i__58152 + (1));
i__58152 = G__58276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58153),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150(cljs.core.chunk_rest(s__58151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58153),null);
}
} else {
var vec__58181 = cljs.core.first(s__58151__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58181,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58181,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58145,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58145,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58145,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184(s__58185){
return (new cljs.core.LazySeq(null,((function (i__58145,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58185__$1 = s__58185;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58185__$1);
if(temp__5735__auto____$2){
var s__58185__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58185__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58185__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58187 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58186 = (0);
while(true){
if((i__58186 < size__4581__auto____$1)){
var map__58188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58186);
var map__58188__$1 = (((((!((map__58188 == null))))?(((((map__58188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58188):map__58188);
var block = map__58188__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58187,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58186,i__58145,map__58188,map__58188__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184_$_iter__58190(s__58191){
return (new cljs.core.LazySeq(null,((function (i__58186,i__58145,map__58188,map__58188__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58191__$1 = s__58191;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58191__$1);
if(temp__5735__auto____$3){
var s__58191__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58191__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58191__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58193 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58192 = (0);
while(true){
if((i__58192 < size__4581__auto____$2)){
var map__58194 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58192);
var map__58194__$1 = (((((!((map__58194 == null))))?(((((map__58194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58194):map__58194);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58193,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58192,i__58186,i__58145,map__58194,map__58194__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58193,s__58191__$2,temp__5735__auto____$3,map__58188,map__58188__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58192,i__58186,i__58145,map__58194,map__58194__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58193,s__58191__$2,temp__5735__auto____$3,map__58188,map__58188__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58277 = (i__58192 + (1));
i__58192 = G__58277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58193),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184_$_iter__58190(cljs.core.chunk_rest(s__58191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58193),null);
}
} else {
var map__58196 = cljs.core.first(s__58191__$2);
var map__58196__$1 = (((((!((map__58196 == null))))?(((((map__58196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58196):map__58196);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58186,i__58145,map__58196,map__58196__$1,title__$1,string,uid__$2,s__58191__$2,temp__5735__auto____$3,map__58188,map__58188__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58186,i__58145,map__58196,map__58196__$1,title__$1,string,uid__$2,s__58191__$2,temp__5735__auto____$3,map__58188,map__58188__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184_$_iter__58190(cljs.core.rest(s__58191__$2)));
}
} else {
return null;
}
break;
}
});})(i__58186,i__58145,map__58188,map__58188__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58186,i__58145,map__58188,map__58188__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58187,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58278 = (i__58186 + (1));
i__58186 = G__58278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58187),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184(cljs.core.chunk_rest(s__58185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58187),null);
}
} else {
var map__58198 = cljs.core.first(s__58185__$2);
var map__58198__$1 = (((((!((map__58198 == null))))?(((((map__58198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58198):map__58198);
var block = map__58198__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58145,map__58198,map__58198__$1,block,uid__$1,parents,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184_$_iter__58200(s__58201){
return (new cljs.core.LazySeq(null,((function (i__58145,map__58198,map__58198__$1,block,uid__$1,parents,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58201__$1 = s__58201;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58201__$1);
if(temp__5735__auto____$3){
var s__58201__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58201__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58201__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58203 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58202 = (0);
while(true){
if((i__58202 < size__4581__auto____$1)){
var map__58204 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58202);
var map__58204__$1 = (((((!((map__58204 == null))))?(((((map__58204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58204):map__58204);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58204__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58204__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58204__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58203,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58202,i__58145,map__58204,map__58204__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58203,s__58201__$2,temp__5735__auto____$3,map__58198,map__58198__$1,block,uid__$1,parents,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58202,i__58145,map__58204,map__58204__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58203,s__58201__$2,temp__5735__auto____$3,map__58198,map__58198__$1,block,uid__$1,parents,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58279 = (i__58202 + (1));
i__58202 = G__58279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58203),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184_$_iter__58200(cljs.core.chunk_rest(s__58201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58203),null);
}
} else {
var map__58206 = cljs.core.first(s__58201__$2);
var map__58206__$1 = (((((!((map__58206 == null))))?(((((map__58206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58206):map__58206);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58145,map__58206,map__58206__$1,title__$1,string,uid__$2,s__58201__$2,temp__5735__auto____$3,map__58198,map__58198__$1,block,uid__$1,parents,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58145,map__58206,map__58206__$1,title__$1,string,uid__$2,s__58201__$2,temp__5735__auto____$3,map__58198,map__58198__$1,block,uid__$1,parents,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184_$_iter__58200(cljs.core.rest(s__58201__$2)));
}
} else {
return null;
}
break;
}
});})(i__58145,map__58198,map__58198__$1,block,uid__$1,parents,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58145,map__58198,map__58198__$1,block,uid__$1,parents,s__58185__$2,temp__5735__auto____$2,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150_$_iter__58184(cljs.core.rest(s__58185__$2)));
}
} else {
return null;
}
break;
}
});})(i__58145,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58145,vec__58181,group_title,group,s__58151__$2,temp__5735__auto____$1,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58150(cljs.core.rest(s__58151__$2)));
}
} else {
return null;
}
break;
}
});})(i__58145,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58145,vec__58147,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58146,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58280 = (i__58145 + (1));
i__58145 = G__58280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58146),athens$views$node_page$node_page_el_$_iter__58143(cljs.core.chunk_rest(s__58144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58146),null);
}
} else {
var vec__58208 = cljs.core.first(s__58144__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58208,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58208,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211(s__58212){
return (new cljs.core.LazySeq(null,(function (){
var s__58212__$1 = s__58212;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58212__$1);
if(temp__5735__auto____$1){
var s__58212__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58212__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58212__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58214 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58213 = (0);
while(true){
if((i__58213 < size__4581__auto__)){
var vec__58215 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58213);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(1),null);
cljs.core.chunk_append(b__58214,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58213,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58213,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58213,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218(s__58219){
return (new cljs.core.LazySeq(null,((function (i__58213,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58219__$1 = s__58219;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58219__$1);
if(temp__5735__auto____$2){
var s__58219__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58219__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58219__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58221 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58220 = (0);
while(true){
if((i__58220 < size__4581__auto____$1)){
var map__58222 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58220);
var map__58222__$1 = (((((!((map__58222 == null))))?(((((map__58222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58222):map__58222);
var block = map__58222__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58221,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58220,i__58213,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218_$_iter__58224(s__58225){
return (new cljs.core.LazySeq(null,((function (i__58220,i__58213,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58225__$1 = s__58225;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58225__$1);
if(temp__5735__auto____$3){
var s__58225__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58225__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58225__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58227 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58226 = (0);
while(true){
if((i__58226 < size__4581__auto____$2)){
var map__58228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58226);
var map__58228__$1 = (((((!((map__58228 == null))))?(((((map__58228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58228):map__58228);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58227,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58226,i__58220,i__58213,map__58228,map__58228__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58227,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58226,i__58220,i__58213,map__58228,map__58228__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58227,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58281 = (i__58226 + (1));
i__58226 = G__58281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58227),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218_$_iter__58224(cljs.core.chunk_rest(s__58225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58227),null);
}
} else {
var map__58230 = cljs.core.first(s__58225__$2);
var map__58230__$1 = (((((!((map__58230 == null))))?(((((map__58230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58230):map__58230);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58220,i__58213,map__58230,map__58230__$1,title__$1,string,uid__$2,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58220,i__58213,map__58230,map__58230__$1,title__$1,string,uid__$2,s__58225__$2,temp__5735__auto____$3,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218_$_iter__58224(cljs.core.rest(s__58225__$2)));
}
} else {
return null;
}
break;
}
});})(i__58220,i__58213,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58220,i__58213,map__58222,map__58222__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58221,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58282 = (i__58220 + (1));
i__58220 = G__58282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58221),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218(cljs.core.chunk_rest(s__58219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58221),null);
}
} else {
var map__58232 = cljs.core.first(s__58219__$2);
var map__58232__$1 = (((((!((map__58232 == null))))?(((((map__58232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58232):map__58232);
var block = map__58232__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58213,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218_$_iter__58234(s__58235){
return (new cljs.core.LazySeq(null,((function (i__58213,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58235__$1 = s__58235;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58235__$1);
if(temp__5735__auto____$3){
var s__58235__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58235__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58235__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58237 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58236 = (0);
while(true){
if((i__58236 < size__4581__auto____$1)){
var map__58238 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58236);
var map__58238__$1 = (((((!((map__58238 == null))))?(((((map__58238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58238):map__58238);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58237,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58236,i__58213,map__58238,map__58238__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58237,s__58235__$2,temp__5735__auto____$3,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58236,i__58213,map__58238,map__58238__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58237,s__58235__$2,temp__5735__auto____$3,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58283 = (i__58236 + (1));
i__58236 = G__58283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58237),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218_$_iter__58234(cljs.core.chunk_rest(s__58235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58237),null);
}
} else {
var map__58240 = cljs.core.first(s__58235__$2);
var map__58240__$1 = (((((!((map__58240 == null))))?(((((map__58240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58240):map__58240);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58213,map__58240,map__58240__$1,title__$1,string,uid__$2,s__58235__$2,temp__5735__auto____$3,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58213,map__58240,map__58240__$1,title__$1,string,uid__$2,s__58235__$2,temp__5735__auto____$3,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218_$_iter__58234(cljs.core.rest(s__58235__$2)));
}
} else {
return null;
}
break;
}
});})(i__58213,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58213,map__58232,map__58232__$1,block,uid__$1,parents,s__58219__$2,temp__5735__auto____$2,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58218(cljs.core.rest(s__58219__$2)));
}
} else {
return null;
}
break;
}
});})(i__58213,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58213,vec__58215,group_title,group,c__4580__auto__,size__4581__auto__,b__58214,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58284 = (i__58213 + (1));
i__58213 = G__58284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58214),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211(cljs.core.chunk_rest(s__58212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58214),null);
}
} else {
var vec__58242 = cljs.core.first(s__58212__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58242,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58242,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245(s__58246){
return (new cljs.core.LazySeq(null,(function (){
var s__58246__$1 = s__58246;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58246__$1);
if(temp__5735__auto____$2){
var s__58246__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58246__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58246__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58248 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58247 = (0);
while(true){
if((i__58247 < size__4581__auto__)){
var map__58249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58247);
var map__58249__$1 = (((((!((map__58249 == null))))?(((((map__58249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58249):map__58249);
var block = map__58249__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58248,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58247,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245_$_iter__58251(s__58252){
return (new cljs.core.LazySeq(null,((function (i__58247,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
var s__58252__$1 = s__58252;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58252__$1);
if(temp__5735__auto____$3){
var s__58252__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58252__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58252__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58254 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58253 = (0);
while(true){
if((i__58253 < size__4581__auto____$1)){
var map__58255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58253);
var map__58255__$1 = (((((!((map__58255 == null))))?(((((map__58255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58255):map__58255);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58255__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58255__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58255__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58254,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58253,i__58247,map__58255,map__58255__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58254,s__58252__$2,temp__5735__auto____$3,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58253,i__58247,map__58255,map__58255__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58254,s__58252__$2,temp__5735__auto____$3,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58285 = (i__58253 + (1));
i__58253 = G__58285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58254),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245_$_iter__58251(cljs.core.chunk_rest(s__58252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58254),null);
}
} else {
var map__58257 = cljs.core.first(s__58252__$2);
var map__58257__$1 = (((((!((map__58257 == null))))?(((((map__58257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58257):map__58257);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58247,map__58257,map__58257__$1,title__$1,string,uid__$2,s__58252__$2,temp__5735__auto____$3,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58247,map__58257,map__58257__$1,title__$1,string,uid__$2,s__58252__$2,temp__5735__auto____$3,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245_$_iter__58251(cljs.core.rest(s__58252__$2)));
}
} else {
return null;
}
break;
}
});})(i__58247,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
,null,null));
});})(i__58247,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58286 = (i__58247 + (1));
i__58247 = G__58286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245(cljs.core.chunk_rest(s__58246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),null);
}
} else {
var map__58259 = cljs.core.first(s__58246__$2);
var map__58259__$1 = (((((!((map__58259 == null))))?(((((map__58259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58259):map__58259);
var block = map__58259__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245_$_iter__58261(s__58262){
return (new cljs.core.LazySeq(null,(function (){
var s__58262__$1 = s__58262;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58262__$1);
if(temp__5735__auto____$3){
var s__58262__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58262__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58262__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58264 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58263 = (0);
while(true){
if((i__58263 < size__4581__auto__)){
var map__58265 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58263);
var map__58265__$1 = (((((!((map__58265 == null))))?(((((map__58265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58265):map__58265);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58264,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58263,map__58265,map__58265__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58264,s__58262__$2,temp__5735__auto____$3,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58263,map__58265,map__58265__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58264,s__58262__$2,temp__5735__auto____$3,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58287 = (i__58263 + (1));
i__58263 = G__58287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58264),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245_$_iter__58261(cljs.core.chunk_rest(s__58262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58264),null);
}
} else {
var map__58267 = cljs.core.first(s__58262__$2);
var map__58267__$1 = (((((!((map__58267 == null))))?(((((map__58267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58267):map__58267);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58267,map__58267__$1,title__$1,string,uid__$2,s__58262__$2,temp__5735__auto____$3,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58267,map__58267__$1,title__$1,string,uid__$2,s__58262__$2,temp__5735__auto____$3,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245_$_iter__58261(cljs.core.rest(s__58262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211_$_iter__58245(cljs.core.rest(s__58246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58242,group_title,group,s__58212__$2,temp__5735__auto____$1,vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58143_$_iter__58211(cljs.core.rest(s__58212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58208,linked_or_unlinked,refs,s__58144__$2,temp__5735__auto__,map__58131,map__58131__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58143(cljs.core.rest(s__58144__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})())], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58269 = athens.db.get_node_document(ident);
var map__58269__$1 = (((((!((map__58269 == null))))?(((((map__58269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58269):map__58269);
var node = map__58269__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58271) : re_frame.core.subscribe.call(null,G__58271));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
