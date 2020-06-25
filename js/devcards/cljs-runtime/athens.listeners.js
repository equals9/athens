goog.provide('athens.listeners');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.events');
goog.require('re_frame.core');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');

athens.listeners.mouse_down_bullet = (function athens$listeners$mouse_down_bullet(e){
var class_list = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.classList);
if(cljs.core.truth_(cljs.core.some((function (p1__60546_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bullet",p1__60546_SHARP_);
}),class_list))){
var start_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null);
var uid = e.target.dataset.uid;
var on_move = (athens.listeners.mouse_move_bullet.cljs$core$IFn$_invoke$arity$2 ? athens.listeners.mouse_move_bullet.cljs$core$IFn$_invoke$arity$2(start_pos,uid) : athens.listeners.mouse_move_bullet.call(null,start_pos,uid));
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__60547 = window;
var G__60548 = goog.events.EventType.MOUSEUP;
var G__60549 = (athens.listeners.mouse_up_bullet.cljs$core$IFn$_invoke$arity$1 ? athens.listeners.mouse_up_bullet.cljs$core$IFn$_invoke$arity$1(on_move) : athens.listeners.mouse_up_bullet.call(null,on_move));
return goog.events.listen(G__60547,G__60548,G__60549);
} else {
return null;
}
});
athens.listeners.mouse_move_bullet = (function athens$listeners$mouse_move_bullet(start_pos,uid){
return (function (evt){
var cX = evt.clientX;
var cY = evt.clientY;
var x = (cX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_pos));
var y = (cY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_pos));
var closest_sibling = document.elementFromPoint(cX,cY).closest(".block-container");
var closest_child = document.elementFromPoint(cX,cY).closest(".block-contents");
var closest = (function (){var or__4185__auto__ = closest_child;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return closest_sibling;
}
})();
var closest_uid = (cljs.core.truth_(closest)?closest.dataset.uid:null);
var closest_kind = (cljs.core.truth_(closest)?(cljs.core.truth_(cljs.core.some((function (p1__60550_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("block-container",p1__60550_SHARP_);
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(closest.classList)))?new cljs.core.Keyword(null,"sibling","sibling",-1183865000):new cljs.core.Keyword(null,"child","child",623967545)):null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,uid,closest_uid,closest_kind], 0));

var G__60551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword("closest","uid","closest/uid",-582260451),closest_uid,new cljs.core.Keyword("closest","kind","closest/kind",429209294),closest_kind], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60551) : re_frame.core.dispatch.call(null,G__60551));
});
});
athens.listeners.mouse_up_bullet = (function athens$listeners$mouse_up_bullet(on_move){
return (function (_evt){
var map__60552 = cljs.core.deref((function (){var G__60553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60553) : re_frame.core.subscribe.call(null,G__60553));
})());
var map__60552__$1 = (((((!((map__60552 == null))))?(((((map__60552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60552):map__60552);
var target_uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword("closest","uid","closest/uid",-582260451));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword("closest","kind","closest/kind",429209294));
if(cljs.core.truth_(target_uid)){
var G__60555_60567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),uid,new cljs.core.Keyword(null,"target","target",253001721),target_uid,new cljs.core.Keyword(null,"kind","kind",-717265803),kind], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60555_60567) : re_frame.core.dispatch.call(null,G__60555_60567));
} else {
}

var G__60556_60568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),cljs.core.PersistentArrayMap.EMPTY], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60556_60568) : re_frame.core.dispatch.call(null,G__60556_60568));

return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
athens.listeners.mouse_down_block = (function athens$listeners$mouse_down_block(e){
var closest_block = e.target.closest(".block-contents");
var closest_block_header = e.target.closest(".block-header");
var closest_page_header = e.target.closest(".page-header");
var closest = (function (){var or__4185__auto__ = closest_block;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = closest_block_header;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return closest_page_header;
}
}
})();
if(cljs.core.truth_(closest)){
var G__60557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),closest.dataset.uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60557) : re_frame.core.dispatch.call(null,G__60557));
} else {
return null;
}
});
athens.listeners.mouse_over_bullet = (function athens$listeners$mouse_over_bullet(e){
var class_list = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.classList);
var closest = e.target.closest(".tooltip");
var uid = e.target.dataset.uid;
var tooltip_uid = cljs.core.deref((function (){var G__60559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60559) : re_frame.core.subscribe.call(null,G__60559));
})());
if(cljs.core.truth_(cljs.core.some((function (p1__60558_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bullet",p1__60558_SHARP_);
}),class_list))){
var G__60560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60560) : re_frame.core.dispatch.call(null,G__60560));
} else {
if(cljs.core.truth_(closest)){
return null;
} else {
if((tooltip_uid == null)){
return null;
} else {
var G__60561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60561) : re_frame.core.dispatch.call(null,G__60561));

}
}
}
});
athens.listeners.mouse_down_outside_athena = (function athens$listeners$mouse_down_outside_athena(e){
var athena_QMARK_ = cljs.core.deref((function (){var G__60562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athena","athena",-1523991628)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60562) : re_frame.core.subscribe.call(null,G__60562));
})());
var closest = e.target.closest(".athena");
if(cljs.core.truth_((function (){var and__4174__auto__ = athena_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (closest == null);
} else {
return and__4174__auto__;
}
})())){
var G__60563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60563) : re_frame.core.dispatch.call(null,G__60563));
} else {
return null;
}
});
athens.listeners.key_down = (function athens$listeners$key_down(e){
var key = e.keyCode;
var _ctrl = e.ctrlKey;
var meta = e.metaKey;
var shift = e.shiftKey;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.Z))?(function (){var and__4174__auto__ = meta;
if(cljs.core.truth_(and__4174__auto__)){
return shift;
} else {
return and__4174__auto__;
}
})():false))){
var G__60564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo","redo",501190664)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60564) : re_frame.core.dispatch.call(null,G__60564));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.Z))?meta:false))){
var G__60565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60565) : re_frame.core.dispatch.call(null,G__60565));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.K))?meta:false))){
var G__60566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60566) : re_frame.core.dispatch.call(null,G__60566));
} else {
return null;
}
}
}
});
athens.listeners.init = (function athens$listeners$init(){
goog.events.listen(window,goog.events.EventType.MOUSEDOWN,athens.listeners.mouse_down_block);

goog.events.listen(window,goog.events.EventType.MOUSEDOWN,athens.listeners.mouse_down_bullet);

goog.events.listen(window,goog.events.EventType.MOUSEOVER,athens.listeners.mouse_over_bullet);

goog.events.listen(window,goog.events.EventType.MOUSEDOWN,athens.listeners.mouse_down_outside_athena);

return goog.events.listen(window,goog.events.EventType.KEYDOWN,athens.listeners.key_down);
});

//# sourceMappingURL=athens.listeners.js.map
