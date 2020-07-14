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
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58290) : re_frame.core.dispatch.call(null,G__58290));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58291 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58292 = athens.db.dsdb;
var G__58293 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58291,G__58292,G__58293) : posh.reagent.q.call(null,G__58291,G__58292,G__58293));
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
return cljs.core.boolean$((function (){try{var vec__58295 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58294){if((e58294 instanceof Object)){
var _ = e58294;
return false;
} else {
throw e58294;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58298,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58299 = p__58298;
var map__58299__$1 = (((((!((map__58299 == null))))?(((((map__58299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58299):map__58299);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58301 = e.target.value;
var G__58302 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58301,G__58302) : athens.views.node_page.db_handler.call(null,G__58301,G__58302));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58303(s__58304){
return (new cljs.core.LazySeq(null,(function (){
var s__58304__$1 = s__58304;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58304__$1);
if(temp__5735__auto__){
var s__58304__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58304__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58304__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58306 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58305 = (0);
while(true){
if((i__58305 < size__4581__auto__)){
var map__58307 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58305);
var map__58307__$1 = (((((!((map__58307 == null))))?(((((map__58307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58307):map__58307);
var child = map__58307__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58306,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58440 = (i__58305 + (1));
i__58305 = G__58440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58306),athens$views$node_page$node_page_el_$_iter__58303(cljs.core.chunk_rest(s__58304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58306),null);
}
} else {
var map__58309 = cljs.core.first(s__58304__$2);
var map__58309__$1 = (((((!((map__58309 == null))))?(((((map__58309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58309):map__58309);
var child = map__58309__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58303(cljs.core.rest(s__58304__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58311(s__58312){
return (new cljs.core.LazySeq(null,(function (){
var s__58312__$1 = s__58312;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58312__$1);
if(temp__5735__auto__){
var s__58312__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58312__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58312__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58314 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58313 = (0);
while(true){
if((i__58313 < size__4581__auto__)){
var vec__58315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58313);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58315,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58315,(1),null);
cljs.core.chunk_append(b__58314,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58313,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318(s__58319){
return (new cljs.core.LazySeq(null,((function (i__58313,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58319__$1 = s__58319;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58319__$1);
if(temp__5735__auto____$1){
var s__58319__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58319__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58319__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58321 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58320 = (0);
while(true){
if((i__58320 < size__4581__auto____$1)){
var vec__58322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58320);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58322,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58322,(1),null);
cljs.core.chunk_append(b__58321,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58320,i__58313,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58320,i__58313,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58320,i__58313,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325(s__58326){
return (new cljs.core.LazySeq(null,((function (i__58320,i__58313,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58326__$1 = s__58326;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58326__$1);
if(temp__5735__auto____$2){
var s__58326__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58326__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58326__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58328 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58327 = (0);
while(true){
if((i__58327 < size__4581__auto____$2)){
var map__58329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58327);
var map__58329__$1 = (((((!((map__58329 == null))))?(((((map__58329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58329):map__58329);
var block = map__58329__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58329__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58329__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58328,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58327,i__58320,i__58313,map__58329,map__58329__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58328,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325_$_iter__58331(s__58332){
return (new cljs.core.LazySeq(null,((function (i__58327,i__58320,i__58313,map__58329,map__58329__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58328,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58332__$1 = s__58332;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58332__$1);
if(temp__5735__auto____$3){
var s__58332__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58332__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58332__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58334 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58333 = (0);
while(true){
if((i__58333 < size__4581__auto____$3)){
var map__58335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58333);
var map__58335__$1 = (((((!((map__58335 == null))))?(((((map__58335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58335):map__58335);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58334,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58333,i__58327,i__58320,i__58313,map__58335,map__58335__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58334,s__58332__$2,temp__5735__auto____$3,map__58329,map__58329__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58328,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58333,i__58327,i__58320,i__58313,map__58335,map__58335__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58334,s__58332__$2,temp__5735__auto____$3,map__58329,map__58329__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58328,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58441 = (i__58333 + (1));
i__58333 = G__58441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58334),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325_$_iter__58331(cljs.core.chunk_rest(s__58332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58334),null);
}
} else {
var map__58337 = cljs.core.first(s__58332__$2);
var map__58337__$1 = (((((!((map__58337 == null))))?(((((map__58337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58337):map__58337);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58327,i__58320,i__58313,map__58337,map__58337__$1,title__$1,string,uid__$2,s__58332__$2,temp__5735__auto____$3,map__58329,map__58329__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58328,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58327,i__58320,i__58313,map__58337,map__58337__$1,title__$1,string,uid__$2,s__58332__$2,temp__5735__auto____$3,map__58329,map__58329__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58328,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325_$_iter__58331(cljs.core.rest(s__58332__$2)));
}
} else {
return null;
}
break;
}
});})(i__58327,i__58320,i__58313,map__58329,map__58329__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58328,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58327,i__58320,i__58313,map__58329,map__58329__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58328,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58442 = (i__58327 + (1));
i__58327 = G__58442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58328),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325(cljs.core.chunk_rest(s__58326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58328),null);
}
} else {
var map__58339 = cljs.core.first(s__58326__$2);
var map__58339__$1 = (((((!((map__58339 == null))))?(((((map__58339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58339):map__58339);
var block = map__58339__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58339__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58339__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58320,i__58313,map__58339,map__58339__$1,block,uid__$1,parents,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325_$_iter__58341(s__58342){
return (new cljs.core.LazySeq(null,((function (i__58320,i__58313,map__58339,map__58339__$1,block,uid__$1,parents,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58342__$1 = s__58342;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58342__$1);
if(temp__5735__auto____$3){
var s__58342__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58342__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58342__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58344 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58343 = (0);
while(true){
if((i__58343 < size__4581__auto____$2)){
var map__58345 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58343);
var map__58345__$1 = (((((!((map__58345 == null))))?(((((map__58345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58345):map__58345);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58344,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58343,i__58320,i__58313,map__58345,map__58345__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58344,s__58342__$2,temp__5735__auto____$3,map__58339,map__58339__$1,block,uid__$1,parents,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58343,i__58320,i__58313,map__58345,map__58345__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58344,s__58342__$2,temp__5735__auto____$3,map__58339,map__58339__$1,block,uid__$1,parents,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58443 = (i__58343 + (1));
i__58343 = G__58443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58344),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325_$_iter__58341(cljs.core.chunk_rest(s__58342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58344),null);
}
} else {
var map__58347 = cljs.core.first(s__58342__$2);
var map__58347__$1 = (((((!((map__58347 == null))))?(((((map__58347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58347):map__58347);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58320,i__58313,map__58347,map__58347__$1,title__$1,string,uid__$2,s__58342__$2,temp__5735__auto____$3,map__58339,map__58339__$1,block,uid__$1,parents,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58320,i__58313,map__58347,map__58347__$1,title__$1,string,uid__$2,s__58342__$2,temp__5735__auto____$3,map__58339,map__58339__$1,block,uid__$1,parents,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325_$_iter__58341(cljs.core.rest(s__58342__$2)));
}
} else {
return null;
}
break;
}
});})(i__58320,i__58313,map__58339,map__58339__$1,block,uid__$1,parents,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58320,i__58313,map__58339,map__58339__$1,block,uid__$1,parents,s__58326__$2,temp__5735__auto____$2,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58325(cljs.core.rest(s__58326__$2)));
}
} else {
return null;
}
break;
}
});})(i__58320,i__58313,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58320,i__58313,vec__58322,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58321,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58444 = (i__58320 + (1));
i__58320 = G__58444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58321),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318(cljs.core.chunk_rest(s__58319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58321),null);
}
} else {
var vec__58349 = cljs.core.first(s__58319__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58349,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58349,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58313,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58313,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58313,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352(s__58353){
return (new cljs.core.LazySeq(null,((function (i__58313,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58353__$1 = s__58353;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58353__$1);
if(temp__5735__auto____$2){
var s__58353__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58353__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58353__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58355 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58354 = (0);
while(true){
if((i__58354 < size__4581__auto____$1)){
var map__58356 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58354);
var map__58356__$1 = (((((!((map__58356 == null))))?(((((map__58356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58356):map__58356);
var block = map__58356__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58356__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58356__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58355,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58354,i__58313,map__58356,map__58356__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58355,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352_$_iter__58358(s__58359){
return (new cljs.core.LazySeq(null,((function (i__58354,i__58313,map__58356,map__58356__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58355,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58359__$1 = s__58359;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58359__$1);
if(temp__5735__auto____$3){
var s__58359__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58359__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58359__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58361 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58360 = (0);
while(true){
if((i__58360 < size__4581__auto____$2)){
var map__58362 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58360);
var map__58362__$1 = (((((!((map__58362 == null))))?(((((map__58362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58362):map__58362);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58361,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58360,i__58354,i__58313,map__58362,map__58362__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58361,s__58359__$2,temp__5735__auto____$3,map__58356,map__58356__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58355,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58360,i__58354,i__58313,map__58362,map__58362__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58361,s__58359__$2,temp__5735__auto____$3,map__58356,map__58356__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58355,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58445 = (i__58360 + (1));
i__58360 = G__58445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58361),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352_$_iter__58358(cljs.core.chunk_rest(s__58359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58361),null);
}
} else {
var map__58364 = cljs.core.first(s__58359__$2);
var map__58364__$1 = (((((!((map__58364 == null))))?(((((map__58364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58364):map__58364);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58354,i__58313,map__58364,map__58364__$1,title__$1,string,uid__$2,s__58359__$2,temp__5735__auto____$3,map__58356,map__58356__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58355,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58354,i__58313,map__58364,map__58364__$1,title__$1,string,uid__$2,s__58359__$2,temp__5735__auto____$3,map__58356,map__58356__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58355,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352_$_iter__58358(cljs.core.rest(s__58359__$2)));
}
} else {
return null;
}
break;
}
});})(i__58354,i__58313,map__58356,map__58356__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58355,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58354,i__58313,map__58356,map__58356__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58355,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58446 = (i__58354 + (1));
i__58354 = G__58446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58355),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352(cljs.core.chunk_rest(s__58353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58355),null);
}
} else {
var map__58366 = cljs.core.first(s__58353__$2);
var map__58366__$1 = (((((!((map__58366 == null))))?(((((map__58366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58366):map__58366);
var block = map__58366__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58366__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58366__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58313,map__58366,map__58366__$1,block,uid__$1,parents,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352_$_iter__58368(s__58369){
return (new cljs.core.LazySeq(null,((function (i__58313,map__58366,map__58366__$1,block,uid__$1,parents,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58369__$1 = s__58369;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58369__$1);
if(temp__5735__auto____$3){
var s__58369__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58369__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58369__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58371 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58370 = (0);
while(true){
if((i__58370 < size__4581__auto____$1)){
var map__58372 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58370);
var map__58372__$1 = (((((!((map__58372 == null))))?(((((map__58372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58372):map__58372);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58372__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58372__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58372__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58371,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58370,i__58313,map__58372,map__58372__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58371,s__58369__$2,temp__5735__auto____$3,map__58366,map__58366__$1,block,uid__$1,parents,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58370,i__58313,map__58372,map__58372__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58371,s__58369__$2,temp__5735__auto____$3,map__58366,map__58366__$1,block,uid__$1,parents,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58447 = (i__58370 + (1));
i__58370 = G__58447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58371),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352_$_iter__58368(cljs.core.chunk_rest(s__58369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58371),null);
}
} else {
var map__58374 = cljs.core.first(s__58369__$2);
var map__58374__$1 = (((((!((map__58374 == null))))?(((((map__58374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58374):map__58374);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58374__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58374__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58374__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58313,map__58374,map__58374__$1,title__$1,string,uid__$2,s__58369__$2,temp__5735__auto____$3,map__58366,map__58366__$1,block,uid__$1,parents,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58313,map__58374,map__58374__$1,title__$1,string,uid__$2,s__58369__$2,temp__5735__auto____$3,map__58366,map__58366__$1,block,uid__$1,parents,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352_$_iter__58368(cljs.core.rest(s__58369__$2)));
}
} else {
return null;
}
break;
}
});})(i__58313,map__58366,map__58366__$1,block,uid__$1,parents,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58313,map__58366,map__58366__$1,block,uid__$1,parents,s__58353__$2,temp__5735__auto____$2,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318_$_iter__58352(cljs.core.rest(s__58353__$2)));
}
} else {
return null;
}
break;
}
});})(i__58313,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58313,vec__58349,group_title,group,s__58319__$2,temp__5735__auto____$1,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58318(cljs.core.rest(s__58319__$2)));
}
} else {
return null;
}
break;
}
});})(i__58313,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58313,vec__58315,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58314,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58448 = (i__58313 + (1));
i__58313 = G__58448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58314),athens$views$node_page$node_page_el_$_iter__58311(cljs.core.chunk_rest(s__58312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58314),null);
}
} else {
var vec__58376 = cljs.core.first(s__58312__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58376,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58376,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379(s__58380){
return (new cljs.core.LazySeq(null,(function (){
var s__58380__$1 = s__58380;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58380__$1);
if(temp__5735__auto____$1){
var s__58380__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58380__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58380__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58382 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58381 = (0);
while(true){
if((i__58381 < size__4581__auto__)){
var vec__58383 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58381);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58383,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58383,(1),null);
cljs.core.chunk_append(b__58382,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58381,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58381,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58381,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386(s__58387){
return (new cljs.core.LazySeq(null,((function (i__58381,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58387__$1 = s__58387;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58387__$1);
if(temp__5735__auto____$2){
var s__58387__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58387__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58387__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58389 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58388 = (0);
while(true){
if((i__58388 < size__4581__auto____$1)){
var map__58390 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58388);
var map__58390__$1 = (((((!((map__58390 == null))))?(((((map__58390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58390):map__58390);
var block = map__58390__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58390__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58390__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58389,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58388,i__58381,map__58390,map__58390__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58389,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386_$_iter__58392(s__58393){
return (new cljs.core.LazySeq(null,((function (i__58388,i__58381,map__58390,map__58390__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58389,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58393__$1 = s__58393;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58393__$1);
if(temp__5735__auto____$3){
var s__58393__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58393__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58393__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58395 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58394 = (0);
while(true){
if((i__58394 < size__4581__auto____$2)){
var map__58396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58394);
var map__58396__$1 = (((((!((map__58396 == null))))?(((((map__58396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58396):map__58396);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58395,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58394,i__58388,i__58381,map__58396,map__58396__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$3,map__58390,map__58390__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58389,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58394,i__58388,i__58381,map__58396,map__58396__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$3,map__58390,map__58390__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58389,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58449 = (i__58394 + (1));
i__58394 = G__58449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58395),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386_$_iter__58392(cljs.core.chunk_rest(s__58393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58395),null);
}
} else {
var map__58398 = cljs.core.first(s__58393__$2);
var map__58398__$1 = (((((!((map__58398 == null))))?(((((map__58398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58398):map__58398);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58398__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58398__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58398__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58388,i__58381,map__58398,map__58398__$1,title__$1,string,uid__$2,s__58393__$2,temp__5735__auto____$3,map__58390,map__58390__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58389,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58388,i__58381,map__58398,map__58398__$1,title__$1,string,uid__$2,s__58393__$2,temp__5735__auto____$3,map__58390,map__58390__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58389,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386_$_iter__58392(cljs.core.rest(s__58393__$2)));
}
} else {
return null;
}
break;
}
});})(i__58388,i__58381,map__58390,map__58390__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58389,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58388,i__58381,map__58390,map__58390__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58389,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58450 = (i__58388 + (1));
i__58388 = G__58450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58389),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386(cljs.core.chunk_rest(s__58387__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58389),null);
}
} else {
var map__58400 = cljs.core.first(s__58387__$2);
var map__58400__$1 = (((((!((map__58400 == null))))?(((((map__58400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58400):map__58400);
var block = map__58400__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58400__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58400__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58381,map__58400,map__58400__$1,block,uid__$1,parents,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386_$_iter__58402(s__58403){
return (new cljs.core.LazySeq(null,((function (i__58381,map__58400,map__58400__$1,block,uid__$1,parents,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58403__$1 = s__58403;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58403__$1);
if(temp__5735__auto____$3){
var s__58403__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58403__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58403__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58405 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58404 = (0);
while(true){
if((i__58404 < size__4581__auto____$1)){
var map__58406 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58404);
var map__58406__$1 = (((((!((map__58406 == null))))?(((((map__58406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58406):map__58406);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58405,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58404,i__58381,map__58406,map__58406__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58405,s__58403__$2,temp__5735__auto____$3,map__58400,map__58400__$1,block,uid__$1,parents,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58404,i__58381,map__58406,map__58406__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58405,s__58403__$2,temp__5735__auto____$3,map__58400,map__58400__$1,block,uid__$1,parents,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58451 = (i__58404 + (1));
i__58404 = G__58451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58405),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386_$_iter__58402(cljs.core.chunk_rest(s__58403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58405),null);
}
} else {
var map__58408 = cljs.core.first(s__58403__$2);
var map__58408__$1 = (((((!((map__58408 == null))))?(((((map__58408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58408):map__58408);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58408__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58408__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58408__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58381,map__58408,map__58408__$1,title__$1,string,uid__$2,s__58403__$2,temp__5735__auto____$3,map__58400,map__58400__$1,block,uid__$1,parents,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58381,map__58408,map__58408__$1,title__$1,string,uid__$2,s__58403__$2,temp__5735__auto____$3,map__58400,map__58400__$1,block,uid__$1,parents,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386_$_iter__58402(cljs.core.rest(s__58403__$2)));
}
} else {
return null;
}
break;
}
});})(i__58381,map__58400,map__58400__$1,block,uid__$1,parents,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58381,map__58400,map__58400__$1,block,uid__$1,parents,s__58387__$2,temp__5735__auto____$2,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58386(cljs.core.rest(s__58387__$2)));
}
} else {
return null;
}
break;
}
});})(i__58381,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58381,vec__58383,group_title,group,c__4580__auto__,size__4581__auto__,b__58382,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58452 = (i__58381 + (1));
i__58381 = G__58452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58382),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379(cljs.core.chunk_rest(s__58380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58382),null);
}
} else {
var vec__58410 = cljs.core.first(s__58380__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58410,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58410,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413(s__58414){
return (new cljs.core.LazySeq(null,(function (){
var s__58414__$1 = s__58414;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58414__$1);
if(temp__5735__auto____$2){
var s__58414__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58414__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58414__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58416 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58415 = (0);
while(true){
if((i__58415 < size__4581__auto__)){
var map__58417 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58415);
var map__58417__$1 = (((((!((map__58417 == null))))?(((((map__58417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58417):map__58417);
var block = map__58417__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58417__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58417__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58416,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58415,map__58417,map__58417__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58416,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413_$_iter__58419(s__58420){
return (new cljs.core.LazySeq(null,((function (i__58415,map__58417,map__58417__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58416,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
var s__58420__$1 = s__58420;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58420__$1);
if(temp__5735__auto____$3){
var s__58420__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58420__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58420__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58422 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58421 = (0);
while(true){
if((i__58421 < size__4581__auto____$1)){
var map__58423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58421);
var map__58423__$1 = (((((!((map__58423 == null))))?(((((map__58423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58423):map__58423);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58423__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58423__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58423__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58422,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58421,i__58415,map__58423,map__58423__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$3,map__58417,map__58417__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58416,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58421,i__58415,map__58423,map__58423__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$3,map__58417,map__58417__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58416,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58453 = (i__58421 + (1));
i__58421 = G__58453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58422),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413_$_iter__58419(cljs.core.chunk_rest(s__58420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58422),null);
}
} else {
var map__58425 = cljs.core.first(s__58420__$2);
var map__58425__$1 = (((((!((map__58425 == null))))?(((((map__58425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58425):map__58425);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58415,map__58425,map__58425__$1,title__$1,string,uid__$2,s__58420__$2,temp__5735__auto____$3,map__58417,map__58417__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58416,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58415,map__58425,map__58425__$1,title__$1,string,uid__$2,s__58420__$2,temp__5735__auto____$3,map__58417,map__58417__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58416,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413_$_iter__58419(cljs.core.rest(s__58420__$2)));
}
} else {
return null;
}
break;
}
});})(i__58415,map__58417,map__58417__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58416,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
,null,null));
});})(i__58415,map__58417,map__58417__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58416,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58454 = (i__58415 + (1));
i__58415 = G__58454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58416),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413(cljs.core.chunk_rest(s__58414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58416),null);
}
} else {
var map__58427 = cljs.core.first(s__58414__$2);
var map__58427__$1 = (((((!((map__58427 == null))))?(((((map__58427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58427):map__58427);
var block = map__58427__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58427__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58427__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58427,map__58427__$1,block,uid__$1,parents,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413_$_iter__58429(s__58430){
return (new cljs.core.LazySeq(null,(function (){
var s__58430__$1 = s__58430;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58430__$1);
if(temp__5735__auto____$3){
var s__58430__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58430__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58430__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58432 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58431 = (0);
while(true){
if((i__58431 < size__4581__auto__)){
var map__58433 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58431);
var map__58433__$1 = (((((!((map__58433 == null))))?(((((map__58433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58433):map__58433);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58432,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58431,map__58433,map__58433__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58432,s__58430__$2,temp__5735__auto____$3,map__58427,map__58427__$1,block,uid__$1,parents,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58431,map__58433,map__58433__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58432,s__58430__$2,temp__5735__auto____$3,map__58427,map__58427__$1,block,uid__$1,parents,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58455 = (i__58431 + (1));
i__58431 = G__58455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58432),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413_$_iter__58429(cljs.core.chunk_rest(s__58430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58432),null);
}
} else {
var map__58435 = cljs.core.first(s__58430__$2);
var map__58435__$1 = (((((!((map__58435 == null))))?(((((map__58435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58435):map__58435);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58435__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58435__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58435__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58435,map__58435__$1,title__$1,string,uid__$2,s__58430__$2,temp__5735__auto____$3,map__58427,map__58427__$1,block,uid__$1,parents,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58435,map__58435__$1,title__$1,string,uid__$2,s__58430__$2,temp__5735__auto____$3,map__58427,map__58427__$1,block,uid__$1,parents,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413_$_iter__58429(cljs.core.rest(s__58430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58427,map__58427__$1,block,uid__$1,parents,s__58414__$2,temp__5735__auto____$2,vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379_$_iter__58413(cljs.core.rest(s__58414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58410,group_title,group,s__58380__$2,temp__5735__auto____$1,vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58311_$_iter__58379(cljs.core.rest(s__58380__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58376,linked_or_unlinked,refs,s__58312__$2,temp__5735__auto__,map__58299,map__58299__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58311(cljs.core.rest(s__58312__$2)));
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
var map__58437 = athens.db.get_node_document(ident);
var map__58437__$1 = (((((!((map__58437 == null))))?(((((map__58437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58437):map__58437);
var node = map__58437__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58439) : re_frame.core.subscribe.call(null,G__58439));
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
