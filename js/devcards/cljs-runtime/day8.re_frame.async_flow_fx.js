goog.provide('day8.re_frame.async_flow_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.set');
goog.require('day8.re_frame.forward_events_fx');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
day8.re_frame.async_flow_fx.dissoc_in = (function day8$re_frame$async_flow_fx$dissoc_in(m,p__61375){
var vec__61376 = p__61375;
var seq__61377 = cljs.core.seq(vec__61376);
var first__61378 = cljs.core.first(seq__61377);
var seq__61377__$1 = cljs.core.next(seq__61377);
var k = first__61378;
var ks = seq__61377__$1;
var keys = vec__61376;
if(ks){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = (day8.re_frame.async_flow_fx.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.async_flow_fx.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame.async_flow_fx.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
day8.re_frame.async_flow_fx.seen_all_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_all_of_QMARK_(required_events,seen_events){
var callback_preds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.forward_events_fx.as_callback_pred,required_events);
return cljs.core.every_QMARK_((function (pred){
return cljs.core.some(pred,seen_events);
}),callback_preds);
});
day8.re_frame.async_flow_fx.seen_any_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_any_of_QMARK_(required_events,seen_events){
var callback_preds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.forward_events_fx.as_callback_pred,required_events);
return (!((cljs.core.some((function (pred){
return cljs.core.some(pred,seen_events);
}),callback_preds) == null)));
});
/**
 * Given the accumulated set of seen events and the set of rules already started,
 *   return the list of rules which should now be started
 */
day8.re_frame.async_flow_fx.startable_rules = (function day8$re_frame$async_flow_fx$startable_rules(rules,now_seen_events,rules_fired){
return cljs.core.filterv((function (task){
var G__61380 = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(task);
var G__61381 = now_seen_events;
var fexpr__61379 = new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$1(task);
return (fexpr__61379.cljs$core$IFn$_invoke$arity$2 ? fexpr__61379.cljs$core$IFn$_invoke$arity$2(G__61380,G__61381) : fexpr__61379.call(null,G__61380,G__61381));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(rules_fired,new cljs.core.Keyword(null,"id","id",-1388402092)),rules));
});
day8.re_frame.async_flow_fx.map_when__GT_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-both?","seen-both?",-1396729677),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-all-of?","seen-all-of?",-651402557),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),day8.re_frame.async_flow_fx.seen_any_of_QMARK_], null);
day8.re_frame.async_flow_fx.when__GT_fn = (function day8$re_frame$async_flow_fx$when__GT_fn(when_kw){
var temp__5733__auto__ = (day8.re_frame.async_flow_fx.map_when__GT_fn.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame.async_flow_fx.map_when__GT_fn.cljs$core$IFn$_invoke$arity$1(when_kw) : day8.re_frame.async_flow_fx.map_when__GT_fn.call(null,when_kw));
if(cljs.core.truth_(temp__5733__auto__)){
var when_fn = temp__5733__auto__;
return when_fn;
} else {
var G__61382 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__61383 = "async-flow: got bad value for :when - ";
var G__61384 = when_kw;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__61382,G__61383,G__61384) : re_frame.core.console.call(null,G__61382,G__61383,G__61384));
}
});
/**
 * Massage the supplied rules as follows:
 *  - replace `:when` keyword value with a function implementing the predicate
 *  - ensure that only `:dispatch` or `:dispatch-n` is provided
 *  - add a unique :id, if one not already present
 */
day8.re_frame.async_flow_fx.massage_rules = (function day8$re_frame$async_flow_fx$massage_rules(rules){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__61385){
var map__61386 = p__61385;
var map__61386__$1 = (((((!((map__61386 == null))))?(((((map__61386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61386):map__61386);
var rule = map__61386__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
var halt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"halt?","halt?",-1110658247));
if(((1) < cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch,dispatch_n,dispatch_fn], null))))){
var G__61388 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__61389 = "async-flow: rule can only specify one of :dispatch, :dispatch-n and :dispatch-fn. Got more than one: ";
var G__61390 = rule;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__61388,G__61389,G__61390) : re_frame.core.console.call(null,G__61388,G__61389,G__61390));
} else {
var G__61391 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return index;
}
})(),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),(function (){var or__4185__auto__ = halt_QMARK_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"when","when",-576417306),day8.re_frame.async_flow_fx.when__GT_fn(when),new cljs.core.Keyword(null,"events","events",1792552201),((cljs.core.coll_QMARK_(events))?cljs.core.set(events):cljs.core.PersistentHashSet.createAsIfByAssoc([events]))], null);
var G__61391__$1 = (cljs.core.truth_(dispatch_fn)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61391,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),dispatch_fn):G__61391);
if(cljs.core.not(dispatch_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61391__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(cljs.core.truth_(dispatch_n)?dispatch_n:(cljs.core.truth_(dispatch)?(new cljs.core.List(null,dispatch,null,(1),null)):cljs.core.List.EMPTY
)));
} else {
return G__61391__$1;
}
}
}),rules);
});
day8.re_frame.async_flow_fx.rules__GT_dispatches = (function day8$re_frame$async_flow_fx$rules__GT_dispatches(rules,event){

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rule){
var map__61392 = rule;
var map__61392__$1 = (((((!((map__61392 == null))))?(((((map__61392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61392):map__61392);
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61392__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
var dispatch_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61392__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
if(cljs.core.truth_(dispatch_n)){
return dispatch_n;
} else {
if(cljs.core.truth_(dispatch_fn)){
var dispatch_n__$1 = (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(event) : dispatch_fn.call(null,event));
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,dispatch_n__$1)){
return dispatch_n__$1;
} else {
var G__61394 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__61395 = "async-flow: dispatch-fn must return a seq of events ";
var G__61396 = rule;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__61394,G__61395,G__61396) : re_frame.core.console.call(null,G__61394,G__61395,G__61396));
}
} else {
return cljs.core.List.EMPTY;

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
});
/**
 * Given a flow definition, returns an event handler which implements this definition
 */
day8.re_frame.async_flow_fx.make_flow_event_handler = (function day8$re_frame$async_flow_fx$make_flow_event_handler(p__61397){
var map__61398 = p__61397;
var map__61398__$1 = (((((!((map__61398 == null))))?(((((map__61398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61398):map__61398);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61398__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var db_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61398__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61398__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var first_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61398__$1,new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923));
var _ = (((((db_path == null)) || (cljs.core.vector_QMARK_(db_path))))?null:(function(){throw (new Error(["Assert failed: ","async-flow: db-path must be a vector","\n","(or (nil? db-path) (vector? db-path))"].join('')))})());
var local_store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var set_state = (cljs.core.truth_(db_path)?(function (db,seen,started){
return cljs.core.assoc_in(db,db_path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));
}):(function (db,seen,started){
cljs.core.reset_BANG_(local_store,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));

return db;
}));
var get_state = (cljs.core.truth_(db_path)?(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,db_path);
}):(function (___$1){
return cljs.core.deref(local_store);
}));
var rules__$1 = day8.re_frame.async_flow_fx.massage_rules(rules);
return (function day8$re_frame$async_flow_fx$make_flow_event_handler_$_async_flow_event_handler(p__61400,p__61401){
var map__61402 = p__61400;
var map__61402__$1 = (((((!((map__61402 == null))))?(((((map__61402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61402):map__61402);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61402__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61403 = p__61401;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61403,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61403,(1),null);
var event_v = vec__61403;
var pred__61407 = cljs.core._EQ_;
var expr__61408 = event_type;
if(cljs.core.truth_((function (){var G__61410 = new cljs.core.Keyword(null,"setup","setup",1987730512);
var G__61411 = expr__61408;
return (pred__61407.cljs$core$IFn$_invoke$arity$2 ? pred__61407.cljs$core$IFn$_invoke$arity$2(G__61410,G__61411) : pred__61407.call(null,G__61410,G__61411));
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__61412 = db;
var G__61413 = cljs.core.PersistentHashSet.EMPTY;
var G__61414 = cljs.core.PersistentHashSet.EMPTY;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__61412,G__61413,G__61414) : set_state.call(null,G__61412,G__61413,G__61414));
})(),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),id,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"events","events",1792552201),rules__$1)),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)], null),(cljs.core.truth_(first_dispatch)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),first_dispatch], null):null)], 0));
} else {
var vec__61415 = event_v;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61415,(0),null);
var forwarded_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61415,(1),null);
var map__61418 = (get_state.cljs$core$IFn$_invoke$arity$1 ? get_state.cljs$core$IFn$_invoke$arity$1(db) : get_state.call(null,db));
var map__61418__$1 = (((((!((map__61418 == null))))?(((((map__61418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61418):map__61418);
var seen_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61418__$1,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392));
var rules_fired = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61418__$1,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140));
var new_seen_events = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_events,forwarded_event);
var ready_rules = day8.re_frame.async_flow_fx.startable_rules(rules__$1,new_seen_events,rules_fired);
var halt_QMARK_ = cljs.core.some(new cljs.core.Keyword(null,"halt?","halt?",-1110658247),ready_rules);
var ready_rules_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),ready_rules));
var new_rules_fired = clojure.set.union.cljs$core$IFn$_invoke$arity$2(rules_fired,ready_rules_ids);
var new_dispatches = day8.re_frame.async_flow_fx.rules__GT_dispatches(ready_rules,forwarded_event);
var new_db = (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(db,new_seen_events,new_rules_fired) : set_state.call(null,db,new_seen_events,new_rules_fired));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),((cljs.core.seq(new_dispatches))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new_dispatches], null):null),(cljs.core.truth_(halt_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),day8.re_frame.async_flow_fx.dissoc_in(new_db,db_path),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),id], null),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),id], null):null)], 0));
}
});
});
/**
 * Ensure `flow` has an id. Return a vector of [id flow].
 */
day8.re_frame.async_flow_fx.ensure_has_id = (function day8$re_frame$async_flow_fx$ensure_has_id(flow){
var temp__5733__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,flow], null);
} else {
var new_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["async-flow/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("id-"))].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)], null);
}
});
/**
 * Action the given flow effect
 */
day8.re_frame.async_flow_fx.flow__GT_handler = (function day8$re_frame$async_flow_fx$flow__GT_handler(flow){
var vec__61420 = day8.re_frame.async_flow_fx.ensure_has_id(flow);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61420,(0),null);
var flow_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61420,(1),null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(id,day8.re_frame.async_flow_fx.make_flow_event_handler(flow_SINGLEQUOTE_));

var G__61423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"setup","setup",1987730512)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61423) : re_frame.core.dispatch.call(null,G__61423));
});
var G__61424_61426 = new cljs.core.Keyword(null,"async-flow","async-flow",1464712702);
var G__61425_61427 = day8.re_frame.async_flow_fx.flow__GT_handler;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61424_61426,G__61425_61427) : re_frame.core.reg_fx.call(null,G__61424_61426,G__61425_61427));

//# sourceMappingURL=day8.re_frame.async_flow_fx.js.map
