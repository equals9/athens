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
var G__60854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60854) : re_frame.core.dispatch.call(null,G__60854));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__60855 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__60856 = athens.db.dsdb;
var G__60857 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60855,G__60856,G__60857) : posh.reagent.q.call(null,G__60855,G__60856,G__60857));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__60858,editing_uid,ref_groups){
var map__60859 = p__60858;
var map__60859__$1 = (((((!((map__60859 == null))))?(((((map__60859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60859):map__60859);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__60861 = e.target.value;
var G__60862 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__60861,G__60862) : athens.devcards.node_page.db_handler.call(null,G__60861,G__60862));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60863(s__60864){
return (new cljs.core.LazySeq(null,(function (){
var s__60864__$1 = s__60864;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60864__$1);
if(temp__5735__auto__){
var s__60864__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60864__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60864__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60866 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60865 = (0);
while(true){
if((i__60865 < size__4581__auto__)){
var map__60867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60865);
var map__60867__$1 = (((((!((map__60867 == null))))?(((((map__60867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60867):map__60867);
var child = map__60867__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60867__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60866,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__61001 = (i__60865 + (1));
i__60865 = G__61001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60866),athens$devcards$node_page$node_page_el_$_iter__60863(cljs.core.chunk_rest(s__60864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60866),null);
}
} else {
var map__60869 = cljs.core.first(s__60864__$2);
var map__60869__$1 = (((((!((map__60869 == null))))?(((((map__60869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60869):map__60869);
var child = map__60869__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__60863(cljs.core.rest(s__60864__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60871(s__60872){
return (new cljs.core.LazySeq(null,(function (){
var s__60872__$1 = s__60872;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60872__$1);
if(temp__5735__auto__){
var s__60872__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60872__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60872__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60874 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60873 = (0);
while(true){
if((i__60873 < size__4581__auto__)){
var vec__60875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60873);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60875,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60875,(1),null);
cljs.core.chunk_append(b__60874,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__60873,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878(s__60879){
return (new cljs.core.LazySeq(null,((function (i__60873,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60879__$1 = s__60879;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60879__$1);
if(temp__5735__auto____$1){
var s__60879__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60879__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60879__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60881 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60880 = (0);
while(true){
if((i__60880 < size__4581__auto____$1)){
var vec__60882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60880);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60882,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60882,(1),null);
cljs.core.chunk_append(b__60881,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60880,i__60873,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885(s__60886){
return (new cljs.core.LazySeq(null,((function (i__60880,i__60873,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60886__$1 = s__60886;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60886__$1);
if(temp__5735__auto____$2){
var s__60886__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60886__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60886__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60888 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60887 = (0);
while(true){
if((i__60887 < size__4581__auto____$2)){
var map__60889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60887);
var map__60889__$1 = (((((!((map__60889 == null))))?(((((map__60889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60889):map__60889);
var block = map__60889__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60889__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60889__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60888,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60887,i__60880,i__60873,map__60889,map__60889__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60888,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60887,i__60880,i__60873,map__60889,map__60889__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60888,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60887,i__60880,i__60873,map__60889,map__60889__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60888,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885_$_iter__60891(s__60892){
return (new cljs.core.LazySeq(null,((function (i__60887,i__60880,i__60873,map__60889,map__60889__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60888,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60892__$1 = s__60892;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60892__$1);
if(temp__5735__auto____$3){
var s__60892__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60892__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__60892__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__60894 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__60893 = (0);
while(true){
if((i__60893 < size__4581__auto____$3)){
var map__60895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__60893);
var map__60895__$1 = (((((!((map__60895 == null))))?(((((map__60895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60895):map__60895);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60894,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61002 = (i__60893 + (1));
i__60893 = G__61002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60894),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885_$_iter__60891(cljs.core.chunk_rest(s__60892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60894),null);
}
} else {
var map__60897 = cljs.core.first(s__60892__$2);
var map__60897__$1 = (((((!((map__60897 == null))))?(((((map__60897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60897):map__60897);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885_$_iter__60891(cljs.core.rest(s__60892__$2)));
}
} else {
return null;
}
break;
}
});})(i__60887,i__60880,i__60873,map__60889,map__60889__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60888,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60887,i__60880,i__60873,map__60889,map__60889__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60888,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61003 = (i__60887 + (1));
i__60887 = G__61003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60888),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885(cljs.core.chunk_rest(s__60886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60888),null);
}
} else {
var map__60899 = cljs.core.first(s__60886__$2);
var map__60899__$1 = (((((!((map__60899 == null))))?(((((map__60899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60899):map__60899);
var block = map__60899__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60899__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60899__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60880,i__60873,map__60899,map__60899__$1,block,uid__$1,parents,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60880,i__60873,map__60899,map__60899__$1,block,uid__$1,parents,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60880,i__60873,map__60899,map__60899__$1,block,uid__$1,parents,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885_$_iter__60901(s__60902){
return (new cljs.core.LazySeq(null,((function (i__60880,i__60873,map__60899,map__60899__$1,block,uid__$1,parents,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60902__$1 = s__60902;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60902__$1);
if(temp__5735__auto____$3){
var s__60902__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60902__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60902__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60904 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60903 = (0);
while(true){
if((i__60903 < size__4581__auto____$2)){
var map__60905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60903);
var map__60905__$1 = (((((!((map__60905 == null))))?(((((map__60905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60905):map__60905);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60904,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61004 = (i__60903 + (1));
i__60903 = G__61004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60904),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885_$_iter__60901(cljs.core.chunk_rest(s__60902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60904),null);
}
} else {
var map__60907 = cljs.core.first(s__60902__$2);
var map__60907__$1 = (((((!((map__60907 == null))))?(((((map__60907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60907):map__60907);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60907__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60907__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60907__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885_$_iter__60901(cljs.core.rest(s__60902__$2)));
}
} else {
return null;
}
break;
}
});})(i__60880,i__60873,map__60899,map__60899__$1,block,uid__$1,parents,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60880,i__60873,map__60899,map__60899__$1,block,uid__$1,parents,s__60886__$2,temp__5735__auto____$2,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60885(cljs.core.rest(s__60886__$2)));
}
} else {
return null;
}
break;
}
});})(i__60880,i__60873,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60880,i__60873,vec__60882,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60881,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__61005 = (i__60880 + (1));
i__60880 = G__61005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60881),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878(cljs.core.chunk_rest(s__60879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60881),null);
}
} else {
var vec__60909 = cljs.core.first(s__60879__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60909,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60909,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60873,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912(s__60913){
return (new cljs.core.LazySeq(null,((function (i__60873,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60913__$1 = s__60913;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60913__$1);
if(temp__5735__auto____$2){
var s__60913__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60913__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60913__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60915 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60914 = (0);
while(true){
if((i__60914 < size__4581__auto____$1)){
var map__60916 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60914);
var map__60916__$1 = (((((!((map__60916 == null))))?(((((map__60916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60916):map__60916);
var block = map__60916__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60916__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60916__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60915,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60914,i__60873,map__60916,map__60916__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60915,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60914,i__60873,map__60916,map__60916__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60915,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60914,i__60873,map__60916,map__60916__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60915,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912_$_iter__60918(s__60919){
return (new cljs.core.LazySeq(null,((function (i__60914,i__60873,map__60916,map__60916__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60915,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60919__$1 = s__60919;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60919__$1);
if(temp__5735__auto____$3){
var s__60919__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60919__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60919__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60921 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60920 = (0);
while(true){
if((i__60920 < size__4581__auto____$2)){
var map__60922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60920);
var map__60922__$1 = (((((!((map__60922 == null))))?(((((map__60922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60922):map__60922);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60921,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61006 = (i__60920 + (1));
i__60920 = G__61006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60921),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912_$_iter__60918(cljs.core.chunk_rest(s__60919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60921),null);
}
} else {
var map__60924 = cljs.core.first(s__60919__$2);
var map__60924__$1 = (((((!((map__60924 == null))))?(((((map__60924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60924):map__60924);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912_$_iter__60918(cljs.core.rest(s__60919__$2)));
}
} else {
return null;
}
break;
}
});})(i__60914,i__60873,map__60916,map__60916__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60915,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60914,i__60873,map__60916,map__60916__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60915,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61007 = (i__60914 + (1));
i__60914 = G__61007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60915),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912(cljs.core.chunk_rest(s__60913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60915),null);
}
} else {
var map__60926 = cljs.core.first(s__60913__$2);
var map__60926__$1 = (((((!((map__60926 == null))))?(((((map__60926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60926):map__60926);
var block = map__60926__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60926__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60926__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60873,map__60926,map__60926__$1,block,uid__$1,parents,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60873,map__60926,map__60926__$1,block,uid__$1,parents,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60873,map__60926,map__60926__$1,block,uid__$1,parents,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912_$_iter__60928(s__60929){
return (new cljs.core.LazySeq(null,((function (i__60873,map__60926,map__60926__$1,block,uid__$1,parents,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60929__$1 = s__60929;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60929__$1);
if(temp__5735__auto____$3){
var s__60929__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60929__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60929__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60931 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60930 = (0);
while(true){
if((i__60930 < size__4581__auto____$1)){
var map__60932 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60930);
var map__60932__$1 = (((((!((map__60932 == null))))?(((((map__60932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60932):map__60932);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60931,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61008 = (i__60930 + (1));
i__60930 = G__61008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60931),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912_$_iter__60928(cljs.core.chunk_rest(s__60929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60931),null);
}
} else {
var map__60934 = cljs.core.first(s__60929__$2);
var map__60934__$1 = (((((!((map__60934 == null))))?(((((map__60934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60934):map__60934);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912_$_iter__60928(cljs.core.rest(s__60929__$2)));
}
} else {
return null;
}
break;
}
});})(i__60873,map__60926,map__60926__$1,block,uid__$1,parents,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60873,map__60926,map__60926__$1,block,uid__$1,parents,s__60913__$2,temp__5735__auto____$2,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878_$_iter__60912(cljs.core.rest(s__60913__$2)));
}
} else {
return null;
}
break;
}
});})(i__60873,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60873,vec__60909,group_title,group,s__60879__$2,temp__5735__auto____$1,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60878(cljs.core.rest(s__60879__$2)));
}
} else {
return null;
}
break;
}
});})(i__60873,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60873,vec__60875,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60874,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__61009 = (i__60873 + (1));
i__60873 = G__61009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60874),athens$devcards$node_page$node_page_el_$_iter__60871(cljs.core.chunk_rest(s__60872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60874),null);
}
} else {
var vec__60936 = cljs.core.first(s__60872__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60936,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60936,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939(s__60940){
return (new cljs.core.LazySeq(null,(function (){
var s__60940__$1 = s__60940;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60940__$1);
if(temp__5735__auto____$1){
var s__60940__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60940__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60940__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60942 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60941 = (0);
while(true){
if((i__60941 < size__4581__auto__)){
var vec__60943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60941);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60943,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60943,(1),null);
cljs.core.chunk_append(b__60942,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60941,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946(s__60947){
return (new cljs.core.LazySeq(null,((function (i__60941,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60947__$1 = s__60947;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60947__$1);
if(temp__5735__auto____$2){
var s__60947__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60947__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60947__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60949 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60948 = (0);
while(true){
if((i__60948 < size__4581__auto____$1)){
var map__60950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60948);
var map__60950__$1 = (((((!((map__60950 == null))))?(((((map__60950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60950):map__60950);
var block = map__60950__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60950__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60950__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60949,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60948,i__60941,map__60950,map__60950__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60949,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60948,i__60941,map__60950,map__60950__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60949,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60948,i__60941,map__60950,map__60950__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60949,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946_$_iter__60952(s__60953){
return (new cljs.core.LazySeq(null,((function (i__60948,i__60941,map__60950,map__60950__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60949,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60953__$1 = s__60953;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60953__$1);
if(temp__5735__auto____$3){
var s__60953__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60953__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60953__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60955 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60954 = (0);
while(true){
if((i__60954 < size__4581__auto____$2)){
var map__60956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60954);
var map__60956__$1 = (((((!((map__60956 == null))))?(((((map__60956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60956):map__60956);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60955,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61010 = (i__60954 + (1));
i__60954 = G__61010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60955),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946_$_iter__60952(cljs.core.chunk_rest(s__60953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60955),null);
}
} else {
var map__60958 = cljs.core.first(s__60953__$2);
var map__60958__$1 = (((((!((map__60958 == null))))?(((((map__60958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60958):map__60958);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946_$_iter__60952(cljs.core.rest(s__60953__$2)));
}
} else {
return null;
}
break;
}
});})(i__60948,i__60941,map__60950,map__60950__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60949,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60948,i__60941,map__60950,map__60950__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60949,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61011 = (i__60948 + (1));
i__60948 = G__61011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60949),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946(cljs.core.chunk_rest(s__60947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60949),null);
}
} else {
var map__60960 = cljs.core.first(s__60947__$2);
var map__60960__$1 = (((((!((map__60960 == null))))?(((((map__60960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60960):map__60960);
var block = map__60960__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60941,map__60960,map__60960__$1,block,uid__$1,parents,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60941,map__60960,map__60960__$1,block,uid__$1,parents,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60941,map__60960,map__60960__$1,block,uid__$1,parents,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946_$_iter__60962(s__60963){
return (new cljs.core.LazySeq(null,((function (i__60941,map__60960,map__60960__$1,block,uid__$1,parents,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60963__$1 = s__60963;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60963__$1);
if(temp__5735__auto____$3){
var s__60963__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60963__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60963__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60965 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60964 = (0);
while(true){
if((i__60964 < size__4581__auto____$1)){
var map__60966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60964);
var map__60966__$1 = (((((!((map__60966 == null))))?(((((map__60966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60966):map__60966);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60966__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60966__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60966__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60965,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61012 = (i__60964 + (1));
i__60964 = G__61012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60965),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946_$_iter__60962(cljs.core.chunk_rest(s__60963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60965),null);
}
} else {
var map__60968 = cljs.core.first(s__60963__$2);
var map__60968__$1 = (((((!((map__60968 == null))))?(((((map__60968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60968):map__60968);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60968__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60968__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60968__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946_$_iter__60962(cljs.core.rest(s__60963__$2)));
}
} else {
return null;
}
break;
}
});})(i__60941,map__60960,map__60960__$1,block,uid__$1,parents,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60941,map__60960,map__60960__$1,block,uid__$1,parents,s__60947__$2,temp__5735__auto____$2,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60946(cljs.core.rest(s__60947__$2)));
}
} else {
return null;
}
break;
}
});})(i__60941,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60941,vec__60943,group_title,group,c__4580__auto__,size__4581__auto__,b__60942,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__61013 = (i__60941 + (1));
i__60941 = G__61013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60942),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939(cljs.core.chunk_rest(s__60940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60942),null);
}
} else {
var vec__60970 = cljs.core.first(s__60940__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60970,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60970,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973(s__60974){
return (new cljs.core.LazySeq(null,(function (){
var s__60974__$1 = s__60974;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60974__$1);
if(temp__5735__auto____$2){
var s__60974__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60974__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60974__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60976 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60975 = (0);
while(true){
if((i__60975 < size__4581__auto__)){
var map__60977 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60975);
var map__60977__$1 = (((((!((map__60977 == null))))?(((((map__60977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60977):map__60977);
var block = map__60977__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60976,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60975,map__60977,map__60977__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60976,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60975,map__60977,map__60977__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60976,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60975,map__60977,map__60977__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60976,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973_$_iter__60979(s__60980){
return (new cljs.core.LazySeq(null,((function (i__60975,map__60977,map__60977__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60976,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (){
var s__60980__$1 = s__60980;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60980__$1);
if(temp__5735__auto____$3){
var s__60980__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60980__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60980__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60982 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60981 = (0);
while(true){
if((i__60981 < size__4581__auto____$1)){
var map__60983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60981);
var map__60983__$1 = (((((!((map__60983 == null))))?(((((map__60983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60983):map__60983);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60983__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60983__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60983__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60982,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61014 = (i__60981 + (1));
i__60981 = G__61014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60982),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973_$_iter__60979(cljs.core.chunk_rest(s__60980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60982),null);
}
} else {
var map__60985 = cljs.core.first(s__60980__$2);
var map__60985__$1 = (((((!((map__60985 == null))))?(((((map__60985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60985):map__60985);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973_$_iter__60979(cljs.core.rest(s__60980__$2)));
}
} else {
return null;
}
break;
}
});})(i__60975,map__60977,map__60977__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60976,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,null,null));
});})(i__60975,map__60977,map__60977__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60976,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61015 = (i__60975 + (1));
i__60975 = G__61015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60976),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973(cljs.core.chunk_rest(s__60974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60976),null);
}
} else {
var map__60987 = cljs.core.first(s__60974__$2);
var map__60987__$1 = (((((!((map__60987 == null))))?(((((map__60987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60987):map__60987);
var block = map__60987__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60987__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60987__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__60987,map__60987__$1,block,uid__$1,parents,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__60987,map__60987__$1,block,uid__$1,parents,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__60987,map__60987__$1,block,uid__$1,parents,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973_$_iter__60989(s__60990){
return (new cljs.core.LazySeq(null,(function (){
var s__60990__$1 = s__60990;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60990__$1);
if(temp__5735__auto____$3){
var s__60990__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60990__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60990__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60992 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60991 = (0);
while(true){
if((i__60991 < size__4581__auto__)){
var map__60993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60991);
var map__60993__$1 = (((((!((map__60993 == null))))?(((((map__60993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60993):map__60993);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60992,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61016 = (i__60991 + (1));
i__60991 = G__61016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60992),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973_$_iter__60989(cljs.core.chunk_rest(s__60990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60992),null);
}
} else {
var map__60995 = cljs.core.first(s__60990__$2);
var map__60995__$1 = (((((!((map__60995 == null))))?(((((map__60995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60995):map__60995);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60995__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60995__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60995__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973_$_iter__60989(cljs.core.rest(s__60990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__60987,map__60987__$1,block,uid__$1,parents,s__60974__$2,temp__5735__auto____$2,vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939_$_iter__60973(cljs.core.rest(s__60974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60970,group_title,group,s__60940__$2,temp__5735__auto____$1,vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__60871_$_iter__60939(cljs.core.rest(s__60940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60936,linked_or_unlinked,refs,s__60872__$2,temp__5735__auto__,map__60859,map__60859__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__60871(cljs.core.rest(s__60872__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__60997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60997) : re_frame.core.subscribe.call(null,G__60997));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page60998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page60998 = (function (meta60999){
this.meta60999 = meta60999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page60998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61000,meta60999__$1){
var self__ = this;
var _61000__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page60998(meta60999__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page60998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61000){
var self__ = this;
var _61000__$1 = this;
return self__.meta60999;
}));

(athens.devcards.node_page.t_athens$devcards$node_page60998.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page60998.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
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

(athens.devcards.node_page.t_athens$devcards$node_page60998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60999","meta60999",-1484875288,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page60998.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page60998.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page60998");

(athens.devcards.node_page.t_athens$devcards$node_page60998.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page60998");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page60998.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page60998 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page60998(meta60999){
return (new athens.devcards.node_page.t_athens$devcards$node_page60998(meta60999));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page60998(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
