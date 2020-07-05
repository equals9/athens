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
var len__4789__auto___37021 = arguments.length;
var i__4790__auto___37022 = (0);
while(true){
if((i__4790__auto___37022 < len__4789__auto___37021)){
args__4795__auto__.push((arguments[i__4790__auto___37022]));

var G__37024 = (i__4790__auto___37022 + (1));
i__4790__auto___37022 = G__37024;
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
var seq__36583_37025 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36584_37026 = null;
var count__36585_37027 = (0);
var i__36586_37028 = (0);
while(true){
if((i__36586_37028 < count__36585_37027)){
var vec__36593_37029 = chunk__36584_37026.cljs$core$IIndexed$_nth$arity$2(null,i__36586_37028);
var k_37030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36593_37029,(0),null);
var v_37031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36593_37029,(1),null);
style.setProperty(dommy.utils.as_str(k_37030),v_37031);


var G__37032 = seq__36583_37025;
var G__37033 = chunk__36584_37026;
var G__37034 = count__36585_37027;
var G__37035 = (i__36586_37028 + (1));
seq__36583_37025 = G__37032;
chunk__36584_37026 = G__37033;
count__36585_37027 = G__37034;
i__36586_37028 = G__37035;
continue;
} else {
var temp__5735__auto___37036 = cljs.core.seq(seq__36583_37025);
if(temp__5735__auto___37036){
var seq__36583_37037__$1 = temp__5735__auto___37036;
if(cljs.core.chunked_seq_QMARK_(seq__36583_37037__$1)){
var c__4609__auto___37038 = cljs.core.chunk_first(seq__36583_37037__$1);
var G__37039 = cljs.core.chunk_rest(seq__36583_37037__$1);
var G__37040 = c__4609__auto___37038;
var G__37041 = cljs.core.count(c__4609__auto___37038);
var G__37042 = (0);
seq__36583_37025 = G__37039;
chunk__36584_37026 = G__37040;
count__36585_37027 = G__37041;
i__36586_37028 = G__37042;
continue;
} else {
var vec__36596_37043 = cljs.core.first(seq__36583_37037__$1);
var k_37044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_37043,(0),null);
var v_37045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_37043,(1),null);
style.setProperty(dommy.utils.as_str(k_37044),v_37045);


var G__37046 = cljs.core.next(seq__36583_37037__$1);
var G__37047 = null;
var G__37048 = (0);
var G__37049 = (0);
seq__36583_37025 = G__37046;
chunk__36584_37026 = G__37047;
count__36585_37027 = G__37048;
i__36586_37028 = G__37049;
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
var len__4789__auto___37050 = arguments.length;
var i__4790__auto___37052 = (0);
while(true){
if((i__4790__auto___37052 < len__4789__auto___37050)){
args__4795__auto__.push((arguments[i__4790__auto___37052]));

var G__37054 = (i__4790__auto___37052 + (1));
i__4790__auto___37052 = G__37054;
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
var seq__36601_37055 = cljs.core.seq(keywords);
var chunk__36602_37056 = null;
var count__36603_37057 = (0);
var i__36604_37058 = (0);
while(true){
if((i__36604_37058 < count__36603_37057)){
var kw_37059 = chunk__36602_37056.cljs$core$IIndexed$_nth$arity$2(null,i__36604_37058);
style.removeProperty(dommy.utils.as_str(kw_37059));


var G__37060 = seq__36601_37055;
var G__37061 = chunk__36602_37056;
var G__37062 = count__36603_37057;
var G__37063 = (i__36604_37058 + (1));
seq__36601_37055 = G__37060;
chunk__36602_37056 = G__37061;
count__36603_37057 = G__37062;
i__36604_37058 = G__37063;
continue;
} else {
var temp__5735__auto___37064 = cljs.core.seq(seq__36601_37055);
if(temp__5735__auto___37064){
var seq__36601_37065__$1 = temp__5735__auto___37064;
if(cljs.core.chunked_seq_QMARK_(seq__36601_37065__$1)){
var c__4609__auto___37066 = cljs.core.chunk_first(seq__36601_37065__$1);
var G__37067 = cljs.core.chunk_rest(seq__36601_37065__$1);
var G__37068 = c__4609__auto___37066;
var G__37069 = cljs.core.count(c__4609__auto___37066);
var G__37070 = (0);
seq__36601_37055 = G__37067;
chunk__36602_37056 = G__37068;
count__36603_37057 = G__37069;
i__36604_37058 = G__37070;
continue;
} else {
var kw_37071 = cljs.core.first(seq__36601_37065__$1);
style.removeProperty(dommy.utils.as_str(kw_37071));


var G__37072 = cljs.core.next(seq__36601_37065__$1);
var G__37073 = null;
var G__37074 = (0);
var G__37075 = (0);
seq__36601_37055 = G__37072;
chunk__36602_37056 = G__37073;
count__36603_37057 = G__37074;
i__36604_37058 = G__37075;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36599){
var G__36600 = cljs.core.first(seq36599);
var seq36599__$1 = cljs.core.next(seq36599);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36600,seq36599__$1);
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
var seq__36654_37150__$1 = temp__5735__auto___37149;
if(cljs.core.chunked_seq_QMARK_(seq__36654_37150__$1)){
var c__4609__auto___37151 = cljs.core.chunk_first(seq__36654_37150__$1);
var G__37152 = cljs.core.chunk_rest(seq__36654_37150__$1);
var G__37153 = c__4609__auto___37151;
var G__37154 = cljs.core.count(c__4609__auto___37151);
var G__37155 = (0);
seq__36654_37140 = G__37152;
chunk__36655_37141 = G__37153;
count__36656_37142 = G__37154;
i__36657_37143 = G__37155;
continue;
} else {
var k_37156__$1 = cljs.core.first(seq__36654_37150__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37156__$1);


var G__37157 = cljs.core.next(seq__36654_37150__$1);
var G__37158 = null;
var G__37159 = (0);
var G__37160 = (0);
seq__36654_37140 = G__37157;
chunk__36655_37141 = G__37158;
count__36656_37142 = G__37159;
i__36657_37143 = G__37160;
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
var len__4789__auto___37164 = arguments.length;
var i__4790__auto___37165 = (0);
while(true){
if((i__4790__auto___37165 < len__4789__auto___37164)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37165]));

var G__37167 = (i__4790__auto___37165 + (1));
i__4790__auto___37165 = G__37167;
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
var temp__5733__auto___37168 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37168)){
var class_list_37169 = temp__5733__auto___37168;
var seq__36665_37170 = cljs.core.seq(classes__$1);
var chunk__36666_37171 = null;
var count__36667_37172 = (0);
var i__36668_37173 = (0);
while(true){
if((i__36668_37173 < count__36667_37172)){
var c_37174 = chunk__36666_37171.cljs$core$IIndexed$_nth$arity$2(null,i__36668_37173);
class_list_37169.add(c_37174);


var G__37175 = seq__36665_37170;
var G__37176 = chunk__36666_37171;
var G__37177 = count__36667_37172;
var G__37178 = (i__36668_37173 + (1));
seq__36665_37170 = G__37175;
chunk__36666_37171 = G__37176;
count__36667_37172 = G__37177;
i__36668_37173 = G__37178;
continue;
} else {
var temp__5735__auto___37179 = cljs.core.seq(seq__36665_37170);
if(temp__5735__auto___37179){
var seq__36665_37180__$1 = temp__5735__auto___37179;
if(cljs.core.chunked_seq_QMARK_(seq__36665_37180__$1)){
var c__4609__auto___37181 = cljs.core.chunk_first(seq__36665_37180__$1);
var G__37182 = cljs.core.chunk_rest(seq__36665_37180__$1);
var G__37183 = c__4609__auto___37181;
var G__37184 = cljs.core.count(c__4609__auto___37181);
var G__37185 = (0);
seq__36665_37170 = G__37182;
chunk__36666_37171 = G__37183;
count__36667_37172 = G__37184;
i__36668_37173 = G__37185;
continue;
} else {
var c_37187 = cljs.core.first(seq__36665_37180__$1);
class_list_37169.add(c_37187);


var G__37188 = cljs.core.next(seq__36665_37180__$1);
var G__37189 = null;
var G__37190 = (0);
var G__37191 = (0);
seq__36665_37170 = G__37188;
chunk__36666_37171 = G__37189;
count__36667_37172 = G__37190;
i__36668_37173 = G__37191;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36669_37192 = cljs.core.seq(classes__$1);
var chunk__36670_37193 = null;
var count__36671_37194 = (0);
var i__36672_37195 = (0);
while(true){
if((i__36672_37195 < count__36671_37194)){
var c_37197 = chunk__36670_37193.cljs$core$IIndexed$_nth$arity$2(null,i__36672_37195);
var class_name_37199 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37199,c_37197))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37199 === ""))?c_37197:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37199)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37197)].join('')));
}


var G__37201 = seq__36669_37192;
var G__37202 = chunk__36670_37193;
var G__37203 = count__36671_37194;
var G__37204 = (i__36672_37195 + (1));
seq__36669_37192 = G__37201;
chunk__36670_37193 = G__37202;
count__36671_37194 = G__37203;
i__36672_37195 = G__37204;
continue;
} else {
var temp__5735__auto___37205 = cljs.core.seq(seq__36669_37192);
if(temp__5735__auto___37205){
var seq__36669_37206__$1 = temp__5735__auto___37205;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37206__$1)){
var c__4609__auto___37207 = cljs.core.chunk_first(seq__36669_37206__$1);
var G__37208 = cljs.core.chunk_rest(seq__36669_37206__$1);
var G__37209 = c__4609__auto___37207;
var G__37210 = cljs.core.count(c__4609__auto___37207);
var G__37211 = (0);
seq__36669_37192 = G__37208;
chunk__36670_37193 = G__37209;
count__36671_37194 = G__37210;
i__36672_37195 = G__37211;
continue;
} else {
var c_37212 = cljs.core.first(seq__36669_37206__$1);
var class_name_37213 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37213,c_37212))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37213 === ""))?c_37212:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37213)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37212)].join('')));
}


var G__37215 = cljs.core.next(seq__36669_37206__$1);
var G__37216 = null;
var G__37217 = (0);
var G__37218 = (0);
seq__36669_37192 = G__37215;
chunk__36670_37193 = G__37216;
count__36671_37194 = G__37217;
i__36672_37195 = G__37218;
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
var seq__36673_37223 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37224 = null;
var count__36675_37225 = (0);
var i__36676_37226 = (0);
while(true){
if((i__36676_37226 < count__36675_37225)){
var c_37227 = chunk__36674_37224.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37226);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37227);


var G__37228 = seq__36673_37223;
var G__37229 = chunk__36674_37224;
var G__37230 = count__36675_37225;
var G__37231 = (i__36676_37226 + (1));
seq__36673_37223 = G__37228;
chunk__36674_37224 = G__37229;
count__36675_37225 = G__37230;
i__36676_37226 = G__37231;
continue;
} else {
var temp__5735__auto___37232 = cljs.core.seq(seq__36673_37223);
if(temp__5735__auto___37232){
var seq__36673_37233__$1 = temp__5735__auto___37232;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37233__$1)){
var c__4609__auto___37234 = cljs.core.chunk_first(seq__36673_37233__$1);
var G__37236 = cljs.core.chunk_rest(seq__36673_37233__$1);
var G__37237 = c__4609__auto___37234;
var G__37238 = cljs.core.count(c__4609__auto___37234);
var G__37239 = (0);
seq__36673_37223 = G__37236;
chunk__36674_37224 = G__37237;
count__36675_37225 = G__37238;
i__36676_37226 = G__37239;
continue;
} else {
var c_37241 = cljs.core.first(seq__36673_37233__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37241);


var G__37242 = cljs.core.next(seq__36673_37233__$1);
var G__37243 = null;
var G__37244 = (0);
var G__37245 = (0);
seq__36673_37223 = G__37242;
chunk__36674_37224 = G__37243;
count__36675_37225 = G__37244;
i__36676_37226 = G__37245;
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
var len__4789__auto___37248 = arguments.length;
var i__4790__auto___37250 = (0);
while(true){
if((i__4790__auto___37250 < len__4789__auto___37248)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37250]));

var G__37251 = (i__4790__auto___37250 + (1));
i__4790__auto___37250 = G__37251;
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
var temp__5733__auto___37254 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37254)){
var class_list_37255 = temp__5733__auto___37254;
class_list_37255.remove(c__$1);
} else {
var class_name_37256 = dommy.core.class$(elem);
var new_class_name_37257 = dommy.utils.remove_class_str(class_name_37256,c__$1);
if((class_name_37256 === new_class_name_37257)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37257);
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


var G__37263 = seq__36682;
var G__37264 = chunk__36683;
var G__37265 = count__36684;
var G__37266 = (i__36685 + (1));
seq__36682 = G__37263;
chunk__36683 = G__37264;
count__36684 = G__37265;
i__36685 = G__37266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36682);
if(temp__5735__auto__){
var seq__36682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36682__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36682__$1);
var G__37267 = cljs.core.chunk_rest(seq__36682__$1);
var G__37268 = c__4609__auto__;
var G__37269 = cljs.core.count(c__4609__auto__);
var G__37270 = (0);
seq__36682 = G__37267;
chunk__36683 = G__37268;
count__36684 = G__37269;
i__36685 = G__37270;
continue;
} else {
var c = cljs.core.first(seq__36682__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37274 = cljs.core.next(seq__36682__$1);
var G__37275 = null;
var G__37276 = (0);
var G__37277 = (0);
seq__36682 = G__37274;
chunk__36683 = G__37275;
count__36684 = G__37276;
i__36685 = G__37277;
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
var G__36688 = arguments.length;
switch (G__36688) {
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
var G__36690 = arguments.length;
switch (G__36690) {
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
var len__4789__auto___37338 = arguments.length;
var i__4790__auto___37339 = (0);
while(true){
if((i__4790__auto___37339 < len__4789__auto___37338)){
args__4795__auto__.push((arguments[i__4790__auto___37339]));

var G__37340 = (i__4790__auto___37339 + (1));
i__4790__auto___37339 = G__37340;
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
var len__4789__auto___37343 = arguments.length;
var i__4790__auto___37344 = (0);
while(true){
if((i__4790__auto___37344 < len__4789__auto___37343)){
args__4795__auto__.push((arguments[i__4790__auto___37344]));

var G__37345 = (i__4790__auto___37344 + (1));
i__4790__auto___37344 = G__37345;
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

var vec__36731_37349 = dommy.core.elem_and_selector(elem_sel);
var elem_37350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_37349,(0),null);
var selector_37351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_37349,(1),null);
var seq__36734_37353 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36741_37354 = null;
var count__36742_37355 = (0);
var i__36743_37356 = (0);
while(true){
if((i__36743_37356 < count__36742_37355)){
var vec__36799_37357 = chunk__36741_37354.cljs$core$IIndexed$_nth$arity$2(null,i__36743_37356);
var orig_type_37358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799_37357,(0),null);
var f_37359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799_37357,(1),null);
var seq__36744_37360 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37358,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37358,cljs.core.identity])));
var chunk__36746_37361 = null;
var count__36747_37362 = (0);
var i__36748_37363 = (0);
while(true){
if((i__36748_37363 < count__36747_37362)){
var vec__36812_37364 = chunk__36746_37361.cljs$core$IIndexed$_nth$arity$2(null,i__36748_37363);
var actual_type_37365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812_37364,(0),null);
var factory_37366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812_37364,(1),null);
var canonical_f_37367 = (function (){var G__36816 = (factory_37366.cljs$core$IFn$_invoke$arity$1 ? factory_37366.cljs$core$IFn$_invoke$arity$1(f_37359) : factory_37366.call(null,f_37359));
var fexpr__36815 = (cljs.core.truth_(selector_37351)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37350,selector_37351):cljs.core.identity);
return (fexpr__36815.cljs$core$IFn$_invoke$arity$1 ? fexpr__36815.cljs$core$IFn$_invoke$arity$1(G__36816) : fexpr__36815.call(null,G__36816));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37350,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37351,actual_type_37365,f_37359], null),canonical_f_37367], 0));

if(cljs.core.truth_(elem_37350.addEventListener)){
elem_37350.addEventListener(cljs.core.name(actual_type_37365),canonical_f_37367);
} else {
elem_37350.attachEvent(cljs.core.name(actual_type_37365),canonical_f_37367);
}


var G__37375 = seq__36744_37360;
var G__37376 = chunk__36746_37361;
var G__37377 = count__36747_37362;
var G__37378 = (i__36748_37363 + (1));
seq__36744_37360 = G__37375;
chunk__36746_37361 = G__37376;
count__36747_37362 = G__37377;
i__36748_37363 = G__37378;
continue;
} else {
var temp__5735__auto___37379 = cljs.core.seq(seq__36744_37360);
if(temp__5735__auto___37379){
var seq__36744_37380__$1 = temp__5735__auto___37379;
if(cljs.core.chunked_seq_QMARK_(seq__36744_37380__$1)){
var c__4609__auto___37381 = cljs.core.chunk_first(seq__36744_37380__$1);
var G__37382 = cljs.core.chunk_rest(seq__36744_37380__$1);
var G__37383 = c__4609__auto___37381;
var G__37384 = cljs.core.count(c__4609__auto___37381);
var G__37385 = (0);
seq__36744_37360 = G__37382;
chunk__36746_37361 = G__37383;
count__36747_37362 = G__37384;
i__36748_37363 = G__37385;
continue;
} else {
var vec__36817_37386 = cljs.core.first(seq__36744_37380__$1);
var actual_type_37387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36817_37386,(0),null);
var factory_37388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36817_37386,(1),null);
var canonical_f_37394 = (function (){var G__36821 = (factory_37388.cljs$core$IFn$_invoke$arity$1 ? factory_37388.cljs$core$IFn$_invoke$arity$1(f_37359) : factory_37388.call(null,f_37359));
var fexpr__36820 = (cljs.core.truth_(selector_37351)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37350,selector_37351):cljs.core.identity);
return (fexpr__36820.cljs$core$IFn$_invoke$arity$1 ? fexpr__36820.cljs$core$IFn$_invoke$arity$1(G__36821) : fexpr__36820.call(null,G__36821));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37350,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37351,actual_type_37387,f_37359], null),canonical_f_37394], 0));

if(cljs.core.truth_(elem_37350.addEventListener)){
elem_37350.addEventListener(cljs.core.name(actual_type_37387),canonical_f_37394);
} else {
elem_37350.attachEvent(cljs.core.name(actual_type_37387),canonical_f_37394);
}


var G__37399 = cljs.core.next(seq__36744_37380__$1);
var G__37400 = null;
var G__37401 = (0);
var G__37402 = (0);
seq__36744_37360 = G__37399;
chunk__36746_37361 = G__37400;
count__36747_37362 = G__37401;
i__36748_37363 = G__37402;
continue;
}
} else {
}
}
break;
}

var G__37405 = seq__36734_37353;
var G__37406 = chunk__36741_37354;
var G__37407 = count__36742_37355;
var G__37408 = (i__36743_37356 + (1));
seq__36734_37353 = G__37405;
chunk__36741_37354 = G__37406;
count__36742_37355 = G__37407;
i__36743_37356 = G__37408;
continue;
} else {
var temp__5735__auto___37409 = cljs.core.seq(seq__36734_37353);
if(temp__5735__auto___37409){
var seq__36734_37410__$1 = temp__5735__auto___37409;
if(cljs.core.chunked_seq_QMARK_(seq__36734_37410__$1)){
var c__4609__auto___37411 = cljs.core.chunk_first(seq__36734_37410__$1);
var G__37412 = cljs.core.chunk_rest(seq__36734_37410__$1);
var G__37413 = c__4609__auto___37411;
var G__37414 = cljs.core.count(c__4609__auto___37411);
var G__37415 = (0);
seq__36734_37353 = G__37412;
chunk__36741_37354 = G__37413;
count__36742_37355 = G__37414;
i__36743_37356 = G__37415;
continue;
} else {
var vec__36822_37416 = cljs.core.first(seq__36734_37410__$1);
var orig_type_37417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36822_37416,(0),null);
var f_37418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36822_37416,(1),null);
var seq__36735_37424 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37417,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37417,cljs.core.identity])));
var chunk__36737_37425 = null;
var count__36738_37426 = (0);
var i__36739_37427 = (0);
while(true){
if((i__36739_37427 < count__36738_37426)){
var vec__36839_37429 = chunk__36737_37425.cljs$core$IIndexed$_nth$arity$2(null,i__36739_37427);
var actual_type_37430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36839_37429,(0),null);
var factory_37431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36839_37429,(1),null);
var canonical_f_37433 = (function (){var G__36843 = (factory_37431.cljs$core$IFn$_invoke$arity$1 ? factory_37431.cljs$core$IFn$_invoke$arity$1(f_37418) : factory_37431.call(null,f_37418));
var fexpr__36842 = (cljs.core.truth_(selector_37351)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37350,selector_37351):cljs.core.identity);
return (fexpr__36842.cljs$core$IFn$_invoke$arity$1 ? fexpr__36842.cljs$core$IFn$_invoke$arity$1(G__36843) : fexpr__36842.call(null,G__36843));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37350,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37351,actual_type_37430,f_37418], null),canonical_f_37433], 0));

if(cljs.core.truth_(elem_37350.addEventListener)){
elem_37350.addEventListener(cljs.core.name(actual_type_37430),canonical_f_37433);
} else {
elem_37350.attachEvent(cljs.core.name(actual_type_37430),canonical_f_37433);
}


var G__37439 = seq__36735_37424;
var G__37440 = chunk__36737_37425;
var G__37441 = count__36738_37426;
var G__37442 = (i__36739_37427 + (1));
seq__36735_37424 = G__37439;
chunk__36737_37425 = G__37440;
count__36738_37426 = G__37441;
i__36739_37427 = G__37442;
continue;
} else {
var temp__5735__auto___37443__$1 = cljs.core.seq(seq__36735_37424);
if(temp__5735__auto___37443__$1){
var seq__36735_37444__$1 = temp__5735__auto___37443__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36735_37444__$1)){
var c__4609__auto___37445 = cljs.core.chunk_first(seq__36735_37444__$1);
var G__37448 = cljs.core.chunk_rest(seq__36735_37444__$1);
var G__37449 = c__4609__auto___37445;
var G__37450 = cljs.core.count(c__4609__auto___37445);
var G__37451 = (0);
seq__36735_37424 = G__37448;
chunk__36737_37425 = G__37449;
count__36738_37426 = G__37450;
i__36739_37427 = G__37451;
continue;
} else {
var vec__36844_37454 = cljs.core.first(seq__36735_37444__$1);
var actual_type_37455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844_37454,(0),null);
var factory_37456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844_37454,(1),null);
var canonical_f_37457 = (function (){var G__36848 = (factory_37456.cljs$core$IFn$_invoke$arity$1 ? factory_37456.cljs$core$IFn$_invoke$arity$1(f_37418) : factory_37456.call(null,f_37418));
var fexpr__36847 = (cljs.core.truth_(selector_37351)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37350,selector_37351):cljs.core.identity);
return (fexpr__36847.cljs$core$IFn$_invoke$arity$1 ? fexpr__36847.cljs$core$IFn$_invoke$arity$1(G__36848) : fexpr__36847.call(null,G__36848));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37350,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37351,actual_type_37455,f_37418], null),canonical_f_37457], 0));

if(cljs.core.truth_(elem_37350.addEventListener)){
elem_37350.addEventListener(cljs.core.name(actual_type_37455),canonical_f_37457);
} else {
elem_37350.attachEvent(cljs.core.name(actual_type_37455),canonical_f_37457);
}


var G__37463 = cljs.core.next(seq__36735_37444__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__36735_37424 = G__37463;
chunk__36737_37425 = G__37464;
count__36738_37426 = G__37465;
i__36739_37427 = G__37466;
continue;
}
} else {
}
}
break;
}

var G__37469 = cljs.core.next(seq__36734_37410__$1);
var G__37470 = null;
var G__37471 = (0);
var G__37472 = (0);
seq__36734_37353 = G__37469;
chunk__36741_37354 = G__37470;
count__36742_37355 = G__37471;
i__36743_37356 = G__37472;
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
var len__4789__auto___37477 = arguments.length;
var i__4790__auto___37478 = (0);
while(true){
if((i__4790__auto___37478 < len__4789__auto___37477)){
args__4795__auto__.push((arguments[i__4790__auto___37478]));

var G__37479 = (i__4790__auto___37478 + (1));
i__4790__auto___37478 = G__37479;
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

var vec__36858_37484 = dommy.core.elem_and_selector(elem_sel);
var elem_37485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858_37484,(0),null);
var selector_37486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858_37484,(1),null);
var seq__36861_37492 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36868_37493 = null;
var count__36869_37494 = (0);
var i__36870_37495 = (0);
while(true){
if((i__36870_37495 < count__36869_37494)){
var vec__36912_37500 = chunk__36868_37493.cljs$core$IIndexed$_nth$arity$2(null,i__36870_37495);
var orig_type_37501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912_37500,(0),null);
var f_37502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912_37500,(1),null);
var seq__36871_37505 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37501,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37501,cljs.core.identity])));
var chunk__36873_37506 = null;
var count__36874_37507 = (0);
var i__36875_37508 = (0);
while(true){
if((i__36875_37508 < count__36874_37507)){
var vec__36921_37511 = chunk__36873_37506.cljs$core$IIndexed$_nth$arity$2(null,i__36875_37508);
var actual_type_37512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36921_37511,(0),null);
var __37513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36921_37511,(1),null);
var keys_37515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37486,actual_type_37512,f_37502], null);
var canonical_f_37516 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37485),keys_37515);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37485,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37515], 0));

if(cljs.core.truth_(elem_37485.removeEventListener)){
elem_37485.removeEventListener(cljs.core.name(actual_type_37512),canonical_f_37516);
} else {
elem_37485.detachEvent(cljs.core.name(actual_type_37512),canonical_f_37516);
}


var G__37520 = seq__36871_37505;
var G__37521 = chunk__36873_37506;
var G__37522 = count__36874_37507;
var G__37523 = (i__36875_37508 + (1));
seq__36871_37505 = G__37520;
chunk__36873_37506 = G__37521;
count__36874_37507 = G__37522;
i__36875_37508 = G__37523;
continue;
} else {
var temp__5735__auto___37524 = cljs.core.seq(seq__36871_37505);
if(temp__5735__auto___37524){
var seq__36871_37525__$1 = temp__5735__auto___37524;
if(cljs.core.chunked_seq_QMARK_(seq__36871_37525__$1)){
var c__4609__auto___37528 = cljs.core.chunk_first(seq__36871_37525__$1);
var G__37530 = cljs.core.chunk_rest(seq__36871_37525__$1);
var G__37531 = c__4609__auto___37528;
var G__37532 = cljs.core.count(c__4609__auto___37528);
var G__37533 = (0);
seq__36871_37505 = G__37530;
chunk__36873_37506 = G__37531;
count__36874_37507 = G__37532;
i__36875_37508 = G__37533;
continue;
} else {
var vec__36927_37534 = cljs.core.first(seq__36871_37525__$1);
var actual_type_37535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927_37534,(0),null);
var __37536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927_37534,(1),null);
var keys_37540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37486,actual_type_37535,f_37502], null);
var canonical_f_37541 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37485),keys_37540);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37485,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37540], 0));

if(cljs.core.truth_(elem_37485.removeEventListener)){
elem_37485.removeEventListener(cljs.core.name(actual_type_37535),canonical_f_37541);
} else {
elem_37485.detachEvent(cljs.core.name(actual_type_37535),canonical_f_37541);
}


var G__37545 = cljs.core.next(seq__36871_37525__$1);
var G__37546 = null;
var G__37547 = (0);
var G__37548 = (0);
seq__36871_37505 = G__37545;
chunk__36873_37506 = G__37546;
count__36874_37507 = G__37547;
i__36875_37508 = G__37548;
continue;
}
} else {
}
}
break;
}

var G__37549 = seq__36861_37492;
var G__37550 = chunk__36868_37493;
var G__37551 = count__36869_37494;
var G__37552 = (i__36870_37495 + (1));
seq__36861_37492 = G__37549;
chunk__36868_37493 = G__37550;
count__36869_37494 = G__37551;
i__36870_37495 = G__37552;
continue;
} else {
var temp__5735__auto___37554 = cljs.core.seq(seq__36861_37492);
if(temp__5735__auto___37554){
var seq__36861_37557__$1 = temp__5735__auto___37554;
if(cljs.core.chunked_seq_QMARK_(seq__36861_37557__$1)){
var c__4609__auto___37558 = cljs.core.chunk_first(seq__36861_37557__$1);
var G__37559 = cljs.core.chunk_rest(seq__36861_37557__$1);
var G__37560 = c__4609__auto___37558;
var G__37561 = cljs.core.count(c__4609__auto___37558);
var G__37562 = (0);
seq__36861_37492 = G__37559;
chunk__36868_37493 = G__37560;
count__36869_37494 = G__37561;
i__36870_37495 = G__37562;
continue;
} else {
var vec__36931_37564 = cljs.core.first(seq__36861_37557__$1);
var orig_type_37565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931_37564,(0),null);
var f_37566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931_37564,(1),null);
var seq__36862_37568 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37565,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37565,cljs.core.identity])));
var chunk__36864_37569 = null;
var count__36865_37570 = (0);
var i__36866_37571 = (0);
while(true){
if((i__36866_37571 < count__36865_37570)){
var vec__36963_37572 = chunk__36864_37569.cljs$core$IIndexed$_nth$arity$2(null,i__36866_37571);
var actual_type_37573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963_37572,(0),null);
var __37574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963_37572,(1),null);
var keys_37596 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37486,actual_type_37573,f_37566], null);
var canonical_f_37597 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37485),keys_37596);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37485,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37596], 0));

if(cljs.core.truth_(elem_37485.removeEventListener)){
elem_37485.removeEventListener(cljs.core.name(actual_type_37573),canonical_f_37597);
} else {
elem_37485.detachEvent(cljs.core.name(actual_type_37573),canonical_f_37597);
}


var G__37599 = seq__36862_37568;
var G__37600 = chunk__36864_37569;
var G__37601 = count__36865_37570;
var G__37602 = (i__36866_37571 + (1));
seq__36862_37568 = G__37599;
chunk__36864_37569 = G__37600;
count__36865_37570 = G__37601;
i__36866_37571 = G__37602;
continue;
} else {
var temp__5735__auto___37604__$1 = cljs.core.seq(seq__36862_37568);
if(temp__5735__auto___37604__$1){
var seq__36862_37605__$1 = temp__5735__auto___37604__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36862_37605__$1)){
var c__4609__auto___37607 = cljs.core.chunk_first(seq__36862_37605__$1);
var G__37608 = cljs.core.chunk_rest(seq__36862_37605__$1);
var G__37609 = c__4609__auto___37607;
var G__37610 = cljs.core.count(c__4609__auto___37607);
var G__37611 = (0);
seq__36862_37568 = G__37608;
chunk__36864_37569 = G__37609;
count__36865_37570 = G__37610;
i__36866_37571 = G__37611;
continue;
} else {
var vec__36966_37612 = cljs.core.first(seq__36862_37605__$1);
var actual_type_37613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966_37612,(0),null);
var __37614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966_37612,(1),null);
var keys_37615 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37486,actual_type_37613,f_37566], null);
var canonical_f_37616 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37485),keys_37615);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37485,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37615], 0));

if(cljs.core.truth_(elem_37485.removeEventListener)){
elem_37485.removeEventListener(cljs.core.name(actual_type_37613),canonical_f_37616);
} else {
elem_37485.detachEvent(cljs.core.name(actual_type_37613),canonical_f_37616);
}


var G__37626 = cljs.core.next(seq__36862_37605__$1);
var G__37627 = null;
var G__37628 = (0);
var G__37629 = (0);
seq__36862_37568 = G__37626;
chunk__36864_37569 = G__37627;
count__36865_37570 = G__37628;
i__36866_37571 = G__37629;
continue;
}
} else {
}
}
break;
}

var G__37631 = cljs.core.next(seq__36861_37557__$1);
var G__37632 = null;
var G__37633 = (0);
var G__37634 = (0);
seq__36861_37492 = G__37631;
chunk__36868_37493 = G__37632;
count__36869_37494 = G__37633;
i__36870_37495 = G__37634;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36852){
var G__36853 = cljs.core.first(seq36852);
var seq36852__$1 = cljs.core.next(seq36852);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36853,seq36852__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37644 = arguments.length;
var i__4790__auto___37645 = (0);
while(true){
if((i__4790__auto___37645 < len__4789__auto___37644)){
args__4795__auto__.push((arguments[i__4790__auto___37645]));

var G__37648 = (i__4790__auto___37645 + (1));
i__4790__auto___37645 = G__37648;
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

var vec__36993_37651 = dommy.core.elem_and_selector(elem_sel);
var elem_37652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37651,(0),null);
var selector_37653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37651,(1),null);
var seq__36996_37656 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36997_37657 = null;
var count__36998_37658 = (0);
var i__36999_37659 = (0);
while(true){
if((i__36999_37659 < count__36998_37658)){
var vec__37006_37664 = chunk__36997_37657.cljs$core$IIndexed$_nth$arity$2(null,i__36999_37659);
var type_37665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37006_37664,(0),null);
var f_37666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37006_37664,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37665,((function (seq__36996_37656,chunk__36997_37657,count__36998_37658,i__36999_37659,vec__37006_37664,type_37665,f_37666,vec__36993_37651,elem_37652,selector_37653){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37665,dommy$core$this_fn], 0));

return (f_37666.cljs$core$IFn$_invoke$arity$1 ? f_37666.cljs$core$IFn$_invoke$arity$1(e) : f_37666.call(null,e));
});})(seq__36996_37656,chunk__36997_37657,count__36998_37658,i__36999_37659,vec__37006_37664,type_37665,f_37666,vec__36993_37651,elem_37652,selector_37653))
], 0));


var G__37677 = seq__36996_37656;
var G__37678 = chunk__36997_37657;
var G__37679 = count__36998_37658;
var G__37680 = (i__36999_37659 + (1));
seq__36996_37656 = G__37677;
chunk__36997_37657 = G__37678;
count__36998_37658 = G__37679;
i__36999_37659 = G__37680;
continue;
} else {
var temp__5735__auto___37683 = cljs.core.seq(seq__36996_37656);
if(temp__5735__auto___37683){
var seq__36996_37684__$1 = temp__5735__auto___37683;
if(cljs.core.chunked_seq_QMARK_(seq__36996_37684__$1)){
var c__4609__auto___37688 = cljs.core.chunk_first(seq__36996_37684__$1);
var G__37691 = cljs.core.chunk_rest(seq__36996_37684__$1);
var G__37692 = c__4609__auto___37688;
var G__37693 = cljs.core.count(c__4609__auto___37688);
var G__37694 = (0);
seq__36996_37656 = G__37691;
chunk__36997_37657 = G__37692;
count__36998_37658 = G__37693;
i__36999_37659 = G__37694;
continue;
} else {
var vec__37012_37696 = cljs.core.first(seq__36996_37684__$1);
var type_37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012_37696,(0),null);
var f_37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012_37696,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37697,((function (seq__36996_37656,chunk__36997_37657,count__36998_37658,i__36999_37659,vec__37012_37696,type_37697,f_37698,seq__36996_37684__$1,temp__5735__auto___37683,vec__36993_37651,elem_37652,selector_37653){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37697,dommy$core$this_fn], 0));

return (f_37698.cljs$core$IFn$_invoke$arity$1 ? f_37698.cljs$core$IFn$_invoke$arity$1(e) : f_37698.call(null,e));
});})(seq__36996_37656,chunk__36997_37657,count__36998_37658,i__36999_37659,vec__37012_37696,type_37697,f_37698,seq__36996_37684__$1,temp__5735__auto___37683,vec__36993_37651,elem_37652,selector_37653))
], 0));


var G__37710 = cljs.core.next(seq__36996_37684__$1);
var G__37711 = null;
var G__37712 = (0);
var G__37713 = (0);
seq__36996_37656 = G__37710;
chunk__36997_37657 = G__37711;
count__36998_37658 = G__37712;
i__36999_37659 = G__37713;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36979){
var G__36980 = cljs.core.first(seq36979);
var seq36979__$1 = cljs.core.next(seq36979);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36980,seq36979__$1);
}));


//# sourceMappingURL=dommy.core.js.map
