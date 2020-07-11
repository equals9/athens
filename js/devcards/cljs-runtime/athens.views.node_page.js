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
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.cssv.cljs$core$IFn$_invoke$arity$1("link-color"),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.cssv.cljs$core$IFn$_invoke$arity$1("link-color"),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.cssv.cljs$core$IFn$_invoke$arity$1("border-color")], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58184) : re_frame.core.dispatch.call(null,G__58184));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58185 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58186 = athens.db.dsdb;
var G__58187 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58185,G__58186,G__58187) : posh.reagent.q.call(null,G__58185,G__58186,G__58187));
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
return cljs.core.boolean$((function (){try{var vec__58189 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58189,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58189,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58189,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58188){if((e58188 instanceof Object)){
var _ = e58188;
return false;
} else {
throw e58188;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58192,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58193 = p__58192;
var map__58193__$1 = (((((!((map__58193 == null))))?(((((map__58193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58193):map__58193);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58195 = e.target.value;
var G__58196 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58195,G__58196) : athens.views.node_page.db_handler.call(null,G__58195,G__58196));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58197(s__58198){
return (new cljs.core.LazySeq(null,(function (){
var s__58198__$1 = s__58198;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58198__$1);
if(temp__5735__auto__){
var s__58198__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58198__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58198__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58200 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58199 = (0);
while(true){
if((i__58199 < size__4581__auto__)){
var map__58201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58199);
var map__58201__$1 = (((((!((map__58201 == null))))?(((((map__58201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58201):map__58201);
var child = map__58201__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58200,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58334 = (i__58199 + (1));
i__58199 = G__58334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58200),athens$views$node_page$node_page_el_$_iter__58197(cljs.core.chunk_rest(s__58198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58200),null);
}
} else {
var map__58203 = cljs.core.first(s__58198__$2);
var map__58203__$1 = (((((!((map__58203 == null))))?(((((map__58203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58203):map__58203);
var child = map__58203__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58197(cljs.core.rest(s__58198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58205(s__58206){
return (new cljs.core.LazySeq(null,(function (){
var s__58206__$1 = s__58206;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58206__$1);
if(temp__5735__auto__){
var s__58206__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58206__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58206__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58208 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58207 = (0);
while(true){
if((i__58207 < size__4581__auto__)){
var vec__58209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58207);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58209,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58209,(1),null);
cljs.core.chunk_append(b__58208,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58207,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212(s__58213){
return (new cljs.core.LazySeq(null,((function (i__58207,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58213__$1 = s__58213;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58213__$1);
if(temp__5735__auto____$1){
var s__58213__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58213__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58213__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58215 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58214 = (0);
while(true){
if((i__58214 < size__4581__auto____$1)){
var vec__58216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58214);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58216,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58216,(1),null);
cljs.core.chunk_append(b__58215,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58214,i__58207,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58214,i__58207,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58214,i__58207,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219(s__58220){
return (new cljs.core.LazySeq(null,((function (i__58214,i__58207,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58220__$1 = s__58220;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58220__$1);
if(temp__5735__auto____$2){
var s__58220__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58220__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58220__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58222 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58221 = (0);
while(true){
if((i__58221 < size__4581__auto____$2)){
var map__58223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58221);
var map__58223__$1 = (((((!((map__58223 == null))))?(((((map__58223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58223):map__58223);
var block = map__58223__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58222,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58221,i__58214,i__58207,map__58223,map__58223__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58222,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219_$_iter__58225(s__58226){
return (new cljs.core.LazySeq(null,((function (i__58221,i__58214,i__58207,map__58223,map__58223__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58222,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58226__$1 = s__58226;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58226__$1);
if(temp__5735__auto____$3){
var s__58226__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58226__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58226__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58228 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58227 = (0);
while(true){
if((i__58227 < size__4581__auto____$3)){
var map__58229 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58227);
var map__58229__$1 = (((((!((map__58229 == null))))?(((((map__58229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58229):map__58229);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58228,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58227,i__58221,i__58214,i__58207,map__58229,map__58229__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58228,s__58226__$2,temp__5735__auto____$3,map__58223,map__58223__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58222,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58227,i__58221,i__58214,i__58207,map__58229,map__58229__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58228,s__58226__$2,temp__5735__auto____$3,map__58223,map__58223__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58222,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58335 = (i__58227 + (1));
i__58227 = G__58335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58228),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219_$_iter__58225(cljs.core.chunk_rest(s__58226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58228),null);
}
} else {
var map__58231 = cljs.core.first(s__58226__$2);
var map__58231__$1 = (((((!((map__58231 == null))))?(((((map__58231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58231):map__58231);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58221,i__58214,i__58207,map__58231,map__58231__$1,title__$1,string,uid__$2,s__58226__$2,temp__5735__auto____$3,map__58223,map__58223__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58222,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58221,i__58214,i__58207,map__58231,map__58231__$1,title__$1,string,uid__$2,s__58226__$2,temp__5735__auto____$3,map__58223,map__58223__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58222,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219_$_iter__58225(cljs.core.rest(s__58226__$2)));
}
} else {
return null;
}
break;
}
});})(i__58221,i__58214,i__58207,map__58223,map__58223__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58222,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58221,i__58214,i__58207,map__58223,map__58223__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58222,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58336 = (i__58221 + (1));
i__58221 = G__58336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58222),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219(cljs.core.chunk_rest(s__58220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58222),null);
}
} else {
var map__58233 = cljs.core.first(s__58220__$2);
var map__58233__$1 = (((((!((map__58233 == null))))?(((((map__58233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58233):map__58233);
var block = map__58233__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58233__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58233__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58214,i__58207,map__58233,map__58233__$1,block,uid__$1,parents,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219_$_iter__58235(s__58236){
return (new cljs.core.LazySeq(null,((function (i__58214,i__58207,map__58233,map__58233__$1,block,uid__$1,parents,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58236__$1 = s__58236;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58236__$1);
if(temp__5735__auto____$3){
var s__58236__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58236__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58236__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58238 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58237 = (0);
while(true){
if((i__58237 < size__4581__auto____$2)){
var map__58239 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58237);
var map__58239__$1 = (((((!((map__58239 == null))))?(((((map__58239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58239):map__58239);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58239__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58239__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58239__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58238,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58237,i__58214,i__58207,map__58239,map__58239__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58238,s__58236__$2,temp__5735__auto____$3,map__58233,map__58233__$1,block,uid__$1,parents,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58237,i__58214,i__58207,map__58239,map__58239__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58238,s__58236__$2,temp__5735__auto____$3,map__58233,map__58233__$1,block,uid__$1,parents,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58337 = (i__58237 + (1));
i__58237 = G__58337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58238),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219_$_iter__58235(cljs.core.chunk_rest(s__58236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58238),null);
}
} else {
var map__58241 = cljs.core.first(s__58236__$2);
var map__58241__$1 = (((((!((map__58241 == null))))?(((((map__58241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58241):map__58241);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58214,i__58207,map__58241,map__58241__$1,title__$1,string,uid__$2,s__58236__$2,temp__5735__auto____$3,map__58233,map__58233__$1,block,uid__$1,parents,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58214,i__58207,map__58241,map__58241__$1,title__$1,string,uid__$2,s__58236__$2,temp__5735__auto____$3,map__58233,map__58233__$1,block,uid__$1,parents,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219_$_iter__58235(cljs.core.rest(s__58236__$2)));
}
} else {
return null;
}
break;
}
});})(i__58214,i__58207,map__58233,map__58233__$1,block,uid__$1,parents,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58214,i__58207,map__58233,map__58233__$1,block,uid__$1,parents,s__58220__$2,temp__5735__auto____$2,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58219(cljs.core.rest(s__58220__$2)));
}
} else {
return null;
}
break;
}
});})(i__58214,i__58207,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58214,i__58207,vec__58216,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58215,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58338 = (i__58214 + (1));
i__58214 = G__58338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58215),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212(cljs.core.chunk_rest(s__58213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58215),null);
}
} else {
var vec__58243 = cljs.core.first(s__58213__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58243,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58243,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58207,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58207,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58207,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246(s__58247){
return (new cljs.core.LazySeq(null,((function (i__58207,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58247__$1 = s__58247;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58247__$1);
if(temp__5735__auto____$2){
var s__58247__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58247__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58247__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58249 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58248 = (0);
while(true){
if((i__58248 < size__4581__auto____$1)){
var map__58250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58248);
var map__58250__$1 = (((((!((map__58250 == null))))?(((((map__58250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58250):map__58250);
var block = map__58250__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58249,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58248,i__58207,map__58250,map__58250__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246_$_iter__58252(s__58253){
return (new cljs.core.LazySeq(null,((function (i__58248,i__58207,map__58250,map__58250__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58253__$1 = s__58253;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58253__$1);
if(temp__5735__auto____$3){
var s__58253__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58253__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58253__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58255 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58254 = (0);
while(true){
if((i__58254 < size__4581__auto____$2)){
var map__58256 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58254);
var map__58256__$1 = (((((!((map__58256 == null))))?(((((map__58256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58256):map__58256);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58255,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58254,i__58248,i__58207,map__58256,map__58256__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58255,s__58253__$2,temp__5735__auto____$3,map__58250,map__58250__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58254,i__58248,i__58207,map__58256,map__58256__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58255,s__58253__$2,temp__5735__auto____$3,map__58250,map__58250__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58339 = (i__58254 + (1));
i__58254 = G__58339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58255),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246_$_iter__58252(cljs.core.chunk_rest(s__58253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58255),null);
}
} else {
var map__58258 = cljs.core.first(s__58253__$2);
var map__58258__$1 = (((((!((map__58258 == null))))?(((((map__58258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58258):map__58258);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58248,i__58207,map__58258,map__58258__$1,title__$1,string,uid__$2,s__58253__$2,temp__5735__auto____$3,map__58250,map__58250__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58248,i__58207,map__58258,map__58258__$1,title__$1,string,uid__$2,s__58253__$2,temp__5735__auto____$3,map__58250,map__58250__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246_$_iter__58252(cljs.core.rest(s__58253__$2)));
}
} else {
return null;
}
break;
}
});})(i__58248,i__58207,map__58250,map__58250__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58248,i__58207,map__58250,map__58250__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58249,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58340 = (i__58248 + (1));
i__58248 = G__58340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58249),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246(cljs.core.chunk_rest(s__58247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58249),null);
}
} else {
var map__58260 = cljs.core.first(s__58247__$2);
var map__58260__$1 = (((((!((map__58260 == null))))?(((((map__58260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58260):map__58260);
var block = map__58260__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58260__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58260__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58207,map__58260,map__58260__$1,block,uid__$1,parents,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246_$_iter__58262(s__58263){
return (new cljs.core.LazySeq(null,((function (i__58207,map__58260,map__58260__$1,block,uid__$1,parents,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58263__$1 = s__58263;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58263__$1);
if(temp__5735__auto____$3){
var s__58263__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58263__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58263__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58265 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58264 = (0);
while(true){
if((i__58264 < size__4581__auto____$1)){
var map__58266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58264);
var map__58266__$1 = (((((!((map__58266 == null))))?(((((map__58266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58266):map__58266);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58265,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58264,i__58207,map__58266,map__58266__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$3,map__58260,map__58260__$1,block,uid__$1,parents,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58264,i__58207,map__58266,map__58266__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58265,s__58263__$2,temp__5735__auto____$3,map__58260,map__58260__$1,block,uid__$1,parents,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58341 = (i__58264 + (1));
i__58264 = G__58341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58265),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246_$_iter__58262(cljs.core.chunk_rest(s__58263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58265),null);
}
} else {
var map__58268 = cljs.core.first(s__58263__$2);
var map__58268__$1 = (((((!((map__58268 == null))))?(((((map__58268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58268):map__58268);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58207,map__58268,map__58268__$1,title__$1,string,uid__$2,s__58263__$2,temp__5735__auto____$3,map__58260,map__58260__$1,block,uid__$1,parents,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58207,map__58268,map__58268__$1,title__$1,string,uid__$2,s__58263__$2,temp__5735__auto____$3,map__58260,map__58260__$1,block,uid__$1,parents,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246_$_iter__58262(cljs.core.rest(s__58263__$2)));
}
} else {
return null;
}
break;
}
});})(i__58207,map__58260,map__58260__$1,block,uid__$1,parents,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58207,map__58260,map__58260__$1,block,uid__$1,parents,s__58247__$2,temp__5735__auto____$2,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212_$_iter__58246(cljs.core.rest(s__58247__$2)));
}
} else {
return null;
}
break;
}
});})(i__58207,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58207,vec__58243,group_title,group,s__58213__$2,temp__5735__auto____$1,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58212(cljs.core.rest(s__58213__$2)));
}
} else {
return null;
}
break;
}
});})(i__58207,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58207,vec__58209,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58208,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58342 = (i__58207 + (1));
i__58207 = G__58342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58208),athens$views$node_page$node_page_el_$_iter__58205(cljs.core.chunk_rest(s__58206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58208),null);
}
} else {
var vec__58270 = cljs.core.first(s__58206__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58270,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58270,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273(s__58274){
return (new cljs.core.LazySeq(null,(function (){
var s__58274__$1 = s__58274;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58274__$1);
if(temp__5735__auto____$1){
var s__58274__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58274__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58274__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58276 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58275 = (0);
while(true){
if((i__58275 < size__4581__auto__)){
var vec__58277 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58275);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58277,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58277,(1),null);
cljs.core.chunk_append(b__58276,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58275,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58275,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58275,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280(s__58281){
return (new cljs.core.LazySeq(null,((function (i__58275,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58281__$1 = s__58281;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58281__$1);
if(temp__5735__auto____$2){
var s__58281__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58281__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58281__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58283 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58282 = (0);
while(true){
if((i__58282 < size__4581__auto____$1)){
var map__58284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58282);
var map__58284__$1 = (((((!((map__58284 == null))))?(((((map__58284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58284):map__58284);
var block = map__58284__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58283,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58282,i__58275,map__58284,map__58284__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58283,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280_$_iter__58286(s__58287){
return (new cljs.core.LazySeq(null,((function (i__58282,i__58275,map__58284,map__58284__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58283,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
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
cljs.core.chunk_append(b__58289,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58288,i__58282,i__58275,map__58290,map__58290__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58289,s__58287__$2,temp__5735__auto____$3,map__58284,map__58284__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58283,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58288,i__58282,i__58275,map__58290,map__58290__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58289,s__58287__$2,temp__5735__auto____$3,map__58284,map__58284__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58283,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58343 = (i__58288 + (1));
i__58288 = G__58343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58289),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280_$_iter__58286(cljs.core.chunk_rest(s__58287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58289),null);
}
} else {
var map__58292 = cljs.core.first(s__58287__$2);
var map__58292__$1 = (((((!((map__58292 == null))))?(((((map__58292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58292):map__58292);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58282,i__58275,map__58292,map__58292__$1,title__$1,string,uid__$2,s__58287__$2,temp__5735__auto____$3,map__58284,map__58284__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58283,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58282,i__58275,map__58292,map__58292__$1,title__$1,string,uid__$2,s__58287__$2,temp__5735__auto____$3,map__58284,map__58284__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58283,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280_$_iter__58286(cljs.core.rest(s__58287__$2)));
}
} else {
return null;
}
break;
}
});})(i__58282,i__58275,map__58284,map__58284__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58283,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58282,i__58275,map__58284,map__58284__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58283,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58344 = (i__58282 + (1));
i__58282 = G__58344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58283),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280(cljs.core.chunk_rest(s__58281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58283),null);
}
} else {
var map__58294 = cljs.core.first(s__58281__$2);
var map__58294__$1 = (((((!((map__58294 == null))))?(((((map__58294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58294):map__58294);
var block = map__58294__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58275,map__58294,map__58294__$1,block,uid__$1,parents,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280_$_iter__58296(s__58297){
return (new cljs.core.LazySeq(null,((function (i__58275,map__58294,map__58294__$1,block,uid__$1,parents,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
var s__58297__$1 = s__58297;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58297__$1);
if(temp__5735__auto____$3){
var s__58297__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58297__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58297__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58299 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58298 = (0);
while(true){
if((i__58298 < size__4581__auto____$1)){
var map__58300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58298);
var map__58300__$1 = (((((!((map__58300 == null))))?(((((map__58300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58300):map__58300);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58300__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58300__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58300__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58299,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58298,i__58275,map__58300,map__58300__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$3,map__58294,map__58294__$1,block,uid__$1,parents,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58298,i__58275,map__58300,map__58300__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58299,s__58297__$2,temp__5735__auto____$3,map__58294,map__58294__$1,block,uid__$1,parents,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58345 = (i__58298 + (1));
i__58298 = G__58345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58299),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280_$_iter__58296(cljs.core.chunk_rest(s__58297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58299),null);
}
} else {
var map__58302 = cljs.core.first(s__58297__$2);
var map__58302__$1 = (((((!((map__58302 == null))))?(((((map__58302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58302):map__58302);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58275,map__58302,map__58302__$1,title__$1,string,uid__$2,s__58297__$2,temp__5735__auto____$3,map__58294,map__58294__$1,block,uid__$1,parents,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58275,map__58302,map__58302__$1,title__$1,string,uid__$2,s__58297__$2,temp__5735__auto____$3,map__58294,map__58294__$1,block,uid__$1,parents,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280_$_iter__58296(cljs.core.rest(s__58297__$2)));
}
} else {
return null;
}
break;
}
});})(i__58275,map__58294,map__58294__$1,block,uid__$1,parents,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58275,map__58294,map__58294__$1,block,uid__$1,parents,s__58281__$2,temp__5735__auto____$2,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58280(cljs.core.rest(s__58281__$2)));
}
} else {
return null;
}
break;
}
});})(i__58275,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58275,vec__58277,group_title,group,c__4580__auto__,size__4581__auto__,b__58276,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58346 = (i__58275 + (1));
i__58275 = G__58346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58276),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273(cljs.core.chunk_rest(s__58274__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58276),null);
}
} else {
var vec__58304 = cljs.core.first(s__58274__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58304,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58304,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307(s__58308){
return (new cljs.core.LazySeq(null,(function (){
var s__58308__$1 = s__58308;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58308__$1);
if(temp__5735__auto____$2){
var s__58308__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58308__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58308__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58310 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58309 = (0);
while(true){
if((i__58309 < size__4581__auto__)){
var map__58311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58309);
var map__58311__$1 = (((((!((map__58311 == null))))?(((((map__58311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58311):map__58311);
var block = map__58311__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58310,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58309,map__58311,map__58311__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58310,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307_$_iter__58313(s__58314){
return (new cljs.core.LazySeq(null,((function (i__58309,map__58311,map__58311__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58310,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
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
cljs.core.chunk_append(b__58316,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58315,i__58309,map__58317,map__58317__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58316,s__58314__$2,temp__5735__auto____$3,map__58311,map__58311__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58310,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58315,i__58309,map__58317,map__58317__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58316,s__58314__$2,temp__5735__auto____$3,map__58311,map__58311__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58310,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58347 = (i__58315 + (1));
i__58315 = G__58347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58316),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307_$_iter__58313(cljs.core.chunk_rest(s__58314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58316),null);
}
} else {
var map__58319 = cljs.core.first(s__58314__$2);
var map__58319__$1 = (((((!((map__58319 == null))))?(((((map__58319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58319):map__58319);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58309,map__58319,map__58319__$1,title__$1,string,uid__$2,s__58314__$2,temp__5735__auto____$3,map__58311,map__58311__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58310,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58309,map__58319,map__58319__$1,title__$1,string,uid__$2,s__58314__$2,temp__5735__auto____$3,map__58311,map__58311__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58310,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307_$_iter__58313(cljs.core.rest(s__58314__$2)));
}
} else {
return null;
}
break;
}
});})(i__58309,map__58311,map__58311__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58310,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
,null,null));
});})(i__58309,map__58311,map__58311__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58310,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58348 = (i__58309 + (1));
i__58309 = G__58348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58310),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307(cljs.core.chunk_rest(s__58308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58310),null);
}
} else {
var map__58321 = cljs.core.first(s__58308__$2);
var map__58321__$1 = (((((!((map__58321 == null))))?(((((map__58321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58321):map__58321);
var block = map__58321__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58321,map__58321__$1,block,uid__$1,parents,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307_$_iter__58323(s__58324){
return (new cljs.core.LazySeq(null,(function (){
var s__58324__$1 = s__58324;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58324__$1);
if(temp__5735__auto____$3){
var s__58324__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58324__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58324__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58326 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58325 = (0);
while(true){
if((i__58325 < size__4581__auto__)){
var map__58327 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58325);
var map__58327__$1 = (((((!((map__58327 == null))))?(((((map__58327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58327):map__58327);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58326,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58325,map__58327,map__58327__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$3,map__58321,map__58321__$1,block,uid__$1,parents,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58325,map__58327,map__58327__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58326,s__58324__$2,temp__5735__auto____$3,map__58321,map__58321__$1,block,uid__$1,parents,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58349 = (i__58325 + (1));
i__58325 = G__58349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58326),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307_$_iter__58323(cljs.core.chunk_rest(s__58324__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58326),null);
}
} else {
var map__58329 = cljs.core.first(s__58324__$2);
var map__58329__$1 = (((((!((map__58329 == null))))?(((((map__58329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58329):map__58329);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58329__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58329__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58329__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58329,map__58329__$1,title__$1,string,uid__$2,s__58324__$2,temp__5735__auto____$3,map__58321,map__58321__$1,block,uid__$1,parents,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58329,map__58329__$1,title__$1,string,uid__$2,s__58324__$2,temp__5735__auto____$3,map__58321,map__58321__$1,block,uid__$1,parents,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307_$_iter__58323(cljs.core.rest(s__58324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58321,map__58321__$1,block,uid__$1,parents,s__58308__$2,temp__5735__auto____$2,vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273_$_iter__58307(cljs.core.rest(s__58308__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58304,group_title,group,s__58274__$2,temp__5735__auto____$1,vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58205_$_iter__58273(cljs.core.rest(s__58274__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58270,linked_or_unlinked,refs,s__58206__$2,temp__5735__auto__,map__58193,map__58193__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58205(cljs.core.rest(s__58206__$2)));
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
var map__58331 = athens.db.get_node_document(ident);
var map__58331__$1 = (((((!((map__58331 == null))))?(((((map__58331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58331):map__58331);
var node = map__58331__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58333) : re_frame.core.subscribe.call(null,G__58333));
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
