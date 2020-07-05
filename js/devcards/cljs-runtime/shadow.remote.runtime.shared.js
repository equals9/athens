goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60535,p__60536){
var map__60537 = p__60535;
var map__60537__$1 = (((((!((map__60537 == null))))?(((((map__60537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60537):map__60537);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60538 = p__60536;
var map__60538__$1 = (((((!((map__60538 == null))))?(((((map__60538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60538):map__60538);
var msg = map__60538__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60538__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60541,p__60542){
var map__60543 = p__60541;
var map__60543__$1 = (((((!((map__60543 == null))))?(((((map__60543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60543):map__60543);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60543__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60544 = p__60542;
var map__60544__$1 = (((((!((map__60544 == null))))?(((((map__60544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60544):map__60544);
var msg = map__60544__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60547 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60549 = null;
var count__60550 = (0);
var i__60551 = (0);
while(true){
if((i__60551 < count__60550)){
var map__60557 = chunk__60549.cljs$core$IIndexed$_nth$arity$2(null,i__60551);
var map__60557__$1 = (((((!((map__60557 == null))))?(((((map__60557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60557):map__60557);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60557__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60604 = seq__60547;
var G__60605 = chunk__60549;
var G__60606 = count__60550;
var G__60607 = (i__60551 + (1));
seq__60547 = G__60604;
chunk__60549 = G__60605;
count__60550 = G__60606;
i__60551 = G__60607;
continue;
} else {
var G__60608 = seq__60547;
var G__60609 = chunk__60549;
var G__60610 = count__60550;
var G__60611 = (i__60551 + (1));
seq__60547 = G__60608;
chunk__60549 = G__60609;
count__60550 = G__60610;
i__60551 = G__60611;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60547);
if(temp__5735__auto__){
var seq__60547__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60547__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60547__$1);
var G__60612 = cljs.core.chunk_rest(seq__60547__$1);
var G__60613 = c__4609__auto__;
var G__60614 = cljs.core.count(c__4609__auto__);
var G__60615 = (0);
seq__60547 = G__60612;
chunk__60549 = G__60613;
count__60550 = G__60614;
i__60551 = G__60615;
continue;
} else {
var map__60559 = cljs.core.first(seq__60547__$1);
var map__60559__$1 = (((((!((map__60559 == null))))?(((((map__60559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60559):map__60559);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60559__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60616 = cljs.core.next(seq__60547__$1);
var G__60617 = null;
var G__60618 = (0);
var G__60619 = (0);
seq__60547 = G__60616;
chunk__60549 = G__60617;
count__60550 = G__60618;
i__60551 = G__60619;
continue;
} else {
var G__60620 = cljs.core.next(seq__60547__$1);
var G__60621 = null;
var G__60622 = (0);
var G__60623 = (0);
seq__60547 = G__60620;
chunk__60549 = G__60621;
count__60550 = G__60622;
i__60551 = G__60623;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60561,msg){
var map__60562 = p__60561;
var map__60562__$1 = (((((!((map__60562 == null))))?(((((map__60562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60562):map__60562);
var runtime = map__60562__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60562__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60564,key,p__60565){
var map__60566 = p__60564;
var map__60566__$1 = (((((!((map__60566 == null))))?(((((map__60566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60566):map__60566);
var state = map__60566__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60566__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60567 = p__60565;
var map__60567__$1 = (((((!((map__60567 == null))))?(((((map__60567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60567):map__60567);
var spec = map__60567__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60567__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60570,key,spec){
var map__60571 = p__60570;
var map__60571__$1 = (((((!((map__60571 == null))))?(((((map__60571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60571):map__60571);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60578){
var map__60579 = p__60578;
var map__60579__$1 = (((((!((map__60579 == null))))?(((((map__60579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60579):map__60579);
var runtime = map__60579__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60573_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60573_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60574_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60574_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60575_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60575_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60576_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60576_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60577_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60577_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60581,key){
var map__60582 = p__60581;
var map__60582__$1 = (((((!((map__60582 == null))))?(((((map__60582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60582):map__60582);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60584,p__60585){
var map__60586 = p__60584;
var map__60586__$1 = (((((!((map__60586 == null))))?(((((map__60586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60586):map__60586);
var runtime = map__60586__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60586__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60587 = p__60585;
var map__60587__$1 = (((((!((map__60587 == null))))?(((((map__60587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60587):map__60587);
var msg = map__60587__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60587__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60590 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60592 = null;
var count__60593 = (0);
var i__60594 = (0);
while(true){
if((i__60594 < count__60593)){
var map__60600 = chunk__60592.cljs$core$IIndexed$_nth$arity$2(null,i__60594);
var map__60600__$1 = (((((!((map__60600 == null))))?(((((map__60600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60600):map__60600);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60600__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60624 = seq__60590;
var G__60625 = chunk__60592;
var G__60626 = count__60593;
var G__60627 = (i__60594 + (1));
seq__60590 = G__60624;
chunk__60592 = G__60625;
count__60593 = G__60626;
i__60594 = G__60627;
continue;
} else {
var G__60628 = seq__60590;
var G__60629 = chunk__60592;
var G__60630 = count__60593;
var G__60631 = (i__60594 + (1));
seq__60590 = G__60628;
chunk__60592 = G__60629;
count__60593 = G__60630;
i__60594 = G__60631;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60590);
if(temp__5735__auto__){
var seq__60590__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60590__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60590__$1);
var G__60632 = cljs.core.chunk_rest(seq__60590__$1);
var G__60633 = c__4609__auto__;
var G__60634 = cljs.core.count(c__4609__auto__);
var G__60635 = (0);
seq__60590 = G__60632;
chunk__60592 = G__60633;
count__60593 = G__60634;
i__60594 = G__60635;
continue;
} else {
var map__60602 = cljs.core.first(seq__60590__$1);
var map__60602__$1 = (((((!((map__60602 == null))))?(((((map__60602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60602):map__60602);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60636 = cljs.core.next(seq__60590__$1);
var G__60637 = null;
var G__60638 = (0);
var G__60639 = (0);
seq__60590 = G__60636;
chunk__60592 = G__60637;
count__60593 = G__60638;
i__60594 = G__60639;
continue;
} else {
var G__60640 = cljs.core.next(seq__60590__$1);
var G__60641 = null;
var G__60642 = (0);
var G__60643 = (0);
seq__60590 = G__60640;
chunk__60592 = G__60641;
count__60593 = G__60642;
i__60594 = G__60643;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
