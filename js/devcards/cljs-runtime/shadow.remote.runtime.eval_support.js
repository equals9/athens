goog.provide('shadow.remote.runtime.eval_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.eval_support.obj_support_inst = null;
shadow.remote.runtime.eval_support.get_ref = (function shadow$remote$runtime$eval_support$get_ref(oid){
if(cljs.core.truth_(shadow.remote.runtime.eval_support.obj_support_inst)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("obj-support not bound, can only call this from eval",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}

return shadow.remote.runtime.obj_support.get_ref(shadow.remote.runtime.eval_support.obj_support_inst,oid);
});
shadow.remote.runtime.eval_support.eval_cljs = (function shadow$remote$runtime$eval_support$eval_cljs(p__60533,msg){
var map__60534 = p__60533;
var map__60534__$1 = (((((!((map__60534 == null))))?(((((map__60534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60534):map__60534);
var svc = map__60534__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60534__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60534__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
(shadow.remote.runtime.eval_support.obj_support_inst = obj_support);

return runtime.eval_cljs(msg,(function (p__60536){
var map__60537 = p__60536;
var map__60537__$1 = (((((!((map__60537 == null))))?(((((map__60537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60537):map__60537);
var result = map__60537__$1;
var eval_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"eval-results","eval-results",553789722));
(shadow.remote.runtime.eval_support.obj_support_inst = null);

console.log("eval-cljs result",result);

var seq__60539 = cljs.core.seq(eval_results);
var chunk__60540 = null;
var count__60541 = (0);
var i__60542 = (0);
while(true){
if((i__60542 < count__60541)){
var map__60547 = chunk__60540.cljs$core$IIndexed$_nth$arity$2(null,i__60542);
var map__60547__$1 = (((((!((map__60547 == null))))?(((((map__60547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60547):map__60547);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60547__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_60563 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_60563], null));
}


var G__60564 = seq__60539;
var G__60565 = chunk__60540;
var G__60566 = count__60541;
var G__60567 = (i__60542 + (1));
seq__60539 = G__60564;
chunk__60540 = G__60565;
count__60541 = G__60566;
i__60542 = G__60567;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60539);
if(temp__5735__auto__){
var seq__60539__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60539__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60539__$1);
var G__60568 = cljs.core.chunk_rest(seq__60539__$1);
var G__60569 = c__4609__auto__;
var G__60570 = cljs.core.count(c__4609__auto__);
var G__60571 = (0);
seq__60539 = G__60568;
chunk__60540 = G__60569;
count__60541 = G__60570;
i__60542 = G__60571;
continue;
} else {
var map__60549 = cljs.core.first(seq__60539__$1);
var map__60549__$1 = (((((!((map__60549 == null))))?(((((map__60549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60549):map__60549);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60549__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_60572 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_60572], null));
}


var G__60573 = cljs.core.next(seq__60539__$1);
var G__60574 = null;
var G__60575 = (0);
var G__60576 = (0);
seq__60539 = G__60573;
chunk__60540 = G__60574;
count__60541 = G__60575;
i__60542 = G__60576;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
shadow.remote.runtime.eval_support.eval_js = (function shadow$remote$runtime$eval_support$eval_js(p__60551,p__60552){
var map__60553 = p__60551;
var map__60553__$1 = (((((!((map__60553 == null))))?(((((map__60553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60553):map__60553);
var svc = map__60553__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60553__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60553__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__60554 = p__60552;
var map__60554__$1 = (((((!((map__60554 == null))))?(((((map__60554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60554):map__60554);
var msg = map__60554__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword(null,"code","code",1586293142));
try{var res = runtime.eval_js(code);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-code","js-code",1816578331),code], null));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid], null));
}catch (e60557){var e = e60557;
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-error","eval-error",466139568),new cljs.core.Keyword(null,"e","e",1381269198),e.message], null));
}});
shadow.remote.runtime.eval_support.start = (function shadow$remote$runtime$eval_support$start(runtime,obj_support){
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (p1__60558_SHARP_){
return shadow.remote.runtime.eval_support.eval_js(svc,p1__60558_SHARP_);
}),new cljs.core.Keyword(null,"eval-cljs","eval-cljs",-119543019),(function (p1__60559_SHARP_){
return shadow.remote.runtime.eval_support.eval_cljs(svc,p1__60559_SHARP_);
})], null)], null));

return svc;
});
shadow.remote.runtime.eval_support.stop = (function shadow$remote$runtime$eval_support$stop(p__60560){
var map__60561 = p__60560;
var map__60561__$1 = (((((!((map__60561 == null))))?(((((map__60561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60561):map__60561);
var svc = map__60561__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625));
});

//# sourceMappingURL=shadow.remote.runtime.eval_support.js.map
