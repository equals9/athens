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
var G__58227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58227) : re_frame.core.dispatch.call(null,G__58227));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58228 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58229 = athens.db.dsdb;
var G__58230 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58228,G__58229,G__58230) : posh.reagent.q.call(null,G__58228,G__58229,G__58230));
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
return cljs.core.boolean$((function (){try{var vec__58232 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58232,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58232,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58232,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58231){if((e58231 instanceof Object)){
var _ = e58231;
return false;
} else {
throw e58231;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58235,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58236 = p__58235;
var map__58236__$1 = (((((!((map__58236 == null))))?(((((map__58236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58236):map__58236);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58238 = e.target.value;
var G__58239 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58238,G__58239) : athens.views.node_page.db_handler.call(null,G__58238,G__58239));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58240(s__58241){
return (new cljs.core.LazySeq(null,(function (){
var s__58241__$1 = s__58241;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58241__$1);
if(temp__5735__auto__){
var s__58241__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58241__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58241__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58243 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58242 = (0);
while(true){
if((i__58242 < size__4581__auto__)){
var map__58244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58242);
var map__58244__$1 = (((((!((map__58244 == null))))?(((((map__58244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58244):map__58244);
var child = map__58244__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58243,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58377 = (i__58242 + (1));
i__58242 = G__58377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58243),athens$views$node_page$node_page_el_$_iter__58240(cljs.core.chunk_rest(s__58241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58243),null);
}
} else {
var map__58246 = cljs.core.first(s__58241__$2);
var map__58246__$1 = (((((!((map__58246 == null))))?(((((map__58246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58246):map__58246);
var child = map__58246__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58246__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58240(cljs.core.rest(s__58241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58248(s__58249){
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
var vec__58252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58250);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58252,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58252,(1),null);
cljs.core.chunk_append(b__58251,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58250,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255(s__58256){
return (new cljs.core.LazySeq(null,((function (i__58250,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58256__$1 = s__58256;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58256__$1);
if(temp__5735__auto____$1){
var s__58256__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58256__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58256__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58258 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58257 = (0);
while(true){
if((i__58257 < size__4581__auto____$1)){
var vec__58259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58257);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58259,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58259,(1),null);
cljs.core.chunk_append(b__58258,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58257,i__58250,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58257,i__58250,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58257,i__58250,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262(s__58263){
return (new cljs.core.LazySeq(null,((function (i__58257,i__58250,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58263__$1 = s__58263;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58263__$1);
if(temp__5735__auto____$2){
var s__58263__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58263__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58263__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58265 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58264 = (0);
while(true){
if((i__58264 < size__4581__auto____$2)){
var map__58266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58264);
var map__58266__$1 = (((((!((map__58266 == null))))?(((((map__58266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58266):map__58266);
var block = map__58266__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58265,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58264,i__58257,i__58250,map__58266,map__58266__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58265,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262_$_iter__58268(s__58269){
return (new cljs.core.LazySeq(null,((function (i__58264,i__58257,i__58250,map__58266,map__58266__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58265,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58269__$1 = s__58269;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58269__$1);
if(temp__5735__auto____$3){
var s__58269__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58269__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58269__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58271 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58270 = (0);
while(true){
if((i__58270 < size__4581__auto____$3)){
var map__58272 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58270);
var map__58272__$1 = (((((!((map__58272 == null))))?(((((map__58272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58272):map__58272);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58272__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58272__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58272__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58271,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58270,i__58264,i__58257,i__58250,map__58272,map__58272__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58271,s__58269__$2,temp__5735__auto____$3,map__58266,map__58266__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58265,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58270,i__58264,i__58257,i__58250,map__58272,map__58272__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58271,s__58269__$2,temp__5735__auto____$3,map__58266,map__58266__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58265,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58378 = (i__58270 + (1));
i__58270 = G__58378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58271),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262_$_iter__58268(cljs.core.chunk_rest(s__58269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58271),null);
}
} else {
var map__58274 = cljs.core.first(s__58269__$2);
var map__58274__$1 = (((((!((map__58274 == null))))?(((((map__58274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58274):map__58274);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58264,i__58257,i__58250,map__58274,map__58274__$1,title__$1,string,uid__$2,s__58269__$2,temp__5735__auto____$3,map__58266,map__58266__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58265,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58264,i__58257,i__58250,map__58274,map__58274__$1,title__$1,string,uid__$2,s__58269__$2,temp__5735__auto____$3,map__58266,map__58266__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58265,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262_$_iter__58268(cljs.core.rest(s__58269__$2)));
}
} else {
return null;
}
break;
}
});})(i__58264,i__58257,i__58250,map__58266,map__58266__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58265,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58264,i__58257,i__58250,map__58266,map__58266__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58265,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58379 = (i__58264 + (1));
i__58264 = G__58379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58265),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262(cljs.core.chunk_rest(s__58263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58265),null);
}
} else {
var map__58276 = cljs.core.first(s__58263__$2);
var map__58276__$1 = (((((!((map__58276 == null))))?(((((map__58276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58276):map__58276);
var block = map__58276__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58257,i__58250,map__58276,map__58276__$1,block,uid__$1,parents,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262_$_iter__58278(s__58279){
return (new cljs.core.LazySeq(null,((function (i__58257,i__58250,map__58276,map__58276__$1,block,uid__$1,parents,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58279__$1 = s__58279;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58279__$1);
if(temp__5735__auto____$3){
var s__58279__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58279__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58279__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58281 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58280 = (0);
while(true){
if((i__58280 < size__4581__auto____$2)){
var map__58282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58280);
var map__58282__$1 = (((((!((map__58282 == null))))?(((((map__58282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58282):map__58282);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58281,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58280,i__58257,i__58250,map__58282,map__58282__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58281,s__58279__$2,temp__5735__auto____$3,map__58276,map__58276__$1,block,uid__$1,parents,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58280,i__58257,i__58250,map__58282,map__58282__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58281,s__58279__$2,temp__5735__auto____$3,map__58276,map__58276__$1,block,uid__$1,parents,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58380 = (i__58280 + (1));
i__58280 = G__58380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58281),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262_$_iter__58278(cljs.core.chunk_rest(s__58279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58281),null);
}
} else {
var map__58284 = cljs.core.first(s__58279__$2);
var map__58284__$1 = (((((!((map__58284 == null))))?(((((map__58284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58284):map__58284);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58257,i__58250,map__58284,map__58284__$1,title__$1,string,uid__$2,s__58279__$2,temp__5735__auto____$3,map__58276,map__58276__$1,block,uid__$1,parents,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58257,i__58250,map__58284,map__58284__$1,title__$1,string,uid__$2,s__58279__$2,temp__5735__auto____$3,map__58276,map__58276__$1,block,uid__$1,parents,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262_$_iter__58278(cljs.core.rest(s__58279__$2)));
}
} else {
return null;
}
break;
}
});})(i__58257,i__58250,map__58276,map__58276__$1,block,uid__$1,parents,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58257,i__58250,map__58276,map__58276__$1,block,uid__$1,parents,s__58263__$2,temp__5735__auto____$2,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58262(cljs.core.rest(s__58263__$2)));
}
} else {
return null;
}
break;
}
});})(i__58257,i__58250,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58257,i__58250,vec__58259,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58381 = (i__58257 + (1));
i__58257 = G__58381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58258),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255(cljs.core.chunk_rest(s__58256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58258),null);
}
} else {
var vec__58286 = cljs.core.first(s__58256__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58286,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58286,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58250,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58250,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58250,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289(s__58290){
return (new cljs.core.LazySeq(null,((function (i__58250,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58290__$1 = s__58290;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58290__$1);
if(temp__5735__auto____$2){
var s__58290__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58290__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58290__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58292 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58291 = (0);
while(true){
if((i__58291 < size__4581__auto____$1)){
var map__58293 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58291);
var map__58293__$1 = (((((!((map__58293 == null))))?(((((map__58293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58293):map__58293);
var block = map__58293__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58292,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58291,i__58250,map__58293,map__58293__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58292,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289_$_iter__58295(s__58296){
return (new cljs.core.LazySeq(null,((function (i__58291,i__58250,map__58293,map__58293__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58292,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58296__$1 = s__58296;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58296__$1);
if(temp__5735__auto____$3){
var s__58296__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58296__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58296__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58298 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58297 = (0);
while(true){
if((i__58297 < size__4581__auto____$2)){
var map__58299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58297);
var map__58299__$1 = (((((!((map__58299 == null))))?(((((map__58299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58299):map__58299);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58298,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58297,i__58291,i__58250,map__58299,map__58299__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58298,s__58296__$2,temp__5735__auto____$3,map__58293,map__58293__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58292,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58297,i__58291,i__58250,map__58299,map__58299__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58298,s__58296__$2,temp__5735__auto____$3,map__58293,map__58293__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58292,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58382 = (i__58297 + (1));
i__58297 = G__58382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58298),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289_$_iter__58295(cljs.core.chunk_rest(s__58296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58298),null);
}
} else {
var map__58301 = cljs.core.first(s__58296__$2);
var map__58301__$1 = (((((!((map__58301 == null))))?(((((map__58301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58301):map__58301);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58291,i__58250,map__58301,map__58301__$1,title__$1,string,uid__$2,s__58296__$2,temp__5735__auto____$3,map__58293,map__58293__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58292,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58291,i__58250,map__58301,map__58301__$1,title__$1,string,uid__$2,s__58296__$2,temp__5735__auto____$3,map__58293,map__58293__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58292,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289_$_iter__58295(cljs.core.rest(s__58296__$2)));
}
} else {
return null;
}
break;
}
});})(i__58291,i__58250,map__58293,map__58293__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58292,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58291,i__58250,map__58293,map__58293__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58292,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58383 = (i__58291 + (1));
i__58291 = G__58383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58292),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289(cljs.core.chunk_rest(s__58290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58292),null);
}
} else {
var map__58303 = cljs.core.first(s__58290__$2);
var map__58303__$1 = (((((!((map__58303 == null))))?(((((map__58303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58303):map__58303);
var block = map__58303__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58303__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58303__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58250,map__58303,map__58303__$1,block,uid__$1,parents,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289_$_iter__58305(s__58306){
return (new cljs.core.LazySeq(null,((function (i__58250,map__58303,map__58303__$1,block,uid__$1,parents,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58306__$1 = s__58306;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58306__$1);
if(temp__5735__auto____$3){
var s__58306__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58306__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58306__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58308 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58307 = (0);
while(true){
if((i__58307 < size__4581__auto____$1)){
var map__58309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58307);
var map__58309__$1 = (((((!((map__58309 == null))))?(((((map__58309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58309):map__58309);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58308,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58307,i__58250,map__58309,map__58309__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$3,map__58303,map__58303__$1,block,uid__$1,parents,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58307,i__58250,map__58309,map__58309__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$3,map__58303,map__58303__$1,block,uid__$1,parents,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58384 = (i__58307 + (1));
i__58307 = G__58384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58308),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289_$_iter__58305(cljs.core.chunk_rest(s__58306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58308),null);
}
} else {
var map__58311 = cljs.core.first(s__58306__$2);
var map__58311__$1 = (((((!((map__58311 == null))))?(((((map__58311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58311):map__58311);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58250,map__58311,map__58311__$1,title__$1,string,uid__$2,s__58306__$2,temp__5735__auto____$3,map__58303,map__58303__$1,block,uid__$1,parents,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58250,map__58311,map__58311__$1,title__$1,string,uid__$2,s__58306__$2,temp__5735__auto____$3,map__58303,map__58303__$1,block,uid__$1,parents,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289_$_iter__58305(cljs.core.rest(s__58306__$2)));
}
} else {
return null;
}
break;
}
});})(i__58250,map__58303,map__58303__$1,block,uid__$1,parents,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58250,map__58303,map__58303__$1,block,uid__$1,parents,s__58290__$2,temp__5735__auto____$2,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255_$_iter__58289(cljs.core.rest(s__58290__$2)));
}
} else {
return null;
}
break;
}
});})(i__58250,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58250,vec__58286,group_title,group,s__58256__$2,temp__5735__auto____$1,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58255(cljs.core.rest(s__58256__$2)));
}
} else {
return null;
}
break;
}
});})(i__58250,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58250,vec__58252,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58251,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

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
var vec__58313 = cljs.core.first(s__58249__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58313,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58313,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316(s__58317){
return (new cljs.core.LazySeq(null,(function (){
var s__58317__$1 = s__58317;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58317__$1);
if(temp__5735__auto____$1){
var s__58317__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58317__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58317__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58319 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58318 = (0);
while(true){
if((i__58318 < size__4581__auto__)){
var vec__58320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58318);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58320,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58320,(1),null);
cljs.core.chunk_append(b__58319,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58318,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58318,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58318,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323(s__58324){
return (new cljs.core.LazySeq(null,((function (i__58318,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58324__$1 = s__58324;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58324__$1);
if(temp__5735__auto____$2){
var s__58324__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58324__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58324__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58326 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58325 = (0);
while(true){
if((i__58325 < size__4581__auto____$1)){
var map__58327 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58325);
var map__58327__$1 = (((((!((map__58327 == null))))?(((((map__58327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58327):map__58327);
var block = map__58327__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58326,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58325,i__58318,map__58327,map__58327__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58326,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323_$_iter__58329(s__58330){
return (new cljs.core.LazySeq(null,((function (i__58325,i__58318,map__58327,map__58327__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58326,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58330__$1 = s__58330;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58330__$1);
if(temp__5735__auto____$3){
var s__58330__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58330__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58330__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58332 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58331 = (0);
while(true){
if((i__58331 < size__4581__auto____$2)){
var map__58333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58331);
var map__58333__$1 = (((((!((map__58333 == null))))?(((((map__58333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58333):map__58333);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58332,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58331,i__58325,i__58318,map__58333,map__58333__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58332,s__58330__$2,temp__5735__auto____$3,map__58327,map__58327__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58326,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58331,i__58325,i__58318,map__58333,map__58333__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58332,s__58330__$2,temp__5735__auto____$3,map__58327,map__58327__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58326,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58386 = (i__58331 + (1));
i__58331 = G__58386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58332),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323_$_iter__58329(cljs.core.chunk_rest(s__58330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58332),null);
}
} else {
var map__58335 = cljs.core.first(s__58330__$2);
var map__58335__$1 = (((((!((map__58335 == null))))?(((((map__58335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58335):map__58335);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58325,i__58318,map__58335,map__58335__$1,title__$1,string,uid__$2,s__58330__$2,temp__5735__auto____$3,map__58327,map__58327__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58326,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58325,i__58318,map__58335,map__58335__$1,title__$1,string,uid__$2,s__58330__$2,temp__5735__auto____$3,map__58327,map__58327__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58326,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323_$_iter__58329(cljs.core.rest(s__58330__$2)));
}
} else {
return null;
}
break;
}
});})(i__58325,i__58318,map__58327,map__58327__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58326,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58325,i__58318,map__58327,map__58327__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58326,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58387 = (i__58325 + (1));
i__58325 = G__58387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58326),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323(cljs.core.chunk_rest(s__58324__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58326),null);
}
} else {
var map__58337 = cljs.core.first(s__58324__$2);
var map__58337__$1 = (((((!((map__58337 == null))))?(((((map__58337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58337):map__58337);
var block = map__58337__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58318,map__58337,map__58337__$1,block,uid__$1,parents,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323_$_iter__58339(s__58340){
return (new cljs.core.LazySeq(null,((function (i__58318,map__58337,map__58337__$1,block,uid__$1,parents,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58340__$1 = s__58340;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58340__$1);
if(temp__5735__auto____$3){
var s__58340__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58340__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58340__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58342 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58341 = (0);
while(true){
if((i__58341 < size__4581__auto____$1)){
var map__58343 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58341);
var map__58343__$1 = (((((!((map__58343 == null))))?(((((map__58343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58343):map__58343);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58342,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58341,i__58318,map__58343,map__58343__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58342,s__58340__$2,temp__5735__auto____$3,map__58337,map__58337__$1,block,uid__$1,parents,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58341,i__58318,map__58343,map__58343__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58342,s__58340__$2,temp__5735__auto____$3,map__58337,map__58337__$1,block,uid__$1,parents,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58388 = (i__58341 + (1));
i__58341 = G__58388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58342),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323_$_iter__58339(cljs.core.chunk_rest(s__58340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58342),null);
}
} else {
var map__58345 = cljs.core.first(s__58340__$2);
var map__58345__$1 = (((((!((map__58345 == null))))?(((((map__58345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58345):map__58345);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58318,map__58345,map__58345__$1,title__$1,string,uid__$2,s__58340__$2,temp__5735__auto____$3,map__58337,map__58337__$1,block,uid__$1,parents,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58318,map__58345,map__58345__$1,title__$1,string,uid__$2,s__58340__$2,temp__5735__auto____$3,map__58337,map__58337__$1,block,uid__$1,parents,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323_$_iter__58339(cljs.core.rest(s__58340__$2)));
}
} else {
return null;
}
break;
}
});})(i__58318,map__58337,map__58337__$1,block,uid__$1,parents,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58318,map__58337,map__58337__$1,block,uid__$1,parents,s__58324__$2,temp__5735__auto____$2,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58323(cljs.core.rest(s__58324__$2)));
}
} else {
return null;
}
break;
}
});})(i__58318,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58318,vec__58320,group_title,group,c__4580__auto__,size__4581__auto__,b__58319,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58389 = (i__58318 + (1));
i__58318 = G__58389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58319),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316(cljs.core.chunk_rest(s__58317__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58319),null);
}
} else {
var vec__58347 = cljs.core.first(s__58317__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58347,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58347,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350(s__58351){
return (new cljs.core.LazySeq(null,(function (){
var s__58351__$1 = s__58351;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58351__$1);
if(temp__5735__auto____$2){
var s__58351__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58351__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58351__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58353 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58352 = (0);
while(true){
if((i__58352 < size__4581__auto__)){
var map__58354 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58352);
var map__58354__$1 = (((((!((map__58354 == null))))?(((((map__58354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58354):map__58354);
var block = map__58354__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58353,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58352,map__58354,map__58354__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58353,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350_$_iter__58356(s__58357){
return (new cljs.core.LazySeq(null,((function (i__58352,map__58354,map__58354__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58353,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
var s__58357__$1 = s__58357;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58357__$1);
if(temp__5735__auto____$3){
var s__58357__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58357__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58357__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58359 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58358 = (0);
while(true){
if((i__58358 < size__4581__auto____$1)){
var map__58360 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58358);
var map__58360__$1 = (((((!((map__58360 == null))))?(((((map__58360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58360):map__58360);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58360__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58360__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58360__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58358,i__58352,map__58360,map__58360__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58359,s__58357__$2,temp__5735__auto____$3,map__58354,map__58354__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58353,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58358,i__58352,map__58360,map__58360__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58359,s__58357__$2,temp__5735__auto____$3,map__58354,map__58354__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58353,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58390 = (i__58358 + (1));
i__58358 = G__58390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58359),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350_$_iter__58356(cljs.core.chunk_rest(s__58357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58359),null);
}
} else {
var map__58362 = cljs.core.first(s__58357__$2);
var map__58362__$1 = (((((!((map__58362 == null))))?(((((map__58362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58362):map__58362);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58352,map__58362,map__58362__$1,title__$1,string,uid__$2,s__58357__$2,temp__5735__auto____$3,map__58354,map__58354__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58353,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58352,map__58362,map__58362__$1,title__$1,string,uid__$2,s__58357__$2,temp__5735__auto____$3,map__58354,map__58354__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58353,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350_$_iter__58356(cljs.core.rest(s__58357__$2)));
}
} else {
return null;
}
break;
}
});})(i__58352,map__58354,map__58354__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58353,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
,null,null));
});})(i__58352,map__58354,map__58354__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58353,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58391 = (i__58352 + (1));
i__58352 = G__58391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58353),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350(cljs.core.chunk_rest(s__58351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58353),null);
}
} else {
var map__58364 = cljs.core.first(s__58351__$2);
var map__58364__$1 = (((((!((map__58364 == null))))?(((((map__58364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58364):map__58364);
var block = map__58364__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58364,map__58364__$1,block,uid__$1,parents,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350_$_iter__58366(s__58367){
return (new cljs.core.LazySeq(null,(function (){
var s__58367__$1 = s__58367;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58367__$1);
if(temp__5735__auto____$3){
var s__58367__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58367__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58367__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58369 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58368 = (0);
while(true){
if((i__58368 < size__4581__auto__)){
var map__58370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58368);
var map__58370__$1 = (((((!((map__58370 == null))))?(((((map__58370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58370):map__58370);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58369,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58368,map__58370,map__58370__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58369,s__58367__$2,temp__5735__auto____$3,map__58364,map__58364__$1,block,uid__$1,parents,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58368,map__58370,map__58370__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58369,s__58367__$2,temp__5735__auto____$3,map__58364,map__58364__$1,block,uid__$1,parents,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58392 = (i__58368 + (1));
i__58368 = G__58392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58369),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350_$_iter__58366(cljs.core.chunk_rest(s__58367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58369),null);
}
} else {
var map__58372 = cljs.core.first(s__58367__$2);
var map__58372__$1 = (((((!((map__58372 == null))))?(((((map__58372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58372):map__58372);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58372__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58372__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58372__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58372,map__58372__$1,title__$1,string,uid__$2,s__58367__$2,temp__5735__auto____$3,map__58364,map__58364__$1,block,uid__$1,parents,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58372,map__58372__$1,title__$1,string,uid__$2,s__58367__$2,temp__5735__auto____$3,map__58364,map__58364__$1,block,uid__$1,parents,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350_$_iter__58366(cljs.core.rest(s__58367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58364,map__58364__$1,block,uid__$1,parents,s__58351__$2,temp__5735__auto____$2,vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316_$_iter__58350(cljs.core.rest(s__58351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58347,group_title,group,s__58317__$2,temp__5735__auto____$1,vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58248_$_iter__58316(cljs.core.rest(s__58317__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58313,linked_or_unlinked,refs,s__58249__$2,temp__5735__auto__,map__58236,map__58236__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58248(cljs.core.rest(s__58249__$2)));
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
var map__58374 = athens.db.get_node_document(ident);
var map__58374__$1 = (((((!((map__58374 == null))))?(((((map__58374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58374):map__58374);
var node = map__58374__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58374__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58374__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58376) : re_frame.core.subscribe.call(null,G__58376));
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
