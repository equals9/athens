goog.provide('athens.devcards.block_page');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.router');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('posh.reagent');
athens.devcards.block_page.datoms = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2381),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"OaSVyM_nr",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("node","title","node/title",628940777),"Athens FAQ",new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2158),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"BjIm6GeRP",new cljs.core.Keyword("block","string","block/string",-2066596447),"Why open-source?",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(3),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2163),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"GNaf3XzpE",new cljs.core.Keyword("block","string","block/string",-2066596447),"The short answer is the security and privacy of your data.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(1)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2347),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"jbiKpcmIX",new cljs.core.Keyword("block","string","block/string",-2066596447),"Firstly, I wouldn't be surprised if Roam was eventually open-sourced.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2176),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"gVINXaN8Y",new cljs.core.Keyword("block","string","block/string",-2066596447),"Suffice it to say that Roam being open-source is undeniably something that the team has already considered. Why is it not open-source already? You'd have to ask the Roam team, but Roam, a business, is not obligated to open-source anything.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(2)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2346),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"ZOxwo0K_7",new cljs.core.Keyword("block","string","block/string",-2066596447),"The conclusion of the [[Roam White Paper]] states that Roam's vision is a collective, \"open-source\" intelligence.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2174),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"WKWPPSYQa",new cljs.core.Keyword("block","string","block/string",-2066596447),"((iWmBJaChO))",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2349),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"VQ-ybRmNh",new cljs.core.Keyword("block","string","block/string",-2066596447),"In the Roam Slack, I recall Conor saying one eventual goal is to work on a protocol that affords interoperability between open source alternatives. I would share the message but can't find it because of Slack's 10k message limit.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(1)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2351),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"PGGS8MFH_",new cljs.core.Keyword("block","string","block/string",-2066596447),"Ultimately, we don't know when/if Roam will be open-sourced, but it's possible that Athens could accelerate or catalyze this. Regardless, there will always be some who are open-source maximalists and some who want to self-host, because that's probably really the most secure thing you can do (if you know what you're doing).",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(3)], null)], null)], null)], null)], null)], null)], null)], null);
(posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,athens.devcards.block_page.datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,athens.devcards.block_page.datoms));
athens.devcards.block_page.block_page_el = (function athens$devcards$block_page$block_page_el(block,parents){
var map__65542 = block;
var map__65542__$1 = (((((!((map__65542 == null))))?(((((map__65542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65542):map__65542);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65542__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65542__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" > ",(function (){var iter__4582__auto__ = (function athens$devcards$block_page$block_page_el_$_iter__65544(s__65545){
return (new cljs.core.LazySeq(null,(function (){
var s__65545__$1 = s__65545;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65545__$1);
if(temp__5735__auto__){
var s__65545__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65545__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65545__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65547 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65546 = (0);
while(true){
if((i__65546 < size__4581__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65546);
cljs.core.chunk_append(b__65547,(function (){var map__65548 = p;
var map__65548__$1 = (((((!((map__65548 == null))))?(((((map__65548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65548):map__65548);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65548__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65548__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65548__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),uid,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65546,map__65548,map__65548__$1,title,uid,string__$1,p,c__4580__auto__,size__4581__auto__,b__65547,s__65545__$2,temp__5735__auto__,map__65542,map__65542__$1,string,children){
return (function (){
return athens.router.navigate_uid(uid);
});})(i__65546,map__65548,map__65548__$1,title,uid,string__$1,p,c__4580__auto__,size__4581__auto__,b__65547,s__65545__$2,temp__5735__auto__,map__65542,map__65542__$1,string,children))
], null),(function (){var or__4185__auto__ = string__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null);
})());

var G__65562 = (i__65546 + (1));
i__65546 = G__65562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65547),athens$devcards$block_page$block_page_el_$_iter__65544(cljs.core.chunk_rest(s__65545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65547),null);
}
} else {
var p = cljs.core.first(s__65545__$2);
return cljs.core.cons((function (){var map__65550 = p;
var map__65550__$1 = (((((!((map__65550 == null))))?(((((map__65550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65550):map__65550);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65550__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65550__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65550__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),uid,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65550,map__65550__$1,title,uid,string__$1,p,s__65545__$2,temp__5735__auto__,map__65542,map__65542__$1,string,children){
return (function (){
return athens.router.navigate_uid(uid);
});})(map__65550,map__65550__$1,title,uid,string__$1,p,s__65545__$2,temp__5735__auto__,map__65542,map__65542__$1,string,children))
], null),(function (){var or__4185__auto__ = string__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null);
})(),athens$devcards$block_page$block_page_el_$_iter__65544(cljs.core.rest(s__65545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parents);
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$block_page$block_page_el_$_iter__65552(s__65553){
return (new cljs.core.LazySeq(null,(function (){
var s__65553__$1 = s__65553;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65553__$1);
if(temp__5735__auto__){
var s__65553__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65553__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65553__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65555 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65554 = (0);
while(true){
if((i__65554 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65554);
cljs.core.chunk_append(b__65555,(function (){var map__65556 = child;
var map__65556__$1 = (((((!((map__65556 == null))))?(((((map__65556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65556):map__65556);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65556__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__65563 = (i__65554 + (1));
i__65554 = G__65563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65555),athens$devcards$block_page$block_page_el_$_iter__65552(cljs.core.chunk_rest(s__65553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65555),null);
}
} else {
var child = cljs.core.first(s__65553__$2);
return cljs.core.cons((function (){var map__65559 = child;
var map__65559__$1 = (((((!((map__65559 == null))))?(((((map__65559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65559):map__65559);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65559__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),athens$devcards$block_page$block_page_el_$_iter__65552(cljs.core.rest(s__65553__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)], null);
});
/**
 * 
 */
athens.devcards.block_page.block_page_component = (function athens$devcards$block_page$block_page_component(ident){
var block = cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.block_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.block_pull_pattern,ident)));
var parents = athens.db.shape_parent_query(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.parents_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.parents_pull_pattern,ident))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block_page.block_page_el,block,parents], null);
});

//# sourceMappingURL=athens.devcards.block_page.js.map
