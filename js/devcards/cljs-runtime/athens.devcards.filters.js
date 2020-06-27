goog.provide('athens.devcards.filters');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.devcards.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.filters.container_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
athens.devcards.filters.search_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);
athens.devcards.filters.controls_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null);
athens.devcards.filters.filter_list_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
athens.devcards.filters.filter_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"height","height",1025178622),"30px"], null);
athens.devcards.filters.added_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue"], null);
athens.devcards.filters.excluded_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"salmon"], null);
athens.devcards.filters.count_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null);
athens.devcards.filters.filter_name_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px"], null);
athens.devcards.filters.items = cljs.core.PersistentHashMap.fromArrays(["Donec","Amet","Eu","Est","Quam","Diam","Metus","Ipsum","Vitae","Erat","At","Elitu","Elit","Turpis","Magnis","Mi"],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(6)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(6),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"added","added",2057651688)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(29)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"excluded","excluded",-715952088)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(30),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"excluded","excluded",-715952088)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(30)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(97)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(10),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"added","added",2057651688)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(7),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"added","added",2057651688)], null)]);
athens.devcards.filters.filters_el = (function athens$devcards$filters$filters_el(_uid,items){
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"lex","lex",1572323917),new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return (function (_uid__$1,items__$1){
var sort_ = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
var filtered_items = cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)))].join('')),k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
var items__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_,new cljs.core.Keyword(null,"lex","lex",1572323917)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),filtered_items):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (k1,k2){
return cljs.core.compare(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(items__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k2,new cljs.core.Keyword(null,"count","count",2139924085)], null)),k1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(items__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"count","count",2139924085)], null)),k2], null));
})),filtered_items));
var num_filters = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60082){
var vec__60083 = p__60082;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60083,(1),null);
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
}),items__$2));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.filters.container_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Filter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.filters.search_style,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add or remove filters",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822)], null),e.target.value);
})], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.filters.controls_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Sort], null),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"sort","sort",953465918),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_,new cljs.core.Keyword(null,"lex","lex",1572323917)))?new cljs.core.Keyword(null,"count","count",2139924085):new cljs.core.Keyword(null,"lex","lex",1572323917)));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_filters)," Filters Active"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Reset",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"state","state",-1988618099)));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s))));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.filters.filter_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$filters$filters_el_$_iter__60086(s__60087){
return (new cljs.core.LazySeq(null,(function (){
var s__60087__$1 = s__60087;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60087__$1);
if(temp__5735__auto__){
var s__60087__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60087__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60087__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60089 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60088 = (0);
while(true){
if((i__60088 < size__4581__auto__)){
var vec__60090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60088);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60090,(0),null);
var map__60093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60090,(1),null);
var map__60093__$1 = (((((!((map__60093 == null))))?(((((map__60093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60093):map__60093);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var added_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"added","added",2057651688));
var excluded_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"excluded","excluded",-715952088));
cljs.core.chunk_append(b__60089,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.filters.filter_style,((added_QMARK_)?athens.devcards.filters.added_style:((excluded_QMARK_)?athens.devcards.filters.excluded_style:null))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60088,added_QMARK_,excluded_QMARK_,vec__60090,k,map__60093,map__60093__$1,count,state,c__4580__auto__,size__4581__auto__,b__60089,s__60087__$2,temp__5735__auto__,sort_,filtered_items,items__$2,num_filters,s){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),k,new cljs.core.Keyword(null,"state","state",-1988618099)], null),(function (){var G__60095 = state;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__60095)){
return new cljs.core.Keyword(null,"added","added",2057651688);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),G__60095)){
return new cljs.core.Keyword(null,"excluded","excluded",-715952088);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"excluded","excluded",-715952088),G__60095)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60095)].join('')));

}
}
}
})());
});})(i__60088,added_QMARK_,excluded_QMARK_,vec__60090,k,map__60093,map__60093__$1,count,state,c__4580__auto__,size__4581__auto__,b__60089,s__60087__$2,temp__5735__auto__,sort_,filtered_items,items__$2,num_filters,s))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.filters.count_style),count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.filters.filter_name_style),k], null)], null),((((added_QMARK_) || (excluded_QMARK_)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),state,((added_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Check], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Block], null))], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__60105 = (i__60088 + (1));
i__60088 = G__60105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60089),athens$devcards$filters$filters_el_$_iter__60086(cljs.core.chunk_rest(s__60087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60089),null);
}
} else {
var vec__60096 = cljs.core.first(s__60087__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60096,(0),null);
var map__60099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60096,(1),null);
var map__60099__$1 = (((((!((map__60099 == null))))?(((((map__60099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60099):map__60099);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60099__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60099__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var added_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"added","added",2057651688));
var excluded_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"excluded","excluded",-715952088));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.filters.filter_style,((added_QMARK_)?athens.devcards.filters.added_style:((excluded_QMARK_)?athens.devcards.filters.excluded_style:null))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (added_QMARK_,excluded_QMARK_,vec__60096,k,map__60099,map__60099__$1,count,state,s__60087__$2,temp__5735__auto__,sort_,filtered_items,items__$2,num_filters,s){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),k,new cljs.core.Keyword(null,"state","state",-1988618099)], null),(function (){var G__60101 = state;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__60101)){
return new cljs.core.Keyword(null,"added","added",2057651688);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),G__60101)){
return new cljs.core.Keyword(null,"excluded","excluded",-715952088);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"excluded","excluded",-715952088),G__60101)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60101)].join('')));

}
}
}
})());
});})(added_QMARK_,excluded_QMARK_,vec__60096,k,map__60099,map__60099__$1,count,state,s__60087__$2,temp__5735__auto__,sort_,filtered_items,items__$2,num_filters,s))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.filters.count_style),count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.filters.filter_name_style),k], null)], null),((((added_QMARK_) || (excluded_QMARK_)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),state,((added_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Check], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Block], null))], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),athens$devcards$filters$filters_el_$_iter__60086(cljs.core.rest(s__60087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(items__$2);
})())], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.filters","athens.devcards.filters",1272833021),new cljs.core.Keyword(null,"Filters","Filters",714573883)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Filters",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.filters !== 'undefined') && (typeof athens.devcards.filters.t_athens$devcards$filters60102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.filters.t_athens$devcards$filters60102 = (function (meta60103){
this.meta60103 = meta60103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.filters.t_athens$devcards$filters60102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60104,meta60103__$1){
var self__ = this;
var _60104__$1 = this;
return (new athens.devcards.filters.t_athens$devcards$filters60102(meta60103__$1));
}));

(athens.devcards.filters.t_athens$devcards$filters60102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60104){
var self__ = this;
var _60104__$1 = this;
return self__.meta60103;
}));

(athens.devcards.filters.t_athens$devcards$filters60102.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.filters.t_athens$devcards$filters60102.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.filters.filters_el,"((some-uid))",athens.devcards.filters.items], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.filters.t_athens$devcards$filters60102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60103","meta60103",-248016689,null)], null);
}));

(athens.devcards.filters.t_athens$devcards$filters60102.cljs$lang$type = true);

(athens.devcards.filters.t_athens$devcards$filters60102.cljs$lang$ctorStr = "athens.devcards.filters/t_athens$devcards$filters60102");

(athens.devcards.filters.t_athens$devcards$filters60102.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.filters/t_athens$devcards$filters60102");
}));

/**
 * Positional factory function for athens.devcards.filters/t_athens$devcards$filters60102.
 */
athens.devcards.filters.__GT_t_athens$devcards$filters60102 = (function athens$devcards$filters$__GT_t_athens$devcards$filters60102(meta60103){
return (new athens.devcards.filters.t_athens$devcards$filters60102(meta60103));
});

}

return (new athens.devcards.filters.t_athens$devcards$filters60102(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.filters.js.map
