goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60492,p__60493){
var map__60494 = p__60492;
var map__60494__$1 = (((((!((map__60494 == null))))?(((((map__60494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60494):map__60494);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60494__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60495 = p__60493;
var map__60495__$1 = (((((!((map__60495 == null))))?(((((map__60495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60495):map__60495);
var msg = map__60495__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60498,p__60499){
var map__60500 = p__60498;
var map__60500__$1 = (((((!((map__60500 == null))))?(((((map__60500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60500):map__60500);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60500__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60501 = p__60499;
var map__60501__$1 = (((((!((map__60501 == null))))?(((((map__60501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60501):map__60501);
var msg = map__60501__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60504 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60506 = null;
var count__60507 = (0);
var i__60508 = (0);
while(true){
if((i__60508 < count__60507)){
var map__60514 = chunk__60506.cljs$core$IIndexed$_nth$arity$2(null,i__60508);
var map__60514__$1 = (((((!((map__60514 == null))))?(((((map__60514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60514):map__60514);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60514__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60561 = seq__60504;
var G__60562 = chunk__60506;
var G__60563 = count__60507;
var G__60564 = (i__60508 + (1));
seq__60504 = G__60561;
chunk__60506 = G__60562;
count__60507 = G__60563;
i__60508 = G__60564;
continue;
} else {
var G__60565 = seq__60504;
var G__60566 = chunk__60506;
var G__60567 = count__60507;
var G__60568 = (i__60508 + (1));
seq__60504 = G__60565;
chunk__60506 = G__60566;
count__60507 = G__60567;
i__60508 = G__60568;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60504);
if(temp__5735__auto__){
var seq__60504__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60504__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60504__$1);
var G__60569 = cljs.core.chunk_rest(seq__60504__$1);
var G__60570 = c__4609__auto__;
var G__60571 = cljs.core.count(c__4609__auto__);
var G__60572 = (0);
seq__60504 = G__60569;
chunk__60506 = G__60570;
count__60507 = G__60571;
i__60508 = G__60572;
continue;
} else {
var map__60516 = cljs.core.first(seq__60504__$1);
var map__60516__$1 = (((((!((map__60516 == null))))?(((((map__60516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60516):map__60516);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60516__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60573 = cljs.core.next(seq__60504__$1);
var G__60574 = null;
var G__60575 = (0);
var G__60576 = (0);
seq__60504 = G__60573;
chunk__60506 = G__60574;
count__60507 = G__60575;
i__60508 = G__60576;
continue;
} else {
var G__60577 = cljs.core.next(seq__60504__$1);
var G__60578 = null;
var G__60579 = (0);
var G__60580 = (0);
seq__60504 = G__60577;
chunk__60506 = G__60578;
count__60507 = G__60579;
i__60508 = G__60580;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60518,msg){
var map__60519 = p__60518;
var map__60519__$1 = (((((!((map__60519 == null))))?(((((map__60519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60519):map__60519);
var runtime = map__60519__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60521,key,p__60522){
var map__60523 = p__60521;
var map__60523__$1 = (((((!((map__60523 == null))))?(((((map__60523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60523):map__60523);
var state = map__60523__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60523__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60524 = p__60522;
var map__60524__$1 = (((((!((map__60524 == null))))?(((((map__60524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60524):map__60524);
var spec = map__60524__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60524__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60527,key,spec){
var map__60528 = p__60527;
var map__60528__$1 = (((((!((map__60528 == null))))?(((((map__60528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60528):map__60528);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60535){
var map__60536 = p__60535;
var map__60536__$1 = (((((!((map__60536 == null))))?(((((map__60536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60536):map__60536);
var runtime = map__60536__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60536__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60530_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60530_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60531_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60531_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60532_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60532_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60533_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60533_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60534_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60534_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60538,key){
var map__60539 = p__60538;
var map__60539__$1 = (((((!((map__60539 == null))))?(((((map__60539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60539):map__60539);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60539__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60541,p__60542){
var map__60543 = p__60541;
var map__60543__$1 = (((((!((map__60543 == null))))?(((((map__60543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60543):map__60543);
var runtime = map__60543__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60543__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60544 = p__60542;
var map__60544__$1 = (((((!((map__60544 == null))))?(((((map__60544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60544):map__60544);
var msg = map__60544__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60547 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60549 = null;
var count__60550 = (0);
var i__60551 = (0);
while(true){
if((i__60551 < count__60550)){
var map__60557 = chunk__60549.cljs$core$IIndexed$_nth$arity$2(null,i__60551);
var map__60557__$1 = (((((!((map__60557 == null))))?(((((map__60557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60557):map__60557);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60557__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60581 = seq__60547;
var G__60582 = chunk__60549;
var G__60583 = count__60550;
var G__60584 = (i__60551 + (1));
seq__60547 = G__60581;
chunk__60549 = G__60582;
count__60550 = G__60583;
i__60551 = G__60584;
continue;
} else {
var G__60585 = seq__60547;
var G__60586 = chunk__60549;
var G__60587 = count__60550;
var G__60588 = (i__60551 + (1));
seq__60547 = G__60585;
chunk__60549 = G__60586;
count__60550 = G__60587;
i__60551 = G__60588;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60547);
if(temp__5735__auto__){
var seq__60547__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60547__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60547__$1);
var G__60589 = cljs.core.chunk_rest(seq__60547__$1);
var G__60590 = c__4609__auto__;
var G__60591 = cljs.core.count(c__4609__auto__);
var G__60592 = (0);
seq__60547 = G__60589;
chunk__60549 = G__60590;
count__60550 = G__60591;
i__60551 = G__60592;
continue;
} else {
var map__60559 = cljs.core.first(seq__60547__$1);
var map__60559__$1 = (((((!((map__60559 == null))))?(((((map__60559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60559):map__60559);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60559__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60593 = cljs.core.next(seq__60547__$1);
var G__60594 = null;
var G__60595 = (0);
var G__60596 = (0);
seq__60547 = G__60593;
chunk__60549 = G__60594;
count__60550 = G__60595;
i__60551 = G__60596;
continue;
} else {
var G__60597 = cljs.core.next(seq__60547__$1);
var G__60598 = null;
var G__60599 = (0);
var G__60600 = (0);
seq__60547 = G__60597;
chunk__60549 = G__60598;
count__60550 = G__60599;
i__60551 = G__60600;
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
