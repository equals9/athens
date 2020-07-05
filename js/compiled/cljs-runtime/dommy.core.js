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


var G__37057 = seq__36601_37051;
var G__37058 = chunk__36602_37052;
var G__37059 = count__36603_37053;
var G__37060 = (i__36604_37054 + (1));
seq__36601_37051 = G__37057;
chunk__36602_37052 = G__37058;
count__36603_37053 = G__37059;
i__36604_37054 = G__37060;
continue;
} else {
var temp__5735__auto___37062 = cljs.core.seq(seq__36601_37051);
if(temp__5735__auto___37062){
var seq__36601_37063__$1 = temp__5735__auto___37062;
if(cljs.core.chunked_seq_QMARK_(seq__36601_37063__$1)){
var c__4609__auto___37064 = cljs.core.chunk_first(seq__36601_37063__$1);
var G__37065 = cljs.core.chunk_rest(seq__36601_37063__$1);
var G__37066 = c__4609__auto___37064;
var G__37067 = cljs.core.count(c__4609__auto___37064);
var G__37068 = (0);
seq__36601_37051 = G__37065;
chunk__36602_37052 = G__37066;
count__36603_37053 = G__37067;
i__36604_37054 = G__37068;
continue;
} else {
var kw_37069 = cljs.core.first(seq__36601_37063__$1);
style.removeProperty(dommy.utils.as_str(kw_37069));


var G__37070 = cljs.core.next(seq__36601_37063__$1);
var G__37071 = null;
var G__37072 = (0);
var G__37073 = (0);
seq__36601_37051 = G__37070;
chunk__36602_37052 = G__37071;
count__36603_37053 = G__37072;
i__36604_37054 = G__37073;
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

var seq__36608_37077 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36609_37078 = null;
var count__36610_37079 = (0);
var i__36611_37080 = (0);
while(true){
if((i__36611_37080 < count__36610_37079)){
var vec__36618_37081 = chunk__36609_37078.cljs$core$IIndexed$_nth$arity$2(null,i__36611_37080);
var k_37082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37081,(0),null);
var v_37083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37081,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37082,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37083),"px"].join('')], 0));


var G__37084 = seq__36608_37077;
var G__37085 = chunk__36609_37078;
var G__37086 = count__36610_37079;
var G__37087 = (i__36611_37080 + (1));
seq__36608_37077 = G__37084;
chunk__36609_37078 = G__37085;
count__36610_37079 = G__37086;
i__36611_37080 = G__37087;
continue;
} else {
var temp__5735__auto___37089 = cljs.core.seq(seq__36608_37077);
if(temp__5735__auto___37089){
var seq__36608_37090__$1 = temp__5735__auto___37089;
if(cljs.core.chunked_seq_QMARK_(seq__36608_37090__$1)){
var c__4609__auto___37092 = cljs.core.chunk_first(seq__36608_37090__$1);
var G__37093 = cljs.core.chunk_rest(seq__36608_37090__$1);
var G__37094 = c__4609__auto___37092;
var G__37095 = cljs.core.count(c__4609__auto___37092);
var G__37096 = (0);
seq__36608_37077 = G__37093;
chunk__36609_37078 = G__37094;
count__36610_37079 = G__37095;
i__36611_37080 = G__37096;
continue;
} else {
var vec__36621_37097 = cljs.core.first(seq__36608_37090__$1);
var k_37098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37097,(0),null);
var v_37099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37097,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37098,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37099),"px"].join('')], 0));


var G__37100 = cljs.core.next(seq__36608_37090__$1);
var G__37101 = null;
var G__37102 = (0);
var G__37103 = (0);
seq__36608_37077 = G__37100;
chunk__36609_37078 = G__37101;
count__36610_37079 = G__37102;
i__36611_37080 = G__37103;
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
var temp__5735__auto___37178 = cljs.core.seq(seq__36665_37168);
if(temp__5735__auto___37178){
var seq__36665_37179__$1 = temp__5735__auto___37178;
if(cljs.core.chunked_seq_QMARK_(seq__36665_37179__$1)){
var c__4609__auto___37180 = cljs.core.chunk_first(seq__36665_37179__$1);
var G__37182 = cljs.core.chunk_rest(seq__36665_37179__$1);
var G__37183 = c__4609__auto___37180;
var G__37184 = cljs.core.count(c__4609__auto___37180);
var G__37185 = (0);
seq__36665_37168 = G__37182;
chunk__36666_37169 = G__37183;
count__36667_37170 = G__37184;
i__36668_37171 = G__37185;
continue;
} else {
var c_37186 = cljs.core.first(seq__36665_37179__$1);
class_list_37167.add(c_37186);


var G__37187 = cljs.core.next(seq__36665_37179__$1);
var G__37188 = null;
var G__37189 = (0);
var G__37190 = (0);
seq__36665_37168 = G__37187;
chunk__36666_37169 = G__37188;
count__36667_37170 = G__37189;
i__36668_37171 = G__37190;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36669_37191 = cljs.core.seq(classes__$1);
var chunk__36670_37192 = null;
var count__36671_37193 = (0);
var i__36672_37194 = (0);
while(true){
if((i__36672_37194 < count__36671_37193)){
var c_37195 = chunk__36670_37192.cljs$core$IIndexed$_nth$arity$2(null,i__36672_37194);
var class_name_37196 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37196,c_37195))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37196 === ""))?c_37195:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37196)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37195)].join('')));
}


var G__37197 = seq__36669_37191;
var G__37198 = chunk__36670_37192;
var G__37199 = count__36671_37193;
var G__37200 = (i__36672_37194 + (1));
seq__36669_37191 = G__37197;
chunk__36670_37192 = G__37198;
count__36671_37193 = G__37199;
i__36672_37194 = G__37200;
continue;
} else {
var temp__5735__auto___37201 = cljs.core.seq(seq__36669_37191);
if(temp__5735__auto___37201){
var seq__36669_37203__$1 = temp__5735__auto___37201;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37203__$1)){
var c__4609__auto___37204 = cljs.core.chunk_first(seq__36669_37203__$1);
var G__37205 = cljs.core.chunk_rest(seq__36669_37203__$1);
var G__37206 = c__4609__auto___37204;
var G__37207 = cljs.core.count(c__4609__auto___37204);
var G__37208 = (0);
seq__36669_37191 = G__37205;
chunk__36670_37192 = G__37206;
count__36671_37193 = G__37207;
i__36672_37194 = G__37208;
continue;
} else {
var c_37209 = cljs.core.first(seq__36669_37203__$1);
var class_name_37210 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37210,c_37209))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37210 === ""))?c_37209:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37210)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37209)].join('')));
}


var G__37213 = cljs.core.next(seq__36669_37203__$1);
var G__37214 = null;
var G__37215 = (0);
var G__37216 = (0);
seq__36669_37191 = G__37213;
chunk__36670_37192 = G__37214;
count__36671_37193 = G__37215;
i__36672_37194 = G__37216;
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
var seq__36673_37218 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37219 = null;
var count__36675_37220 = (0);
var i__36676_37221 = (0);
while(true){
if((i__36676_37221 < count__36675_37220)){
var c_37222 = chunk__36674_37219.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37221);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37222);


var G__37223 = seq__36673_37218;
var G__37224 = chunk__36674_37219;
var G__37225 = count__36675_37220;
var G__37226 = (i__36676_37221 + (1));
seq__36673_37218 = G__37223;
chunk__36674_37219 = G__37224;
count__36675_37220 = G__37225;
i__36676_37221 = G__37226;
continue;
} else {
var temp__5735__auto___37227 = cljs.core.seq(seq__36673_37218);
if(temp__5735__auto___37227){
var seq__36673_37228__$1 = temp__5735__auto___37227;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37228__$1)){
var c__4609__auto___37229 = cljs.core.chunk_first(seq__36673_37228__$1);
var G__37231 = cljs.core.chunk_rest(seq__36673_37228__$1);
var G__37232 = c__4609__auto___37229;
var G__37233 = cljs.core.count(c__4609__auto___37229);
var G__37234 = (0);
seq__36673_37218 = G__37231;
chunk__36674_37219 = G__37232;
count__36675_37220 = G__37233;
i__36676_37221 = G__37234;
continue;
} else {
var c_37239 = cljs.core.first(seq__36673_37228__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37239);


var G__37240 = cljs.core.next(seq__36673_37228__$1);
var G__37241 = null;
var G__37242 = (0);
var G__37243 = (0);
seq__36673_37218 = G__37240;
chunk__36674_37219 = G__37241;
count__36675_37220 = G__37242;
i__36676_37221 = G__37243;
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
var len__4789__auto___37247 = arguments.length;
var i__4790__auto___37248 = (0);
while(true){
if((i__4790__auto___37248 < len__4789__auto___37247)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37248]));

var G__37249 = (i__4790__auto___37248 + (1));
i__4790__auto___37248 = G__37249;
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


var G__37258 = seq__36683;
var G__37259 = chunk__36684;
var G__37260 = count__36685;
var G__37261 = (i__36686 + (1));
seq__36683 = G__37258;
chunk__36684 = G__37259;
count__36685 = G__37260;
i__36686 = G__37261;
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
var len__4789__auto___37343 = arguments.length;
var i__4790__auto___37344 = (0);
while(true){
if((i__4790__auto___37344 < len__4789__auto___37343)){
args__4795__auto__.push((arguments[i__4790__auto___37344]));

var G__37346 = (i__4790__auto___37344 + (1));
i__4790__auto___37344 = G__37346;
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
var vec__36816_37364 = chunk__36746_37361.cljs$core$IIndexed$_nth$arity$2(null,i__36748_37363);
var actual_type_37365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816_37364,(0),null);
var factory_37366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816_37364,(1),null);
var canonical_f_37371 = (function (){var G__36820 = (factory_37366.cljs$core$IFn$_invoke$arity$1 ? factory_37366.cljs$core$IFn$_invoke$arity$1(f_37359) : factory_37366.call(null,f_37359));
var fexpr__36819 = (cljs.core.truth_(selector_37351)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37350,selector_37351):cljs.core.identity);
return (fexpr__36819.cljs$core$IFn$_invoke$arity$1 ? fexpr__36819.cljs$core$IFn$_invoke$arity$1(G__36820) : fexpr__36819.call(null,G__36820));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37350,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37351,actual_type_37365,f_37359], null),canonical_f_37371], 0));

if(cljs.core.truth_(elem_37350.addEventListener)){
elem_37350.addEventListener(cljs.core.name(actual_type_37365),canonical_f_37371);
} else {
elem_37350.attachEvent(cljs.core.name(actual_type_37365),canonical_f_37371);
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
var vec__36821_37386 = cljs.core.first(seq__36744_37380__$1);
var actual_type_37387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36821_37386,(0),null);
var factory_37388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36821_37386,(1),null);
var canonical_f_37389 = (function (){var G__36825 = (factory_37388.cljs$core$IFn$_invoke$arity$1 ? factory_37388.cljs$core$IFn$_invoke$arity$1(f_37359) : factory_37388.call(null,f_37359));
var fexpr__36824 = (cljs.core.truth_(selector_37351)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37350,selector_37351):cljs.core.identity);
return (fexpr__36824.cljs$core$IFn$_invoke$arity$1 ? fexpr__36824.cljs$core$IFn$_invoke$arity$1(G__36825) : fexpr__36824.call(null,G__36825));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37350,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37351,actual_type_37387,f_37359], null),canonical_f_37389], 0));

if(cljs.core.truth_(elem_37350.addEventListener)){
elem_37350.addEventListener(cljs.core.name(actual_type_37387),canonical_f_37389);
} else {
elem_37350.attachEvent(cljs.core.name(actual_type_37387),canonical_f_37389);
}


var G__37397 = cljs.core.next(seq__36744_37380__$1);
var G__37398 = null;
var G__37399 = (0);
var G__37400 = (0);
seq__36744_37360 = G__37397;
chunk__36746_37361 = G__37398;
count__36747_37362 = G__37399;
i__36748_37363 = G__37400;
continue;
}
} else {
}
}
break;
}

var G__37401 = seq__36734_37353;
var G__37402 = chunk__36741_37354;
var G__37403 = count__36742_37355;
var G__37404 = (i__36743_37356 + (1));
seq__36734_37353 = G__37401;
chunk__36741_37354 = G__37402;
count__36742_37355 = G__37403;
i__36743_37356 = G__37404;
continue;
} else {
var temp__5735__auto___37407 = cljs.core.seq(seq__36734_37353);
if(temp__5735__auto___37407){
var seq__36734_37408__$1 = temp__5735__auto___37407;
if(cljs.core.chunked_seq_QMARK_(seq__36734_37408__$1)){
var c__4609__auto___37411 = cljs.core.chunk_first(seq__36734_37408__$1);
var G__37412 = cljs.core.chunk_rest(seq__36734_37408__$1);
var G__37413 = c__4609__auto___37411;
var G__37414 = cljs.core.count(c__4609__auto___37411);
var G__37415 = (0);
seq__36734_37353 = G__37412;
chunk__36741_37354 = G__37413;
count__36742_37355 = G__37414;
i__36743_37356 = G__37415;
continue;
} else {
var vec__36826_37416 = cljs.core.first(seq__36734_37408__$1);
var orig_type_37417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826_37416,(0),null);
var f_37418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826_37416,(1),null);
var seq__36735_37419 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37417,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37417,cljs.core.identity])));
var chunk__36737_37420 = null;
var count__36738_37421 = (0);
var i__36739_37422 = (0);
while(true){
if((i__36739_37422 < count__36738_37421)){
var vec__36842_37428 = chunk__36737_37420.cljs$core$IIndexed$_nth$arity$2(null,i__36739_37422);
var actual_type_37429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842_37428,(0),null);
var factory_37430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842_37428,(1),null);
var canonical_f_37432 = (function (){var G__36850 = (factory_37430.cljs$core$IFn$_invoke$arity$1 ? factory_37430.cljs$core$IFn$_invoke$arity$1(f_37418) : factory_37430.call(null,f_37418));
var fexpr__36849 = (cljs.core.truth_(selector_37351)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37350,selector_37351):cljs.core.identity);
return (fexpr__36849.cljs$core$IFn$_invoke$arity$1 ? fexpr__36849.cljs$core$IFn$_invoke$arity$1(G__36850) : fexpr__36849.call(null,G__36850));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37350,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37351,actual_type_37429,f_37418], null),canonical_f_37432], 0));

if(cljs.core.truth_(elem_37350.addEventListener)){
elem_37350.addEventListener(cljs.core.name(actual_type_37429),canonical_f_37432);
} else {
elem_37350.attachEvent(cljs.core.name(actual_type_37429),canonical_f_37432);
}


var G__37438 = seq__36735_37419;
var G__37439 = chunk__36737_37420;
var G__37440 = count__36738_37421;
var G__37441 = (i__36739_37422 + (1));
seq__36735_37419 = G__37438;
chunk__36737_37420 = G__37439;
count__36738_37421 = G__37440;
i__36739_37422 = G__37441;
continue;
} else {
var temp__5735__auto___37442__$1 = cljs.core.seq(seq__36735_37419);
if(temp__5735__auto___37442__$1){
var seq__36735_37443__$1 = temp__5735__auto___37442__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36735_37443__$1)){
var c__4609__auto___37444 = cljs.core.chunk_first(seq__36735_37443__$1);
var G__37445 = cljs.core.chunk_rest(seq__36735_37443__$1);
var G__37446 = c__4609__auto___37444;
var G__37447 = cljs.core.count(c__4609__auto___37444);
var G__37448 = (0);
seq__36735_37419 = G__37445;
chunk__36737_37420 = G__37446;
count__36738_37421 = G__37447;
i__36739_37422 = G__37448;
continue;
} else {
var vec__36851_37450 = cljs.core.first(seq__36735_37443__$1);
var actual_type_37451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37450,(0),null);
var factory_37452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37450,(1),null);
var canonical_f_37453 = (function (){var G__36855 = (factory_37452.cljs$core$IFn$_invoke$arity$1 ? factory_37452.cljs$core$IFn$_invoke$arity$1(f_37418) : factory_37452.call(null,f_37418));
var fexpr__36854 = (cljs.core.truth_(selector_37351)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37350,selector_37351):cljs.core.identity);
return (fexpr__36854.cljs$core$IFn$_invoke$arity$1 ? fexpr__36854.cljs$core$IFn$_invoke$arity$1(G__36855) : fexpr__36854.call(null,G__36855));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37350,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37351,actual_type_37451,f_37418], null),canonical_f_37453], 0));

if(cljs.core.truth_(elem_37350.addEventListener)){
elem_37350.addEventListener(cljs.core.name(actual_type_37451),canonical_f_37453);
} else {
elem_37350.attachEvent(cljs.core.name(actual_type_37451),canonical_f_37453);
}


var G__37458 = cljs.core.next(seq__36735_37443__$1);
var G__37459 = null;
var G__37460 = (0);
var G__37461 = (0);
seq__36735_37419 = G__37458;
chunk__36737_37420 = G__37459;
count__36738_37421 = G__37460;
i__36739_37422 = G__37461;
continue;
}
} else {
}
}
break;
}

var G__37465 = cljs.core.next(seq__36734_37408__$1);
var G__37466 = null;
var G__37467 = (0);
var G__37468 = (0);
seq__36734_37353 = G__37465;
chunk__36741_37354 = G__37466;
count__36742_37355 = G__37467;
i__36743_37356 = G__37468;
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

var G__37476 = (i__4790__auto___37475 + (1));
i__4790__auto___37475 = G__37476;
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

var vec__36858_37480 = dommy.core.elem_and_selector(elem_sel);
var elem_37481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858_37480,(0),null);
var selector_37482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858_37480,(1),null);
var seq__36861_37486 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36868_37487 = null;
var count__36869_37488 = (0);
var i__36870_37489 = (0);
while(true){
if((i__36870_37489 < count__36869_37488)){
var vec__36912_37490 = chunk__36868_37487.cljs$core$IIndexed$_nth$arity$2(null,i__36870_37489);
var orig_type_37491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912_37490,(0),null);
var f_37492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912_37490,(1),null);
var seq__36871_37496 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37491,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37491,cljs.core.identity])));
var chunk__36873_37497 = null;
var count__36874_37498 = (0);
var i__36875_37499 = (0);
while(true){
if((i__36875_37499 < count__36874_37498)){
var vec__36925_37507 = chunk__36873_37497.cljs$core$IIndexed$_nth$arity$2(null,i__36875_37499);
var actual_type_37508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925_37507,(0),null);
var __37509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925_37507,(1),null);
var keys_37512 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37482,actual_type_37508,f_37492], null);
var canonical_f_37513 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37481),keys_37512);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37481,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37512], 0));

if(cljs.core.truth_(elem_37481.removeEventListener)){
elem_37481.removeEventListener(cljs.core.name(actual_type_37508),canonical_f_37513);
} else {
elem_37481.detachEvent(cljs.core.name(actual_type_37508),canonical_f_37513);
}


var G__37517 = seq__36871_37496;
var G__37518 = chunk__36873_37497;
var G__37519 = count__36874_37498;
var G__37520 = (i__36875_37499 + (1));
seq__36871_37496 = G__37517;
chunk__36873_37497 = G__37518;
count__36874_37498 = G__37519;
i__36875_37499 = G__37520;
continue;
} else {
var temp__5735__auto___37521 = cljs.core.seq(seq__36871_37496);
if(temp__5735__auto___37521){
var seq__36871_37522__$1 = temp__5735__auto___37521;
if(cljs.core.chunked_seq_QMARK_(seq__36871_37522__$1)){
var c__4609__auto___37524 = cljs.core.chunk_first(seq__36871_37522__$1);
var G__37526 = cljs.core.chunk_rest(seq__36871_37522__$1);
var G__37527 = c__4609__auto___37524;
var G__37528 = cljs.core.count(c__4609__auto___37524);
var G__37529 = (0);
seq__36871_37496 = G__37526;
chunk__36873_37497 = G__37527;
count__36874_37498 = G__37528;
i__36875_37499 = G__37529;
continue;
} else {
var vec__36929_37531 = cljs.core.first(seq__36871_37522__$1);
var actual_type_37532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36929_37531,(0),null);
var __37533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36929_37531,(1),null);
var keys_37535 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37482,actual_type_37532,f_37492], null);
var canonical_f_37536 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37481),keys_37535);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37481,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37535], 0));

if(cljs.core.truth_(elem_37481.removeEventListener)){
elem_37481.removeEventListener(cljs.core.name(actual_type_37532),canonical_f_37536);
} else {
elem_37481.detachEvent(cljs.core.name(actual_type_37532),canonical_f_37536);
}


var G__37541 = cljs.core.next(seq__36871_37522__$1);
var G__37542 = null;
var G__37543 = (0);
var G__37544 = (0);
seq__36871_37496 = G__37541;
chunk__36873_37497 = G__37542;
count__36874_37498 = G__37543;
i__36875_37499 = G__37544;
continue;
}
} else {
}
}
break;
}

var G__37546 = seq__36861_37486;
var G__37547 = chunk__36868_37487;
var G__37548 = count__36869_37488;
var G__37549 = (i__36870_37489 + (1));
seq__36861_37486 = G__37546;
chunk__36868_37487 = G__37547;
count__36869_37488 = G__37548;
i__36870_37489 = G__37549;
continue;
} else {
var temp__5735__auto___37550 = cljs.core.seq(seq__36861_37486);
if(temp__5735__auto___37550){
var seq__36861_37553__$1 = temp__5735__auto___37550;
if(cljs.core.chunked_seq_QMARK_(seq__36861_37553__$1)){
var c__4609__auto___37555 = cljs.core.chunk_first(seq__36861_37553__$1);
var G__37556 = cljs.core.chunk_rest(seq__36861_37553__$1);
var G__37557 = c__4609__auto___37555;
var G__37558 = cljs.core.count(c__4609__auto___37555);
var G__37559 = (0);
seq__36861_37486 = G__37556;
chunk__36868_37487 = G__37557;
count__36869_37488 = G__37558;
i__36870_37489 = G__37559;
continue;
} else {
var vec__36944_37560 = cljs.core.first(seq__36861_37553__$1);
var orig_type_37561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36944_37560,(0),null);
var f_37562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36944_37560,(1),null);
var seq__36862_37566 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37561,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37561,cljs.core.identity])));
var chunk__36864_37567 = null;
var count__36865_37568 = (0);
var i__36866_37569 = (0);
while(true){
if((i__36866_37569 < count__36865_37568)){
var vec__36963_37571 = chunk__36864_37567.cljs$core$IIndexed$_nth$arity$2(null,i__36866_37569);
var actual_type_37572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963_37571,(0),null);
var __37573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963_37571,(1),null);
var keys_37575 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37482,actual_type_37572,f_37562], null);
var canonical_f_37576 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37481),keys_37575);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37481,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37575], 0));

if(cljs.core.truth_(elem_37481.removeEventListener)){
elem_37481.removeEventListener(cljs.core.name(actual_type_37572),canonical_f_37576);
} else {
elem_37481.detachEvent(cljs.core.name(actual_type_37572),canonical_f_37576);
}


var G__37577 = seq__36862_37566;
var G__37578 = chunk__36864_37567;
var G__37579 = count__36865_37568;
var G__37580 = (i__36866_37569 + (1));
seq__36862_37566 = G__37577;
chunk__36864_37567 = G__37578;
count__36865_37568 = G__37579;
i__36866_37569 = G__37580;
continue;
} else {
var temp__5735__auto___37581__$1 = cljs.core.seq(seq__36862_37566);
if(temp__5735__auto___37581__$1){
var seq__36862_37582__$1 = temp__5735__auto___37581__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36862_37582__$1)){
var c__4609__auto___37583 = cljs.core.chunk_first(seq__36862_37582__$1);
var G__37584 = cljs.core.chunk_rest(seq__36862_37582__$1);
var G__37585 = c__4609__auto___37583;
var G__37586 = cljs.core.count(c__4609__auto___37583);
var G__37587 = (0);
seq__36862_37566 = G__37584;
chunk__36864_37567 = G__37585;
count__36865_37568 = G__37586;
i__36866_37569 = G__37587;
continue;
} else {
var vec__36971_37588 = cljs.core.first(seq__36862_37582__$1);
var actual_type_37589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36971_37588,(0),null);
var __37590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36971_37588,(1),null);
var keys_37591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37482,actual_type_37589,f_37562], null);
var canonical_f_37592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37481),keys_37591);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37481,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37591], 0));

if(cljs.core.truth_(elem_37481.removeEventListener)){
elem_37481.removeEventListener(cljs.core.name(actual_type_37589),canonical_f_37592);
} else {
elem_37481.detachEvent(cljs.core.name(actual_type_37589),canonical_f_37592);
}


var G__37614 = cljs.core.next(seq__36862_37582__$1);
var G__37615 = null;
var G__37616 = (0);
var G__37617 = (0);
seq__36862_37566 = G__37614;
chunk__36864_37567 = G__37615;
count__36865_37568 = G__37616;
i__36866_37569 = G__37617;
continue;
}
} else {
}
}
break;
}

var G__37618 = cljs.core.next(seq__36861_37553__$1);
var G__37619 = null;
var G__37620 = (0);
var G__37621 = (0);
seq__36861_37486 = G__37618;
chunk__36868_37487 = G__37619;
count__36869_37488 = G__37620;
i__36870_37489 = G__37621;
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
var len__4789__auto___37624 = arguments.length;
var i__4790__auto___37626 = (0);
while(true){
if((i__4790__auto___37626 < len__4789__auto___37624)){
args__4795__auto__.push((arguments[i__4790__auto___37626]));

var G__37627 = (i__4790__auto___37626 + (1));
i__4790__auto___37626 = G__37627;
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

var vec__36993_37636 = dommy.core.elem_and_selector(elem_sel);
var elem_37637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37636,(0),null);
var selector_37638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37636,(1),null);
var seq__36996_37640 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36997_37641 = null;
var count__36998_37642 = (0);
var i__36999_37643 = (0);
while(true){
if((i__36999_37643 < count__36998_37642)){
var vec__37009_37645 = chunk__36997_37641.cljs$core$IIndexed$_nth$arity$2(null,i__36999_37643);
var type_37646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009_37645,(0),null);
var f_37647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009_37645,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37646,((function (seq__36996_37640,chunk__36997_37641,count__36998_37642,i__36999_37643,vec__37009_37645,type_37646,f_37647,vec__36993_37636,elem_37637,selector_37638){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37646,dommy$core$this_fn], 0));

return (f_37647.cljs$core$IFn$_invoke$arity$1 ? f_37647.cljs$core$IFn$_invoke$arity$1(e) : f_37647.call(null,e));
});})(seq__36996_37640,chunk__36997_37641,count__36998_37642,i__36999_37643,vec__37009_37645,type_37646,f_37647,vec__36993_37636,elem_37637,selector_37638))
], 0));


var G__37659 = seq__36996_37640;
var G__37660 = chunk__36997_37641;
var G__37661 = count__36998_37642;
var G__37662 = (i__36999_37643 + (1));
seq__36996_37640 = G__37659;
chunk__36997_37641 = G__37660;
count__36998_37642 = G__37661;
i__36999_37643 = G__37662;
continue;
} else {
var temp__5735__auto___37663 = cljs.core.seq(seq__36996_37640);
if(temp__5735__auto___37663){
var seq__36996_37666__$1 = temp__5735__auto___37663;
if(cljs.core.chunked_seq_QMARK_(seq__36996_37666__$1)){
var c__4609__auto___37667 = cljs.core.chunk_first(seq__36996_37666__$1);
var G__37668 = cljs.core.chunk_rest(seq__36996_37666__$1);
var G__37669 = c__4609__auto___37667;
var G__37670 = cljs.core.count(c__4609__auto___37667);
var G__37671 = (0);
seq__36996_37640 = G__37668;
chunk__36997_37641 = G__37669;
count__36998_37642 = G__37670;
i__36999_37643 = G__37671;
continue;
} else {
var vec__37013_37672 = cljs.core.first(seq__36996_37666__$1);
var type_37673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37013_37672,(0),null);
var f_37674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37013_37672,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37673,((function (seq__36996_37640,chunk__36997_37641,count__36998_37642,i__36999_37643,vec__37013_37672,type_37673,f_37674,seq__36996_37666__$1,temp__5735__auto___37663,vec__36993_37636,elem_37637,selector_37638){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37673,dommy$core$this_fn], 0));

return (f_37674.cljs$core$IFn$_invoke$arity$1 ? f_37674.cljs$core$IFn$_invoke$arity$1(e) : f_37674.call(null,e));
});})(seq__36996_37640,chunk__36997_37641,count__36998_37642,i__36999_37643,vec__37013_37672,type_37673,f_37674,seq__36996_37666__$1,temp__5735__auto___37663,vec__36993_37636,elem_37637,selector_37638))
], 0));


var G__37682 = cljs.core.next(seq__36996_37666__$1);
var G__37683 = null;
var G__37684 = (0);
var G__37685 = (0);
seq__36996_37640 = G__37682;
chunk__36997_37641 = G__37683;
count__36998_37642 = G__37684;
i__36999_37643 = G__37685;
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
