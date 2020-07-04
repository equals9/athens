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
var G__36573 = arguments.length;
switch (G__36573) {
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
var G__36575 = arguments.length;
switch (G__36575) {
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
var G__36578 = arguments.length;
switch (G__36578) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__36576_SHARP_){
return (!((p1__36576_SHARP_ === base)));
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
var len__4789__auto___36966 = arguments.length;
var i__4790__auto___36967 = (0);
while(true){
if((i__4790__auto___36967 < len__4789__auto___36966)){
args__4795__auto__.push((arguments[i__4790__auto___36967]));

var G__36968 = (i__4790__auto___36967 + (1));
i__4790__auto___36967 = G__36968;
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
var seq__36581_36969 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36582_36970 = null;
var count__36583_36971 = (0);
var i__36584_36972 = (0);
while(true){
if((i__36584_36972 < count__36583_36971)){
var vec__36591_36976 = chunk__36582_36970.cljs$core$IIndexed$_nth$arity$2(null,i__36584_36972);
var k_36977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36591_36976,(0),null);
var v_36978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36591_36976,(1),null);
style.setProperty(dommy.utils.as_str(k_36977),v_36978);


var G__36980 = seq__36581_36969;
var G__36981 = chunk__36582_36970;
var G__36982 = count__36583_36971;
var G__36983 = (i__36584_36972 + (1));
seq__36581_36969 = G__36980;
chunk__36582_36970 = G__36981;
count__36583_36971 = G__36982;
i__36584_36972 = G__36983;
continue;
} else {
var temp__5735__auto___36984 = cljs.core.seq(seq__36581_36969);
if(temp__5735__auto___36984){
var seq__36581_36985__$1 = temp__5735__auto___36984;
if(cljs.core.chunked_seq_QMARK_(seq__36581_36985__$1)){
var c__4609__auto___36986 = cljs.core.chunk_first(seq__36581_36985__$1);
var G__36987 = cljs.core.chunk_rest(seq__36581_36985__$1);
var G__36988 = c__4609__auto___36986;
var G__36989 = cljs.core.count(c__4609__auto___36986);
var G__36990 = (0);
seq__36581_36969 = G__36987;
chunk__36582_36970 = G__36988;
count__36583_36971 = G__36989;
i__36584_36972 = G__36990;
continue;
} else {
var vec__36594_36991 = cljs.core.first(seq__36581_36985__$1);
var k_36992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36594_36991,(0),null);
var v_36993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36594_36991,(1),null);
style.setProperty(dommy.utils.as_str(k_36992),v_36993);


var G__36994 = cljs.core.next(seq__36581_36985__$1);
var G__36995 = null;
var G__36996 = (0);
var G__36997 = (0);
seq__36581_36969 = G__36994;
chunk__36582_36970 = G__36995;
count__36583_36971 = G__36996;
i__36584_36972 = G__36997;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq36579){
var G__36580 = cljs.core.first(seq36579);
var seq36579__$1 = cljs.core.next(seq36579);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36580,seq36579__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37000 = arguments.length;
var i__4790__auto___37001 = (0);
while(true){
if((i__4790__auto___37001 < len__4789__auto___37000)){
args__4795__auto__.push((arguments[i__4790__auto___37001]));

var G__37002 = (i__4790__auto___37001 + (1));
i__4790__auto___37001 = G__37002;
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
var seq__36601_37012 = cljs.core.seq(keywords);
var chunk__36602_37013 = null;
var count__36603_37014 = (0);
var i__36604_37015 = (0);
while(true){
if((i__36604_37015 < count__36603_37014)){
var kw_37018 = chunk__36602_37013.cljs$core$IIndexed$_nth$arity$2(null,i__36604_37015);
style.removeProperty(dommy.utils.as_str(kw_37018));


var G__37024 = seq__36601_37012;
var G__37025 = chunk__36602_37013;
var G__37026 = count__36603_37014;
var G__37027 = (i__36604_37015 + (1));
seq__36601_37012 = G__37024;
chunk__36602_37013 = G__37025;
count__36603_37014 = G__37026;
i__36604_37015 = G__37027;
continue;
} else {
var temp__5735__auto___37029 = cljs.core.seq(seq__36601_37012);
if(temp__5735__auto___37029){
var seq__36601_37034__$1 = temp__5735__auto___37029;
if(cljs.core.chunked_seq_QMARK_(seq__36601_37034__$1)){
var c__4609__auto___37035 = cljs.core.chunk_first(seq__36601_37034__$1);
var G__37036 = cljs.core.chunk_rest(seq__36601_37034__$1);
var G__37037 = c__4609__auto___37035;
var G__37038 = cljs.core.count(c__4609__auto___37035);
var G__37039 = (0);
seq__36601_37012 = G__37036;
chunk__36602_37013 = G__37037;
count__36603_37014 = G__37038;
i__36604_37015 = G__37039;
continue;
} else {
var kw_37040 = cljs.core.first(seq__36601_37034__$1);
style.removeProperty(dommy.utils.as_str(kw_37040));


var G__37041 = cljs.core.next(seq__36601_37034__$1);
var G__37042 = null;
var G__37043 = (0);
var G__37044 = (0);
seq__36601_37012 = G__37041;
chunk__36602_37013 = G__37042;
count__36603_37014 = G__37043;
i__36604_37015 = G__37044;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36597){
var G__36598 = cljs.core.first(seq36597);
var seq36597__$1 = cljs.core.next(seq36597);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36598,seq36597__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37045 = arguments.length;
var i__4790__auto___37046 = (0);
while(true){
if((i__4790__auto___37046 < len__4789__auto___37045)){
args__4795__auto__.push((arguments[i__4790__auto___37046]));

var G__37047 = (i__4790__auto___37046 + (1));
i__4790__auto___37046 = G__37047;
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

var seq__36607_37048 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36608_37049 = null;
var count__36609_37050 = (0);
var i__36610_37051 = (0);
while(true){
if((i__36610_37051 < count__36609_37050)){
var vec__36617_37052 = chunk__36608_37049.cljs$core$IIndexed$_nth$arity$2(null,i__36610_37051);
var k_37053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617_37052,(0),null);
var v_37054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617_37052,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37053,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37054),"px"].join('')], 0));


var G__37055 = seq__36607_37048;
var G__37056 = chunk__36608_37049;
var G__37057 = count__36609_37050;
var G__37058 = (i__36610_37051 + (1));
seq__36607_37048 = G__37055;
chunk__36608_37049 = G__37056;
count__36609_37050 = G__37057;
i__36610_37051 = G__37058;
continue;
} else {
var temp__5735__auto___37060 = cljs.core.seq(seq__36607_37048);
if(temp__5735__auto___37060){
var seq__36607_37061__$1 = temp__5735__auto___37060;
if(cljs.core.chunked_seq_QMARK_(seq__36607_37061__$1)){
var c__4609__auto___37062 = cljs.core.chunk_first(seq__36607_37061__$1);
var G__37067 = cljs.core.chunk_rest(seq__36607_37061__$1);
var G__37068 = c__4609__auto___37062;
var G__37069 = cljs.core.count(c__4609__auto___37062);
var G__37070 = (0);
seq__36607_37048 = G__37067;
chunk__36608_37049 = G__37068;
count__36609_37050 = G__37069;
i__36610_37051 = G__37070;
continue;
} else {
var vec__36620_37072 = cljs.core.first(seq__36607_37061__$1);
var k_37073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620_37072,(0),null);
var v_37074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620_37072,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37073,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37074),"px"].join('')], 0));


var G__37075 = cljs.core.next(seq__36607_37061__$1);
var G__37076 = null;
var G__37077 = (0);
var G__37078 = (0);
seq__36607_37048 = G__37075;
chunk__36608_37049 = G__37076;
count__36609_37050 = G__37077;
i__36610_37051 = G__37078;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq36605){
var G__36606 = cljs.core.first(seq36605);
var seq36605__$1 = cljs.core.next(seq36605);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36606,seq36605__$1);
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
var G__36628 = arguments.length;
switch (G__36628) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37092 = arguments.length;
var i__4790__auto___37093 = (0);
while(true){
if((i__4790__auto___37093 < len__4789__auto___37092)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37093]));

var G__37098 = (i__4790__auto___37093 + (1));
i__4790__auto___37093 = G__37098;
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
var G__36629 = elem;
(G__36629[k__$1] = v);

return G__36629;
} else {
var G__36630 = elem;
G__36630.setAttribute(k__$1,v);

return G__36630;
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

var seq__36631_37099 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__36632_37100 = null;
var count__36633_37101 = (0);
var i__36634_37102 = (0);
while(true){
if((i__36634_37102 < count__36633_37101)){
var vec__36641_37103 = chunk__36632_37100.cljs$core$IIndexed$_nth$arity$2(null,i__36634_37102);
var k_37104__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36641_37103,(0),null);
var v_37105__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36641_37103,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37104__$1,v_37105__$1);


var G__37106 = seq__36631_37099;
var G__37107 = chunk__36632_37100;
var G__37108 = count__36633_37101;
var G__37109 = (i__36634_37102 + (1));
seq__36631_37099 = G__37106;
chunk__36632_37100 = G__37107;
count__36633_37101 = G__37108;
i__36634_37102 = G__37109;
continue;
} else {
var temp__5735__auto___37110 = cljs.core.seq(seq__36631_37099);
if(temp__5735__auto___37110){
var seq__36631_37111__$1 = temp__5735__auto___37110;
if(cljs.core.chunked_seq_QMARK_(seq__36631_37111__$1)){
var c__4609__auto___37112 = cljs.core.chunk_first(seq__36631_37111__$1);
var G__37113 = cljs.core.chunk_rest(seq__36631_37111__$1);
var G__37114 = c__4609__auto___37112;
var G__37115 = cljs.core.count(c__4609__auto___37112);
var G__37116 = (0);
seq__36631_37099 = G__37113;
chunk__36632_37100 = G__37114;
count__36633_37101 = G__37115;
i__36634_37102 = G__37116;
continue;
} else {
var vec__36644_37120 = cljs.core.first(seq__36631_37111__$1);
var k_37121__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36644_37120,(0),null);
var v_37122__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36644_37120,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37121__$1,v_37122__$1);


var G__37123 = cljs.core.next(seq__36631_37111__$1);
var G__37124 = null;
var G__37125 = (0);
var G__37126 = (0);
seq__36631_37099 = G__37123;
chunk__36632_37100 = G__37124;
count__36633_37101 = G__37125;
i__36634_37102 = G__37126;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq36624){
var G__36625 = cljs.core.first(seq36624);
var seq36624__$1 = cljs.core.next(seq36624);
var G__36626 = cljs.core.first(seq36624__$1);
var seq36624__$2 = cljs.core.next(seq36624__$1);
var G__36627 = cljs.core.first(seq36624__$2);
var seq36624__$3 = cljs.core.next(seq36624__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36625,G__36626,G__36627,seq36624__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__36652 = arguments.length;
switch (G__36652) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37128 = arguments.length;
var i__4790__auto___37129 = (0);
while(true){
if((i__4790__auto___37129 < len__4789__auto___37128)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37129]));

var G__37130 = (i__4790__auto___37129 + (1));
i__4790__auto___37129 = G__37130;
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
var k_37131__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__36653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__36653.cljs$core$IFn$_invoke$arity$1 ? fexpr__36653.cljs$core$IFn$_invoke$arity$1(k_37131__$1) : fexpr__36653.call(null,k_37131__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_37131__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36654_37133 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__36655_37134 = null;
var count__36656_37135 = (0);
var i__36657_37136 = (0);
while(true){
if((i__36657_37136 < count__36656_37135)){
var k_37137__$1 = chunk__36655_37134.cljs$core$IIndexed$_nth$arity$2(null,i__36657_37136);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37137__$1);


var G__37138 = seq__36654_37133;
var G__37139 = chunk__36655_37134;
var G__37140 = count__36656_37135;
var G__37141 = (i__36657_37136 + (1));
seq__36654_37133 = G__37138;
chunk__36655_37134 = G__37139;
count__36656_37135 = G__37140;
i__36657_37136 = G__37141;
continue;
} else {
var temp__5735__auto___37142 = cljs.core.seq(seq__36654_37133);
if(temp__5735__auto___37142){
var seq__36654_37143__$1 = temp__5735__auto___37142;
if(cljs.core.chunked_seq_QMARK_(seq__36654_37143__$1)){
var c__4609__auto___37144 = cljs.core.chunk_first(seq__36654_37143__$1);
var G__37145 = cljs.core.chunk_rest(seq__36654_37143__$1);
var G__37146 = c__4609__auto___37144;
var G__37147 = cljs.core.count(c__4609__auto___37144);
var G__37148 = (0);
seq__36654_37133 = G__37145;
chunk__36655_37134 = G__37146;
count__36656_37135 = G__37147;
i__36657_37136 = G__37148;
continue;
} else {
var k_37150__$1 = cljs.core.first(seq__36654_37143__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37150__$1);


var G__37151 = cljs.core.next(seq__36654_37143__$1);
var G__37152 = null;
var G__37153 = (0);
var G__37154 = (0);
seq__36654_37133 = G__37151;
chunk__36655_37134 = G__37152;
count__36656_37135 = G__37153;
i__36657_37136 = G__37154;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq36648){
var G__36649 = cljs.core.first(seq36648);
var seq36648__$1 = cljs.core.next(seq36648);
var G__36650 = cljs.core.first(seq36648__$1);
var seq36648__$2 = cljs.core.next(seq36648__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36649,G__36650,seq36648__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__36659 = arguments.length;
switch (G__36659) {
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
var G__36664 = arguments.length;
switch (G__36664) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37157 = arguments.length;
var i__4790__auto___37158 = (0);
while(true){
if((i__4790__auto___37158 < len__4789__auto___37157)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37158]));

var G__37159 = (i__4790__auto___37158 + (1));
i__4790__auto___37158 = G__37159;
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
var temp__5733__auto___37160 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37160)){
var class_list_37161 = temp__5733__auto___37160;
var seq__36665_37162 = cljs.core.seq(classes__$1);
var chunk__36666_37163 = null;
var count__36667_37164 = (0);
var i__36668_37165 = (0);
while(true){
if((i__36668_37165 < count__36667_37164)){
var c_37166 = chunk__36666_37163.cljs$core$IIndexed$_nth$arity$2(null,i__36668_37165);
class_list_37161.add(c_37166);


var G__37167 = seq__36665_37162;
var G__37168 = chunk__36666_37163;
var G__37169 = count__36667_37164;
var G__37170 = (i__36668_37165 + (1));
seq__36665_37162 = G__37167;
chunk__36666_37163 = G__37168;
count__36667_37164 = G__37169;
i__36668_37165 = G__37170;
continue;
} else {
var temp__5735__auto___37171 = cljs.core.seq(seq__36665_37162);
if(temp__5735__auto___37171){
var seq__36665_37172__$1 = temp__5735__auto___37171;
if(cljs.core.chunked_seq_QMARK_(seq__36665_37172__$1)){
var c__4609__auto___37173 = cljs.core.chunk_first(seq__36665_37172__$1);
var G__37174 = cljs.core.chunk_rest(seq__36665_37172__$1);
var G__37175 = c__4609__auto___37173;
var G__37176 = cljs.core.count(c__4609__auto___37173);
var G__37177 = (0);
seq__36665_37162 = G__37174;
chunk__36666_37163 = G__37175;
count__36667_37164 = G__37176;
i__36668_37165 = G__37177;
continue;
} else {
var c_37178 = cljs.core.first(seq__36665_37172__$1);
class_list_37161.add(c_37178);


var G__37179 = cljs.core.next(seq__36665_37172__$1);
var G__37180 = null;
var G__37181 = (0);
var G__37182 = (0);
seq__36665_37162 = G__37179;
chunk__36666_37163 = G__37180;
count__36667_37164 = G__37181;
i__36668_37165 = G__37182;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36669_37183 = cljs.core.seq(classes__$1);
var chunk__36670_37184 = null;
var count__36671_37185 = (0);
var i__36672_37186 = (0);
while(true){
if((i__36672_37186 < count__36671_37185)){
var c_37187 = chunk__36670_37184.cljs$core$IIndexed$_nth$arity$2(null,i__36672_37186);
var class_name_37188 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37188,c_37187))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37188 === ""))?c_37187:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37188)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37187)].join('')));
}


var G__37189 = seq__36669_37183;
var G__37190 = chunk__36670_37184;
var G__37191 = count__36671_37185;
var G__37192 = (i__36672_37186 + (1));
seq__36669_37183 = G__37189;
chunk__36670_37184 = G__37190;
count__36671_37185 = G__37191;
i__36672_37186 = G__37192;
continue;
} else {
var temp__5735__auto___37193 = cljs.core.seq(seq__36669_37183);
if(temp__5735__auto___37193){
var seq__36669_37194__$1 = temp__5735__auto___37193;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37194__$1)){
var c__4609__auto___37195 = cljs.core.chunk_first(seq__36669_37194__$1);
var G__37196 = cljs.core.chunk_rest(seq__36669_37194__$1);
var G__37197 = c__4609__auto___37195;
var G__37198 = cljs.core.count(c__4609__auto___37195);
var G__37199 = (0);
seq__36669_37183 = G__37196;
chunk__36670_37184 = G__37197;
count__36671_37185 = G__37198;
i__36672_37186 = G__37199;
continue;
} else {
var c_37200 = cljs.core.first(seq__36669_37194__$1);
var class_name_37201 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37201,c_37200))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37201 === ""))?c_37200:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37201)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37200)].join('')));
}


var G__37202 = cljs.core.next(seq__36669_37194__$1);
var G__37203 = null;
var G__37204 = (0);
var G__37205 = (0);
seq__36669_37183 = G__37202;
chunk__36670_37184 = G__37203;
count__36671_37185 = G__37204;
i__36672_37186 = G__37205;
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
var seq__36673_37206 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37207 = null;
var count__36675_37208 = (0);
var i__36676_37209 = (0);
while(true){
if((i__36676_37209 < count__36675_37208)){
var c_37210 = chunk__36674_37207.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37209);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37210);


var G__37211 = seq__36673_37206;
var G__37212 = chunk__36674_37207;
var G__37213 = count__36675_37208;
var G__37214 = (i__36676_37209 + (1));
seq__36673_37206 = G__37211;
chunk__36674_37207 = G__37212;
count__36675_37208 = G__37213;
i__36676_37209 = G__37214;
continue;
} else {
var temp__5735__auto___37215 = cljs.core.seq(seq__36673_37206);
if(temp__5735__auto___37215){
var seq__36673_37216__$1 = temp__5735__auto___37215;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37216__$1)){
var c__4609__auto___37217 = cljs.core.chunk_first(seq__36673_37216__$1);
var G__37218 = cljs.core.chunk_rest(seq__36673_37216__$1);
var G__37219 = c__4609__auto___37217;
var G__37220 = cljs.core.count(c__4609__auto___37217);
var G__37221 = (0);
seq__36673_37206 = G__37218;
chunk__36674_37207 = G__37219;
count__36675_37208 = G__37220;
i__36676_37209 = G__37221;
continue;
} else {
var c_37222 = cljs.core.first(seq__36673_37216__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37222);


var G__37223 = cljs.core.next(seq__36673_37216__$1);
var G__37224 = null;
var G__37225 = (0);
var G__37226 = (0);
seq__36673_37206 = G__37223;
chunk__36674_37207 = G__37224;
count__36675_37208 = G__37225;
i__36676_37209 = G__37226;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq36661){
var G__36662 = cljs.core.first(seq36661);
var seq36661__$1 = cljs.core.next(seq36661);
var G__36663 = cljs.core.first(seq36661__$1);
var seq36661__$2 = cljs.core.next(seq36661__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36662,G__36663,seq36661__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__36681 = arguments.length;
switch (G__36681) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37228 = arguments.length;
var i__4790__auto___37229 = (0);
while(true){
if((i__4790__auto___37229 < len__4789__auto___37228)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37229]));

var G__37230 = (i__4790__auto___37229 + (1));
i__4790__auto___37229 = G__37230;
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
var temp__5733__auto___37231 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37231)){
var class_list_37232 = temp__5733__auto___37231;
class_list_37232.remove(c__$1);
} else {
var class_name_37233 = dommy.core.class$(elem);
var new_class_name_37234 = dommy.utils.remove_class_str(class_name_37233,c__$1);
if((class_name_37233 === new_class_name_37234)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37234);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36682 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__36683 = null;
var count__36684 = (0);
var i__36685 = (0);
while(true){
if((i__36685 < count__36684)){
var c = chunk__36683.cljs$core$IIndexed$_nth$arity$2(null,i__36685);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37235 = seq__36682;
var G__37236 = chunk__36683;
var G__37237 = count__36684;
var G__37238 = (i__36685 + (1));
seq__36682 = G__37235;
chunk__36683 = G__37236;
count__36684 = G__37237;
i__36685 = G__37238;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36682);
if(temp__5735__auto__){
var seq__36682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36682__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36682__$1);
var G__37239 = cljs.core.chunk_rest(seq__36682__$1);
var G__37240 = c__4609__auto__;
var G__37241 = cljs.core.count(c__4609__auto__);
var G__37242 = (0);
seq__36682 = G__37239;
chunk__36683 = G__37240;
count__36684 = G__37241;
i__36685 = G__37242;
continue;
} else {
var c = cljs.core.first(seq__36682__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37243 = cljs.core.next(seq__36682__$1);
var G__37244 = null;
var G__37245 = (0);
var G__37246 = (0);
seq__36682 = G__37243;
chunk__36683 = G__37244;
count__36684 = G__37245;
i__36685 = G__37246;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36678){
var G__36679 = cljs.core.first(seq36678);
var seq36678__$1 = cljs.core.next(seq36678);
var G__36680 = cljs.core.first(seq36678__$1);
var seq36678__$2 = cljs.core.next(seq36678__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36679,G__36680,seq36678__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__36687 = arguments.length;
switch (G__36687) {
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
var temp__5733__auto___37248 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37248)){
var class_list_37249 = temp__5733__auto___37248;
class_list_37249.toggle(c__$1);
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
var G__36689 = arguments.length;
switch (G__36689) {
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
var G__36691 = arguments.length;
switch (G__36691) {
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
var G__36696 = arguments.length;
switch (G__36696) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37255 = arguments.length;
var i__4790__auto___37256 = (0);
while(true){
if((i__4790__auto___37256 < len__4789__auto___37255)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37256]));

var G__37257 = (i__4790__auto___37256 + (1));
i__4790__auto___37256 = G__37257;
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
var G__36697 = parent;
G__36697.appendChild(child);

return G__36697;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36698_37258 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36699_37259 = null;
var count__36700_37260 = (0);
var i__36701_37261 = (0);
while(true){
if((i__36701_37261 < count__36700_37260)){
var c_37262 = chunk__36699_37259.cljs$core$IIndexed$_nth$arity$2(null,i__36701_37261);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37262);


var G__37263 = seq__36698_37258;
var G__37264 = chunk__36699_37259;
var G__37265 = count__36700_37260;
var G__37266 = (i__36701_37261 + (1));
seq__36698_37258 = G__37263;
chunk__36699_37259 = G__37264;
count__36700_37260 = G__37265;
i__36701_37261 = G__37266;
continue;
} else {
var temp__5735__auto___37267 = cljs.core.seq(seq__36698_37258);
if(temp__5735__auto___37267){
var seq__36698_37268__$1 = temp__5735__auto___37267;
if(cljs.core.chunked_seq_QMARK_(seq__36698_37268__$1)){
var c__4609__auto___37269 = cljs.core.chunk_first(seq__36698_37268__$1);
var G__37270 = cljs.core.chunk_rest(seq__36698_37268__$1);
var G__37271 = c__4609__auto___37269;
var G__37272 = cljs.core.count(c__4609__auto___37269);
var G__37273 = (0);
seq__36698_37258 = G__37270;
chunk__36699_37259 = G__37271;
count__36700_37260 = G__37272;
i__36701_37261 = G__37273;
continue;
} else {
var c_37274 = cljs.core.first(seq__36698_37268__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37274);


var G__37275 = cljs.core.next(seq__36698_37268__$1);
var G__37276 = null;
var G__37277 = (0);
var G__37278 = (0);
seq__36698_37258 = G__37275;
chunk__36699_37259 = G__37276;
count__36700_37260 = G__37277;
i__36701_37261 = G__37278;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36693){
var G__36694 = cljs.core.first(seq36693);
var seq36693__$1 = cljs.core.next(seq36693);
var G__36695 = cljs.core.first(seq36693__$1);
var seq36693__$2 = cljs.core.next(seq36693__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36694,G__36695,seq36693__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__36706 = arguments.length;
switch (G__36706) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37280 = arguments.length;
var i__4790__auto___37281 = (0);
while(true){
if((i__4790__auto___37281 < len__4789__auto___37280)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37281]));

var G__37283 = (i__4790__auto___37281 + (1));
i__4790__auto___37281 = G__37283;
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
var G__36707 = parent;
G__36707.insertBefore(child,parent.firstChild);

return G__36707;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36708_37285 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36709_37286 = null;
var count__36710_37287 = (0);
var i__36711_37288 = (0);
while(true){
if((i__36711_37288 < count__36710_37287)){
var c_37289 = chunk__36709_37286.cljs$core$IIndexed$_nth$arity$2(null,i__36711_37288);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37289);


var G__37290 = seq__36708_37285;
var G__37291 = chunk__36709_37286;
var G__37292 = count__36710_37287;
var G__37293 = (i__36711_37288 + (1));
seq__36708_37285 = G__37290;
chunk__36709_37286 = G__37291;
count__36710_37287 = G__37292;
i__36711_37288 = G__37293;
continue;
} else {
var temp__5735__auto___37294 = cljs.core.seq(seq__36708_37285);
if(temp__5735__auto___37294){
var seq__36708_37295__$1 = temp__5735__auto___37294;
if(cljs.core.chunked_seq_QMARK_(seq__36708_37295__$1)){
var c__4609__auto___37296 = cljs.core.chunk_first(seq__36708_37295__$1);
var G__37297 = cljs.core.chunk_rest(seq__36708_37295__$1);
var G__37298 = c__4609__auto___37296;
var G__37299 = cljs.core.count(c__4609__auto___37296);
var G__37300 = (0);
seq__36708_37285 = G__37297;
chunk__36709_37286 = G__37298;
count__36710_37287 = G__37299;
i__36711_37288 = G__37300;
continue;
} else {
var c_37302 = cljs.core.first(seq__36708_37295__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37302);


var G__37303 = cljs.core.next(seq__36708_37295__$1);
var G__37304 = null;
var G__37305 = (0);
var G__37306 = (0);
seq__36708_37285 = G__37303;
chunk__36709_37286 = G__37304;
count__36710_37287 = G__37305;
i__36711_37288 = G__37306;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq36703){
var G__36704 = cljs.core.first(seq36703);
var seq36703__$1 = cljs.core.next(seq36703);
var G__36705 = cljs.core.first(seq36703__$1);
var seq36703__$2 = cljs.core.next(seq36703__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36704,G__36705,seq36703__$2);
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
var temp__5733__auto___37308 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___37308)){
var next_37309 = temp__5733__auto___37308;
dommy.core.insert_before_BANG_(elem,next_37309);
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
var G__36714 = arguments.length;
switch (G__36714) {
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
var G__36717 = p;
G__36717.removeChild(elem);

return G__36717;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36718){
var vec__36719 = p__36718;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,(1),null);
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
var len__4789__auto___37311 = arguments.length;
var i__4790__auto___37312 = (0);
while(true){
if((i__4790__auto___37312 < len__4789__auto___37311)){
args__4795__auto__.push((arguments[i__4790__auto___37312]));

var G__37313 = (i__4790__auto___37312 + (1));
i__4790__auto___37312 = G__37313;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq36722){
var G__36723 = cljs.core.first(seq36722);
var seq36722__$1 = cljs.core.next(seq36722);
var G__36724 = cljs.core.first(seq36722__$1);
var seq36722__$2 = cljs.core.next(seq36722__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36723,G__36724,seq36722__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__36725 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__36725.cljs$core$IFn$_invoke$arity$1 ? fexpr__36725.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__36725.call(null,elem_sel));
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
var len__4789__auto___37314 = arguments.length;
var i__4790__auto___37315 = (0);
while(true){
if((i__4790__auto___37315 < len__4789__auto___37314)){
args__4795__auto__.push((arguments[i__4790__auto___37315]));

var G__37316 = (i__4790__auto___37315 + (1));
i__4790__auto___37315 = G__37316;
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

var vec__36728_37317 = dommy.core.elem_and_selector(elem_sel);
var elem_37318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728_37317,(0),null);
var selector_37319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728_37317,(1),null);
var seq__36731_37320 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36738_37321 = null;
var count__36739_37322 = (0);
var i__36740_37323 = (0);
while(true){
if((i__36740_37323 < count__36739_37322)){
var vec__36793_37324 = chunk__36738_37321.cljs$core$IIndexed$_nth$arity$2(null,i__36740_37323);
var orig_type_37325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36793_37324,(0),null);
var f_37326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36793_37324,(1),null);
var seq__36741_37327 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37325,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37325,cljs.core.identity])));
var chunk__36743_37328 = null;
var count__36744_37329 = (0);
var i__36745_37330 = (0);
while(true){
if((i__36745_37330 < count__36744_37329)){
var vec__36806_37331 = chunk__36743_37328.cljs$core$IIndexed$_nth$arity$2(null,i__36745_37330);
var actual_type_37332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37331,(0),null);
var factory_37333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37331,(1),null);
var canonical_f_37334 = (function (){var G__36810 = (factory_37333.cljs$core$IFn$_invoke$arity$1 ? factory_37333.cljs$core$IFn$_invoke$arity$1(f_37326) : factory_37333.call(null,f_37326));
var fexpr__36809 = (cljs.core.truth_(selector_37319)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37318,selector_37319):cljs.core.identity);
return (fexpr__36809.cljs$core$IFn$_invoke$arity$1 ? fexpr__36809.cljs$core$IFn$_invoke$arity$1(G__36810) : fexpr__36809.call(null,G__36810));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37318,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37319,actual_type_37332,f_37326], null),canonical_f_37334], 0));

if(cljs.core.truth_(elem_37318.addEventListener)){
elem_37318.addEventListener(cljs.core.name(actual_type_37332),canonical_f_37334);
} else {
elem_37318.attachEvent(cljs.core.name(actual_type_37332),canonical_f_37334);
}


var G__37335 = seq__36741_37327;
var G__37336 = chunk__36743_37328;
var G__37337 = count__36744_37329;
var G__37338 = (i__36745_37330 + (1));
seq__36741_37327 = G__37335;
chunk__36743_37328 = G__37336;
count__36744_37329 = G__37337;
i__36745_37330 = G__37338;
continue;
} else {
var temp__5735__auto___37339 = cljs.core.seq(seq__36741_37327);
if(temp__5735__auto___37339){
var seq__36741_37340__$1 = temp__5735__auto___37339;
if(cljs.core.chunked_seq_QMARK_(seq__36741_37340__$1)){
var c__4609__auto___37341 = cljs.core.chunk_first(seq__36741_37340__$1);
var G__37342 = cljs.core.chunk_rest(seq__36741_37340__$1);
var G__37343 = c__4609__auto___37341;
var G__37344 = cljs.core.count(c__4609__auto___37341);
var G__37345 = (0);
seq__36741_37327 = G__37342;
chunk__36743_37328 = G__37343;
count__36744_37329 = G__37344;
i__36745_37330 = G__37345;
continue;
} else {
var vec__36811_37346 = cljs.core.first(seq__36741_37340__$1);
var actual_type_37347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36811_37346,(0),null);
var factory_37348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36811_37346,(1),null);
var canonical_f_37349 = (function (){var G__36815 = (factory_37348.cljs$core$IFn$_invoke$arity$1 ? factory_37348.cljs$core$IFn$_invoke$arity$1(f_37326) : factory_37348.call(null,f_37326));
var fexpr__36814 = (cljs.core.truth_(selector_37319)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37318,selector_37319):cljs.core.identity);
return (fexpr__36814.cljs$core$IFn$_invoke$arity$1 ? fexpr__36814.cljs$core$IFn$_invoke$arity$1(G__36815) : fexpr__36814.call(null,G__36815));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37318,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37319,actual_type_37347,f_37326], null),canonical_f_37349], 0));

if(cljs.core.truth_(elem_37318.addEventListener)){
elem_37318.addEventListener(cljs.core.name(actual_type_37347),canonical_f_37349);
} else {
elem_37318.attachEvent(cljs.core.name(actual_type_37347),canonical_f_37349);
}


var G__37350 = cljs.core.next(seq__36741_37340__$1);
var G__37351 = null;
var G__37352 = (0);
var G__37353 = (0);
seq__36741_37327 = G__37350;
chunk__36743_37328 = G__37351;
count__36744_37329 = G__37352;
i__36745_37330 = G__37353;
continue;
}
} else {
}
}
break;
}

var G__37354 = seq__36731_37320;
var G__37355 = chunk__36738_37321;
var G__37356 = count__36739_37322;
var G__37357 = (i__36740_37323 + (1));
seq__36731_37320 = G__37354;
chunk__36738_37321 = G__37355;
count__36739_37322 = G__37356;
i__36740_37323 = G__37357;
continue;
} else {
var temp__5735__auto___37358 = cljs.core.seq(seq__36731_37320);
if(temp__5735__auto___37358){
var seq__36731_37359__$1 = temp__5735__auto___37358;
if(cljs.core.chunked_seq_QMARK_(seq__36731_37359__$1)){
var c__4609__auto___37360 = cljs.core.chunk_first(seq__36731_37359__$1);
var G__37361 = cljs.core.chunk_rest(seq__36731_37359__$1);
var G__37362 = c__4609__auto___37360;
var G__37363 = cljs.core.count(c__4609__auto___37360);
var G__37364 = (0);
seq__36731_37320 = G__37361;
chunk__36738_37321 = G__37362;
count__36739_37322 = G__37363;
i__36740_37323 = G__37364;
continue;
} else {
var vec__36819_37365 = cljs.core.first(seq__36731_37359__$1);
var orig_type_37366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819_37365,(0),null);
var f_37367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819_37365,(1),null);
var seq__36732_37368 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37366,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37366,cljs.core.identity])));
var chunk__36734_37369 = null;
var count__36735_37370 = (0);
var i__36736_37371 = (0);
while(true){
if((i__36736_37371 < count__36735_37370)){
var vec__36832_37372 = chunk__36734_37369.cljs$core$IIndexed$_nth$arity$2(null,i__36736_37371);
var actual_type_37373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36832_37372,(0),null);
var factory_37374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36832_37372,(1),null);
var canonical_f_37375 = (function (){var G__36836 = (factory_37374.cljs$core$IFn$_invoke$arity$1 ? factory_37374.cljs$core$IFn$_invoke$arity$1(f_37367) : factory_37374.call(null,f_37367));
var fexpr__36835 = (cljs.core.truth_(selector_37319)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37318,selector_37319):cljs.core.identity);
return (fexpr__36835.cljs$core$IFn$_invoke$arity$1 ? fexpr__36835.cljs$core$IFn$_invoke$arity$1(G__36836) : fexpr__36835.call(null,G__36836));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37318,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37319,actual_type_37373,f_37367], null),canonical_f_37375], 0));

if(cljs.core.truth_(elem_37318.addEventListener)){
elem_37318.addEventListener(cljs.core.name(actual_type_37373),canonical_f_37375);
} else {
elem_37318.attachEvent(cljs.core.name(actual_type_37373),canonical_f_37375);
}


var G__37378 = seq__36732_37368;
var G__37379 = chunk__36734_37369;
var G__37380 = count__36735_37370;
var G__37381 = (i__36736_37371 + (1));
seq__36732_37368 = G__37378;
chunk__36734_37369 = G__37379;
count__36735_37370 = G__37380;
i__36736_37371 = G__37381;
continue;
} else {
var temp__5735__auto___37382__$1 = cljs.core.seq(seq__36732_37368);
if(temp__5735__auto___37382__$1){
var seq__36732_37383__$1 = temp__5735__auto___37382__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36732_37383__$1)){
var c__4609__auto___37384 = cljs.core.chunk_first(seq__36732_37383__$1);
var G__37385 = cljs.core.chunk_rest(seq__36732_37383__$1);
var G__37386 = c__4609__auto___37384;
var G__37387 = cljs.core.count(c__4609__auto___37384);
var G__37388 = (0);
seq__36732_37368 = G__37385;
chunk__36734_37369 = G__37386;
count__36735_37370 = G__37387;
i__36736_37371 = G__37388;
continue;
} else {
var vec__36837_37389 = cljs.core.first(seq__36732_37383__$1);
var actual_type_37390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36837_37389,(0),null);
var factory_37391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36837_37389,(1),null);
var canonical_f_37392 = (function (){var G__36841 = (factory_37391.cljs$core$IFn$_invoke$arity$1 ? factory_37391.cljs$core$IFn$_invoke$arity$1(f_37367) : factory_37391.call(null,f_37367));
var fexpr__36840 = (cljs.core.truth_(selector_37319)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37318,selector_37319):cljs.core.identity);
return (fexpr__36840.cljs$core$IFn$_invoke$arity$1 ? fexpr__36840.cljs$core$IFn$_invoke$arity$1(G__36841) : fexpr__36840.call(null,G__36841));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37318,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37319,actual_type_37390,f_37367], null),canonical_f_37392], 0));

if(cljs.core.truth_(elem_37318.addEventListener)){
elem_37318.addEventListener(cljs.core.name(actual_type_37390),canonical_f_37392);
} else {
elem_37318.attachEvent(cljs.core.name(actual_type_37390),canonical_f_37392);
}


var G__37394 = cljs.core.next(seq__36732_37383__$1);
var G__37395 = null;
var G__37396 = (0);
var G__37397 = (0);
seq__36732_37368 = G__37394;
chunk__36734_37369 = G__37395;
count__36735_37370 = G__37396;
i__36736_37371 = G__37397;
continue;
}
} else {
}
}
break;
}

var G__37398 = cljs.core.next(seq__36731_37359__$1);
var G__37399 = null;
var G__37400 = (0);
var G__37401 = (0);
seq__36731_37320 = G__37398;
chunk__36738_37321 = G__37399;
count__36739_37322 = G__37400;
i__36740_37323 = G__37401;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq36726){
var G__36727 = cljs.core.first(seq36726);
var seq36726__$1 = cljs.core.next(seq36726);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36727,seq36726__$1);
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
var len__4789__auto___37405 = arguments.length;
var i__4790__auto___37406 = (0);
while(true){
if((i__4790__auto___37406 < len__4789__auto___37405)){
args__4795__auto__.push((arguments[i__4790__auto___37406]));

var G__37407 = (i__4790__auto___37406 + (1));
i__4790__auto___37406 = G__37407;
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

var vec__36844_37408 = dommy.core.elem_and_selector(elem_sel);
var elem_37409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844_37408,(0),null);
var selector_37410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844_37408,(1),null);
var seq__36847_37416 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36854_37417 = null;
var count__36855_37418 = (0);
var i__36856_37419 = (0);
while(true){
if((i__36856_37419 < count__36855_37418)){
var vec__36896_37420 = chunk__36854_37417.cljs$core$IIndexed$_nth$arity$2(null,i__36856_37419);
var orig_type_37421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896_37420,(0),null);
var f_37422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896_37420,(1),null);
var seq__36857_37423 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37421,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37421,cljs.core.identity])));
var chunk__36859_37424 = null;
var count__36860_37425 = (0);
var i__36861_37426 = (0);
while(true){
if((i__36861_37426 < count__36860_37425)){
var vec__36905_37427 = chunk__36859_37424.cljs$core$IIndexed$_nth$arity$2(null,i__36861_37426);
var actual_type_37428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905_37427,(0),null);
var __37429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905_37427,(1),null);
var keys_37432 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37410,actual_type_37428,f_37422], null);
var canonical_f_37433 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37409),keys_37432);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37409,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37432], 0));

if(cljs.core.truth_(elem_37409.removeEventListener)){
elem_37409.removeEventListener(cljs.core.name(actual_type_37428),canonical_f_37433);
} else {
elem_37409.detachEvent(cljs.core.name(actual_type_37428),canonical_f_37433);
}


var G__37434 = seq__36857_37423;
var G__37435 = chunk__36859_37424;
var G__37436 = count__36860_37425;
var G__37437 = (i__36861_37426 + (1));
seq__36857_37423 = G__37434;
chunk__36859_37424 = G__37435;
count__36860_37425 = G__37436;
i__36861_37426 = G__37437;
continue;
} else {
var temp__5735__auto___37438 = cljs.core.seq(seq__36857_37423);
if(temp__5735__auto___37438){
var seq__36857_37439__$1 = temp__5735__auto___37438;
if(cljs.core.chunked_seq_QMARK_(seq__36857_37439__$1)){
var c__4609__auto___37440 = cljs.core.chunk_first(seq__36857_37439__$1);
var G__37441 = cljs.core.chunk_rest(seq__36857_37439__$1);
var G__37442 = c__4609__auto___37440;
var G__37443 = cljs.core.count(c__4609__auto___37440);
var G__37444 = (0);
seq__36857_37423 = G__37441;
chunk__36859_37424 = G__37442;
count__36860_37425 = G__37443;
i__36861_37426 = G__37444;
continue;
} else {
var vec__36912_37447 = cljs.core.first(seq__36857_37439__$1);
var actual_type_37448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912_37447,(0),null);
var __37449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912_37447,(1),null);
var keys_37450 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37410,actual_type_37448,f_37422], null);
var canonical_f_37451 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37409),keys_37450);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37409,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37450], 0));

if(cljs.core.truth_(elem_37409.removeEventListener)){
elem_37409.removeEventListener(cljs.core.name(actual_type_37448),canonical_f_37451);
} else {
elem_37409.detachEvent(cljs.core.name(actual_type_37448),canonical_f_37451);
}


var G__37454 = cljs.core.next(seq__36857_37439__$1);
var G__37455 = null;
var G__37456 = (0);
var G__37457 = (0);
seq__36857_37423 = G__37454;
chunk__36859_37424 = G__37455;
count__36860_37425 = G__37456;
i__36861_37426 = G__37457;
continue;
}
} else {
}
}
break;
}

var G__37458 = seq__36847_37416;
var G__37459 = chunk__36854_37417;
var G__37460 = count__36855_37418;
var G__37461 = (i__36856_37419 + (1));
seq__36847_37416 = G__37458;
chunk__36854_37417 = G__37459;
count__36855_37418 = G__37460;
i__36856_37419 = G__37461;
continue;
} else {
var temp__5735__auto___37462 = cljs.core.seq(seq__36847_37416);
if(temp__5735__auto___37462){
var seq__36847_37463__$1 = temp__5735__auto___37462;
if(cljs.core.chunked_seq_QMARK_(seq__36847_37463__$1)){
var c__4609__auto___37465 = cljs.core.chunk_first(seq__36847_37463__$1);
var G__37468 = cljs.core.chunk_rest(seq__36847_37463__$1);
var G__37469 = c__4609__auto___37465;
var G__37470 = cljs.core.count(c__4609__auto___37465);
var G__37471 = (0);
seq__36847_37416 = G__37468;
chunk__36854_37417 = G__37469;
count__36855_37418 = G__37470;
i__36856_37419 = G__37471;
continue;
} else {
var vec__36915_37474 = cljs.core.first(seq__36847_37463__$1);
var orig_type_37475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36915_37474,(0),null);
var f_37476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36915_37474,(1),null);
var seq__36848_37477 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37475,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37475,cljs.core.identity])));
var chunk__36850_37478 = null;
var count__36851_37479 = (0);
var i__36852_37480 = (0);
while(true){
if((i__36852_37480 < count__36851_37479)){
var vec__36927_37481 = chunk__36850_37478.cljs$core$IIndexed$_nth$arity$2(null,i__36852_37480);
var actual_type_37482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927_37481,(0),null);
var __37484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927_37481,(1),null);
var keys_37489 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37410,actual_type_37482,f_37476], null);
var canonical_f_37490 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37409),keys_37489);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37409,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37489], 0));

if(cljs.core.truth_(elem_37409.removeEventListener)){
elem_37409.removeEventListener(cljs.core.name(actual_type_37482),canonical_f_37490);
} else {
elem_37409.detachEvent(cljs.core.name(actual_type_37482),canonical_f_37490);
}


var G__37491 = seq__36848_37477;
var G__37492 = chunk__36850_37478;
var G__37493 = count__36851_37479;
var G__37494 = (i__36852_37480 + (1));
seq__36848_37477 = G__37491;
chunk__36850_37478 = G__37492;
count__36851_37479 = G__37493;
i__36852_37480 = G__37494;
continue;
} else {
var temp__5735__auto___37495__$1 = cljs.core.seq(seq__36848_37477);
if(temp__5735__auto___37495__$1){
var seq__36848_37496__$1 = temp__5735__auto___37495__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36848_37496__$1)){
var c__4609__auto___37497 = cljs.core.chunk_first(seq__36848_37496__$1);
var G__37498 = cljs.core.chunk_rest(seq__36848_37496__$1);
var G__37499 = c__4609__auto___37497;
var G__37500 = cljs.core.count(c__4609__auto___37497);
var G__37501 = (0);
seq__36848_37477 = G__37498;
chunk__36850_37478 = G__37499;
count__36851_37479 = G__37500;
i__36852_37480 = G__37501;
continue;
} else {
var vec__36934_37502 = cljs.core.first(seq__36848_37496__$1);
var actual_type_37503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934_37502,(0),null);
var __37504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934_37502,(1),null);
var keys_37505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37410,actual_type_37503,f_37476], null);
var canonical_f_37506 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37409),keys_37505);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37409,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37505], 0));

if(cljs.core.truth_(elem_37409.removeEventListener)){
elem_37409.removeEventListener(cljs.core.name(actual_type_37503),canonical_f_37506);
} else {
elem_37409.detachEvent(cljs.core.name(actual_type_37503),canonical_f_37506);
}


var G__37507 = cljs.core.next(seq__36848_37496__$1);
var G__37508 = null;
var G__37509 = (0);
var G__37510 = (0);
seq__36848_37477 = G__37507;
chunk__36850_37478 = G__37508;
count__36851_37479 = G__37509;
i__36852_37480 = G__37510;
continue;
}
} else {
}
}
break;
}

var G__37511 = cljs.core.next(seq__36847_37463__$1);
var G__37512 = null;
var G__37513 = (0);
var G__37514 = (0);
seq__36847_37416 = G__37511;
chunk__36854_37417 = G__37512;
count__36855_37418 = G__37513;
i__36856_37419 = G__37514;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36842){
var G__36843 = cljs.core.first(seq36842);
var seq36842__$1 = cljs.core.next(seq36842);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36843,seq36842__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37515 = arguments.length;
var i__4790__auto___37516 = (0);
while(true){
if((i__4790__auto___37516 < len__4789__auto___37515)){
args__4795__auto__.push((arguments[i__4790__auto___37516]));

var G__37517 = (i__4790__auto___37516 + (1));
i__4790__auto___37516 = G__37517;
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

var vec__36939_37518 = dommy.core.elem_and_selector(elem_sel);
var elem_37519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36939_37518,(0),null);
var selector_37520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36939_37518,(1),null);
var seq__36942_37521 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36943_37522 = null;
var count__36944_37523 = (0);
var i__36945_37524 = (0);
while(true){
if((i__36945_37524 < count__36944_37523)){
var vec__36952_37525 = chunk__36943_37522.cljs$core$IIndexed$_nth$arity$2(null,i__36945_37524);
var type_37526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952_37525,(0),null);
var f_37527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952_37525,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37526,((function (seq__36942_37521,chunk__36943_37522,count__36944_37523,i__36945_37524,vec__36952_37525,type_37526,f_37527,vec__36939_37518,elem_37519,selector_37520){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37526,dommy$core$this_fn], 0));

return (f_37527.cljs$core$IFn$_invoke$arity$1 ? f_37527.cljs$core$IFn$_invoke$arity$1(e) : f_37527.call(null,e));
});})(seq__36942_37521,chunk__36943_37522,count__36944_37523,i__36945_37524,vec__36952_37525,type_37526,f_37527,vec__36939_37518,elem_37519,selector_37520))
], 0));


var G__37528 = seq__36942_37521;
var G__37529 = chunk__36943_37522;
var G__37530 = count__36944_37523;
var G__37531 = (i__36945_37524 + (1));
seq__36942_37521 = G__37528;
chunk__36943_37522 = G__37529;
count__36944_37523 = G__37530;
i__36945_37524 = G__37531;
continue;
} else {
var temp__5735__auto___37532 = cljs.core.seq(seq__36942_37521);
if(temp__5735__auto___37532){
var seq__36942_37533__$1 = temp__5735__auto___37532;
if(cljs.core.chunked_seq_QMARK_(seq__36942_37533__$1)){
var c__4609__auto___37534 = cljs.core.chunk_first(seq__36942_37533__$1);
var G__37535 = cljs.core.chunk_rest(seq__36942_37533__$1);
var G__37536 = c__4609__auto___37534;
var G__37537 = cljs.core.count(c__4609__auto___37534);
var G__37538 = (0);
seq__36942_37521 = G__37535;
chunk__36943_37522 = G__37536;
count__36944_37523 = G__37537;
i__36945_37524 = G__37538;
continue;
} else {
var vec__36955_37539 = cljs.core.first(seq__36942_37533__$1);
var type_37540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955_37539,(0),null);
var f_37541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955_37539,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37540,((function (seq__36942_37521,chunk__36943_37522,count__36944_37523,i__36945_37524,vec__36955_37539,type_37540,f_37541,seq__36942_37533__$1,temp__5735__auto___37532,vec__36939_37518,elem_37519,selector_37520){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37540,dommy$core$this_fn], 0));

return (f_37541.cljs$core$IFn$_invoke$arity$1 ? f_37541.cljs$core$IFn$_invoke$arity$1(e) : f_37541.call(null,e));
});})(seq__36942_37521,chunk__36943_37522,count__36944_37523,i__36945_37524,vec__36955_37539,type_37540,f_37541,seq__36942_37533__$1,temp__5735__auto___37532,vec__36939_37518,elem_37519,selector_37520))
], 0));


var G__37542 = cljs.core.next(seq__36942_37533__$1);
var G__37543 = null;
var G__37544 = (0);
var G__37545 = (0);
seq__36942_37521 = G__37542;
chunk__36943_37522 = G__37543;
count__36944_37523 = G__37544;
i__36945_37524 = G__37545;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36937){
var G__36938 = cljs.core.first(seq36937);
var seq36937__$1 = cljs.core.next(seq36937);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36938,seq36937__$1);
}));


//# sourceMappingURL=dommy.core.js.map
