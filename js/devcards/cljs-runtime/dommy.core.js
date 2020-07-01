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
var len__4789__auto___35149 = arguments.length;
var i__4790__auto___35150 = (0);
while(true){
if((i__4790__auto___35150 < len__4789__auto___35149)){
args__4795__auto__.push((arguments[i__4790__auto___35150]));

var G__35151 = (i__4790__auto___35150 + (1));
i__4790__auto___35150 = G__35151;
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
var seq__34712_35152 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34713_35153 = null;
var count__34714_35154 = (0);
var i__34715_35155 = (0);
while(true){
if((i__34715_35155 < count__34714_35154)){
var vec__34722_35156 = chunk__34713_35153.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35155);
var k_35157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35156,(0),null);
var v_35158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35156,(1),null);
style.setProperty(dommy.utils.as_str(k_35157),v_35158);


var G__35159 = seq__34712_35152;
var G__35160 = chunk__34713_35153;
var G__35161 = count__34714_35154;
var G__35162 = (i__34715_35155 + (1));
seq__34712_35152 = G__35159;
chunk__34713_35153 = G__35160;
count__34714_35154 = G__35161;
i__34715_35155 = G__35162;
continue;
} else {
var temp__5735__auto___35163 = cljs.core.seq(seq__34712_35152);
if(temp__5735__auto___35163){
var seq__34712_35164__$1 = temp__5735__auto___35163;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35164__$1)){
var c__4609__auto___35165 = cljs.core.chunk_first(seq__34712_35164__$1);
var G__35166 = cljs.core.chunk_rest(seq__34712_35164__$1);
var G__35167 = c__4609__auto___35165;
var G__35168 = cljs.core.count(c__4609__auto___35165);
var G__35169 = (0);
seq__34712_35152 = G__35166;
chunk__34713_35153 = G__35167;
count__34714_35154 = G__35168;
i__34715_35155 = G__35169;
continue;
} else {
var vec__34725_35170 = cljs.core.first(seq__34712_35164__$1);
var k_35171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35170,(0),null);
var v_35172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35170,(1),null);
style.setProperty(dommy.utils.as_str(k_35171),v_35172);


var G__35173 = cljs.core.next(seq__34712_35164__$1);
var G__35174 = null;
var G__35175 = (0);
var G__35176 = (0);
seq__34712_35152 = G__35173;
chunk__34713_35153 = G__35174;
count__34714_35154 = G__35175;
i__34715_35155 = G__35176;
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
var len__4789__auto___35177 = arguments.length;
var i__4790__auto___35178 = (0);
while(true){
if((i__4790__auto___35178 < len__4789__auto___35177)){
args__4795__auto__.push((arguments[i__4790__auto___35178]));

var G__35179 = (i__4790__auto___35178 + (1));
i__4790__auto___35178 = G__35179;
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
var seq__34731_35180 = cljs.core.seq(keywords);
var chunk__34732_35181 = null;
var count__34733_35182 = (0);
var i__34734_35183 = (0);
while(true){
if((i__34734_35183 < count__34733_35182)){
var kw_35184 = chunk__34732_35181.cljs$core$IIndexed$_nth$arity$2(null,i__34734_35183);
style.removeProperty(dommy.utils.as_str(kw_35184));


var G__35185 = seq__34731_35180;
var G__35186 = chunk__34732_35181;
var G__35187 = count__34733_35182;
var G__35188 = (i__34734_35183 + (1));
seq__34731_35180 = G__35185;
chunk__34732_35181 = G__35186;
count__34733_35182 = G__35187;
i__34734_35183 = G__35188;
continue;
} else {
var temp__5735__auto___35189 = cljs.core.seq(seq__34731_35180);
if(temp__5735__auto___35189){
var seq__34731_35190__$1 = temp__5735__auto___35189;
if(cljs.core.chunked_seq_QMARK_(seq__34731_35190__$1)){
var c__4609__auto___35191 = cljs.core.chunk_first(seq__34731_35190__$1);
var G__35192 = cljs.core.chunk_rest(seq__34731_35190__$1);
var G__35193 = c__4609__auto___35191;
var G__35194 = cljs.core.count(c__4609__auto___35191);
var G__35195 = (0);
seq__34731_35180 = G__35192;
chunk__34732_35181 = G__35193;
count__34733_35182 = G__35194;
i__34734_35183 = G__35195;
continue;
} else {
var kw_35196 = cljs.core.first(seq__34731_35190__$1);
style.removeProperty(dommy.utils.as_str(kw_35196));


var G__35197 = cljs.core.next(seq__34731_35190__$1);
var G__35198 = null;
var G__35199 = (0);
var G__35200 = (0);
seq__34731_35180 = G__35197;
chunk__34732_35181 = G__35198;
count__34733_35182 = G__35199;
i__34734_35183 = G__35200;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34729){
var G__34730 = cljs.core.first(seq34729);
var seq34729__$1 = cljs.core.next(seq34729);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34730,seq34729__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35201 = arguments.length;
var i__4790__auto___35202 = (0);
while(true){
if((i__4790__auto___35202 < len__4789__auto___35201)){
args__4795__auto__.push((arguments[i__4790__auto___35202]));

var G__35203 = (i__4790__auto___35202 + (1));
i__4790__auto___35202 = G__35203;
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

var seq__34737_35204 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34738_35205 = null;
var count__34739_35206 = (0);
var i__34740_35207 = (0);
while(true){
if((i__34740_35207 < count__34739_35206)){
var vec__34747_35208 = chunk__34738_35205.cljs$core$IIndexed$_nth$arity$2(null,i__34740_35207);
var k_35209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35208,(0),null);
var v_35210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35208,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35209,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35210),"px"].join('')], 0));


var G__35211 = seq__34737_35204;
var G__35212 = chunk__34738_35205;
var G__35213 = count__34739_35206;
var G__35214 = (i__34740_35207 + (1));
seq__34737_35204 = G__35211;
chunk__34738_35205 = G__35212;
count__34739_35206 = G__35213;
i__34740_35207 = G__35214;
continue;
} else {
var temp__5735__auto___35215 = cljs.core.seq(seq__34737_35204);
if(temp__5735__auto___35215){
var seq__34737_35216__$1 = temp__5735__auto___35215;
if(cljs.core.chunked_seq_QMARK_(seq__34737_35216__$1)){
var c__4609__auto___35217 = cljs.core.chunk_first(seq__34737_35216__$1);
var G__35218 = cljs.core.chunk_rest(seq__34737_35216__$1);
var G__35219 = c__4609__auto___35217;
var G__35220 = cljs.core.count(c__4609__auto___35217);
var G__35221 = (0);
seq__34737_35204 = G__35218;
chunk__34738_35205 = G__35219;
count__34739_35206 = G__35220;
i__34740_35207 = G__35221;
continue;
} else {
var vec__34750_35222 = cljs.core.first(seq__34737_35216__$1);
var k_35223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35222,(0),null);
var v_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35222,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35223,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35224),"px"].join('')], 0));


var G__35225 = cljs.core.next(seq__34737_35216__$1);
var G__35226 = null;
var G__35227 = (0);
var G__35228 = (0);
seq__34737_35204 = G__35225;
chunk__34738_35205 = G__35226;
count__34739_35206 = G__35227;
i__34740_35207 = G__35228;
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
var len__4789__auto___35230 = arguments.length;
var i__4790__auto___35231 = (0);
while(true){
if((i__4790__auto___35231 < len__4789__auto___35230)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35231]));

var G__35232 = (i__4790__auto___35231 + (1));
i__4790__auto___35231 = G__35232;
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

var seq__34761_35235 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35236 = null;
var count__34763_35237 = (0);
var i__34764_35238 = (0);
while(true){
if((i__34764_35238 < count__34763_35237)){
var vec__34771_35239 = chunk__34762_35236.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35238);
var k_35240__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35239,(0),null);
var v_35241__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35239,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35240__$1,v_35241__$1);


var G__35242 = seq__34761_35235;
var G__35243 = chunk__34762_35236;
var G__35244 = count__34763_35237;
var G__35245 = (i__34764_35238 + (1));
seq__34761_35235 = G__35242;
chunk__34762_35236 = G__35243;
count__34763_35237 = G__35244;
i__34764_35238 = G__35245;
continue;
} else {
var temp__5735__auto___35246 = cljs.core.seq(seq__34761_35235);
if(temp__5735__auto___35246){
var seq__34761_35247__$1 = temp__5735__auto___35246;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35247__$1)){
var c__4609__auto___35248 = cljs.core.chunk_first(seq__34761_35247__$1);
var G__35249 = cljs.core.chunk_rest(seq__34761_35247__$1);
var G__35250 = c__4609__auto___35248;
var G__35251 = cljs.core.count(c__4609__auto___35248);
var G__35252 = (0);
seq__34761_35235 = G__35249;
chunk__34762_35236 = G__35250;
count__34763_35237 = G__35251;
i__34764_35238 = G__35252;
continue;
} else {
var vec__34774_35253 = cljs.core.first(seq__34761_35247__$1);
var k_35254__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35253,(0),null);
var v_35255__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35253,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35254__$1,v_35255__$1);


var G__35256 = cljs.core.next(seq__34761_35247__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__34761_35235 = G__35256;
chunk__34762_35236 = G__35257;
count__34763_35237 = G__35258;
i__34764_35238 = G__35259;
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
var len__4789__auto___35261 = arguments.length;
var i__4790__auto___35262 = (0);
while(true){
if((i__4790__auto___35262 < len__4789__auto___35261)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35262]));

var G__35264 = (i__4790__auto___35262 + (1));
i__4790__auto___35262 = G__35264;
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
var k_35266__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(k_35266__$1) : fexpr__34782.call(null,k_35266__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35266__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34783_35267 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34784_35268 = null;
var count__34785_35269 = (0);
var i__34786_35270 = (0);
while(true){
if((i__34786_35270 < count__34785_35269)){
var k_35271__$1 = chunk__34784_35268.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35270);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35271__$1);


var G__35272 = seq__34783_35267;
var G__35273 = chunk__34784_35268;
var G__35274 = count__34785_35269;
var G__35275 = (i__34786_35270 + (1));
seq__34783_35267 = G__35272;
chunk__34784_35268 = G__35273;
count__34785_35269 = G__35274;
i__34786_35270 = G__35275;
continue;
} else {
var temp__5735__auto___35276 = cljs.core.seq(seq__34783_35267);
if(temp__5735__auto___35276){
var seq__34783_35277__$1 = temp__5735__auto___35276;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35277__$1)){
var c__4609__auto___35278 = cljs.core.chunk_first(seq__34783_35277__$1);
var G__35279 = cljs.core.chunk_rest(seq__34783_35277__$1);
var G__35280 = c__4609__auto___35278;
var G__35281 = cljs.core.count(c__4609__auto___35278);
var G__35282 = (0);
seq__34783_35267 = G__35279;
chunk__34784_35268 = G__35280;
count__34785_35269 = G__35281;
i__34786_35270 = G__35282;
continue;
} else {
var k_35284__$1 = cljs.core.first(seq__34783_35277__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35284__$1);


var G__35286 = cljs.core.next(seq__34783_35277__$1);
var G__35287 = null;
var G__35288 = (0);
var G__35289 = (0);
seq__34783_35267 = G__35286;
chunk__34784_35268 = G__35287;
count__34785_35269 = G__35288;
i__34786_35270 = G__35289;
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
var len__4789__auto___35292 = arguments.length;
var i__4790__auto___35293 = (0);
while(true){
if((i__4790__auto___35293 < len__4789__auto___35292)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35293]));

var G__35294 = (i__4790__auto___35293 + (1));
i__4790__auto___35293 = G__35294;
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
var temp__5733__auto___35295 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35295)){
var class_list_35296 = temp__5733__auto___35295;
var seq__34794_35297 = cljs.core.seq(classes__$1);
var chunk__34795_35298 = null;
var count__34796_35299 = (0);
var i__34797_35300 = (0);
while(true){
if((i__34797_35300 < count__34796_35299)){
var c_35301 = chunk__34795_35298.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35300);
class_list_35296.add(c_35301);


var G__35302 = seq__34794_35297;
var G__35303 = chunk__34795_35298;
var G__35304 = count__34796_35299;
var G__35305 = (i__34797_35300 + (1));
seq__34794_35297 = G__35302;
chunk__34795_35298 = G__35303;
count__34796_35299 = G__35304;
i__34797_35300 = G__35305;
continue;
} else {
var temp__5735__auto___35306 = cljs.core.seq(seq__34794_35297);
if(temp__5735__auto___35306){
var seq__34794_35307__$1 = temp__5735__auto___35306;
if(cljs.core.chunked_seq_QMARK_(seq__34794_35307__$1)){
var c__4609__auto___35308 = cljs.core.chunk_first(seq__34794_35307__$1);
var G__35309 = cljs.core.chunk_rest(seq__34794_35307__$1);
var G__35310 = c__4609__auto___35308;
var G__35311 = cljs.core.count(c__4609__auto___35308);
var G__35312 = (0);
seq__34794_35297 = G__35309;
chunk__34795_35298 = G__35310;
count__34796_35299 = G__35311;
i__34797_35300 = G__35312;
continue;
} else {
var c_35313 = cljs.core.first(seq__34794_35307__$1);
class_list_35296.add(c_35313);


var G__35314 = cljs.core.next(seq__34794_35307__$1);
var G__35315 = null;
var G__35316 = (0);
var G__35317 = (0);
seq__34794_35297 = G__35314;
chunk__34795_35298 = G__35315;
count__34796_35299 = G__35316;
i__34797_35300 = G__35317;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34798_35318 = cljs.core.seq(classes__$1);
var chunk__34799_35319 = null;
var count__34800_35320 = (0);
var i__34801_35321 = (0);
while(true){
if((i__34801_35321 < count__34800_35320)){
var c_35322 = chunk__34799_35319.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35321);
var class_name_35323 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35323,c_35322))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35323 === ""))?c_35322:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35323)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35322)].join('')));
}


var G__35324 = seq__34798_35318;
var G__35325 = chunk__34799_35319;
var G__35326 = count__34800_35320;
var G__35327 = (i__34801_35321 + (1));
seq__34798_35318 = G__35324;
chunk__34799_35319 = G__35325;
count__34800_35320 = G__35326;
i__34801_35321 = G__35327;
continue;
} else {
var temp__5735__auto___35328 = cljs.core.seq(seq__34798_35318);
if(temp__5735__auto___35328){
var seq__34798_35329__$1 = temp__5735__auto___35328;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35329__$1)){
var c__4609__auto___35330 = cljs.core.chunk_first(seq__34798_35329__$1);
var G__35331 = cljs.core.chunk_rest(seq__34798_35329__$1);
var G__35332 = c__4609__auto___35330;
var G__35333 = cljs.core.count(c__4609__auto___35330);
var G__35334 = (0);
seq__34798_35318 = G__35331;
chunk__34799_35319 = G__35332;
count__34800_35320 = G__35333;
i__34801_35321 = G__35334;
continue;
} else {
var c_35335 = cljs.core.first(seq__34798_35329__$1);
var class_name_35336 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35336,c_35335))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35336 === ""))?c_35335:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35336)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35335)].join('')));
}


var G__35337 = cljs.core.next(seq__34798_35329__$1);
var G__35338 = null;
var G__35339 = (0);
var G__35340 = (0);
seq__34798_35318 = G__35337;
chunk__34799_35319 = G__35338;
count__34800_35320 = G__35339;
i__34801_35321 = G__35340;
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
var seq__34802_35341 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34803_35342 = null;
var count__34804_35343 = (0);
var i__34805_35344 = (0);
while(true){
if((i__34805_35344 < count__34804_35343)){
var c_35345 = chunk__34803_35342.cljs$core$IIndexed$_nth$arity$2(null,i__34805_35344);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35345);


var G__35346 = seq__34802_35341;
var G__35347 = chunk__34803_35342;
var G__35348 = count__34804_35343;
var G__35349 = (i__34805_35344 + (1));
seq__34802_35341 = G__35346;
chunk__34803_35342 = G__35347;
count__34804_35343 = G__35348;
i__34805_35344 = G__35349;
continue;
} else {
var temp__5735__auto___35350 = cljs.core.seq(seq__34802_35341);
if(temp__5735__auto___35350){
var seq__34802_35351__$1 = temp__5735__auto___35350;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35351__$1)){
var c__4609__auto___35352 = cljs.core.chunk_first(seq__34802_35351__$1);
var G__35353 = cljs.core.chunk_rest(seq__34802_35351__$1);
var G__35354 = c__4609__auto___35352;
var G__35355 = cljs.core.count(c__4609__auto___35352);
var G__35356 = (0);
seq__34802_35341 = G__35353;
chunk__34803_35342 = G__35354;
count__34804_35343 = G__35355;
i__34805_35344 = G__35356;
continue;
} else {
var c_35357 = cljs.core.first(seq__34802_35351__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35357);


var G__35358 = cljs.core.next(seq__34802_35351__$1);
var G__35359 = null;
var G__35360 = (0);
var G__35361 = (0);
seq__34802_35341 = G__35358;
chunk__34803_35342 = G__35359;
count__34804_35343 = G__35360;
i__34805_35344 = G__35361;
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
var G__34813 = arguments.length;
switch (G__34813) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35363 = arguments.length;
var i__4790__auto___35364 = (0);
while(true){
if((i__4790__auto___35364 < len__4789__auto___35363)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35364]));

var G__35365 = (i__4790__auto___35364 + (1));
i__4790__auto___35364 = G__35365;
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
var temp__5733__auto___35366 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35366)){
var class_list_35367 = temp__5733__auto___35366;
class_list_35367.remove(c__$1);
} else {
var class_name_35368 = dommy.core.class$(elem);
var new_class_name_35369 = dommy.utils.remove_class_str(class_name_35368,c__$1);
if((class_name_35368 === new_class_name_35369)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35369);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34814 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34815 = null;
var count__34816 = (0);
var i__34817 = (0);
while(true){
if((i__34817 < count__34816)){
var c = chunk__34815.cljs$core$IIndexed$_nth$arity$2(null,i__34817);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35370 = seq__34814;
var G__35371 = chunk__34815;
var G__35372 = count__34816;
var G__35373 = (i__34817 + (1));
seq__34814 = G__35370;
chunk__34815 = G__35371;
count__34816 = G__35372;
i__34817 = G__35373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34814);
if(temp__5735__auto__){
var seq__34814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34814__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34814__$1);
var G__35374 = cljs.core.chunk_rest(seq__34814__$1);
var G__35375 = c__4609__auto__;
var G__35376 = cljs.core.count(c__4609__auto__);
var G__35377 = (0);
seq__34814 = G__35374;
chunk__34815 = G__35375;
count__34816 = G__35376;
i__34817 = G__35377;
continue;
} else {
var c = cljs.core.first(seq__34814__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35378 = cljs.core.next(seq__34814__$1);
var G__35379 = null;
var G__35380 = (0);
var G__35381 = (0);
seq__34814 = G__35378;
chunk__34815 = G__35379;
count__34816 = G__35380;
i__34817 = G__35381;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34810){
var G__34811 = cljs.core.first(seq34810);
var seq34810__$1 = cljs.core.next(seq34810);
var G__34812 = cljs.core.first(seq34810__$1);
var seq34810__$2 = cljs.core.next(seq34810__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34811,G__34812,seq34810__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34819 = arguments.length;
switch (G__34819) {
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
var temp__5733__auto___35383 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35383)){
var class_list_35384 = temp__5733__auto___35383;
class_list_35384.toggle(c__$1);
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
var G__34821 = arguments.length;
switch (G__34821) {
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
var len__4789__auto___35394 = arguments.length;
var i__4790__auto___35395 = (0);
while(true){
if((i__4790__auto___35395 < len__4789__auto___35394)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35395]));

var G__35396 = (i__4790__auto___35395 + (1));
i__4790__auto___35395 = G__35396;
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
var seq__34830_35402 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34831_35403 = null;
var count__34832_35404 = (0);
var i__34833_35405 = (0);
while(true){
if((i__34833_35405 < count__34832_35404)){
var c_35406 = chunk__34831_35403.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35405);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35406);


var G__35407 = seq__34830_35402;
var G__35408 = chunk__34831_35403;
var G__35409 = count__34832_35404;
var G__35410 = (i__34833_35405 + (1));
seq__34830_35402 = G__35407;
chunk__34831_35403 = G__35408;
count__34832_35404 = G__35409;
i__34833_35405 = G__35410;
continue;
} else {
var temp__5735__auto___35411 = cljs.core.seq(seq__34830_35402);
if(temp__5735__auto___35411){
var seq__34830_35413__$1 = temp__5735__auto___35411;
if(cljs.core.chunked_seq_QMARK_(seq__34830_35413__$1)){
var c__4609__auto___35414 = cljs.core.chunk_first(seq__34830_35413__$1);
var G__35416 = cljs.core.chunk_rest(seq__34830_35413__$1);
var G__35417 = c__4609__auto___35414;
var G__35418 = cljs.core.count(c__4609__auto___35414);
var G__35419 = (0);
seq__34830_35402 = G__35416;
chunk__34831_35403 = G__35417;
count__34832_35404 = G__35418;
i__34833_35405 = G__35419;
continue;
} else {
var c_35422 = cljs.core.first(seq__34830_35413__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35422);


var G__35425 = cljs.core.next(seq__34830_35413__$1);
var G__35426 = null;
var G__35427 = (0);
var G__35428 = (0);
seq__34830_35402 = G__35425;
chunk__34831_35403 = G__35426;
count__34832_35404 = G__35427;
i__34833_35405 = G__35428;
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
var len__4789__auto___35435 = arguments.length;
var i__4790__auto___35436 = (0);
while(true){
if((i__4790__auto___35436 < len__4789__auto___35435)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35436]));

var G__35437 = (i__4790__auto___35436 + (1));
i__4790__auto___35436 = G__35437;
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
var seq__34840_35441 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34841_35442 = null;
var count__34842_35443 = (0);
var i__34843_35444 = (0);
while(true){
if((i__34843_35444 < count__34842_35443)){
var c_35447 = chunk__34841_35442.cljs$core$IIndexed$_nth$arity$2(null,i__34843_35444);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35447);


var G__35448 = seq__34840_35441;
var G__35449 = chunk__34841_35442;
var G__35450 = count__34842_35443;
var G__35451 = (i__34843_35444 + (1));
seq__34840_35441 = G__35448;
chunk__34841_35442 = G__35449;
count__34842_35443 = G__35450;
i__34843_35444 = G__35451;
continue;
} else {
var temp__5735__auto___35452 = cljs.core.seq(seq__34840_35441);
if(temp__5735__auto___35452){
var seq__34840_35453__$1 = temp__5735__auto___35452;
if(cljs.core.chunked_seq_QMARK_(seq__34840_35453__$1)){
var c__4609__auto___35454 = cljs.core.chunk_first(seq__34840_35453__$1);
var G__35455 = cljs.core.chunk_rest(seq__34840_35453__$1);
var G__35456 = c__4609__auto___35454;
var G__35457 = cljs.core.count(c__4609__auto___35454);
var G__35458 = (0);
seq__34840_35441 = G__35455;
chunk__34841_35442 = G__35456;
count__34842_35443 = G__35457;
i__34843_35444 = G__35458;
continue;
} else {
var c_35459 = cljs.core.first(seq__34840_35453__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35459);


var G__35460 = cljs.core.next(seq__34840_35453__$1);
var G__35461 = null;
var G__35462 = (0);
var G__35463 = (0);
seq__34840_35441 = G__35460;
chunk__34841_35442 = G__35461;
count__34842_35443 = G__35462;
i__34843_35444 = G__35463;
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
var temp__5733__auto___35464 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35464)){
var next_35465 = temp__5733__auto___35464;
dommy.core.insert_before_BANG_(elem,next_35465);
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
var len__4789__auto___35467 = arguments.length;
var i__4790__auto___35468 = (0);
while(true){
if((i__4790__auto___35468 < len__4789__auto___35467)){
args__4795__auto__.push((arguments[i__4790__auto___35468]));

var G__35469 = (i__4790__auto___35468 + (1));
i__4790__auto___35468 = G__35469;
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
var fexpr__34857 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34857.cljs$core$IFn$_invoke$arity$1 ? fexpr__34857.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34857.call(null,elem_sel));
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
var len__4789__auto___35470 = arguments.length;
var i__4790__auto___35471 = (0);
while(true){
if((i__4790__auto___35471 < len__4789__auto___35470)){
args__4795__auto__.push((arguments[i__4790__auto___35471]));

var G__35472 = (i__4790__auto___35471 + (1));
i__4790__auto___35471 = G__35472;
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

var vec__34860_35473 = dommy.core.elem_and_selector(elem_sel);
var elem_35474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860_35473,(0),null);
var selector_35475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860_35473,(1),null);
var seq__34863_35476 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34870_35477 = null;
var count__34871_35478 = (0);
var i__34872_35479 = (0);
while(true){
if((i__34872_35479 < count__34871_35478)){
var vec__34928_35480 = chunk__34870_35477.cljs$core$IIndexed$_nth$arity$2(null,i__34872_35479);
var orig_type_35481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35480,(0),null);
var f_35482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35480,(1),null);
var seq__34873_35483 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35481,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35481,cljs.core.identity])));
var chunk__34875_35484 = null;
var count__34876_35485 = (0);
var i__34877_35486 = (0);
while(true){
if((i__34877_35486 < count__34876_35485)){
var vec__34945_35487 = chunk__34875_35484.cljs$core$IIndexed$_nth$arity$2(null,i__34877_35486);
var actual_type_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34945_35487,(0),null);
var factory_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34945_35487,(1),null);
var canonical_f_35490 = (function (){var G__34949 = (factory_35489.cljs$core$IFn$_invoke$arity$1 ? factory_35489.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35489.call(null,f_35482));
var fexpr__34948 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34948.cljs$core$IFn$_invoke$arity$1 ? fexpr__34948.cljs$core$IFn$_invoke$arity$1(G__34949) : fexpr__34948.call(null,G__34949));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35488,f_35482], null),canonical_f_35490], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35488),canonical_f_35490);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35488),canonical_f_35490);
}


var G__35491 = seq__34873_35483;
var G__35492 = chunk__34875_35484;
var G__35493 = count__34876_35485;
var G__35494 = (i__34877_35486 + (1));
seq__34873_35483 = G__35491;
chunk__34875_35484 = G__35492;
count__34876_35485 = G__35493;
i__34877_35486 = G__35494;
continue;
} else {
var temp__5735__auto___35495 = cljs.core.seq(seq__34873_35483);
if(temp__5735__auto___35495){
var seq__34873_35496__$1 = temp__5735__auto___35495;
if(cljs.core.chunked_seq_QMARK_(seq__34873_35496__$1)){
var c__4609__auto___35497 = cljs.core.chunk_first(seq__34873_35496__$1);
var G__35498 = cljs.core.chunk_rest(seq__34873_35496__$1);
var G__35499 = c__4609__auto___35497;
var G__35500 = cljs.core.count(c__4609__auto___35497);
var G__35501 = (0);
seq__34873_35483 = G__35498;
chunk__34875_35484 = G__35499;
count__34876_35485 = G__35500;
i__34877_35486 = G__35501;
continue;
} else {
var vec__34950_35502 = cljs.core.first(seq__34873_35496__$1);
var actual_type_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34950_35502,(0),null);
var factory_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34950_35502,(1),null);
var canonical_f_35505 = (function (){var G__34954 = (factory_35504.cljs$core$IFn$_invoke$arity$1 ? factory_35504.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35504.call(null,f_35482));
var fexpr__34953 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34953.cljs$core$IFn$_invoke$arity$1 ? fexpr__34953.cljs$core$IFn$_invoke$arity$1(G__34954) : fexpr__34953.call(null,G__34954));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35503,f_35482], null),canonical_f_35505], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35503),canonical_f_35505);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35503),canonical_f_35505);
}


var G__35506 = cljs.core.next(seq__34873_35496__$1);
var G__35507 = null;
var G__35508 = (0);
var G__35509 = (0);
seq__34873_35483 = G__35506;
chunk__34875_35484 = G__35507;
count__34876_35485 = G__35508;
i__34877_35486 = G__35509;
continue;
}
} else {
}
}
break;
}

var G__35510 = seq__34863_35476;
var G__35511 = chunk__34870_35477;
var G__35512 = count__34871_35478;
var G__35513 = (i__34872_35479 + (1));
seq__34863_35476 = G__35510;
chunk__34870_35477 = G__35511;
count__34871_35478 = G__35512;
i__34872_35479 = G__35513;
continue;
} else {
var temp__5735__auto___35514 = cljs.core.seq(seq__34863_35476);
if(temp__5735__auto___35514){
var seq__34863_35515__$1 = temp__5735__auto___35514;
if(cljs.core.chunked_seq_QMARK_(seq__34863_35515__$1)){
var c__4609__auto___35516 = cljs.core.chunk_first(seq__34863_35515__$1);
var G__35517 = cljs.core.chunk_rest(seq__34863_35515__$1);
var G__35518 = c__4609__auto___35516;
var G__35519 = cljs.core.count(c__4609__auto___35516);
var G__35520 = (0);
seq__34863_35476 = G__35517;
chunk__34870_35477 = G__35518;
count__34871_35478 = G__35519;
i__34872_35479 = G__35520;
continue;
} else {
var vec__34955_35521 = cljs.core.first(seq__34863_35515__$1);
var orig_type_35522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35521,(0),null);
var f_35523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35521,(1),null);
var seq__34864_35524 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35522,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35522,cljs.core.identity])));
var chunk__34866_35525 = null;
var count__34867_35526 = (0);
var i__34868_35527 = (0);
while(true){
if((i__34868_35527 < count__34867_35526)){
var vec__34975_35528 = chunk__34866_35525.cljs$core$IIndexed$_nth$arity$2(null,i__34868_35527);
var actual_type_35529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35528,(0),null);
var factory_35530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35528,(1),null);
var canonical_f_35531 = (function (){var G__34979 = (factory_35530.cljs$core$IFn$_invoke$arity$1 ? factory_35530.cljs$core$IFn$_invoke$arity$1(f_35523) : factory_35530.call(null,f_35523));
var fexpr__34978 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35529,f_35523], null),canonical_f_35531], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35529),canonical_f_35531);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35529),canonical_f_35531);
}


var G__35534 = seq__34864_35524;
var G__35535 = chunk__34866_35525;
var G__35536 = count__34867_35526;
var G__35537 = (i__34868_35527 + (1));
seq__34864_35524 = G__35534;
chunk__34866_35525 = G__35535;
count__34867_35526 = G__35536;
i__34868_35527 = G__35537;
continue;
} else {
var temp__5735__auto___35539__$1 = cljs.core.seq(seq__34864_35524);
if(temp__5735__auto___35539__$1){
var seq__34864_35541__$1 = temp__5735__auto___35539__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34864_35541__$1)){
var c__4609__auto___35542 = cljs.core.chunk_first(seq__34864_35541__$1);
var G__35543 = cljs.core.chunk_rest(seq__34864_35541__$1);
var G__35544 = c__4609__auto___35542;
var G__35545 = cljs.core.count(c__4609__auto___35542);
var G__35546 = (0);
seq__34864_35524 = G__35543;
chunk__34866_35525 = G__35544;
count__34867_35526 = G__35545;
i__34868_35527 = G__35546;
continue;
} else {
var vec__34980_35548 = cljs.core.first(seq__34864_35541__$1);
var actual_type_35549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35548,(0),null);
var factory_35550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35548,(1),null);
var canonical_f_35552 = (function (){var G__34984 = (factory_35550.cljs$core$IFn$_invoke$arity$1 ? factory_35550.cljs$core$IFn$_invoke$arity$1(f_35523) : factory_35550.call(null,f_35523));
var fexpr__34983 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35549,f_35523], null),canonical_f_35552], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35549),canonical_f_35552);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35549),canonical_f_35552);
}


var G__35553 = cljs.core.next(seq__34864_35541__$1);
var G__35554 = null;
var G__35555 = (0);
var G__35556 = (0);
seq__34864_35524 = G__35553;
chunk__34866_35525 = G__35554;
count__34867_35526 = G__35555;
i__34868_35527 = G__35556;
continue;
}
} else {
}
}
break;
}

var G__35557 = cljs.core.next(seq__34863_35515__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__34863_35476 = G__35557;
chunk__34870_35477 = G__35558;
count__34871_35478 = G__35559;
i__34872_35479 = G__35560;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34858){
var G__34859 = cljs.core.first(seq34858);
var seq34858__$1 = cljs.core.next(seq34858);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34859,seq34858__$1);
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
var len__4789__auto___35561 = arguments.length;
var i__4790__auto___35562 = (0);
while(true){
if((i__4790__auto___35562 < len__4789__auto___35561)){
args__4795__auto__.push((arguments[i__4790__auto___35562]));

var G__35564 = (i__4790__auto___35562 + (1));
i__4790__auto___35562 = G__35564;
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

var vec__34987_35568 = dommy.core.elem_and_selector(elem_sel);
var elem_35569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35568,(0),null);
var selector_35570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35568,(1),null);
var seq__34990_35571 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34997_35572 = null;
var count__34998_35573 = (0);
var i__34999_35574 = (0);
while(true){
if((i__34999_35574 < count__34998_35573)){
var vec__35045_35575 = chunk__34997_35572.cljs$core$IIndexed$_nth$arity$2(null,i__34999_35574);
var orig_type_35576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35045_35575,(0),null);
var f_35577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35045_35575,(1),null);
var seq__35000_35581 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35576,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35576,cljs.core.identity])));
var chunk__35002_35582 = null;
var count__35003_35583 = (0);
var i__35004_35584 = (0);
while(true){
if((i__35004_35584 < count__35003_35583)){
var vec__35077_35585 = chunk__35002_35582.cljs$core$IIndexed$_nth$arity$2(null,i__35004_35584);
var actual_type_35586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35585,(0),null);
var __35587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35585,(1),null);
var keys_35588 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35570,actual_type_35586,f_35577], null);
var canonical_f_35589 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35569),keys_35588);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35569,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35588], 0));

if(cljs.core.truth_(elem_35569.removeEventListener)){
elem_35569.removeEventListener(cljs.core.name(actual_type_35586),canonical_f_35589);
} else {
elem_35569.detachEvent(cljs.core.name(actual_type_35586),canonical_f_35589);
}


var G__35590 = seq__35000_35581;
var G__35591 = chunk__35002_35582;
var G__35592 = count__35003_35583;
var G__35593 = (i__35004_35584 + (1));
seq__35000_35581 = G__35590;
chunk__35002_35582 = G__35591;
count__35003_35583 = G__35592;
i__35004_35584 = G__35593;
continue;
} else {
var temp__5735__auto___35596 = cljs.core.seq(seq__35000_35581);
if(temp__5735__auto___35596){
var seq__35000_35600__$1 = temp__5735__auto___35596;
if(cljs.core.chunked_seq_QMARK_(seq__35000_35600__$1)){
var c__4609__auto___35602 = cljs.core.chunk_first(seq__35000_35600__$1);
var G__35603 = cljs.core.chunk_rest(seq__35000_35600__$1);
var G__35604 = c__4609__auto___35602;
var G__35605 = cljs.core.count(c__4609__auto___35602);
var G__35606 = (0);
seq__35000_35581 = G__35603;
chunk__35002_35582 = G__35604;
count__35003_35583 = G__35605;
i__35004_35584 = G__35606;
continue;
} else {
var vec__35080_35608 = cljs.core.first(seq__35000_35600__$1);
var actual_type_35609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35608,(0),null);
var __35610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35608,(1),null);
var keys_35611 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35570,actual_type_35609,f_35577], null);
var canonical_f_35612 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35569),keys_35611);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35569,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35611], 0));

if(cljs.core.truth_(elem_35569.removeEventListener)){
elem_35569.removeEventListener(cljs.core.name(actual_type_35609),canonical_f_35612);
} else {
elem_35569.detachEvent(cljs.core.name(actual_type_35609),canonical_f_35612);
}


var G__35615 = cljs.core.next(seq__35000_35600__$1);
var G__35616 = null;
var G__35617 = (0);
var G__35618 = (0);
seq__35000_35581 = G__35615;
chunk__35002_35582 = G__35616;
count__35003_35583 = G__35617;
i__35004_35584 = G__35618;
continue;
}
} else {
}
}
break;
}

var G__35621 = seq__34990_35571;
var G__35622 = chunk__34997_35572;
var G__35623 = count__34998_35573;
var G__35624 = (i__34999_35574 + (1));
seq__34990_35571 = G__35621;
chunk__34997_35572 = G__35622;
count__34998_35573 = G__35623;
i__34999_35574 = G__35624;
continue;
} else {
var temp__5735__auto___35625 = cljs.core.seq(seq__34990_35571);
if(temp__5735__auto___35625){
var seq__34990_35626__$1 = temp__5735__auto___35625;
if(cljs.core.chunked_seq_QMARK_(seq__34990_35626__$1)){
var c__4609__auto___35627 = cljs.core.chunk_first(seq__34990_35626__$1);
var G__35628 = cljs.core.chunk_rest(seq__34990_35626__$1);
var G__35629 = c__4609__auto___35627;
var G__35630 = cljs.core.count(c__4609__auto___35627);
var G__35631 = (0);
seq__34990_35571 = G__35628;
chunk__34997_35572 = G__35629;
count__34998_35573 = G__35630;
i__34999_35574 = G__35631;
continue;
} else {
var vec__35089_35632 = cljs.core.first(seq__34990_35626__$1);
var orig_type_35633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35089_35632,(0),null);
var f_35634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35089_35632,(1),null);
var seq__34991_35640 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35633,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35633,cljs.core.identity])));
var chunk__34993_35641 = null;
var count__34994_35642 = (0);
var i__34995_35643 = (0);
while(true){
if((i__34995_35643 < count__34994_35642)){
var vec__35114_35645 = chunk__34993_35641.cljs$core$IIndexed$_nth$arity$2(null,i__34995_35643);
var actual_type_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35114_35645,(0),null);
var __35647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35114_35645,(1),null);
var keys_35649 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35570,actual_type_35646,f_35634], null);
var canonical_f_35650 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35569),keys_35649);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35569,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35649], 0));

if(cljs.core.truth_(elem_35569.removeEventListener)){
elem_35569.removeEventListener(cljs.core.name(actual_type_35646),canonical_f_35650);
} else {
elem_35569.detachEvent(cljs.core.name(actual_type_35646),canonical_f_35650);
}


var G__35653 = seq__34991_35640;
var G__35654 = chunk__34993_35641;
var G__35655 = count__34994_35642;
var G__35656 = (i__34995_35643 + (1));
seq__34991_35640 = G__35653;
chunk__34993_35641 = G__35654;
count__34994_35642 = G__35655;
i__34995_35643 = G__35656;
continue;
} else {
var temp__5735__auto___35659__$1 = cljs.core.seq(seq__34991_35640);
if(temp__5735__auto___35659__$1){
var seq__34991_35660__$1 = temp__5735__auto___35659__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34991_35660__$1)){
var c__4609__auto___35661 = cljs.core.chunk_first(seq__34991_35660__$1);
var G__35662 = cljs.core.chunk_rest(seq__34991_35660__$1);
var G__35663 = c__4609__auto___35661;
var G__35664 = cljs.core.count(c__4609__auto___35661);
var G__35665 = (0);
seq__34991_35640 = G__35662;
chunk__34993_35641 = G__35663;
count__34994_35642 = G__35664;
i__34995_35643 = G__35665;
continue;
} else {
var vec__35117_35667 = cljs.core.first(seq__34991_35660__$1);
var actual_type_35668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35667,(0),null);
var __35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35667,(1),null);
var keys_35670 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35570,actual_type_35668,f_35634], null);
var canonical_f_35671 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35569),keys_35670);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35569,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35670], 0));

if(cljs.core.truth_(elem_35569.removeEventListener)){
elem_35569.removeEventListener(cljs.core.name(actual_type_35668),canonical_f_35671);
} else {
elem_35569.detachEvent(cljs.core.name(actual_type_35668),canonical_f_35671);
}


var G__35675 = cljs.core.next(seq__34991_35660__$1);
var G__35676 = null;
var G__35677 = (0);
var G__35678 = (0);
seq__34991_35640 = G__35675;
chunk__34993_35641 = G__35676;
count__34994_35642 = G__35677;
i__34995_35643 = G__35678;
continue;
}
} else {
}
}
break;
}

var G__35680 = cljs.core.next(seq__34990_35626__$1);
var G__35681 = null;
var G__35682 = (0);
var G__35683 = (0);
seq__34990_35571 = G__35680;
chunk__34997_35572 = G__35681;
count__34998_35573 = G__35682;
i__34999_35574 = G__35683;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34985){
var G__34986 = cljs.core.first(seq34985);
var seq34985__$1 = cljs.core.next(seq34985);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34986,seq34985__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35689 = arguments.length;
var i__4790__auto___35690 = (0);
while(true){
if((i__4790__auto___35690 < len__4789__auto___35689)){
args__4795__auto__.push((arguments[i__4790__auto___35690]));

var G__35691 = (i__4790__auto___35690 + (1));
i__4790__auto___35690 = G__35691;
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

var vec__35126_35695 = dommy.core.elem_and_selector(elem_sel);
var elem_35696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35126_35695,(0),null);
var selector_35697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35126_35695,(1),null);
var seq__35129_35698 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35130_35699 = null;
var count__35131_35700 = (0);
var i__35132_35701 = (0);
while(true){
if((i__35132_35701 < count__35131_35700)){
var vec__35140_35704 = chunk__35130_35699.cljs$core$IIndexed$_nth$arity$2(null,i__35132_35701);
var type_35705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35704,(0),null);
var f_35706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35704,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35705,((function (seq__35129_35698,chunk__35130_35699,count__35131_35700,i__35132_35701,vec__35140_35704,type_35705,f_35706,vec__35126_35695,elem_35696,selector_35697){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35705,dommy$core$this_fn], 0));

return (f_35706.cljs$core$IFn$_invoke$arity$1 ? f_35706.cljs$core$IFn$_invoke$arity$1(e) : f_35706.call(null,e));
});})(seq__35129_35698,chunk__35130_35699,count__35131_35700,i__35132_35701,vec__35140_35704,type_35705,f_35706,vec__35126_35695,elem_35696,selector_35697))
], 0));


var G__35711 = seq__35129_35698;
var G__35712 = chunk__35130_35699;
var G__35713 = count__35131_35700;
var G__35714 = (i__35132_35701 + (1));
seq__35129_35698 = G__35711;
chunk__35130_35699 = G__35712;
count__35131_35700 = G__35713;
i__35132_35701 = G__35714;
continue;
} else {
var temp__5735__auto___35715 = cljs.core.seq(seq__35129_35698);
if(temp__5735__auto___35715){
var seq__35129_35716__$1 = temp__5735__auto___35715;
if(cljs.core.chunked_seq_QMARK_(seq__35129_35716__$1)){
var c__4609__auto___35718 = cljs.core.chunk_first(seq__35129_35716__$1);
var G__35719 = cljs.core.chunk_rest(seq__35129_35716__$1);
var G__35720 = c__4609__auto___35718;
var G__35721 = cljs.core.count(c__4609__auto___35718);
var G__35722 = (0);
seq__35129_35698 = G__35719;
chunk__35130_35699 = G__35720;
count__35131_35700 = G__35721;
i__35132_35701 = G__35722;
continue;
} else {
var vec__35143_35725 = cljs.core.first(seq__35129_35716__$1);
var type_35726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35725,(0),null);
var f_35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35725,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35726,((function (seq__35129_35698,chunk__35130_35699,count__35131_35700,i__35132_35701,vec__35143_35725,type_35726,f_35727,seq__35129_35716__$1,temp__5735__auto___35715,vec__35126_35695,elem_35696,selector_35697){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35726,dommy$core$this_fn], 0));

return (f_35727.cljs$core$IFn$_invoke$arity$1 ? f_35727.cljs$core$IFn$_invoke$arity$1(e) : f_35727.call(null,e));
});})(seq__35129_35698,chunk__35130_35699,count__35131_35700,i__35132_35701,vec__35143_35725,type_35726,f_35727,seq__35129_35716__$1,temp__5735__auto___35715,vec__35126_35695,elem_35696,selector_35697))
], 0));


var G__35737 = cljs.core.next(seq__35129_35716__$1);
var G__35738 = null;
var G__35739 = (0);
var G__35740 = (0);
seq__35129_35698 = G__35737;
chunk__35130_35699 = G__35738;
count__35131_35700 = G__35739;
i__35132_35701 = G__35740;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35123){
var G__35124 = cljs.core.first(seq35123);
var seq35123__$1 = cljs.core.next(seq35123);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35124,seq35123__$1);
}));


//# sourceMappingURL=dommy.core.js.map
