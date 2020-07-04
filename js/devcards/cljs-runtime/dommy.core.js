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


var G__35227 = cljs.core.next(seq__34737_35218__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34737_35206 = G__35227;
chunk__34738_35207 = G__35228;
count__34739_35208 = G__35229;
i__34740_35209 = G__35230;
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
var seq__34802_35352__$1 = temp__5735__auto___35350;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35352__$1)){
var c__4609__auto___35353 = cljs.core.chunk_first(seq__34802_35352__$1);
var G__35354 = cljs.core.chunk_rest(seq__34802_35352__$1);
var G__35355 = c__4609__auto___35353;
var G__35356 = cljs.core.count(c__4609__auto___35353);
var G__35357 = (0);
seq__34802_35341 = G__35354;
chunk__34803_35342 = G__35355;
count__34804_35343 = G__35356;
i__34805_35344 = G__35357;
continue;
} else {
var c_35358 = cljs.core.first(seq__34802_35352__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35358);


var G__35360 = cljs.core.next(seq__34802_35352__$1);
var G__35361 = null;
var G__35362 = (0);
var G__35363 = (0);
seq__34802_35341 = G__35360;
chunk__34803_35342 = G__35361;
count__34804_35343 = G__35362;
i__34805_35344 = G__35363;
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
var len__4789__auto___35365 = arguments.length;
var i__4790__auto___35366 = (0);
while(true){
if((i__4790__auto___35366 < len__4789__auto___35365)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35366]));

var G__35367 = (i__4790__auto___35366 + (1));
i__4790__auto___35366 = G__35367;
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
var temp__5733__auto___35369 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35369)){
var class_list_35370 = temp__5733__auto___35369;
class_list_35370.remove(c__$1);
} else {
var class_name_35371 = dommy.core.class$(elem);
var new_class_name_35372 = dommy.utils.remove_class_str(class_name_35371,c__$1);
if((class_name_35371 === new_class_name_35372)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35372);
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


var G__35376 = seq__34811;
var G__35377 = chunk__34812;
var G__35378 = count__34813;
var G__35379 = (i__34814 + (1));
seq__34811 = G__35376;
chunk__34812 = G__35377;
count__34813 = G__35378;
i__34814 = G__35379;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34811);
if(temp__5735__auto__){
var seq__34811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35380 = cljs.core.chunk_rest(seq__34811__$1);
var G__35381 = c__4609__auto__;
var G__35382 = cljs.core.count(c__4609__auto__);
var G__35383 = (0);
seq__34811 = G__35380;
chunk__34812 = G__35381;
count__34813 = G__35382;
i__34814 = G__35383;
continue;
} else {
var c = cljs.core.first(seq__34811__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35385 = cljs.core.next(seq__34811__$1);
var G__35386 = null;
var G__35387 = (0);
var G__35388 = (0);
seq__34811 = G__35385;
chunk__34812 = G__35386;
count__34813 = G__35387;
i__34814 = G__35388;
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
var temp__5733__auto___35396 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35396)){
var class_list_35397 = temp__5733__auto___35396;
class_list_35397.toggle(c__$1);
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
var G__34821 = arguments.length;
switch (G__34821) {
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34824){
var G__34825 = cljs.core.first(seq34824);
var seq34824__$1 = cljs.core.next(seq34824);
var G__34826 = cljs.core.first(seq34824__$1);
var seq34824__$2 = cljs.core.next(seq34824__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34825,G__34826,seq34824__$2);
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
var vec__34928_35480 = chunk__34867_35477.cljs$core$IIndexed$_nth$arity$2(null,i__34869_35479);
var orig_type_35481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35480,(0),null);
var f_35482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35480,(1),null);
var seq__34870_35483 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35481,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35481,cljs.core.identity])));
var chunk__34872_35484 = null;
var count__34873_35485 = (0);
var i__34874_35486 = (0);
while(true){
if((i__34874_35486 < count__34873_35485)){
var vec__34941_35487 = chunk__34872_35484.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35486);
var actual_type_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941_35487,(0),null);
var factory_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941_35487,(1),null);
var canonical_f_35490 = (function (){var G__34945 = (factory_35489.cljs$core$IFn$_invoke$arity$1 ? factory_35489.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35489.call(null,f_35482));
var fexpr__34944 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34944.cljs$core$IFn$_invoke$arity$1 ? fexpr__34944.cljs$core$IFn$_invoke$arity$1(G__34945) : fexpr__34944.call(null,G__34945));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35488,f_35482], null),canonical_f_35490], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35488),canonical_f_35490);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35488),canonical_f_35490);
}


var G__35495 = seq__34870_35483;
var G__35496 = chunk__34872_35484;
var G__35497 = count__34873_35485;
var G__35498 = (i__34874_35486 + (1));
seq__34870_35483 = G__35495;
chunk__34872_35484 = G__35496;
count__34873_35485 = G__35497;
i__34874_35486 = G__35498;
continue;
} else {
var temp__5735__auto___35500 = cljs.core.seq(seq__34870_35483);
if(temp__5735__auto___35500){
var seq__34870_35501__$1 = temp__5735__auto___35500;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35501__$1)){
var c__4609__auto___35503 = cljs.core.chunk_first(seq__34870_35501__$1);
var G__35504 = cljs.core.chunk_rest(seq__34870_35501__$1);
var G__35505 = c__4609__auto___35503;
var G__35506 = cljs.core.count(c__4609__auto___35503);
var G__35507 = (0);
seq__34870_35483 = G__35504;
chunk__34872_35484 = G__35505;
count__34873_35485 = G__35506;
i__34874_35486 = G__35507;
continue;
} else {
var vec__34946_35508 = cljs.core.first(seq__34870_35501__$1);
var actual_type_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35508,(0),null);
var factory_35510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35508,(1),null);
var canonical_f_35511 = (function (){var G__34950 = (factory_35510.cljs$core$IFn$_invoke$arity$1 ? factory_35510.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35510.call(null,f_35482));
var fexpr__34949 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34949.cljs$core$IFn$_invoke$arity$1 ? fexpr__34949.cljs$core$IFn$_invoke$arity$1(G__34950) : fexpr__34949.call(null,G__34950));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35509,f_35482], null),canonical_f_35511], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35509),canonical_f_35511);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35509),canonical_f_35511);
}


var G__35512 = cljs.core.next(seq__34870_35501__$1);
var G__35513 = null;
var G__35514 = (0);
var G__35515 = (0);
seq__34870_35483 = G__35512;
chunk__34872_35484 = G__35513;
count__34873_35485 = G__35514;
i__34874_35486 = G__35515;
continue;
}
} else {
}
}
break;
}

var G__35517 = seq__34860_35476;
var G__35518 = chunk__34867_35477;
var G__35519 = count__34868_35478;
var G__35520 = (i__34869_35479 + (1));
seq__34860_35476 = G__35517;
chunk__34867_35477 = G__35518;
count__34868_35478 = G__35519;
i__34869_35479 = G__35520;
continue;
} else {
var temp__5735__auto___35523 = cljs.core.seq(seq__34860_35476);
if(temp__5735__auto___35523){
var seq__34860_35525__$1 = temp__5735__auto___35523;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35525__$1)){
var c__4609__auto___35526 = cljs.core.chunk_first(seq__34860_35525__$1);
var G__35527 = cljs.core.chunk_rest(seq__34860_35525__$1);
var G__35528 = c__4609__auto___35526;
var G__35529 = cljs.core.count(c__4609__auto___35526);
var G__35530 = (0);
seq__34860_35476 = G__35527;
chunk__34867_35477 = G__35528;
count__34868_35478 = G__35529;
i__34869_35479 = G__35530;
continue;
} else {
var vec__34955_35531 = cljs.core.first(seq__34860_35525__$1);
var orig_type_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35531,(0),null);
var f_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35531,(1),null);
var seq__34861_35536 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35532,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35532,cljs.core.identity])));
var chunk__34863_35537 = null;
var count__34864_35538 = (0);
var i__34865_35539 = (0);
while(true){
if((i__34865_35539 < count__34864_35538)){
var vec__34968_35541 = chunk__34863_35537.cljs$core$IIndexed$_nth$arity$2(null,i__34865_35539);
var actual_type_35542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35541,(0),null);
var factory_35543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35541,(1),null);
var canonical_f_35544 = (function (){var G__34975 = (factory_35543.cljs$core$IFn$_invoke$arity$1 ? factory_35543.cljs$core$IFn$_invoke$arity$1(f_35533) : factory_35543.call(null,f_35533));
var fexpr__34974 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34974.cljs$core$IFn$_invoke$arity$1 ? fexpr__34974.cljs$core$IFn$_invoke$arity$1(G__34975) : fexpr__34974.call(null,G__34975));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35542,f_35533], null),canonical_f_35544], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35542),canonical_f_35544);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35542),canonical_f_35544);
}


var G__35550 = seq__34861_35536;
var G__35551 = chunk__34863_35537;
var G__35552 = count__34864_35538;
var G__35553 = (i__34865_35539 + (1));
seq__34861_35536 = G__35550;
chunk__34863_35537 = G__35551;
count__34864_35538 = G__35552;
i__34865_35539 = G__35553;
continue;
} else {
var temp__5735__auto___35556__$1 = cljs.core.seq(seq__34861_35536);
if(temp__5735__auto___35556__$1){
var seq__34861_35557__$1 = temp__5735__auto___35556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34861_35557__$1)){
var c__4609__auto___35558 = cljs.core.chunk_first(seq__34861_35557__$1);
var G__35559 = cljs.core.chunk_rest(seq__34861_35557__$1);
var G__35560 = c__4609__auto___35558;
var G__35561 = cljs.core.count(c__4609__auto___35558);
var G__35562 = (0);
seq__34861_35536 = G__35559;
chunk__34863_35537 = G__35560;
count__34864_35538 = G__35561;
i__34865_35539 = G__35562;
continue;
} else {
var vec__34976_35563 = cljs.core.first(seq__34861_35557__$1);
var actual_type_35564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35563,(0),null);
var factory_35565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35563,(1),null);
var canonical_f_35570 = (function (){var G__34980 = (factory_35565.cljs$core$IFn$_invoke$arity$1 ? factory_35565.cljs$core$IFn$_invoke$arity$1(f_35533) : factory_35565.call(null,f_35533));
var fexpr__34979 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34979.cljs$core$IFn$_invoke$arity$1 ? fexpr__34979.cljs$core$IFn$_invoke$arity$1(G__34980) : fexpr__34979.call(null,G__34980));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35564,f_35533], null),canonical_f_35570], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35564),canonical_f_35570);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35564),canonical_f_35570);
}


var G__35576 = cljs.core.next(seq__34861_35557__$1);
var G__35577 = null;
var G__35578 = (0);
var G__35579 = (0);
seq__34861_35536 = G__35576;
chunk__34863_35537 = G__35577;
count__34864_35538 = G__35578;
i__34865_35539 = G__35579;
continue;
}
} else {
}
}
break;
}

var G__35581 = cljs.core.next(seq__34860_35525__$1);
var G__35582 = null;
var G__35583 = (0);
var G__35584 = (0);
seq__34860_35476 = G__35581;
chunk__34867_35477 = G__35582;
count__34868_35478 = G__35583;
i__34869_35479 = G__35584;
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
var len__4789__auto___35588 = arguments.length;
var i__4790__auto___35591 = (0);
while(true){
if((i__4790__auto___35591 < len__4789__auto___35588)){
args__4795__auto__.push((arguments[i__4790__auto___35591]));

var G__35592 = (i__4790__auto___35591 + (1));
i__4790__auto___35591 = G__35592;
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

var vec__34987_35594 = dommy.core.elem_and_selector(elem_sel);
var elem_35595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35594,(0),null);
var selector_35596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35594,(1),null);
var seq__34990_35598 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34997_35599 = null;
var count__34998_35600 = (0);
var i__34999_35601 = (0);
while(true){
if((i__34999_35601 < count__34998_35600)){
var vec__35041_35605 = chunk__34997_35599.cljs$core$IIndexed$_nth$arity$2(null,i__34999_35601);
var orig_type_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041_35605,(0),null);
var f_35607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041_35605,(1),null);
var seq__35000_35608 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35606,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35606,cljs.core.identity])));
var chunk__35002_35609 = null;
var count__35003_35610 = (0);
var i__35004_35611 = (0);
while(true){
if((i__35004_35611 < count__35003_35610)){
var vec__35055_35617 = chunk__35002_35609.cljs$core$IIndexed$_nth$arity$2(null,i__35004_35611);
var actual_type_35618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35617,(0),null);
var __35619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35617,(1),null);
var keys_35620 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35596,actual_type_35618,f_35607], null);
var canonical_f_35621 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35595),keys_35620);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35595,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35620], 0));

if(cljs.core.truth_(elem_35595.removeEventListener)){
elem_35595.removeEventListener(cljs.core.name(actual_type_35618),canonical_f_35621);
} else {
elem_35595.detachEvent(cljs.core.name(actual_type_35618),canonical_f_35621);
}


var G__35625 = seq__35000_35608;
var G__35626 = chunk__35002_35609;
var G__35627 = count__35003_35610;
var G__35628 = (i__35004_35611 + (1));
seq__35000_35608 = G__35625;
chunk__35002_35609 = G__35626;
count__35003_35610 = G__35627;
i__35004_35611 = G__35628;
continue;
} else {
var temp__5735__auto___35631 = cljs.core.seq(seq__35000_35608);
if(temp__5735__auto___35631){
var seq__35000_35633__$1 = temp__5735__auto___35631;
if(cljs.core.chunked_seq_QMARK_(seq__35000_35633__$1)){
var c__4609__auto___35634 = cljs.core.chunk_first(seq__35000_35633__$1);
var G__35635 = cljs.core.chunk_rest(seq__35000_35633__$1);
var G__35636 = c__4609__auto___35634;
var G__35637 = cljs.core.count(c__4609__auto___35634);
var G__35638 = (0);
seq__35000_35608 = G__35635;
chunk__35002_35609 = G__35636;
count__35003_35610 = G__35637;
i__35004_35611 = G__35638;
continue;
} else {
var vec__35076_35642 = cljs.core.first(seq__35000_35633__$1);
var actual_type_35643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076_35642,(0),null);
var __35644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076_35642,(1),null);
var keys_35645 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35596,actual_type_35643,f_35607], null);
var canonical_f_35646 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35595),keys_35645);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35595,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35645], 0));

if(cljs.core.truth_(elem_35595.removeEventListener)){
elem_35595.removeEventListener(cljs.core.name(actual_type_35643),canonical_f_35646);
} else {
elem_35595.detachEvent(cljs.core.name(actual_type_35643),canonical_f_35646);
}


var G__35653 = cljs.core.next(seq__35000_35633__$1);
var G__35654 = null;
var G__35655 = (0);
var G__35656 = (0);
seq__35000_35608 = G__35653;
chunk__35002_35609 = G__35654;
count__35003_35610 = G__35655;
i__35004_35611 = G__35656;
continue;
}
} else {
}
}
break;
}

var G__35661 = seq__34990_35598;
var G__35662 = chunk__34997_35599;
var G__35663 = count__34998_35600;
var G__35664 = (i__34999_35601 + (1));
seq__34990_35598 = G__35661;
chunk__34997_35599 = G__35662;
count__34998_35600 = G__35663;
i__34999_35601 = G__35664;
continue;
} else {
var temp__5735__auto___35667 = cljs.core.seq(seq__34990_35598);
if(temp__5735__auto___35667){
var seq__34990_35668__$1 = temp__5735__auto___35667;
if(cljs.core.chunked_seq_QMARK_(seq__34990_35668__$1)){
var c__4609__auto___35669 = cljs.core.chunk_first(seq__34990_35668__$1);
var G__35670 = cljs.core.chunk_rest(seq__34990_35668__$1);
var G__35671 = c__4609__auto___35669;
var G__35672 = cljs.core.count(c__4609__auto___35669);
var G__35673 = (0);
seq__34990_35598 = G__35670;
chunk__34997_35599 = G__35671;
count__34998_35600 = G__35672;
i__34999_35601 = G__35673;
continue;
} else {
var vec__35083_35677 = cljs.core.first(seq__34990_35668__$1);
var orig_type_35678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35677,(0),null);
var f_35679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35083_35677,(1),null);
var seq__34991_35680 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35678,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35678,cljs.core.identity])));
var chunk__34993_35681 = null;
var count__34994_35682 = (0);
var i__34995_35683 = (0);
while(true){
if((i__34995_35683 < count__34994_35682)){
var vec__35104_35687 = chunk__34993_35681.cljs$core$IIndexed$_nth$arity$2(null,i__34995_35683);
var actual_type_35688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35104_35687,(0),null);
var __35689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35104_35687,(1),null);
var keys_35690 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35596,actual_type_35688,f_35679], null);
var canonical_f_35691 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35595),keys_35690);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35595,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35690], 0));

if(cljs.core.truth_(elem_35595.removeEventListener)){
elem_35595.removeEventListener(cljs.core.name(actual_type_35688),canonical_f_35691);
} else {
elem_35595.detachEvent(cljs.core.name(actual_type_35688),canonical_f_35691);
}


var G__35694 = seq__34991_35680;
var G__35695 = chunk__34993_35681;
var G__35696 = count__34994_35682;
var G__35697 = (i__34995_35683 + (1));
seq__34991_35680 = G__35694;
chunk__34993_35681 = G__35695;
count__34994_35682 = G__35696;
i__34995_35683 = G__35697;
continue;
} else {
var temp__5735__auto___35699__$1 = cljs.core.seq(seq__34991_35680);
if(temp__5735__auto___35699__$1){
var seq__34991_35700__$1 = temp__5735__auto___35699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34991_35700__$1)){
var c__4609__auto___35701 = cljs.core.chunk_first(seq__34991_35700__$1);
var G__35704 = cljs.core.chunk_rest(seq__34991_35700__$1);
var G__35705 = c__4609__auto___35701;
var G__35706 = cljs.core.count(c__4609__auto___35701);
var G__35707 = (0);
seq__34991_35680 = G__35704;
chunk__34993_35681 = G__35705;
count__34994_35682 = G__35706;
i__34995_35683 = G__35707;
continue;
} else {
var vec__35117_35709 = cljs.core.first(seq__34991_35700__$1);
var actual_type_35710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35709,(0),null);
var __35711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35709,(1),null);
var keys_35714 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35596,actual_type_35710,f_35679], null);
var canonical_f_35715 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35595),keys_35714);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35595,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35714], 0));

if(cljs.core.truth_(elem_35595.removeEventListener)){
elem_35595.removeEventListener(cljs.core.name(actual_type_35710),canonical_f_35715);
} else {
elem_35595.detachEvent(cljs.core.name(actual_type_35710),canonical_f_35715);
}


var G__35719 = cljs.core.next(seq__34991_35700__$1);
var G__35720 = null;
var G__35721 = (0);
var G__35722 = (0);
seq__34991_35680 = G__35719;
chunk__34993_35681 = G__35720;
count__34994_35682 = G__35721;
i__34995_35683 = G__35722;
continue;
}
} else {
}
}
break;
}

var G__35724 = cljs.core.next(seq__34990_35668__$1);
var G__35725 = null;
var G__35726 = (0);
var G__35727 = (0);
seq__34990_35598 = G__35724;
chunk__34997_35599 = G__35725;
count__34998_35600 = G__35726;
i__34999_35601 = G__35727;
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
var len__4789__auto___35730 = arguments.length;
var i__4790__auto___35731 = (0);
while(true){
if((i__4790__auto___35731 < len__4789__auto___35730)){
args__4795__auto__.push((arguments[i__4790__auto___35731]));

var G__35753 = (i__4790__auto___35731 + (1));
i__4790__auto___35731 = G__35753;
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

var vec__35125_35755 = dommy.core.elem_and_selector(elem_sel);
var elem_35756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125_35755,(0),null);
var selector_35757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125_35755,(1),null);
var seq__35128_35759 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35129_35760 = null;
var count__35130_35761 = (0);
var i__35131_35762 = (0);
while(true){
if((i__35131_35762 < count__35130_35761)){
var vec__35139_35764 = chunk__35129_35760.cljs$core$IIndexed$_nth$arity$2(null,i__35131_35762);
var type_35765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35139_35764,(0),null);
var f_35766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35139_35764,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35765,((function (seq__35128_35759,chunk__35129_35760,count__35130_35761,i__35131_35762,vec__35139_35764,type_35765,f_35766,vec__35125_35755,elem_35756,selector_35757){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35765,dommy$core$this_fn], 0));

return (f_35766.cljs$core$IFn$_invoke$arity$1 ? f_35766.cljs$core$IFn$_invoke$arity$1(e) : f_35766.call(null,e));
});})(seq__35128_35759,chunk__35129_35760,count__35130_35761,i__35131_35762,vec__35139_35764,type_35765,f_35766,vec__35125_35755,elem_35756,selector_35757))
], 0));


var G__35775 = seq__35128_35759;
var G__35776 = chunk__35129_35760;
var G__35777 = count__35130_35761;
var G__35778 = (i__35131_35762 + (1));
seq__35128_35759 = G__35775;
chunk__35129_35760 = G__35776;
count__35130_35761 = G__35777;
i__35131_35762 = G__35778;
continue;
} else {
var temp__5735__auto___35780 = cljs.core.seq(seq__35128_35759);
if(temp__5735__auto___35780){
var seq__35128_35782__$1 = temp__5735__auto___35780;
if(cljs.core.chunked_seq_QMARK_(seq__35128_35782__$1)){
var c__4609__auto___35783 = cljs.core.chunk_first(seq__35128_35782__$1);
var G__35784 = cljs.core.chunk_rest(seq__35128_35782__$1);
var G__35785 = c__4609__auto___35783;
var G__35786 = cljs.core.count(c__4609__auto___35783);
var G__35787 = (0);
seq__35128_35759 = G__35784;
chunk__35129_35760 = G__35785;
count__35130_35761 = G__35786;
i__35131_35762 = G__35787;
continue;
} else {
var vec__35143_35795 = cljs.core.first(seq__35128_35782__$1);
var type_35796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35795,(0),null);
var f_35797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35795,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35796,((function (seq__35128_35759,chunk__35129_35760,count__35130_35761,i__35131_35762,vec__35143_35795,type_35796,f_35797,seq__35128_35782__$1,temp__5735__auto___35780,vec__35125_35755,elem_35756,selector_35757){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35796,dommy$core$this_fn], 0));

return (f_35797.cljs$core$IFn$_invoke$arity$1 ? f_35797.cljs$core$IFn$_invoke$arity$1(e) : f_35797.call(null,e));
});})(seq__35128_35759,chunk__35129_35760,count__35130_35761,i__35131_35762,vec__35143_35795,type_35796,f_35797,seq__35128_35782__$1,temp__5735__auto___35780,vec__35125_35755,elem_35756,selector_35757))
], 0));


var G__35804 = cljs.core.next(seq__35128_35782__$1);
var G__35805 = null;
var G__35806 = (0);
var G__35807 = (0);
seq__35128_35759 = G__35804;
chunk__35129_35760 = G__35805;
count__35130_35761 = G__35806;
i__35131_35762 = G__35807;
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
