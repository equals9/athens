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
var seq__34730_35180 = cljs.core.seq(keywords);
var chunk__34731_35181 = null;
var count__34732_35182 = (0);
var i__34733_35183 = (0);
while(true){
if((i__34733_35183 < count__34732_35182)){
var kw_35184 = chunk__34731_35181.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35183);
style.removeProperty(dommy.utils.as_str(kw_35184));


var G__35185 = seq__34730_35180;
var G__35186 = chunk__34731_35181;
var G__35187 = count__34732_35182;
var G__35188 = (i__34733_35183 + (1));
seq__34730_35180 = G__35185;
chunk__34731_35181 = G__35186;
count__34732_35182 = G__35187;
i__34733_35183 = G__35188;
continue;
} else {
var temp__5735__auto___35189 = cljs.core.seq(seq__34730_35180);
if(temp__5735__auto___35189){
var seq__34730_35190__$1 = temp__5735__auto___35189;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35190__$1)){
var c__4609__auto___35191 = cljs.core.chunk_first(seq__34730_35190__$1);
var G__35192 = cljs.core.chunk_rest(seq__34730_35190__$1);
var G__35193 = c__4609__auto___35191;
var G__35194 = cljs.core.count(c__4609__auto___35191);
var G__35195 = (0);
seq__34730_35180 = G__35192;
chunk__34731_35181 = G__35193;
count__34732_35182 = G__35194;
i__34733_35183 = G__35195;
continue;
} else {
var kw_35196 = cljs.core.first(seq__34730_35190__$1);
style.removeProperty(dommy.utils.as_str(kw_35196));


var G__35198 = cljs.core.next(seq__34730_35190__$1);
var G__35199 = null;
var G__35200 = (0);
var G__35201 = (0);
seq__34730_35180 = G__35198;
chunk__34731_35181 = G__35199;
count__34732_35182 = G__35200;
i__34733_35183 = G__35201;
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
var len__4789__auto___35203 = arguments.length;
var i__4790__auto___35204 = (0);
while(true){
if((i__4790__auto___35204 < len__4789__auto___35203)){
args__4795__auto__.push((arguments[i__4790__auto___35204]));

var G__35205 = (i__4790__auto___35204 + (1));
i__4790__auto___35204 = G__35205;
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

var seq__34737_35206 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34738_35207 = null;
var count__34739_35208 = (0);
var i__34740_35209 = (0);
while(true){
if((i__34740_35209 < count__34739_35208)){
var vec__34747_35210 = chunk__34738_35207.cljs$core$IIndexed$_nth$arity$2(null,i__34740_35209);
var k_35211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35210,(0),null);
var v_35212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35210,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35211,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35212),"px"].join('')], 0));


var G__35213 = seq__34737_35206;
var G__35214 = chunk__34738_35207;
var G__35215 = count__34739_35208;
var G__35216 = (i__34740_35209 + (1));
seq__34737_35206 = G__35213;
chunk__34738_35207 = G__35214;
count__34739_35208 = G__35215;
i__34740_35209 = G__35216;
continue;
} else {
var temp__5735__auto___35217 = cljs.core.seq(seq__34737_35206);
if(temp__5735__auto___35217){
var seq__34737_35218__$1 = temp__5735__auto___35217;
if(cljs.core.chunked_seq_QMARK_(seq__34737_35218__$1)){
var c__4609__auto___35219 = cljs.core.chunk_first(seq__34737_35218__$1);
var G__35220 = cljs.core.chunk_rest(seq__34737_35218__$1);
var G__35221 = c__4609__auto___35219;
var G__35222 = cljs.core.count(c__4609__auto___35219);
var G__35223 = (0);
seq__34737_35206 = G__35220;
chunk__34738_35207 = G__35221;
count__34739_35208 = G__35222;
i__34740_35209 = G__35223;
continue;
} else {
var vec__34750_35224 = cljs.core.first(seq__34737_35218__$1);
var k_35225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35224,(0),null);
var v_35226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35224,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35225,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35226),"px"].join('')], 0));


var G__35229 = cljs.core.next(seq__34737_35218__$1);
var G__35230 = null;
var G__35231 = (0);
var G__35232 = (0);
seq__34737_35206 = G__35229;
chunk__34738_35207 = G__35230;
count__34739_35208 = G__35231;
i__34740_35209 = G__35232;
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
var len__4789__auto___35234 = arguments.length;
var i__4790__auto___35235 = (0);
while(true){
if((i__4790__auto___35235 < len__4789__auto___35234)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35235]));

var G__35236 = (i__4790__auto___35235 + (1));
i__4790__auto___35235 = G__35236;
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

var seq__34761_35239 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35240 = null;
var count__34763_35241 = (0);
var i__34764_35242 = (0);
while(true){
if((i__34764_35242 < count__34763_35241)){
var vec__34771_35243 = chunk__34762_35240.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35242);
var k_35244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35243,(0),null);
var v_35245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35243,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35244__$1,v_35245__$1);


var G__35246 = seq__34761_35239;
var G__35247 = chunk__34762_35240;
var G__35248 = count__34763_35241;
var G__35249 = (i__34764_35242 + (1));
seq__34761_35239 = G__35246;
chunk__34762_35240 = G__35247;
count__34763_35241 = G__35248;
i__34764_35242 = G__35249;
continue;
} else {
var temp__5735__auto___35250 = cljs.core.seq(seq__34761_35239);
if(temp__5735__auto___35250){
var seq__34761_35251__$1 = temp__5735__auto___35250;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35251__$1)){
var c__4609__auto___35252 = cljs.core.chunk_first(seq__34761_35251__$1);
var G__35253 = cljs.core.chunk_rest(seq__34761_35251__$1);
var G__35254 = c__4609__auto___35252;
var G__35255 = cljs.core.count(c__4609__auto___35252);
var G__35256 = (0);
seq__34761_35239 = G__35253;
chunk__34762_35240 = G__35254;
count__34763_35241 = G__35255;
i__34764_35242 = G__35256;
continue;
} else {
var vec__34774_35257 = cljs.core.first(seq__34761_35251__$1);
var k_35258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35257,(0),null);
var v_35259__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35257,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35258__$1,v_35259__$1);


var G__35260 = cljs.core.next(seq__34761_35251__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__34761_35239 = G__35260;
chunk__34762_35240 = G__35261;
count__34763_35241 = G__35262;
i__34764_35242 = G__35263;
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
var len__4789__auto___35265 = arguments.length;
var i__4790__auto___35266 = (0);
while(true){
if((i__4790__auto___35266 < len__4789__auto___35265)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35266]));

var G__35267 = (i__4790__auto___35266 + (1));
i__4790__auto___35266 = G__35267;
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
var k_35268__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(k_35268__$1) : fexpr__34782.call(null,k_35268__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35268__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34783_35269 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34784_35270 = null;
var count__34785_35271 = (0);
var i__34786_35272 = (0);
while(true){
if((i__34786_35272 < count__34785_35271)){
var k_35273__$1 = chunk__34784_35270.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35272);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35273__$1);


var G__35274 = seq__34783_35269;
var G__35275 = chunk__34784_35270;
var G__35276 = count__34785_35271;
var G__35277 = (i__34786_35272 + (1));
seq__34783_35269 = G__35274;
chunk__34784_35270 = G__35275;
count__34785_35271 = G__35276;
i__34786_35272 = G__35277;
continue;
} else {
var temp__5735__auto___35278 = cljs.core.seq(seq__34783_35269);
if(temp__5735__auto___35278){
var seq__34783_35279__$1 = temp__5735__auto___35278;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35279__$1)){
var c__4609__auto___35280 = cljs.core.chunk_first(seq__34783_35279__$1);
var G__35281 = cljs.core.chunk_rest(seq__34783_35279__$1);
var G__35282 = c__4609__auto___35280;
var G__35283 = cljs.core.count(c__4609__auto___35280);
var G__35284 = (0);
seq__34783_35269 = G__35281;
chunk__34784_35270 = G__35282;
count__34785_35271 = G__35283;
i__34786_35272 = G__35284;
continue;
} else {
var k_35285__$1 = cljs.core.first(seq__34783_35279__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35285__$1);


var G__35286 = cljs.core.next(seq__34783_35279__$1);
var G__35287 = null;
var G__35288 = (0);
var G__35289 = (0);
seq__34783_35269 = G__35286;
chunk__34784_35270 = G__35287;
count__34785_35271 = G__35288;
i__34786_35272 = G__35289;
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
var seq__34798_35330__$1 = temp__5735__auto___35328;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35330__$1)){
var c__4609__auto___35331 = cljs.core.chunk_first(seq__34798_35330__$1);
var G__35332 = cljs.core.chunk_rest(seq__34798_35330__$1);
var G__35333 = c__4609__auto___35331;
var G__35334 = cljs.core.count(c__4609__auto___35331);
var G__35335 = (0);
seq__34798_35318 = G__35332;
chunk__34799_35319 = G__35333;
count__34800_35320 = G__35334;
i__34801_35321 = G__35335;
continue;
} else {
var c_35336 = cljs.core.first(seq__34798_35330__$1);
var class_name_35338 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35338,c_35336))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35338 === ""))?c_35336:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35338)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35336)].join('')));
}


var G__35339 = cljs.core.next(seq__34798_35330__$1);
var G__35340 = null;
var G__35341 = (0);
var G__35342 = (0);
seq__34798_35318 = G__35339;
chunk__34799_35319 = G__35340;
count__34800_35320 = G__35341;
i__34801_35321 = G__35342;
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
var seq__34802_35343 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34803_35344 = null;
var count__34804_35345 = (0);
var i__34805_35346 = (0);
while(true){
if((i__34805_35346 < count__34804_35345)){
var c_35347 = chunk__34803_35344.cljs$core$IIndexed$_nth$arity$2(null,i__34805_35346);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35347);


var G__35348 = seq__34802_35343;
var G__35349 = chunk__34803_35344;
var G__35350 = count__34804_35345;
var G__35351 = (i__34805_35346 + (1));
seq__34802_35343 = G__35348;
chunk__34803_35344 = G__35349;
count__34804_35345 = G__35350;
i__34805_35346 = G__35351;
continue;
} else {
var temp__5735__auto___35352 = cljs.core.seq(seq__34802_35343);
if(temp__5735__auto___35352){
var seq__34802_35354__$1 = temp__5735__auto___35352;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35354__$1)){
var c__4609__auto___35355 = cljs.core.chunk_first(seq__34802_35354__$1);
var G__35356 = cljs.core.chunk_rest(seq__34802_35354__$1);
var G__35357 = c__4609__auto___35355;
var G__35358 = cljs.core.count(c__4609__auto___35355);
var G__35359 = (0);
seq__34802_35343 = G__35356;
chunk__34803_35344 = G__35357;
count__34804_35345 = G__35358;
i__34805_35346 = G__35359;
continue;
} else {
var c_35360 = cljs.core.first(seq__34802_35354__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35360);


var G__35362 = cljs.core.next(seq__34802_35354__$1);
var G__35363 = null;
var G__35364 = (0);
var G__35365 = (0);
seq__34802_35343 = G__35362;
chunk__34803_35344 = G__35363;
count__34804_35345 = G__35364;
i__34805_35346 = G__35365;
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
var len__4789__auto___35369 = arguments.length;
var i__4790__auto___35370 = (0);
while(true){
if((i__4790__auto___35370 < len__4789__auto___35369)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35370]));

var G__35371 = (i__4790__auto___35370 + (1));
i__4790__auto___35370 = G__35371;
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
var temp__5733__auto___35377 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35377)){
var class_list_35378 = temp__5733__auto___35377;
class_list_35378.remove(c__$1);
} else {
var class_name_35379 = dommy.core.class$(elem);
var new_class_name_35380 = dommy.utils.remove_class_str(class_name_35379,c__$1);
if((class_name_35379 === new_class_name_35380)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35380);
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


var G__35383 = seq__34811;
var G__35384 = chunk__34812;
var G__35385 = count__34813;
var G__35386 = (i__34814 + (1));
seq__34811 = G__35383;
chunk__34812 = G__35384;
count__34813 = G__35385;
i__34814 = G__35386;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34811);
if(temp__5735__auto__){
var seq__34811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35387 = cljs.core.chunk_rest(seq__34811__$1);
var G__35388 = c__4609__auto__;
var G__35389 = cljs.core.count(c__4609__auto__);
var G__35390 = (0);
seq__34811 = G__35387;
chunk__34812 = G__35388;
count__34813 = G__35389;
i__34814 = G__35390;
continue;
} else {
var c = cljs.core.first(seq__34811__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35392 = cljs.core.next(seq__34811__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__34811 = G__35392;
chunk__34812 = G__35393;
count__34813 = G__35394;
i__34814 = G__35395;
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
var temp__5733__auto___35401 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35401)){
var class_list_35404 = temp__5733__auto___35401;
class_list_35404.toggle(c__$1);
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
var len__4789__auto___35415 = arguments.length;
var i__4790__auto___35416 = (0);
while(true){
if((i__4790__auto___35416 < len__4789__auto___35415)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35416]));

var G__35417 = (i__4790__auto___35416 + (1));
i__4790__auto___35416 = G__35417;
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
var seq__34830_35418 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34831_35419 = null;
var count__34832_35420 = (0);
var i__34833_35421 = (0);
while(true){
if((i__34833_35421 < count__34832_35420)){
var c_35422 = chunk__34831_35419.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35421);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35422);


var G__35423 = seq__34830_35418;
var G__35424 = chunk__34831_35419;
var G__35425 = count__34832_35420;
var G__35426 = (i__34833_35421 + (1));
seq__34830_35418 = G__35423;
chunk__34831_35419 = G__35424;
count__34832_35420 = G__35425;
i__34833_35421 = G__35426;
continue;
} else {
var temp__5735__auto___35427 = cljs.core.seq(seq__34830_35418);
if(temp__5735__auto___35427){
var seq__34830_35428__$1 = temp__5735__auto___35427;
if(cljs.core.chunked_seq_QMARK_(seq__34830_35428__$1)){
var c__4609__auto___35429 = cljs.core.chunk_first(seq__34830_35428__$1);
var G__35430 = cljs.core.chunk_rest(seq__34830_35428__$1);
var G__35431 = c__4609__auto___35429;
var G__35432 = cljs.core.count(c__4609__auto___35429);
var G__35433 = (0);
seq__34830_35418 = G__35430;
chunk__34831_35419 = G__35431;
count__34832_35420 = G__35432;
i__34833_35421 = G__35433;
continue;
} else {
var c_35434 = cljs.core.first(seq__34830_35428__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35434);


var G__35435 = cljs.core.next(seq__34830_35428__$1);
var G__35436 = null;
var G__35437 = (0);
var G__35438 = (0);
seq__34830_35418 = G__35435;
chunk__34831_35419 = G__35436;
count__34832_35420 = G__35437;
i__34833_35421 = G__35438;
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
var len__4789__auto___35440 = arguments.length;
var i__4790__auto___35441 = (0);
while(true){
if((i__4790__auto___35441 < len__4789__auto___35440)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35441]));

var G__35442 = (i__4790__auto___35441 + (1));
i__4790__auto___35441 = G__35442;
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
var seq__34840_35443 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34841_35444 = null;
var count__34842_35445 = (0);
var i__34843_35446 = (0);
while(true){
if((i__34843_35446 < count__34842_35445)){
var c_35447 = chunk__34841_35444.cljs$core$IIndexed$_nth$arity$2(null,i__34843_35446);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35447);


var G__35448 = seq__34840_35443;
var G__35449 = chunk__34841_35444;
var G__35450 = count__34842_35445;
var G__35451 = (i__34843_35446 + (1));
seq__34840_35443 = G__35448;
chunk__34841_35444 = G__35449;
count__34842_35445 = G__35450;
i__34843_35446 = G__35451;
continue;
} else {
var temp__5735__auto___35452 = cljs.core.seq(seq__34840_35443);
if(temp__5735__auto___35452){
var seq__34840_35453__$1 = temp__5735__auto___35452;
if(cljs.core.chunked_seq_QMARK_(seq__34840_35453__$1)){
var c__4609__auto___35454 = cljs.core.chunk_first(seq__34840_35453__$1);
var G__35455 = cljs.core.chunk_rest(seq__34840_35453__$1);
var G__35456 = c__4609__auto___35454;
var G__35457 = cljs.core.count(c__4609__auto___35454);
var G__35458 = (0);
seq__34840_35443 = G__35455;
chunk__34841_35444 = G__35456;
count__34842_35445 = G__35457;
i__34843_35446 = G__35458;
continue;
} else {
var c_35459 = cljs.core.first(seq__34840_35453__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35459);


var G__35460 = cljs.core.next(seq__34840_35453__$1);
var G__35461 = null;
var G__35462 = (0);
var G__35463 = (0);
seq__34840_35443 = G__35460;
chunk__34841_35444 = G__35461;
count__34842_35445 = G__35462;
i__34843_35446 = G__35463;
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
var len__4789__auto___35476 = arguments.length;
var i__4790__auto___35477 = (0);
while(true){
if((i__4790__auto___35477 < len__4789__auto___35476)){
args__4795__auto__.push((arguments[i__4790__auto___35477]));

var G__35478 = (i__4790__auto___35477 + (1));
i__4790__auto___35477 = G__35478;
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

var vec__34860_35479 = dommy.core.elem_and_selector(elem_sel);
var elem_35480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860_35479,(0),null);
var selector_35481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860_35479,(1),null);
var seq__34863_35482 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34870_35483 = null;
var count__34871_35484 = (0);
var i__34872_35485 = (0);
while(true){
if((i__34872_35485 < count__34871_35484)){
var vec__34928_35487 = chunk__34870_35483.cljs$core$IIndexed$_nth$arity$2(null,i__34872_35485);
var orig_type_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35487,(0),null);
var f_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35487,(1),null);
var seq__34873_35493 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35488,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35488,cljs.core.identity])));
var chunk__34875_35494 = null;
var count__34876_35495 = (0);
var i__34877_35496 = (0);
while(true){
if((i__34877_35496 < count__34876_35495)){
var vec__34941_35497 = chunk__34875_35494.cljs$core$IIndexed$_nth$arity$2(null,i__34877_35496);
var actual_type_35498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941_35497,(0),null);
var factory_35499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941_35497,(1),null);
var canonical_f_35503 = (function (){var G__34945 = (factory_35499.cljs$core$IFn$_invoke$arity$1 ? factory_35499.cljs$core$IFn$_invoke$arity$1(f_35489) : factory_35499.call(null,f_35489));
var fexpr__34944 = (cljs.core.truth_(selector_35481)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35480,selector_35481):cljs.core.identity);
return (fexpr__34944.cljs$core$IFn$_invoke$arity$1 ? fexpr__34944.cljs$core$IFn$_invoke$arity$1(G__34945) : fexpr__34944.call(null,G__34945));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35480,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35481,actual_type_35498,f_35489], null),canonical_f_35503], 0));

if(cljs.core.truth_(elem_35480.addEventListener)){
elem_35480.addEventListener(cljs.core.name(actual_type_35498),canonical_f_35503);
} else {
elem_35480.attachEvent(cljs.core.name(actual_type_35498),canonical_f_35503);
}


var G__35511 = seq__34873_35493;
var G__35512 = chunk__34875_35494;
var G__35513 = count__34876_35495;
var G__35514 = (i__34877_35496 + (1));
seq__34873_35493 = G__35511;
chunk__34875_35494 = G__35512;
count__34876_35495 = G__35513;
i__34877_35496 = G__35514;
continue;
} else {
var temp__5735__auto___35515 = cljs.core.seq(seq__34873_35493);
if(temp__5735__auto___35515){
var seq__34873_35518__$1 = temp__5735__auto___35515;
if(cljs.core.chunked_seq_QMARK_(seq__34873_35518__$1)){
var c__4609__auto___35519 = cljs.core.chunk_first(seq__34873_35518__$1);
var G__35522 = cljs.core.chunk_rest(seq__34873_35518__$1);
var G__35523 = c__4609__auto___35519;
var G__35524 = cljs.core.count(c__4609__auto___35519);
var G__35525 = (0);
seq__34873_35493 = G__35522;
chunk__34875_35494 = G__35523;
count__34876_35495 = G__35524;
i__34877_35496 = G__35525;
continue;
} else {
var vec__34946_35526 = cljs.core.first(seq__34873_35518__$1);
var actual_type_35527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35526,(0),null);
var factory_35528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35526,(1),null);
var canonical_f_35529 = (function (){var G__34950 = (factory_35528.cljs$core$IFn$_invoke$arity$1 ? factory_35528.cljs$core$IFn$_invoke$arity$1(f_35489) : factory_35528.call(null,f_35489));
var fexpr__34949 = (cljs.core.truth_(selector_35481)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35480,selector_35481):cljs.core.identity);
return (fexpr__34949.cljs$core$IFn$_invoke$arity$1 ? fexpr__34949.cljs$core$IFn$_invoke$arity$1(G__34950) : fexpr__34949.call(null,G__34950));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35480,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35481,actual_type_35527,f_35489], null),canonical_f_35529], 0));

if(cljs.core.truth_(elem_35480.addEventListener)){
elem_35480.addEventListener(cljs.core.name(actual_type_35527),canonical_f_35529);
} else {
elem_35480.attachEvent(cljs.core.name(actual_type_35527),canonical_f_35529);
}


var G__35537 = cljs.core.next(seq__34873_35518__$1);
var G__35538 = null;
var G__35539 = (0);
var G__35540 = (0);
seq__34873_35493 = G__35537;
chunk__34875_35494 = G__35538;
count__34876_35495 = G__35539;
i__34877_35496 = G__35540;
continue;
}
} else {
}
}
break;
}

var G__35541 = seq__34863_35482;
var G__35542 = chunk__34870_35483;
var G__35543 = count__34871_35484;
var G__35544 = (i__34872_35485 + (1));
seq__34863_35482 = G__35541;
chunk__34870_35483 = G__35542;
count__34871_35484 = G__35543;
i__34872_35485 = G__35544;
continue;
} else {
var temp__5735__auto___35547 = cljs.core.seq(seq__34863_35482);
if(temp__5735__auto___35547){
var seq__34863_35548__$1 = temp__5735__auto___35547;
if(cljs.core.chunked_seq_QMARK_(seq__34863_35548__$1)){
var c__4609__auto___35551 = cljs.core.chunk_first(seq__34863_35548__$1);
var G__35552 = cljs.core.chunk_rest(seq__34863_35548__$1);
var G__35553 = c__4609__auto___35551;
var G__35554 = cljs.core.count(c__4609__auto___35551);
var G__35555 = (0);
seq__34863_35482 = G__35552;
chunk__34870_35483 = G__35553;
count__34871_35484 = G__35554;
i__34872_35485 = G__35555;
continue;
} else {
var vec__34955_35557 = cljs.core.first(seq__34863_35548__$1);
var orig_type_35558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35557,(0),null);
var f_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35557,(1),null);
var seq__34864_35561 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35558,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35558,cljs.core.identity])));
var chunk__34866_35562 = null;
var count__34867_35563 = (0);
var i__34868_35564 = (0);
while(true){
if((i__34868_35564 < count__34867_35563)){
var vec__34968_35567 = chunk__34866_35562.cljs$core$IIndexed$_nth$arity$2(null,i__34868_35564);
var actual_type_35568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35567,(0),null);
var factory_35569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35567,(1),null);
var canonical_f_35571 = (function (){var G__34972 = (factory_35569.cljs$core$IFn$_invoke$arity$1 ? factory_35569.cljs$core$IFn$_invoke$arity$1(f_35559) : factory_35569.call(null,f_35559));
var fexpr__34971 = (cljs.core.truth_(selector_35481)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35480,selector_35481):cljs.core.identity);
return (fexpr__34971.cljs$core$IFn$_invoke$arity$1 ? fexpr__34971.cljs$core$IFn$_invoke$arity$1(G__34972) : fexpr__34971.call(null,G__34972));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35480,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35481,actual_type_35568,f_35559], null),canonical_f_35571], 0));

if(cljs.core.truth_(elem_35480.addEventListener)){
elem_35480.addEventListener(cljs.core.name(actual_type_35568),canonical_f_35571);
} else {
elem_35480.attachEvent(cljs.core.name(actual_type_35568),canonical_f_35571);
}


var G__35579 = seq__34864_35561;
var G__35580 = chunk__34866_35562;
var G__35581 = count__34867_35563;
var G__35582 = (i__34868_35564 + (1));
seq__34864_35561 = G__35579;
chunk__34866_35562 = G__35580;
count__34867_35563 = G__35581;
i__34868_35564 = G__35582;
continue;
} else {
var temp__5735__auto___35584__$1 = cljs.core.seq(seq__34864_35561);
if(temp__5735__auto___35584__$1){
var seq__34864_35585__$1 = temp__5735__auto___35584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34864_35585__$1)){
var c__4609__auto___35587 = cljs.core.chunk_first(seq__34864_35585__$1);
var G__35589 = cljs.core.chunk_rest(seq__34864_35585__$1);
var G__35590 = c__4609__auto___35587;
var G__35591 = cljs.core.count(c__4609__auto___35587);
var G__35592 = (0);
seq__34864_35561 = G__35589;
chunk__34866_35562 = G__35590;
count__34867_35563 = G__35591;
i__34868_35564 = G__35592;
continue;
} else {
var vec__34976_35594 = cljs.core.first(seq__34864_35585__$1);
var actual_type_35595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35594,(0),null);
var factory_35596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35594,(1),null);
var canonical_f_35599 = (function (){var G__34980 = (factory_35596.cljs$core$IFn$_invoke$arity$1 ? factory_35596.cljs$core$IFn$_invoke$arity$1(f_35559) : factory_35596.call(null,f_35559));
var fexpr__34979 = (cljs.core.truth_(selector_35481)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35480,selector_35481):cljs.core.identity);
return (fexpr__34979.cljs$core$IFn$_invoke$arity$1 ? fexpr__34979.cljs$core$IFn$_invoke$arity$1(G__34980) : fexpr__34979.call(null,G__34980));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35480,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35481,actual_type_35595,f_35559], null),canonical_f_35599], 0));

if(cljs.core.truth_(elem_35480.addEventListener)){
elem_35480.addEventListener(cljs.core.name(actual_type_35595),canonical_f_35599);
} else {
elem_35480.attachEvent(cljs.core.name(actual_type_35595),canonical_f_35599);
}


var G__35611 = cljs.core.next(seq__34864_35585__$1);
var G__35612 = null;
var G__35613 = (0);
var G__35614 = (0);
seq__34864_35561 = G__35611;
chunk__34866_35562 = G__35612;
count__34867_35563 = G__35613;
i__34868_35564 = G__35614;
continue;
}
} else {
}
}
break;
}

var G__35617 = cljs.core.next(seq__34863_35548__$1);
var G__35618 = null;
var G__35619 = (0);
var G__35620 = (0);
seq__34863_35482 = G__35617;
chunk__34870_35483 = G__35618;
count__34871_35484 = G__35619;
i__34872_35485 = G__35620;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34857){
var G__34858 = cljs.core.first(seq34857);
var seq34857__$1 = cljs.core.next(seq34857);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34858,seq34857__$1);
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
var len__4789__auto___35624 = arguments.length;
var i__4790__auto___35625 = (0);
while(true){
if((i__4790__auto___35625 < len__4789__auto___35624)){
args__4795__auto__.push((arguments[i__4790__auto___35625]));

var G__35628 = (i__4790__auto___35625 + (1));
i__4790__auto___35625 = G__35628;
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

var vec__34987_35633 = dommy.core.elem_and_selector(elem_sel);
var elem_35634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35633,(0),null);
var selector_35635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35633,(1),null);
var seq__34990_35636 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34997_35637 = null;
var count__34998_35638 = (0);
var i__34999_35639 = (0);
while(true){
if((i__34999_35639 < count__34998_35638)){
var vec__35041_35643 = chunk__34997_35637.cljs$core$IIndexed$_nth$arity$2(null,i__34999_35639);
var orig_type_35644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041_35643,(0),null);
var f_35645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041_35643,(1),null);
var seq__35000_35648 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35644,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35644,cljs.core.identity])));
var chunk__35002_35649 = null;
var count__35003_35650 = (0);
var i__35004_35651 = (0);
while(true){
if((i__35004_35651 < count__35003_35650)){
var vec__35054_35653 = chunk__35002_35649.cljs$core$IIndexed$_nth$arity$2(null,i__35004_35651);
var actual_type_35654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35653,(0),null);
var __35655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35653,(1),null);
var keys_35659 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35635,actual_type_35654,f_35645], null);
var canonical_f_35660 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35634),keys_35659);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35634,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35659], 0));

if(cljs.core.truth_(elem_35634.removeEventListener)){
elem_35634.removeEventListener(cljs.core.name(actual_type_35654),canonical_f_35660);
} else {
elem_35634.detachEvent(cljs.core.name(actual_type_35654),canonical_f_35660);
}


var G__35663 = seq__35000_35648;
var G__35664 = chunk__35002_35649;
var G__35665 = count__35003_35650;
var G__35666 = (i__35004_35651 + (1));
seq__35000_35648 = G__35663;
chunk__35002_35649 = G__35664;
count__35003_35650 = G__35665;
i__35004_35651 = G__35666;
continue;
} else {
var temp__5735__auto___35667 = cljs.core.seq(seq__35000_35648);
if(temp__5735__auto___35667){
var seq__35000_35689__$1 = temp__5735__auto___35667;
if(cljs.core.chunked_seq_QMARK_(seq__35000_35689__$1)){
var c__4609__auto___35690 = cljs.core.chunk_first(seq__35000_35689__$1);
var G__35691 = cljs.core.chunk_rest(seq__35000_35689__$1);
var G__35692 = c__4609__auto___35690;
var G__35693 = cljs.core.count(c__4609__auto___35690);
var G__35694 = (0);
seq__35000_35648 = G__35691;
chunk__35002_35649 = G__35692;
count__35003_35650 = G__35693;
i__35004_35651 = G__35694;
continue;
} else {
var vec__35064_35695 = cljs.core.first(seq__35000_35689__$1);
var actual_type_35696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064_35695,(0),null);
var __35697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064_35695,(1),null);
var keys_35700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35635,actual_type_35696,f_35645], null);
var canonical_f_35701 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35634),keys_35700);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35634,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35700], 0));

if(cljs.core.truth_(elem_35634.removeEventListener)){
elem_35634.removeEventListener(cljs.core.name(actual_type_35696),canonical_f_35701);
} else {
elem_35634.detachEvent(cljs.core.name(actual_type_35696),canonical_f_35701);
}


var G__35703 = cljs.core.next(seq__35000_35689__$1);
var G__35704 = null;
var G__35705 = (0);
var G__35706 = (0);
seq__35000_35648 = G__35703;
chunk__35002_35649 = G__35704;
count__35003_35650 = G__35705;
i__35004_35651 = G__35706;
continue;
}
} else {
}
}
break;
}

var G__35707 = seq__34990_35636;
var G__35708 = chunk__34997_35637;
var G__35709 = count__34998_35638;
var G__35710 = (i__34999_35639 + (1));
seq__34990_35636 = G__35707;
chunk__34997_35637 = G__35708;
count__34998_35638 = G__35709;
i__34999_35639 = G__35710;
continue;
} else {
var temp__5735__auto___35712 = cljs.core.seq(seq__34990_35636);
if(temp__5735__auto___35712){
var seq__34990_35714__$1 = temp__5735__auto___35712;
if(cljs.core.chunked_seq_QMARK_(seq__34990_35714__$1)){
var c__4609__auto___35721 = cljs.core.chunk_first(seq__34990_35714__$1);
var G__35722 = cljs.core.chunk_rest(seq__34990_35714__$1);
var G__35723 = c__4609__auto___35721;
var G__35724 = cljs.core.count(c__4609__auto___35721);
var G__35725 = (0);
seq__34990_35636 = G__35722;
chunk__34997_35637 = G__35723;
count__34998_35638 = G__35724;
i__34999_35639 = G__35725;
continue;
} else {
var vec__35083_35728 = cljs.core.first(seq__34990_35714__$1);
var orig_type_35729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35728,(0),null);
var f_35730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35728,(1),null);
var seq__34991_35733 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35729,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35729,cljs.core.identity])));
var chunk__34993_35734 = null;
var count__34994_35735 = (0);
var i__34995_35736 = (0);
while(true){
if((i__34995_35736 < count__34994_35735)){
var vec__35097_35744 = chunk__34993_35734.cljs$core$IIndexed$_nth$arity$2(null,i__34995_35736);
var actual_type_35745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097_35744,(0),null);
var __35746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097_35744,(1),null);
var keys_35749 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35635,actual_type_35745,f_35730], null);
var canonical_f_35750 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35634),keys_35749);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35634,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35749], 0));

if(cljs.core.truth_(elem_35634.removeEventListener)){
elem_35634.removeEventListener(cljs.core.name(actual_type_35745),canonical_f_35750);
} else {
elem_35634.detachEvent(cljs.core.name(actual_type_35745),canonical_f_35750);
}


var G__35754 = seq__34991_35733;
var G__35755 = chunk__34993_35734;
var G__35756 = count__34994_35735;
var G__35757 = (i__34995_35736 + (1));
seq__34991_35733 = G__35754;
chunk__34993_35734 = G__35755;
count__34994_35735 = G__35756;
i__34995_35736 = G__35757;
continue;
} else {
var temp__5735__auto___35759__$1 = cljs.core.seq(seq__34991_35733);
if(temp__5735__auto___35759__$1){
var seq__34991_35763__$1 = temp__5735__auto___35759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34991_35763__$1)){
var c__4609__auto___35765 = cljs.core.chunk_first(seq__34991_35763__$1);
var G__35767 = cljs.core.chunk_rest(seq__34991_35763__$1);
var G__35768 = c__4609__auto___35765;
var G__35769 = cljs.core.count(c__4609__auto___35765);
var G__35770 = (0);
seq__34991_35733 = G__35767;
chunk__34993_35734 = G__35768;
count__34994_35735 = G__35769;
i__34995_35736 = G__35770;
continue;
} else {
var vec__35113_35774 = cljs.core.first(seq__34991_35763__$1);
var actual_type_35775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35774,(0),null);
var __35776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35774,(1),null);
var keys_35781 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35635,actual_type_35775,f_35730], null);
var canonical_f_35782 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35634),keys_35781);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35634,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35781], 0));

if(cljs.core.truth_(elem_35634.removeEventListener)){
elem_35634.removeEventListener(cljs.core.name(actual_type_35775),canonical_f_35782);
} else {
elem_35634.detachEvent(cljs.core.name(actual_type_35775),canonical_f_35782);
}


var G__35792 = cljs.core.next(seq__34991_35763__$1);
var G__35793 = null;
var G__35794 = (0);
var G__35795 = (0);
seq__34991_35733 = G__35792;
chunk__34993_35734 = G__35793;
count__34994_35735 = G__35794;
i__34995_35736 = G__35795;
continue;
}
} else {
}
}
break;
}

var G__35798 = cljs.core.next(seq__34990_35714__$1);
var G__35799 = null;
var G__35800 = (0);
var G__35801 = (0);
seq__34990_35636 = G__35798;
chunk__34997_35637 = G__35799;
count__34998_35638 = G__35800;
i__34999_35639 = G__35801;
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
var len__4789__auto___35812 = arguments.length;
var i__4790__auto___35813 = (0);
while(true){
if((i__4790__auto___35813 < len__4789__auto___35812)){
args__4795__auto__.push((arguments[i__4790__auto___35813]));

var G__35814 = (i__4790__auto___35813 + (1));
i__4790__auto___35813 = G__35814;
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

var vec__35123_35817 = dommy.core.elem_and_selector(elem_sel);
var elem_35818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123_35817,(0),null);
var selector_35819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123_35817,(1),null);
var seq__35128_35822 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35129_35823 = null;
var count__35130_35824 = (0);
var i__35131_35825 = (0);
while(true){
if((i__35131_35825 < count__35130_35824)){
var vec__35138_35830 = chunk__35129_35823.cljs$core$IIndexed$_nth$arity$2(null,i__35131_35825);
var type_35831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35138_35830,(0),null);
var f_35832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35138_35830,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35831,((function (seq__35128_35822,chunk__35129_35823,count__35130_35824,i__35131_35825,vec__35138_35830,type_35831,f_35832,vec__35123_35817,elem_35818,selector_35819){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35831,dommy$core$this_fn], 0));

return (f_35832.cljs$core$IFn$_invoke$arity$1 ? f_35832.cljs$core$IFn$_invoke$arity$1(e) : f_35832.call(null,e));
});})(seq__35128_35822,chunk__35129_35823,count__35130_35824,i__35131_35825,vec__35138_35830,type_35831,f_35832,vec__35123_35817,elem_35818,selector_35819))
], 0));


var G__35838 = seq__35128_35822;
var G__35839 = chunk__35129_35823;
var G__35840 = count__35130_35824;
var G__35841 = (i__35131_35825 + (1));
seq__35128_35822 = G__35838;
chunk__35129_35823 = G__35839;
count__35130_35824 = G__35840;
i__35131_35825 = G__35841;
continue;
} else {
var temp__5735__auto___35843 = cljs.core.seq(seq__35128_35822);
if(temp__5735__auto___35843){
var seq__35128_35844__$1 = temp__5735__auto___35843;
if(cljs.core.chunked_seq_QMARK_(seq__35128_35844__$1)){
var c__4609__auto___35848 = cljs.core.chunk_first(seq__35128_35844__$1);
var G__35850 = cljs.core.chunk_rest(seq__35128_35844__$1);
var G__35851 = c__4609__auto___35848;
var G__35852 = cljs.core.count(c__4609__auto___35848);
var G__35853 = (0);
seq__35128_35822 = G__35850;
chunk__35129_35823 = G__35851;
count__35130_35824 = G__35852;
i__35131_35825 = G__35853;
continue;
} else {
var vec__35142_35858 = cljs.core.first(seq__35128_35844__$1);
var type_35859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35858,(0),null);
var f_35860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35858,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35859,((function (seq__35128_35822,chunk__35129_35823,count__35130_35824,i__35131_35825,vec__35142_35858,type_35859,f_35860,seq__35128_35844__$1,temp__5735__auto___35843,vec__35123_35817,elem_35818,selector_35819){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35859,dommy$core$this_fn], 0));

return (f_35860.cljs$core$IFn$_invoke$arity$1 ? f_35860.cljs$core$IFn$_invoke$arity$1(e) : f_35860.call(null,e));
});})(seq__35128_35822,chunk__35129_35823,count__35130_35824,i__35131_35825,vec__35142_35858,type_35859,f_35860,seq__35128_35844__$1,temp__5735__auto___35843,vec__35123_35817,elem_35818,selector_35819))
], 0));


var G__35867 = cljs.core.next(seq__35128_35844__$1);
var G__35868 = null;
var G__35869 = (0);
var G__35870 = (0);
seq__35128_35822 = G__35867;
chunk__35129_35823 = G__35868;
count__35130_35824 = G__35869;
i__35131_35825 = G__35870;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35120){
var G__35121 = cljs.core.first(seq35120);
var seq35120__$1 = cljs.core.next(seq35120);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35121,seq35120__$1);
}));


//# sourceMappingURL=dommy.core.js.map
