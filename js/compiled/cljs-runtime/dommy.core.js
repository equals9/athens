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
var len__4789__auto___37020 = arguments.length;
var i__4790__auto___37021 = (0);
while(true){
if((i__4790__auto___37021 < len__4789__auto___37020)){
args__4795__auto__.push((arguments[i__4790__auto___37021]));

var G__37022 = (i__4790__auto___37021 + (1));
i__4790__auto___37021 = G__37022;
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
var seq__36583_37023 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36584_37024 = null;
var count__36585_37025 = (0);
var i__36586_37026 = (0);
while(true){
if((i__36586_37026 < count__36585_37025)){
var vec__36593_37027 = chunk__36584_37024.cljs$core$IIndexed$_nth$arity$2(null,i__36586_37026);
var k_37028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36593_37027,(0),null);
var v_37029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36593_37027,(1),null);
style.setProperty(dommy.utils.as_str(k_37028),v_37029);


var G__37031 = seq__36583_37023;
var G__37032 = chunk__36584_37024;
var G__37033 = count__36585_37025;
var G__37034 = (i__36586_37026 + (1));
seq__36583_37023 = G__37031;
chunk__36584_37024 = G__37032;
count__36585_37025 = G__37033;
i__36586_37026 = G__37034;
continue;
} else {
var temp__5735__auto___37036 = cljs.core.seq(seq__36583_37023);
if(temp__5735__auto___37036){
var seq__36583_37037__$1 = temp__5735__auto___37036;
if(cljs.core.chunked_seq_QMARK_(seq__36583_37037__$1)){
var c__4609__auto___37038 = cljs.core.chunk_first(seq__36583_37037__$1);
var G__37039 = cljs.core.chunk_rest(seq__36583_37037__$1);
var G__37040 = c__4609__auto___37038;
var G__37041 = cljs.core.count(c__4609__auto___37038);
var G__37042 = (0);
seq__36583_37023 = G__37039;
chunk__36584_37024 = G__37040;
count__36585_37025 = G__37041;
i__36586_37026 = G__37042;
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
seq__36583_37023 = G__37046;
chunk__36584_37024 = G__37047;
count__36585_37025 = G__37048;
i__36586_37026 = G__37049;
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
var i__4790__auto___37051 = (0);
while(true){
if((i__4790__auto___37051 < len__4789__auto___37050)){
args__4795__auto__.push((arguments[i__4790__auto___37051]));

var G__37052 = (i__4790__auto___37051 + (1));
i__4790__auto___37051 = G__37052;
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
var seq__36601_37053 = cljs.core.seq(keywords);
var chunk__36602_37054 = null;
var count__36603_37055 = (0);
var i__36604_37056 = (0);
while(true){
if((i__36604_37056 < count__36603_37055)){
var kw_37057 = chunk__36602_37054.cljs$core$IIndexed$_nth$arity$2(null,i__36604_37056);
style.removeProperty(dommy.utils.as_str(kw_37057));


var G__37058 = seq__36601_37053;
var G__37059 = chunk__36602_37054;
var G__37060 = count__36603_37055;
var G__37061 = (i__36604_37056 + (1));
seq__36601_37053 = G__37058;
chunk__36602_37054 = G__37059;
count__36603_37055 = G__37060;
i__36604_37056 = G__37061;
continue;
} else {
var temp__5735__auto___37062 = cljs.core.seq(seq__36601_37053);
if(temp__5735__auto___37062){
var seq__36601_37063__$1 = temp__5735__auto___37062;
if(cljs.core.chunked_seq_QMARK_(seq__36601_37063__$1)){
var c__4609__auto___37064 = cljs.core.chunk_first(seq__36601_37063__$1);
var G__37065 = cljs.core.chunk_rest(seq__36601_37063__$1);
var G__37066 = c__4609__auto___37064;
var G__37067 = cljs.core.count(c__4609__auto___37064);
var G__37068 = (0);
seq__36601_37053 = G__37065;
chunk__36602_37054 = G__37066;
count__36603_37055 = G__37067;
i__36604_37056 = G__37068;
continue;
} else {
var kw_37070 = cljs.core.first(seq__36601_37063__$1);
style.removeProperty(dommy.utils.as_str(kw_37070));


var G__37071 = cljs.core.next(seq__36601_37063__$1);
var G__37072 = null;
var G__37073 = (0);
var G__37074 = (0);
seq__36601_37053 = G__37071;
chunk__36602_37054 = G__37072;
count__36603_37055 = G__37073;
i__36604_37056 = G__37074;
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
var len__4789__auto___37076 = arguments.length;
var i__4790__auto___37077 = (0);
while(true){
if((i__4790__auto___37077 < len__4789__auto___37076)){
args__4795__auto__.push((arguments[i__4790__auto___37077]));

var G__37078 = (i__4790__auto___37077 + (1));
i__4790__auto___37077 = G__37078;
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

var seq__36608_37079 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36609_37080 = null;
var count__36610_37081 = (0);
var i__36611_37082 = (0);
while(true){
if((i__36611_37082 < count__36610_37081)){
var vec__36618_37083 = chunk__36609_37080.cljs$core$IIndexed$_nth$arity$2(null,i__36611_37082);
var k_37084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37083,(0),null);
var v_37085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37083,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37084,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37085),"px"].join('')], 0));


var G__37088 = seq__36608_37079;
var G__37089 = chunk__36609_37080;
var G__37090 = count__36610_37081;
var G__37091 = (i__36611_37082 + (1));
seq__36608_37079 = G__37088;
chunk__36609_37080 = G__37089;
count__36610_37081 = G__37090;
i__36611_37082 = G__37091;
continue;
} else {
var temp__5735__auto___37092 = cljs.core.seq(seq__36608_37079);
if(temp__5735__auto___37092){
var seq__36608_37093__$1 = temp__5735__auto___37092;
if(cljs.core.chunked_seq_QMARK_(seq__36608_37093__$1)){
var c__4609__auto___37094 = cljs.core.chunk_first(seq__36608_37093__$1);
var G__37095 = cljs.core.chunk_rest(seq__36608_37093__$1);
var G__37096 = c__4609__auto___37094;
var G__37097 = cljs.core.count(c__4609__auto___37094);
var G__37098 = (0);
seq__36608_37079 = G__37095;
chunk__36609_37080 = G__37096;
count__36610_37081 = G__37097;
i__36611_37082 = G__37098;
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
seq__36608_37079 = G__37102;
chunk__36609_37080 = G__37103;
count__36610_37081 = G__37104;
i__36611_37082 = G__37105;
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
var len__4789__auto___37163 = arguments.length;
var i__4790__auto___37164 = (0);
while(true){
if((i__4790__auto___37164 < len__4789__auto___37163)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37164]));

var G__37165 = (i__4790__auto___37164 + (1));
i__4790__auto___37164 = G__37165;
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
var temp__5733__auto___37166 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37166)){
var class_list_37167 = temp__5733__auto___37166;
var seq__36665_37168 = cljs.core.seq(classes__$1);
var chunk__36666_37169 = null;
var count__36667_37170 = (0);
var i__36668_37171 = (0);
while(true){
if((i__36668_37171 < count__36667_37170)){
var c_37172 = chunk__36666_37169.cljs$core$IIndexed$_nth$arity$2(null,i__36668_37171);
class_list_37167.add(c_37172);


var G__37173 = seq__36665_37168;
var G__37174 = chunk__36666_37169;
var G__37175 = count__36667_37170;
var G__37176 = (i__36668_37171 + (1));
seq__36665_37168 = G__37173;
chunk__36666_37169 = G__37174;
count__36667_37170 = G__37175;
i__36668_37171 = G__37176;
continue;
} else {
var temp__5735__auto___37177 = cljs.core.seq(seq__36665_37168);
if(temp__5735__auto___37177){
var seq__36665_37178__$1 = temp__5735__auto___37177;
if(cljs.core.chunked_seq_QMARK_(seq__36665_37178__$1)){
var c__4609__auto___37179 = cljs.core.chunk_first(seq__36665_37178__$1);
var G__37180 = cljs.core.chunk_rest(seq__36665_37178__$1);
var G__37181 = c__4609__auto___37179;
var G__37182 = cljs.core.count(c__4609__auto___37179);
var G__37183 = (0);
seq__36665_37168 = G__37180;
chunk__36666_37169 = G__37181;
count__36667_37170 = G__37182;
i__36668_37171 = G__37183;
continue;
} else {
var c_37184 = cljs.core.first(seq__36665_37178__$1);
class_list_37167.add(c_37184);


var G__37185 = cljs.core.next(seq__36665_37178__$1);
var G__37186 = null;
var G__37187 = (0);
var G__37188 = (0);
seq__36665_37168 = G__37185;
chunk__36666_37169 = G__37186;
count__36667_37170 = G__37187;
i__36668_37171 = G__37188;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36669_37189 = cljs.core.seq(classes__$1);
var chunk__36670_37190 = null;
var count__36671_37191 = (0);
var i__36672_37192 = (0);
while(true){
if((i__36672_37192 < count__36671_37191)){
var c_37193 = chunk__36670_37190.cljs$core$IIndexed$_nth$arity$2(null,i__36672_37192);
var class_name_37194 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37194,c_37193))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37194 === ""))?c_37193:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37194)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37193)].join('')));
}


var G__37195 = seq__36669_37189;
var G__37196 = chunk__36670_37190;
var G__37197 = count__36671_37191;
var G__37198 = (i__36672_37192 + (1));
seq__36669_37189 = G__37195;
chunk__36670_37190 = G__37196;
count__36671_37191 = G__37197;
i__36672_37192 = G__37198;
continue;
} else {
var temp__5735__auto___37199 = cljs.core.seq(seq__36669_37189);
if(temp__5735__auto___37199){
var seq__36669_37200__$1 = temp__5735__auto___37199;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37200__$1)){
var c__4609__auto___37202 = cljs.core.chunk_first(seq__36669_37200__$1);
var G__37203 = cljs.core.chunk_rest(seq__36669_37200__$1);
var G__37204 = c__4609__auto___37202;
var G__37205 = cljs.core.count(c__4609__auto___37202);
var G__37206 = (0);
seq__36669_37189 = G__37203;
chunk__36670_37190 = G__37204;
count__36671_37191 = G__37205;
i__36672_37192 = G__37206;
continue;
} else {
var c_37207 = cljs.core.first(seq__36669_37200__$1);
var class_name_37208 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37208,c_37207))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37208 === ""))?c_37207:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37208)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37207)].join('')));
}


var G__37210 = cljs.core.next(seq__36669_37200__$1);
var G__37211 = null;
var G__37212 = (0);
var G__37213 = (0);
seq__36669_37189 = G__37210;
chunk__36670_37190 = G__37211;
count__36671_37191 = G__37212;
i__36672_37192 = G__37213;
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
var seq__36673_37214 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37215 = null;
var count__36675_37216 = (0);
var i__36676_37217 = (0);
while(true){
if((i__36676_37217 < count__36675_37216)){
var c_37218 = chunk__36674_37215.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37217);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37218);


var G__37219 = seq__36673_37214;
var G__37220 = chunk__36674_37215;
var G__37221 = count__36675_37216;
var G__37222 = (i__36676_37217 + (1));
seq__36673_37214 = G__37219;
chunk__36674_37215 = G__37220;
count__36675_37216 = G__37221;
i__36676_37217 = G__37222;
continue;
} else {
var temp__5735__auto___37223 = cljs.core.seq(seq__36673_37214);
if(temp__5735__auto___37223){
var seq__36673_37224__$1 = temp__5735__auto___37223;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37224__$1)){
var c__4609__auto___37225 = cljs.core.chunk_first(seq__36673_37224__$1);
var G__37226 = cljs.core.chunk_rest(seq__36673_37224__$1);
var G__37227 = c__4609__auto___37225;
var G__37228 = cljs.core.count(c__4609__auto___37225);
var G__37229 = (0);
seq__36673_37214 = G__37226;
chunk__36674_37215 = G__37227;
count__36675_37216 = G__37228;
i__36676_37217 = G__37229;
continue;
} else {
var c_37231 = cljs.core.first(seq__36673_37224__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37231);


var G__37232 = cljs.core.next(seq__36673_37224__$1);
var G__37233 = null;
var G__37234 = (0);
var G__37235 = (0);
seq__36673_37214 = G__37232;
chunk__36674_37215 = G__37233;
count__36675_37216 = G__37234;
i__36676_37217 = G__37235;
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
var len__4789__auto___37240 = arguments.length;
var i__4790__auto___37241 = (0);
while(true){
if((i__4790__auto___37241 < len__4789__auto___37240)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37241]));

var G__37242 = (i__4790__auto___37241 + (1));
i__4790__auto___37241 = G__37242;
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
var temp__5733__auto___37243 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37243)){
var class_list_37244 = temp__5733__auto___37243;
class_list_37244.remove(c__$1);
} else {
var class_name_37245 = dommy.core.class$(elem);
var new_class_name_37246 = dommy.utils.remove_class_str(class_name_37245,c__$1);
if((class_name_37245 === new_class_name_37246)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37246);
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


var G__37252 = seq__36682;
var G__37253 = chunk__36683;
var G__37254 = count__36684;
var G__37255 = (i__36685 + (1));
seq__36682 = G__37252;
chunk__36683 = G__37253;
count__36684 = G__37254;
i__36685 = G__37255;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36682);
if(temp__5735__auto__){
var seq__36682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36682__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36682__$1);
var G__37256 = cljs.core.chunk_rest(seq__36682__$1);
var G__37257 = c__4609__auto__;
var G__37258 = cljs.core.count(c__4609__auto__);
var G__37259 = (0);
seq__36682 = G__37256;
chunk__36683 = G__37257;
count__36684 = G__37258;
i__36685 = G__37259;
continue;
} else {
var c = cljs.core.first(seq__36682__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37262 = cljs.core.next(seq__36682__$1);
var G__37263 = null;
var G__37264 = (0);
var G__37265 = (0);
seq__36682 = G__37262;
chunk__36683 = G__37263;
count__36684 = G__37264;
i__36685 = G__37265;
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
var temp__5733__auto___37269 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37269)){
var class_list_37270 = temp__5733__auto___37269;
class_list_37270.toggle(c__$1);
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
var len__4789__auto___37341 = arguments.length;
var i__4790__auto___37342 = (0);
while(true){
if((i__4790__auto___37342 < len__4789__auto___37341)){
args__4795__auto__.push((arguments[i__4790__auto___37342]));

var G__37343 = (i__4790__auto___37342 + (1));
i__4790__auto___37342 = G__37343;
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

var vec__36731_37344 = dommy.core.elem_and_selector(elem_sel);
var elem_37345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_37344,(0),null);
var selector_37346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_37344,(1),null);
var seq__36734_37347 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36741_37348 = null;
var count__36742_37349 = (0);
var i__36743_37350 = (0);
while(true){
if((i__36743_37350 < count__36742_37349)){
var vec__36799_37351 = chunk__36741_37348.cljs$core$IIndexed$_nth$arity$2(null,i__36743_37350);
var orig_type_37352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799_37351,(0),null);
var f_37353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799_37351,(1),null);
var seq__36744_37354 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37352,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37352,cljs.core.identity])));
var chunk__36746_37355 = null;
var count__36747_37356 = (0);
var i__36748_37357 = (0);
while(true){
if((i__36748_37357 < count__36747_37356)){
var vec__36816_37358 = chunk__36746_37355.cljs$core$IIndexed$_nth$arity$2(null,i__36748_37357);
var actual_type_37359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816_37358,(0),null);
var factory_37360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816_37358,(1),null);
var canonical_f_37361 = (function (){var G__36820 = (factory_37360.cljs$core$IFn$_invoke$arity$1 ? factory_37360.cljs$core$IFn$_invoke$arity$1(f_37353) : factory_37360.call(null,f_37353));
var fexpr__36819 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36819.cljs$core$IFn$_invoke$arity$1 ? fexpr__36819.cljs$core$IFn$_invoke$arity$1(G__36820) : fexpr__36819.call(null,G__36820));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37359,f_37353], null),canonical_f_37361], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37359),canonical_f_37361);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37359),canonical_f_37361);
}


var G__37362 = seq__36744_37354;
var G__37363 = chunk__36746_37355;
var G__37364 = count__36747_37356;
var G__37365 = (i__36748_37357 + (1));
seq__36744_37354 = G__37362;
chunk__36746_37355 = G__37363;
count__36747_37356 = G__37364;
i__36748_37357 = G__37365;
continue;
} else {
var temp__5735__auto___37366 = cljs.core.seq(seq__36744_37354);
if(temp__5735__auto___37366){
var seq__36744_37367__$1 = temp__5735__auto___37366;
if(cljs.core.chunked_seq_QMARK_(seq__36744_37367__$1)){
var c__4609__auto___37368 = cljs.core.chunk_first(seq__36744_37367__$1);
var G__37369 = cljs.core.chunk_rest(seq__36744_37367__$1);
var G__37370 = c__4609__auto___37368;
var G__37371 = cljs.core.count(c__4609__auto___37368);
var G__37372 = (0);
seq__36744_37354 = G__37369;
chunk__36746_37355 = G__37370;
count__36747_37356 = G__37371;
i__36748_37357 = G__37372;
continue;
} else {
var vec__36824_37375 = cljs.core.first(seq__36744_37367__$1);
var actual_type_37376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36824_37375,(0),null);
var factory_37377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36824_37375,(1),null);
var canonical_f_37379 = (function (){var G__36828 = (factory_37377.cljs$core$IFn$_invoke$arity$1 ? factory_37377.cljs$core$IFn$_invoke$arity$1(f_37353) : factory_37377.call(null,f_37353));
var fexpr__36827 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36827.cljs$core$IFn$_invoke$arity$1 ? fexpr__36827.cljs$core$IFn$_invoke$arity$1(G__36828) : fexpr__36827.call(null,G__36828));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37376,f_37353], null),canonical_f_37379], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37376),canonical_f_37379);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37376),canonical_f_37379);
}


var G__37383 = cljs.core.next(seq__36744_37367__$1);
var G__37384 = null;
var G__37385 = (0);
var G__37386 = (0);
seq__36744_37354 = G__37383;
chunk__36746_37355 = G__37384;
count__36747_37356 = G__37385;
i__36748_37357 = G__37386;
continue;
}
} else {
}
}
break;
}

var G__37387 = seq__36734_37347;
var G__37388 = chunk__36741_37348;
var G__37389 = count__36742_37349;
var G__37390 = (i__36743_37350 + (1));
seq__36734_37347 = G__37387;
chunk__36741_37348 = G__37388;
count__36742_37349 = G__37389;
i__36743_37350 = G__37390;
continue;
} else {
var temp__5735__auto___37391 = cljs.core.seq(seq__36734_37347);
if(temp__5735__auto___37391){
var seq__36734_37392__$1 = temp__5735__auto___37391;
if(cljs.core.chunked_seq_QMARK_(seq__36734_37392__$1)){
var c__4609__auto___37393 = cljs.core.chunk_first(seq__36734_37392__$1);
var G__37394 = cljs.core.chunk_rest(seq__36734_37392__$1);
var G__37395 = c__4609__auto___37393;
var G__37396 = cljs.core.count(c__4609__auto___37393);
var G__37397 = (0);
seq__36734_37347 = G__37394;
chunk__36741_37348 = G__37395;
count__36742_37349 = G__37396;
i__36743_37350 = G__37397;
continue;
} else {
var vec__36833_37398 = cljs.core.first(seq__36734_37392__$1);
var orig_type_37399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833_37398,(0),null);
var f_37400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833_37398,(1),null);
var seq__36735_37401 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37399,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37399,cljs.core.identity])));
var chunk__36737_37402 = null;
var count__36738_37403 = (0);
var i__36739_37404 = (0);
while(true){
if((i__36739_37404 < count__36738_37403)){
var vec__36846_37405 = chunk__36737_37402.cljs$core$IIndexed$_nth$arity$2(null,i__36739_37404);
var actual_type_37406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37405,(0),null);
var factory_37407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37405,(1),null);
var canonical_f_37408 = (function (){var G__36850 = (factory_37407.cljs$core$IFn$_invoke$arity$1 ? factory_37407.cljs$core$IFn$_invoke$arity$1(f_37400) : factory_37407.call(null,f_37400));
var fexpr__36849 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36849.cljs$core$IFn$_invoke$arity$1 ? fexpr__36849.cljs$core$IFn$_invoke$arity$1(G__36850) : fexpr__36849.call(null,G__36850));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37406,f_37400], null),canonical_f_37408], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37406),canonical_f_37408);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37406),canonical_f_37408);
}


var G__37413 = seq__36735_37401;
var G__37414 = chunk__36737_37402;
var G__37415 = count__36738_37403;
var G__37416 = (i__36739_37404 + (1));
seq__36735_37401 = G__37413;
chunk__36737_37402 = G__37414;
count__36738_37403 = G__37415;
i__36739_37404 = G__37416;
continue;
} else {
var temp__5735__auto___37417__$1 = cljs.core.seq(seq__36735_37401);
if(temp__5735__auto___37417__$1){
var seq__36735_37418__$1 = temp__5735__auto___37417__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36735_37418__$1)){
var c__4609__auto___37419 = cljs.core.chunk_first(seq__36735_37418__$1);
var G__37420 = cljs.core.chunk_rest(seq__36735_37418__$1);
var G__37421 = c__4609__auto___37419;
var G__37422 = cljs.core.count(c__4609__auto___37419);
var G__37423 = (0);
seq__36735_37401 = G__37420;
chunk__36737_37402 = G__37421;
count__36738_37403 = G__37422;
i__36739_37404 = G__37423;
continue;
} else {
var vec__36851_37425 = cljs.core.first(seq__36735_37418__$1);
var actual_type_37426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37425,(0),null);
var factory_37427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37425,(1),null);
var canonical_f_37430 = (function (){var G__36855 = (factory_37427.cljs$core$IFn$_invoke$arity$1 ? factory_37427.cljs$core$IFn$_invoke$arity$1(f_37400) : factory_37427.call(null,f_37400));
var fexpr__36854 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36854.cljs$core$IFn$_invoke$arity$1 ? fexpr__36854.cljs$core$IFn$_invoke$arity$1(G__36855) : fexpr__36854.call(null,G__36855));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37426,f_37400], null),canonical_f_37430], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37426),canonical_f_37430);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37426),canonical_f_37430);
}


var G__37431 = cljs.core.next(seq__36735_37418__$1);
var G__37432 = null;
var G__37433 = (0);
var G__37434 = (0);
seq__36735_37401 = G__37431;
chunk__36737_37402 = G__37432;
count__36738_37403 = G__37433;
i__36739_37404 = G__37434;
continue;
}
} else {
}
}
break;
}

var G__37435 = cljs.core.next(seq__36734_37392__$1);
var G__37436 = null;
var G__37437 = (0);
var G__37438 = (0);
seq__36734_37347 = G__37435;
chunk__36741_37348 = G__37436;
count__36742_37349 = G__37437;
i__36743_37350 = G__37438;
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
var len__4789__auto___37446 = arguments.length;
var i__4790__auto___37447 = (0);
while(true){
if((i__4790__auto___37447 < len__4789__auto___37446)){
args__4795__auto__.push((arguments[i__4790__auto___37447]));

var G__37448 = (i__4790__auto___37447 + (1));
i__4790__auto___37447 = G__37448;
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

var vec__36863_37453 = dommy.core.elem_and_selector(elem_sel);
var elem_37454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36863_37453,(0),null);
var selector_37455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36863_37453,(1),null);
var seq__36866_37456 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36873_37457 = null;
var count__36874_37458 = (0);
var i__36875_37459 = (0);
while(true){
if((i__36875_37459 < count__36874_37458)){
var vec__36940_37462 = chunk__36873_37457.cljs$core$IIndexed$_nth$arity$2(null,i__36875_37459);
var orig_type_37463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36940_37462,(0),null);
var f_37464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36940_37462,(1),null);
var seq__36876_37469 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37463,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37463,cljs.core.identity])));
var chunk__36878_37470 = null;
var count__36879_37471 = (0);
var i__36880_37472 = (0);
while(true){
if((i__36880_37472 < count__36879_37471)){
var vec__36970_37474 = chunk__36878_37470.cljs$core$IIndexed$_nth$arity$2(null,i__36880_37472);
var actual_type_37475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36970_37474,(0),null);
var __37476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36970_37474,(1),null);
var keys_37478 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37455,actual_type_37475,f_37464], null);
var canonical_f_37479 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37454),keys_37478);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37454,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37478], 0));

if(cljs.core.truth_(elem_37454.removeEventListener)){
elem_37454.removeEventListener(cljs.core.name(actual_type_37475),canonical_f_37479);
} else {
elem_37454.detachEvent(cljs.core.name(actual_type_37475),canonical_f_37479);
}


var G__37483 = seq__36876_37469;
var G__37484 = chunk__36878_37470;
var G__37485 = count__36879_37471;
var G__37486 = (i__36880_37472 + (1));
seq__36876_37469 = G__37483;
chunk__36878_37470 = G__37484;
count__36879_37471 = G__37485;
i__36880_37472 = G__37486;
continue;
} else {
var temp__5735__auto___37488 = cljs.core.seq(seq__36876_37469);
if(temp__5735__auto___37488){
var seq__36876_37489__$1 = temp__5735__auto___37488;
if(cljs.core.chunked_seq_QMARK_(seq__36876_37489__$1)){
var c__4609__auto___37490 = cljs.core.chunk_first(seq__36876_37489__$1);
var G__37491 = cljs.core.chunk_rest(seq__36876_37489__$1);
var G__37492 = c__4609__auto___37490;
var G__37493 = cljs.core.count(c__4609__auto___37490);
var G__37494 = (0);
seq__36876_37469 = G__37491;
chunk__36878_37470 = G__37492;
count__36879_37471 = G__37493;
i__36880_37472 = G__37494;
continue;
} else {
var vec__36973_37497 = cljs.core.first(seq__36876_37489__$1);
var actual_type_37498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973_37497,(0),null);
var __37499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973_37497,(1),null);
var keys_37502 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37455,actual_type_37498,f_37464], null);
var canonical_f_37503 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37454),keys_37502);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37454,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37502], 0));

if(cljs.core.truth_(elem_37454.removeEventListener)){
elem_37454.removeEventListener(cljs.core.name(actual_type_37498),canonical_f_37503);
} else {
elem_37454.detachEvent(cljs.core.name(actual_type_37498),canonical_f_37503);
}


var G__37508 = cljs.core.next(seq__36876_37489__$1);
var G__37509 = null;
var G__37510 = (0);
var G__37511 = (0);
seq__36876_37469 = G__37508;
chunk__36878_37470 = G__37509;
count__36879_37471 = G__37510;
i__36880_37472 = G__37511;
continue;
}
} else {
}
}
break;
}

var G__37513 = seq__36866_37456;
var G__37514 = chunk__36873_37457;
var G__37515 = count__36874_37458;
var G__37516 = (i__36875_37459 + (1));
seq__36866_37456 = G__37513;
chunk__36873_37457 = G__37514;
count__36874_37458 = G__37515;
i__36875_37459 = G__37516;
continue;
} else {
var temp__5735__auto___37517 = cljs.core.seq(seq__36866_37456);
if(temp__5735__auto___37517){
var seq__36866_37518__$1 = temp__5735__auto___37517;
if(cljs.core.chunked_seq_QMARK_(seq__36866_37518__$1)){
var c__4609__auto___37521 = cljs.core.chunk_first(seq__36866_37518__$1);
var G__37522 = cljs.core.chunk_rest(seq__36866_37518__$1);
var G__37523 = c__4609__auto___37521;
var G__37524 = cljs.core.count(c__4609__auto___37521);
var G__37525 = (0);
seq__36866_37456 = G__37522;
chunk__36873_37457 = G__37523;
count__36874_37458 = G__37524;
i__36875_37459 = G__37525;
continue;
} else {
var vec__36976_37527 = cljs.core.first(seq__36866_37518__$1);
var orig_type_37528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36976_37527,(0),null);
var f_37529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36976_37527,(1),null);
var seq__36867_37531 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37528,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37528,cljs.core.identity])));
var chunk__36869_37532 = null;
var count__36870_37533 = (0);
var i__36871_37534 = (0);
while(true){
if((i__36871_37534 < count__36870_37533)){
var vec__36989_37537 = chunk__36869_37532.cljs$core$IIndexed$_nth$arity$2(null,i__36871_37534);
var actual_type_37538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36989_37537,(0),null);
var __37539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36989_37537,(1),null);
var keys_37542 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37455,actual_type_37538,f_37529], null);
var canonical_f_37543 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37454),keys_37542);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37454,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37542], 0));

if(cljs.core.truth_(elem_37454.removeEventListener)){
elem_37454.removeEventListener(cljs.core.name(actual_type_37538),canonical_f_37543);
} else {
elem_37454.detachEvent(cljs.core.name(actual_type_37538),canonical_f_37543);
}


var G__37546 = seq__36867_37531;
var G__37547 = chunk__36869_37532;
var G__37548 = count__36870_37533;
var G__37549 = (i__36871_37534 + (1));
seq__36867_37531 = G__37546;
chunk__36869_37532 = G__37547;
count__36870_37533 = G__37548;
i__36871_37534 = G__37549;
continue;
} else {
var temp__5735__auto___37552__$1 = cljs.core.seq(seq__36867_37531);
if(temp__5735__auto___37552__$1){
var seq__36867_37556__$1 = temp__5735__auto___37552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36867_37556__$1)){
var c__4609__auto___37560 = cljs.core.chunk_first(seq__36867_37556__$1);
var G__37562 = cljs.core.chunk_rest(seq__36867_37556__$1);
var G__37563 = c__4609__auto___37560;
var G__37564 = cljs.core.count(c__4609__auto___37560);
var G__37565 = (0);
seq__36867_37531 = G__37562;
chunk__36869_37532 = G__37563;
count__36870_37533 = G__37564;
i__36871_37534 = G__37565;
continue;
} else {
var vec__36993_37568 = cljs.core.first(seq__36867_37556__$1);
var actual_type_37569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37568,(0),null);
var __37570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37568,(1),null);
var keys_37571 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37455,actual_type_37569,f_37529], null);
var canonical_f_37572 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37454),keys_37571);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37454,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37571], 0));

if(cljs.core.truth_(elem_37454.removeEventListener)){
elem_37454.removeEventListener(cljs.core.name(actual_type_37569),canonical_f_37572);
} else {
elem_37454.detachEvent(cljs.core.name(actual_type_37569),canonical_f_37572);
}


var G__37576 = cljs.core.next(seq__36867_37556__$1);
var G__37577 = null;
var G__37578 = (0);
var G__37579 = (0);
seq__36867_37531 = G__37576;
chunk__36869_37532 = G__37577;
count__36870_37533 = G__37578;
i__36871_37534 = G__37579;
continue;
}
} else {
}
}
break;
}

var G__37580 = cljs.core.next(seq__36866_37518__$1);
var G__37581 = null;
var G__37582 = (0);
var G__37583 = (0);
seq__36866_37456 = G__37580;
chunk__36873_37457 = G__37581;
count__36874_37458 = G__37582;
i__36875_37459 = G__37583;
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
var len__4789__auto___37587 = arguments.length;
var i__4790__auto___37590 = (0);
while(true){
if((i__4790__auto___37590 < len__4789__auto___37587)){
args__4795__auto__.push((arguments[i__4790__auto___37590]));

var G__37592 = (i__4790__auto___37590 + (1));
i__4790__auto___37590 = G__37592;
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

var vec__36998_37596 = dommy.core.elem_and_selector(elem_sel);
var elem_37597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36998_37596,(0),null);
var selector_37598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36998_37596,(1),null);
var seq__37001_37601 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__37002_37602 = null;
var count__37003_37603 = (0);
var i__37004_37604 = (0);
while(true){
if((i__37004_37604 < count__37003_37603)){
var vec__37011_37606 = chunk__37002_37602.cljs$core$IIndexed$_nth$arity$2(null,i__37004_37604);
var type_37607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011_37606,(0),null);
var f_37608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011_37606,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37607,((function (seq__37001_37601,chunk__37002_37602,count__37003_37603,i__37004_37604,vec__37011_37606,type_37607,f_37608,vec__36998_37596,elem_37597,selector_37598){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37607,dommy$core$this_fn], 0));

return (f_37608.cljs$core$IFn$_invoke$arity$1 ? f_37608.cljs$core$IFn$_invoke$arity$1(e) : f_37608.call(null,e));
});})(seq__37001_37601,chunk__37002_37602,count__37003_37603,i__37004_37604,vec__37011_37606,type_37607,f_37608,vec__36998_37596,elem_37597,selector_37598))
], 0));


var G__37613 = seq__37001_37601;
var G__37614 = chunk__37002_37602;
var G__37615 = count__37003_37603;
var G__37616 = (i__37004_37604 + (1));
seq__37001_37601 = G__37613;
chunk__37002_37602 = G__37614;
count__37003_37603 = G__37615;
i__37004_37604 = G__37616;
continue;
} else {
var temp__5735__auto___37618 = cljs.core.seq(seq__37001_37601);
if(temp__5735__auto___37618){
var seq__37001_37619__$1 = temp__5735__auto___37618;
if(cljs.core.chunked_seq_QMARK_(seq__37001_37619__$1)){
var c__4609__auto___37620 = cljs.core.chunk_first(seq__37001_37619__$1);
var G__37621 = cljs.core.chunk_rest(seq__37001_37619__$1);
var G__37622 = c__4609__auto___37620;
var G__37623 = cljs.core.count(c__4609__auto___37620);
var G__37624 = (0);
seq__37001_37601 = G__37621;
chunk__37002_37602 = G__37622;
count__37003_37603 = G__37623;
i__37004_37604 = G__37624;
continue;
} else {
var vec__37014_37646 = cljs.core.first(seq__37001_37619__$1);
var type_37647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014_37646,(0),null);
var f_37648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014_37646,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37647,((function (seq__37001_37601,chunk__37002_37602,count__37003_37603,i__37004_37604,vec__37014_37646,type_37647,f_37648,seq__37001_37619__$1,temp__5735__auto___37618,vec__36998_37596,elem_37597,selector_37598){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37647,dommy$core$this_fn], 0));

return (f_37648.cljs$core$IFn$_invoke$arity$1 ? f_37648.cljs$core$IFn$_invoke$arity$1(e) : f_37648.call(null,e));
});})(seq__37001_37601,chunk__37002_37602,count__37003_37603,i__37004_37604,vec__37014_37646,type_37647,f_37648,seq__37001_37619__$1,temp__5735__auto___37618,vec__36998_37596,elem_37597,selector_37598))
], 0));


var G__37651 = cljs.core.next(seq__37001_37619__$1);
var G__37652 = null;
var G__37653 = (0);
var G__37654 = (0);
seq__37001_37601 = G__37651;
chunk__37002_37602 = G__37652;
count__37003_37603 = G__37653;
i__37004_37604 = G__37654;
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
