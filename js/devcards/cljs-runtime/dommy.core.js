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
var seq__34712_35153 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34713_35154 = null;
var count__34714_35155 = (0);
var i__34715_35156 = (0);
while(true){
if((i__34715_35156 < count__34714_35155)){
var vec__34723_35158 = chunk__34713_35154.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35156);
var k_35159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723_35158,(0),null);
var v_35160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723_35158,(1),null);
style.setProperty(dommy.utils.as_str(k_35159),v_35160);


var G__35161 = seq__34712_35153;
var G__35162 = chunk__34713_35154;
var G__35163 = count__34714_35155;
var G__35164 = (i__34715_35156 + (1));
seq__34712_35153 = G__35161;
chunk__34713_35154 = G__35162;
count__34714_35155 = G__35163;
i__34715_35156 = G__35164;
continue;
} else {
var temp__5735__auto___35165 = cljs.core.seq(seq__34712_35153);
if(temp__5735__auto___35165){
var seq__34712_35166__$1 = temp__5735__auto___35165;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35166__$1)){
var c__4609__auto___35167 = cljs.core.chunk_first(seq__34712_35166__$1);
var G__35168 = cljs.core.chunk_rest(seq__34712_35166__$1);
var G__35169 = c__4609__auto___35167;
var G__35170 = cljs.core.count(c__4609__auto___35167);
var G__35171 = (0);
seq__34712_35153 = G__35168;
chunk__34713_35154 = G__35169;
count__34714_35155 = G__35170;
i__34715_35156 = G__35171;
continue;
} else {
var vec__34726_35172 = cljs.core.first(seq__34712_35166__$1);
var k_35173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34726_35172,(0),null);
var v_35174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34726_35172,(1),null);
style.setProperty(dommy.utils.as_str(k_35173),v_35174);


var G__35175 = cljs.core.next(seq__34712_35166__$1);
var G__35176 = null;
var G__35177 = (0);
var G__35178 = (0);
seq__34712_35153 = G__35175;
chunk__34713_35154 = G__35176;
count__34714_35155 = G__35177;
i__34715_35156 = G__35178;
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
var len__4789__auto___35179 = arguments.length;
var i__4790__auto___35180 = (0);
while(true){
if((i__4790__auto___35180 < len__4789__auto___35179)){
args__4795__auto__.push((arguments[i__4790__auto___35180]));

var G__35181 = (i__4790__auto___35180 + (1));
i__4790__auto___35180 = G__35181;
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
var seq__34731_35182 = cljs.core.seq(keywords);
var chunk__34732_35183 = null;
var count__34733_35184 = (0);
var i__34734_35185 = (0);
while(true){
if((i__34734_35185 < count__34733_35184)){
var kw_35186 = chunk__34732_35183.cljs$core$IIndexed$_nth$arity$2(null,i__34734_35185);
style.removeProperty(dommy.utils.as_str(kw_35186));


var G__35188 = seq__34731_35182;
var G__35189 = chunk__34732_35183;
var G__35190 = count__34733_35184;
var G__35191 = (i__34734_35185 + (1));
seq__34731_35182 = G__35188;
chunk__34732_35183 = G__35189;
count__34733_35184 = G__35190;
i__34734_35185 = G__35191;
continue;
} else {
var temp__5735__auto___35193 = cljs.core.seq(seq__34731_35182);
if(temp__5735__auto___35193){
var seq__34731_35194__$1 = temp__5735__auto___35193;
if(cljs.core.chunked_seq_QMARK_(seq__34731_35194__$1)){
var c__4609__auto___35195 = cljs.core.chunk_first(seq__34731_35194__$1);
var G__35196 = cljs.core.chunk_rest(seq__34731_35194__$1);
var G__35197 = c__4609__auto___35195;
var G__35198 = cljs.core.count(c__4609__auto___35195);
var G__35199 = (0);
seq__34731_35182 = G__35196;
chunk__34732_35183 = G__35197;
count__34733_35184 = G__35198;
i__34734_35185 = G__35199;
continue;
} else {
var kw_35200 = cljs.core.first(seq__34731_35194__$1);
style.removeProperty(dommy.utils.as_str(kw_35200));


var G__35201 = cljs.core.next(seq__34731_35194__$1);
var G__35202 = null;
var G__35203 = (0);
var G__35204 = (0);
seq__34731_35182 = G__35201;
chunk__34732_35183 = G__35202;
count__34733_35184 = G__35203;
i__34734_35185 = G__35204;
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
var len__4789__auto___35205 = arguments.length;
var i__4790__auto___35206 = (0);
while(true){
if((i__4790__auto___35206 < len__4789__auto___35205)){
args__4795__auto__.push((arguments[i__4790__auto___35206]));

var G__35207 = (i__4790__auto___35206 + (1));
i__4790__auto___35206 = G__35207;
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

var seq__34737_35210 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34738_35211 = null;
var count__34739_35212 = (0);
var i__34740_35213 = (0);
while(true){
if((i__34740_35213 < count__34739_35212)){
var vec__34747_35214 = chunk__34738_35211.cljs$core$IIndexed$_nth$arity$2(null,i__34740_35213);
var k_35215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35214,(0),null);
var v_35216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35214,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35215,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35216),"px"].join('')], 0));


var G__35217 = seq__34737_35210;
var G__35218 = chunk__34738_35211;
var G__35219 = count__34739_35212;
var G__35220 = (i__34740_35213 + (1));
seq__34737_35210 = G__35217;
chunk__34738_35211 = G__35218;
count__34739_35212 = G__35219;
i__34740_35213 = G__35220;
continue;
} else {
var temp__5735__auto___35221 = cljs.core.seq(seq__34737_35210);
if(temp__5735__auto___35221){
var seq__34737_35222__$1 = temp__5735__auto___35221;
if(cljs.core.chunked_seq_QMARK_(seq__34737_35222__$1)){
var c__4609__auto___35223 = cljs.core.chunk_first(seq__34737_35222__$1);
var G__35224 = cljs.core.chunk_rest(seq__34737_35222__$1);
var G__35225 = c__4609__auto___35223;
var G__35226 = cljs.core.count(c__4609__auto___35223);
var G__35227 = (0);
seq__34737_35210 = G__35224;
chunk__34738_35211 = G__35225;
count__34739_35212 = G__35226;
i__34740_35213 = G__35227;
continue;
} else {
var vec__34750_35228 = cljs.core.first(seq__34737_35222__$1);
var k_35229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35228,(0),null);
var v_35230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35228,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35229,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35230),"px"].join('')], 0));


var G__35231 = cljs.core.next(seq__34737_35222__$1);
var G__35232 = null;
var G__35233 = (0);
var G__35234 = (0);
seq__34737_35210 = G__35231;
chunk__34738_35211 = G__35232;
count__34739_35212 = G__35233;
i__34740_35213 = G__35234;
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
var len__4789__auto___35236 = arguments.length;
var i__4790__auto___35237 = (0);
while(true){
if((i__4790__auto___35237 < len__4789__auto___35236)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35237]));

var G__35238 = (i__4790__auto___35237 + (1));
i__4790__auto___35237 = G__35238;
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
var c_35323 = chunk__34799_35319.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35321);
var class_name_35324 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35324,c_35323))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35324 === ""))?c_35323:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35324)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35323)].join('')));
}


var G__35326 = seq__34798_35318;
var G__35327 = chunk__34799_35319;
var G__35328 = count__34800_35320;
var G__35329 = (i__34801_35321 + (1));
seq__34798_35318 = G__35326;
chunk__34799_35319 = G__35327;
count__34800_35320 = G__35328;
i__34801_35321 = G__35329;
continue;
} else {
var temp__5735__auto___35330 = cljs.core.seq(seq__34798_35318);
if(temp__5735__auto___35330){
var seq__34798_35331__$1 = temp__5735__auto___35330;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35331__$1)){
var c__4609__auto___35332 = cljs.core.chunk_first(seq__34798_35331__$1);
var G__35333 = cljs.core.chunk_rest(seq__34798_35331__$1);
var G__35334 = c__4609__auto___35332;
var G__35335 = cljs.core.count(c__4609__auto___35332);
var G__35336 = (0);
seq__34798_35318 = G__35333;
chunk__34799_35319 = G__35334;
count__34800_35320 = G__35335;
i__34801_35321 = G__35336;
continue;
} else {
var c_35337 = cljs.core.first(seq__34798_35331__$1);
var class_name_35338 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35338,c_35337))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35338 === ""))?c_35337:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35338)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35337)].join('')));
}


var G__35339 = cljs.core.next(seq__34798_35331__$1);
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
var c_35348 = chunk__34803_35344.cljs$core$IIndexed$_nth$arity$2(null,i__34805_35346);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35348);


var G__35349 = seq__34802_35343;
var G__35350 = chunk__34803_35344;
var G__35351 = count__34804_35345;
var G__35352 = (i__34805_35346 + (1));
seq__34802_35343 = G__35349;
chunk__34803_35344 = G__35350;
count__34804_35345 = G__35351;
i__34805_35346 = G__35352;
continue;
} else {
var temp__5735__auto___35353 = cljs.core.seq(seq__34802_35343);
if(temp__5735__auto___35353){
var seq__34802_35354__$1 = temp__5735__auto___35353;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35354__$1)){
var c__4609__auto___35356 = cljs.core.chunk_first(seq__34802_35354__$1);
var G__35358 = cljs.core.chunk_rest(seq__34802_35354__$1);
var G__35359 = c__4609__auto___35356;
var G__35360 = cljs.core.count(c__4609__auto___35356);
var G__35361 = (0);
seq__34802_35343 = G__35358;
chunk__34803_35344 = G__35359;
count__34804_35345 = G__35360;
i__34805_35346 = G__35361;
continue;
} else {
var c_35362 = cljs.core.first(seq__34802_35354__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35362);


var G__35364 = cljs.core.next(seq__34802_35354__$1);
var G__35365 = null;
var G__35366 = (0);
var G__35367 = (0);
seq__34802_35343 = G__35364;
chunk__34803_35344 = G__35365;
count__34804_35345 = G__35366;
i__34805_35346 = G__35367;
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
var G__34811 = arguments.length;
switch (G__34811) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35370 = arguments.length;
var i__4790__auto___35371 = (0);
while(true){
if((i__4790__auto___35371 < len__4789__auto___35370)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35371]));

var G__35376 = (i__4790__auto___35371 + (1));
i__4790__auto___35371 = G__35376;
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
var seq__34814 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34815 = null;
var count__34816 = (0);
var i__34817 = (0);
while(true){
if((i__34817 < count__34816)){
var c = chunk__34815.cljs$core$IIndexed$_nth$arity$2(null,i__34817);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35383 = seq__34814;
var G__35384 = chunk__34815;
var G__35385 = count__34816;
var G__35386 = (i__34817 + (1));
seq__34814 = G__35383;
chunk__34815 = G__35384;
count__34816 = G__35385;
i__34817 = G__35386;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34814);
if(temp__5735__auto__){
var seq__34814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34814__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34814__$1);
var G__35387 = cljs.core.chunk_rest(seq__34814__$1);
var G__35388 = c__4609__auto__;
var G__35389 = cljs.core.count(c__4609__auto__);
var G__35390 = (0);
seq__34814 = G__35387;
chunk__34815 = G__35388;
count__34816 = G__35389;
i__34817 = G__35390;
continue;
} else {
var c = cljs.core.first(seq__34814__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35391 = cljs.core.next(seq__34814__$1);
var G__35392 = null;
var G__35393 = (0);
var G__35394 = (0);
seq__34814 = G__35391;
chunk__34815 = G__35392;
count__34816 = G__35393;
i__34817 = G__35394;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34808){
var G__34809 = cljs.core.first(seq34808);
var seq34808__$1 = cljs.core.next(seq34808);
var G__34810 = cljs.core.first(seq34808__$1);
var seq34808__$2 = cljs.core.next(seq34808__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34809,G__34810,seq34808__$2);
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
var temp__5733__auto___35400 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35400)){
var class_list_35401 = temp__5733__auto___35400;
class_list_35401.toggle(c__$1);
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
var vec__34932_35480 = chunk__34870_35477.cljs$core$IIndexed$_nth$arity$2(null,i__34872_35479);
var orig_type_35481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34932_35480,(0),null);
var f_35482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34932_35480,(1),null);
var seq__34873_35483 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35481,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35481,cljs.core.identity])));
var chunk__34875_35484 = null;
var count__34876_35485 = (0);
var i__34877_35486 = (0);
while(true){
if((i__34877_35486 < count__34876_35485)){
var vec__34948_35487 = chunk__34875_35484.cljs$core$IIndexed$_nth$arity$2(null,i__34877_35486);
var actual_type_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34948_35487,(0),null);
var factory_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34948_35487,(1),null);
var canonical_f_35490 = (function (){var G__34952 = (factory_35489.cljs$core$IFn$_invoke$arity$1 ? factory_35489.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35489.call(null,f_35482));
var fexpr__34951 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34951.cljs$core$IFn$_invoke$arity$1 ? fexpr__34951.cljs$core$IFn$_invoke$arity$1(G__34952) : fexpr__34951.call(null,G__34952));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35488,f_35482], null),canonical_f_35490], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35488),canonical_f_35490);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35488),canonical_f_35490);
}


var G__35495 = seq__34873_35483;
var G__35496 = chunk__34875_35484;
var G__35497 = count__34876_35485;
var G__35498 = (i__34877_35486 + (1));
seq__34873_35483 = G__35495;
chunk__34875_35484 = G__35496;
count__34876_35485 = G__35497;
i__34877_35486 = G__35498;
continue;
} else {
var temp__5735__auto___35500 = cljs.core.seq(seq__34873_35483);
if(temp__5735__auto___35500){
var seq__34873_35501__$1 = temp__5735__auto___35500;
if(cljs.core.chunked_seq_QMARK_(seq__34873_35501__$1)){
var c__4609__auto___35503 = cljs.core.chunk_first(seq__34873_35501__$1);
var G__35504 = cljs.core.chunk_rest(seq__34873_35501__$1);
var G__35505 = c__4609__auto___35503;
var G__35506 = cljs.core.count(c__4609__auto___35503);
var G__35507 = (0);
seq__34873_35483 = G__35504;
chunk__34875_35484 = G__35505;
count__34876_35485 = G__35506;
i__34877_35486 = G__35507;
continue;
} else {
var vec__34957_35508 = cljs.core.first(seq__34873_35501__$1);
var actual_type_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34957_35508,(0),null);
var factory_35510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34957_35508,(1),null);
var canonical_f_35511 = (function (){var G__34961 = (factory_35510.cljs$core$IFn$_invoke$arity$1 ? factory_35510.cljs$core$IFn$_invoke$arity$1(f_35482) : factory_35510.call(null,f_35482));
var fexpr__34960 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34960.cljs$core$IFn$_invoke$arity$1 ? fexpr__34960.cljs$core$IFn$_invoke$arity$1(G__34961) : fexpr__34960.call(null,G__34961));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35509,f_35482], null),canonical_f_35511], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35509),canonical_f_35511);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35509),canonical_f_35511);
}


var G__35512 = cljs.core.next(seq__34873_35501__$1);
var G__35513 = null;
var G__35514 = (0);
var G__35515 = (0);
seq__34873_35483 = G__35512;
chunk__34875_35484 = G__35513;
count__34876_35485 = G__35514;
i__34877_35486 = G__35515;
continue;
}
} else {
}
}
break;
}

var G__35516 = seq__34863_35476;
var G__35517 = chunk__34870_35477;
var G__35518 = count__34871_35478;
var G__35519 = (i__34872_35479 + (1));
seq__34863_35476 = G__35516;
chunk__34870_35477 = G__35517;
count__34871_35478 = G__35518;
i__34872_35479 = G__35519;
continue;
} else {
var temp__5735__auto___35521 = cljs.core.seq(seq__34863_35476);
if(temp__5735__auto___35521){
var seq__34863_35524__$1 = temp__5735__auto___35521;
if(cljs.core.chunked_seq_QMARK_(seq__34863_35524__$1)){
var c__4609__auto___35525 = cljs.core.chunk_first(seq__34863_35524__$1);
var G__35527 = cljs.core.chunk_rest(seq__34863_35524__$1);
var G__35528 = c__4609__auto___35525;
var G__35529 = cljs.core.count(c__4609__auto___35525);
var G__35530 = (0);
seq__34863_35476 = G__35527;
chunk__34870_35477 = G__35528;
count__34871_35478 = G__35529;
i__34872_35479 = G__35530;
continue;
} else {
var vec__34962_35531 = cljs.core.first(seq__34863_35524__$1);
var orig_type_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35531,(0),null);
var f_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35531,(1),null);
var seq__34864_35534 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35532,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35532,cljs.core.identity])));
var chunk__34866_35535 = null;
var count__34867_35536 = (0);
var i__34868_35537 = (0);
while(true){
if((i__34868_35537 < count__34867_35536)){
var vec__34975_35540 = chunk__34866_35535.cljs$core$IIndexed$_nth$arity$2(null,i__34868_35537);
var actual_type_35541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35540,(0),null);
var factory_35542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35540,(1),null);
var canonical_f_35544 = (function (){var G__34979 = (factory_35542.cljs$core$IFn$_invoke$arity$1 ? factory_35542.cljs$core$IFn$_invoke$arity$1(f_35533) : factory_35542.call(null,f_35533));
var fexpr__34978 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35541,f_35533], null),canonical_f_35544], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35541),canonical_f_35544);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35541),canonical_f_35544);
}


var G__35545 = seq__34864_35534;
var G__35546 = chunk__34866_35535;
var G__35547 = count__34867_35536;
var G__35548 = (i__34868_35537 + (1));
seq__34864_35534 = G__35545;
chunk__34866_35535 = G__35546;
count__34867_35536 = G__35547;
i__34868_35537 = G__35548;
continue;
} else {
var temp__5735__auto___35551__$1 = cljs.core.seq(seq__34864_35534);
if(temp__5735__auto___35551__$1){
var seq__34864_35555__$1 = temp__5735__auto___35551__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34864_35555__$1)){
var c__4609__auto___35557 = cljs.core.chunk_first(seq__34864_35555__$1);
var G__35558 = cljs.core.chunk_rest(seq__34864_35555__$1);
var G__35559 = c__4609__auto___35557;
var G__35560 = cljs.core.count(c__4609__auto___35557);
var G__35561 = (0);
seq__34864_35534 = G__35558;
chunk__34866_35535 = G__35559;
count__34867_35536 = G__35560;
i__34868_35537 = G__35561;
continue;
} else {
var vec__34980_35563 = cljs.core.first(seq__34864_35555__$1);
var actual_type_35564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35563,(0),null);
var factory_35565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35563,(1),null);
var canonical_f_35566 = (function (){var G__34984 = (factory_35565.cljs$core$IFn$_invoke$arity$1 ? factory_35565.cljs$core$IFn$_invoke$arity$1(f_35533) : factory_35565.call(null,f_35533));
var fexpr__34983 = (cljs.core.truth_(selector_35475)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35474,selector_35475):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35474,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35475,actual_type_35564,f_35533], null),canonical_f_35566], 0));

if(cljs.core.truth_(elem_35474.addEventListener)){
elem_35474.addEventListener(cljs.core.name(actual_type_35564),canonical_f_35566);
} else {
elem_35474.attachEvent(cljs.core.name(actual_type_35564),canonical_f_35566);
}


var G__35571 = cljs.core.next(seq__34864_35555__$1);
var G__35572 = null;
var G__35573 = (0);
var G__35574 = (0);
seq__34864_35534 = G__35571;
chunk__34866_35535 = G__35572;
count__34867_35536 = G__35573;
i__34868_35537 = G__35574;
continue;
}
} else {
}
}
break;
}

var G__35575 = cljs.core.next(seq__34863_35524__$1);
var G__35576 = null;
var G__35577 = (0);
var G__35578 = (0);
seq__34863_35476 = G__35575;
chunk__34870_35477 = G__35576;
count__34871_35478 = G__35577;
i__34872_35479 = G__35578;
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
var len__4789__auto___35585 = arguments.length;
var i__4790__auto___35587 = (0);
while(true){
if((i__4790__auto___35587 < len__4789__auto___35585)){
args__4795__auto__.push((arguments[i__4790__auto___35587]));

var G__35588 = (i__4790__auto___35587 + (1));
i__4790__auto___35587 = G__35588;
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

var vec__34990_35593 = dommy.core.elem_and_selector(elem_sel);
var elem_35594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35593,(0),null);
var selector_35595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35593,(1),null);
var seq__34994_35597 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35001_35598 = null;
var count__35002_35599 = (0);
var i__35003_35600 = (0);
while(true){
if((i__35003_35600 < count__35002_35599)){
var vec__35073_35603 = chunk__35001_35598.cljs$core$IIndexed$_nth$arity$2(null,i__35003_35600);
var orig_type_35604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073_35603,(0),null);
var f_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073_35603,(1),null);
var seq__35004_35608 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35604,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35604,cljs.core.identity])));
var chunk__35006_35609 = null;
var count__35007_35610 = (0);
var i__35008_35611 = (0);
while(true){
if((i__35008_35611 < count__35007_35610)){
var vec__35099_35612 = chunk__35006_35609.cljs$core$IIndexed$_nth$arity$2(null,i__35008_35611);
var actual_type_35613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35099_35612,(0),null);
var __35614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35099_35612,(1),null);
var keys_35619 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35595,actual_type_35613,f_35606], null);
var canonical_f_35620 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35594),keys_35619);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35594,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35619], 0));

if(cljs.core.truth_(elem_35594.removeEventListener)){
elem_35594.removeEventListener(cljs.core.name(actual_type_35613),canonical_f_35620);
} else {
elem_35594.detachEvent(cljs.core.name(actual_type_35613),canonical_f_35620);
}


var G__35624 = seq__35004_35608;
var G__35625 = chunk__35006_35609;
var G__35626 = count__35007_35610;
var G__35627 = (i__35008_35611 + (1));
seq__35004_35608 = G__35624;
chunk__35006_35609 = G__35625;
count__35007_35610 = G__35626;
i__35008_35611 = G__35627;
continue;
} else {
var temp__5735__auto___35629 = cljs.core.seq(seq__35004_35608);
if(temp__5735__auto___35629){
var seq__35004_35630__$1 = temp__5735__auto___35629;
if(cljs.core.chunked_seq_QMARK_(seq__35004_35630__$1)){
var c__4609__auto___35631 = cljs.core.chunk_first(seq__35004_35630__$1);
var G__35632 = cljs.core.chunk_rest(seq__35004_35630__$1);
var G__35633 = c__4609__auto___35631;
var G__35634 = cljs.core.count(c__4609__auto___35631);
var G__35635 = (0);
seq__35004_35608 = G__35632;
chunk__35006_35609 = G__35633;
count__35007_35610 = G__35634;
i__35008_35611 = G__35635;
continue;
} else {
var vec__35102_35638 = cljs.core.first(seq__35004_35630__$1);
var actual_type_35639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102_35638,(0),null);
var __35640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102_35638,(1),null);
var keys_35642 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35595,actual_type_35639,f_35606], null);
var canonical_f_35643 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35594),keys_35642);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35594,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35642], 0));

if(cljs.core.truth_(elem_35594.removeEventListener)){
elem_35594.removeEventListener(cljs.core.name(actual_type_35639),canonical_f_35643);
} else {
elem_35594.detachEvent(cljs.core.name(actual_type_35639),canonical_f_35643);
}


var G__35647 = cljs.core.next(seq__35004_35630__$1);
var G__35648 = null;
var G__35649 = (0);
var G__35650 = (0);
seq__35004_35608 = G__35647;
chunk__35006_35609 = G__35648;
count__35007_35610 = G__35649;
i__35008_35611 = G__35650;
continue;
}
} else {
}
}
break;
}

var G__35652 = seq__34994_35597;
var G__35653 = chunk__35001_35598;
var G__35654 = count__35002_35599;
var G__35655 = (i__35003_35600 + (1));
seq__34994_35597 = G__35652;
chunk__35001_35598 = G__35653;
count__35002_35599 = G__35654;
i__35003_35600 = G__35655;
continue;
} else {
var temp__5735__auto___35658 = cljs.core.seq(seq__34994_35597);
if(temp__5735__auto___35658){
var seq__34994_35662__$1 = temp__5735__auto___35658;
if(cljs.core.chunked_seq_QMARK_(seq__34994_35662__$1)){
var c__4609__auto___35663 = cljs.core.chunk_first(seq__34994_35662__$1);
var G__35667 = cljs.core.chunk_rest(seq__34994_35662__$1);
var G__35668 = c__4609__auto___35663;
var G__35669 = cljs.core.count(c__4609__auto___35663);
var G__35670 = (0);
seq__34994_35597 = G__35667;
chunk__35001_35598 = G__35668;
count__35002_35599 = G__35669;
i__35003_35600 = G__35670;
continue;
} else {
var vec__35108_35673 = cljs.core.first(seq__34994_35662__$1);
var orig_type_35674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35673,(0),null);
var f_35675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35673,(1),null);
var seq__34995_35677 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35674,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35674,cljs.core.identity])));
var chunk__34997_35678 = null;
var count__34998_35679 = (0);
var i__34999_35680 = (0);
while(true){
if((i__34999_35680 < count__34998_35679)){
var vec__35118_35683 = chunk__34997_35678.cljs$core$IIndexed$_nth$arity$2(null,i__34999_35680);
var actual_type_35684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118_35683,(0),null);
var __35685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118_35683,(1),null);
var keys_35687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35595,actual_type_35684,f_35675], null);
var canonical_f_35688 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35594),keys_35687);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35594,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35687], 0));

if(cljs.core.truth_(elem_35594.removeEventListener)){
elem_35594.removeEventListener(cljs.core.name(actual_type_35684),canonical_f_35688);
} else {
elem_35594.detachEvent(cljs.core.name(actual_type_35684),canonical_f_35688);
}


var G__35692 = seq__34995_35677;
var G__35693 = chunk__34997_35678;
var G__35694 = count__34998_35679;
var G__35695 = (i__34999_35680 + (1));
seq__34995_35677 = G__35692;
chunk__34997_35678 = G__35693;
count__34998_35679 = G__35694;
i__34999_35680 = G__35695;
continue;
} else {
var temp__5735__auto___35696__$1 = cljs.core.seq(seq__34995_35677);
if(temp__5735__auto___35696__$1){
var seq__34995_35697__$1 = temp__5735__auto___35696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34995_35697__$1)){
var c__4609__auto___35699 = cljs.core.chunk_first(seq__34995_35697__$1);
var G__35701 = cljs.core.chunk_rest(seq__34995_35697__$1);
var G__35702 = c__4609__auto___35699;
var G__35703 = cljs.core.count(c__4609__auto___35699);
var G__35704 = (0);
seq__34995_35677 = G__35701;
chunk__34997_35678 = G__35702;
count__34998_35679 = G__35703;
i__34999_35680 = G__35704;
continue;
} else {
var vec__35122_35706 = cljs.core.first(seq__34995_35697__$1);
var actual_type_35707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35706,(0),null);
var __35708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35706,(1),null);
var keys_35711 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35595,actual_type_35707,f_35675], null);
var canonical_f_35712 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35594),keys_35711);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35594,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35711], 0));

if(cljs.core.truth_(elem_35594.removeEventListener)){
elem_35594.removeEventListener(cljs.core.name(actual_type_35707),canonical_f_35712);
} else {
elem_35594.detachEvent(cljs.core.name(actual_type_35707),canonical_f_35712);
}


var G__35716 = cljs.core.next(seq__34995_35697__$1);
var G__35717 = null;
var G__35718 = (0);
var G__35719 = (0);
seq__34995_35677 = G__35716;
chunk__34997_35678 = G__35717;
count__34998_35679 = G__35718;
i__34999_35680 = G__35719;
continue;
}
} else {
}
}
break;
}

var G__35721 = cljs.core.next(seq__34994_35662__$1);
var G__35722 = null;
var G__35723 = (0);
var G__35724 = (0);
seq__34994_35597 = G__35721;
chunk__35001_35598 = G__35722;
count__35002_35599 = G__35723;
i__35003_35600 = G__35724;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34988){
var G__34989 = cljs.core.first(seq34988);
var seq34988__$1 = cljs.core.next(seq34988);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34989,seq34988__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35728 = arguments.length;
var i__4790__auto___35729 = (0);
while(true){
if((i__4790__auto___35729 < len__4789__auto___35728)){
args__4795__auto__.push((arguments[i__4790__auto___35729]));

var G__35731 = (i__4790__auto___35729 + (1));
i__4790__auto___35729 = G__35731;
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

var vec__35127_35748 = dommy.core.elem_and_selector(elem_sel);
var elem_35751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127_35748,(0),null);
var selector_35753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127_35748,(1),null);
var seq__35130_35757 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35131_35758 = null;
var count__35132_35759 = (0);
var i__35133_35760 = (0);
while(true){
if((i__35133_35760 < count__35132_35759)){
var vec__35140_35762 = chunk__35131_35758.cljs$core$IIndexed$_nth$arity$2(null,i__35133_35760);
var type_35763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35762,(0),null);
var f_35764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35762,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35763,((function (seq__35130_35757,chunk__35131_35758,count__35132_35759,i__35133_35760,vec__35140_35762,type_35763,f_35764,vec__35127_35748,elem_35751,selector_35753){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35763,dommy$core$this_fn], 0));

return (f_35764.cljs$core$IFn$_invoke$arity$1 ? f_35764.cljs$core$IFn$_invoke$arity$1(e) : f_35764.call(null,e));
});})(seq__35130_35757,chunk__35131_35758,count__35132_35759,i__35133_35760,vec__35140_35762,type_35763,f_35764,vec__35127_35748,elem_35751,selector_35753))
], 0));


var G__35767 = seq__35130_35757;
var G__35768 = chunk__35131_35758;
var G__35769 = count__35132_35759;
var G__35770 = (i__35133_35760 + (1));
seq__35130_35757 = G__35767;
chunk__35131_35758 = G__35768;
count__35132_35759 = G__35769;
i__35133_35760 = G__35770;
continue;
} else {
var temp__5735__auto___35771 = cljs.core.seq(seq__35130_35757);
if(temp__5735__auto___35771){
var seq__35130_35772__$1 = temp__5735__auto___35771;
if(cljs.core.chunked_seq_QMARK_(seq__35130_35772__$1)){
var c__4609__auto___35773 = cljs.core.chunk_first(seq__35130_35772__$1);
var G__35775 = cljs.core.chunk_rest(seq__35130_35772__$1);
var G__35776 = c__4609__auto___35773;
var G__35777 = cljs.core.count(c__4609__auto___35773);
var G__35778 = (0);
seq__35130_35757 = G__35775;
chunk__35131_35758 = G__35776;
count__35132_35759 = G__35777;
i__35133_35760 = G__35778;
continue;
} else {
var vec__35143_35786 = cljs.core.first(seq__35130_35772__$1);
var type_35787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35786,(0),null);
var f_35788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35786,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35787,((function (seq__35130_35757,chunk__35131_35758,count__35132_35759,i__35133_35760,vec__35143_35786,type_35787,f_35788,seq__35130_35772__$1,temp__5735__auto___35771,vec__35127_35748,elem_35751,selector_35753){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35787,dommy$core$this_fn], 0));

return (f_35788.cljs$core$IFn$_invoke$arity$1 ? f_35788.cljs$core$IFn$_invoke$arity$1(e) : f_35788.call(null,e));
});})(seq__35130_35757,chunk__35131_35758,count__35132_35759,i__35133_35760,vec__35143_35786,type_35787,f_35788,seq__35130_35772__$1,temp__5735__auto___35771,vec__35127_35748,elem_35751,selector_35753))
], 0));


var G__35797 = cljs.core.next(seq__35130_35772__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35130_35757 = G__35797;
chunk__35131_35758 = G__35798;
count__35132_35759 = G__35799;
i__35133_35760 = G__35800;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35125){
var G__35126 = cljs.core.first(seq35125);
var seq35125__$1 = cljs.core.next(seq35125);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35126,seq35125__$1);
}));


//# sourceMappingURL=dommy.core.js.map
