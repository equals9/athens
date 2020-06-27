goog.provide('athens.devcards.athena');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('athens.devcards.db');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.subs');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('goog.events.KeyCodes');
athens.devcards.athena.container_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"64","64",977820579).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),", 0 0 0 1px ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),"60vh","translate(-50%, -50%)","50%","hidden","784px",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297)),(2),"flex","fixed","4px","column","50%"]);
athens.devcards.athena.athena_input_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["49px","#433F38","38px",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),"::placeholder",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], null),"300","100%","text","24px",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"-0.03em",(0),"4px 4px 0 0"]);
athens.devcards.athena.results_list_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297)),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100%"], null);
athens.devcards.athena.results_heading_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 18px",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0 1px 0 0 ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null)], null);
athens.devcards.athena.result_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"grid-template","grid-template",-268181948),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"border-top","border-top",-158897573)],["\"title icon\" \"preview icon\"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297))], null)], null),"all .05s ease",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"title",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null),new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"preview",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"wrap",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190))], null),new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"icon",new cljs.core.Keyword(null,"color","color",1011675173),"transparent",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto auto"], null)], null),"0 12px",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),0.02),"8px 32px",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.Keyword(null,".preview",".preview",351053960),new cljs.core.Keyword(null,".link-leader",".link-leader",-1886712257),new cljs.core.Keyword(null,".result-highlight",".result-highlight",1377844970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null)], null)], null),"grid","1fr auto",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null)]);
athens.devcards.athena.result_highlight_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null);
athens.devcards.athena.hint_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"inherit",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(67, 63, 56, 0.25)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 4px"], null)], null)], null)], null);
/**
 * More options here https://clojuredocs.org/clojure.core/re-pattern
 */
athens.devcards.athena.re_case_insensitive = (function athens$devcards$athena$re_case_insensitive(query){
return cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''));
});
athens.devcards.athena.search_in_block_title = (function athens$devcards$athena$search_in_block_title(query){
var G__55684 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__55685 = cljs.core.deref(athens.db.dsdb);
var G__55686 = athens.devcards.athena.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__55684,G__55685,G__55686) : datascript.core.q.call(null,G__55684,G__55685,G__55686));
});
athens.devcards.athena.get_parent_node = (function athens$devcards$athena$get_parent_node(block){
var b = block;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),b);
} else {
var G__55719 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
b = G__55719;
continue;
}
break;
}
});
athens.devcards.athena.search_in_block_content = (function athens$devcards$athena$search_in_block_content(query){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55687_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55687_SHARP_,new cljs.core.Keyword("block","_children","block/_children",1128070632));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.get_parent_node,(function (){var G__55688 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__55689 = cljs.core.deref(athens.db.dsdb);
var G__55690 = athens.devcards.athena.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__55688,G__55689,G__55690) : datascript.core.q.call(null,G__55688,G__55689,G__55690));
})()));
});
athens.devcards.athena.highlight_match = (function athens$devcards$athena$highlight_match(query,txt){
var query_pattern = athens.devcards.athena.re_case_insensitive(["((?<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),")|(?=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"))"].join(''));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,part){
if(cljs.core.truth_(cljs.core.re_find(query_pattern,part))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.result-highlight","span.result-highlight",-1225928510),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_highlight_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),part], null);
} else {
return part;
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(txt,query_pattern)));
});
athens.devcards.athena.search_handler = (function athens$devcards$athena$search_handler(_STAR_cache,_STAR_match){
return (function (e){
var query = e.target.value;
if(clojure.string.blank_QMARK_(query)){
return cljs.core.reset_BANG_(_STAR_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,null], null));
} else {
var result = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cache),query);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__55691 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages","pages",-285406513),athens.devcards.athena.search_in_block_title(query)], null);
if(cljs.core.truth_(cljs.core.count(query))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55691,new cljs.core.Keyword(null,"blocks","blocks",-610462153),athens.devcards.athena.search_in_block_content(query));
} else {
return G__55691;
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_cache,cljs.core.assoc,query,result);

return cljs.core.reset_BANG_(_STAR_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,result], null));
}
});
});
athens.devcards.athena.key_down_handler = (function athens$devcards$athena$key_down_handler(e){
var key = e.keyCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ESC)){
var G__55692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55692) : re_frame.core.dispatch.call(null,G__55692));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.UP)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.DOWN)){
return null;
} else {
return null;

}
}
}
}
});
athens.devcards.athena.athena_prompt_el = (function athens$devcards$athena$athena_prompt_el(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__55693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55693) : re_frame.core.dispatch.call(null,G__55693));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Search], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Find or Create a Page"], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null)], null);
});
athens.devcards.athena.recent_el = (function athens$devcards$athena$recent_el(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena.results_heading_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Recent"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena.hint_style),"Press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),"shift + enter"], null)," to open in right sidebar."], null)], null);
});
athens.devcards.athena.athena_el = (function athens$devcards$athena$athena_el(athena_QMARK_,_STAR_match,change_handler){
if(cljs.core.truth_(athena_QMARK_)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.athena","div.athena",-1081699296),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena.container_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.athena_input_style,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Find or Create Page",new cljs.core.Keyword(null,"on-change","on-change",-732046149),change_handler,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.athena.key_down_handler], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.recent_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var vec__55694 = cljs.core.deref(_STAR_match);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55694,(0),null);
var map__55697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55694,(1),null);
var map__55697__$1 = (((((!((map__55697 == null))))?(((((map__55697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55697):map__55697);
var result = map__55697__$1;
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55697__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55697__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(result)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena.results_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$athena$athena_el_$_iter__55699(s__55700){
return (new cljs.core.LazySeq(null,(function (){
var s__55700__$1 = s__55700;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55700__$1);
if(temp__5735__auto__){
var s__55700__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55700__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55700__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55702 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55701 = (0);
while(true){
if((i__55701 < size__4581__auto__)){
var vec__55703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55701);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55703,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55703,(1),null);
cljs.core.chunk_append(b__55702,(function (){var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x);
var page_title = (function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_uid = (function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_string = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55701,parent,page_title,block_uid,block_string,vec__55703,i,x,c__4580__auto__,size__4581__auto__,b__55702,s__55700__$2,temp__5735__auto__,vec__55694,query,map__55697,map__55697__$1,result,pages,blocks){
return (function (){
return athens.router.navigate_uid(block_uid);
});})(i__55701,parent,page_title,block_uid,block_string,vec__55703,i,x,c__4580__auto__,size__4581__auto__,b__55702,s__55700__$2,temp__5735__auto__,vec__55694,query,map__55697,map__55697__$1,result,pages,blocks))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),athens.devcards.athena.highlight_match(query,page_title)], null),(cljs.core.truth_(block_string)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview","span.preview",391484430),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"preview","preview",451279890)),athens.devcards.athena.highlight_match(query,block_string)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ArrowForward], null)], null)], null);
})());

var G__55720 = (i__55701 + (1));
i__55701 = G__55720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55702),athens$devcards$athena$athena_el_$_iter__55699(cljs.core.chunk_rest(s__55700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55702),null);
}
} else {
var vec__55706 = cljs.core.first(s__55700__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55706,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55706,(1),null);
return cljs.core.cons((function (){var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x);
var page_title = (function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_uid = (function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_string = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (parent,page_title,block_uid,block_string,vec__55706,i,x,s__55700__$2,temp__5735__auto__,vec__55694,query,map__55697,map__55697__$1,result,pages,blocks){
return (function (){
return athens.router.navigate_uid(block_uid);
});})(parent,page_title,block_uid,block_string,vec__55706,i,x,s__55700__$2,temp__5735__auto__,vec__55694,query,map__55697,map__55697__$1,result,pages,blocks))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),athens.devcards.athena.highlight_match(query,page_title)], null),(cljs.core.truth_(block_string)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview","span.preview",391484430),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"preview","preview",451279890)),athens.devcards.athena.highlight_match(query,block_string)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ArrowForward], null)], null)], null);
})(),athens$devcards$athena$athena_el_$_iter__55699(cljs.core.rest(s__55700__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.take.cljs$core$IFn$_invoke$arity$2((40),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),pages),blocks))));
})())], null);
} else {
return null;
}
})], null)], null);
} else {
return null;
}
});
athens.devcards.athena.athena_component = (function athens$devcards$athena$athena_component(){
var athena_QMARK_ = cljs.core.deref((function (){var G__55709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athena","athena",-1523991628)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55709) : re_frame.core.subscribe.call(null,G__55709));
})());
var _STAR_cache = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var handler = athens.devcards.athena.search_handler(_STAR_cache,_STAR_match);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_el,athena_QMARK_,_STAR_match,handler], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55710 = (function (meta55711){
this.meta55711 = meta55711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55712,meta55711__$1){
var self__ = this;
var _55712__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55710(meta55711__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55712){
var self__ = this;
var _55712__$1 = this;
return self__.meta55711;
}));

(athens.devcards.athena.t_athens$devcards$athena55710.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55710.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Create Test Pages and Blocks"], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55711","meta55711",809328461,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55710.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55710.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55710");

(athens.devcards.athena.t_athens$devcards$athena55710.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55710");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55710.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55710 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55710(meta55711){
return (new athens.devcards.athena.t_athens$devcards$athena55710(meta55711));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55710(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55713 = (function (meta55714){
this.meta55714 = meta55714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55715,meta55714__$1){
var self__ = this;
var _55715__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55713(meta55714__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55715){
var self__ = this;
var _55715__$1 = this;
return self__.meta55714;
}));

(athens.devcards.athena.t_athens$devcards$athena55713.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55713.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55714","meta55714",1697567120,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55713.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55713.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55713");

(athens.devcards.athena.t_athens$devcards$athena55713.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55713");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55713.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55713 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55713(meta55714){
return (new athens.devcards.athena.t_athens$devcards$athena55713(meta55714));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55713(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Athena-Prompt","Athena-Prompt",-1346277474)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Athena-Prompt",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55716 = (function (meta55717){
this.meta55717 = meta55717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55718,meta55717__$1){
var self__ = this;
var _55718__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55716(meta55717__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55718){
var self__ = this;
var _55718__$1 = this;
return self__.meta55717;
}));

(athens.devcards.athena.t_athens$devcards$athena55716.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55716.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_component], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55717","meta55717",1466200039,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55716.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55716.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55716");

(athens.devcards.athena.t_athens$devcards$athena55716.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55716");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55716.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55716 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55716(meta55717){
return (new athens.devcards.athena.t_athens$devcards$athena55716(meta55717));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55716(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.athena.js.map
