goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.devcards.breadcrumbs');
goog.require('athens.devcards.buttons');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.devcards.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.devcards.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.devcards.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.devcards.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.devcards.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.devcards.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.devcards.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.devcards.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__65806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65806) : re_frame.core.dispatch.call(null,G__65806));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65807 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65808 = athens.db.dsdb;
var G__65809 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65807,G__65808,G__65809) : posh.reagent.q.call(null,G__65807,G__65808,G__65809));
})());
});
athens.devcards.node_page.merge_parents_and_block = (function athens$devcards$node_page$merge_parents_and_block(ref_ids){
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
athens.devcards.node_page.group_by_parent = (function athens$devcards$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.devcards.node_page.get_data = (function athens$devcards$node_page$get_data(pattern){
return cljs.core.seq(athens.devcards.node_page.group_by_parent(athens.devcards.node_page.merge_parents_and_block(athens.devcards.node_page.get_ref_ids(pattern))));
});
athens.devcards.node_page.is_timeline_page = (function athens$devcards$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__65811 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65811,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65811,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65811,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e65810){if((e65810 instanceof Object)){
var _ = e65810;
return false;
} else {
throw e65810;

}
}})());
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65814,editing_uid,ref_groups,timeline_page_QMARK_){
var map__65815 = p__65814;
var map__65815__$1 = (((((!((map__65815 == null))))?(((((map__65815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65815):map__65815);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65815__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65815__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65815__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65817 = e.target.value;
var G__65818 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65817,G__65818) : athens.devcards.node_page.db_handler.call(null,G__65817,G__65818));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65819(s__65820){
return (new cljs.core.LazySeq(null,(function (){
var s__65820__$1 = s__65820;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65820__$1);
if(temp__5735__auto__){
var s__65820__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65820__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65820__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65822 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65821 = (0);
while(true){
if((i__65821 < size__4581__auto__)){
var map__65823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65821);
var map__65823__$1 = (((((!((map__65823 == null))))?(((((map__65823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65823):map__65823);
var child = map__65823__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65823__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65822,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__65977 = (i__65821 + (1));
i__65821 = G__65977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65822),athens$devcards$node_page$node_page_el_$_iter__65819(cljs.core.chunk_rest(s__65820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65822),null);
}
} else {
var map__65825 = cljs.core.first(s__65820__$2);
var map__65825__$1 = (((((!((map__65825 == null))))?(((((map__65825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65825):map__65825);
var child = map__65825__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65825__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65819(cljs.core.rest(s__65820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65827(s__65828){
return (new cljs.core.LazySeq(null,(function (){
var s__65828__$1 = s__65828;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65828__$1);
if(temp__5735__auto__){
var s__65828__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65828__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65828__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65830 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65829 = (0);
while(true){
if((i__65829 < size__4581__auto__)){
var vec__65831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65829);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65831,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65831,(1),null);
cljs.core.chunk_append(b__65830,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__65829,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834(s__65835){
return (new cljs.core.LazySeq(null,((function (i__65829,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65835__$1 = s__65835;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65835__$1);
if(temp__5735__auto____$1){
var s__65835__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65835__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65835__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65837 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65836 = (0);
while(true){
if((i__65836 < size__4581__auto____$1)){
var vec__65838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65836);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65838,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65838,(1),null);
cljs.core.chunk_append(b__65837,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65836,i__65829,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65836,i__65829,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65836,i__65829,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841(s__65842){
return (new cljs.core.LazySeq(null,((function (i__65836,i__65829,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65842__$1 = s__65842;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65842__$1);
if(temp__5735__auto____$2){
var s__65842__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65842__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65842__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65844 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65843 = (0);
while(true){
if((i__65843 < size__4581__auto____$2)){
var map__65845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65843);
var map__65845__$1 = (((((!((map__65845 == null))))?(((((map__65845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65845):map__65845);
var block = map__65845__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65845__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65845__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65844,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65843,i__65836,i__65829,map__65845,map__65845__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65844,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841_$_iter__65847(s__65848){
return (new cljs.core.LazySeq(null,((function (i__65843,i__65836,i__65829,map__65845,map__65845__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65844,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65848__$1 = s__65848;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65848__$1);
if(temp__5735__auto____$3){
var s__65848__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65848__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65848__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65850 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65849 = (0);
while(true){
if((i__65849 < size__4581__auto____$3)){
var map__65851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65849);
var map__65851__$1 = (((((!((map__65851 == null))))?(((((map__65851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65851):map__65851);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65851__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65851__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65851__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65850,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65849,i__65843,i__65836,i__65829,map__65851,map__65851__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65850,s__65848__$2,temp__5735__auto____$3,map__65845,map__65845__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65844,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65849,i__65843,i__65836,i__65829,map__65851,map__65851__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65850,s__65848__$2,temp__5735__auto____$3,map__65845,map__65845__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65844,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65980 = (i__65849 + (1));
i__65849 = G__65980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65850),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841_$_iter__65847(cljs.core.chunk_rest(s__65848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65850),null);
}
} else {
var map__65853 = cljs.core.first(s__65848__$2);
var map__65853__$1 = (((((!((map__65853 == null))))?(((((map__65853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65853):map__65853);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65843,i__65836,i__65829,map__65853,map__65853__$1,title__$1,string,uid__$2,s__65848__$2,temp__5735__auto____$3,map__65845,map__65845__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65844,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65843,i__65836,i__65829,map__65853,map__65853__$1,title__$1,string,uid__$2,s__65848__$2,temp__5735__auto____$3,map__65845,map__65845__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65844,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841_$_iter__65847(cljs.core.rest(s__65848__$2)));
}
} else {
return null;
}
break;
}
});})(i__65843,i__65836,i__65829,map__65845,map__65845__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65844,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65843,i__65836,i__65829,map__65845,map__65845__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65844,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65981 = (i__65843 + (1));
i__65843 = G__65981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65844),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841(cljs.core.chunk_rest(s__65842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65844),null);
}
} else {
var map__65855 = cljs.core.first(s__65842__$2);
var map__65855__$1 = (((((!((map__65855 == null))))?(((((map__65855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65855):map__65855);
var block = map__65855__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65855__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65855__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65836,i__65829,map__65855,map__65855__$1,block,uid__$1,parents,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841_$_iter__65857(s__65858){
return (new cljs.core.LazySeq(null,((function (i__65836,i__65829,map__65855,map__65855__$1,block,uid__$1,parents,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65858__$1 = s__65858;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65858__$1);
if(temp__5735__auto____$3){
var s__65858__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65858__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65858__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65860 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65859 = (0);
while(true){
if((i__65859 < size__4581__auto____$2)){
var map__65861 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65859);
var map__65861__$1 = (((((!((map__65861 == null))))?(((((map__65861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65861):map__65861);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65861__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65861__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65861__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65860,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65859,i__65836,i__65829,map__65861,map__65861__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$3,map__65855,map__65855__$1,block,uid__$1,parents,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65859,i__65836,i__65829,map__65861,map__65861__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$3,map__65855,map__65855__$1,block,uid__$1,parents,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65982 = (i__65859 + (1));
i__65859 = G__65982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65860),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841_$_iter__65857(cljs.core.chunk_rest(s__65858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65860),null);
}
} else {
var map__65863 = cljs.core.first(s__65858__$2);
var map__65863__$1 = (((((!((map__65863 == null))))?(((((map__65863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65863):map__65863);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65836,i__65829,map__65863,map__65863__$1,title__$1,string,uid__$2,s__65858__$2,temp__5735__auto____$3,map__65855,map__65855__$1,block,uid__$1,parents,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65836,i__65829,map__65863,map__65863__$1,title__$1,string,uid__$2,s__65858__$2,temp__5735__auto____$3,map__65855,map__65855__$1,block,uid__$1,parents,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841_$_iter__65857(cljs.core.rest(s__65858__$2)));
}
} else {
return null;
}
break;
}
});})(i__65836,i__65829,map__65855,map__65855__$1,block,uid__$1,parents,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65836,i__65829,map__65855,map__65855__$1,block,uid__$1,parents,s__65842__$2,temp__5735__auto____$2,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65841(cljs.core.rest(s__65842__$2)));
}
} else {
return null;
}
break;
}
});})(i__65836,i__65829,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65836,i__65829,vec__65838,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65837,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65983 = (i__65836 + (1));
i__65836 = G__65983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65837),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834(cljs.core.chunk_rest(s__65835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65837),null);
}
} else {
var vec__65865 = cljs.core.first(s__65835__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65865,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65865,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65829,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65829,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65829,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868(s__65869){
return (new cljs.core.LazySeq(null,((function (i__65829,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65869__$1 = s__65869;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65869__$1);
if(temp__5735__auto____$2){
var s__65869__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65869__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65869__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65871 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65870 = (0);
while(true){
if((i__65870 < size__4581__auto____$1)){
var map__65872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65870);
var map__65872__$1 = (((((!((map__65872 == null))))?(((((map__65872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65872):map__65872);
var block = map__65872__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65872__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65872__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65871,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65870,i__65829,map__65872,map__65872__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65871,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868_$_iter__65874(s__65875){
return (new cljs.core.LazySeq(null,((function (i__65870,i__65829,map__65872,map__65872__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65871,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65875__$1 = s__65875;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65875__$1);
if(temp__5735__auto____$3){
var s__65875__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65875__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65875__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65877 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65876 = (0);
while(true){
if((i__65876 < size__4581__auto____$2)){
var map__65878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65876);
var map__65878__$1 = (((((!((map__65878 == null))))?(((((map__65878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65878):map__65878);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65878__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65878__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65878__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65877,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65876,i__65870,i__65829,map__65878,map__65878__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65877,s__65875__$2,temp__5735__auto____$3,map__65872,map__65872__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65871,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65876,i__65870,i__65829,map__65878,map__65878__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65877,s__65875__$2,temp__5735__auto____$3,map__65872,map__65872__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65871,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65984 = (i__65876 + (1));
i__65876 = G__65984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65877),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868_$_iter__65874(cljs.core.chunk_rest(s__65875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65877),null);
}
} else {
var map__65880 = cljs.core.first(s__65875__$2);
var map__65880__$1 = (((((!((map__65880 == null))))?(((((map__65880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65880):map__65880);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65880__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65880__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65880__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65870,i__65829,map__65880,map__65880__$1,title__$1,string,uid__$2,s__65875__$2,temp__5735__auto____$3,map__65872,map__65872__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65871,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65870,i__65829,map__65880,map__65880__$1,title__$1,string,uid__$2,s__65875__$2,temp__5735__auto____$3,map__65872,map__65872__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65871,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868_$_iter__65874(cljs.core.rest(s__65875__$2)));
}
} else {
return null;
}
break;
}
});})(i__65870,i__65829,map__65872,map__65872__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65871,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65870,i__65829,map__65872,map__65872__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65871,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65985 = (i__65870 + (1));
i__65870 = G__65985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65871),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868(cljs.core.chunk_rest(s__65869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65871),null);
}
} else {
var map__65882 = cljs.core.first(s__65869__$2);
var map__65882__$1 = (((((!((map__65882 == null))))?(((((map__65882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65882):map__65882);
var block = map__65882__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65829,map__65882,map__65882__$1,block,uid__$1,parents,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868_$_iter__65884(s__65885){
return (new cljs.core.LazySeq(null,((function (i__65829,map__65882,map__65882__$1,block,uid__$1,parents,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65885__$1 = s__65885;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65885__$1);
if(temp__5735__auto____$3){
var s__65885__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65885__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65885__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65887 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65886 = (0);
while(true){
if((i__65886 < size__4581__auto____$1)){
var map__65888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65886);
var map__65888__$1 = (((((!((map__65888 == null))))?(((((map__65888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65888):map__65888);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65887,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65886,i__65829,map__65888,map__65888__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$3,map__65882,map__65882__$1,block,uid__$1,parents,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65886,i__65829,map__65888,map__65888__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$3,map__65882,map__65882__$1,block,uid__$1,parents,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65986 = (i__65886 + (1));
i__65886 = G__65986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65887),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868_$_iter__65884(cljs.core.chunk_rest(s__65885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65887),null);
}
} else {
var map__65890 = cljs.core.first(s__65885__$2);
var map__65890__$1 = (((((!((map__65890 == null))))?(((((map__65890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65890):map__65890);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65829,map__65890,map__65890__$1,title__$1,string,uid__$2,s__65885__$2,temp__5735__auto____$3,map__65882,map__65882__$1,block,uid__$1,parents,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65829,map__65890,map__65890__$1,title__$1,string,uid__$2,s__65885__$2,temp__5735__auto____$3,map__65882,map__65882__$1,block,uid__$1,parents,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868_$_iter__65884(cljs.core.rest(s__65885__$2)));
}
} else {
return null;
}
break;
}
});})(i__65829,map__65882,map__65882__$1,block,uid__$1,parents,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65829,map__65882,map__65882__$1,block,uid__$1,parents,s__65869__$2,temp__5735__auto____$2,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834_$_iter__65868(cljs.core.rest(s__65869__$2)));
}
} else {
return null;
}
break;
}
});})(i__65829,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65829,vec__65865,group_title,group,s__65835__$2,temp__5735__auto____$1,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65834(cljs.core.rest(s__65835__$2)));
}
} else {
return null;
}
break;
}
});})(i__65829,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65829,vec__65831,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65830,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__65987 = (i__65829 + (1));
i__65829 = G__65987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65830),athens$devcards$node_page$node_page_el_$_iter__65827(cljs.core.chunk_rest(s__65828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65830),null);
}
} else {
var vec__65892 = cljs.core.first(s__65828__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65892,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65892,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895(s__65896){
return (new cljs.core.LazySeq(null,(function (){
var s__65896__$1 = s__65896;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65896__$1);
if(temp__5735__auto____$1){
var s__65896__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65896__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65896__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65898 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65897 = (0);
while(true){
if((i__65897 < size__4581__auto__)){
var vec__65899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65897);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65899,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65899,(1),null);
cljs.core.chunk_append(b__65898,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65897,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65897,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65897,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902(s__65903){
return (new cljs.core.LazySeq(null,((function (i__65897,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65903__$1 = s__65903;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65903__$1);
if(temp__5735__auto____$2){
var s__65903__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65903__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65903__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65905 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65904 = (0);
while(true){
if((i__65904 < size__4581__auto____$1)){
var map__65906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65904);
var map__65906__$1 = (((((!((map__65906 == null))))?(((((map__65906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65906):map__65906);
var block = map__65906__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65905,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65904,i__65897,map__65906,map__65906__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65905,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902_$_iter__65908(s__65909){
return (new cljs.core.LazySeq(null,((function (i__65904,i__65897,map__65906,map__65906__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65905,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65909__$1 = s__65909;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65909__$1);
if(temp__5735__auto____$3){
var s__65909__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65909__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65909__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65911 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65910 = (0);
while(true){
if((i__65910 < size__4581__auto____$2)){
var map__65912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65910);
var map__65912__$1 = (((((!((map__65912 == null))))?(((((map__65912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65912):map__65912);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65911,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65910,i__65904,i__65897,map__65912,map__65912__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65911,s__65909__$2,temp__5735__auto____$3,map__65906,map__65906__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65905,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65910,i__65904,i__65897,map__65912,map__65912__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65911,s__65909__$2,temp__5735__auto____$3,map__65906,map__65906__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65905,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65988 = (i__65910 + (1));
i__65910 = G__65988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65911),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902_$_iter__65908(cljs.core.chunk_rest(s__65909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65911),null);
}
} else {
var map__65914 = cljs.core.first(s__65909__$2);
var map__65914__$1 = (((((!((map__65914 == null))))?(((((map__65914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65914):map__65914);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65904,i__65897,map__65914,map__65914__$1,title__$1,string,uid__$2,s__65909__$2,temp__5735__auto____$3,map__65906,map__65906__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65905,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65904,i__65897,map__65914,map__65914__$1,title__$1,string,uid__$2,s__65909__$2,temp__5735__auto____$3,map__65906,map__65906__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65905,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902_$_iter__65908(cljs.core.rest(s__65909__$2)));
}
} else {
return null;
}
break;
}
});})(i__65904,i__65897,map__65906,map__65906__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65905,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65904,i__65897,map__65906,map__65906__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65905,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65989 = (i__65904 + (1));
i__65904 = G__65989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65905),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902(cljs.core.chunk_rest(s__65903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65905),null);
}
} else {
var map__65916 = cljs.core.first(s__65903__$2);
var map__65916__$1 = (((((!((map__65916 == null))))?(((((map__65916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65916):map__65916);
var block = map__65916__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65916__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65916__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65897,map__65916,map__65916__$1,block,uid__$1,parents,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902_$_iter__65918(s__65919){
return (new cljs.core.LazySeq(null,((function (i__65897,map__65916,map__65916__$1,block,uid__$1,parents,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65919__$1 = s__65919;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65919__$1);
if(temp__5735__auto____$3){
var s__65919__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65919__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65919__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65921 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65920 = (0);
while(true){
if((i__65920 < size__4581__auto____$1)){
var map__65922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65920);
var map__65922__$1 = (((((!((map__65922 == null))))?(((((map__65922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65922):map__65922);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65921,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65920,i__65897,map__65922,map__65922__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$3,map__65916,map__65916__$1,block,uid__$1,parents,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65920,i__65897,map__65922,map__65922__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$3,map__65916,map__65916__$1,block,uid__$1,parents,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65990 = (i__65920 + (1));
i__65920 = G__65990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65921),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902_$_iter__65918(cljs.core.chunk_rest(s__65919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65921),null);
}
} else {
var map__65924 = cljs.core.first(s__65919__$2);
var map__65924__$1 = (((((!((map__65924 == null))))?(((((map__65924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65924):map__65924);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65897,map__65924,map__65924__$1,title__$1,string,uid__$2,s__65919__$2,temp__5735__auto____$3,map__65916,map__65916__$1,block,uid__$1,parents,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65897,map__65924,map__65924__$1,title__$1,string,uid__$2,s__65919__$2,temp__5735__auto____$3,map__65916,map__65916__$1,block,uid__$1,parents,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902_$_iter__65918(cljs.core.rest(s__65919__$2)));
}
} else {
return null;
}
break;
}
});})(i__65897,map__65916,map__65916__$1,block,uid__$1,parents,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65897,map__65916,map__65916__$1,block,uid__$1,parents,s__65903__$2,temp__5735__auto____$2,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65902(cljs.core.rest(s__65903__$2)));
}
} else {
return null;
}
break;
}
});})(i__65897,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65897,vec__65899,group_title,group,c__4580__auto__,size__4581__auto__,b__65898,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65991 = (i__65897 + (1));
i__65897 = G__65991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65898),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895(cljs.core.chunk_rest(s__65896__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65898),null);
}
} else {
var vec__65926 = cljs.core.first(s__65896__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65926,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65926,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929(s__65930){
return (new cljs.core.LazySeq(null,(function (){
var s__65930__$1 = s__65930;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65930__$1);
if(temp__5735__auto____$2){
var s__65930__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65930__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65930__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65932 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65931 = (0);
while(true){
if((i__65931 < size__4581__auto__)){
var map__65933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65931);
var map__65933__$1 = (((((!((map__65933 == null))))?(((((map__65933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65933):map__65933);
var block = map__65933__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65932,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65931,map__65933,map__65933__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65932,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929_$_iter__65935(s__65936){
return (new cljs.core.LazySeq(null,((function (i__65931,map__65933,map__65933__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65932,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
var s__65936__$1 = s__65936;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65936__$1);
if(temp__5735__auto____$3){
var s__65936__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65936__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65936__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65938 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65937 = (0);
while(true){
if((i__65937 < size__4581__auto____$1)){
var map__65939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65937);
var map__65939__$1 = (((((!((map__65939 == null))))?(((((map__65939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65939):map__65939);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65939__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65939__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65939__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65938,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65937,i__65931,map__65939,map__65939__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65938,s__65936__$2,temp__5735__auto____$3,map__65933,map__65933__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65932,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65937,i__65931,map__65939,map__65939__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65938,s__65936__$2,temp__5735__auto____$3,map__65933,map__65933__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65932,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65992 = (i__65937 + (1));
i__65937 = G__65992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65938),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929_$_iter__65935(cljs.core.chunk_rest(s__65936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65938),null);
}
} else {
var map__65941 = cljs.core.first(s__65936__$2);
var map__65941__$1 = (((((!((map__65941 == null))))?(((((map__65941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65941):map__65941);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65941__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65941__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65941__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65931,map__65941,map__65941__$1,title__$1,string,uid__$2,s__65936__$2,temp__5735__auto____$3,map__65933,map__65933__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65932,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65931,map__65941,map__65941__$1,title__$1,string,uid__$2,s__65936__$2,temp__5735__auto____$3,map__65933,map__65933__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65932,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929_$_iter__65935(cljs.core.rest(s__65936__$2)));
}
} else {
return null;
}
break;
}
});})(i__65931,map__65933,map__65933__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65932,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
,null,null));
});})(i__65931,map__65933,map__65933__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65932,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65993 = (i__65931 + (1));
i__65931 = G__65993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65932),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929(cljs.core.chunk_rest(s__65930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65932),null);
}
} else {
var map__65943 = cljs.core.first(s__65930__$2);
var map__65943__$1 = (((((!((map__65943 == null))))?(((((map__65943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65943):map__65943);
var block = map__65943__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65943__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65943__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__65943,map__65943__$1,block,uid__$1,parents,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929_$_iter__65945(s__65946){
return (new cljs.core.LazySeq(null,(function (){
var s__65946__$1 = s__65946;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65946__$1);
if(temp__5735__auto____$3){
var s__65946__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65946__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65946__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65948 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65947 = (0);
while(true){
if((i__65947 < size__4581__auto__)){
var map__65949 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65947);
var map__65949__$1 = (((((!((map__65949 == null))))?(((((map__65949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65949):map__65949);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65949__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65949__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65949__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65948,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65947,map__65949,map__65949__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$3,map__65943,map__65943__$1,block,uid__$1,parents,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65947,map__65949,map__65949__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$3,map__65943,map__65943__$1,block,uid__$1,parents,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65994 = (i__65947 + (1));
i__65947 = G__65994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65948),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929_$_iter__65945(cljs.core.chunk_rest(s__65946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65948),null);
}
} else {
var map__65951 = cljs.core.first(s__65946__$2);
var map__65951__$1 = (((((!((map__65951 == null))))?(((((map__65951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65951):map__65951);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65951__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65951__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65951__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65951,map__65951__$1,title__$1,string,uid__$2,s__65946__$2,temp__5735__auto____$3,map__65943,map__65943__$1,block,uid__$1,parents,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__65951,map__65951__$1,title__$1,string,uid__$2,s__65946__$2,temp__5735__auto____$3,map__65943,map__65943__$1,block,uid__$1,parents,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929_$_iter__65945(cljs.core.rest(s__65946__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65943,map__65943__$1,block,uid__$1,parents,s__65930__$2,temp__5735__auto____$2,vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895_$_iter__65929(cljs.core.rest(s__65930__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65926,group_title,group,s__65896__$2,temp__5735__auto____$1,vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65827_$_iter__65895(cljs.core.rest(s__65896__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65892,linked_or_unlinked,refs,s__65828__$2,temp__5735__auto__,map__65815,map__65815__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__65827(cljs.core.rest(s__65828__$2)));
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
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var map__65953 = athens.db.get_node_document(ident);
var map__65953__$1 = (((((!((map__65953 == null))))?(((((map__65953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65953):map__65953);
var node = map__65953__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__65955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65955) : re_frame.core.subscribe.call(null,G__65955));
})());
var timeline_page_QMARK_ = athens.devcards.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
