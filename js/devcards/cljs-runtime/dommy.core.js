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
var len__4789__auto___35151 = arguments.length;
var i__4790__auto___35152 = (0);
while(true){
if((i__4790__auto___35152 < len__4789__auto___35151)){
args__4795__auto__.push((arguments[i__4790__auto___35152]));

var G__35153 = (i__4790__auto___35152 + (1));
i__4790__auto___35152 = G__35153;
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
var seq__34712_35154 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34713_35155 = null;
var count__34714_35156 = (0);
var i__34715_35157 = (0);
while(true){
if((i__34715_35157 < count__34714_35156)){
var vec__34722_35158 = chunk__34713_35155.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35157);
var k_35159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35158,(0),null);
var v_35160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35158,(1),null);
style.setProperty(dommy.utils.as_str(k_35159),v_35160);


var G__35161 = seq__34712_35154;
var G__35162 = chunk__34713_35155;
var G__35163 = count__34714_35156;
var G__35164 = (i__34715_35157 + (1));
seq__34712_35154 = G__35161;
chunk__34713_35155 = G__35162;
count__34714_35156 = G__35163;
i__34715_35157 = G__35164;
continue;
} else {
var temp__5735__auto___35165 = cljs.core.seq(seq__34712_35154);
if(temp__5735__auto___35165){
var seq__34712_35166__$1 = temp__5735__auto___35165;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35166__$1)){
var c__4609__auto___35167 = cljs.core.chunk_first(seq__34712_35166__$1);
var G__35168 = cljs.core.chunk_rest(seq__34712_35166__$1);
var G__35169 = c__4609__auto___35167;
var G__35170 = cljs.core.count(c__4609__auto___35167);
var G__35171 = (0);
seq__34712_35154 = G__35168;
chunk__34713_35155 = G__35169;
count__34714_35156 = G__35170;
i__34715_35157 = G__35171;
continue;
} else {
var vec__34725_35172 = cljs.core.first(seq__34712_35166__$1);
var k_35173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35172,(0),null);
var v_35174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35172,(1),null);
style.setProperty(dommy.utils.as_str(k_35173),v_35174);


var G__35175 = cljs.core.next(seq__34712_35166__$1);
var G__35176 = null;
var G__35177 = (0);
var G__35178 = (0);
seq__34712_35154 = G__35175;
chunk__34713_35155 = G__35176;
count__34714_35156 = G__35177;
i__34715_35157 = G__35178;
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
var len__4789__auto___35180 = arguments.length;
var i__4790__auto___35181 = (0);
while(true){
if((i__4790__auto___35181 < len__4789__auto___35180)){
args__4795__auto__.push((arguments[i__4790__auto___35181]));

var G__35183 = (i__4790__auto___35181 + (1));
i__4790__auto___35181 = G__35183;
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
var seq__34730_35184 = cljs.core.seq(keywords);
var chunk__34731_35185 = null;
var count__34732_35186 = (0);
var i__34733_35187 = (0);
while(true){
if((i__34733_35187 < count__34732_35186)){
var kw_35188 = chunk__34731_35185.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35187);
style.removeProperty(dommy.utils.as_str(kw_35188));


var G__35189 = seq__34730_35184;
var G__35190 = chunk__34731_35185;
var G__35191 = count__34732_35186;
var G__35192 = (i__34733_35187 + (1));
seq__34730_35184 = G__35189;
chunk__34731_35185 = G__35190;
count__34732_35186 = G__35191;
i__34733_35187 = G__35192;
continue;
} else {
var temp__5735__auto___35193 = cljs.core.seq(seq__34730_35184);
if(temp__5735__auto___35193){
var seq__34730_35194__$1 = temp__5735__auto___35193;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35194__$1)){
var c__4609__auto___35195 = cljs.core.chunk_first(seq__34730_35194__$1);
var G__35196 = cljs.core.chunk_rest(seq__34730_35194__$1);
var G__35197 = c__4609__auto___35195;
var G__35198 = cljs.core.count(c__4609__auto___35195);
var G__35199 = (0);
seq__34730_35184 = G__35196;
chunk__34731_35185 = G__35197;
count__34732_35186 = G__35198;
i__34733_35187 = G__35199;
continue;
} else {
var kw_35202 = cljs.core.first(seq__34730_35194__$1);
style.removeProperty(dommy.utils.as_str(kw_35202));


var G__35203 = cljs.core.next(seq__34730_35194__$1);
var G__35204 = null;
var G__35205 = (0);
var G__35206 = (0);
seq__34730_35184 = G__35203;
chunk__34731_35185 = G__35204;
count__34732_35186 = G__35205;
i__34733_35187 = G__35206;
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
var len__4789__auto___35207 = arguments.length;
var i__4790__auto___35208 = (0);
while(true){
if((i__4790__auto___35208 < len__4789__auto___35207)){
args__4795__auto__.push((arguments[i__4790__auto___35208]));

var G__35209 = (i__4790__auto___35208 + (1));
i__4790__auto___35208 = G__35209;
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

var seq__34736_35210 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34737_35211 = null;
var count__34738_35212 = (0);
var i__34739_35213 = (0);
while(true){
if((i__34739_35213 < count__34738_35212)){
var vec__34747_35214 = chunk__34737_35211.cljs$core$IIndexed$_nth$arity$2(null,i__34739_35213);
var k_35215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35214,(0),null);
var v_35216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35214,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35215,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35216),"px"].join('')], 0));


var G__35217 = seq__34736_35210;
var G__35218 = chunk__34737_35211;
var G__35219 = count__34738_35212;
var G__35220 = (i__34739_35213 + (1));
seq__34736_35210 = G__35217;
chunk__34737_35211 = G__35218;
count__34738_35212 = G__35219;
i__34739_35213 = G__35220;
continue;
} else {
var temp__5735__auto___35221 = cljs.core.seq(seq__34736_35210);
if(temp__5735__auto___35221){
var seq__34736_35222__$1 = temp__5735__auto___35221;
if(cljs.core.chunked_seq_QMARK_(seq__34736_35222__$1)){
var c__4609__auto___35223 = cljs.core.chunk_first(seq__34736_35222__$1);
var G__35224 = cljs.core.chunk_rest(seq__34736_35222__$1);
var G__35225 = c__4609__auto___35223;
var G__35226 = cljs.core.count(c__4609__auto___35223);
var G__35227 = (0);
seq__34736_35210 = G__35224;
chunk__34737_35211 = G__35225;
count__34738_35212 = G__35226;
i__34739_35213 = G__35227;
continue;
} else {
var vec__34750_35228 = cljs.core.first(seq__34736_35222__$1);
var k_35229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35228,(0),null);
var v_35230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35228,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35229,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35230),"px"].join('')], 0));


var G__35231 = cljs.core.next(seq__34736_35222__$1);
var G__35232 = null;
var G__35233 = (0);
var G__35234 = (0);
seq__34736_35210 = G__35231;
chunk__34737_35211 = G__35232;
count__34738_35212 = G__35233;
i__34739_35213 = G__35234;
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
var len__4789__auto___35294 = arguments.length;
var i__4790__auto___35295 = (0);
while(true){
if((i__4790__auto___35295 < len__4789__auto___35294)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35295]));

var G__35296 = (i__4790__auto___35295 + (1));
i__4790__auto___35295 = G__35296;
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
var temp__5733__auto___35299 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35299)){
var class_list_35300 = temp__5733__auto___35299;
var seq__34794_35302 = cljs.core.seq(classes__$1);
var chunk__34795_35303 = null;
var count__34796_35304 = (0);
var i__34797_35305 = (0);
while(true){
if((i__34797_35305 < count__34796_35304)){
var c_35306 = chunk__34795_35303.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35305);
class_list_35300.add(c_35306);


var G__35308 = seq__34794_35302;
var G__35309 = chunk__34795_35303;
var G__35310 = count__34796_35304;
var G__35311 = (i__34797_35305 + (1));
seq__34794_35302 = G__35308;
chunk__34795_35303 = G__35309;
count__34796_35304 = G__35310;
i__34797_35305 = G__35311;
continue;
} else {
var temp__5735__auto___35312 = cljs.core.seq(seq__34794_35302);
if(temp__5735__auto___35312){
var seq__34794_35313__$1 = temp__5735__auto___35312;
if(cljs.core.chunked_seq_QMARK_(seq__34794_35313__$1)){
var c__4609__auto___35314 = cljs.core.chunk_first(seq__34794_35313__$1);
var G__35315 = cljs.core.chunk_rest(seq__34794_35313__$1);
var G__35316 = c__4609__auto___35314;
var G__35317 = cljs.core.count(c__4609__auto___35314);
var G__35318 = (0);
seq__34794_35302 = G__35315;
chunk__34795_35303 = G__35316;
count__34796_35304 = G__35317;
i__34797_35305 = G__35318;
continue;
} else {
var c_35319 = cljs.core.first(seq__34794_35313__$1);
class_list_35300.add(c_35319);


var G__35320 = cljs.core.next(seq__34794_35313__$1);
var G__35321 = null;
var G__35322 = (0);
var G__35323 = (0);
seq__34794_35302 = G__35320;
chunk__34795_35303 = G__35321;
count__34796_35304 = G__35322;
i__34797_35305 = G__35323;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34798_35325 = cljs.core.seq(classes__$1);
var chunk__34799_35326 = null;
var count__34800_35327 = (0);
var i__34801_35328 = (0);
while(true){
if((i__34801_35328 < count__34800_35327)){
var c_35333 = chunk__34799_35326.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35328);
var class_name_35334 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35334,c_35333))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35334 === ""))?c_35333:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35334)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35333)].join('')));
}


var G__35335 = seq__34798_35325;
var G__35336 = chunk__34799_35326;
var G__35337 = count__34800_35327;
var G__35338 = (i__34801_35328 + (1));
seq__34798_35325 = G__35335;
chunk__34799_35326 = G__35336;
count__34800_35327 = G__35337;
i__34801_35328 = G__35338;
continue;
} else {
var temp__5735__auto___35339 = cljs.core.seq(seq__34798_35325);
if(temp__5735__auto___35339){
var seq__34798_35341__$1 = temp__5735__auto___35339;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35341__$1)){
var c__4609__auto___35342 = cljs.core.chunk_first(seq__34798_35341__$1);
var G__35344 = cljs.core.chunk_rest(seq__34798_35341__$1);
var G__35345 = c__4609__auto___35342;
var G__35346 = cljs.core.count(c__4609__auto___35342);
var G__35347 = (0);
seq__34798_35325 = G__35344;
chunk__34799_35326 = G__35345;
count__34800_35327 = G__35346;
i__34801_35328 = G__35347;
continue;
} else {
var c_35348 = cljs.core.first(seq__34798_35341__$1);
var class_name_35349 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35349,c_35348))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35349 === ""))?c_35348:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35349)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35348)].join('')));
}


var G__35350 = cljs.core.next(seq__34798_35341__$1);
var G__35351 = null;
var G__35352 = (0);
var G__35353 = (0);
seq__34798_35325 = G__35350;
chunk__34799_35326 = G__35351;
count__34800_35327 = G__35352;
i__34801_35328 = G__35353;
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
var seq__34802_35354 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34803_35355 = null;
var count__34804_35356 = (0);
var i__34805_35357 = (0);
while(true){
if((i__34805_35357 < count__34804_35356)){
var c_35361 = chunk__34803_35355.cljs$core$IIndexed$_nth$arity$2(null,i__34805_35357);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35361);


var G__35363 = seq__34802_35354;
var G__35364 = chunk__34803_35355;
var G__35365 = count__34804_35356;
var G__35366 = (i__34805_35357 + (1));
seq__34802_35354 = G__35363;
chunk__34803_35355 = G__35364;
count__34804_35356 = G__35365;
i__34805_35357 = G__35366;
continue;
} else {
var temp__5735__auto___35367 = cljs.core.seq(seq__34802_35354);
if(temp__5735__auto___35367){
var seq__34802_35368__$1 = temp__5735__auto___35367;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35368__$1)){
var c__4609__auto___35369 = cljs.core.chunk_first(seq__34802_35368__$1);
var G__35370 = cljs.core.chunk_rest(seq__34802_35368__$1);
var G__35371 = c__4609__auto___35369;
var G__35372 = cljs.core.count(c__4609__auto___35369);
var G__35373 = (0);
seq__34802_35354 = G__35370;
chunk__34803_35355 = G__35371;
count__34804_35356 = G__35372;
i__34805_35357 = G__35373;
continue;
} else {
var c_35375 = cljs.core.first(seq__34802_35368__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35375);


var G__35380 = cljs.core.next(seq__34802_35368__$1);
var G__35381 = null;
var G__35382 = (0);
var G__35383 = (0);
seq__34802_35354 = G__35380;
chunk__34803_35355 = G__35381;
count__34804_35356 = G__35382;
i__34805_35357 = G__35383;
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
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___35393 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35393)){
var class_list_35394 = temp__5733__auto___35393;
class_list_35394.remove(c__$1);
} else {
var class_name_35395 = dommy.core.class$(elem);
var new_class_name_35396 = dommy.utils.remove_class_str(class_name_35395,c__$1);
if((class_name_35395 === new_class_name_35396)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35396);
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


var G__35397 = seq__34811;
var G__35398 = chunk__34812;
var G__35399 = count__34813;
var G__35400 = (i__34814 + (1));
seq__34811 = G__35397;
chunk__34812 = G__35398;
count__34813 = G__35399;
i__34814 = G__35400;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34811);
if(temp__5735__auto__){
var seq__34811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35401 = cljs.core.chunk_rest(seq__34811__$1);
var G__35402 = c__4609__auto__;
var G__35403 = cljs.core.count(c__4609__auto__);
var G__35404 = (0);
seq__34811 = G__35401;
chunk__34812 = G__35402;
count__34813 = G__35403;
i__34814 = G__35404;
continue;
} else {
var c = cljs.core.first(seq__34811__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35405 = cljs.core.next(seq__34811__$1);
var G__35406 = null;
var G__35407 = (0);
var G__35408 = (0);
seq__34811 = G__35405;
chunk__34812 = G__35406;
count__34813 = G__35407;
i__34814 = G__35408;
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
var temp__5733__auto___35410 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35410)){
var class_list_35411 = temp__5733__auto___35410;
class_list_35411.toggle(c__$1);
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
var len__4789__auto___35479 = arguments.length;
var i__4790__auto___35480 = (0);
while(true){
if((i__4790__auto___35480 < len__4789__auto___35479)){
args__4795__auto__.push((arguments[i__4790__auto___35480]));

var G__35482 = (i__4790__auto___35480 + (1));
i__4790__auto___35480 = G__35482;
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
var len__4789__auto___35492 = arguments.length;
var i__4790__auto___35493 = (0);
while(true){
if((i__4790__auto___35493 < len__4789__auto___35492)){
args__4795__auto__.push((arguments[i__4790__auto___35493]));

var G__35496 = (i__4790__auto___35493 + (1));
i__4790__auto___35493 = G__35496;
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

var vec__34857_35497 = dommy.core.elem_and_selector(elem_sel);
var elem_35498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35497,(0),null);
var selector_35499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35497,(1),null);
var seq__34860_35506 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34867_35507 = null;
var count__34868_35508 = (0);
var i__34869_35509 = (0);
while(true){
if((i__34869_35509 < count__34868_35508)){
var vec__34928_35511 = chunk__34867_35507.cljs$core$IIndexed$_nth$arity$2(null,i__34869_35509);
var orig_type_35512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35511,(0),null);
var f_35513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35511,(1),null);
var seq__34870_35516 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35512,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35512,cljs.core.identity])));
var chunk__34872_35517 = null;
var count__34873_35518 = (0);
var i__34874_35519 = (0);
while(true){
if((i__34874_35519 < count__34873_35518)){
var vec__34941_35522 = chunk__34872_35517.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35519);
var actual_type_35523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941_35522,(0),null);
var factory_35524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941_35522,(1),null);
var canonical_f_35526 = (function (){var G__34945 = (factory_35524.cljs$core$IFn$_invoke$arity$1 ? factory_35524.cljs$core$IFn$_invoke$arity$1(f_35513) : factory_35524.call(null,f_35513));
var fexpr__34944 = (cljs.core.truth_(selector_35499)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35498,selector_35499):cljs.core.identity);
return (fexpr__34944.cljs$core$IFn$_invoke$arity$1 ? fexpr__34944.cljs$core$IFn$_invoke$arity$1(G__34945) : fexpr__34944.call(null,G__34945));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35498,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35499,actual_type_35523,f_35513], null),canonical_f_35526], 0));

if(cljs.core.truth_(elem_35498.addEventListener)){
elem_35498.addEventListener(cljs.core.name(actual_type_35523),canonical_f_35526);
} else {
elem_35498.attachEvent(cljs.core.name(actual_type_35523),canonical_f_35526);
}


var G__35531 = seq__34870_35516;
var G__35532 = chunk__34872_35517;
var G__35533 = count__34873_35518;
var G__35534 = (i__34874_35519 + (1));
seq__34870_35516 = G__35531;
chunk__34872_35517 = G__35532;
count__34873_35518 = G__35533;
i__34874_35519 = G__35534;
continue;
} else {
var temp__5735__auto___35539 = cljs.core.seq(seq__34870_35516);
if(temp__5735__auto___35539){
var seq__34870_35541__$1 = temp__5735__auto___35539;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35541__$1)){
var c__4609__auto___35542 = cljs.core.chunk_first(seq__34870_35541__$1);
var G__35543 = cljs.core.chunk_rest(seq__34870_35541__$1);
var G__35544 = c__4609__auto___35542;
var G__35545 = cljs.core.count(c__4609__auto___35542);
var G__35546 = (0);
seq__34870_35516 = G__35543;
chunk__34872_35517 = G__35544;
count__34873_35518 = G__35545;
i__34874_35519 = G__35546;
continue;
} else {
var vec__34946_35549 = cljs.core.first(seq__34870_35541__$1);
var actual_type_35550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35549,(0),null);
var factory_35551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35549,(1),null);
var canonical_f_35553 = (function (){var G__34950 = (factory_35551.cljs$core$IFn$_invoke$arity$1 ? factory_35551.cljs$core$IFn$_invoke$arity$1(f_35513) : factory_35551.call(null,f_35513));
var fexpr__34949 = (cljs.core.truth_(selector_35499)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35498,selector_35499):cljs.core.identity);
return (fexpr__34949.cljs$core$IFn$_invoke$arity$1 ? fexpr__34949.cljs$core$IFn$_invoke$arity$1(G__34950) : fexpr__34949.call(null,G__34950));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35498,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35499,actual_type_35550,f_35513], null),canonical_f_35553], 0));

if(cljs.core.truth_(elem_35498.addEventListener)){
elem_35498.addEventListener(cljs.core.name(actual_type_35550),canonical_f_35553);
} else {
elem_35498.attachEvent(cljs.core.name(actual_type_35550),canonical_f_35553);
}


var G__35560 = cljs.core.next(seq__34870_35541__$1);
var G__35561 = null;
var G__35562 = (0);
var G__35563 = (0);
seq__34870_35516 = G__35560;
chunk__34872_35517 = G__35561;
count__34873_35518 = G__35562;
i__34874_35519 = G__35563;
continue;
}
} else {
}
}
break;
}

var G__35564 = seq__34860_35506;
var G__35565 = chunk__34867_35507;
var G__35566 = count__34868_35508;
var G__35567 = (i__34869_35509 + (1));
seq__34860_35506 = G__35564;
chunk__34867_35507 = G__35565;
count__34868_35508 = G__35566;
i__34869_35509 = G__35567;
continue;
} else {
var temp__5735__auto___35569 = cljs.core.seq(seq__34860_35506);
if(temp__5735__auto___35569){
var seq__34860_35570__$1 = temp__5735__auto___35569;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35570__$1)){
var c__4609__auto___35573 = cljs.core.chunk_first(seq__34860_35570__$1);
var G__35577 = cljs.core.chunk_rest(seq__34860_35570__$1);
var G__35578 = c__4609__auto___35573;
var G__35579 = cljs.core.count(c__4609__auto___35573);
var G__35580 = (0);
seq__34860_35506 = G__35577;
chunk__34867_35507 = G__35578;
count__34868_35508 = G__35579;
i__34869_35509 = G__35580;
continue;
} else {
var vec__34955_35585 = cljs.core.first(seq__34860_35570__$1);
var orig_type_35586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35585,(0),null);
var f_35587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35585,(1),null);
var seq__34861_35590 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35586,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35586,cljs.core.identity])));
var chunk__34863_35591 = null;
var count__34864_35592 = (0);
var i__34865_35593 = (0);
while(true){
if((i__34865_35593 < count__34864_35592)){
var vec__34971_35595 = chunk__34863_35591.cljs$core$IIndexed$_nth$arity$2(null,i__34865_35593);
var actual_type_35596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35595,(0),null);
var factory_35597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35595,(1),null);
var canonical_f_35600 = (function (){var G__34975 = (factory_35597.cljs$core$IFn$_invoke$arity$1 ? factory_35597.cljs$core$IFn$_invoke$arity$1(f_35587) : factory_35597.call(null,f_35587));
var fexpr__34974 = (cljs.core.truth_(selector_35499)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35498,selector_35499):cljs.core.identity);
return (fexpr__34974.cljs$core$IFn$_invoke$arity$1 ? fexpr__34974.cljs$core$IFn$_invoke$arity$1(G__34975) : fexpr__34974.call(null,G__34975));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35498,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35499,actual_type_35596,f_35587], null),canonical_f_35600], 0));

if(cljs.core.truth_(elem_35498.addEventListener)){
elem_35498.addEventListener(cljs.core.name(actual_type_35596),canonical_f_35600);
} else {
elem_35498.attachEvent(cljs.core.name(actual_type_35596),canonical_f_35600);
}


var G__35604 = seq__34861_35590;
var G__35605 = chunk__34863_35591;
var G__35606 = count__34864_35592;
var G__35607 = (i__34865_35593 + (1));
seq__34861_35590 = G__35604;
chunk__34863_35591 = G__35605;
count__34864_35592 = G__35606;
i__34865_35593 = G__35607;
continue;
} else {
var temp__5735__auto___35611__$1 = cljs.core.seq(seq__34861_35590);
if(temp__5735__auto___35611__$1){
var seq__34861_35612__$1 = temp__5735__auto___35611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34861_35612__$1)){
var c__4609__auto___35613 = cljs.core.chunk_first(seq__34861_35612__$1);
var G__35614 = cljs.core.chunk_rest(seq__34861_35612__$1);
var G__35615 = c__4609__auto___35613;
var G__35616 = cljs.core.count(c__4609__auto___35613);
var G__35617 = (0);
seq__34861_35590 = G__35614;
chunk__34863_35591 = G__35615;
count__34864_35592 = G__35616;
i__34865_35593 = G__35617;
continue;
} else {
var vec__34980_35621 = cljs.core.first(seq__34861_35612__$1);
var actual_type_35622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35621,(0),null);
var factory_35623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35621,(1),null);
var canonical_f_35624 = (function (){var G__34984 = (factory_35623.cljs$core$IFn$_invoke$arity$1 ? factory_35623.cljs$core$IFn$_invoke$arity$1(f_35587) : factory_35623.call(null,f_35587));
var fexpr__34983 = (cljs.core.truth_(selector_35499)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35498,selector_35499):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35498,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35499,actual_type_35622,f_35587], null),canonical_f_35624], 0));

if(cljs.core.truth_(elem_35498.addEventListener)){
elem_35498.addEventListener(cljs.core.name(actual_type_35622),canonical_f_35624);
} else {
elem_35498.attachEvent(cljs.core.name(actual_type_35622),canonical_f_35624);
}


var G__35631 = cljs.core.next(seq__34861_35612__$1);
var G__35632 = null;
var G__35633 = (0);
var G__35634 = (0);
seq__34861_35590 = G__35631;
chunk__34863_35591 = G__35632;
count__34864_35592 = G__35633;
i__34865_35593 = G__35634;
continue;
}
} else {
}
}
break;
}

var G__35635 = cljs.core.next(seq__34860_35570__$1);
var G__35636 = null;
var G__35637 = (0);
var G__35638 = (0);
seq__34860_35506 = G__35635;
chunk__34867_35507 = G__35636;
count__34868_35508 = G__35637;
i__34869_35509 = G__35638;
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
var len__4789__auto___35662 = arguments.length;
var i__4790__auto___35663 = (0);
while(true){
if((i__4790__auto___35663 < len__4789__auto___35662)){
args__4795__auto__.push((arguments[i__4790__auto___35663]));

var G__35664 = (i__4790__auto___35663 + (1));
i__4790__auto___35663 = G__35664;
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

var vec__34987_35667 = dommy.core.elem_and_selector(elem_sel);
var elem_35668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35667,(0),null);
var selector_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35667,(1),null);
var seq__34991_35671 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34998_35672 = null;
var count__34999_35673 = (0);
var i__35000_35674 = (0);
while(true){
if((i__35000_35674 < count__34999_35673)){
var vec__35068_35675 = chunk__34998_35672.cljs$core$IIndexed$_nth$arity$2(null,i__35000_35674);
var orig_type_35676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35675,(0),null);
var f_35677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35675,(1),null);
var seq__35001_35680 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35676,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35676,cljs.core.identity])));
var chunk__35003_35681 = null;
var count__35004_35682 = (0);
var i__35005_35683 = (0);
while(true){
if((i__35005_35683 < count__35004_35682)){
var vec__35095_35691 = chunk__35003_35681.cljs$core$IIndexed$_nth$arity$2(null,i__35005_35683);
var actual_type_35692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35691,(0),null);
var __35693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35691,(1),null);
var keys_35695 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35669,actual_type_35692,f_35677], null);
var canonical_f_35696 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35668),keys_35695);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35668,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35695], 0));

if(cljs.core.truth_(elem_35668.removeEventListener)){
elem_35668.removeEventListener(cljs.core.name(actual_type_35692),canonical_f_35696);
} else {
elem_35668.detachEvent(cljs.core.name(actual_type_35692),canonical_f_35696);
}


var G__35707 = seq__35001_35680;
var G__35708 = chunk__35003_35681;
var G__35709 = count__35004_35682;
var G__35710 = (i__35005_35683 + (1));
seq__35001_35680 = G__35707;
chunk__35003_35681 = G__35708;
count__35004_35682 = G__35709;
i__35005_35683 = G__35710;
continue;
} else {
var temp__5735__auto___35712 = cljs.core.seq(seq__35001_35680);
if(temp__5735__auto___35712){
var seq__35001_35715__$1 = temp__5735__auto___35712;
if(cljs.core.chunked_seq_QMARK_(seq__35001_35715__$1)){
var c__4609__auto___35716 = cljs.core.chunk_first(seq__35001_35715__$1);
var G__35717 = cljs.core.chunk_rest(seq__35001_35715__$1);
var G__35718 = c__4609__auto___35716;
var G__35719 = cljs.core.count(c__4609__auto___35716);
var G__35720 = (0);
seq__35001_35680 = G__35717;
chunk__35003_35681 = G__35718;
count__35004_35682 = G__35719;
i__35005_35683 = G__35720;
continue;
} else {
var vec__35102_35722 = cljs.core.first(seq__35001_35715__$1);
var actual_type_35723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102_35722,(0),null);
var __35724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102_35722,(1),null);
var keys_35729 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35669,actual_type_35723,f_35677], null);
var canonical_f_35730 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35668),keys_35729);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35668,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35729], 0));

if(cljs.core.truth_(elem_35668.removeEventListener)){
elem_35668.removeEventListener(cljs.core.name(actual_type_35723),canonical_f_35730);
} else {
elem_35668.detachEvent(cljs.core.name(actual_type_35723),canonical_f_35730);
}


var G__35738 = cljs.core.next(seq__35001_35715__$1);
var G__35739 = null;
var G__35740 = (0);
var G__35741 = (0);
seq__35001_35680 = G__35738;
chunk__35003_35681 = G__35739;
count__35004_35682 = G__35740;
i__35005_35683 = G__35741;
continue;
}
} else {
}
}
break;
}

var G__35745 = seq__34991_35671;
var G__35746 = chunk__34998_35672;
var G__35747 = count__34999_35673;
var G__35748 = (i__35000_35674 + (1));
seq__34991_35671 = G__35745;
chunk__34998_35672 = G__35746;
count__34999_35673 = G__35747;
i__35000_35674 = G__35748;
continue;
} else {
var temp__5735__auto___35752 = cljs.core.seq(seq__34991_35671);
if(temp__5735__auto___35752){
var seq__34991_35753__$1 = temp__5735__auto___35752;
if(cljs.core.chunked_seq_QMARK_(seq__34991_35753__$1)){
var c__4609__auto___35757 = cljs.core.chunk_first(seq__34991_35753__$1);
var G__35760 = cljs.core.chunk_rest(seq__34991_35753__$1);
var G__35761 = c__4609__auto___35757;
var G__35762 = cljs.core.count(c__4609__auto___35757);
var G__35763 = (0);
seq__34991_35671 = G__35760;
chunk__34998_35672 = G__35761;
count__34999_35673 = G__35762;
i__35000_35674 = G__35763;
continue;
} else {
var vec__35105_35766 = cljs.core.first(seq__34991_35753__$1);
var orig_type_35767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105_35766,(0),null);
var f_35768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105_35766,(1),null);
var seq__34992_35773 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35767,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35767,cljs.core.identity])));
var chunk__34994_35774 = null;
var count__34995_35775 = (0);
var i__34996_35776 = (0);
while(true){
if((i__34996_35776 < count__34995_35775)){
var vec__35117_35783 = chunk__34994_35774.cljs$core$IIndexed$_nth$arity$2(null,i__34996_35776);
var actual_type_35784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35783,(0),null);
var __35785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117_35783,(1),null);
var keys_35786 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35669,actual_type_35784,f_35768], null);
var canonical_f_35787 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35668),keys_35786);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35668,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35786], 0));

if(cljs.core.truth_(elem_35668.removeEventListener)){
elem_35668.removeEventListener(cljs.core.name(actual_type_35784),canonical_f_35787);
} else {
elem_35668.detachEvent(cljs.core.name(actual_type_35784),canonical_f_35787);
}


var G__35790 = seq__34992_35773;
var G__35791 = chunk__34994_35774;
var G__35792 = count__34995_35775;
var G__35793 = (i__34996_35776 + (1));
seq__34992_35773 = G__35790;
chunk__34994_35774 = G__35791;
count__34995_35775 = G__35792;
i__34996_35776 = G__35793;
continue;
} else {
var temp__5735__auto___35794__$1 = cljs.core.seq(seq__34992_35773);
if(temp__5735__auto___35794__$1){
var seq__34992_35795__$1 = temp__5735__auto___35794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34992_35795__$1)){
var c__4609__auto___35798 = cljs.core.chunk_first(seq__34992_35795__$1);
var G__35799 = cljs.core.chunk_rest(seq__34992_35795__$1);
var G__35800 = c__4609__auto___35798;
var G__35801 = cljs.core.count(c__4609__auto___35798);
var G__35802 = (0);
seq__34992_35773 = G__35799;
chunk__34994_35774 = G__35800;
count__34995_35775 = G__35801;
i__34996_35776 = G__35802;
continue;
} else {
var vec__35122_35806 = cljs.core.first(seq__34992_35795__$1);
var actual_type_35807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35806,(0),null);
var __35808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35806,(1),null);
var keys_35811 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35669,actual_type_35807,f_35768], null);
var canonical_f_35812 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35668),keys_35811);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35668,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35811], 0));

if(cljs.core.truth_(elem_35668.removeEventListener)){
elem_35668.removeEventListener(cljs.core.name(actual_type_35807),canonical_f_35812);
} else {
elem_35668.detachEvent(cljs.core.name(actual_type_35807),canonical_f_35812);
}


var G__35817 = cljs.core.next(seq__34992_35795__$1);
var G__35818 = null;
var G__35819 = (0);
var G__35820 = (0);
seq__34992_35773 = G__35817;
chunk__34994_35774 = G__35818;
count__34995_35775 = G__35819;
i__34996_35776 = G__35820;
continue;
}
} else {
}
}
break;
}

var G__35822 = cljs.core.next(seq__34991_35753__$1);
var G__35823 = null;
var G__35824 = (0);
var G__35825 = (0);
seq__34991_35671 = G__35822;
chunk__34998_35672 = G__35823;
count__34999_35673 = G__35824;
i__35000_35674 = G__35825;
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
var len__4789__auto___35837 = arguments.length;
var i__4790__auto___35840 = (0);
while(true){
if((i__4790__auto___35840 < len__4789__auto___35837)){
args__4795__auto__.push((arguments[i__4790__auto___35840]));

var G__35842 = (i__4790__auto___35840 + (1));
i__4790__auto___35840 = G__35842;
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

var vec__35127_35845 = dommy.core.elem_and_selector(elem_sel);
var elem_35846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127_35845,(0),null);
var selector_35847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127_35845,(1),null);
var seq__35130_35850 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35131_35851 = null;
var count__35132_35852 = (0);
var i__35133_35853 = (0);
while(true){
if((i__35133_35853 < count__35132_35852)){
var vec__35140_35861 = chunk__35131_35851.cljs$core$IIndexed$_nth$arity$2(null,i__35133_35853);
var type_35862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35861,(0),null);
var f_35863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35861,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35862,((function (seq__35130_35850,chunk__35131_35851,count__35132_35852,i__35133_35853,vec__35140_35861,type_35862,f_35863,vec__35127_35845,elem_35846,selector_35847){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35862,dommy$core$this_fn], 0));

return (f_35863.cljs$core$IFn$_invoke$arity$1 ? f_35863.cljs$core$IFn$_invoke$arity$1(e) : f_35863.call(null,e));
});})(seq__35130_35850,chunk__35131_35851,count__35132_35852,i__35133_35853,vec__35140_35861,type_35862,f_35863,vec__35127_35845,elem_35846,selector_35847))
], 0));


var G__35868 = seq__35130_35850;
var G__35869 = chunk__35131_35851;
var G__35870 = count__35132_35852;
var G__35871 = (i__35133_35853 + (1));
seq__35130_35850 = G__35868;
chunk__35131_35851 = G__35869;
count__35132_35852 = G__35870;
i__35133_35853 = G__35871;
continue;
} else {
var temp__5735__auto___35873 = cljs.core.seq(seq__35130_35850);
if(temp__5735__auto___35873){
var seq__35130_35874__$1 = temp__5735__auto___35873;
if(cljs.core.chunked_seq_QMARK_(seq__35130_35874__$1)){
var c__4609__auto___35879 = cljs.core.chunk_first(seq__35130_35874__$1);
var G__35880 = cljs.core.chunk_rest(seq__35130_35874__$1);
var G__35881 = c__4609__auto___35879;
var G__35882 = cljs.core.count(c__4609__auto___35879);
var G__35883 = (0);
seq__35130_35850 = G__35880;
chunk__35131_35851 = G__35881;
count__35132_35852 = G__35882;
i__35133_35853 = G__35883;
continue;
} else {
var vec__35143_35889 = cljs.core.first(seq__35130_35874__$1);
var type_35890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35889,(0),null);
var f_35891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_35889,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35890,((function (seq__35130_35850,chunk__35131_35851,count__35132_35852,i__35133_35853,vec__35143_35889,type_35890,f_35891,seq__35130_35874__$1,temp__5735__auto___35873,vec__35127_35845,elem_35846,selector_35847){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35890,dommy$core$this_fn], 0));

return (f_35891.cljs$core$IFn$_invoke$arity$1 ? f_35891.cljs$core$IFn$_invoke$arity$1(e) : f_35891.call(null,e));
});})(seq__35130_35850,chunk__35131_35851,count__35132_35852,i__35133_35853,vec__35143_35889,type_35890,f_35891,seq__35130_35874__$1,temp__5735__auto___35873,vec__35127_35845,elem_35846,selector_35847))
], 0));


var G__35903 = cljs.core.next(seq__35130_35874__$1);
var G__35904 = null;
var G__35905 = (0);
var G__35906 = (0);
seq__35130_35850 = G__35903;
chunk__35131_35851 = G__35904;
count__35132_35852 = G__35905;
i__35133_35853 = G__35906;
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
