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
var G__34985 = arguments.length;
switch (G__34985) {
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
var G__34987 = arguments.length;
switch (G__34987) {
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
var G__34990 = arguments.length;
switch (G__34990) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34988_SHARP_){
return (!((p1__34988_SHARP_ === base)));
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
var len__4789__auto___35430 = arguments.length;
var i__4790__auto___35431 = (0);
while(true){
if((i__4790__auto___35431 < len__4789__auto___35430)){
args__4795__auto__.push((arguments[i__4790__auto___35431]));

var G__35432 = (i__4790__auto___35431 + (1));
i__4790__auto___35431 = G__35432;
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
var seq__34995_35433 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34996_35434 = null;
var count__34997_35435 = (0);
var i__34998_35436 = (0);
while(true){
if((i__34998_35436 < count__34997_35435)){
var vec__35005_35437 = chunk__34996_35434.cljs$core$IIndexed$_nth$arity$2(null,i__34998_35436);
var k_35438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35437,(0),null);
var v_35439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35437,(1),null);
style.setProperty(dommy.utils.as_str(k_35438),v_35439);


var G__35440 = seq__34995_35433;
var G__35441 = chunk__34996_35434;
var G__35442 = count__34997_35435;
var G__35443 = (i__34998_35436 + (1));
seq__34995_35433 = G__35440;
chunk__34996_35434 = G__35441;
count__34997_35435 = G__35442;
i__34998_35436 = G__35443;
continue;
} else {
var temp__5735__auto___35444 = cljs.core.seq(seq__34995_35433);
if(temp__5735__auto___35444){
var seq__34995_35445__$1 = temp__5735__auto___35444;
if(cljs.core.chunked_seq_QMARK_(seq__34995_35445__$1)){
var c__4609__auto___35446 = cljs.core.chunk_first(seq__34995_35445__$1);
var G__35447 = cljs.core.chunk_rest(seq__34995_35445__$1);
var G__35448 = c__4609__auto___35446;
var G__35449 = cljs.core.count(c__4609__auto___35446);
var G__35450 = (0);
seq__34995_35433 = G__35447;
chunk__34996_35434 = G__35448;
count__34997_35435 = G__35449;
i__34998_35436 = G__35450;
continue;
} else {
var vec__35008_35451 = cljs.core.first(seq__34995_35445__$1);
var k_35452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35008_35451,(0),null);
var v_35453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35008_35451,(1),null);
style.setProperty(dommy.utils.as_str(k_35452),v_35453);


var G__35455 = cljs.core.next(seq__34995_35445__$1);
var G__35456 = null;
var G__35457 = (0);
var G__35458 = (0);
seq__34995_35433 = G__35455;
chunk__34996_35434 = G__35456;
count__34997_35435 = G__35457;
i__34998_35436 = G__35458;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34993){
var G__34994 = cljs.core.first(seq34993);
var seq34993__$1 = cljs.core.next(seq34993);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34994,seq34993__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35459 = arguments.length;
var i__4790__auto___35460 = (0);
while(true){
if((i__4790__auto___35460 < len__4789__auto___35459)){
args__4795__auto__.push((arguments[i__4790__auto___35460]));

var G__35461 = (i__4790__auto___35460 + (1));
i__4790__auto___35460 = G__35461;
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
var seq__35013_35463 = cljs.core.seq(keywords);
var chunk__35014_35464 = null;
var count__35015_35465 = (0);
var i__35016_35466 = (0);
while(true){
if((i__35016_35466 < count__35015_35465)){
var kw_35467 = chunk__35014_35464.cljs$core$IIndexed$_nth$arity$2(null,i__35016_35466);
style.removeProperty(dommy.utils.as_str(kw_35467));


var G__35468 = seq__35013_35463;
var G__35469 = chunk__35014_35464;
var G__35470 = count__35015_35465;
var G__35471 = (i__35016_35466 + (1));
seq__35013_35463 = G__35468;
chunk__35014_35464 = G__35469;
count__35015_35465 = G__35470;
i__35016_35466 = G__35471;
continue;
} else {
var temp__5735__auto___35472 = cljs.core.seq(seq__35013_35463);
if(temp__5735__auto___35472){
var seq__35013_35473__$1 = temp__5735__auto___35472;
if(cljs.core.chunked_seq_QMARK_(seq__35013_35473__$1)){
var c__4609__auto___35474 = cljs.core.chunk_first(seq__35013_35473__$1);
var G__35475 = cljs.core.chunk_rest(seq__35013_35473__$1);
var G__35476 = c__4609__auto___35474;
var G__35477 = cljs.core.count(c__4609__auto___35474);
var G__35478 = (0);
seq__35013_35463 = G__35475;
chunk__35014_35464 = G__35476;
count__35015_35465 = G__35477;
i__35016_35466 = G__35478;
continue;
} else {
var kw_35479 = cljs.core.first(seq__35013_35473__$1);
style.removeProperty(dommy.utils.as_str(kw_35479));


var G__35480 = cljs.core.next(seq__35013_35473__$1);
var G__35481 = null;
var G__35482 = (0);
var G__35483 = (0);
seq__35013_35463 = G__35480;
chunk__35014_35464 = G__35481;
count__35015_35465 = G__35482;
i__35016_35466 = G__35483;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq35011){
var G__35012 = cljs.core.first(seq35011);
var seq35011__$1 = cljs.core.next(seq35011);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35012,seq35011__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35484 = arguments.length;
var i__4790__auto___35485 = (0);
while(true){
if((i__4790__auto___35485 < len__4789__auto___35484)){
args__4795__auto__.push((arguments[i__4790__auto___35485]));

var G__35486 = (i__4790__auto___35485 + (1));
i__4790__auto___35485 = G__35486;
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

var seq__35020_35487 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35021_35488 = null;
var count__35022_35489 = (0);
var i__35023_35490 = (0);
while(true){
if((i__35023_35490 < count__35022_35489)){
var vec__35030_35491 = chunk__35021_35488.cljs$core$IIndexed$_nth$arity$2(null,i__35023_35490);
var k_35492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35030_35491,(0),null);
var v_35493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35030_35491,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35492,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35493),"px"].join('')], 0));


var G__35494 = seq__35020_35487;
var G__35495 = chunk__35021_35488;
var G__35496 = count__35022_35489;
var G__35497 = (i__35023_35490 + (1));
seq__35020_35487 = G__35494;
chunk__35021_35488 = G__35495;
count__35022_35489 = G__35496;
i__35023_35490 = G__35497;
continue;
} else {
var temp__5735__auto___35498 = cljs.core.seq(seq__35020_35487);
if(temp__5735__auto___35498){
var seq__35020_35499__$1 = temp__5735__auto___35498;
if(cljs.core.chunked_seq_QMARK_(seq__35020_35499__$1)){
var c__4609__auto___35500 = cljs.core.chunk_first(seq__35020_35499__$1);
var G__35501 = cljs.core.chunk_rest(seq__35020_35499__$1);
var G__35502 = c__4609__auto___35500;
var G__35503 = cljs.core.count(c__4609__auto___35500);
var G__35504 = (0);
seq__35020_35487 = G__35501;
chunk__35021_35488 = G__35502;
count__35022_35489 = G__35503;
i__35023_35490 = G__35504;
continue;
} else {
var vec__35033_35505 = cljs.core.first(seq__35020_35499__$1);
var k_35506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35033_35505,(0),null);
var v_35507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35033_35505,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35506,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35507),"px"].join('')], 0));


var G__35508 = cljs.core.next(seq__35020_35499__$1);
var G__35509 = null;
var G__35510 = (0);
var G__35511 = (0);
seq__35020_35487 = G__35508;
chunk__35021_35488 = G__35509;
count__35022_35489 = G__35510;
i__35023_35490 = G__35511;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq35018){
var G__35019 = cljs.core.first(seq35018);
var seq35018__$1 = cljs.core.next(seq35018);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35019,seq35018__$1);
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
var G__35041 = arguments.length;
switch (G__35041) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35513 = arguments.length;
var i__4790__auto___35514 = (0);
while(true){
if((i__4790__auto___35514 < len__4789__auto___35513)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35514]));

var G__35515 = (i__4790__auto___35514 + (1));
i__4790__auto___35514 = G__35515;
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
var G__35042 = elem;
(G__35042[k__$1] = v);

return G__35042;
} else {
var G__35043 = elem;
G__35043.setAttribute(k__$1,v);

return G__35043;
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

var seq__35044_35516 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__35045_35517 = null;
var count__35046_35518 = (0);
var i__35047_35519 = (0);
while(true){
if((i__35047_35519 < count__35046_35518)){
var vec__35054_35520 = chunk__35045_35517.cljs$core$IIndexed$_nth$arity$2(null,i__35047_35519);
var k_35521__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35520,(0),null);
var v_35522__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35520,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35521__$1,v_35522__$1);


var G__35523 = seq__35044_35516;
var G__35524 = chunk__35045_35517;
var G__35525 = count__35046_35518;
var G__35526 = (i__35047_35519 + (1));
seq__35044_35516 = G__35523;
chunk__35045_35517 = G__35524;
count__35046_35518 = G__35525;
i__35047_35519 = G__35526;
continue;
} else {
var temp__5735__auto___35527 = cljs.core.seq(seq__35044_35516);
if(temp__5735__auto___35527){
var seq__35044_35528__$1 = temp__5735__auto___35527;
if(cljs.core.chunked_seq_QMARK_(seq__35044_35528__$1)){
var c__4609__auto___35529 = cljs.core.chunk_first(seq__35044_35528__$1);
var G__35530 = cljs.core.chunk_rest(seq__35044_35528__$1);
var G__35531 = c__4609__auto___35529;
var G__35532 = cljs.core.count(c__4609__auto___35529);
var G__35533 = (0);
seq__35044_35516 = G__35530;
chunk__35045_35517 = G__35531;
count__35046_35518 = G__35532;
i__35047_35519 = G__35533;
continue;
} else {
var vec__35057_35534 = cljs.core.first(seq__35044_35528__$1);
var k_35535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35057_35534,(0),null);
var v_35536__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35057_35534,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35535__$1,v_35536__$1);


var G__35537 = cljs.core.next(seq__35044_35528__$1);
var G__35538 = null;
var G__35539 = (0);
var G__35540 = (0);
seq__35044_35516 = G__35537;
chunk__35045_35517 = G__35538;
count__35046_35518 = G__35539;
i__35047_35519 = G__35540;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq35037){
var G__35038 = cljs.core.first(seq35037);
var seq35037__$1 = cljs.core.next(seq35037);
var G__35039 = cljs.core.first(seq35037__$1);
var seq35037__$2 = cljs.core.next(seq35037__$1);
var G__35040 = cljs.core.first(seq35037__$2);
var seq35037__$3 = cljs.core.next(seq35037__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35038,G__35039,G__35040,seq35037__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__35064 = arguments.length;
switch (G__35064) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35542 = arguments.length;
var i__4790__auto___35543 = (0);
while(true){
if((i__4790__auto___35543 < len__4789__auto___35542)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35543]));

var G__35544 = (i__4790__auto___35543 + (1));
i__4790__auto___35543 = G__35544;
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
var k_35545__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__35065 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__35065.cljs$core$IFn$_invoke$arity$1 ? fexpr__35065.cljs$core$IFn$_invoke$arity$1(k_35545__$1) : fexpr__35065.call(null,k_35545__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35545__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35066_35546 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__35067_35547 = null;
var count__35068_35548 = (0);
var i__35069_35549 = (0);
while(true){
if((i__35069_35549 < count__35068_35548)){
var k_35550__$1 = chunk__35067_35547.cljs$core$IIndexed$_nth$arity$2(null,i__35069_35549);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35550__$1);


var G__35551 = seq__35066_35546;
var G__35552 = chunk__35067_35547;
var G__35553 = count__35068_35548;
var G__35554 = (i__35069_35549 + (1));
seq__35066_35546 = G__35551;
chunk__35067_35547 = G__35552;
count__35068_35548 = G__35553;
i__35069_35549 = G__35554;
continue;
} else {
var temp__5735__auto___35555 = cljs.core.seq(seq__35066_35546);
if(temp__5735__auto___35555){
var seq__35066_35556__$1 = temp__5735__auto___35555;
if(cljs.core.chunked_seq_QMARK_(seq__35066_35556__$1)){
var c__4609__auto___35557 = cljs.core.chunk_first(seq__35066_35556__$1);
var G__35558 = cljs.core.chunk_rest(seq__35066_35556__$1);
var G__35559 = c__4609__auto___35557;
var G__35560 = cljs.core.count(c__4609__auto___35557);
var G__35561 = (0);
seq__35066_35546 = G__35558;
chunk__35067_35547 = G__35559;
count__35068_35548 = G__35560;
i__35069_35549 = G__35561;
continue;
} else {
var k_35562__$1 = cljs.core.first(seq__35066_35556__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35562__$1);


var G__35563 = cljs.core.next(seq__35066_35556__$1);
var G__35564 = null;
var G__35565 = (0);
var G__35566 = (0);
seq__35066_35546 = G__35563;
chunk__35067_35547 = G__35564;
count__35068_35548 = G__35565;
i__35069_35549 = G__35566;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq35061){
var G__35062 = cljs.core.first(seq35061);
var seq35061__$1 = cljs.core.next(seq35061);
var G__35063 = cljs.core.first(seq35061__$1);
var seq35061__$2 = cljs.core.next(seq35061__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35062,G__35063,seq35061__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__35071 = arguments.length;
switch (G__35071) {
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
var G__35076 = arguments.length;
switch (G__35076) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35569 = arguments.length;
var i__4790__auto___35571 = (0);
while(true){
if((i__4790__auto___35571 < len__4789__auto___35569)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35571]));

var G__35572 = (i__4790__auto___35571 + (1));
i__4790__auto___35571 = G__35572;
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
var temp__5733__auto___35574 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35574)){
var class_list_35575 = temp__5733__auto___35574;
var seq__35077_35576 = cljs.core.seq(classes__$1);
var chunk__35078_35577 = null;
var count__35079_35578 = (0);
var i__35080_35579 = (0);
while(true){
if((i__35080_35579 < count__35079_35578)){
var c_35580 = chunk__35078_35577.cljs$core$IIndexed$_nth$arity$2(null,i__35080_35579);
class_list_35575.add(c_35580);


var G__35581 = seq__35077_35576;
var G__35582 = chunk__35078_35577;
var G__35583 = count__35079_35578;
var G__35584 = (i__35080_35579 + (1));
seq__35077_35576 = G__35581;
chunk__35078_35577 = G__35582;
count__35079_35578 = G__35583;
i__35080_35579 = G__35584;
continue;
} else {
var temp__5735__auto___35585 = cljs.core.seq(seq__35077_35576);
if(temp__5735__auto___35585){
var seq__35077_35586__$1 = temp__5735__auto___35585;
if(cljs.core.chunked_seq_QMARK_(seq__35077_35586__$1)){
var c__4609__auto___35587 = cljs.core.chunk_first(seq__35077_35586__$1);
var G__35588 = cljs.core.chunk_rest(seq__35077_35586__$1);
var G__35589 = c__4609__auto___35587;
var G__35590 = cljs.core.count(c__4609__auto___35587);
var G__35591 = (0);
seq__35077_35576 = G__35588;
chunk__35078_35577 = G__35589;
count__35079_35578 = G__35590;
i__35080_35579 = G__35591;
continue;
} else {
var c_35592 = cljs.core.first(seq__35077_35586__$1);
class_list_35575.add(c_35592);


var G__35593 = cljs.core.next(seq__35077_35586__$1);
var G__35594 = null;
var G__35595 = (0);
var G__35596 = (0);
seq__35077_35576 = G__35593;
chunk__35078_35577 = G__35594;
count__35079_35578 = G__35595;
i__35080_35579 = G__35596;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35081_35597 = cljs.core.seq(classes__$1);
var chunk__35082_35598 = null;
var count__35083_35599 = (0);
var i__35084_35600 = (0);
while(true){
if((i__35084_35600 < count__35083_35599)){
var c_35601 = chunk__35082_35598.cljs$core$IIndexed$_nth$arity$2(null,i__35084_35600);
var class_name_35602 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35602,c_35601))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35602 === ""))?c_35601:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35602)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35601)].join('')));
}


var G__35603 = seq__35081_35597;
var G__35604 = chunk__35082_35598;
var G__35605 = count__35083_35599;
var G__35606 = (i__35084_35600 + (1));
seq__35081_35597 = G__35603;
chunk__35082_35598 = G__35604;
count__35083_35599 = G__35605;
i__35084_35600 = G__35606;
continue;
} else {
var temp__5735__auto___35607 = cljs.core.seq(seq__35081_35597);
if(temp__5735__auto___35607){
var seq__35081_35608__$1 = temp__5735__auto___35607;
if(cljs.core.chunked_seq_QMARK_(seq__35081_35608__$1)){
var c__4609__auto___35609 = cljs.core.chunk_first(seq__35081_35608__$1);
var G__35610 = cljs.core.chunk_rest(seq__35081_35608__$1);
var G__35611 = c__4609__auto___35609;
var G__35612 = cljs.core.count(c__4609__auto___35609);
var G__35613 = (0);
seq__35081_35597 = G__35610;
chunk__35082_35598 = G__35611;
count__35083_35599 = G__35612;
i__35084_35600 = G__35613;
continue;
} else {
var c_35615 = cljs.core.first(seq__35081_35608__$1);
var class_name_35616 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35616,c_35615))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35616 === ""))?c_35615:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35616)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35615)].join('')));
}


var G__35618 = cljs.core.next(seq__35081_35608__$1);
var G__35619 = null;
var G__35620 = (0);
var G__35621 = (0);
seq__35081_35597 = G__35618;
chunk__35082_35598 = G__35619;
count__35083_35599 = G__35620;
i__35084_35600 = G__35621;
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
var seq__35085_35622 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__35086_35623 = null;
var count__35087_35624 = (0);
var i__35088_35625 = (0);
while(true){
if((i__35088_35625 < count__35087_35624)){
var c_35626 = chunk__35086_35623.cljs$core$IIndexed$_nth$arity$2(null,i__35088_35625);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35626);


var G__35627 = seq__35085_35622;
var G__35628 = chunk__35086_35623;
var G__35629 = count__35087_35624;
var G__35630 = (i__35088_35625 + (1));
seq__35085_35622 = G__35627;
chunk__35086_35623 = G__35628;
count__35087_35624 = G__35629;
i__35088_35625 = G__35630;
continue;
} else {
var temp__5735__auto___35631 = cljs.core.seq(seq__35085_35622);
if(temp__5735__auto___35631){
var seq__35085_35632__$1 = temp__5735__auto___35631;
if(cljs.core.chunked_seq_QMARK_(seq__35085_35632__$1)){
var c__4609__auto___35633 = cljs.core.chunk_first(seq__35085_35632__$1);
var G__35634 = cljs.core.chunk_rest(seq__35085_35632__$1);
var G__35635 = c__4609__auto___35633;
var G__35636 = cljs.core.count(c__4609__auto___35633);
var G__35637 = (0);
seq__35085_35622 = G__35634;
chunk__35086_35623 = G__35635;
count__35087_35624 = G__35636;
i__35088_35625 = G__35637;
continue;
} else {
var c_35639 = cljs.core.first(seq__35085_35632__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35639);


var G__35641 = cljs.core.next(seq__35085_35632__$1);
var G__35642 = null;
var G__35643 = (0);
var G__35644 = (0);
seq__35085_35622 = G__35641;
chunk__35086_35623 = G__35642;
count__35087_35624 = G__35643;
i__35088_35625 = G__35644;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq35073){
var G__35074 = cljs.core.first(seq35073);
var seq35073__$1 = cljs.core.next(seq35073);
var G__35075 = cljs.core.first(seq35073__$1);
var seq35073__$2 = cljs.core.next(seq35073__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35074,G__35075,seq35073__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__35093 = arguments.length;
switch (G__35093) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35646 = arguments.length;
var i__4790__auto___35647 = (0);
while(true){
if((i__4790__auto___35647 < len__4789__auto___35646)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35647]));

var G__35648 = (i__4790__auto___35647 + (1));
i__4790__auto___35647 = G__35648;
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
var temp__5733__auto___35649 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35649)){
var class_list_35650 = temp__5733__auto___35649;
class_list_35650.remove(c__$1);
} else {
var class_name_35651 = dommy.core.class$(elem);
var new_class_name_35652 = dommy.utils.remove_class_str(class_name_35651,c__$1);
if((class_name_35651 === new_class_name_35652)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35652);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__35094 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__35095 = null;
var count__35096 = (0);
var i__35097 = (0);
while(true){
if((i__35097 < count__35096)){
var c = chunk__35095.cljs$core$IIndexed$_nth$arity$2(null,i__35097);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35653 = seq__35094;
var G__35654 = chunk__35095;
var G__35655 = count__35096;
var G__35656 = (i__35097 + (1));
seq__35094 = G__35653;
chunk__35095 = G__35654;
count__35096 = G__35655;
i__35097 = G__35656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35094);
if(temp__5735__auto__){
var seq__35094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35094__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35094__$1);
var G__35657 = cljs.core.chunk_rest(seq__35094__$1);
var G__35658 = c__4609__auto__;
var G__35659 = cljs.core.count(c__4609__auto__);
var G__35660 = (0);
seq__35094 = G__35657;
chunk__35095 = G__35658;
count__35096 = G__35659;
i__35097 = G__35660;
continue;
} else {
var c = cljs.core.first(seq__35094__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35661 = cljs.core.next(seq__35094__$1);
var G__35662 = null;
var G__35663 = (0);
var G__35664 = (0);
seq__35094 = G__35661;
chunk__35095 = G__35662;
count__35096 = G__35663;
i__35097 = G__35664;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq35090){
var G__35091 = cljs.core.first(seq35090);
var seq35090__$1 = cljs.core.next(seq35090);
var G__35092 = cljs.core.first(seq35090__$1);
var seq35090__$2 = cljs.core.next(seq35090__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35091,G__35092,seq35090__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__35099 = arguments.length;
switch (G__35099) {
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
var temp__5733__auto___35666 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35666)){
var class_list_35667 = temp__5733__auto___35666;
class_list_35667.toggle(c__$1);
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
var G__35101 = arguments.length;
switch (G__35101) {
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
var G__35103 = arguments.length;
switch (G__35103) {
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
var G__35109 = arguments.length;
switch (G__35109) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35671 = arguments.length;
var i__4790__auto___35672 = (0);
while(true){
if((i__4790__auto___35672 < len__4789__auto___35671)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35672]));

var G__35673 = (i__4790__auto___35672 + (1));
i__4790__auto___35672 = G__35673;
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
var G__35110 = parent;
G__35110.appendChild(child);

return G__35110;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35113_35674 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35114_35675 = null;
var count__35115_35676 = (0);
var i__35116_35677 = (0);
while(true){
if((i__35116_35677 < count__35115_35676)){
var c_35678 = chunk__35114_35675.cljs$core$IIndexed$_nth$arity$2(null,i__35116_35677);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35678);


var G__35679 = seq__35113_35674;
var G__35680 = chunk__35114_35675;
var G__35681 = count__35115_35676;
var G__35682 = (i__35116_35677 + (1));
seq__35113_35674 = G__35679;
chunk__35114_35675 = G__35680;
count__35115_35676 = G__35681;
i__35116_35677 = G__35682;
continue;
} else {
var temp__5735__auto___35683 = cljs.core.seq(seq__35113_35674);
if(temp__5735__auto___35683){
var seq__35113_35684__$1 = temp__5735__auto___35683;
if(cljs.core.chunked_seq_QMARK_(seq__35113_35684__$1)){
var c__4609__auto___35685 = cljs.core.chunk_first(seq__35113_35684__$1);
var G__35686 = cljs.core.chunk_rest(seq__35113_35684__$1);
var G__35687 = c__4609__auto___35685;
var G__35688 = cljs.core.count(c__4609__auto___35685);
var G__35689 = (0);
seq__35113_35674 = G__35686;
chunk__35114_35675 = G__35687;
count__35115_35676 = G__35688;
i__35116_35677 = G__35689;
continue;
} else {
var c_35690 = cljs.core.first(seq__35113_35684__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35690);


var G__35691 = cljs.core.next(seq__35113_35684__$1);
var G__35692 = null;
var G__35693 = (0);
var G__35694 = (0);
seq__35113_35674 = G__35691;
chunk__35114_35675 = G__35692;
count__35115_35676 = G__35693;
i__35116_35677 = G__35694;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35106){
var G__35107 = cljs.core.first(seq35106);
var seq35106__$1 = cljs.core.next(seq35106);
var G__35108 = cljs.core.first(seq35106__$1);
var seq35106__$2 = cljs.core.next(seq35106__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35107,G__35108,seq35106__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__35121 = arguments.length;
switch (G__35121) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35696 = arguments.length;
var i__4790__auto___35697 = (0);
while(true){
if((i__4790__auto___35697 < len__4789__auto___35696)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35697]));

var G__35698 = (i__4790__auto___35697 + (1));
i__4790__auto___35697 = G__35698;
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
var G__35122 = parent;
G__35122.insertBefore(child,parent.firstChild);

return G__35122;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35123_35699 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35124_35700 = null;
var count__35125_35701 = (0);
var i__35126_35702 = (0);
while(true){
if((i__35126_35702 < count__35125_35701)){
var c_35703 = chunk__35124_35700.cljs$core$IIndexed$_nth$arity$2(null,i__35126_35702);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35703);


var G__35704 = seq__35123_35699;
var G__35705 = chunk__35124_35700;
var G__35706 = count__35125_35701;
var G__35707 = (i__35126_35702 + (1));
seq__35123_35699 = G__35704;
chunk__35124_35700 = G__35705;
count__35125_35701 = G__35706;
i__35126_35702 = G__35707;
continue;
} else {
var temp__5735__auto___35708 = cljs.core.seq(seq__35123_35699);
if(temp__5735__auto___35708){
var seq__35123_35709__$1 = temp__5735__auto___35708;
if(cljs.core.chunked_seq_QMARK_(seq__35123_35709__$1)){
var c__4609__auto___35710 = cljs.core.chunk_first(seq__35123_35709__$1);
var G__35711 = cljs.core.chunk_rest(seq__35123_35709__$1);
var G__35712 = c__4609__auto___35710;
var G__35713 = cljs.core.count(c__4609__auto___35710);
var G__35714 = (0);
seq__35123_35699 = G__35711;
chunk__35124_35700 = G__35712;
count__35125_35701 = G__35713;
i__35126_35702 = G__35714;
continue;
} else {
var c_35715 = cljs.core.first(seq__35123_35709__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35715);


var G__35716 = cljs.core.next(seq__35123_35709__$1);
var G__35717 = null;
var G__35718 = (0);
var G__35719 = (0);
seq__35123_35699 = G__35716;
chunk__35124_35700 = G__35717;
count__35125_35701 = G__35718;
i__35126_35702 = G__35719;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35118){
var G__35119 = cljs.core.first(seq35118);
var seq35118__$1 = cljs.core.next(seq35118);
var G__35120 = cljs.core.first(seq35118__$1);
var seq35118__$2 = cljs.core.next(seq35118__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35119,G__35120,seq35118__$2);
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
var temp__5733__auto___35722 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35722)){
var next_35723 = temp__5733__auto___35722;
dommy.core.insert_before_BANG_(elem,next_35723);
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
var G__35128 = arguments.length;
switch (G__35128) {
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
var G__35129 = p;
G__35129.removeChild(elem);

return G__35129;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35130){
var vec__35131 = p__35130;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(1),null);
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
var len__4789__auto___35734 = arguments.length;
var i__4790__auto___35735 = (0);
while(true){
if((i__4790__auto___35735 < len__4789__auto___35734)){
args__4795__auto__.push((arguments[i__4790__auto___35735]));

var G__35736 = (i__4790__auto___35735 + (1));
i__4790__auto___35735 = G__35736;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq35134){
var G__35135 = cljs.core.first(seq35134);
var seq35134__$1 = cljs.core.next(seq35134);
var G__35136 = cljs.core.first(seq35134__$1);
var seq35134__$2 = cljs.core.next(seq35134__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35135,G__35136,seq35134__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__35137 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__35137.cljs$core$IFn$_invoke$arity$1 ? fexpr__35137.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__35137.call(null,elem_sel));
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
var len__4789__auto___35741 = arguments.length;
var i__4790__auto___35742 = (0);
while(true){
if((i__4790__auto___35742 < len__4789__auto___35741)){
args__4795__auto__.push((arguments[i__4790__auto___35742]));

var G__35743 = (i__4790__auto___35742 + (1));
i__4790__auto___35742 = G__35743;
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

var vec__35140_35746 = dommy.core.elem_and_selector(elem_sel);
var elem_35747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35746,(0),null);
var selector_35748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35746,(1),null);
var seq__35143_35749 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35150_35750 = null;
var count__35151_35751 = (0);
var i__35152_35752 = (0);
while(true){
if((i__35152_35752 < count__35151_35751)){
var vec__35208_35754 = chunk__35150_35750.cljs$core$IIndexed$_nth$arity$2(null,i__35152_35752);
var orig_type_35755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35208_35754,(0),null);
var f_35756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35208_35754,(1),null);
var seq__35153_35761 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35755,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35755,cljs.core.identity])));
var chunk__35155_35762 = null;
var count__35156_35763 = (0);
var i__35157_35764 = (0);
while(true){
if((i__35157_35764 < count__35156_35763)){
var vec__35221_35765 = chunk__35155_35762.cljs$core$IIndexed$_nth$arity$2(null,i__35157_35764);
var actual_type_35766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35221_35765,(0),null);
var factory_35767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35221_35765,(1),null);
var canonical_f_35768 = (function (){var G__35225 = (factory_35767.cljs$core$IFn$_invoke$arity$1 ? factory_35767.cljs$core$IFn$_invoke$arity$1(f_35756) : factory_35767.call(null,f_35756));
var fexpr__35224 = (cljs.core.truth_(selector_35748)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35747,selector_35748):cljs.core.identity);
return (fexpr__35224.cljs$core$IFn$_invoke$arity$1 ? fexpr__35224.cljs$core$IFn$_invoke$arity$1(G__35225) : fexpr__35224.call(null,G__35225));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35747,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35748,actual_type_35766,f_35756], null),canonical_f_35768], 0));

if(cljs.core.truth_(elem_35747.addEventListener)){
elem_35747.addEventListener(cljs.core.name(actual_type_35766),canonical_f_35768);
} else {
elem_35747.attachEvent(cljs.core.name(actual_type_35766),canonical_f_35768);
}


var G__35774 = seq__35153_35761;
var G__35775 = chunk__35155_35762;
var G__35776 = count__35156_35763;
var G__35777 = (i__35157_35764 + (1));
seq__35153_35761 = G__35774;
chunk__35155_35762 = G__35775;
count__35156_35763 = G__35776;
i__35157_35764 = G__35777;
continue;
} else {
var temp__5735__auto___35778 = cljs.core.seq(seq__35153_35761);
if(temp__5735__auto___35778){
var seq__35153_35779__$1 = temp__5735__auto___35778;
if(cljs.core.chunked_seq_QMARK_(seq__35153_35779__$1)){
var c__4609__auto___35780 = cljs.core.chunk_first(seq__35153_35779__$1);
var G__35781 = cljs.core.chunk_rest(seq__35153_35779__$1);
var G__35782 = c__4609__auto___35780;
var G__35783 = cljs.core.count(c__4609__auto___35780);
var G__35784 = (0);
seq__35153_35761 = G__35781;
chunk__35155_35762 = G__35782;
count__35156_35763 = G__35783;
i__35157_35764 = G__35784;
continue;
} else {
var vec__35229_35785 = cljs.core.first(seq__35153_35779__$1);
var actual_type_35786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35229_35785,(0),null);
var factory_35787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35229_35785,(1),null);
var canonical_f_35788 = (function (){var G__35233 = (factory_35787.cljs$core$IFn$_invoke$arity$1 ? factory_35787.cljs$core$IFn$_invoke$arity$1(f_35756) : factory_35787.call(null,f_35756));
var fexpr__35232 = (cljs.core.truth_(selector_35748)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35747,selector_35748):cljs.core.identity);
return (fexpr__35232.cljs$core$IFn$_invoke$arity$1 ? fexpr__35232.cljs$core$IFn$_invoke$arity$1(G__35233) : fexpr__35232.call(null,G__35233));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35747,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35748,actual_type_35786,f_35756], null),canonical_f_35788], 0));

if(cljs.core.truth_(elem_35747.addEventListener)){
elem_35747.addEventListener(cljs.core.name(actual_type_35786),canonical_f_35788);
} else {
elem_35747.attachEvent(cljs.core.name(actual_type_35786),canonical_f_35788);
}


var G__35789 = cljs.core.next(seq__35153_35779__$1);
var G__35790 = null;
var G__35791 = (0);
var G__35792 = (0);
seq__35153_35761 = G__35789;
chunk__35155_35762 = G__35790;
count__35156_35763 = G__35791;
i__35157_35764 = G__35792;
continue;
}
} else {
}
}
break;
}

var G__35793 = seq__35143_35749;
var G__35794 = chunk__35150_35750;
var G__35795 = count__35151_35751;
var G__35796 = (i__35152_35752 + (1));
seq__35143_35749 = G__35793;
chunk__35150_35750 = G__35794;
count__35151_35751 = G__35795;
i__35152_35752 = G__35796;
continue;
} else {
var temp__5735__auto___35797 = cljs.core.seq(seq__35143_35749);
if(temp__5735__auto___35797){
var seq__35143_35798__$1 = temp__5735__auto___35797;
if(cljs.core.chunked_seq_QMARK_(seq__35143_35798__$1)){
var c__4609__auto___35799 = cljs.core.chunk_first(seq__35143_35798__$1);
var G__35800 = cljs.core.chunk_rest(seq__35143_35798__$1);
var G__35801 = c__4609__auto___35799;
var G__35802 = cljs.core.count(c__4609__auto___35799);
var G__35803 = (0);
seq__35143_35749 = G__35800;
chunk__35150_35750 = G__35801;
count__35151_35751 = G__35802;
i__35152_35752 = G__35803;
continue;
} else {
var vec__35234_35804 = cljs.core.first(seq__35143_35798__$1);
var orig_type_35805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234_35804,(0),null);
var f_35806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234_35804,(1),null);
var seq__35144_35807 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35805,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35805,cljs.core.identity])));
var chunk__35146_35808 = null;
var count__35147_35809 = (0);
var i__35148_35810 = (0);
while(true){
if((i__35148_35810 < count__35147_35809)){
var vec__35247_35811 = chunk__35146_35808.cljs$core$IIndexed$_nth$arity$2(null,i__35148_35810);
var actual_type_35812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247_35811,(0),null);
var factory_35813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247_35811,(1),null);
var canonical_f_35814 = (function (){var G__35251 = (factory_35813.cljs$core$IFn$_invoke$arity$1 ? factory_35813.cljs$core$IFn$_invoke$arity$1(f_35806) : factory_35813.call(null,f_35806));
var fexpr__35250 = (cljs.core.truth_(selector_35748)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35747,selector_35748):cljs.core.identity);
return (fexpr__35250.cljs$core$IFn$_invoke$arity$1 ? fexpr__35250.cljs$core$IFn$_invoke$arity$1(G__35251) : fexpr__35250.call(null,G__35251));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35747,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35748,actual_type_35812,f_35806], null),canonical_f_35814], 0));

if(cljs.core.truth_(elem_35747.addEventListener)){
elem_35747.addEventListener(cljs.core.name(actual_type_35812),canonical_f_35814);
} else {
elem_35747.attachEvent(cljs.core.name(actual_type_35812),canonical_f_35814);
}


var G__35815 = seq__35144_35807;
var G__35816 = chunk__35146_35808;
var G__35817 = count__35147_35809;
var G__35818 = (i__35148_35810 + (1));
seq__35144_35807 = G__35815;
chunk__35146_35808 = G__35816;
count__35147_35809 = G__35817;
i__35148_35810 = G__35818;
continue;
} else {
var temp__5735__auto___35819__$1 = cljs.core.seq(seq__35144_35807);
if(temp__5735__auto___35819__$1){
var seq__35144_35820__$1 = temp__5735__auto___35819__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35144_35820__$1)){
var c__4609__auto___35821 = cljs.core.chunk_first(seq__35144_35820__$1);
var G__35822 = cljs.core.chunk_rest(seq__35144_35820__$1);
var G__35823 = c__4609__auto___35821;
var G__35824 = cljs.core.count(c__4609__auto___35821);
var G__35825 = (0);
seq__35144_35807 = G__35822;
chunk__35146_35808 = G__35823;
count__35147_35809 = G__35824;
i__35148_35810 = G__35825;
continue;
} else {
var vec__35252_35826 = cljs.core.first(seq__35144_35820__$1);
var actual_type_35827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35252_35826,(0),null);
var factory_35828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35252_35826,(1),null);
var canonical_f_35829 = (function (){var G__35256 = (factory_35828.cljs$core$IFn$_invoke$arity$1 ? factory_35828.cljs$core$IFn$_invoke$arity$1(f_35806) : factory_35828.call(null,f_35806));
var fexpr__35255 = (cljs.core.truth_(selector_35748)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35747,selector_35748):cljs.core.identity);
return (fexpr__35255.cljs$core$IFn$_invoke$arity$1 ? fexpr__35255.cljs$core$IFn$_invoke$arity$1(G__35256) : fexpr__35255.call(null,G__35256));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35747,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35748,actual_type_35827,f_35806], null),canonical_f_35829], 0));

if(cljs.core.truth_(elem_35747.addEventListener)){
elem_35747.addEventListener(cljs.core.name(actual_type_35827),canonical_f_35829);
} else {
elem_35747.attachEvent(cljs.core.name(actual_type_35827),canonical_f_35829);
}


var G__35830 = cljs.core.next(seq__35144_35820__$1);
var G__35831 = null;
var G__35832 = (0);
var G__35833 = (0);
seq__35144_35807 = G__35830;
chunk__35146_35808 = G__35831;
count__35147_35809 = G__35832;
i__35148_35810 = G__35833;
continue;
}
} else {
}
}
break;
}

var G__35834 = cljs.core.next(seq__35143_35798__$1);
var G__35835 = null;
var G__35836 = (0);
var G__35837 = (0);
seq__35143_35749 = G__35834;
chunk__35150_35750 = G__35835;
count__35151_35751 = G__35836;
i__35152_35752 = G__35837;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq35138){
var G__35139 = cljs.core.first(seq35138);
var seq35138__$1 = cljs.core.next(seq35138);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35139,seq35138__$1);
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
var len__4789__auto___35838 = arguments.length;
var i__4790__auto___35839 = (0);
while(true){
if((i__4790__auto___35839 < len__4789__auto___35838)){
args__4795__auto__.push((arguments[i__4790__auto___35839]));

var G__35840 = (i__4790__auto___35839 + (1));
i__4790__auto___35839 = G__35840;
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

var vec__35259_35841 = dommy.core.elem_and_selector(elem_sel);
var elem_35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259_35841,(0),null);
var selector_35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259_35841,(1),null);
var seq__35262_35844 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35269_35845 = null;
var count__35270_35846 = (0);
var i__35271_35847 = (0);
while(true){
if((i__35271_35847 < count__35270_35846)){
var vec__35319_35848 = chunk__35269_35845.cljs$core$IIndexed$_nth$arity$2(null,i__35271_35847);
var orig_type_35849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319_35848,(0),null);
var f_35850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319_35848,(1),null);
var seq__35272_35851 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35849,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35849,cljs.core.identity])));
var chunk__35274_35852 = null;
var count__35275_35853 = (0);
var i__35276_35854 = (0);
while(true){
if((i__35276_35854 < count__35275_35853)){
var vec__35328_35855 = chunk__35274_35852.cljs$core$IIndexed$_nth$arity$2(null,i__35276_35854);
var actual_type_35856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328_35855,(0),null);
var __35857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328_35855,(1),null);
var keys_35858 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35843,actual_type_35856,f_35850], null);
var canonical_f_35859 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35842),keys_35858);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35842,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35858], 0));

if(cljs.core.truth_(elem_35842.removeEventListener)){
elem_35842.removeEventListener(cljs.core.name(actual_type_35856),canonical_f_35859);
} else {
elem_35842.detachEvent(cljs.core.name(actual_type_35856),canonical_f_35859);
}


var G__35860 = seq__35272_35851;
var G__35861 = chunk__35274_35852;
var G__35862 = count__35275_35853;
var G__35863 = (i__35276_35854 + (1));
seq__35272_35851 = G__35860;
chunk__35274_35852 = G__35861;
count__35275_35853 = G__35862;
i__35276_35854 = G__35863;
continue;
} else {
var temp__5735__auto___35864 = cljs.core.seq(seq__35272_35851);
if(temp__5735__auto___35864){
var seq__35272_35865__$1 = temp__5735__auto___35864;
if(cljs.core.chunked_seq_QMARK_(seq__35272_35865__$1)){
var c__4609__auto___35866 = cljs.core.chunk_first(seq__35272_35865__$1);
var G__35867 = cljs.core.chunk_rest(seq__35272_35865__$1);
var G__35868 = c__4609__auto___35866;
var G__35869 = cljs.core.count(c__4609__auto___35866);
var G__35870 = (0);
seq__35272_35851 = G__35867;
chunk__35274_35852 = G__35868;
count__35275_35853 = G__35869;
i__35276_35854 = G__35870;
continue;
} else {
var vec__35331_35871 = cljs.core.first(seq__35272_35865__$1);
var actual_type_35872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35331_35871,(0),null);
var __35873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35331_35871,(1),null);
var keys_35874 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35843,actual_type_35872,f_35850], null);
var canonical_f_35875 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35842),keys_35874);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35842,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35874], 0));

if(cljs.core.truth_(elem_35842.removeEventListener)){
elem_35842.removeEventListener(cljs.core.name(actual_type_35872),canonical_f_35875);
} else {
elem_35842.detachEvent(cljs.core.name(actual_type_35872),canonical_f_35875);
}


var G__35876 = cljs.core.next(seq__35272_35865__$1);
var G__35877 = null;
var G__35878 = (0);
var G__35879 = (0);
seq__35272_35851 = G__35876;
chunk__35274_35852 = G__35877;
count__35275_35853 = G__35878;
i__35276_35854 = G__35879;
continue;
}
} else {
}
}
break;
}

var G__35880 = seq__35262_35844;
var G__35881 = chunk__35269_35845;
var G__35882 = count__35270_35846;
var G__35883 = (i__35271_35847 + (1));
seq__35262_35844 = G__35880;
chunk__35269_35845 = G__35881;
count__35270_35846 = G__35882;
i__35271_35847 = G__35883;
continue;
} else {
var temp__5735__auto___35884 = cljs.core.seq(seq__35262_35844);
if(temp__5735__auto___35884){
var seq__35262_35885__$1 = temp__5735__auto___35884;
if(cljs.core.chunked_seq_QMARK_(seq__35262_35885__$1)){
var c__4609__auto___35886 = cljs.core.chunk_first(seq__35262_35885__$1);
var G__35887 = cljs.core.chunk_rest(seq__35262_35885__$1);
var G__35888 = c__4609__auto___35886;
var G__35889 = cljs.core.count(c__4609__auto___35886);
var G__35890 = (0);
seq__35262_35844 = G__35887;
chunk__35269_35845 = G__35888;
count__35270_35846 = G__35889;
i__35271_35847 = G__35890;
continue;
} else {
var vec__35335_35891 = cljs.core.first(seq__35262_35885__$1);
var orig_type_35892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35335_35891,(0),null);
var f_35893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35335_35891,(1),null);
var seq__35263_35894 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35892,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35892,cljs.core.identity])));
var chunk__35265_35895 = null;
var count__35266_35896 = (0);
var i__35267_35897 = (0);
while(true){
if((i__35267_35897 < count__35266_35896)){
var vec__35348_35898 = chunk__35265_35895.cljs$core$IIndexed$_nth$arity$2(null,i__35267_35897);
var actual_type_35899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348_35898,(0),null);
var __35900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348_35898,(1),null);
var keys_35901 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35843,actual_type_35899,f_35893], null);
var canonical_f_35902 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35842),keys_35901);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35842,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35901], 0));

if(cljs.core.truth_(elem_35842.removeEventListener)){
elem_35842.removeEventListener(cljs.core.name(actual_type_35899),canonical_f_35902);
} else {
elem_35842.detachEvent(cljs.core.name(actual_type_35899),canonical_f_35902);
}


var G__35903 = seq__35263_35894;
var G__35904 = chunk__35265_35895;
var G__35905 = count__35266_35896;
var G__35906 = (i__35267_35897 + (1));
seq__35263_35894 = G__35903;
chunk__35265_35895 = G__35904;
count__35266_35896 = G__35905;
i__35267_35897 = G__35906;
continue;
} else {
var temp__5735__auto___35907__$1 = cljs.core.seq(seq__35263_35894);
if(temp__5735__auto___35907__$1){
var seq__35263_35908__$1 = temp__5735__auto___35907__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35263_35908__$1)){
var c__4609__auto___35909 = cljs.core.chunk_first(seq__35263_35908__$1);
var G__35910 = cljs.core.chunk_rest(seq__35263_35908__$1);
var G__35911 = c__4609__auto___35909;
var G__35912 = cljs.core.count(c__4609__auto___35909);
var G__35913 = (0);
seq__35263_35894 = G__35910;
chunk__35265_35895 = G__35911;
count__35266_35896 = G__35912;
i__35267_35897 = G__35913;
continue;
} else {
var vec__35351_35914 = cljs.core.first(seq__35263_35908__$1);
var actual_type_35915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35351_35914,(0),null);
var __35916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35351_35914,(1),null);
var keys_35917 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35843,actual_type_35915,f_35893], null);
var canonical_f_35918 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35842),keys_35917);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35842,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35917], 0));

if(cljs.core.truth_(elem_35842.removeEventListener)){
elem_35842.removeEventListener(cljs.core.name(actual_type_35915),canonical_f_35918);
} else {
elem_35842.detachEvent(cljs.core.name(actual_type_35915),canonical_f_35918);
}


var G__35919 = cljs.core.next(seq__35263_35908__$1);
var G__35920 = null;
var G__35921 = (0);
var G__35922 = (0);
seq__35263_35894 = G__35919;
chunk__35265_35895 = G__35920;
count__35266_35896 = G__35921;
i__35267_35897 = G__35922;
continue;
}
} else {
}
}
break;
}

var G__35923 = cljs.core.next(seq__35262_35885__$1);
var G__35924 = null;
var G__35925 = (0);
var G__35926 = (0);
seq__35262_35844 = G__35923;
chunk__35269_35845 = G__35924;
count__35270_35846 = G__35925;
i__35271_35847 = G__35926;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35257){
var G__35258 = cljs.core.first(seq35257);
var seq35257__$1 = cljs.core.next(seq35257);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35258,seq35257__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35930 = arguments.length;
var i__4790__auto___35932 = (0);
while(true){
if((i__4790__auto___35932 < len__4789__auto___35930)){
args__4795__auto__.push((arguments[i__4790__auto___35932]));

var G__35933 = (i__4790__auto___35932 + (1));
i__4790__auto___35932 = G__35933;
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

var vec__35360_35936 = dommy.core.elem_and_selector(elem_sel);
var elem_35937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360_35936,(0),null);
var selector_35938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360_35936,(1),null);
var seq__35363_35939 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35364_35940 = null;
var count__35365_35941 = (0);
var i__35366_35942 = (0);
while(true){
if((i__35366_35942 < count__35365_35941)){
var vec__35374_35943 = chunk__35364_35940.cljs$core$IIndexed$_nth$arity$2(null,i__35366_35942);
var type_35944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35374_35943,(0),null);
var f_35945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35374_35943,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35944,((function (seq__35363_35939,chunk__35364_35940,count__35365_35941,i__35366_35942,vec__35374_35943,type_35944,f_35945,vec__35360_35936,elem_35937,selector_35938){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35944,dommy$core$this_fn], 0));

return (f_35945.cljs$core$IFn$_invoke$arity$1 ? f_35945.cljs$core$IFn$_invoke$arity$1(e) : f_35945.call(null,e));
});})(seq__35363_35939,chunk__35364_35940,count__35365_35941,i__35366_35942,vec__35374_35943,type_35944,f_35945,vec__35360_35936,elem_35937,selector_35938))
], 0));


var G__35948 = seq__35363_35939;
var G__35949 = chunk__35364_35940;
var G__35950 = count__35365_35941;
var G__35951 = (i__35366_35942 + (1));
seq__35363_35939 = G__35948;
chunk__35364_35940 = G__35949;
count__35365_35941 = G__35950;
i__35366_35942 = G__35951;
continue;
} else {
var temp__5735__auto___35954 = cljs.core.seq(seq__35363_35939);
if(temp__5735__auto___35954){
var seq__35363_35955__$1 = temp__5735__auto___35954;
if(cljs.core.chunked_seq_QMARK_(seq__35363_35955__$1)){
var c__4609__auto___35956 = cljs.core.chunk_first(seq__35363_35955__$1);
var G__35957 = cljs.core.chunk_rest(seq__35363_35955__$1);
var G__35958 = c__4609__auto___35956;
var G__35959 = cljs.core.count(c__4609__auto___35956);
var G__35960 = (0);
seq__35363_35939 = G__35957;
chunk__35364_35940 = G__35958;
count__35365_35941 = G__35959;
i__35366_35942 = G__35960;
continue;
} else {
var vec__35389_35961 = cljs.core.first(seq__35363_35955__$1);
var type_35962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35389_35961,(0),null);
var f_35963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35389_35961,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35962,((function (seq__35363_35939,chunk__35364_35940,count__35365_35941,i__35366_35942,vec__35389_35961,type_35962,f_35963,seq__35363_35955__$1,temp__5735__auto___35954,vec__35360_35936,elem_35937,selector_35938){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35962,dommy$core$this_fn], 0));

return (f_35963.cljs$core$IFn$_invoke$arity$1 ? f_35963.cljs$core$IFn$_invoke$arity$1(e) : f_35963.call(null,e));
});})(seq__35363_35939,chunk__35364_35940,count__35365_35941,i__35366_35942,vec__35389_35961,type_35962,f_35963,seq__35363_35955__$1,temp__5735__auto___35954,vec__35360_35936,elem_35937,selector_35938))
], 0));


var G__35967 = cljs.core.next(seq__35363_35955__$1);
var G__35968 = null;
var G__35969 = (0);
var G__35970 = (0);
seq__35363_35939 = G__35967;
chunk__35364_35940 = G__35968;
count__35365_35941 = G__35969;
i__35366_35942 = G__35970;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35354){
var G__35355 = cljs.core.first(seq35354);
var seq35354__$1 = cljs.core.next(seq35354);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35355,seq35354__$1);
}));


//# sourceMappingURL=dommy.core.js.map
