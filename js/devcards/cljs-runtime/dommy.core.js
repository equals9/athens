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
var G__41188 = arguments.length;
switch (G__41188) {
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
var G__41198 = arguments.length;
switch (G__41198) {
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
var G__41202 = arguments.length;
switch (G__41202) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41199_SHARP_){
return (!((p1__41199_SHARP_ === base)));
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
var len__4789__auto___41565 = arguments.length;
var i__4790__auto___41566 = (0);
while(true){
if((i__4790__auto___41566 < len__4789__auto___41565)){
args__4795__auto__.push((arguments[i__4790__auto___41566]));

var G__41567 = (i__4790__auto___41566 + (1));
i__4790__auto___41566 = G__41567;
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
var seq__41208_41572 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41209_41573 = null;
var count__41210_41574 = (0);
var i__41211_41575 = (0);
while(true){
if((i__41211_41575 < count__41210_41574)){
var vec__41218_41576 = chunk__41209_41573.cljs$core$IIndexed$_nth$arity$2(null,i__41211_41575);
var k_41577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41576,(0),null);
var v_41578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41576,(1),null);
style.setProperty(dommy.utils.as_str(k_41577),v_41578);


var G__41579 = seq__41208_41572;
var G__41580 = chunk__41209_41573;
var G__41581 = count__41210_41574;
var G__41582 = (i__41211_41575 + (1));
seq__41208_41572 = G__41579;
chunk__41209_41573 = G__41580;
count__41210_41574 = G__41581;
i__41211_41575 = G__41582;
continue;
} else {
var temp__5735__auto___41583 = cljs.core.seq(seq__41208_41572);
if(temp__5735__auto___41583){
var seq__41208_41584__$1 = temp__5735__auto___41583;
if(cljs.core.chunked_seq_QMARK_(seq__41208_41584__$1)){
var c__4609__auto___41585 = cljs.core.chunk_first(seq__41208_41584__$1);
var G__41586 = cljs.core.chunk_rest(seq__41208_41584__$1);
var G__41587 = c__4609__auto___41585;
var G__41588 = cljs.core.count(c__4609__auto___41585);
var G__41589 = (0);
seq__41208_41572 = G__41586;
chunk__41209_41573 = G__41587;
count__41210_41574 = G__41588;
i__41211_41575 = G__41589;
continue;
} else {
var vec__41221_41590 = cljs.core.first(seq__41208_41584__$1);
var k_41591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41590,(0),null);
var v_41592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41590,(1),null);
style.setProperty(dommy.utils.as_str(k_41591),v_41592);


var G__41593 = cljs.core.next(seq__41208_41584__$1);
var G__41594 = null;
var G__41595 = (0);
var G__41596 = (0);
seq__41208_41572 = G__41593;
chunk__41209_41573 = G__41594;
count__41210_41574 = G__41595;
i__41211_41575 = G__41596;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41206){
var G__41207 = cljs.core.first(seq41206);
var seq41206__$1 = cljs.core.next(seq41206);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41207,seq41206__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41597 = arguments.length;
var i__4790__auto___41598 = (0);
while(true){
if((i__4790__auto___41598 < len__4789__auto___41597)){
args__4795__auto__.push((arguments[i__4790__auto___41598]));

var G__41599 = (i__4790__auto___41598 + (1));
i__4790__auto___41598 = G__41599;
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
var seq__41226_41600 = cljs.core.seq(keywords);
var chunk__41227_41601 = null;
var count__41228_41602 = (0);
var i__41229_41603 = (0);
while(true){
if((i__41229_41603 < count__41228_41602)){
var kw_41604 = chunk__41227_41601.cljs$core$IIndexed$_nth$arity$2(null,i__41229_41603);
style.removeProperty(dommy.utils.as_str(kw_41604));


var G__41605 = seq__41226_41600;
var G__41606 = chunk__41227_41601;
var G__41607 = count__41228_41602;
var G__41608 = (i__41229_41603 + (1));
seq__41226_41600 = G__41605;
chunk__41227_41601 = G__41606;
count__41228_41602 = G__41607;
i__41229_41603 = G__41608;
continue;
} else {
var temp__5735__auto___41609 = cljs.core.seq(seq__41226_41600);
if(temp__5735__auto___41609){
var seq__41226_41610__$1 = temp__5735__auto___41609;
if(cljs.core.chunked_seq_QMARK_(seq__41226_41610__$1)){
var c__4609__auto___41611 = cljs.core.chunk_first(seq__41226_41610__$1);
var G__41612 = cljs.core.chunk_rest(seq__41226_41610__$1);
var G__41613 = c__4609__auto___41611;
var G__41614 = cljs.core.count(c__4609__auto___41611);
var G__41615 = (0);
seq__41226_41600 = G__41612;
chunk__41227_41601 = G__41613;
count__41228_41602 = G__41614;
i__41229_41603 = G__41615;
continue;
} else {
var kw_41617 = cljs.core.first(seq__41226_41610__$1);
style.removeProperty(dommy.utils.as_str(kw_41617));


var G__41618 = cljs.core.next(seq__41226_41610__$1);
var G__41619 = null;
var G__41620 = (0);
var G__41621 = (0);
seq__41226_41600 = G__41618;
chunk__41227_41601 = G__41619;
count__41228_41602 = G__41620;
i__41229_41603 = G__41621;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41224){
var G__41225 = cljs.core.first(seq41224);
var seq41224__$1 = cljs.core.next(seq41224);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41225,seq41224__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41622 = arguments.length;
var i__4790__auto___41623 = (0);
while(true){
if((i__4790__auto___41623 < len__4789__auto___41622)){
args__4795__auto__.push((arguments[i__4790__auto___41623]));

var G__41624 = (i__4790__auto___41623 + (1));
i__4790__auto___41623 = G__41624;
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

var seq__41232_41629 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41233_41630 = null;
var count__41234_41631 = (0);
var i__41235_41632 = (0);
while(true){
if((i__41235_41632 < count__41234_41631)){
var vec__41242_41633 = chunk__41233_41630.cljs$core$IIndexed$_nth$arity$2(null,i__41235_41632);
var k_41634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41633,(0),null);
var v_41635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41633,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41634,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41635),"px"].join('')], 0));


var G__41636 = seq__41232_41629;
var G__41637 = chunk__41233_41630;
var G__41638 = count__41234_41631;
var G__41639 = (i__41235_41632 + (1));
seq__41232_41629 = G__41636;
chunk__41233_41630 = G__41637;
count__41234_41631 = G__41638;
i__41235_41632 = G__41639;
continue;
} else {
var temp__5735__auto___41640 = cljs.core.seq(seq__41232_41629);
if(temp__5735__auto___41640){
var seq__41232_41642__$1 = temp__5735__auto___41640;
if(cljs.core.chunked_seq_QMARK_(seq__41232_41642__$1)){
var c__4609__auto___41643 = cljs.core.chunk_first(seq__41232_41642__$1);
var G__41644 = cljs.core.chunk_rest(seq__41232_41642__$1);
var G__41645 = c__4609__auto___41643;
var G__41646 = cljs.core.count(c__4609__auto___41643);
var G__41647 = (0);
seq__41232_41629 = G__41644;
chunk__41233_41630 = G__41645;
count__41234_41631 = G__41646;
i__41235_41632 = G__41647;
continue;
} else {
var vec__41245_41650 = cljs.core.first(seq__41232_41642__$1);
var k_41651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41650,(0),null);
var v_41652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41650,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41651,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41652),"px"].join('')], 0));


var G__41653 = cljs.core.next(seq__41232_41642__$1);
var G__41654 = null;
var G__41655 = (0);
var G__41656 = (0);
seq__41232_41629 = G__41653;
chunk__41233_41630 = G__41654;
count__41234_41631 = G__41655;
i__41235_41632 = G__41656;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41230){
var G__41231 = cljs.core.first(seq41230);
var seq41230__$1 = cljs.core.next(seq41230);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41231,seq41230__$1);
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
var G__41253 = arguments.length;
switch (G__41253) {
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
var G__41254 = elem;
(G__41254[k__$1] = v);

return G__41254;
} else {
var G__41255 = elem;
G__41255.setAttribute(k__$1,v);

return G__41255;
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

var seq__41256_41666 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41257_41667 = null;
var count__41258_41668 = (0);
var i__41259_41669 = (0);
while(true){
if((i__41259_41669 < count__41258_41668)){
var vec__41266_41670 = chunk__41257_41667.cljs$core$IIndexed$_nth$arity$2(null,i__41259_41669);
var k_41671__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41266_41670,(0),null);
var v_41672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41266_41670,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41671__$1,v_41672__$1);


var G__41673 = seq__41256_41666;
var G__41674 = chunk__41257_41667;
var G__41675 = count__41258_41668;
var G__41676 = (i__41259_41669 + (1));
seq__41256_41666 = G__41673;
chunk__41257_41667 = G__41674;
count__41258_41668 = G__41675;
i__41259_41669 = G__41676;
continue;
} else {
var temp__5735__auto___41677 = cljs.core.seq(seq__41256_41666);
if(temp__5735__auto___41677){
var seq__41256_41678__$1 = temp__5735__auto___41677;
if(cljs.core.chunked_seq_QMARK_(seq__41256_41678__$1)){
var c__4609__auto___41679 = cljs.core.chunk_first(seq__41256_41678__$1);
var G__41680 = cljs.core.chunk_rest(seq__41256_41678__$1);
var G__41681 = c__4609__auto___41679;
var G__41682 = cljs.core.count(c__4609__auto___41679);
var G__41683 = (0);
seq__41256_41666 = G__41680;
chunk__41257_41667 = G__41681;
count__41258_41668 = G__41682;
i__41259_41669 = G__41683;
continue;
} else {
var vec__41269_41685 = cljs.core.first(seq__41256_41678__$1);
var k_41686__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41269_41685,(0),null);
var v_41687__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41269_41685,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41686__$1,v_41687__$1);


var G__41690 = cljs.core.next(seq__41256_41678__$1);
var G__41691 = null;
var G__41692 = (0);
var G__41693 = (0);
seq__41256_41666 = G__41690;
chunk__41257_41667 = G__41691;
count__41258_41668 = G__41692;
i__41259_41669 = G__41693;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41249){
var G__41250 = cljs.core.first(seq41249);
var seq41249__$1 = cljs.core.next(seq41249);
var G__41251 = cljs.core.first(seq41249__$1);
var seq41249__$2 = cljs.core.next(seq41249__$1);
var G__41252 = cljs.core.first(seq41249__$2);
var seq41249__$3 = cljs.core.next(seq41249__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41250,G__41251,G__41252,seq41249__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41276 = arguments.length;
switch (G__41276) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41695 = arguments.length;
var i__4790__auto___41696 = (0);
while(true){
if((i__4790__auto___41696 < len__4789__auto___41695)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41696]));

var G__41697 = (i__4790__auto___41696 + (1));
i__4790__auto___41696 = G__41697;
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
var k_41698__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41277 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41277.cljs$core$IFn$_invoke$arity$1 ? fexpr__41277.cljs$core$IFn$_invoke$arity$1(k_41698__$1) : fexpr__41277.call(null,k_41698__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41698__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41278_41699 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41279_41700 = null;
var count__41280_41701 = (0);
var i__41281_41702 = (0);
while(true){
if((i__41281_41702 < count__41280_41701)){
var k_41703__$1 = chunk__41279_41700.cljs$core$IIndexed$_nth$arity$2(null,i__41281_41702);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41703__$1);


var G__41704 = seq__41278_41699;
var G__41705 = chunk__41279_41700;
var G__41706 = count__41280_41701;
var G__41707 = (i__41281_41702 + (1));
seq__41278_41699 = G__41704;
chunk__41279_41700 = G__41705;
count__41280_41701 = G__41706;
i__41281_41702 = G__41707;
continue;
} else {
var temp__5735__auto___41708 = cljs.core.seq(seq__41278_41699);
if(temp__5735__auto___41708){
var seq__41278_41709__$1 = temp__5735__auto___41708;
if(cljs.core.chunked_seq_QMARK_(seq__41278_41709__$1)){
var c__4609__auto___41710 = cljs.core.chunk_first(seq__41278_41709__$1);
var G__41711 = cljs.core.chunk_rest(seq__41278_41709__$1);
var G__41712 = c__4609__auto___41710;
var G__41713 = cljs.core.count(c__4609__auto___41710);
var G__41714 = (0);
seq__41278_41699 = G__41711;
chunk__41279_41700 = G__41712;
count__41280_41701 = G__41713;
i__41281_41702 = G__41714;
continue;
} else {
var k_41715__$1 = cljs.core.first(seq__41278_41709__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41715__$1);


var G__41716 = cljs.core.next(seq__41278_41709__$1);
var G__41717 = null;
var G__41718 = (0);
var G__41719 = (0);
seq__41278_41699 = G__41716;
chunk__41279_41700 = G__41717;
count__41280_41701 = G__41718;
i__41281_41702 = G__41719;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41273){
var G__41274 = cljs.core.first(seq41273);
var seq41273__$1 = cljs.core.next(seq41273);
var G__41275 = cljs.core.first(seq41273__$1);
var seq41273__$2 = cljs.core.next(seq41273__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41274,G__41275,seq41273__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41283 = arguments.length;
switch (G__41283) {
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
var G__41288 = arguments.length;
switch (G__41288) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41722 = arguments.length;
var i__4790__auto___41723 = (0);
while(true){
if((i__4790__auto___41723 < len__4789__auto___41722)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41723]));

var G__41724 = (i__4790__auto___41723 + (1));
i__4790__auto___41723 = G__41724;
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
var temp__5733__auto___41725 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41725)){
var class_list_41726 = temp__5733__auto___41725;
var seq__41289_41727 = cljs.core.seq(classes__$1);
var chunk__41290_41728 = null;
var count__41291_41729 = (0);
var i__41292_41730 = (0);
while(true){
if((i__41292_41730 < count__41291_41729)){
var c_41735 = chunk__41290_41728.cljs$core$IIndexed$_nth$arity$2(null,i__41292_41730);
class_list_41726.add(c_41735);


var G__41736 = seq__41289_41727;
var G__41737 = chunk__41290_41728;
var G__41738 = count__41291_41729;
var G__41739 = (i__41292_41730 + (1));
seq__41289_41727 = G__41736;
chunk__41290_41728 = G__41737;
count__41291_41729 = G__41738;
i__41292_41730 = G__41739;
continue;
} else {
var temp__5735__auto___41740 = cljs.core.seq(seq__41289_41727);
if(temp__5735__auto___41740){
var seq__41289_41745__$1 = temp__5735__auto___41740;
if(cljs.core.chunked_seq_QMARK_(seq__41289_41745__$1)){
var c__4609__auto___41746 = cljs.core.chunk_first(seq__41289_41745__$1);
var G__41747 = cljs.core.chunk_rest(seq__41289_41745__$1);
var G__41748 = c__4609__auto___41746;
var G__41749 = cljs.core.count(c__4609__auto___41746);
var G__41750 = (0);
seq__41289_41727 = G__41747;
chunk__41290_41728 = G__41748;
count__41291_41729 = G__41749;
i__41292_41730 = G__41750;
continue;
} else {
var c_41755 = cljs.core.first(seq__41289_41745__$1);
class_list_41726.add(c_41755);


var G__41756 = cljs.core.next(seq__41289_41745__$1);
var G__41757 = null;
var G__41758 = (0);
var G__41759 = (0);
seq__41289_41727 = G__41756;
chunk__41290_41728 = G__41757;
count__41291_41729 = G__41758;
i__41292_41730 = G__41759;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41293_41760 = cljs.core.seq(classes__$1);
var chunk__41294_41761 = null;
var count__41295_41762 = (0);
var i__41296_41763 = (0);
while(true){
if((i__41296_41763 < count__41295_41762)){
var c_41764 = chunk__41294_41761.cljs$core$IIndexed$_nth$arity$2(null,i__41296_41763);
var class_name_41765 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41765,c_41764))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41765 === ""))?c_41764:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41765)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41764)].join('')));
}


var G__41766 = seq__41293_41760;
var G__41767 = chunk__41294_41761;
var G__41768 = count__41295_41762;
var G__41769 = (i__41296_41763 + (1));
seq__41293_41760 = G__41766;
chunk__41294_41761 = G__41767;
count__41295_41762 = G__41768;
i__41296_41763 = G__41769;
continue;
} else {
var temp__5735__auto___41770 = cljs.core.seq(seq__41293_41760);
if(temp__5735__auto___41770){
var seq__41293_41771__$1 = temp__5735__auto___41770;
if(cljs.core.chunked_seq_QMARK_(seq__41293_41771__$1)){
var c__4609__auto___41772 = cljs.core.chunk_first(seq__41293_41771__$1);
var G__41774 = cljs.core.chunk_rest(seq__41293_41771__$1);
var G__41775 = c__4609__auto___41772;
var G__41776 = cljs.core.count(c__4609__auto___41772);
var G__41777 = (0);
seq__41293_41760 = G__41774;
chunk__41294_41761 = G__41775;
count__41295_41762 = G__41776;
i__41296_41763 = G__41777;
continue;
} else {
var c_41778 = cljs.core.first(seq__41293_41771__$1);
var class_name_41779 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41779,c_41778))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41779 === ""))?c_41778:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41779)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41778)].join('')));
}


var G__41780 = cljs.core.next(seq__41293_41771__$1);
var G__41781 = null;
var G__41782 = (0);
var G__41783 = (0);
seq__41293_41760 = G__41780;
chunk__41294_41761 = G__41781;
count__41295_41762 = G__41782;
i__41296_41763 = G__41783;
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
var seq__41297_41785 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41298_41786 = null;
var count__41299_41787 = (0);
var i__41300_41788 = (0);
while(true){
if((i__41300_41788 < count__41299_41787)){
var c_41789 = chunk__41298_41786.cljs$core$IIndexed$_nth$arity$2(null,i__41300_41788);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41789);


var G__41790 = seq__41297_41785;
var G__41791 = chunk__41298_41786;
var G__41792 = count__41299_41787;
var G__41793 = (i__41300_41788 + (1));
seq__41297_41785 = G__41790;
chunk__41298_41786 = G__41791;
count__41299_41787 = G__41792;
i__41300_41788 = G__41793;
continue;
} else {
var temp__5735__auto___41794 = cljs.core.seq(seq__41297_41785);
if(temp__5735__auto___41794){
var seq__41297_41795__$1 = temp__5735__auto___41794;
if(cljs.core.chunked_seq_QMARK_(seq__41297_41795__$1)){
var c__4609__auto___41796 = cljs.core.chunk_first(seq__41297_41795__$1);
var G__41798 = cljs.core.chunk_rest(seq__41297_41795__$1);
var G__41799 = c__4609__auto___41796;
var G__41800 = cljs.core.count(c__4609__auto___41796);
var G__41801 = (0);
seq__41297_41785 = G__41798;
chunk__41298_41786 = G__41799;
count__41299_41787 = G__41800;
i__41300_41788 = G__41801;
continue;
} else {
var c_41802 = cljs.core.first(seq__41297_41795__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41802);


var G__41804 = cljs.core.next(seq__41297_41795__$1);
var G__41805 = null;
var G__41806 = (0);
var G__41807 = (0);
seq__41297_41785 = G__41804;
chunk__41298_41786 = G__41805;
count__41299_41787 = G__41806;
i__41300_41788 = G__41807;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41285){
var G__41286 = cljs.core.first(seq41285);
var seq41285__$1 = cljs.core.next(seq41285);
var G__41287 = cljs.core.first(seq41285__$1);
var seq41285__$2 = cljs.core.next(seq41285__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41286,G__41287,seq41285__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41305 = arguments.length;
switch (G__41305) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41809 = arguments.length;
var i__4790__auto___41810 = (0);
while(true){
if((i__4790__auto___41810 < len__4789__auto___41809)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41810]));

var G__41811 = (i__4790__auto___41810 + (1));
i__4790__auto___41810 = G__41811;
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
var temp__5733__auto___41812 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41812)){
var class_list_41813 = temp__5733__auto___41812;
class_list_41813.remove(c__$1);
} else {
var class_name_41814 = dommy.core.class$(elem);
var new_class_name_41815 = dommy.utils.remove_class_str(class_name_41814,c__$1);
if((class_name_41814 === new_class_name_41815)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41815);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41306 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41307 = null;
var count__41308 = (0);
var i__41309 = (0);
while(true){
if((i__41309 < count__41308)){
var c = chunk__41307.cljs$core$IIndexed$_nth$arity$2(null,i__41309);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41816 = seq__41306;
var G__41817 = chunk__41307;
var G__41818 = count__41308;
var G__41819 = (i__41309 + (1));
seq__41306 = G__41816;
chunk__41307 = G__41817;
count__41308 = G__41818;
i__41309 = G__41819;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41306);
if(temp__5735__auto__){
var seq__41306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41306__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41306__$1);
var G__41820 = cljs.core.chunk_rest(seq__41306__$1);
var G__41821 = c__4609__auto__;
var G__41822 = cljs.core.count(c__4609__auto__);
var G__41823 = (0);
seq__41306 = G__41820;
chunk__41307 = G__41821;
count__41308 = G__41822;
i__41309 = G__41823;
continue;
} else {
var c = cljs.core.first(seq__41306__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41824 = cljs.core.next(seq__41306__$1);
var G__41825 = null;
var G__41826 = (0);
var G__41827 = (0);
seq__41306 = G__41824;
chunk__41307 = G__41825;
count__41308 = G__41826;
i__41309 = G__41827;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41302){
var G__41303 = cljs.core.first(seq41302);
var seq41302__$1 = cljs.core.next(seq41302);
var G__41304 = cljs.core.first(seq41302__$1);
var seq41302__$2 = cljs.core.next(seq41302__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41303,G__41304,seq41302__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41311 = arguments.length;
switch (G__41311) {
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
var temp__5733__auto___41829 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41829)){
var class_list_41830 = temp__5733__auto___41829;
class_list_41830.toggle(c__$1);
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
var G__41313 = arguments.length;
switch (G__41313) {
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
var G__41315 = arguments.length;
switch (G__41315) {
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
var G__41320 = arguments.length;
switch (G__41320) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41834 = arguments.length;
var i__4790__auto___41835 = (0);
while(true){
if((i__4790__auto___41835 < len__4789__auto___41834)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41835]));

var G__41836 = (i__4790__auto___41835 + (1));
i__4790__auto___41835 = G__41836;
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
var G__41321 = parent;
G__41321.appendChild(child);

return G__41321;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41322_41837 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41323_41838 = null;
var count__41324_41839 = (0);
var i__41325_41840 = (0);
while(true){
if((i__41325_41840 < count__41324_41839)){
var c_41841 = chunk__41323_41838.cljs$core$IIndexed$_nth$arity$2(null,i__41325_41840);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41841);


var G__41842 = seq__41322_41837;
var G__41843 = chunk__41323_41838;
var G__41844 = count__41324_41839;
var G__41845 = (i__41325_41840 + (1));
seq__41322_41837 = G__41842;
chunk__41323_41838 = G__41843;
count__41324_41839 = G__41844;
i__41325_41840 = G__41845;
continue;
} else {
var temp__5735__auto___41846 = cljs.core.seq(seq__41322_41837);
if(temp__5735__auto___41846){
var seq__41322_41847__$1 = temp__5735__auto___41846;
if(cljs.core.chunked_seq_QMARK_(seq__41322_41847__$1)){
var c__4609__auto___41848 = cljs.core.chunk_first(seq__41322_41847__$1);
var G__41849 = cljs.core.chunk_rest(seq__41322_41847__$1);
var G__41850 = c__4609__auto___41848;
var G__41851 = cljs.core.count(c__4609__auto___41848);
var G__41852 = (0);
seq__41322_41837 = G__41849;
chunk__41323_41838 = G__41850;
count__41324_41839 = G__41851;
i__41325_41840 = G__41852;
continue;
} else {
var c_41853 = cljs.core.first(seq__41322_41847__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41853);


var G__41854 = cljs.core.next(seq__41322_41847__$1);
var G__41855 = null;
var G__41856 = (0);
var G__41857 = (0);
seq__41322_41837 = G__41854;
chunk__41323_41838 = G__41855;
count__41324_41839 = G__41856;
i__41325_41840 = G__41857;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41317){
var G__41318 = cljs.core.first(seq41317);
var seq41317__$1 = cljs.core.next(seq41317);
var G__41319 = cljs.core.first(seq41317__$1);
var seq41317__$2 = cljs.core.next(seq41317__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41318,G__41319,seq41317__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41330 = arguments.length;
switch (G__41330) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41859 = arguments.length;
var i__4790__auto___41860 = (0);
while(true){
if((i__4790__auto___41860 < len__4789__auto___41859)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41860]));

var G__41861 = (i__4790__auto___41860 + (1));
i__4790__auto___41860 = G__41861;
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
var G__41331 = parent;
G__41331.insertBefore(child,parent.firstChild);

return G__41331;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41332_41862 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41333_41863 = null;
var count__41334_41864 = (0);
var i__41335_41865 = (0);
while(true){
if((i__41335_41865 < count__41334_41864)){
var c_41866 = chunk__41333_41863.cljs$core$IIndexed$_nth$arity$2(null,i__41335_41865);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41866);


var G__41867 = seq__41332_41862;
var G__41868 = chunk__41333_41863;
var G__41869 = count__41334_41864;
var G__41870 = (i__41335_41865 + (1));
seq__41332_41862 = G__41867;
chunk__41333_41863 = G__41868;
count__41334_41864 = G__41869;
i__41335_41865 = G__41870;
continue;
} else {
var temp__5735__auto___41871 = cljs.core.seq(seq__41332_41862);
if(temp__5735__auto___41871){
var seq__41332_41872__$1 = temp__5735__auto___41871;
if(cljs.core.chunked_seq_QMARK_(seq__41332_41872__$1)){
var c__4609__auto___41873 = cljs.core.chunk_first(seq__41332_41872__$1);
var G__41874 = cljs.core.chunk_rest(seq__41332_41872__$1);
var G__41875 = c__4609__auto___41873;
var G__41876 = cljs.core.count(c__4609__auto___41873);
var G__41877 = (0);
seq__41332_41862 = G__41874;
chunk__41333_41863 = G__41875;
count__41334_41864 = G__41876;
i__41335_41865 = G__41877;
continue;
} else {
var c_41878 = cljs.core.first(seq__41332_41872__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41878);


var G__41879 = cljs.core.next(seq__41332_41872__$1);
var G__41880 = null;
var G__41881 = (0);
var G__41882 = (0);
seq__41332_41862 = G__41879;
chunk__41333_41863 = G__41880;
count__41334_41864 = G__41881;
i__41335_41865 = G__41882;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41327){
var G__41328 = cljs.core.first(seq41327);
var seq41327__$1 = cljs.core.next(seq41327);
var G__41329 = cljs.core.first(seq41327__$1);
var seq41327__$2 = cljs.core.next(seq41327__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41328,G__41329,seq41327__$2);
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
var temp__5733__auto___41883 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41883)){
var next_41884 = temp__5733__auto___41883;
dommy.core.insert_before_BANG_(elem,next_41884);
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
var G__41337 = arguments.length;
switch (G__41337) {
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
var G__41338 = p;
G__41338.removeChild(elem);

return G__41338;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41339){
var vec__41340 = p__41339;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41340,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41340,(1),null);
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
var len__4789__auto___41886 = arguments.length;
var i__4790__auto___41887 = (0);
while(true){
if((i__4790__auto___41887 < len__4789__auto___41886)){
args__4795__auto__.push((arguments[i__4790__auto___41887]));

var G__41888 = (i__4790__auto___41887 + (1));
i__4790__auto___41887 = G__41888;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41343){
var G__41344 = cljs.core.first(seq41343);
var seq41343__$1 = cljs.core.next(seq41343);
var G__41345 = cljs.core.first(seq41343__$1);
var seq41343__$2 = cljs.core.next(seq41343__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41344,G__41345,seq41343__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41346 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41346.cljs$core$IFn$_invoke$arity$1 ? fexpr__41346.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41346.call(null,elem_sel));
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
var len__4789__auto___41889 = arguments.length;
var i__4790__auto___41890 = (0);
while(true){
if((i__4790__auto___41890 < len__4789__auto___41889)){
args__4795__auto__.push((arguments[i__4790__auto___41890]));

var G__41891 = (i__4790__auto___41890 + (1));
i__4790__auto___41890 = G__41891;
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

var vec__41349_41892 = dommy.core.elem_and_selector(elem_sel);
var elem_41893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41349_41892,(0),null);
var selector_41894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41349_41892,(1),null);
var seq__41352_41895 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41359_41896 = null;
var count__41360_41897 = (0);
var i__41361_41898 = (0);
while(true){
if((i__41361_41898 < count__41360_41897)){
var vec__41414_41899 = chunk__41359_41896.cljs$core$IIndexed$_nth$arity$2(null,i__41361_41898);
var orig_type_41900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41414_41899,(0),null);
var f_41901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41414_41899,(1),null);
var seq__41362_41902 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41900,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41900,cljs.core.identity])));
var chunk__41364_41903 = null;
var count__41365_41904 = (0);
var i__41366_41905 = (0);
while(true){
if((i__41366_41905 < count__41365_41904)){
var vec__41427_41906 = chunk__41364_41903.cljs$core$IIndexed$_nth$arity$2(null,i__41366_41905);
var actual_type_41907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41427_41906,(0),null);
var factory_41908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41427_41906,(1),null);
var canonical_f_41909 = (function (){var G__41431 = (factory_41908.cljs$core$IFn$_invoke$arity$1 ? factory_41908.cljs$core$IFn$_invoke$arity$1(f_41901) : factory_41908.call(null,f_41901));
var fexpr__41430 = (cljs.core.truth_(selector_41894)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41893,selector_41894):cljs.core.identity);
return (fexpr__41430.cljs$core$IFn$_invoke$arity$1 ? fexpr__41430.cljs$core$IFn$_invoke$arity$1(G__41431) : fexpr__41430.call(null,G__41431));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41893,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41894,actual_type_41907,f_41901], null),canonical_f_41909], 0));

if(cljs.core.truth_(elem_41893.addEventListener)){
elem_41893.addEventListener(cljs.core.name(actual_type_41907),canonical_f_41909);
} else {
elem_41893.attachEvent(cljs.core.name(actual_type_41907),canonical_f_41909);
}


var G__41910 = seq__41362_41902;
var G__41911 = chunk__41364_41903;
var G__41912 = count__41365_41904;
var G__41913 = (i__41366_41905 + (1));
seq__41362_41902 = G__41910;
chunk__41364_41903 = G__41911;
count__41365_41904 = G__41912;
i__41366_41905 = G__41913;
continue;
} else {
var temp__5735__auto___41914 = cljs.core.seq(seq__41362_41902);
if(temp__5735__auto___41914){
var seq__41362_41915__$1 = temp__5735__auto___41914;
if(cljs.core.chunked_seq_QMARK_(seq__41362_41915__$1)){
var c__4609__auto___41916 = cljs.core.chunk_first(seq__41362_41915__$1);
var G__41917 = cljs.core.chunk_rest(seq__41362_41915__$1);
var G__41918 = c__4609__auto___41916;
var G__41919 = cljs.core.count(c__4609__auto___41916);
var G__41920 = (0);
seq__41362_41902 = G__41917;
chunk__41364_41903 = G__41918;
count__41365_41904 = G__41919;
i__41366_41905 = G__41920;
continue;
} else {
var vec__41432_41921 = cljs.core.first(seq__41362_41915__$1);
var actual_type_41922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41432_41921,(0),null);
var factory_41923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41432_41921,(1),null);
var canonical_f_41924 = (function (){var G__41436 = (factory_41923.cljs$core$IFn$_invoke$arity$1 ? factory_41923.cljs$core$IFn$_invoke$arity$1(f_41901) : factory_41923.call(null,f_41901));
var fexpr__41435 = (cljs.core.truth_(selector_41894)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41893,selector_41894):cljs.core.identity);
return (fexpr__41435.cljs$core$IFn$_invoke$arity$1 ? fexpr__41435.cljs$core$IFn$_invoke$arity$1(G__41436) : fexpr__41435.call(null,G__41436));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41893,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41894,actual_type_41922,f_41901], null),canonical_f_41924], 0));

if(cljs.core.truth_(elem_41893.addEventListener)){
elem_41893.addEventListener(cljs.core.name(actual_type_41922),canonical_f_41924);
} else {
elem_41893.attachEvent(cljs.core.name(actual_type_41922),canonical_f_41924);
}


var G__41925 = cljs.core.next(seq__41362_41915__$1);
var G__41926 = null;
var G__41927 = (0);
var G__41928 = (0);
seq__41362_41902 = G__41925;
chunk__41364_41903 = G__41926;
count__41365_41904 = G__41927;
i__41366_41905 = G__41928;
continue;
}
} else {
}
}
break;
}

var G__41929 = seq__41352_41895;
var G__41930 = chunk__41359_41896;
var G__41931 = count__41360_41897;
var G__41932 = (i__41361_41898 + (1));
seq__41352_41895 = G__41929;
chunk__41359_41896 = G__41930;
count__41360_41897 = G__41931;
i__41361_41898 = G__41932;
continue;
} else {
var temp__5735__auto___41933 = cljs.core.seq(seq__41352_41895);
if(temp__5735__auto___41933){
var seq__41352_41934__$1 = temp__5735__auto___41933;
if(cljs.core.chunked_seq_QMARK_(seq__41352_41934__$1)){
var c__4609__auto___41935 = cljs.core.chunk_first(seq__41352_41934__$1);
var G__41936 = cljs.core.chunk_rest(seq__41352_41934__$1);
var G__41937 = c__4609__auto___41935;
var G__41938 = cljs.core.count(c__4609__auto___41935);
var G__41939 = (0);
seq__41352_41895 = G__41936;
chunk__41359_41896 = G__41937;
count__41360_41897 = G__41938;
i__41361_41898 = G__41939;
continue;
} else {
var vec__41437_41940 = cljs.core.first(seq__41352_41934__$1);
var orig_type_41941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41437_41940,(0),null);
var f_41942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41437_41940,(1),null);
var seq__41353_41943 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41941,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41941,cljs.core.identity])));
var chunk__41355_41944 = null;
var count__41356_41945 = (0);
var i__41357_41946 = (0);
while(true){
if((i__41357_41946 < count__41356_41945)){
var vec__41450_41947 = chunk__41355_41944.cljs$core$IIndexed$_nth$arity$2(null,i__41357_41946);
var actual_type_41948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41450_41947,(0),null);
var factory_41949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41450_41947,(1),null);
var canonical_f_41950 = (function (){var G__41454 = (factory_41949.cljs$core$IFn$_invoke$arity$1 ? factory_41949.cljs$core$IFn$_invoke$arity$1(f_41942) : factory_41949.call(null,f_41942));
var fexpr__41453 = (cljs.core.truth_(selector_41894)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41893,selector_41894):cljs.core.identity);
return (fexpr__41453.cljs$core$IFn$_invoke$arity$1 ? fexpr__41453.cljs$core$IFn$_invoke$arity$1(G__41454) : fexpr__41453.call(null,G__41454));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41893,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41894,actual_type_41948,f_41942], null),canonical_f_41950], 0));

if(cljs.core.truth_(elem_41893.addEventListener)){
elem_41893.addEventListener(cljs.core.name(actual_type_41948),canonical_f_41950);
} else {
elem_41893.attachEvent(cljs.core.name(actual_type_41948),canonical_f_41950);
}


var G__41951 = seq__41353_41943;
var G__41952 = chunk__41355_41944;
var G__41953 = count__41356_41945;
var G__41954 = (i__41357_41946 + (1));
seq__41353_41943 = G__41951;
chunk__41355_41944 = G__41952;
count__41356_41945 = G__41953;
i__41357_41946 = G__41954;
continue;
} else {
var temp__5735__auto___41955__$1 = cljs.core.seq(seq__41353_41943);
if(temp__5735__auto___41955__$1){
var seq__41353_41956__$1 = temp__5735__auto___41955__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41353_41956__$1)){
var c__4609__auto___41957 = cljs.core.chunk_first(seq__41353_41956__$1);
var G__41958 = cljs.core.chunk_rest(seq__41353_41956__$1);
var G__41959 = c__4609__auto___41957;
var G__41960 = cljs.core.count(c__4609__auto___41957);
var G__41961 = (0);
seq__41353_41943 = G__41958;
chunk__41355_41944 = G__41959;
count__41356_41945 = G__41960;
i__41357_41946 = G__41961;
continue;
} else {
var vec__41455_41962 = cljs.core.first(seq__41353_41956__$1);
var actual_type_41963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41455_41962,(0),null);
var factory_41964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41455_41962,(1),null);
var canonical_f_41965 = (function (){var G__41459 = (factory_41964.cljs$core$IFn$_invoke$arity$1 ? factory_41964.cljs$core$IFn$_invoke$arity$1(f_41942) : factory_41964.call(null,f_41942));
var fexpr__41458 = (cljs.core.truth_(selector_41894)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41893,selector_41894):cljs.core.identity);
return (fexpr__41458.cljs$core$IFn$_invoke$arity$1 ? fexpr__41458.cljs$core$IFn$_invoke$arity$1(G__41459) : fexpr__41458.call(null,G__41459));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41893,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41894,actual_type_41963,f_41942], null),canonical_f_41965], 0));

if(cljs.core.truth_(elem_41893.addEventListener)){
elem_41893.addEventListener(cljs.core.name(actual_type_41963),canonical_f_41965);
} else {
elem_41893.attachEvent(cljs.core.name(actual_type_41963),canonical_f_41965);
}


var G__41966 = cljs.core.next(seq__41353_41956__$1);
var G__41967 = null;
var G__41968 = (0);
var G__41969 = (0);
seq__41353_41943 = G__41966;
chunk__41355_41944 = G__41967;
count__41356_41945 = G__41968;
i__41357_41946 = G__41969;
continue;
}
} else {
}
}
break;
}

var G__41970 = cljs.core.next(seq__41352_41934__$1);
var G__41971 = null;
var G__41972 = (0);
var G__41973 = (0);
seq__41352_41895 = G__41970;
chunk__41359_41896 = G__41971;
count__41360_41897 = G__41972;
i__41361_41898 = G__41973;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41347){
var G__41348 = cljs.core.first(seq41347);
var seq41347__$1 = cljs.core.next(seq41347);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41348,seq41347__$1);
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
var len__4789__auto___41974 = arguments.length;
var i__4790__auto___41975 = (0);
while(true){
if((i__4790__auto___41975 < len__4789__auto___41974)){
args__4795__auto__.push((arguments[i__4790__auto___41975]));

var G__41976 = (i__4790__auto___41975 + (1));
i__4790__auto___41975 = G__41976;
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

var vec__41462_41977 = dommy.core.elem_and_selector(elem_sel);
var elem_41978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41462_41977,(0),null);
var selector_41979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41462_41977,(1),null);
var seq__41465_41980 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41472_41981 = null;
var count__41473_41982 = (0);
var i__41474_41983 = (0);
while(true){
if((i__41474_41983 < count__41473_41982)){
var vec__41511_41984 = chunk__41472_41981.cljs$core$IIndexed$_nth$arity$2(null,i__41474_41983);
var orig_type_41985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41511_41984,(0),null);
var f_41986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41511_41984,(1),null);
var seq__41475_41987 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41985,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41985,cljs.core.identity])));
var chunk__41477_41988 = null;
var count__41478_41989 = (0);
var i__41479_41990 = (0);
while(true){
if((i__41479_41990 < count__41478_41989)){
var vec__41520_41991 = chunk__41477_41988.cljs$core$IIndexed$_nth$arity$2(null,i__41479_41990);
var actual_type_41992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41520_41991,(0),null);
var __41993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41520_41991,(1),null);
var keys_41994 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41979,actual_type_41992,f_41986], null);
var canonical_f_41995 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41978),keys_41994);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41978,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41994], 0));

if(cljs.core.truth_(elem_41978.removeEventListener)){
elem_41978.removeEventListener(cljs.core.name(actual_type_41992),canonical_f_41995);
} else {
elem_41978.detachEvent(cljs.core.name(actual_type_41992),canonical_f_41995);
}


var G__41996 = seq__41475_41987;
var G__41997 = chunk__41477_41988;
var G__41998 = count__41478_41989;
var G__41999 = (i__41479_41990 + (1));
seq__41475_41987 = G__41996;
chunk__41477_41988 = G__41997;
count__41478_41989 = G__41998;
i__41479_41990 = G__41999;
continue;
} else {
var temp__5735__auto___42000 = cljs.core.seq(seq__41475_41987);
if(temp__5735__auto___42000){
var seq__41475_42001__$1 = temp__5735__auto___42000;
if(cljs.core.chunked_seq_QMARK_(seq__41475_42001__$1)){
var c__4609__auto___42002 = cljs.core.chunk_first(seq__41475_42001__$1);
var G__42003 = cljs.core.chunk_rest(seq__41475_42001__$1);
var G__42004 = c__4609__auto___42002;
var G__42005 = cljs.core.count(c__4609__auto___42002);
var G__42006 = (0);
seq__41475_41987 = G__42003;
chunk__41477_41988 = G__42004;
count__41478_41989 = G__42005;
i__41479_41990 = G__42006;
continue;
} else {
var vec__41523_42007 = cljs.core.first(seq__41475_42001__$1);
var actual_type_42008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41523_42007,(0),null);
var __42009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41523_42007,(1),null);
var keys_42010 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41979,actual_type_42008,f_41986], null);
var canonical_f_42011 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41978),keys_42010);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41978,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42010], 0));

if(cljs.core.truth_(elem_41978.removeEventListener)){
elem_41978.removeEventListener(cljs.core.name(actual_type_42008),canonical_f_42011);
} else {
elem_41978.detachEvent(cljs.core.name(actual_type_42008),canonical_f_42011);
}


var G__42012 = cljs.core.next(seq__41475_42001__$1);
var G__42013 = null;
var G__42014 = (0);
var G__42015 = (0);
seq__41475_41987 = G__42012;
chunk__41477_41988 = G__42013;
count__41478_41989 = G__42014;
i__41479_41990 = G__42015;
continue;
}
} else {
}
}
break;
}

var G__42016 = seq__41465_41980;
var G__42017 = chunk__41472_41981;
var G__42018 = count__41473_41982;
var G__42019 = (i__41474_41983 + (1));
seq__41465_41980 = G__42016;
chunk__41472_41981 = G__42017;
count__41473_41982 = G__42018;
i__41474_41983 = G__42019;
continue;
} else {
var temp__5735__auto___42020 = cljs.core.seq(seq__41465_41980);
if(temp__5735__auto___42020){
var seq__41465_42021__$1 = temp__5735__auto___42020;
if(cljs.core.chunked_seq_QMARK_(seq__41465_42021__$1)){
var c__4609__auto___42022 = cljs.core.chunk_first(seq__41465_42021__$1);
var G__42023 = cljs.core.chunk_rest(seq__41465_42021__$1);
var G__42024 = c__4609__auto___42022;
var G__42025 = cljs.core.count(c__4609__auto___42022);
var G__42026 = (0);
seq__41465_41980 = G__42023;
chunk__41472_41981 = G__42024;
count__41473_41982 = G__42025;
i__41474_41983 = G__42026;
continue;
} else {
var vec__41526_42027 = cljs.core.first(seq__41465_42021__$1);
var orig_type_42028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41526_42027,(0),null);
var f_42029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41526_42027,(1),null);
var seq__41466_42030 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42028,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42028,cljs.core.identity])));
var chunk__41468_42031 = null;
var count__41469_42032 = (0);
var i__41470_42033 = (0);
while(true){
if((i__41470_42033 < count__41469_42032)){
var vec__41535_42034 = chunk__41468_42031.cljs$core$IIndexed$_nth$arity$2(null,i__41470_42033);
var actual_type_42035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41535_42034,(0),null);
var __42036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41535_42034,(1),null);
var keys_42037 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41979,actual_type_42035,f_42029], null);
var canonical_f_42038 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41978),keys_42037);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41978,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42037], 0));

if(cljs.core.truth_(elem_41978.removeEventListener)){
elem_41978.removeEventListener(cljs.core.name(actual_type_42035),canonical_f_42038);
} else {
elem_41978.detachEvent(cljs.core.name(actual_type_42035),canonical_f_42038);
}


var G__42039 = seq__41466_42030;
var G__42040 = chunk__41468_42031;
var G__42041 = count__41469_42032;
var G__42042 = (i__41470_42033 + (1));
seq__41466_42030 = G__42039;
chunk__41468_42031 = G__42040;
count__41469_42032 = G__42041;
i__41470_42033 = G__42042;
continue;
} else {
var temp__5735__auto___42043__$1 = cljs.core.seq(seq__41466_42030);
if(temp__5735__auto___42043__$1){
var seq__41466_42044__$1 = temp__5735__auto___42043__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41466_42044__$1)){
var c__4609__auto___42045 = cljs.core.chunk_first(seq__41466_42044__$1);
var G__42046 = cljs.core.chunk_rest(seq__41466_42044__$1);
var G__42047 = c__4609__auto___42045;
var G__42048 = cljs.core.count(c__4609__auto___42045);
var G__42049 = (0);
seq__41466_42030 = G__42046;
chunk__41468_42031 = G__42047;
count__41469_42032 = G__42048;
i__41470_42033 = G__42049;
continue;
} else {
var vec__41538_42050 = cljs.core.first(seq__41466_42044__$1);
var actual_type_42051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41538_42050,(0),null);
var __42052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41538_42050,(1),null);
var keys_42053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41979,actual_type_42051,f_42029], null);
var canonical_f_42054 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41978),keys_42053);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41978,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42053], 0));

if(cljs.core.truth_(elem_41978.removeEventListener)){
elem_41978.removeEventListener(cljs.core.name(actual_type_42051),canonical_f_42054);
} else {
elem_41978.detachEvent(cljs.core.name(actual_type_42051),canonical_f_42054);
}


var G__42055 = cljs.core.next(seq__41466_42044__$1);
var G__42056 = null;
var G__42057 = (0);
var G__42058 = (0);
seq__41466_42030 = G__42055;
chunk__41468_42031 = G__42056;
count__41469_42032 = G__42057;
i__41470_42033 = G__42058;
continue;
}
} else {
}
}
break;
}

var G__42059 = cljs.core.next(seq__41465_42021__$1);
var G__42060 = null;
var G__42061 = (0);
var G__42062 = (0);
seq__41465_41980 = G__42059;
chunk__41472_41981 = G__42060;
count__41473_41982 = G__42061;
i__41474_41983 = G__42062;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41460){
var G__41461 = cljs.core.first(seq41460);
var seq41460__$1 = cljs.core.next(seq41460);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41461,seq41460__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42063 = arguments.length;
var i__4790__auto___42064 = (0);
while(true){
if((i__4790__auto___42064 < len__4789__auto___42063)){
args__4795__auto__.push((arguments[i__4790__auto___42064]));

var G__42065 = (i__4790__auto___42064 + (1));
i__4790__auto___42064 = G__42065;
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

var vec__41543_42066 = dommy.core.elem_and_selector(elem_sel);
var elem_42067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41543_42066,(0),null);
var selector_42068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41543_42066,(1),null);
var seq__41546_42069 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41547_42070 = null;
var count__41548_42071 = (0);
var i__41549_42072 = (0);
while(true){
if((i__41549_42072 < count__41548_42071)){
var vec__41556_42073 = chunk__41547_42070.cljs$core$IIndexed$_nth$arity$2(null,i__41549_42072);
var type_42074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41556_42073,(0),null);
var f_42075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41556_42073,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42074,((function (seq__41546_42069,chunk__41547_42070,count__41548_42071,i__41549_42072,vec__41556_42073,type_42074,f_42075,vec__41543_42066,elem_42067,selector_42068){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42074,dommy$core$this_fn], 0));

return (f_42075.cljs$core$IFn$_invoke$arity$1 ? f_42075.cljs$core$IFn$_invoke$arity$1(e) : f_42075.call(null,e));
});})(seq__41546_42069,chunk__41547_42070,count__41548_42071,i__41549_42072,vec__41556_42073,type_42074,f_42075,vec__41543_42066,elem_42067,selector_42068))
], 0));


var G__42076 = seq__41546_42069;
var G__42077 = chunk__41547_42070;
var G__42078 = count__41548_42071;
var G__42079 = (i__41549_42072 + (1));
seq__41546_42069 = G__42076;
chunk__41547_42070 = G__42077;
count__41548_42071 = G__42078;
i__41549_42072 = G__42079;
continue;
} else {
var temp__5735__auto___42080 = cljs.core.seq(seq__41546_42069);
if(temp__5735__auto___42080){
var seq__41546_42081__$1 = temp__5735__auto___42080;
if(cljs.core.chunked_seq_QMARK_(seq__41546_42081__$1)){
var c__4609__auto___42082 = cljs.core.chunk_first(seq__41546_42081__$1);
var G__42083 = cljs.core.chunk_rest(seq__41546_42081__$1);
var G__42084 = c__4609__auto___42082;
var G__42085 = cljs.core.count(c__4609__auto___42082);
var G__42086 = (0);
seq__41546_42069 = G__42083;
chunk__41547_42070 = G__42084;
count__41548_42071 = G__42085;
i__41549_42072 = G__42086;
continue;
} else {
var vec__41559_42087 = cljs.core.first(seq__41546_42081__$1);
var type_42088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559_42087,(0),null);
var f_42089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559_42087,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42088,((function (seq__41546_42069,chunk__41547_42070,count__41548_42071,i__41549_42072,vec__41559_42087,type_42088,f_42089,seq__41546_42081__$1,temp__5735__auto___42080,vec__41543_42066,elem_42067,selector_42068){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42088,dommy$core$this_fn], 0));

return (f_42089.cljs$core$IFn$_invoke$arity$1 ? f_42089.cljs$core$IFn$_invoke$arity$1(e) : f_42089.call(null,e));
});})(seq__41546_42069,chunk__41547_42070,count__41548_42071,i__41549_42072,vec__41559_42087,type_42088,f_42089,seq__41546_42081__$1,temp__5735__auto___42080,vec__41543_42066,elem_42067,selector_42068))
], 0));


var G__42090 = cljs.core.next(seq__41546_42081__$1);
var G__42091 = null;
var G__42092 = (0);
var G__42093 = (0);
seq__41546_42069 = G__42090;
chunk__41547_42070 = G__42091;
count__41548_42071 = G__42092;
i__41549_42072 = G__42093;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41541){
var G__41542 = cljs.core.first(seq41541);
var seq41541__$1 = cljs.core.next(seq41541);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41542,seq41541__$1);
}));


//# sourceMappingURL=dommy.core.js.map
