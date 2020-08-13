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
shadow.remote.runtime.eval_support.eval_cljs = (function shadow$remote$runtime$eval_support$eval_cljs(p__59995,msg){
var map__59996 = p__59995;
var map__59996__$1 = (((((!((map__59996 == null))))?(((((map__59996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59996):map__59996);
var svc = map__59996__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
(shadow.remote.runtime.eval_support.obj_support_inst = obj_support);

return runtime.eval_cljs(msg,(function (p__59998){
var map__59999 = p__59998;
var map__59999__$1 = (((((!((map__59999 == null))))?(((((map__59999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59999):map__59999);
var result = map__59999__$1;
var eval_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59999__$1,new cljs.core.Keyword(null,"eval-results","eval-results",553789722));
(shadow.remote.runtime.eval_support.obj_support_inst = null);

console.log("eval-cljs result",result);

var seq__60001 = cljs.core.seq(eval_results);
var chunk__60002 = null;
var count__60003 = (0);
var i__60004 = (0);
while(true){
if((i__60004 < count__60003)){
var map__60009 = chunk__60002.cljs$core$IIndexed$_nth$arity$2(null,i__60004);
var map__60009__$1 = (((((!((map__60009 == null))))?(((((map__60009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60009):map__60009);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60009__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_60025 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_60025], null));
}


var G__60026 = seq__60001;
var G__60027 = chunk__60002;
var G__60028 = count__60003;
var G__60029 = (i__60004 + (1));
seq__60001 = G__60026;
chunk__60002 = G__60027;
count__60003 = G__60028;
i__60004 = G__60029;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60001);
if(temp__5735__auto__){
var seq__60001__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60001__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60001__$1);
var G__60030 = cljs.core.chunk_rest(seq__60001__$1);
var G__60031 = c__4556__auto__;
var G__60032 = cljs.core.count(c__4556__auto__);
var G__60033 = (0);
seq__60001 = G__60030;
chunk__60002 = G__60031;
count__60003 = G__60032;
i__60004 = G__60033;
continue;
} else {
var map__60011 = cljs.core.first(seq__60001__$1);
var map__60011__$1 = (((((!((map__60011 == null))))?(((((map__60011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60011):map__60011);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_60034 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_60034], null));
}


var G__60035 = cljs.core.next(seq__60001__$1);
var G__60036 = null;
var G__60037 = (0);
var G__60038 = (0);
seq__60001 = G__60035;
chunk__60002 = G__60036;
count__60003 = G__60037;
i__60004 = G__60038;
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
shadow.remote.runtime.eval_support.eval_js = (function shadow$remote$runtime$eval_support$eval_js(p__60013,p__60014){
var map__60015 = p__60013;
var map__60015__$1 = (((((!((map__60015 == null))))?(((((map__60015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60015):map__60015);
var svc = map__60015__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__60016 = p__60014;
var map__60016__$1 = (((((!((map__60016 == null))))?(((((map__60016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60016):map__60016);
var msg = map__60016__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"code","code",1586293142));
try{var res = runtime.eval_js(code);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-code","js-code",1816578331),code], null));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid], null));
}catch (e60019){var e = e60019;
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-error","eval-error",466139568),new cljs.core.Keyword(null,"e","e",1381269198),e.message], null));
}});
shadow.remote.runtime.eval_support.start = (function shadow$remote$runtime$eval_support$start(runtime,obj_support){
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (p1__60020_SHARP_){
return shadow.remote.runtime.eval_support.eval_js(svc,p1__60020_SHARP_);
}),new cljs.core.Keyword(null,"eval-cljs","eval-cljs",-119543019),(function (p1__60021_SHARP_){
return shadow.remote.runtime.eval_support.eval_cljs(svc,p1__60021_SHARP_);
})], null)], null));

return svc;
});
shadow.remote.runtime.eval_support.stop = (function shadow$remote$runtime$eval_support$stop(p__60022){
var map__60023 = p__60022;
var map__60023__$1 = (((((!((map__60023 == null))))?(((((map__60023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60023):map__60023);
var svc = map__60023__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625));
});

//# sourceMappingURL=shadow.remote.runtime.eval_support.js.map
