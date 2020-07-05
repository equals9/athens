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
athens.devcards.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.devcards.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.devcards.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.devcards.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.devcards.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.devcards.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.devcards.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__65824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65824) : re_frame.core.dispatch.call(null,G__65824));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65825 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65826 = athens.db.dsdb;
var G__65827 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65825,G__65826,G__65827) : posh.reagent.q.call(null,G__65825,G__65826,G__65827));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65828,editing_uid,ref_groups){
var map__65829 = p__65828;
var map__65829__$1 = (((((!((map__65829 == null))))?(((((map__65829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65829):map__65829);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65831 = e.target.value;
var G__65832 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65831,G__65832) : athens.devcards.node_page.db_handler.call(null,G__65831,G__65832));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65833(s__65834){
return (new cljs.core.LazySeq(null,(function (){
var s__65834__$1 = s__65834;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65834__$1);
if(temp__5735__auto__){
var s__65834__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65834__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65834__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65836 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65835 = (0);
while(true){
if((i__65835 < size__4581__auto__)){
var map__65837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65835);
var map__65837__$1 = (((((!((map__65837 == null))))?(((((map__65837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65837):map__65837);
var child = map__65837__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65837__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65836,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__65988 = (i__65835 + (1));
i__65835 = G__65988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65836),athens$devcards$node_page$node_page_el_$_iter__65833(cljs.core.chunk_rest(s__65834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65836),null);
}
} else {
var map__65839 = cljs.core.first(s__65834__$2);
var map__65839__$1 = (((((!((map__65839 == null))))?(((((map__65839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65839):map__65839);
var child = map__65839__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65839__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65833(cljs.core.rest(s__65834__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65841(s__65842){
return (new cljs.core.LazySeq(null,(function (){
var s__65842__$1 = s__65842;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65842__$1);
if(temp__5735__auto__){
var s__65842__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65842__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65842__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65844 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65843 = (0);
while(true){
if((i__65843 < size__4581__auto__)){
var vec__65845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65843);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65845,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65845,(1),null);
cljs.core.chunk_append(b__65844,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__65843,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848(s__65849){
return (new cljs.core.LazySeq(null,((function (i__65843,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65849__$1 = s__65849;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65849__$1);
if(temp__5735__auto____$1){
var s__65849__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65849__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65849__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65851 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65850 = (0);
while(true){
if((i__65850 < size__4581__auto____$1)){
var vec__65852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65850);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65852,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65852,(1),null);
cljs.core.chunk_append(b__65851,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65850,i__65843,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65850,i__65843,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65850,i__65843,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855(s__65856){
return (new cljs.core.LazySeq(null,((function (i__65850,i__65843,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65856__$1 = s__65856;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65856__$1);
if(temp__5735__auto____$2){
var s__65856__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65856__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65856__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65858 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65857 = (0);
while(true){
if((i__65857 < size__4581__auto____$2)){
var map__65859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65857);
var map__65859__$1 = (((((!((map__65859 == null))))?(((((map__65859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65859):map__65859);
var block = map__65859__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65858,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65857,i__65850,i__65843,map__65859,map__65859__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65858,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855_$_iter__65861(s__65862){
return (new cljs.core.LazySeq(null,((function (i__65857,i__65850,i__65843,map__65859,map__65859__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65858,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65862__$1 = s__65862;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65862__$1);
if(temp__5735__auto____$3){
var s__65862__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65862__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65862__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65864 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65863 = (0);
while(true){
if((i__65863 < size__4581__auto____$3)){
var map__65865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65863);
var map__65865__$1 = (((((!((map__65865 == null))))?(((((map__65865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65865):map__65865);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65865__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65865__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65865__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65864,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65863,i__65857,i__65850,i__65843,map__65865,map__65865__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65864,s__65862__$2,temp__5735__auto____$3,map__65859,map__65859__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65858,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65863,i__65857,i__65850,i__65843,map__65865,map__65865__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65864,s__65862__$2,temp__5735__auto____$3,map__65859,map__65859__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65858,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65992 = (i__65863 + (1));
i__65863 = G__65992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65864),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855_$_iter__65861(cljs.core.chunk_rest(s__65862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65864),null);
}
} else {
var map__65867 = cljs.core.first(s__65862__$2);
var map__65867__$1 = (((((!((map__65867 == null))))?(((((map__65867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65867):map__65867);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65867__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65867__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65867__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65857,i__65850,i__65843,map__65867,map__65867__$1,title__$1,string,uid__$2,s__65862__$2,temp__5735__auto____$3,map__65859,map__65859__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65858,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65857,i__65850,i__65843,map__65867,map__65867__$1,title__$1,string,uid__$2,s__65862__$2,temp__5735__auto____$3,map__65859,map__65859__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65858,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855_$_iter__65861(cljs.core.rest(s__65862__$2)));
}
} else {
return null;
}
break;
}
});})(i__65857,i__65850,i__65843,map__65859,map__65859__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65858,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65857,i__65850,i__65843,map__65859,map__65859__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65858,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65993 = (i__65857 + (1));
i__65857 = G__65993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65858),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855(cljs.core.chunk_rest(s__65856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65858),null);
}
} else {
var map__65869 = cljs.core.first(s__65856__$2);
var map__65869__$1 = (((((!((map__65869 == null))))?(((((map__65869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65869):map__65869);
var block = map__65869__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65850,i__65843,map__65869,map__65869__$1,block,uid__$1,parents,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855_$_iter__65871(s__65872){
return (new cljs.core.LazySeq(null,((function (i__65850,i__65843,map__65869,map__65869__$1,block,uid__$1,parents,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65872__$1 = s__65872;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65872__$1);
if(temp__5735__auto____$3){
var s__65872__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65872__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65872__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65874 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65873 = (0);
while(true){
if((i__65873 < size__4581__auto____$2)){
var map__65875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65873);
var map__65875__$1 = (((((!((map__65875 == null))))?(((((map__65875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65875):map__65875);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65875__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65875__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65875__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65874,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65873,i__65850,i__65843,map__65875,map__65875__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65874,s__65872__$2,temp__5735__auto____$3,map__65869,map__65869__$1,block,uid__$1,parents,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65873,i__65850,i__65843,map__65875,map__65875__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65874,s__65872__$2,temp__5735__auto____$3,map__65869,map__65869__$1,block,uid__$1,parents,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65994 = (i__65873 + (1));
i__65873 = G__65994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65874),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855_$_iter__65871(cljs.core.chunk_rest(s__65872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65874),null);
}
} else {
var map__65877 = cljs.core.first(s__65872__$2);
var map__65877__$1 = (((((!((map__65877 == null))))?(((((map__65877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65877):map__65877);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65850,i__65843,map__65877,map__65877__$1,title__$1,string,uid__$2,s__65872__$2,temp__5735__auto____$3,map__65869,map__65869__$1,block,uid__$1,parents,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65850,i__65843,map__65877,map__65877__$1,title__$1,string,uid__$2,s__65872__$2,temp__5735__auto____$3,map__65869,map__65869__$1,block,uid__$1,parents,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855_$_iter__65871(cljs.core.rest(s__65872__$2)));
}
} else {
return null;
}
break;
}
});})(i__65850,i__65843,map__65869,map__65869__$1,block,uid__$1,parents,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65850,i__65843,map__65869,map__65869__$1,block,uid__$1,parents,s__65856__$2,temp__5735__auto____$2,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65855(cljs.core.rest(s__65856__$2)));
}
} else {
return null;
}
break;
}
});})(i__65850,i__65843,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65850,i__65843,vec__65852,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65995 = (i__65850 + (1));
i__65850 = G__65995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65851),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848(cljs.core.chunk_rest(s__65849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65851),null);
}
} else {
var vec__65879 = cljs.core.first(s__65849__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65879,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65879,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65843,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65843,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65843,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882(s__65883){
return (new cljs.core.LazySeq(null,((function (i__65843,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65883__$1 = s__65883;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65883__$1);
if(temp__5735__auto____$2){
var s__65883__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65883__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65883__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65885 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65884 = (0);
while(true){
if((i__65884 < size__4581__auto____$1)){
var map__65886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65884);
var map__65886__$1 = (((((!((map__65886 == null))))?(((((map__65886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65886):map__65886);
var block = map__65886__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65885,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65884,i__65843,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882_$_iter__65888(s__65889){
return (new cljs.core.LazySeq(null,((function (i__65884,i__65843,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65889__$1 = s__65889;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65889__$1);
if(temp__5735__auto____$3){
var s__65889__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65889__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65889__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65891 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65890 = (0);
while(true){
if((i__65890 < size__4581__auto____$2)){
var map__65892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65890);
var map__65892__$1 = (((((!((map__65892 == null))))?(((((map__65892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65892):map__65892);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65891,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65890,i__65884,i__65843,map__65892,map__65892__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65891,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65890,i__65884,i__65843,map__65892,map__65892__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65891,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65996 = (i__65890 + (1));
i__65890 = G__65996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65891),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882_$_iter__65888(cljs.core.chunk_rest(s__65889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65891),null);
}
} else {
var map__65894 = cljs.core.first(s__65889__$2);
var map__65894__$1 = (((((!((map__65894 == null))))?(((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65894):map__65894);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65884,i__65843,map__65894,map__65894__$1,title__$1,string,uid__$2,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65884,i__65843,map__65894,map__65894__$1,title__$1,string,uid__$2,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882_$_iter__65888(cljs.core.rest(s__65889__$2)));
}
} else {
return null;
}
break;
}
});})(i__65884,i__65843,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65884,i__65843,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65997 = (i__65884 + (1));
i__65884 = G__65997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65885),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882(cljs.core.chunk_rest(s__65883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65885),null);
}
} else {
var map__65896 = cljs.core.first(s__65883__$2);
var map__65896__$1 = (((((!((map__65896 == null))))?(((((map__65896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65896):map__65896);
var block = map__65896__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65896__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65896__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65843,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882_$_iter__65898(s__65899){
return (new cljs.core.LazySeq(null,((function (i__65843,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65899__$1 = s__65899;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65899__$1);
if(temp__5735__auto____$3){
var s__65899__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65899__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65899__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65901 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65900 = (0);
while(true){
if((i__65900 < size__4581__auto____$1)){
var map__65902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65900);
var map__65902__$1 = (((((!((map__65902 == null))))?(((((map__65902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65902):map__65902);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65902__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65902__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65902__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65901,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65900,i__65843,map__65902,map__65902__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65901,s__65899__$2,temp__5735__auto____$3,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65900,i__65843,map__65902,map__65902__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65901,s__65899__$2,temp__5735__auto____$3,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65998 = (i__65900 + (1));
i__65900 = G__65998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65901),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882_$_iter__65898(cljs.core.chunk_rest(s__65899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65901),null);
}
} else {
var map__65904 = cljs.core.first(s__65899__$2);
var map__65904__$1 = (((((!((map__65904 == null))))?(((((map__65904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65904):map__65904);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65843,map__65904,map__65904__$1,title__$1,string,uid__$2,s__65899__$2,temp__5735__auto____$3,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65843,map__65904,map__65904__$1,title__$1,string,uid__$2,s__65899__$2,temp__5735__auto____$3,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882_$_iter__65898(cljs.core.rest(s__65899__$2)));
}
} else {
return null;
}
break;
}
});})(i__65843,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65843,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848_$_iter__65882(cljs.core.rest(s__65883__$2)));
}
} else {
return null;
}
break;
}
});})(i__65843,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65843,vec__65879,group_title,group,s__65849__$2,temp__5735__auto____$1,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65848(cljs.core.rest(s__65849__$2)));
}
} else {
return null;
}
break;
}
});})(i__65843,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65843,vec__65845,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65844,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__65999 = (i__65843 + (1));
i__65843 = G__65999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65844),athens$devcards$node_page$node_page_el_$_iter__65841(cljs.core.chunk_rest(s__65842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65844),null);
}
} else {
var vec__65906 = cljs.core.first(s__65842__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65906,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65906,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909(s__65910){
return (new cljs.core.LazySeq(null,(function (){
var s__65910__$1 = s__65910;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65910__$1);
if(temp__5735__auto____$1){
var s__65910__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65910__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65910__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65912 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65911 = (0);
while(true){
if((i__65911 < size__4581__auto__)){
var vec__65913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65911);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65913,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65913,(1),null);
cljs.core.chunk_append(b__65912,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65911,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65911,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65911,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916(s__65917){
return (new cljs.core.LazySeq(null,((function (i__65911,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65917__$1 = s__65917;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65917__$1);
if(temp__5735__auto____$2){
var s__65917__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65917__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65917__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65919 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65918 = (0);
while(true){
if((i__65918 < size__4581__auto____$1)){
var map__65920 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65918);
var map__65920__$1 = (((((!((map__65920 == null))))?(((((map__65920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65920):map__65920);
var block = map__65920__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65920__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65920__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65919,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65918,i__65911,map__65920,map__65920__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65919,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916_$_iter__65922(s__65923){
return (new cljs.core.LazySeq(null,((function (i__65918,i__65911,map__65920,map__65920__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65919,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65923__$1 = s__65923;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65923__$1);
if(temp__5735__auto____$3){
var s__65923__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65923__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65923__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65925 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65924 = (0);
while(true){
if((i__65924 < size__4581__auto____$2)){
var map__65926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65924);
var map__65926__$1 = (((((!((map__65926 == null))))?(((((map__65926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65926):map__65926);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65925,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65924,i__65918,i__65911,map__65926,map__65926__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65925,s__65923__$2,temp__5735__auto____$3,map__65920,map__65920__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65919,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65924,i__65918,i__65911,map__65926,map__65926__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65925,s__65923__$2,temp__5735__auto____$3,map__65920,map__65920__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65919,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66000 = (i__65924 + (1));
i__65924 = G__66000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65925),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916_$_iter__65922(cljs.core.chunk_rest(s__65923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65925),null);
}
} else {
var map__65928 = cljs.core.first(s__65923__$2);
var map__65928__$1 = (((((!((map__65928 == null))))?(((((map__65928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65928):map__65928);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65918,i__65911,map__65928,map__65928__$1,title__$1,string,uid__$2,s__65923__$2,temp__5735__auto____$3,map__65920,map__65920__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65919,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65918,i__65911,map__65928,map__65928__$1,title__$1,string,uid__$2,s__65923__$2,temp__5735__auto____$3,map__65920,map__65920__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65919,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916_$_iter__65922(cljs.core.rest(s__65923__$2)));
}
} else {
return null;
}
break;
}
});})(i__65918,i__65911,map__65920,map__65920__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65919,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65918,i__65911,map__65920,map__65920__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65919,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66001 = (i__65918 + (1));
i__65918 = G__66001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65919),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916(cljs.core.chunk_rest(s__65917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65919),null);
}
} else {
var map__65930 = cljs.core.first(s__65917__$2);
var map__65930__$1 = (((((!((map__65930 == null))))?(((((map__65930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65930):map__65930);
var block = map__65930__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65911,map__65930,map__65930__$1,block,uid__$1,parents,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916_$_iter__65932(s__65933){
return (new cljs.core.LazySeq(null,((function (i__65911,map__65930,map__65930__$1,block,uid__$1,parents,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65933__$1 = s__65933;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65933__$1);
if(temp__5735__auto____$3){
var s__65933__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65933__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65933__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65935 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65934 = (0);
while(true){
if((i__65934 < size__4581__auto____$1)){
var map__65936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65934);
var map__65936__$1 = (((((!((map__65936 == null))))?(((((map__65936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65936):map__65936);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65936__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65936__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65936__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65935,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65934,i__65911,map__65936,map__65936__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65935,s__65933__$2,temp__5735__auto____$3,map__65930,map__65930__$1,block,uid__$1,parents,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65934,i__65911,map__65936,map__65936__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65935,s__65933__$2,temp__5735__auto____$3,map__65930,map__65930__$1,block,uid__$1,parents,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66002 = (i__65934 + (1));
i__65934 = G__66002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65935),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916_$_iter__65932(cljs.core.chunk_rest(s__65933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65935),null);
}
} else {
var map__65938 = cljs.core.first(s__65933__$2);
var map__65938__$1 = (((((!((map__65938 == null))))?(((((map__65938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65938):map__65938);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65911,map__65938,map__65938__$1,title__$1,string,uid__$2,s__65933__$2,temp__5735__auto____$3,map__65930,map__65930__$1,block,uid__$1,parents,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65911,map__65938,map__65938__$1,title__$1,string,uid__$2,s__65933__$2,temp__5735__auto____$3,map__65930,map__65930__$1,block,uid__$1,parents,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916_$_iter__65932(cljs.core.rest(s__65933__$2)));
}
} else {
return null;
}
break;
}
});})(i__65911,map__65930,map__65930__$1,block,uid__$1,parents,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65911,map__65930,map__65930__$1,block,uid__$1,parents,s__65917__$2,temp__5735__auto____$2,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65916(cljs.core.rest(s__65917__$2)));
}
} else {
return null;
}
break;
}
});})(i__65911,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65911,vec__65913,group_title,group,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__66003 = (i__65911 + (1));
i__65911 = G__66003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65912),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909(cljs.core.chunk_rest(s__65910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65912),null);
}
} else {
var vec__65940 = cljs.core.first(s__65910__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65940,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65940,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943(s__65944){
return (new cljs.core.LazySeq(null,(function (){
var s__65944__$1 = s__65944;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65944__$1);
if(temp__5735__auto____$2){
var s__65944__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65944__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65944__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65946 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65945 = (0);
while(true){
if((i__65945 < size__4581__auto__)){
var map__65947 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65945);
var map__65947__$1 = (((((!((map__65947 == null))))?(((((map__65947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65947):map__65947);
var block = map__65947__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65946,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65945,map__65947,map__65947__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65946,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943_$_iter__65949(s__65950){
return (new cljs.core.LazySeq(null,((function (i__65945,map__65947,map__65947__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65946,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
var s__65950__$1 = s__65950;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65950__$1);
if(temp__5735__auto____$3){
var s__65950__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65950__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65950__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65952 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65951 = (0);
while(true){
if((i__65951 < size__4581__auto____$1)){
var map__65953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65951);
var map__65953__$1 = (((((!((map__65953 == null))))?(((((map__65953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65953):map__65953);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65952,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65951,i__65945,map__65953,map__65953__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65952,s__65950__$2,temp__5735__auto____$3,map__65947,map__65947__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65946,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65951,i__65945,map__65953,map__65953__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65952,s__65950__$2,temp__5735__auto____$3,map__65947,map__65947__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65946,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66004 = (i__65951 + (1));
i__65951 = G__66004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65952),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943_$_iter__65949(cljs.core.chunk_rest(s__65950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65952),null);
}
} else {
var map__65955 = cljs.core.first(s__65950__$2);
var map__65955__$1 = (((((!((map__65955 == null))))?(((((map__65955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65955):map__65955);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65945,map__65955,map__65955__$1,title__$1,string,uid__$2,s__65950__$2,temp__5735__auto____$3,map__65947,map__65947__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65946,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65945,map__65955,map__65955__$1,title__$1,string,uid__$2,s__65950__$2,temp__5735__auto____$3,map__65947,map__65947__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65946,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943_$_iter__65949(cljs.core.rest(s__65950__$2)));
}
} else {
return null;
}
break;
}
});})(i__65945,map__65947,map__65947__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65946,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
,null,null));
});})(i__65945,map__65947,map__65947__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65946,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66005 = (i__65945 + (1));
i__65945 = G__66005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65946),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943(cljs.core.chunk_rest(s__65944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65946),null);
}
} else {
var map__65957 = cljs.core.first(s__65944__$2);
var map__65957__$1 = (((((!((map__65957 == null))))?(((((map__65957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65957):map__65957);
var block = map__65957__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65957__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65957__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__65957,map__65957__$1,block,uid__$1,parents,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943_$_iter__65959(s__65960){
return (new cljs.core.LazySeq(null,(function (){
var s__65960__$1 = s__65960;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65960__$1);
if(temp__5735__auto____$3){
var s__65960__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65960__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65960__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65962 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65961 = (0);
while(true){
if((i__65961 < size__4581__auto__)){
var map__65963 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65961);
var map__65963__$1 = (((((!((map__65963 == null))))?(((((map__65963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65963):map__65963);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65963__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65963__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65963__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65962,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65961,map__65963,map__65963__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65962,s__65960__$2,temp__5735__auto____$3,map__65957,map__65957__$1,block,uid__$1,parents,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65961,map__65963,map__65963__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65962,s__65960__$2,temp__5735__auto____$3,map__65957,map__65957__$1,block,uid__$1,parents,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66006 = (i__65961 + (1));
i__65961 = G__66006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65962),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943_$_iter__65959(cljs.core.chunk_rest(s__65960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65962),null);
}
} else {
var map__65965 = cljs.core.first(s__65960__$2);
var map__65965__$1 = (((((!((map__65965 == null))))?(((((map__65965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65965):map__65965);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65965__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65965__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65965__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65965,map__65965__$1,title__$1,string,uid__$2,s__65960__$2,temp__5735__auto____$3,map__65957,map__65957__$1,block,uid__$1,parents,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__65965,map__65965__$1,title__$1,string,uid__$2,s__65960__$2,temp__5735__auto____$3,map__65957,map__65957__$1,block,uid__$1,parents,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943_$_iter__65959(cljs.core.rest(s__65960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65957,map__65957__$1,block,uid__$1,parents,s__65944__$2,temp__5735__auto____$2,vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909_$_iter__65943(cljs.core.rest(s__65944__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65940,group_title,group,s__65910__$2,temp__5735__auto____$1,vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65841_$_iter__65909(cljs.core.rest(s__65910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65906,linked_or_unlinked,refs,s__65842__$2,temp__5735__auto__,map__65829,map__65829__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__65841(cljs.core.rest(s__65842__$2)));
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
var node = athens.db.sort_block(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.node_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.node_pull_pattern,ident))));
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__65967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65967) : re_frame.core.subscribe.call(null,G__65967));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
