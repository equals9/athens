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
var len__4736__auto___40579 = arguments.length;
var i__4737__auto___40580 = (0);
while(true){
if((i__4737__auto___40580 < len__4736__auto___40579)){
args__4742__auto__.push((arguments[i__4737__auto___40580]));

var G__40581 = (i__4737__auto___40580 + (1));
i__4737__auto___40580 = G__40581;
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
var seq__40138_40582 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40139_40583 = null;
var count__40140_40584 = (0);
var i__40141_40585 = (0);
while(true){
if((i__40141_40585 < count__40140_40584)){
var vec__40150_40586 = chunk__40139_40583.cljs$core$IIndexed$_nth$arity$2(null,i__40141_40585);
var k_40587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40150_40586,(0),null);
var v_40588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40150_40586,(1),null);
style.setProperty(dommy.utils.as_str(k_40587),v_40588);


var G__40589 = seq__40138_40582;
var G__40590 = chunk__40139_40583;
var G__40591 = count__40140_40584;
var G__40592 = (i__40141_40585 + (1));
seq__40138_40582 = G__40589;
chunk__40139_40583 = G__40590;
count__40140_40584 = G__40591;
i__40141_40585 = G__40592;
continue;
} else {
var temp__5735__auto___40593 = cljs.core.seq(seq__40138_40582);
if(temp__5735__auto___40593){
var seq__40138_40594__$1 = temp__5735__auto___40593;
if(cljs.core.chunked_seq_QMARK_(seq__40138_40594__$1)){
var c__4556__auto___40595 = cljs.core.chunk_first(seq__40138_40594__$1);
var G__40596 = cljs.core.chunk_rest(seq__40138_40594__$1);
var G__40597 = c__4556__auto___40595;
var G__40598 = cljs.core.count(c__4556__auto___40595);
var G__40599 = (0);
seq__40138_40582 = G__40596;
chunk__40139_40583 = G__40597;
count__40140_40584 = G__40598;
i__40141_40585 = G__40599;
continue;
} else {
var vec__40154_40600 = cljs.core.first(seq__40138_40594__$1);
var k_40601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40154_40600,(0),null);
var v_40602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40154_40600,(1),null);
style.setProperty(dommy.utils.as_str(k_40601),v_40602);


var G__40604 = cljs.core.next(seq__40138_40594__$1);
var G__40605 = null;
var G__40606 = (0);
var G__40607 = (0);
seq__40138_40582 = G__40604;
chunk__40139_40583 = G__40605;
count__40140_40584 = G__40606;
i__40141_40585 = G__40607;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40135){
var G__40136 = cljs.core.first(seq40135);
var seq40135__$1 = cljs.core.next(seq40135);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40136,seq40135__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40608 = arguments.length;
var i__4737__auto___40609 = (0);
while(true){
if((i__4737__auto___40609 < len__4736__auto___40608)){
args__4742__auto__.push((arguments[i__4737__auto___40609]));

var G__40610 = (i__4737__auto___40609 + (1));
i__4737__auto___40609 = G__40610;
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
var seq__40161_40612 = cljs.core.seq(keywords);
var chunk__40162_40613 = null;
var count__40163_40614 = (0);
var i__40164_40615 = (0);
while(true){
if((i__40164_40615 < count__40163_40614)){
var kw_40616 = chunk__40162_40613.cljs$core$IIndexed$_nth$arity$2(null,i__40164_40615);
style.removeProperty(dommy.utils.as_str(kw_40616));


var G__40617 = seq__40161_40612;
var G__40618 = chunk__40162_40613;
var G__40619 = count__40163_40614;
var G__40620 = (i__40164_40615 + (1));
seq__40161_40612 = G__40617;
chunk__40162_40613 = G__40618;
count__40163_40614 = G__40619;
i__40164_40615 = G__40620;
continue;
} else {
var temp__5735__auto___40621 = cljs.core.seq(seq__40161_40612);
if(temp__5735__auto___40621){
var seq__40161_40622__$1 = temp__5735__auto___40621;
if(cljs.core.chunked_seq_QMARK_(seq__40161_40622__$1)){
var c__4556__auto___40623 = cljs.core.chunk_first(seq__40161_40622__$1);
var G__40624 = cljs.core.chunk_rest(seq__40161_40622__$1);
var G__40625 = c__4556__auto___40623;
var G__40626 = cljs.core.count(c__4556__auto___40623);
var G__40627 = (0);
seq__40161_40612 = G__40624;
chunk__40162_40613 = G__40625;
count__40163_40614 = G__40626;
i__40164_40615 = G__40627;
continue;
} else {
var kw_40628 = cljs.core.first(seq__40161_40622__$1);
style.removeProperty(dommy.utils.as_str(kw_40628));


var G__40629 = cljs.core.next(seq__40161_40622__$1);
var G__40630 = null;
var G__40631 = (0);
var G__40632 = (0);
seq__40161_40612 = G__40629;
chunk__40162_40613 = G__40630;
count__40163_40614 = G__40631;
i__40164_40615 = G__40632;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40158){
var G__40159 = cljs.core.first(seq40158);
var seq40158__$1 = cljs.core.next(seq40158);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40159,seq40158__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40633 = arguments.length;
var i__4737__auto___40634 = (0);
while(true){
if((i__4737__auto___40634 < len__4736__auto___40633)){
args__4742__auto__.push((arguments[i__4737__auto___40634]));

var G__40635 = (i__4737__auto___40634 + (1));
i__4737__auto___40634 = G__40635;
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

var seq__40169_40636 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40170_40637 = null;
var count__40171_40638 = (0);
var i__40172_40639 = (0);
while(true){
if((i__40172_40639 < count__40171_40638)){
var vec__40179_40640 = chunk__40170_40637.cljs$core$IIndexed$_nth$arity$2(null,i__40172_40639);
var k_40641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40179_40640,(0),null);
var v_40642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40179_40640,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40641,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40642),"px"].join('')], 0));


var G__40643 = seq__40169_40636;
var G__40644 = chunk__40170_40637;
var G__40645 = count__40171_40638;
var G__40646 = (i__40172_40639 + (1));
seq__40169_40636 = G__40643;
chunk__40170_40637 = G__40644;
count__40171_40638 = G__40645;
i__40172_40639 = G__40646;
continue;
} else {
var temp__5735__auto___40647 = cljs.core.seq(seq__40169_40636);
if(temp__5735__auto___40647){
var seq__40169_40648__$1 = temp__5735__auto___40647;
if(cljs.core.chunked_seq_QMARK_(seq__40169_40648__$1)){
var c__4556__auto___40649 = cljs.core.chunk_first(seq__40169_40648__$1);
var G__40650 = cljs.core.chunk_rest(seq__40169_40648__$1);
var G__40651 = c__4556__auto___40649;
var G__40652 = cljs.core.count(c__4556__auto___40649);
var G__40653 = (0);
seq__40169_40636 = G__40650;
chunk__40170_40637 = G__40651;
count__40171_40638 = G__40652;
i__40172_40639 = G__40653;
continue;
} else {
var vec__40182_40654 = cljs.core.first(seq__40169_40648__$1);
var k_40655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40654,(0),null);
var v_40656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40654,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40655,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40656),"px"].join('')], 0));


var G__40657 = cljs.core.next(seq__40169_40648__$1);
var G__40658 = null;
var G__40659 = (0);
var G__40660 = (0);
seq__40169_40636 = G__40657;
chunk__40170_40637 = G__40658;
count__40171_40638 = G__40659;
i__40172_40639 = G__40660;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40167){
var G__40168 = cljs.core.first(seq40167);
var seq40167__$1 = cljs.core.next(seq40167);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40168,seq40167__$1);
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
var G__40190 = arguments.length;
switch (G__40190) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40662 = arguments.length;
var i__4737__auto___40663 = (0);
while(true){
if((i__4737__auto___40663 < len__4736__auto___40662)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40663]));

var G__40664 = (i__4737__auto___40663 + (1));
i__4737__auto___40663 = G__40664;
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
var G__40191 = elem;
(G__40191[k__$1] = v);

return G__40191;
} else {
var G__40192 = elem;
G__40192.setAttribute(k__$1,v);

return G__40192;
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

var seq__40193_40665 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40194_40666 = null;
var count__40195_40667 = (0);
var i__40196_40668 = (0);
while(true){
if((i__40196_40668 < count__40195_40667)){
var vec__40203_40669 = chunk__40194_40666.cljs$core$IIndexed$_nth$arity$2(null,i__40196_40668);
var k_40670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40203_40669,(0),null);
var v_40671__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40203_40669,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40670__$1,v_40671__$1);


var G__40672 = seq__40193_40665;
var G__40673 = chunk__40194_40666;
var G__40674 = count__40195_40667;
var G__40675 = (i__40196_40668 + (1));
seq__40193_40665 = G__40672;
chunk__40194_40666 = G__40673;
count__40195_40667 = G__40674;
i__40196_40668 = G__40675;
continue;
} else {
var temp__5735__auto___40676 = cljs.core.seq(seq__40193_40665);
if(temp__5735__auto___40676){
var seq__40193_40677__$1 = temp__5735__auto___40676;
if(cljs.core.chunked_seq_QMARK_(seq__40193_40677__$1)){
var c__4556__auto___40678 = cljs.core.chunk_first(seq__40193_40677__$1);
var G__40679 = cljs.core.chunk_rest(seq__40193_40677__$1);
var G__40680 = c__4556__auto___40678;
var G__40681 = cljs.core.count(c__4556__auto___40678);
var G__40682 = (0);
seq__40193_40665 = G__40679;
chunk__40194_40666 = G__40680;
count__40195_40667 = G__40681;
i__40196_40668 = G__40682;
continue;
} else {
var vec__40206_40683 = cljs.core.first(seq__40193_40677__$1);
var k_40684__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40683,(0),null);
var v_40685__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40683,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40684__$1,v_40685__$1);


var G__40686 = cljs.core.next(seq__40193_40677__$1);
var G__40687 = null;
var G__40688 = (0);
var G__40689 = (0);
seq__40193_40665 = G__40686;
chunk__40194_40666 = G__40687;
count__40195_40667 = G__40688;
i__40196_40668 = G__40689;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40186){
var G__40187 = cljs.core.first(seq40186);
var seq40186__$1 = cljs.core.next(seq40186);
var G__40188 = cljs.core.first(seq40186__$1);
var seq40186__$2 = cljs.core.next(seq40186__$1);
var G__40189 = cljs.core.first(seq40186__$2);
var seq40186__$3 = cljs.core.next(seq40186__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40187,G__40188,G__40189,seq40186__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__40213 = arguments.length;
switch (G__40213) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40691 = arguments.length;
var i__4737__auto___40692 = (0);
while(true){
if((i__4737__auto___40692 < len__4736__auto___40691)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40692]));

var G__40693 = (i__4737__auto___40692 + (1));
i__4737__auto___40692 = G__40693;
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
var k_40694__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40214.cljs$core$IFn$_invoke$arity$1 ? fexpr__40214.cljs$core$IFn$_invoke$arity$1(k_40694__$1) : fexpr__40214.call(null,k_40694__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40694__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40215_40695 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40216_40696 = null;
var count__40217_40697 = (0);
var i__40218_40698 = (0);
while(true){
if((i__40218_40698 < count__40217_40697)){
var k_40699__$1 = chunk__40216_40696.cljs$core$IIndexed$_nth$arity$2(null,i__40218_40698);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40699__$1);


var G__40700 = seq__40215_40695;
var G__40701 = chunk__40216_40696;
var G__40702 = count__40217_40697;
var G__40703 = (i__40218_40698 + (1));
seq__40215_40695 = G__40700;
chunk__40216_40696 = G__40701;
count__40217_40697 = G__40702;
i__40218_40698 = G__40703;
continue;
} else {
var temp__5735__auto___40704 = cljs.core.seq(seq__40215_40695);
if(temp__5735__auto___40704){
var seq__40215_40705__$1 = temp__5735__auto___40704;
if(cljs.core.chunked_seq_QMARK_(seq__40215_40705__$1)){
var c__4556__auto___40706 = cljs.core.chunk_first(seq__40215_40705__$1);
var G__40707 = cljs.core.chunk_rest(seq__40215_40705__$1);
var G__40708 = c__4556__auto___40706;
var G__40709 = cljs.core.count(c__4556__auto___40706);
var G__40710 = (0);
seq__40215_40695 = G__40707;
chunk__40216_40696 = G__40708;
count__40217_40697 = G__40709;
i__40218_40698 = G__40710;
continue;
} else {
var k_40711__$1 = cljs.core.first(seq__40215_40705__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40711__$1);


var G__40712 = cljs.core.next(seq__40215_40705__$1);
var G__40713 = null;
var G__40714 = (0);
var G__40715 = (0);
seq__40215_40695 = G__40712;
chunk__40216_40696 = G__40713;
count__40217_40697 = G__40714;
i__40218_40698 = G__40715;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq40210){
var G__40211 = cljs.core.first(seq40210);
var seq40210__$1 = cljs.core.next(seq40210);
var G__40212 = cljs.core.first(seq40210__$1);
var seq40210__$2 = cljs.core.next(seq40210__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40211,G__40212,seq40210__$2);
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
var len__4736__auto___40718 = arguments.length;
var i__4737__auto___40719 = (0);
while(true){
if((i__4737__auto___40719 < len__4736__auto___40718)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40719]));

var G__40720 = (i__4737__auto___40719 + (1));
i__4737__auto___40719 = G__40720;
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
var c_40784 = cljs.core.first(seq__40234_40777__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40784);


var G__40786 = cljs.core.next(seq__40234_40777__$1);
var G__40787 = null;
var G__40788 = (0);
var G__40789 = (0);
seq__40234_40767 = G__40786;
chunk__40235_40768 = G__40787;
count__40236_40769 = G__40788;
i__40237_40770 = G__40789;
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
var len__4736__auto___40791 = arguments.length;
var i__4737__auto___40792 = (0);
while(true){
if((i__4737__auto___40792 < len__4736__auto___40791)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40792]));

var G__40793 = (i__4737__auto___40792 + (1));
i__4737__auto___40792 = G__40793;
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
var temp__5733__auto___40794 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40794)){
var class_list_40795 = temp__5733__auto___40794;
class_list_40795.remove(c__$1);
} else {
var class_name_40796 = dommy.core.class$(elem);
var new_class_name_40797 = dommy.utils.remove_class_str(class_name_40796,c__$1);
if((class_name_40796 === new_class_name_40797)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40797);
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


var G__40798 = seq__40243;
var G__40799 = chunk__40244;
var G__40800 = count__40245;
var G__40801 = (i__40246 + (1));
seq__40243 = G__40798;
chunk__40244 = G__40799;
count__40245 = G__40800;
i__40246 = G__40801;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40243);
if(temp__5735__auto__){
var seq__40243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40243__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40243__$1);
var G__40802 = cljs.core.chunk_rest(seq__40243__$1);
var G__40803 = c__4556__auto__;
var G__40804 = cljs.core.count(c__4556__auto__);
var G__40805 = (0);
seq__40243 = G__40802;
chunk__40244 = G__40803;
count__40245 = G__40804;
i__40246 = G__40805;
continue;
} else {
var c = cljs.core.first(seq__40243__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40806 = cljs.core.next(seq__40243__$1);
var G__40807 = null;
var G__40808 = (0);
var G__40809 = (0);
seq__40243 = G__40806;
chunk__40244 = G__40807;
count__40245 = G__40808;
i__40246 = G__40809;
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
var temp__5733__auto___40813 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40813)){
var class_list_40814 = temp__5733__auto___40813;
class_list_40814.toggle(c__$1);
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
var G__40258 = arguments.length;
switch (G__40258) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40820 = arguments.length;
var i__4737__auto___40821 = (0);
while(true){
if((i__4737__auto___40821 < len__4736__auto___40820)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40821]));

var G__40822 = (i__4737__auto___40821 + (1));
i__4737__auto___40821 = G__40822;
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
var G__40259 = parent;
G__40259.appendChild(child);

return G__40259;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40260_40823 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40261_40824 = null;
var count__40262_40825 = (0);
var i__40263_40826 = (0);
while(true){
if((i__40263_40826 < count__40262_40825)){
var c_40827 = chunk__40261_40824.cljs$core$IIndexed$_nth$arity$2(null,i__40263_40826);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40827);


var G__40828 = seq__40260_40823;
var G__40829 = chunk__40261_40824;
var G__40830 = count__40262_40825;
var G__40831 = (i__40263_40826 + (1));
seq__40260_40823 = G__40828;
chunk__40261_40824 = G__40829;
count__40262_40825 = G__40830;
i__40263_40826 = G__40831;
continue;
} else {
var temp__5735__auto___40832 = cljs.core.seq(seq__40260_40823);
if(temp__5735__auto___40832){
var seq__40260_40833__$1 = temp__5735__auto___40832;
if(cljs.core.chunked_seq_QMARK_(seq__40260_40833__$1)){
var c__4556__auto___40834 = cljs.core.chunk_first(seq__40260_40833__$1);
var G__40835 = cljs.core.chunk_rest(seq__40260_40833__$1);
var G__40836 = c__4556__auto___40834;
var G__40837 = cljs.core.count(c__4556__auto___40834);
var G__40838 = (0);
seq__40260_40823 = G__40835;
chunk__40261_40824 = G__40836;
count__40262_40825 = G__40837;
i__40263_40826 = G__40838;
continue;
} else {
var c_40839 = cljs.core.first(seq__40260_40833__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40839);


var G__40840 = cljs.core.next(seq__40260_40833__$1);
var G__40841 = null;
var G__40842 = (0);
var G__40843 = (0);
seq__40260_40823 = G__40840;
chunk__40261_40824 = G__40841;
count__40262_40825 = G__40842;
i__40263_40826 = G__40843;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40255){
var G__40256 = cljs.core.first(seq40255);
var seq40255__$1 = cljs.core.next(seq40255);
var G__40257 = cljs.core.first(seq40255__$1);
var seq40255__$2 = cljs.core.next(seq40255__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40256,G__40257,seq40255__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__40270 = arguments.length;
switch (G__40270) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40845 = arguments.length;
var i__4737__auto___40846 = (0);
while(true){
if((i__4737__auto___40846 < len__4736__auto___40845)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40846]));

var G__40847 = (i__4737__auto___40846 + (1));
i__4737__auto___40846 = G__40847;
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
var G__40271 = parent;
G__40271.insertBefore(child,parent.firstChild);

return G__40271;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40272_40848 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40273_40849 = null;
var count__40274_40850 = (0);
var i__40275_40851 = (0);
while(true){
if((i__40275_40851 < count__40274_40850)){
var c_40852 = chunk__40273_40849.cljs$core$IIndexed$_nth$arity$2(null,i__40275_40851);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40852);


var G__40853 = seq__40272_40848;
var G__40854 = chunk__40273_40849;
var G__40855 = count__40274_40850;
var G__40856 = (i__40275_40851 + (1));
seq__40272_40848 = G__40853;
chunk__40273_40849 = G__40854;
count__40274_40850 = G__40855;
i__40275_40851 = G__40856;
continue;
} else {
var temp__5735__auto___40857 = cljs.core.seq(seq__40272_40848);
if(temp__5735__auto___40857){
var seq__40272_40858__$1 = temp__5735__auto___40857;
if(cljs.core.chunked_seq_QMARK_(seq__40272_40858__$1)){
var c__4556__auto___40859 = cljs.core.chunk_first(seq__40272_40858__$1);
var G__40860 = cljs.core.chunk_rest(seq__40272_40858__$1);
var G__40861 = c__4556__auto___40859;
var G__40862 = cljs.core.count(c__4556__auto___40859);
var G__40863 = (0);
seq__40272_40848 = G__40860;
chunk__40273_40849 = G__40861;
count__40274_40850 = G__40862;
i__40275_40851 = G__40863;
continue;
} else {
var c_40864 = cljs.core.first(seq__40272_40858__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40864);


var G__40865 = cljs.core.next(seq__40272_40858__$1);
var G__40866 = null;
var G__40867 = (0);
var G__40868 = (0);
seq__40272_40848 = G__40865;
chunk__40273_40849 = G__40866;
count__40274_40850 = G__40867;
i__40275_40851 = G__40868;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq40267){
var G__40268 = cljs.core.first(seq40267);
var seq40267__$1 = cljs.core.next(seq40267);
var G__40269 = cljs.core.first(seq40267__$1);
var seq40267__$2 = cljs.core.next(seq40267__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40268,G__40269,seq40267__$2);
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
var temp__5733__auto___40869 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40869)){
var next_40870 = temp__5733__auto___40869;
dommy.core.insert_before_BANG_(elem,next_40870);
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
var G__40277 = arguments.length;
switch (G__40277) {
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
var G__40278 = p;
G__40278.removeChild(elem);

return G__40278;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40279){
var vec__40280 = p__40279;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280,(1),null);
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
var len__4736__auto___40872 = arguments.length;
var i__4737__auto___40873 = (0);
while(true){
if((i__4737__auto___40873 < len__4736__auto___40872)){
args__4742__auto__.push((arguments[i__4737__auto___40873]));

var G__40874 = (i__4737__auto___40873 + (1));
i__4737__auto___40873 = G__40874;
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
var vec__40356_40885 = chunk__40298_40882.cljs$core$IIndexed$_nth$arity$2(null,i__40300_40884);
var orig_type_40886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40356_40885,(0),null);
var f_40887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40356_40885,(1),null);
var seq__40301_40888 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40886,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40886,cljs.core.identity])));
var chunk__40303_40889 = null;
var count__40304_40890 = (0);
var i__40305_40891 = (0);
while(true){
if((i__40305_40891 < count__40304_40890)){
var vec__40369_40892 = chunk__40303_40889.cljs$core$IIndexed$_nth$arity$2(null,i__40305_40891);
var actual_type_40893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40369_40892,(0),null);
var factory_40894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40369_40892,(1),null);
var canonical_f_40895 = (function (){var G__40373 = (factory_40894.cljs$core$IFn$_invoke$arity$1 ? factory_40894.cljs$core$IFn$_invoke$arity$1(f_40887) : factory_40894.call(null,f_40887));
var fexpr__40372 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40372.cljs$core$IFn$_invoke$arity$1 ? fexpr__40372.cljs$core$IFn$_invoke$arity$1(G__40373) : fexpr__40372.call(null,G__40373));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40893,f_40887], null),canonical_f_40895], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40893),canonical_f_40895);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40893),canonical_f_40895);
}


var G__40897 = seq__40301_40888;
var G__40898 = chunk__40303_40889;
var G__40899 = count__40304_40890;
var G__40900 = (i__40305_40891 + (1));
seq__40301_40888 = G__40897;
chunk__40303_40889 = G__40898;
count__40304_40890 = G__40899;
i__40305_40891 = G__40900;
continue;
} else {
var temp__5735__auto___40901 = cljs.core.seq(seq__40301_40888);
if(temp__5735__auto___40901){
var seq__40301_40903__$1 = temp__5735__auto___40901;
if(cljs.core.chunked_seq_QMARK_(seq__40301_40903__$1)){
var c__4556__auto___40904 = cljs.core.chunk_first(seq__40301_40903__$1);
var G__40905 = cljs.core.chunk_rest(seq__40301_40903__$1);
var G__40906 = c__4556__auto___40904;
var G__40907 = cljs.core.count(c__4556__auto___40904);
var G__40908 = (0);
seq__40301_40888 = G__40905;
chunk__40303_40889 = G__40906;
count__40304_40890 = G__40907;
i__40305_40891 = G__40908;
continue;
} else {
var vec__40374_40909 = cljs.core.first(seq__40301_40903__$1);
var actual_type_40910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40374_40909,(0),null);
var factory_40911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40374_40909,(1),null);
var canonical_f_40912 = (function (){var G__40378 = (factory_40911.cljs$core$IFn$_invoke$arity$1 ? factory_40911.cljs$core$IFn$_invoke$arity$1(f_40887) : factory_40911.call(null,f_40887));
var fexpr__40377 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40377.cljs$core$IFn$_invoke$arity$1 ? fexpr__40377.cljs$core$IFn$_invoke$arity$1(G__40378) : fexpr__40377.call(null,G__40378));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40910,f_40887], null),canonical_f_40912], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40910),canonical_f_40912);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40910),canonical_f_40912);
}


var G__40913 = cljs.core.next(seq__40301_40903__$1);
var G__40914 = null;
var G__40915 = (0);
var G__40916 = (0);
seq__40301_40888 = G__40913;
chunk__40303_40889 = G__40914;
count__40304_40890 = G__40915;
i__40305_40891 = G__40916;
continue;
}
} else {
}
}
break;
}

var G__40917 = seq__40291_40881;
var G__40918 = chunk__40298_40882;
var G__40919 = count__40299_40883;
var G__40920 = (i__40300_40884 + (1));
seq__40291_40881 = G__40917;
chunk__40298_40882 = G__40918;
count__40299_40883 = G__40919;
i__40300_40884 = G__40920;
continue;
} else {
var temp__5735__auto___40922 = cljs.core.seq(seq__40291_40881);
if(temp__5735__auto___40922){
var seq__40291_40923__$1 = temp__5735__auto___40922;
if(cljs.core.chunked_seq_QMARK_(seq__40291_40923__$1)){
var c__4556__auto___40924 = cljs.core.chunk_first(seq__40291_40923__$1);
var G__40925 = cljs.core.chunk_rest(seq__40291_40923__$1);
var G__40926 = c__4556__auto___40924;
var G__40927 = cljs.core.count(c__4556__auto___40924);
var G__40928 = (0);
seq__40291_40881 = G__40925;
chunk__40298_40882 = G__40926;
count__40299_40883 = G__40927;
i__40300_40884 = G__40928;
continue;
} else {
var vec__40382_40929 = cljs.core.first(seq__40291_40923__$1);
var orig_type_40930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40382_40929,(0),null);
var f_40931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40382_40929,(1),null);
var seq__40292_40933 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40930,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40930,cljs.core.identity])));
var chunk__40294_40934 = null;
var count__40295_40935 = (0);
var i__40296_40936 = (0);
while(true){
if((i__40296_40936 < count__40295_40935)){
var vec__40395_40938 = chunk__40294_40934.cljs$core$IIndexed$_nth$arity$2(null,i__40296_40936);
var actual_type_40939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40395_40938,(0),null);
var factory_40940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40395_40938,(1),null);
var canonical_f_40942 = (function (){var G__40399 = (factory_40940.cljs$core$IFn$_invoke$arity$1 ? factory_40940.cljs$core$IFn$_invoke$arity$1(f_40931) : factory_40940.call(null,f_40931));
var fexpr__40398 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40398.cljs$core$IFn$_invoke$arity$1 ? fexpr__40398.cljs$core$IFn$_invoke$arity$1(G__40399) : fexpr__40398.call(null,G__40399));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40939,f_40931], null),canonical_f_40942], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40939),canonical_f_40942);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40939),canonical_f_40942);
}


var G__40943 = seq__40292_40933;
var G__40944 = chunk__40294_40934;
var G__40945 = count__40295_40935;
var G__40946 = (i__40296_40936 + (1));
seq__40292_40933 = G__40943;
chunk__40294_40934 = G__40944;
count__40295_40935 = G__40945;
i__40296_40936 = G__40946;
continue;
} else {
var temp__5735__auto___40947__$1 = cljs.core.seq(seq__40292_40933);
if(temp__5735__auto___40947__$1){
var seq__40292_40949__$1 = temp__5735__auto___40947__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40292_40949__$1)){
var c__4556__auto___40950 = cljs.core.chunk_first(seq__40292_40949__$1);
var G__40951 = cljs.core.chunk_rest(seq__40292_40949__$1);
var G__40952 = c__4556__auto___40950;
var G__40953 = cljs.core.count(c__4556__auto___40950);
var G__40954 = (0);
seq__40292_40933 = G__40951;
chunk__40294_40934 = G__40952;
count__40295_40935 = G__40953;
i__40296_40936 = G__40954;
continue;
} else {
var vec__40400_40959 = cljs.core.first(seq__40292_40949__$1);
var actual_type_40960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40400_40959,(0),null);
var factory_40961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40400_40959,(1),null);
var canonical_f_40962 = (function (){var G__40404 = (factory_40961.cljs$core$IFn$_invoke$arity$1 ? factory_40961.cljs$core$IFn$_invoke$arity$1(f_40931) : factory_40961.call(null,f_40931));
var fexpr__40403 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40403.cljs$core$IFn$_invoke$arity$1 ? fexpr__40403.cljs$core$IFn$_invoke$arity$1(G__40404) : fexpr__40403.call(null,G__40404));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40960,f_40931], null),canonical_f_40962], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40960),canonical_f_40962);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40960),canonical_f_40962);
}


var G__40964 = cljs.core.next(seq__40292_40949__$1);
var G__40965 = null;
var G__40966 = (0);
var G__40967 = (0);
seq__40292_40933 = G__40964;
chunk__40294_40934 = G__40965;
count__40295_40935 = G__40966;
i__40296_40936 = G__40967;
continue;
}
} else {
}
}
break;
}

var G__40969 = cljs.core.next(seq__40291_40923__$1);
var G__40970 = null;
var G__40971 = (0);
var G__40972 = (0);
seq__40291_40881 = G__40969;
chunk__40298_40882 = G__40970;
count__40299_40883 = G__40971;
i__40300_40884 = G__40972;
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
var len__4736__auto___40975 = arguments.length;
var i__4737__auto___40976 = (0);
while(true){
if((i__4737__auto___40976 < len__4736__auto___40975)){
args__4742__auto__.push((arguments[i__4737__auto___40976]));

var G__40977 = (i__4737__auto___40976 + (1));
i__4737__auto___40976 = G__40977;
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

var vec__40407_40981 = dommy.core.elem_and_selector(elem_sel);
var elem_40982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40407_40981,(0),null);
var selector_40983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40407_40981,(1),null);
var seq__40410_40985 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40417_40986 = null;
var count__40418_40987 = (0);
var i__40419_40988 = (0);
while(true){
if((i__40419_40988 < count__40418_40987)){
var vec__40467_40989 = chunk__40417_40986.cljs$core$IIndexed$_nth$arity$2(null,i__40419_40988);
var orig_type_40990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40467_40989,(0),null);
var f_40991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40467_40989,(1),null);
var seq__40420_40992 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40990,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40990,cljs.core.identity])));
var chunk__40422_40993 = null;
var count__40423_40994 = (0);
var i__40424_40995 = (0);
while(true){
if((i__40424_40995 < count__40423_40994)){
var vec__40476_40997 = chunk__40422_40993.cljs$core$IIndexed$_nth$arity$2(null,i__40424_40995);
var actual_type_40998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40476_40997,(0),null);
var __40999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40476_40997,(1),null);
var keys_41004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40983,actual_type_40998,f_40991], null);
var canonical_f_41005 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40982),keys_41004);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40982,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41004], 0));

if(cljs.core.truth_(elem_40982.removeEventListener)){
elem_40982.removeEventListener(cljs.core.name(actual_type_40998),canonical_f_41005);
} else {
elem_40982.detachEvent(cljs.core.name(actual_type_40998),canonical_f_41005);
}


var G__41006 = seq__40420_40992;
var G__41007 = chunk__40422_40993;
var G__41008 = count__40423_40994;
var G__41009 = (i__40424_40995 + (1));
seq__40420_40992 = G__41006;
chunk__40422_40993 = G__41007;
count__40423_40994 = G__41008;
i__40424_40995 = G__41009;
continue;
} else {
var temp__5735__auto___41010 = cljs.core.seq(seq__40420_40992);
if(temp__5735__auto___41010){
var seq__40420_41011__$1 = temp__5735__auto___41010;
if(cljs.core.chunked_seq_QMARK_(seq__40420_41011__$1)){
var c__4556__auto___41013 = cljs.core.chunk_first(seq__40420_41011__$1);
var G__41014 = cljs.core.chunk_rest(seq__40420_41011__$1);
var G__41015 = c__4556__auto___41013;
var G__41016 = cljs.core.count(c__4556__auto___41013);
var G__41017 = (0);
seq__40420_40992 = G__41014;
chunk__40422_40993 = G__41015;
count__40423_40994 = G__41016;
i__40424_40995 = G__41017;
continue;
} else {
var vec__40479_41022 = cljs.core.first(seq__40420_41011__$1);
var actual_type_41023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40479_41022,(0),null);
var __41024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40479_41022,(1),null);
var keys_41025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40983,actual_type_41023,f_40991], null);
var canonical_f_41026 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40982),keys_41025);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40982,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41025], 0));

if(cljs.core.truth_(elem_40982.removeEventListener)){
elem_40982.removeEventListener(cljs.core.name(actual_type_41023),canonical_f_41026);
} else {
elem_40982.detachEvent(cljs.core.name(actual_type_41023),canonical_f_41026);
}


var G__41027 = cljs.core.next(seq__40420_41011__$1);
var G__41028 = null;
var G__41029 = (0);
var G__41030 = (0);
seq__40420_40992 = G__41027;
chunk__40422_40993 = G__41028;
count__40423_40994 = G__41029;
i__40424_40995 = G__41030;
continue;
}
} else {
}
}
break;
}

var G__41031 = seq__40410_40985;
var G__41032 = chunk__40417_40986;
var G__41033 = count__40418_40987;
var G__41034 = (i__40419_40988 + (1));
seq__40410_40985 = G__41031;
chunk__40417_40986 = G__41032;
count__40418_40987 = G__41033;
i__40419_40988 = G__41034;
continue;
} else {
var temp__5735__auto___41035 = cljs.core.seq(seq__40410_40985);
if(temp__5735__auto___41035){
var seq__40410_41036__$1 = temp__5735__auto___41035;
if(cljs.core.chunked_seq_QMARK_(seq__40410_41036__$1)){
var c__4556__auto___41037 = cljs.core.chunk_first(seq__40410_41036__$1);
var G__41038 = cljs.core.chunk_rest(seq__40410_41036__$1);
var G__41039 = c__4556__auto___41037;
var G__41040 = cljs.core.count(c__4556__auto___41037);
var G__41041 = (0);
seq__40410_40985 = G__41038;
chunk__40417_40986 = G__41039;
count__40418_40987 = G__41040;
i__40419_40988 = G__41041;
continue;
} else {
var vec__40482_41042 = cljs.core.first(seq__40410_41036__$1);
var orig_type_41043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40482_41042,(0),null);
var f_41044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40482_41042,(1),null);
var seq__40411_41045 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41043,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41043,cljs.core.identity])));
var chunk__40413_41046 = null;
var count__40414_41047 = (0);
var i__40415_41048 = (0);
while(true){
if((i__40415_41048 < count__40414_41047)){
var vec__40492_41049 = chunk__40413_41046.cljs$core$IIndexed$_nth$arity$2(null,i__40415_41048);
var actual_type_41050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40492_41049,(0),null);
var __41051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40492_41049,(1),null);
var keys_41052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40983,actual_type_41050,f_41044], null);
var canonical_f_41053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40982),keys_41052);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40982,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41052], 0));

if(cljs.core.truth_(elem_40982.removeEventListener)){
elem_40982.removeEventListener(cljs.core.name(actual_type_41050),canonical_f_41053);
} else {
elem_40982.detachEvent(cljs.core.name(actual_type_41050),canonical_f_41053);
}


var G__41054 = seq__40411_41045;
var G__41055 = chunk__40413_41046;
var G__41056 = count__40414_41047;
var G__41057 = (i__40415_41048 + (1));
seq__40411_41045 = G__41054;
chunk__40413_41046 = G__41055;
count__40414_41047 = G__41056;
i__40415_41048 = G__41057;
continue;
} else {
var temp__5735__auto___41058__$1 = cljs.core.seq(seq__40411_41045);
if(temp__5735__auto___41058__$1){
var seq__40411_41059__$1 = temp__5735__auto___41058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40411_41059__$1)){
var c__4556__auto___41060 = cljs.core.chunk_first(seq__40411_41059__$1);
var G__41061 = cljs.core.chunk_rest(seq__40411_41059__$1);
var G__41062 = c__4556__auto___41060;
var G__41063 = cljs.core.count(c__4556__auto___41060);
var G__41064 = (0);
seq__40411_41045 = G__41061;
chunk__40413_41046 = G__41062;
count__40414_41047 = G__41063;
i__40415_41048 = G__41064;
continue;
} else {
var vec__40497_41065 = cljs.core.first(seq__40411_41059__$1);
var actual_type_41066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497_41065,(0),null);
var __41067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497_41065,(1),null);
var keys_41068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40983,actual_type_41066,f_41044], null);
var canonical_f_41069 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40982),keys_41068);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40982,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41068], 0));

if(cljs.core.truth_(elem_40982.removeEventListener)){
elem_40982.removeEventListener(cljs.core.name(actual_type_41066),canonical_f_41069);
} else {
elem_40982.detachEvent(cljs.core.name(actual_type_41066),canonical_f_41069);
}


var G__41070 = cljs.core.next(seq__40411_41059__$1);
var G__41071 = null;
var G__41072 = (0);
var G__41073 = (0);
seq__40411_41045 = G__41070;
chunk__40413_41046 = G__41071;
count__40414_41047 = G__41072;
i__40415_41048 = G__41073;
continue;
}
} else {
}
}
break;
}

var G__41074 = cljs.core.next(seq__40410_41036__$1);
var G__41075 = null;
var G__41076 = (0);
var G__41077 = (0);
seq__40410_40985 = G__41074;
chunk__40417_40986 = G__41075;
count__40418_40987 = G__41076;
i__40419_40988 = G__41077;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40405){
var G__40406 = cljs.core.first(seq40405);
var seq40405__$1 = cljs.core.next(seq40405);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40406,seq40405__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41078 = arguments.length;
var i__4737__auto___41079 = (0);
while(true){
if((i__4737__auto___41079 < len__4736__auto___41078)){
args__4742__auto__.push((arguments[i__4737__auto___41079]));

var G__41080 = (i__4737__auto___41079 + (1));
i__4737__auto___41079 = G__41080;
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

var vec__40504_41081 = dommy.core.elem_and_selector(elem_sel);
var elem_41082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40504_41081,(0),null);
var selector_41083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40504_41081,(1),null);
var seq__40507_41084 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40508_41085 = null;
var count__40509_41086 = (0);
var i__40510_41087 = (0);
while(true){
if((i__40510_41087 < count__40509_41086)){
var vec__40518_41088 = chunk__40508_41085.cljs$core$IIndexed$_nth$arity$2(null,i__40510_41087);
var type_41089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40518_41088,(0),null);
var f_41090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40518_41088,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41089,((function (seq__40507_41084,chunk__40508_41085,count__40509_41086,i__40510_41087,vec__40518_41088,type_41089,f_41090,vec__40504_41081,elem_41082,selector_41083){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41089,dommy$core$this_fn], 0));

return (f_41090.cljs$core$IFn$_invoke$arity$1 ? f_41090.cljs$core$IFn$_invoke$arity$1(e) : f_41090.call(null,e));
});})(seq__40507_41084,chunk__40508_41085,count__40509_41086,i__40510_41087,vec__40518_41088,type_41089,f_41090,vec__40504_41081,elem_41082,selector_41083))
], 0));


var G__41091 = seq__40507_41084;
var G__41092 = chunk__40508_41085;
var G__41093 = count__40509_41086;
var G__41094 = (i__40510_41087 + (1));
seq__40507_41084 = G__41091;
chunk__40508_41085 = G__41092;
count__40509_41086 = G__41093;
i__40510_41087 = G__41094;
continue;
} else {
var temp__5735__auto___41095 = cljs.core.seq(seq__40507_41084);
if(temp__5735__auto___41095){
var seq__40507_41096__$1 = temp__5735__auto___41095;
if(cljs.core.chunked_seq_QMARK_(seq__40507_41096__$1)){
var c__4556__auto___41097 = cljs.core.chunk_first(seq__40507_41096__$1);
var G__41098 = cljs.core.chunk_rest(seq__40507_41096__$1);
var G__41099 = c__4556__auto___41097;
var G__41100 = cljs.core.count(c__4556__auto___41097);
var G__41101 = (0);
seq__40507_41084 = G__41098;
chunk__40508_41085 = G__41099;
count__40509_41086 = G__41100;
i__40510_41087 = G__41101;
continue;
} else {
var vec__40525_41102 = cljs.core.first(seq__40507_41096__$1);
var type_41103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40525_41102,(0),null);
var f_41104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40525_41102,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41103,((function (seq__40507_41084,chunk__40508_41085,count__40509_41086,i__40510_41087,vec__40525_41102,type_41103,f_41104,seq__40507_41096__$1,temp__5735__auto___41095,vec__40504_41081,elem_41082,selector_41083){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41103,dommy$core$this_fn], 0));

return (f_41104.cljs$core$IFn$_invoke$arity$1 ? f_41104.cljs$core$IFn$_invoke$arity$1(e) : f_41104.call(null,e));
});})(seq__40507_41084,chunk__40508_41085,count__40509_41086,i__40510_41087,vec__40525_41102,type_41103,f_41104,seq__40507_41096__$1,temp__5735__auto___41095,vec__40504_41081,elem_41082,selector_41083))
], 0));


var G__41105 = cljs.core.next(seq__40507_41096__$1);
var G__41106 = null;
var G__41107 = (0);
var G__41108 = (0);
seq__40507_41084 = G__41105;
chunk__40508_41085 = G__41106;
count__40509_41086 = G__41107;
i__40510_41087 = G__41108;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40502){
var G__40503 = cljs.core.first(seq40502);
var seq40502__$1 = cljs.core.next(seq40502);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40503,seq40502__$1);
}));


//# sourceMappingURL=dommy.core.js.map
