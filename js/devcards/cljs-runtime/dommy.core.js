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
var len__4736__auto___40528 = arguments.length;
var i__4737__auto___40529 = (0);
while(true){
if((i__4737__auto___40529 < len__4736__auto___40528)){
args__4742__auto__.push((arguments[i__4737__auto___40529]));

var G__40533 = (i__4737__auto___40529 + (1));
i__4737__auto___40529 = G__40533;
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
var seq__40131_40534 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40132_40535 = null;
var count__40133_40536 = (0);
var i__40134_40537 = (0);
while(true){
if((i__40134_40537 < count__40133_40536)){
var vec__40141_40538 = chunk__40132_40535.cljs$core$IIndexed$_nth$arity$2(null,i__40134_40537);
var k_40539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40141_40538,(0),null);
var v_40540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40141_40538,(1),null);
style.setProperty(dommy.utils.as_str(k_40539),v_40540);


var G__40541 = seq__40131_40534;
var G__40542 = chunk__40132_40535;
var G__40543 = count__40133_40536;
var G__40544 = (i__40134_40537 + (1));
seq__40131_40534 = G__40541;
chunk__40132_40535 = G__40542;
count__40133_40536 = G__40543;
i__40134_40537 = G__40544;
continue;
} else {
var temp__5735__auto___40545 = cljs.core.seq(seq__40131_40534);
if(temp__5735__auto___40545){
var seq__40131_40546__$1 = temp__5735__auto___40545;
if(cljs.core.chunked_seq_QMARK_(seq__40131_40546__$1)){
var c__4556__auto___40547 = cljs.core.chunk_first(seq__40131_40546__$1);
var G__40549 = cljs.core.chunk_rest(seq__40131_40546__$1);
var G__40550 = c__4556__auto___40547;
var G__40551 = cljs.core.count(c__4556__auto___40547);
var G__40552 = (0);
seq__40131_40534 = G__40549;
chunk__40132_40535 = G__40550;
count__40133_40536 = G__40551;
i__40134_40537 = G__40552;
continue;
} else {
var vec__40146_40553 = cljs.core.first(seq__40131_40546__$1);
var k_40554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40146_40553,(0),null);
var v_40555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40146_40553,(1),null);
style.setProperty(dommy.utils.as_str(k_40554),v_40555);


var G__40561 = cljs.core.next(seq__40131_40546__$1);
var G__40562 = null;
var G__40563 = (0);
var G__40564 = (0);
seq__40131_40534 = G__40561;
chunk__40132_40535 = G__40562;
count__40133_40536 = G__40563;
i__40134_40537 = G__40564;
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
var len__4736__auto___40573 = arguments.length;
var i__4737__auto___40578 = (0);
while(true){
if((i__4737__auto___40578 < len__4736__auto___40573)){
args__4742__auto__.push((arguments[i__4737__auto___40578]));

var G__40579 = (i__4737__auto___40578 + (1));
i__4737__auto___40578 = G__40579;
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
var seq__40152_40585 = cljs.core.seq(keywords);
var chunk__40153_40586 = null;
var count__40154_40587 = (0);
var i__40155_40588 = (0);
while(true){
if((i__40155_40588 < count__40154_40587)){
var kw_40589 = chunk__40153_40586.cljs$core$IIndexed$_nth$arity$2(null,i__40155_40588);
style.removeProperty(dommy.utils.as_str(kw_40589));


var G__40590 = seq__40152_40585;
var G__40591 = chunk__40153_40586;
var G__40592 = count__40154_40587;
var G__40593 = (i__40155_40588 + (1));
seq__40152_40585 = G__40590;
chunk__40153_40586 = G__40591;
count__40154_40587 = G__40592;
i__40155_40588 = G__40593;
continue;
} else {
var temp__5735__auto___40594 = cljs.core.seq(seq__40152_40585);
if(temp__5735__auto___40594){
var seq__40152_40595__$1 = temp__5735__auto___40594;
if(cljs.core.chunked_seq_QMARK_(seq__40152_40595__$1)){
var c__4556__auto___40596 = cljs.core.chunk_first(seq__40152_40595__$1);
var G__40597 = cljs.core.chunk_rest(seq__40152_40595__$1);
var G__40598 = c__4556__auto___40596;
var G__40599 = cljs.core.count(c__4556__auto___40596);
var G__40600 = (0);
seq__40152_40585 = G__40597;
chunk__40153_40586 = G__40598;
count__40154_40587 = G__40599;
i__40155_40588 = G__40600;
continue;
} else {
var kw_40601 = cljs.core.first(seq__40152_40595__$1);
style.removeProperty(dommy.utils.as_str(kw_40601));


var G__40602 = cljs.core.next(seq__40152_40595__$1);
var G__40603 = null;
var G__40604 = (0);
var G__40605 = (0);
seq__40152_40585 = G__40602;
chunk__40153_40586 = G__40603;
count__40154_40587 = G__40604;
i__40155_40588 = G__40605;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40149){
var G__40150 = cljs.core.first(seq40149);
var seq40149__$1 = cljs.core.next(seq40149);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40150,seq40149__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40606 = arguments.length;
var i__4737__auto___40607 = (0);
while(true){
if((i__4737__auto___40607 < len__4736__auto___40606)){
args__4742__auto__.push((arguments[i__4737__auto___40607]));

var G__40608 = (i__4737__auto___40607 + (1));
i__4737__auto___40607 = G__40608;
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

var seq__40161_40609 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40162_40610 = null;
var count__40163_40611 = (0);
var i__40164_40612 = (0);
while(true){
if((i__40164_40612 < count__40163_40611)){
var vec__40172_40613 = chunk__40162_40610.cljs$core$IIndexed$_nth$arity$2(null,i__40164_40612);
var k_40614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40172_40613,(0),null);
var v_40615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40172_40613,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40614,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40615),"px"].join('')], 0));


var G__40616 = seq__40161_40609;
var G__40617 = chunk__40162_40610;
var G__40618 = count__40163_40611;
var G__40619 = (i__40164_40612 + (1));
seq__40161_40609 = G__40616;
chunk__40162_40610 = G__40617;
count__40163_40611 = G__40618;
i__40164_40612 = G__40619;
continue;
} else {
var temp__5735__auto___40620 = cljs.core.seq(seq__40161_40609);
if(temp__5735__auto___40620){
var seq__40161_40621__$1 = temp__5735__auto___40620;
if(cljs.core.chunked_seq_QMARK_(seq__40161_40621__$1)){
var c__4556__auto___40622 = cljs.core.chunk_first(seq__40161_40621__$1);
var G__40623 = cljs.core.chunk_rest(seq__40161_40621__$1);
var G__40624 = c__4556__auto___40622;
var G__40625 = cljs.core.count(c__4556__auto___40622);
var G__40626 = (0);
seq__40161_40609 = G__40623;
chunk__40162_40610 = G__40624;
count__40163_40611 = G__40625;
i__40164_40612 = G__40626;
continue;
} else {
var vec__40176_40627 = cljs.core.first(seq__40161_40621__$1);
var k_40628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40176_40627,(0),null);
var v_40629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40176_40627,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40628,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40629),"px"].join('')], 0));


var G__40630 = cljs.core.next(seq__40161_40621__$1);
var G__40631 = null;
var G__40632 = (0);
var G__40633 = (0);
seq__40161_40609 = G__40630;
chunk__40162_40610 = G__40631;
count__40163_40611 = G__40632;
i__40164_40612 = G__40633;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40158){
var G__40159 = cljs.core.first(seq40158);
var seq40158__$1 = cljs.core.next(seq40158);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40159,seq40158__$1);
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
var G__40186 = arguments.length;
switch (G__40186) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40635 = arguments.length;
var i__4737__auto___40636 = (0);
while(true){
if((i__4737__auto___40636 < len__4736__auto___40635)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40636]));

var G__40637 = (i__4737__auto___40636 + (1));
i__4737__auto___40636 = G__40637;
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
var G__40188 = elem;
(G__40188[k__$1] = v);

return G__40188;
} else {
var G__40189 = elem;
G__40189.setAttribute(k__$1,v);

return G__40189;
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

var seq__40191_40660 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40192_40661 = null;
var count__40193_40662 = (0);
var i__40194_40663 = (0);
while(true){
if((i__40194_40663 < count__40193_40662)){
var vec__40202_40664 = chunk__40192_40661.cljs$core$IIndexed$_nth$arity$2(null,i__40194_40663);
var k_40665__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202_40664,(0),null);
var v_40666__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202_40664,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40665__$1,v_40666__$1);


var G__40667 = seq__40191_40660;
var G__40668 = chunk__40192_40661;
var G__40669 = count__40193_40662;
var G__40670 = (i__40194_40663 + (1));
seq__40191_40660 = G__40667;
chunk__40192_40661 = G__40668;
count__40193_40662 = G__40669;
i__40194_40663 = G__40670;
continue;
} else {
var temp__5735__auto___40671 = cljs.core.seq(seq__40191_40660);
if(temp__5735__auto___40671){
var seq__40191_40672__$1 = temp__5735__auto___40671;
if(cljs.core.chunked_seq_QMARK_(seq__40191_40672__$1)){
var c__4556__auto___40673 = cljs.core.chunk_first(seq__40191_40672__$1);
var G__40674 = cljs.core.chunk_rest(seq__40191_40672__$1);
var G__40675 = c__4556__auto___40673;
var G__40676 = cljs.core.count(c__4556__auto___40673);
var G__40677 = (0);
seq__40191_40660 = G__40674;
chunk__40192_40661 = G__40675;
count__40193_40662 = G__40676;
i__40194_40663 = G__40677;
continue;
} else {
var vec__40206_40678 = cljs.core.first(seq__40191_40672__$1);
var k_40679__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40678,(0),null);
var v_40680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40678,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40679__$1,v_40680__$1);


var G__40681 = cljs.core.next(seq__40191_40672__$1);
var G__40682 = null;
var G__40683 = (0);
var G__40684 = (0);
seq__40191_40660 = G__40681;
chunk__40192_40661 = G__40682;
count__40193_40662 = G__40683;
i__40194_40663 = G__40684;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40181){
var G__40182 = cljs.core.first(seq40181);
var seq40181__$1 = cljs.core.next(seq40181);
var G__40183 = cljs.core.first(seq40181__$1);
var seq40181__$2 = cljs.core.next(seq40181__$1);
var G__40184 = cljs.core.first(seq40181__$2);
var seq40181__$3 = cljs.core.next(seq40181__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40182,G__40183,G__40184,seq40181__$3);
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
var k_40689__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40214.cljs$core$IFn$_invoke$arity$1 ? fexpr__40214.cljs$core$IFn$_invoke$arity$1(k_40689__$1) : fexpr__40214.call(null,k_40689__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40689__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40215_40690 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40216_40691 = null;
var count__40217_40692 = (0);
var i__40218_40693 = (0);
while(true){
if((i__40218_40693 < count__40217_40692)){
var k_40694__$1 = chunk__40216_40691.cljs$core$IIndexed$_nth$arity$2(null,i__40218_40693);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40694__$1);


var G__40695 = seq__40215_40690;
var G__40696 = chunk__40216_40691;
var G__40697 = count__40217_40692;
var G__40698 = (i__40218_40693 + (1));
seq__40215_40690 = G__40695;
chunk__40216_40691 = G__40696;
count__40217_40692 = G__40697;
i__40218_40693 = G__40698;
continue;
} else {
var temp__5735__auto___40699 = cljs.core.seq(seq__40215_40690);
if(temp__5735__auto___40699){
var seq__40215_40700__$1 = temp__5735__auto___40699;
if(cljs.core.chunked_seq_QMARK_(seq__40215_40700__$1)){
var c__4556__auto___40701 = cljs.core.chunk_first(seq__40215_40700__$1);
var G__40702 = cljs.core.chunk_rest(seq__40215_40700__$1);
var G__40703 = c__4556__auto___40701;
var G__40704 = cljs.core.count(c__4556__auto___40701);
var G__40705 = (0);
seq__40215_40690 = G__40702;
chunk__40216_40691 = G__40703;
count__40217_40692 = G__40704;
i__40218_40693 = G__40705;
continue;
} else {
var k_40706__$1 = cljs.core.first(seq__40215_40700__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40706__$1);


var G__40707 = cljs.core.next(seq__40215_40700__$1);
var G__40708 = null;
var G__40709 = (0);
var G__40710 = (0);
seq__40215_40690 = G__40707;
chunk__40216_40691 = G__40708;
count__40217_40692 = G__40709;
i__40218_40693 = G__40710;
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
var len__4736__auto___40816 = arguments.length;
var i__4737__auto___40817 = (0);
while(true){
if((i__4737__auto___40817 < len__4736__auto___40816)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40817]));

var G__40818 = (i__4737__auto___40817 + (1));
i__4737__auto___40817 = G__40818;
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
var seq__40259_40819 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40260_40820 = null;
var count__40261_40821 = (0);
var i__40262_40822 = (0);
while(true){
if((i__40262_40822 < count__40261_40821)){
var c_40823 = chunk__40260_40820.cljs$core$IIndexed$_nth$arity$2(null,i__40262_40822);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40823);


var G__40824 = seq__40259_40819;
var G__40825 = chunk__40260_40820;
var G__40826 = count__40261_40821;
var G__40827 = (i__40262_40822 + (1));
seq__40259_40819 = G__40824;
chunk__40260_40820 = G__40825;
count__40261_40821 = G__40826;
i__40262_40822 = G__40827;
continue;
} else {
var temp__5735__auto___40828 = cljs.core.seq(seq__40259_40819);
if(temp__5735__auto___40828){
var seq__40259_40829__$1 = temp__5735__auto___40828;
if(cljs.core.chunked_seq_QMARK_(seq__40259_40829__$1)){
var c__4556__auto___40830 = cljs.core.chunk_first(seq__40259_40829__$1);
var G__40831 = cljs.core.chunk_rest(seq__40259_40829__$1);
var G__40832 = c__4556__auto___40830;
var G__40833 = cljs.core.count(c__4556__auto___40830);
var G__40834 = (0);
seq__40259_40819 = G__40831;
chunk__40260_40820 = G__40832;
count__40261_40821 = G__40833;
i__40262_40822 = G__40834;
continue;
} else {
var c_40835 = cljs.core.first(seq__40259_40829__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40835);


var G__40837 = cljs.core.next(seq__40259_40829__$1);
var G__40838 = null;
var G__40839 = (0);
var G__40840 = (0);
seq__40259_40819 = G__40837;
chunk__40260_40820 = G__40838;
count__40261_40821 = G__40839;
i__40262_40822 = G__40840;
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
var len__4736__auto___40843 = arguments.length;
var i__4737__auto___40844 = (0);
while(true){
if((i__4737__auto___40844 < len__4736__auto___40843)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40844]));

var G__40845 = (i__4737__auto___40844 + (1));
i__4737__auto___40844 = G__40845;
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
var seq__40269_40846 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40270_40847 = null;
var count__40271_40848 = (0);
var i__40272_40849 = (0);
while(true){
if((i__40272_40849 < count__40271_40848)){
var c_40851 = chunk__40270_40847.cljs$core$IIndexed$_nth$arity$2(null,i__40272_40849);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40851);


var G__40852 = seq__40269_40846;
var G__40853 = chunk__40270_40847;
var G__40854 = count__40271_40848;
var G__40855 = (i__40272_40849 + (1));
seq__40269_40846 = G__40852;
chunk__40270_40847 = G__40853;
count__40271_40848 = G__40854;
i__40272_40849 = G__40855;
continue;
} else {
var temp__5735__auto___40857 = cljs.core.seq(seq__40269_40846);
if(temp__5735__auto___40857){
var seq__40269_40858__$1 = temp__5735__auto___40857;
if(cljs.core.chunked_seq_QMARK_(seq__40269_40858__$1)){
var c__4556__auto___40859 = cljs.core.chunk_first(seq__40269_40858__$1);
var G__40860 = cljs.core.chunk_rest(seq__40269_40858__$1);
var G__40861 = c__4556__auto___40859;
var G__40862 = cljs.core.count(c__4556__auto___40859);
var G__40863 = (0);
seq__40269_40846 = G__40860;
chunk__40270_40847 = G__40861;
count__40271_40848 = G__40862;
i__40272_40849 = G__40863;
continue;
} else {
var c_40864 = cljs.core.first(seq__40269_40858__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40864);


var G__40865 = cljs.core.next(seq__40269_40858__$1);
var G__40866 = null;
var G__40867 = (0);
var G__40868 = (0);
seq__40269_40846 = G__40865;
chunk__40270_40847 = G__40866;
count__40271_40848 = G__40867;
i__40272_40849 = G__40868;
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

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40276){
var vec__40277 = p__40276;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40277,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40277,(1),null);
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40281){
var G__40282 = cljs.core.first(seq40281);
var seq40281__$1 = cljs.core.next(seq40281);
var G__40283 = cljs.core.first(seq40281__$1);
var seq40281__$2 = cljs.core.next(seq40281__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40282,G__40283,seq40281__$2);
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
var vec__40379_40926 = cljs.core.first(seq__40291_40920__$1);
var orig_type_40927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40379_40926,(0),null);
var f_40928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40379_40926,(1),null);
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
var i__4737__auto___40962 = (0);
while(true){
if((i__4737__auto___40962 < len__4736__auto___40960)){
args__4742__auto__.push((arguments[i__4737__auto___40962]));

var G__40963 = (i__4737__auto___40962 + (1));
i__4737__auto___40962 = G__40963;
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

var vec__40404_40965 = dommy.core.elem_and_selector(elem_sel);
var elem_40966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404_40965,(0),null);
var selector_40967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404_40965,(1),null);
var seq__40407_40968 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40414_40969 = null;
var count__40415_40970 = (0);
var i__40416_40971 = (0);
while(true){
if((i__40416_40971 < count__40415_40970)){
var vec__40456_40972 = chunk__40414_40969.cljs$core$IIndexed$_nth$arity$2(null,i__40416_40971);
var orig_type_40973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456_40972,(0),null);
var f_40974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456_40972,(1),null);
var seq__40417_40975 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40973,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40973,cljs.core.identity])));
var chunk__40419_40976 = null;
var count__40420_40977 = (0);
var i__40421_40978 = (0);
while(true){
if((i__40421_40978 < count__40420_40977)){
var vec__40465_40979 = chunk__40419_40976.cljs$core$IIndexed$_nth$arity$2(null,i__40421_40978);
var actual_type_40980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40465_40979,(0),null);
var __40981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40465_40979,(1),null);
var keys_40982 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40967,actual_type_40980,f_40974], null);
var canonical_f_40983 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40966),keys_40982);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40966,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_40982], 0));

if(cljs.core.truth_(elem_40966.removeEventListener)){
elem_40966.removeEventListener(cljs.core.name(actual_type_40980),canonical_f_40983);
} else {
elem_40966.detachEvent(cljs.core.name(actual_type_40980),canonical_f_40983);
}


var G__40985 = seq__40417_40975;
var G__40986 = chunk__40419_40976;
var G__40987 = count__40420_40977;
var G__40988 = (i__40421_40978 + (1));
seq__40417_40975 = G__40985;
chunk__40419_40976 = G__40986;
count__40420_40977 = G__40987;
i__40421_40978 = G__40988;
continue;
} else {
var temp__5735__auto___40989 = cljs.core.seq(seq__40417_40975);
if(temp__5735__auto___40989){
var seq__40417_40991__$1 = temp__5735__auto___40989;
if(cljs.core.chunked_seq_QMARK_(seq__40417_40991__$1)){
var c__4556__auto___40993 = cljs.core.chunk_first(seq__40417_40991__$1);
var G__40994 = cljs.core.chunk_rest(seq__40417_40991__$1);
var G__40995 = c__4556__auto___40993;
var G__40996 = cljs.core.count(c__4556__auto___40993);
var G__40997 = (0);
seq__40417_40975 = G__40994;
chunk__40419_40976 = G__40995;
count__40420_40977 = G__40996;
i__40421_40978 = G__40997;
continue;
} else {
var vec__40472_40998 = cljs.core.first(seq__40417_40991__$1);
var actual_type_40999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40472_40998,(0),null);
var __41000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40472_40998,(1),null);
var keys_41002 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40967,actual_type_40999,f_40974], null);
var canonical_f_41003 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40966),keys_41002);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40966,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41002], 0));

if(cljs.core.truth_(elem_40966.removeEventListener)){
elem_40966.removeEventListener(cljs.core.name(actual_type_40999),canonical_f_41003);
} else {
elem_40966.detachEvent(cljs.core.name(actual_type_40999),canonical_f_41003);
}


var G__41004 = cljs.core.next(seq__40417_40991__$1);
var G__41005 = null;
var G__41006 = (0);
var G__41007 = (0);
seq__40417_40975 = G__41004;
chunk__40419_40976 = G__41005;
count__40420_40977 = G__41006;
i__40421_40978 = G__41007;
continue;
}
} else {
}
}
break;
}

var G__41008 = seq__40407_40968;
var G__41009 = chunk__40414_40969;
var G__41010 = count__40415_40970;
var G__41011 = (i__40416_40971 + (1));
seq__40407_40968 = G__41008;
chunk__40414_40969 = G__41009;
count__40415_40970 = G__41010;
i__40416_40971 = G__41011;
continue;
} else {
var temp__5735__auto___41013 = cljs.core.seq(seq__40407_40968);
if(temp__5735__auto___41013){
var seq__40407_41014__$1 = temp__5735__auto___41013;
if(cljs.core.chunked_seq_QMARK_(seq__40407_41014__$1)){
var c__4556__auto___41019 = cljs.core.chunk_first(seq__40407_41014__$1);
var G__41020 = cljs.core.chunk_rest(seq__40407_41014__$1);
var G__41021 = c__4556__auto___41019;
var G__41022 = cljs.core.count(c__4556__auto___41019);
var G__41023 = (0);
seq__40407_40968 = G__41020;
chunk__40414_40969 = G__41021;
count__40415_40970 = G__41022;
i__40416_40971 = G__41023;
continue;
} else {
var vec__40475_41024 = cljs.core.first(seq__40407_41014__$1);
var orig_type_41025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40475_41024,(0),null);
var f_41026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40475_41024,(1),null);
var seq__40408_41027 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41025,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41025,cljs.core.identity])));
var chunk__40410_41028 = null;
var count__40411_41029 = (0);
var i__40412_41030 = (0);
while(true){
if((i__40412_41030 < count__40411_41029)){
var vec__40487_41031 = chunk__40410_41028.cljs$core$IIndexed$_nth$arity$2(null,i__40412_41030);
var actual_type_41032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40487_41031,(0),null);
var __41033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40487_41031,(1),null);
var keys_41035 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40967,actual_type_41032,f_41026], null);
var canonical_f_41036 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40966),keys_41035);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40966,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41035], 0));

if(cljs.core.truth_(elem_40966.removeEventListener)){
elem_40966.removeEventListener(cljs.core.name(actual_type_41032),canonical_f_41036);
} else {
elem_40966.detachEvent(cljs.core.name(actual_type_41032),canonical_f_41036);
}


var G__41039 = seq__40408_41027;
var G__41040 = chunk__40410_41028;
var G__41041 = count__40411_41029;
var G__41042 = (i__40412_41030 + (1));
seq__40408_41027 = G__41039;
chunk__40410_41028 = G__41040;
count__40411_41029 = G__41041;
i__40412_41030 = G__41042;
continue;
} else {
var temp__5735__auto___41043__$1 = cljs.core.seq(seq__40408_41027);
if(temp__5735__auto___41043__$1){
var seq__40408_41045__$1 = temp__5735__auto___41043__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40408_41045__$1)){
var c__4556__auto___41046 = cljs.core.chunk_first(seq__40408_41045__$1);
var G__41047 = cljs.core.chunk_rest(seq__40408_41045__$1);
var G__41048 = c__4556__auto___41046;
var G__41049 = cljs.core.count(c__4556__auto___41046);
var G__41050 = (0);
seq__40408_41027 = G__41047;
chunk__40410_41028 = G__41048;
count__40411_41029 = G__41049;
i__40412_41030 = G__41050;
continue;
} else {
var vec__40490_41060 = cljs.core.first(seq__40408_41045__$1);
var actual_type_41061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490_41060,(0),null);
var __41062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490_41060,(1),null);
var keys_41063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40967,actual_type_41061,f_41026], null);
var canonical_f_41064 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40966),keys_41063);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40966,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41063], 0));

if(cljs.core.truth_(elem_40966.removeEventListener)){
elem_40966.removeEventListener(cljs.core.name(actual_type_41061),canonical_f_41064);
} else {
elem_40966.detachEvent(cljs.core.name(actual_type_41061),canonical_f_41064);
}


var G__41070 = cljs.core.next(seq__40408_41045__$1);
var G__41071 = null;
var G__41072 = (0);
var G__41073 = (0);
seq__40408_41027 = G__41070;
chunk__40410_41028 = G__41071;
count__40411_41029 = G__41072;
i__40412_41030 = G__41073;
continue;
}
} else {
}
}
break;
}

var G__41074 = cljs.core.next(seq__40407_41014__$1);
var G__41075 = null;
var G__41076 = (0);
var G__41077 = (0);
seq__40407_40968 = G__41074;
chunk__40414_40969 = G__41075;
count__40415_40970 = G__41076;
i__40416_40971 = G__41077;
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

var vec__40499_41081 = dommy.core.elem_and_selector(elem_sel);
var elem_41082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499_41081,(0),null);
var selector_41083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499_41081,(1),null);
var seq__40502_41084 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40503_41085 = null;
var count__40504_41086 = (0);
var i__40505_41087 = (0);
while(true){
if((i__40505_41087 < count__40504_41086)){
var vec__40512_41088 = chunk__40503_41085.cljs$core$IIndexed$_nth$arity$2(null,i__40505_41087);
var type_41089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512_41088,(0),null);
var f_41090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512_41088,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41089,((function (seq__40502_41084,chunk__40503_41085,count__40504_41086,i__40505_41087,vec__40512_41088,type_41089,f_41090,vec__40499_41081,elem_41082,selector_41083){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41089,dommy$core$this_fn], 0));

return (f_41090.cljs$core$IFn$_invoke$arity$1 ? f_41090.cljs$core$IFn$_invoke$arity$1(e) : f_41090.call(null,e));
});})(seq__40502_41084,chunk__40503_41085,count__40504_41086,i__40505_41087,vec__40512_41088,type_41089,f_41090,vec__40499_41081,elem_41082,selector_41083))
], 0));


var G__41091 = seq__40502_41084;
var G__41092 = chunk__40503_41085;
var G__41093 = count__40504_41086;
var G__41094 = (i__40505_41087 + (1));
seq__40502_41084 = G__41091;
chunk__40503_41085 = G__41092;
count__40504_41086 = G__41093;
i__40505_41087 = G__41094;
continue;
} else {
var temp__5735__auto___41095 = cljs.core.seq(seq__40502_41084);
if(temp__5735__auto___41095){
var seq__40502_41096__$1 = temp__5735__auto___41095;
if(cljs.core.chunked_seq_QMARK_(seq__40502_41096__$1)){
var c__4556__auto___41097 = cljs.core.chunk_first(seq__40502_41096__$1);
var G__41098 = cljs.core.chunk_rest(seq__40502_41096__$1);
var G__41099 = c__4556__auto___41097;
var G__41100 = cljs.core.count(c__4556__auto___41097);
var G__41101 = (0);
seq__40502_41084 = G__41098;
chunk__40503_41085 = G__41099;
count__40504_41086 = G__41100;
i__40505_41087 = G__41101;
continue;
} else {
var vec__40515_41102 = cljs.core.first(seq__40502_41096__$1);
var type_41103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40515_41102,(0),null);
var f_41104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40515_41102,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41103,((function (seq__40502_41084,chunk__40503_41085,count__40504_41086,i__40505_41087,vec__40515_41102,type_41103,f_41104,seq__40502_41096__$1,temp__5735__auto___41095,vec__40499_41081,elem_41082,selector_41083){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41103,dommy$core$this_fn], 0));

return (f_41104.cljs$core$IFn$_invoke$arity$1 ? f_41104.cljs$core$IFn$_invoke$arity$1(e) : f_41104.call(null,e));
});})(seq__40502_41084,chunk__40503_41085,count__40504_41086,i__40505_41087,vec__40515_41102,type_41103,f_41104,seq__40502_41096__$1,temp__5735__auto___41095,vec__40499_41081,elem_41082,selector_41083))
], 0));


var G__41105 = cljs.core.next(seq__40502_41096__$1);
var G__41106 = null;
var G__41107 = (0);
var G__41108 = (0);
seq__40502_41084 = G__41105;
chunk__40503_41085 = G__41106;
count__40504_41086 = G__41107;
i__40505_41087 = G__41108;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40497){
var G__40498 = cljs.core.first(seq40497);
var seq40497__$1 = cljs.core.next(seq40497);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40498,seq40497__$1);
}));


//# sourceMappingURL=dommy.core.js.map
