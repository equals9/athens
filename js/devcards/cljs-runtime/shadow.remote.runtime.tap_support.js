goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60892,p__60893){
var map__60894 = p__60892;
var map__60894__$1 = (((((!((map__60894 == null))))?(((((map__60894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60894):map__60894);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60894__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60895 = p__60893;
var map__60895__$1 = (((((!((map__60895 == null))))?(((((map__60895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60895):map__60895);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60898,p__60899){
var map__60900 = p__60898;
var map__60900__$1 = (((((!((map__60900 == null))))?(((((map__60900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60900):map__60900);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60900__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60901 = p__60899;
var map__60901__$1 = (((((!((map__60901 == null))))?(((((map__60901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60901):map__60901);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60906,p__60907){
var map__60908 = p__60906;
var map__60908__$1 = (((((!((map__60908 == null))))?(((((map__60908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60908):map__60908);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60909 = p__60907;
var map__60909__$1 = (((((!((map__60909 == null))))?(((((map__60909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60909):map__60909);
var msg = map__60909__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60909__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60912 = obj_support;
var map__60912__$1 = (((((!((map__60912 == null))))?(((((map__60912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60912):map__60912);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60912__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60905_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60905_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60904_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60904_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60914,tid){
var map__60915 = p__60914;
var map__60915__$1 = (((((!((map__60915 == null))))?(((((map__60915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60915):map__60915);
var svc = map__60915__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60915__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60921 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60922 = null;
var count__60923 = (0);
var i__60924 = (0);
while(true){
if((i__60924 < count__60923)){
var tid = chunk__60922.cljs$core$IIndexed$_nth$arity$2(null,i__60924);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60928 = seq__60921;
var G__60929 = chunk__60922;
var G__60930 = count__60923;
var G__60931 = (i__60924 + (1));
seq__60921 = G__60928;
chunk__60922 = G__60929;
count__60923 = G__60930;
i__60924 = G__60931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60921);
if(temp__5735__auto__){
var seq__60921__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60921__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60921__$1);
var G__60932 = cljs.core.chunk_rest(seq__60921__$1);
var G__60933 = c__4609__auto__;
var G__60934 = cljs.core.count(c__4609__auto__);
var G__60935 = (0);
seq__60921 = G__60932;
chunk__60922 = G__60933;
count__60923 = G__60934;
i__60924 = G__60935;
continue;
} else {
var tid = cljs.core.first(seq__60921__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60936 = cljs.core.next(seq__60921__$1);
var G__60937 = null;
var G__60938 = (0);
var G__60939 = (0);
seq__60921 = G__60936;
chunk__60922 = G__60937;
count__60923 = G__60938;
i__60924 = G__60939;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60917_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60917_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60918_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60918_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60919_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60919_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60920_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60920_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60925){
var map__60926 = p__60925;
var map__60926__$1 = (((((!((map__60926 == null))))?(((((map__60926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60926):map__60926);
var svc = map__60926__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60926__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60926__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
