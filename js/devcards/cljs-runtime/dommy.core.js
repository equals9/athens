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
var G__34702 = arguments.length;
switch (G__34702) {
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
var G__34704 = arguments.length;
switch (G__34704) {
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
var G__34707 = arguments.length;
switch (G__34707) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34705_SHARP_){
return (!((p1__34705_SHARP_ === base)));
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
var len__4789__auto___35090 = arguments.length;
var i__4790__auto___35091 = (0);
while(true){
if((i__4790__auto___35091 < len__4789__auto___35090)){
args__4795__auto__.push((arguments[i__4790__auto___35091]));

var G__35092 = (i__4790__auto___35091 + (1));
i__4790__auto___35091 = G__35092;
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
var seq__34712_35094 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34713_35095 = null;
var count__34714_35096 = (0);
var i__34715_35097 = (0);
while(true){
if((i__34715_35097 < count__34714_35096)){
var vec__34722_35098 = chunk__34713_35095.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35097);
var k_35099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35098,(0),null);
var v_35100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35098,(1),null);
style.setProperty(dommy.utils.as_str(k_35099),v_35100);


var G__35102 = seq__34712_35094;
var G__35103 = chunk__34713_35095;
var G__35104 = count__34714_35096;
var G__35105 = (i__34715_35097 + (1));
seq__34712_35094 = G__35102;
chunk__34713_35095 = G__35103;
count__34714_35096 = G__35104;
i__34715_35097 = G__35105;
continue;
} else {
var temp__5735__auto___35107 = cljs.core.seq(seq__34712_35094);
if(temp__5735__auto___35107){
var seq__34712_35108__$1 = temp__5735__auto___35107;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35108__$1)){
var c__4609__auto___35109 = cljs.core.chunk_first(seq__34712_35108__$1);
var G__35110 = cljs.core.chunk_rest(seq__34712_35108__$1);
var G__35111 = c__4609__auto___35109;
var G__35112 = cljs.core.count(c__4609__auto___35109);
var G__35113 = (0);
seq__34712_35094 = G__35110;
chunk__34713_35095 = G__35111;
count__34714_35096 = G__35112;
i__34715_35097 = G__35113;
continue;
} else {
var vec__34725_35114 = cljs.core.first(seq__34712_35108__$1);
var k_35115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35114,(0),null);
var v_35116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35114,(1),null);
style.setProperty(dommy.utils.as_str(k_35115),v_35116);


var G__35117 = cljs.core.next(seq__34712_35108__$1);
var G__35118 = null;
var G__35119 = (0);
var G__35120 = (0);
seq__34712_35094 = G__35117;
chunk__34713_35095 = G__35118;
count__34714_35096 = G__35119;
i__34715_35097 = G__35120;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34710){
var G__34711 = cljs.core.first(seq34710);
var seq34710__$1 = cljs.core.next(seq34710);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34711,seq34710__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35122 = arguments.length;
var i__4790__auto___35123 = (0);
while(true){
if((i__4790__auto___35123 < len__4789__auto___35122)){
args__4795__auto__.push((arguments[i__4790__auto___35123]));

var G__35125 = (i__4790__auto___35123 + (1));
i__4790__auto___35123 = G__35125;
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
var seq__34730_35126 = cljs.core.seq(keywords);
var chunk__34731_35127 = null;
var count__34732_35128 = (0);
var i__34733_35129 = (0);
while(true){
if((i__34733_35129 < count__34732_35128)){
var kw_35130 = chunk__34731_35127.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35129);
style.removeProperty(dommy.utils.as_str(kw_35130));


var G__35131 = seq__34730_35126;
var G__35132 = chunk__34731_35127;
var G__35133 = count__34732_35128;
var G__35134 = (i__34733_35129 + (1));
seq__34730_35126 = G__35131;
chunk__34731_35127 = G__35132;
count__34732_35128 = G__35133;
i__34733_35129 = G__35134;
continue;
} else {
var temp__5735__auto___35135 = cljs.core.seq(seq__34730_35126);
if(temp__5735__auto___35135){
var seq__34730_35136__$1 = temp__5735__auto___35135;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35136__$1)){
var c__4609__auto___35137 = cljs.core.chunk_first(seq__34730_35136__$1);
var G__35138 = cljs.core.chunk_rest(seq__34730_35136__$1);
var G__35139 = c__4609__auto___35137;
var G__35140 = cljs.core.count(c__4609__auto___35137);
var G__35141 = (0);
seq__34730_35126 = G__35138;
chunk__34731_35127 = G__35139;
count__34732_35128 = G__35140;
i__34733_35129 = G__35141;
continue;
} else {
var kw_35142 = cljs.core.first(seq__34730_35136__$1);
style.removeProperty(dommy.utils.as_str(kw_35142));


var G__35143 = cljs.core.next(seq__34730_35136__$1);
var G__35144 = null;
var G__35145 = (0);
var G__35146 = (0);
seq__34730_35126 = G__35143;
chunk__34731_35127 = G__35144;
count__34732_35128 = G__35145;
i__34733_35129 = G__35146;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34728){
var G__34729 = cljs.core.first(seq34728);
var seq34728__$1 = cljs.core.next(seq34728);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34729,seq34728__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35147 = arguments.length;
var i__4790__auto___35148 = (0);
while(true){
if((i__4790__auto___35148 < len__4789__auto___35147)){
args__4795__auto__.push((arguments[i__4790__auto___35148]));

var G__35149 = (i__4790__auto___35148 + (1));
i__4790__auto___35148 = G__35149;
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

var seq__34736_35150 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34737_35151 = null;
var count__34738_35152 = (0);
var i__34739_35153 = (0);
while(true){
if((i__34739_35153 < count__34738_35152)){
var vec__34746_35154 = chunk__34737_35151.cljs$core$IIndexed$_nth$arity$2(null,i__34739_35153);
var k_35155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746_35154,(0),null);
var v_35156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746_35154,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35155,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35156),"px"].join('')], 0));


var G__35157 = seq__34736_35150;
var G__35158 = chunk__34737_35151;
var G__35159 = count__34738_35152;
var G__35160 = (i__34739_35153 + (1));
seq__34736_35150 = G__35157;
chunk__34737_35151 = G__35158;
count__34738_35152 = G__35159;
i__34739_35153 = G__35160;
continue;
} else {
var temp__5735__auto___35164 = cljs.core.seq(seq__34736_35150);
if(temp__5735__auto___35164){
var seq__34736_35166__$1 = temp__5735__auto___35164;
if(cljs.core.chunked_seq_QMARK_(seq__34736_35166__$1)){
var c__4609__auto___35167 = cljs.core.chunk_first(seq__34736_35166__$1);
var G__35168 = cljs.core.chunk_rest(seq__34736_35166__$1);
var G__35169 = c__4609__auto___35167;
var G__35170 = cljs.core.count(c__4609__auto___35167);
var G__35171 = (0);
seq__34736_35150 = G__35168;
chunk__34737_35151 = G__35169;
count__34738_35152 = G__35170;
i__34739_35153 = G__35171;
continue;
} else {
var vec__34749_35172 = cljs.core.first(seq__34736_35166__$1);
var k_35173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749_35172,(0),null);
var v_35174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749_35172,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35173,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35174),"px"].join('')], 0));


var G__35175 = cljs.core.next(seq__34736_35166__$1);
var G__35176 = null;
var G__35177 = (0);
var G__35178 = (0);
seq__34736_35150 = G__35175;
chunk__34737_35151 = G__35176;
count__34738_35152 = G__35177;
i__34739_35153 = G__35178;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34734){
var G__34735 = cljs.core.first(seq34734);
var seq34734__$1 = cljs.core.next(seq34734);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34735,seq34734__$1);
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
var G__34758 = arguments.length;
switch (G__34758) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35181 = arguments.length;
var i__4790__auto___35182 = (0);
while(true){
if((i__4790__auto___35182 < len__4789__auto___35181)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35182]));

var G__35183 = (i__4790__auto___35182 + (1));
i__4790__auto___35182 = G__35183;
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
var G__34759 = elem;
(G__34759[k__$1] = v);

return G__34759;
} else {
var G__34760 = elem;
G__34760.setAttribute(k__$1,v);

return G__34760;
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

var seq__34761_35202 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35203 = null;
var count__34763_35204 = (0);
var i__34764_35205 = (0);
while(true){
if((i__34764_35205 < count__34763_35204)){
var vec__34771_35210 = chunk__34762_35203.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35205);
var k_35211__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35210,(0),null);
var v_35212__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35210,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35211__$1,v_35212__$1);


var G__35213 = seq__34761_35202;
var G__35214 = chunk__34762_35203;
var G__35215 = count__34763_35204;
var G__35216 = (i__34764_35205 + (1));
seq__34761_35202 = G__35213;
chunk__34762_35203 = G__35214;
count__34763_35204 = G__35215;
i__34764_35205 = G__35216;
continue;
} else {
var temp__5735__auto___35217 = cljs.core.seq(seq__34761_35202);
if(temp__5735__auto___35217){
var seq__34761_35218__$1 = temp__5735__auto___35217;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35218__$1)){
var c__4609__auto___35219 = cljs.core.chunk_first(seq__34761_35218__$1);
var G__35220 = cljs.core.chunk_rest(seq__34761_35218__$1);
var G__35221 = c__4609__auto___35219;
var G__35222 = cljs.core.count(c__4609__auto___35219);
var G__35223 = (0);
seq__34761_35202 = G__35220;
chunk__34762_35203 = G__35221;
count__34763_35204 = G__35222;
i__34764_35205 = G__35223;
continue;
} else {
var vec__34774_35224 = cljs.core.first(seq__34761_35218__$1);
var k_35225__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35224,(0),null);
var v_35226__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35224,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35225__$1,v_35226__$1);


var G__35227 = cljs.core.next(seq__34761_35218__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34761_35202 = G__35227;
chunk__34762_35203 = G__35228;
count__34763_35204 = G__35229;
i__34764_35205 = G__35230;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34754){
var G__34755 = cljs.core.first(seq34754);
var seq34754__$1 = cljs.core.next(seq34754);
var G__34756 = cljs.core.first(seq34754__$1);
var seq34754__$2 = cljs.core.next(seq34754__$1);
var G__34757 = cljs.core.first(seq34754__$2);
var seq34754__$3 = cljs.core.next(seq34754__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34755,G__34756,G__34757,seq34754__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34781 = arguments.length;
switch (G__34781) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35233 = arguments.length;
var i__4790__auto___35234 = (0);
while(true){
if((i__4790__auto___35234 < len__4789__auto___35233)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35234]));

var G__35235 = (i__4790__auto___35234 + (1));
i__4790__auto___35234 = G__35235;
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
var k_35241__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(k_35241__$1) : fexpr__34782.call(null,k_35241__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35241__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34783_35248 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34784_35249 = null;
var count__34785_35250 = (0);
var i__34786_35251 = (0);
while(true){
if((i__34786_35251 < count__34785_35250)){
var k_35257__$1 = chunk__34784_35249.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35251);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35257__$1);


var G__35259 = seq__34783_35248;
var G__35260 = chunk__34784_35249;
var G__35261 = count__34785_35250;
var G__35262 = (i__34786_35251 + (1));
seq__34783_35248 = G__35259;
chunk__34784_35249 = G__35260;
count__34785_35250 = G__35261;
i__34786_35251 = G__35262;
continue;
} else {
var temp__5735__auto___35263 = cljs.core.seq(seq__34783_35248);
if(temp__5735__auto___35263){
var seq__34783_35264__$1 = temp__5735__auto___35263;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35264__$1)){
var c__4609__auto___35269 = cljs.core.chunk_first(seq__34783_35264__$1);
var G__35270 = cljs.core.chunk_rest(seq__34783_35264__$1);
var G__35271 = c__4609__auto___35269;
var G__35272 = cljs.core.count(c__4609__auto___35269);
var G__35273 = (0);
seq__34783_35248 = G__35270;
chunk__34784_35249 = G__35271;
count__34785_35250 = G__35272;
i__34786_35251 = G__35273;
continue;
} else {
var k_35274__$1 = cljs.core.first(seq__34783_35264__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35274__$1);


var G__35275 = cljs.core.next(seq__34783_35264__$1);
var G__35276 = null;
var G__35277 = (0);
var G__35278 = (0);
seq__34783_35248 = G__35275;
chunk__34784_35249 = G__35276;
count__34785_35250 = G__35277;
i__34786_35251 = G__35278;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34778){
var G__34779 = cljs.core.first(seq34778);
var seq34778__$1 = cljs.core.next(seq34778);
var G__34780 = cljs.core.first(seq34778__$1);
var seq34778__$2 = cljs.core.next(seq34778__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34779,G__34780,seq34778__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34788 = arguments.length;
switch (G__34788) {
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
var G__34793 = arguments.length;
switch (G__34793) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35281 = arguments.length;
var i__4790__auto___35282 = (0);
while(true){
if((i__4790__auto___35282 < len__4789__auto___35281)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35282]));

var G__35284 = (i__4790__auto___35282 + (1));
i__4790__auto___35282 = G__35284;
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
var temp__5733__auto___35287 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35287)){
var class_list_35288 = temp__5733__auto___35287;
var seq__34794_35289 = cljs.core.seq(classes__$1);
var chunk__34795_35290 = null;
var count__34796_35291 = (0);
var i__34797_35292 = (0);
while(true){
if((i__34797_35292 < count__34796_35291)){
var c_35293 = chunk__34795_35290.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35292);
class_list_35288.add(c_35293);


var G__35294 = seq__34794_35289;
var G__35295 = chunk__34795_35290;
var G__35296 = count__34796_35291;
var G__35297 = (i__34797_35292 + (1));
seq__34794_35289 = G__35294;
chunk__34795_35290 = G__35295;
count__34796_35291 = G__35296;
i__34797_35292 = G__35297;
continue;
} else {
var temp__5735__auto___35298 = cljs.core.seq(seq__34794_35289);
if(temp__5735__auto___35298){
var seq__34794_35299__$1 = temp__5735__auto___35298;
if(cljs.core.chunked_seq_QMARK_(seq__34794_35299__$1)){
var c__4609__auto___35300 = cljs.core.chunk_first(seq__34794_35299__$1);
var G__35301 = cljs.core.chunk_rest(seq__34794_35299__$1);
var G__35302 = c__4609__auto___35300;
var G__35303 = cljs.core.count(c__4609__auto___35300);
var G__35304 = (0);
seq__34794_35289 = G__35301;
chunk__34795_35290 = G__35302;
count__34796_35291 = G__35303;
i__34797_35292 = G__35304;
continue;
} else {
var c_35305 = cljs.core.first(seq__34794_35299__$1);
class_list_35288.add(c_35305);


var G__35306 = cljs.core.next(seq__34794_35299__$1);
var G__35307 = null;
var G__35308 = (0);
var G__35309 = (0);
seq__34794_35289 = G__35306;
chunk__34795_35290 = G__35307;
count__34796_35291 = G__35308;
i__34797_35292 = G__35309;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34798_35310 = cljs.core.seq(classes__$1);
var chunk__34799_35311 = null;
var count__34800_35312 = (0);
var i__34801_35313 = (0);
while(true){
if((i__34801_35313 < count__34800_35312)){
var c_35314 = chunk__34799_35311.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35313);
var class_name_35316 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35316,c_35314))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35316 === ""))?c_35314:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35316)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35314)].join('')));
}


var G__35317 = seq__34798_35310;
var G__35318 = chunk__34799_35311;
var G__35319 = count__34800_35312;
var G__35320 = (i__34801_35313 + (1));
seq__34798_35310 = G__35317;
chunk__34799_35311 = G__35318;
count__34800_35312 = G__35319;
i__34801_35313 = G__35320;
continue;
} else {
var temp__5735__auto___35321 = cljs.core.seq(seq__34798_35310);
if(temp__5735__auto___35321){
var seq__34798_35322__$1 = temp__5735__auto___35321;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35322__$1)){
var c__4609__auto___35323 = cljs.core.chunk_first(seq__34798_35322__$1);
var G__35324 = cljs.core.chunk_rest(seq__34798_35322__$1);
var G__35325 = c__4609__auto___35323;
var G__35326 = cljs.core.count(c__4609__auto___35323);
var G__35327 = (0);
seq__34798_35310 = G__35324;
chunk__34799_35311 = G__35325;
count__34800_35312 = G__35326;
i__34801_35313 = G__35327;
continue;
} else {
var c_35328 = cljs.core.first(seq__34798_35322__$1);
var class_name_35329 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35329,c_35328))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35329 === ""))?c_35328:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35329)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35328)].join('')));
}


var G__35331 = cljs.core.next(seq__34798_35322__$1);
var G__35332 = null;
var G__35333 = (0);
var G__35334 = (0);
seq__34798_35310 = G__35331;
chunk__34799_35311 = G__35332;
count__34800_35312 = G__35333;
i__34801_35313 = G__35334;
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
var seq__34802_35335 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34803_35336 = null;
var count__34804_35337 = (0);
var i__34805_35338 = (0);
while(true){
if((i__34805_35338 < count__34804_35337)){
var c_35339 = chunk__34803_35336.cljs$core$IIndexed$_nth$arity$2(null,i__34805_35338);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35339);


var G__35340 = seq__34802_35335;
var G__35341 = chunk__34803_35336;
var G__35342 = count__34804_35337;
var G__35343 = (i__34805_35338 + (1));
seq__34802_35335 = G__35340;
chunk__34803_35336 = G__35341;
count__34804_35337 = G__35342;
i__34805_35338 = G__35343;
continue;
} else {
var temp__5735__auto___35344 = cljs.core.seq(seq__34802_35335);
if(temp__5735__auto___35344){
var seq__34802_35345__$1 = temp__5735__auto___35344;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35345__$1)){
var c__4609__auto___35346 = cljs.core.chunk_first(seq__34802_35345__$1);
var G__35347 = cljs.core.chunk_rest(seq__34802_35345__$1);
var G__35348 = c__4609__auto___35346;
var G__35349 = cljs.core.count(c__4609__auto___35346);
var G__35350 = (0);
seq__34802_35335 = G__35347;
chunk__34803_35336 = G__35348;
count__34804_35337 = G__35349;
i__34805_35338 = G__35350;
continue;
} else {
var c_35351 = cljs.core.first(seq__34802_35345__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35351);


var G__35352 = cljs.core.next(seq__34802_35345__$1);
var G__35353 = null;
var G__35354 = (0);
var G__35355 = (0);
seq__34802_35335 = G__35352;
chunk__34803_35336 = G__35353;
count__34804_35337 = G__35354;
i__34805_35338 = G__35355;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34790){
var G__34791 = cljs.core.first(seq34790);
var seq34790__$1 = cljs.core.next(seq34790);
var G__34792 = cljs.core.first(seq34790__$1);
var seq34790__$2 = cljs.core.next(seq34790__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34791,G__34792,seq34790__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34810 = arguments.length;
switch (G__34810) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35357 = arguments.length;
var i__4790__auto___35358 = (0);
while(true){
if((i__4790__auto___35358 < len__4789__auto___35357)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35358]));

var G__35359 = (i__4790__auto___35358 + (1));
i__4790__auto___35358 = G__35359;
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
var temp__5733__auto___35360 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35360)){
var class_list_35361 = temp__5733__auto___35360;
class_list_35361.remove(c__$1);
} else {
var class_name_35362 = dommy.core.class$(elem);
var new_class_name_35363 = dommy.utils.remove_class_str(class_name_35362,c__$1);
if((class_name_35362 === new_class_name_35363)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35363);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34811 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34812 = null;
var count__34813 = (0);
var i__34814 = (0);
while(true){
if((i__34814 < count__34813)){
var c = chunk__34812.cljs$core$IIndexed$_nth$arity$2(null,i__34814);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35364 = seq__34811;
var G__35365 = chunk__34812;
var G__35366 = count__34813;
var G__35367 = (i__34814 + (1));
seq__34811 = G__35364;
chunk__34812 = G__35365;
count__34813 = G__35366;
i__34814 = G__35367;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34811);
if(temp__5735__auto__){
var seq__34811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35368 = cljs.core.chunk_rest(seq__34811__$1);
var G__35369 = c__4609__auto__;
var G__35370 = cljs.core.count(c__4609__auto__);
var G__35371 = (0);
seq__34811 = G__35368;
chunk__34812 = G__35369;
count__34813 = G__35370;
i__34814 = G__35371;
continue;
} else {
var c = cljs.core.first(seq__34811__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35372 = cljs.core.next(seq__34811__$1);
var G__35373 = null;
var G__35374 = (0);
var G__35375 = (0);
seq__34811 = G__35372;
chunk__34812 = G__35373;
count__34813 = G__35374;
i__34814 = G__35375;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34807){
var G__34808 = cljs.core.first(seq34807);
var seq34807__$1 = cljs.core.next(seq34807);
var G__34809 = cljs.core.first(seq34807__$1);
var seq34807__$2 = cljs.core.next(seq34807__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34808,G__34809,seq34807__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34816 = arguments.length;
switch (G__34816) {
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
var temp__5733__auto___35377 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35377)){
var class_list_35378 = temp__5733__auto___35377;
class_list_35378.toggle(c__$1);
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
var G__34818 = arguments.length;
switch (G__34818) {
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
var G__34820 = arguments.length;
switch (G__34820) {
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
var G__34825 = arguments.length;
switch (G__34825) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35382 = arguments.length;
var i__4790__auto___35383 = (0);
while(true){
if((i__4790__auto___35383 < len__4789__auto___35382)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35383]));

var G__35384 = (i__4790__auto___35383 + (1));
i__4790__auto___35383 = G__35384;
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
var G__34826 = parent;
G__34826.appendChild(child);

return G__34826;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34827_35385 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34828_35386 = null;
var count__34829_35387 = (0);
var i__34830_35388 = (0);
while(true){
if((i__34830_35388 < count__34829_35387)){
var c_35389 = chunk__34828_35386.cljs$core$IIndexed$_nth$arity$2(null,i__34830_35388);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35389);


var G__35390 = seq__34827_35385;
var G__35391 = chunk__34828_35386;
var G__35392 = count__34829_35387;
var G__35393 = (i__34830_35388 + (1));
seq__34827_35385 = G__35390;
chunk__34828_35386 = G__35391;
count__34829_35387 = G__35392;
i__34830_35388 = G__35393;
continue;
} else {
var temp__5735__auto___35394 = cljs.core.seq(seq__34827_35385);
if(temp__5735__auto___35394){
var seq__34827_35395__$1 = temp__5735__auto___35394;
if(cljs.core.chunked_seq_QMARK_(seq__34827_35395__$1)){
var c__4609__auto___35396 = cljs.core.chunk_first(seq__34827_35395__$1);
var G__35397 = cljs.core.chunk_rest(seq__34827_35395__$1);
var G__35398 = c__4609__auto___35396;
var G__35399 = cljs.core.count(c__4609__auto___35396);
var G__35400 = (0);
seq__34827_35385 = G__35397;
chunk__34828_35386 = G__35398;
count__34829_35387 = G__35399;
i__34830_35388 = G__35400;
continue;
} else {
var c_35401 = cljs.core.first(seq__34827_35395__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35401);


var G__35402 = cljs.core.next(seq__34827_35395__$1);
var G__35403 = null;
var G__35404 = (0);
var G__35405 = (0);
seq__34827_35385 = G__35402;
chunk__34828_35386 = G__35403;
count__34829_35387 = G__35404;
i__34830_35388 = G__35405;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34822){
var G__34823 = cljs.core.first(seq34822);
var seq34822__$1 = cljs.core.next(seq34822);
var G__34824 = cljs.core.first(seq34822__$1);
var seq34822__$2 = cljs.core.next(seq34822__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34823,G__34824,seq34822__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34835 = arguments.length;
switch (G__34835) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35407 = arguments.length;
var i__4790__auto___35408 = (0);
while(true){
if((i__4790__auto___35408 < len__4789__auto___35407)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35408]));

var G__35409 = (i__4790__auto___35408 + (1));
i__4790__auto___35408 = G__35409;
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
var G__34836 = parent;
G__34836.insertBefore(child,parent.firstChild);

return G__34836;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34837_35410 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34838_35411 = null;
var count__34839_35412 = (0);
var i__34840_35413 = (0);
while(true){
if((i__34840_35413 < count__34839_35412)){
var c_35414 = chunk__34838_35411.cljs$core$IIndexed$_nth$arity$2(null,i__34840_35413);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35414);


var G__35415 = seq__34837_35410;
var G__35416 = chunk__34838_35411;
var G__35417 = count__34839_35412;
var G__35418 = (i__34840_35413 + (1));
seq__34837_35410 = G__35415;
chunk__34838_35411 = G__35416;
count__34839_35412 = G__35417;
i__34840_35413 = G__35418;
continue;
} else {
var temp__5735__auto___35419 = cljs.core.seq(seq__34837_35410);
if(temp__5735__auto___35419){
var seq__34837_35420__$1 = temp__5735__auto___35419;
if(cljs.core.chunked_seq_QMARK_(seq__34837_35420__$1)){
var c__4609__auto___35421 = cljs.core.chunk_first(seq__34837_35420__$1);
var G__35422 = cljs.core.chunk_rest(seq__34837_35420__$1);
var G__35423 = c__4609__auto___35421;
var G__35424 = cljs.core.count(c__4609__auto___35421);
var G__35425 = (0);
seq__34837_35410 = G__35422;
chunk__34838_35411 = G__35423;
count__34839_35412 = G__35424;
i__34840_35413 = G__35425;
continue;
} else {
var c_35426 = cljs.core.first(seq__34837_35420__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35426);


var G__35427 = cljs.core.next(seq__34837_35420__$1);
var G__35428 = null;
var G__35429 = (0);
var G__35430 = (0);
seq__34837_35410 = G__35427;
chunk__34838_35411 = G__35428;
count__34839_35412 = G__35429;
i__34840_35413 = G__35430;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34832){
var G__34833 = cljs.core.first(seq34832);
var seq34832__$1 = cljs.core.next(seq34832);
var G__34834 = cljs.core.first(seq34832__$1);
var seq34832__$2 = cljs.core.next(seq34832__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34833,G__34834,seq34832__$2);
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
var temp__5733__auto___35431 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35431)){
var next_35432 = temp__5733__auto___35431;
dommy.core.insert_before_BANG_(elem,next_35432);
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
var G__34842 = arguments.length;
switch (G__34842) {
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
var G__34843 = p;
G__34843.removeChild(elem);

return G__34843;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34844){
var vec__34845 = p__34844;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34845,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34845,(1),null);
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
var len__4789__auto___35436 = arguments.length;
var i__4790__auto___35437 = (0);
while(true){
if((i__4790__auto___35437 < len__4789__auto___35436)){
args__4795__auto__.push((arguments[i__4790__auto___35437]));

var G__35438 = (i__4790__auto___35437 + (1));
i__4790__auto___35437 = G__35438;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34849){
var G__34850 = cljs.core.first(seq34849);
var seq34849__$1 = cljs.core.next(seq34849);
var G__34851 = cljs.core.first(seq34849__$1);
var seq34849__$2 = cljs.core.next(seq34849__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34850,G__34851,seq34849__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34854 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34854.cljs$core$IFn$_invoke$arity$1 ? fexpr__34854.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34854.call(null,elem_sel));
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
var len__4789__auto___35441 = arguments.length;
var i__4790__auto___35442 = (0);
while(true){
if((i__4790__auto___35442 < len__4789__auto___35441)){
args__4795__auto__.push((arguments[i__4790__auto___35442]));

var G__35443 = (i__4790__auto___35442 + (1));
i__4790__auto___35442 = G__35443;
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

var vec__34857_35444 = dommy.core.elem_and_selector(elem_sel);
var elem_35445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35444,(0),null);
var selector_35446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35444,(1),null);
var seq__34860_35447 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34867_35448 = null;
var count__34868_35449 = (0);
var i__34869_35450 = (0);
while(true){
if((i__34869_35450 < count__34868_35449)){
var vec__34922_35451 = chunk__34867_35448.cljs$core$IIndexed$_nth$arity$2(null,i__34869_35450);
var orig_type_35452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922_35451,(0),null);
var f_35453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922_35451,(1),null);
var seq__34870_35455 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35452,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35452,cljs.core.identity])));
var chunk__34872_35456 = null;
var count__34873_35457 = (0);
var i__34874_35458 = (0);
while(true){
if((i__34874_35458 < count__34873_35457)){
var vec__34935_35460 = chunk__34872_35456.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35458);
var actual_type_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34935_35460,(0),null);
var factory_35462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34935_35460,(1),null);
var canonical_f_35463 = (function (){var G__34939 = (factory_35462.cljs$core$IFn$_invoke$arity$1 ? factory_35462.cljs$core$IFn$_invoke$arity$1(f_35453) : factory_35462.call(null,f_35453));
var fexpr__34938 = (cljs.core.truth_(selector_35446)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35445,selector_35446):cljs.core.identity);
return (fexpr__34938.cljs$core$IFn$_invoke$arity$1 ? fexpr__34938.cljs$core$IFn$_invoke$arity$1(G__34939) : fexpr__34938.call(null,G__34939));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35445,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35446,actual_type_35461,f_35453], null),canonical_f_35463], 0));

if(cljs.core.truth_(elem_35445.addEventListener)){
elem_35445.addEventListener(cljs.core.name(actual_type_35461),canonical_f_35463);
} else {
elem_35445.attachEvent(cljs.core.name(actual_type_35461),canonical_f_35463);
}


var G__35464 = seq__34870_35455;
var G__35465 = chunk__34872_35456;
var G__35466 = count__34873_35457;
var G__35467 = (i__34874_35458 + (1));
seq__34870_35455 = G__35464;
chunk__34872_35456 = G__35465;
count__34873_35457 = G__35466;
i__34874_35458 = G__35467;
continue;
} else {
var temp__5735__auto___35468 = cljs.core.seq(seq__34870_35455);
if(temp__5735__auto___35468){
var seq__34870_35469__$1 = temp__5735__auto___35468;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35469__$1)){
var c__4609__auto___35470 = cljs.core.chunk_first(seq__34870_35469__$1);
var G__35471 = cljs.core.chunk_rest(seq__34870_35469__$1);
var G__35472 = c__4609__auto___35470;
var G__35473 = cljs.core.count(c__4609__auto___35470);
var G__35474 = (0);
seq__34870_35455 = G__35471;
chunk__34872_35456 = G__35472;
count__34873_35457 = G__35473;
i__34874_35458 = G__35474;
continue;
} else {
var vec__34940_35475 = cljs.core.first(seq__34870_35469__$1);
var actual_type_35476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940_35475,(0),null);
var factory_35477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940_35475,(1),null);
var canonical_f_35478 = (function (){var G__34944 = (factory_35477.cljs$core$IFn$_invoke$arity$1 ? factory_35477.cljs$core$IFn$_invoke$arity$1(f_35453) : factory_35477.call(null,f_35453));
var fexpr__34943 = (cljs.core.truth_(selector_35446)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35445,selector_35446):cljs.core.identity);
return (fexpr__34943.cljs$core$IFn$_invoke$arity$1 ? fexpr__34943.cljs$core$IFn$_invoke$arity$1(G__34944) : fexpr__34943.call(null,G__34944));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35445,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35446,actual_type_35476,f_35453], null),canonical_f_35478], 0));

if(cljs.core.truth_(elem_35445.addEventListener)){
elem_35445.addEventListener(cljs.core.name(actual_type_35476),canonical_f_35478);
} else {
elem_35445.attachEvent(cljs.core.name(actual_type_35476),canonical_f_35478);
}


var G__35479 = cljs.core.next(seq__34870_35469__$1);
var G__35480 = null;
var G__35481 = (0);
var G__35482 = (0);
seq__34870_35455 = G__35479;
chunk__34872_35456 = G__35480;
count__34873_35457 = G__35481;
i__34874_35458 = G__35482;
continue;
}
} else {
}
}
break;
}

var G__35483 = seq__34860_35447;
var G__35484 = chunk__34867_35448;
var G__35485 = count__34868_35449;
var G__35486 = (i__34869_35450 + (1));
seq__34860_35447 = G__35483;
chunk__34867_35448 = G__35484;
count__34868_35449 = G__35485;
i__34869_35450 = G__35486;
continue;
} else {
var temp__5735__auto___35487 = cljs.core.seq(seq__34860_35447);
if(temp__5735__auto___35487){
var seq__34860_35488__$1 = temp__5735__auto___35487;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35488__$1)){
var c__4609__auto___35489 = cljs.core.chunk_first(seq__34860_35488__$1);
var G__35490 = cljs.core.chunk_rest(seq__34860_35488__$1);
var G__35491 = c__4609__auto___35489;
var G__35492 = cljs.core.count(c__4609__auto___35489);
var G__35493 = (0);
seq__34860_35447 = G__35490;
chunk__34867_35448 = G__35491;
count__34868_35449 = G__35492;
i__34869_35450 = G__35493;
continue;
} else {
var vec__34945_35494 = cljs.core.first(seq__34860_35488__$1);
var orig_type_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34945_35494,(0),null);
var f_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34945_35494,(1),null);
var seq__34861_35497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35495,cljs.core.identity])));
var chunk__34863_35498 = null;
var count__34864_35499 = (0);
var i__34865_35500 = (0);
while(true){
if((i__34865_35500 < count__34864_35499)){
var vec__34958_35501 = chunk__34863_35498.cljs$core$IIndexed$_nth$arity$2(null,i__34865_35500);
var actual_type_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958_35501,(0),null);
var factory_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958_35501,(1),null);
var canonical_f_35504 = (function (){var G__34962 = (factory_35503.cljs$core$IFn$_invoke$arity$1 ? factory_35503.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35503.call(null,f_35496));
var fexpr__34961 = (cljs.core.truth_(selector_35446)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35445,selector_35446):cljs.core.identity);
return (fexpr__34961.cljs$core$IFn$_invoke$arity$1 ? fexpr__34961.cljs$core$IFn$_invoke$arity$1(G__34962) : fexpr__34961.call(null,G__34962));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35445,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35446,actual_type_35502,f_35496], null),canonical_f_35504], 0));

if(cljs.core.truth_(elem_35445.addEventListener)){
elem_35445.addEventListener(cljs.core.name(actual_type_35502),canonical_f_35504);
} else {
elem_35445.attachEvent(cljs.core.name(actual_type_35502),canonical_f_35504);
}


var G__35505 = seq__34861_35497;
var G__35506 = chunk__34863_35498;
var G__35507 = count__34864_35499;
var G__35508 = (i__34865_35500 + (1));
seq__34861_35497 = G__35505;
chunk__34863_35498 = G__35506;
count__34864_35499 = G__35507;
i__34865_35500 = G__35508;
continue;
} else {
var temp__5735__auto___35509__$1 = cljs.core.seq(seq__34861_35497);
if(temp__5735__auto___35509__$1){
var seq__34861_35510__$1 = temp__5735__auto___35509__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34861_35510__$1)){
var c__4609__auto___35511 = cljs.core.chunk_first(seq__34861_35510__$1);
var G__35512 = cljs.core.chunk_rest(seq__34861_35510__$1);
var G__35513 = c__4609__auto___35511;
var G__35514 = cljs.core.count(c__4609__auto___35511);
var G__35515 = (0);
seq__34861_35497 = G__35512;
chunk__34863_35498 = G__35513;
count__34864_35499 = G__35514;
i__34865_35500 = G__35515;
continue;
} else {
var vec__34963_35516 = cljs.core.first(seq__34861_35510__$1);
var actual_type_35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963_35516,(0),null);
var factory_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963_35516,(1),null);
var canonical_f_35519 = (function (){var G__34967 = (factory_35518.cljs$core$IFn$_invoke$arity$1 ? factory_35518.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35518.call(null,f_35496));
var fexpr__34966 = (cljs.core.truth_(selector_35446)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35445,selector_35446):cljs.core.identity);
return (fexpr__34966.cljs$core$IFn$_invoke$arity$1 ? fexpr__34966.cljs$core$IFn$_invoke$arity$1(G__34967) : fexpr__34966.call(null,G__34967));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35445,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35446,actual_type_35517,f_35496], null),canonical_f_35519], 0));

if(cljs.core.truth_(elem_35445.addEventListener)){
elem_35445.addEventListener(cljs.core.name(actual_type_35517),canonical_f_35519);
} else {
elem_35445.attachEvent(cljs.core.name(actual_type_35517),canonical_f_35519);
}


var G__35520 = cljs.core.next(seq__34861_35510__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__34861_35497 = G__35520;
chunk__34863_35498 = G__35521;
count__34864_35499 = G__35522;
i__34865_35500 = G__35523;
continue;
}
} else {
}
}
break;
}

var G__35524 = cljs.core.next(seq__34860_35488__$1);
var G__35525 = null;
var G__35526 = (0);
var G__35527 = (0);
seq__34860_35447 = G__35524;
chunk__34867_35448 = G__35525;
count__34868_35449 = G__35526;
i__34869_35450 = G__35527;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34855){
var G__34856 = cljs.core.first(seq34855);
var seq34855__$1 = cljs.core.next(seq34855);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34856,seq34855__$1);
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
var len__4789__auto___35528 = arguments.length;
var i__4790__auto___35529 = (0);
while(true){
if((i__4790__auto___35529 < len__4789__auto___35528)){
args__4795__auto__.push((arguments[i__4790__auto___35529]));

var G__35530 = (i__4790__auto___35529 + (1));
i__4790__auto___35529 = G__35530;
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

var vec__34973_35531 = dommy.core.elem_and_selector(elem_sel);
var elem_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35531,(0),null);
var selector_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35531,(1),null);
var seq__34976_35534 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34983_35535 = null;
var count__34984_35536 = (0);
var i__34985_35537 = (0);
while(true){
if((i__34985_35537 < count__34984_35536)){
var vec__35025_35538 = chunk__34983_35535.cljs$core$IIndexed$_nth$arity$2(null,i__34985_35537);
var orig_type_35539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025_35538,(0),null);
var f_35540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025_35538,(1),null);
var seq__34986_35541 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35539,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35539,cljs.core.identity])));
var chunk__34988_35542 = null;
var count__34989_35543 = (0);
var i__34990_35544 = (0);
while(true){
if((i__34990_35544 < count__34989_35543)){
var vec__35034_35545 = chunk__34988_35542.cljs$core$IIndexed$_nth$arity$2(null,i__34990_35544);
var actual_type_35546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35545,(0),null);
var __35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35545,(1),null);
var keys_35548 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35533,actual_type_35546,f_35540], null);
var canonical_f_35549 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35532),keys_35548);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35532,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35548], 0));

if(cljs.core.truth_(elem_35532.removeEventListener)){
elem_35532.removeEventListener(cljs.core.name(actual_type_35546),canonical_f_35549);
} else {
elem_35532.detachEvent(cljs.core.name(actual_type_35546),canonical_f_35549);
}


var G__35550 = seq__34986_35541;
var G__35551 = chunk__34988_35542;
var G__35552 = count__34989_35543;
var G__35553 = (i__34990_35544 + (1));
seq__34986_35541 = G__35550;
chunk__34988_35542 = G__35551;
count__34989_35543 = G__35552;
i__34990_35544 = G__35553;
continue;
} else {
var temp__5735__auto___35554 = cljs.core.seq(seq__34986_35541);
if(temp__5735__auto___35554){
var seq__34986_35555__$1 = temp__5735__auto___35554;
if(cljs.core.chunked_seq_QMARK_(seq__34986_35555__$1)){
var c__4609__auto___35556 = cljs.core.chunk_first(seq__34986_35555__$1);
var G__35557 = cljs.core.chunk_rest(seq__34986_35555__$1);
var G__35558 = c__4609__auto___35556;
var G__35559 = cljs.core.count(c__4609__auto___35556);
var G__35560 = (0);
seq__34986_35541 = G__35557;
chunk__34988_35542 = G__35558;
count__34989_35543 = G__35559;
i__34990_35544 = G__35560;
continue;
} else {
var vec__35037_35561 = cljs.core.first(seq__34986_35555__$1);
var actual_type_35562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037_35561,(0),null);
var __35563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037_35561,(1),null);
var keys_35564 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35533,actual_type_35562,f_35540], null);
var canonical_f_35565 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35532),keys_35564);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35532,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35564], 0));

if(cljs.core.truth_(elem_35532.removeEventListener)){
elem_35532.removeEventListener(cljs.core.name(actual_type_35562),canonical_f_35565);
} else {
elem_35532.detachEvent(cljs.core.name(actual_type_35562),canonical_f_35565);
}


var G__35566 = cljs.core.next(seq__34986_35555__$1);
var G__35567 = null;
var G__35568 = (0);
var G__35569 = (0);
seq__34986_35541 = G__35566;
chunk__34988_35542 = G__35567;
count__34989_35543 = G__35568;
i__34990_35544 = G__35569;
continue;
}
} else {
}
}
break;
}

var G__35570 = seq__34976_35534;
var G__35571 = chunk__34983_35535;
var G__35572 = count__34984_35536;
var G__35573 = (i__34985_35537 + (1));
seq__34976_35534 = G__35570;
chunk__34983_35535 = G__35571;
count__34984_35536 = G__35572;
i__34985_35537 = G__35573;
continue;
} else {
var temp__5735__auto___35574 = cljs.core.seq(seq__34976_35534);
if(temp__5735__auto___35574){
var seq__34976_35575__$1 = temp__5735__auto___35574;
if(cljs.core.chunked_seq_QMARK_(seq__34976_35575__$1)){
var c__4609__auto___35576 = cljs.core.chunk_first(seq__34976_35575__$1);
var G__35577 = cljs.core.chunk_rest(seq__34976_35575__$1);
var G__35578 = c__4609__auto___35576;
var G__35579 = cljs.core.count(c__4609__auto___35576);
var G__35580 = (0);
seq__34976_35534 = G__35577;
chunk__34983_35535 = G__35578;
count__34984_35536 = G__35579;
i__34985_35537 = G__35580;
continue;
} else {
var vec__35040_35581 = cljs.core.first(seq__34976_35575__$1);
var orig_type_35582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35040_35581,(0),null);
var f_35583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35040_35581,(1),null);
var seq__34977_35584 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35582,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35582,cljs.core.identity])));
var chunk__34979_35585 = null;
var count__34980_35586 = (0);
var i__34981_35587 = (0);
while(true){
if((i__34981_35587 < count__34980_35586)){
var vec__35049_35588 = chunk__34979_35585.cljs$core$IIndexed$_nth$arity$2(null,i__34981_35587);
var actual_type_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35588,(0),null);
var __35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35588,(1),null);
var keys_35591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35533,actual_type_35589,f_35583], null);
var canonical_f_35592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35532),keys_35591);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35532,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35591], 0));

if(cljs.core.truth_(elem_35532.removeEventListener)){
elem_35532.removeEventListener(cljs.core.name(actual_type_35589),canonical_f_35592);
} else {
elem_35532.detachEvent(cljs.core.name(actual_type_35589),canonical_f_35592);
}


var G__35593 = seq__34977_35584;
var G__35594 = chunk__34979_35585;
var G__35595 = count__34980_35586;
var G__35596 = (i__34981_35587 + (1));
seq__34977_35584 = G__35593;
chunk__34979_35585 = G__35594;
count__34980_35586 = G__35595;
i__34981_35587 = G__35596;
continue;
} else {
var temp__5735__auto___35597__$1 = cljs.core.seq(seq__34977_35584);
if(temp__5735__auto___35597__$1){
var seq__34977_35598__$1 = temp__5735__auto___35597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34977_35598__$1)){
var c__4609__auto___35599 = cljs.core.chunk_first(seq__34977_35598__$1);
var G__35600 = cljs.core.chunk_rest(seq__34977_35598__$1);
var G__35601 = c__4609__auto___35599;
var G__35602 = cljs.core.count(c__4609__auto___35599);
var G__35603 = (0);
seq__34977_35584 = G__35600;
chunk__34979_35585 = G__35601;
count__34980_35586 = G__35602;
i__34981_35587 = G__35603;
continue;
} else {
var vec__35052_35604 = cljs.core.first(seq__34977_35598__$1);
var actual_type_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052_35604,(0),null);
var __35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052_35604,(1),null);
var keys_35607 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35533,actual_type_35605,f_35583], null);
var canonical_f_35608 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35532),keys_35607);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35532,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35607], 0));

if(cljs.core.truth_(elem_35532.removeEventListener)){
elem_35532.removeEventListener(cljs.core.name(actual_type_35605),canonical_f_35608);
} else {
elem_35532.detachEvent(cljs.core.name(actual_type_35605),canonical_f_35608);
}


var G__35610 = cljs.core.next(seq__34977_35598__$1);
var G__35611 = null;
var G__35612 = (0);
var G__35613 = (0);
seq__34977_35584 = G__35610;
chunk__34979_35585 = G__35611;
count__34980_35586 = G__35612;
i__34981_35587 = G__35613;
continue;
}
} else {
}
}
break;
}

var G__35614 = cljs.core.next(seq__34976_35575__$1);
var G__35615 = null;
var G__35616 = (0);
var G__35617 = (0);
seq__34976_35534 = G__35614;
chunk__34983_35535 = G__35615;
count__34984_35536 = G__35616;
i__34985_35537 = G__35617;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34971){
var G__34972 = cljs.core.first(seq34971);
var seq34971__$1 = cljs.core.next(seq34971);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34972,seq34971__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35619 = arguments.length;
var i__4790__auto___35620 = (0);
while(true){
if((i__4790__auto___35620 < len__4789__auto___35619)){
args__4795__auto__.push((arguments[i__4790__auto___35620]));

var G__35621 = (i__4790__auto___35620 + (1));
i__4790__auto___35620 = G__35621;
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

var vec__35061_35622 = dommy.core.elem_and_selector(elem_sel);
var elem_35623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35061_35622,(0),null);
var selector_35624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35061_35622,(1),null);
var seq__35064_35625 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35065_35626 = null;
var count__35066_35627 = (0);
var i__35067_35628 = (0);
while(true){
if((i__35067_35628 < count__35066_35627)){
var vec__35074_35630 = chunk__35065_35626.cljs$core$IIndexed$_nth$arity$2(null,i__35067_35628);
var type_35631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074_35630,(0),null);
var f_35632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074_35630,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35631,((function (seq__35064_35625,chunk__35065_35626,count__35066_35627,i__35067_35628,vec__35074_35630,type_35631,f_35632,vec__35061_35622,elem_35623,selector_35624){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35631,dommy$core$this_fn], 0));

return (f_35632.cljs$core$IFn$_invoke$arity$1 ? f_35632.cljs$core$IFn$_invoke$arity$1(e) : f_35632.call(null,e));
});})(seq__35064_35625,chunk__35065_35626,count__35066_35627,i__35067_35628,vec__35074_35630,type_35631,f_35632,vec__35061_35622,elem_35623,selector_35624))
], 0));


var G__35635 = seq__35064_35625;
var G__35636 = chunk__35065_35626;
var G__35637 = count__35066_35627;
var G__35638 = (i__35067_35628 + (1));
seq__35064_35625 = G__35635;
chunk__35065_35626 = G__35636;
count__35066_35627 = G__35637;
i__35067_35628 = G__35638;
continue;
} else {
var temp__5735__auto___35639 = cljs.core.seq(seq__35064_35625);
if(temp__5735__auto___35639){
var seq__35064_35641__$1 = temp__5735__auto___35639;
if(cljs.core.chunked_seq_QMARK_(seq__35064_35641__$1)){
var c__4609__auto___35642 = cljs.core.chunk_first(seq__35064_35641__$1);
var G__35643 = cljs.core.chunk_rest(seq__35064_35641__$1);
var G__35644 = c__4609__auto___35642;
var G__35645 = cljs.core.count(c__4609__auto___35642);
var G__35646 = (0);
seq__35064_35625 = G__35643;
chunk__35065_35626 = G__35644;
count__35066_35627 = G__35645;
i__35067_35628 = G__35646;
continue;
} else {
var vec__35080_35647 = cljs.core.first(seq__35064_35641__$1);
var type_35648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35647,(0),null);
var f_35649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35647,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35648,((function (seq__35064_35625,chunk__35065_35626,count__35066_35627,i__35067_35628,vec__35080_35647,type_35648,f_35649,seq__35064_35641__$1,temp__5735__auto___35639,vec__35061_35622,elem_35623,selector_35624){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35648,dommy$core$this_fn], 0));

return (f_35649.cljs$core$IFn$_invoke$arity$1 ? f_35649.cljs$core$IFn$_invoke$arity$1(e) : f_35649.call(null,e));
});})(seq__35064_35625,chunk__35065_35626,count__35066_35627,i__35067_35628,vec__35080_35647,type_35648,f_35649,seq__35064_35641__$1,temp__5735__auto___35639,vec__35061_35622,elem_35623,selector_35624))
], 0));


var G__35650 = cljs.core.next(seq__35064_35641__$1);
var G__35651 = null;
var G__35652 = (0);
var G__35653 = (0);
seq__35064_35625 = G__35650;
chunk__35065_35626 = G__35651;
count__35066_35627 = G__35652;
i__35067_35628 = G__35653;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35055){
var G__35056 = cljs.core.first(seq35055);
var seq35055__$1 = cljs.core.next(seq35055);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35056,seq35055__$1);
}));


//# sourceMappingURL=dommy.core.js.map
