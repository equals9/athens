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
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58235) : re_frame.core.dispatch.call(null,G__58235));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58236 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58237 = athens.db.dsdb;
var G__58238 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58236,G__58237,G__58238) : posh.reagent.q.call(null,G__58236,G__58237,G__58238));
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
return cljs.core.boolean$((function (){try{var vec__58240 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58240,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58240,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58240,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58239){if((e58239 instanceof Object)){
var _ = e58239;
return false;
} else {
throw e58239;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58243,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58244 = p__58243;
var map__58244__$1 = (((((!((map__58244 == null))))?(((((map__58244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58244):map__58244);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58246 = e.target.value;
var G__58247 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58246,G__58247) : athens.views.node_page.db_handler.call(null,G__58246,G__58247));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58248(s__58249){
return (new cljs.core.LazySeq(null,(function (){
var s__58249__$1 = s__58249;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58249__$1);
if(temp__5735__auto__){
var s__58249__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58249__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58249__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58251 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58250 = (0);
while(true){
if((i__58250 < size__4581__auto__)){
var map__58252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58250);
var map__58252__$1 = (((((!((map__58252 == null))))?(((((map__58252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58252):map__58252);
var child = map__58252__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58251,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58385 = (i__58250 + (1));
i__58250 = G__58385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58251),athens$views$node_page$node_page_el_$_iter__58248(cljs.core.chunk_rest(s__58249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58251),null);
}
} else {
var map__58254 = cljs.core.first(s__58249__$2);
var map__58254__$1 = (((((!((map__58254 == null))))?(((((map__58254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58254):map__58254);
var child = map__58254__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58248(cljs.core.rest(s__58249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58256(s__58257){
return (new cljs.core.LazySeq(null,(function (){
var s__58257__$1 = s__58257;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58257__$1);
if(temp__5735__auto__){
var s__58257__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58257__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58257__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58259 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58258 = (0);
while(true){
if((i__58258 < size__4581__auto__)){
var vec__58260 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58258);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58260,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58260,(1),null);
cljs.core.chunk_append(b__58259,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58258,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263(s__58264){
return (new cljs.core.LazySeq(null,((function (i__58258,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58264__$1 = s__58264;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58264__$1);
if(temp__5735__auto____$1){
var s__58264__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58264__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58264__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58266 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58265 = (0);
while(true){
if((i__58265 < size__4581__auto____$1)){
var vec__58267 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58265);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58267,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58267,(1),null);
cljs.core.chunk_append(b__58266,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58265,i__58258,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58265,i__58258,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58265,i__58258,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270(s__58271){
return (new cljs.core.LazySeq(null,((function (i__58265,i__58258,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58271__$1 = s__58271;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58271__$1);
if(temp__5735__auto____$2){
var s__58271__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58271__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58271__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58273 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58272 = (0);
while(true){
if((i__58272 < size__4581__auto____$2)){
var map__58274 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58272);
var map__58274__$1 = (((((!((map__58274 == null))))?(((((map__58274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58274):map__58274);
var block = map__58274__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58273,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58272,i__58265,i__58258,map__58274,map__58274__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58273,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270_$_iter__58276(s__58277){
return (new cljs.core.LazySeq(null,((function (i__58272,i__58265,i__58258,map__58274,map__58274__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58273,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58277__$1 = s__58277;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58277__$1);
if(temp__5735__auto____$3){
var s__58277__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58277__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58277__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58279 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58278 = (0);
while(true){
if((i__58278 < size__4581__auto____$3)){
var map__58280 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58278);
var map__58280__$1 = (((((!((map__58280 == null))))?(((((map__58280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58280):map__58280);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58279,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58278,i__58272,i__58265,i__58258,map__58280,map__58280__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58279,s__58277__$2,temp__5735__auto____$3,map__58274,map__58274__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58273,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58278,i__58272,i__58265,i__58258,map__58280,map__58280__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58279,s__58277__$2,temp__5735__auto____$3,map__58274,map__58274__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58273,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58386 = (i__58278 + (1));
i__58278 = G__58386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58279),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270_$_iter__58276(cljs.core.chunk_rest(s__58277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58279),null);
}
} else {
var map__58282 = cljs.core.first(s__58277__$2);
var map__58282__$1 = (((((!((map__58282 == null))))?(((((map__58282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58282):map__58282);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58272,i__58265,i__58258,map__58282,map__58282__$1,title__$1,string,uid__$2,s__58277__$2,temp__5735__auto____$3,map__58274,map__58274__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58273,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58272,i__58265,i__58258,map__58282,map__58282__$1,title__$1,string,uid__$2,s__58277__$2,temp__5735__auto____$3,map__58274,map__58274__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58273,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270_$_iter__58276(cljs.core.rest(s__58277__$2)));
}
} else {
return null;
}
break;
}
});})(i__58272,i__58265,i__58258,map__58274,map__58274__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58273,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58272,i__58265,i__58258,map__58274,map__58274__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58273,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58387 = (i__58272 + (1));
i__58272 = G__58387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58273),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270(cljs.core.chunk_rest(s__58271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58273),null);
}
} else {
var map__58284 = cljs.core.first(s__58271__$2);
var map__58284__$1 = (((((!((map__58284 == null))))?(((((map__58284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58284):map__58284);
var block = map__58284__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58265,i__58258,map__58284,map__58284__$1,block,uid__$1,parents,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270_$_iter__58286(s__58287){
return (new cljs.core.LazySeq(null,((function (i__58265,i__58258,map__58284,map__58284__$1,block,uid__$1,parents,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58287__$1 = s__58287;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58287__$1);
if(temp__5735__auto____$3){
var s__58287__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58287__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58287__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58289 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58288 = (0);
while(true){
if((i__58288 < size__4581__auto____$2)){
var map__58290 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58288);
var map__58290__$1 = (((((!((map__58290 == null))))?(((((map__58290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58290):map__58290);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58289,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58288,i__58265,i__58258,map__58290,map__58290__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58289,s__58287__$2,temp__5735__auto____$3,map__58284,map__58284__$1,block,uid__$1,parents,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58288,i__58265,i__58258,map__58290,map__58290__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58289,s__58287__$2,temp__5735__auto____$3,map__58284,map__58284__$1,block,uid__$1,parents,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58388 = (i__58288 + (1));
i__58288 = G__58388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58289),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270_$_iter__58286(cljs.core.chunk_rest(s__58287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58289),null);
}
} else {
var map__58292 = cljs.core.first(s__58287__$2);
var map__58292__$1 = (((((!((map__58292 == null))))?(((((map__58292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58292):map__58292);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58265,i__58258,map__58292,map__58292__$1,title__$1,string,uid__$2,s__58287__$2,temp__5735__auto____$3,map__58284,map__58284__$1,block,uid__$1,parents,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58265,i__58258,map__58292,map__58292__$1,title__$1,string,uid__$2,s__58287__$2,temp__5735__auto____$3,map__58284,map__58284__$1,block,uid__$1,parents,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270_$_iter__58286(cljs.core.rest(s__58287__$2)));
}
} else {
return null;
}
break;
}
});})(i__58265,i__58258,map__58284,map__58284__$1,block,uid__$1,parents,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58265,i__58258,map__58284,map__58284__$1,block,uid__$1,parents,s__58271__$2,temp__5735__auto____$2,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58270(cljs.core.rest(s__58271__$2)));
}
} else {
return null;
}
break;
}
});})(i__58265,i__58258,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58265,i__58258,vec__58267,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58266,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58389 = (i__58265 + (1));
i__58265 = G__58389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58266),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263(cljs.core.chunk_rest(s__58264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58266),null);
}
} else {
var vec__58294 = cljs.core.first(s__58264__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58294,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58294,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58258,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58258,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58258,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297(s__58298){
return (new cljs.core.LazySeq(null,((function (i__58258,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58298__$1 = s__58298;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58298__$1);
if(temp__5735__auto____$2){
var s__58298__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58298__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58298__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58300 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58299 = (0);
while(true){
if((i__58299 < size__4581__auto____$1)){
var map__58301 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58299);
var map__58301__$1 = (((((!((map__58301 == null))))?(((((map__58301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58301):map__58301);
var block = map__58301__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58300,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58299,i__58258,map__58301,map__58301__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58300,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297_$_iter__58303(s__58304){
return (new cljs.core.LazySeq(null,((function (i__58299,i__58258,map__58301,map__58301__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58300,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58304__$1 = s__58304;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58304__$1);
if(temp__5735__auto____$3){
var s__58304__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58304__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58304__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58306 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58305 = (0);
while(true){
if((i__58305 < size__4581__auto____$2)){
var map__58307 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58305);
var map__58307__$1 = (((((!((map__58307 == null))))?(((((map__58307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58307):map__58307);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58306,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58305,i__58299,i__58258,map__58307,map__58307__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58306,s__58304__$2,temp__5735__auto____$3,map__58301,map__58301__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58300,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58305,i__58299,i__58258,map__58307,map__58307__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58306,s__58304__$2,temp__5735__auto____$3,map__58301,map__58301__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58300,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58390 = (i__58305 + (1));
i__58305 = G__58390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58306),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297_$_iter__58303(cljs.core.chunk_rest(s__58304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58306),null);
}
} else {
var map__58309 = cljs.core.first(s__58304__$2);
var map__58309__$1 = (((((!((map__58309 == null))))?(((((map__58309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58309):map__58309);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58299,i__58258,map__58309,map__58309__$1,title__$1,string,uid__$2,s__58304__$2,temp__5735__auto____$3,map__58301,map__58301__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58300,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58299,i__58258,map__58309,map__58309__$1,title__$1,string,uid__$2,s__58304__$2,temp__5735__auto____$3,map__58301,map__58301__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58300,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297_$_iter__58303(cljs.core.rest(s__58304__$2)));
}
} else {
return null;
}
break;
}
});})(i__58299,i__58258,map__58301,map__58301__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58300,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58299,i__58258,map__58301,map__58301__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58300,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58391 = (i__58299 + (1));
i__58299 = G__58391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58300),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297(cljs.core.chunk_rest(s__58298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58300),null);
}
} else {
var map__58311 = cljs.core.first(s__58298__$2);
var map__58311__$1 = (((((!((map__58311 == null))))?(((((map__58311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58311):map__58311);
var block = map__58311__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58258,map__58311,map__58311__$1,block,uid__$1,parents,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297_$_iter__58313(s__58314){
return (new cljs.core.LazySeq(null,((function (i__58258,map__58311,map__58311__$1,block,uid__$1,parents,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58314__$1 = s__58314;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58314__$1);
if(temp__5735__auto____$3){
var s__58314__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58314__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58314__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58316 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58315 = (0);
while(true){
if((i__58315 < size__4581__auto____$1)){
var map__58317 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58315);
var map__58317__$1 = (((((!((map__58317 == null))))?(((((map__58317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58317):map__58317);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58317__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58317__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58317__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58316,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58315,i__58258,map__58317,map__58317__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58316,s__58314__$2,temp__5735__auto____$3,map__58311,map__58311__$1,block,uid__$1,parents,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58315,i__58258,map__58317,map__58317__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58316,s__58314__$2,temp__5735__auto____$3,map__58311,map__58311__$1,block,uid__$1,parents,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58392 = (i__58315 + (1));
i__58315 = G__58392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58316),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297_$_iter__58313(cljs.core.chunk_rest(s__58314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58316),null);
}
} else {
var map__58319 = cljs.core.first(s__58314__$2);
var map__58319__$1 = (((((!((map__58319 == null))))?(((((map__58319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58319):map__58319);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58258,map__58319,map__58319__$1,title__$1,string,uid__$2,s__58314__$2,temp__5735__auto____$3,map__58311,map__58311__$1,block,uid__$1,parents,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58258,map__58319,map__58319__$1,title__$1,string,uid__$2,s__58314__$2,temp__5735__auto____$3,map__58311,map__58311__$1,block,uid__$1,parents,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297_$_iter__58313(cljs.core.rest(s__58314__$2)));
}
} else {
return null;
}
break;
}
});})(i__58258,map__58311,map__58311__$1,block,uid__$1,parents,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58258,map__58311,map__58311__$1,block,uid__$1,parents,s__58298__$2,temp__5735__auto____$2,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263_$_iter__58297(cljs.core.rest(s__58298__$2)));
}
} else {
return null;
}
break;
}
});})(i__58258,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58258,vec__58294,group_title,group,s__58264__$2,temp__5735__auto____$1,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58263(cljs.core.rest(s__58264__$2)));
}
} else {
return null;
}
break;
}
});})(i__58258,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58258,vec__58260,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58259,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58393 = (i__58258 + (1));
i__58258 = G__58393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58259),athens$views$node_page$node_page_el_$_iter__58256(cljs.core.chunk_rest(s__58257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58259),null);
}
} else {
var vec__58321 = cljs.core.first(s__58257__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58321,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58321,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324(s__58325){
return (new cljs.core.LazySeq(null,(function (){
var s__58325__$1 = s__58325;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58325__$1);
if(temp__5735__auto____$1){
var s__58325__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58325__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58325__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58327 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58326 = (0);
while(true){
if((i__58326 < size__4581__auto__)){
var vec__58328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58326);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58328,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58328,(1),null);
cljs.core.chunk_append(b__58327,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58326,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58326,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58326,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331(s__58332){
return (new cljs.core.LazySeq(null,((function (i__58326,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58332__$1 = s__58332;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58332__$1);
if(temp__5735__auto____$2){
var s__58332__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58332__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58332__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58334 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58333 = (0);
while(true){
if((i__58333 < size__4581__auto____$1)){
var map__58335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58333);
var map__58335__$1 = (((((!((map__58335 == null))))?(((((map__58335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58335):map__58335);
var block = map__58335__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58334,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58333,i__58326,map__58335,map__58335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331_$_iter__58337(s__58338){
return (new cljs.core.LazySeq(null,((function (i__58333,i__58326,map__58335,map__58335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58338__$1 = s__58338;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58338__$1);
if(temp__5735__auto____$3){
var s__58338__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58338__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58338__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58340 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58339 = (0);
while(true){
if((i__58339 < size__4581__auto____$2)){
var map__58341 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58339);
var map__58341__$1 = (((((!((map__58341 == null))))?(((((map__58341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58341):map__58341);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58341__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58341__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58341__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58340,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58339,i__58333,i__58326,map__58341,map__58341__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58340,s__58338__$2,temp__5735__auto____$3,map__58335,map__58335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58339,i__58333,i__58326,map__58341,map__58341__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58340,s__58338__$2,temp__5735__auto____$3,map__58335,map__58335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58394 = (i__58339 + (1));
i__58339 = G__58394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58340),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331_$_iter__58337(cljs.core.chunk_rest(s__58338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58340),null);
}
} else {
var map__58343 = cljs.core.first(s__58338__$2);
var map__58343__$1 = (((((!((map__58343 == null))))?(((((map__58343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58343):map__58343);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58333,i__58326,map__58343,map__58343__$1,title__$1,string,uid__$2,s__58338__$2,temp__5735__auto____$3,map__58335,map__58335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58333,i__58326,map__58343,map__58343__$1,title__$1,string,uid__$2,s__58338__$2,temp__5735__auto____$3,map__58335,map__58335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331_$_iter__58337(cljs.core.rest(s__58338__$2)));
}
} else {
return null;
}
break;
}
});})(i__58333,i__58326,map__58335,map__58335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58333,i__58326,map__58335,map__58335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58395 = (i__58333 + (1));
i__58333 = G__58395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58334),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331(cljs.core.chunk_rest(s__58332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58334),null);
}
} else {
var map__58345 = cljs.core.first(s__58332__$2);
var map__58345__$1 = (((((!((map__58345 == null))))?(((((map__58345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58345):map__58345);
var block = map__58345__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58326,map__58345,map__58345__$1,block,uid__$1,parents,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331_$_iter__58347(s__58348){
return (new cljs.core.LazySeq(null,((function (i__58326,map__58345,map__58345__$1,block,uid__$1,parents,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58348__$1 = s__58348;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58348__$1);
if(temp__5735__auto____$3){
var s__58348__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58348__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58348__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58350 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58349 = (0);
while(true){
if((i__58349 < size__4581__auto____$1)){
var map__58351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58349);
var map__58351__$1 = (((((!((map__58351 == null))))?(((((map__58351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58351):map__58351);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58351__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58351__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58351__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58350,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58349,i__58326,map__58351,map__58351__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58350,s__58348__$2,temp__5735__auto____$3,map__58345,map__58345__$1,block,uid__$1,parents,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58349,i__58326,map__58351,map__58351__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58350,s__58348__$2,temp__5735__auto____$3,map__58345,map__58345__$1,block,uid__$1,parents,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58396 = (i__58349 + (1));
i__58349 = G__58396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58350),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331_$_iter__58347(cljs.core.chunk_rest(s__58348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58350),null);
}
} else {
var map__58353 = cljs.core.first(s__58348__$2);
var map__58353__$1 = (((((!((map__58353 == null))))?(((((map__58353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58353):map__58353);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58326,map__58353,map__58353__$1,title__$1,string,uid__$2,s__58348__$2,temp__5735__auto____$3,map__58345,map__58345__$1,block,uid__$1,parents,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58326,map__58353,map__58353__$1,title__$1,string,uid__$2,s__58348__$2,temp__5735__auto____$3,map__58345,map__58345__$1,block,uid__$1,parents,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331_$_iter__58347(cljs.core.rest(s__58348__$2)));
}
} else {
return null;
}
break;
}
});})(i__58326,map__58345,map__58345__$1,block,uid__$1,parents,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58326,map__58345,map__58345__$1,block,uid__$1,parents,s__58332__$2,temp__5735__auto____$2,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58331(cljs.core.rest(s__58332__$2)));
}
} else {
return null;
}
break;
}
});})(i__58326,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58326,vec__58328,group_title,group,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58397 = (i__58326 + (1));
i__58326 = G__58397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58327),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324(cljs.core.chunk_rest(s__58325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58327),null);
}
} else {
var vec__58355 = cljs.core.first(s__58325__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58355,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58355,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358(s__58359){
return (new cljs.core.LazySeq(null,(function (){
var s__58359__$1 = s__58359;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58359__$1);
if(temp__5735__auto____$2){
var s__58359__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58359__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58359__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58361 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58360 = (0);
while(true){
if((i__58360 < size__4581__auto__)){
var map__58362 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58360);
var map__58362__$1 = (((((!((map__58362 == null))))?(((((map__58362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58362):map__58362);
var block = map__58362__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58361,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58360,map__58362,map__58362__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58361,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358_$_iter__58364(s__58365){
return (new cljs.core.LazySeq(null,((function (i__58360,map__58362,map__58362__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58361,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
var s__58365__$1 = s__58365;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58365__$1);
if(temp__5735__auto____$3){
var s__58365__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58365__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58365__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58367 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58366 = (0);
while(true){
if((i__58366 < size__4581__auto____$1)){
var map__58368 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58366);
var map__58368__$1 = (((((!((map__58368 == null))))?(((((map__58368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58368):map__58368);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58368__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58368__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58368__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58367,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58366,i__58360,map__58368,map__58368__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58367,s__58365__$2,temp__5735__auto____$3,map__58362,map__58362__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58361,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58366,i__58360,map__58368,map__58368__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58367,s__58365__$2,temp__5735__auto____$3,map__58362,map__58362__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58361,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58398 = (i__58366 + (1));
i__58366 = G__58398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58367),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358_$_iter__58364(cljs.core.chunk_rest(s__58365__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58367),null);
}
} else {
var map__58370 = cljs.core.first(s__58365__$2);
var map__58370__$1 = (((((!((map__58370 == null))))?(((((map__58370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58370):map__58370);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58360,map__58370,map__58370__$1,title__$1,string,uid__$2,s__58365__$2,temp__5735__auto____$3,map__58362,map__58362__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58361,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58360,map__58370,map__58370__$1,title__$1,string,uid__$2,s__58365__$2,temp__5735__auto____$3,map__58362,map__58362__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58361,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358_$_iter__58364(cljs.core.rest(s__58365__$2)));
}
} else {
return null;
}
break;
}
});})(i__58360,map__58362,map__58362__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58361,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
,null,null));
});})(i__58360,map__58362,map__58362__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58361,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58399 = (i__58360 + (1));
i__58360 = G__58399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58361),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358(cljs.core.chunk_rest(s__58359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58361),null);
}
} else {
var map__58372 = cljs.core.first(s__58359__$2);
var map__58372__$1 = (((((!((map__58372 == null))))?(((((map__58372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58372):map__58372);
var block = map__58372__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58372__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58372__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58372,map__58372__$1,block,uid__$1,parents,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358_$_iter__58374(s__58375){
return (new cljs.core.LazySeq(null,(function (){
var s__58375__$1 = s__58375;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58375__$1);
if(temp__5735__auto____$3){
var s__58375__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58375__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58375__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58377 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58376 = (0);
while(true){
if((i__58376 < size__4581__auto__)){
var map__58378 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58376);
var map__58378__$1 = (((((!((map__58378 == null))))?(((((map__58378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58378):map__58378);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58378__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58378__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58378__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58377,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58376,map__58378,map__58378__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58377,s__58375__$2,temp__5735__auto____$3,map__58372,map__58372__$1,block,uid__$1,parents,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58376,map__58378,map__58378__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58377,s__58375__$2,temp__5735__auto____$3,map__58372,map__58372__$1,block,uid__$1,parents,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58400 = (i__58376 + (1));
i__58376 = G__58400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58377),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358_$_iter__58374(cljs.core.chunk_rest(s__58375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58377),null);
}
} else {
var map__58380 = cljs.core.first(s__58375__$2);
var map__58380__$1 = (((((!((map__58380 == null))))?(((((map__58380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58380):map__58380);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58380__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58380__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58380__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58380,map__58380__$1,title__$1,string,uid__$2,s__58375__$2,temp__5735__auto____$3,map__58372,map__58372__$1,block,uid__$1,parents,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58380,map__58380__$1,title__$1,string,uid__$2,s__58375__$2,temp__5735__auto____$3,map__58372,map__58372__$1,block,uid__$1,parents,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358_$_iter__58374(cljs.core.rest(s__58375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58372,map__58372__$1,block,uid__$1,parents,s__58359__$2,temp__5735__auto____$2,vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324_$_iter__58358(cljs.core.rest(s__58359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58355,group_title,group,s__58325__$2,temp__5735__auto____$1,vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58256_$_iter__58324(cljs.core.rest(s__58325__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58321,linked_or_unlinked,refs,s__58257__$2,temp__5735__auto__,map__58244,map__58244__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58256(cljs.core.rest(s__58257__$2)));
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
var map__58382 = athens.db.get_node_document(ident);
var map__58382__$1 = (((((!((map__58382 == null))))?(((((map__58382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58382):map__58382);
var node = map__58382__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58384) : re_frame.core.subscribe.call(null,G__58384));
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
