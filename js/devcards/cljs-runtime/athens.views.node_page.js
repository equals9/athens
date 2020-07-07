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
var G__58134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58134) : re_frame.core.dispatch.call(null,G__58134));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58135 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58136 = athens.db.dsdb;
var G__58137 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58135,G__58136,G__58137) : posh.reagent.q.call(null,G__58135,G__58136,G__58137));
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
return cljs.core.boolean$((function (){try{var vec__58139 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58139,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58139,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58139,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58138){if((e58138 instanceof Object)){
var _ = e58138;
return false;
} else {
throw e58138;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58142,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58143 = p__58142;
var map__58143__$1 = (((((!((map__58143 == null))))?(((((map__58143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58143):map__58143);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58145 = e.target.value;
var G__58146 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58145,G__58146) : athens.views.node_page.db_handler.call(null,G__58145,G__58146));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58147(s__58148){
return (new cljs.core.LazySeq(null,(function (){
var s__58148__$1 = s__58148;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58148__$1);
if(temp__5735__auto__){
var s__58148__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58148__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58148__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58150 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58149 = (0);
while(true){
if((i__58149 < size__4581__auto__)){
var map__58151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58149);
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var child = map__58151__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58150,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58284 = (i__58149 + (1));
i__58149 = G__58284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58150),athens$views$node_page$node_page_el_$_iter__58147(cljs.core.chunk_rest(s__58148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58150),null);
}
} else {
var map__58153 = cljs.core.first(s__58148__$2);
var map__58153__$1 = (((((!((map__58153 == null))))?(((((map__58153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58153):map__58153);
var child = map__58153__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58147(cljs.core.rest(s__58148__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58155(s__58156){
return (new cljs.core.LazySeq(null,(function (){
var s__58156__$1 = s__58156;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58156__$1);
if(temp__5735__auto__){
var s__58156__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58156__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58156__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58158 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58157 = (0);
while(true){
if((i__58157 < size__4581__auto__)){
var vec__58159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58157);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(1),null);
cljs.core.chunk_append(b__58158,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58157,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162(s__58163){
return (new cljs.core.LazySeq(null,((function (i__58157,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58163__$1 = s__58163;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58163__$1);
if(temp__5735__auto____$1){
var s__58163__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58163__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58163__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58165 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58164 = (0);
while(true){
if((i__58164 < size__4581__auto____$1)){
var vec__58166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58164);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58166,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58166,(1),null);
cljs.core.chunk_append(b__58165,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58164,i__58157,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58164,i__58157,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58164,i__58157,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169(s__58170){
return (new cljs.core.LazySeq(null,((function (i__58164,i__58157,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58170__$1 = s__58170;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58170__$1);
if(temp__5735__auto____$2){
var s__58170__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58170__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58170__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58172 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58171 = (0);
while(true){
if((i__58171 < size__4581__auto____$2)){
var map__58173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58171);
var map__58173__$1 = (((((!((map__58173 == null))))?(((((map__58173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58173):map__58173);
var block = map__58173__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58172,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58171,i__58164,i__58157,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169_$_iter__58175(s__58176){
return (new cljs.core.LazySeq(null,((function (i__58171,i__58164,i__58157,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58176__$1 = s__58176;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58176__$1);
if(temp__5735__auto____$3){
var s__58176__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58176__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58176__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58178 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58177 = (0);
while(true){
if((i__58177 < size__4581__auto____$3)){
var map__58179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58177);
var map__58179__$1 = (((((!((map__58179 == null))))?(((((map__58179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58179):map__58179);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58178,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58177,i__58171,i__58164,i__58157,map__58179,map__58179__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58178,s__58176__$2,temp__5735__auto____$3,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58177,i__58171,i__58164,i__58157,map__58179,map__58179__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58178,s__58176__$2,temp__5735__auto____$3,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58285 = (i__58177 + (1));
i__58177 = G__58285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58178),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169_$_iter__58175(cljs.core.chunk_rest(s__58176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58178),null);
}
} else {
var map__58181 = cljs.core.first(s__58176__$2);
var map__58181__$1 = (((((!((map__58181 == null))))?(((((map__58181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58181):map__58181);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58171,i__58164,i__58157,map__58181,map__58181__$1,title__$1,string,uid__$2,s__58176__$2,temp__5735__auto____$3,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58171,i__58164,i__58157,map__58181,map__58181__$1,title__$1,string,uid__$2,s__58176__$2,temp__5735__auto____$3,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169_$_iter__58175(cljs.core.rest(s__58176__$2)));
}
} else {
return null;
}
break;
}
});})(i__58171,i__58164,i__58157,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58171,i__58164,i__58157,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58286 = (i__58171 + (1));
i__58171 = G__58286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58172),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169(cljs.core.chunk_rest(s__58170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58172),null);
}
} else {
var map__58183 = cljs.core.first(s__58170__$2);
var map__58183__$1 = (((((!((map__58183 == null))))?(((((map__58183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58183):map__58183);
var block = map__58183__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58164,i__58157,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169_$_iter__58185(s__58186){
return (new cljs.core.LazySeq(null,((function (i__58164,i__58157,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58186__$1 = s__58186;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58186__$1);
if(temp__5735__auto____$3){
var s__58186__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58186__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58186__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58188 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58187 = (0);
while(true){
if((i__58187 < size__4581__auto____$2)){
var map__58189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58187);
var map__58189__$1 = (((((!((map__58189 == null))))?(((((map__58189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58189):map__58189);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58188,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58187,i__58164,i__58157,map__58189,map__58189__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58188,s__58186__$2,temp__5735__auto____$3,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58187,i__58164,i__58157,map__58189,map__58189__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58188,s__58186__$2,temp__5735__auto____$3,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58287 = (i__58187 + (1));
i__58187 = G__58287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58188),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169_$_iter__58185(cljs.core.chunk_rest(s__58186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58188),null);
}
} else {
var map__58191 = cljs.core.first(s__58186__$2);
var map__58191__$1 = (((((!((map__58191 == null))))?(((((map__58191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58191):map__58191);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58164,i__58157,map__58191,map__58191__$1,title__$1,string,uid__$2,s__58186__$2,temp__5735__auto____$3,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58164,i__58157,map__58191,map__58191__$1,title__$1,string,uid__$2,s__58186__$2,temp__5735__auto____$3,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169_$_iter__58185(cljs.core.rest(s__58186__$2)));
}
} else {
return null;
}
break;
}
});})(i__58164,i__58157,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58164,i__58157,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58169(cljs.core.rest(s__58170__$2)));
}
} else {
return null;
}
break;
}
});})(i__58164,i__58157,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58164,i__58157,vec__58166,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58288 = (i__58164 + (1));
i__58164 = G__58288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58165),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162(cljs.core.chunk_rest(s__58163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58165),null);
}
} else {
var vec__58193 = cljs.core.first(s__58163__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58157,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58157,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58157,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196(s__58197){
return (new cljs.core.LazySeq(null,((function (i__58157,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58197__$1 = s__58197;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58197__$1);
if(temp__5735__auto____$2){
var s__58197__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58197__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58197__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58199 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58198 = (0);
while(true){
if((i__58198 < size__4581__auto____$1)){
var map__58200 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58198);
var map__58200__$1 = (((((!((map__58200 == null))))?(((((map__58200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58200):map__58200);
var block = map__58200__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58199,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58198,i__58157,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196_$_iter__58202(s__58203){
return (new cljs.core.LazySeq(null,((function (i__58198,i__58157,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58203__$1 = s__58203;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58203__$1);
if(temp__5735__auto____$3){
var s__58203__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58203__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58203__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58205 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58204 = (0);
while(true){
if((i__58204 < size__4581__auto____$2)){
var map__58206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58204);
var map__58206__$1 = (((((!((map__58206 == null))))?(((((map__58206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58206):map__58206);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58205,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58204,i__58198,i__58157,map__58206,map__58206__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58205,s__58203__$2,temp__5735__auto____$3,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58204,i__58198,i__58157,map__58206,map__58206__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58205,s__58203__$2,temp__5735__auto____$3,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58289 = (i__58204 + (1));
i__58204 = G__58289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58205),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196_$_iter__58202(cljs.core.chunk_rest(s__58203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58205),null);
}
} else {
var map__58208 = cljs.core.first(s__58203__$2);
var map__58208__$1 = (((((!((map__58208 == null))))?(((((map__58208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58208):map__58208);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58198,i__58157,map__58208,map__58208__$1,title__$1,string,uid__$2,s__58203__$2,temp__5735__auto____$3,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58198,i__58157,map__58208,map__58208__$1,title__$1,string,uid__$2,s__58203__$2,temp__5735__auto____$3,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196_$_iter__58202(cljs.core.rest(s__58203__$2)));
}
} else {
return null;
}
break;
}
});})(i__58198,i__58157,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58198,i__58157,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58290 = (i__58198 + (1));
i__58198 = G__58290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58199),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196(cljs.core.chunk_rest(s__58197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58199),null);
}
} else {
var map__58210 = cljs.core.first(s__58197__$2);
var map__58210__$1 = (((((!((map__58210 == null))))?(((((map__58210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58210):map__58210);
var block = map__58210__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58157,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196_$_iter__58212(s__58213){
return (new cljs.core.LazySeq(null,((function (i__58157,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58213__$1 = s__58213;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58213__$1);
if(temp__5735__auto____$3){
var s__58213__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58213__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58213__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58215 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58214 = (0);
while(true){
if((i__58214 < size__4581__auto____$1)){
var map__58216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58214);
var map__58216__$1 = (((((!((map__58216 == null))))?(((((map__58216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58216):map__58216);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58215,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58214,i__58157,map__58216,map__58216__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$3,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58214,i__58157,map__58216,map__58216__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$3,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58291 = (i__58214 + (1));
i__58214 = G__58291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58215),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196_$_iter__58212(cljs.core.chunk_rest(s__58213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58215),null);
}
} else {
var map__58218 = cljs.core.first(s__58213__$2);
var map__58218__$1 = (((((!((map__58218 == null))))?(((((map__58218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58218):map__58218);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58157,map__58218,map__58218__$1,title__$1,string,uid__$2,s__58213__$2,temp__5735__auto____$3,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58157,map__58218,map__58218__$1,title__$1,string,uid__$2,s__58213__$2,temp__5735__auto____$3,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196_$_iter__58212(cljs.core.rest(s__58213__$2)));
}
} else {
return null;
}
break;
}
});})(i__58157,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58157,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162_$_iter__58196(cljs.core.rest(s__58197__$2)));
}
} else {
return null;
}
break;
}
});})(i__58157,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58157,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58162(cljs.core.rest(s__58163__$2)));
}
} else {
return null;
}
break;
}
});})(i__58157,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58157,vec__58159,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58158,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58292 = (i__58157 + (1));
i__58157 = G__58292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58158),athens$views$node_page$node_page_el_$_iter__58155(cljs.core.chunk_rest(s__58156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58158),null);
}
} else {
var vec__58220 = cljs.core.first(s__58156__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58220,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58220,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223(s__58224){
return (new cljs.core.LazySeq(null,(function (){
var s__58224__$1 = s__58224;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58224__$1);
if(temp__5735__auto____$1){
var s__58224__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58224__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58224__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58226 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58225 = (0);
while(true){
if((i__58225 < size__4581__auto__)){
var vec__58227 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58225);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58227,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58227,(1),null);
cljs.core.chunk_append(b__58226,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58225,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58225,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58225,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230(s__58231){
return (new cljs.core.LazySeq(null,((function (i__58225,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58231__$1 = s__58231;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58231__$1);
if(temp__5735__auto____$2){
var s__58231__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58231__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58231__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58233 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58232 = (0);
while(true){
if((i__58232 < size__4581__auto____$1)){
var map__58234 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58232);
var map__58234__$1 = (((((!((map__58234 == null))))?(((((map__58234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58234):map__58234);
var block = map__58234__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58234__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58234__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58233,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58232,i__58225,map__58234,map__58234__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58233,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230_$_iter__58236(s__58237){
return (new cljs.core.LazySeq(null,((function (i__58232,i__58225,map__58234,map__58234__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58233,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58237__$1 = s__58237;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58237__$1);
if(temp__5735__auto____$3){
var s__58237__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58237__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58237__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58239 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58238 = (0);
while(true){
if((i__58238 < size__4581__auto____$2)){
var map__58240 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58238);
var map__58240__$1 = (((((!((map__58240 == null))))?(((((map__58240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58240):map__58240);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58239,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58238,i__58232,i__58225,map__58240,map__58240__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58239,s__58237__$2,temp__5735__auto____$3,map__58234,map__58234__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58233,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58238,i__58232,i__58225,map__58240,map__58240__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58239,s__58237__$2,temp__5735__auto____$3,map__58234,map__58234__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58233,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58293 = (i__58238 + (1));
i__58238 = G__58293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58239),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230_$_iter__58236(cljs.core.chunk_rest(s__58237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58239),null);
}
} else {
var map__58242 = cljs.core.first(s__58237__$2);
var map__58242__$1 = (((((!((map__58242 == null))))?(((((map__58242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58242):map__58242);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58242__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58242__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58242__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58232,i__58225,map__58242,map__58242__$1,title__$1,string,uid__$2,s__58237__$2,temp__5735__auto____$3,map__58234,map__58234__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58233,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58232,i__58225,map__58242,map__58242__$1,title__$1,string,uid__$2,s__58237__$2,temp__5735__auto____$3,map__58234,map__58234__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58233,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230_$_iter__58236(cljs.core.rest(s__58237__$2)));
}
} else {
return null;
}
break;
}
});})(i__58232,i__58225,map__58234,map__58234__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58233,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58232,i__58225,map__58234,map__58234__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58233,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58294 = (i__58232 + (1));
i__58232 = G__58294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58233),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230(cljs.core.chunk_rest(s__58231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58233),null);
}
} else {
var map__58244 = cljs.core.first(s__58231__$2);
var map__58244__$1 = (((((!((map__58244 == null))))?(((((map__58244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58244):map__58244);
var block = map__58244__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58225,map__58244,map__58244__$1,block,uid__$1,parents,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230_$_iter__58246(s__58247){
return (new cljs.core.LazySeq(null,((function (i__58225,map__58244,map__58244__$1,block,uid__$1,parents,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58247__$1 = s__58247;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58247__$1);
if(temp__5735__auto____$3){
var s__58247__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58247__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58247__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58249 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58248 = (0);
while(true){
if((i__58248 < size__4581__auto____$1)){
var map__58250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58248);
var map__58250__$1 = (((((!((map__58250 == null))))?(((((map__58250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58250):map__58250);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58248,i__58225,map__58250,map__58250__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$3,map__58244,map__58244__$1,block,uid__$1,parents,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58248,i__58225,map__58250,map__58250__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$3,map__58244,map__58244__$1,block,uid__$1,parents,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58295 = (i__58248 + (1));
i__58248 = G__58295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58249),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230_$_iter__58246(cljs.core.chunk_rest(s__58247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58249),null);
}
} else {
var map__58252 = cljs.core.first(s__58247__$2);
var map__58252__$1 = (((((!((map__58252 == null))))?(((((map__58252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58252):map__58252);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58225,map__58252,map__58252__$1,title__$1,string,uid__$2,s__58247__$2,temp__5735__auto____$3,map__58244,map__58244__$1,block,uid__$1,parents,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58225,map__58252,map__58252__$1,title__$1,string,uid__$2,s__58247__$2,temp__5735__auto____$3,map__58244,map__58244__$1,block,uid__$1,parents,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230_$_iter__58246(cljs.core.rest(s__58247__$2)));
}
} else {
return null;
}
break;
}
});})(i__58225,map__58244,map__58244__$1,block,uid__$1,parents,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58225,map__58244,map__58244__$1,block,uid__$1,parents,s__58231__$2,temp__5735__auto____$2,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58230(cljs.core.rest(s__58231__$2)));
}
} else {
return null;
}
break;
}
});})(i__58225,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58225,vec__58227,group_title,group,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58296 = (i__58225 + (1));
i__58225 = G__58296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58226),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223(cljs.core.chunk_rest(s__58224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58226),null);
}
} else {
var vec__58254 = cljs.core.first(s__58224__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58254,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58254,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257(s__58258){
return (new cljs.core.LazySeq(null,(function (){
var s__58258__$1 = s__58258;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58258__$1);
if(temp__5735__auto____$2){
var s__58258__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58258__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58258__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58260 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58259 = (0);
while(true){
if((i__58259 < size__4581__auto__)){
var map__58261 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58259);
var map__58261__$1 = (((((!((map__58261 == null))))?(((((map__58261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58261):map__58261);
var block = map__58261__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58260,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58259,map__58261,map__58261__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257_$_iter__58263(s__58264){
return (new cljs.core.LazySeq(null,((function (i__58259,map__58261,map__58261__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
var s__58264__$1 = s__58264;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58264__$1);
if(temp__5735__auto____$3){
var s__58264__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58264__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58264__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58266 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58265 = (0);
while(true){
if((i__58265 < size__4581__auto____$1)){
var map__58267 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58265);
var map__58267__$1 = (((((!((map__58267 == null))))?(((((map__58267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58267):map__58267);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58266,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58265,i__58259,map__58267,map__58267__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$3,map__58261,map__58261__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58265,i__58259,map__58267,map__58267__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$3,map__58261,map__58261__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58297 = (i__58265 + (1));
i__58265 = G__58297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58266),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257_$_iter__58263(cljs.core.chunk_rest(s__58264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58266),null);
}
} else {
var map__58269 = cljs.core.first(s__58264__$2);
var map__58269__$1 = (((((!((map__58269 == null))))?(((((map__58269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58269):map__58269);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58259,map__58269,map__58269__$1,title__$1,string,uid__$2,s__58264__$2,temp__5735__auto____$3,map__58261,map__58261__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58259,map__58269,map__58269__$1,title__$1,string,uid__$2,s__58264__$2,temp__5735__auto____$3,map__58261,map__58261__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257_$_iter__58263(cljs.core.rest(s__58264__$2)));
}
} else {
return null;
}
break;
}
});})(i__58259,map__58261,map__58261__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
,null,null));
});})(i__58259,map__58261,map__58261__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58298 = (i__58259 + (1));
i__58259 = G__58298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58260),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257(cljs.core.chunk_rest(s__58258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58260),null);
}
} else {
var map__58271 = cljs.core.first(s__58258__$2);
var map__58271__$1 = (((((!((map__58271 == null))))?(((((map__58271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58271):map__58271);
var block = map__58271__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58271,map__58271__$1,block,uid__$1,parents,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257_$_iter__58273(s__58274){
return (new cljs.core.LazySeq(null,(function (){
var s__58274__$1 = s__58274;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58274__$1);
if(temp__5735__auto____$3){
var s__58274__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58274__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58274__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58276 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58275 = (0);
while(true){
if((i__58275 < size__4581__auto__)){
var map__58277 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58275);
var map__58277__$1 = (((((!((map__58277 == null))))?(((((map__58277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58277):map__58277);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58276,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58275,map__58277,map__58277__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$3,map__58271,map__58271__$1,block,uid__$1,parents,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58275,map__58277,map__58277__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$3,map__58271,map__58271__$1,block,uid__$1,parents,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58299 = (i__58275 + (1));
i__58275 = G__58299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58276),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257_$_iter__58273(cljs.core.chunk_rest(s__58274__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58276),null);
}
} else {
var map__58279 = cljs.core.first(s__58274__$2);
var map__58279__$1 = (((((!((map__58279 == null))))?(((((map__58279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58279):map__58279);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58279__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58279__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58279__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58279,map__58279__$1,title__$1,string,uid__$2,s__58274__$2,temp__5735__auto____$3,map__58271,map__58271__$1,block,uid__$1,parents,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58279,map__58279__$1,title__$1,string,uid__$2,s__58274__$2,temp__5735__auto____$3,map__58271,map__58271__$1,block,uid__$1,parents,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257_$_iter__58273(cljs.core.rest(s__58274__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58271,map__58271__$1,block,uid__$1,parents,s__58258__$2,temp__5735__auto____$2,vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223_$_iter__58257(cljs.core.rest(s__58258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58254,group_title,group,s__58224__$2,temp__5735__auto____$1,vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58155_$_iter__58223(cljs.core.rest(s__58224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58220,linked_or_unlinked,refs,s__58156__$2,temp__5735__auto__,map__58143,map__58143__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58155(cljs.core.rest(s__58156__$2)));
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
var map__58281 = athens.db.get_node_document(ident);
var map__58281__$1 = (((((!((map__58281 == null))))?(((((map__58281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58281):map__58281);
var node = map__58281__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58283) : re_frame.core.subscribe.call(null,G__58283));
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
