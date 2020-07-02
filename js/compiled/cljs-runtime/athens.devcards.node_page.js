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
var G__68309 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__68309) : re_frame.core.dispatch.call(null,G__68309));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__68310 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__68311 = athens.db.dsdb;
var G__68312 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__68310,G__68311,G__68312) : posh.reagent.q.call(null,G__68310,G__68311,G__68312));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__68313,editing_uid,ref_groups){
var map__68314 = p__68313;
var map__68314__$1 = (((((!((map__68314 == null))))?(((((map__68314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68314):map__68314);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__68316 = e.target.value;
var G__68317 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__68316,G__68317) : athens.devcards.node_page.db_handler.call(null,G__68316,G__68317));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68318(s__68319){
return (new cljs.core.LazySeq(null,(function (){
var s__68319__$1 = s__68319;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68319__$1);
if(temp__5735__auto__){
var s__68319__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68319__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68319__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68321 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68320 = (0);
while(true){
if((i__68320 < size__4581__auto__)){
var map__68322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68320);
var map__68322__$1 = (((((!((map__68322 == null))))?(((((map__68322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68322):map__68322);
var child = map__68322__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68321,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__68457 = (i__68320 + (1));
i__68320 = G__68457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68321),athens$devcards$node_page$node_page_el_$_iter__68318(cljs.core.chunk_rest(s__68319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68321),null);
}
} else {
var map__68324 = cljs.core.first(s__68319__$2);
var map__68324__$1 = (((((!((map__68324 == null))))?(((((map__68324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68324):map__68324);
var child = map__68324__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68324__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__68318(cljs.core.rest(s__68319__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68326(s__68327){
return (new cljs.core.LazySeq(null,(function (){
var s__68327__$1 = s__68327;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68327__$1);
if(temp__5735__auto__){
var s__68327__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68327__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68327__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68329 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68328 = (0);
while(true){
if((i__68328 < size__4581__auto__)){
var vec__68330 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68328);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68330,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68330,(1),null);
cljs.core.chunk_append(b__68329,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__68328,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333(s__68334){
return (new cljs.core.LazySeq(null,((function (i__68328,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68334__$1 = s__68334;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68334__$1);
if(temp__5735__auto____$1){
var s__68334__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68334__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68334__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68336 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68335 = (0);
while(true){
if((i__68335 < size__4581__auto____$1)){
var vec__68337 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68335);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68337,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68337,(1),null);
cljs.core.chunk_append(b__68336,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68335,i__68328,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340(s__68341){
return (new cljs.core.LazySeq(null,((function (i__68335,i__68328,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68341__$1 = s__68341;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68341__$1);
if(temp__5735__auto____$2){
var s__68341__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68341__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68341__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68343 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68342 = (0);
while(true){
if((i__68342 < size__4581__auto____$2)){
var map__68344 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68342);
var map__68344__$1 = (((((!((map__68344 == null))))?(((((map__68344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68344):map__68344);
var block = map__68344__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68344__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68344__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68343,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68342,i__68335,i__68328,map__68344,map__68344__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68343,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68342,i__68335,i__68328,map__68344,map__68344__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68343,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68342,i__68335,i__68328,map__68344,map__68344__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68343,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340_$_iter__68346(s__68347){
return (new cljs.core.LazySeq(null,((function (i__68342,i__68335,i__68328,map__68344,map__68344__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68343,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68347__$1 = s__68347;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68347__$1);
if(temp__5735__auto____$3){
var s__68347__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68347__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__68347__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__68349 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__68348 = (0);
while(true){
if((i__68348 < size__4581__auto____$3)){
var map__68350 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__68348);
var map__68350__$1 = (((((!((map__68350 == null))))?(((((map__68350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68350):map__68350);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68350__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68350__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68350__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68349,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68475 = (i__68348 + (1));
i__68348 = G__68475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68349),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340_$_iter__68346(cljs.core.chunk_rest(s__68347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68349),null);
}
} else {
var map__68352 = cljs.core.first(s__68347__$2);
var map__68352__$1 = (((((!((map__68352 == null))))?(((((map__68352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68352):map__68352);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68352__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68352__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68352__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340_$_iter__68346(cljs.core.rest(s__68347__$2)));
}
} else {
return null;
}
break;
}
});})(i__68342,i__68335,i__68328,map__68344,map__68344__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68343,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68342,i__68335,i__68328,map__68344,map__68344__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68343,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68476 = (i__68342 + (1));
i__68342 = G__68476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68343),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340(cljs.core.chunk_rest(s__68341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68343),null);
}
} else {
var map__68354 = cljs.core.first(s__68341__$2);
var map__68354__$1 = (((((!((map__68354 == null))))?(((((map__68354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68354):map__68354);
var block = map__68354__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68335,i__68328,map__68354,map__68354__$1,block,uid__$1,parents,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68335,i__68328,map__68354,map__68354__$1,block,uid__$1,parents,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68335,i__68328,map__68354,map__68354__$1,block,uid__$1,parents,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340_$_iter__68356(s__68357){
return (new cljs.core.LazySeq(null,((function (i__68335,i__68328,map__68354,map__68354__$1,block,uid__$1,parents,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68357__$1 = s__68357;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68357__$1);
if(temp__5735__auto____$3){
var s__68357__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68357__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68357__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68359 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68358 = (0);
while(true){
if((i__68358 < size__4581__auto____$2)){
var map__68360 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68358);
var map__68360__$1 = (((((!((map__68360 == null))))?(((((map__68360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68360):map__68360);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68360__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68360__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68360__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68477 = (i__68358 + (1));
i__68358 = G__68477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68359),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340_$_iter__68356(cljs.core.chunk_rest(s__68357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68359),null);
}
} else {
var map__68362 = cljs.core.first(s__68357__$2);
var map__68362__$1 = (((((!((map__68362 == null))))?(((((map__68362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68362):map__68362);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68362__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68362__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68362__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340_$_iter__68356(cljs.core.rest(s__68357__$2)));
}
} else {
return null;
}
break;
}
});})(i__68335,i__68328,map__68354,map__68354__$1,block,uid__$1,parents,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68335,i__68328,map__68354,map__68354__$1,block,uid__$1,parents,s__68341__$2,temp__5735__auto____$2,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68340(cljs.core.rest(s__68341__$2)));
}
} else {
return null;
}
break;
}
});})(i__68335,i__68328,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68335,i__68328,vec__68337,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68336,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__68478 = (i__68335 + (1));
i__68335 = G__68478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68336),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333(cljs.core.chunk_rest(s__68334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68336),null);
}
} else {
var vec__68364 = cljs.core.first(s__68334__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68364,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68364,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68328,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367(s__68368){
return (new cljs.core.LazySeq(null,((function (i__68328,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68368__$1 = s__68368;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68368__$1);
if(temp__5735__auto____$2){
var s__68368__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68368__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68368__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68370 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68369 = (0);
while(true){
if((i__68369 < size__4581__auto____$1)){
var map__68371 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68369);
var map__68371__$1 = (((((!((map__68371 == null))))?(((((map__68371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68371):map__68371);
var block = map__68371__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68371__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68371__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68370,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68369,i__68328,map__68371,map__68371__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68370,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68369,i__68328,map__68371,map__68371__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68370,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68369,i__68328,map__68371,map__68371__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68370,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367_$_iter__68373(s__68374){
return (new cljs.core.LazySeq(null,((function (i__68369,i__68328,map__68371,map__68371__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68370,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68374__$1 = s__68374;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68374__$1);
if(temp__5735__auto____$3){
var s__68374__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68374__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68374__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68376 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68375 = (0);
while(true){
if((i__68375 < size__4581__auto____$2)){
var map__68377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68375);
var map__68377__$1 = (((((!((map__68377 == null))))?(((((map__68377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68377):map__68377);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68377__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68377__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68377__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68376,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68480 = (i__68375 + (1));
i__68375 = G__68480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68376),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367_$_iter__68373(cljs.core.chunk_rest(s__68374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68376),null);
}
} else {
var map__68379 = cljs.core.first(s__68374__$2);
var map__68379__$1 = (((((!((map__68379 == null))))?(((((map__68379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68379):map__68379);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68379__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68379__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68379__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367_$_iter__68373(cljs.core.rest(s__68374__$2)));
}
} else {
return null;
}
break;
}
});})(i__68369,i__68328,map__68371,map__68371__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68370,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68369,i__68328,map__68371,map__68371__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68370,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68481 = (i__68369 + (1));
i__68369 = G__68481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68370),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367(cljs.core.chunk_rest(s__68368__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68370),null);
}
} else {
var map__68381 = cljs.core.first(s__68368__$2);
var map__68381__$1 = (((((!((map__68381 == null))))?(((((map__68381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68381):map__68381);
var block = map__68381__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68381__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68381__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68328,map__68381,map__68381__$1,block,uid__$1,parents,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68328,map__68381,map__68381__$1,block,uid__$1,parents,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68328,map__68381,map__68381__$1,block,uid__$1,parents,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367_$_iter__68383(s__68384){
return (new cljs.core.LazySeq(null,((function (i__68328,map__68381,map__68381__$1,block,uid__$1,parents,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68384__$1 = s__68384;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68384__$1);
if(temp__5735__auto____$3){
var s__68384__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68384__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68384__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68386 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68385 = (0);
while(true){
if((i__68385 < size__4581__auto____$1)){
var map__68387 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68385);
var map__68387__$1 = (((((!((map__68387 == null))))?(((((map__68387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68387):map__68387);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68387__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68387__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68387__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68386,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68482 = (i__68385 + (1));
i__68385 = G__68482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68386),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367_$_iter__68383(cljs.core.chunk_rest(s__68384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68386),null);
}
} else {
var map__68389 = cljs.core.first(s__68384__$2);
var map__68389__$1 = (((((!((map__68389 == null))))?(((((map__68389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68389):map__68389);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367_$_iter__68383(cljs.core.rest(s__68384__$2)));
}
} else {
return null;
}
break;
}
});})(i__68328,map__68381,map__68381__$1,block,uid__$1,parents,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68328,map__68381,map__68381__$1,block,uid__$1,parents,s__68368__$2,temp__5735__auto____$2,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333_$_iter__68367(cljs.core.rest(s__68368__$2)));
}
} else {
return null;
}
break;
}
});})(i__68328,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68328,vec__68364,group_title,group,s__68334__$2,temp__5735__auto____$1,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68333(cljs.core.rest(s__68334__$2)));
}
} else {
return null;
}
break;
}
});})(i__68328,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68328,vec__68330,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68329,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__68483 = (i__68328 + (1));
i__68328 = G__68483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68329),athens$devcards$node_page$node_page_el_$_iter__68326(cljs.core.chunk_rest(s__68327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68329),null);
}
} else {
var vec__68391 = cljs.core.first(s__68327__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68391,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68391,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394(s__68395){
return (new cljs.core.LazySeq(null,(function (){
var s__68395__$1 = s__68395;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68395__$1);
if(temp__5735__auto____$1){
var s__68395__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68395__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68395__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68397 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68396 = (0);
while(true){
if((i__68396 < size__4581__auto__)){
var vec__68398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68396);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68398,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68398,(1),null);
cljs.core.chunk_append(b__68397,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68396,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401(s__68402){
return (new cljs.core.LazySeq(null,((function (i__68396,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68402__$1 = s__68402;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68402__$1);
if(temp__5735__auto____$2){
var s__68402__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68402__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68402__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68404 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68403 = (0);
while(true){
if((i__68403 < size__4581__auto____$1)){
var map__68405 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68403);
var map__68405__$1 = (((((!((map__68405 == null))))?(((((map__68405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68405):map__68405);
var block = map__68405__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68405__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68405__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68404,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68403,i__68396,map__68405,map__68405__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68404,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68403,i__68396,map__68405,map__68405__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68404,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68403,i__68396,map__68405,map__68405__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68404,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401_$_iter__68407(s__68408){
return (new cljs.core.LazySeq(null,((function (i__68403,i__68396,map__68405,map__68405__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68404,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68408__$1 = s__68408;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68408__$1);
if(temp__5735__auto____$3){
var s__68408__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68408__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68408__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68410 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68409 = (0);
while(true){
if((i__68409 < size__4581__auto____$2)){
var map__68411 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68409);
var map__68411__$1 = (((((!((map__68411 == null))))?(((((map__68411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68411):map__68411);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68411__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68411__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68411__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68410,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68484 = (i__68409 + (1));
i__68409 = G__68484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68410),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401_$_iter__68407(cljs.core.chunk_rest(s__68408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68410),null);
}
} else {
var map__68413 = cljs.core.first(s__68408__$2);
var map__68413__$1 = (((((!((map__68413 == null))))?(((((map__68413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68413):map__68413);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68413__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68413__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68413__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401_$_iter__68407(cljs.core.rest(s__68408__$2)));
}
} else {
return null;
}
break;
}
});})(i__68403,i__68396,map__68405,map__68405__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68404,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68403,i__68396,map__68405,map__68405__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68404,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68485 = (i__68403 + (1));
i__68403 = G__68485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68404),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401(cljs.core.chunk_rest(s__68402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68404),null);
}
} else {
var map__68415 = cljs.core.first(s__68402__$2);
var map__68415__$1 = (((((!((map__68415 == null))))?(((((map__68415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68415):map__68415);
var block = map__68415__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68415__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68415__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68396,map__68415,map__68415__$1,block,uid__$1,parents,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68396,map__68415,map__68415__$1,block,uid__$1,parents,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68396,map__68415,map__68415__$1,block,uid__$1,parents,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401_$_iter__68417(s__68418){
return (new cljs.core.LazySeq(null,((function (i__68396,map__68415,map__68415__$1,block,uid__$1,parents,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68418__$1 = s__68418;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68418__$1);
if(temp__5735__auto____$3){
var s__68418__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68418__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68418__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68420 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68419 = (0);
while(true){
if((i__68419 < size__4581__auto____$1)){
var map__68421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68419);
var map__68421__$1 = (((((!((map__68421 == null))))?(((((map__68421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68421):map__68421);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68421__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68421__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68421__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68420,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68486 = (i__68419 + (1));
i__68419 = G__68486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68420),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401_$_iter__68417(cljs.core.chunk_rest(s__68418__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68420),null);
}
} else {
var map__68423 = cljs.core.first(s__68418__$2);
var map__68423__$1 = (((((!((map__68423 == null))))?(((((map__68423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68423):map__68423);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68423__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401_$_iter__68417(cljs.core.rest(s__68418__$2)));
}
} else {
return null;
}
break;
}
});})(i__68396,map__68415,map__68415__$1,block,uid__$1,parents,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68396,map__68415,map__68415__$1,block,uid__$1,parents,s__68402__$2,temp__5735__auto____$2,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68401(cljs.core.rest(s__68402__$2)));
}
} else {
return null;
}
break;
}
});})(i__68396,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68396,vec__68398,group_title,group,c__4580__auto__,size__4581__auto__,b__68397,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__68487 = (i__68396 + (1));
i__68396 = G__68487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68397),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394(cljs.core.chunk_rest(s__68395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68397),null);
}
} else {
var vec__68425 = cljs.core.first(s__68395__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68425,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68425,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428(s__68429){
return (new cljs.core.LazySeq(null,(function (){
var s__68429__$1 = s__68429;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68429__$1);
if(temp__5735__auto____$2){
var s__68429__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68429__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68429__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68431 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68430 = (0);
while(true){
if((i__68430 < size__4581__auto__)){
var map__68432 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68430);
var map__68432__$1 = (((((!((map__68432 == null))))?(((((map__68432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68432):map__68432);
var block = map__68432__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68432__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68432__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68431,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68430,map__68432,map__68432__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68431,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68430,map__68432,map__68432__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68431,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68430,map__68432,map__68432__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68431,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428_$_iter__68434(s__68435){
return (new cljs.core.LazySeq(null,((function (i__68430,map__68432,map__68432__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68431,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (){
var s__68435__$1 = s__68435;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68435__$1);
if(temp__5735__auto____$3){
var s__68435__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68435__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68435__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68437 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68436 = (0);
while(true){
if((i__68436 < size__4581__auto____$1)){
var map__68438 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68436);
var map__68438__$1 = (((((!((map__68438 == null))))?(((((map__68438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68438):map__68438);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68438__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68438__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68438__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68437,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68488 = (i__68436 + (1));
i__68436 = G__68488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68437),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428_$_iter__68434(cljs.core.chunk_rest(s__68435__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68437),null);
}
} else {
var map__68440 = cljs.core.first(s__68435__$2);
var map__68440__$1 = (((((!((map__68440 == null))))?(((((map__68440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68440):map__68440);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68440__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68440__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68440__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428_$_iter__68434(cljs.core.rest(s__68435__$2)));
}
} else {
return null;
}
break;
}
});})(i__68430,map__68432,map__68432__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68431,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,null,null));
});})(i__68430,map__68432,map__68432__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68431,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68489 = (i__68430 + (1));
i__68430 = G__68489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68431),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428(cljs.core.chunk_rest(s__68429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68431),null);
}
} else {
var map__68442 = cljs.core.first(s__68429__$2);
var map__68442__$1 = (((((!((map__68442 == null))))?(((((map__68442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68442):map__68442);
var block = map__68442__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68442__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68442__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__68442,map__68442__$1,block,uid__$1,parents,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__68442,map__68442__$1,block,uid__$1,parents,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__68442,map__68442__$1,block,uid__$1,parents,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428_$_iter__68444(s__68445){
return (new cljs.core.LazySeq(null,(function (){
var s__68445__$1 = s__68445;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68445__$1);
if(temp__5735__auto____$3){
var s__68445__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68445__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68445__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68447 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68446 = (0);
while(true){
if((i__68446 < size__4581__auto__)){
var map__68448 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68446);
var map__68448__$1 = (((((!((map__68448 == null))))?(((((map__68448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68448):map__68448);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68448__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68448__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68448__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68447,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68490 = (i__68446 + (1));
i__68446 = G__68490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68447),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428_$_iter__68444(cljs.core.chunk_rest(s__68445__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68447),null);
}
} else {
var map__68450 = cljs.core.first(s__68445__$2);
var map__68450__$1 = (((((!((map__68450 == null))))?(((((map__68450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68450):map__68450);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68450__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68450__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68450__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428_$_iter__68444(cljs.core.rest(s__68445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__68442,map__68442__$1,block,uid__$1,parents,s__68429__$2,temp__5735__auto____$2,vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394_$_iter__68428(cljs.core.rest(s__68429__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__68425,group_title,group,s__68395__$2,temp__5735__auto____$1,vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__68326_$_iter__68394(cljs.core.rest(s__68395__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__68391,linked_or_unlinked,refs,s__68327__$2,temp__5735__auto__,map__68314,map__68314__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__68326(cljs.core.rest(s__68327__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__68452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68452) : re_frame.core.subscribe.call(null,G__68452));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
