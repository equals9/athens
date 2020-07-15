goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
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
var G__58567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58567) : re_frame.core.dispatch.call(null,G__58567));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58568 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58569 = athens.db.dsdb;
var G__58570 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58568,G__58569,G__58570) : posh.reagent.q.call(null,G__58568,G__58569,G__58570));
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
return cljs.core.boolean$((function (){try{var vec__58572 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58572,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58572,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58572,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58571){if((e58571 instanceof Object)){
var _ = e58571;
return false;
} else {
throw e58571;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58575,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58576 = p__58575;
var map__58576__$1 = (((((!((map__58576 == null))))?(((((map__58576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58576):map__58576);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58578 = e.target.value;
var G__58579 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58578,G__58579) : athens.views.node_page.db_handler.call(null,G__58578,G__58579));
})], null)], null)),athens.parse_renderer.parse_and_render(title)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58580(s__58581){
return (new cljs.core.LazySeq(null,(function (){
var s__58581__$1 = s__58581;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58581__$1);
if(temp__5735__auto__){
var s__58581__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58581__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58581__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58583 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58582 = (0);
while(true){
if((i__58582 < size__4581__auto__)){
var map__58584 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58582);
var map__58584__$1 = (((((!((map__58584 == null))))?(((((map__58584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58584):map__58584);
var child = map__58584__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58583,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58717 = (i__58582 + (1));
i__58582 = G__58717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58583),athens$views$node_page$node_page_el_$_iter__58580(cljs.core.chunk_rest(s__58581__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58583),null);
}
} else {
var map__58586 = cljs.core.first(s__58581__$2);
var map__58586__$1 = (((((!((map__58586 == null))))?(((((map__58586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58586):map__58586);
var child = map__58586__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58580(cljs.core.rest(s__58581__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58588(s__58589){
return (new cljs.core.LazySeq(null,(function (){
var s__58589__$1 = s__58589;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58589__$1);
if(temp__5735__auto__){
var s__58589__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58589__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58589__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58591 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58590 = (0);
while(true){
if((i__58590 < size__4581__auto__)){
var vec__58592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58590);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58592,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58592,(1),null);
cljs.core.chunk_append(b__58591,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58590,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595(s__58596){
return (new cljs.core.LazySeq(null,((function (i__58590,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58596__$1 = s__58596;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58596__$1);
if(temp__5735__auto____$1){
var s__58596__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58596__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58596__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58598 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58597 = (0);
while(true){
if((i__58597 < size__4581__auto____$1)){
var vec__58599 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58597);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58599,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58599,(1),null);
cljs.core.chunk_append(b__58598,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58597,i__58590,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58597,i__58590,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58597,i__58590,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602(s__58603){
return (new cljs.core.LazySeq(null,((function (i__58597,i__58590,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58603__$1 = s__58603;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58603__$1);
if(temp__5735__auto____$2){
var s__58603__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58603__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58603__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58605 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58604 = (0);
while(true){
if((i__58604 < size__4581__auto____$2)){
var map__58606 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58604);
var map__58606__$1 = (((((!((map__58606 == null))))?(((((map__58606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58606):map__58606);
var block = map__58606__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58605,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58604,i__58597,i__58590,map__58606,map__58606__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602_$_iter__58608(s__58609){
return (new cljs.core.LazySeq(null,((function (i__58604,i__58597,i__58590,map__58606,map__58606__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58609__$1 = s__58609;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58609__$1);
if(temp__5735__auto____$3){
var s__58609__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58609__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58609__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58611 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58610 = (0);
while(true){
if((i__58610 < size__4581__auto____$3)){
var map__58612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58610);
var map__58612__$1 = (((((!((map__58612 == null))))?(((((map__58612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58612):map__58612);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58611,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58610,i__58604,i__58597,i__58590,map__58612,map__58612__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58611,s__58609__$2,temp__5735__auto____$3,map__58606,map__58606__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58610,i__58604,i__58597,i__58590,map__58612,map__58612__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58611,s__58609__$2,temp__5735__auto____$3,map__58606,map__58606__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58718 = (i__58610 + (1));
i__58610 = G__58718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58611),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602_$_iter__58608(cljs.core.chunk_rest(s__58609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58611),null);
}
} else {
var map__58614 = cljs.core.first(s__58609__$2);
var map__58614__$1 = (((((!((map__58614 == null))))?(((((map__58614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58614):map__58614);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58604,i__58597,i__58590,map__58614,map__58614__$1,title__$1,string,uid__$2,s__58609__$2,temp__5735__auto____$3,map__58606,map__58606__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58604,i__58597,i__58590,map__58614,map__58614__$1,title__$1,string,uid__$2,s__58609__$2,temp__5735__auto____$3,map__58606,map__58606__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602_$_iter__58608(cljs.core.rest(s__58609__$2)));
}
} else {
return null;
}
break;
}
});})(i__58604,i__58597,i__58590,map__58606,map__58606__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58604,i__58597,i__58590,map__58606,map__58606__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58719 = (i__58604 + (1));
i__58604 = G__58719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58605),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602(cljs.core.chunk_rest(s__58603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58605),null);
}
} else {
var map__58616 = cljs.core.first(s__58603__$2);
var map__58616__$1 = (((((!((map__58616 == null))))?(((((map__58616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58616):map__58616);
var block = map__58616__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58597,i__58590,map__58616,map__58616__$1,block,uid__$1,parents,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602_$_iter__58618(s__58619){
return (new cljs.core.LazySeq(null,((function (i__58597,i__58590,map__58616,map__58616__$1,block,uid__$1,parents,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58619__$1 = s__58619;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58619__$1);
if(temp__5735__auto____$3){
var s__58619__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58619__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58619__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58621 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58620 = (0);
while(true){
if((i__58620 < size__4581__auto____$2)){
var map__58622 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58620);
var map__58622__$1 = (((((!((map__58622 == null))))?(((((map__58622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58622):map__58622);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58621,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58620,i__58597,i__58590,map__58622,map__58622__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58621,s__58619__$2,temp__5735__auto____$3,map__58616,map__58616__$1,block,uid__$1,parents,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58620,i__58597,i__58590,map__58622,map__58622__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58621,s__58619__$2,temp__5735__auto____$3,map__58616,map__58616__$1,block,uid__$1,parents,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58720 = (i__58620 + (1));
i__58620 = G__58720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58621),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602_$_iter__58618(cljs.core.chunk_rest(s__58619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58621),null);
}
} else {
var map__58624 = cljs.core.first(s__58619__$2);
var map__58624__$1 = (((((!((map__58624 == null))))?(((((map__58624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58624):map__58624);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58597,i__58590,map__58624,map__58624__$1,title__$1,string,uid__$2,s__58619__$2,temp__5735__auto____$3,map__58616,map__58616__$1,block,uid__$1,parents,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58597,i__58590,map__58624,map__58624__$1,title__$1,string,uid__$2,s__58619__$2,temp__5735__auto____$3,map__58616,map__58616__$1,block,uid__$1,parents,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602_$_iter__58618(cljs.core.rest(s__58619__$2)));
}
} else {
return null;
}
break;
}
});})(i__58597,i__58590,map__58616,map__58616__$1,block,uid__$1,parents,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58597,i__58590,map__58616,map__58616__$1,block,uid__$1,parents,s__58603__$2,temp__5735__auto____$2,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58602(cljs.core.rest(s__58603__$2)));
}
} else {
return null;
}
break;
}
});})(i__58597,i__58590,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58597,i__58590,vec__58599,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58598,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58721 = (i__58597 + (1));
i__58597 = G__58721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58598),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595(cljs.core.chunk_rest(s__58596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58598),null);
}
} else {
var vec__58626 = cljs.core.first(s__58596__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58626,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58626,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58590,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58590,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58590,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629(s__58630){
return (new cljs.core.LazySeq(null,((function (i__58590,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58630__$1 = s__58630;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58630__$1);
if(temp__5735__auto____$2){
var s__58630__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58630__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58630__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58632 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58631 = (0);
while(true){
if((i__58631 < size__4581__auto____$1)){
var map__58633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58631);
var map__58633__$1 = (((((!((map__58633 == null))))?(((((map__58633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58633):map__58633);
var block = map__58633__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58632,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58631,i__58590,map__58633,map__58633__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629_$_iter__58635(s__58636){
return (new cljs.core.LazySeq(null,((function (i__58631,i__58590,map__58633,map__58633__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58636__$1 = s__58636;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58636__$1);
if(temp__5735__auto____$3){
var s__58636__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58636__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58636__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58638 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58637 = (0);
while(true){
if((i__58637 < size__4581__auto____$2)){
var map__58639 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58637);
var map__58639__$1 = (((((!((map__58639 == null))))?(((((map__58639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58639):map__58639);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58638,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58637,i__58631,i__58590,map__58639,map__58639__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58638,s__58636__$2,temp__5735__auto____$3,map__58633,map__58633__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58637,i__58631,i__58590,map__58639,map__58639__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58638,s__58636__$2,temp__5735__auto____$3,map__58633,map__58633__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58722 = (i__58637 + (1));
i__58637 = G__58722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58638),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629_$_iter__58635(cljs.core.chunk_rest(s__58636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58638),null);
}
} else {
var map__58641 = cljs.core.first(s__58636__$2);
var map__58641__$1 = (((((!((map__58641 == null))))?(((((map__58641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58641):map__58641);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58631,i__58590,map__58641,map__58641__$1,title__$1,string,uid__$2,s__58636__$2,temp__5735__auto____$3,map__58633,map__58633__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58631,i__58590,map__58641,map__58641__$1,title__$1,string,uid__$2,s__58636__$2,temp__5735__auto____$3,map__58633,map__58633__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629_$_iter__58635(cljs.core.rest(s__58636__$2)));
}
} else {
return null;
}
break;
}
});})(i__58631,i__58590,map__58633,map__58633__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58631,i__58590,map__58633,map__58633__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58723 = (i__58631 + (1));
i__58631 = G__58723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58632),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629(cljs.core.chunk_rest(s__58630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58632),null);
}
} else {
var map__58643 = cljs.core.first(s__58630__$2);
var map__58643__$1 = (((((!((map__58643 == null))))?(((((map__58643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58643):map__58643);
var block = map__58643__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58590,map__58643,map__58643__$1,block,uid__$1,parents,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629_$_iter__58645(s__58646){
return (new cljs.core.LazySeq(null,((function (i__58590,map__58643,map__58643__$1,block,uid__$1,parents,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58646__$1 = s__58646;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58646__$1);
if(temp__5735__auto____$3){
var s__58646__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58646__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58646__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58648 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58647 = (0);
while(true){
if((i__58647 < size__4581__auto____$1)){
var map__58649 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58647);
var map__58649__$1 = (((((!((map__58649 == null))))?(((((map__58649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58649):map__58649);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58648,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58647,i__58590,map__58649,map__58649__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58648,s__58646__$2,temp__5735__auto____$3,map__58643,map__58643__$1,block,uid__$1,parents,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58647,i__58590,map__58649,map__58649__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58648,s__58646__$2,temp__5735__auto____$3,map__58643,map__58643__$1,block,uid__$1,parents,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58724 = (i__58647 + (1));
i__58647 = G__58724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58648),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629_$_iter__58645(cljs.core.chunk_rest(s__58646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58648),null);
}
} else {
var map__58651 = cljs.core.first(s__58646__$2);
var map__58651__$1 = (((((!((map__58651 == null))))?(((((map__58651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58651):map__58651);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58590,map__58651,map__58651__$1,title__$1,string,uid__$2,s__58646__$2,temp__5735__auto____$3,map__58643,map__58643__$1,block,uid__$1,parents,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58590,map__58651,map__58651__$1,title__$1,string,uid__$2,s__58646__$2,temp__5735__auto____$3,map__58643,map__58643__$1,block,uid__$1,parents,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629_$_iter__58645(cljs.core.rest(s__58646__$2)));
}
} else {
return null;
}
break;
}
});})(i__58590,map__58643,map__58643__$1,block,uid__$1,parents,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58590,map__58643,map__58643__$1,block,uid__$1,parents,s__58630__$2,temp__5735__auto____$2,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595_$_iter__58629(cljs.core.rest(s__58630__$2)));
}
} else {
return null;
}
break;
}
});})(i__58590,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58590,vec__58626,group_title,group,s__58596__$2,temp__5735__auto____$1,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58595(cljs.core.rest(s__58596__$2)));
}
} else {
return null;
}
break;
}
});})(i__58590,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58590,vec__58592,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58591,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58725 = (i__58590 + (1));
i__58590 = G__58725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58591),athens$views$node_page$node_page_el_$_iter__58588(cljs.core.chunk_rest(s__58589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58591),null);
}
} else {
var vec__58653 = cljs.core.first(s__58589__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58653,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58653,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656(s__58657){
return (new cljs.core.LazySeq(null,(function (){
var s__58657__$1 = s__58657;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58657__$1);
if(temp__5735__auto____$1){
var s__58657__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58657__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58657__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58659 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58658 = (0);
while(true){
if((i__58658 < size__4581__auto__)){
var vec__58660 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58658);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58660,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58660,(1),null);
cljs.core.chunk_append(b__58659,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58658,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58658,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58658,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663(s__58664){
return (new cljs.core.LazySeq(null,((function (i__58658,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58664__$1 = s__58664;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58664__$1);
if(temp__5735__auto____$2){
var s__58664__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58664__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58664__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58666 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58665 = (0);
while(true){
if((i__58665 < size__4581__auto____$1)){
var map__58667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58665);
var map__58667__$1 = (((((!((map__58667 == null))))?(((((map__58667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58667):map__58667);
var block = map__58667__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58667__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58667__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58666,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58665,i__58658,map__58667,map__58667__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663_$_iter__58669(s__58670){
return (new cljs.core.LazySeq(null,((function (i__58665,i__58658,map__58667,map__58667__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58670__$1 = s__58670;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58670__$1);
if(temp__5735__auto____$3){
var s__58670__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58670__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58670__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58672 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58671 = (0);
while(true){
if((i__58671 < size__4581__auto____$2)){
var map__58673 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58671);
var map__58673__$1 = (((((!((map__58673 == null))))?(((((map__58673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58673):map__58673);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58673__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58673__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58673__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58672,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58671,i__58665,i__58658,map__58673,map__58673__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58672,s__58670__$2,temp__5735__auto____$3,map__58667,map__58667__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58671,i__58665,i__58658,map__58673,map__58673__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58672,s__58670__$2,temp__5735__auto____$3,map__58667,map__58667__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58726 = (i__58671 + (1));
i__58671 = G__58726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58672),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663_$_iter__58669(cljs.core.chunk_rest(s__58670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58672),null);
}
} else {
var map__58675 = cljs.core.first(s__58670__$2);
var map__58675__$1 = (((((!((map__58675 == null))))?(((((map__58675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58675):map__58675);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58665,i__58658,map__58675,map__58675__$1,title__$1,string,uid__$2,s__58670__$2,temp__5735__auto____$3,map__58667,map__58667__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58665,i__58658,map__58675,map__58675__$1,title__$1,string,uid__$2,s__58670__$2,temp__5735__auto____$3,map__58667,map__58667__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663_$_iter__58669(cljs.core.rest(s__58670__$2)));
}
} else {
return null;
}
break;
}
});})(i__58665,i__58658,map__58667,map__58667__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58665,i__58658,map__58667,map__58667__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58727 = (i__58665 + (1));
i__58665 = G__58727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58666),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663(cljs.core.chunk_rest(s__58664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58666),null);
}
} else {
var map__58677 = cljs.core.first(s__58664__$2);
var map__58677__$1 = (((((!((map__58677 == null))))?(((((map__58677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58677):map__58677);
var block = map__58677__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58658,map__58677,map__58677__$1,block,uid__$1,parents,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663_$_iter__58679(s__58680){
return (new cljs.core.LazySeq(null,((function (i__58658,map__58677,map__58677__$1,block,uid__$1,parents,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58680__$1 = s__58680;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58680__$1);
if(temp__5735__auto____$3){
var s__58680__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58680__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58680__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58682 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58681 = (0);
while(true){
if((i__58681 < size__4581__auto____$1)){
var map__58683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58681);
var map__58683__$1 = (((((!((map__58683 == null))))?(((((map__58683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58683):map__58683);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58682,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58681,i__58658,map__58683,map__58683__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58682,s__58680__$2,temp__5735__auto____$3,map__58677,map__58677__$1,block,uid__$1,parents,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58681,i__58658,map__58683,map__58683__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58682,s__58680__$2,temp__5735__auto____$3,map__58677,map__58677__$1,block,uid__$1,parents,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58728 = (i__58681 + (1));
i__58681 = G__58728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58682),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663_$_iter__58679(cljs.core.chunk_rest(s__58680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58682),null);
}
} else {
var map__58685 = cljs.core.first(s__58680__$2);
var map__58685__$1 = (((((!((map__58685 == null))))?(((((map__58685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58685):map__58685);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58658,map__58685,map__58685__$1,title__$1,string,uid__$2,s__58680__$2,temp__5735__auto____$3,map__58677,map__58677__$1,block,uid__$1,parents,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58658,map__58685,map__58685__$1,title__$1,string,uid__$2,s__58680__$2,temp__5735__auto____$3,map__58677,map__58677__$1,block,uid__$1,parents,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663_$_iter__58679(cljs.core.rest(s__58680__$2)));
}
} else {
return null;
}
break;
}
});})(i__58658,map__58677,map__58677__$1,block,uid__$1,parents,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58658,map__58677,map__58677__$1,block,uid__$1,parents,s__58664__$2,temp__5735__auto____$2,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58663(cljs.core.rest(s__58664__$2)));
}
} else {
return null;
}
break;
}
});})(i__58658,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58658,vec__58660,group_title,group,c__4580__auto__,size__4581__auto__,b__58659,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58729 = (i__58658 + (1));
i__58658 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58659),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656(cljs.core.chunk_rest(s__58657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58659),null);
}
} else {
var vec__58687 = cljs.core.first(s__58657__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58687,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58687,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690(s__58691){
return (new cljs.core.LazySeq(null,(function (){
var s__58691__$1 = s__58691;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58691__$1);
if(temp__5735__auto____$2){
var s__58691__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58691__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58691__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58693 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58692 = (0);
while(true){
if((i__58692 < size__4581__auto__)){
var map__58694 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58692);
var map__58694__$1 = (((((!((map__58694 == null))))?(((((map__58694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58694):map__58694);
var block = map__58694__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58693,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58692,map__58694,map__58694__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690_$_iter__58696(s__58697){
return (new cljs.core.LazySeq(null,((function (i__58692,map__58694,map__58694__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
var s__58697__$1 = s__58697;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58697__$1);
if(temp__5735__auto____$3){
var s__58697__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58697__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58697__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58699 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58698 = (0);
while(true){
if((i__58698 < size__4581__auto____$1)){
var map__58700 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58698);
var map__58700__$1 = (((((!((map__58700 == null))))?(((((map__58700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58700):map__58700);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58699,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58698,i__58692,map__58700,map__58700__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58699,s__58697__$2,temp__5735__auto____$3,map__58694,map__58694__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58698,i__58692,map__58700,map__58700__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58699,s__58697__$2,temp__5735__auto____$3,map__58694,map__58694__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58730 = (i__58698 + (1));
i__58698 = G__58730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58699),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690_$_iter__58696(cljs.core.chunk_rest(s__58697__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58699),null);
}
} else {
var map__58702 = cljs.core.first(s__58697__$2);
var map__58702__$1 = (((((!((map__58702 == null))))?(((((map__58702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58702):map__58702);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58692,map__58702,map__58702__$1,title__$1,string,uid__$2,s__58697__$2,temp__5735__auto____$3,map__58694,map__58694__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58692,map__58702,map__58702__$1,title__$1,string,uid__$2,s__58697__$2,temp__5735__auto____$3,map__58694,map__58694__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690_$_iter__58696(cljs.core.rest(s__58697__$2)));
}
} else {
return null;
}
break;
}
});})(i__58692,map__58694,map__58694__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
,null,null));
});})(i__58692,map__58694,map__58694__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58731 = (i__58692 + (1));
i__58692 = G__58731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58693),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690(cljs.core.chunk_rest(s__58691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58693),null);
}
} else {
var map__58704 = cljs.core.first(s__58691__$2);
var map__58704__$1 = (((((!((map__58704 == null))))?(((((map__58704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58704):map__58704);
var block = map__58704__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58704,map__58704__$1,block,uid__$1,parents,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690_$_iter__58706(s__58707){
return (new cljs.core.LazySeq(null,(function (){
var s__58707__$1 = s__58707;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58707__$1);
if(temp__5735__auto____$3){
var s__58707__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58707__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58707__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58709 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58708 = (0);
while(true){
if((i__58708 < size__4581__auto__)){
var map__58710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58708);
var map__58710__$1 = (((((!((map__58710 == null))))?(((((map__58710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58710):map__58710);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58709,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58708,map__58710,map__58710__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58709,s__58707__$2,temp__5735__auto____$3,map__58704,map__58704__$1,block,uid__$1,parents,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58708,map__58710,map__58710__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58709,s__58707__$2,temp__5735__auto____$3,map__58704,map__58704__$1,block,uid__$1,parents,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58732 = (i__58708 + (1));
i__58708 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58709),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690_$_iter__58706(cljs.core.chunk_rest(s__58707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58709),null);
}
} else {
var map__58712 = cljs.core.first(s__58707__$2);
var map__58712__$1 = (((((!((map__58712 == null))))?(((((map__58712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58712):map__58712);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58712,map__58712__$1,title__$1,string,uid__$2,s__58707__$2,temp__5735__auto____$3,map__58704,map__58704__$1,block,uid__$1,parents,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58712,map__58712__$1,title__$1,string,uid__$2,s__58707__$2,temp__5735__auto____$3,map__58704,map__58704__$1,block,uid__$1,parents,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690_$_iter__58706(cljs.core.rest(s__58707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58704,map__58704__$1,block,uid__$1,parents,s__58691__$2,temp__5735__auto____$2,vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656_$_iter__58690(cljs.core.rest(s__58691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58687,group_title,group,s__58657__$2,temp__5735__auto____$1,vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58588_$_iter__58656(cljs.core.rest(s__58657__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58653,linked_or_unlinked,refs,s__58589__$2,temp__5735__auto__,map__58576,map__58576__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58588(cljs.core.rest(s__58589__$2)));
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
var map__58714 = athens.db.get_node_document(ident);
var map__58714__$1 = (((((!((map__58714 == null))))?(((((map__58714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58714):map__58714);
var node = map__58714__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58716) : re_frame.core.subscribe.call(null,G__58716));
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
