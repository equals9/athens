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
var len__4789__auto___37024 = arguments.length;
var i__4790__auto___37025 = (0);
while(true){
if((i__4790__auto___37025 < len__4789__auto___37024)){
args__4795__auto__.push((arguments[i__4790__auto___37025]));

var G__37026 = (i__4790__auto___37025 + (1));
i__4790__auto___37025 = G__37026;
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
var seq__36583_37027 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36584_37028 = null;
var count__36585_37029 = (0);
var i__36586_37030 = (0);
while(true){
if((i__36586_37030 < count__36585_37029)){
var vec__36593_37031 = chunk__36584_37028.cljs$core$IIndexed$_nth$arity$2(null,i__36586_37030);
var k_37032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36593_37031,(0),null);
var v_37033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36593_37031,(1),null);
style.setProperty(dommy.utils.as_str(k_37032),v_37033);


var G__37034 = seq__36583_37027;
var G__37035 = chunk__36584_37028;
var G__37036 = count__36585_37029;
var G__37037 = (i__36586_37030 + (1));
seq__36583_37027 = G__37034;
chunk__36584_37028 = G__37035;
count__36585_37029 = G__37036;
i__36586_37030 = G__37037;
continue;
} else {
var temp__5735__auto___37038 = cljs.core.seq(seq__36583_37027);
if(temp__5735__auto___37038){
var seq__36583_37040__$1 = temp__5735__auto___37038;
if(cljs.core.chunked_seq_QMARK_(seq__36583_37040__$1)){
var c__4609__auto___37042 = cljs.core.chunk_first(seq__36583_37040__$1);
var G__37043 = cljs.core.chunk_rest(seq__36583_37040__$1);
var G__37044 = c__4609__auto___37042;
var G__37045 = cljs.core.count(c__4609__auto___37042);
var G__37046 = (0);
seq__36583_37027 = G__37043;
chunk__36584_37028 = G__37044;
count__36585_37029 = G__37045;
i__36586_37030 = G__37046;
continue;
} else {
var vec__36596_37047 = cljs.core.first(seq__36583_37040__$1);
var k_37048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_37047,(0),null);
var v_37049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_37047,(1),null);
style.setProperty(dommy.utils.as_str(k_37048),v_37049);


var G__37050 = cljs.core.next(seq__36583_37040__$1);
var G__37051 = null;
var G__37052 = (0);
var G__37053 = (0);
seq__36583_37027 = G__37050;
chunk__36584_37028 = G__37051;
count__36585_37029 = G__37052;
i__36586_37030 = G__37053;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq36581){
var G__36582 = cljs.core.first(seq36581);
var seq36581__$1 = cljs.core.next(seq36581);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36582,seq36581__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37054 = arguments.length;
var i__4790__auto___37055 = (0);
while(true){
if((i__4790__auto___37055 < len__4789__auto___37054)){
args__4795__auto__.push((arguments[i__4790__auto___37055]));

var G__37056 = (i__4790__auto___37055 + (1));
i__4790__auto___37055 = G__37056;
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
var seq__36602_37057 = cljs.core.seq(keywords);
var chunk__36603_37058 = null;
var count__36604_37059 = (0);
var i__36605_37060 = (0);
while(true){
if((i__36605_37060 < count__36604_37059)){
var kw_37061 = chunk__36603_37058.cljs$core$IIndexed$_nth$arity$2(null,i__36605_37060);
style.removeProperty(dommy.utils.as_str(kw_37061));


var G__37062 = seq__36602_37057;
var G__37063 = chunk__36603_37058;
var G__37064 = count__36604_37059;
var G__37065 = (i__36605_37060 + (1));
seq__36602_37057 = G__37062;
chunk__36603_37058 = G__37063;
count__36604_37059 = G__37064;
i__36605_37060 = G__37065;
continue;
} else {
var temp__5735__auto___37066 = cljs.core.seq(seq__36602_37057);
if(temp__5735__auto___37066){
var seq__36602_37067__$1 = temp__5735__auto___37066;
if(cljs.core.chunked_seq_QMARK_(seq__36602_37067__$1)){
var c__4609__auto___37068 = cljs.core.chunk_first(seq__36602_37067__$1);
var G__37069 = cljs.core.chunk_rest(seq__36602_37067__$1);
var G__37070 = c__4609__auto___37068;
var G__37071 = cljs.core.count(c__4609__auto___37068);
var G__37072 = (0);
seq__36602_37057 = G__37069;
chunk__36603_37058 = G__37070;
count__36604_37059 = G__37071;
i__36605_37060 = G__37072;
continue;
} else {
var kw_37073 = cljs.core.first(seq__36602_37067__$1);
style.removeProperty(dommy.utils.as_str(kw_37073));


var G__37074 = cljs.core.next(seq__36602_37067__$1);
var G__37075 = null;
var G__37076 = (0);
var G__37077 = (0);
seq__36602_37057 = G__37074;
chunk__36603_37058 = G__37075;
count__36604_37059 = G__37076;
i__36605_37060 = G__37077;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36600){
var G__36601 = cljs.core.first(seq36600);
var seq36600__$1 = cljs.core.next(seq36600);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36601,seq36600__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37078 = arguments.length;
var i__4790__auto___37079 = (0);
while(true){
if((i__4790__auto___37079 < len__4789__auto___37078)){
args__4795__auto__.push((arguments[i__4790__auto___37079]));

var G__37080 = (i__4790__auto___37079 + (1));
i__4790__auto___37079 = G__37080;
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

var seq__36608_37081 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36609_37082 = null;
var count__36610_37083 = (0);
var i__36611_37084 = (0);
while(true){
if((i__36611_37084 < count__36610_37083)){
var vec__36618_37085 = chunk__36609_37082.cljs$core$IIndexed$_nth$arity$2(null,i__36611_37084);
var k_37086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37085,(0),null);
var v_37087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37085,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37086,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37087),"px"].join('')], 0));


var G__37088 = seq__36608_37081;
var G__37089 = chunk__36609_37082;
var G__37090 = count__36610_37083;
var G__37091 = (i__36611_37084 + (1));
seq__36608_37081 = G__37088;
chunk__36609_37082 = G__37089;
count__36610_37083 = G__37090;
i__36611_37084 = G__37091;
continue;
} else {
var temp__5735__auto___37092 = cljs.core.seq(seq__36608_37081);
if(temp__5735__auto___37092){
var seq__36608_37093__$1 = temp__5735__auto___37092;
if(cljs.core.chunked_seq_QMARK_(seq__36608_37093__$1)){
var c__4609__auto___37094 = cljs.core.chunk_first(seq__36608_37093__$1);
var G__37095 = cljs.core.chunk_rest(seq__36608_37093__$1);
var G__37096 = c__4609__auto___37094;
var G__37097 = cljs.core.count(c__4609__auto___37094);
var G__37098 = (0);
seq__36608_37081 = G__37095;
chunk__36609_37082 = G__37096;
count__36610_37083 = G__37097;
i__36611_37084 = G__37098;
continue;
} else {
var vec__36621_37099 = cljs.core.first(seq__36608_37093__$1);
var k_37100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37099,(0),null);
var v_37101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37099,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37100,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37101),"px"].join('')], 0));


var G__37102 = cljs.core.next(seq__36608_37093__$1);
var G__37103 = null;
var G__37104 = (0);
var G__37105 = (0);
seq__36608_37081 = G__37102;
chunk__36609_37082 = G__37103;
count__36610_37083 = G__37104;
i__36611_37084 = G__37105;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq36606){
var G__36607 = cljs.core.first(seq36606);
var seq36606__$1 = cljs.core.next(seq36606);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36607,seq36606__$1);
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
var G__36629 = arguments.length;
switch (G__36629) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37107 = arguments.length;
var i__4790__auto___37108 = (0);
while(true){
if((i__4790__auto___37108 < len__4789__auto___37107)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37108]));

var G__37109 = (i__4790__auto___37108 + (1));
i__4790__auto___37108 = G__37109;
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
var G__36630 = elem;
(G__36630[k__$1] = v);

return G__36630;
} else {
var G__36631 = elem;
G__36631.setAttribute(k__$1,v);

return G__36631;
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

var seq__36632_37110 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__36633_37111 = null;
var count__36634_37112 = (0);
var i__36635_37113 = (0);
while(true){
if((i__36635_37113 < count__36634_37112)){
var vec__36642_37114 = chunk__36633_37111.cljs$core$IIndexed$_nth$arity$2(null,i__36635_37113);
var k_37115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642_37114,(0),null);
var v_37116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642_37114,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37115__$1,v_37116__$1);


var G__37117 = seq__36632_37110;
var G__37118 = chunk__36633_37111;
var G__37119 = count__36634_37112;
var G__37120 = (i__36635_37113 + (1));
seq__36632_37110 = G__37117;
chunk__36633_37111 = G__37118;
count__36634_37112 = G__37119;
i__36635_37113 = G__37120;
continue;
} else {
var temp__5735__auto___37121 = cljs.core.seq(seq__36632_37110);
if(temp__5735__auto___37121){
var seq__36632_37122__$1 = temp__5735__auto___37121;
if(cljs.core.chunked_seq_QMARK_(seq__36632_37122__$1)){
var c__4609__auto___37123 = cljs.core.chunk_first(seq__36632_37122__$1);
var G__37124 = cljs.core.chunk_rest(seq__36632_37122__$1);
var G__37125 = c__4609__auto___37123;
var G__37126 = cljs.core.count(c__4609__auto___37123);
var G__37127 = (0);
seq__36632_37110 = G__37124;
chunk__36633_37111 = G__37125;
count__36634_37112 = G__37126;
i__36635_37113 = G__37127;
continue;
} else {
var vec__36645_37128 = cljs.core.first(seq__36632_37122__$1);
var k_37129__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645_37128,(0),null);
var v_37130__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645_37128,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37129__$1,v_37130__$1);


var G__37131 = cljs.core.next(seq__36632_37122__$1);
var G__37132 = null;
var G__37133 = (0);
var G__37134 = (0);
seq__36632_37110 = G__37131;
chunk__36633_37111 = G__37132;
count__36634_37112 = G__37133;
i__36635_37113 = G__37134;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq36625){
var G__36626 = cljs.core.first(seq36625);
var seq36625__$1 = cljs.core.next(seq36625);
var G__36627 = cljs.core.first(seq36625__$1);
var seq36625__$2 = cljs.core.next(seq36625__$1);
var G__36628 = cljs.core.first(seq36625__$2);
var seq36625__$3 = cljs.core.next(seq36625__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36626,G__36627,G__36628,seq36625__$3);
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
var len__4789__auto___37136 = arguments.length;
var i__4790__auto___37137 = (0);
while(true){
if((i__4790__auto___37137 < len__4789__auto___37136)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37137]));

var G__37138 = (i__4790__auto___37137 + (1));
i__4790__auto___37137 = G__37138;
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
var k_37139__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__36653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__36653.cljs$core$IFn$_invoke$arity$1 ? fexpr__36653.cljs$core$IFn$_invoke$arity$1(k_37139__$1) : fexpr__36653.call(null,k_37139__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_37139__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36654_37140 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__36655_37141 = null;
var count__36656_37142 = (0);
var i__36657_37143 = (0);
while(true){
if((i__36657_37143 < count__36656_37142)){
var k_37144__$1 = chunk__36655_37141.cljs$core$IIndexed$_nth$arity$2(null,i__36657_37143);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37144__$1);


var G__37145 = seq__36654_37140;
var G__37146 = chunk__36655_37141;
var G__37147 = count__36656_37142;
var G__37148 = (i__36657_37143 + (1));
seq__36654_37140 = G__37145;
chunk__36655_37141 = G__37146;
count__36656_37142 = G__37147;
i__36657_37143 = G__37148;
continue;
} else {
var temp__5735__auto___37149 = cljs.core.seq(seq__36654_37140);
if(temp__5735__auto___37149){
var seq__36654_37151__$1 = temp__5735__auto___37149;
if(cljs.core.chunked_seq_QMARK_(seq__36654_37151__$1)){
var c__4609__auto___37152 = cljs.core.chunk_first(seq__36654_37151__$1);
var G__37153 = cljs.core.chunk_rest(seq__36654_37151__$1);
var G__37154 = c__4609__auto___37152;
var G__37155 = cljs.core.count(c__4609__auto___37152);
var G__37156 = (0);
seq__36654_37140 = G__37153;
chunk__36655_37141 = G__37154;
count__36656_37142 = G__37155;
i__36657_37143 = G__37156;
continue;
} else {
var k_37157__$1 = cljs.core.first(seq__36654_37151__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37157__$1);


var G__37159 = cljs.core.next(seq__36654_37151__$1);
var G__37160 = null;
var G__37161 = (0);
var G__37162 = (0);
seq__36654_37140 = G__37159;
chunk__36655_37141 = G__37160;
count__36656_37142 = G__37161;
i__36657_37143 = G__37162;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq36649){
var G__36650 = cljs.core.first(seq36649);
var seq36649__$1 = cljs.core.next(seq36649);
var G__36651 = cljs.core.first(seq36649__$1);
var seq36649__$2 = cljs.core.next(seq36649__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36650,G__36651,seq36649__$2);
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
var len__4789__auto___37166 = arguments.length;
var i__4790__auto___37167 = (0);
while(true){
if((i__4790__auto___37167 < len__4789__auto___37166)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37167]));

var G__37169 = (i__4790__auto___37167 + (1));
i__4790__auto___37167 = G__37169;
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
var temp__5733__auto___37172 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37172)){
var class_list_37173 = temp__5733__auto___37172;
var seq__36665_37174 = cljs.core.seq(classes__$1);
var chunk__36666_37175 = null;
var count__36667_37176 = (0);
var i__36668_37177 = (0);
while(true){
if((i__36668_37177 < count__36667_37176)){
var c_37178 = chunk__36666_37175.cljs$core$IIndexed$_nth$arity$2(null,i__36668_37177);
class_list_37173.add(c_37178);


var G__37179 = seq__36665_37174;
var G__37180 = chunk__36666_37175;
var G__37181 = count__36667_37176;
var G__37182 = (i__36668_37177 + (1));
seq__36665_37174 = G__37179;
chunk__36666_37175 = G__37180;
count__36667_37176 = G__37181;
i__36668_37177 = G__37182;
continue;
} else {
var temp__5735__auto___37183 = cljs.core.seq(seq__36665_37174);
if(temp__5735__auto___37183){
var seq__36665_37184__$1 = temp__5735__auto___37183;
if(cljs.core.chunked_seq_QMARK_(seq__36665_37184__$1)){
var c__4609__auto___37186 = cljs.core.chunk_first(seq__36665_37184__$1);
var G__37187 = cljs.core.chunk_rest(seq__36665_37184__$1);
var G__37188 = c__4609__auto___37186;
var G__37189 = cljs.core.count(c__4609__auto___37186);
var G__37190 = (0);
seq__36665_37174 = G__37187;
chunk__36666_37175 = G__37188;
count__36667_37176 = G__37189;
i__36668_37177 = G__37190;
continue;
} else {
var c_37195 = cljs.core.first(seq__36665_37184__$1);
class_list_37173.add(c_37195);


var G__37196 = cljs.core.next(seq__36665_37184__$1);
var G__37197 = null;
var G__37198 = (0);
var G__37199 = (0);
seq__36665_37174 = G__37196;
chunk__36666_37175 = G__37197;
count__36667_37176 = G__37198;
i__36668_37177 = G__37199;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36669_37200 = cljs.core.seq(classes__$1);
var chunk__36670_37201 = null;
var count__36671_37202 = (0);
var i__36672_37203 = (0);
while(true){
if((i__36672_37203 < count__36671_37202)){
var c_37204 = chunk__36670_37201.cljs$core$IIndexed$_nth$arity$2(null,i__36672_37203);
var class_name_37205 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37205,c_37204))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37205 === ""))?c_37204:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37205)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37204)].join('')));
}


var G__37207 = seq__36669_37200;
var G__37208 = chunk__36670_37201;
var G__37209 = count__36671_37202;
var G__37210 = (i__36672_37203 + (1));
seq__36669_37200 = G__37207;
chunk__36670_37201 = G__37208;
count__36671_37202 = G__37209;
i__36672_37203 = G__37210;
continue;
} else {
var temp__5735__auto___37212 = cljs.core.seq(seq__36669_37200);
if(temp__5735__auto___37212){
var seq__36669_37213__$1 = temp__5735__auto___37212;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37213__$1)){
var c__4609__auto___37214 = cljs.core.chunk_first(seq__36669_37213__$1);
var G__37215 = cljs.core.chunk_rest(seq__36669_37213__$1);
var G__37216 = c__4609__auto___37214;
var G__37217 = cljs.core.count(c__4609__auto___37214);
var G__37218 = (0);
seq__36669_37200 = G__37215;
chunk__36670_37201 = G__37216;
count__36671_37202 = G__37217;
i__36672_37203 = G__37218;
continue;
} else {
var c_37219 = cljs.core.first(seq__36669_37213__$1);
var class_name_37220 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37220,c_37219))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37220 === ""))?c_37219:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37220)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37219)].join('')));
}


var G__37221 = cljs.core.next(seq__36669_37213__$1);
var G__37222 = null;
var G__37223 = (0);
var G__37224 = (0);
seq__36669_37200 = G__37221;
chunk__36670_37201 = G__37222;
count__36671_37202 = G__37223;
i__36672_37203 = G__37224;
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
var seq__36673_37226 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37227 = null;
var count__36675_37228 = (0);
var i__36676_37229 = (0);
while(true){
if((i__36676_37229 < count__36675_37228)){
var c_37231 = chunk__36674_37227.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37229);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37231);


var G__37233 = seq__36673_37226;
var G__37234 = chunk__36674_37227;
var G__37235 = count__36675_37228;
var G__37236 = (i__36676_37229 + (1));
seq__36673_37226 = G__37233;
chunk__36674_37227 = G__37234;
count__36675_37228 = G__37235;
i__36676_37229 = G__37236;
continue;
} else {
var temp__5735__auto___37238 = cljs.core.seq(seq__36673_37226);
if(temp__5735__auto___37238){
var seq__36673_37239__$1 = temp__5735__auto___37238;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37239__$1)){
var c__4609__auto___37240 = cljs.core.chunk_first(seq__36673_37239__$1);
var G__37241 = cljs.core.chunk_rest(seq__36673_37239__$1);
var G__37242 = c__4609__auto___37240;
var G__37243 = cljs.core.count(c__4609__auto___37240);
var G__37244 = (0);
seq__36673_37226 = G__37241;
chunk__36674_37227 = G__37242;
count__36675_37228 = G__37243;
i__36676_37229 = G__37244;
continue;
} else {
var c_37245 = cljs.core.first(seq__36673_37239__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37245);


var G__37246 = cljs.core.next(seq__36673_37239__$1);
var G__37247 = null;
var G__37248 = (0);
var G__37249 = (0);
seq__36673_37226 = G__37246;
chunk__36674_37227 = G__37247;
count__36675_37228 = G__37248;
i__36676_37229 = G__37249;
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
var G__36682 = arguments.length;
switch (G__36682) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37256 = arguments.length;
var i__4790__auto___37257 = (0);
while(true){
if((i__4790__auto___37257 < len__4789__auto___37256)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37257]));

var G__37259 = (i__4790__auto___37257 + (1));
i__4790__auto___37257 = G__37259;
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
var temp__5733__auto___37264 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37264)){
var class_list_37265 = temp__5733__auto___37264;
class_list_37265.remove(c__$1);
} else {
var class_name_37266 = dommy.core.class$(elem);
var new_class_name_37267 = dommy.utils.remove_class_str(class_name_37266,c__$1);
if((class_name_37266 === new_class_name_37267)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37267);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36685 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__36686 = null;
var count__36687 = (0);
var i__36688 = (0);
while(true){
if((i__36688 < count__36687)){
var c = chunk__36686.cljs$core$IIndexed$_nth$arity$2(null,i__36688);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37268 = seq__36685;
var G__37269 = chunk__36686;
var G__37270 = count__36687;
var G__37271 = (i__36688 + (1));
seq__36685 = G__37268;
chunk__36686 = G__37269;
count__36687 = G__37270;
i__36688 = G__37271;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36685);
if(temp__5735__auto__){
var seq__36685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36685__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36685__$1);
var G__37272 = cljs.core.chunk_rest(seq__36685__$1);
var G__37273 = c__4609__auto__;
var G__37274 = cljs.core.count(c__4609__auto__);
var G__37275 = (0);
seq__36685 = G__37272;
chunk__36686 = G__37273;
count__36687 = G__37274;
i__36688 = G__37275;
continue;
} else {
var c = cljs.core.first(seq__36685__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37276 = cljs.core.next(seq__36685__$1);
var G__37277 = null;
var G__37278 = (0);
var G__37279 = (0);
seq__36685 = G__37276;
chunk__36686 = G__37277;
count__36687 = G__37278;
i__36688 = G__37279;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36679){
var G__36680 = cljs.core.first(seq36679);
var seq36679__$1 = cljs.core.next(seq36679);
var G__36681 = cljs.core.first(seq36679__$1);
var seq36679__$2 = cljs.core.next(seq36679__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36680,G__36681,seq36679__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__36690 = arguments.length;
switch (G__36690) {
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
var temp__5733__auto___37281 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37281)){
var class_list_37282 = temp__5733__auto___37281;
class_list_37282.toggle(c__$1);
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
var G__36692 = arguments.length;
switch (G__36692) {
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
var G__36694 = arguments.length;
switch (G__36694) {
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
var G__36699 = arguments.length;
switch (G__36699) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37286 = arguments.length;
var i__4790__auto___37287 = (0);
while(true){
if((i__4790__auto___37287 < len__4789__auto___37286)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37287]));

var G__37288 = (i__4790__auto___37287 + (1));
i__4790__auto___37287 = G__37288;
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
var G__36700 = parent;
G__36700.appendChild(child);

return G__36700;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36701_37289 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36702_37290 = null;
var count__36703_37291 = (0);
var i__36704_37292 = (0);
while(true){
if((i__36704_37292 < count__36703_37291)){
var c_37293 = chunk__36702_37290.cljs$core$IIndexed$_nth$arity$2(null,i__36704_37292);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37293);


var G__37294 = seq__36701_37289;
var G__37295 = chunk__36702_37290;
var G__37296 = count__36703_37291;
var G__37297 = (i__36704_37292 + (1));
seq__36701_37289 = G__37294;
chunk__36702_37290 = G__37295;
count__36703_37291 = G__37296;
i__36704_37292 = G__37297;
continue;
} else {
var temp__5735__auto___37298 = cljs.core.seq(seq__36701_37289);
if(temp__5735__auto___37298){
var seq__36701_37299__$1 = temp__5735__auto___37298;
if(cljs.core.chunked_seq_QMARK_(seq__36701_37299__$1)){
var c__4609__auto___37300 = cljs.core.chunk_first(seq__36701_37299__$1);
var G__37301 = cljs.core.chunk_rest(seq__36701_37299__$1);
var G__37302 = c__4609__auto___37300;
var G__37303 = cljs.core.count(c__4609__auto___37300);
var G__37304 = (0);
seq__36701_37289 = G__37301;
chunk__36702_37290 = G__37302;
count__36703_37291 = G__37303;
i__36704_37292 = G__37304;
continue;
} else {
var c_37305 = cljs.core.first(seq__36701_37299__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37305);


var G__37306 = cljs.core.next(seq__36701_37299__$1);
var G__37307 = null;
var G__37308 = (0);
var G__37309 = (0);
seq__36701_37289 = G__37306;
chunk__36702_37290 = G__37307;
count__36703_37291 = G__37308;
i__36704_37292 = G__37309;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36696){
var G__36697 = cljs.core.first(seq36696);
var seq36696__$1 = cljs.core.next(seq36696);
var G__36698 = cljs.core.first(seq36696__$1);
var seq36696__$2 = cljs.core.next(seq36696__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36697,G__36698,seq36696__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__36709 = arguments.length;
switch (G__36709) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37311 = arguments.length;
var i__4790__auto___37312 = (0);
while(true){
if((i__4790__auto___37312 < len__4789__auto___37311)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37312]));

var G__37313 = (i__4790__auto___37312 + (1));
i__4790__auto___37312 = G__37313;
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
var G__36710 = parent;
G__36710.insertBefore(child,parent.firstChild);

return G__36710;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36711_37314 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36712_37315 = null;
var count__36713_37316 = (0);
var i__36714_37317 = (0);
while(true){
if((i__36714_37317 < count__36713_37316)){
var c_37318 = chunk__36712_37315.cljs$core$IIndexed$_nth$arity$2(null,i__36714_37317);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37318);


var G__37319 = seq__36711_37314;
var G__37320 = chunk__36712_37315;
var G__37321 = count__36713_37316;
var G__37322 = (i__36714_37317 + (1));
seq__36711_37314 = G__37319;
chunk__36712_37315 = G__37320;
count__36713_37316 = G__37321;
i__36714_37317 = G__37322;
continue;
} else {
var temp__5735__auto___37323 = cljs.core.seq(seq__36711_37314);
if(temp__5735__auto___37323){
var seq__36711_37324__$1 = temp__5735__auto___37323;
if(cljs.core.chunked_seq_QMARK_(seq__36711_37324__$1)){
var c__4609__auto___37325 = cljs.core.chunk_first(seq__36711_37324__$1);
var G__37326 = cljs.core.chunk_rest(seq__36711_37324__$1);
var G__37327 = c__4609__auto___37325;
var G__37328 = cljs.core.count(c__4609__auto___37325);
var G__37329 = (0);
seq__36711_37314 = G__37326;
chunk__36712_37315 = G__37327;
count__36713_37316 = G__37328;
i__36714_37317 = G__37329;
continue;
} else {
var c_37330 = cljs.core.first(seq__36711_37324__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37330);


var G__37331 = cljs.core.next(seq__36711_37324__$1);
var G__37332 = null;
var G__37333 = (0);
var G__37334 = (0);
seq__36711_37314 = G__37331;
chunk__36712_37315 = G__37332;
count__36713_37316 = G__37333;
i__36714_37317 = G__37334;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq36706){
var G__36707 = cljs.core.first(seq36706);
var seq36706__$1 = cljs.core.next(seq36706);
var G__36708 = cljs.core.first(seq36706__$1);
var seq36706__$2 = cljs.core.next(seq36706__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36707,G__36708,seq36706__$2);
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
var temp__5733__auto___37335 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___37335)){
var next_37336 = temp__5733__auto___37335;
dommy.core.insert_before_BANG_(elem,next_37336);
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
var G__36716 = arguments.length;
switch (G__36716) {
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
var G__36720 = p;
G__36720.removeChild(elem);

return G__36720;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36721){
var vec__36722 = p__36721;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36722,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36722,(1),null);
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
var len__4789__auto___37340 = arguments.length;
var i__4790__auto___37341 = (0);
while(true){
if((i__4790__auto___37341 < len__4789__auto___37340)){
args__4795__auto__.push((arguments[i__4790__auto___37341]));

var G__37343 = (i__4790__auto___37341 + (1));
i__4790__auto___37341 = G__37343;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq36725){
var G__36726 = cljs.core.first(seq36725);
var seq36725__$1 = cljs.core.next(seq36725);
var G__36727 = cljs.core.first(seq36725__$1);
var seq36725__$2 = cljs.core.next(seq36725__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36726,G__36727,seq36725__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__36728 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__36728.cljs$core$IFn$_invoke$arity$1 ? fexpr__36728.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__36728.call(null,elem_sel));
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
var len__4789__auto___37347 = arguments.length;
var i__4790__auto___37348 = (0);
while(true){
if((i__4790__auto___37348 < len__4789__auto___37347)){
args__4795__auto__.push((arguments[i__4790__auto___37348]));

var G__37349 = (i__4790__auto___37348 + (1));
i__4790__auto___37348 = G__37349;
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

var vec__36731_37350 = dommy.core.elem_and_selector(elem_sel);
var elem_37351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_37350,(0),null);
var selector_37352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_37350,(1),null);
var seq__36734_37354 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36741_37355 = null;
var count__36742_37356 = (0);
var i__36743_37357 = (0);
while(true){
if((i__36743_37357 < count__36742_37356)){
var vec__36803_37361 = chunk__36741_37355.cljs$core$IIndexed$_nth$arity$2(null,i__36743_37357);
var orig_type_37362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36803_37361,(0),null);
var f_37363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36803_37361,(1),null);
var seq__36744_37364 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37362,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37362,cljs.core.identity])));
var chunk__36746_37365 = null;
var count__36747_37366 = (0);
var i__36748_37367 = (0);
while(true){
if((i__36748_37367 < count__36747_37366)){
var vec__36819_37370 = chunk__36746_37365.cljs$core$IIndexed$_nth$arity$2(null,i__36748_37367);
var actual_type_37371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819_37370,(0),null);
var factory_37372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819_37370,(1),null);
var canonical_f_37374 = (function (){var G__36823 = (factory_37372.cljs$core$IFn$_invoke$arity$1 ? factory_37372.cljs$core$IFn$_invoke$arity$1(f_37363) : factory_37372.call(null,f_37363));
var fexpr__36822 = (cljs.core.truth_(selector_37352)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37351,selector_37352):cljs.core.identity);
return (fexpr__36822.cljs$core$IFn$_invoke$arity$1 ? fexpr__36822.cljs$core$IFn$_invoke$arity$1(G__36823) : fexpr__36822.call(null,G__36823));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37351,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37352,actual_type_37371,f_37363], null),canonical_f_37374], 0));

if(cljs.core.truth_(elem_37351.addEventListener)){
elem_37351.addEventListener(cljs.core.name(actual_type_37371),canonical_f_37374);
} else {
elem_37351.attachEvent(cljs.core.name(actual_type_37371),canonical_f_37374);
}


var G__37375 = seq__36744_37364;
var G__37376 = chunk__36746_37365;
var G__37377 = count__36747_37366;
var G__37378 = (i__36748_37367 + (1));
seq__36744_37364 = G__37375;
chunk__36746_37365 = G__37376;
count__36747_37366 = G__37377;
i__36748_37367 = G__37378;
continue;
} else {
var temp__5735__auto___37379 = cljs.core.seq(seq__36744_37364);
if(temp__5735__auto___37379){
var seq__36744_37382__$1 = temp__5735__auto___37379;
if(cljs.core.chunked_seq_QMARK_(seq__36744_37382__$1)){
var c__4609__auto___37386 = cljs.core.chunk_first(seq__36744_37382__$1);
var G__37388 = cljs.core.chunk_rest(seq__36744_37382__$1);
var G__37389 = c__4609__auto___37386;
var G__37390 = cljs.core.count(c__4609__auto___37386);
var G__37391 = (0);
seq__36744_37364 = G__37388;
chunk__36746_37365 = G__37389;
count__36747_37366 = G__37390;
i__36748_37367 = G__37391;
continue;
} else {
var vec__36828_37393 = cljs.core.first(seq__36744_37382__$1);
var actual_type_37394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36828_37393,(0),null);
var factory_37395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36828_37393,(1),null);
var canonical_f_37396 = (function (){var G__36832 = (factory_37395.cljs$core$IFn$_invoke$arity$1 ? factory_37395.cljs$core$IFn$_invoke$arity$1(f_37363) : factory_37395.call(null,f_37363));
var fexpr__36831 = (cljs.core.truth_(selector_37352)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37351,selector_37352):cljs.core.identity);
return (fexpr__36831.cljs$core$IFn$_invoke$arity$1 ? fexpr__36831.cljs$core$IFn$_invoke$arity$1(G__36832) : fexpr__36831.call(null,G__36832));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37351,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37352,actual_type_37394,f_37363], null),canonical_f_37396], 0));

if(cljs.core.truth_(elem_37351.addEventListener)){
elem_37351.addEventListener(cljs.core.name(actual_type_37394),canonical_f_37396);
} else {
elem_37351.attachEvent(cljs.core.name(actual_type_37394),canonical_f_37396);
}


var G__37401 = cljs.core.next(seq__36744_37382__$1);
var G__37402 = null;
var G__37403 = (0);
var G__37404 = (0);
seq__36744_37364 = G__37401;
chunk__36746_37365 = G__37402;
count__36747_37366 = G__37403;
i__36748_37367 = G__37404;
continue;
}
} else {
}
}
break;
}

var G__37405 = seq__36734_37354;
var G__37406 = chunk__36741_37355;
var G__37407 = count__36742_37356;
var G__37408 = (i__36743_37357 + (1));
seq__36734_37354 = G__37405;
chunk__36741_37355 = G__37406;
count__36742_37356 = G__37407;
i__36743_37357 = G__37408;
continue;
} else {
var temp__5735__auto___37409 = cljs.core.seq(seq__36734_37354);
if(temp__5735__auto___37409){
var seq__36734_37412__$1 = temp__5735__auto___37409;
if(cljs.core.chunked_seq_QMARK_(seq__36734_37412__$1)){
var c__4609__auto___37416 = cljs.core.chunk_first(seq__36734_37412__$1);
var G__37417 = cljs.core.chunk_rest(seq__36734_37412__$1);
var G__37418 = c__4609__auto___37416;
var G__37419 = cljs.core.count(c__4609__auto___37416);
var G__37420 = (0);
seq__36734_37354 = G__37417;
chunk__36741_37355 = G__37418;
count__36742_37356 = G__37419;
i__36743_37357 = G__37420;
continue;
} else {
var vec__36833_37422 = cljs.core.first(seq__36734_37412__$1);
var orig_type_37423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833_37422,(0),null);
var f_37424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833_37422,(1),null);
var seq__36735_37426 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37423,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37423,cljs.core.identity])));
var chunk__36737_37427 = null;
var count__36738_37428 = (0);
var i__36739_37429 = (0);
while(true){
if((i__36739_37429 < count__36738_37428)){
var vec__36846_37432 = chunk__36737_37427.cljs$core$IIndexed$_nth$arity$2(null,i__36739_37429);
var actual_type_37433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37432,(0),null);
var factory_37434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37432,(1),null);
var canonical_f_37437 = (function (){var G__36850 = (factory_37434.cljs$core$IFn$_invoke$arity$1 ? factory_37434.cljs$core$IFn$_invoke$arity$1(f_37424) : factory_37434.call(null,f_37424));
var fexpr__36849 = (cljs.core.truth_(selector_37352)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37351,selector_37352):cljs.core.identity);
return (fexpr__36849.cljs$core$IFn$_invoke$arity$1 ? fexpr__36849.cljs$core$IFn$_invoke$arity$1(G__36850) : fexpr__36849.call(null,G__36850));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37351,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37352,actual_type_37433,f_37424], null),canonical_f_37437], 0));

if(cljs.core.truth_(elem_37351.addEventListener)){
elem_37351.addEventListener(cljs.core.name(actual_type_37433),canonical_f_37437);
} else {
elem_37351.attachEvent(cljs.core.name(actual_type_37433),canonical_f_37437);
}


var G__37440 = seq__36735_37426;
var G__37441 = chunk__36737_37427;
var G__37442 = count__36738_37428;
var G__37443 = (i__36739_37429 + (1));
seq__36735_37426 = G__37440;
chunk__36737_37427 = G__37441;
count__36738_37428 = G__37442;
i__36739_37429 = G__37443;
continue;
} else {
var temp__5735__auto___37446__$1 = cljs.core.seq(seq__36735_37426);
if(temp__5735__auto___37446__$1){
var seq__36735_37448__$1 = temp__5735__auto___37446__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36735_37448__$1)){
var c__4609__auto___37449 = cljs.core.chunk_first(seq__36735_37448__$1);
var G__37450 = cljs.core.chunk_rest(seq__36735_37448__$1);
var G__37451 = c__4609__auto___37449;
var G__37452 = cljs.core.count(c__4609__auto___37449);
var G__37453 = (0);
seq__36735_37426 = G__37450;
chunk__36737_37427 = G__37451;
count__36738_37428 = G__37452;
i__36739_37429 = G__37453;
continue;
} else {
var vec__36851_37456 = cljs.core.first(seq__36735_37448__$1);
var actual_type_37457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37456,(0),null);
var factory_37458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37456,(1),null);
var canonical_f_37462 = (function (){var G__36855 = (factory_37458.cljs$core$IFn$_invoke$arity$1 ? factory_37458.cljs$core$IFn$_invoke$arity$1(f_37424) : factory_37458.call(null,f_37424));
var fexpr__36854 = (cljs.core.truth_(selector_37352)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37351,selector_37352):cljs.core.identity);
return (fexpr__36854.cljs$core$IFn$_invoke$arity$1 ? fexpr__36854.cljs$core$IFn$_invoke$arity$1(G__36855) : fexpr__36854.call(null,G__36855));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37351,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37352,actual_type_37457,f_37424], null),canonical_f_37462], 0));

if(cljs.core.truth_(elem_37351.addEventListener)){
elem_37351.addEventListener(cljs.core.name(actual_type_37457),canonical_f_37462);
} else {
elem_37351.attachEvent(cljs.core.name(actual_type_37457),canonical_f_37462);
}


var G__37466 = cljs.core.next(seq__36735_37448__$1);
var G__37467 = null;
var G__37468 = (0);
var G__37469 = (0);
seq__36735_37426 = G__37466;
chunk__36737_37427 = G__37467;
count__36738_37428 = G__37468;
i__36739_37429 = G__37469;
continue;
}
} else {
}
}
break;
}

var G__37471 = cljs.core.next(seq__36734_37412__$1);
var G__37472 = null;
var G__37473 = (0);
var G__37474 = (0);
seq__36734_37354 = G__37471;
chunk__36741_37355 = G__37472;
count__36742_37356 = G__37473;
i__36743_37357 = G__37474;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq36729){
var G__36730 = cljs.core.first(seq36729);
var seq36729__$1 = cljs.core.next(seq36729);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36730,seq36729__$1);
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
var len__4789__auto___37480 = arguments.length;
var i__4790__auto___37481 = (0);
while(true){
if((i__4790__auto___37481 < len__4789__auto___37480)){
args__4795__auto__.push((arguments[i__4790__auto___37481]));

var G__37482 = (i__4790__auto___37481 + (1));
i__4790__auto___37481 = G__37482;
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

var vec__36863_37492 = dommy.core.elem_and_selector(elem_sel);
var elem_37493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36863_37492,(0),null);
var selector_37494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36863_37492,(1),null);
var seq__36866_37498 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36873_37499 = null;
var count__36874_37500 = (0);
var i__36875_37501 = (0);
while(true){
if((i__36875_37501 < count__36874_37500)){
var vec__36950_37502 = chunk__36873_37499.cljs$core$IIndexed$_nth$arity$2(null,i__36875_37501);
var orig_type_37503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950_37502,(0),null);
var f_37504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950_37502,(1),null);
var seq__36876_37507 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37503,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37503,cljs.core.identity])));
var chunk__36878_37508 = null;
var count__36879_37509 = (0);
var i__36880_37510 = (0);
while(true){
if((i__36880_37510 < count__36879_37509)){
var vec__36970_37512 = chunk__36878_37508.cljs$core$IIndexed$_nth$arity$2(null,i__36880_37510);
var actual_type_37513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36970_37512,(0),null);
var __37514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36970_37512,(1),null);
var keys_37518 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37494,actual_type_37513,f_37504], null);
var canonical_f_37519 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37493),keys_37518);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37493,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37518], 0));

if(cljs.core.truth_(elem_37493.removeEventListener)){
elem_37493.removeEventListener(cljs.core.name(actual_type_37513),canonical_f_37519);
} else {
elem_37493.detachEvent(cljs.core.name(actual_type_37513),canonical_f_37519);
}


var G__37522 = seq__36876_37507;
var G__37523 = chunk__36878_37508;
var G__37524 = count__36879_37509;
var G__37525 = (i__36880_37510 + (1));
seq__36876_37507 = G__37522;
chunk__36878_37508 = G__37523;
count__36879_37509 = G__37524;
i__36880_37510 = G__37525;
continue;
} else {
var temp__5735__auto___37527 = cljs.core.seq(seq__36876_37507);
if(temp__5735__auto___37527){
var seq__36876_37528__$1 = temp__5735__auto___37527;
if(cljs.core.chunked_seq_QMARK_(seq__36876_37528__$1)){
var c__4609__auto___37529 = cljs.core.chunk_first(seq__36876_37528__$1);
var G__37532 = cljs.core.chunk_rest(seq__36876_37528__$1);
var G__37533 = c__4609__auto___37529;
var G__37534 = cljs.core.count(c__4609__auto___37529);
var G__37535 = (0);
seq__36876_37507 = G__37532;
chunk__36878_37508 = G__37533;
count__36879_37509 = G__37534;
i__36880_37510 = G__37535;
continue;
} else {
var vec__36976_37537 = cljs.core.first(seq__36876_37528__$1);
var actual_type_37538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36976_37537,(0),null);
var __37539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36976_37537,(1),null);
var keys_37540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37494,actual_type_37538,f_37504], null);
var canonical_f_37541 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37493),keys_37540);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37493,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37540], 0));

if(cljs.core.truth_(elem_37493.removeEventListener)){
elem_37493.removeEventListener(cljs.core.name(actual_type_37538),canonical_f_37541);
} else {
elem_37493.detachEvent(cljs.core.name(actual_type_37538),canonical_f_37541);
}


var G__37545 = cljs.core.next(seq__36876_37528__$1);
var G__37546 = null;
var G__37547 = (0);
var G__37548 = (0);
seq__36876_37507 = G__37545;
chunk__36878_37508 = G__37546;
count__36879_37509 = G__37547;
i__36880_37510 = G__37548;
continue;
}
} else {
}
}
break;
}

var G__37552 = seq__36866_37498;
var G__37553 = chunk__36873_37499;
var G__37554 = count__36874_37500;
var G__37555 = (i__36875_37501 + (1));
seq__36866_37498 = G__37552;
chunk__36873_37499 = G__37553;
count__36874_37500 = G__37554;
i__36875_37501 = G__37555;
continue;
} else {
var temp__5735__auto___37556 = cljs.core.seq(seq__36866_37498);
if(temp__5735__auto___37556){
var seq__36866_37557__$1 = temp__5735__auto___37556;
if(cljs.core.chunked_seq_QMARK_(seq__36866_37557__$1)){
var c__4609__auto___37559 = cljs.core.chunk_first(seq__36866_37557__$1);
var G__37560 = cljs.core.chunk_rest(seq__36866_37557__$1);
var G__37561 = c__4609__auto___37559;
var G__37562 = cljs.core.count(c__4609__auto___37559);
var G__37563 = (0);
seq__36866_37498 = G__37560;
chunk__36873_37499 = G__37561;
count__36874_37500 = G__37562;
i__36875_37501 = G__37563;
continue;
} else {
var vec__36979_37565 = cljs.core.first(seq__36866_37557__$1);
var orig_type_37566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36979_37565,(0),null);
var f_37567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36979_37565,(1),null);
var seq__36867_37568 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37566,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37566,cljs.core.identity])));
var chunk__36869_37569 = null;
var count__36870_37570 = (0);
var i__36871_37571 = (0);
while(true){
if((i__36871_37571 < count__36870_37570)){
var vec__36990_37593 = chunk__36869_37569.cljs$core$IIndexed$_nth$arity$2(null,i__36871_37571);
var actual_type_37594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36990_37593,(0),null);
var __37595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36990_37593,(1),null);
var keys_37597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37494,actual_type_37594,f_37567], null);
var canonical_f_37598 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37493),keys_37597);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37493,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37597], 0));

if(cljs.core.truth_(elem_37493.removeEventListener)){
elem_37493.removeEventListener(cljs.core.name(actual_type_37594),canonical_f_37598);
} else {
elem_37493.detachEvent(cljs.core.name(actual_type_37594),canonical_f_37598);
}


var G__37601 = seq__36867_37568;
var G__37602 = chunk__36869_37569;
var G__37603 = count__36870_37570;
var G__37604 = (i__36871_37571 + (1));
seq__36867_37568 = G__37601;
chunk__36869_37569 = G__37602;
count__36870_37570 = G__37603;
i__36871_37571 = G__37604;
continue;
} else {
var temp__5735__auto___37605__$1 = cljs.core.seq(seq__36867_37568);
if(temp__5735__auto___37605__$1){
var seq__36867_37606__$1 = temp__5735__auto___37605__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36867_37606__$1)){
var c__4609__auto___37607 = cljs.core.chunk_first(seq__36867_37606__$1);
var G__37608 = cljs.core.chunk_rest(seq__36867_37606__$1);
var G__37609 = c__4609__auto___37607;
var G__37610 = cljs.core.count(c__4609__auto___37607);
var G__37611 = (0);
seq__36867_37568 = G__37608;
chunk__36869_37569 = G__37609;
count__36870_37570 = G__37610;
i__36871_37571 = G__37611;
continue;
} else {
var vec__36993_37614 = cljs.core.first(seq__36867_37606__$1);
var actual_type_37615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37614,(0),null);
var __37616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37614,(1),null);
var keys_37624 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37494,actual_type_37615,f_37567], null);
var canonical_f_37625 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37493),keys_37624);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37493,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37624], 0));

if(cljs.core.truth_(elem_37493.removeEventListener)){
elem_37493.removeEventListener(cljs.core.name(actual_type_37615),canonical_f_37625);
} else {
elem_37493.detachEvent(cljs.core.name(actual_type_37615),canonical_f_37625);
}


var G__37635 = cljs.core.next(seq__36867_37606__$1);
var G__37636 = null;
var G__37637 = (0);
var G__37638 = (0);
seq__36867_37568 = G__37635;
chunk__36869_37569 = G__37636;
count__36870_37570 = G__37637;
i__36871_37571 = G__37638;
continue;
}
} else {
}
}
break;
}

var G__37640 = cljs.core.next(seq__36866_37557__$1);
var G__37641 = null;
var G__37642 = (0);
var G__37643 = (0);
seq__36866_37498 = G__37640;
chunk__36873_37499 = G__37641;
count__36874_37500 = G__37642;
i__36875_37501 = G__37643;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36859){
var G__36860 = cljs.core.first(seq36859);
var seq36859__$1 = cljs.core.next(seq36859);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36860,seq36859__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37648 = arguments.length;
var i__4790__auto___37649 = (0);
while(true){
if((i__4790__auto___37649 < len__4789__auto___37648)){
args__4795__auto__.push((arguments[i__4790__auto___37649]));

var G__37651 = (i__4790__auto___37649 + (1));
i__4790__auto___37649 = G__37651;
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

var vec__36998_37662 = dommy.core.elem_and_selector(elem_sel);
var elem_37663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36998_37662,(0),null);
var selector_37664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36998_37662,(1),null);
var seq__37001_37668 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__37002_37669 = null;
var count__37003_37670 = (0);
var i__37004_37671 = (0);
while(true){
if((i__37004_37671 < count__37003_37670)){
var vec__37011_37676 = chunk__37002_37669.cljs$core$IIndexed$_nth$arity$2(null,i__37004_37671);
var type_37678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011_37676,(0),null);
var f_37679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011_37676,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37678,((function (seq__37001_37668,chunk__37002_37669,count__37003_37670,i__37004_37671,vec__37011_37676,type_37678,f_37679,vec__36998_37662,elem_37663,selector_37664){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37678,dommy$core$this_fn], 0));

return (f_37679.cljs$core$IFn$_invoke$arity$1 ? f_37679.cljs$core$IFn$_invoke$arity$1(e) : f_37679.call(null,e));
});})(seq__37001_37668,chunk__37002_37669,count__37003_37670,i__37004_37671,vec__37011_37676,type_37678,f_37679,vec__36998_37662,elem_37663,selector_37664))
], 0));


var G__37693 = seq__37001_37668;
var G__37694 = chunk__37002_37669;
var G__37695 = count__37003_37670;
var G__37696 = (i__37004_37671 + (1));
seq__37001_37668 = G__37693;
chunk__37002_37669 = G__37694;
count__37003_37670 = G__37695;
i__37004_37671 = G__37696;
continue;
} else {
var temp__5735__auto___37700 = cljs.core.seq(seq__37001_37668);
if(temp__5735__auto___37700){
var seq__37001_37701__$1 = temp__5735__auto___37700;
if(cljs.core.chunked_seq_QMARK_(seq__37001_37701__$1)){
var c__4609__auto___37702 = cljs.core.chunk_first(seq__37001_37701__$1);
var G__37703 = cljs.core.chunk_rest(seq__37001_37701__$1);
var G__37704 = c__4609__auto___37702;
var G__37705 = cljs.core.count(c__4609__auto___37702);
var G__37706 = (0);
seq__37001_37668 = G__37703;
chunk__37002_37669 = G__37704;
count__37003_37670 = G__37705;
i__37004_37671 = G__37706;
continue;
} else {
var vec__37014_37707 = cljs.core.first(seq__37001_37701__$1);
var type_37708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014_37707,(0),null);
var f_37709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014_37707,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37708,((function (seq__37001_37668,chunk__37002_37669,count__37003_37670,i__37004_37671,vec__37014_37707,type_37708,f_37709,seq__37001_37701__$1,temp__5735__auto___37700,vec__36998_37662,elem_37663,selector_37664){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37708,dommy$core$this_fn], 0));

return (f_37709.cljs$core$IFn$_invoke$arity$1 ? f_37709.cljs$core$IFn$_invoke$arity$1(e) : f_37709.call(null,e));
});})(seq__37001_37668,chunk__37002_37669,count__37003_37670,i__37004_37671,vec__37014_37707,type_37708,f_37709,seq__37001_37701__$1,temp__5735__auto___37700,vec__36998_37662,elem_37663,selector_37664))
], 0));


var G__37713 = cljs.core.next(seq__37001_37701__$1);
var G__37714 = null;
var G__37715 = (0);
var G__37716 = (0);
seq__37001_37668 = G__37713;
chunk__37002_37669 = G__37714;
count__37003_37670 = G__37715;
i__37004_37671 = G__37716;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36996){
var G__36997 = cljs.core.first(seq36996);
var seq36996__$1 = cljs.core.next(seq36996);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36997,seq36996__$1);
}));


//# sourceMappingURL=dommy.core.js.map
