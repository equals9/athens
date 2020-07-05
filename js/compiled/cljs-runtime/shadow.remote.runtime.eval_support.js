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
shadow.remote.runtime.eval_support.eval_cljs = (function shadow$remote$runtime$eval_support$eval_cljs(p__68310,msg){
var map__68311 = p__68310;
var map__68311__$1 = (((((!((map__68311 == null))))?(((((map__68311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68311):map__68311);
var svc = map__68311__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68311__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68311__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
(shadow.remote.runtime.eval_support.obj_support_inst = obj_support);

return runtime.eval_cljs(msg,(function (p__68313){
var map__68314 = p__68313;
var map__68314__$1 = (((((!((map__68314 == null))))?(((((map__68314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68314):map__68314);
var result = map__68314__$1;
var eval_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"eval-results","eval-results",553789722));
(shadow.remote.runtime.eval_support.obj_support_inst = null);

console.log("eval-cljs result",result);

var seq__68316 = cljs.core.seq(eval_results);
var chunk__68317 = null;
var count__68318 = (0);
var i__68319 = (0);
while(true){
if((i__68319 < count__68318)){
var map__68324 = chunk__68317.cljs$core$IIndexed$_nth$arity$2(null,i__68319);
var map__68324__$1 = (((((!((map__68324 == null))))?(((((map__68324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68324):map__68324);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68324__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_68343 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_68343], null));
}


var G__68344 = seq__68316;
var G__68345 = chunk__68317;
var G__68346 = count__68318;
var G__68347 = (i__68319 + (1));
seq__68316 = G__68344;
chunk__68317 = G__68345;
count__68318 = G__68346;
i__68319 = G__68347;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68316);
if(temp__5735__auto__){
var seq__68316__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68316__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68316__$1);
var G__68348 = cljs.core.chunk_rest(seq__68316__$1);
var G__68349 = c__4609__auto__;
var G__68350 = cljs.core.count(c__4609__auto__);
var G__68351 = (0);
seq__68316 = G__68348;
chunk__68317 = G__68349;
count__68318 = G__68350;
i__68319 = G__68351;
continue;
} else {
var map__68326 = cljs.core.first(seq__68316__$1);
var map__68326__$1 = (((((!((map__68326 == null))))?(((((map__68326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68326):map__68326);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68326__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_68352 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_68352], null));
}


var G__68353 = cljs.core.next(seq__68316__$1);
var G__68354 = null;
var G__68355 = (0);
var G__68356 = (0);
seq__68316 = G__68353;
chunk__68317 = G__68354;
count__68318 = G__68355;
i__68319 = G__68356;
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
shadow.remote.runtime.eval_support.eval_js = (function shadow$remote$runtime$eval_support$eval_js(p__68328,p__68329){
var map__68330 = p__68328;
var map__68330__$1 = (((((!((map__68330 == null))))?(((((map__68330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68330):map__68330);
var svc = map__68330__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68330__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68330__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__68331 = p__68329;
var map__68331__$1 = (((((!((map__68331 == null))))?(((((map__68331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68331):map__68331);
var msg = map__68331__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68331__$1,new cljs.core.Keyword(null,"code","code",1586293142));
try{var res = runtime.eval_js(code);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-code","js-code",1816578331),code], null));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid], null));
}catch (e68335){var e = e68335;
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-error","eval-error",466139568),new cljs.core.Keyword(null,"e","e",1381269198),e.message], null));
}});
shadow.remote.runtime.eval_support.start = (function shadow$remote$runtime$eval_support$start(runtime,obj_support){
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (p1__68338_SHARP_){
return shadow.remote.runtime.eval_support.eval_js(svc,p1__68338_SHARP_);
}),new cljs.core.Keyword(null,"eval-cljs","eval-cljs",-119543019),(function (p1__68339_SHARP_){
return shadow.remote.runtime.eval_support.eval_cljs(svc,p1__68339_SHARP_);
})], null)], null));

return svc;
});
shadow.remote.runtime.eval_support.stop = (function shadow$remote$runtime$eval_support$stop(p__68340){
var map__68341 = p__68340;
var map__68341__$1 = (((((!((map__68341 == null))))?(((((map__68341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68341):map__68341);
var svc = map__68341__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625));
});

//# sourceMappingURL=shadow.remote.runtime.eval_support.js.map
