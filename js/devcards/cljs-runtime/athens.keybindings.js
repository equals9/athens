goog.provide('athens.keybindings');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.dom.selection');
goog.require('goog.events.KeyCodes');
goog.require('re_frame.core');
athens.keybindings.modifier_keys = (function athens$keybindings$modifier_keys(e){
var shift = e.shiftKey;
var meta = e.metaKey;
var ctrl = e.ctrlKey;
var alt = e.altKey;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"meta","meta",1499536964),meta,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),ctrl,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null);
});
athens.keybindings.get_end_points = (function athens$keybindings$get_end_points(e){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__55793 = e.target;
return goog.dom.selection.getEndPoints(G__55793);
})());
});
athens.keybindings.destruct_event = (function athens$keybindings$destruct_event(e){
var key = e.key;
var key_code = e.keyCode;
var target = e.target;
var value = target.value;
var event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key_code,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var modifiers = athens.keybindings.modifier_keys(e);
var vec__55794 = athens.keybindings.get_end_points(e);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55794,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55794,(1),null);
var selection = goog.dom.selection.getText(target);
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modifiers,event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),head,new cljs.core.Keyword(null,"tail","tail",-1146023564),tail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),selection], null)], 0));
});
athens.keybindings.arrow_key_QMARK_ = (function athens$keybindings$arrow_key_QMARK_(e){
var map__55797 = athens.keybindings.destruct_event(e);
var map__55797__$1 = (((((!((map__55797 == null))))?(((((map__55797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55797):map__55797);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55797__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT)));
});
athens.keybindings.block_start_QMARK_ = (function athens$keybindings$block_start_QMARK_(e){
var vec__55799 = athens.keybindings.get_end_points(e);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55799,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55799,(1),null);
return (start === (0));
});
athens.keybindings.block_end_QMARK_ = (function athens$keybindings$block_end_QMARK_(e){
var map__55802 = athens.keybindings.destruct_event(e);
var map__55802__$1 = (((((!((map__55802 == null))))?(((((map__55802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55802):map__55802);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55802__$1,new cljs.core.Keyword(null,"value","value",305978217));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55802__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(value));
});
athens.keybindings.handle_arrow_key = (function athens$keybindings$handle_arrow_key(e,uid){
var map__55804 = athens.keybindings.destruct_event(e);
var map__55804__$1 = (((((!((map__55804 == null))))?(((((map__55804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55804):map__55804);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55804__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var top_row_QMARK_ = true;
var bottom_row_QMARK_ = true;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP)) && (top_row_QMARK_))){
var G__55806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55806) : re_frame.core.dispatch.call(null,G__55806));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT)) && (athens.keybindings.block_start_QMARK_(e)))){
var G__55808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55808) : re_frame.core.dispatch.call(null,G__55808));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN)) && (bottom_row_QMARK_))){
var G__55809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55809) : re_frame.core.dispatch.call(null,G__55809));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT)) && (athens.keybindings.block_end_QMARK_(e)))){
var G__55810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55810) : re_frame.core.dispatch.call(null,G__55810));
} else {
return null;
}
}
}
}
});
athens.keybindings.handle_tab = (function athens$keybindings$handle_tab(e,uid){
e.preventDefault();

var map__55813 = athens.keybindings.destruct_event(e);
var map__55813__$1 = (((((!((map__55813 == null))))?(((((map__55813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55813):map__55813);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55813__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var block_zero_QMARK_ = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null))) === (0));
if(cljs.core.truth_(shift)){
var G__55815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55815) : re_frame.core.dispatch.call(null,G__55815));
} else {
if(block_zero_QMARK_){
return null;
} else {
var G__55816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55816) : re_frame.core.dispatch.call(null,G__55816));
}

}
});
athens.keybindings.handle_enter = (function athens$keybindings$handle_enter(e,uid,state){
var map__55817 = athens.keybindings.destruct_event(e);
var map__55817__$1 = (((((!((map__55817 == null))))?(((((map__55817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55817):map__55817);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(shift)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join(''));
} else {
if(cljs.core.truth_(meta)){
var first = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(12));
var new_tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(12));
var new_head = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first,"{{[[TODO]]}}"))?"{{[[DONE]]}}":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first,"{{[[DONE]]}}"))?"":"{{[[TODO]]}} "
));
var new_str = [new_head,new_tail].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
e.preventDefault();

var G__55819 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624),uid,value,start,state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55819) : re_frame.core.dispatch.call(null,G__55819));

}
}
});
athens.keybindings.PAIR_CHARS = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
/**
 * https://github.com/tpope/vim-surround
 */
athens.keybindings.surround = (function athens$keybindings$surround(selection,around){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,around);
if(cljs.core.truth_(temp__5733__auto__)){
var complement = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(around),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection),cljs.core.str.cljs$core$IFn$_invoke$arity$1(complement)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(around),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection),cljs.core.str.cljs$core$IFn$_invoke$arity$1(around)].join('');
}
});
/**
 * Assumes meta is selected
 */
athens.keybindings.handle_system_shortcuts = (function athens$keybindings$handle_system_shortcuts(e,_,state){
var map__55820 = athens.keybindings.destruct_event(e);
var map__55820__$1 = (((((!((map__55820 == null))))?(((((map__55820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55820):map__55820);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword(null,"target","target",253001721));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.A)){
goog.dom.selection.setStart(target,(0));

return goog.dom.selection.setEnd(target,end);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.Z)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["undo"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.X)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cut"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.V)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["paste"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.B)){
var new_str = athens.keybindings.surround(selection,"**");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.I)){
var new_str = athens.keybindings.surround(selection,"__");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
return null;
}
}
}
}
}
}
});
athens.keybindings.pair_char_QMARK_ = (function athens$keybindings$pair_char_QMARK_(e){
var map__55822 = athens.keybindings.destruct_event(e);
var map__55822__$1 = (((((!((map__55822 == null))))?(((((map__55822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55822):map__55822);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55822__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pair_char_set = cljs.core.set(cljs.core.flatten(cljs.core.seq(athens.keybindings.PAIR_CHARS)));
return (pair_char_set.cljs$core$IFn$_invoke$arity$1 ? pair_char_set.cljs$core$IFn$_invoke$arity$1(key) : pair_char_set.call(null,key));
});
athens.keybindings.handle_pair_char = (function athens$keybindings$handle_pair_char(e,_,state){
var map__55824 = athens.keybindings.destruct_event(e);
var map__55824__$1 = (((((!((map__55824 == null))))?(((((map__55824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55824):map__55824);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var close_pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var new_str_55846 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(close_pair),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
setTimeout((function (){
var G__55826 = target;
var G__55827 = (start + (1));
return goog.dom.selection.setCursorPosition(G__55826,G__55827);
}),(10));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str_55846);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var surround_selection_55847 = athens.keybindings.surround(selection,key);
var new_str_55848 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),surround_selection_55847,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str_55848);

setTimeout((function (){
var G__55828_55849 = target;
var G__55829_55850 = (start + (1));
goog.dom.selection.setStart(G__55828_55849,G__55829_55850);

var G__55830 = target;
var G__55831 = (end + (1));
return goog.dom.selection.setEnd(G__55830,G__55831);
}),(10));
} else {
}
}

var four_char = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(start - (1)),(start + (3)));
var double_brackets_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[[]]",four_char);
var double_parens_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(())",four_char);
if(double_brackets_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","page","search/page",1822499573),true);
} else {
if(double_parens_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","block","search/block",2107126874),true);
} else {
return null;
}
}
});
athens.keybindings.handle_backspace = (function athens$keybindings$handle_backspace(e,uid,state){
var map__55833 = athens.keybindings.destruct_event(e);
var map__55833__$1 = (((((!((map__55833 == null))))?(((((map__55833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55833):map__55833);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55833__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55833__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55833__$1,new cljs.core.Keyword(null,"value","value",305978217));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55833__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55833__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55833__$1,new cljs.core.Keyword(null,"target","target",253001721));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55833__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var possible_pair = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(start - (1)),(start + (1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var new_tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),new_tail].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
if(cljs.core.truth_(meta)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),tail);
} else {
if(athens.keybindings.block_start_QMARK_(e)){
var G__55837 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backspace","backspace",-696007848),uid,value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55837) : re_frame.core.dispatch.call(null,G__55837));
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__55832_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(possible_pair,p1__55832_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]","{}","()"], null)))){
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var tail__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(start + (1)));
var new_str = [head__$1,tail__$1].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","page","search/page",1822499573),false);

return setTimeout((function (){
var G__55838 = target;
var G__55839 = (start - (1));
return goog.dom.selection.setCursorPosition(G__55838,G__55839);
}),(10));
} else {
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var new_str = [head__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var map__55840 = cljs.core.deref(state);
var map__55840__$1 = (((((!((map__55840 == null))))?(((((map__55840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55840):map__55840);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55840__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
if(cljs.core.truth_(query)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(query,(0),(cljs.core.count(query) - (1))));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);

}
}
}
}
});
athens.keybindings.block_key_down = (function athens$keybindings$block_key_down(e,uid,state){
var map__55842 = athens.keybindings.destruct_event(e);
var map__55842__$1 = (((((!((map__55842 == null))))?(((((map__55842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55842):map__55842);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55842__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55842__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55842__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55842__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55842__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55842__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55842__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
if(athens.keybindings.arrow_key_QMARK_(e)){
return athens.keybindings.handle_arrow_key(e,uid);
} else {
if(cljs.core.truth_(athens.keybindings.pair_char_QMARK_(e))){
return athens.keybindings.handle_pair_char(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.TAB)){
return athens.keybindings.handle_tab(e,uid);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER)){
return athens.keybindings.handle_enter(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.BACKSPACE)){
return athens.keybindings.handle_backspace(e,uid,state);
} else {
if(cljs.core.truth_(meta)){
return athens.keybindings.handle_system_shortcuts(e,uid,state);
} else {
if(cljs.core.truth_(((cljs.core.not(meta))?((cljs.core.not(ctrl))?((cljs.core.not(alt))?goog.events.KeyCodes.isCharacterKey(key_code):false):false):false))){
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.SLASH)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"slash?","slash?",810223916),true);
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword("search","page","search/page",1822499573).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("search","block","search/block",2107126874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("search","query","search/query",1830322034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
return null;
}
}
}
}
}
}
}
});

//# sourceMappingURL=athens.keybindings.js.map
