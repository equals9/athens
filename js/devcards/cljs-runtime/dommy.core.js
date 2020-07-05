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


var G__35197 = cljs.core.next(seq__34730_35190__$1);
var G__35198 = null;
var G__35199 = (0);
var G__35200 = (0);
seq__34730_35180 = G__35197;
chunk__34731_35181 = G__35198;
count__34732_35182 = G__35199;
i__34733_35183 = G__35200;
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

var seq__34736_35204 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34737_35205 = null;
var count__34738_35206 = (0);
var i__34739_35207 = (0);
while(true){
if((i__34739_35207 < count__34738_35206)){
var vec__34747_35208 = chunk__34737_35205.cljs$core$IIndexed$_nth$arity$2(null,i__34739_35207);
var k_35209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35208,(0),null);
var v_35210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35208,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35209,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35210),"px"].join('')], 0));


var G__35211 = seq__34736_35204;
var G__35212 = chunk__34737_35205;
var G__35213 = count__34738_35206;
var G__35214 = (i__34739_35207 + (1));
seq__34736_35204 = G__35211;
chunk__34737_35205 = G__35212;
count__34738_35206 = G__35213;
i__34739_35207 = G__35214;
continue;
} else {
var temp__5735__auto___35215 = cljs.core.seq(seq__34736_35204);
if(temp__5735__auto___35215){
var seq__34736_35216__$1 = temp__5735__auto___35215;
if(cljs.core.chunked_seq_QMARK_(seq__34736_35216__$1)){
var c__4609__auto___35217 = cljs.core.chunk_first(seq__34736_35216__$1);
var G__35218 = cljs.core.chunk_rest(seq__34736_35216__$1);
var G__35219 = c__4609__auto___35217;
var G__35220 = cljs.core.count(c__4609__auto___35217);
var G__35221 = (0);
seq__34736_35204 = G__35218;
chunk__34737_35205 = G__35219;
count__34738_35206 = G__35220;
i__34739_35207 = G__35221;
continue;
} else {
var vec__34750_35222 = cljs.core.first(seq__34736_35216__$1);
var k_35223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35222,(0),null);
var v_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35222,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35223,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35224),"px"].join('')], 0));


var G__35225 = cljs.core.next(seq__34736_35216__$1);
var G__35226 = null;
var G__35227 = (0);
var G__35228 = (0);
seq__34736_35204 = G__35225;
chunk__34737_35205 = G__35226;
count__34738_35206 = G__35227;
i__34739_35207 = G__35228;
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

var seq__34761_35233 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35234 = null;
var count__34763_35235 = (0);
var i__34764_35236 = (0);
while(true){
if((i__34764_35236 < count__34763_35235)){
var vec__34771_35237 = chunk__34762_35234.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35236);
var k_35238__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35237,(0),null);
var v_35239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35237,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35238__$1,v_35239__$1);


var G__35240 = seq__34761_35233;
var G__35241 = chunk__34762_35234;
var G__35242 = count__34763_35235;
var G__35243 = (i__34764_35236 + (1));
seq__34761_35233 = G__35240;
chunk__34762_35234 = G__35241;
count__34763_35235 = G__35242;
i__34764_35236 = G__35243;
continue;
} else {
var temp__5735__auto___35244 = cljs.core.seq(seq__34761_35233);
if(temp__5735__auto___35244){
var seq__34761_35245__$1 = temp__5735__auto___35244;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35245__$1)){
var c__4609__auto___35246 = cljs.core.chunk_first(seq__34761_35245__$1);
var G__35247 = cljs.core.chunk_rest(seq__34761_35245__$1);
var G__35248 = c__4609__auto___35246;
var G__35249 = cljs.core.count(c__4609__auto___35246);
var G__35250 = (0);
seq__34761_35233 = G__35247;
chunk__34762_35234 = G__35248;
count__34763_35235 = G__35249;
i__34764_35236 = G__35250;
continue;
} else {
var vec__34774_35251 = cljs.core.first(seq__34761_35245__$1);
var k_35252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35251,(0),null);
var v_35253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35251,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35252__$1,v_35253__$1);


var G__35254 = cljs.core.next(seq__34761_35245__$1);
var G__35255 = null;
var G__35256 = (0);
var G__35257 = (0);
seq__34761_35233 = G__35254;
chunk__34762_35234 = G__35255;
count__34763_35235 = G__35256;
i__34764_35236 = G__35257;
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
var k_35264__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(k_35264__$1) : fexpr__34782.call(null,k_35264__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35264__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34783_35265 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34784_35266 = null;
var count__34785_35267 = (0);
var i__34786_35268 = (0);
while(true){
if((i__34786_35268 < count__34785_35267)){
var k_35269__$1 = chunk__34784_35266.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35268);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35269__$1);


var G__35270 = seq__34783_35265;
var G__35271 = chunk__34784_35266;
var G__35272 = count__34785_35267;
var G__35273 = (i__34786_35268 + (1));
seq__34783_35265 = G__35270;
chunk__34784_35266 = G__35271;
count__34785_35267 = G__35272;
i__34786_35268 = G__35273;
continue;
} else {
var temp__5735__auto___35274 = cljs.core.seq(seq__34783_35265);
if(temp__5735__auto___35274){
var seq__34783_35275__$1 = temp__5735__auto___35274;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35275__$1)){
var c__4609__auto___35276 = cljs.core.chunk_first(seq__34783_35275__$1);
var G__35277 = cljs.core.chunk_rest(seq__34783_35275__$1);
var G__35278 = c__4609__auto___35276;
var G__35279 = cljs.core.count(c__4609__auto___35276);
var G__35280 = (0);
seq__34783_35265 = G__35277;
chunk__34784_35266 = G__35278;
count__34785_35267 = G__35279;
i__34786_35268 = G__35280;
continue;
} else {
var k_35281__$1 = cljs.core.first(seq__34783_35275__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35281__$1);


var G__35282 = cljs.core.next(seq__34783_35275__$1);
var G__35283 = null;
var G__35284 = (0);
var G__35285 = (0);
seq__34783_35265 = G__35282;
chunk__34784_35266 = G__35283;
count__34785_35267 = G__35284;
i__34786_35268 = G__35285;
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
var len__4789__auto___35290 = arguments.length;
var i__4790__auto___35291 = (0);
while(true){
if((i__4790__auto___35291 < len__4789__auto___35290)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35291]));

var G__35292 = (i__4790__auto___35291 + (1));
i__4790__auto___35291 = G__35292;
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
var G__34810 = arguments.length;
switch (G__34810) {
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
var seq__34811 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34812 = null;
var count__34813 = (0);
var i__34814 = (0);
while(true){
if((i__34814 < count__34813)){
var c = chunk__34812.cljs$core$IIndexed$_nth$arity$2(null,i__34814);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35370 = seq__34811;
var G__35371 = chunk__34812;
var G__35372 = count__34813;
var G__35373 = (i__34814 + (1));
seq__34811 = G__35370;
chunk__34812 = G__35371;
count__34813 = G__35372;
i__34814 = G__35373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34811);
if(temp__5735__auto__){
var seq__34811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35374 = cljs.core.chunk_rest(seq__34811__$1);
var G__35375 = c__4609__auto__;
var G__35376 = cljs.core.count(c__4609__auto__);
var G__35377 = (0);
seq__34811 = G__35374;
chunk__34812 = G__35375;
count__34813 = G__35376;
i__34814 = G__35377;
continue;
} else {
var c = cljs.core.first(seq__34811__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35378 = cljs.core.next(seq__34811__$1);
var G__35379 = null;
var G__35380 = (0);
var G__35381 = (0);
seq__34811 = G__35378;
chunk__34812 = G__35379;
count__34813 = G__35380;
i__34814 = G__35381;
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
var G__34826 = arguments.length;
switch (G__34826) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35390 = arguments.length;
var i__4790__auto___35391 = (0);
while(true){
if((i__4790__auto___35391 < len__4789__auto___35390)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35391]));

var G__35392 = (i__4790__auto___35391 + (1));
i__4790__auto___35391 = G__35392;
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
var G__34827 = parent;
G__34827.appendChild(child);

return G__34827;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34828_35393 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34829_35394 = null;
var count__34830_35395 = (0);
var i__34831_35396 = (0);
while(true){
if((i__34831_35396 < count__34830_35395)){
var c_35397 = chunk__34829_35394.cljs$core$IIndexed$_nth$arity$2(null,i__34831_35396);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35397);


var G__35399 = seq__34828_35393;
var G__35400 = chunk__34829_35394;
var G__35401 = count__34830_35395;
var G__35402 = (i__34831_35396 + (1));
seq__34828_35393 = G__35399;
chunk__34829_35394 = G__35400;
count__34830_35395 = G__35401;
i__34831_35396 = G__35402;
continue;
} else {
var temp__5735__auto___35403 = cljs.core.seq(seq__34828_35393);
if(temp__5735__auto___35403){
var seq__34828_35404__$1 = temp__5735__auto___35403;
if(cljs.core.chunked_seq_QMARK_(seq__34828_35404__$1)){
var c__4609__auto___35405 = cljs.core.chunk_first(seq__34828_35404__$1);
var G__35406 = cljs.core.chunk_rest(seq__34828_35404__$1);
var G__35407 = c__4609__auto___35405;
var G__35408 = cljs.core.count(c__4609__auto___35405);
var G__35409 = (0);
seq__34828_35393 = G__35406;
chunk__34829_35394 = G__35407;
count__34830_35395 = G__35408;
i__34831_35396 = G__35409;
continue;
} else {
var c_35412 = cljs.core.first(seq__34828_35404__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35412);


var G__35413 = cljs.core.next(seq__34828_35404__$1);
var G__35414 = null;
var G__35415 = (0);
var G__35416 = (0);
seq__34828_35393 = G__35413;
chunk__34829_35394 = G__35414;
count__34830_35395 = G__35415;
i__34831_35396 = G__35416;
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
var G__34838 = arguments.length;
switch (G__34838) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35419 = arguments.length;
var i__4790__auto___35420 = (0);
while(true){
if((i__4790__auto___35420 < len__4789__auto___35419)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35420]));

var G__35422 = (i__4790__auto___35420 + (1));
i__4790__auto___35420 = G__35422;
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
var seq__34840_35427 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34841_35428 = null;
var count__34842_35429 = (0);
var i__34843_35430 = (0);
while(true){
if((i__34843_35430 < count__34842_35429)){
var c_35431 = chunk__34841_35428.cljs$core$IIndexed$_nth$arity$2(null,i__34843_35430);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35431);


var G__35433 = seq__34840_35427;
var G__35434 = chunk__34841_35428;
var G__35435 = count__34842_35429;
var G__35436 = (i__34843_35430 + (1));
seq__34840_35427 = G__35433;
chunk__34841_35428 = G__35434;
count__34842_35429 = G__35435;
i__34843_35430 = G__35436;
continue;
} else {
var temp__5735__auto___35438 = cljs.core.seq(seq__34840_35427);
if(temp__5735__auto___35438){
var seq__34840_35439__$1 = temp__5735__auto___35438;
if(cljs.core.chunked_seq_QMARK_(seq__34840_35439__$1)){
var c__4609__auto___35440 = cljs.core.chunk_first(seq__34840_35439__$1);
var G__35441 = cljs.core.chunk_rest(seq__34840_35439__$1);
var G__35442 = c__4609__auto___35440;
var G__35443 = cljs.core.count(c__4609__auto___35440);
var G__35444 = (0);
seq__34840_35427 = G__35441;
chunk__34841_35428 = G__35442;
count__34842_35429 = G__35443;
i__34843_35430 = G__35444;
continue;
} else {
var c_35445 = cljs.core.first(seq__34840_35439__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35445);


var G__35446 = cljs.core.next(seq__34840_35439__$1);
var G__35447 = null;
var G__35448 = (0);
var G__35449 = (0);
seq__34840_35427 = G__35446;
chunk__34841_35428 = G__35447;
count__34842_35429 = G__35448;
i__34843_35430 = G__35449;
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
var temp__5733__auto___35454 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35454)){
var next_35455 = temp__5733__auto___35454;
dommy.core.insert_before_BANG_(elem,next_35455);
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

var vec__34857_35473 = dommy.core.elem_and_selector(elem_sel);
var elem_35474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35473,(0),null);
var selector_35475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35473,(1),null);
var seq__34860_35476 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34867_35477 = null;
var count__34868_35478 = (0);
var i__34869_35479 = (0);
while(true){
if((i__34869_35479 < count__34868_35478)){
var vec__34925_35480 = chunk__34867_35477.cljs$core$IIndexed$_nth$arity$2(null,i__34869_35479);
var orig_type_35481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34925_35480,(0),null);
var f_35482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34925_35480,(1),null);
var seq__34870_35483 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35481,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35481,cljs.core.identity])));
var chunk__34872_35484 = null;
var count__34873_35485 = (0);
var i__34874_35486 = (0);
while(true){
if((i__34874_35486 < count__34873_35485)){
var vec__34938_35487 = chunk__34872_35484.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35486);
var actual_type_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34938_35487,(0),null);
var factory_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34938_35487,(1),null);
var canonical_f_35490 = (function (){var G__34942 = (factory_35489.cljs$core$IFn$_invoke$arity$1 ? factory_35489.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35489.call(null,f_35482));
var fexpr__34941 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34941.cljs$core$IFn$_invoke$arity$1 ? fexpr__34941.cljs$core$IFn$_invoke$arity$1(G__34942) : fexpr__34941.call(null,G__34942));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35488,f_35482], null),canonical_f_35490], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35488),canonical_f_35490);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35488),canonical_f_35490);
}


var G__35491 = seq__34870_35483;
var G__35492 = chunk__34872_35484;
var G__35493 = count__34873_35485;
var G__35494 = (i__34874_35486 + (1));
seq__34870_35483 = G__35491;
chunk__34872_35484 = G__35492;
count__34873_35485 = G__35493;
i__34874_35486 = G__35494;
continue;
} else {
var temp__5735__auto___35495 = cljs.core.seq(seq__34870_35483);
if(temp__5735__auto___35495){
var seq__34870_35496__$1 = temp__5735__auto___35495;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35496__$1)){
var c__4609__auto___35497 = cljs.core.chunk_first(seq__34870_35496__$1);
var G__35498 = cljs.core.chunk_rest(seq__34870_35496__$1);
var G__35499 = c__4609__auto___35497;
var G__35500 = cljs.core.count(c__4609__auto___35497);
var G__35501 = (0);
seq__34870_35483 = G__35498;
chunk__34872_35484 = G__35499;
count__34873_35485 = G__35500;
i__34874_35486 = G__35501;
continue;
} else {
var vec__34946_35502 = cljs.core.first(seq__34870_35496__$1);
var actual_type_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35502,(0),null);
var factory_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35502,(1),null);
var canonical_f_35505 = (function (){var G__34950 = (factory_35504.cljs$core$IFn$_invoke$arity$1 ? factory_35504.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35504.call(null,f_35482));
var fexpr__34949 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34949.cljs$core$IFn$_invoke$arity$1 ? fexpr__34949.cljs$core$IFn$_invoke$arity$1(G__34950) : fexpr__34949.call(null,G__34950));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35503,f_35482], null),canonical_f_35505], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35503),canonical_f_35505);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35503),canonical_f_35505);
}


var G__35506 = cljs.core.next(seq__34870_35496__$1);
var G__35507 = null;
var G__35508 = (0);
var G__35509 = (0);
seq__34870_35483 = G__35506;
chunk__34872_35484 = G__35507;
count__34873_35485 = G__35508;
i__34874_35486 = G__35509;
continue;
}
} else {
}
}
break;
}

var G__35510 = seq__34860_35476;
var G__35511 = chunk__34867_35477;
var G__35512 = count__34868_35478;
var G__35513 = (i__34869_35479 + (1));
seq__34860_35476 = G__35510;
chunk__34867_35477 = G__35511;
count__34868_35478 = G__35512;
i__34869_35479 = G__35513;
continue;
} else {
var temp__5735__auto___35514 = cljs.core.seq(seq__34860_35476);
if(temp__5735__auto___35514){
var seq__34860_35515__$1 = temp__5735__auto___35514;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35515__$1)){
var c__4609__auto___35516 = cljs.core.chunk_first(seq__34860_35515__$1);
var G__35517 = cljs.core.chunk_rest(seq__34860_35515__$1);
var G__35518 = c__4609__auto___35516;
var G__35519 = cljs.core.count(c__4609__auto___35516);
var G__35520 = (0);
seq__34860_35476 = G__35517;
chunk__34867_35477 = G__35518;
count__34868_35478 = G__35519;
i__34869_35479 = G__35520;
continue;
} else {
var vec__34951_35521 = cljs.core.first(seq__34860_35515__$1);
var orig_type_35522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951_35521,(0),null);
var f_35523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951_35521,(1),null);
var seq__34861_35524 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35522,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35522,cljs.core.identity])));
var chunk__34863_35525 = null;
var count__34864_35526 = (0);
var i__34865_35527 = (0);
while(true){
if((i__34865_35527 < count__34864_35526)){
var vec__34964_35528 = chunk__34863_35525.cljs$core$IIndexed$_nth$arity$2(null,i__34865_35527);
var actual_type_35529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35528,(0),null);
var factory_35530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35528,(1),null);
var canonical_f_35531 = (function (){var G__34968 = (factory_35530.cljs$core$IFn$_invoke$arity$1 ? factory_35530.cljs$core$IFn$_invoke$arity$1(f_35523) : factory_35530.call(null,f_35523));
var fexpr__34967 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34967.cljs$core$IFn$_invoke$arity$1 ? fexpr__34967.cljs$core$IFn$_invoke$arity$1(G__34968) : fexpr__34967.call(null,G__34968));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35529,f_35523], null),canonical_f_35531], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35529),canonical_f_35531);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35529),canonical_f_35531);
}


var G__35532 = seq__34861_35524;
var G__35533 = chunk__34863_35525;
var G__35534 = count__34864_35526;
var G__35535 = (i__34865_35527 + (1));
seq__34861_35524 = G__35532;
chunk__34863_35525 = G__35533;
count__34864_35526 = G__35534;
i__34865_35527 = G__35535;
continue;
} else {
var temp__5735__auto___35536__$1 = cljs.core.seq(seq__34861_35524);
if(temp__5735__auto___35536__$1){
var seq__34861_35537__$1 = temp__5735__auto___35536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34861_35537__$1)){
var c__4609__auto___35538 = cljs.core.chunk_first(seq__34861_35537__$1);
var G__35539 = cljs.core.chunk_rest(seq__34861_35537__$1);
var G__35540 = c__4609__auto___35538;
var G__35541 = cljs.core.count(c__4609__auto___35538);
var G__35542 = (0);
seq__34861_35524 = G__35539;
chunk__34863_35525 = G__35540;
count__34864_35526 = G__35541;
i__34865_35527 = G__35542;
continue;
} else {
var vec__34969_35543 = cljs.core.first(seq__34861_35537__$1);
var actual_type_35544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35543,(0),null);
var factory_35545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35543,(1),null);
var canonical_f_35546 = (function (){var G__34973 = (factory_35545.cljs$core$IFn$_invoke$arity$1 ? factory_35545.cljs$core$IFn$_invoke$arity$1(f_35523) : factory_35545.call(null,f_35523));
var fexpr__34972 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34972.cljs$core$IFn$_invoke$arity$1 ? fexpr__34972.cljs$core$IFn$_invoke$arity$1(G__34973) : fexpr__34972.call(null,G__34973));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35544,f_35523], null),canonical_f_35546], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35544),canonical_f_35546);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35544),canonical_f_35546);
}


var G__35547 = cljs.core.next(seq__34861_35537__$1);
var G__35548 = null;
var G__35549 = (0);
var G__35550 = (0);
seq__34861_35524 = G__35547;
chunk__34863_35525 = G__35548;
count__34864_35526 = G__35549;
i__34865_35527 = G__35550;
continue;
}
} else {
}
}
break;
}

var G__35551 = cljs.core.next(seq__34860_35515__$1);
var G__35552 = null;
var G__35553 = (0);
var G__35554 = (0);
seq__34860_35476 = G__35551;
chunk__34867_35477 = G__35552;
count__34868_35478 = G__35553;
i__34869_35479 = G__35554;
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
var len__4789__auto___35555 = arguments.length;
var i__4790__auto___35556 = (0);
while(true){
if((i__4790__auto___35556 < len__4789__auto___35555)){
args__4795__auto__.push((arguments[i__4790__auto___35556]));

var G__35557 = (i__4790__auto___35556 + (1));
i__4790__auto___35556 = G__35557;
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

var vec__34976_35558 = dommy.core.elem_and_selector(elem_sel);
var elem_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35558,(0),null);
var selector_35560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35558,(1),null);
var seq__34979_35561 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34986_35562 = null;
var count__34987_35563 = (0);
var i__34988_35564 = (0);
while(true){
if((i__34988_35564 < count__34987_35563)){
var vec__35036_35567 = chunk__34986_35562.cljs$core$IIndexed$_nth$arity$2(null,i__34988_35564);
var orig_type_35568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35036_35567,(0),null);
var f_35569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35036_35567,(1),null);
var seq__34989_35571 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35568,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35568,cljs.core.identity])));
var chunk__34991_35572 = null;
var count__34992_35573 = (0);
var i__34993_35574 = (0);
while(true){
if((i__34993_35574 < count__34992_35573)){
var vec__35045_35577 = chunk__34991_35572.cljs$core$IIndexed$_nth$arity$2(null,i__34993_35574);
var actual_type_35578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35045_35577,(0),null);
var __35579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35045_35577,(1),null);
var keys_35581 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35560,actual_type_35578,f_35569], null);
var canonical_f_35582 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35559),keys_35581);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35559,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35581], 0));

if(cljs.core.truth_(elem_35559.removeEventListener)){
elem_35559.removeEventListener(cljs.core.name(actual_type_35578),canonical_f_35582);
} else {
elem_35559.detachEvent(cljs.core.name(actual_type_35578),canonical_f_35582);
}


var G__35583 = seq__34989_35571;
var G__35584 = chunk__34991_35572;
var G__35585 = count__34992_35573;
var G__35586 = (i__34993_35574 + (1));
seq__34989_35571 = G__35583;
chunk__34991_35572 = G__35584;
count__34992_35573 = G__35585;
i__34993_35574 = G__35586;
continue;
} else {
var temp__5735__auto___35587 = cljs.core.seq(seq__34989_35571);
if(temp__5735__auto___35587){
var seq__34989_35588__$1 = temp__5735__auto___35587;
if(cljs.core.chunked_seq_QMARK_(seq__34989_35588__$1)){
var c__4609__auto___35589 = cljs.core.chunk_first(seq__34989_35588__$1);
var G__35590 = cljs.core.chunk_rest(seq__34989_35588__$1);
var G__35591 = c__4609__auto___35589;
var G__35592 = cljs.core.count(c__4609__auto___35589);
var G__35593 = (0);
seq__34989_35571 = G__35590;
chunk__34991_35572 = G__35591;
count__34992_35573 = G__35592;
i__34993_35574 = G__35593;
continue;
} else {
var vec__35049_35594 = cljs.core.first(seq__34989_35588__$1);
var actual_type_35595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35594,(0),null);
var __35596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35594,(1),null);
var keys_35598 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35560,actual_type_35595,f_35569], null);
var canonical_f_35599 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35559),keys_35598);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35559,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35598], 0));

if(cljs.core.truth_(elem_35559.removeEventListener)){
elem_35559.removeEventListener(cljs.core.name(actual_type_35595),canonical_f_35599);
} else {
elem_35559.detachEvent(cljs.core.name(actual_type_35595),canonical_f_35599);
}


var G__35603 = cljs.core.next(seq__34989_35588__$1);
var G__35604 = null;
var G__35605 = (0);
var G__35606 = (0);
seq__34989_35571 = G__35603;
chunk__34991_35572 = G__35604;
count__34992_35573 = G__35605;
i__34993_35574 = G__35606;
continue;
}
} else {
}
}
break;
}

var G__35607 = seq__34979_35561;
var G__35608 = chunk__34986_35562;
var G__35609 = count__34987_35563;
var G__35610 = (i__34988_35564 + (1));
seq__34979_35561 = G__35607;
chunk__34986_35562 = G__35608;
count__34987_35563 = G__35609;
i__34988_35564 = G__35610;
continue;
} else {
var temp__5735__auto___35613 = cljs.core.seq(seq__34979_35561);
if(temp__5735__auto___35613){
var seq__34979_35615__$1 = temp__5735__auto___35613;
if(cljs.core.chunked_seq_QMARK_(seq__34979_35615__$1)){
var c__4609__auto___35616 = cljs.core.chunk_first(seq__34979_35615__$1);
var G__35617 = cljs.core.chunk_rest(seq__34979_35615__$1);
var G__35618 = c__4609__auto___35616;
var G__35619 = cljs.core.count(c__4609__auto___35616);
var G__35620 = (0);
seq__34979_35561 = G__35617;
chunk__34986_35562 = G__35618;
count__34987_35563 = G__35619;
i__34988_35564 = G__35620;
continue;
} else {
var vec__35054_35621 = cljs.core.first(seq__34979_35615__$1);
var orig_type_35622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35621,(0),null);
var f_35623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35621,(1),null);
var seq__34980_35624 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35622,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35622,cljs.core.identity])));
var chunk__34982_35625 = null;
var count__34983_35626 = (0);
var i__34984_35627 = (0);
while(true){
if((i__34984_35627 < count__34983_35626)){
var vec__35065_35628 = chunk__34982_35625.cljs$core$IIndexed$_nth$arity$2(null,i__34984_35627);
var actual_type_35629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065_35628,(0),null);
var __35630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065_35628,(1),null);
var keys_35637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35560,actual_type_35629,f_35623], null);
var canonical_f_35638 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35559),keys_35637);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35559,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35637], 0));

if(cljs.core.truth_(elem_35559.removeEventListener)){
elem_35559.removeEventListener(cljs.core.name(actual_type_35629),canonical_f_35638);
} else {
elem_35559.detachEvent(cljs.core.name(actual_type_35629),canonical_f_35638);
}


var G__35640 = seq__34980_35624;
var G__35641 = chunk__34982_35625;
var G__35642 = count__34983_35626;
var G__35643 = (i__34984_35627 + (1));
seq__34980_35624 = G__35640;
chunk__34982_35625 = G__35641;
count__34983_35626 = G__35642;
i__34984_35627 = G__35643;
continue;
} else {
var temp__5735__auto___35646__$1 = cljs.core.seq(seq__34980_35624);
if(temp__5735__auto___35646__$1){
var seq__34980_35649__$1 = temp__5735__auto___35646__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34980_35649__$1)){
var c__4609__auto___35650 = cljs.core.chunk_first(seq__34980_35649__$1);
var G__35651 = cljs.core.chunk_rest(seq__34980_35649__$1);
var G__35652 = c__4609__auto___35650;
var G__35653 = cljs.core.count(c__4609__auto___35650);
var G__35654 = (0);
seq__34980_35624 = G__35651;
chunk__34982_35625 = G__35652;
count__34983_35626 = G__35653;
i__34984_35627 = G__35654;
continue;
} else {
var vec__35068_35655 = cljs.core.first(seq__34980_35649__$1);
var actual_type_35656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35655,(0),null);
var __35657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35655,(1),null);
var keys_35658 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35560,actual_type_35656,f_35623], null);
var canonical_f_35659 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35559),keys_35658);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35559,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35658], 0));

if(cljs.core.truth_(elem_35559.removeEventListener)){
elem_35559.removeEventListener(cljs.core.name(actual_type_35656),canonical_f_35659);
} else {
elem_35559.detachEvent(cljs.core.name(actual_type_35656),canonical_f_35659);
}


var G__35666 = cljs.core.next(seq__34980_35649__$1);
var G__35667 = null;
var G__35668 = (0);
var G__35669 = (0);
seq__34980_35624 = G__35666;
chunk__34982_35625 = G__35667;
count__34983_35626 = G__35668;
i__34984_35627 = G__35669;
continue;
}
} else {
}
}
break;
}

var G__35671 = cljs.core.next(seq__34979_35615__$1);
var G__35672 = null;
var G__35673 = (0);
var G__35674 = (0);
seq__34979_35561 = G__35671;
chunk__34986_35562 = G__35672;
count__34987_35563 = G__35673;
i__34988_35564 = G__35674;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34974){
var G__34975 = cljs.core.first(seq34974);
var seq34974__$1 = cljs.core.next(seq34974);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34975,seq34974__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35679 = arguments.length;
var i__4790__auto___35681 = (0);
while(true){
if((i__4790__auto___35681 < len__4789__auto___35679)){
args__4795__auto__.push((arguments[i__4790__auto___35681]));

var G__35682 = (i__4790__auto___35681 + (1));
i__4790__auto___35681 = G__35682;
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

var vec__35088_35687 = dommy.core.elem_and_selector(elem_sel);
var elem_35688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35088_35687,(0),null);
var selector_35689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35088_35687,(1),null);
var seq__35093_35690 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35094_35691 = null;
var count__35095_35693 = (0);
var i__35096_35694 = (0);
while(true){
if((i__35096_35694 < count__35095_35693)){
var vec__35113_35699 = chunk__35094_35691.cljs$core$IIndexed$_nth$arity$2(null,i__35096_35694);
var type_35700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35699,(0),null);
var f_35701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35699,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35700,((function (seq__35093_35690,chunk__35094_35691,count__35095_35693,i__35096_35694,vec__35113_35699,type_35700,f_35701,vec__35088_35687,elem_35688,selector_35689){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35700,dommy$core$this_fn], 0));

return (f_35701.cljs$core$IFn$_invoke$arity$1 ? f_35701.cljs$core$IFn$_invoke$arity$1(e) : f_35701.call(null,e));
});})(seq__35093_35690,chunk__35094_35691,count__35095_35693,i__35096_35694,vec__35113_35699,type_35700,f_35701,vec__35088_35687,elem_35688,selector_35689))
], 0));


var G__35705 = seq__35093_35690;
var G__35706 = chunk__35094_35691;
var G__35707 = count__35095_35693;
var G__35708 = (i__35096_35694 + (1));
seq__35093_35690 = G__35705;
chunk__35094_35691 = G__35706;
count__35095_35693 = G__35707;
i__35096_35694 = G__35708;
continue;
} else {
var temp__5735__auto___35711 = cljs.core.seq(seq__35093_35690);
if(temp__5735__auto___35711){
var seq__35093_35713__$1 = temp__5735__auto___35711;
if(cljs.core.chunked_seq_QMARK_(seq__35093_35713__$1)){
var c__4609__auto___35714 = cljs.core.chunk_first(seq__35093_35713__$1);
var G__35715 = cljs.core.chunk_rest(seq__35093_35713__$1);
var G__35716 = c__4609__auto___35714;
var G__35717 = cljs.core.count(c__4609__auto___35714);
var G__35718 = (0);
seq__35093_35690 = G__35715;
chunk__35094_35691 = G__35716;
count__35095_35693 = G__35717;
i__35096_35694 = G__35718;
continue;
} else {
var vec__35117_35721 = cljs.core.first(seq__35093_35713__$1);
var type_35722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35721,(0),null);
var f_35723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35721,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35722,((function (seq__35093_35690,chunk__35094_35691,count__35095_35693,i__35096_35694,vec__35117_35721,type_35722,f_35723,seq__35093_35713__$1,temp__5735__auto___35711,vec__35088_35687,elem_35688,selector_35689){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35722,dommy$core$this_fn], 0));

return (f_35723.cljs$core$IFn$_invoke$arity$1 ? f_35723.cljs$core$IFn$_invoke$arity$1(e) : f_35723.call(null,e));
});})(seq__35093_35690,chunk__35094_35691,count__35095_35693,i__35096_35694,vec__35117_35721,type_35722,f_35723,seq__35093_35713__$1,temp__5735__auto___35711,vec__35088_35687,elem_35688,selector_35689))
], 0));


var G__35731 = cljs.core.next(seq__35093_35713__$1);
var G__35732 = null;
var G__35733 = (0);
var G__35734 = (0);
seq__35093_35690 = G__35731;
chunk__35094_35691 = G__35732;
count__35095_35693 = G__35733;
i__35096_35694 = G__35734;
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
