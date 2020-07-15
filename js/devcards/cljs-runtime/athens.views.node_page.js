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
var G__58539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58539) : re_frame.core.dispatch.call(null,G__58539));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58540 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58541 = athens.db.dsdb;
var G__58542 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58540,G__58541,G__58542) : posh.reagent.q.call(null,G__58540,G__58541,G__58542));
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
return cljs.core.boolean$((function (){try{var vec__58544 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58544,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58544,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58544,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58543){if((e58543 instanceof Object)){
var _ = e58543;
return false;
} else {
throw e58543;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58547,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58548 = p__58547;
var map__58548__$1 = (((((!((map__58548 == null))))?(((((map__58548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58548):map__58548);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58550 = e.target.value;
var G__58551 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58550,G__58551) : athens.views.node_page.db_handler.call(null,G__58550,G__58551));
})], null)], null)),athens.parse_renderer.parse_and_render(title)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58552(s__58553){
return (new cljs.core.LazySeq(null,(function (){
var s__58553__$1 = s__58553;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58553__$1);
if(temp__5735__auto__){
var s__58553__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58553__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58553__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58555 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58554 = (0);
while(true){
if((i__58554 < size__4581__auto__)){
var map__58556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58554);
var map__58556__$1 = (((((!((map__58556 == null))))?(((((map__58556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58556):map__58556);
var child = map__58556__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58555,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58689 = (i__58554 + (1));
i__58554 = G__58689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58555),athens$views$node_page$node_page_el_$_iter__58552(cljs.core.chunk_rest(s__58553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58555),null);
}
} else {
var map__58558 = cljs.core.first(s__58553__$2);
var map__58558__$1 = (((((!((map__58558 == null))))?(((((map__58558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58558):map__58558);
var child = map__58558__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58552(cljs.core.rest(s__58553__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58560(s__58561){
return (new cljs.core.LazySeq(null,(function (){
var s__58561__$1 = s__58561;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58561__$1);
if(temp__5735__auto__){
var s__58561__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58561__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58561__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58563 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58562 = (0);
while(true){
if((i__58562 < size__4581__auto__)){
var vec__58564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58562);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58564,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58564,(1),null);
cljs.core.chunk_append(b__58563,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58562,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567(s__58568){
return (new cljs.core.LazySeq(null,((function (i__58562,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58568__$1 = s__58568;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58568__$1);
if(temp__5735__auto____$1){
var s__58568__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58568__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58568__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58570 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58569 = (0);
while(true){
if((i__58569 < size__4581__auto____$1)){
var vec__58571 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58569);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58571,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58571,(1),null);
cljs.core.chunk_append(b__58570,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58569,i__58562,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58569,i__58562,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58569,i__58562,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574(s__58575){
return (new cljs.core.LazySeq(null,((function (i__58569,i__58562,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58575__$1 = s__58575;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58575__$1);
if(temp__5735__auto____$2){
var s__58575__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58575__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58575__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58577 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58576 = (0);
while(true){
if((i__58576 < size__4581__auto____$2)){
var map__58578 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58576);
var map__58578__$1 = (((((!((map__58578 == null))))?(((((map__58578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58578):map__58578);
var block = map__58578__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58578__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58578__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58577,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58576,i__58569,i__58562,map__58578,map__58578__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58577,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574_$_iter__58580(s__58581){
return (new cljs.core.LazySeq(null,((function (i__58576,i__58569,i__58562,map__58578,map__58578__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58577,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58581__$1 = s__58581;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58581__$1);
if(temp__5735__auto____$3){
var s__58581__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58581__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58581__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58583 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58582 = (0);
while(true){
if((i__58582 < size__4581__auto____$3)){
var map__58584 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58582);
var map__58584__$1 = (((((!((map__58584 == null))))?(((((map__58584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58584):map__58584);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58583,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58582,i__58576,i__58569,i__58562,map__58584,map__58584__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58583,s__58581__$2,temp__5735__auto____$3,map__58578,map__58578__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58577,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58582,i__58576,i__58569,i__58562,map__58584,map__58584__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58583,s__58581__$2,temp__5735__auto____$3,map__58578,map__58578__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58577,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58690 = (i__58582 + (1));
i__58582 = G__58690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58583),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574_$_iter__58580(cljs.core.chunk_rest(s__58581__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58583),null);
}
} else {
var map__58586 = cljs.core.first(s__58581__$2);
var map__58586__$1 = (((((!((map__58586 == null))))?(((((map__58586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58586):map__58586);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58576,i__58569,i__58562,map__58586,map__58586__$1,title__$1,string,uid__$2,s__58581__$2,temp__5735__auto____$3,map__58578,map__58578__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58577,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58576,i__58569,i__58562,map__58586,map__58586__$1,title__$1,string,uid__$2,s__58581__$2,temp__5735__auto____$3,map__58578,map__58578__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58577,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574_$_iter__58580(cljs.core.rest(s__58581__$2)));
}
} else {
return null;
}
break;
}
});})(i__58576,i__58569,i__58562,map__58578,map__58578__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58577,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58576,i__58569,i__58562,map__58578,map__58578__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58577,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58691 = (i__58576 + (1));
i__58576 = G__58691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58577),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574(cljs.core.chunk_rest(s__58575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58577),null);
}
} else {
var map__58588 = cljs.core.first(s__58575__$2);
var map__58588__$1 = (((((!((map__58588 == null))))?(((((map__58588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58588):map__58588);
var block = map__58588__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58569,i__58562,map__58588,map__58588__$1,block,uid__$1,parents,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574_$_iter__58590(s__58591){
return (new cljs.core.LazySeq(null,((function (i__58569,i__58562,map__58588,map__58588__$1,block,uid__$1,parents,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58591__$1 = s__58591;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58591__$1);
if(temp__5735__auto____$3){
var s__58591__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58591__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58591__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58593 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58592 = (0);
while(true){
if((i__58592 < size__4581__auto____$2)){
var map__58594 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58592);
var map__58594__$1 = (((((!((map__58594 == null))))?(((((map__58594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58594):map__58594);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58593,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58592,i__58569,i__58562,map__58594,map__58594__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58593,s__58591__$2,temp__5735__auto____$3,map__58588,map__58588__$1,block,uid__$1,parents,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58592,i__58569,i__58562,map__58594,map__58594__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58593,s__58591__$2,temp__5735__auto____$3,map__58588,map__58588__$1,block,uid__$1,parents,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58692 = (i__58592 + (1));
i__58592 = G__58692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58593),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574_$_iter__58590(cljs.core.chunk_rest(s__58591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58593),null);
}
} else {
var map__58596 = cljs.core.first(s__58591__$2);
var map__58596__$1 = (((((!((map__58596 == null))))?(((((map__58596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58596):map__58596);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58569,i__58562,map__58596,map__58596__$1,title__$1,string,uid__$2,s__58591__$2,temp__5735__auto____$3,map__58588,map__58588__$1,block,uid__$1,parents,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58569,i__58562,map__58596,map__58596__$1,title__$1,string,uid__$2,s__58591__$2,temp__5735__auto____$3,map__58588,map__58588__$1,block,uid__$1,parents,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574_$_iter__58590(cljs.core.rest(s__58591__$2)));
}
} else {
return null;
}
break;
}
});})(i__58569,i__58562,map__58588,map__58588__$1,block,uid__$1,parents,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58569,i__58562,map__58588,map__58588__$1,block,uid__$1,parents,s__58575__$2,temp__5735__auto____$2,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58574(cljs.core.rest(s__58575__$2)));
}
} else {
return null;
}
break;
}
});})(i__58569,i__58562,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58569,i__58562,vec__58571,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58570,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58693 = (i__58569 + (1));
i__58569 = G__58693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58570),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567(cljs.core.chunk_rest(s__58568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58570),null);
}
} else {
var vec__58598 = cljs.core.first(s__58568__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58598,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58598,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58562,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58562,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58562,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601(s__58602){
return (new cljs.core.LazySeq(null,((function (i__58562,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58602__$1 = s__58602;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58602__$1);
if(temp__5735__auto____$2){
var s__58602__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58602__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58602__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58604 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58603 = (0);
while(true){
if((i__58603 < size__4581__auto____$1)){
var map__58605 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58603);
var map__58605__$1 = (((((!((map__58605 == null))))?(((((map__58605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58605):map__58605);
var block = map__58605__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58604,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58603,i__58562,map__58605,map__58605__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58604,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601_$_iter__58607(s__58608){
return (new cljs.core.LazySeq(null,((function (i__58603,i__58562,map__58605,map__58605__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58604,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58608__$1 = s__58608;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58608__$1);
if(temp__5735__auto____$3){
var s__58608__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58608__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58608__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58610 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58609 = (0);
while(true){
if((i__58609 < size__4581__auto____$2)){
var map__58611 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58609);
var map__58611__$1 = (((((!((map__58611 == null))))?(((((map__58611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58611):map__58611);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58610,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58609,i__58603,i__58562,map__58611,map__58611__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58610,s__58608__$2,temp__5735__auto____$3,map__58605,map__58605__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58604,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58609,i__58603,i__58562,map__58611,map__58611__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58610,s__58608__$2,temp__5735__auto____$3,map__58605,map__58605__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58604,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58694 = (i__58609 + (1));
i__58609 = G__58694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58610),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601_$_iter__58607(cljs.core.chunk_rest(s__58608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58610),null);
}
} else {
var map__58613 = cljs.core.first(s__58608__$2);
var map__58613__$1 = (((((!((map__58613 == null))))?(((((map__58613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58613):map__58613);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58603,i__58562,map__58613,map__58613__$1,title__$1,string,uid__$2,s__58608__$2,temp__5735__auto____$3,map__58605,map__58605__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58604,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58603,i__58562,map__58613,map__58613__$1,title__$1,string,uid__$2,s__58608__$2,temp__5735__auto____$3,map__58605,map__58605__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58604,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601_$_iter__58607(cljs.core.rest(s__58608__$2)));
}
} else {
return null;
}
break;
}
});})(i__58603,i__58562,map__58605,map__58605__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58604,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58603,i__58562,map__58605,map__58605__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58604,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58695 = (i__58603 + (1));
i__58603 = G__58695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58604),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601(cljs.core.chunk_rest(s__58602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58604),null);
}
} else {
var map__58615 = cljs.core.first(s__58602__$2);
var map__58615__$1 = (((((!((map__58615 == null))))?(((((map__58615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58615):map__58615);
var block = map__58615__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58562,map__58615,map__58615__$1,block,uid__$1,parents,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601_$_iter__58617(s__58618){
return (new cljs.core.LazySeq(null,((function (i__58562,map__58615,map__58615__$1,block,uid__$1,parents,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58618__$1 = s__58618;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58618__$1);
if(temp__5735__auto____$3){
var s__58618__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58618__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58618__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58620 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58619 = (0);
while(true){
if((i__58619 < size__4581__auto____$1)){
var map__58621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58619);
var map__58621__$1 = (((((!((map__58621 == null))))?(((((map__58621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58621):map__58621);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58620,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58619,i__58562,map__58621,map__58621__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58620,s__58618__$2,temp__5735__auto____$3,map__58615,map__58615__$1,block,uid__$1,parents,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58619,i__58562,map__58621,map__58621__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58620,s__58618__$2,temp__5735__auto____$3,map__58615,map__58615__$1,block,uid__$1,parents,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58696 = (i__58619 + (1));
i__58619 = G__58696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58620),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601_$_iter__58617(cljs.core.chunk_rest(s__58618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58620),null);
}
} else {
var map__58623 = cljs.core.first(s__58618__$2);
var map__58623__$1 = (((((!((map__58623 == null))))?(((((map__58623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58623):map__58623);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58562,map__58623,map__58623__$1,title__$1,string,uid__$2,s__58618__$2,temp__5735__auto____$3,map__58615,map__58615__$1,block,uid__$1,parents,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58562,map__58623,map__58623__$1,title__$1,string,uid__$2,s__58618__$2,temp__5735__auto____$3,map__58615,map__58615__$1,block,uid__$1,parents,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601_$_iter__58617(cljs.core.rest(s__58618__$2)));
}
} else {
return null;
}
break;
}
});})(i__58562,map__58615,map__58615__$1,block,uid__$1,parents,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58562,map__58615,map__58615__$1,block,uid__$1,parents,s__58602__$2,temp__5735__auto____$2,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567_$_iter__58601(cljs.core.rest(s__58602__$2)));
}
} else {
return null;
}
break;
}
});})(i__58562,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58562,vec__58598,group_title,group,s__58568__$2,temp__5735__auto____$1,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58567(cljs.core.rest(s__58568__$2)));
}
} else {
return null;
}
break;
}
});})(i__58562,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58562,vec__58564,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58563,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58697 = (i__58562 + (1));
i__58562 = G__58697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58563),athens$views$node_page$node_page_el_$_iter__58560(cljs.core.chunk_rest(s__58561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58563),null);
}
} else {
var vec__58625 = cljs.core.first(s__58561__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58625,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58625,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628(s__58629){
return (new cljs.core.LazySeq(null,(function (){
var s__58629__$1 = s__58629;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58629__$1);
if(temp__5735__auto____$1){
var s__58629__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58629__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58629__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58631 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58630 = (0);
while(true){
if((i__58630 < size__4581__auto__)){
var vec__58632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58630);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58632,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58632,(1),null);
cljs.core.chunk_append(b__58631,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58630,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58630,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58630,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635(s__58636){
return (new cljs.core.LazySeq(null,((function (i__58630,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58636__$1 = s__58636;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58636__$1);
if(temp__5735__auto____$2){
var s__58636__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58636__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58636__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58638 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58637 = (0);
while(true){
if((i__58637 < size__4581__auto____$1)){
var map__58639 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58637);
var map__58639__$1 = (((((!((map__58639 == null))))?(((((map__58639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58639):map__58639);
var block = map__58639__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58638,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58637,i__58630,map__58639,map__58639__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58638,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635_$_iter__58641(s__58642){
return (new cljs.core.LazySeq(null,((function (i__58637,i__58630,map__58639,map__58639__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58638,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58642__$1 = s__58642;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58642__$1);
if(temp__5735__auto____$3){
var s__58642__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58642__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58642__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58644 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58643 = (0);
while(true){
if((i__58643 < size__4581__auto____$2)){
var map__58645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58643);
var map__58645__$1 = (((((!((map__58645 == null))))?(((((map__58645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58645):map__58645);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58644,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58643,i__58637,i__58630,map__58645,map__58645__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58644,s__58642__$2,temp__5735__auto____$3,map__58639,map__58639__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58638,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58643,i__58637,i__58630,map__58645,map__58645__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58644,s__58642__$2,temp__5735__auto____$3,map__58639,map__58639__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58638,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58698 = (i__58643 + (1));
i__58643 = G__58698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58644),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635_$_iter__58641(cljs.core.chunk_rest(s__58642__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58644),null);
}
} else {
var map__58647 = cljs.core.first(s__58642__$2);
var map__58647__$1 = (((((!((map__58647 == null))))?(((((map__58647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58647):map__58647);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58637,i__58630,map__58647,map__58647__$1,title__$1,string,uid__$2,s__58642__$2,temp__5735__auto____$3,map__58639,map__58639__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58638,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58637,i__58630,map__58647,map__58647__$1,title__$1,string,uid__$2,s__58642__$2,temp__5735__auto____$3,map__58639,map__58639__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58638,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635_$_iter__58641(cljs.core.rest(s__58642__$2)));
}
} else {
return null;
}
break;
}
});})(i__58637,i__58630,map__58639,map__58639__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58638,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58637,i__58630,map__58639,map__58639__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58638,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58699 = (i__58637 + (1));
i__58637 = G__58699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58638),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635(cljs.core.chunk_rest(s__58636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58638),null);
}
} else {
var map__58649 = cljs.core.first(s__58636__$2);
var map__58649__$1 = (((((!((map__58649 == null))))?(((((map__58649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58649):map__58649);
var block = map__58649__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58630,map__58649,map__58649__$1,block,uid__$1,parents,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635_$_iter__58651(s__58652){
return (new cljs.core.LazySeq(null,((function (i__58630,map__58649,map__58649__$1,block,uid__$1,parents,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58652__$1 = s__58652;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58652__$1);
if(temp__5735__auto____$3){
var s__58652__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58652__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58652__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58654 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58653 = (0);
while(true){
if((i__58653 < size__4581__auto____$1)){
var map__58655 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58653);
var map__58655__$1 = (((((!((map__58655 == null))))?(((((map__58655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58655):map__58655);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58654,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58653,i__58630,map__58655,map__58655__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58654,s__58652__$2,temp__5735__auto____$3,map__58649,map__58649__$1,block,uid__$1,parents,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58653,i__58630,map__58655,map__58655__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58654,s__58652__$2,temp__5735__auto____$3,map__58649,map__58649__$1,block,uid__$1,parents,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58700 = (i__58653 + (1));
i__58653 = G__58700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58654),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635_$_iter__58651(cljs.core.chunk_rest(s__58652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58654),null);
}
} else {
var map__58657 = cljs.core.first(s__58652__$2);
var map__58657__$1 = (((((!((map__58657 == null))))?(((((map__58657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58657):map__58657);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58630,map__58657,map__58657__$1,title__$1,string,uid__$2,s__58652__$2,temp__5735__auto____$3,map__58649,map__58649__$1,block,uid__$1,parents,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58630,map__58657,map__58657__$1,title__$1,string,uid__$2,s__58652__$2,temp__5735__auto____$3,map__58649,map__58649__$1,block,uid__$1,parents,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635_$_iter__58651(cljs.core.rest(s__58652__$2)));
}
} else {
return null;
}
break;
}
});})(i__58630,map__58649,map__58649__$1,block,uid__$1,parents,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58630,map__58649,map__58649__$1,block,uid__$1,parents,s__58636__$2,temp__5735__auto____$2,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58635(cljs.core.rest(s__58636__$2)));
}
} else {
return null;
}
break;
}
});})(i__58630,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58630,vec__58632,group_title,group,c__4580__auto__,size__4581__auto__,b__58631,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58701 = (i__58630 + (1));
i__58630 = G__58701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58631),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628(cljs.core.chunk_rest(s__58629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58631),null);
}
} else {
var vec__58659 = cljs.core.first(s__58629__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58659,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58659,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662(s__58663){
return (new cljs.core.LazySeq(null,(function (){
var s__58663__$1 = s__58663;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58663__$1);
if(temp__5735__auto____$2){
var s__58663__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58663__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58663__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58665 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58664 = (0);
while(true){
if((i__58664 < size__4581__auto__)){
var map__58666 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58664);
var map__58666__$1 = (((((!((map__58666 == null))))?(((((map__58666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58666):map__58666);
var block = map__58666__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58665,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58664,map__58666,map__58666__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58665,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662_$_iter__58668(s__58669){
return (new cljs.core.LazySeq(null,((function (i__58664,map__58666,map__58666__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58665,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
var s__58669__$1 = s__58669;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58669__$1);
if(temp__5735__auto____$3){
var s__58669__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58669__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58669__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58671 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58670 = (0);
while(true){
if((i__58670 < size__4581__auto____$1)){
var map__58672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58670);
var map__58672__$1 = (((((!((map__58672 == null))))?(((((map__58672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58672):map__58672);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58671,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58670,i__58664,map__58672,map__58672__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58671,s__58669__$2,temp__5735__auto____$3,map__58666,map__58666__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58665,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58670,i__58664,map__58672,map__58672__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58671,s__58669__$2,temp__5735__auto____$3,map__58666,map__58666__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58665,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58702 = (i__58670 + (1));
i__58670 = G__58702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58671),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662_$_iter__58668(cljs.core.chunk_rest(s__58669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58671),null);
}
} else {
var map__58674 = cljs.core.first(s__58669__$2);
var map__58674__$1 = (((((!((map__58674 == null))))?(((((map__58674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58674):map__58674);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58664,map__58674,map__58674__$1,title__$1,string,uid__$2,s__58669__$2,temp__5735__auto____$3,map__58666,map__58666__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58665,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58664,map__58674,map__58674__$1,title__$1,string,uid__$2,s__58669__$2,temp__5735__auto____$3,map__58666,map__58666__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58665,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662_$_iter__58668(cljs.core.rest(s__58669__$2)));
}
} else {
return null;
}
break;
}
});})(i__58664,map__58666,map__58666__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58665,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
,null,null));
});})(i__58664,map__58666,map__58666__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58665,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58703 = (i__58664 + (1));
i__58664 = G__58703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58665),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662(cljs.core.chunk_rest(s__58663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58665),null);
}
} else {
var map__58676 = cljs.core.first(s__58663__$2);
var map__58676__$1 = (((((!((map__58676 == null))))?(((((map__58676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58676):map__58676);
var block = map__58676__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58676,map__58676__$1,block,uid__$1,parents,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662_$_iter__58678(s__58679){
return (new cljs.core.LazySeq(null,(function (){
var s__58679__$1 = s__58679;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58679__$1);
if(temp__5735__auto____$3){
var s__58679__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58679__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58679__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58681 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58680 = (0);
while(true){
if((i__58680 < size__4581__auto__)){
var map__58682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58680);
var map__58682__$1 = (((((!((map__58682 == null))))?(((((map__58682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58682):map__58682);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58681,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58680,map__58682,map__58682__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58681,s__58679__$2,temp__5735__auto____$3,map__58676,map__58676__$1,block,uid__$1,parents,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58680,map__58682,map__58682__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58681,s__58679__$2,temp__5735__auto____$3,map__58676,map__58676__$1,block,uid__$1,parents,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58704 = (i__58680 + (1));
i__58680 = G__58704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58681),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662_$_iter__58678(cljs.core.chunk_rest(s__58679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58681),null);
}
} else {
var map__58684 = cljs.core.first(s__58679__$2);
var map__58684__$1 = (((((!((map__58684 == null))))?(((((map__58684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58684):map__58684);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58684,map__58684__$1,title__$1,string,uid__$2,s__58679__$2,temp__5735__auto____$3,map__58676,map__58676__$1,block,uid__$1,parents,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58684,map__58684__$1,title__$1,string,uid__$2,s__58679__$2,temp__5735__auto____$3,map__58676,map__58676__$1,block,uid__$1,parents,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662_$_iter__58678(cljs.core.rest(s__58679__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58676,map__58676__$1,block,uid__$1,parents,s__58663__$2,temp__5735__auto____$2,vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628_$_iter__58662(cljs.core.rest(s__58663__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58659,group_title,group,s__58629__$2,temp__5735__auto____$1,vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58560_$_iter__58628(cljs.core.rest(s__58629__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58625,linked_or_unlinked,refs,s__58561__$2,temp__5735__auto__,map__58548,map__58548__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58560(cljs.core.rest(s__58561__$2)));
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
var map__58686 = athens.db.get_node_document(ident);
var map__58686__$1 = (((((!((map__58686 == null))))?(((((map__58686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58686):map__58686);
var node = map__58686__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58688) : re_frame.core.subscribe.call(null,G__58688));
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
