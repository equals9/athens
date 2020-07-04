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
var len__4789__auto___35123 = arguments.length;
var i__4790__auto___35124 = (0);
while(true){
if((i__4790__auto___35124 < len__4789__auto___35123)){
args__4795__auto__.push((arguments[i__4790__auto___35124]));

var G__35125 = (i__4790__auto___35124 + (1));
i__4790__auto___35124 = G__35125;
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
var seq__34712_35126 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34713_35127 = null;
var count__34714_35128 = (0);
var i__34715_35129 = (0);
while(true){
if((i__34715_35129 < count__34714_35128)){
var vec__34722_35130 = chunk__34713_35127.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35129);
var k_35131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35130,(0),null);
var v_35132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35130,(1),null);
style.setProperty(dommy.utils.as_str(k_35131),v_35132);


var G__35133 = seq__34712_35126;
var G__35134 = chunk__34713_35127;
var G__35135 = count__34714_35128;
var G__35136 = (i__34715_35129 + (1));
seq__34712_35126 = G__35133;
chunk__34713_35127 = G__35134;
count__34714_35128 = G__35135;
i__34715_35129 = G__35136;
continue;
} else {
var temp__5735__auto___35137 = cljs.core.seq(seq__34712_35126);
if(temp__5735__auto___35137){
var seq__34712_35138__$1 = temp__5735__auto___35137;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35138__$1)){
var c__4609__auto___35139 = cljs.core.chunk_first(seq__34712_35138__$1);
var G__35140 = cljs.core.chunk_rest(seq__34712_35138__$1);
var G__35141 = c__4609__auto___35139;
var G__35142 = cljs.core.count(c__4609__auto___35139);
var G__35143 = (0);
seq__34712_35126 = G__35140;
chunk__34713_35127 = G__35141;
count__34714_35128 = G__35142;
i__34715_35129 = G__35143;
continue;
} else {
var vec__34725_35144 = cljs.core.first(seq__34712_35138__$1);
var k_35145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35144,(0),null);
var v_35146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35144,(1),null);
style.setProperty(dommy.utils.as_str(k_35145),v_35146);


var G__35147 = cljs.core.next(seq__34712_35138__$1);
var G__35148 = null;
var G__35149 = (0);
var G__35150 = (0);
seq__34712_35126 = G__35147;
chunk__34713_35127 = G__35148;
count__34714_35128 = G__35149;
i__34715_35129 = G__35150;
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
var len__4789__auto___35160 = arguments.length;
var i__4790__auto___35161 = (0);
while(true){
if((i__4790__auto___35161 < len__4789__auto___35160)){
args__4795__auto__.push((arguments[i__4790__auto___35161]));

var G__35163 = (i__4790__auto___35161 + (1));
i__4790__auto___35161 = G__35163;
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
var seq__34731_35171 = cljs.core.seq(keywords);
var chunk__34732_35172 = null;
var count__34733_35173 = (0);
var i__34734_35174 = (0);
while(true){
if((i__34734_35174 < count__34733_35173)){
var kw_35175 = chunk__34732_35172.cljs$core$IIndexed$_nth$arity$2(null,i__34734_35174);
style.removeProperty(dommy.utils.as_str(kw_35175));


var G__35180 = seq__34731_35171;
var G__35181 = chunk__34732_35172;
var G__35182 = count__34733_35173;
var G__35183 = (i__34734_35174 + (1));
seq__34731_35171 = G__35180;
chunk__34732_35172 = G__35181;
count__34733_35173 = G__35182;
i__34734_35174 = G__35183;
continue;
} else {
var temp__5735__auto___35184 = cljs.core.seq(seq__34731_35171);
if(temp__5735__auto___35184){
var seq__34731_35185__$1 = temp__5735__auto___35184;
if(cljs.core.chunked_seq_QMARK_(seq__34731_35185__$1)){
var c__4609__auto___35186 = cljs.core.chunk_first(seq__34731_35185__$1);
var G__35187 = cljs.core.chunk_rest(seq__34731_35185__$1);
var G__35188 = c__4609__auto___35186;
var G__35189 = cljs.core.count(c__4609__auto___35186);
var G__35190 = (0);
seq__34731_35171 = G__35187;
chunk__34732_35172 = G__35188;
count__34733_35173 = G__35189;
i__34734_35174 = G__35190;
continue;
} else {
var kw_35191 = cljs.core.first(seq__34731_35185__$1);
style.removeProperty(dommy.utils.as_str(kw_35191));


var G__35192 = cljs.core.next(seq__34731_35185__$1);
var G__35193 = null;
var G__35194 = (0);
var G__35195 = (0);
seq__34731_35171 = G__35192;
chunk__34732_35172 = G__35193;
count__34733_35173 = G__35194;
i__34734_35174 = G__35195;
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
var len__4789__auto___35196 = arguments.length;
var i__4790__auto___35197 = (0);
while(true){
if((i__4790__auto___35197 < len__4789__auto___35196)){
args__4795__auto__.push((arguments[i__4790__auto___35197]));

var G__35198 = (i__4790__auto___35197 + (1));
i__4790__auto___35197 = G__35198;
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

var seq__34737_35199 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34738_35200 = null;
var count__34739_35201 = (0);
var i__34740_35202 = (0);
while(true){
if((i__34740_35202 < count__34739_35201)){
var vec__34747_35203 = chunk__34738_35200.cljs$core$IIndexed$_nth$arity$2(null,i__34740_35202);
var k_35204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35203,(0),null);
var v_35205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35203,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35204,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35205),"px"].join('')], 0));


var G__35206 = seq__34737_35199;
var G__35207 = chunk__34738_35200;
var G__35208 = count__34739_35201;
var G__35209 = (i__34740_35202 + (1));
seq__34737_35199 = G__35206;
chunk__34738_35200 = G__35207;
count__34739_35201 = G__35208;
i__34740_35202 = G__35209;
continue;
} else {
var temp__5735__auto___35210 = cljs.core.seq(seq__34737_35199);
if(temp__5735__auto___35210){
var seq__34737_35211__$1 = temp__5735__auto___35210;
if(cljs.core.chunked_seq_QMARK_(seq__34737_35211__$1)){
var c__4609__auto___35212 = cljs.core.chunk_first(seq__34737_35211__$1);
var G__35213 = cljs.core.chunk_rest(seq__34737_35211__$1);
var G__35214 = c__4609__auto___35212;
var G__35215 = cljs.core.count(c__4609__auto___35212);
var G__35216 = (0);
seq__34737_35199 = G__35213;
chunk__34738_35200 = G__35214;
count__34739_35201 = G__35215;
i__34740_35202 = G__35216;
continue;
} else {
var vec__34750_35217 = cljs.core.first(seq__34737_35211__$1);
var k_35218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35217,(0),null);
var v_35219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35217,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35218,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35219),"px"].join('')], 0));


var G__35220 = cljs.core.next(seq__34737_35211__$1);
var G__35221 = null;
var G__35222 = (0);
var G__35223 = (0);
seq__34737_35199 = G__35220;
chunk__34738_35200 = G__35221;
count__34739_35201 = G__35222;
i__34740_35202 = G__35223;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34735){
var G__34736 = cljs.core.first(seq34735);
var seq34735__$1 = cljs.core.next(seq34735);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34736,seq34735__$1);
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
var len__4789__auto___35226 = arguments.length;
var i__4790__auto___35227 = (0);
while(true){
if((i__4790__auto___35227 < len__4789__auto___35226)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35227]));

var G__35230 = (i__4790__auto___35227 + (1));
i__4790__auto___35227 = G__35230;
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

var seq__34761_35231 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35232 = null;
var count__34763_35233 = (0);
var i__34764_35234 = (0);
while(true){
if((i__34764_35234 < count__34763_35233)){
var vec__34771_35235 = chunk__34762_35232.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35234);
var k_35236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35235,(0),null);
var v_35237__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35235,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35236__$1,v_35237__$1);


var G__35238 = seq__34761_35231;
var G__35239 = chunk__34762_35232;
var G__35240 = count__34763_35233;
var G__35241 = (i__34764_35234 + (1));
seq__34761_35231 = G__35238;
chunk__34762_35232 = G__35239;
count__34763_35233 = G__35240;
i__34764_35234 = G__35241;
continue;
} else {
var temp__5735__auto___35242 = cljs.core.seq(seq__34761_35231);
if(temp__5735__auto___35242){
var seq__34761_35243__$1 = temp__5735__auto___35242;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35243__$1)){
var c__4609__auto___35244 = cljs.core.chunk_first(seq__34761_35243__$1);
var G__35245 = cljs.core.chunk_rest(seq__34761_35243__$1);
var G__35246 = c__4609__auto___35244;
var G__35247 = cljs.core.count(c__4609__auto___35244);
var G__35248 = (0);
seq__34761_35231 = G__35245;
chunk__34762_35232 = G__35246;
count__34763_35233 = G__35247;
i__34764_35234 = G__35248;
continue;
} else {
var vec__34774_35249 = cljs.core.first(seq__34761_35243__$1);
var k_35250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35249,(0),null);
var v_35251__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35249,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35250__$1,v_35251__$1);


var G__35252 = cljs.core.next(seq__34761_35243__$1);
var G__35253 = null;
var G__35254 = (0);
var G__35255 = (0);
seq__34761_35231 = G__35252;
chunk__34762_35232 = G__35253;
count__34763_35233 = G__35254;
i__34764_35234 = G__35255;
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
var len__4789__auto___35259 = arguments.length;
var i__4790__auto___35260 = (0);
while(true){
if((i__4790__auto___35260 < len__4789__auto___35259)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35260]));

var G__35261 = (i__4790__auto___35260 + (1));
i__4790__auto___35260 = G__35261;
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
var k_35262__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(k_35262__$1) : fexpr__34782.call(null,k_35262__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35262__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34783_35263 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34784_35264 = null;
var count__34785_35265 = (0);
var i__34786_35266 = (0);
while(true){
if((i__34786_35266 < count__34785_35265)){
var k_35267__$1 = chunk__34784_35264.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35266);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35267__$1);


var G__35268 = seq__34783_35263;
var G__35269 = chunk__34784_35264;
var G__35270 = count__34785_35265;
var G__35271 = (i__34786_35266 + (1));
seq__34783_35263 = G__35268;
chunk__34784_35264 = G__35269;
count__34785_35265 = G__35270;
i__34786_35266 = G__35271;
continue;
} else {
var temp__5735__auto___35272 = cljs.core.seq(seq__34783_35263);
if(temp__5735__auto___35272){
var seq__34783_35273__$1 = temp__5735__auto___35272;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35273__$1)){
var c__4609__auto___35274 = cljs.core.chunk_first(seq__34783_35273__$1);
var G__35275 = cljs.core.chunk_rest(seq__34783_35273__$1);
var G__35276 = c__4609__auto___35274;
var G__35277 = cljs.core.count(c__4609__auto___35274);
var G__35278 = (0);
seq__34783_35263 = G__35275;
chunk__34784_35264 = G__35276;
count__34785_35265 = G__35277;
i__34786_35266 = G__35278;
continue;
} else {
var k_35279__$1 = cljs.core.first(seq__34783_35273__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35279__$1);


var G__35280 = cljs.core.next(seq__34783_35273__$1);
var G__35281 = null;
var G__35282 = (0);
var G__35283 = (0);
seq__34783_35263 = G__35280;
chunk__34784_35264 = G__35281;
count__34785_35265 = G__35282;
i__34786_35266 = G__35283;
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
var len__4789__auto___35286 = arguments.length;
var i__4790__auto___35287 = (0);
while(true){
if((i__4790__auto___35287 < len__4789__auto___35286)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35287]));

var G__35288 = (i__4790__auto___35287 + (1));
i__4790__auto___35287 = G__35288;
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
var temp__5733__auto___35289 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35289)){
var class_list_35290 = temp__5733__auto___35289;
var seq__34794_35291 = cljs.core.seq(classes__$1);
var chunk__34795_35292 = null;
var count__34796_35293 = (0);
var i__34797_35294 = (0);
while(true){
if((i__34797_35294 < count__34796_35293)){
var c_35295 = chunk__34795_35292.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35294);
class_list_35290.add(c_35295);


var G__35296 = seq__34794_35291;
var G__35297 = chunk__34795_35292;
var G__35298 = count__34796_35293;
var G__35299 = (i__34797_35294 + (1));
seq__34794_35291 = G__35296;
chunk__34795_35292 = G__35297;
count__34796_35293 = G__35298;
i__34797_35294 = G__35299;
continue;
} else {
var temp__5735__auto___35300 = cljs.core.seq(seq__34794_35291);
if(temp__5735__auto___35300){
var seq__34794_35301__$1 = temp__5735__auto___35300;
if(cljs.core.chunked_seq_QMARK_(seq__34794_35301__$1)){
var c__4609__auto___35302 = cljs.core.chunk_first(seq__34794_35301__$1);
var G__35303 = cljs.core.chunk_rest(seq__34794_35301__$1);
var G__35304 = c__4609__auto___35302;
var G__35305 = cljs.core.count(c__4609__auto___35302);
var G__35306 = (0);
seq__34794_35291 = G__35303;
chunk__34795_35292 = G__35304;
count__34796_35293 = G__35305;
i__34797_35294 = G__35306;
continue;
} else {
var c_35307 = cljs.core.first(seq__34794_35301__$1);
class_list_35290.add(c_35307);


var G__35308 = cljs.core.next(seq__34794_35301__$1);
var G__35309 = null;
var G__35310 = (0);
var G__35311 = (0);
seq__34794_35291 = G__35308;
chunk__34795_35292 = G__35309;
count__34796_35293 = G__35310;
i__34797_35294 = G__35311;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34798_35312 = cljs.core.seq(classes__$1);
var chunk__34799_35313 = null;
var count__34800_35314 = (0);
var i__34801_35315 = (0);
while(true){
if((i__34801_35315 < count__34800_35314)){
var c_35316 = chunk__34799_35313.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35315);
var class_name_35317 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35317,c_35316))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35317 === ""))?c_35316:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35317)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35316)].join('')));
}


var G__35318 = seq__34798_35312;
var G__35319 = chunk__34799_35313;
var G__35320 = count__34800_35314;
var G__35321 = (i__34801_35315 + (1));
seq__34798_35312 = G__35318;
chunk__34799_35313 = G__35319;
count__34800_35314 = G__35320;
i__34801_35315 = G__35321;
continue;
} else {
var temp__5735__auto___35322 = cljs.core.seq(seq__34798_35312);
if(temp__5735__auto___35322){
var seq__34798_35323__$1 = temp__5735__auto___35322;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35323__$1)){
var c__4609__auto___35324 = cljs.core.chunk_first(seq__34798_35323__$1);
var G__35325 = cljs.core.chunk_rest(seq__34798_35323__$1);
var G__35326 = c__4609__auto___35324;
var G__35327 = cljs.core.count(c__4609__auto___35324);
var G__35328 = (0);
seq__34798_35312 = G__35325;
chunk__34799_35313 = G__35326;
count__34800_35314 = G__35327;
i__34801_35315 = G__35328;
continue;
} else {
var c_35329 = cljs.core.first(seq__34798_35323__$1);
var class_name_35330 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35330,c_35329))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35330 === ""))?c_35329:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35330)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35329)].join('')));
}


var G__35331 = cljs.core.next(seq__34798_35323__$1);
var G__35332 = null;
var G__35333 = (0);
var G__35334 = (0);
seq__34798_35312 = G__35331;
chunk__34799_35313 = G__35332;
count__34800_35314 = G__35333;
i__34801_35315 = G__35334;
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
var G__34819 = arguments.length;
switch (G__34819) {
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
var G__34823 = arguments.length;
switch (G__34823) {
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
var G__34828 = arguments.length;
switch (G__34828) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35384 = arguments.length;
var i__4790__auto___35385 = (0);
while(true){
if((i__4790__auto___35385 < len__4789__auto___35384)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35385]));

var G__35386 = (i__4790__auto___35385 + (1));
i__4790__auto___35385 = G__35386;
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
var G__34829 = parent;
G__34829.appendChild(child);

return G__34829;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34830_35387 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34831_35388 = null;
var count__34832_35389 = (0);
var i__34833_35390 = (0);
while(true){
if((i__34833_35390 < count__34832_35389)){
var c_35391 = chunk__34831_35388.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35390);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35391);


var G__35392 = seq__34830_35387;
var G__35393 = chunk__34831_35388;
var G__35394 = count__34832_35389;
var G__35395 = (i__34833_35390 + (1));
seq__34830_35387 = G__35392;
chunk__34831_35388 = G__35393;
count__34832_35389 = G__35394;
i__34833_35390 = G__35395;
continue;
} else {
var temp__5735__auto___35396 = cljs.core.seq(seq__34830_35387);
if(temp__5735__auto___35396){
var seq__34830_35397__$1 = temp__5735__auto___35396;
if(cljs.core.chunked_seq_QMARK_(seq__34830_35397__$1)){
var c__4609__auto___35398 = cljs.core.chunk_first(seq__34830_35397__$1);
var G__35399 = cljs.core.chunk_rest(seq__34830_35397__$1);
var G__35400 = c__4609__auto___35398;
var G__35401 = cljs.core.count(c__4609__auto___35398);
var G__35402 = (0);
seq__34830_35387 = G__35399;
chunk__34831_35388 = G__35400;
count__34832_35389 = G__35401;
i__34833_35390 = G__35402;
continue;
} else {
var c_35403 = cljs.core.first(seq__34830_35397__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35403);


var G__35404 = cljs.core.next(seq__34830_35397__$1);
var G__35405 = null;
var G__35406 = (0);
var G__35407 = (0);
seq__34830_35387 = G__35404;
chunk__34831_35388 = G__35405;
count__34832_35389 = G__35406;
i__34833_35390 = G__35407;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34825){
var G__34826 = cljs.core.first(seq34825);
var seq34825__$1 = cljs.core.next(seq34825);
var G__34827 = cljs.core.first(seq34825__$1);
var seq34825__$2 = cljs.core.next(seq34825__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34826,G__34827,seq34825__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34838 = arguments.length;
switch (G__34838) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35410 = arguments.length;
var i__4790__auto___35411 = (0);
while(true){
if((i__4790__auto___35411 < len__4789__auto___35410)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35411]));

var G__35413 = (i__4790__auto___35411 + (1));
i__4790__auto___35411 = G__35413;
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
var G__34839 = parent;
G__34839.insertBefore(child,parent.firstChild);

return G__34839;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34840_35414 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34841_35415 = null;
var count__34842_35416 = (0);
var i__34843_35417 = (0);
while(true){
if((i__34843_35417 < count__34842_35416)){
var c_35418 = chunk__34841_35415.cljs$core$IIndexed$_nth$arity$2(null,i__34843_35417);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35418);


var G__35419 = seq__34840_35414;
var G__35420 = chunk__34841_35415;
var G__35421 = count__34842_35416;
var G__35422 = (i__34843_35417 + (1));
seq__34840_35414 = G__35419;
chunk__34841_35415 = G__35420;
count__34842_35416 = G__35421;
i__34843_35417 = G__35422;
continue;
} else {
var temp__5735__auto___35423 = cljs.core.seq(seq__34840_35414);
if(temp__5735__auto___35423){
var seq__34840_35424__$1 = temp__5735__auto___35423;
if(cljs.core.chunked_seq_QMARK_(seq__34840_35424__$1)){
var c__4609__auto___35425 = cljs.core.chunk_first(seq__34840_35424__$1);
var G__35426 = cljs.core.chunk_rest(seq__34840_35424__$1);
var G__35427 = c__4609__auto___35425;
var G__35428 = cljs.core.count(c__4609__auto___35425);
var G__35429 = (0);
seq__34840_35414 = G__35426;
chunk__34841_35415 = G__35427;
count__34842_35416 = G__35428;
i__34843_35417 = G__35429;
continue;
} else {
var c_35431 = cljs.core.first(seq__34840_35424__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35431);


var G__35433 = cljs.core.next(seq__34840_35424__$1);
var G__35434 = null;
var G__35435 = (0);
var G__35436 = (0);
seq__34840_35414 = G__35433;
chunk__34841_35415 = G__35434;
count__34842_35416 = G__35435;
i__34843_35417 = G__35436;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34835){
var G__34836 = cljs.core.first(seq34835);
var seq34835__$1 = cljs.core.next(seq34835);
var G__34837 = cljs.core.first(seq34835__$1);
var seq34835__$2 = cljs.core.next(seq34835__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34836,G__34837,seq34835__$2);
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
var temp__5733__auto___35437 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35437)){
var next_35438 = temp__5733__auto___35437;
dommy.core.insert_before_BANG_(elem,next_35438);
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
var G__34845 = arguments.length;
switch (G__34845) {
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
var G__34846 = p;
G__34846.removeChild(elem);

return G__34846;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34847){
var vec__34848 = p__34847;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848,(1),null);
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
var len__4789__auto___35440 = arguments.length;
var i__4790__auto___35441 = (0);
while(true){
if((i__4790__auto___35441 < len__4789__auto___35440)){
args__4795__auto__.push((arguments[i__4790__auto___35441]));

var G__35442 = (i__4790__auto___35441 + (1));
i__4790__auto___35441 = G__35442;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34851){
var G__34852 = cljs.core.first(seq34851);
var seq34851__$1 = cljs.core.next(seq34851);
var G__34853 = cljs.core.first(seq34851__$1);
var seq34851__$2 = cljs.core.next(seq34851__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34852,G__34853,seq34851__$2);
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
var len__4789__auto___35443 = arguments.length;
var i__4790__auto___35444 = (0);
while(true){
if((i__4790__auto___35444 < len__4789__auto___35443)){
args__4795__auto__.push((arguments[i__4790__auto___35444]));

var G__35445 = (i__4790__auto___35444 + (1));
i__4790__auto___35444 = G__35445;
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

var vec__34857_35446 = dommy.core.elem_and_selector(elem_sel);
var elem_35447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35446,(0),null);
var selector_35448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35446,(1),null);
var seq__34860_35449 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34867_35450 = null;
var count__34868_35451 = (0);
var i__34869_35452 = (0);
while(true){
if((i__34869_35452 < count__34868_35451)){
var vec__34928_35453 = chunk__34867_35450.cljs$core$IIndexed$_nth$arity$2(null,i__34869_35452);
var orig_type_35454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35453,(0),null);
var f_35455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35453,(1),null);
var seq__34870_35456 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35454,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35454,cljs.core.identity])));
var chunk__34872_35457 = null;
var count__34873_35458 = (0);
var i__34874_35459 = (0);
while(true){
if((i__34874_35459 < count__34873_35458)){
var vec__34941_35460 = chunk__34872_35457.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35459);
var actual_type_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941_35460,(0),null);
var factory_35462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941_35460,(1),null);
var canonical_f_35463 = (function (){var G__34945 = (factory_35462.cljs$core$IFn$_invoke$arity$1 ? factory_35462.cljs$core$IFn$_invoke$arity$1(f_35455) : factory_35462.call(null,f_35455));
var fexpr__34944 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34944.cljs$core$IFn$_invoke$arity$1 ? fexpr__34944.cljs$core$IFn$_invoke$arity$1(G__34945) : fexpr__34944.call(null,G__34945));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35461,f_35455], null),canonical_f_35463], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35461),canonical_f_35463);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35461),canonical_f_35463);
}


var G__35464 = seq__34870_35456;
var G__35465 = chunk__34872_35457;
var G__35466 = count__34873_35458;
var G__35467 = (i__34874_35459 + (1));
seq__34870_35456 = G__35464;
chunk__34872_35457 = G__35465;
count__34873_35458 = G__35466;
i__34874_35459 = G__35467;
continue;
} else {
var temp__5735__auto___35468 = cljs.core.seq(seq__34870_35456);
if(temp__5735__auto___35468){
var seq__34870_35469__$1 = temp__5735__auto___35468;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35469__$1)){
var c__4609__auto___35470 = cljs.core.chunk_first(seq__34870_35469__$1);
var G__35471 = cljs.core.chunk_rest(seq__34870_35469__$1);
var G__35472 = c__4609__auto___35470;
var G__35473 = cljs.core.count(c__4609__auto___35470);
var G__35474 = (0);
seq__34870_35456 = G__35471;
chunk__34872_35457 = G__35472;
count__34873_35458 = G__35473;
i__34874_35459 = G__35474;
continue;
} else {
var vec__34946_35475 = cljs.core.first(seq__34870_35469__$1);
var actual_type_35476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35475,(0),null);
var factory_35477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35475,(1),null);
var canonical_f_35478 = (function (){var G__34950 = (factory_35477.cljs$core$IFn$_invoke$arity$1 ? factory_35477.cljs$core$IFn$_invoke$arity$1(f_35455) : factory_35477.call(null,f_35455));
var fexpr__34949 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34949.cljs$core$IFn$_invoke$arity$1 ? fexpr__34949.cljs$core$IFn$_invoke$arity$1(G__34950) : fexpr__34949.call(null,G__34950));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35476,f_35455], null),canonical_f_35478], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35476),canonical_f_35478);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35476),canonical_f_35478);
}


var G__35479 = cljs.core.next(seq__34870_35469__$1);
var G__35480 = null;
var G__35481 = (0);
var G__35482 = (0);
seq__34870_35456 = G__35479;
chunk__34872_35457 = G__35480;
count__34873_35458 = G__35481;
i__34874_35459 = G__35482;
continue;
}
} else {
}
}
break;
}

var G__35483 = seq__34860_35449;
var G__35484 = chunk__34867_35450;
var G__35485 = count__34868_35451;
var G__35486 = (i__34869_35452 + (1));
seq__34860_35449 = G__35483;
chunk__34867_35450 = G__35484;
count__34868_35451 = G__35485;
i__34869_35452 = G__35486;
continue;
} else {
var temp__5735__auto___35487 = cljs.core.seq(seq__34860_35449);
if(temp__5735__auto___35487){
var seq__34860_35488__$1 = temp__5735__auto___35487;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35488__$1)){
var c__4609__auto___35489 = cljs.core.chunk_first(seq__34860_35488__$1);
var G__35490 = cljs.core.chunk_rest(seq__34860_35488__$1);
var G__35491 = c__4609__auto___35489;
var G__35492 = cljs.core.count(c__4609__auto___35489);
var G__35493 = (0);
seq__34860_35449 = G__35490;
chunk__34867_35450 = G__35491;
count__34868_35451 = G__35492;
i__34869_35452 = G__35493;
continue;
} else {
var vec__34951_35494 = cljs.core.first(seq__34860_35488__$1);
var orig_type_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951_35494,(0),null);
var f_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951_35494,(1),null);
var seq__34861_35497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35495,cljs.core.identity])));
var chunk__34863_35498 = null;
var count__34864_35499 = (0);
var i__34865_35500 = (0);
while(true){
if((i__34865_35500 < count__34864_35499)){
var vec__34964_35502 = chunk__34863_35498.cljs$core$IIndexed$_nth$arity$2(null,i__34865_35500);
var actual_type_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35502,(0),null);
var factory_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35502,(1),null);
var canonical_f_35505 = (function (){var G__34968 = (factory_35504.cljs$core$IFn$_invoke$arity$1 ? factory_35504.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35504.call(null,f_35496));
var fexpr__34967 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34967.cljs$core$IFn$_invoke$arity$1 ? fexpr__34967.cljs$core$IFn$_invoke$arity$1(G__34968) : fexpr__34967.call(null,G__34968));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35503,f_35496], null),canonical_f_35505], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35503),canonical_f_35505);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35503),canonical_f_35505);
}


var G__35507 = seq__34861_35497;
var G__35508 = chunk__34863_35498;
var G__35509 = count__34864_35499;
var G__35510 = (i__34865_35500 + (1));
seq__34861_35497 = G__35507;
chunk__34863_35498 = G__35508;
count__34864_35499 = G__35509;
i__34865_35500 = G__35510;
continue;
} else {
var temp__5735__auto___35511__$1 = cljs.core.seq(seq__34861_35497);
if(temp__5735__auto___35511__$1){
var seq__34861_35512__$1 = temp__5735__auto___35511__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34861_35512__$1)){
var c__4609__auto___35513 = cljs.core.chunk_first(seq__34861_35512__$1);
var G__35514 = cljs.core.chunk_rest(seq__34861_35512__$1);
var G__35515 = c__4609__auto___35513;
var G__35516 = cljs.core.count(c__4609__auto___35513);
var G__35517 = (0);
seq__34861_35497 = G__35514;
chunk__34863_35498 = G__35515;
count__34864_35499 = G__35516;
i__34865_35500 = G__35517;
continue;
} else {
var vec__34969_35518 = cljs.core.first(seq__34861_35512__$1);
var actual_type_35519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35518,(0),null);
var factory_35520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35518,(1),null);
var canonical_f_35522 = (function (){var G__34973 = (factory_35520.cljs$core$IFn$_invoke$arity$1 ? factory_35520.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35520.call(null,f_35496));
var fexpr__34972 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34972.cljs$core$IFn$_invoke$arity$1 ? fexpr__34972.cljs$core$IFn$_invoke$arity$1(G__34973) : fexpr__34972.call(null,G__34973));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35519,f_35496], null),canonical_f_35522], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35519),canonical_f_35522);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35519),canonical_f_35522);
}


var G__35525 = cljs.core.next(seq__34861_35512__$1);
var G__35526 = null;
var G__35527 = (0);
var G__35528 = (0);
seq__34861_35497 = G__35525;
chunk__34863_35498 = G__35526;
count__34864_35499 = G__35527;
i__34865_35500 = G__35528;
continue;
}
} else {
}
}
break;
}

var G__35530 = cljs.core.next(seq__34860_35488__$1);
var G__35531 = null;
var G__35532 = (0);
var G__35533 = (0);
seq__34860_35449 = G__35530;
chunk__34867_35450 = G__35531;
count__34868_35451 = G__35532;
i__34869_35452 = G__35533;
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
var len__4789__auto___35534 = arguments.length;
var i__4790__auto___35535 = (0);
while(true){
if((i__4790__auto___35535 < len__4789__auto___35534)){
args__4795__auto__.push((arguments[i__4790__auto___35535]));

var G__35536 = (i__4790__auto___35535 + (1));
i__4790__auto___35535 = G__35536;
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

var vec__34980_35542 = dommy.core.elem_and_selector(elem_sel);
var elem_35543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35542,(0),null);
var selector_35544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35542,(1),null);
var seq__34983_35545 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34990_35546 = null;
var count__34991_35547 = (0);
var i__34992_35548 = (0);
while(true){
if((i__34992_35548 < count__34991_35547)){
var vec__35037_35549 = chunk__34990_35546.cljs$core$IIndexed$_nth$arity$2(null,i__34992_35548);
var orig_type_35550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037_35549,(0),null);
var f_35551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037_35549,(1),null);
var seq__34993_35553 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35550,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35550,cljs.core.identity])));
var chunk__34995_35554 = null;
var count__34996_35555 = (0);
var i__34997_35556 = (0);
while(true){
if((i__34997_35556 < count__34996_35555)){
var vec__35049_35558 = chunk__34995_35554.cljs$core$IIndexed$_nth$arity$2(null,i__34997_35556);
var actual_type_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35558,(0),null);
var __35560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35558,(1),null);
var keys_35561 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35544,actual_type_35559,f_35551], null);
var canonical_f_35562 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35543),keys_35561);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35543,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35561], 0));

if(cljs.core.truth_(elem_35543.removeEventListener)){
elem_35543.removeEventListener(cljs.core.name(actual_type_35559),canonical_f_35562);
} else {
elem_35543.detachEvent(cljs.core.name(actual_type_35559),canonical_f_35562);
}


var G__35564 = seq__34993_35553;
var G__35565 = chunk__34995_35554;
var G__35566 = count__34996_35555;
var G__35567 = (i__34997_35556 + (1));
seq__34993_35553 = G__35564;
chunk__34995_35554 = G__35565;
count__34996_35555 = G__35566;
i__34997_35556 = G__35567;
continue;
} else {
var temp__5735__auto___35569 = cljs.core.seq(seq__34993_35553);
if(temp__5735__auto___35569){
var seq__34993_35570__$1 = temp__5735__auto___35569;
if(cljs.core.chunked_seq_QMARK_(seq__34993_35570__$1)){
var c__4609__auto___35572 = cljs.core.chunk_first(seq__34993_35570__$1);
var G__35574 = cljs.core.chunk_rest(seq__34993_35570__$1);
var G__35575 = c__4609__auto___35572;
var G__35576 = cljs.core.count(c__4609__auto___35572);
var G__35577 = (0);
seq__34993_35553 = G__35574;
chunk__34995_35554 = G__35575;
count__34996_35555 = G__35576;
i__34997_35556 = G__35577;
continue;
} else {
var vec__35053_35578 = cljs.core.first(seq__34993_35570__$1);
var actual_type_35579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35053_35578,(0),null);
var __35580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35053_35578,(1),null);
var keys_35581 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35544,actual_type_35579,f_35551], null);
var canonical_f_35582 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35543),keys_35581);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35543,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35581], 0));

if(cljs.core.truth_(elem_35543.removeEventListener)){
elem_35543.removeEventListener(cljs.core.name(actual_type_35579),canonical_f_35582);
} else {
elem_35543.detachEvent(cljs.core.name(actual_type_35579),canonical_f_35582);
}


var G__35584 = cljs.core.next(seq__34993_35570__$1);
var G__35585 = null;
var G__35586 = (0);
var G__35587 = (0);
seq__34993_35553 = G__35584;
chunk__34995_35554 = G__35585;
count__34996_35555 = G__35586;
i__34997_35556 = G__35587;
continue;
}
} else {
}
}
break;
}

var G__35592 = seq__34983_35545;
var G__35593 = chunk__34990_35546;
var G__35594 = count__34991_35547;
var G__35595 = (i__34992_35548 + (1));
seq__34983_35545 = G__35592;
chunk__34990_35546 = G__35593;
count__34991_35547 = G__35594;
i__34992_35548 = G__35595;
continue;
} else {
var temp__5735__auto___35596 = cljs.core.seq(seq__34983_35545);
if(temp__5735__auto___35596){
var seq__34983_35597__$1 = temp__5735__auto___35596;
if(cljs.core.chunked_seq_QMARK_(seq__34983_35597__$1)){
var c__4609__auto___35598 = cljs.core.chunk_first(seq__34983_35597__$1);
var G__35599 = cljs.core.chunk_rest(seq__34983_35597__$1);
var G__35600 = c__4609__auto___35598;
var G__35601 = cljs.core.count(c__4609__auto___35598);
var G__35602 = (0);
seq__34983_35545 = G__35599;
chunk__34990_35546 = G__35600;
count__34991_35547 = G__35601;
i__34992_35548 = G__35602;
continue;
} else {
var vec__35056_35603 = cljs.core.first(seq__34983_35597__$1);
var orig_type_35604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35603,(0),null);
var f_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35603,(1),null);
var seq__34984_35611 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35604,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35604,cljs.core.identity])));
var chunk__34986_35612 = null;
var count__34987_35613 = (0);
var i__34988_35614 = (0);
while(true){
if((i__34988_35614 < count__34987_35613)){
var vec__35069_35615 = chunk__34986_35612.cljs$core$IIndexed$_nth$arity$2(null,i__34988_35614);
var actual_type_35616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35069_35615,(0),null);
var __35617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35069_35615,(1),null);
var keys_35618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35544,actual_type_35616,f_35605], null);
var canonical_f_35619 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35543),keys_35618);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35543,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35618], 0));

if(cljs.core.truth_(elem_35543.removeEventListener)){
elem_35543.removeEventListener(cljs.core.name(actual_type_35616),canonical_f_35619);
} else {
elem_35543.detachEvent(cljs.core.name(actual_type_35616),canonical_f_35619);
}


var G__35620 = seq__34984_35611;
var G__35621 = chunk__34986_35612;
var G__35622 = count__34987_35613;
var G__35623 = (i__34988_35614 + (1));
seq__34984_35611 = G__35620;
chunk__34986_35612 = G__35621;
count__34987_35613 = G__35622;
i__34988_35614 = G__35623;
continue;
} else {
var temp__5735__auto___35624__$1 = cljs.core.seq(seq__34984_35611);
if(temp__5735__auto___35624__$1){
var seq__34984_35625__$1 = temp__5735__auto___35624__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34984_35625__$1)){
var c__4609__auto___35626 = cljs.core.chunk_first(seq__34984_35625__$1);
var G__35627 = cljs.core.chunk_rest(seq__34984_35625__$1);
var G__35628 = c__4609__auto___35626;
var G__35629 = cljs.core.count(c__4609__auto___35626);
var G__35630 = (0);
seq__34984_35611 = G__35627;
chunk__34986_35612 = G__35628;
count__34987_35613 = G__35629;
i__34988_35614 = G__35630;
continue;
} else {
var vec__35072_35631 = cljs.core.first(seq__34984_35625__$1);
var actual_type_35632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35072_35631,(0),null);
var __35633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35072_35631,(1),null);
var keys_35634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35544,actual_type_35632,f_35605], null);
var canonical_f_35635 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35543),keys_35634);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35543,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35634], 0));

if(cljs.core.truth_(elem_35543.removeEventListener)){
elem_35543.removeEventListener(cljs.core.name(actual_type_35632),canonical_f_35635);
} else {
elem_35543.detachEvent(cljs.core.name(actual_type_35632),canonical_f_35635);
}


var G__35636 = cljs.core.next(seq__34984_35625__$1);
var G__35637 = null;
var G__35638 = (0);
var G__35639 = (0);
seq__34984_35611 = G__35636;
chunk__34986_35612 = G__35637;
count__34987_35613 = G__35638;
i__34988_35614 = G__35639;
continue;
}
} else {
}
}
break;
}

var G__35640 = cljs.core.next(seq__34983_35597__$1);
var G__35641 = null;
var G__35642 = (0);
var G__35643 = (0);
seq__34983_35545 = G__35640;
chunk__34990_35546 = G__35641;
count__34991_35547 = G__35642;
i__34992_35548 = G__35643;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34978){
var G__34979 = cljs.core.first(seq34978);
var seq34978__$1 = cljs.core.next(seq34978);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34979,seq34978__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35644 = arguments.length;
var i__4790__auto___35645 = (0);
while(true){
if((i__4790__auto___35645 < len__4789__auto___35644)){
args__4795__auto__.push((arguments[i__4790__auto___35645]));

var G__35646 = (i__4790__auto___35645 + (1));
i__4790__auto___35645 = G__35646;
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

var vec__35077_35647 = dommy.core.elem_and_selector(elem_sel);
var elem_35648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35647,(0),null);
var selector_35649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35647,(1),null);
var seq__35080_35650 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35081_35651 = null;
var count__35082_35652 = (0);
var i__35083_35653 = (0);
while(true){
if((i__35083_35653 < count__35082_35652)){
var vec__35108_35654 = chunk__35081_35651.cljs$core$IIndexed$_nth$arity$2(null,i__35083_35653);
var type_35655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35654,(0),null);
var f_35656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35654,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35655,((function (seq__35080_35650,chunk__35081_35651,count__35082_35652,i__35083_35653,vec__35108_35654,type_35655,f_35656,vec__35077_35647,elem_35648,selector_35649){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35655,dommy$core$this_fn], 0));

return (f_35656.cljs$core$IFn$_invoke$arity$1 ? f_35656.cljs$core$IFn$_invoke$arity$1(e) : f_35656.call(null,e));
});})(seq__35080_35650,chunk__35081_35651,count__35082_35652,i__35083_35653,vec__35108_35654,type_35655,f_35656,vec__35077_35647,elem_35648,selector_35649))
], 0));


var G__35657 = seq__35080_35650;
var G__35658 = chunk__35081_35651;
var G__35659 = count__35082_35652;
var G__35660 = (i__35083_35653 + (1));
seq__35080_35650 = G__35657;
chunk__35081_35651 = G__35658;
count__35082_35652 = G__35659;
i__35083_35653 = G__35660;
continue;
} else {
var temp__5735__auto___35661 = cljs.core.seq(seq__35080_35650);
if(temp__5735__auto___35661){
var seq__35080_35662__$1 = temp__5735__auto___35661;
if(cljs.core.chunked_seq_QMARK_(seq__35080_35662__$1)){
var c__4609__auto___35663 = cljs.core.chunk_first(seq__35080_35662__$1);
var G__35664 = cljs.core.chunk_rest(seq__35080_35662__$1);
var G__35665 = c__4609__auto___35663;
var G__35666 = cljs.core.count(c__4609__auto___35663);
var G__35667 = (0);
seq__35080_35650 = G__35664;
chunk__35081_35651 = G__35665;
count__35082_35652 = G__35666;
i__35083_35653 = G__35667;
continue;
} else {
var vec__35111_35668 = cljs.core.first(seq__35080_35662__$1);
var type_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111_35668,(0),null);
var f_35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111_35668,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,((function (seq__35080_35650,chunk__35081_35651,count__35082_35652,i__35083_35653,vec__35111_35668,type_35669,f_35670,seq__35080_35662__$1,temp__5735__auto___35661,vec__35077_35647,elem_35648,selector_35649){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,dommy$core$this_fn], 0));

return (f_35670.cljs$core$IFn$_invoke$arity$1 ? f_35670.cljs$core$IFn$_invoke$arity$1(e) : f_35670.call(null,e));
});})(seq__35080_35650,chunk__35081_35651,count__35082_35652,i__35083_35653,vec__35111_35668,type_35669,f_35670,seq__35080_35662__$1,temp__5735__auto___35661,vec__35077_35647,elem_35648,selector_35649))
], 0));


var G__35671 = cljs.core.next(seq__35080_35662__$1);
var G__35672 = null;
var G__35673 = (0);
var G__35674 = (0);
seq__35080_35650 = G__35671;
chunk__35081_35651 = G__35672;
count__35082_35652 = G__35673;
i__35083_35653 = G__35674;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35075){
var G__35076 = cljs.core.first(seq35075);
var seq35075__$1 = cljs.core.next(seq35075);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35076,seq35075__$1);
}));


//# sourceMappingURL=dommy.core.js.map
