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
var G__58042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58042) : re_frame.core.dispatch.call(null,G__58042));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58043 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58044 = athens.db.dsdb;
var G__58045 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58043,G__58044,G__58045) : posh.reagent.q.call(null,G__58043,G__58044,G__58045));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58046,editing_uid,ref_groups){
var map__58047 = p__58046;
var map__58047__$1 = (((((!((map__58047 == null))))?(((((map__58047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58047):map__58047);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58047__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58047__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58047__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58049 = e.target.value;
var G__58050 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58049,G__58050) : athens.devcards.node_page.db_handler.call(null,G__58049,G__58050));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58051(s__58052){
return (new cljs.core.LazySeq(null,(function (){
var s__58052__$1 = s__58052;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58052__$1);
if(temp__5735__auto__){
var s__58052__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58052__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58052__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58054 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58053 = (0);
while(true){
if((i__58053 < size__4581__auto__)){
var map__58055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58053);
var map__58055__$1 = (((((!((map__58055 == null))))?(((((map__58055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58055):map__58055);
var child = map__58055__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58054,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58205 = (i__58053 + (1));
i__58053 = G__58205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58054),athens$devcards$node_page$node_page_el_$_iter__58051(cljs.core.chunk_rest(s__58052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58054),null);
}
} else {
var map__58057 = cljs.core.first(s__58052__$2);
var map__58057__$1 = (((((!((map__58057 == null))))?(((((map__58057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58057):map__58057);
var child = map__58057__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58051(cljs.core.rest(s__58052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58059(s__58060){
return (new cljs.core.LazySeq(null,(function (){
var s__58060__$1 = s__58060;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58060__$1);
if(temp__5735__auto__){
var s__58060__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58060__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58060__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58062 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58061 = (0);
while(true){
if((i__58061 < size__4581__auto__)){
var vec__58063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58061);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58063,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58063,(1),null);
cljs.core.chunk_append(b__58062,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58061,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066(s__58067){
return (new cljs.core.LazySeq(null,((function (i__58061,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58067__$1 = s__58067;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58067__$1);
if(temp__5735__auto____$1){
var s__58067__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58067__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58067__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58069 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58068 = (0);
while(true){
if((i__58068 < size__4581__auto____$1)){
var vec__58070 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58068);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58070,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58070,(1),null);
cljs.core.chunk_append(b__58069,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__58068,i__58061,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073(s__58074){
return (new cljs.core.LazySeq(null,((function (i__58068,i__58061,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58074__$1 = s__58074;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58074__$1);
if(temp__5735__auto____$2){
var s__58074__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58074__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58074__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58076 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58075 = (0);
while(true){
if((i__58075 < size__4581__auto____$2)){
var map__58077 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58075);
var map__58077__$1 = (((((!((map__58077 == null))))?(((((map__58077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58077):map__58077);
var block = map__58077__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58077__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58077__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58076,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58075,i__58068,i__58061,map__58077,map__58077__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58076,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58075,i__58068,i__58061,map__58077,map__58077__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58076,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58075,i__58068,i__58061,map__58077,map__58077__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58076,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073_$_iter__58079(s__58080){
return (new cljs.core.LazySeq(null,((function (i__58075,i__58068,i__58061,map__58077,map__58077__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58076,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58080__$1 = s__58080;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58080__$1);
if(temp__5735__auto____$3){
var s__58080__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58080__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58080__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58082 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58081 = (0);
while(true){
if((i__58081 < size__4581__auto____$3)){
var map__58083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58081);
var map__58083__$1 = (((((!((map__58083 == null))))?(((((map__58083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58083):map__58083);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58083__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58083__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58083__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58082,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58208 = (i__58081 + (1));
i__58081 = G__58208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58082),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073_$_iter__58079(cljs.core.chunk_rest(s__58080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58082),null);
}
} else {
var map__58085 = cljs.core.first(s__58080__$2);
var map__58085__$1 = (((((!((map__58085 == null))))?(((((map__58085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58085):map__58085);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073_$_iter__58079(cljs.core.rest(s__58080__$2)));
}
} else {
return null;
}
break;
}
});})(i__58075,i__58068,i__58061,map__58077,map__58077__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58076,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58075,i__58068,i__58061,map__58077,map__58077__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58076,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__58209 = (i__58075 + (1));
i__58075 = G__58209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58076),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073(cljs.core.chunk_rest(s__58074__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58076),null);
}
} else {
var map__58087 = cljs.core.first(s__58074__$2);
var map__58087__$1 = (((((!((map__58087 == null))))?(((((map__58087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58087):map__58087);
var block = map__58087__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58068,i__58061,map__58087,map__58087__$1,block,uid__$1,parents,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58068,i__58061,map__58087,map__58087__$1,block,uid__$1,parents,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58068,i__58061,map__58087,map__58087__$1,block,uid__$1,parents,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073_$_iter__58089(s__58090){
return (new cljs.core.LazySeq(null,((function (i__58068,i__58061,map__58087,map__58087__$1,block,uid__$1,parents,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58090__$1 = s__58090;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58090__$1);
if(temp__5735__auto____$3){
var s__58090__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58090__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58090__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58092 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58091 = (0);
while(true){
if((i__58091 < size__4581__auto____$2)){
var map__58093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58091);
var map__58093__$1 = (((((!((map__58093 == null))))?(((((map__58093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58093):map__58093);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58092,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58210 = (i__58091 + (1));
i__58091 = G__58210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58092),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073_$_iter__58089(cljs.core.chunk_rest(s__58090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58092),null);
}
} else {
var map__58095 = cljs.core.first(s__58090__$2);
var map__58095__$1 = (((((!((map__58095 == null))))?(((((map__58095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58095):map__58095);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073_$_iter__58089(cljs.core.rest(s__58090__$2)));
}
} else {
return null;
}
break;
}
});})(i__58068,i__58061,map__58087,map__58087__$1,block,uid__$1,parents,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58068,i__58061,map__58087,map__58087__$1,block,uid__$1,parents,s__58074__$2,temp__5735__auto____$2,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58073(cljs.core.rest(s__58074__$2)));
}
} else {
return null;
}
break;
}
});})(i__58068,i__58061,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58068,i__58061,vec__58070,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58069,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58211 = (i__58068 + (1));
i__58068 = G__58211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58069),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066(cljs.core.chunk_rest(s__58067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58069),null);
}
} else {
var vec__58097 = cljs.core.first(s__58067__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58097,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58097,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__58061,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100(s__58101){
return (new cljs.core.LazySeq(null,((function (i__58061,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58101__$1 = s__58101;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58101__$1);
if(temp__5735__auto____$2){
var s__58101__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58101__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58101__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58103 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58102 = (0);
while(true){
if((i__58102 < size__4581__auto____$1)){
var map__58104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58102);
var map__58104__$1 = (((((!((map__58104 == null))))?(((((map__58104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58104):map__58104);
var block = map__58104__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58104__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58104__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58103,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58102,i__58061,map__58104,map__58104__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58103,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58102,i__58061,map__58104,map__58104__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58103,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58102,i__58061,map__58104,map__58104__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58103,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100_$_iter__58106(s__58107){
return (new cljs.core.LazySeq(null,((function (i__58102,i__58061,map__58104,map__58104__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58103,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58107__$1 = s__58107;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58107__$1);
if(temp__5735__auto____$3){
var s__58107__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58107__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58107__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58109 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58108 = (0);
while(true){
if((i__58108 < size__4581__auto____$2)){
var map__58110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58108);
var map__58110__$1 = (((((!((map__58110 == null))))?(((((map__58110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58110):map__58110);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58110__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58110__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58110__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58109,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58212 = (i__58108 + (1));
i__58108 = G__58212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58109),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100_$_iter__58106(cljs.core.chunk_rest(s__58107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58109),null);
}
} else {
var map__58112 = cljs.core.first(s__58107__$2);
var map__58112__$1 = (((((!((map__58112 == null))))?(((((map__58112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58112):map__58112);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58112__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58112__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58112__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100_$_iter__58106(cljs.core.rest(s__58107__$2)));
}
} else {
return null;
}
break;
}
});})(i__58102,i__58061,map__58104,map__58104__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58103,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58102,i__58061,map__58104,map__58104__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58103,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__58213 = (i__58102 + (1));
i__58102 = G__58213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58103),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100(cljs.core.chunk_rest(s__58101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58103),null);
}
} else {
var map__58114 = cljs.core.first(s__58101__$2);
var map__58114__$1 = (((((!((map__58114 == null))))?(((((map__58114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58114):map__58114);
var block = map__58114__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58061,map__58114,map__58114__$1,block,uid__$1,parents,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58061,map__58114,map__58114__$1,block,uid__$1,parents,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58061,map__58114,map__58114__$1,block,uid__$1,parents,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100_$_iter__58116(s__58117){
return (new cljs.core.LazySeq(null,((function (i__58061,map__58114,map__58114__$1,block,uid__$1,parents,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58117__$1 = s__58117;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58117__$1);
if(temp__5735__auto____$3){
var s__58117__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58117__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58117__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58119 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58118 = (0);
while(true){
if((i__58118 < size__4581__auto____$1)){
var map__58120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58118);
var map__58120__$1 = (((((!((map__58120 == null))))?(((((map__58120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58120):map__58120);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58119,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58214 = (i__58118 + (1));
i__58118 = G__58214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58119),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100_$_iter__58116(cljs.core.chunk_rest(s__58117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58119),null);
}
} else {
var map__58122 = cljs.core.first(s__58117__$2);
var map__58122__$1 = (((((!((map__58122 == null))))?(((((map__58122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58122):map__58122);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100_$_iter__58116(cljs.core.rest(s__58117__$2)));
}
} else {
return null;
}
break;
}
});})(i__58061,map__58114,map__58114__$1,block,uid__$1,parents,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58061,map__58114,map__58114__$1,block,uid__$1,parents,s__58101__$2,temp__5735__auto____$2,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066_$_iter__58100(cljs.core.rest(s__58101__$2)));
}
} else {
return null;
}
break;
}
});})(i__58061,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58061,vec__58097,group_title,group,s__58067__$2,temp__5735__auto____$1,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58066(cljs.core.rest(s__58067__$2)));
}
} else {
return null;
}
break;
}
});})(i__58061,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58061,vec__58063,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58062,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__58215 = (i__58061 + (1));
i__58061 = G__58215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58062),athens$devcards$node_page$node_page_el_$_iter__58059(cljs.core.chunk_rest(s__58060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58062),null);
}
} else {
var vec__58124 = cljs.core.first(s__58060__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58124,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58124,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127(s__58128){
return (new cljs.core.LazySeq(null,(function (){
var s__58128__$1 = s__58128;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58128__$1);
if(temp__5735__auto____$1){
var s__58128__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58128__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58128__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58130 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58129 = (0);
while(true){
if((i__58129 < size__4581__auto__)){
var vec__58131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58129);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58131,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58131,(1),null);
cljs.core.chunk_append(b__58130,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__58129,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134(s__58135){
return (new cljs.core.LazySeq(null,((function (i__58129,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58135__$1 = s__58135;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58135__$1);
if(temp__5735__auto____$2){
var s__58135__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58135__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58135__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58137 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58136 = (0);
while(true){
if((i__58136 < size__4581__auto____$1)){
var map__58138 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58136);
var map__58138__$1 = (((((!((map__58138 == null))))?(((((map__58138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58138):map__58138);
var block = map__58138__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58138__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58138__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58137,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58136,i__58129,map__58138,map__58138__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58137,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58136,i__58129,map__58138,map__58138__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58137,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58136,i__58129,map__58138,map__58138__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58137,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134_$_iter__58140(s__58141){
return (new cljs.core.LazySeq(null,((function (i__58136,i__58129,map__58138,map__58138__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58137,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58141__$1 = s__58141;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58141__$1);
if(temp__5735__auto____$3){
var s__58141__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58141__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58141__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58143 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58142 = (0);
while(true){
if((i__58142 < size__4581__auto____$2)){
var map__58144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58142);
var map__58144__$1 = (((((!((map__58144 == null))))?(((((map__58144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58144):map__58144);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58143,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58216 = (i__58142 + (1));
i__58142 = G__58216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58143),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134_$_iter__58140(cljs.core.chunk_rest(s__58141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58143),null);
}
} else {
var map__58146 = cljs.core.first(s__58141__$2);
var map__58146__$1 = (((((!((map__58146 == null))))?(((((map__58146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58146):map__58146);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58146__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58146__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58146__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134_$_iter__58140(cljs.core.rest(s__58141__$2)));
}
} else {
return null;
}
break;
}
});})(i__58136,i__58129,map__58138,map__58138__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58137,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58136,i__58129,map__58138,map__58138__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58137,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__58217 = (i__58136 + (1));
i__58136 = G__58217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58137),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134(cljs.core.chunk_rest(s__58135__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58137),null);
}
} else {
var map__58148 = cljs.core.first(s__58135__$2);
var map__58148__$1 = (((((!((map__58148 == null))))?(((((map__58148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58148):map__58148);
var block = map__58148__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58129,map__58148,map__58148__$1,block,uid__$1,parents,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58129,map__58148,map__58148__$1,block,uid__$1,parents,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58129,map__58148,map__58148__$1,block,uid__$1,parents,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134_$_iter__58150(s__58151){
return (new cljs.core.LazySeq(null,((function (i__58129,map__58148,map__58148__$1,block,uid__$1,parents,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58151__$1 = s__58151;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58151__$1);
if(temp__5735__auto____$3){
var s__58151__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58151__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58151__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58153 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58152 = (0);
while(true){
if((i__58152 < size__4581__auto____$1)){
var map__58154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58152);
var map__58154__$1 = (((((!((map__58154 == null))))?(((((map__58154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58154):map__58154);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58153,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58218 = (i__58152 + (1));
i__58152 = G__58218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58153),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134_$_iter__58150(cljs.core.chunk_rest(s__58151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58153),null);
}
} else {
var map__58156 = cljs.core.first(s__58151__$2);
var map__58156__$1 = (((((!((map__58156 == null))))?(((((map__58156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58156):map__58156);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134_$_iter__58150(cljs.core.rest(s__58151__$2)));
}
} else {
return null;
}
break;
}
});})(i__58129,map__58148,map__58148__$1,block,uid__$1,parents,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58129,map__58148,map__58148__$1,block,uid__$1,parents,s__58135__$2,temp__5735__auto____$2,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58134(cljs.core.rest(s__58135__$2)));
}
} else {
return null;
}
break;
}
});})(i__58129,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58129,vec__58131,group_title,group,c__4580__auto__,size__4581__auto__,b__58130,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58219 = (i__58129 + (1));
i__58129 = G__58219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58130),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127(cljs.core.chunk_rest(s__58128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58130),null);
}
} else {
var vec__58158 = cljs.core.first(s__58128__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58158,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58158,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161(s__58162){
return (new cljs.core.LazySeq(null,(function (){
var s__58162__$1 = s__58162;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58162__$1);
if(temp__5735__auto____$2){
var s__58162__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58162__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58162__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58164 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58163 = (0);
while(true){
if((i__58163 < size__4581__auto__)){
var map__58165 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58163);
var map__58165__$1 = (((((!((map__58165 == null))))?(((((map__58165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58165):map__58165);
var block = map__58165__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58165__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58165__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58164,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58163,map__58165,map__58165__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58164,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58163,map__58165,map__58165__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58164,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58163,map__58165,map__58165__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58164,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161_$_iter__58167(s__58168){
return (new cljs.core.LazySeq(null,((function (i__58163,map__58165,map__58165__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58164,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (){
var s__58168__$1 = s__58168;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58168__$1);
if(temp__5735__auto____$3){
var s__58168__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58168__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58168__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58170 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58169 = (0);
while(true){
if((i__58169 < size__4581__auto____$1)){
var map__58171 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58169);
var map__58171__$1 = (((((!((map__58171 == null))))?(((((map__58171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58171):map__58171);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58171__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58171__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58171__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58170,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58220 = (i__58169 + (1));
i__58169 = G__58220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58170),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161_$_iter__58167(cljs.core.chunk_rest(s__58168__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58170),null);
}
} else {
var map__58173 = cljs.core.first(s__58168__$2);
var map__58173__$1 = (((((!((map__58173 == null))))?(((((map__58173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58173):map__58173);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161_$_iter__58167(cljs.core.rest(s__58168__$2)));
}
} else {
return null;
}
break;
}
});})(i__58163,map__58165,map__58165__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58164,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,null,null));
});})(i__58163,map__58165,map__58165__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58164,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__58221 = (i__58163 + (1));
i__58163 = G__58221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58164),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161(cljs.core.chunk_rest(s__58162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58164),null);
}
} else {
var map__58175 = cljs.core.first(s__58162__$2);
var map__58175__$1 = (((((!((map__58175 == null))))?(((((map__58175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58175):map__58175);
var block = map__58175__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58175,map__58175__$1,block,uid__$1,parents,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__58175,map__58175__$1,block,uid__$1,parents,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__58175,map__58175__$1,block,uid__$1,parents,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161_$_iter__58177(s__58178){
return (new cljs.core.LazySeq(null,(function (){
var s__58178__$1 = s__58178;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58178__$1);
if(temp__5735__auto____$3){
var s__58178__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58178__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58178__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58180 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58179 = (0);
while(true){
if((i__58179 < size__4581__auto__)){
var map__58181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58179);
var map__58181__$1 = (((((!((map__58181 == null))))?(((((map__58181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58181):map__58181);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58180,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58222 = (i__58179 + (1));
i__58179 = G__58222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58180),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161_$_iter__58177(cljs.core.chunk_rest(s__58178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58180),null);
}
} else {
var map__58183 = cljs.core.first(s__58178__$2);
var map__58183__$1 = (((((!((map__58183 == null))))?(((((map__58183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58183):map__58183);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161_$_iter__58177(cljs.core.rest(s__58178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58175,map__58175__$1,block,uid__$1,parents,s__58162__$2,temp__5735__auto____$2,vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127_$_iter__58161(cljs.core.rest(s__58162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58158,group_title,group,s__58128__$2,temp__5735__auto____$1,vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58059_$_iter__58127(cljs.core.rest(s__58128__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58124,linked_or_unlinked,refs,s__58060__$2,temp__5735__auto__,map__58047,map__58047__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__58059(cljs.core.rest(s__58060__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__58185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58185) : re_frame.core.subscribe.call(null,G__58185));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page58186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page58186 = (function (meta58187){
this.meta58187 = meta58187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page58186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58188,meta58187__$1){
var self__ = this;
var _58188__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page58186(meta58187__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58188){
var self__ = this;
var _58188__$1 = this;
return self__.meta58187;
}));

(athens.devcards.node_page.t_athens$devcards$node_page58186.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page58186.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
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

(athens.devcards.node_page.t_athens$devcards$node_page58186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58187","meta58187",-919207039,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page58186.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page58186.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page58186");

(athens.devcards.node_page.t_athens$devcards$node_page58186.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page58186");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page58186.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page58186 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page58186(meta58187){
return (new athens.devcards.node_page.t_athens$devcards$node_page58186(meta58187));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page58186(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
