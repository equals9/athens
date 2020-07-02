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


var G__37030 = seq__36583_37023;
var G__37031 = chunk__36584_37024;
var G__37032 = count__36585_37025;
var G__37033 = (i__36586_37026 + (1));
seq__36583_37023 = G__37030;
chunk__36584_37024 = G__37031;
count__36585_37025 = G__37032;
i__36586_37026 = G__37033;
continue;
} else {
var temp__5735__auto___37034 = cljs.core.seq(seq__36583_37023);
if(temp__5735__auto___37034){
var seq__36583_37035__$1 = temp__5735__auto___37034;
if(cljs.core.chunked_seq_QMARK_(seq__36583_37035__$1)){
var c__4609__auto___37036 = cljs.core.chunk_first(seq__36583_37035__$1);
var G__37037 = cljs.core.chunk_rest(seq__36583_37035__$1);
var G__37038 = c__4609__auto___37036;
var G__37039 = cljs.core.count(c__4609__auto___37036);
var G__37040 = (0);
seq__36583_37023 = G__37037;
chunk__36584_37024 = G__37038;
count__36585_37025 = G__37039;
i__36586_37026 = G__37040;
continue;
} else {
var vec__36596_37041 = cljs.core.first(seq__36583_37035__$1);
var k_37042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_37041,(0),null);
var v_37043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_37041,(1),null);
style.setProperty(dommy.utils.as_str(k_37042),v_37043);


var G__37044 = cljs.core.next(seq__36583_37035__$1);
var G__37045 = null;
var G__37046 = (0);
var G__37047 = (0);
seq__36583_37023 = G__37044;
chunk__36584_37024 = G__37045;
count__36585_37025 = G__37046;
i__36586_37026 = G__37047;
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
var len__4789__auto___37048 = arguments.length;
var i__4790__auto___37050 = (0);
while(true){
if((i__4790__auto___37050 < len__4789__auto___37048)){
args__4795__auto__.push((arguments[i__4790__auto___37050]));

var G__37052 = (i__4790__auto___37050 + (1));
i__4790__auto___37050 = G__37052;
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
var kw_37069 = cljs.core.first(seq__36601_37063__$1);
style.removeProperty(dommy.utils.as_str(kw_37069));


var G__37070 = cljs.core.next(seq__36601_37063__$1);
var G__37071 = null;
var G__37072 = (0);
var G__37073 = (0);
seq__36601_37053 = G__37070;
chunk__36602_37054 = G__37071;
count__36603_37055 = G__37072;
i__36604_37056 = G__37073;
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
var len__4789__auto___37074 = arguments.length;
var i__4790__auto___37075 = (0);
while(true){
if((i__4790__auto___37075 < len__4789__auto___37074)){
args__4795__auto__.push((arguments[i__4790__auto___37075]));

var G__37076 = (i__4790__auto___37075 + (1));
i__4790__auto___37075 = G__37076;
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


var G__37086 = seq__36608_37079;
var G__37087 = chunk__36609_37080;
var G__37088 = count__36610_37081;
var G__37089 = (i__36611_37082 + (1));
seq__36608_37079 = G__37086;
chunk__36609_37080 = G__37087;
count__36610_37081 = G__37088;
i__36611_37082 = G__37089;
continue;
} else {
var temp__5735__auto___37090 = cljs.core.seq(seq__36608_37079);
if(temp__5735__auto___37090){
var seq__36608_37091__$1 = temp__5735__auto___37090;
if(cljs.core.chunked_seq_QMARK_(seq__36608_37091__$1)){
var c__4609__auto___37092 = cljs.core.chunk_first(seq__36608_37091__$1);
var G__37093 = cljs.core.chunk_rest(seq__36608_37091__$1);
var G__37094 = c__4609__auto___37092;
var G__37095 = cljs.core.count(c__4609__auto___37092);
var G__37096 = (0);
seq__36608_37079 = G__37093;
chunk__36609_37080 = G__37094;
count__36610_37081 = G__37095;
i__36611_37082 = G__37096;
continue;
} else {
var vec__36621_37099 = cljs.core.first(seq__36608_37091__$1);
var k_37100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37099,(0),null);
var v_37101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37099,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37100,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37101),"px"].join('')], 0));


var G__37102 = cljs.core.next(seq__36608_37091__$1);
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


var G__37186 = cljs.core.next(seq__36665_37178__$1);
var G__37187 = null;
var G__37188 = (0);
var G__37189 = (0);
seq__36665_37168 = G__37186;
chunk__36666_37169 = G__37187;
count__36667_37170 = G__37188;
i__36668_37171 = G__37189;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36669_37190 = cljs.core.seq(classes__$1);
var chunk__36670_37191 = null;
var count__36671_37192 = (0);
var i__36672_37193 = (0);
while(true){
if((i__36672_37193 < count__36671_37192)){
var c_37194 = chunk__36670_37191.cljs$core$IIndexed$_nth$arity$2(null,i__36672_37193);
var class_name_37196 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37196,c_37194))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37196 === ""))?c_37194:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37196)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37194)].join('')));
}


var G__37197 = seq__36669_37190;
var G__37198 = chunk__36670_37191;
var G__37199 = count__36671_37192;
var G__37200 = (i__36672_37193 + (1));
seq__36669_37190 = G__37197;
chunk__36670_37191 = G__37198;
count__36671_37192 = G__37199;
i__36672_37193 = G__37200;
continue;
} else {
var temp__5735__auto___37201 = cljs.core.seq(seq__36669_37190);
if(temp__5735__auto___37201){
var seq__36669_37202__$1 = temp__5735__auto___37201;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37202__$1)){
var c__4609__auto___37203 = cljs.core.chunk_first(seq__36669_37202__$1);
var G__37204 = cljs.core.chunk_rest(seq__36669_37202__$1);
var G__37205 = c__4609__auto___37203;
var G__37206 = cljs.core.count(c__4609__auto___37203);
var G__37207 = (0);
seq__36669_37190 = G__37204;
chunk__36670_37191 = G__37205;
count__36671_37192 = G__37206;
i__36672_37193 = G__37207;
continue;
} else {
var c_37208 = cljs.core.first(seq__36669_37202__$1);
var class_name_37209 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37209,c_37208))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37209 === ""))?c_37208:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37209)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37208)].join('')));
}


var G__37211 = cljs.core.next(seq__36669_37202__$1);
var G__37212 = null;
var G__37213 = (0);
var G__37214 = (0);
seq__36669_37190 = G__37211;
chunk__36670_37191 = G__37212;
count__36671_37192 = G__37213;
i__36672_37193 = G__37214;
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
var seq__36673_37215 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37216 = null;
var count__36675_37217 = (0);
var i__36676_37218 = (0);
while(true){
if((i__36676_37218 < count__36675_37217)){
var c_37221 = chunk__36674_37216.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37218);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37221);


var G__37222 = seq__36673_37215;
var G__37223 = chunk__36674_37216;
var G__37224 = count__36675_37217;
var G__37225 = (i__36676_37218 + (1));
seq__36673_37215 = G__37222;
chunk__36674_37216 = G__37223;
count__36675_37217 = G__37224;
i__36676_37218 = G__37225;
continue;
} else {
var temp__5735__auto___37227 = cljs.core.seq(seq__36673_37215);
if(temp__5735__auto___37227){
var seq__36673_37228__$1 = temp__5735__auto___37227;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37228__$1)){
var c__4609__auto___37229 = cljs.core.chunk_first(seq__36673_37228__$1);
var G__37230 = cljs.core.chunk_rest(seq__36673_37228__$1);
var G__37231 = c__4609__auto___37229;
var G__37232 = cljs.core.count(c__4609__auto___37229);
var G__37233 = (0);
seq__36673_37215 = G__37230;
chunk__36674_37216 = G__37231;
count__36675_37217 = G__37232;
i__36676_37218 = G__37233;
continue;
} else {
var c_37234 = cljs.core.first(seq__36673_37228__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37234);


var G__37235 = cljs.core.next(seq__36673_37228__$1);
var G__37236 = null;
var G__37237 = (0);
var G__37238 = (0);
seq__36673_37215 = G__37235;
chunk__36674_37216 = G__37236;
count__36675_37217 = G__37237;
i__36676_37218 = G__37238;
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
var len__4789__auto___37245 = arguments.length;
var i__4790__auto___37246 = (0);
while(true){
if((i__4790__auto___37246 < len__4789__auto___37245)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37246]));

var G__37247 = (i__4790__auto___37246 + (1));
i__4790__auto___37246 = G__37247;
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
var temp__5733__auto___37250 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37250)){
var class_list_37251 = temp__5733__auto___37250;
class_list_37251.remove(c__$1);
} else {
var class_name_37252 = dommy.core.class$(elem);
var new_class_name_37253 = dommy.utils.remove_class_str(class_name_37252,c__$1);
if((class_name_37252 === new_class_name_37253)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37253);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36683 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__36684 = null;
var count__36685 = (0);
var i__36686 = (0);
while(true){
if((i__36686 < count__36685)){
var c = chunk__36684.cljs$core$IIndexed$_nth$arity$2(null,i__36686);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37256 = seq__36683;
var G__37257 = chunk__36684;
var G__37258 = count__36685;
var G__37259 = (i__36686 + (1));
seq__36683 = G__37256;
chunk__36684 = G__37257;
count__36685 = G__37258;
i__36686 = G__37259;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36683);
if(temp__5735__auto__){
var seq__36683__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36683__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36683__$1);
var G__37262 = cljs.core.chunk_rest(seq__36683__$1);
var G__37263 = c__4609__auto__;
var G__37264 = cljs.core.count(c__4609__auto__);
var G__37265 = (0);
seq__36683 = G__37262;
chunk__36684 = G__37263;
count__36685 = G__37264;
i__36686 = G__37265;
continue;
} else {
var c = cljs.core.first(seq__36683__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37266 = cljs.core.next(seq__36683__$1);
var G__37267 = null;
var G__37268 = (0);
var G__37269 = (0);
seq__36683 = G__37266;
chunk__36684 = G__37267;
count__36685 = G__37268;
i__36686 = G__37269;
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
var temp__5733__auto___37277 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37277)){
var class_list_37280 = temp__5733__auto___37277;
class_list_37280.toggle(c__$1);
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
var seq__36734_37356 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36741_37357 = null;
var count__36742_37358 = (0);
var i__36743_37359 = (0);
while(true){
if((i__36743_37359 < count__36742_37358)){
var vec__36799_37360 = chunk__36741_37357.cljs$core$IIndexed$_nth$arity$2(null,i__36743_37359);
var orig_type_37361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799_37360,(0),null);
var f_37362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799_37360,(1),null);
var seq__36744_37363 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37361,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37361,cljs.core.identity])));
var chunk__36746_37364 = null;
var count__36747_37365 = (0);
var i__36748_37366 = (0);
while(true){
if((i__36748_37366 < count__36747_37365)){
var vec__36816_37367 = chunk__36746_37364.cljs$core$IIndexed$_nth$arity$2(null,i__36748_37366);
var actual_type_37368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816_37367,(0),null);
var factory_37369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816_37367,(1),null);
var canonical_f_37370 = (function (){var G__36820 = (factory_37369.cljs$core$IFn$_invoke$arity$1 ? factory_37369.cljs$core$IFn$_invoke$arity$1(f_37362) : factory_37369.call(null,f_37362));
var fexpr__36819 = (cljs.core.truth_(selector_37352)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37351,selector_37352):cljs.core.identity);
return (fexpr__36819.cljs$core$IFn$_invoke$arity$1 ? fexpr__36819.cljs$core$IFn$_invoke$arity$1(G__36820) : fexpr__36819.call(null,G__36820));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37351,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37352,actual_type_37368,f_37362], null),canonical_f_37370], 0));

if(cljs.core.truth_(elem_37351.addEventListener)){
elem_37351.addEventListener(cljs.core.name(actual_type_37368),canonical_f_37370);
} else {
elem_37351.attachEvent(cljs.core.name(actual_type_37368),canonical_f_37370);
}


var G__37371 = seq__36744_37363;
var G__37372 = chunk__36746_37364;
var G__37373 = count__36747_37365;
var G__37374 = (i__36748_37366 + (1));
seq__36744_37363 = G__37371;
chunk__36746_37364 = G__37372;
count__36747_37365 = G__37373;
i__36748_37366 = G__37374;
continue;
} else {
var temp__5735__auto___37375 = cljs.core.seq(seq__36744_37363);
if(temp__5735__auto___37375){
var seq__36744_37376__$1 = temp__5735__auto___37375;
if(cljs.core.chunked_seq_QMARK_(seq__36744_37376__$1)){
var c__4609__auto___37377 = cljs.core.chunk_first(seq__36744_37376__$1);
var G__37378 = cljs.core.chunk_rest(seq__36744_37376__$1);
var G__37379 = c__4609__auto___37377;
var G__37380 = cljs.core.count(c__4609__auto___37377);
var G__37381 = (0);
seq__36744_37363 = G__37378;
chunk__36746_37364 = G__37379;
count__36747_37365 = G__37380;
i__36748_37366 = G__37381;
continue;
} else {
var vec__36821_37382 = cljs.core.first(seq__36744_37376__$1);
var actual_type_37383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36821_37382,(0),null);
var factory_37384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36821_37382,(1),null);
var canonical_f_37385 = (function (){var G__36825 = (factory_37384.cljs$core$IFn$_invoke$arity$1 ? factory_37384.cljs$core$IFn$_invoke$arity$1(f_37362) : factory_37384.call(null,f_37362));
var fexpr__36824 = (cljs.core.truth_(selector_37352)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37351,selector_37352):cljs.core.identity);
return (fexpr__36824.cljs$core$IFn$_invoke$arity$1 ? fexpr__36824.cljs$core$IFn$_invoke$arity$1(G__36825) : fexpr__36824.call(null,G__36825));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37351,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37352,actual_type_37383,f_37362], null),canonical_f_37385], 0));

if(cljs.core.truth_(elem_37351.addEventListener)){
elem_37351.addEventListener(cljs.core.name(actual_type_37383),canonical_f_37385);
} else {
elem_37351.attachEvent(cljs.core.name(actual_type_37383),canonical_f_37385);
}


var G__37390 = cljs.core.next(seq__36744_37376__$1);
var G__37391 = null;
var G__37392 = (0);
var G__37393 = (0);
seq__36744_37363 = G__37390;
chunk__36746_37364 = G__37391;
count__36747_37365 = G__37392;
i__36748_37366 = G__37393;
continue;
}
} else {
}
}
break;
}

var G__37396 = seq__36734_37356;
var G__37397 = chunk__36741_37357;
var G__37398 = count__36742_37358;
var G__37399 = (i__36743_37359 + (1));
seq__36734_37356 = G__37396;
chunk__36741_37357 = G__37397;
count__36742_37358 = G__37398;
i__36743_37359 = G__37399;
continue;
} else {
var temp__5735__auto___37404 = cljs.core.seq(seq__36734_37356);
if(temp__5735__auto___37404){
var seq__36734_37405__$1 = temp__5735__auto___37404;
if(cljs.core.chunked_seq_QMARK_(seq__36734_37405__$1)){
var c__4609__auto___37407 = cljs.core.chunk_first(seq__36734_37405__$1);
var G__37408 = cljs.core.chunk_rest(seq__36734_37405__$1);
var G__37409 = c__4609__auto___37407;
var G__37410 = cljs.core.count(c__4609__auto___37407);
var G__37411 = (0);
seq__36734_37356 = G__37408;
chunk__36741_37357 = G__37409;
count__36742_37358 = G__37410;
i__36743_37359 = G__37411;
continue;
} else {
var vec__36826_37412 = cljs.core.first(seq__36734_37405__$1);
var orig_type_37413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826_37412,(0),null);
var f_37414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826_37412,(1),null);
var seq__36735_37417 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37413,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37413,cljs.core.identity])));
var chunk__36737_37418 = null;
var count__36738_37419 = (0);
var i__36739_37420 = (0);
while(true){
if((i__36739_37420 < count__36738_37419)){
var vec__36846_37423 = chunk__36737_37418.cljs$core$IIndexed$_nth$arity$2(null,i__36739_37420);
var actual_type_37424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37423,(0),null);
var factory_37425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37423,(1),null);
var canonical_f_37426 = (function (){var G__36850 = (factory_37425.cljs$core$IFn$_invoke$arity$1 ? factory_37425.cljs$core$IFn$_invoke$arity$1(f_37414) : factory_37425.call(null,f_37414));
var fexpr__36849 = (cljs.core.truth_(selector_37352)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37351,selector_37352):cljs.core.identity);
return (fexpr__36849.cljs$core$IFn$_invoke$arity$1 ? fexpr__36849.cljs$core$IFn$_invoke$arity$1(G__36850) : fexpr__36849.call(null,G__36850));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37351,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37352,actual_type_37424,f_37414], null),canonical_f_37426], 0));

if(cljs.core.truth_(elem_37351.addEventListener)){
elem_37351.addEventListener(cljs.core.name(actual_type_37424),canonical_f_37426);
} else {
elem_37351.attachEvent(cljs.core.name(actual_type_37424),canonical_f_37426);
}


var G__37434 = seq__36735_37417;
var G__37435 = chunk__36737_37418;
var G__37436 = count__36738_37419;
var G__37437 = (i__36739_37420 + (1));
seq__36735_37417 = G__37434;
chunk__36737_37418 = G__37435;
count__36738_37419 = G__37436;
i__36739_37420 = G__37437;
continue;
} else {
var temp__5735__auto___37440__$1 = cljs.core.seq(seq__36735_37417);
if(temp__5735__auto___37440__$1){
var seq__36735_37441__$1 = temp__5735__auto___37440__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36735_37441__$1)){
var c__4609__auto___37444 = cljs.core.chunk_first(seq__36735_37441__$1);
var G__37445 = cljs.core.chunk_rest(seq__36735_37441__$1);
var G__37446 = c__4609__auto___37444;
var G__37447 = cljs.core.count(c__4609__auto___37444);
var G__37448 = (0);
seq__36735_37417 = G__37445;
chunk__36737_37418 = G__37446;
count__36738_37419 = G__37447;
i__36739_37420 = G__37448;
continue;
} else {
var vec__36851_37449 = cljs.core.first(seq__36735_37441__$1);
var actual_type_37450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37449,(0),null);
var factory_37451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37449,(1),null);
var canonical_f_37453 = (function (){var G__36855 = (factory_37451.cljs$core$IFn$_invoke$arity$1 ? factory_37451.cljs$core$IFn$_invoke$arity$1(f_37414) : factory_37451.call(null,f_37414));
var fexpr__36854 = (cljs.core.truth_(selector_37352)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37351,selector_37352):cljs.core.identity);
return (fexpr__36854.cljs$core$IFn$_invoke$arity$1 ? fexpr__36854.cljs$core$IFn$_invoke$arity$1(G__36855) : fexpr__36854.call(null,G__36855));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37351,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37352,actual_type_37450,f_37414], null),canonical_f_37453], 0));

if(cljs.core.truth_(elem_37351.addEventListener)){
elem_37351.addEventListener(cljs.core.name(actual_type_37450),canonical_f_37453);
} else {
elem_37351.attachEvent(cljs.core.name(actual_type_37450),canonical_f_37453);
}


var G__37460 = cljs.core.next(seq__36735_37441__$1);
var G__37461 = null;
var G__37463 = (0);
var G__37464 = (0);
seq__36735_37417 = G__37460;
chunk__36737_37418 = G__37461;
count__36738_37419 = G__37463;
i__36739_37420 = G__37464;
continue;
}
} else {
}
}
break;
}

var G__37467 = cljs.core.next(seq__36734_37405__$1);
var G__37468 = null;
var G__37469 = (0);
var G__37470 = (0);
seq__36734_37356 = G__37467;
chunk__36741_37357 = G__37468;
count__36742_37358 = G__37469;
i__36743_37359 = G__37470;
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
var len__4789__auto___37474 = arguments.length;
var i__4790__auto___37475 = (0);
while(true){
if((i__4790__auto___37475 < len__4789__auto___37474)){
args__4795__auto__.push((arguments[i__4790__auto___37475]));

var G__37478 = (i__4790__auto___37475 + (1));
i__4790__auto___37475 = G__37478;
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

var vec__36858_37483 = dommy.core.elem_and_selector(elem_sel);
var elem_37484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858_37483,(0),null);
var selector_37485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858_37483,(1),null);
var seq__36861_37487 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36868_37488 = null;
var count__36869_37489 = (0);
var i__36870_37490 = (0);
while(true){
if((i__36870_37490 < count__36869_37489)){
var vec__36916_37496 = chunk__36868_37488.cljs$core$IIndexed$_nth$arity$2(null,i__36870_37490);
var orig_type_37497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36916_37496,(0),null);
var f_37498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36916_37496,(1),null);
var seq__36871_37504 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37497,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37497,cljs.core.identity])));
var chunk__36873_37505 = null;
var count__36874_37506 = (0);
var i__36875_37507 = (0);
while(true){
if((i__36875_37507 < count__36874_37506)){
var vec__36948_37509 = chunk__36873_37505.cljs$core$IIndexed$_nth$arity$2(null,i__36875_37507);
var actual_type_37510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36948_37509,(0),null);
var __37511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36948_37509,(1),null);
var keys_37515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37485,actual_type_37510,f_37498], null);
var canonical_f_37516 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37484),keys_37515);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37484,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37515], 0));

if(cljs.core.truth_(elem_37484.removeEventListener)){
elem_37484.removeEventListener(cljs.core.name(actual_type_37510),canonical_f_37516);
} else {
elem_37484.detachEvent(cljs.core.name(actual_type_37510),canonical_f_37516);
}


var G__37520 = seq__36871_37504;
var G__37521 = chunk__36873_37505;
var G__37522 = count__36874_37506;
var G__37523 = (i__36875_37507 + (1));
seq__36871_37504 = G__37520;
chunk__36873_37505 = G__37521;
count__36874_37506 = G__37522;
i__36875_37507 = G__37523;
continue;
} else {
var temp__5735__auto___37524 = cljs.core.seq(seq__36871_37504);
if(temp__5735__auto___37524){
var seq__36871_37525__$1 = temp__5735__auto___37524;
if(cljs.core.chunked_seq_QMARK_(seq__36871_37525__$1)){
var c__4609__auto___37528 = cljs.core.chunk_first(seq__36871_37525__$1);
var G__37530 = cljs.core.chunk_rest(seq__36871_37525__$1);
var G__37531 = c__4609__auto___37528;
var G__37532 = cljs.core.count(c__4609__auto___37528);
var G__37533 = (0);
seq__36871_37504 = G__37530;
chunk__36873_37505 = G__37531;
count__36874_37506 = G__37532;
i__36875_37507 = G__37533;
continue;
} else {
var vec__36951_37534 = cljs.core.first(seq__36871_37525__$1);
var actual_type_37535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36951_37534,(0),null);
var __37536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36951_37534,(1),null);
var keys_37540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37485,actual_type_37535,f_37498], null);
var canonical_f_37541 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37484),keys_37540);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37484,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37540], 0));

if(cljs.core.truth_(elem_37484.removeEventListener)){
elem_37484.removeEventListener(cljs.core.name(actual_type_37535),canonical_f_37541);
} else {
elem_37484.detachEvent(cljs.core.name(actual_type_37535),canonical_f_37541);
}


var G__37545 = cljs.core.next(seq__36871_37525__$1);
var G__37546 = null;
var G__37547 = (0);
var G__37548 = (0);
seq__36871_37504 = G__37545;
chunk__36873_37505 = G__37546;
count__36874_37506 = G__37547;
i__36875_37507 = G__37548;
continue;
}
} else {
}
}
break;
}

var G__37549 = seq__36861_37487;
var G__37550 = chunk__36868_37488;
var G__37551 = count__36869_37489;
var G__37552 = (i__36870_37490 + (1));
seq__36861_37487 = G__37549;
chunk__36868_37488 = G__37550;
count__36869_37489 = G__37551;
i__36870_37490 = G__37552;
continue;
} else {
var temp__5735__auto___37556 = cljs.core.seq(seq__36861_37487);
if(temp__5735__auto___37556){
var seq__36861_37557__$1 = temp__5735__auto___37556;
if(cljs.core.chunked_seq_QMARK_(seq__36861_37557__$1)){
var c__4609__auto___37558 = cljs.core.chunk_first(seq__36861_37557__$1);
var G__37560 = cljs.core.chunk_rest(seq__36861_37557__$1);
var G__37561 = c__4609__auto___37558;
var G__37562 = cljs.core.count(c__4609__auto___37558);
var G__37563 = (0);
seq__36861_37487 = G__37560;
chunk__36868_37488 = G__37561;
count__36869_37489 = G__37562;
i__36870_37490 = G__37563;
continue;
} else {
var vec__36955_37565 = cljs.core.first(seq__36861_37557__$1);
var orig_type_37566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955_37565,(0),null);
var f_37567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955_37565,(1),null);
var seq__36862_37568 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37566,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37566,cljs.core.identity])));
var chunk__36864_37569 = null;
var count__36865_37570 = (0);
var i__36866_37571 = (0);
while(true){
if((i__36866_37571 < count__36865_37570)){
var vec__36985_37593 = chunk__36864_37569.cljs$core$IIndexed$_nth$arity$2(null,i__36866_37571);
var actual_type_37594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985_37593,(0),null);
var __37595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985_37593,(1),null);
var keys_37597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37485,actual_type_37594,f_37567], null);
var canonical_f_37598 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37484),keys_37597);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37484,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37597], 0));

if(cljs.core.truth_(elem_37484.removeEventListener)){
elem_37484.removeEventListener(cljs.core.name(actual_type_37594),canonical_f_37598);
} else {
elem_37484.detachEvent(cljs.core.name(actual_type_37594),canonical_f_37598);
}


var G__37601 = seq__36862_37568;
var G__37602 = chunk__36864_37569;
var G__37603 = count__36865_37570;
var G__37604 = (i__36866_37571 + (1));
seq__36862_37568 = G__37601;
chunk__36864_37569 = G__37602;
count__36865_37570 = G__37603;
i__36866_37571 = G__37604;
continue;
} else {
var temp__5735__auto___37605__$1 = cljs.core.seq(seq__36862_37568);
if(temp__5735__auto___37605__$1){
var seq__36862_37606__$1 = temp__5735__auto___37605__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36862_37606__$1)){
var c__4609__auto___37608 = cljs.core.chunk_first(seq__36862_37606__$1);
var G__37610 = cljs.core.chunk_rest(seq__36862_37606__$1);
var G__37611 = c__4609__auto___37608;
var G__37612 = cljs.core.count(c__4609__auto___37608);
var G__37613 = (0);
seq__36862_37568 = G__37610;
chunk__36864_37569 = G__37611;
count__36865_37570 = G__37612;
i__36866_37571 = G__37613;
continue;
} else {
var vec__36988_37620 = cljs.core.first(seq__36862_37606__$1);
var actual_type_37621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36988_37620,(0),null);
var __37622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36988_37620,(1),null);
var keys_37625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37485,actual_type_37621,f_37567], null);
var canonical_f_37626 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37484),keys_37625);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37484,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37625], 0));

if(cljs.core.truth_(elem_37484.removeEventListener)){
elem_37484.removeEventListener(cljs.core.name(actual_type_37621),canonical_f_37626);
} else {
elem_37484.detachEvent(cljs.core.name(actual_type_37621),canonical_f_37626);
}


var G__37636 = cljs.core.next(seq__36862_37606__$1);
var G__37637 = null;
var G__37638 = (0);
var G__37639 = (0);
seq__36862_37568 = G__37636;
chunk__36864_37569 = G__37637;
count__36865_37570 = G__37638;
i__36866_37571 = G__37639;
continue;
}
} else {
}
}
break;
}

var G__37642 = cljs.core.next(seq__36861_37557__$1);
var G__37643 = null;
var G__37644 = (0);
var G__37645 = (0);
seq__36861_37487 = G__37642;
chunk__36868_37488 = G__37643;
count__36869_37489 = G__37644;
i__36870_37490 = G__37645;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36856){
var G__36857 = cljs.core.first(seq36856);
var seq36856__$1 = cljs.core.next(seq36856);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36857,seq36856__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37649 = arguments.length;
var i__4790__auto___37650 = (0);
while(true){
if((i__4790__auto___37650 < len__4789__auto___37649)){
args__4795__auto__.push((arguments[i__4790__auto___37650]));

var G__37655 = (i__4790__auto___37650 + (1));
i__4790__auto___37650 = G__37655;
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

var vec__36996_37664 = dommy.core.elem_and_selector(elem_sel);
var elem_37665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36996_37664,(0),null);
var selector_37666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36996_37664,(1),null);
var seq__37000_37672 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__37001_37673 = null;
var count__37002_37674 = (0);
var i__37003_37675 = (0);
while(true){
if((i__37003_37675 < count__37002_37674)){
var vec__37011_37681 = chunk__37001_37673.cljs$core$IIndexed$_nth$arity$2(null,i__37003_37675);
var type_37682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011_37681,(0),null);
var f_37683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011_37681,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37682,((function (seq__37000_37672,chunk__37001_37673,count__37002_37674,i__37003_37675,vec__37011_37681,type_37682,f_37683,vec__36996_37664,elem_37665,selector_37666){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37682,dommy$core$this_fn], 0));

return (f_37683.cljs$core$IFn$_invoke$arity$1 ? f_37683.cljs$core$IFn$_invoke$arity$1(e) : f_37683.call(null,e));
});})(seq__37000_37672,chunk__37001_37673,count__37002_37674,i__37003_37675,vec__37011_37681,type_37682,f_37683,vec__36996_37664,elem_37665,selector_37666))
], 0));


var G__37696 = seq__37000_37672;
var G__37697 = chunk__37001_37673;
var G__37698 = count__37002_37674;
var G__37699 = (i__37003_37675 + (1));
seq__37000_37672 = G__37696;
chunk__37001_37673 = G__37697;
count__37002_37674 = G__37698;
i__37003_37675 = G__37699;
continue;
} else {
var temp__5735__auto___37700 = cljs.core.seq(seq__37000_37672);
if(temp__5735__auto___37700){
var seq__37000_37701__$1 = temp__5735__auto___37700;
if(cljs.core.chunked_seq_QMARK_(seq__37000_37701__$1)){
var c__4609__auto___37702 = cljs.core.chunk_first(seq__37000_37701__$1);
var G__37703 = cljs.core.chunk_rest(seq__37000_37701__$1);
var G__37704 = c__4609__auto___37702;
var G__37705 = cljs.core.count(c__4609__auto___37702);
var G__37706 = (0);
seq__37000_37672 = G__37703;
chunk__37001_37673 = G__37704;
count__37002_37674 = G__37705;
i__37003_37675 = G__37706;
continue;
} else {
var vec__37014_37707 = cljs.core.first(seq__37000_37701__$1);
var type_37708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014_37707,(0),null);
var f_37709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014_37707,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37708,((function (seq__37000_37672,chunk__37001_37673,count__37002_37674,i__37003_37675,vec__37014_37707,type_37708,f_37709,seq__37000_37701__$1,temp__5735__auto___37700,vec__36996_37664,elem_37665,selector_37666){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37708,dommy$core$this_fn], 0));

return (f_37709.cljs$core$IFn$_invoke$arity$1 ? f_37709.cljs$core$IFn$_invoke$arity$1(e) : f_37709.call(null,e));
});})(seq__37000_37672,chunk__37001_37673,count__37002_37674,i__37003_37675,vec__37014_37707,type_37708,f_37709,seq__37000_37701__$1,temp__5735__auto___37700,vec__36996_37664,elem_37665,selector_37666))
], 0));


var G__37717 = cljs.core.next(seq__37000_37701__$1);
var G__37718 = null;
var G__37719 = (0);
var G__37720 = (0);
seq__37000_37672 = G__37717;
chunk__37001_37673 = G__37718;
count__37002_37674 = G__37719;
i__37003_37675 = G__37720;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36994){
var G__36995 = cljs.core.first(seq36994);
var seq36994__$1 = cljs.core.next(seq36994);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36995,seq36994__$1);
}));


//# sourceMappingURL=dommy.core.js.map
