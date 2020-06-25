goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__41195 = arguments.length;
switch (G__41195) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__41203 = arguments.length;
switch (G__41203) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__41208 = arguments.length;
switch (G__41208) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41206_SHARP_){
return (!((p1__41206_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41572 = arguments.length;
var i__4790__auto___41573 = (0);
while(true){
if((i__4790__auto___41573 < len__4789__auto___41572)){
args__4795__auto__.push((arguments[i__4790__auto___41573]));

var G__41574 = (i__4790__auto___41573 + (1));
i__4790__auto___41573 = G__41574;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__41215_41575 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41216_41576 = null;
var count__41217_41577 = (0);
var i__41218_41578 = (0);
while(true){
if((i__41218_41578 < count__41217_41577)){
var vec__41225_41579 = chunk__41216_41576.cljs$core$IIndexed$_nth$arity$2(null,i__41218_41578);
var k_41580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41225_41579,(0),null);
var v_41581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41225_41579,(1),null);
style.setProperty(dommy.utils.as_str(k_41580),v_41581);


var G__41586 = seq__41215_41575;
var G__41587 = chunk__41216_41576;
var G__41588 = count__41217_41577;
var G__41589 = (i__41218_41578 + (1));
seq__41215_41575 = G__41586;
chunk__41216_41576 = G__41587;
count__41217_41577 = G__41588;
i__41218_41578 = G__41589;
continue;
} else {
var temp__5735__auto___41590 = cljs.core.seq(seq__41215_41575);
if(temp__5735__auto___41590){
var seq__41215_41591__$1 = temp__5735__auto___41590;
if(cljs.core.chunked_seq_QMARK_(seq__41215_41591__$1)){
var c__4609__auto___41592 = cljs.core.chunk_first(seq__41215_41591__$1);
var G__41593 = cljs.core.chunk_rest(seq__41215_41591__$1);
var G__41594 = c__4609__auto___41592;
var G__41595 = cljs.core.count(c__4609__auto___41592);
var G__41596 = (0);
seq__41215_41575 = G__41593;
chunk__41216_41576 = G__41594;
count__41217_41577 = G__41595;
i__41218_41578 = G__41596;
continue;
} else {
var vec__41228_41597 = cljs.core.first(seq__41215_41591__$1);
var k_41598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41228_41597,(0),null);
var v_41599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41228_41597,(1),null);
style.setProperty(dommy.utils.as_str(k_41598),v_41599);


var G__41600 = cljs.core.next(seq__41215_41591__$1);
var G__41601 = null;
var G__41602 = (0);
var G__41603 = (0);
seq__41215_41575 = G__41600;
chunk__41216_41576 = G__41601;
count__41217_41577 = G__41602;
i__41218_41578 = G__41603;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41213){
var G__41214 = cljs.core.first(seq41213);
var seq41213__$1 = cljs.core.next(seq41213);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41214,seq41213__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41604 = arguments.length;
var i__4790__auto___41605 = (0);
while(true){
if((i__4790__auto___41605 < len__4789__auto___41604)){
args__4795__auto__.push((arguments[i__4790__auto___41605]));

var G__41606 = (i__4790__auto___41605 + (1));
i__4790__auto___41605 = G__41606;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__41233_41607 = cljs.core.seq(keywords);
var chunk__41234_41608 = null;
var count__41235_41609 = (0);
var i__41236_41610 = (0);
while(true){
if((i__41236_41610 < count__41235_41609)){
var kw_41611 = chunk__41234_41608.cljs$core$IIndexed$_nth$arity$2(null,i__41236_41610);
style.removeProperty(dommy.utils.as_str(kw_41611));


var G__41612 = seq__41233_41607;
var G__41613 = chunk__41234_41608;
var G__41614 = count__41235_41609;
var G__41615 = (i__41236_41610 + (1));
seq__41233_41607 = G__41612;
chunk__41234_41608 = G__41613;
count__41235_41609 = G__41614;
i__41236_41610 = G__41615;
continue;
} else {
var temp__5735__auto___41616 = cljs.core.seq(seq__41233_41607);
if(temp__5735__auto___41616){
var seq__41233_41617__$1 = temp__5735__auto___41616;
if(cljs.core.chunked_seq_QMARK_(seq__41233_41617__$1)){
var c__4609__auto___41618 = cljs.core.chunk_first(seq__41233_41617__$1);
var G__41619 = cljs.core.chunk_rest(seq__41233_41617__$1);
var G__41620 = c__4609__auto___41618;
var G__41621 = cljs.core.count(c__4609__auto___41618);
var G__41622 = (0);
seq__41233_41607 = G__41619;
chunk__41234_41608 = G__41620;
count__41235_41609 = G__41621;
i__41236_41610 = G__41622;
continue;
} else {
var kw_41623 = cljs.core.first(seq__41233_41617__$1);
style.removeProperty(dommy.utils.as_str(kw_41623));


var G__41624 = cljs.core.next(seq__41233_41617__$1);
var G__41625 = null;
var G__41626 = (0);
var G__41627 = (0);
seq__41233_41607 = G__41624;
chunk__41234_41608 = G__41625;
count__41235_41609 = G__41626;
i__41236_41610 = G__41627;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41231){
var G__41232 = cljs.core.first(seq41231);
var seq41231__$1 = cljs.core.next(seq41231);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41232,seq41231__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41628 = arguments.length;
var i__4790__auto___41629 = (0);
while(true){
if((i__4790__auto___41629 < len__4789__auto___41628)){
args__4795__auto__.push((arguments[i__4790__auto___41629]));

var G__41630 = (i__4790__auto___41629 + (1));
i__4790__auto___41629 = G__41630;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41239_41631 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41240_41632 = null;
var count__41241_41633 = (0);
var i__41242_41634 = (0);
while(true){
if((i__41242_41634 < count__41241_41633)){
var vec__41249_41636 = chunk__41240_41632.cljs$core$IIndexed$_nth$arity$2(null,i__41242_41634);
var k_41637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41249_41636,(0),null);
var v_41638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41249_41636,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41637,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41638),"px"].join('')], 0));


var G__41639 = seq__41239_41631;
var G__41640 = chunk__41240_41632;
var G__41641 = count__41241_41633;
var G__41642 = (i__41242_41634 + (1));
seq__41239_41631 = G__41639;
chunk__41240_41632 = G__41640;
count__41241_41633 = G__41641;
i__41242_41634 = G__41642;
continue;
} else {
var temp__5735__auto___41643 = cljs.core.seq(seq__41239_41631);
if(temp__5735__auto___41643){
var seq__41239_41644__$1 = temp__5735__auto___41643;
if(cljs.core.chunked_seq_QMARK_(seq__41239_41644__$1)){
var c__4609__auto___41645 = cljs.core.chunk_first(seq__41239_41644__$1);
var G__41646 = cljs.core.chunk_rest(seq__41239_41644__$1);
var G__41647 = c__4609__auto___41645;
var G__41648 = cljs.core.count(c__4609__auto___41645);
var G__41649 = (0);
seq__41239_41631 = G__41646;
chunk__41240_41632 = G__41647;
count__41241_41633 = G__41648;
i__41242_41634 = G__41649;
continue;
} else {
var vec__41252_41650 = cljs.core.first(seq__41239_41644__$1);
var k_41651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41252_41650,(0),null);
var v_41652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41252_41650,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41651,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41652),"px"].join('')], 0));


var G__41653 = cljs.core.next(seq__41239_41644__$1);
var G__41654 = null;
var G__41655 = (0);
var G__41656 = (0);
seq__41239_41631 = G__41653;
chunk__41240_41632 = G__41654;
count__41241_41633 = G__41655;
i__41242_41634 = G__41656;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41237){
var G__41238 = cljs.core.first(seq41237);
var seq41237__$1 = cljs.core.next(seq41237);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41238,seq41237__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__41260 = arguments.length;
switch (G__41260) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41662 = arguments.length;
var i__4790__auto___41663 = (0);
while(true){
if((i__4790__auto___41663 < len__4789__auto___41662)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41663]));

var G__41664 = (i__4790__auto___41663 + (1));
i__4790__auto___41663 = G__41664;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__41261 = elem;
(G__41261[k__$1] = v);

return G__41261;
} else {
var G__41262 = elem;
G__41262.setAttribute(k__$1,v);

return G__41262;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41263_41669 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41264_41670 = null;
var count__41265_41671 = (0);
var i__41266_41672 = (0);
while(true){
if((i__41266_41672 < count__41265_41671)){
var vec__41273_41673 = chunk__41264_41670.cljs$core$IIndexed$_nth$arity$2(null,i__41266_41672);
var k_41674__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41273_41673,(0),null);
var v_41675__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41273_41673,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41674__$1,v_41675__$1);


var G__41677 = seq__41263_41669;
var G__41678 = chunk__41264_41670;
var G__41679 = count__41265_41671;
var G__41680 = (i__41266_41672 + (1));
seq__41263_41669 = G__41677;
chunk__41264_41670 = G__41678;
count__41265_41671 = G__41679;
i__41266_41672 = G__41680;
continue;
} else {
var temp__5735__auto___41683 = cljs.core.seq(seq__41263_41669);
if(temp__5735__auto___41683){
var seq__41263_41684__$1 = temp__5735__auto___41683;
if(cljs.core.chunked_seq_QMARK_(seq__41263_41684__$1)){
var c__4609__auto___41685 = cljs.core.chunk_first(seq__41263_41684__$1);
var G__41686 = cljs.core.chunk_rest(seq__41263_41684__$1);
var G__41687 = c__4609__auto___41685;
var G__41688 = cljs.core.count(c__4609__auto___41685);
var G__41689 = (0);
seq__41263_41669 = G__41686;
chunk__41264_41670 = G__41687;
count__41265_41671 = G__41688;
i__41266_41672 = G__41689;
continue;
} else {
var vec__41276_41690 = cljs.core.first(seq__41263_41684__$1);
var k_41691__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41276_41690,(0),null);
var v_41692__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41276_41690,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41691__$1,v_41692__$1);


var G__41693 = cljs.core.next(seq__41263_41684__$1);
var G__41694 = null;
var G__41695 = (0);
var G__41696 = (0);
seq__41263_41669 = G__41693;
chunk__41264_41670 = G__41694;
count__41265_41671 = G__41695;
i__41266_41672 = G__41696;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41256){
var G__41257 = cljs.core.first(seq41256);
var seq41256__$1 = cljs.core.next(seq41256);
var G__41258 = cljs.core.first(seq41256__$1);
var seq41256__$2 = cljs.core.next(seq41256__$1);
var G__41259 = cljs.core.first(seq41256__$2);
var seq41256__$3 = cljs.core.next(seq41256__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41257,G__41258,G__41259,seq41256__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41283 = arguments.length;
switch (G__41283) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41699 = arguments.length;
var i__4790__auto___41700 = (0);
while(true){
if((i__4790__auto___41700 < len__4789__auto___41699)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41700]));

var G__41701 = (i__4790__auto___41700 + (1));
i__4790__auto___41700 = G__41701;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_41702__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41284 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41284.cljs$core$IFn$_invoke$arity$1 ? fexpr__41284.cljs$core$IFn$_invoke$arity$1(k_41702__$1) : fexpr__41284.call(null,k_41702__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41702__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41285_41703 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41286_41704 = null;
var count__41287_41705 = (0);
var i__41288_41706 = (0);
while(true){
if((i__41288_41706 < count__41287_41705)){
var k_41707__$1 = chunk__41286_41704.cljs$core$IIndexed$_nth$arity$2(null,i__41288_41706);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41707__$1);


var G__41709 = seq__41285_41703;
var G__41710 = chunk__41286_41704;
var G__41711 = count__41287_41705;
var G__41712 = (i__41288_41706 + (1));
seq__41285_41703 = G__41709;
chunk__41286_41704 = G__41710;
count__41287_41705 = G__41711;
i__41288_41706 = G__41712;
continue;
} else {
var temp__5735__auto___41715 = cljs.core.seq(seq__41285_41703);
if(temp__5735__auto___41715){
var seq__41285_41716__$1 = temp__5735__auto___41715;
if(cljs.core.chunked_seq_QMARK_(seq__41285_41716__$1)){
var c__4609__auto___41717 = cljs.core.chunk_first(seq__41285_41716__$1);
var G__41718 = cljs.core.chunk_rest(seq__41285_41716__$1);
var G__41719 = c__4609__auto___41717;
var G__41720 = cljs.core.count(c__4609__auto___41717);
var G__41721 = (0);
seq__41285_41703 = G__41718;
chunk__41286_41704 = G__41719;
count__41287_41705 = G__41720;
i__41288_41706 = G__41721;
continue;
} else {
var k_41722__$1 = cljs.core.first(seq__41285_41716__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41722__$1);


var G__41723 = cljs.core.next(seq__41285_41716__$1);
var G__41724 = null;
var G__41725 = (0);
var G__41726 = (0);
seq__41285_41703 = G__41723;
chunk__41286_41704 = G__41724;
count__41287_41705 = G__41725;
i__41288_41706 = G__41726;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41280){
var G__41281 = cljs.core.first(seq41280);
var seq41280__$1 = cljs.core.next(seq41280);
var G__41282 = cljs.core.first(seq41280__$1);
var seq41280__$2 = cljs.core.next(seq41280__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41281,G__41282,seq41280__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41290 = arguments.length;
switch (G__41290) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__41295 = arguments.length;
switch (G__41295) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41729 = arguments.length;
var i__4790__auto___41730 = (0);
while(true){
if((i__4790__auto___41730 < len__4789__auto___41729)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41730]));

var G__41731 = (i__4790__auto___41730 + (1));
i__4790__auto___41730 = G__41731;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___41732 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41732)){
var class_list_41733 = temp__5733__auto___41732;
var seq__41296_41734 = cljs.core.seq(classes__$1);
var chunk__41297_41735 = null;
var count__41298_41736 = (0);
var i__41299_41737 = (0);
while(true){
if((i__41299_41737 < count__41298_41736)){
var c_41738 = chunk__41297_41735.cljs$core$IIndexed$_nth$arity$2(null,i__41299_41737);
class_list_41733.add(c_41738);


var G__41739 = seq__41296_41734;
var G__41740 = chunk__41297_41735;
var G__41741 = count__41298_41736;
var G__41742 = (i__41299_41737 + (1));
seq__41296_41734 = G__41739;
chunk__41297_41735 = G__41740;
count__41298_41736 = G__41741;
i__41299_41737 = G__41742;
continue;
} else {
var temp__5735__auto___41743 = cljs.core.seq(seq__41296_41734);
if(temp__5735__auto___41743){
var seq__41296_41744__$1 = temp__5735__auto___41743;
if(cljs.core.chunked_seq_QMARK_(seq__41296_41744__$1)){
var c__4609__auto___41745 = cljs.core.chunk_first(seq__41296_41744__$1);
var G__41746 = cljs.core.chunk_rest(seq__41296_41744__$1);
var G__41747 = c__4609__auto___41745;
var G__41748 = cljs.core.count(c__4609__auto___41745);
var G__41749 = (0);
seq__41296_41734 = G__41746;
chunk__41297_41735 = G__41747;
count__41298_41736 = G__41748;
i__41299_41737 = G__41749;
continue;
} else {
var c_41750 = cljs.core.first(seq__41296_41744__$1);
class_list_41733.add(c_41750);


var G__41751 = cljs.core.next(seq__41296_41744__$1);
var G__41752 = null;
var G__41753 = (0);
var G__41754 = (0);
seq__41296_41734 = G__41751;
chunk__41297_41735 = G__41752;
count__41298_41736 = G__41753;
i__41299_41737 = G__41754;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41300_41755 = cljs.core.seq(classes__$1);
var chunk__41301_41756 = null;
var count__41302_41757 = (0);
var i__41303_41758 = (0);
while(true){
if((i__41303_41758 < count__41302_41757)){
var c_41759 = chunk__41301_41756.cljs$core$IIndexed$_nth$arity$2(null,i__41303_41758);
var class_name_41760 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41760,c_41759))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41760 === ""))?c_41759:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41760)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41759)].join('')));
}


var G__41761 = seq__41300_41755;
var G__41762 = chunk__41301_41756;
var G__41763 = count__41302_41757;
var G__41764 = (i__41303_41758 + (1));
seq__41300_41755 = G__41761;
chunk__41301_41756 = G__41762;
count__41302_41757 = G__41763;
i__41303_41758 = G__41764;
continue;
} else {
var temp__5735__auto___41765 = cljs.core.seq(seq__41300_41755);
if(temp__5735__auto___41765){
var seq__41300_41766__$1 = temp__5735__auto___41765;
if(cljs.core.chunked_seq_QMARK_(seq__41300_41766__$1)){
var c__4609__auto___41767 = cljs.core.chunk_first(seq__41300_41766__$1);
var G__41768 = cljs.core.chunk_rest(seq__41300_41766__$1);
var G__41769 = c__4609__auto___41767;
var G__41770 = cljs.core.count(c__4609__auto___41767);
var G__41771 = (0);
seq__41300_41755 = G__41768;
chunk__41301_41756 = G__41769;
count__41302_41757 = G__41770;
i__41303_41758 = G__41771;
continue;
} else {
var c_41772 = cljs.core.first(seq__41300_41766__$1);
var class_name_41773 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41773,c_41772))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41773 === ""))?c_41772:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41773)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41772)].join('')));
}


var G__41774 = cljs.core.next(seq__41300_41766__$1);
var G__41775 = null;
var G__41776 = (0);
var G__41777 = (0);
seq__41300_41755 = G__41774;
chunk__41301_41756 = G__41775;
count__41302_41757 = G__41776;
i__41303_41758 = G__41777;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__41304_41778 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41305_41779 = null;
var count__41306_41780 = (0);
var i__41307_41781 = (0);
while(true){
if((i__41307_41781 < count__41306_41780)){
var c_41782 = chunk__41305_41779.cljs$core$IIndexed$_nth$arity$2(null,i__41307_41781);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41782);


var G__41783 = seq__41304_41778;
var G__41784 = chunk__41305_41779;
var G__41785 = count__41306_41780;
var G__41786 = (i__41307_41781 + (1));
seq__41304_41778 = G__41783;
chunk__41305_41779 = G__41784;
count__41306_41780 = G__41785;
i__41307_41781 = G__41786;
continue;
} else {
var temp__5735__auto___41787 = cljs.core.seq(seq__41304_41778);
if(temp__5735__auto___41787){
var seq__41304_41788__$1 = temp__5735__auto___41787;
if(cljs.core.chunked_seq_QMARK_(seq__41304_41788__$1)){
var c__4609__auto___41789 = cljs.core.chunk_first(seq__41304_41788__$1);
var G__41794 = cljs.core.chunk_rest(seq__41304_41788__$1);
var G__41795 = c__4609__auto___41789;
var G__41796 = cljs.core.count(c__4609__auto___41789);
var G__41797 = (0);
seq__41304_41778 = G__41794;
chunk__41305_41779 = G__41795;
count__41306_41780 = G__41796;
i__41307_41781 = G__41797;
continue;
} else {
var c_41798 = cljs.core.first(seq__41304_41788__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41798);


var G__41799 = cljs.core.next(seq__41304_41788__$1);
var G__41800 = null;
var G__41801 = (0);
var G__41802 = (0);
seq__41304_41778 = G__41799;
chunk__41305_41779 = G__41800;
count__41306_41780 = G__41801;
i__41307_41781 = G__41802;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41292){
var G__41293 = cljs.core.first(seq41292);
var seq41292__$1 = cljs.core.next(seq41292);
var G__41294 = cljs.core.first(seq41292__$1);
var seq41292__$2 = cljs.core.next(seq41292__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41293,G__41294,seq41292__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41312 = arguments.length;
switch (G__41312) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41812 = arguments.length;
var i__4790__auto___41813 = (0);
while(true){
if((i__4790__auto___41813 < len__4789__auto___41812)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41813]));

var G__41814 = (i__4790__auto___41813 + (1));
i__4790__auto___41813 = G__41814;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41815 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41815)){
var class_list_41816 = temp__5733__auto___41815;
class_list_41816.remove(c__$1);
} else {
var class_name_41817 = dommy.core.class$(elem);
var new_class_name_41818 = dommy.utils.remove_class_str(class_name_41817,c__$1);
if((class_name_41817 === new_class_name_41818)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41818);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41313 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41314 = null;
var count__41315 = (0);
var i__41316 = (0);
while(true){
if((i__41316 < count__41315)){
var c = chunk__41314.cljs$core$IIndexed$_nth$arity$2(null,i__41316);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41820 = seq__41313;
var G__41821 = chunk__41314;
var G__41822 = count__41315;
var G__41823 = (i__41316 + (1));
seq__41313 = G__41820;
chunk__41314 = G__41821;
count__41315 = G__41822;
i__41316 = G__41823;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41313);
if(temp__5735__auto__){
var seq__41313__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41313__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41313__$1);
var G__41825 = cljs.core.chunk_rest(seq__41313__$1);
var G__41826 = c__4609__auto__;
var G__41827 = cljs.core.count(c__4609__auto__);
var G__41828 = (0);
seq__41313 = G__41825;
chunk__41314 = G__41826;
count__41315 = G__41827;
i__41316 = G__41828;
continue;
} else {
var c = cljs.core.first(seq__41313__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41829 = cljs.core.next(seq__41313__$1);
var G__41830 = null;
var G__41831 = (0);
var G__41832 = (0);
seq__41313 = G__41829;
chunk__41314 = G__41830;
count__41315 = G__41831;
i__41316 = G__41832;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41309){
var G__41310 = cljs.core.first(seq41309);
var seq41309__$1 = cljs.core.next(seq41309);
var G__41311 = cljs.core.first(seq41309__$1);
var seq41309__$2 = cljs.core.next(seq41309__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41310,G__41311,seq41309__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41318 = arguments.length;
switch (G__41318) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41836 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41836)){
var class_list_41837 = temp__5733__auto___41836;
class_list_41837.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__41320 = arguments.length;
switch (G__41320) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__41322 = arguments.length;
switch (G__41322) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__41327 = arguments.length;
switch (G__41327) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41841 = arguments.length;
var i__4790__auto___41842 = (0);
while(true){
if((i__4790__auto___41842 < len__4789__auto___41841)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41842]));

var G__41843 = (i__4790__auto___41842 + (1));
i__4790__auto___41842 = G__41843;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41328 = parent;
G__41328.appendChild(child);

return G__41328;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41329_41844 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41330_41845 = null;
var count__41331_41846 = (0);
var i__41332_41847 = (0);
while(true){
if((i__41332_41847 < count__41331_41846)){
var c_41848 = chunk__41330_41845.cljs$core$IIndexed$_nth$arity$2(null,i__41332_41847);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41848);


var G__41849 = seq__41329_41844;
var G__41850 = chunk__41330_41845;
var G__41851 = count__41331_41846;
var G__41852 = (i__41332_41847 + (1));
seq__41329_41844 = G__41849;
chunk__41330_41845 = G__41850;
count__41331_41846 = G__41851;
i__41332_41847 = G__41852;
continue;
} else {
var temp__5735__auto___41853 = cljs.core.seq(seq__41329_41844);
if(temp__5735__auto___41853){
var seq__41329_41854__$1 = temp__5735__auto___41853;
if(cljs.core.chunked_seq_QMARK_(seq__41329_41854__$1)){
var c__4609__auto___41855 = cljs.core.chunk_first(seq__41329_41854__$1);
var G__41856 = cljs.core.chunk_rest(seq__41329_41854__$1);
var G__41857 = c__4609__auto___41855;
var G__41858 = cljs.core.count(c__4609__auto___41855);
var G__41859 = (0);
seq__41329_41844 = G__41856;
chunk__41330_41845 = G__41857;
count__41331_41846 = G__41858;
i__41332_41847 = G__41859;
continue;
} else {
var c_41860 = cljs.core.first(seq__41329_41854__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41860);


var G__41861 = cljs.core.next(seq__41329_41854__$1);
var G__41862 = null;
var G__41863 = (0);
var G__41864 = (0);
seq__41329_41844 = G__41861;
chunk__41330_41845 = G__41862;
count__41331_41846 = G__41863;
i__41332_41847 = G__41864;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41324){
var G__41325 = cljs.core.first(seq41324);
var seq41324__$1 = cljs.core.next(seq41324);
var G__41326 = cljs.core.first(seq41324__$1);
var seq41324__$2 = cljs.core.next(seq41324__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41325,G__41326,seq41324__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41337 = arguments.length;
switch (G__41337) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41866 = arguments.length;
var i__4790__auto___41867 = (0);
while(true){
if((i__4790__auto___41867 < len__4789__auto___41866)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41867]));

var G__41868 = (i__4790__auto___41867 + (1));
i__4790__auto___41867 = G__41868;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41338 = parent;
G__41338.insertBefore(child,parent.firstChild);

return G__41338;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41339_41869 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41340_41870 = null;
var count__41341_41871 = (0);
var i__41342_41872 = (0);
while(true){
if((i__41342_41872 < count__41341_41871)){
var c_41873 = chunk__41340_41870.cljs$core$IIndexed$_nth$arity$2(null,i__41342_41872);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41873);


var G__41874 = seq__41339_41869;
var G__41875 = chunk__41340_41870;
var G__41876 = count__41341_41871;
var G__41877 = (i__41342_41872 + (1));
seq__41339_41869 = G__41874;
chunk__41340_41870 = G__41875;
count__41341_41871 = G__41876;
i__41342_41872 = G__41877;
continue;
} else {
var temp__5735__auto___41878 = cljs.core.seq(seq__41339_41869);
if(temp__5735__auto___41878){
var seq__41339_41879__$1 = temp__5735__auto___41878;
if(cljs.core.chunked_seq_QMARK_(seq__41339_41879__$1)){
var c__4609__auto___41880 = cljs.core.chunk_first(seq__41339_41879__$1);
var G__41881 = cljs.core.chunk_rest(seq__41339_41879__$1);
var G__41882 = c__4609__auto___41880;
var G__41883 = cljs.core.count(c__4609__auto___41880);
var G__41884 = (0);
seq__41339_41869 = G__41881;
chunk__41340_41870 = G__41882;
count__41341_41871 = G__41883;
i__41342_41872 = G__41884;
continue;
} else {
var c_41885 = cljs.core.first(seq__41339_41879__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41885);


var G__41886 = cljs.core.next(seq__41339_41879__$1);
var G__41887 = null;
var G__41888 = (0);
var G__41889 = (0);
seq__41339_41869 = G__41886;
chunk__41340_41870 = G__41887;
count__41341_41871 = G__41888;
i__41342_41872 = G__41889;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41334){
var G__41335 = cljs.core.first(seq41334);
var seq41334__$1 = cljs.core.next(seq41334);
var G__41336 = cljs.core.first(seq41334__$1);
var seq41334__$2 = cljs.core.next(seq41334__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41335,G__41336,seq41334__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___41890 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41890)){
var next_41891 = temp__5733__auto___41890;
dommy.core.insert_before_BANG_(elem,next_41891);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__41344 = arguments.length;
switch (G__41344) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__41345 = p;
G__41345.removeChild(elem);

return G__41345;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41346){
var vec__41347 = p__41346;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41347,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41347,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41893 = arguments.length;
var i__4790__auto___41894 = (0);
while(true){
if((i__4790__auto___41894 < len__4789__auto___41893)){
args__4795__auto__.push((arguments[i__4790__auto___41894]));

var G__41895 = (i__4790__auto___41894 + (1));
i__4790__auto___41894 = G__41895;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41350){
var G__41351 = cljs.core.first(seq41350);
var seq41350__$1 = cljs.core.next(seq41350);
var G__41352 = cljs.core.first(seq41350__$1);
var seq41350__$2 = cljs.core.next(seq41350__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41351,G__41352,seq41350__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41353 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41353.cljs$core$IFn$_invoke$arity$1 ? fexpr__41353.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41353.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41896 = arguments.length;
var i__4790__auto___41897 = (0);
while(true){
if((i__4790__auto___41897 < len__4789__auto___41896)){
args__4795__auto__.push((arguments[i__4790__auto___41897]));

var G__41898 = (i__4790__auto___41897 + (1));
i__4790__auto___41897 = G__41898;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41356_41899 = dommy.core.elem_and_selector(elem_sel);
var elem_41900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41356_41899,(0),null);
var selector_41901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41356_41899,(1),null);
var seq__41359_41902 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41366_41903 = null;
var count__41367_41904 = (0);
var i__41368_41905 = (0);
while(true){
if((i__41368_41905 < count__41367_41904)){
var vec__41421_41906 = chunk__41366_41903.cljs$core$IIndexed$_nth$arity$2(null,i__41368_41905);
var orig_type_41907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41421_41906,(0),null);
var f_41908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41421_41906,(1),null);
var seq__41369_41909 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41907,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41907,cljs.core.identity])));
var chunk__41371_41910 = null;
var count__41372_41911 = (0);
var i__41373_41912 = (0);
while(true){
if((i__41373_41912 < count__41372_41911)){
var vec__41434_41913 = chunk__41371_41910.cljs$core$IIndexed$_nth$arity$2(null,i__41373_41912);
var actual_type_41914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41434_41913,(0),null);
var factory_41915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41434_41913,(1),null);
var canonical_f_41916 = (function (){var G__41438 = (factory_41915.cljs$core$IFn$_invoke$arity$1 ? factory_41915.cljs$core$IFn$_invoke$arity$1(f_41908) : factory_41915.call(null,f_41908));
var fexpr__41437 = (cljs.core.truth_(selector_41901)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41900,selector_41901):cljs.core.identity);
return (fexpr__41437.cljs$core$IFn$_invoke$arity$1 ? fexpr__41437.cljs$core$IFn$_invoke$arity$1(G__41438) : fexpr__41437.call(null,G__41438));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41900,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41901,actual_type_41914,f_41908], null),canonical_f_41916], 0));

if(cljs.core.truth_(elem_41900.addEventListener)){
elem_41900.addEventListener(cljs.core.name(actual_type_41914),canonical_f_41916);
} else {
elem_41900.attachEvent(cljs.core.name(actual_type_41914),canonical_f_41916);
}


var G__41917 = seq__41369_41909;
var G__41918 = chunk__41371_41910;
var G__41919 = count__41372_41911;
var G__41920 = (i__41373_41912 + (1));
seq__41369_41909 = G__41917;
chunk__41371_41910 = G__41918;
count__41372_41911 = G__41919;
i__41373_41912 = G__41920;
continue;
} else {
var temp__5735__auto___41921 = cljs.core.seq(seq__41369_41909);
if(temp__5735__auto___41921){
var seq__41369_41922__$1 = temp__5735__auto___41921;
if(cljs.core.chunked_seq_QMARK_(seq__41369_41922__$1)){
var c__4609__auto___41923 = cljs.core.chunk_first(seq__41369_41922__$1);
var G__41924 = cljs.core.chunk_rest(seq__41369_41922__$1);
var G__41925 = c__4609__auto___41923;
var G__41926 = cljs.core.count(c__4609__auto___41923);
var G__41927 = (0);
seq__41369_41909 = G__41924;
chunk__41371_41910 = G__41925;
count__41372_41911 = G__41926;
i__41373_41912 = G__41927;
continue;
} else {
var vec__41439_41928 = cljs.core.first(seq__41369_41922__$1);
var actual_type_41929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41439_41928,(0),null);
var factory_41930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41439_41928,(1),null);
var canonical_f_41931 = (function (){var G__41443 = (factory_41930.cljs$core$IFn$_invoke$arity$1 ? factory_41930.cljs$core$IFn$_invoke$arity$1(f_41908) : factory_41930.call(null,f_41908));
var fexpr__41442 = (cljs.core.truth_(selector_41901)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41900,selector_41901):cljs.core.identity);
return (fexpr__41442.cljs$core$IFn$_invoke$arity$1 ? fexpr__41442.cljs$core$IFn$_invoke$arity$1(G__41443) : fexpr__41442.call(null,G__41443));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41900,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41901,actual_type_41929,f_41908], null),canonical_f_41931], 0));

if(cljs.core.truth_(elem_41900.addEventListener)){
elem_41900.addEventListener(cljs.core.name(actual_type_41929),canonical_f_41931);
} else {
elem_41900.attachEvent(cljs.core.name(actual_type_41929),canonical_f_41931);
}


var G__41932 = cljs.core.next(seq__41369_41922__$1);
var G__41933 = null;
var G__41934 = (0);
var G__41935 = (0);
seq__41369_41909 = G__41932;
chunk__41371_41910 = G__41933;
count__41372_41911 = G__41934;
i__41373_41912 = G__41935;
continue;
}
} else {
}
}
break;
}

var G__41936 = seq__41359_41902;
var G__41937 = chunk__41366_41903;
var G__41938 = count__41367_41904;
var G__41939 = (i__41368_41905 + (1));
seq__41359_41902 = G__41936;
chunk__41366_41903 = G__41937;
count__41367_41904 = G__41938;
i__41368_41905 = G__41939;
continue;
} else {
var temp__5735__auto___41940 = cljs.core.seq(seq__41359_41902);
if(temp__5735__auto___41940){
var seq__41359_41941__$1 = temp__5735__auto___41940;
if(cljs.core.chunked_seq_QMARK_(seq__41359_41941__$1)){
var c__4609__auto___41942 = cljs.core.chunk_first(seq__41359_41941__$1);
var G__41943 = cljs.core.chunk_rest(seq__41359_41941__$1);
var G__41944 = c__4609__auto___41942;
var G__41945 = cljs.core.count(c__4609__auto___41942);
var G__41946 = (0);
seq__41359_41902 = G__41943;
chunk__41366_41903 = G__41944;
count__41367_41904 = G__41945;
i__41368_41905 = G__41946;
continue;
} else {
var vec__41444_41947 = cljs.core.first(seq__41359_41941__$1);
var orig_type_41948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41444_41947,(0),null);
var f_41949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41444_41947,(1),null);
var seq__41360_41950 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41948,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41948,cljs.core.identity])));
var chunk__41362_41951 = null;
var count__41363_41952 = (0);
var i__41364_41953 = (0);
while(true){
if((i__41364_41953 < count__41363_41952)){
var vec__41457_41954 = chunk__41362_41951.cljs$core$IIndexed$_nth$arity$2(null,i__41364_41953);
var actual_type_41955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41457_41954,(0),null);
var factory_41956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41457_41954,(1),null);
var canonical_f_41957 = (function (){var G__41461 = (factory_41956.cljs$core$IFn$_invoke$arity$1 ? factory_41956.cljs$core$IFn$_invoke$arity$1(f_41949) : factory_41956.call(null,f_41949));
var fexpr__41460 = (cljs.core.truth_(selector_41901)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41900,selector_41901):cljs.core.identity);
return (fexpr__41460.cljs$core$IFn$_invoke$arity$1 ? fexpr__41460.cljs$core$IFn$_invoke$arity$1(G__41461) : fexpr__41460.call(null,G__41461));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41900,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41901,actual_type_41955,f_41949], null),canonical_f_41957], 0));

if(cljs.core.truth_(elem_41900.addEventListener)){
elem_41900.addEventListener(cljs.core.name(actual_type_41955),canonical_f_41957);
} else {
elem_41900.attachEvent(cljs.core.name(actual_type_41955),canonical_f_41957);
}


var G__41958 = seq__41360_41950;
var G__41959 = chunk__41362_41951;
var G__41960 = count__41363_41952;
var G__41961 = (i__41364_41953 + (1));
seq__41360_41950 = G__41958;
chunk__41362_41951 = G__41959;
count__41363_41952 = G__41960;
i__41364_41953 = G__41961;
continue;
} else {
var temp__5735__auto___41962__$1 = cljs.core.seq(seq__41360_41950);
if(temp__5735__auto___41962__$1){
var seq__41360_41963__$1 = temp__5735__auto___41962__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41360_41963__$1)){
var c__4609__auto___41964 = cljs.core.chunk_first(seq__41360_41963__$1);
var G__41965 = cljs.core.chunk_rest(seq__41360_41963__$1);
var G__41966 = c__4609__auto___41964;
var G__41967 = cljs.core.count(c__4609__auto___41964);
var G__41968 = (0);
seq__41360_41950 = G__41965;
chunk__41362_41951 = G__41966;
count__41363_41952 = G__41967;
i__41364_41953 = G__41968;
continue;
} else {
var vec__41462_41969 = cljs.core.first(seq__41360_41963__$1);
var actual_type_41970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41462_41969,(0),null);
var factory_41971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41462_41969,(1),null);
var canonical_f_41972 = (function (){var G__41466 = (factory_41971.cljs$core$IFn$_invoke$arity$1 ? factory_41971.cljs$core$IFn$_invoke$arity$1(f_41949) : factory_41971.call(null,f_41949));
var fexpr__41465 = (cljs.core.truth_(selector_41901)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41900,selector_41901):cljs.core.identity);
return (fexpr__41465.cljs$core$IFn$_invoke$arity$1 ? fexpr__41465.cljs$core$IFn$_invoke$arity$1(G__41466) : fexpr__41465.call(null,G__41466));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41900,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41901,actual_type_41970,f_41949], null),canonical_f_41972], 0));

if(cljs.core.truth_(elem_41900.addEventListener)){
elem_41900.addEventListener(cljs.core.name(actual_type_41970),canonical_f_41972);
} else {
elem_41900.attachEvent(cljs.core.name(actual_type_41970),canonical_f_41972);
}


var G__41973 = cljs.core.next(seq__41360_41963__$1);
var G__41974 = null;
var G__41975 = (0);
var G__41976 = (0);
seq__41360_41950 = G__41973;
chunk__41362_41951 = G__41974;
count__41363_41952 = G__41975;
i__41364_41953 = G__41976;
continue;
}
} else {
}
}
break;
}

var G__41977 = cljs.core.next(seq__41359_41941__$1);
var G__41978 = null;
var G__41979 = (0);
var G__41980 = (0);
seq__41359_41902 = G__41977;
chunk__41366_41903 = G__41978;
count__41367_41904 = G__41979;
i__41368_41905 = G__41980;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41354){
var G__41355 = cljs.core.first(seq41354);
var seq41354__$1 = cljs.core.next(seq41354);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41355,seq41354__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41981 = arguments.length;
var i__4790__auto___41982 = (0);
while(true){
if((i__4790__auto___41982 < len__4789__auto___41981)){
args__4795__auto__.push((arguments[i__4790__auto___41982]));

var G__41983 = (i__4790__auto___41982 + (1));
i__4790__auto___41982 = G__41983;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41469_41984 = dommy.core.elem_and_selector(elem_sel);
var elem_41985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41469_41984,(0),null);
var selector_41986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41469_41984,(1),null);
var seq__41472_41987 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41479_41988 = null;
var count__41480_41989 = (0);
var i__41481_41990 = (0);
while(true){
if((i__41481_41990 < count__41480_41989)){
var vec__41518_41991 = chunk__41479_41988.cljs$core$IIndexed$_nth$arity$2(null,i__41481_41990);
var orig_type_41992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41518_41991,(0),null);
var f_41993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41518_41991,(1),null);
var seq__41482_41994 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41992,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41992,cljs.core.identity])));
var chunk__41484_41995 = null;
var count__41485_41996 = (0);
var i__41486_41997 = (0);
while(true){
if((i__41486_41997 < count__41485_41996)){
var vec__41527_41998 = chunk__41484_41995.cljs$core$IIndexed$_nth$arity$2(null,i__41486_41997);
var actual_type_41999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527_41998,(0),null);
var __42000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527_41998,(1),null);
var keys_42001 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41986,actual_type_41999,f_41993], null);
var canonical_f_42002 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41985),keys_42001);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41985,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42001], 0));

if(cljs.core.truth_(elem_41985.removeEventListener)){
elem_41985.removeEventListener(cljs.core.name(actual_type_41999),canonical_f_42002);
} else {
elem_41985.detachEvent(cljs.core.name(actual_type_41999),canonical_f_42002);
}


var G__42003 = seq__41482_41994;
var G__42004 = chunk__41484_41995;
var G__42005 = count__41485_41996;
var G__42006 = (i__41486_41997 + (1));
seq__41482_41994 = G__42003;
chunk__41484_41995 = G__42004;
count__41485_41996 = G__42005;
i__41486_41997 = G__42006;
continue;
} else {
var temp__5735__auto___42007 = cljs.core.seq(seq__41482_41994);
if(temp__5735__auto___42007){
var seq__41482_42008__$1 = temp__5735__auto___42007;
if(cljs.core.chunked_seq_QMARK_(seq__41482_42008__$1)){
var c__4609__auto___42009 = cljs.core.chunk_first(seq__41482_42008__$1);
var G__42010 = cljs.core.chunk_rest(seq__41482_42008__$1);
var G__42011 = c__4609__auto___42009;
var G__42012 = cljs.core.count(c__4609__auto___42009);
var G__42013 = (0);
seq__41482_41994 = G__42010;
chunk__41484_41995 = G__42011;
count__41485_41996 = G__42012;
i__41486_41997 = G__42013;
continue;
} else {
var vec__41530_42014 = cljs.core.first(seq__41482_42008__$1);
var actual_type_42015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41530_42014,(0),null);
var __42016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41530_42014,(1),null);
var keys_42017 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41986,actual_type_42015,f_41993], null);
var canonical_f_42018 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41985),keys_42017);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41985,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42017], 0));

if(cljs.core.truth_(elem_41985.removeEventListener)){
elem_41985.removeEventListener(cljs.core.name(actual_type_42015),canonical_f_42018);
} else {
elem_41985.detachEvent(cljs.core.name(actual_type_42015),canonical_f_42018);
}


var G__42019 = cljs.core.next(seq__41482_42008__$1);
var G__42020 = null;
var G__42021 = (0);
var G__42022 = (0);
seq__41482_41994 = G__42019;
chunk__41484_41995 = G__42020;
count__41485_41996 = G__42021;
i__41486_41997 = G__42022;
continue;
}
} else {
}
}
break;
}

var G__42023 = seq__41472_41987;
var G__42024 = chunk__41479_41988;
var G__42025 = count__41480_41989;
var G__42026 = (i__41481_41990 + (1));
seq__41472_41987 = G__42023;
chunk__41479_41988 = G__42024;
count__41480_41989 = G__42025;
i__41481_41990 = G__42026;
continue;
} else {
var temp__5735__auto___42027 = cljs.core.seq(seq__41472_41987);
if(temp__5735__auto___42027){
var seq__41472_42028__$1 = temp__5735__auto___42027;
if(cljs.core.chunked_seq_QMARK_(seq__41472_42028__$1)){
var c__4609__auto___42029 = cljs.core.chunk_first(seq__41472_42028__$1);
var G__42030 = cljs.core.chunk_rest(seq__41472_42028__$1);
var G__42031 = c__4609__auto___42029;
var G__42032 = cljs.core.count(c__4609__auto___42029);
var G__42033 = (0);
seq__41472_41987 = G__42030;
chunk__41479_41988 = G__42031;
count__41480_41989 = G__42032;
i__41481_41990 = G__42033;
continue;
} else {
var vec__41533_42034 = cljs.core.first(seq__41472_42028__$1);
var orig_type_42035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533_42034,(0),null);
var f_42036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533_42034,(1),null);
var seq__41473_42037 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42035,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42035,cljs.core.identity])));
var chunk__41475_42038 = null;
var count__41476_42039 = (0);
var i__41477_42040 = (0);
while(true){
if((i__41477_42040 < count__41476_42039)){
var vec__41542_42041 = chunk__41475_42038.cljs$core$IIndexed$_nth$arity$2(null,i__41477_42040);
var actual_type_42042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41542_42041,(0),null);
var __42043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41542_42041,(1),null);
var keys_42044 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41986,actual_type_42042,f_42036], null);
var canonical_f_42045 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41985),keys_42044);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41985,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42044], 0));

if(cljs.core.truth_(elem_41985.removeEventListener)){
elem_41985.removeEventListener(cljs.core.name(actual_type_42042),canonical_f_42045);
} else {
elem_41985.detachEvent(cljs.core.name(actual_type_42042),canonical_f_42045);
}


var G__42046 = seq__41473_42037;
var G__42047 = chunk__41475_42038;
var G__42048 = count__41476_42039;
var G__42049 = (i__41477_42040 + (1));
seq__41473_42037 = G__42046;
chunk__41475_42038 = G__42047;
count__41476_42039 = G__42048;
i__41477_42040 = G__42049;
continue;
} else {
var temp__5735__auto___42050__$1 = cljs.core.seq(seq__41473_42037);
if(temp__5735__auto___42050__$1){
var seq__41473_42051__$1 = temp__5735__auto___42050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41473_42051__$1)){
var c__4609__auto___42052 = cljs.core.chunk_first(seq__41473_42051__$1);
var G__42053 = cljs.core.chunk_rest(seq__41473_42051__$1);
var G__42054 = c__4609__auto___42052;
var G__42055 = cljs.core.count(c__4609__auto___42052);
var G__42056 = (0);
seq__41473_42037 = G__42053;
chunk__41475_42038 = G__42054;
count__41476_42039 = G__42055;
i__41477_42040 = G__42056;
continue;
} else {
var vec__41545_42057 = cljs.core.first(seq__41473_42051__$1);
var actual_type_42058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41545_42057,(0),null);
var __42059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41545_42057,(1),null);
var keys_42060 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41986,actual_type_42058,f_42036], null);
var canonical_f_42061 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41985),keys_42060);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41985,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42060], 0));

if(cljs.core.truth_(elem_41985.removeEventListener)){
elem_41985.removeEventListener(cljs.core.name(actual_type_42058),canonical_f_42061);
} else {
elem_41985.detachEvent(cljs.core.name(actual_type_42058),canonical_f_42061);
}


var G__42062 = cljs.core.next(seq__41473_42051__$1);
var G__42063 = null;
var G__42064 = (0);
var G__42065 = (0);
seq__41473_42037 = G__42062;
chunk__41475_42038 = G__42063;
count__41476_42039 = G__42064;
i__41477_42040 = G__42065;
continue;
}
} else {
}
}
break;
}

var G__42066 = cljs.core.next(seq__41472_42028__$1);
var G__42067 = null;
var G__42068 = (0);
var G__42069 = (0);
seq__41472_41987 = G__42066;
chunk__41479_41988 = G__42067;
count__41480_41989 = G__42068;
i__41481_41990 = G__42069;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41467){
var G__41468 = cljs.core.first(seq41467);
var seq41467__$1 = cljs.core.next(seq41467);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41468,seq41467__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42070 = arguments.length;
var i__4790__auto___42071 = (0);
while(true){
if((i__4790__auto___42071 < len__4789__auto___42070)){
args__4795__auto__.push((arguments[i__4790__auto___42071]));

var G__42072 = (i__4790__auto___42071 + (1));
i__4790__auto___42071 = G__42072;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41550_42073 = dommy.core.elem_and_selector(elem_sel);
var elem_42074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41550_42073,(0),null);
var selector_42075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41550_42073,(1),null);
var seq__41553_42076 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41554_42077 = null;
var count__41555_42078 = (0);
var i__41556_42079 = (0);
while(true){
if((i__41556_42079 < count__41555_42078)){
var vec__41563_42080 = chunk__41554_42077.cljs$core$IIndexed$_nth$arity$2(null,i__41556_42079);
var type_42081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41563_42080,(0),null);
var f_42082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41563_42080,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42081,((function (seq__41553_42076,chunk__41554_42077,count__41555_42078,i__41556_42079,vec__41563_42080,type_42081,f_42082,vec__41550_42073,elem_42074,selector_42075){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42081,dommy$core$this_fn], 0));

return (f_42082.cljs$core$IFn$_invoke$arity$1 ? f_42082.cljs$core$IFn$_invoke$arity$1(e) : f_42082.call(null,e));
});})(seq__41553_42076,chunk__41554_42077,count__41555_42078,i__41556_42079,vec__41563_42080,type_42081,f_42082,vec__41550_42073,elem_42074,selector_42075))
], 0));


var G__42083 = seq__41553_42076;
var G__42084 = chunk__41554_42077;
var G__42085 = count__41555_42078;
var G__42086 = (i__41556_42079 + (1));
seq__41553_42076 = G__42083;
chunk__41554_42077 = G__42084;
count__41555_42078 = G__42085;
i__41556_42079 = G__42086;
continue;
} else {
var temp__5735__auto___42087 = cljs.core.seq(seq__41553_42076);
if(temp__5735__auto___42087){
var seq__41553_42088__$1 = temp__5735__auto___42087;
if(cljs.core.chunked_seq_QMARK_(seq__41553_42088__$1)){
var c__4609__auto___42089 = cljs.core.chunk_first(seq__41553_42088__$1);
var G__42090 = cljs.core.chunk_rest(seq__41553_42088__$1);
var G__42091 = c__4609__auto___42089;
var G__42092 = cljs.core.count(c__4609__auto___42089);
var G__42093 = (0);
seq__41553_42076 = G__42090;
chunk__41554_42077 = G__42091;
count__41555_42078 = G__42092;
i__41556_42079 = G__42093;
continue;
} else {
var vec__41566_42094 = cljs.core.first(seq__41553_42088__$1);
var type_42095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41566_42094,(0),null);
var f_42096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41566_42094,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42095,((function (seq__41553_42076,chunk__41554_42077,count__41555_42078,i__41556_42079,vec__41566_42094,type_42095,f_42096,seq__41553_42088__$1,temp__5735__auto___42087,vec__41550_42073,elem_42074,selector_42075){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42095,dommy$core$this_fn], 0));

return (f_42096.cljs$core$IFn$_invoke$arity$1 ? f_42096.cljs$core$IFn$_invoke$arity$1(e) : f_42096.call(null,e));
});})(seq__41553_42076,chunk__41554_42077,count__41555_42078,i__41556_42079,vec__41566_42094,type_42095,f_42096,seq__41553_42088__$1,temp__5735__auto___42087,vec__41550_42073,elem_42074,selector_42075))
], 0));


var G__42097 = cljs.core.next(seq__41553_42088__$1);
var G__42098 = null;
var G__42099 = (0);
var G__42100 = (0);
seq__41553_42076 = G__42097;
chunk__41554_42077 = G__42098;
count__41555_42078 = G__42099;
i__41556_42079 = G__42100;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41548){
var G__41549 = cljs.core.first(seq41548);
var seq41548__$1 = cljs.core.next(seq41548);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41549,seq41548__$1);
}));


//# sourceMappingURL=dommy.core.js.map
