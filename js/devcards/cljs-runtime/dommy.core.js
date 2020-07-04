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
var len__4789__auto___35202 = arguments.length;
var i__4790__auto___35203 = (0);
while(true){
if((i__4790__auto___35203 < len__4789__auto___35202)){
args__4795__auto__.push((arguments[i__4790__auto___35203]));

var G__35205 = (i__4790__auto___35203 + (1));
i__4790__auto___35203 = G__35205;
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

var seq__34761_35238 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35239 = null;
var count__34763_35240 = (0);
var i__34764_35241 = (0);
while(true){
if((i__34764_35241 < count__34763_35240)){
var vec__34771_35243 = chunk__34762_35239.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35241);
var k_35244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35243,(0),null);
var v_35245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35243,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35244__$1,v_35245__$1);


var G__35246 = seq__34761_35238;
var G__35247 = chunk__34762_35239;
var G__35248 = count__34763_35240;
var G__35249 = (i__34764_35241 + (1));
seq__34761_35238 = G__35246;
chunk__34762_35239 = G__35247;
count__34763_35240 = G__35248;
i__34764_35241 = G__35249;
continue;
} else {
var temp__5735__auto___35250 = cljs.core.seq(seq__34761_35238);
if(temp__5735__auto___35250){
var seq__34761_35251__$1 = temp__5735__auto___35250;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35251__$1)){
var c__4609__auto___35252 = cljs.core.chunk_first(seq__34761_35251__$1);
var G__35253 = cljs.core.chunk_rest(seq__34761_35251__$1);
var G__35254 = c__4609__auto___35252;
var G__35255 = cljs.core.count(c__4609__auto___35252);
var G__35256 = (0);
seq__34761_35238 = G__35253;
chunk__34762_35239 = G__35254;
count__34763_35240 = G__35255;
i__34764_35241 = G__35256;
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
seq__34761_35238 = G__35260;
chunk__34762_35239 = G__35261;
count__34763_35240 = G__35262;
i__34764_35241 = G__35263;
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
var seq__34803_35341 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34804_35342 = null;
var count__34805_35343 = (0);
var i__34806_35344 = (0);
while(true){
if((i__34806_35344 < count__34805_35343)){
var c_35345 = chunk__34804_35342.cljs$core$IIndexed$_nth$arity$2(null,i__34806_35344);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35345);


var G__35346 = seq__34803_35341;
var G__35347 = chunk__34804_35342;
var G__35348 = count__34805_35343;
var G__35349 = (i__34806_35344 + (1));
seq__34803_35341 = G__35346;
chunk__34804_35342 = G__35347;
count__34805_35343 = G__35348;
i__34806_35344 = G__35349;
continue;
} else {
var temp__5735__auto___35350 = cljs.core.seq(seq__34803_35341);
if(temp__5735__auto___35350){
var seq__34803_35351__$1 = temp__5735__auto___35350;
if(cljs.core.chunked_seq_QMARK_(seq__34803_35351__$1)){
var c__4609__auto___35352 = cljs.core.chunk_first(seq__34803_35351__$1);
var G__35353 = cljs.core.chunk_rest(seq__34803_35351__$1);
var G__35354 = c__4609__auto___35352;
var G__35355 = cljs.core.count(c__4609__auto___35352);
var G__35356 = (0);
seq__34803_35341 = G__35353;
chunk__34804_35342 = G__35354;
count__34805_35343 = G__35355;
i__34806_35344 = G__35356;
continue;
} else {
var c_35357 = cljs.core.first(seq__34803_35351__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35357);


var G__35358 = cljs.core.next(seq__34803_35351__$1);
var G__35359 = null;
var G__35360 = (0);
var G__35361 = (0);
seq__34803_35341 = G__35358;
chunk__34804_35342 = G__35359;
count__34805_35343 = G__35360;
i__34806_35344 = G__35361;
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
var temp__5733__auto___35368 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35368)){
var class_list_35369 = temp__5733__auto___35368;
class_list_35369.remove(c__$1);
} else {
var class_name_35370 = dommy.core.class$(elem);
var new_class_name_35371 = dommy.utils.remove_class_str(class_name_35370,c__$1);
if((class_name_35370 === new_class_name_35371)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35371);
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


var G__35373 = seq__34814;
var G__35374 = chunk__34815;
var G__35375 = count__34816;
var G__35376 = (i__34817 + (1));
seq__34814 = G__35373;
chunk__34815 = G__35374;
count__34816 = G__35375;
i__34817 = G__35376;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34814);
if(temp__5735__auto__){
var seq__34814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34814__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34814__$1);
var G__35377 = cljs.core.chunk_rest(seq__34814__$1);
var G__35378 = c__4609__auto__;
var G__35379 = cljs.core.count(c__4609__auto__);
var G__35380 = (0);
seq__34814 = G__35377;
chunk__34815 = G__35378;
count__34816 = G__35379;
i__34817 = G__35380;
continue;
} else {
var c = cljs.core.first(seq__34814__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35383 = cljs.core.next(seq__34814__$1);
var G__35384 = null;
var G__35385 = (0);
var G__35386 = (0);
seq__34814 = G__35383;
chunk__34815 = G__35384;
count__34816 = G__35385;
i__34817 = G__35386;
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
var temp__5733__auto___35389 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35389)){
var class_list_35390 = temp__5733__auto___35389;
class_list_35390.toggle(c__$1);
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
var len__4789__auto___35405 = arguments.length;
var i__4790__auto___35406 = (0);
while(true){
if((i__4790__auto___35406 < len__4789__auto___35405)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35406]));

var G__35407 = (i__4790__auto___35406 + (1));
i__4790__auto___35406 = G__35407;
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
var seq__34830_35413 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34831_35414 = null;
var count__34832_35415 = (0);
var i__34833_35416 = (0);
while(true){
if((i__34833_35416 < count__34832_35415)){
var c_35417 = chunk__34831_35414.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35416);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35417);


var G__35418 = seq__34830_35413;
var G__35419 = chunk__34831_35414;
var G__35420 = count__34832_35415;
var G__35421 = (i__34833_35416 + (1));
seq__34830_35413 = G__35418;
chunk__34831_35414 = G__35419;
count__34832_35415 = G__35420;
i__34833_35416 = G__35421;
continue;
} else {
var temp__5735__auto___35422 = cljs.core.seq(seq__34830_35413);
if(temp__5735__auto___35422){
var seq__34830_35423__$1 = temp__5735__auto___35422;
if(cljs.core.chunked_seq_QMARK_(seq__34830_35423__$1)){
var c__4609__auto___35425 = cljs.core.chunk_first(seq__34830_35423__$1);
var G__35426 = cljs.core.chunk_rest(seq__34830_35423__$1);
var G__35427 = c__4609__auto___35425;
var G__35428 = cljs.core.count(c__4609__auto___35425);
var G__35429 = (0);
seq__34830_35413 = G__35426;
chunk__34831_35414 = G__35427;
count__34832_35415 = G__35428;
i__34833_35416 = G__35429;
continue;
} else {
var c_35434 = cljs.core.first(seq__34830_35423__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35434);


var G__35435 = cljs.core.next(seq__34830_35423__$1);
var G__35436 = null;
var G__35437 = (0);
var G__35438 = (0);
seq__34830_35413 = G__35435;
chunk__34831_35414 = G__35436;
count__34832_35415 = G__35437;
i__34833_35416 = G__35438;
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
var G__34849 = p;
G__34849.removeChild(elem);

return G__34849;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34850){
var vec__34851 = p__34850;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(1),null);
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34854){
var G__34855 = cljs.core.first(seq34854);
var seq34854__$1 = cljs.core.next(seq34854);
var G__34856 = cljs.core.first(seq34854__$1);
var seq34854__$2 = cljs.core.next(seq34854__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34855,G__34856,seq34854__$2);
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
var vec__34953_35502 = cljs.core.first(seq__34873_35496__$1);
var actual_type_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34953_35502,(0),null);
var factory_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34953_35502,(1),null);
var canonical_f_35505 = (function (){var G__34957 = (factory_35504.cljs$core$IFn$_invoke$arity$1 ? factory_35504.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35504.call(null,f_35482));
var fexpr__34956 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34956.cljs$core$IFn$_invoke$arity$1 ? fexpr__34956.cljs$core$IFn$_invoke$arity$1(G__34957) : fexpr__34956.call(null,G__34957));
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
var vec__34962_35521 = cljs.core.first(seq__34863_35515__$1);
var orig_type_35522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35521,(0),null);
var f_35523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35521,(1),null);
var seq__34864_35524 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35522,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35522,cljs.core.identity])));
var chunk__34866_35525 = null;
var count__34867_35526 = (0);
var i__34868_35527 = (0);
while(true){
if((i__34868_35527 < count__34867_35526)){
var vec__34975_35530 = chunk__34866_35525.cljs$core$IIndexed$_nth$arity$2(null,i__34868_35527);
var actual_type_35531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35530,(0),null);
var factory_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35530,(1),null);
var canonical_f_35533 = (function (){var G__34979 = (factory_35532.cljs$core$IFn$_invoke$arity$1 ? factory_35532.cljs$core$IFn$_invoke$arity$1(f_35523) : factory_35532.call(null,f_35523));
var fexpr__34978 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35531,f_35523], null),canonical_f_35533], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35531),canonical_f_35533);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35531),canonical_f_35533);
}


var G__35538 = seq__34864_35524;
var G__35539 = chunk__34866_35525;
var G__35540 = count__34867_35526;
var G__35541 = (i__34868_35527 + (1));
seq__34864_35524 = G__35538;
chunk__34866_35525 = G__35539;
count__34867_35526 = G__35540;
i__34868_35527 = G__35541;
continue;
} else {
var temp__5735__auto___35542__$1 = cljs.core.seq(seq__34864_35524);
if(temp__5735__auto___35542__$1){
var seq__34864_35543__$1 = temp__5735__auto___35542__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34864_35543__$1)){
var c__4609__auto___35544 = cljs.core.chunk_first(seq__34864_35543__$1);
var G__35545 = cljs.core.chunk_rest(seq__34864_35543__$1);
var G__35546 = c__4609__auto___35544;
var G__35547 = cljs.core.count(c__4609__auto___35544);
var G__35548 = (0);
seq__34864_35524 = G__35545;
chunk__34866_35525 = G__35546;
count__34867_35526 = G__35547;
i__34868_35527 = G__35548;
continue;
} else {
var vec__34980_35549 = cljs.core.first(seq__34864_35543__$1);
var actual_type_35550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35549,(0),null);
var factory_35551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35549,(1),null);
var canonical_f_35552 = (function (){var G__34984 = (factory_35551.cljs$core$IFn$_invoke$arity$1 ? factory_35551.cljs$core$IFn$_invoke$arity$1(f_35523) : factory_35551.call(null,f_35523));
var fexpr__34983 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35550,f_35523], null),canonical_f_35552], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35550),canonical_f_35552);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35550),canonical_f_35552);
}


var G__35556 = cljs.core.next(seq__34864_35543__$1);
var G__35557 = null;
var G__35558 = (0);
var G__35559 = (0);
seq__34864_35524 = G__35556;
chunk__34866_35525 = G__35557;
count__34867_35526 = G__35558;
i__34868_35527 = G__35559;
continue;
}
} else {
}
}
break;
}

var G__35561 = cljs.core.next(seq__34863_35515__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__34863_35476 = G__35561;
chunk__34870_35477 = G__35562;
count__34871_35478 = G__35563;
i__34872_35479 = G__35564;
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
var len__4789__auto___35568 = arguments.length;
var i__4790__auto___35569 = (0);
while(true){
if((i__4790__auto___35569 < len__4789__auto___35568)){
args__4795__auto__.push((arguments[i__4790__auto___35569]));

var G__35570 = (i__4790__auto___35569 + (1));
i__4790__auto___35569 = G__35570;
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

var vec__34987_35571 = dommy.core.elem_and_selector(elem_sel);
var elem_35572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35571,(0),null);
var selector_35573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35571,(1),null);
var seq__34991_35574 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34998_35575 = null;
var count__34999_35576 = (0);
var i__35000_35577 = (0);
while(true){
if((i__35000_35577 < count__34999_35576)){
var vec__35047_35584 = chunk__34998_35575.cljs$core$IIndexed$_nth$arity$2(null,i__35000_35577);
var orig_type_35585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35047_35584,(0),null);
var f_35586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35047_35584,(1),null);
var seq__35001_35588 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35585,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35585,cljs.core.identity])));
var chunk__35003_35589 = null;
var count__35004_35590 = (0);
var i__35005_35591 = (0);
while(true){
if((i__35005_35591 < count__35004_35590)){
var vec__35077_35592 = chunk__35003_35589.cljs$core$IIndexed$_nth$arity$2(null,i__35005_35591);
var actual_type_35593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35592,(0),null);
var __35594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35592,(1),null);
var keys_35597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35573,actual_type_35593,f_35586], null);
var canonical_f_35598 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35572),keys_35597);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35572,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35597], 0));

if(cljs.core.truth_(elem_35572.removeEventListener)){
elem_35572.removeEventListener(cljs.core.name(actual_type_35593),canonical_f_35598);
} else {
elem_35572.detachEvent(cljs.core.name(actual_type_35593),canonical_f_35598);
}


var G__35601 = seq__35001_35588;
var G__35602 = chunk__35003_35589;
var G__35603 = count__35004_35590;
var G__35604 = (i__35005_35591 + (1));
seq__35001_35588 = G__35601;
chunk__35003_35589 = G__35602;
count__35004_35590 = G__35603;
i__35005_35591 = G__35604;
continue;
} else {
var temp__5735__auto___35605 = cljs.core.seq(seq__35001_35588);
if(temp__5735__auto___35605){
var seq__35001_35606__$1 = temp__5735__auto___35605;
if(cljs.core.chunked_seq_QMARK_(seq__35001_35606__$1)){
var c__4609__auto___35609 = cljs.core.chunk_first(seq__35001_35606__$1);
var G__35613 = cljs.core.chunk_rest(seq__35001_35606__$1);
var G__35614 = c__4609__auto___35609;
var G__35615 = cljs.core.count(c__4609__auto___35609);
var G__35616 = (0);
seq__35001_35588 = G__35613;
chunk__35003_35589 = G__35614;
count__35004_35590 = G__35615;
i__35005_35591 = G__35616;
continue;
} else {
var vec__35080_35618 = cljs.core.first(seq__35001_35606__$1);
var actual_type_35619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35618,(0),null);
var __35620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35618,(1),null);
var keys_35622 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35573,actual_type_35619,f_35586], null);
var canonical_f_35623 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35572),keys_35622);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35572,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35622], 0));

if(cljs.core.truth_(elem_35572.removeEventListener)){
elem_35572.removeEventListener(cljs.core.name(actual_type_35619),canonical_f_35623);
} else {
elem_35572.detachEvent(cljs.core.name(actual_type_35619),canonical_f_35623);
}


var G__35626 = cljs.core.next(seq__35001_35606__$1);
var G__35627 = null;
var G__35628 = (0);
var G__35629 = (0);
seq__35001_35588 = G__35626;
chunk__35003_35589 = G__35627;
count__35004_35590 = G__35628;
i__35005_35591 = G__35629;
continue;
}
} else {
}
}
break;
}

var G__35632 = seq__34991_35574;
var G__35633 = chunk__34998_35575;
var G__35634 = count__34999_35576;
var G__35635 = (i__35000_35577 + (1));
seq__34991_35574 = G__35632;
chunk__34998_35575 = G__35633;
count__34999_35576 = G__35634;
i__35000_35577 = G__35635;
continue;
} else {
var temp__5735__auto___35636 = cljs.core.seq(seq__34991_35574);
if(temp__5735__auto___35636){
var seq__34991_35638__$1 = temp__5735__auto___35636;
if(cljs.core.chunked_seq_QMARK_(seq__34991_35638__$1)){
var c__4609__auto___35639 = cljs.core.chunk_first(seq__34991_35638__$1);
var G__35640 = cljs.core.chunk_rest(seq__34991_35638__$1);
var G__35641 = c__4609__auto___35639;
var G__35642 = cljs.core.count(c__4609__auto___35639);
var G__35643 = (0);
seq__34991_35574 = G__35640;
chunk__34998_35575 = G__35641;
count__34999_35576 = G__35642;
i__35000_35577 = G__35643;
continue;
} else {
var vec__35089_35644 = cljs.core.first(seq__34991_35638__$1);
var orig_type_35645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35089_35644,(0),null);
var f_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35089_35644,(1),null);
var seq__34992_35650 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35645,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35645,cljs.core.identity])));
var chunk__34994_35651 = null;
var count__34995_35652 = (0);
var i__34996_35653 = (0);
while(true){
if((i__34996_35653 < count__34995_35652)){
var vec__35114_35655 = chunk__34994_35651.cljs$core$IIndexed$_nth$arity$2(null,i__34996_35653);
var actual_type_35656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35114_35655,(0),null);
var __35657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35114_35655,(1),null);
var keys_35660 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35573,actual_type_35656,f_35646], null);
var canonical_f_35661 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35572),keys_35660);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35572,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35660], 0));

if(cljs.core.truth_(elem_35572.removeEventListener)){
elem_35572.removeEventListener(cljs.core.name(actual_type_35656),canonical_f_35661);
} else {
elem_35572.detachEvent(cljs.core.name(actual_type_35656),canonical_f_35661);
}


var G__35665 = seq__34992_35650;
var G__35666 = chunk__34994_35651;
var G__35667 = count__34995_35652;
var G__35668 = (i__34996_35653 + (1));
seq__34992_35650 = G__35665;
chunk__34994_35651 = G__35666;
count__34995_35652 = G__35667;
i__34996_35653 = G__35668;
continue;
} else {
var temp__5735__auto___35669__$1 = cljs.core.seq(seq__34992_35650);
if(temp__5735__auto___35669__$1){
var seq__34992_35672__$1 = temp__5735__auto___35669__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34992_35672__$1)){
var c__4609__auto___35674 = cljs.core.chunk_first(seq__34992_35672__$1);
var G__35675 = cljs.core.chunk_rest(seq__34992_35672__$1);
var G__35676 = c__4609__auto___35674;
var G__35677 = cljs.core.count(c__4609__auto___35674);
var G__35678 = (0);
seq__34992_35650 = G__35675;
chunk__34994_35651 = G__35676;
count__34995_35652 = G__35677;
i__34996_35653 = G__35678;
continue;
} else {
var vec__35117_35679 = cljs.core.first(seq__34992_35672__$1);
var actual_type_35680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35679,(0),null);
var __35681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35679,(1),null);
var keys_35684 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35573,actual_type_35680,f_35646], null);
var canonical_f_35685 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35572),keys_35684);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35572,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35684], 0));

if(cljs.core.truth_(elem_35572.removeEventListener)){
elem_35572.removeEventListener(cljs.core.name(actual_type_35680),canonical_f_35685);
} else {
elem_35572.detachEvent(cljs.core.name(actual_type_35680),canonical_f_35685);
}


var G__35687 = cljs.core.next(seq__34992_35672__$1);
var G__35688 = null;
var G__35689 = (0);
var G__35690 = (0);
seq__34992_35650 = G__35687;
chunk__34994_35651 = G__35688;
count__34995_35652 = G__35689;
i__34996_35653 = G__35690;
continue;
}
} else {
}
}
break;
}

var G__35694 = cljs.core.next(seq__34991_35638__$1);
var G__35695 = null;
var G__35696 = (0);
var G__35697 = (0);
seq__34991_35574 = G__35694;
chunk__34998_35575 = G__35695;
count__34999_35576 = G__35696;
i__35000_35577 = G__35697;
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
var len__4789__auto___35704 = arguments.length;
var i__4790__auto___35705 = (0);
while(true){
if((i__4790__auto___35705 < len__4789__auto___35704)){
args__4795__auto__.push((arguments[i__4790__auto___35705]));

var G__35709 = (i__4790__auto___35705 + (1));
i__4790__auto___35705 = G__35709;
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

var vec__35125_35713 = dommy.core.elem_and_selector(elem_sel);
var elem_35714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125_35713,(0),null);
var selector_35715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125_35713,(1),null);
var seq__35129_35719 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35130_35720 = null;
var count__35131_35721 = (0);
var i__35132_35722 = (0);
while(true){
if((i__35132_35722 < count__35131_35721)){
var vec__35140_35723 = chunk__35130_35720.cljs$core$IIndexed$_nth$arity$2(null,i__35132_35722);
var type_35724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35723,(0),null);
var f_35725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35723,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35724,((function (seq__35129_35719,chunk__35130_35720,count__35131_35721,i__35132_35722,vec__35140_35723,type_35724,f_35725,vec__35125_35713,elem_35714,selector_35715){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35724,dommy$core$this_fn], 0));

return (f_35725.cljs$core$IFn$_invoke$arity$1 ? f_35725.cljs$core$IFn$_invoke$arity$1(e) : f_35725.call(null,e));
});})(seq__35129_35719,chunk__35130_35720,count__35131_35721,i__35132_35722,vec__35140_35723,type_35724,f_35725,vec__35125_35713,elem_35714,selector_35715))
], 0));


var G__35731 = seq__35129_35719;
var G__35732 = chunk__35130_35720;
var G__35733 = count__35131_35721;
var G__35734 = (i__35132_35722 + (1));
seq__35129_35719 = G__35731;
chunk__35130_35720 = G__35732;
count__35131_35721 = G__35733;
i__35132_35722 = G__35734;
continue;
} else {
var temp__5735__auto___35736 = cljs.core.seq(seq__35129_35719);
if(temp__5735__auto___35736){
var seq__35129_35737__$1 = temp__5735__auto___35736;
if(cljs.core.chunked_seq_QMARK_(seq__35129_35737__$1)){
var c__4609__auto___35738 = cljs.core.chunk_first(seq__35129_35737__$1);
var G__35740 = cljs.core.chunk_rest(seq__35129_35737__$1);
var G__35741 = c__4609__auto___35738;
var G__35742 = cljs.core.count(c__4609__auto___35738);
var G__35743 = (0);
seq__35129_35719 = G__35740;
chunk__35130_35720 = G__35741;
count__35131_35721 = G__35742;
i__35132_35722 = G__35743;
continue;
} else {
var vec__35143_35746 = cljs.core.first(seq__35129_35737__$1);
var type_35747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35746,(0),null);
var f_35748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35746,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35747,((function (seq__35129_35719,chunk__35130_35720,count__35131_35721,i__35132_35722,vec__35143_35746,type_35747,f_35748,seq__35129_35737__$1,temp__5735__auto___35736,vec__35125_35713,elem_35714,selector_35715){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35747,dommy$core$this_fn], 0));

return (f_35748.cljs$core$IFn$_invoke$arity$1 ? f_35748.cljs$core$IFn$_invoke$arity$1(e) : f_35748.call(null,e));
});})(seq__35129_35719,chunk__35130_35720,count__35131_35721,i__35132_35722,vec__35143_35746,type_35747,f_35748,seq__35129_35737__$1,temp__5735__auto___35736,vec__35125_35713,elem_35714,selector_35715))
], 0));


var G__35752 = cljs.core.next(seq__35129_35737__$1);
var G__35753 = null;
var G__35754 = (0);
var G__35755 = (0);
seq__35129_35719 = G__35752;
chunk__35130_35720 = G__35753;
count__35131_35721 = G__35754;
i__35132_35722 = G__35755;
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
