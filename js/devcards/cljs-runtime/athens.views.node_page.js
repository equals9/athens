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
var G__58169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58169) : re_frame.core.dispatch.call(null,G__58169));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58170 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58171 = athens.db.dsdb;
var G__58172 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58170,G__58171,G__58172) : posh.reagent.q.call(null,G__58170,G__58171,G__58172));
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
return cljs.core.boolean$((function (){try{var vec__58174 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58174,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58174,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58174,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58173){if((e58173 instanceof Object)){
var _ = e58173;
return false;
} else {
throw e58173;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58177,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58178 = p__58177;
var map__58178__$1 = (((((!((map__58178 == null))))?(((((map__58178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58178):map__58178);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58180 = e.target.value;
var G__58181 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58180,G__58181) : athens.views.node_page.db_handler.call(null,G__58180,G__58181));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58182(s__58183){
return (new cljs.core.LazySeq(null,(function (){
var s__58183__$1 = s__58183;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58183__$1);
if(temp__5735__auto__){
var s__58183__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58183__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58183__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58185 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58184 = (0);
while(true){
if((i__58184 < size__4581__auto__)){
var map__58186 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58184);
var map__58186__$1 = (((((!((map__58186 == null))))?(((((map__58186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58186):map__58186);
var child = map__58186__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58185,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58319 = (i__58184 + (1));
i__58184 = G__58319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58185),athens$views$node_page$node_page_el_$_iter__58182(cljs.core.chunk_rest(s__58183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58185),null);
}
} else {
var map__58188 = cljs.core.first(s__58183__$2);
var map__58188__$1 = (((((!((map__58188 == null))))?(((((map__58188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58188):map__58188);
var child = map__58188__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58182(cljs.core.rest(s__58183__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58190(s__58191){
return (new cljs.core.LazySeq(null,(function (){
var s__58191__$1 = s__58191;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58191__$1);
if(temp__5735__auto__){
var s__58191__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58191__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58191__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58193 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58192 = (0);
while(true){
if((i__58192 < size__4581__auto__)){
var vec__58194 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58192);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58194,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58194,(1),null);
cljs.core.chunk_append(b__58193,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58192,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197(s__58198){
return (new cljs.core.LazySeq(null,((function (i__58192,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58198__$1 = s__58198;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58198__$1);
if(temp__5735__auto____$1){
var s__58198__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58198__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58198__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58200 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58199 = (0);
while(true){
if((i__58199 < size__4581__auto____$1)){
var vec__58201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58199);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58201,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58201,(1),null);
cljs.core.chunk_append(b__58200,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58199,i__58192,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58199,i__58192,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58199,i__58192,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204(s__58205){
return (new cljs.core.LazySeq(null,((function (i__58199,i__58192,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58205__$1 = s__58205;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58205__$1);
if(temp__5735__auto____$2){
var s__58205__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58205__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58205__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58207 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58206 = (0);
while(true){
if((i__58206 < size__4581__auto____$2)){
var map__58208 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58206);
var map__58208__$1 = (((((!((map__58208 == null))))?(((((map__58208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58208):map__58208);
var block = map__58208__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58207,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58206,i__58199,i__58192,map__58208,map__58208__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58207,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204_$_iter__58210(s__58211){
return (new cljs.core.LazySeq(null,((function (i__58206,i__58199,i__58192,map__58208,map__58208__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58207,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58211__$1 = s__58211;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58211__$1);
if(temp__5735__auto____$3){
var s__58211__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58211__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58211__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58213 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58212 = (0);
while(true){
if((i__58212 < size__4581__auto____$3)){
var map__58214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58212);
var map__58214__$1 = (((((!((map__58214 == null))))?(((((map__58214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58214):map__58214);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58213,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58212,i__58206,i__58199,i__58192,map__58214,map__58214__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58213,s__58211__$2,temp__5735__auto____$3,map__58208,map__58208__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58207,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58212,i__58206,i__58199,i__58192,map__58214,map__58214__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58213,s__58211__$2,temp__5735__auto____$3,map__58208,map__58208__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58207,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58320 = (i__58212 + (1));
i__58212 = G__58320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58213),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204_$_iter__58210(cljs.core.chunk_rest(s__58211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58213),null);
}
} else {
var map__58216 = cljs.core.first(s__58211__$2);
var map__58216__$1 = (((((!((map__58216 == null))))?(((((map__58216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58216):map__58216);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58206,i__58199,i__58192,map__58216,map__58216__$1,title__$1,string,uid__$2,s__58211__$2,temp__5735__auto____$3,map__58208,map__58208__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58207,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58206,i__58199,i__58192,map__58216,map__58216__$1,title__$1,string,uid__$2,s__58211__$2,temp__5735__auto____$3,map__58208,map__58208__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58207,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204_$_iter__58210(cljs.core.rest(s__58211__$2)));
}
} else {
return null;
}
break;
}
});})(i__58206,i__58199,i__58192,map__58208,map__58208__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58207,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58206,i__58199,i__58192,map__58208,map__58208__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58207,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58321 = (i__58206 + (1));
i__58206 = G__58321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58207),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204(cljs.core.chunk_rest(s__58205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58207),null);
}
} else {
var map__58218 = cljs.core.first(s__58205__$2);
var map__58218__$1 = (((((!((map__58218 == null))))?(((((map__58218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58218):map__58218);
var block = map__58218__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58199,i__58192,map__58218,map__58218__$1,block,uid__$1,parents,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204_$_iter__58220(s__58221){
return (new cljs.core.LazySeq(null,((function (i__58199,i__58192,map__58218,map__58218__$1,block,uid__$1,parents,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58221__$1 = s__58221;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58221__$1);
if(temp__5735__auto____$3){
var s__58221__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58221__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58221__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58223 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58222 = (0);
while(true){
if((i__58222 < size__4581__auto____$2)){
var map__58224 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58222);
var map__58224__$1 = (((((!((map__58224 == null))))?(((((map__58224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58224):map__58224);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58223,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58222,i__58199,i__58192,map__58224,map__58224__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58223,s__58221__$2,temp__5735__auto____$3,map__58218,map__58218__$1,block,uid__$1,parents,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58222,i__58199,i__58192,map__58224,map__58224__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58223,s__58221__$2,temp__5735__auto____$3,map__58218,map__58218__$1,block,uid__$1,parents,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58322 = (i__58222 + (1));
i__58222 = G__58322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58223),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204_$_iter__58220(cljs.core.chunk_rest(s__58221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58223),null);
}
} else {
var map__58226 = cljs.core.first(s__58221__$2);
var map__58226__$1 = (((((!((map__58226 == null))))?(((((map__58226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58226):map__58226);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58226__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58226__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58226__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58199,i__58192,map__58226,map__58226__$1,title__$1,string,uid__$2,s__58221__$2,temp__5735__auto____$3,map__58218,map__58218__$1,block,uid__$1,parents,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58199,i__58192,map__58226,map__58226__$1,title__$1,string,uid__$2,s__58221__$2,temp__5735__auto____$3,map__58218,map__58218__$1,block,uid__$1,parents,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204_$_iter__58220(cljs.core.rest(s__58221__$2)));
}
} else {
return null;
}
break;
}
});})(i__58199,i__58192,map__58218,map__58218__$1,block,uid__$1,parents,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58199,i__58192,map__58218,map__58218__$1,block,uid__$1,parents,s__58205__$2,temp__5735__auto____$2,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58204(cljs.core.rest(s__58205__$2)));
}
} else {
return null;
}
break;
}
});})(i__58199,i__58192,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58199,i__58192,vec__58201,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58200,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58323 = (i__58199 + (1));
i__58199 = G__58323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58200),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197(cljs.core.chunk_rest(s__58198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58200),null);
}
} else {
var vec__58228 = cljs.core.first(s__58198__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58228,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58228,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58192,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58192,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58192,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231(s__58232){
return (new cljs.core.LazySeq(null,((function (i__58192,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58232__$1 = s__58232;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58232__$1);
if(temp__5735__auto____$2){
var s__58232__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58232__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58232__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58234 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58233 = (0);
while(true){
if((i__58233 < size__4581__auto____$1)){
var map__58235 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58233);
var map__58235__$1 = (((((!((map__58235 == null))))?(((((map__58235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58235):map__58235);
var block = map__58235__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58234,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58233,i__58192,map__58235,map__58235__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58234,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231_$_iter__58237(s__58238){
return (new cljs.core.LazySeq(null,((function (i__58233,i__58192,map__58235,map__58235__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58234,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58238__$1 = s__58238;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58238__$1);
if(temp__5735__auto____$3){
var s__58238__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58238__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58238__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58240 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58239 = (0);
while(true){
if((i__58239 < size__4581__auto____$2)){
var map__58241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58239);
var map__58241__$1 = (((((!((map__58241 == null))))?(((((map__58241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58241):map__58241);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58240,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58239,i__58233,i__58192,map__58241,map__58241__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58240,s__58238__$2,temp__5735__auto____$3,map__58235,map__58235__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58234,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58239,i__58233,i__58192,map__58241,map__58241__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58240,s__58238__$2,temp__5735__auto____$3,map__58235,map__58235__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58234,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58324 = (i__58239 + (1));
i__58239 = G__58324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58240),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231_$_iter__58237(cljs.core.chunk_rest(s__58238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58240),null);
}
} else {
var map__58243 = cljs.core.first(s__58238__$2);
var map__58243__$1 = (((((!((map__58243 == null))))?(((((map__58243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58243):map__58243);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58233,i__58192,map__58243,map__58243__$1,title__$1,string,uid__$2,s__58238__$2,temp__5735__auto____$3,map__58235,map__58235__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58234,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58233,i__58192,map__58243,map__58243__$1,title__$1,string,uid__$2,s__58238__$2,temp__5735__auto____$3,map__58235,map__58235__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58234,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231_$_iter__58237(cljs.core.rest(s__58238__$2)));
}
} else {
return null;
}
break;
}
});})(i__58233,i__58192,map__58235,map__58235__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58234,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58233,i__58192,map__58235,map__58235__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58234,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58325 = (i__58233 + (1));
i__58233 = G__58325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58234),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231(cljs.core.chunk_rest(s__58232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58234),null);
}
} else {
var map__58245 = cljs.core.first(s__58232__$2);
var map__58245__$1 = (((((!((map__58245 == null))))?(((((map__58245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58245):map__58245);
var block = map__58245__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58245__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58245__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58192,map__58245,map__58245__$1,block,uid__$1,parents,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231_$_iter__58247(s__58248){
return (new cljs.core.LazySeq(null,((function (i__58192,map__58245,map__58245__$1,block,uid__$1,parents,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58248__$1 = s__58248;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58248__$1);
if(temp__5735__auto____$3){
var s__58248__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58248__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58248__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58250 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58249 = (0);
while(true){
if((i__58249 < size__4581__auto____$1)){
var map__58251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58249);
var map__58251__$1 = (((((!((map__58251 == null))))?(((((map__58251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58251):map__58251);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58249,i__58192,map__58251,map__58251__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58250,s__58248__$2,temp__5735__auto____$3,map__58245,map__58245__$1,block,uid__$1,parents,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58249,i__58192,map__58251,map__58251__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58250,s__58248__$2,temp__5735__auto____$3,map__58245,map__58245__$1,block,uid__$1,parents,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58326 = (i__58249 + (1));
i__58249 = G__58326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58250),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231_$_iter__58247(cljs.core.chunk_rest(s__58248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58250),null);
}
} else {
var map__58253 = cljs.core.first(s__58248__$2);
var map__58253__$1 = (((((!((map__58253 == null))))?(((((map__58253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58253):map__58253);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58192,map__58253,map__58253__$1,title__$1,string,uid__$2,s__58248__$2,temp__5735__auto____$3,map__58245,map__58245__$1,block,uid__$1,parents,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58192,map__58253,map__58253__$1,title__$1,string,uid__$2,s__58248__$2,temp__5735__auto____$3,map__58245,map__58245__$1,block,uid__$1,parents,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231_$_iter__58247(cljs.core.rest(s__58248__$2)));
}
} else {
return null;
}
break;
}
});})(i__58192,map__58245,map__58245__$1,block,uid__$1,parents,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58192,map__58245,map__58245__$1,block,uid__$1,parents,s__58232__$2,temp__5735__auto____$2,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197_$_iter__58231(cljs.core.rest(s__58232__$2)));
}
} else {
return null;
}
break;
}
});})(i__58192,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58192,vec__58228,group_title,group,s__58198__$2,temp__5735__auto____$1,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58197(cljs.core.rest(s__58198__$2)));
}
} else {
return null;
}
break;
}
});})(i__58192,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58192,vec__58194,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58193,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58327 = (i__58192 + (1));
i__58192 = G__58327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58193),athens$views$node_page$node_page_el_$_iter__58190(cljs.core.chunk_rest(s__58191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58193),null);
}
} else {
var vec__58255 = cljs.core.first(s__58191__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58255,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58255,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258(s__58259){
return (new cljs.core.LazySeq(null,(function (){
var s__58259__$1 = s__58259;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58259__$1);
if(temp__5735__auto____$1){
var s__58259__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58259__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58259__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58261 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58260 = (0);
while(true){
if((i__58260 < size__4581__auto__)){
var vec__58262 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58260);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58262,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58262,(1),null);
cljs.core.chunk_append(b__58261,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58260,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58260,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58260,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265(s__58266){
return (new cljs.core.LazySeq(null,((function (i__58260,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58266__$1 = s__58266;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58266__$1);
if(temp__5735__auto____$2){
var s__58266__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58266__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58266__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58268 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58267 = (0);
while(true){
if((i__58267 < size__4581__auto____$1)){
var map__58269 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58267);
var map__58269__$1 = (((((!((map__58269 == null))))?(((((map__58269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58269):map__58269);
var block = map__58269__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58268,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58267,i__58260,map__58269,map__58269__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58268,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265_$_iter__58271(s__58272){
return (new cljs.core.LazySeq(null,((function (i__58267,i__58260,map__58269,map__58269__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58268,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58272__$1 = s__58272;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58272__$1);
if(temp__5735__auto____$3){
var s__58272__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58272__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58272__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58274 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58273 = (0);
while(true){
if((i__58273 < size__4581__auto____$2)){
var map__58275 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58273);
var map__58275__$1 = (((((!((map__58275 == null))))?(((((map__58275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58275):map__58275);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58274,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58273,i__58267,i__58260,map__58275,map__58275__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$3,map__58269,map__58269__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58268,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58273,i__58267,i__58260,map__58275,map__58275__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$3,map__58269,map__58269__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58268,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58328 = (i__58273 + (1));
i__58273 = G__58328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58274),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265_$_iter__58271(cljs.core.chunk_rest(s__58272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58274),null);
}
} else {
var map__58277 = cljs.core.first(s__58272__$2);
var map__58277__$1 = (((((!((map__58277 == null))))?(((((map__58277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58277):map__58277);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58267,i__58260,map__58277,map__58277__$1,title__$1,string,uid__$2,s__58272__$2,temp__5735__auto____$3,map__58269,map__58269__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58268,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58267,i__58260,map__58277,map__58277__$1,title__$1,string,uid__$2,s__58272__$2,temp__5735__auto____$3,map__58269,map__58269__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58268,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265_$_iter__58271(cljs.core.rest(s__58272__$2)));
}
} else {
return null;
}
break;
}
});})(i__58267,i__58260,map__58269,map__58269__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58268,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58267,i__58260,map__58269,map__58269__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58268,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58329 = (i__58267 + (1));
i__58267 = G__58329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58268),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265(cljs.core.chunk_rest(s__58266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58268),null);
}
} else {
var map__58279 = cljs.core.first(s__58266__$2);
var map__58279__$1 = (((((!((map__58279 == null))))?(((((map__58279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58279):map__58279);
var block = map__58279__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58279__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58279__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58260,map__58279,map__58279__$1,block,uid__$1,parents,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265_$_iter__58281(s__58282){
return (new cljs.core.LazySeq(null,((function (i__58260,map__58279,map__58279__$1,block,uid__$1,parents,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58282__$1 = s__58282;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58282__$1);
if(temp__5735__auto____$3){
var s__58282__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58282__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58282__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58284 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58283 = (0);
while(true){
if((i__58283 < size__4581__auto____$1)){
var map__58285 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58283);
var map__58285__$1 = (((((!((map__58285 == null))))?(((((map__58285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58285):map__58285);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58284,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58283,i__58260,map__58285,map__58285__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58284,s__58282__$2,temp__5735__auto____$3,map__58279,map__58279__$1,block,uid__$1,parents,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58283,i__58260,map__58285,map__58285__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58284,s__58282__$2,temp__5735__auto____$3,map__58279,map__58279__$1,block,uid__$1,parents,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58330 = (i__58283 + (1));
i__58283 = G__58330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58284),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265_$_iter__58281(cljs.core.chunk_rest(s__58282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58284),null);
}
} else {
var map__58287 = cljs.core.first(s__58282__$2);
var map__58287__$1 = (((((!((map__58287 == null))))?(((((map__58287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58287):map__58287);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58287__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58287__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58287__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58260,map__58287,map__58287__$1,title__$1,string,uid__$2,s__58282__$2,temp__5735__auto____$3,map__58279,map__58279__$1,block,uid__$1,parents,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58260,map__58287,map__58287__$1,title__$1,string,uid__$2,s__58282__$2,temp__5735__auto____$3,map__58279,map__58279__$1,block,uid__$1,parents,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265_$_iter__58281(cljs.core.rest(s__58282__$2)));
}
} else {
return null;
}
break;
}
});})(i__58260,map__58279,map__58279__$1,block,uid__$1,parents,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58260,map__58279,map__58279__$1,block,uid__$1,parents,s__58266__$2,temp__5735__auto____$2,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58265(cljs.core.rest(s__58266__$2)));
}
} else {
return null;
}
break;
}
});})(i__58260,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58260,vec__58262,group_title,group,c__4580__auto__,size__4581__auto__,b__58261,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58331 = (i__58260 + (1));
i__58260 = G__58331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58261),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258(cljs.core.chunk_rest(s__58259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58261),null);
}
} else {
var vec__58289 = cljs.core.first(s__58259__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58289,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58289,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292(s__58293){
return (new cljs.core.LazySeq(null,(function (){
var s__58293__$1 = s__58293;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58293__$1);
if(temp__5735__auto____$2){
var s__58293__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58293__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58293__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58295 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58294 = (0);
while(true){
if((i__58294 < size__4581__auto__)){
var map__58296 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58294);
var map__58296__$1 = (((((!((map__58296 == null))))?(((((map__58296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58296):map__58296);
var block = map__58296__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58295,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58294,map__58296,map__58296__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58295,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292_$_iter__58298(s__58299){
return (new cljs.core.LazySeq(null,((function (i__58294,map__58296,map__58296__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58295,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
var s__58299__$1 = s__58299;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58299__$1);
if(temp__5735__auto____$3){
var s__58299__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58299__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58299__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58301 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58300 = (0);
while(true){
if((i__58300 < size__4581__auto____$1)){
var map__58302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58300);
var map__58302__$1 = (((((!((map__58302 == null))))?(((((map__58302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58302):map__58302);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58301,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58300,i__58294,map__58302,map__58302__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$3,map__58296,map__58296__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58295,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58300,i__58294,map__58302,map__58302__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$3,map__58296,map__58296__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58295,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58332 = (i__58300 + (1));
i__58300 = G__58332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58301),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292_$_iter__58298(cljs.core.chunk_rest(s__58299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58301),null);
}
} else {
var map__58304 = cljs.core.first(s__58299__$2);
var map__58304__$1 = (((((!((map__58304 == null))))?(((((map__58304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58304):map__58304);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58294,map__58304,map__58304__$1,title__$1,string,uid__$2,s__58299__$2,temp__5735__auto____$3,map__58296,map__58296__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58295,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58294,map__58304,map__58304__$1,title__$1,string,uid__$2,s__58299__$2,temp__5735__auto____$3,map__58296,map__58296__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58295,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292_$_iter__58298(cljs.core.rest(s__58299__$2)));
}
} else {
return null;
}
break;
}
});})(i__58294,map__58296,map__58296__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58295,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
,null,null));
});})(i__58294,map__58296,map__58296__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58295,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58333 = (i__58294 + (1));
i__58294 = G__58333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58295),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292(cljs.core.chunk_rest(s__58293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58295),null);
}
} else {
var map__58306 = cljs.core.first(s__58293__$2);
var map__58306__$1 = (((((!((map__58306 == null))))?(((((map__58306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58306):map__58306);
var block = map__58306__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58306__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58306__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58306,map__58306__$1,block,uid__$1,parents,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292_$_iter__58308(s__58309){
return (new cljs.core.LazySeq(null,(function (){
var s__58309__$1 = s__58309;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58309__$1);
if(temp__5735__auto____$3){
var s__58309__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58309__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58309__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58311 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58310 = (0);
while(true){
if((i__58310 < size__4581__auto__)){
var map__58312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58310);
var map__58312__$1 = (((((!((map__58312 == null))))?(((((map__58312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58312):map__58312);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58311,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58310,map__58312,map__58312__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58311,s__58309__$2,temp__5735__auto____$3,map__58306,map__58306__$1,block,uid__$1,parents,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58310,map__58312,map__58312__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58311,s__58309__$2,temp__5735__auto____$3,map__58306,map__58306__$1,block,uid__$1,parents,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58334 = (i__58310 + (1));
i__58310 = G__58334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58311),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292_$_iter__58308(cljs.core.chunk_rest(s__58309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58311),null);
}
} else {
var map__58314 = cljs.core.first(s__58309__$2);
var map__58314__$1 = (((((!((map__58314 == null))))?(((((map__58314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58314):map__58314);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58314__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58314__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58314__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58314,map__58314__$1,title__$1,string,uid__$2,s__58309__$2,temp__5735__auto____$3,map__58306,map__58306__$1,block,uid__$1,parents,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58314,map__58314__$1,title__$1,string,uid__$2,s__58309__$2,temp__5735__auto____$3,map__58306,map__58306__$1,block,uid__$1,parents,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292_$_iter__58308(cljs.core.rest(s__58309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58306,map__58306__$1,block,uid__$1,parents,s__58293__$2,temp__5735__auto____$2,vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258_$_iter__58292(cljs.core.rest(s__58293__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58289,group_title,group,s__58259__$2,temp__5735__auto____$1,vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58190_$_iter__58258(cljs.core.rest(s__58259__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58255,linked_or_unlinked,refs,s__58191__$2,temp__5735__auto__,map__58178,map__58178__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58190(cljs.core.rest(s__58191__$2)));
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
var map__58316 = athens.db.get_node_document(ident);
var map__58316__$1 = (((((!((map__58316 == null))))?(((((map__58316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58316):map__58316);
var node = map__58316__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58318) : re_frame.core.subscribe.call(null,G__58318));
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
