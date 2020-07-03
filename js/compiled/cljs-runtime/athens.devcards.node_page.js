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
var G__65775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65775) : re_frame.core.dispatch.call(null,G__65775));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65776 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65777 = athens.db.dsdb;
var G__65778 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65776,G__65777,G__65778) : posh.reagent.q.call(null,G__65776,G__65777,G__65778));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65779,editing_uid,ref_groups){
var map__65780 = p__65779;
var map__65780__$1 = (((((!((map__65780 == null))))?(((((map__65780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65780):map__65780);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65780__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65780__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65780__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65782 = e.target.value;
var G__65783 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65782,G__65783) : athens.devcards.node_page.db_handler.call(null,G__65782,G__65783));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65784(s__65785){
return (new cljs.core.LazySeq(null,(function (){
var s__65785__$1 = s__65785;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65785__$1);
if(temp__5735__auto__){
var s__65785__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65785__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65785__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65787 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65786 = (0);
while(true){
if((i__65786 < size__4581__auto__)){
var map__65788 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65786);
var map__65788__$1 = (((((!((map__65788 == null))))?(((((map__65788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65788):map__65788);
var child = map__65788__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65788__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65787,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__65933 = (i__65786 + (1));
i__65786 = G__65933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65787),athens$devcards$node_page$node_page_el_$_iter__65784(cljs.core.chunk_rest(s__65785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65787),null);
}
} else {
var map__65790 = cljs.core.first(s__65785__$2);
var map__65790__$1 = (((((!((map__65790 == null))))?(((((map__65790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65790):map__65790);
var child = map__65790__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65790__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65784(cljs.core.rest(s__65785__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65792(s__65793){
return (new cljs.core.LazySeq(null,(function (){
var s__65793__$1 = s__65793;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65793__$1);
if(temp__5735__auto__){
var s__65793__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65793__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65793__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65795 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65794 = (0);
while(true){
if((i__65794 < size__4581__auto__)){
var vec__65796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65794);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65796,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65796,(1),null);
cljs.core.chunk_append(b__65795,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__65794,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799(s__65800){
return (new cljs.core.LazySeq(null,((function (i__65794,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65800__$1 = s__65800;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65800__$1);
if(temp__5735__auto____$1){
var s__65800__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65800__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65800__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65802 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65801 = (0);
while(true){
if((i__65801 < size__4581__auto____$1)){
var vec__65803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65801);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65803,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65803,(1),null);
cljs.core.chunk_append(b__65802,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__65801,i__65794,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806(s__65807){
return (new cljs.core.LazySeq(null,((function (i__65801,i__65794,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65807__$1 = s__65807;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65807__$1);
if(temp__5735__auto____$2){
var s__65807__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65807__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65807__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65809 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65808 = (0);
while(true){
if((i__65808 < size__4581__auto____$2)){
var map__65810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65808);
var map__65810__$1 = (((((!((map__65810 == null))))?(((((map__65810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65810):map__65810);
var block = map__65810__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65810__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65810__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65809,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65808,i__65801,i__65794,map__65810,map__65810__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65809,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65808,i__65801,i__65794,map__65810,map__65810__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65809,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65808,i__65801,i__65794,map__65810,map__65810__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65809,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806_$_iter__65812(s__65813){
return (new cljs.core.LazySeq(null,((function (i__65808,i__65801,i__65794,map__65810,map__65810__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65809,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65813__$1 = s__65813;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65813__$1);
if(temp__5735__auto____$3){
var s__65813__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65813__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65813__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65815 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65814 = (0);
while(true){
if((i__65814 < size__4581__auto____$3)){
var map__65816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65814);
var map__65816__$1 = (((((!((map__65816 == null))))?(((((map__65816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65816):map__65816);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65816__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65816__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65816__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65815,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65935 = (i__65814 + (1));
i__65814 = G__65935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65815),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806_$_iter__65812(cljs.core.chunk_rest(s__65813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65815),null);
}
} else {
var map__65818 = cljs.core.first(s__65813__$2);
var map__65818__$1 = (((((!((map__65818 == null))))?(((((map__65818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65818):map__65818);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65818__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65818__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65818__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806_$_iter__65812(cljs.core.rest(s__65813__$2)));
}
} else {
return null;
}
break;
}
});})(i__65808,i__65801,i__65794,map__65810,map__65810__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65809,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65808,i__65801,i__65794,map__65810,map__65810__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65809,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__65936 = (i__65808 + (1));
i__65808 = G__65936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65809),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806(cljs.core.chunk_rest(s__65807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65809),null);
}
} else {
var map__65820 = cljs.core.first(s__65807__$2);
var map__65820__$1 = (((((!((map__65820 == null))))?(((((map__65820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65820):map__65820);
var block = map__65820__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65820__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65820__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65801,i__65794,map__65820,map__65820__$1,block,uid__$1,parents,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65801,i__65794,map__65820,map__65820__$1,block,uid__$1,parents,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65801,i__65794,map__65820,map__65820__$1,block,uid__$1,parents,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806_$_iter__65822(s__65823){
return (new cljs.core.LazySeq(null,((function (i__65801,i__65794,map__65820,map__65820__$1,block,uid__$1,parents,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65823__$1 = s__65823;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65823__$1);
if(temp__5735__auto____$3){
var s__65823__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65823__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65823__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65825 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65824 = (0);
while(true){
if((i__65824 < size__4581__auto____$2)){
var map__65826 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65824);
var map__65826__$1 = (((((!((map__65826 == null))))?(((((map__65826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65826):map__65826);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65826__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65826__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65826__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65825,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65937 = (i__65824 + (1));
i__65824 = G__65937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65825),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806_$_iter__65822(cljs.core.chunk_rest(s__65823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65825),null);
}
} else {
var map__65828 = cljs.core.first(s__65823__$2);
var map__65828__$1 = (((((!((map__65828 == null))))?(((((map__65828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65828):map__65828);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65828__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65828__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65828__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806_$_iter__65822(cljs.core.rest(s__65823__$2)));
}
} else {
return null;
}
break;
}
});})(i__65801,i__65794,map__65820,map__65820__$1,block,uid__$1,parents,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65801,i__65794,map__65820,map__65820__$1,block,uid__$1,parents,s__65807__$2,temp__5735__auto____$2,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65806(cljs.core.rest(s__65807__$2)));
}
} else {
return null;
}
break;
}
});})(i__65801,i__65794,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65801,i__65794,vec__65803,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65802,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65938 = (i__65801 + (1));
i__65801 = G__65938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65802),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799(cljs.core.chunk_rest(s__65800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65802),null);
}
} else {
var vec__65830 = cljs.core.first(s__65800__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65830,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65830,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__65794,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833(s__65834){
return (new cljs.core.LazySeq(null,((function (i__65794,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65834__$1 = s__65834;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65834__$1);
if(temp__5735__auto____$2){
var s__65834__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65834__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65834__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65836 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65835 = (0);
while(true){
if((i__65835 < size__4581__auto____$1)){
var map__65837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65835);
var map__65837__$1 = (((((!((map__65837 == null))))?(((((map__65837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65837):map__65837);
var block = map__65837__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65837__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65837__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65836,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65835,i__65794,map__65837,map__65837__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65836,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65835,i__65794,map__65837,map__65837__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65836,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65835,i__65794,map__65837,map__65837__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65836,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833_$_iter__65839(s__65840){
return (new cljs.core.LazySeq(null,((function (i__65835,i__65794,map__65837,map__65837__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65836,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65840__$1 = s__65840;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65840__$1);
if(temp__5735__auto____$3){
var s__65840__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65840__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65840__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65842 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65841 = (0);
while(true){
if((i__65841 < size__4581__auto____$2)){
var map__65843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65841);
var map__65843__$1 = (((((!((map__65843 == null))))?(((((map__65843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65843):map__65843);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65842,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65939 = (i__65841 + (1));
i__65841 = G__65939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65842),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833_$_iter__65839(cljs.core.chunk_rest(s__65840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65842),null);
}
} else {
var map__65845 = cljs.core.first(s__65840__$2);
var map__65845__$1 = (((((!((map__65845 == null))))?(((((map__65845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65845):map__65845);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65845__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65845__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65845__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833_$_iter__65839(cljs.core.rest(s__65840__$2)));
}
} else {
return null;
}
break;
}
});})(i__65835,i__65794,map__65837,map__65837__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65836,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65835,i__65794,map__65837,map__65837__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65836,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__65940 = (i__65835 + (1));
i__65835 = G__65940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65836),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833(cljs.core.chunk_rest(s__65834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65836),null);
}
} else {
var map__65847 = cljs.core.first(s__65834__$2);
var map__65847__$1 = (((((!((map__65847 == null))))?(((((map__65847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65847):map__65847);
var block = map__65847__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65847__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65847__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65794,map__65847,map__65847__$1,block,uid__$1,parents,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65794,map__65847,map__65847__$1,block,uid__$1,parents,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65794,map__65847,map__65847__$1,block,uid__$1,parents,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833_$_iter__65849(s__65850){
return (new cljs.core.LazySeq(null,((function (i__65794,map__65847,map__65847__$1,block,uid__$1,parents,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65850__$1 = s__65850;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65850__$1);
if(temp__5735__auto____$3){
var s__65850__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65850__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65850__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65852 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65851 = (0);
while(true){
if((i__65851 < size__4581__auto____$1)){
var map__65853 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65851);
var map__65853__$1 = (((((!((map__65853 == null))))?(((((map__65853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65853):map__65853);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65852,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65941 = (i__65851 + (1));
i__65851 = G__65941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65852),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833_$_iter__65849(cljs.core.chunk_rest(s__65850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65852),null);
}
} else {
var map__65855 = cljs.core.first(s__65850__$2);
var map__65855__$1 = (((((!((map__65855 == null))))?(((((map__65855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65855):map__65855);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65855__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65855__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65855__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833_$_iter__65849(cljs.core.rest(s__65850__$2)));
}
} else {
return null;
}
break;
}
});})(i__65794,map__65847,map__65847__$1,block,uid__$1,parents,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65794,map__65847,map__65847__$1,block,uid__$1,parents,s__65834__$2,temp__5735__auto____$2,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799_$_iter__65833(cljs.core.rest(s__65834__$2)));
}
} else {
return null;
}
break;
}
});})(i__65794,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65794,vec__65830,group_title,group,s__65800__$2,temp__5735__auto____$1,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65799(cljs.core.rest(s__65800__$2)));
}
} else {
return null;
}
break;
}
});})(i__65794,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65794,vec__65796,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65795,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__65942 = (i__65794 + (1));
i__65794 = G__65942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65795),athens$devcards$node_page$node_page_el_$_iter__65792(cljs.core.chunk_rest(s__65793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65795),null);
}
} else {
var vec__65857 = cljs.core.first(s__65793__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65857,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65857,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860(s__65861){
return (new cljs.core.LazySeq(null,(function (){
var s__65861__$1 = s__65861;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65861__$1);
if(temp__5735__auto____$1){
var s__65861__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65861__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65861__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65863 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65862 = (0);
while(true){
if((i__65862 < size__4581__auto__)){
var vec__65864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65862);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65864,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65864,(1),null);
cljs.core.chunk_append(b__65863,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__65862,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867(s__65868){
return (new cljs.core.LazySeq(null,((function (i__65862,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65868__$1 = s__65868;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65868__$1);
if(temp__5735__auto____$2){
var s__65868__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65868__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65868__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65870 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65869 = (0);
while(true){
if((i__65869 < size__4581__auto____$1)){
var map__65871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65869);
var map__65871__$1 = (((((!((map__65871 == null))))?(((((map__65871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65871):map__65871);
var block = map__65871__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65871__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65871__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65870,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65869,i__65862,map__65871,map__65871__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65870,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65869,i__65862,map__65871,map__65871__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65870,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65869,i__65862,map__65871,map__65871__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65870,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867_$_iter__65873(s__65874){
return (new cljs.core.LazySeq(null,((function (i__65869,i__65862,map__65871,map__65871__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65870,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65874__$1 = s__65874;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65874__$1);
if(temp__5735__auto____$3){
var s__65874__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65874__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65874__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65876 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65875 = (0);
while(true){
if((i__65875 < size__4581__auto____$2)){
var map__65877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65875);
var map__65877__$1 = (((((!((map__65877 == null))))?(((((map__65877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65877):map__65877);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65876,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65943 = (i__65875 + (1));
i__65875 = G__65943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65876),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867_$_iter__65873(cljs.core.chunk_rest(s__65874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65876),null);
}
} else {
var map__65879 = cljs.core.first(s__65874__$2);
var map__65879__$1 = (((((!((map__65879 == null))))?(((((map__65879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65879):map__65879);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867_$_iter__65873(cljs.core.rest(s__65874__$2)));
}
} else {
return null;
}
break;
}
});})(i__65869,i__65862,map__65871,map__65871__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65870,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65869,i__65862,map__65871,map__65871__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65870,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__65944 = (i__65869 + (1));
i__65869 = G__65944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65870),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867(cljs.core.chunk_rest(s__65868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65870),null);
}
} else {
var map__65881 = cljs.core.first(s__65868__$2);
var map__65881__$1 = (((((!((map__65881 == null))))?(((((map__65881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65881):map__65881);
var block = map__65881__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65881__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65881__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65862,map__65881,map__65881__$1,block,uid__$1,parents,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65862,map__65881,map__65881__$1,block,uid__$1,parents,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65862,map__65881,map__65881__$1,block,uid__$1,parents,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867_$_iter__65883(s__65884){
return (new cljs.core.LazySeq(null,((function (i__65862,map__65881,map__65881__$1,block,uid__$1,parents,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65884__$1 = s__65884;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65884__$1);
if(temp__5735__auto____$3){
var s__65884__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65884__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65884__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65886 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65885 = (0);
while(true){
if((i__65885 < size__4581__auto____$1)){
var map__65887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65885);
var map__65887__$1 = (((((!((map__65887 == null))))?(((((map__65887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65887):map__65887);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65886,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65945 = (i__65885 + (1));
i__65885 = G__65945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65886),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867_$_iter__65883(cljs.core.chunk_rest(s__65884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65886),null);
}
} else {
var map__65889 = cljs.core.first(s__65884__$2);
var map__65889__$1 = (((((!((map__65889 == null))))?(((((map__65889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65889):map__65889);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65889__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65889__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65889__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867_$_iter__65883(cljs.core.rest(s__65884__$2)));
}
} else {
return null;
}
break;
}
});})(i__65862,map__65881,map__65881__$1,block,uid__$1,parents,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65862,map__65881,map__65881__$1,block,uid__$1,parents,s__65868__$2,temp__5735__auto____$2,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65867(cljs.core.rest(s__65868__$2)));
}
} else {
return null;
}
break;
}
});})(i__65862,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65862,vec__65864,group_title,group,c__4580__auto__,size__4581__auto__,b__65863,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65946 = (i__65862 + (1));
i__65862 = G__65946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65863),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860(cljs.core.chunk_rest(s__65861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65863),null);
}
} else {
var vec__65891 = cljs.core.first(s__65861__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65891,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65891,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894(s__65895){
return (new cljs.core.LazySeq(null,(function (){
var s__65895__$1 = s__65895;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65895__$1);
if(temp__5735__auto____$2){
var s__65895__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65895__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65895__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65897 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65896 = (0);
while(true){
if((i__65896 < size__4581__auto__)){
var map__65898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65896);
var map__65898__$1 = (((((!((map__65898 == null))))?(((((map__65898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65898):map__65898);
var block = map__65898__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65898__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65898__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65897,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65896,map__65898,map__65898__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65897,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65896,map__65898,map__65898__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65897,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65896,map__65898,map__65898__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65897,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894_$_iter__65900(s__65901){
return (new cljs.core.LazySeq(null,((function (i__65896,map__65898,map__65898__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65897,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (){
var s__65901__$1 = s__65901;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65901__$1);
if(temp__5735__auto____$3){
var s__65901__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65901__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65901__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65903 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65902 = (0);
while(true){
if((i__65902 < size__4581__auto____$1)){
var map__65904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65902);
var map__65904__$1 = (((((!((map__65904 == null))))?(((((map__65904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65904):map__65904);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65903,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65947 = (i__65902 + (1));
i__65902 = G__65947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65903),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894_$_iter__65900(cljs.core.chunk_rest(s__65901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65903),null);
}
} else {
var map__65906 = cljs.core.first(s__65901__$2);
var map__65906__$1 = (((((!((map__65906 == null))))?(((((map__65906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65906):map__65906);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894_$_iter__65900(cljs.core.rest(s__65901__$2)));
}
} else {
return null;
}
break;
}
});})(i__65896,map__65898,map__65898__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65897,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,null,null));
});})(i__65896,map__65898,map__65898__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65897,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__65948 = (i__65896 + (1));
i__65896 = G__65948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65897),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894(cljs.core.chunk_rest(s__65895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65897),null);
}
} else {
var map__65908 = cljs.core.first(s__65895__$2);
var map__65908__$1 = (((((!((map__65908 == null))))?(((((map__65908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65908):map__65908);
var block = map__65908__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65908__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65908__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__65908,map__65908__$1,block,uid__$1,parents,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__65908,map__65908__$1,block,uid__$1,parents,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__65908,map__65908__$1,block,uid__$1,parents,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894_$_iter__65910(s__65911){
return (new cljs.core.LazySeq(null,(function (){
var s__65911__$1 = s__65911;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65911__$1);
if(temp__5735__auto____$3){
var s__65911__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65911__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65911__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65913 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65912 = (0);
while(true){
if((i__65912 < size__4581__auto__)){
var map__65914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65912);
var map__65914__$1 = (((((!((map__65914 == null))))?(((((map__65914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65914):map__65914);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65913,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65949 = (i__65912 + (1));
i__65912 = G__65949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65913),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894_$_iter__65910(cljs.core.chunk_rest(s__65911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65913),null);
}
} else {
var map__65916 = cljs.core.first(s__65911__$2);
var map__65916__$1 = (((((!((map__65916 == null))))?(((((map__65916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65916):map__65916);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65916__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65916__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65916__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894_$_iter__65910(cljs.core.rest(s__65911__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65908,map__65908__$1,block,uid__$1,parents,s__65895__$2,temp__5735__auto____$2,vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860_$_iter__65894(cljs.core.rest(s__65895__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65891,group_title,group,s__65861__$2,temp__5735__auto____$1,vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65792_$_iter__65860(cljs.core.rest(s__65861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65857,linked_or_unlinked,refs,s__65793__$2,temp__5735__auto__,map__65780,map__65780__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__65792(cljs.core.rest(s__65793__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__65918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65918) : re_frame.core.subscribe.call(null,G__65918));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
