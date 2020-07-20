goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('athens.views.dropdown');
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
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0 0.2em 1rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.page_menu_toggle_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.375rem 0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-100%, -50%)"], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58575) : re_frame.core.dispatch.call(null,G__58575));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58576 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58577 = athens.db.dsdb;
var G__58578 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58576,G__58577,G__58578) : posh.reagent.q.call(null,G__58576,G__58577,G__58578));
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
return cljs.core.boolean$((function (){try{var vec__58580 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58579){if((e58579 instanceof Object)){
var _ = e58579;
return false;
} else {
throw e58579;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58583,editing_uid,ref_groups,timeline_page_QMARK_,show_page_menu_QMARK_,page_menu_position){
var map__58584 = p__58583;
var map__58584__$1 = (((((!((map__58584 == null))))?(((((map__58584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58584):map__58584);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58586 = e.target.value;
var G__58587 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58586,G__58587) : athens.views.node_page.db_handler.call(null,G__58586,G__58587));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (e){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_page_menu_QMARK_,cljs.core.not),cljs.core.reset_BANG_(page_menu_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.target.getBoundingClientRect().left,new cljs.core.Keyword(null,"y","y",-1757859776),e.target.getBoundingClientRect().bottom], null)));
}),new cljs.core.Keyword(null,"active","active",1895962068),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?true:null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null)], null),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.page_menu_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join('')], null)], null)], null):null),athens.parse_renderer.parse_and_render(title)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58588(s__58589){
return (new cljs.core.LazySeq(null,(function (){
var s__58589__$1 = s__58589;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58589__$1);
if(temp__5735__auto__){
var s__58589__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58589__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58589__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58591 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58590 = (0);
while(true){
if((i__58590 < size__4581__auto__)){
var map__58592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58590);
var map__58592__$1 = (((((!((map__58592 == null))))?(((((map__58592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58592):map__58592);
var child = map__58592__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58591,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58725 = (i__58590 + (1));
i__58590 = G__58725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58591),athens$views$node_page$node_page_el_$_iter__58588(cljs.core.chunk_rest(s__58589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58591),null);
}
} else {
var map__58594 = cljs.core.first(s__58589__$2);
var map__58594__$1 = (((((!((map__58594 == null))))?(((((map__58594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58594):map__58594);
var child = map__58594__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58588(cljs.core.rest(s__58589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58596(s__58597){
return (new cljs.core.LazySeq(null,(function (){
var s__58597__$1 = s__58597;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58597__$1);
if(temp__5735__auto__){
var s__58597__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58597__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58597__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58599 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58598 = (0);
while(true){
if((i__58598 < size__4581__auto__)){
var vec__58600 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58598);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58600,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58600,(1),null);
cljs.core.chunk_append(b__58599,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58598,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603(s__58604){
return (new cljs.core.LazySeq(null,((function (i__58598,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58604__$1 = s__58604;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58604__$1);
if(temp__5735__auto____$1){
var s__58604__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58604__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58604__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58606 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58605 = (0);
while(true){
if((i__58605 < size__4581__auto____$1)){
var vec__58607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58605);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(1),null);
cljs.core.chunk_append(b__58606,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58605,i__58598,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58605,i__58598,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58605,i__58598,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610(s__58611){
return (new cljs.core.LazySeq(null,((function (i__58605,i__58598,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58611__$1 = s__58611;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58611__$1);
if(temp__5735__auto____$2){
var s__58611__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58611__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58611__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58613 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58612 = (0);
while(true){
if((i__58612 < size__4581__auto____$2)){
var map__58614 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58612);
var map__58614__$1 = (((((!((map__58614 == null))))?(((((map__58614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58614):map__58614);
var block = map__58614__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58613,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58612,i__58605,i__58598,map__58614,map__58614__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58613,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610_$_iter__58616(s__58617){
return (new cljs.core.LazySeq(null,((function (i__58612,i__58605,i__58598,map__58614,map__58614__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58613,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58617__$1 = s__58617;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58617__$1);
if(temp__5735__auto____$3){
var s__58617__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58617__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58617__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58619 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58618 = (0);
while(true){
if((i__58618 < size__4581__auto____$3)){
var map__58620 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58618);
var map__58620__$1 = (((((!((map__58620 == null))))?(((((map__58620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58620):map__58620);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58619,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58618,i__58612,i__58605,i__58598,map__58620,map__58620__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58619,s__58617__$2,temp__5735__auto____$3,map__58614,map__58614__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58613,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58618,i__58612,i__58605,i__58598,map__58620,map__58620__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58619,s__58617__$2,temp__5735__auto____$3,map__58614,map__58614__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58613,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58726 = (i__58618 + (1));
i__58618 = G__58726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58619),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610_$_iter__58616(cljs.core.chunk_rest(s__58617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58619),null);
}
} else {
var map__58622 = cljs.core.first(s__58617__$2);
var map__58622__$1 = (((((!((map__58622 == null))))?(((((map__58622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58622):map__58622);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58612,i__58605,i__58598,map__58622,map__58622__$1,title__$1,string,uid__$2,s__58617__$2,temp__5735__auto____$3,map__58614,map__58614__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58613,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58612,i__58605,i__58598,map__58622,map__58622__$1,title__$1,string,uid__$2,s__58617__$2,temp__5735__auto____$3,map__58614,map__58614__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58613,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610_$_iter__58616(cljs.core.rest(s__58617__$2)));
}
} else {
return null;
}
break;
}
});})(i__58612,i__58605,i__58598,map__58614,map__58614__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58613,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58612,i__58605,i__58598,map__58614,map__58614__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58613,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58727 = (i__58612 + (1));
i__58612 = G__58727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58613),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610(cljs.core.chunk_rest(s__58611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58613),null);
}
} else {
var map__58624 = cljs.core.first(s__58611__$2);
var map__58624__$1 = (((((!((map__58624 == null))))?(((((map__58624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58624):map__58624);
var block = map__58624__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58605,i__58598,map__58624,map__58624__$1,block,uid__$1,parents,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610_$_iter__58626(s__58627){
return (new cljs.core.LazySeq(null,((function (i__58605,i__58598,map__58624,map__58624__$1,block,uid__$1,parents,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58627__$1 = s__58627;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58627__$1);
if(temp__5735__auto____$3){
var s__58627__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58627__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58627__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58629 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58628 = (0);
while(true){
if((i__58628 < size__4581__auto____$2)){
var map__58630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58628);
var map__58630__$1 = (((((!((map__58630 == null))))?(((((map__58630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58630):map__58630);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58629,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58628,i__58605,i__58598,map__58630,map__58630__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58629,s__58627__$2,temp__5735__auto____$3,map__58624,map__58624__$1,block,uid__$1,parents,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58628,i__58605,i__58598,map__58630,map__58630__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58629,s__58627__$2,temp__5735__auto____$3,map__58624,map__58624__$1,block,uid__$1,parents,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58728 = (i__58628 + (1));
i__58628 = G__58728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58629),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610_$_iter__58626(cljs.core.chunk_rest(s__58627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58629),null);
}
} else {
var map__58632 = cljs.core.first(s__58627__$2);
var map__58632__$1 = (((((!((map__58632 == null))))?(((((map__58632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58632):map__58632);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58605,i__58598,map__58632,map__58632__$1,title__$1,string,uid__$2,s__58627__$2,temp__5735__auto____$3,map__58624,map__58624__$1,block,uid__$1,parents,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58605,i__58598,map__58632,map__58632__$1,title__$1,string,uid__$2,s__58627__$2,temp__5735__auto____$3,map__58624,map__58624__$1,block,uid__$1,parents,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610_$_iter__58626(cljs.core.rest(s__58627__$2)));
}
} else {
return null;
}
break;
}
});})(i__58605,i__58598,map__58624,map__58624__$1,block,uid__$1,parents,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58605,i__58598,map__58624,map__58624__$1,block,uid__$1,parents,s__58611__$2,temp__5735__auto____$2,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58610(cljs.core.rest(s__58611__$2)));
}
} else {
return null;
}
break;
}
});})(i__58605,i__58598,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58605,i__58598,vec__58607,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58606,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58729 = (i__58605 + (1));
i__58605 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58606),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603(cljs.core.chunk_rest(s__58604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58606),null);
}
} else {
var vec__58634 = cljs.core.first(s__58604__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58634,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58634,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58598,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58598,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58598,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637(s__58638){
return (new cljs.core.LazySeq(null,((function (i__58598,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58638__$1 = s__58638;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58638__$1);
if(temp__5735__auto____$2){
var s__58638__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58638__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58638__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58640 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58639 = (0);
while(true){
if((i__58639 < size__4581__auto____$1)){
var map__58641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58639);
var map__58641__$1 = (((((!((map__58641 == null))))?(((((map__58641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58641):map__58641);
var block = map__58641__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58640,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58639,i__58598,map__58641,map__58641__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58640,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637_$_iter__58643(s__58644){
return (new cljs.core.LazySeq(null,((function (i__58639,i__58598,map__58641,map__58641__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58640,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58644__$1 = s__58644;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58644__$1);
if(temp__5735__auto____$3){
var s__58644__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58644__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58644__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58646 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58645 = (0);
while(true){
if((i__58645 < size__4581__auto____$2)){
var map__58647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58645);
var map__58647__$1 = (((((!((map__58647 == null))))?(((((map__58647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58647):map__58647);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58646,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58645,i__58639,i__58598,map__58647,map__58647__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58646,s__58644__$2,temp__5735__auto____$3,map__58641,map__58641__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58640,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58645,i__58639,i__58598,map__58647,map__58647__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58646,s__58644__$2,temp__5735__auto____$3,map__58641,map__58641__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58640,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58730 = (i__58645 + (1));
i__58645 = G__58730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58646),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637_$_iter__58643(cljs.core.chunk_rest(s__58644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58646),null);
}
} else {
var map__58649 = cljs.core.first(s__58644__$2);
var map__58649__$1 = (((((!((map__58649 == null))))?(((((map__58649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58649):map__58649);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58639,i__58598,map__58649,map__58649__$1,title__$1,string,uid__$2,s__58644__$2,temp__5735__auto____$3,map__58641,map__58641__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58640,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58639,i__58598,map__58649,map__58649__$1,title__$1,string,uid__$2,s__58644__$2,temp__5735__auto____$3,map__58641,map__58641__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58640,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637_$_iter__58643(cljs.core.rest(s__58644__$2)));
}
} else {
return null;
}
break;
}
});})(i__58639,i__58598,map__58641,map__58641__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58640,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58639,i__58598,map__58641,map__58641__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58640,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58731 = (i__58639 + (1));
i__58639 = G__58731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58640),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637(cljs.core.chunk_rest(s__58638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58640),null);
}
} else {
var map__58651 = cljs.core.first(s__58638__$2);
var map__58651__$1 = (((((!((map__58651 == null))))?(((((map__58651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58651):map__58651);
var block = map__58651__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58598,map__58651,map__58651__$1,block,uid__$1,parents,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637_$_iter__58653(s__58654){
return (new cljs.core.LazySeq(null,((function (i__58598,map__58651,map__58651__$1,block,uid__$1,parents,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58654__$1 = s__58654;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58654__$1);
if(temp__5735__auto____$3){
var s__58654__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58654__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58654__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58656 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58655 = (0);
while(true){
if((i__58655 < size__4581__auto____$1)){
var map__58657 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58655);
var map__58657__$1 = (((((!((map__58657 == null))))?(((((map__58657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58657):map__58657);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58655,i__58598,map__58657,map__58657__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58656,s__58654__$2,temp__5735__auto____$3,map__58651,map__58651__$1,block,uid__$1,parents,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58655,i__58598,map__58657,map__58657__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58656,s__58654__$2,temp__5735__auto____$3,map__58651,map__58651__$1,block,uid__$1,parents,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58732 = (i__58655 + (1));
i__58655 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58656),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637_$_iter__58653(cljs.core.chunk_rest(s__58654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58656),null);
}
} else {
var map__58659 = cljs.core.first(s__58654__$2);
var map__58659__$1 = (((((!((map__58659 == null))))?(((((map__58659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58659):map__58659);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58598,map__58659,map__58659__$1,title__$1,string,uid__$2,s__58654__$2,temp__5735__auto____$3,map__58651,map__58651__$1,block,uid__$1,parents,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58598,map__58659,map__58659__$1,title__$1,string,uid__$2,s__58654__$2,temp__5735__auto____$3,map__58651,map__58651__$1,block,uid__$1,parents,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637_$_iter__58653(cljs.core.rest(s__58654__$2)));
}
} else {
return null;
}
break;
}
});})(i__58598,map__58651,map__58651__$1,block,uid__$1,parents,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58598,map__58651,map__58651__$1,block,uid__$1,parents,s__58638__$2,temp__5735__auto____$2,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603_$_iter__58637(cljs.core.rest(s__58638__$2)));
}
} else {
return null;
}
break;
}
});})(i__58598,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58598,vec__58634,group_title,group,s__58604__$2,temp__5735__auto____$1,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58603(cljs.core.rest(s__58604__$2)));
}
} else {
return null;
}
break;
}
});})(i__58598,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58598,vec__58600,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58599,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58733 = (i__58598 + (1));
i__58598 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58599),athens$views$node_page$node_page_el_$_iter__58596(cljs.core.chunk_rest(s__58597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58599),null);
}
} else {
var vec__58661 = cljs.core.first(s__58597__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58661,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58661,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664(s__58665){
return (new cljs.core.LazySeq(null,(function (){
var s__58665__$1 = s__58665;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58665__$1);
if(temp__5735__auto____$1){
var s__58665__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58665__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58665__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58667 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58666 = (0);
while(true){
if((i__58666 < size__4581__auto__)){
var vec__58668 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58666);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58668,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58668,(1),null);
cljs.core.chunk_append(b__58667,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58666,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58666,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58666,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671(s__58672){
return (new cljs.core.LazySeq(null,((function (i__58666,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58672__$1 = s__58672;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58672__$1);
if(temp__5735__auto____$2){
var s__58672__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58672__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58672__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58674 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58673 = (0);
while(true){
if((i__58673 < size__4581__auto____$1)){
var map__58675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58673);
var map__58675__$1 = (((((!((map__58675 == null))))?(((((map__58675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58675):map__58675);
var block = map__58675__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58674,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58673,i__58666,map__58675,map__58675__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671_$_iter__58677(s__58678){
return (new cljs.core.LazySeq(null,((function (i__58673,i__58666,map__58675,map__58675__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58678__$1 = s__58678;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58678__$1);
if(temp__5735__auto____$3){
var s__58678__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58678__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58678__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58680 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58679 = (0);
while(true){
if((i__58679 < size__4581__auto____$2)){
var map__58681 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58679);
var map__58681__$1 = (((((!((map__58681 == null))))?(((((map__58681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58681):map__58681);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58680,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58679,i__58673,i__58666,map__58681,map__58681__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58680,s__58678__$2,temp__5735__auto____$3,map__58675,map__58675__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58679,i__58673,i__58666,map__58681,map__58681__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58680,s__58678__$2,temp__5735__auto____$3,map__58675,map__58675__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58734 = (i__58679 + (1));
i__58679 = G__58734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58680),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671_$_iter__58677(cljs.core.chunk_rest(s__58678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58680),null);
}
} else {
var map__58683 = cljs.core.first(s__58678__$2);
var map__58683__$1 = (((((!((map__58683 == null))))?(((((map__58683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58683):map__58683);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58673,i__58666,map__58683,map__58683__$1,title__$1,string,uid__$2,s__58678__$2,temp__5735__auto____$3,map__58675,map__58675__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58673,i__58666,map__58683,map__58683__$1,title__$1,string,uid__$2,s__58678__$2,temp__5735__auto____$3,map__58675,map__58675__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671_$_iter__58677(cljs.core.rest(s__58678__$2)));
}
} else {
return null;
}
break;
}
});})(i__58673,i__58666,map__58675,map__58675__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58673,i__58666,map__58675,map__58675__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58735 = (i__58673 + (1));
i__58673 = G__58735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58674),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671(cljs.core.chunk_rest(s__58672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58674),null);
}
} else {
var map__58685 = cljs.core.first(s__58672__$2);
var map__58685__$1 = (((((!((map__58685 == null))))?(((((map__58685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58685):map__58685);
var block = map__58685__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58666,map__58685,map__58685__$1,block,uid__$1,parents,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671_$_iter__58687(s__58688){
return (new cljs.core.LazySeq(null,((function (i__58666,map__58685,map__58685__$1,block,uid__$1,parents,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58688__$1 = s__58688;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58688__$1);
if(temp__5735__auto____$3){
var s__58688__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58688__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58688__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58690 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58689 = (0);
while(true){
if((i__58689 < size__4581__auto____$1)){
var map__58691 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58689);
var map__58691__$1 = (((((!((map__58691 == null))))?(((((map__58691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58691):map__58691);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58690,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58689,i__58666,map__58691,map__58691__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58690,s__58688__$2,temp__5735__auto____$3,map__58685,map__58685__$1,block,uid__$1,parents,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58689,i__58666,map__58691,map__58691__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58690,s__58688__$2,temp__5735__auto____$3,map__58685,map__58685__$1,block,uid__$1,parents,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58736 = (i__58689 + (1));
i__58689 = G__58736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58690),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671_$_iter__58687(cljs.core.chunk_rest(s__58688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58690),null);
}
} else {
var map__58693 = cljs.core.first(s__58688__$2);
var map__58693__$1 = (((((!((map__58693 == null))))?(((((map__58693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58693):map__58693);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58666,map__58693,map__58693__$1,title__$1,string,uid__$2,s__58688__$2,temp__5735__auto____$3,map__58685,map__58685__$1,block,uid__$1,parents,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58666,map__58693,map__58693__$1,title__$1,string,uid__$2,s__58688__$2,temp__5735__auto____$3,map__58685,map__58685__$1,block,uid__$1,parents,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671_$_iter__58687(cljs.core.rest(s__58688__$2)));
}
} else {
return null;
}
break;
}
});})(i__58666,map__58685,map__58685__$1,block,uid__$1,parents,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58666,map__58685,map__58685__$1,block,uid__$1,parents,s__58672__$2,temp__5735__auto____$2,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58671(cljs.core.rest(s__58672__$2)));
}
} else {
return null;
}
break;
}
});})(i__58666,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58666,vec__58668,group_title,group,c__4580__auto__,size__4581__auto__,b__58667,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58737 = (i__58666 + (1));
i__58666 = G__58737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58667),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664(cljs.core.chunk_rest(s__58665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58667),null);
}
} else {
var vec__58695 = cljs.core.first(s__58665__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58695,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58695,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698(s__58699){
return (new cljs.core.LazySeq(null,(function (){
var s__58699__$1 = s__58699;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58699__$1);
if(temp__5735__auto____$2){
var s__58699__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58699__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58699__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58701 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58700 = (0);
while(true){
if((i__58700 < size__4581__auto__)){
var map__58702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58700);
var map__58702__$1 = (((((!((map__58702 == null))))?(((((map__58702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58702):map__58702);
var block = map__58702__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58701,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58700,map__58702,map__58702__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58701,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698_$_iter__58704(s__58705){
return (new cljs.core.LazySeq(null,((function (i__58700,map__58702,map__58702__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58701,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
var s__58705__$1 = s__58705;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58705__$1);
if(temp__5735__auto____$3){
var s__58705__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58705__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58705__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58707 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58706 = (0);
while(true){
if((i__58706 < size__4581__auto____$1)){
var map__58708 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58706);
var map__58708__$1 = (((((!((map__58708 == null))))?(((((map__58708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58708):map__58708);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58707,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58706,i__58700,map__58708,map__58708__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58707,s__58705__$2,temp__5735__auto____$3,map__58702,map__58702__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58701,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58706,i__58700,map__58708,map__58708__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58707,s__58705__$2,temp__5735__auto____$3,map__58702,map__58702__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58701,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58738 = (i__58706 + (1));
i__58706 = G__58738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58707),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698_$_iter__58704(cljs.core.chunk_rest(s__58705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58707),null);
}
} else {
var map__58710 = cljs.core.first(s__58705__$2);
var map__58710__$1 = (((((!((map__58710 == null))))?(((((map__58710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58710):map__58710);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58700,map__58710,map__58710__$1,title__$1,string,uid__$2,s__58705__$2,temp__5735__auto____$3,map__58702,map__58702__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58701,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58700,map__58710,map__58710__$1,title__$1,string,uid__$2,s__58705__$2,temp__5735__auto____$3,map__58702,map__58702__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58701,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698_$_iter__58704(cljs.core.rest(s__58705__$2)));
}
} else {
return null;
}
break;
}
});})(i__58700,map__58702,map__58702__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58701,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
,null,null));
});})(i__58700,map__58702,map__58702__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58701,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58739 = (i__58700 + (1));
i__58700 = G__58739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58701),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698(cljs.core.chunk_rest(s__58699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58701),null);
}
} else {
var map__58712 = cljs.core.first(s__58699__$2);
var map__58712__$1 = (((((!((map__58712 == null))))?(((((map__58712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58712):map__58712);
var block = map__58712__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58712,map__58712__$1,block,uid__$1,parents,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698_$_iter__58714(s__58715){
return (new cljs.core.LazySeq(null,(function (){
var s__58715__$1 = s__58715;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58715__$1);
if(temp__5735__auto____$3){
var s__58715__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58715__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58715__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58717 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58716 = (0);
while(true){
if((i__58716 < size__4581__auto__)){
var map__58718 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58716);
var map__58718__$1 = (((((!((map__58718 == null))))?(((((map__58718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58718):map__58718);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58717,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58716,map__58718,map__58718__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58717,s__58715__$2,temp__5735__auto____$3,map__58712,map__58712__$1,block,uid__$1,parents,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58716,map__58718,map__58718__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58717,s__58715__$2,temp__5735__auto____$3,map__58712,map__58712__$1,block,uid__$1,parents,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58740 = (i__58716 + (1));
i__58716 = G__58740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58717),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698_$_iter__58714(cljs.core.chunk_rest(s__58715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58717),null);
}
} else {
var map__58720 = cljs.core.first(s__58715__$2);
var map__58720__$1 = (((((!((map__58720 == null))))?(((((map__58720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58720):map__58720);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58720,map__58720__$1,title__$1,string,uid__$2,s__58715__$2,temp__5735__auto____$3,map__58712,map__58712__$1,block,uid__$1,parents,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58720,map__58720__$1,title__$1,string,uid__$2,s__58715__$2,temp__5735__auto____$3,map__58712,map__58712__$1,block,uid__$1,parents,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698_$_iter__58714(cljs.core.rest(s__58715__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58712,map__58712__$1,block,uid__$1,parents,s__58699__$2,temp__5735__auto____$2,vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664_$_iter__58698(cljs.core.rest(s__58699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58695,group_title,group,s__58665__$2,temp__5735__auto____$1,vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58596_$_iter__58664(cljs.core.rest(s__58665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58661,linked_or_unlinked,refs,s__58597__$2,temp__5735__auto__,map__58584,map__58584__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58596(cljs.core.rest(s__58597__$2)));
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
var map__58722 = athens.db.get_node_document(ident);
var map__58722__$1 = (((((!((map__58722 == null))))?(((((map__58722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58722):map__58722);
var node = map__58722__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58724) : re_frame.core.subscribe.call(null,G__58724));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
var show_page_menu_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var page_menu_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_,show_page_menu_QMARK_,page_menu_position], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
