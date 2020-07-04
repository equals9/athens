goog.provide('athens.devcards.daily_notes');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.node_page');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
goog.require('tick.locale_en_us');
athens.devcards.daily_notes.US_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("MM-dd-yyyy");
athens.devcards.daily_notes.title_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy");
athens.devcards.daily_notes.date_string = (function athens$devcards$daily_notes$date_string(ts){
if((ts < (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(unknown date)"], null);
} else {
var x = (new Date(ts));
var x__$1 = tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1(x);
var x__$2 = tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1(x__$1);
var x__$3 = tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL MM, yyyy h':'ma"),x__$2);
var x__$4 = clojure.string.replace(x__$3,/AM/,"am");
return clojure.string.replace(x__$4,/PM/,"pm");
}
});
/**
 * Returns today's date or a date OFFSET days before today
 */
athens.devcards.daily_notes.get_day = (function athens$devcards$daily_notes$get_day(var_args){
var G__65915 = arguments.length;
switch (G__65915) {
case 0:
return athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$0 = (function (){
return athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1((0));
}));

(athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1 = (function (offset){
var day = tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(offset,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.devcards.daily_notes.US_format,day),new cljs.core.Keyword(null,"title","title",636505583),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.devcards.daily_notes.title_format,day)], null);
}));

(athens.devcards.daily_notes.get_day.cljs$lang$maxFixedArity = 1);

athens.devcards.daily_notes.scroll_daily_notes = (function athens$devcards$daily_notes$scroll_daily_notes(e){
var daily_notes = cljs.core.deref((function (){var G__65916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily-notes","daily-notes",302751021)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65916) : re_frame.core.subscribe.call(null,G__65916));
})());
var main_content = document.getElementById("main-content");
var client_height = main_content.clientHeight;
var scroll_top = main_content.scrollTop;
var ratio = (client_height / scroll_top);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([client_height,scroll_top,ratio], 0));

if((ratio <= (30))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DISPATCH"], 0));

var G__65917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-daily-note","next-daily-note",557965411),athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$1(cljs.core.count(daily_notes))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65917) : re_frame.core.dispatch.call(null,G__65917));
} else {
return null;
}
});
athens.devcards.daily_notes.db_scroll_daily_notes = goog.functions.debounce(athens.devcards.daily_notes.scroll_daily_notes,(500));
athens.devcards.daily_notes.daily_notes_panel = (function athens$devcards$daily_notes$daily_notes_panel(){
var note_refs = (function (){var G__65918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily-notes","daily-notes",302751021)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65918) : re_frame.core.subscribe.call(null,G__65918));
})();
if(cljs.core.empty_QMARK_(cljs.core.deref(note_refs))){
var G__65919_65933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-daily-note","next-daily-note",557965411),athens.devcards.daily_notes.get_day.cljs$core$IFn$_invoke$arity$0()], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65919_65933) : re_frame.core.dispatch.call(null,G__65919_65933));
} else {
}

return (function (){
var notes = (function (){var G__65920 = athens.db.dsdb;
var G__65921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__65922 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),x], null);
}),cljs.core.deref(note_refs));
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__65920,G__65921,G__65922) : posh.reagent.pull_many.call(null,G__65920,G__65921,G__65922));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daily-notes","div.daily-notes",16953857),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"110vh"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),(function (x){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hi",x], 0));
})], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$daily_notes$daily_notes_panel_$_iter__65923(s__65924){
return (new cljs.core.LazySeq(null,(function (){
var s__65924__$1 = s__65924;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65924__$1);
if(temp__5735__auto__){
var s__65924__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65924__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65924__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65926 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65925 = (0);
while(true){
if((i__65925 < size__4581__auto__)){
var map__65927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65925);
var map__65927__$1 = (((((!((map__65927 == null))))?(((((map__65927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65927):map__65927);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65927__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65927__$1,new cljs.core.Keyword("node","title","node/title",628940777));
cljs.core.chunk_append(b__65926,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"550px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__65934 = (i__65925 + (1));
i__65925 = G__65934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65926),athens$devcards$daily_notes$daily_notes_panel_$_iter__65923(cljs.core.chunk_rest(s__65924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65926),null);
}
} else {
var map__65930 = cljs.core.first(s__65924__$2);
var map__65930__$1 = (((((!((map__65930 == null))))?(((((map__65930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65930):map__65930);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("node","title","node/title",628940777));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"550px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$daily_notes$daily_notes_panel_$_iter__65923(cljs.core.rest(s__65924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(notes));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)),"Preview"], null)], null)], null);
});
});

//# sourceMappingURL=athens.devcards.daily_notes.js.map
