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
var i__4790__auto___37049 = (0);
while(true){
if((i__4790__auto___37049 < len__4789__auto___37048)){
args__4795__auto__.push((arguments[i__4790__auto___37049]));

var G__37050 = (i__4790__auto___37049 + (1));
i__4790__auto___37049 = G__37050;
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
var seq__36601_37051 = cljs.core.seq(keywords);
var chunk__36602_37052 = null;
var count__36603_37053 = (0);
var i__36604_37054 = (0);
while(true){
if((i__36604_37054 < count__36603_37053)){
var kw_37055 = chunk__36602_37052.cljs$core$IIndexed$_nth$arity$2(null,i__36604_37054);
style.removeProperty(dommy.utils.as_str(kw_37055));


var G__37056 = seq__36601_37051;
var G__37057 = chunk__36602_37052;
var G__37058 = count__36603_37053;
var G__37059 = (i__36604_37054 + (1));
seq__36601_37051 = G__37056;
chunk__36602_37052 = G__37057;
count__36603_37053 = G__37058;
i__36604_37054 = G__37059;
continue;
} else {
var temp__5735__auto___37060 = cljs.core.seq(seq__36601_37051);
if(temp__5735__auto___37060){
var seq__36601_37061__$1 = temp__5735__auto___37060;
if(cljs.core.chunked_seq_QMARK_(seq__36601_37061__$1)){
var c__4609__auto___37062 = cljs.core.chunk_first(seq__36601_37061__$1);
var G__37063 = cljs.core.chunk_rest(seq__36601_37061__$1);
var G__37064 = c__4609__auto___37062;
var G__37065 = cljs.core.count(c__4609__auto___37062);
var G__37066 = (0);
seq__36601_37051 = G__37063;
chunk__36602_37052 = G__37064;
count__36603_37053 = G__37065;
i__36604_37054 = G__37066;
continue;
} else {
var kw_37067 = cljs.core.first(seq__36601_37061__$1);
style.removeProperty(dommy.utils.as_str(kw_37067));


var G__37068 = cljs.core.next(seq__36601_37061__$1);
var G__37069 = null;
var G__37070 = (0);
var G__37071 = (0);
seq__36601_37051 = G__37068;
chunk__36602_37052 = G__37069;
count__36603_37053 = G__37070;
i__36604_37054 = G__37071;
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
var len__4789__auto___37072 = arguments.length;
var i__4790__auto___37073 = (0);
while(true){
if((i__4790__auto___37073 < len__4789__auto___37072)){
args__4795__auto__.push((arguments[i__4790__auto___37073]));

var G__37074 = (i__4790__auto___37073 + (1));
i__4790__auto___37073 = G__37074;
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

var seq__36608_37075 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36609_37076 = null;
var count__36610_37077 = (0);
var i__36611_37078 = (0);
while(true){
if((i__36611_37078 < count__36610_37077)){
var vec__36618_37079 = chunk__36609_37076.cljs$core$IIndexed$_nth$arity$2(null,i__36611_37078);
var k_37080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37079,(0),null);
var v_37081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37079,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37080,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37081),"px"].join('')], 0));


var G__37082 = seq__36608_37075;
var G__37083 = chunk__36609_37076;
var G__37084 = count__36610_37077;
var G__37085 = (i__36611_37078 + (1));
seq__36608_37075 = G__37082;
chunk__36609_37076 = G__37083;
count__36610_37077 = G__37084;
i__36611_37078 = G__37085;
continue;
} else {
var temp__5735__auto___37086 = cljs.core.seq(seq__36608_37075);
if(temp__5735__auto___37086){
var seq__36608_37087__$1 = temp__5735__auto___37086;
if(cljs.core.chunked_seq_QMARK_(seq__36608_37087__$1)){
var c__4609__auto___37088 = cljs.core.chunk_first(seq__36608_37087__$1);
var G__37089 = cljs.core.chunk_rest(seq__36608_37087__$1);
var G__37090 = c__4609__auto___37088;
var G__37091 = cljs.core.count(c__4609__auto___37088);
var G__37092 = (0);
seq__36608_37075 = G__37089;
chunk__36609_37076 = G__37090;
count__36610_37077 = G__37091;
i__36611_37078 = G__37092;
continue;
} else {
var vec__36621_37093 = cljs.core.first(seq__36608_37087__$1);
var k_37094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37093,(0),null);
var v_37095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37093,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37094,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37095),"px"].join('')], 0));


var G__37096 = cljs.core.next(seq__36608_37087__$1);
var G__37097 = null;
var G__37098 = (0);
var G__37099 = (0);
seq__36608_37075 = G__37096;
chunk__36609_37076 = G__37097;
count__36610_37077 = G__37098;
i__36611_37078 = G__37099;
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
var len__4789__auto___37101 = arguments.length;
var i__4790__auto___37102 = (0);
while(true){
if((i__4790__auto___37102 < len__4789__auto___37101)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37102]));

var G__37103 = (i__4790__auto___37102 + (1));
i__4790__auto___37102 = G__37103;
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

var seq__36632_37106 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__36633_37107 = null;
var count__36634_37108 = (0);
var i__36635_37109 = (0);
while(true){
if((i__36635_37109 < count__36634_37108)){
var vec__36642_37110 = chunk__36633_37107.cljs$core$IIndexed$_nth$arity$2(null,i__36635_37109);
var k_37111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642_37110,(0),null);
var v_37112__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642_37110,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37111__$1,v_37112__$1);


var G__37113 = seq__36632_37106;
var G__37114 = chunk__36633_37107;
var G__37115 = count__36634_37108;
var G__37116 = (i__36635_37109 + (1));
seq__36632_37106 = G__37113;
chunk__36633_37107 = G__37114;
count__36634_37108 = G__37115;
i__36635_37109 = G__37116;
continue;
} else {
var temp__5735__auto___37117 = cljs.core.seq(seq__36632_37106);
if(temp__5735__auto___37117){
var seq__36632_37118__$1 = temp__5735__auto___37117;
if(cljs.core.chunked_seq_QMARK_(seq__36632_37118__$1)){
var c__4609__auto___37119 = cljs.core.chunk_first(seq__36632_37118__$1);
var G__37120 = cljs.core.chunk_rest(seq__36632_37118__$1);
var G__37121 = c__4609__auto___37119;
var G__37122 = cljs.core.count(c__4609__auto___37119);
var G__37123 = (0);
seq__36632_37106 = G__37120;
chunk__36633_37107 = G__37121;
count__36634_37108 = G__37122;
i__36635_37109 = G__37123;
continue;
} else {
var vec__36645_37124 = cljs.core.first(seq__36632_37118__$1);
var k_37125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645_37124,(0),null);
var v_37126__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645_37124,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37125__$1,v_37126__$1);


var G__37127 = cljs.core.next(seq__36632_37118__$1);
var G__37128 = null;
var G__37129 = (0);
var G__37130 = (0);
seq__36632_37106 = G__37127;
chunk__36633_37107 = G__37128;
count__36634_37108 = G__37129;
i__36635_37109 = G__37130;
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
var len__4789__auto___37132 = arguments.length;
var i__4790__auto___37133 = (0);
while(true){
if((i__4790__auto___37133 < len__4789__auto___37132)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37133]));

var G__37134 = (i__4790__auto___37133 + (1));
i__4790__auto___37133 = G__37134;
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
var k_37136__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__36653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__36653.cljs$core$IFn$_invoke$arity$1 ? fexpr__36653.cljs$core$IFn$_invoke$arity$1(k_37136__$1) : fexpr__36653.call(null,k_37136__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_37136__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36654_37138 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__36655_37139 = null;
var count__36656_37140 = (0);
var i__36657_37141 = (0);
while(true){
if((i__36657_37141 < count__36656_37140)){
var k_37142__$1 = chunk__36655_37139.cljs$core$IIndexed$_nth$arity$2(null,i__36657_37141);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37142__$1);


var G__37143 = seq__36654_37138;
var G__37144 = chunk__36655_37139;
var G__37145 = count__36656_37140;
var G__37146 = (i__36657_37141 + (1));
seq__36654_37138 = G__37143;
chunk__36655_37139 = G__37144;
count__36656_37140 = G__37145;
i__36657_37141 = G__37146;
continue;
} else {
var temp__5735__auto___37147 = cljs.core.seq(seq__36654_37138);
if(temp__5735__auto___37147){
var seq__36654_37148__$1 = temp__5735__auto___37147;
if(cljs.core.chunked_seq_QMARK_(seq__36654_37148__$1)){
var c__4609__auto___37149 = cljs.core.chunk_first(seq__36654_37148__$1);
var G__37150 = cljs.core.chunk_rest(seq__36654_37148__$1);
var G__37151 = c__4609__auto___37149;
var G__37152 = cljs.core.count(c__4609__auto___37149);
var G__37153 = (0);
seq__36654_37138 = G__37150;
chunk__36655_37139 = G__37151;
count__36656_37140 = G__37152;
i__36657_37141 = G__37153;
continue;
} else {
var k_37154__$1 = cljs.core.first(seq__36654_37148__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37154__$1);


var G__37155 = cljs.core.next(seq__36654_37148__$1);
var G__37156 = null;
var G__37157 = (0);
var G__37158 = (0);
seq__36654_37138 = G__37155;
chunk__36655_37139 = G__37156;
count__36656_37140 = G__37157;
i__36657_37141 = G__37158;
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
var c__4609__auto___37201 = cljs.core.chunk_first(seq__36669_37200__$1);
var G__37202 = cljs.core.chunk_rest(seq__36669_37200__$1);
var G__37203 = c__4609__auto___37201;
var G__37204 = cljs.core.count(c__4609__auto___37201);
var G__37205 = (0);
seq__36669_37189 = G__37202;
chunk__36670_37190 = G__37203;
count__36671_37191 = G__37204;
i__36672_37192 = G__37205;
continue;
} else {
var c_37206 = cljs.core.first(seq__36669_37200__$1);
var class_name_37207 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37207,c_37206))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37207 === ""))?c_37206:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37207)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37206)].join('')));
}


var G__37208 = cljs.core.next(seq__36669_37200__$1);
var G__37209 = null;
var G__37210 = (0);
var G__37211 = (0);
seq__36669_37189 = G__37208;
chunk__36670_37190 = G__37209;
count__36671_37191 = G__37210;
i__36672_37192 = G__37211;
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
var seq__36673_37212 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37213 = null;
var count__36675_37214 = (0);
var i__36676_37215 = (0);
while(true){
if((i__36676_37215 < count__36675_37214)){
var c_37216 = chunk__36674_37213.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37215);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37216);


var G__37217 = seq__36673_37212;
var G__37218 = chunk__36674_37213;
var G__37219 = count__36675_37214;
var G__37220 = (i__36676_37215 + (1));
seq__36673_37212 = G__37217;
chunk__36674_37213 = G__37218;
count__36675_37214 = G__37219;
i__36676_37215 = G__37220;
continue;
} else {
var temp__5735__auto___37221 = cljs.core.seq(seq__36673_37212);
if(temp__5735__auto___37221){
var seq__36673_37222__$1 = temp__5735__auto___37221;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37222__$1)){
var c__4609__auto___37223 = cljs.core.chunk_first(seq__36673_37222__$1);
var G__37224 = cljs.core.chunk_rest(seq__36673_37222__$1);
var G__37225 = c__4609__auto___37223;
var G__37226 = cljs.core.count(c__4609__auto___37223);
var G__37227 = (0);
seq__36673_37212 = G__37224;
chunk__36674_37213 = G__37225;
count__36675_37214 = G__37226;
i__36676_37215 = G__37227;
continue;
} else {
var c_37228 = cljs.core.first(seq__36673_37222__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37228);


var G__37229 = cljs.core.next(seq__36673_37222__$1);
var G__37230 = null;
var G__37231 = (0);
var G__37232 = (0);
seq__36673_37212 = G__37229;
chunk__36674_37213 = G__37230;
count__36675_37214 = G__37231;
i__36676_37215 = G__37232;
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
var len__4789__auto___37234 = arguments.length;
var i__4790__auto___37235 = (0);
while(true){
if((i__4790__auto___37235 < len__4789__auto___37234)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37235]));

var G__37236 = (i__4790__auto___37235 + (1));
i__4790__auto___37235 = G__37236;
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
var temp__5733__auto___37237 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37237)){
var class_list_37238 = temp__5733__auto___37237;
class_list_37238.remove(c__$1);
} else {
var class_name_37239 = dommy.core.class$(elem);
var new_class_name_37240 = dommy.utils.remove_class_str(class_name_37239,c__$1);
if((class_name_37239 === new_class_name_37240)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37240);
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


var G__37241 = seq__36682;
var G__37242 = chunk__36683;
var G__37243 = count__36684;
var G__37244 = (i__36685 + (1));
seq__36682 = G__37241;
chunk__36683 = G__37242;
count__36684 = G__37243;
i__36685 = G__37244;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36682);
if(temp__5735__auto__){
var seq__36682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36682__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36682__$1);
var G__37245 = cljs.core.chunk_rest(seq__36682__$1);
var G__37246 = c__4609__auto__;
var G__37247 = cljs.core.count(c__4609__auto__);
var G__37248 = (0);
seq__36682 = G__37245;
chunk__36683 = G__37246;
count__36684 = G__37247;
i__36685 = G__37248;
continue;
} else {
var c = cljs.core.first(seq__36682__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37249 = cljs.core.next(seq__36682__$1);
var G__37250 = null;
var G__37251 = (0);
var G__37252 = (0);
seq__36682 = G__37249;
chunk__36683 = G__37250;
count__36684 = G__37251;
i__36685 = G__37252;
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
var temp__5733__auto___37254 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37254)){
var class_list_37255 = temp__5733__auto___37254;
class_list_37255.toggle(c__$1);
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
var len__4789__auto___37260 = arguments.length;
var i__4790__auto___37261 = (0);
while(true){
if((i__4790__auto___37261 < len__4789__auto___37260)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37261]));

var G__37262 = (i__4790__auto___37261 + (1));
i__4790__auto___37261 = G__37262;
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
var seq__36701_37264 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36702_37265 = null;
var count__36703_37266 = (0);
var i__36704_37267 = (0);
while(true){
if((i__36704_37267 < count__36703_37266)){
var c_37268 = chunk__36702_37265.cljs$core$IIndexed$_nth$arity$2(null,i__36704_37267);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37268);


var G__37269 = seq__36701_37264;
var G__37270 = chunk__36702_37265;
var G__37271 = count__36703_37266;
var G__37272 = (i__36704_37267 + (1));
seq__36701_37264 = G__37269;
chunk__36702_37265 = G__37270;
count__36703_37266 = G__37271;
i__36704_37267 = G__37272;
continue;
} else {
var temp__5735__auto___37273 = cljs.core.seq(seq__36701_37264);
if(temp__5735__auto___37273){
var seq__36701_37274__$1 = temp__5735__auto___37273;
if(cljs.core.chunked_seq_QMARK_(seq__36701_37274__$1)){
var c__4609__auto___37275 = cljs.core.chunk_first(seq__36701_37274__$1);
var G__37276 = cljs.core.chunk_rest(seq__36701_37274__$1);
var G__37277 = c__4609__auto___37275;
var G__37278 = cljs.core.count(c__4609__auto___37275);
var G__37279 = (0);
seq__36701_37264 = G__37276;
chunk__36702_37265 = G__37277;
count__36703_37266 = G__37278;
i__36704_37267 = G__37279;
continue;
} else {
var c_37281 = cljs.core.first(seq__36701_37274__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37281);


var G__37282 = cljs.core.next(seq__36701_37274__$1);
var G__37283 = null;
var G__37284 = (0);
var G__37285 = (0);
seq__36701_37264 = G__37282;
chunk__36702_37265 = G__37283;
count__36703_37266 = G__37284;
i__36704_37267 = G__37285;
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
var len__4789__auto___37290 = arguments.length;
var i__4790__auto___37291 = (0);
while(true){
if((i__4790__auto___37291 < len__4789__auto___37290)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37291]));

var G__37292 = (i__4790__auto___37291 + (1));
i__4790__auto___37291 = G__37292;
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
var seq__36711_37293 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36712_37294 = null;
var count__36713_37295 = (0);
var i__36714_37296 = (0);
while(true){
if((i__36714_37296 < count__36713_37295)){
var c_37298 = chunk__36712_37294.cljs$core$IIndexed$_nth$arity$2(null,i__36714_37296);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37298);


var G__37303 = seq__36711_37293;
var G__37304 = chunk__36712_37294;
var G__37305 = count__36713_37295;
var G__37306 = (i__36714_37296 + (1));
seq__36711_37293 = G__37303;
chunk__36712_37294 = G__37304;
count__36713_37295 = G__37305;
i__36714_37296 = G__37306;
continue;
} else {
var temp__5735__auto___37307 = cljs.core.seq(seq__36711_37293);
if(temp__5735__auto___37307){
var seq__36711_37308__$1 = temp__5735__auto___37307;
if(cljs.core.chunked_seq_QMARK_(seq__36711_37308__$1)){
var c__4609__auto___37309 = cljs.core.chunk_first(seq__36711_37308__$1);
var G__37310 = cljs.core.chunk_rest(seq__36711_37308__$1);
var G__37311 = c__4609__auto___37309;
var G__37312 = cljs.core.count(c__4609__auto___37309);
var G__37313 = (0);
seq__36711_37293 = G__37310;
chunk__36712_37294 = G__37311;
count__36713_37295 = G__37312;
i__36714_37296 = G__37313;
continue;
} else {
var c_37314 = cljs.core.first(seq__36711_37308__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37314);


var G__37315 = cljs.core.next(seq__36711_37308__$1);
var G__37316 = null;
var G__37317 = (0);
var G__37318 = (0);
seq__36711_37293 = G__37315;
chunk__36712_37294 = G__37316;
count__36713_37295 = G__37317;
i__36714_37296 = G__37318;
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
var temp__5733__auto___37321 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___37321)){
var next_37322 = temp__5733__auto___37321;
dommy.core.insert_before_BANG_(elem,next_37322);
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
var vec__36812_37358 = chunk__36746_37355.cljs$core$IIndexed$_nth$arity$2(null,i__36748_37357);
var actual_type_37359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812_37358,(0),null);
var factory_37360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812_37358,(1),null);
var canonical_f_37361 = (function (){var G__36816 = (factory_37360.cljs$core$IFn$_invoke$arity$1 ? factory_37360.cljs$core$IFn$_invoke$arity$1(f_37353) : factory_37360.call(null,f_37353));
var fexpr__36815 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36815.cljs$core$IFn$_invoke$arity$1 ? fexpr__36815.cljs$core$IFn$_invoke$arity$1(G__36816) : fexpr__36815.call(null,G__36816));
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
var vec__36817_37373 = cljs.core.first(seq__36744_37367__$1);
var actual_type_37374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36817_37373,(0),null);
var factory_37375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36817_37373,(1),null);
var canonical_f_37376 = (function (){var G__36821 = (factory_37375.cljs$core$IFn$_invoke$arity$1 ? factory_37375.cljs$core$IFn$_invoke$arity$1(f_37353) : factory_37375.call(null,f_37353));
var fexpr__36820 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36820.cljs$core$IFn$_invoke$arity$1 ? fexpr__36820.cljs$core$IFn$_invoke$arity$1(G__36821) : fexpr__36820.call(null,G__36821));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37374,f_37353], null),canonical_f_37376], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37374),canonical_f_37376);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37374),canonical_f_37376);
}


var G__37377 = cljs.core.next(seq__36744_37367__$1);
var G__37378 = null;
var G__37379 = (0);
var G__37380 = (0);
seq__36744_37354 = G__37377;
chunk__36746_37355 = G__37378;
count__36747_37356 = G__37379;
i__36748_37357 = G__37380;
continue;
}
} else {
}
}
break;
}

var G__37381 = seq__36734_37347;
var G__37382 = chunk__36741_37348;
var G__37383 = count__36742_37349;
var G__37384 = (i__36743_37350 + (1));
seq__36734_37347 = G__37381;
chunk__36741_37348 = G__37382;
count__36742_37349 = G__37383;
i__36743_37350 = G__37384;
continue;
} else {
var temp__5735__auto___37385 = cljs.core.seq(seq__36734_37347);
if(temp__5735__auto___37385){
var seq__36734_37386__$1 = temp__5735__auto___37385;
if(cljs.core.chunked_seq_QMARK_(seq__36734_37386__$1)){
var c__4609__auto___37387 = cljs.core.chunk_first(seq__36734_37386__$1);
var G__37388 = cljs.core.chunk_rest(seq__36734_37386__$1);
var G__37389 = c__4609__auto___37387;
var G__37390 = cljs.core.count(c__4609__auto___37387);
var G__37391 = (0);
seq__36734_37347 = G__37388;
chunk__36741_37348 = G__37389;
count__36742_37349 = G__37390;
i__36743_37350 = G__37391;
continue;
} else {
var vec__36826_37392 = cljs.core.first(seq__36734_37386__$1);
var orig_type_37393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826_37392,(0),null);
var f_37394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826_37392,(1),null);
var seq__36735_37395 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37393,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37393,cljs.core.identity])));
var chunk__36737_37396 = null;
var count__36738_37397 = (0);
var i__36739_37398 = (0);
while(true){
if((i__36739_37398 < count__36738_37397)){
var vec__36839_37399 = chunk__36737_37396.cljs$core$IIndexed$_nth$arity$2(null,i__36739_37398);
var actual_type_37400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36839_37399,(0),null);
var factory_37401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36839_37399,(1),null);
var canonical_f_37402 = (function (){var G__36843 = (factory_37401.cljs$core$IFn$_invoke$arity$1 ? factory_37401.cljs$core$IFn$_invoke$arity$1(f_37394) : factory_37401.call(null,f_37394));
var fexpr__36842 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36842.cljs$core$IFn$_invoke$arity$1 ? fexpr__36842.cljs$core$IFn$_invoke$arity$1(G__36843) : fexpr__36842.call(null,G__36843));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37400,f_37394], null),canonical_f_37402], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37400),canonical_f_37402);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37400),canonical_f_37402);
}


var G__37403 = seq__36735_37395;
var G__37404 = chunk__36737_37396;
var G__37405 = count__36738_37397;
var G__37406 = (i__36739_37398 + (1));
seq__36735_37395 = G__37403;
chunk__36737_37396 = G__37404;
count__36738_37397 = G__37405;
i__36739_37398 = G__37406;
continue;
} else {
var temp__5735__auto___37407__$1 = cljs.core.seq(seq__36735_37395);
if(temp__5735__auto___37407__$1){
var seq__36735_37408__$1 = temp__5735__auto___37407__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36735_37408__$1)){
var c__4609__auto___37409 = cljs.core.chunk_first(seq__36735_37408__$1);
var G__37410 = cljs.core.chunk_rest(seq__36735_37408__$1);
var G__37411 = c__4609__auto___37409;
var G__37412 = cljs.core.count(c__4609__auto___37409);
var G__37413 = (0);
seq__36735_37395 = G__37410;
chunk__36737_37396 = G__37411;
count__36738_37397 = G__37412;
i__36739_37398 = G__37413;
continue;
} else {
var vec__36847_37414 = cljs.core.first(seq__36735_37408__$1);
var actual_type_37415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847_37414,(0),null);
var factory_37416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847_37414,(1),null);
var canonical_f_37417 = (function (){var G__36851 = (factory_37416.cljs$core$IFn$_invoke$arity$1 ? factory_37416.cljs$core$IFn$_invoke$arity$1(f_37394) : factory_37416.call(null,f_37394));
var fexpr__36850 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36850.cljs$core$IFn$_invoke$arity$1 ? fexpr__36850.cljs$core$IFn$_invoke$arity$1(G__36851) : fexpr__36850.call(null,G__36851));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37415,f_37394], null),canonical_f_37417], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37415),canonical_f_37417);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37415),canonical_f_37417);
}


var G__37418 = cljs.core.next(seq__36735_37408__$1);
var G__37419 = null;
var G__37420 = (0);
var G__37421 = (0);
seq__36735_37395 = G__37418;
chunk__36737_37396 = G__37419;
count__36738_37397 = G__37420;
i__36739_37398 = G__37421;
continue;
}
} else {
}
}
break;
}

var G__37422 = cljs.core.next(seq__36734_37386__$1);
var G__37423 = null;
var G__37424 = (0);
var G__37425 = (0);
seq__36734_37347 = G__37422;
chunk__36741_37348 = G__37423;
count__36742_37349 = G__37424;
i__36743_37350 = G__37425;
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
var len__4789__auto___37426 = arguments.length;
var i__4790__auto___37427 = (0);
while(true){
if((i__4790__auto___37427 < len__4789__auto___37426)){
args__4795__auto__.push((arguments[i__4790__auto___37427]));

var G__37428 = (i__4790__auto___37427 + (1));
i__4790__auto___37427 = G__37428;
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

var vec__36858_37429 = dommy.core.elem_and_selector(elem_sel);
var elem_37430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858_37429,(0),null);
var selector_37431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858_37429,(1),null);
var seq__36861_37432 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36868_37433 = null;
var count__36869_37434 = (0);
var i__36870_37435 = (0);
while(true){
if((i__36870_37435 < count__36869_37434)){
var vec__36912_37436 = chunk__36868_37433.cljs$core$IIndexed$_nth$arity$2(null,i__36870_37435);
var orig_type_37437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912_37436,(0),null);
var f_37438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912_37436,(1),null);
var seq__36871_37439 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37437,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37437,cljs.core.identity])));
var chunk__36873_37440 = null;
var count__36874_37441 = (0);
var i__36875_37442 = (0);
while(true){
if((i__36875_37442 < count__36874_37441)){
var vec__36925_37443 = chunk__36873_37440.cljs$core$IIndexed$_nth$arity$2(null,i__36875_37442);
var actual_type_37444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925_37443,(0),null);
var __37445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925_37443,(1),null);
var keys_37446 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37431,actual_type_37444,f_37438], null);
var canonical_f_37447 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37430),keys_37446);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37430,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37446], 0));

if(cljs.core.truth_(elem_37430.removeEventListener)){
elem_37430.removeEventListener(cljs.core.name(actual_type_37444),canonical_f_37447);
} else {
elem_37430.detachEvent(cljs.core.name(actual_type_37444),canonical_f_37447);
}


var G__37448 = seq__36871_37439;
var G__37449 = chunk__36873_37440;
var G__37450 = count__36874_37441;
var G__37451 = (i__36875_37442 + (1));
seq__36871_37439 = G__37448;
chunk__36873_37440 = G__37449;
count__36874_37441 = G__37450;
i__36875_37442 = G__37451;
continue;
} else {
var temp__5735__auto___37452 = cljs.core.seq(seq__36871_37439);
if(temp__5735__auto___37452){
var seq__36871_37453__$1 = temp__5735__auto___37452;
if(cljs.core.chunked_seq_QMARK_(seq__36871_37453__$1)){
var c__4609__auto___37454 = cljs.core.chunk_first(seq__36871_37453__$1);
var G__37455 = cljs.core.chunk_rest(seq__36871_37453__$1);
var G__37456 = c__4609__auto___37454;
var G__37457 = cljs.core.count(c__4609__auto___37454);
var G__37458 = (0);
seq__36871_37439 = G__37455;
chunk__36873_37440 = G__37456;
count__36874_37441 = G__37457;
i__36875_37442 = G__37458;
continue;
} else {
var vec__36929_37459 = cljs.core.first(seq__36871_37453__$1);
var actual_type_37460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36929_37459,(0),null);
var __37461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36929_37459,(1),null);
var keys_37462 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37431,actual_type_37460,f_37438], null);
var canonical_f_37463 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37430),keys_37462);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37430,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37462], 0));

if(cljs.core.truth_(elem_37430.removeEventListener)){
elem_37430.removeEventListener(cljs.core.name(actual_type_37460),canonical_f_37463);
} else {
elem_37430.detachEvent(cljs.core.name(actual_type_37460),canonical_f_37463);
}


var G__37464 = cljs.core.next(seq__36871_37453__$1);
var G__37465 = null;
var G__37466 = (0);
var G__37467 = (0);
seq__36871_37439 = G__37464;
chunk__36873_37440 = G__37465;
count__36874_37441 = G__37466;
i__36875_37442 = G__37467;
continue;
}
} else {
}
}
break;
}

var G__37468 = seq__36861_37432;
var G__37469 = chunk__36868_37433;
var G__37470 = count__36869_37434;
var G__37471 = (i__36870_37435 + (1));
seq__36861_37432 = G__37468;
chunk__36868_37433 = G__37469;
count__36869_37434 = G__37470;
i__36870_37435 = G__37471;
continue;
} else {
var temp__5735__auto___37472 = cljs.core.seq(seq__36861_37432);
if(temp__5735__auto___37472){
var seq__36861_37473__$1 = temp__5735__auto___37472;
if(cljs.core.chunked_seq_QMARK_(seq__36861_37473__$1)){
var c__4609__auto___37474 = cljs.core.chunk_first(seq__36861_37473__$1);
var G__37475 = cljs.core.chunk_rest(seq__36861_37473__$1);
var G__37476 = c__4609__auto___37474;
var G__37477 = cljs.core.count(c__4609__auto___37474);
var G__37478 = (0);
seq__36861_37432 = G__37475;
chunk__36868_37433 = G__37476;
count__36869_37434 = G__37477;
i__36870_37435 = G__37478;
continue;
} else {
var vec__36954_37479 = cljs.core.first(seq__36861_37473__$1);
var orig_type_37480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36954_37479,(0),null);
var f_37481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36954_37479,(1),null);
var seq__36862_37482 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37480,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37480,cljs.core.identity])));
var chunk__36864_37483 = null;
var count__36865_37484 = (0);
var i__36866_37485 = (0);
while(true){
if((i__36866_37485 < count__36865_37484)){
var vec__36964_37486 = chunk__36864_37483.cljs$core$IIndexed$_nth$arity$2(null,i__36866_37485);
var actual_type_37487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36964_37486,(0),null);
var __37488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36964_37486,(1),null);
var keys_37489 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37431,actual_type_37487,f_37481], null);
var canonical_f_37490 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37430),keys_37489);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37430,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37489], 0));

if(cljs.core.truth_(elem_37430.removeEventListener)){
elem_37430.removeEventListener(cljs.core.name(actual_type_37487),canonical_f_37490);
} else {
elem_37430.detachEvent(cljs.core.name(actual_type_37487),canonical_f_37490);
}


var G__37491 = seq__36862_37482;
var G__37492 = chunk__36864_37483;
var G__37493 = count__36865_37484;
var G__37494 = (i__36866_37485 + (1));
seq__36862_37482 = G__37491;
chunk__36864_37483 = G__37492;
count__36865_37484 = G__37493;
i__36866_37485 = G__37494;
continue;
} else {
var temp__5735__auto___37495__$1 = cljs.core.seq(seq__36862_37482);
if(temp__5735__auto___37495__$1){
var seq__36862_37496__$1 = temp__5735__auto___37495__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36862_37496__$1)){
var c__4609__auto___37497 = cljs.core.chunk_first(seq__36862_37496__$1);
var G__37498 = cljs.core.chunk_rest(seq__36862_37496__$1);
var G__37499 = c__4609__auto___37497;
var G__37500 = cljs.core.count(c__4609__auto___37497);
var G__37501 = (0);
seq__36862_37482 = G__37498;
chunk__36864_37483 = G__37499;
count__36865_37484 = G__37500;
i__36866_37485 = G__37501;
continue;
} else {
var vec__36983_37504 = cljs.core.first(seq__36862_37496__$1);
var actual_type_37505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36983_37504,(0),null);
var __37506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36983_37504,(1),null);
var keys_37507 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37431,actual_type_37505,f_37481], null);
var canonical_f_37508 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37430),keys_37507);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37430,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37507], 0));

if(cljs.core.truth_(elem_37430.removeEventListener)){
elem_37430.removeEventListener(cljs.core.name(actual_type_37505),canonical_f_37508);
} else {
elem_37430.detachEvent(cljs.core.name(actual_type_37505),canonical_f_37508);
}


var G__37511 = cljs.core.next(seq__36862_37496__$1);
var G__37512 = null;
var G__37513 = (0);
var G__37514 = (0);
seq__36862_37482 = G__37511;
chunk__36864_37483 = G__37512;
count__36865_37484 = G__37513;
i__36866_37485 = G__37514;
continue;
}
} else {
}
}
break;
}

var G__37516 = cljs.core.next(seq__36861_37473__$1);
var G__37517 = null;
var G__37518 = (0);
var G__37519 = (0);
seq__36861_37432 = G__37516;
chunk__36868_37433 = G__37517;
count__36869_37434 = G__37518;
i__36870_37435 = G__37519;
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
var len__4789__auto___37521 = arguments.length;
var i__4790__auto___37522 = (0);
while(true){
if((i__4790__auto___37522 < len__4789__auto___37521)){
args__4795__auto__.push((arguments[i__4790__auto___37522]));

var G__37523 = (i__4790__auto___37522 + (1));
i__4790__auto___37522 = G__37523;
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

var vec__36996_37524 = dommy.core.elem_and_selector(elem_sel);
var elem_37525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36996_37524,(0),null);
var selector_37526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36996_37524,(1),null);
var seq__36999_37527 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__37000_37528 = null;
var count__37001_37529 = (0);
var i__37002_37530 = (0);
while(true){
if((i__37002_37530 < count__37001_37529)){
var vec__37009_37531 = chunk__37000_37528.cljs$core$IIndexed$_nth$arity$2(null,i__37002_37530);
var type_37532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009_37531,(0),null);
var f_37533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009_37531,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37532,((function (seq__36999_37527,chunk__37000_37528,count__37001_37529,i__37002_37530,vec__37009_37531,type_37532,f_37533,vec__36996_37524,elem_37525,selector_37526){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37532,dommy$core$this_fn], 0));

return (f_37533.cljs$core$IFn$_invoke$arity$1 ? f_37533.cljs$core$IFn$_invoke$arity$1(e) : f_37533.call(null,e));
});})(seq__36999_37527,chunk__37000_37528,count__37001_37529,i__37002_37530,vec__37009_37531,type_37532,f_37533,vec__36996_37524,elem_37525,selector_37526))
], 0));


var G__37538 = seq__36999_37527;
var G__37539 = chunk__37000_37528;
var G__37540 = count__37001_37529;
var G__37541 = (i__37002_37530 + (1));
seq__36999_37527 = G__37538;
chunk__37000_37528 = G__37539;
count__37001_37529 = G__37540;
i__37002_37530 = G__37541;
continue;
} else {
var temp__5735__auto___37542 = cljs.core.seq(seq__36999_37527);
if(temp__5735__auto___37542){
var seq__36999_37543__$1 = temp__5735__auto___37542;
if(cljs.core.chunked_seq_QMARK_(seq__36999_37543__$1)){
var c__4609__auto___37544 = cljs.core.chunk_first(seq__36999_37543__$1);
var G__37545 = cljs.core.chunk_rest(seq__36999_37543__$1);
var G__37546 = c__4609__auto___37544;
var G__37547 = cljs.core.count(c__4609__auto___37544);
var G__37548 = (0);
seq__36999_37527 = G__37545;
chunk__37000_37528 = G__37546;
count__37001_37529 = G__37547;
i__37002_37530 = G__37548;
continue;
} else {
var vec__37013_37549 = cljs.core.first(seq__36999_37543__$1);
var type_37550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37013_37549,(0),null);
var f_37551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37013_37549,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37550,((function (seq__36999_37527,chunk__37000_37528,count__37001_37529,i__37002_37530,vec__37013_37549,type_37550,f_37551,seq__36999_37543__$1,temp__5735__auto___37542,vec__36996_37524,elem_37525,selector_37526){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37550,dommy$core$this_fn], 0));

return (f_37551.cljs$core$IFn$_invoke$arity$1 ? f_37551.cljs$core$IFn$_invoke$arity$1(e) : f_37551.call(null,e));
});})(seq__36999_37527,chunk__37000_37528,count__37001_37529,i__37002_37530,vec__37013_37549,type_37550,f_37551,seq__36999_37543__$1,temp__5735__auto___37542,vec__36996_37524,elem_37525,selector_37526))
], 0));


var G__37555 = cljs.core.next(seq__36999_37543__$1);
var G__37556 = null;
var G__37557 = (0);
var G__37558 = (0);
seq__36999_37527 = G__37555;
chunk__37000_37528 = G__37556;
count__37001_37529 = G__37557;
i__37002_37530 = G__37558;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36991){
var G__36992 = cljs.core.first(seq36991);
var seq36991__$1 = cljs.core.next(seq36991);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36992,seq36991__$1);
}));


//# sourceMappingURL=dommy.core.js.map
