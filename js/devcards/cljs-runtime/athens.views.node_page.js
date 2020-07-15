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
var G__58551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58551) : re_frame.core.dispatch.call(null,G__58551));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58552 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58553 = athens.db.dsdb;
var G__58554 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58552,G__58553,G__58554) : posh.reagent.q.call(null,G__58552,G__58553,G__58554));
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
return cljs.core.boolean$((function (){try{var vec__58556 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58556,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58556,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58556,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58555){if((e58555 instanceof Object)){
var _ = e58555;
return false;
} else {
throw e58555;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58559,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58560 = p__58559;
var map__58560__$1 = (((((!((map__58560 == null))))?(((((map__58560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58560):map__58560);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58562 = e.target.value;
var G__58563 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58562,G__58563) : athens.views.node_page.db_handler.call(null,G__58562,G__58563));
})], null)], null)),athens.parse_renderer.parse_and_render(title)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58564(s__58565){
return (new cljs.core.LazySeq(null,(function (){
var s__58565__$1 = s__58565;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58565__$1);
if(temp__5735__auto__){
var s__58565__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58565__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58565__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58567 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58566 = (0);
while(true){
if((i__58566 < size__4581__auto__)){
var map__58568 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58566);
var map__58568__$1 = (((((!((map__58568 == null))))?(((((map__58568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58568):map__58568);
var child = map__58568__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58568__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58567,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58701 = (i__58566 + (1));
i__58566 = G__58701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58567),athens$views$node_page$node_page_el_$_iter__58564(cljs.core.chunk_rest(s__58565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58567),null);
}
} else {
var map__58570 = cljs.core.first(s__58565__$2);
var map__58570__$1 = (((((!((map__58570 == null))))?(((((map__58570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58570):map__58570);
var child = map__58570__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58564(cljs.core.rest(s__58565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58572(s__58573){
return (new cljs.core.LazySeq(null,(function (){
var s__58573__$1 = s__58573;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58573__$1);
if(temp__5735__auto__){
var s__58573__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58573__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58573__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58575 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58574 = (0);
while(true){
if((i__58574 < size__4581__auto__)){
var vec__58576 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58574);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58576,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58576,(1),null);
cljs.core.chunk_append(b__58575,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58574,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579(s__58580){
return (new cljs.core.LazySeq(null,((function (i__58574,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58580__$1 = s__58580;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58580__$1);
if(temp__5735__auto____$1){
var s__58580__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58580__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58580__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58582 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58581 = (0);
while(true){
if((i__58581 < size__4581__auto____$1)){
var vec__58583 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58581);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58583,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58583,(1),null);
cljs.core.chunk_append(b__58582,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58581,i__58574,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58581,i__58574,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58581,i__58574,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586(s__58587){
return (new cljs.core.LazySeq(null,((function (i__58581,i__58574,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58587__$1 = s__58587;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58587__$1);
if(temp__5735__auto____$2){
var s__58587__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58587__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58587__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58589 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58588 = (0);
while(true){
if((i__58588 < size__4581__auto____$2)){
var map__58590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58588);
var map__58590__$1 = (((((!((map__58590 == null))))?(((((map__58590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58590):map__58590);
var block = map__58590__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58589,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58588,i__58581,i__58574,map__58590,map__58590__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58589,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586_$_iter__58592(s__58593){
return (new cljs.core.LazySeq(null,((function (i__58588,i__58581,i__58574,map__58590,map__58590__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58589,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58593__$1 = s__58593;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58593__$1);
if(temp__5735__auto____$3){
var s__58593__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58593__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58593__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58595 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58594 = (0);
while(true){
if((i__58594 < size__4581__auto____$3)){
var map__58596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58594);
var map__58596__$1 = (((((!((map__58596 == null))))?(((((map__58596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58596):map__58596);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58595,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58594,i__58588,i__58581,i__58574,map__58596,map__58596__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58595,s__58593__$2,temp__5735__auto____$3,map__58590,map__58590__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58589,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58594,i__58588,i__58581,i__58574,map__58596,map__58596__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58595,s__58593__$2,temp__5735__auto____$3,map__58590,map__58590__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58589,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58702 = (i__58594 + (1));
i__58594 = G__58702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58595),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586_$_iter__58592(cljs.core.chunk_rest(s__58593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58595),null);
}
} else {
var map__58598 = cljs.core.first(s__58593__$2);
var map__58598__$1 = (((((!((map__58598 == null))))?(((((map__58598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58598):map__58598);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58588,i__58581,i__58574,map__58598,map__58598__$1,title__$1,string,uid__$2,s__58593__$2,temp__5735__auto____$3,map__58590,map__58590__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58589,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58588,i__58581,i__58574,map__58598,map__58598__$1,title__$1,string,uid__$2,s__58593__$2,temp__5735__auto____$3,map__58590,map__58590__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58589,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586_$_iter__58592(cljs.core.rest(s__58593__$2)));
}
} else {
return null;
}
break;
}
});})(i__58588,i__58581,i__58574,map__58590,map__58590__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58589,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58588,i__58581,i__58574,map__58590,map__58590__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58589,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58703 = (i__58588 + (1));
i__58588 = G__58703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58589),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586(cljs.core.chunk_rest(s__58587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58589),null);
}
} else {
var map__58600 = cljs.core.first(s__58587__$2);
var map__58600__$1 = (((((!((map__58600 == null))))?(((((map__58600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58600):map__58600);
var block = map__58600__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58600__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58600__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58581,i__58574,map__58600,map__58600__$1,block,uid__$1,parents,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586_$_iter__58602(s__58603){
return (new cljs.core.LazySeq(null,((function (i__58581,i__58574,map__58600,map__58600__$1,block,uid__$1,parents,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58603__$1 = s__58603;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58603__$1);
if(temp__5735__auto____$3){
var s__58603__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58603__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58603__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58605 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58604 = (0);
while(true){
if((i__58604 < size__4581__auto____$2)){
var map__58606 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58604);
var map__58606__$1 = (((((!((map__58606 == null))))?(((((map__58606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58606):map__58606);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58605,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58604,i__58581,i__58574,map__58606,map__58606__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$3,map__58600,map__58600__$1,block,uid__$1,parents,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58604,i__58581,i__58574,map__58606,map__58606__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58605,s__58603__$2,temp__5735__auto____$3,map__58600,map__58600__$1,block,uid__$1,parents,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58704 = (i__58604 + (1));
i__58604 = G__58704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58605),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586_$_iter__58602(cljs.core.chunk_rest(s__58603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58605),null);
}
} else {
var map__58608 = cljs.core.first(s__58603__$2);
var map__58608__$1 = (((((!((map__58608 == null))))?(((((map__58608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58608):map__58608);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58581,i__58574,map__58608,map__58608__$1,title__$1,string,uid__$2,s__58603__$2,temp__5735__auto____$3,map__58600,map__58600__$1,block,uid__$1,parents,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58581,i__58574,map__58608,map__58608__$1,title__$1,string,uid__$2,s__58603__$2,temp__5735__auto____$3,map__58600,map__58600__$1,block,uid__$1,parents,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586_$_iter__58602(cljs.core.rest(s__58603__$2)));
}
} else {
return null;
}
break;
}
});})(i__58581,i__58574,map__58600,map__58600__$1,block,uid__$1,parents,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58581,i__58574,map__58600,map__58600__$1,block,uid__$1,parents,s__58587__$2,temp__5735__auto____$2,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58586(cljs.core.rest(s__58587__$2)));
}
} else {
return null;
}
break;
}
});})(i__58581,i__58574,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58581,i__58574,vec__58583,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58582,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58705 = (i__58581 + (1));
i__58581 = G__58705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58582),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579(cljs.core.chunk_rest(s__58580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58582),null);
}
} else {
var vec__58610 = cljs.core.first(s__58580__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58610,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58610,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58574,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58574,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58574,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613(s__58614){
return (new cljs.core.LazySeq(null,((function (i__58574,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58614__$1 = s__58614;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58614__$1);
if(temp__5735__auto____$2){
var s__58614__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58614__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58614__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58616 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58615 = (0);
while(true){
if((i__58615 < size__4581__auto____$1)){
var map__58617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58615);
var map__58617__$1 = (((((!((map__58617 == null))))?(((((map__58617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58617):map__58617);
var block = map__58617__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58616,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58615,i__58574,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613_$_iter__58619(s__58620){
return (new cljs.core.LazySeq(null,((function (i__58615,i__58574,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58620__$1 = s__58620;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58620__$1);
if(temp__5735__auto____$3){
var s__58620__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58620__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58620__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58622 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58621 = (0);
while(true){
if((i__58621 < size__4581__auto____$2)){
var map__58623 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58621);
var map__58623__$1 = (((((!((map__58623 == null))))?(((((map__58623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58623):map__58623);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58622,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58621,i__58615,i__58574,map__58623,map__58623__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58622,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58621,i__58615,i__58574,map__58623,map__58623__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58622,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58706 = (i__58621 + (1));
i__58621 = G__58706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58622),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613_$_iter__58619(cljs.core.chunk_rest(s__58620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58622),null);
}
} else {
var map__58625 = cljs.core.first(s__58620__$2);
var map__58625__$1 = (((((!((map__58625 == null))))?(((((map__58625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58625):map__58625);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58615,i__58574,map__58625,map__58625__$1,title__$1,string,uid__$2,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58615,i__58574,map__58625,map__58625__$1,title__$1,string,uid__$2,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613_$_iter__58619(cljs.core.rest(s__58620__$2)));
}
} else {
return null;
}
break;
}
});})(i__58615,i__58574,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58615,i__58574,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58707 = (i__58615 + (1));
i__58615 = G__58707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58616),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613(cljs.core.chunk_rest(s__58614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58616),null);
}
} else {
var map__58627 = cljs.core.first(s__58614__$2);
var map__58627__$1 = (((((!((map__58627 == null))))?(((((map__58627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58627):map__58627);
var block = map__58627__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58574,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613_$_iter__58629(s__58630){
return (new cljs.core.LazySeq(null,((function (i__58574,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58630__$1 = s__58630;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58630__$1);
if(temp__5735__auto____$3){
var s__58630__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58630__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58630__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58632 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58631 = (0);
while(true){
if((i__58631 < size__4581__auto____$1)){
var map__58633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58631);
var map__58633__$1 = (((((!((map__58633 == null))))?(((((map__58633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58633):map__58633);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58632,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58631,i__58574,map__58633,map__58633__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$3,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58631,i__58574,map__58633,map__58633__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58632,s__58630__$2,temp__5735__auto____$3,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58708 = (i__58631 + (1));
i__58631 = G__58708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58632),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613_$_iter__58629(cljs.core.chunk_rest(s__58630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58632),null);
}
} else {
var map__58635 = cljs.core.first(s__58630__$2);
var map__58635__$1 = (((((!((map__58635 == null))))?(((((map__58635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58635):map__58635);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58574,map__58635,map__58635__$1,title__$1,string,uid__$2,s__58630__$2,temp__5735__auto____$3,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58574,map__58635,map__58635__$1,title__$1,string,uid__$2,s__58630__$2,temp__5735__auto____$3,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613_$_iter__58629(cljs.core.rest(s__58630__$2)));
}
} else {
return null;
}
break;
}
});})(i__58574,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58574,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579_$_iter__58613(cljs.core.rest(s__58614__$2)));
}
} else {
return null;
}
break;
}
});})(i__58574,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58574,vec__58610,group_title,group,s__58580__$2,temp__5735__auto____$1,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58579(cljs.core.rest(s__58580__$2)));
}
} else {
return null;
}
break;
}
});})(i__58574,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58574,vec__58576,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58575,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58709 = (i__58574 + (1));
i__58574 = G__58709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58575),athens$views$node_page$node_page_el_$_iter__58572(cljs.core.chunk_rest(s__58573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58575),null);
}
} else {
var vec__58637 = cljs.core.first(s__58573__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640(s__58641){
return (new cljs.core.LazySeq(null,(function (){
var s__58641__$1 = s__58641;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58641__$1);
if(temp__5735__auto____$1){
var s__58641__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58641__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58641__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58643 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58642 = (0);
while(true){
if((i__58642 < size__4581__auto__)){
var vec__58644 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58642);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58644,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58644,(1),null);
cljs.core.chunk_append(b__58643,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58642,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58642,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58642,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647(s__58648){
return (new cljs.core.LazySeq(null,((function (i__58642,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58648__$1 = s__58648;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58648__$1);
if(temp__5735__auto____$2){
var s__58648__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58648__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58648__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58650 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58649 = (0);
while(true){
if((i__58649 < size__4581__auto____$1)){
var map__58651 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58649);
var map__58651__$1 = (((((!((map__58651 == null))))?(((((map__58651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58651):map__58651);
var block = map__58651__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58650,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58649,i__58642,map__58651,map__58651__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647_$_iter__58653(s__58654){
return (new cljs.core.LazySeq(null,((function (i__58649,i__58642,map__58651,map__58651__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58654__$1 = s__58654;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58654__$1);
if(temp__5735__auto____$3){
var s__58654__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58654__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58654__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58656 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58655 = (0);
while(true){
if((i__58655 < size__4581__auto____$2)){
var map__58657 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58655);
var map__58657__$1 = (((((!((map__58657 == null))))?(((((map__58657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58657):map__58657);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58655,i__58649,i__58642,map__58657,map__58657__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58656,s__58654__$2,temp__5735__auto____$3,map__58651,map__58651__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58655,i__58649,i__58642,map__58657,map__58657__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58656,s__58654__$2,temp__5735__auto____$3,map__58651,map__58651__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58710 = (i__58655 + (1));
i__58655 = G__58710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58656),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647_$_iter__58653(cljs.core.chunk_rest(s__58654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58656),null);
}
} else {
var map__58659 = cljs.core.first(s__58654__$2);
var map__58659__$1 = (((((!((map__58659 == null))))?(((((map__58659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58659):map__58659);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58649,i__58642,map__58659,map__58659__$1,title__$1,string,uid__$2,s__58654__$2,temp__5735__auto____$3,map__58651,map__58651__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58649,i__58642,map__58659,map__58659__$1,title__$1,string,uid__$2,s__58654__$2,temp__5735__auto____$3,map__58651,map__58651__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647_$_iter__58653(cljs.core.rest(s__58654__$2)));
}
} else {
return null;
}
break;
}
});})(i__58649,i__58642,map__58651,map__58651__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58649,i__58642,map__58651,map__58651__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58650,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58711 = (i__58649 + (1));
i__58649 = G__58711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58650),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647(cljs.core.chunk_rest(s__58648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58650),null);
}
} else {
var map__58661 = cljs.core.first(s__58648__$2);
var map__58661__$1 = (((((!((map__58661 == null))))?(((((map__58661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58661):map__58661);
var block = map__58661__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58642,map__58661,map__58661__$1,block,uid__$1,parents,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647_$_iter__58663(s__58664){
return (new cljs.core.LazySeq(null,((function (i__58642,map__58661,map__58661__$1,block,uid__$1,parents,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58664__$1 = s__58664;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58664__$1);
if(temp__5735__auto____$3){
var s__58664__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58664__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58664__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58666 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58665 = (0);
while(true){
if((i__58665 < size__4581__auto____$1)){
var map__58667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58665);
var map__58667__$1 = (((((!((map__58667 == null))))?(((((map__58667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58667):map__58667);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58667__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58667__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58667__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58666,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58665,i__58642,map__58667,map__58667__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$3,map__58661,map__58661__$1,block,uid__$1,parents,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58665,i__58642,map__58667,map__58667__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58666,s__58664__$2,temp__5735__auto____$3,map__58661,map__58661__$1,block,uid__$1,parents,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58712 = (i__58665 + (1));
i__58665 = G__58712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58666),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647_$_iter__58663(cljs.core.chunk_rest(s__58664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58666),null);
}
} else {
var map__58669 = cljs.core.first(s__58664__$2);
var map__58669__$1 = (((((!((map__58669 == null))))?(((((map__58669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58669):map__58669);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58642,map__58669,map__58669__$1,title__$1,string,uid__$2,s__58664__$2,temp__5735__auto____$3,map__58661,map__58661__$1,block,uid__$1,parents,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58642,map__58669,map__58669__$1,title__$1,string,uid__$2,s__58664__$2,temp__5735__auto____$3,map__58661,map__58661__$1,block,uid__$1,parents,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647_$_iter__58663(cljs.core.rest(s__58664__$2)));
}
} else {
return null;
}
break;
}
});})(i__58642,map__58661,map__58661__$1,block,uid__$1,parents,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58642,map__58661,map__58661__$1,block,uid__$1,parents,s__58648__$2,temp__5735__auto____$2,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58647(cljs.core.rest(s__58648__$2)));
}
} else {
return null;
}
break;
}
});})(i__58642,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58642,vec__58644,group_title,group,c__4580__auto__,size__4581__auto__,b__58643,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58713 = (i__58642 + (1));
i__58642 = G__58713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58643),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640(cljs.core.chunk_rest(s__58641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58643),null);
}
} else {
var vec__58671 = cljs.core.first(s__58641__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58671,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58671,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674(s__58675){
return (new cljs.core.LazySeq(null,(function (){
var s__58675__$1 = s__58675;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58675__$1);
if(temp__5735__auto____$2){
var s__58675__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58675__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58675__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58677 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58676 = (0);
while(true){
if((i__58676 < size__4581__auto__)){
var map__58678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58676);
var map__58678__$1 = (((((!((map__58678 == null))))?(((((map__58678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58678):map__58678);
var block = map__58678__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58677,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58676,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674_$_iter__58680(s__58681){
return (new cljs.core.LazySeq(null,((function (i__58676,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
var s__58681__$1 = s__58681;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58681__$1);
if(temp__5735__auto____$3){
var s__58681__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58681__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58681__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58683 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58682 = (0);
while(true){
if((i__58682 < size__4581__auto____$1)){
var map__58684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58682);
var map__58684__$1 = (((((!((map__58684 == null))))?(((((map__58684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58684):map__58684);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58683,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58682,i__58676,map__58684,map__58684__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58683,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58682,i__58676,map__58684,map__58684__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58683,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58714 = (i__58682 + (1));
i__58682 = G__58714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58683),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674_$_iter__58680(cljs.core.chunk_rest(s__58681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58683),null);
}
} else {
var map__58686 = cljs.core.first(s__58681__$2);
var map__58686__$1 = (((((!((map__58686 == null))))?(((((map__58686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58686):map__58686);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58676,map__58686,map__58686__$1,title__$1,string,uid__$2,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58676,map__58686,map__58686__$1,title__$1,string,uid__$2,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674_$_iter__58680(cljs.core.rest(s__58681__$2)));
}
} else {
return null;
}
break;
}
});})(i__58676,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
,null,null));
});})(i__58676,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58715 = (i__58676 + (1));
i__58676 = G__58715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58677),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674(cljs.core.chunk_rest(s__58675__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58677),null);
}
} else {
var map__58688 = cljs.core.first(s__58675__$2);
var map__58688__$1 = (((((!((map__58688 == null))))?(((((map__58688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58688):map__58688);
var block = map__58688__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674_$_iter__58690(s__58691){
return (new cljs.core.LazySeq(null,(function (){
var s__58691__$1 = s__58691;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58691__$1);
if(temp__5735__auto____$3){
var s__58691__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58691__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58691__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58693 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58692 = (0);
while(true){
if((i__58692 < size__4581__auto__)){
var map__58694 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58692);
var map__58694__$1 = (((((!((map__58694 == null))))?(((((map__58694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58694):map__58694);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58693,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58692,map__58694,map__58694__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$3,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58692,map__58694,map__58694__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58693,s__58691__$2,temp__5735__auto____$3,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58716 = (i__58692 + (1));
i__58692 = G__58716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58693),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674_$_iter__58690(cljs.core.chunk_rest(s__58691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58693),null);
}
} else {
var map__58696 = cljs.core.first(s__58691__$2);
var map__58696__$1 = (((((!((map__58696 == null))))?(((((map__58696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58696):map__58696);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58696,map__58696__$1,title__$1,string,uid__$2,s__58691__$2,temp__5735__auto____$3,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58696,map__58696__$1,title__$1,string,uid__$2,s__58691__$2,temp__5735__auto____$3,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674_$_iter__58690(cljs.core.rest(s__58691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640_$_iter__58674(cljs.core.rest(s__58675__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58671,group_title,group,s__58641__$2,temp__5735__auto____$1,vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58572_$_iter__58640(cljs.core.rest(s__58641__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58637,linked_or_unlinked,refs,s__58573__$2,temp__5735__auto__,map__58560,map__58560__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58572(cljs.core.rest(s__58573__$2)));
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
var map__58698 = athens.db.get_node_document(ident);
var map__58698__$1 = (((((!((map__58698 == null))))?(((((map__58698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58698):map__58698);
var node = map__58698__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58700) : re_frame.core.subscribe.call(null,G__58700));
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
