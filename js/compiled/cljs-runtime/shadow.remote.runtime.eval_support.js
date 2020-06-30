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
shadow.remote.runtime.eval_support.eval_cljs = (function shadow$remote$runtime$eval_support$eval_cljs(p__67981,msg){
var map__67982 = p__67981;
var map__67982__$1 = (((((!((map__67982 == null))))?(((((map__67982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67982):map__67982);
var svc = map__67982__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67982__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67982__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
(shadow.remote.runtime.eval_support.obj_support_inst = obj_support);

return runtime.eval_cljs(msg,(function (p__67984){
var map__67985 = p__67984;
var map__67985__$1 = (((((!((map__67985 == null))))?(((((map__67985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67985):map__67985);
var result = map__67985__$1;
var eval_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67985__$1,new cljs.core.Keyword(null,"eval-results","eval-results",553789722));
(shadow.remote.runtime.eval_support.obj_support_inst = null);

console.log("eval-cljs result",result);

var seq__67987 = cljs.core.seq(eval_results);
var chunk__67988 = null;
var count__67989 = (0);
var i__67990 = (0);
while(true){
if((i__67990 < count__67989)){
var map__67995 = chunk__67988.cljs$core$IIndexed$_nth$arity$2(null,i__67990);
var map__67995__$1 = (((((!((map__67995 == null))))?(((((map__67995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67995):map__67995);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_68031 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_68031], null));
}


var G__68032 = seq__67987;
var G__68033 = chunk__67988;
var G__68034 = count__67989;
var G__68035 = (i__67990 + (1));
seq__67987 = G__68032;
chunk__67988 = G__68033;
count__67989 = G__68034;
i__67990 = G__68035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67987);
if(temp__5735__auto__){
var seq__67987__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67987__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67987__$1);
var G__68036 = cljs.core.chunk_rest(seq__67987__$1);
var G__68037 = c__4609__auto__;
var G__68038 = cljs.core.count(c__4609__auto__);
var G__68039 = (0);
seq__67987 = G__68036;
chunk__67988 = G__68037;
count__67989 = G__68038;
i__67990 = G__68039;
continue;
} else {
var map__67997 = cljs.core.first(seq__67987__$1);
var map__67997__$1 = (((((!((map__67997 == null))))?(((((map__67997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67997):map__67997);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67997__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_68040 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_68040], null));
}


var G__68041 = cljs.core.next(seq__67987__$1);
var G__68042 = null;
var G__68043 = (0);
var G__68044 = (0);
seq__67987 = G__68041;
chunk__67988 = G__68042;
count__67989 = G__68043;
i__67990 = G__68044;
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
shadow.remote.runtime.eval_support.eval_js = (function shadow$remote$runtime$eval_support$eval_js(p__67999,p__68000){
var map__68001 = p__67999;
var map__68001__$1 = (((((!((map__68001 == null))))?(((((map__68001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68001):map__68001);
var svc = map__68001__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__68002 = p__68000;
var map__68002__$1 = (((((!((map__68002 == null))))?(((((map__68002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68002):map__68002);
var msg = map__68002__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68002__$1,new cljs.core.Keyword(null,"code","code",1586293142));
try{var res = runtime.eval_js(code);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-code","js-code",1816578331),code], null));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid], null));
}catch (e68013){var e = e68013;
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-error","eval-error",466139568),new cljs.core.Keyword(null,"e","e",1381269198),e.message], null));
}});
shadow.remote.runtime.eval_support.start = (function shadow$remote$runtime$eval_support$start(runtime,obj_support){
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (p1__68018_SHARP_){
return shadow.remote.runtime.eval_support.eval_js(svc,p1__68018_SHARP_);
}),new cljs.core.Keyword(null,"eval-cljs","eval-cljs",-119543019),(function (p1__68019_SHARP_){
return shadow.remote.runtime.eval_support.eval_cljs(svc,p1__68019_SHARP_);
})], null)], null));

return svc;
});
shadow.remote.runtime.eval_support.stop = (function shadow$remote$runtime$eval_support$stop(p__68028){
var map__68029 = p__68028;
var map__68029__$1 = (((((!((map__68029 == null))))?(((((map__68029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68029):map__68029);
var svc = map__68029__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68029__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625));
});

//# sourceMappingURL=shadow.remote.runtime.eval_support.js.map
