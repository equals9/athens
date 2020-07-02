goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.devcards.buttons');
goog.require('athens.patterns');
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
athens.devcards.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__68273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__68273) : re_frame.core.dispatch.call(null,G__68273));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__68274 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__68275 = athens.db.dsdb;
var G__68276 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__68274,G__68275,G__68276) : posh.reagent.q.call(null,G__68274,G__68275,G__68276));
})());
});
athens.devcards.node_page.get_block = (function athens$devcards$node_page$get_block(id){
return cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.block_pull_pattern,id) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.block_pull_pattern,id)));
});
athens.devcards.node_page.get_parents = (function athens$devcards$node_page$get_parents(id){
return athens.db.shape_parent_query(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.parents_pull_pattern,id) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.parents_pull_pattern,id))));
});
athens.devcards.node_page.merge_parents_and_block = (function athens$devcards$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.devcards.node_page.get_parents(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.devcards.node_page.get_block(id);
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__68277,editing_uid,ref_groups){
var map__68278 = p__68277;
var map__68278__$1 = (((((!((map__68278 == null))))?(((((map__68278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68278):map__68278);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68278__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68278__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68278__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__68280 = e.target.value;
var G__68281 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__68280,G__68281) : athens.devcards.node_page.db_handler.call(null,G__68280,G__68281));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68282(s__68283){
return (new cljs.core.LazySeq(null,(function (){
var s__68283__$1 = s__68283;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68283__$1);
if(temp__5735__auto__){
var s__68283__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68283__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68283__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68285 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68284 = (0);
while(true){
if((i__68284 < size__4581__auto__)){
var map__68286 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68284);
var map__68286__$1 = (((((!((map__68286 == null))))?(((((map__68286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68286):map__68286);
var child = map__68286__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68286__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68285,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__68417 = (i__68284 + (1));
i__68284 = G__68417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68285),athens$devcards$node_page$node_page_el_$_iter__68282(cljs.core.chunk_rest(s__68283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68285),null);
}
} else {
var map__68288 = cljs.core.first(s__68283__$2);
var map__68288__$1 = (((((!((map__68288 == null))))?(((((map__68288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68288):map__68288);
var child = map__68288__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__68282(cljs.core.rest(s__68283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68290(s__68291){
return (new cljs.core.LazySeq(null,(function (){
var s__68291__$1 = s__68291;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68291__$1);
if(temp__5735__auto__){
var s__68291__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68291__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68291__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68293 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68292 = (0);
while(true){
if((i__68292 < size__4581__auto__)){
var vec__68294 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68292);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68294,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68294,(1),null);
cljs.core.chunk_append(b__68293,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__68292,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297(s__68298){
return (new cljs.core.LazySeq(null,((function (i__68292,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68298__$1 = s__68298;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68298__$1);
if(temp__5735__auto____$1){
var s__68298__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68298__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68298__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68300 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68299 = (0);
while(true){
if((i__68299 < size__4581__auto____$1)){
var vec__68301 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68299);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68301,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68301,(1),null);
cljs.core.chunk_append(b__68300,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68299,i__68292,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304(s__68305){
return (new cljs.core.LazySeq(null,((function (i__68299,i__68292,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68305__$1 = s__68305;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68305__$1);
if(temp__5735__auto____$2){
var s__68305__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68305__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68305__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68307 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68306 = (0);
while(true){
if((i__68306 < size__4581__auto____$2)){
var map__68308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68306);
var map__68308__$1 = (((((!((map__68308 == null))))?(((((map__68308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68308):map__68308);
var block = map__68308__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68308__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68308__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68307,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68306,i__68299,i__68292,map__68308,map__68308__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68307,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68306,i__68299,i__68292,map__68308,map__68308__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68307,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68306,i__68299,i__68292,map__68308,map__68308__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68307,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304_$_iter__68310(s__68311){
return (new cljs.core.LazySeq(null,((function (i__68306,i__68299,i__68292,map__68308,map__68308__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68307,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68311__$1 = s__68311;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68311__$1);
if(temp__5735__auto____$3){
var s__68311__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68311__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__68311__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__68313 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__68312 = (0);
while(true){
if((i__68312 < size__4581__auto____$3)){
var map__68314 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__68312);
var map__68314__$1 = (((((!((map__68314 == null))))?(((((map__68314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68314):map__68314);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68313,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68418 = (i__68312 + (1));
i__68312 = G__68418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68313),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304_$_iter__68310(cljs.core.chunk_rest(s__68311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68313),null);
}
} else {
var map__68316 = cljs.core.first(s__68311__$2);
var map__68316__$1 = (((((!((map__68316 == null))))?(((((map__68316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68316):map__68316);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68316__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68316__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68316__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304_$_iter__68310(cljs.core.rest(s__68311__$2)));
}
} else {
return null;
}
break;
}
});})(i__68306,i__68299,i__68292,map__68308,map__68308__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68307,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68306,i__68299,i__68292,map__68308,map__68308__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68307,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68419 = (i__68306 + (1));
i__68306 = G__68419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68307),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304(cljs.core.chunk_rest(s__68305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68307),null);
}
} else {
var map__68318 = cljs.core.first(s__68305__$2);
var map__68318__$1 = (((((!((map__68318 == null))))?(((((map__68318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68318):map__68318);
var block = map__68318__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68318__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68318__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68299,i__68292,map__68318,map__68318__$1,block,uid__$1,parents,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68299,i__68292,map__68318,map__68318__$1,block,uid__$1,parents,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68299,i__68292,map__68318,map__68318__$1,block,uid__$1,parents,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304_$_iter__68320(s__68321){
return (new cljs.core.LazySeq(null,((function (i__68299,i__68292,map__68318,map__68318__$1,block,uid__$1,parents,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68321__$1 = s__68321;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68321__$1);
if(temp__5735__auto____$3){
var s__68321__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68321__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68321__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68323 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68322 = (0);
while(true){
if((i__68322 < size__4581__auto____$2)){
var map__68324 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68322);
var map__68324__$1 = (((((!((map__68324 == null))))?(((((map__68324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68324):map__68324);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68324__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68324__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68324__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68323,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68424 = (i__68322 + (1));
i__68322 = G__68424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68323),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304_$_iter__68320(cljs.core.chunk_rest(s__68321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68323),null);
}
} else {
var map__68326 = cljs.core.first(s__68321__$2);
var map__68326__$1 = (((((!((map__68326 == null))))?(((((map__68326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68326):map__68326);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68326__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68326__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68326__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304_$_iter__68320(cljs.core.rest(s__68321__$2)));
}
} else {
return null;
}
break;
}
});})(i__68299,i__68292,map__68318,map__68318__$1,block,uid__$1,parents,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68299,i__68292,map__68318,map__68318__$1,block,uid__$1,parents,s__68305__$2,temp__5735__auto____$2,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68304(cljs.core.rest(s__68305__$2)));
}
} else {
return null;
}
break;
}
});})(i__68299,i__68292,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68299,i__68292,vec__68301,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68300,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__68437 = (i__68299 + (1));
i__68299 = G__68437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68300),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297(cljs.core.chunk_rest(s__68298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68300),null);
}
} else {
var vec__68328 = cljs.core.first(s__68298__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68328,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68328,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68292,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331(s__68332){
return (new cljs.core.LazySeq(null,((function (i__68292,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68332__$1 = s__68332;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68332__$1);
if(temp__5735__auto____$2){
var s__68332__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68332__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68332__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68334 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68333 = (0);
while(true){
if((i__68333 < size__4581__auto____$1)){
var map__68335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68333);
var map__68335__$1 = (((((!((map__68335 == null))))?(((((map__68335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68335):map__68335);
var block = map__68335__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68335__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68335__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68334,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68333,i__68292,map__68335,map__68335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68334,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68333,i__68292,map__68335,map__68335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68334,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68333,i__68292,map__68335,map__68335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68334,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331_$_iter__68337(s__68338){
return (new cljs.core.LazySeq(null,((function (i__68333,i__68292,map__68335,map__68335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68334,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68338__$1 = s__68338;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68338__$1);
if(temp__5735__auto____$3){
var s__68338__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68338__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68338__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68340 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68339 = (0);
while(true){
if((i__68339 < size__4581__auto____$2)){
var map__68341 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68339);
var map__68341__$1 = (((((!((map__68341 == null))))?(((((map__68341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68341):map__68341);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68340,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68443 = (i__68339 + (1));
i__68339 = G__68443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68340),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331_$_iter__68337(cljs.core.chunk_rest(s__68338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68340),null);
}
} else {
var map__68343 = cljs.core.first(s__68338__$2);
var map__68343__$1 = (((((!((map__68343 == null))))?(((((map__68343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68343):map__68343);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68343__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68343__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68343__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331_$_iter__68337(cljs.core.rest(s__68338__$2)));
}
} else {
return null;
}
break;
}
});})(i__68333,i__68292,map__68335,map__68335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68334,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68333,i__68292,map__68335,map__68335__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68334,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68444 = (i__68333 + (1));
i__68333 = G__68444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68334),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331(cljs.core.chunk_rest(s__68332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68334),null);
}
} else {
var map__68345 = cljs.core.first(s__68332__$2);
var map__68345__$1 = (((((!((map__68345 == null))))?(((((map__68345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68345):map__68345);
var block = map__68345__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68345__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68345__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68292,map__68345,map__68345__$1,block,uid__$1,parents,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68292,map__68345,map__68345__$1,block,uid__$1,parents,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68292,map__68345,map__68345__$1,block,uid__$1,parents,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331_$_iter__68347(s__68348){
return (new cljs.core.LazySeq(null,((function (i__68292,map__68345,map__68345__$1,block,uid__$1,parents,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68348__$1 = s__68348;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68348__$1);
if(temp__5735__auto____$3){
var s__68348__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68348__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68348__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68350 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68349 = (0);
while(true){
if((i__68349 < size__4581__auto____$1)){
var map__68351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68349);
var map__68351__$1 = (((((!((map__68351 == null))))?(((((map__68351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68351):map__68351);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68351__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68351__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68351__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68350,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68445 = (i__68349 + (1));
i__68349 = G__68445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68350),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331_$_iter__68347(cljs.core.chunk_rest(s__68348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68350),null);
}
} else {
var map__68353 = cljs.core.first(s__68348__$2);
var map__68353__$1 = (((((!((map__68353 == null))))?(((((map__68353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68353):map__68353);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68353__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68353__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68353__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331_$_iter__68347(cljs.core.rest(s__68348__$2)));
}
} else {
return null;
}
break;
}
});})(i__68292,map__68345,map__68345__$1,block,uid__$1,parents,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68292,map__68345,map__68345__$1,block,uid__$1,parents,s__68332__$2,temp__5735__auto____$2,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297_$_iter__68331(cljs.core.rest(s__68332__$2)));
}
} else {
return null;
}
break;
}
});})(i__68292,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68292,vec__68328,group_title,group,s__68298__$2,temp__5735__auto____$1,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68297(cljs.core.rest(s__68298__$2)));
}
} else {
return null;
}
break;
}
});})(i__68292,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68292,vec__68294,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68293,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__68446 = (i__68292 + (1));
i__68292 = G__68446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68293),athens$devcards$node_page$node_page_el_$_iter__68290(cljs.core.chunk_rest(s__68291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68293),null);
}
} else {
var vec__68355 = cljs.core.first(s__68291__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68355,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68355,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358(s__68359){
return (new cljs.core.LazySeq(null,(function (){
var s__68359__$1 = s__68359;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68359__$1);
if(temp__5735__auto____$1){
var s__68359__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68359__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68359__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68361 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68360 = (0);
while(true){
if((i__68360 < size__4581__auto__)){
var vec__68362 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68360);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(1),null);
cljs.core.chunk_append(b__68361,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68360,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365(s__68366){
return (new cljs.core.LazySeq(null,((function (i__68360,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68366__$1 = s__68366;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68366__$1);
if(temp__5735__auto____$2){
var s__68366__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68366__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68366__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68368 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68367 = (0);
while(true){
if((i__68367 < size__4581__auto____$1)){
var map__68369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68367);
var map__68369__$1 = (((((!((map__68369 == null))))?(((((map__68369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68369):map__68369);
var block = map__68369__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68369__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68369__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68368,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68367,i__68360,map__68369,map__68369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68368,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68367,i__68360,map__68369,map__68369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68368,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68367,i__68360,map__68369,map__68369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68368,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365_$_iter__68371(s__68372){
return (new cljs.core.LazySeq(null,((function (i__68367,i__68360,map__68369,map__68369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68368,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68372__$1 = s__68372;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68372__$1);
if(temp__5735__auto____$3){
var s__68372__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68372__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68372__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68374 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68373 = (0);
while(true){
if((i__68373 < size__4581__auto____$2)){
var map__68375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68373);
var map__68375__$1 = (((((!((map__68375 == null))))?(((((map__68375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68375):map__68375);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68375__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68375__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68375__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68374,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68448 = (i__68373 + (1));
i__68373 = G__68448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68374),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365_$_iter__68371(cljs.core.chunk_rest(s__68372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68374),null);
}
} else {
var map__68377 = cljs.core.first(s__68372__$2);
var map__68377__$1 = (((((!((map__68377 == null))))?(((((map__68377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68377):map__68377);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68377__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68377__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68377__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365_$_iter__68371(cljs.core.rest(s__68372__$2)));
}
} else {
return null;
}
break;
}
});})(i__68367,i__68360,map__68369,map__68369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68368,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68367,i__68360,map__68369,map__68369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68368,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68449 = (i__68367 + (1));
i__68367 = G__68449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68368),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365(cljs.core.chunk_rest(s__68366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68368),null);
}
} else {
var map__68379 = cljs.core.first(s__68366__$2);
var map__68379__$1 = (((((!((map__68379 == null))))?(((((map__68379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68379):map__68379);
var block = map__68379__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68379__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68379__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68360,map__68379,map__68379__$1,block,uid__$1,parents,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68360,map__68379,map__68379__$1,block,uid__$1,parents,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68360,map__68379,map__68379__$1,block,uid__$1,parents,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365_$_iter__68381(s__68382){
return (new cljs.core.LazySeq(null,((function (i__68360,map__68379,map__68379__$1,block,uid__$1,parents,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68382__$1 = s__68382;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68382__$1);
if(temp__5735__auto____$3){
var s__68382__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68382__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68382__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68384 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68383 = (0);
while(true){
if((i__68383 < size__4581__auto____$1)){
var map__68385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68383);
var map__68385__$1 = (((((!((map__68385 == null))))?(((((map__68385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68385):map__68385);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68385__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68385__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68385__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68384,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68450 = (i__68383 + (1));
i__68383 = G__68450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68384),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365_$_iter__68381(cljs.core.chunk_rest(s__68382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68384),null);
}
} else {
var map__68387 = cljs.core.first(s__68382__$2);
var map__68387__$1 = (((((!((map__68387 == null))))?(((((map__68387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68387):map__68387);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68387__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68387__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68387__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365_$_iter__68381(cljs.core.rest(s__68382__$2)));
}
} else {
return null;
}
break;
}
});})(i__68360,map__68379,map__68379__$1,block,uid__$1,parents,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68360,map__68379,map__68379__$1,block,uid__$1,parents,s__68366__$2,temp__5735__auto____$2,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68365(cljs.core.rest(s__68366__$2)));
}
} else {
return null;
}
break;
}
});})(i__68360,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68360,vec__68362,group_title,group,c__4580__auto__,size__4581__auto__,b__68361,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__68451 = (i__68360 + (1));
i__68360 = G__68451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68361),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358(cljs.core.chunk_rest(s__68359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68361),null);
}
} else {
var vec__68389 = cljs.core.first(s__68359__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68389,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68389,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392(s__68393){
return (new cljs.core.LazySeq(null,(function (){
var s__68393__$1 = s__68393;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68393__$1);
if(temp__5735__auto____$2){
var s__68393__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68393__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68393__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68395 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68394 = (0);
while(true){
if((i__68394 < size__4581__auto__)){
var map__68396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68394);
var map__68396__$1 = (((((!((map__68396 == null))))?(((((map__68396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68396):map__68396);
var block = map__68396__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68396__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68396__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68395,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68394,map__68396,map__68396__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68395,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68394,map__68396,map__68396__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68395,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68394,map__68396,map__68396__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68395,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392_$_iter__68398(s__68399){
return (new cljs.core.LazySeq(null,((function (i__68394,map__68396,map__68396__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68395,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (){
var s__68399__$1 = s__68399;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68399__$1);
if(temp__5735__auto____$3){
var s__68399__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68399__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68399__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68401 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68400 = (0);
while(true){
if((i__68400 < size__4581__auto____$1)){
var map__68402 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68400);
var map__68402__$1 = (((((!((map__68402 == null))))?(((((map__68402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68402):map__68402);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68402__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68402__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68402__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68401,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68452 = (i__68400 + (1));
i__68400 = G__68452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68401),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392_$_iter__68398(cljs.core.chunk_rest(s__68399__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68401),null);
}
} else {
var map__68404 = cljs.core.first(s__68399__$2);
var map__68404__$1 = (((((!((map__68404 == null))))?(((((map__68404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68404):map__68404);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68404__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68404__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68404__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392_$_iter__68398(cljs.core.rest(s__68399__$2)));
}
} else {
return null;
}
break;
}
});})(i__68394,map__68396,map__68396__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68395,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,null,null));
});})(i__68394,map__68396,map__68396__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68395,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68453 = (i__68394 + (1));
i__68394 = G__68453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68395),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392(cljs.core.chunk_rest(s__68393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68395),null);
}
} else {
var map__68406 = cljs.core.first(s__68393__$2);
var map__68406__$1 = (((((!((map__68406 == null))))?(((((map__68406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68406):map__68406);
var block = map__68406__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__68406,map__68406__$1,block,uid__$1,parents,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__68406,map__68406__$1,block,uid__$1,parents,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__68406,map__68406__$1,block,uid__$1,parents,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392_$_iter__68408(s__68409){
return (new cljs.core.LazySeq(null,(function (){
var s__68409__$1 = s__68409;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68409__$1);
if(temp__5735__auto____$3){
var s__68409__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68409__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68409__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68411 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68410 = (0);
while(true){
if((i__68410 < size__4581__auto__)){
var map__68412 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68410);
var map__68412__$1 = (((((!((map__68412 == null))))?(((((map__68412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68412):map__68412);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68411,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68454 = (i__68410 + (1));
i__68410 = G__68454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68411),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392_$_iter__68408(cljs.core.chunk_rest(s__68409__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68411),null);
}
} else {
var map__68414 = cljs.core.first(s__68409__$2);
var map__68414__$1 = (((((!((map__68414 == null))))?(((((map__68414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68414):map__68414);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68414__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68414__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68414__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392_$_iter__68408(cljs.core.rest(s__68409__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__68406,map__68406__$1,block,uid__$1,parents,s__68393__$2,temp__5735__auto____$2,vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358_$_iter__68392(cljs.core.rest(s__68393__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__68389,group_title,group,s__68359__$2,temp__5735__auto____$1,vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__68290_$_iter__68358(cljs.core.rest(s__68359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__68355,linked_or_unlinked,refs,s__68291__$2,temp__5735__auto__,map__68278,map__68278__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__68290(cljs.core.rest(s__68291__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})()], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var node = athens.db.sort_block(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.node_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.node_pull_pattern,ident))));
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__68416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68416) : re_frame.core.subscribe.call(null,G__68416));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
