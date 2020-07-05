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
var G__58084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58084) : re_frame.core.dispatch.call(null,G__58084));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58085 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58086 = athens.db.dsdb;
var G__58087 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58085,G__58086,G__58087) : posh.reagent.q.call(null,G__58085,G__58086,G__58087));
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
return cljs.core.boolean$((function (){try{var vec__58089 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58089,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58089,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58089,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58088){if((e58088 instanceof Object)){
var _ = e58088;
return false;
} else {
throw e58088;

}
}})());
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58092,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58093 = p__58092;
var map__58093__$1 = (((((!((map__58093 == null))))?(((((map__58093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58093):map__58093);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58095 = e.target.value;
var G__58096 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58095,G__58096) : athens.devcards.node_page.db_handler.call(null,G__58095,G__58096));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),((cljs.core.not(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58097(s__58098){
return (new cljs.core.LazySeq(null,(function (){
var s__58098__$1 = s__58098;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58098__$1);
if(temp__5735__auto__){
var s__58098__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58098__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58098__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58100 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58099 = (0);
while(true){
if((i__58099 < size__4581__auto__)){
var map__58101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58099);
var map__58101__$1 = (((((!((map__58101 == null))))?(((((map__58101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58101):map__58101);
var child = map__58101__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58100,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58260 = (i__58099 + (1));
i__58099 = G__58260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58100),athens$devcards$node_page$node_page_el_$_iter__58097(cljs.core.chunk_rest(s__58098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58100),null);
}
} else {
var map__58103 = cljs.core.first(s__58098__$2);
var map__58103__$1 = (((((!((map__58103 == null))))?(((((map__58103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58103):map__58103);
var child = map__58103__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58097(cljs.core.rest(s__58098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58105(s__58106){
return (new cljs.core.LazySeq(null,(function (){
var s__58106__$1 = s__58106;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58106__$1);
if(temp__5735__auto__){
var s__58106__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58106__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58106__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58108 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58107 = (0);
while(true){
if((i__58107 < size__4581__auto__)){
var vec__58109 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58107);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58109,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58109,(1),null);
cljs.core.chunk_append(b__58108,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58107,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112(s__58113){
return (new cljs.core.LazySeq(null,((function (i__58107,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58113__$1 = s__58113;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58113__$1);
if(temp__5735__auto____$1){
var s__58113__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58113__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58113__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58115 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58114 = (0);
while(true){
if((i__58114 < size__4581__auto____$1)){
var vec__58116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58114);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58116,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58116,(1),null);
cljs.core.chunk_append(b__58115,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58114,i__58107,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58114,i__58107,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58114,i__58107,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119(s__58120){
return (new cljs.core.LazySeq(null,((function (i__58114,i__58107,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58120__$1 = s__58120;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58120__$1);
if(temp__5735__auto____$2){
var s__58120__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58120__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58120__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58122 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58121 = (0);
while(true){
if((i__58121 < size__4581__auto____$2)){
var map__58123 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58121);
var map__58123__$1 = (((((!((map__58123 == null))))?(((((map__58123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58123):map__58123);
var block = map__58123__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58122,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58121,i__58114,i__58107,map__58123,map__58123__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58122,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119_$_iter__58125(s__58126){
return (new cljs.core.LazySeq(null,((function (i__58121,i__58114,i__58107,map__58123,map__58123__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58122,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58126__$1 = s__58126;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58126__$1);
if(temp__5735__auto____$3){
var s__58126__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58126__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58126__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58128 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58127 = (0);
while(true){
if((i__58127 < size__4581__auto____$3)){
var map__58129 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58127);
var map__58129__$1 = (((((!((map__58129 == null))))?(((((map__58129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58129):map__58129);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58128,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58127,i__58121,i__58114,i__58107,map__58129,map__58129__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58128,s__58126__$2,temp__5735__auto____$3,map__58123,map__58123__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58122,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58127,i__58121,i__58114,i__58107,map__58129,map__58129__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58128,s__58126__$2,temp__5735__auto____$3,map__58123,map__58123__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58122,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58264 = (i__58127 + (1));
i__58127 = G__58264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58128),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119_$_iter__58125(cljs.core.chunk_rest(s__58126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58128),null);
}
} else {
var map__58131 = cljs.core.first(s__58126__$2);
var map__58131__$1 = (((((!((map__58131 == null))))?(((((map__58131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58131):map__58131);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58121,i__58114,i__58107,map__58131,map__58131__$1,title__$1,string,uid__$2,s__58126__$2,temp__5735__auto____$3,map__58123,map__58123__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58122,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58121,i__58114,i__58107,map__58131,map__58131__$1,title__$1,string,uid__$2,s__58126__$2,temp__5735__auto____$3,map__58123,map__58123__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58122,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119_$_iter__58125(cljs.core.rest(s__58126__$2)));
}
} else {
return null;
}
break;
}
});})(i__58121,i__58114,i__58107,map__58123,map__58123__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58122,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58121,i__58114,i__58107,map__58123,map__58123__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58122,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58265 = (i__58121 + (1));
i__58121 = G__58265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58122),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119(cljs.core.chunk_rest(s__58120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58122),null);
}
} else {
var map__58133 = cljs.core.first(s__58120__$2);
var map__58133__$1 = (((((!((map__58133 == null))))?(((((map__58133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58133):map__58133);
var block = map__58133__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58114,i__58107,map__58133,map__58133__$1,block,uid__$1,parents,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119_$_iter__58135(s__58136){
return (new cljs.core.LazySeq(null,((function (i__58114,i__58107,map__58133,map__58133__$1,block,uid__$1,parents,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58136__$1 = s__58136;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58136__$1);
if(temp__5735__auto____$3){
var s__58136__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58136__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58136__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58138 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58137 = (0);
while(true){
if((i__58137 < size__4581__auto____$2)){
var map__58139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58137);
var map__58139__$1 = (((((!((map__58139 == null))))?(((((map__58139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58139):map__58139);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58138,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58137,i__58114,i__58107,map__58139,map__58139__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58138,s__58136__$2,temp__5735__auto____$3,map__58133,map__58133__$1,block,uid__$1,parents,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58137,i__58114,i__58107,map__58139,map__58139__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58138,s__58136__$2,temp__5735__auto____$3,map__58133,map__58133__$1,block,uid__$1,parents,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58266 = (i__58137 + (1));
i__58137 = G__58266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58138),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119_$_iter__58135(cljs.core.chunk_rest(s__58136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58138),null);
}
} else {
var map__58141 = cljs.core.first(s__58136__$2);
var map__58141__$1 = (((((!((map__58141 == null))))?(((((map__58141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58141):map__58141);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58114,i__58107,map__58141,map__58141__$1,title__$1,string,uid__$2,s__58136__$2,temp__5735__auto____$3,map__58133,map__58133__$1,block,uid__$1,parents,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58114,i__58107,map__58141,map__58141__$1,title__$1,string,uid__$2,s__58136__$2,temp__5735__auto____$3,map__58133,map__58133__$1,block,uid__$1,parents,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119_$_iter__58135(cljs.core.rest(s__58136__$2)));
}
} else {
return null;
}
break;
}
});})(i__58114,i__58107,map__58133,map__58133__$1,block,uid__$1,parents,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58114,i__58107,map__58133,map__58133__$1,block,uid__$1,parents,s__58120__$2,temp__5735__auto____$2,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58119(cljs.core.rest(s__58120__$2)));
}
} else {
return null;
}
break;
}
});})(i__58114,i__58107,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58114,i__58107,vec__58116,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58115,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58267 = (i__58114 + (1));
i__58114 = G__58267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58115),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112(cljs.core.chunk_rest(s__58113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58115),null);
}
} else {
var vec__58143 = cljs.core.first(s__58113__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58143,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58143,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58107,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58107,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58107,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146(s__58147){
return (new cljs.core.LazySeq(null,((function (i__58107,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58147__$1 = s__58147;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58147__$1);
if(temp__5735__auto____$2){
var s__58147__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58147__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58147__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58149 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58148 = (0);
while(true){
if((i__58148 < size__4581__auto____$1)){
var map__58150 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58148);
var map__58150__$1 = (((((!((map__58150 == null))))?(((((map__58150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58150):map__58150);
var block = map__58150__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58150__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58150__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58149,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58148,i__58107,map__58150,map__58150__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58149,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146_$_iter__58152(s__58153){
return (new cljs.core.LazySeq(null,((function (i__58148,i__58107,map__58150,map__58150__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58149,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58153__$1 = s__58153;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58153__$1);
if(temp__5735__auto____$3){
var s__58153__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58153__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58153__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58155 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58154 = (0);
while(true){
if((i__58154 < size__4581__auto____$2)){
var map__58156 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58154);
var map__58156__$1 = (((((!((map__58156 == null))))?(((((map__58156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58156):map__58156);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58155,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58154,i__58148,i__58107,map__58156,map__58156__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58155,s__58153__$2,temp__5735__auto____$3,map__58150,map__58150__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58149,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58154,i__58148,i__58107,map__58156,map__58156__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58155,s__58153__$2,temp__5735__auto____$3,map__58150,map__58150__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58149,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58268 = (i__58154 + (1));
i__58154 = G__58268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58155),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146_$_iter__58152(cljs.core.chunk_rest(s__58153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58155),null);
}
} else {
var map__58158 = cljs.core.first(s__58153__$2);
var map__58158__$1 = (((((!((map__58158 == null))))?(((((map__58158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58158):map__58158);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58148,i__58107,map__58158,map__58158__$1,title__$1,string,uid__$2,s__58153__$2,temp__5735__auto____$3,map__58150,map__58150__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58149,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58148,i__58107,map__58158,map__58158__$1,title__$1,string,uid__$2,s__58153__$2,temp__5735__auto____$3,map__58150,map__58150__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58149,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146_$_iter__58152(cljs.core.rest(s__58153__$2)));
}
} else {
return null;
}
break;
}
});})(i__58148,i__58107,map__58150,map__58150__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58149,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58148,i__58107,map__58150,map__58150__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58149,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58269 = (i__58148 + (1));
i__58148 = G__58269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58149),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146(cljs.core.chunk_rest(s__58147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58149),null);
}
} else {
var map__58160 = cljs.core.first(s__58147__$2);
var map__58160__$1 = (((((!((map__58160 == null))))?(((((map__58160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58160):map__58160);
var block = map__58160__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58107,map__58160,map__58160__$1,block,uid__$1,parents,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146_$_iter__58162(s__58163){
return (new cljs.core.LazySeq(null,((function (i__58107,map__58160,map__58160__$1,block,uid__$1,parents,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58163__$1 = s__58163;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58163__$1);
if(temp__5735__auto____$3){
var s__58163__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58163__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58163__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58165 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58164 = (0);
while(true){
if((i__58164 < size__4581__auto____$1)){
var map__58166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58164);
var map__58166__$1 = (((((!((map__58166 == null))))?(((((map__58166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58166):map__58166);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58164,i__58107,map__58166,map__58166__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$3,map__58160,map__58160__$1,block,uid__$1,parents,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58164,i__58107,map__58166,map__58166__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58165,s__58163__$2,temp__5735__auto____$3,map__58160,map__58160__$1,block,uid__$1,parents,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58270 = (i__58164 + (1));
i__58164 = G__58270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58165),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146_$_iter__58162(cljs.core.chunk_rest(s__58163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58165),null);
}
} else {
var map__58168 = cljs.core.first(s__58163__$2);
var map__58168__$1 = (((((!((map__58168 == null))))?(((((map__58168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58168):map__58168);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58107,map__58168,map__58168__$1,title__$1,string,uid__$2,s__58163__$2,temp__5735__auto____$3,map__58160,map__58160__$1,block,uid__$1,parents,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58107,map__58168,map__58168__$1,title__$1,string,uid__$2,s__58163__$2,temp__5735__auto____$3,map__58160,map__58160__$1,block,uid__$1,parents,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146_$_iter__58162(cljs.core.rest(s__58163__$2)));
}
} else {
return null;
}
break;
}
});})(i__58107,map__58160,map__58160__$1,block,uid__$1,parents,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58107,map__58160,map__58160__$1,block,uid__$1,parents,s__58147__$2,temp__5735__auto____$2,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112_$_iter__58146(cljs.core.rest(s__58147__$2)));
}
} else {
return null;
}
break;
}
});})(i__58107,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58107,vec__58143,group_title,group,s__58113__$2,temp__5735__auto____$1,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58112(cljs.core.rest(s__58113__$2)));
}
} else {
return null;
}
break;
}
});})(i__58107,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58107,vec__58109,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58108,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58271 = (i__58107 + (1));
i__58107 = G__58271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58108),athens$devcards$node_page$node_page_el_$_iter__58105(cljs.core.chunk_rest(s__58106__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58108),null);
}
} else {
var vec__58170 = cljs.core.first(s__58106__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58170,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58170,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173(s__58174){
return (new cljs.core.LazySeq(null,(function (){
var s__58174__$1 = s__58174;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58174__$1);
if(temp__5735__auto____$1){
var s__58174__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58174__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58174__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58176 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58175 = (0);
while(true){
if((i__58175 < size__4581__auto__)){
var vec__58177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58175);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58177,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58177,(1),null);
cljs.core.chunk_append(b__58176,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58175,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58175,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58175,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180(s__58181){
return (new cljs.core.LazySeq(null,((function (i__58175,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58181__$1 = s__58181;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58181__$1);
if(temp__5735__auto____$2){
var s__58181__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58181__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58181__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58183 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58182 = (0);
while(true){
if((i__58182 < size__4581__auto____$1)){
var map__58184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58182);
var map__58184__$1 = (((((!((map__58184 == null))))?(((((map__58184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58184):map__58184);
var block = map__58184__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58183,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58182,i__58175,map__58184,map__58184__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58183,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180_$_iter__58186(s__58187){
return (new cljs.core.LazySeq(null,((function (i__58182,i__58175,map__58184,map__58184__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58183,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58187__$1 = s__58187;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58187__$1);
if(temp__5735__auto____$3){
var s__58187__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58187__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58187__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58189 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58188 = (0);
while(true){
if((i__58188 < size__4581__auto____$2)){
var map__58190 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58188);
var map__58190__$1 = (((((!((map__58190 == null))))?(((((map__58190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58190):map__58190);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58189,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58188,i__58182,i__58175,map__58190,map__58190__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58189,s__58187__$2,temp__5735__auto____$3,map__58184,map__58184__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58183,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58188,i__58182,i__58175,map__58190,map__58190__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58189,s__58187__$2,temp__5735__auto____$3,map__58184,map__58184__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58183,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58272 = (i__58188 + (1));
i__58188 = G__58272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58189),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180_$_iter__58186(cljs.core.chunk_rest(s__58187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58189),null);
}
} else {
var map__58192 = cljs.core.first(s__58187__$2);
var map__58192__$1 = (((((!((map__58192 == null))))?(((((map__58192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58192):map__58192);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58182,i__58175,map__58192,map__58192__$1,title__$1,string,uid__$2,s__58187__$2,temp__5735__auto____$3,map__58184,map__58184__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58183,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58182,i__58175,map__58192,map__58192__$1,title__$1,string,uid__$2,s__58187__$2,temp__5735__auto____$3,map__58184,map__58184__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58183,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180_$_iter__58186(cljs.core.rest(s__58187__$2)));
}
} else {
return null;
}
break;
}
});})(i__58182,i__58175,map__58184,map__58184__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58183,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58182,i__58175,map__58184,map__58184__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58183,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58273 = (i__58182 + (1));
i__58182 = G__58273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58183),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180(cljs.core.chunk_rest(s__58181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58183),null);
}
} else {
var map__58194 = cljs.core.first(s__58181__$2);
var map__58194__$1 = (((((!((map__58194 == null))))?(((((map__58194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58194):map__58194);
var block = map__58194__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58175,map__58194,map__58194__$1,block,uid__$1,parents,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180_$_iter__58196(s__58197){
return (new cljs.core.LazySeq(null,((function (i__58175,map__58194,map__58194__$1,block,uid__$1,parents,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58197__$1 = s__58197;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58197__$1);
if(temp__5735__auto____$3){
var s__58197__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58197__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58197__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58199 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58198 = (0);
while(true){
if((i__58198 < size__4581__auto____$1)){
var map__58200 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58198);
var map__58200__$1 = (((((!((map__58200 == null))))?(((((map__58200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58200):map__58200);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58199,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58198,i__58175,map__58200,map__58200__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$3,map__58194,map__58194__$1,block,uid__$1,parents,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58198,i__58175,map__58200,map__58200__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58199,s__58197__$2,temp__5735__auto____$3,map__58194,map__58194__$1,block,uid__$1,parents,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58274 = (i__58198 + (1));
i__58198 = G__58274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58199),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180_$_iter__58196(cljs.core.chunk_rest(s__58197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58199),null);
}
} else {
var map__58202 = cljs.core.first(s__58197__$2);
var map__58202__$1 = (((((!((map__58202 == null))))?(((((map__58202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58202):map__58202);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58175,map__58202,map__58202__$1,title__$1,string,uid__$2,s__58197__$2,temp__5735__auto____$3,map__58194,map__58194__$1,block,uid__$1,parents,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58175,map__58202,map__58202__$1,title__$1,string,uid__$2,s__58197__$2,temp__5735__auto____$3,map__58194,map__58194__$1,block,uid__$1,parents,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180_$_iter__58196(cljs.core.rest(s__58197__$2)));
}
} else {
return null;
}
break;
}
});})(i__58175,map__58194,map__58194__$1,block,uid__$1,parents,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58175,map__58194,map__58194__$1,block,uid__$1,parents,s__58181__$2,temp__5735__auto____$2,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58180(cljs.core.rest(s__58181__$2)));
}
} else {
return null;
}
break;
}
});})(i__58175,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58175,vec__58177,group_title,group,c__4580__auto__,size__4581__auto__,b__58176,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(group);
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
return cljs.core.chunk_cons(cljs.core.chunk(b__58176),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173(cljs.core.chunk_rest(s__58174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58176),null);
}
} else {
var vec__58204 = cljs.core.first(s__58174__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58204,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58204,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207(s__58208){
return (new cljs.core.LazySeq(null,(function (){
var s__58208__$1 = s__58208;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58208__$1);
if(temp__5735__auto____$2){
var s__58208__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58208__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58208__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58210 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58209 = (0);
while(true){
if((i__58209 < size__4581__auto__)){
var map__58211 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58209);
var map__58211__$1 = (((((!((map__58211 == null))))?(((((map__58211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58211):map__58211);
var block = map__58211__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58210,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58209,map__58211,map__58211__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58210,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207_$_iter__58213(s__58214){
return (new cljs.core.LazySeq(null,((function (i__58209,map__58211,map__58211__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58210,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
var s__58214__$1 = s__58214;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58214__$1);
if(temp__5735__auto____$3){
var s__58214__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58214__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58214__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58216 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58215 = (0);
while(true){
if((i__58215 < size__4581__auto____$1)){
var map__58217 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58215);
var map__58217__$1 = (((((!((map__58217 == null))))?(((((map__58217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58217):map__58217);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58216,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58215,i__58209,map__58217,map__58217__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58216,s__58214__$2,temp__5735__auto____$3,map__58211,map__58211__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58210,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58215,i__58209,map__58217,map__58217__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58216,s__58214__$2,temp__5735__auto____$3,map__58211,map__58211__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58210,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58276 = (i__58215 + (1));
i__58215 = G__58276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58216),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207_$_iter__58213(cljs.core.chunk_rest(s__58214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58216),null);
}
} else {
var map__58219 = cljs.core.first(s__58214__$2);
var map__58219__$1 = (((((!((map__58219 == null))))?(((((map__58219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58219):map__58219);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58209,map__58219,map__58219__$1,title__$1,string,uid__$2,s__58214__$2,temp__5735__auto____$3,map__58211,map__58211__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58210,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58209,map__58219,map__58219__$1,title__$1,string,uid__$2,s__58214__$2,temp__5735__auto____$3,map__58211,map__58211__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58210,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207_$_iter__58213(cljs.core.rest(s__58214__$2)));
}
} else {
return null;
}
break;
}
});})(i__58209,map__58211,map__58211__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58210,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
,null,null));
});})(i__58209,map__58211,map__58211__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58210,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58277 = (i__58209 + (1));
i__58209 = G__58277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58210),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207(cljs.core.chunk_rest(s__58208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58210),null);
}
} else {
var map__58221 = cljs.core.first(s__58208__$2);
var map__58221__$1 = (((((!((map__58221 == null))))?(((((map__58221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58221):map__58221);
var block = map__58221__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58221,map__58221__$1,block,uid__$1,parents,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207_$_iter__58223(s__58224){
return (new cljs.core.LazySeq(null,(function (){
var s__58224__$1 = s__58224;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58224__$1);
if(temp__5735__auto____$3){
var s__58224__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58224__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58224__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58226 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58225 = (0);
while(true){
if((i__58225 < size__4581__auto__)){
var map__58227 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58225);
var map__58227__$1 = (((((!((map__58227 == null))))?(((((map__58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58227):map__58227);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58226,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58225,map__58227,map__58227__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$3,map__58221,map__58221__$1,block,uid__$1,parents,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58225,map__58227,map__58227__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58226,s__58224__$2,temp__5735__auto____$3,map__58221,map__58221__$1,block,uid__$1,parents,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58278 = (i__58225 + (1));
i__58225 = G__58278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58226),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207_$_iter__58223(cljs.core.chunk_rest(s__58224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58226),null);
}
} else {
var map__58229 = cljs.core.first(s__58224__$2);
var map__58229__$1 = (((((!((map__58229 == null))))?(((((map__58229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58229):map__58229);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58229,map__58229__$1,title__$1,string,uid__$2,s__58224__$2,temp__5735__auto____$3,map__58221,map__58221__$1,block,uid__$1,parents,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58229,map__58229__$1,title__$1,string,uid__$2,s__58224__$2,temp__5735__auto____$3,map__58221,map__58221__$1,block,uid__$1,parents,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207_$_iter__58223(cljs.core.rest(s__58224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58221,map__58221__$1,block,uid__$1,parents,s__58208__$2,temp__5735__auto____$2,vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173_$_iter__58207(cljs.core.rest(s__58208__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58204,group_title,group,s__58174__$2,temp__5735__auto____$1,vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58105_$_iter__58173(cljs.core.rest(s__58174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58170,linked_or_unlinked,refs,s__58106__$2,temp__5735__auto__,map__58093,map__58093__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__58105(cljs.core.rest(s__58106__$2)));
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
var map__58231 = athens.db.get_node_document(ident);
var map__58231__$1 = (((((!((map__58231 == null))))?(((((map__58231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58231):map__58231);
var node = map__58231__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58233) : re_frame.core.subscribe.call(null,G__58233));
})());
var timeline_page_QMARK_ = athens.devcards.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.node_page","athens.devcards.node_page",-728487734),new cljs.core.Keyword(null,"Node-Page","Node-Page",2010568893)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Node-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"pull entity 4093: \"Hyperlink\" page",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page58234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page58234 = (function (meta58235){
this.meta58235 = meta58235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page58234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58236,meta58235__$1){
var self__ = this;
var _58236__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page58234(meta58235__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58236){
var self__ = this;
var _58236__$1 = this;
return self__.meta58235;
}));

(athens.devcards.node_page.t_athens$devcards$node_page58234.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page58234.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41690__auto__,devcard_opts__41691__auto__){
var self__ = this;
var this__41690__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41691__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41709__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,(4093)], null);
if(cljs.core.fn_QMARK_(v__41709__auto__)){
return (function (data_atom__41710__auto__,owner__41711__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41709__auto__,data_atom__41710__auto__,owner__41711__auto__], null));
});
} else {
return reagent.core.as_element(v__41709__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41691__auto__))], 0))], 0));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58235","meta58235",-527078988,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page58234.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page58234.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page58234");

(athens.devcards.node_page.t_athens$devcards$node_page58234.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page58234");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page58234.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page58234 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page58234(meta58235){
return (new athens.devcards.node_page.t_athens$devcards$node_page58234(meta58235));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page58234(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
