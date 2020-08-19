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
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var G__40123 = arguments.length;
switch (G__40123) {
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
var G__40125 = arguments.length;
switch (G__40125) {
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
var G__40128 = arguments.length;
switch (G__40128) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__40126_SHARP_){
return (!((p1__40126_SHARP_ === base)));
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
var args__4742__auto__ = [];
var len__4736__auto___40526 = arguments.length;
var i__4737__auto___40527 = (0);
while(true){
if((i__4737__auto___40527 < len__4736__auto___40526)){
args__4742__auto__.push((arguments[i__4737__auto___40527]));

var G__40528 = (i__4737__auto___40527 + (1));
i__4737__auto___40527 = G__40528;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__40131_40530 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40132_40531 = null;
var count__40133_40532 = (0);
var i__40134_40533 = (0);
while(true){
if((i__40134_40533 < count__40133_40532)){
var vec__40141_40534 = chunk__40132_40531.cljs$core$IIndexed$_nth$arity$2(null,i__40134_40533);
var k_40535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40141_40534,(0),null);
var v_40536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40141_40534,(1),null);
style.setProperty(dommy.utils.as_str(k_40535),v_40536);


var G__40537 = seq__40131_40530;
var G__40538 = chunk__40132_40531;
var G__40539 = count__40133_40532;
var G__40540 = (i__40134_40533 + (1));
seq__40131_40530 = G__40537;
chunk__40132_40531 = G__40538;
count__40133_40532 = G__40539;
i__40134_40533 = G__40540;
continue;
} else {
var temp__5735__auto___40541 = cljs.core.seq(seq__40131_40530);
if(temp__5735__auto___40541){
var seq__40131_40542__$1 = temp__5735__auto___40541;
if(cljs.core.chunked_seq_QMARK_(seq__40131_40542__$1)){
var c__4556__auto___40543 = cljs.core.chunk_first(seq__40131_40542__$1);
var G__40544 = cljs.core.chunk_rest(seq__40131_40542__$1);
var G__40545 = c__4556__auto___40543;
var G__40546 = cljs.core.count(c__4556__auto___40543);
var G__40547 = (0);
seq__40131_40530 = G__40544;
chunk__40132_40531 = G__40545;
count__40133_40532 = G__40546;
i__40134_40533 = G__40547;
continue;
} else {
var vec__40144_40548 = cljs.core.first(seq__40131_40542__$1);
var k_40549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40144_40548,(0),null);
var v_40550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40144_40548,(1),null);
style.setProperty(dommy.utils.as_str(k_40549),v_40550);


var G__40555 = cljs.core.next(seq__40131_40542__$1);
var G__40556 = null;
var G__40557 = (0);
var G__40558 = (0);
seq__40131_40530 = G__40555;
chunk__40132_40531 = G__40556;
count__40133_40532 = G__40557;
i__40134_40533 = G__40558;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40129){
var G__40130 = cljs.core.first(seq40129);
var seq40129__$1 = cljs.core.next(seq40129);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40130,seq40129__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40559 = arguments.length;
var i__4737__auto___40560 = (0);
while(true){
if((i__4737__auto___40560 < len__4736__auto___40559)){
args__4742__auto__.push((arguments[i__4737__auto___40560]));

var G__40561 = (i__4737__auto___40560 + (1));
i__4737__auto___40560 = G__40561;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__40149_40562 = cljs.core.seq(keywords);
var chunk__40150_40563 = null;
var count__40151_40564 = (0);
var i__40152_40565 = (0);
while(true){
if((i__40152_40565 < count__40151_40564)){
var kw_40566 = chunk__40150_40563.cljs$core$IIndexed$_nth$arity$2(null,i__40152_40565);
style.removeProperty(dommy.utils.as_str(kw_40566));


var G__40568 = seq__40149_40562;
var G__40569 = chunk__40150_40563;
var G__40570 = count__40151_40564;
var G__40571 = (i__40152_40565 + (1));
seq__40149_40562 = G__40568;
chunk__40150_40563 = G__40569;
count__40151_40564 = G__40570;
i__40152_40565 = G__40571;
continue;
} else {
var temp__5735__auto___40572 = cljs.core.seq(seq__40149_40562);
if(temp__5735__auto___40572){
var seq__40149_40573__$1 = temp__5735__auto___40572;
if(cljs.core.chunked_seq_QMARK_(seq__40149_40573__$1)){
var c__4556__auto___40575 = cljs.core.chunk_first(seq__40149_40573__$1);
var G__40576 = cljs.core.chunk_rest(seq__40149_40573__$1);
var G__40577 = c__4556__auto___40575;
var G__40578 = cljs.core.count(c__4556__auto___40575);
var G__40579 = (0);
seq__40149_40562 = G__40576;
chunk__40150_40563 = G__40577;
count__40151_40564 = G__40578;
i__40152_40565 = G__40579;
continue;
} else {
var kw_40584 = cljs.core.first(seq__40149_40573__$1);
style.removeProperty(dommy.utils.as_str(kw_40584));


var G__40586 = cljs.core.next(seq__40149_40573__$1);
var G__40587 = null;
var G__40588 = (0);
var G__40589 = (0);
seq__40149_40562 = G__40586;
chunk__40150_40563 = G__40587;
count__40151_40564 = G__40588;
i__40152_40565 = G__40589;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40147){
var G__40148 = cljs.core.first(seq40147);
var seq40147__$1 = cljs.core.next(seq40147);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40148,seq40147__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40601 = arguments.length;
var i__4737__auto___40602 = (0);
while(true){
if((i__4737__auto___40602 < len__4736__auto___40601)){
args__4742__auto__.push((arguments[i__4737__auto___40602]));

var G__40608 = (i__4737__auto___40602 + (1));
i__4737__auto___40602 = G__40608;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__40157_40609 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40158_40610 = null;
var count__40159_40611 = (0);
var i__40160_40612 = (0);
while(true){
if((i__40160_40612 < count__40159_40611)){
var vec__40168_40613 = chunk__40158_40610.cljs$core$IIndexed$_nth$arity$2(null,i__40160_40612);
var k_40614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40168_40613,(0),null);
var v_40615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40168_40613,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40614,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40615),"px"].join('')], 0));


var G__40616 = seq__40157_40609;
var G__40617 = chunk__40158_40610;
var G__40618 = count__40159_40611;
var G__40619 = (i__40160_40612 + (1));
seq__40157_40609 = G__40616;
chunk__40158_40610 = G__40617;
count__40159_40611 = G__40618;
i__40160_40612 = G__40619;
continue;
} else {
var temp__5735__auto___40620 = cljs.core.seq(seq__40157_40609);
if(temp__5735__auto___40620){
var seq__40157_40621__$1 = temp__5735__auto___40620;
if(cljs.core.chunked_seq_QMARK_(seq__40157_40621__$1)){
var c__4556__auto___40622 = cljs.core.chunk_first(seq__40157_40621__$1);
var G__40623 = cljs.core.chunk_rest(seq__40157_40621__$1);
var G__40624 = c__4556__auto___40622;
var G__40625 = cljs.core.count(c__4556__auto___40622);
var G__40626 = (0);
seq__40157_40609 = G__40623;
chunk__40158_40610 = G__40624;
count__40159_40611 = G__40625;
i__40160_40612 = G__40626;
continue;
} else {
var vec__40171_40627 = cljs.core.first(seq__40157_40621__$1);
var k_40628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171_40627,(0),null);
var v_40629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171_40627,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40628,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40629),"px"].join('')], 0));


var G__40630 = cljs.core.next(seq__40157_40621__$1);
var G__40631 = null;
var G__40632 = (0);
var G__40633 = (0);
seq__40157_40609 = G__40630;
chunk__40158_40610 = G__40631;
count__40159_40611 = G__40632;
i__40160_40612 = G__40633;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40153){
var G__40154 = cljs.core.first(seq40153);
var seq40153__$1 = cljs.core.next(seq40153);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40154,seq40153__$1);
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
var G__40181 = arguments.length;
switch (G__40181) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40636 = arguments.length;
var i__4737__auto___40637 = (0);
while(true){
if((i__4737__auto___40637 < len__4736__auto___40636)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40637]));

var G__40642 = (i__4737__auto___40637 + (1));
i__4737__auto___40637 = G__40642;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__40183 = elem;
(G__40183[k__$1] = v);

return G__40183;
} else {
var G__40184 = elem;
G__40184.setAttribute(k__$1,v);

return G__40184;
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

var seq__40186_40656 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40187_40657 = null;
var count__40188_40658 = (0);
var i__40189_40659 = (0);
while(true){
if((i__40189_40659 < count__40188_40658)){
var vec__40198_40660 = chunk__40187_40657.cljs$core$IIndexed$_nth$arity$2(null,i__40189_40659);
var k_40661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198_40660,(0),null);
var v_40662__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198_40660,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40661__$1,v_40662__$1);


var G__40667 = seq__40186_40656;
var G__40668 = chunk__40187_40657;
var G__40669 = count__40188_40658;
var G__40670 = (i__40189_40659 + (1));
seq__40186_40656 = G__40667;
chunk__40187_40657 = G__40668;
count__40188_40658 = G__40669;
i__40189_40659 = G__40670;
continue;
} else {
var temp__5735__auto___40671 = cljs.core.seq(seq__40186_40656);
if(temp__5735__auto___40671){
var seq__40186_40672__$1 = temp__5735__auto___40671;
if(cljs.core.chunked_seq_QMARK_(seq__40186_40672__$1)){
var c__4556__auto___40673 = cljs.core.chunk_first(seq__40186_40672__$1);
var G__40674 = cljs.core.chunk_rest(seq__40186_40672__$1);
var G__40675 = c__4556__auto___40673;
var G__40676 = cljs.core.count(c__4556__auto___40673);
var G__40677 = (0);
seq__40186_40656 = G__40674;
chunk__40187_40657 = G__40675;
count__40188_40658 = G__40676;
i__40189_40659 = G__40677;
continue;
} else {
var vec__40202_40678 = cljs.core.first(seq__40186_40672__$1);
var k_40679__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202_40678,(0),null);
var v_40680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202_40678,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40679__$1,v_40680__$1);


var G__40681 = cljs.core.next(seq__40186_40672__$1);
var G__40682 = null;
var G__40683 = (0);
var G__40684 = (0);
seq__40186_40656 = G__40681;
chunk__40187_40657 = G__40682;
count__40188_40658 = G__40683;
i__40189_40659 = G__40684;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40176){
var G__40177 = cljs.core.first(seq40176);
var seq40176__$1 = cljs.core.next(seq40176);
var G__40178 = cljs.core.first(seq40176__$1);
var seq40176__$2 = cljs.core.next(seq40176__$1);
var G__40179 = cljs.core.first(seq40176__$2);
var seq40176__$3 = cljs.core.next(seq40176__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40177,G__40178,G__40179,seq40176__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__40210 = arguments.length;
switch (G__40210) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40686 = arguments.length;
var i__4737__auto___40687 = (0);
while(true){
if((i__4737__auto___40687 < len__4736__auto___40686)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40687]));

var G__40688 = (i__4737__auto___40687 + (1));
i__4737__auto___40687 = G__40688;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_40690__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40212 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40212.cljs$core$IFn$_invoke$arity$1 ? fexpr__40212.cljs$core$IFn$_invoke$arity$1(k_40690__$1) : fexpr__40212.call(null,k_40690__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40690__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40214_40693 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40215_40694 = null;
var count__40216_40695 = (0);
var i__40217_40696 = (0);
while(true){
if((i__40217_40696 < count__40216_40695)){
var k_40697__$1 = chunk__40215_40694.cljs$core$IIndexed$_nth$arity$2(null,i__40217_40696);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40697__$1);


var G__40698 = seq__40214_40693;
var G__40699 = chunk__40215_40694;
var G__40700 = count__40216_40695;
var G__40701 = (i__40217_40696 + (1));
seq__40214_40693 = G__40698;
chunk__40215_40694 = G__40699;
count__40216_40695 = G__40700;
i__40217_40696 = G__40701;
continue;
} else {
var temp__5735__auto___40702 = cljs.core.seq(seq__40214_40693);
if(temp__5735__auto___40702){
var seq__40214_40703__$1 = temp__5735__auto___40702;
if(cljs.core.chunked_seq_QMARK_(seq__40214_40703__$1)){
var c__4556__auto___40704 = cljs.core.chunk_first(seq__40214_40703__$1);
var G__40705 = cljs.core.chunk_rest(seq__40214_40703__$1);
var G__40706 = c__4556__auto___40704;
var G__40707 = cljs.core.count(c__4556__auto___40704);
var G__40708 = (0);
seq__40214_40693 = G__40705;
chunk__40215_40694 = G__40706;
count__40216_40695 = G__40707;
i__40217_40696 = G__40708;
continue;
} else {
var k_40709__$1 = cljs.core.first(seq__40214_40703__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40709__$1);


var G__40710 = cljs.core.next(seq__40214_40703__$1);
var G__40711 = null;
var G__40712 = (0);
var G__40713 = (0);
seq__40214_40693 = G__40710;
chunk__40215_40694 = G__40711;
count__40216_40695 = G__40712;
i__40217_40696 = G__40713;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq40207){
var G__40208 = cljs.core.first(seq40207);
var seq40207__$1 = cljs.core.next(seq40207);
var G__40209 = cljs.core.first(seq40207__$1);
var seq40207__$2 = cljs.core.next(seq40207__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40208,G__40209,seq40207__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__40220 = arguments.length;
switch (G__40220) {
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
var G__40225 = arguments.length;
switch (G__40225) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40717 = arguments.length;
var i__4737__auto___40718 = (0);
while(true){
if((i__4737__auto___40718 < len__4736__auto___40717)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40718]));

var G__40719 = (i__4737__auto___40718 + (1));
i__4737__auto___40718 = G__40719;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___40721 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40721)){
var class_list_40722 = temp__5733__auto___40721;
var seq__40226_40723 = cljs.core.seq(classes__$1);
var chunk__40227_40724 = null;
var count__40228_40725 = (0);
var i__40229_40726 = (0);
while(true){
if((i__40229_40726 < count__40228_40725)){
var c_40727 = chunk__40227_40724.cljs$core$IIndexed$_nth$arity$2(null,i__40229_40726);
class_list_40722.add(c_40727);


var G__40728 = seq__40226_40723;
var G__40729 = chunk__40227_40724;
var G__40730 = count__40228_40725;
var G__40731 = (i__40229_40726 + (1));
seq__40226_40723 = G__40728;
chunk__40227_40724 = G__40729;
count__40228_40725 = G__40730;
i__40229_40726 = G__40731;
continue;
} else {
var temp__5735__auto___40732 = cljs.core.seq(seq__40226_40723);
if(temp__5735__auto___40732){
var seq__40226_40733__$1 = temp__5735__auto___40732;
if(cljs.core.chunked_seq_QMARK_(seq__40226_40733__$1)){
var c__4556__auto___40734 = cljs.core.chunk_first(seq__40226_40733__$1);
var G__40735 = cljs.core.chunk_rest(seq__40226_40733__$1);
var G__40736 = c__4556__auto___40734;
var G__40737 = cljs.core.count(c__4556__auto___40734);
var G__40738 = (0);
seq__40226_40723 = G__40735;
chunk__40227_40724 = G__40736;
count__40228_40725 = G__40737;
i__40229_40726 = G__40738;
continue;
} else {
var c_40739 = cljs.core.first(seq__40226_40733__$1);
class_list_40722.add(c_40739);


var G__40740 = cljs.core.next(seq__40226_40733__$1);
var G__40741 = null;
var G__40742 = (0);
var G__40743 = (0);
seq__40226_40723 = G__40740;
chunk__40227_40724 = G__40741;
count__40228_40725 = G__40742;
i__40229_40726 = G__40743;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40230_40744 = cljs.core.seq(classes__$1);
var chunk__40231_40745 = null;
var count__40232_40746 = (0);
var i__40233_40747 = (0);
while(true){
if((i__40233_40747 < count__40232_40746)){
var c_40748 = chunk__40231_40745.cljs$core$IIndexed$_nth$arity$2(null,i__40233_40747);
var class_name_40749 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40749,c_40748))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40749 === ""))?c_40748:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40749)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40748)].join('')));
}


var G__40750 = seq__40230_40744;
var G__40751 = chunk__40231_40745;
var G__40752 = count__40232_40746;
var G__40753 = (i__40233_40747 + (1));
seq__40230_40744 = G__40750;
chunk__40231_40745 = G__40751;
count__40232_40746 = G__40752;
i__40233_40747 = G__40753;
continue;
} else {
var temp__5735__auto___40754 = cljs.core.seq(seq__40230_40744);
if(temp__5735__auto___40754){
var seq__40230_40755__$1 = temp__5735__auto___40754;
if(cljs.core.chunked_seq_QMARK_(seq__40230_40755__$1)){
var c__4556__auto___40756 = cljs.core.chunk_first(seq__40230_40755__$1);
var G__40757 = cljs.core.chunk_rest(seq__40230_40755__$1);
var G__40758 = c__4556__auto___40756;
var G__40759 = cljs.core.count(c__4556__auto___40756);
var G__40760 = (0);
seq__40230_40744 = G__40757;
chunk__40231_40745 = G__40758;
count__40232_40746 = G__40759;
i__40233_40747 = G__40760;
continue;
} else {
var c_40761 = cljs.core.first(seq__40230_40755__$1);
var class_name_40762 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40762,c_40761))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40762 === ""))?c_40761:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40762)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40761)].join('')));
}


var G__40763 = cljs.core.next(seq__40230_40755__$1);
var G__40764 = null;
var G__40765 = (0);
var G__40766 = (0);
seq__40230_40744 = G__40763;
chunk__40231_40745 = G__40764;
count__40232_40746 = G__40765;
i__40233_40747 = G__40766;
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
var seq__40234_40767 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40235_40768 = null;
var count__40236_40769 = (0);
var i__40237_40770 = (0);
while(true){
if((i__40237_40770 < count__40236_40769)){
var c_40771 = chunk__40235_40768.cljs$core$IIndexed$_nth$arity$2(null,i__40237_40770);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40771);


var G__40772 = seq__40234_40767;
var G__40773 = chunk__40235_40768;
var G__40774 = count__40236_40769;
var G__40775 = (i__40237_40770 + (1));
seq__40234_40767 = G__40772;
chunk__40235_40768 = G__40773;
count__40236_40769 = G__40774;
i__40237_40770 = G__40775;
continue;
} else {
var temp__5735__auto___40776 = cljs.core.seq(seq__40234_40767);
if(temp__5735__auto___40776){
var seq__40234_40777__$1 = temp__5735__auto___40776;
if(cljs.core.chunked_seq_QMARK_(seq__40234_40777__$1)){
var c__4556__auto___40778 = cljs.core.chunk_first(seq__40234_40777__$1);
var G__40779 = cljs.core.chunk_rest(seq__40234_40777__$1);
var G__40780 = c__4556__auto___40778;
var G__40781 = cljs.core.count(c__4556__auto___40778);
var G__40782 = (0);
seq__40234_40767 = G__40779;
chunk__40235_40768 = G__40780;
count__40236_40769 = G__40781;
i__40237_40770 = G__40782;
continue;
} else {
var c_40783 = cljs.core.first(seq__40234_40777__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40783);


var G__40784 = cljs.core.next(seq__40234_40777__$1);
var G__40785 = null;
var G__40786 = (0);
var G__40787 = (0);
seq__40234_40767 = G__40784;
chunk__40235_40768 = G__40785;
count__40236_40769 = G__40786;
i__40237_40770 = G__40787;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq40222){
var G__40223 = cljs.core.first(seq40222);
var seq40222__$1 = cljs.core.next(seq40222);
var G__40224 = cljs.core.first(seq40222__$1);
var seq40222__$2 = cljs.core.next(seq40222__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40223,G__40224,seq40222__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__40242 = arguments.length;
switch (G__40242) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40789 = arguments.length;
var i__4737__auto___40790 = (0);
while(true){
if((i__4737__auto___40790 < len__4736__auto___40789)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40790]));

var G__40791 = (i__4737__auto___40790 + (1));
i__4737__auto___40790 = G__40791;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___40792 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40792)){
var class_list_40793 = temp__5733__auto___40792;
class_list_40793.remove(c__$1);
} else {
var class_name_40794 = dommy.core.class$(elem);
var new_class_name_40795 = dommy.utils.remove_class_str(class_name_40794,c__$1);
if((class_name_40794 === new_class_name_40795)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40795);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__40243 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__40244 = null;
var count__40245 = (0);
var i__40246 = (0);
while(true){
if((i__40246 < count__40245)){
var c = chunk__40244.cljs$core$IIndexed$_nth$arity$2(null,i__40246);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40796 = seq__40243;
var G__40797 = chunk__40244;
var G__40798 = count__40245;
var G__40799 = (i__40246 + (1));
seq__40243 = G__40796;
chunk__40244 = G__40797;
count__40245 = G__40798;
i__40246 = G__40799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40243);
if(temp__5735__auto__){
var seq__40243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40243__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40243__$1);
var G__40800 = cljs.core.chunk_rest(seq__40243__$1);
var G__40801 = c__4556__auto__;
var G__40802 = cljs.core.count(c__4556__auto__);
var G__40803 = (0);
seq__40243 = G__40800;
chunk__40244 = G__40801;
count__40245 = G__40802;
i__40246 = G__40803;
continue;
} else {
var c = cljs.core.first(seq__40243__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40804 = cljs.core.next(seq__40243__$1);
var G__40805 = null;
var G__40806 = (0);
var G__40807 = (0);
seq__40243 = G__40804;
chunk__40244 = G__40805;
count__40245 = G__40806;
i__40246 = G__40807;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq40239){
var G__40240 = cljs.core.first(seq40239);
var seq40239__$1 = cljs.core.next(seq40239);
var G__40241 = cljs.core.first(seq40239__$1);
var seq40239__$2 = cljs.core.next(seq40239__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40240,G__40241,seq40239__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__40248 = arguments.length;
switch (G__40248) {
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
var temp__5733__auto___40809 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40809)){
var class_list_40810 = temp__5733__auto___40809;
class_list_40810.toggle(c__$1);
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
var G__40250 = arguments.length;
switch (G__40250) {
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
var G__40252 = arguments.length;
switch (G__40252) {
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
var G__40257 = arguments.length;
switch (G__40257) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40814 = arguments.length;
var i__4737__auto___40815 = (0);
while(true){
if((i__4737__auto___40815 < len__4736__auto___40814)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40815]));

var G__40816 = (i__4737__auto___40815 + (1));
i__4737__auto___40815 = G__40816;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40258 = parent;
G__40258.appendChild(child);

return G__40258;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40259_40817 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40260_40818 = null;
var count__40261_40819 = (0);
var i__40262_40820 = (0);
while(true){
if((i__40262_40820 < count__40261_40819)){
var c_40821 = chunk__40260_40818.cljs$core$IIndexed$_nth$arity$2(null,i__40262_40820);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40821);


var G__40822 = seq__40259_40817;
var G__40823 = chunk__40260_40818;
var G__40824 = count__40261_40819;
var G__40825 = (i__40262_40820 + (1));
seq__40259_40817 = G__40822;
chunk__40260_40818 = G__40823;
count__40261_40819 = G__40824;
i__40262_40820 = G__40825;
continue;
} else {
var temp__5735__auto___40826 = cljs.core.seq(seq__40259_40817);
if(temp__5735__auto___40826){
var seq__40259_40827__$1 = temp__5735__auto___40826;
if(cljs.core.chunked_seq_QMARK_(seq__40259_40827__$1)){
var c__4556__auto___40828 = cljs.core.chunk_first(seq__40259_40827__$1);
var G__40829 = cljs.core.chunk_rest(seq__40259_40827__$1);
var G__40830 = c__4556__auto___40828;
var G__40831 = cljs.core.count(c__4556__auto___40828);
var G__40832 = (0);
seq__40259_40817 = G__40829;
chunk__40260_40818 = G__40830;
count__40261_40819 = G__40831;
i__40262_40820 = G__40832;
continue;
} else {
var c_40833 = cljs.core.first(seq__40259_40827__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40833);


var G__40834 = cljs.core.next(seq__40259_40827__$1);
var G__40835 = null;
var G__40836 = (0);
var G__40837 = (0);
seq__40259_40817 = G__40834;
chunk__40260_40818 = G__40835;
count__40261_40819 = G__40836;
i__40262_40820 = G__40837;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40254){
var G__40255 = cljs.core.first(seq40254);
var seq40254__$1 = cljs.core.next(seq40254);
var G__40256 = cljs.core.first(seq40254__$1);
var seq40254__$2 = cljs.core.next(seq40254__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40255,G__40256,seq40254__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__40267 = arguments.length;
switch (G__40267) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40839 = arguments.length;
var i__4737__auto___40840 = (0);
while(true){
if((i__4737__auto___40840 < len__4736__auto___40839)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40840]));

var G__40841 = (i__4737__auto___40840 + (1));
i__4737__auto___40840 = G__40841;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40268 = parent;
G__40268.insertBefore(child,parent.firstChild);

return G__40268;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40269_40843 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40270_40844 = null;
var count__40271_40845 = (0);
var i__40272_40846 = (0);
while(true){
if((i__40272_40846 < count__40271_40845)){
var c_40848 = chunk__40270_40844.cljs$core$IIndexed$_nth$arity$2(null,i__40272_40846);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40848);


var G__40849 = seq__40269_40843;
var G__40850 = chunk__40270_40844;
var G__40851 = count__40271_40845;
var G__40852 = (i__40272_40846 + (1));
seq__40269_40843 = G__40849;
chunk__40270_40844 = G__40850;
count__40271_40845 = G__40851;
i__40272_40846 = G__40852;
continue;
} else {
var temp__5735__auto___40853 = cljs.core.seq(seq__40269_40843);
if(temp__5735__auto___40853){
var seq__40269_40854__$1 = temp__5735__auto___40853;
if(cljs.core.chunked_seq_QMARK_(seq__40269_40854__$1)){
var c__4556__auto___40855 = cljs.core.chunk_first(seq__40269_40854__$1);
var G__40856 = cljs.core.chunk_rest(seq__40269_40854__$1);
var G__40857 = c__4556__auto___40855;
var G__40858 = cljs.core.count(c__4556__auto___40855);
var G__40859 = (0);
seq__40269_40843 = G__40856;
chunk__40270_40844 = G__40857;
count__40271_40845 = G__40858;
i__40272_40846 = G__40859;
continue;
} else {
var c_40860 = cljs.core.first(seq__40269_40854__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40860);


var G__40861 = cljs.core.next(seq__40269_40854__$1);
var G__40862 = null;
var G__40863 = (0);
var G__40864 = (0);
seq__40269_40843 = G__40861;
chunk__40270_40844 = G__40862;
count__40271_40845 = G__40863;
i__40272_40846 = G__40864;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq40264){
var G__40265 = cljs.core.first(seq40264);
var seq40264__$1 = cljs.core.next(seq40264);
var G__40266 = cljs.core.first(seq40264__$1);
var seq40264__$2 = cljs.core.next(seq40264__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40265,G__40266,seq40264__$2);
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
var temp__5733__auto___40865 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40865)){
var next_40866 = temp__5733__auto___40865;
dommy.core.insert_before_BANG_(elem,next_40866);
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
var G__40274 = arguments.length;
switch (G__40274) {
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
var G__40275 = p;
G__40275.removeChild(elem);

return G__40275;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40277){
var vec__40278 = p__40277;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40278,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40278,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
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
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
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
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40871 = arguments.length;
var i__4737__auto___40872 = (0);
while(true){
if((i__4737__auto___40872 < len__4736__auto___40871)){
args__4742__auto__.push((arguments[i__4737__auto___40872]));

var G__40874 = (i__4737__auto___40872 + (1));
i__4737__auto___40872 = G__40874;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40283){
var G__40284 = cljs.core.first(seq40283);
var seq40283__$1 = cljs.core.next(seq40283);
var G__40285 = cljs.core.first(seq40283__$1);
var seq40283__$2 = cljs.core.next(seq40283__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40284,G__40285,seq40283__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
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
var args__4742__auto__ = [];
var len__4736__auto___40875 = arguments.length;
var i__4737__auto___40876 = (0);
while(true){
if((i__4737__auto___40876 < len__4736__auto___40875)){
args__4742__auto__.push((arguments[i__4737__auto___40876]));

var G__40877 = (i__4737__auto___40876 + (1));
i__4737__auto___40876 = G__40877;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40288_40878 = dommy.core.elem_and_selector(elem_sel);
var elem_40879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40288_40878,(0),null);
var selector_40880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40288_40878,(1),null);
var seq__40291_40881 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40298_40882 = null;
var count__40299_40883 = (0);
var i__40300_40884 = (0);
while(true){
if((i__40300_40884 < count__40299_40883)){
var vec__40353_40885 = chunk__40298_40882.cljs$core$IIndexed$_nth$arity$2(null,i__40300_40884);
var orig_type_40886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40353_40885,(0),null);
var f_40887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40353_40885,(1),null);
var seq__40301_40888 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40886,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40886,cljs.core.identity])));
var chunk__40303_40889 = null;
var count__40304_40890 = (0);
var i__40305_40891 = (0);
while(true){
if((i__40305_40891 < count__40304_40890)){
var vec__40366_40892 = chunk__40303_40889.cljs$core$IIndexed$_nth$arity$2(null,i__40305_40891);
var actual_type_40893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40366_40892,(0),null);
var factory_40894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40366_40892,(1),null);
var canonical_f_40895 = (function (){var G__40370 = (factory_40894.cljs$core$IFn$_invoke$arity$1 ? factory_40894.cljs$core$IFn$_invoke$arity$1(f_40887) : factory_40894.call(null,f_40887));
var fexpr__40369 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40369.cljs$core$IFn$_invoke$arity$1 ? fexpr__40369.cljs$core$IFn$_invoke$arity$1(G__40370) : fexpr__40369.call(null,G__40370));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40893,f_40887], null),canonical_f_40895], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40893),canonical_f_40895);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40893),canonical_f_40895);
}


var G__40896 = seq__40301_40888;
var G__40897 = chunk__40303_40889;
var G__40898 = count__40304_40890;
var G__40899 = (i__40305_40891 + (1));
seq__40301_40888 = G__40896;
chunk__40303_40889 = G__40897;
count__40304_40890 = G__40898;
i__40305_40891 = G__40899;
continue;
} else {
var temp__5735__auto___40900 = cljs.core.seq(seq__40301_40888);
if(temp__5735__auto___40900){
var seq__40301_40901__$1 = temp__5735__auto___40900;
if(cljs.core.chunked_seq_QMARK_(seq__40301_40901__$1)){
var c__4556__auto___40902 = cljs.core.chunk_first(seq__40301_40901__$1);
var G__40903 = cljs.core.chunk_rest(seq__40301_40901__$1);
var G__40904 = c__4556__auto___40902;
var G__40905 = cljs.core.count(c__4556__auto___40902);
var G__40906 = (0);
seq__40301_40888 = G__40903;
chunk__40303_40889 = G__40904;
count__40304_40890 = G__40905;
i__40305_40891 = G__40906;
continue;
} else {
var vec__40371_40907 = cljs.core.first(seq__40301_40901__$1);
var actual_type_40908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40371_40907,(0),null);
var factory_40909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40371_40907,(1),null);
var canonical_f_40910 = (function (){var G__40375 = (factory_40909.cljs$core$IFn$_invoke$arity$1 ? factory_40909.cljs$core$IFn$_invoke$arity$1(f_40887) : factory_40909.call(null,f_40887));
var fexpr__40374 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40374.cljs$core$IFn$_invoke$arity$1 ? fexpr__40374.cljs$core$IFn$_invoke$arity$1(G__40375) : fexpr__40374.call(null,G__40375));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40908,f_40887], null),canonical_f_40910], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40908),canonical_f_40910);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40908),canonical_f_40910);
}


var G__40911 = cljs.core.next(seq__40301_40901__$1);
var G__40912 = null;
var G__40913 = (0);
var G__40914 = (0);
seq__40301_40888 = G__40911;
chunk__40303_40889 = G__40912;
count__40304_40890 = G__40913;
i__40305_40891 = G__40914;
continue;
}
} else {
}
}
break;
}

var G__40915 = seq__40291_40881;
var G__40916 = chunk__40298_40882;
var G__40917 = count__40299_40883;
var G__40918 = (i__40300_40884 + (1));
seq__40291_40881 = G__40915;
chunk__40298_40882 = G__40916;
count__40299_40883 = G__40917;
i__40300_40884 = G__40918;
continue;
} else {
var temp__5735__auto___40919 = cljs.core.seq(seq__40291_40881);
if(temp__5735__auto___40919){
var seq__40291_40920__$1 = temp__5735__auto___40919;
if(cljs.core.chunked_seq_QMARK_(seq__40291_40920__$1)){
var c__4556__auto___40921 = cljs.core.chunk_first(seq__40291_40920__$1);
var G__40922 = cljs.core.chunk_rest(seq__40291_40920__$1);
var G__40923 = c__4556__auto___40921;
var G__40924 = cljs.core.count(c__4556__auto___40921);
var G__40925 = (0);
seq__40291_40881 = G__40922;
chunk__40298_40882 = G__40923;
count__40299_40883 = G__40924;
i__40300_40884 = G__40925;
continue;
} else {
var vec__40376_40926 = cljs.core.first(seq__40291_40920__$1);
var orig_type_40927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40376_40926,(0),null);
var f_40928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40376_40926,(1),null);
var seq__40292_40929 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40927,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40927,cljs.core.identity])));
var chunk__40294_40930 = null;
var count__40295_40931 = (0);
var i__40296_40932 = (0);
while(true){
if((i__40296_40932 < count__40295_40931)){
var vec__40392_40933 = chunk__40294_40930.cljs$core$IIndexed$_nth$arity$2(null,i__40296_40932);
var actual_type_40934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40392_40933,(0),null);
var factory_40935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40392_40933,(1),null);
var canonical_f_40936 = (function (){var G__40396 = (factory_40935.cljs$core$IFn$_invoke$arity$1 ? factory_40935.cljs$core$IFn$_invoke$arity$1(f_40928) : factory_40935.call(null,f_40928));
var fexpr__40395 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40395.cljs$core$IFn$_invoke$arity$1 ? fexpr__40395.cljs$core$IFn$_invoke$arity$1(G__40396) : fexpr__40395.call(null,G__40396));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40934,f_40928], null),canonical_f_40936], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40934),canonical_f_40936);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40934),canonical_f_40936);
}


var G__40937 = seq__40292_40929;
var G__40938 = chunk__40294_40930;
var G__40939 = count__40295_40931;
var G__40940 = (i__40296_40932 + (1));
seq__40292_40929 = G__40937;
chunk__40294_40930 = G__40938;
count__40295_40931 = G__40939;
i__40296_40932 = G__40940;
continue;
} else {
var temp__5735__auto___40941__$1 = cljs.core.seq(seq__40292_40929);
if(temp__5735__auto___40941__$1){
var seq__40292_40942__$1 = temp__5735__auto___40941__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40292_40942__$1)){
var c__4556__auto___40943 = cljs.core.chunk_first(seq__40292_40942__$1);
var G__40944 = cljs.core.chunk_rest(seq__40292_40942__$1);
var G__40945 = c__4556__auto___40943;
var G__40946 = cljs.core.count(c__4556__auto___40943);
var G__40947 = (0);
seq__40292_40929 = G__40944;
chunk__40294_40930 = G__40945;
count__40295_40931 = G__40946;
i__40296_40932 = G__40947;
continue;
} else {
var vec__40397_40948 = cljs.core.first(seq__40292_40942__$1);
var actual_type_40949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40397_40948,(0),null);
var factory_40950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40397_40948,(1),null);
var canonical_f_40951 = (function (){var G__40401 = (factory_40950.cljs$core$IFn$_invoke$arity$1 ? factory_40950.cljs$core$IFn$_invoke$arity$1(f_40928) : factory_40950.call(null,f_40928));
var fexpr__40400 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40400.cljs$core$IFn$_invoke$arity$1 ? fexpr__40400.cljs$core$IFn$_invoke$arity$1(G__40401) : fexpr__40400.call(null,G__40401));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40949,f_40928], null),canonical_f_40951], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40949),canonical_f_40951);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40949),canonical_f_40951);
}


var G__40952 = cljs.core.next(seq__40292_40942__$1);
var G__40953 = null;
var G__40954 = (0);
var G__40955 = (0);
seq__40292_40929 = G__40952;
chunk__40294_40930 = G__40953;
count__40295_40931 = G__40954;
i__40296_40932 = G__40955;
continue;
}
} else {
}
}
break;
}

var G__40956 = cljs.core.next(seq__40291_40920__$1);
var G__40957 = null;
var G__40958 = (0);
var G__40959 = (0);
seq__40291_40881 = G__40956;
chunk__40298_40882 = G__40957;
count__40299_40883 = G__40958;
i__40300_40884 = G__40959;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40286){
var G__40287 = cljs.core.first(seq40286);
var seq40286__$1 = cljs.core.next(seq40286);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40287,seq40286__$1);
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
var args__4742__auto__ = [];
var len__4736__auto___40960 = arguments.length;
var i__4737__auto___40961 = (0);
while(true){
if((i__4737__auto___40961 < len__4736__auto___40960)){
args__4742__auto__.push((arguments[i__4737__auto___40961]));

var G__40962 = (i__4737__auto___40961 + (1));
i__4737__auto___40961 = G__40962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40404_40963 = dommy.core.elem_and_selector(elem_sel);
var elem_40964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404_40963,(0),null);
var selector_40965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404_40963,(1),null);
var seq__40407_40966 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40414_40967 = null;
var count__40415_40968 = (0);
var i__40416_40969 = (0);
while(true){
if((i__40416_40969 < count__40415_40968)){
var vec__40456_40970 = chunk__40414_40967.cljs$core$IIndexed$_nth$arity$2(null,i__40416_40969);
var orig_type_40971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456_40970,(0),null);
var f_40972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456_40970,(1),null);
var seq__40417_40973 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40971,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40971,cljs.core.identity])));
var chunk__40419_40974 = null;
var count__40420_40975 = (0);
var i__40421_40976 = (0);
while(true){
if((i__40421_40976 < count__40420_40975)){
var vec__40465_40977 = chunk__40419_40974.cljs$core$IIndexed$_nth$arity$2(null,i__40421_40976);
var actual_type_40978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40465_40977,(0),null);
var __40979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40465_40977,(1),null);
var keys_40980 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40965,actual_type_40978,f_40972], null);
var canonical_f_40981 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40964),keys_40980);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40964,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_40980], 0));

if(cljs.core.truth_(elem_40964.removeEventListener)){
elem_40964.removeEventListener(cljs.core.name(actual_type_40978),canonical_f_40981);
} else {
elem_40964.detachEvent(cljs.core.name(actual_type_40978),canonical_f_40981);
}


var G__40982 = seq__40417_40973;
var G__40983 = chunk__40419_40974;
var G__40984 = count__40420_40975;
var G__40985 = (i__40421_40976 + (1));
seq__40417_40973 = G__40982;
chunk__40419_40974 = G__40983;
count__40420_40975 = G__40984;
i__40421_40976 = G__40985;
continue;
} else {
var temp__5735__auto___40986 = cljs.core.seq(seq__40417_40973);
if(temp__5735__auto___40986){
var seq__40417_40987__$1 = temp__5735__auto___40986;
if(cljs.core.chunked_seq_QMARK_(seq__40417_40987__$1)){
var c__4556__auto___40988 = cljs.core.chunk_first(seq__40417_40987__$1);
var G__40989 = cljs.core.chunk_rest(seq__40417_40987__$1);
var G__40990 = c__4556__auto___40988;
var G__40991 = cljs.core.count(c__4556__auto___40988);
var G__40992 = (0);
seq__40417_40973 = G__40989;
chunk__40419_40974 = G__40990;
count__40420_40975 = G__40991;
i__40421_40976 = G__40992;
continue;
} else {
var vec__40468_40993 = cljs.core.first(seq__40417_40987__$1);
var actual_type_40994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40468_40993,(0),null);
var __40995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40468_40993,(1),null);
var keys_40996 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40965,actual_type_40994,f_40972], null);
var canonical_f_40997 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40964),keys_40996);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40964,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_40996], 0));

if(cljs.core.truth_(elem_40964.removeEventListener)){
elem_40964.removeEventListener(cljs.core.name(actual_type_40994),canonical_f_40997);
} else {
elem_40964.detachEvent(cljs.core.name(actual_type_40994),canonical_f_40997);
}


var G__40998 = cljs.core.next(seq__40417_40987__$1);
var G__40999 = null;
var G__41000 = (0);
var G__41001 = (0);
seq__40417_40973 = G__40998;
chunk__40419_40974 = G__40999;
count__40420_40975 = G__41000;
i__40421_40976 = G__41001;
continue;
}
} else {
}
}
break;
}

var G__41002 = seq__40407_40966;
var G__41003 = chunk__40414_40967;
var G__41004 = count__40415_40968;
var G__41005 = (i__40416_40969 + (1));
seq__40407_40966 = G__41002;
chunk__40414_40967 = G__41003;
count__40415_40968 = G__41004;
i__40416_40969 = G__41005;
continue;
} else {
var temp__5735__auto___41006 = cljs.core.seq(seq__40407_40966);
if(temp__5735__auto___41006){
var seq__40407_41007__$1 = temp__5735__auto___41006;
if(cljs.core.chunked_seq_QMARK_(seq__40407_41007__$1)){
var c__4556__auto___41008 = cljs.core.chunk_first(seq__40407_41007__$1);
var G__41009 = cljs.core.chunk_rest(seq__40407_41007__$1);
var G__41010 = c__4556__auto___41008;
var G__41011 = cljs.core.count(c__4556__auto___41008);
var G__41012 = (0);
seq__40407_40966 = G__41009;
chunk__40414_40967 = G__41010;
count__40415_40968 = G__41011;
i__40416_40969 = G__41012;
continue;
} else {
var vec__40475_41013 = cljs.core.first(seq__40407_41007__$1);
var orig_type_41014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40475_41013,(0),null);
var f_41015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40475_41013,(1),null);
var seq__40408_41016 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41014,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41014,cljs.core.identity])));
var chunk__40410_41017 = null;
var count__40411_41018 = (0);
var i__40412_41019 = (0);
while(true){
if((i__40412_41019 < count__40411_41018)){
var vec__40484_41020 = chunk__40410_41017.cljs$core$IIndexed$_nth$arity$2(null,i__40412_41019);
var actual_type_41021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40484_41020,(0),null);
var __41022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40484_41020,(1),null);
var keys_41023 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40965,actual_type_41021,f_41015], null);
var canonical_f_41024 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40964),keys_41023);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40964,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41023], 0));

if(cljs.core.truth_(elem_40964.removeEventListener)){
elem_40964.removeEventListener(cljs.core.name(actual_type_41021),canonical_f_41024);
} else {
elem_40964.detachEvent(cljs.core.name(actual_type_41021),canonical_f_41024);
}


var G__41025 = seq__40408_41016;
var G__41026 = chunk__40410_41017;
var G__41027 = count__40411_41018;
var G__41028 = (i__40412_41019 + (1));
seq__40408_41016 = G__41025;
chunk__40410_41017 = G__41026;
count__40411_41018 = G__41027;
i__40412_41019 = G__41028;
continue;
} else {
var temp__5735__auto___41029__$1 = cljs.core.seq(seq__40408_41016);
if(temp__5735__auto___41029__$1){
var seq__40408_41030__$1 = temp__5735__auto___41029__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40408_41030__$1)){
var c__4556__auto___41031 = cljs.core.chunk_first(seq__40408_41030__$1);
var G__41032 = cljs.core.chunk_rest(seq__40408_41030__$1);
var G__41033 = c__4556__auto___41031;
var G__41034 = cljs.core.count(c__4556__auto___41031);
var G__41035 = (0);
seq__40408_41016 = G__41032;
chunk__40410_41017 = G__41033;
count__40411_41018 = G__41034;
i__40412_41019 = G__41035;
continue;
} else {
var vec__40490_41036 = cljs.core.first(seq__40408_41030__$1);
var actual_type_41037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490_41036,(0),null);
var __41038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490_41036,(1),null);
var keys_41039 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40965,actual_type_41037,f_41015], null);
var canonical_f_41040 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40964),keys_41039);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40964,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41039], 0));

if(cljs.core.truth_(elem_40964.removeEventListener)){
elem_40964.removeEventListener(cljs.core.name(actual_type_41037),canonical_f_41040);
} else {
elem_40964.detachEvent(cljs.core.name(actual_type_41037),canonical_f_41040);
}


var G__41042 = cljs.core.next(seq__40408_41030__$1);
var G__41043 = null;
var G__41044 = (0);
var G__41045 = (0);
seq__40408_41016 = G__41042;
chunk__40410_41017 = G__41043;
count__40411_41018 = G__41044;
i__40412_41019 = G__41045;
continue;
}
} else {
}
}
break;
}

var G__41046 = cljs.core.next(seq__40407_41007__$1);
var G__41047 = null;
var G__41048 = (0);
var G__41049 = (0);
seq__40407_40966 = G__41046;
chunk__40414_40967 = G__41047;
count__40415_40968 = G__41048;
i__40416_40969 = G__41049;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40402){
var G__40403 = cljs.core.first(seq40402);
var seq40402__$1 = cljs.core.next(seq40402);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40403,seq40402__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41051 = arguments.length;
var i__4737__auto___41052 = (0);
while(true){
if((i__4737__auto___41052 < len__4736__auto___41051)){
args__4742__auto__.push((arguments[i__4737__auto___41052]));

var G__41053 = (i__4737__auto___41052 + (1));
i__4737__auto___41052 = G__41053;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40499_41054 = dommy.core.elem_and_selector(elem_sel);
var elem_41055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499_41054,(0),null);
var selector_41056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499_41054,(1),null);
var seq__40502_41057 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40503_41058 = null;
var count__40504_41059 = (0);
var i__40505_41060 = (0);
while(true){
if((i__40505_41060 < count__40504_41059)){
var vec__40512_41061 = chunk__40503_41058.cljs$core$IIndexed$_nth$arity$2(null,i__40505_41060);
var type_41063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512_41061,(0),null);
var f_41064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512_41061,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41063,((function (seq__40502_41057,chunk__40503_41058,count__40504_41059,i__40505_41060,vec__40512_41061,type_41063,f_41064,vec__40499_41054,elem_41055,selector_41056){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41063,dommy$core$this_fn], 0));

return (f_41064.cljs$core$IFn$_invoke$arity$1 ? f_41064.cljs$core$IFn$_invoke$arity$1(e) : f_41064.call(null,e));
});})(seq__40502_41057,chunk__40503_41058,count__40504_41059,i__40505_41060,vec__40512_41061,type_41063,f_41064,vec__40499_41054,elem_41055,selector_41056))
], 0));


var G__41065 = seq__40502_41057;
var G__41066 = chunk__40503_41058;
var G__41067 = count__40504_41059;
var G__41068 = (i__40505_41060 + (1));
seq__40502_41057 = G__41065;
chunk__40503_41058 = G__41066;
count__40504_41059 = G__41067;
i__40505_41060 = G__41068;
continue;
} else {
var temp__5735__auto___41070 = cljs.core.seq(seq__40502_41057);
if(temp__5735__auto___41070){
var seq__40502_41072__$1 = temp__5735__auto___41070;
if(cljs.core.chunked_seq_QMARK_(seq__40502_41072__$1)){
var c__4556__auto___41073 = cljs.core.chunk_first(seq__40502_41072__$1);
var G__41074 = cljs.core.chunk_rest(seq__40502_41072__$1);
var G__41075 = c__4556__auto___41073;
var G__41076 = cljs.core.count(c__4556__auto___41073);
var G__41077 = (0);
seq__40502_41057 = G__41074;
chunk__40503_41058 = G__41075;
count__40504_41059 = G__41076;
i__40505_41060 = G__41077;
continue;
} else {
var vec__40515_41079 = cljs.core.first(seq__40502_41072__$1);
var type_41080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40515_41079,(0),null);
var f_41081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40515_41079,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41080,((function (seq__40502_41057,chunk__40503_41058,count__40504_41059,i__40505_41060,vec__40515_41079,type_41080,f_41081,seq__40502_41072__$1,temp__5735__auto___41070,vec__40499_41054,elem_41055,selector_41056){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41080,dommy$core$this_fn], 0));

return (f_41081.cljs$core$IFn$_invoke$arity$1 ? f_41081.cljs$core$IFn$_invoke$arity$1(e) : f_41081.call(null,e));
});})(seq__40502_41057,chunk__40503_41058,count__40504_41059,i__40505_41060,vec__40515_41079,type_41080,f_41081,seq__40502_41072__$1,temp__5735__auto___41070,vec__40499_41054,elem_41055,selector_41056))
], 0));


var G__41082 = cljs.core.next(seq__40502_41072__$1);
var G__41083 = null;
var G__41084 = (0);
var G__41085 = (0);
seq__40502_41057 = G__41082;
chunk__40503_41058 = G__41083;
count__40504_41059 = G__41084;
i__40505_41060 = G__41085;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40493){
var G__40494 = cljs.core.first(seq40493);
var seq40493__$1 = cljs.core.next(seq40493);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40494,seq40493__$1);
}));


//# sourceMappingURL=dommy.core.js.map
