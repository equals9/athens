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
var G__60852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60852) : re_frame.core.dispatch.call(null,G__60852));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__60853 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__60854 = athens.db.dsdb;
var G__60855 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60853,G__60854,G__60855) : posh.reagent.q.call(null,G__60853,G__60854,G__60855));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__60856,editing_uid,ref_groups){
var map__60857 = p__60856;
var map__60857__$1 = (((((!((map__60857 == null))))?(((((map__60857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60857):map__60857);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60857__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60857__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60857__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__60859 = e.target.value;
var G__60860 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__60859,G__60860) : athens.devcards.node_page.db_handler.call(null,G__60859,G__60860));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60861(s__60862){
return (new cljs.core.LazySeq(null,(function (){
var s__60862__$1 = s__60862;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60862__$1);
if(temp__5735__auto__){
var s__60862__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60862__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60862__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60864 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60863 = (0);
while(true){
if((i__60863 < size__4581__auto__)){
var map__60865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60863);
var map__60865__$1 = (((((!((map__60865 == null))))?(((((map__60865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60865):map__60865);
var child = map__60865__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60865__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60864,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__60999 = (i__60863 + (1));
i__60863 = G__60999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60864),athens$devcards$node_page$node_page_el_$_iter__60861(cljs.core.chunk_rest(s__60862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60864),null);
}
} else {
var map__60867 = cljs.core.first(s__60862__$2);
var map__60867__$1 = (((((!((map__60867 == null))))?(((((map__60867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60867):map__60867);
var child = map__60867__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60867__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__60861(cljs.core.rest(s__60862__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60869(s__60870){
return (new cljs.core.LazySeq(null,(function (){
var s__60870__$1 = s__60870;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60870__$1);
if(temp__5735__auto__){
var s__60870__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60870__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60870__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60872 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60871 = (0);
while(true){
if((i__60871 < size__4581__auto__)){
var vec__60873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60871);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60873,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60873,(1),null);
cljs.core.chunk_append(b__60872,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__60871,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876(s__60877){
return (new cljs.core.LazySeq(null,((function (i__60871,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60877__$1 = s__60877;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60877__$1);
if(temp__5735__auto____$1){
var s__60877__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60877__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60877__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60879 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60878 = (0);
while(true){
if((i__60878 < size__4581__auto____$1)){
var vec__60880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60878);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(1),null);
cljs.core.chunk_append(b__60879,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60878,i__60871,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883(s__60884){
return (new cljs.core.LazySeq(null,((function (i__60878,i__60871,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60884__$1 = s__60884;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60884__$1);
if(temp__5735__auto____$2){
var s__60884__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60884__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60884__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60886 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60885 = (0);
while(true){
if((i__60885 < size__4581__auto____$2)){
var map__60887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60885);
var map__60887__$1 = (((((!((map__60887 == null))))?(((((map__60887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60887):map__60887);
var block = map__60887__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60886,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60885,i__60878,i__60871,map__60887,map__60887__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60886,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60885,i__60878,i__60871,map__60887,map__60887__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60886,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60885,i__60878,i__60871,map__60887,map__60887__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60886,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883_$_iter__60889(s__60890){
return (new cljs.core.LazySeq(null,((function (i__60885,i__60878,i__60871,map__60887,map__60887__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60886,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60890__$1 = s__60890;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60890__$1);
if(temp__5735__auto____$3){
var s__60890__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60890__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__60890__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__60892 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__60891 = (0);
while(true){
if((i__60891 < size__4581__auto____$3)){
var map__60893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__60891);
var map__60893__$1 = (((((!((map__60893 == null))))?(((((map__60893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60893):map__60893);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60893__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60893__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60893__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61000 = (i__60891 + (1));
i__60891 = G__61000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60892),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883_$_iter__60889(cljs.core.chunk_rest(s__60890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60892),null);
}
} else {
var map__60895 = cljs.core.first(s__60890__$2);
var map__60895__$1 = (((((!((map__60895 == null))))?(((((map__60895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60895):map__60895);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883_$_iter__60889(cljs.core.rest(s__60890__$2)));
}
} else {
return null;
}
break;
}
});})(i__60885,i__60878,i__60871,map__60887,map__60887__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60886,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60885,i__60878,i__60871,map__60887,map__60887__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60886,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61001 = (i__60885 + (1));
i__60885 = G__61001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60886),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883(cljs.core.chunk_rest(s__60884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60886),null);
}
} else {
var map__60897 = cljs.core.first(s__60884__$2);
var map__60897__$1 = (((((!((map__60897 == null))))?(((((map__60897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60897):map__60897);
var block = map__60897__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60878,i__60871,map__60897,map__60897__$1,block,uid__$1,parents,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60878,i__60871,map__60897,map__60897__$1,block,uid__$1,parents,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60878,i__60871,map__60897,map__60897__$1,block,uid__$1,parents,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883_$_iter__60899(s__60900){
return (new cljs.core.LazySeq(null,((function (i__60878,i__60871,map__60897,map__60897__$1,block,uid__$1,parents,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60900__$1 = s__60900;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60900__$1);
if(temp__5735__auto____$3){
var s__60900__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60900__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60900__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60902 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60901 = (0);
while(true){
if((i__60901 < size__4581__auto____$2)){
var map__60903 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60901);
var map__60903__$1 = (((((!((map__60903 == null))))?(((((map__60903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60903):map__60903);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60902,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61002 = (i__60901 + (1));
i__60901 = G__61002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60902),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883_$_iter__60899(cljs.core.chunk_rest(s__60900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60902),null);
}
} else {
var map__60905 = cljs.core.first(s__60900__$2);
var map__60905__$1 = (((((!((map__60905 == null))))?(((((map__60905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60905):map__60905);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883_$_iter__60899(cljs.core.rest(s__60900__$2)));
}
} else {
return null;
}
break;
}
});})(i__60878,i__60871,map__60897,map__60897__$1,block,uid__$1,parents,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60878,i__60871,map__60897,map__60897__$1,block,uid__$1,parents,s__60884__$2,temp__5735__auto____$2,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60883(cljs.core.rest(s__60884__$2)));
}
} else {
return null;
}
break;
}
});})(i__60878,i__60871,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60878,i__60871,vec__60880,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60879,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__61003 = (i__60878 + (1));
i__60878 = G__61003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60879),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876(cljs.core.chunk_rest(s__60877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60879),null);
}
} else {
var vec__60907 = cljs.core.first(s__60877__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60907,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60907,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60871,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910(s__60911){
return (new cljs.core.LazySeq(null,((function (i__60871,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60911__$1 = s__60911;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60911__$1);
if(temp__5735__auto____$2){
var s__60911__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60911__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60911__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60913 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60912 = (0);
while(true){
if((i__60912 < size__4581__auto____$1)){
var map__60914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60912);
var map__60914__$1 = (((((!((map__60914 == null))))?(((((map__60914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60914):map__60914);
var block = map__60914__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60913,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60912,i__60871,map__60914,map__60914__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60913,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60912,i__60871,map__60914,map__60914__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60913,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60912,i__60871,map__60914,map__60914__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60913,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910_$_iter__60916(s__60917){
return (new cljs.core.LazySeq(null,((function (i__60912,i__60871,map__60914,map__60914__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60913,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60917__$1 = s__60917;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60917__$1);
if(temp__5735__auto____$3){
var s__60917__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60917__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60917__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60919 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60918 = (0);
while(true){
if((i__60918 < size__4581__auto____$2)){
var map__60920 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60918);
var map__60920__$1 = (((((!((map__60920 == null))))?(((((map__60920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60920):map__60920);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60919,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61004 = (i__60918 + (1));
i__60918 = G__61004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60919),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910_$_iter__60916(cljs.core.chunk_rest(s__60917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60919),null);
}
} else {
var map__60922 = cljs.core.first(s__60917__$2);
var map__60922__$1 = (((((!((map__60922 == null))))?(((((map__60922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60922):map__60922);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910_$_iter__60916(cljs.core.rest(s__60917__$2)));
}
} else {
return null;
}
break;
}
});})(i__60912,i__60871,map__60914,map__60914__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60913,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60912,i__60871,map__60914,map__60914__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60913,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61005 = (i__60912 + (1));
i__60912 = G__61005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60913),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910(cljs.core.chunk_rest(s__60911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60913),null);
}
} else {
var map__60924 = cljs.core.first(s__60911__$2);
var map__60924__$1 = (((((!((map__60924 == null))))?(((((map__60924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60924):map__60924);
var block = map__60924__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60871,map__60924,map__60924__$1,block,uid__$1,parents,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60871,map__60924,map__60924__$1,block,uid__$1,parents,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60871,map__60924,map__60924__$1,block,uid__$1,parents,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910_$_iter__60926(s__60927){
return (new cljs.core.LazySeq(null,((function (i__60871,map__60924,map__60924__$1,block,uid__$1,parents,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60927__$1 = s__60927;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60927__$1);
if(temp__5735__auto____$3){
var s__60927__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60927__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60927__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60929 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60928 = (0);
while(true){
if((i__60928 < size__4581__auto____$1)){
var map__60930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60928);
var map__60930__$1 = (((((!((map__60930 == null))))?(((((map__60930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60930):map__60930);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60930__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60930__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60930__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60929,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61006 = (i__60928 + (1));
i__60928 = G__61006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60929),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910_$_iter__60926(cljs.core.chunk_rest(s__60927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60929),null);
}
} else {
var map__60932 = cljs.core.first(s__60927__$2);
var map__60932__$1 = (((((!((map__60932 == null))))?(((((map__60932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60932):map__60932);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910_$_iter__60926(cljs.core.rest(s__60927__$2)));
}
} else {
return null;
}
break;
}
});})(i__60871,map__60924,map__60924__$1,block,uid__$1,parents,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60871,map__60924,map__60924__$1,block,uid__$1,parents,s__60911__$2,temp__5735__auto____$2,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876_$_iter__60910(cljs.core.rest(s__60911__$2)));
}
} else {
return null;
}
break;
}
});})(i__60871,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60871,vec__60907,group_title,group,s__60877__$2,temp__5735__auto____$1,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60876(cljs.core.rest(s__60877__$2)));
}
} else {
return null;
}
break;
}
});})(i__60871,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60871,vec__60873,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60872,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__61007 = (i__60871 + (1));
i__60871 = G__61007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60872),athens$devcards$node_page$node_page_el_$_iter__60869(cljs.core.chunk_rest(s__60870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60872),null);
}
} else {
var vec__60934 = cljs.core.first(s__60870__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60934,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60934,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937(s__60938){
return (new cljs.core.LazySeq(null,(function (){
var s__60938__$1 = s__60938;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60938__$1);
if(temp__5735__auto____$1){
var s__60938__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60938__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60938__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60940 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60939 = (0);
while(true){
if((i__60939 < size__4581__auto__)){
var vec__60941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60939);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60941,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60941,(1),null);
cljs.core.chunk_append(b__60940,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60939,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944(s__60945){
return (new cljs.core.LazySeq(null,((function (i__60939,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60945__$1 = s__60945;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60945__$1);
if(temp__5735__auto____$2){
var s__60945__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60945__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60945__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60947 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60946 = (0);
while(true){
if((i__60946 < size__4581__auto____$1)){
var map__60948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60946);
var map__60948__$1 = (((((!((map__60948 == null))))?(((((map__60948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60948):map__60948);
var block = map__60948__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60947,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60946,i__60939,map__60948,map__60948__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60947,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60946,i__60939,map__60948,map__60948__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60947,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60946,i__60939,map__60948,map__60948__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60947,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944_$_iter__60950(s__60951){
return (new cljs.core.LazySeq(null,((function (i__60946,i__60939,map__60948,map__60948__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60947,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60951__$1 = s__60951;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60951__$1);
if(temp__5735__auto____$3){
var s__60951__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60951__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60951__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60953 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60952 = (0);
while(true){
if((i__60952 < size__4581__auto____$2)){
var map__60954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60952);
var map__60954__$1 = (((((!((map__60954 == null))))?(((((map__60954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60954):map__60954);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60953,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61008 = (i__60952 + (1));
i__60952 = G__61008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60953),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944_$_iter__60950(cljs.core.chunk_rest(s__60951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60953),null);
}
} else {
var map__60956 = cljs.core.first(s__60951__$2);
var map__60956__$1 = (((((!((map__60956 == null))))?(((((map__60956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60956):map__60956);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944_$_iter__60950(cljs.core.rest(s__60951__$2)));
}
} else {
return null;
}
break;
}
});})(i__60946,i__60939,map__60948,map__60948__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60947,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60946,i__60939,map__60948,map__60948__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60947,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61009 = (i__60946 + (1));
i__60946 = G__61009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60947),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944(cljs.core.chunk_rest(s__60945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60947),null);
}
} else {
var map__60958 = cljs.core.first(s__60945__$2);
var map__60958__$1 = (((((!((map__60958 == null))))?(((((map__60958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60958):map__60958);
var block = map__60958__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60939,map__60958,map__60958__$1,block,uid__$1,parents,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60939,map__60958,map__60958__$1,block,uid__$1,parents,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60939,map__60958,map__60958__$1,block,uid__$1,parents,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944_$_iter__60960(s__60961){
return (new cljs.core.LazySeq(null,((function (i__60939,map__60958,map__60958__$1,block,uid__$1,parents,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60961__$1 = s__60961;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60961__$1);
if(temp__5735__auto____$3){
var s__60961__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60961__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60961__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60963 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60962 = (0);
while(true){
if((i__60962 < size__4581__auto____$1)){
var map__60964 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60962);
var map__60964__$1 = (((((!((map__60964 == null))))?(((((map__60964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60964):map__60964);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60963,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61010 = (i__60962 + (1));
i__60962 = G__61010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60963),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944_$_iter__60960(cljs.core.chunk_rest(s__60961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60963),null);
}
} else {
var map__60966 = cljs.core.first(s__60961__$2);
var map__60966__$1 = (((((!((map__60966 == null))))?(((((map__60966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60966):map__60966);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60966__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60966__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60966__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944_$_iter__60960(cljs.core.rest(s__60961__$2)));
}
} else {
return null;
}
break;
}
});})(i__60939,map__60958,map__60958__$1,block,uid__$1,parents,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60939,map__60958,map__60958__$1,block,uid__$1,parents,s__60945__$2,temp__5735__auto____$2,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60944(cljs.core.rest(s__60945__$2)));
}
} else {
return null;
}
break;
}
});})(i__60939,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60939,vec__60941,group_title,group,c__4580__auto__,size__4581__auto__,b__60940,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__61011 = (i__60939 + (1));
i__60939 = G__61011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60940),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937(cljs.core.chunk_rest(s__60938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60940),null);
}
} else {
var vec__60968 = cljs.core.first(s__60938__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60968,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60968,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971(s__60972){
return (new cljs.core.LazySeq(null,(function (){
var s__60972__$1 = s__60972;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60972__$1);
if(temp__5735__auto____$2){
var s__60972__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60972__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60972__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60974 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60973 = (0);
while(true){
if((i__60973 < size__4581__auto__)){
var map__60975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60973);
var map__60975__$1 = (((((!((map__60975 == null))))?(((((map__60975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60975):map__60975);
var block = map__60975__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60974,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60973,map__60975,map__60975__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60974,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60973,map__60975,map__60975__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60974,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60973,map__60975,map__60975__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60974,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971_$_iter__60977(s__60978){
return (new cljs.core.LazySeq(null,((function (i__60973,map__60975,map__60975__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60974,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (){
var s__60978__$1 = s__60978;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60978__$1);
if(temp__5735__auto____$3){
var s__60978__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60978__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60978__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60980 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60979 = (0);
while(true){
if((i__60979 < size__4581__auto____$1)){
var map__60981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60979);
var map__60981__$1 = (((((!((map__60981 == null))))?(((((map__60981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60981):map__60981);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60981__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60981__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60981__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60980,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61012 = (i__60979 + (1));
i__60979 = G__61012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60980),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971_$_iter__60977(cljs.core.chunk_rest(s__60978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60980),null);
}
} else {
var map__60983 = cljs.core.first(s__60978__$2);
var map__60983__$1 = (((((!((map__60983 == null))))?(((((map__60983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60983):map__60983);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60983__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60983__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60983__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971_$_iter__60977(cljs.core.rest(s__60978__$2)));
}
} else {
return null;
}
break;
}
});})(i__60973,map__60975,map__60975__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60974,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,null,null));
});})(i__60973,map__60975,map__60975__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60974,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61013 = (i__60973 + (1));
i__60973 = G__61013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60974),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971(cljs.core.chunk_rest(s__60972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60974),null);
}
} else {
var map__60985 = cljs.core.first(s__60972__$2);
var map__60985__$1 = (((((!((map__60985 == null))))?(((((map__60985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60985):map__60985);
var block = map__60985__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__60985,map__60985__$1,block,uid__$1,parents,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__60985,map__60985__$1,block,uid__$1,parents,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__60985,map__60985__$1,block,uid__$1,parents,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971_$_iter__60987(s__60988){
return (new cljs.core.LazySeq(null,(function (){
var s__60988__$1 = s__60988;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60988__$1);
if(temp__5735__auto____$3){
var s__60988__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60988__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60988__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60990 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60989 = (0);
while(true){
if((i__60989 < size__4581__auto__)){
var map__60991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60989);
var map__60991__$1 = (((((!((map__60991 == null))))?(((((map__60991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60991):map__60991);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60991__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60991__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60991__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60990,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61014 = (i__60989 + (1));
i__60989 = G__61014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60990),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971_$_iter__60987(cljs.core.chunk_rest(s__60988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60990),null);
}
} else {
var map__60993 = cljs.core.first(s__60988__$2);
var map__60993__$1 = (((((!((map__60993 == null))))?(((((map__60993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60993):map__60993);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971_$_iter__60987(cljs.core.rest(s__60988__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__60985,map__60985__$1,block,uid__$1,parents,s__60972__$2,temp__5735__auto____$2,vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937_$_iter__60971(cljs.core.rest(s__60972__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60968,group_title,group,s__60938__$2,temp__5735__auto____$1,vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__60869_$_iter__60937(cljs.core.rest(s__60938__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60934,linked_or_unlinked,refs,s__60870__$2,temp__5735__auto__,map__60857,map__60857__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__60869(cljs.core.rest(s__60870__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__60995 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60995) : re_frame.core.subscribe.call(null,G__60995));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.node_page","athens.devcards.node_page",-728487734),new cljs.core.Keyword(null,"Node-Page","Node-Page",2010568893)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Node-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"pull entity 4093: \"Hyperlink\" page",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page60996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page60996 = (function (meta60997){
this.meta60997 = meta60997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page60996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60998,meta60997__$1){
var self__ = this;
var _60998__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page60996(meta60997__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page60996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60998){
var self__ = this;
var _60998__$1 = this;
return self__.meta60997;
}));

(athens.devcards.node_page.t_athens$devcards$node_page60996.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page60996.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,(4093)], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.node_page.t_athens$devcards$node_page60996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60997","meta60997",-1611481338,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page60996.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page60996.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page60996");

(athens.devcards.node_page.t_athens$devcards$node_page60996.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page60996");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page60996.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page60996 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page60996(meta60997){
return (new athens.devcards.node_page.t_athens$devcards$node_page60996(meta60997));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page60996(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
