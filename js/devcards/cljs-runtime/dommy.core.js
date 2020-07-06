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
var G__34716 = arguments.length;
switch (G__34716) {
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
var G__34718 = arguments.length;
switch (G__34718) {
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
var G__34721 = arguments.length;
switch (G__34721) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34719_SHARP_){
return (!((p1__34719_SHARP_ === base)));
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
var len__4789__auto___35163 = arguments.length;
var i__4790__auto___35164 = (0);
while(true){
if((i__4790__auto___35164 < len__4789__auto___35163)){
args__4795__auto__.push((arguments[i__4790__auto___35164]));

var G__35165 = (i__4790__auto___35164 + (1));
i__4790__auto___35164 = G__35165;
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
var seq__34726_35166 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34727_35167 = null;
var count__34728_35168 = (0);
var i__34729_35169 = (0);
while(true){
if((i__34729_35169 < count__34728_35168)){
var vec__34736_35170 = chunk__34727_35167.cljs$core$IIndexed$_nth$arity$2(null,i__34729_35169);
var k_35171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35170,(0),null);
var v_35172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35170,(1),null);
style.setProperty(dommy.utils.as_str(k_35171),v_35172);


var G__35173 = seq__34726_35166;
var G__35174 = chunk__34727_35167;
var G__35175 = count__34728_35168;
var G__35176 = (i__34729_35169 + (1));
seq__34726_35166 = G__35173;
chunk__34727_35167 = G__35174;
count__34728_35168 = G__35175;
i__34729_35169 = G__35176;
continue;
} else {
var temp__5735__auto___35177 = cljs.core.seq(seq__34726_35166);
if(temp__5735__auto___35177){
var seq__34726_35178__$1 = temp__5735__auto___35177;
if(cljs.core.chunked_seq_QMARK_(seq__34726_35178__$1)){
var c__4609__auto___35179 = cljs.core.chunk_first(seq__34726_35178__$1);
var G__35180 = cljs.core.chunk_rest(seq__34726_35178__$1);
var G__35181 = c__4609__auto___35179;
var G__35182 = cljs.core.count(c__4609__auto___35179);
var G__35183 = (0);
seq__34726_35166 = G__35180;
chunk__34727_35167 = G__35181;
count__34728_35168 = G__35182;
i__34729_35169 = G__35183;
continue;
} else {
var vec__34739_35184 = cljs.core.first(seq__34726_35178__$1);
var k_35185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35184,(0),null);
var v_35186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35184,(1),null);
style.setProperty(dommy.utils.as_str(k_35185),v_35186);


var G__35187 = cljs.core.next(seq__34726_35178__$1);
var G__35188 = null;
var G__35189 = (0);
var G__35190 = (0);
seq__34726_35166 = G__35187;
chunk__34727_35167 = G__35188;
count__34728_35168 = G__35189;
i__34729_35169 = G__35190;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34724){
var G__34725 = cljs.core.first(seq34724);
var seq34724__$1 = cljs.core.next(seq34724);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34725,seq34724__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35192 = arguments.length;
var i__4790__auto___35193 = (0);
while(true){
if((i__4790__auto___35193 < len__4789__auto___35192)){
args__4795__auto__.push((arguments[i__4790__auto___35193]));

var G__35194 = (i__4790__auto___35193 + (1));
i__4790__auto___35193 = G__35194;
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
var seq__34745_35196 = cljs.core.seq(keywords);
var chunk__34746_35197 = null;
var count__34747_35198 = (0);
var i__34748_35199 = (0);
while(true){
if((i__34748_35199 < count__34747_35198)){
var kw_35200 = chunk__34746_35197.cljs$core$IIndexed$_nth$arity$2(null,i__34748_35199);
style.removeProperty(dommy.utils.as_str(kw_35200));


var G__35201 = seq__34745_35196;
var G__35202 = chunk__34746_35197;
var G__35203 = count__34747_35198;
var G__35204 = (i__34748_35199 + (1));
seq__34745_35196 = G__35201;
chunk__34746_35197 = G__35202;
count__34747_35198 = G__35203;
i__34748_35199 = G__35204;
continue;
} else {
var temp__5735__auto___35205 = cljs.core.seq(seq__34745_35196);
if(temp__5735__auto___35205){
var seq__34745_35206__$1 = temp__5735__auto___35205;
if(cljs.core.chunked_seq_QMARK_(seq__34745_35206__$1)){
var c__4609__auto___35207 = cljs.core.chunk_first(seq__34745_35206__$1);
var G__35208 = cljs.core.chunk_rest(seq__34745_35206__$1);
var G__35209 = c__4609__auto___35207;
var G__35210 = cljs.core.count(c__4609__auto___35207);
var G__35211 = (0);
seq__34745_35196 = G__35208;
chunk__34746_35197 = G__35209;
count__34747_35198 = G__35210;
i__34748_35199 = G__35211;
continue;
} else {
var kw_35212 = cljs.core.first(seq__34745_35206__$1);
style.removeProperty(dommy.utils.as_str(kw_35212));


var G__35213 = cljs.core.next(seq__34745_35206__$1);
var G__35214 = null;
var G__35215 = (0);
var G__35216 = (0);
seq__34745_35196 = G__35213;
chunk__34746_35197 = G__35214;
count__34747_35198 = G__35215;
i__34748_35199 = G__35216;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34743){
var G__34744 = cljs.core.first(seq34743);
var seq34743__$1 = cljs.core.next(seq34743);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34744,seq34743__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35217 = arguments.length;
var i__4790__auto___35218 = (0);
while(true){
if((i__4790__auto___35218 < len__4789__auto___35217)){
args__4795__auto__.push((arguments[i__4790__auto___35218]));

var G__35219 = (i__4790__auto___35218 + (1));
i__4790__auto___35218 = G__35219;
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

var seq__34751_35220 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34752_35221 = null;
var count__34753_35222 = (0);
var i__34754_35223 = (0);
while(true){
if((i__34754_35223 < count__34753_35222)){
var vec__34761_35224 = chunk__34752_35221.cljs$core$IIndexed$_nth$arity$2(null,i__34754_35223);
var k_35225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35224,(0),null);
var v_35226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35224,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35225,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35226),"px"].join('')], 0));


var G__35228 = seq__34751_35220;
var G__35229 = chunk__34752_35221;
var G__35230 = count__34753_35222;
var G__35231 = (i__34754_35223 + (1));
seq__34751_35220 = G__35228;
chunk__34752_35221 = G__35229;
count__34753_35222 = G__35230;
i__34754_35223 = G__35231;
continue;
} else {
var temp__5735__auto___35233 = cljs.core.seq(seq__34751_35220);
if(temp__5735__auto___35233){
var seq__34751_35234__$1 = temp__5735__auto___35233;
if(cljs.core.chunked_seq_QMARK_(seq__34751_35234__$1)){
var c__4609__auto___35235 = cljs.core.chunk_first(seq__34751_35234__$1);
var G__35236 = cljs.core.chunk_rest(seq__34751_35234__$1);
var G__35237 = c__4609__auto___35235;
var G__35238 = cljs.core.count(c__4609__auto___35235);
var G__35239 = (0);
seq__34751_35220 = G__35236;
chunk__34752_35221 = G__35237;
count__34753_35222 = G__35238;
i__34754_35223 = G__35239;
continue;
} else {
var vec__34764_35240 = cljs.core.first(seq__34751_35234__$1);
var k_35241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35240,(0),null);
var v_35242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35240,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35241,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35242),"px"].join('')], 0));


var G__35243 = cljs.core.next(seq__34751_35234__$1);
var G__35244 = null;
var G__35245 = (0);
var G__35246 = (0);
seq__34751_35220 = G__35243;
chunk__34752_35221 = G__35244;
count__34753_35222 = G__35245;
i__34754_35223 = G__35246;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34749){
var G__34750 = cljs.core.first(seq34749);
var seq34749__$1 = cljs.core.next(seq34749);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34750,seq34749__$1);
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
var G__34772 = arguments.length;
switch (G__34772) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35249 = arguments.length;
var i__4790__auto___35250 = (0);
while(true){
if((i__4790__auto___35250 < len__4789__auto___35249)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35250]));

var G__35252 = (i__4790__auto___35250 + (1));
i__4790__auto___35250 = G__35252;
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
var G__34773 = elem;
(G__34773[k__$1] = v);

return G__34773;
} else {
var G__34774 = elem;
G__34774.setAttribute(k__$1,v);

return G__34774;
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

var seq__34775_35253 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34776_35254 = null;
var count__34777_35255 = (0);
var i__34778_35256 = (0);
while(true){
if((i__34778_35256 < count__34777_35255)){
var vec__34785_35257 = chunk__34776_35254.cljs$core$IIndexed$_nth$arity$2(null,i__34778_35256);
var k_35258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35257,(0),null);
var v_35259__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35257,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35258__$1,v_35259__$1);


var G__35260 = seq__34775_35253;
var G__35261 = chunk__34776_35254;
var G__35262 = count__34777_35255;
var G__35263 = (i__34778_35256 + (1));
seq__34775_35253 = G__35260;
chunk__34776_35254 = G__35261;
count__34777_35255 = G__35262;
i__34778_35256 = G__35263;
continue;
} else {
var temp__5735__auto___35264 = cljs.core.seq(seq__34775_35253);
if(temp__5735__auto___35264){
var seq__34775_35265__$1 = temp__5735__auto___35264;
if(cljs.core.chunked_seq_QMARK_(seq__34775_35265__$1)){
var c__4609__auto___35266 = cljs.core.chunk_first(seq__34775_35265__$1);
var G__35267 = cljs.core.chunk_rest(seq__34775_35265__$1);
var G__35268 = c__4609__auto___35266;
var G__35269 = cljs.core.count(c__4609__auto___35266);
var G__35270 = (0);
seq__34775_35253 = G__35267;
chunk__34776_35254 = G__35268;
count__34777_35255 = G__35269;
i__34778_35256 = G__35270;
continue;
} else {
var vec__34788_35271 = cljs.core.first(seq__34775_35265__$1);
var k_35272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35271,(0),null);
var v_35273__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35271,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35272__$1,v_35273__$1);


var G__35274 = cljs.core.next(seq__34775_35265__$1);
var G__35275 = null;
var G__35276 = (0);
var G__35277 = (0);
seq__34775_35253 = G__35274;
chunk__34776_35254 = G__35275;
count__34777_35255 = G__35276;
i__34778_35256 = G__35277;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34768){
var G__34769 = cljs.core.first(seq34768);
var seq34768__$1 = cljs.core.next(seq34768);
var G__34770 = cljs.core.first(seq34768__$1);
var seq34768__$2 = cljs.core.next(seq34768__$1);
var G__34771 = cljs.core.first(seq34768__$2);
var seq34768__$3 = cljs.core.next(seq34768__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34769,G__34770,G__34771,seq34768__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34795 = arguments.length;
switch (G__34795) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35279 = arguments.length;
var i__4790__auto___35280 = (0);
while(true){
if((i__4790__auto___35280 < len__4789__auto___35279)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35280]));

var G__35281 = (i__4790__auto___35280 + (1));
i__4790__auto___35280 = G__35281;
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
var k_35282__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34796.cljs$core$IFn$_invoke$arity$1 ? fexpr__34796.cljs$core$IFn$_invoke$arity$1(k_35282__$1) : fexpr__34796.call(null,k_35282__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35282__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34797_35283 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34798_35284 = null;
var count__34799_35285 = (0);
var i__34800_35286 = (0);
while(true){
if((i__34800_35286 < count__34799_35285)){
var k_35287__$1 = chunk__34798_35284.cljs$core$IIndexed$_nth$arity$2(null,i__34800_35286);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35287__$1);


var G__35288 = seq__34797_35283;
var G__35289 = chunk__34798_35284;
var G__35290 = count__34799_35285;
var G__35291 = (i__34800_35286 + (1));
seq__34797_35283 = G__35288;
chunk__34798_35284 = G__35289;
count__34799_35285 = G__35290;
i__34800_35286 = G__35291;
continue;
} else {
var temp__5735__auto___35292 = cljs.core.seq(seq__34797_35283);
if(temp__5735__auto___35292){
var seq__34797_35293__$1 = temp__5735__auto___35292;
if(cljs.core.chunked_seq_QMARK_(seq__34797_35293__$1)){
var c__4609__auto___35294 = cljs.core.chunk_first(seq__34797_35293__$1);
var G__35295 = cljs.core.chunk_rest(seq__34797_35293__$1);
var G__35296 = c__4609__auto___35294;
var G__35297 = cljs.core.count(c__4609__auto___35294);
var G__35298 = (0);
seq__34797_35283 = G__35295;
chunk__34798_35284 = G__35296;
count__34799_35285 = G__35297;
i__34800_35286 = G__35298;
continue;
} else {
var k_35299__$1 = cljs.core.first(seq__34797_35293__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35299__$1);


var G__35300 = cljs.core.next(seq__34797_35293__$1);
var G__35301 = null;
var G__35302 = (0);
var G__35303 = (0);
seq__34797_35283 = G__35300;
chunk__34798_35284 = G__35301;
count__34799_35285 = G__35302;
i__34800_35286 = G__35303;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34792){
var G__34793 = cljs.core.first(seq34792);
var seq34792__$1 = cljs.core.next(seq34792);
var G__34794 = cljs.core.first(seq34792__$1);
var seq34792__$2 = cljs.core.next(seq34792__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34793,G__34794,seq34792__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34802 = arguments.length;
switch (G__34802) {
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
var G__34807 = arguments.length;
switch (G__34807) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35306 = arguments.length;
var i__4790__auto___35307 = (0);
while(true){
if((i__4790__auto___35307 < len__4789__auto___35306)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35307]));

var G__35308 = (i__4790__auto___35307 + (1));
i__4790__auto___35307 = G__35308;
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
var temp__5733__auto___35309 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35309)){
var class_list_35310 = temp__5733__auto___35309;
var seq__34808_35311 = cljs.core.seq(classes__$1);
var chunk__34809_35312 = null;
var count__34810_35313 = (0);
var i__34811_35314 = (0);
while(true){
if((i__34811_35314 < count__34810_35313)){
var c_35315 = chunk__34809_35312.cljs$core$IIndexed$_nth$arity$2(null,i__34811_35314);
class_list_35310.add(c_35315);


var G__35316 = seq__34808_35311;
var G__35317 = chunk__34809_35312;
var G__35318 = count__34810_35313;
var G__35319 = (i__34811_35314 + (1));
seq__34808_35311 = G__35316;
chunk__34809_35312 = G__35317;
count__34810_35313 = G__35318;
i__34811_35314 = G__35319;
continue;
} else {
var temp__5735__auto___35320 = cljs.core.seq(seq__34808_35311);
if(temp__5735__auto___35320){
var seq__34808_35321__$1 = temp__5735__auto___35320;
if(cljs.core.chunked_seq_QMARK_(seq__34808_35321__$1)){
var c__4609__auto___35322 = cljs.core.chunk_first(seq__34808_35321__$1);
var G__35323 = cljs.core.chunk_rest(seq__34808_35321__$1);
var G__35324 = c__4609__auto___35322;
var G__35325 = cljs.core.count(c__4609__auto___35322);
var G__35326 = (0);
seq__34808_35311 = G__35323;
chunk__34809_35312 = G__35324;
count__34810_35313 = G__35325;
i__34811_35314 = G__35326;
continue;
} else {
var c_35327 = cljs.core.first(seq__34808_35321__$1);
class_list_35310.add(c_35327);


var G__35328 = cljs.core.next(seq__34808_35321__$1);
var G__35329 = null;
var G__35330 = (0);
var G__35331 = (0);
seq__34808_35311 = G__35328;
chunk__34809_35312 = G__35329;
count__34810_35313 = G__35330;
i__34811_35314 = G__35331;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34812_35332 = cljs.core.seq(classes__$1);
var chunk__34813_35333 = null;
var count__34814_35334 = (0);
var i__34815_35335 = (0);
while(true){
if((i__34815_35335 < count__34814_35334)){
var c_35336 = chunk__34813_35333.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35335);
var class_name_35337 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35337,c_35336))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35337 === ""))?c_35336:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35337)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35336)].join('')));
}


var G__35338 = seq__34812_35332;
var G__35339 = chunk__34813_35333;
var G__35340 = count__34814_35334;
var G__35341 = (i__34815_35335 + (1));
seq__34812_35332 = G__35338;
chunk__34813_35333 = G__35339;
count__34814_35334 = G__35340;
i__34815_35335 = G__35341;
continue;
} else {
var temp__5735__auto___35342 = cljs.core.seq(seq__34812_35332);
if(temp__5735__auto___35342){
var seq__34812_35343__$1 = temp__5735__auto___35342;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35343__$1)){
var c__4609__auto___35344 = cljs.core.chunk_first(seq__34812_35343__$1);
var G__35345 = cljs.core.chunk_rest(seq__34812_35343__$1);
var G__35346 = c__4609__auto___35344;
var G__35347 = cljs.core.count(c__4609__auto___35344);
var G__35348 = (0);
seq__34812_35332 = G__35345;
chunk__34813_35333 = G__35346;
count__34814_35334 = G__35347;
i__34815_35335 = G__35348;
continue;
} else {
var c_35349 = cljs.core.first(seq__34812_35343__$1);
var class_name_35350 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35350,c_35349))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35350 === ""))?c_35349:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35350)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35349)].join('')));
}


var G__35351 = cljs.core.next(seq__34812_35343__$1);
var G__35352 = null;
var G__35353 = (0);
var G__35354 = (0);
seq__34812_35332 = G__35351;
chunk__34813_35333 = G__35352;
count__34814_35334 = G__35353;
i__34815_35335 = G__35354;
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
var seq__34817_35355 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34818_35356 = null;
var count__34819_35357 = (0);
var i__34820_35358 = (0);
while(true){
if((i__34820_35358 < count__34819_35357)){
var c_35359 = chunk__34818_35356.cljs$core$IIndexed$_nth$arity$2(null,i__34820_35358);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35359);


var G__35360 = seq__34817_35355;
var G__35361 = chunk__34818_35356;
var G__35362 = count__34819_35357;
var G__35363 = (i__34820_35358 + (1));
seq__34817_35355 = G__35360;
chunk__34818_35356 = G__35361;
count__34819_35357 = G__35362;
i__34820_35358 = G__35363;
continue;
} else {
var temp__5735__auto___35364 = cljs.core.seq(seq__34817_35355);
if(temp__5735__auto___35364){
var seq__34817_35365__$1 = temp__5735__auto___35364;
if(cljs.core.chunked_seq_QMARK_(seq__34817_35365__$1)){
var c__4609__auto___35366 = cljs.core.chunk_first(seq__34817_35365__$1);
var G__35367 = cljs.core.chunk_rest(seq__34817_35365__$1);
var G__35368 = c__4609__auto___35366;
var G__35369 = cljs.core.count(c__4609__auto___35366);
var G__35370 = (0);
seq__34817_35355 = G__35367;
chunk__34818_35356 = G__35368;
count__34819_35357 = G__35369;
i__34820_35358 = G__35370;
continue;
} else {
var c_35371 = cljs.core.first(seq__34817_35365__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35371);


var G__35372 = cljs.core.next(seq__34817_35365__$1);
var G__35373 = null;
var G__35374 = (0);
var G__35375 = (0);
seq__34817_35355 = G__35372;
chunk__34818_35356 = G__35373;
count__34819_35357 = G__35374;
i__34820_35358 = G__35375;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34804){
var G__34805 = cljs.core.first(seq34804);
var seq34804__$1 = cljs.core.next(seq34804);
var G__34806 = cljs.core.first(seq34804__$1);
var seq34804__$2 = cljs.core.next(seq34804__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34805,G__34806,seq34804__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34827 = arguments.length;
switch (G__34827) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35377 = arguments.length;
var i__4790__auto___35379 = (0);
while(true){
if((i__4790__auto___35379 < len__4789__auto___35377)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35379]));

var G__35380 = (i__4790__auto___35379 + (1));
i__4790__auto___35379 = G__35380;
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
var temp__5733__auto___35382 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35382)){
var class_list_35383 = temp__5733__auto___35382;
class_list_35383.remove(c__$1);
} else {
var class_name_35384 = dommy.core.class$(elem);
var new_class_name_35385 = dommy.utils.remove_class_str(class_name_35384,c__$1);
if((class_name_35384 === new_class_name_35385)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35385);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34828 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34829 = null;
var count__34830 = (0);
var i__34831 = (0);
while(true){
if((i__34831 < count__34830)){
var c = chunk__34829.cljs$core$IIndexed$_nth$arity$2(null,i__34831);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35386 = seq__34828;
var G__35387 = chunk__34829;
var G__35388 = count__34830;
var G__35389 = (i__34831 + (1));
seq__34828 = G__35386;
chunk__34829 = G__35387;
count__34830 = G__35388;
i__34831 = G__35389;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34828);
if(temp__5735__auto__){
var seq__34828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34828__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34828__$1);
var G__35390 = cljs.core.chunk_rest(seq__34828__$1);
var G__35391 = c__4609__auto__;
var G__35392 = cljs.core.count(c__4609__auto__);
var G__35393 = (0);
seq__34828 = G__35390;
chunk__34829 = G__35391;
count__34830 = G__35392;
i__34831 = G__35393;
continue;
} else {
var c = cljs.core.first(seq__34828__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35398 = cljs.core.next(seq__34828__$1);
var G__35399 = null;
var G__35400 = (0);
var G__35401 = (0);
seq__34828 = G__35398;
chunk__34829 = G__35399;
count__34830 = G__35400;
i__34831 = G__35401;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34824){
var G__34825 = cljs.core.first(seq34824);
var seq34824__$1 = cljs.core.next(seq34824);
var G__34826 = cljs.core.first(seq34824__$1);
var seq34824__$2 = cljs.core.next(seq34824__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34825,G__34826,seq34824__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34833 = arguments.length;
switch (G__34833) {
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
var temp__5733__auto___35408 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35408)){
var class_list_35410 = temp__5733__auto___35408;
class_list_35410.toggle(c__$1);
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
var G__34835 = arguments.length;
switch (G__34835) {
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
var G__34837 = arguments.length;
switch (G__34837) {
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
var G__34842 = arguments.length;
switch (G__34842) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35425 = arguments.length;
var i__4790__auto___35426 = (0);
while(true){
if((i__4790__auto___35426 < len__4789__auto___35425)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35426]));

var G__35431 = (i__4790__auto___35426 + (1));
i__4790__auto___35426 = G__35431;
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
var G__34843 = parent;
G__34843.appendChild(child);

return G__34843;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34844_35432 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34845_35433 = null;
var count__34846_35434 = (0);
var i__34847_35435 = (0);
while(true){
if((i__34847_35435 < count__34846_35434)){
var c_35436 = chunk__34845_35433.cljs$core$IIndexed$_nth$arity$2(null,i__34847_35435);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35436);


var G__35437 = seq__34844_35432;
var G__35438 = chunk__34845_35433;
var G__35439 = count__34846_35434;
var G__35440 = (i__34847_35435 + (1));
seq__34844_35432 = G__35437;
chunk__34845_35433 = G__35438;
count__34846_35434 = G__35439;
i__34847_35435 = G__35440;
continue;
} else {
var temp__5735__auto___35441 = cljs.core.seq(seq__34844_35432);
if(temp__5735__auto___35441){
var seq__34844_35442__$1 = temp__5735__auto___35441;
if(cljs.core.chunked_seq_QMARK_(seq__34844_35442__$1)){
var c__4609__auto___35443 = cljs.core.chunk_first(seq__34844_35442__$1);
var G__35444 = cljs.core.chunk_rest(seq__34844_35442__$1);
var G__35445 = c__4609__auto___35443;
var G__35446 = cljs.core.count(c__4609__auto___35443);
var G__35447 = (0);
seq__34844_35432 = G__35444;
chunk__34845_35433 = G__35445;
count__34846_35434 = G__35446;
i__34847_35435 = G__35447;
continue;
} else {
var c_35448 = cljs.core.first(seq__34844_35442__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35448);


var G__35449 = cljs.core.next(seq__34844_35442__$1);
var G__35450 = null;
var G__35451 = (0);
var G__35452 = (0);
seq__34844_35432 = G__35449;
chunk__34845_35433 = G__35450;
count__34846_35434 = G__35451;
i__34847_35435 = G__35452;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34839){
var G__34840 = cljs.core.first(seq34839);
var seq34839__$1 = cljs.core.next(seq34839);
var G__34841 = cljs.core.first(seq34839__$1);
var seq34839__$2 = cljs.core.next(seq34839__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34840,G__34841,seq34839__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34852 = arguments.length;
switch (G__34852) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35454 = arguments.length;
var i__4790__auto___35455 = (0);
while(true){
if((i__4790__auto___35455 < len__4789__auto___35454)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35455]));

var G__35456 = (i__4790__auto___35455 + (1));
i__4790__auto___35455 = G__35456;
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
var G__34853 = parent;
G__34853.insertBefore(child,parent.firstChild);

return G__34853;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34854_35457 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34855_35458 = null;
var count__34856_35459 = (0);
var i__34857_35460 = (0);
while(true){
if((i__34857_35460 < count__34856_35459)){
var c_35461 = chunk__34855_35458.cljs$core$IIndexed$_nth$arity$2(null,i__34857_35460);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35461);


var G__35462 = seq__34854_35457;
var G__35463 = chunk__34855_35458;
var G__35464 = count__34856_35459;
var G__35465 = (i__34857_35460 + (1));
seq__34854_35457 = G__35462;
chunk__34855_35458 = G__35463;
count__34856_35459 = G__35464;
i__34857_35460 = G__35465;
continue;
} else {
var temp__5735__auto___35466 = cljs.core.seq(seq__34854_35457);
if(temp__5735__auto___35466){
var seq__34854_35467__$1 = temp__5735__auto___35466;
if(cljs.core.chunked_seq_QMARK_(seq__34854_35467__$1)){
var c__4609__auto___35468 = cljs.core.chunk_first(seq__34854_35467__$1);
var G__35469 = cljs.core.chunk_rest(seq__34854_35467__$1);
var G__35470 = c__4609__auto___35468;
var G__35471 = cljs.core.count(c__4609__auto___35468);
var G__35472 = (0);
seq__34854_35457 = G__35469;
chunk__34855_35458 = G__35470;
count__34856_35459 = G__35471;
i__34857_35460 = G__35472;
continue;
} else {
var c_35473 = cljs.core.first(seq__34854_35467__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35473);


var G__35474 = cljs.core.next(seq__34854_35467__$1);
var G__35475 = null;
var G__35476 = (0);
var G__35477 = (0);
seq__34854_35457 = G__35474;
chunk__34855_35458 = G__35475;
count__34856_35459 = G__35476;
i__34857_35460 = G__35477;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34849){
var G__34850 = cljs.core.first(seq34849);
var seq34849__$1 = cljs.core.next(seq34849);
var G__34851 = cljs.core.first(seq34849__$1);
var seq34849__$2 = cljs.core.next(seq34849__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34850,G__34851,seq34849__$2);
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
var temp__5733__auto___35478 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35478)){
var next_35479 = temp__5733__auto___35478;
dommy.core.insert_before_BANG_(elem,next_35479);
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
var G__34859 = arguments.length;
switch (G__34859) {
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
var G__34863 = p;
G__34863.removeChild(elem);

return G__34863;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34864){
var vec__34865 = p__34864;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34865,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34865,(1),null);
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
var len__4789__auto___35481 = arguments.length;
var i__4790__auto___35482 = (0);
while(true){
if((i__4790__auto___35482 < len__4789__auto___35481)){
args__4795__auto__.push((arguments[i__4790__auto___35482]));

var G__35483 = (i__4790__auto___35482 + (1));
i__4790__auto___35482 = G__35483;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34868){
var G__34869 = cljs.core.first(seq34868);
var seq34868__$1 = cljs.core.next(seq34868);
var G__34870 = cljs.core.first(seq34868__$1);
var seq34868__$2 = cljs.core.next(seq34868__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34869,G__34870,seq34868__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34871 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34871.cljs$core$IFn$_invoke$arity$1 ? fexpr__34871.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34871.call(null,elem_sel));
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
var len__4789__auto___35484 = arguments.length;
var i__4790__auto___35485 = (0);
while(true){
if((i__4790__auto___35485 < len__4789__auto___35484)){
args__4795__auto__.push((arguments[i__4790__auto___35485]));

var G__35486 = (i__4790__auto___35485 + (1));
i__4790__auto___35485 = G__35486;
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

var vec__34874_35487 = dommy.core.elem_and_selector(elem_sel);
var elem_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34874_35487,(0),null);
var selector_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34874_35487,(1),null);
var seq__34877_35490 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34884_35491 = null;
var count__34885_35492 = (0);
var i__34886_35493 = (0);
while(true){
if((i__34886_35493 < count__34885_35492)){
var vec__34946_35494 = chunk__34884_35491.cljs$core$IIndexed$_nth$arity$2(null,i__34886_35493);
var orig_type_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35494,(0),null);
var f_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35494,(1),null);
var seq__34887_35497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35495,cljs.core.identity])));
var chunk__34889_35498 = null;
var count__34890_35499 = (0);
var i__34891_35500 = (0);
while(true){
if((i__34891_35500 < count__34890_35499)){
var vec__34962_35501 = chunk__34889_35498.cljs$core$IIndexed$_nth$arity$2(null,i__34891_35500);
var actual_type_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35501,(0),null);
var factory_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35501,(1),null);
var canonical_f_35504 = (function (){var G__34966 = (factory_35503.cljs$core$IFn$_invoke$arity$1 ? factory_35503.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35503.call(null,f_35496));
var fexpr__34965 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34965.cljs$core$IFn$_invoke$arity$1 ? fexpr__34965.cljs$core$IFn$_invoke$arity$1(G__34966) : fexpr__34965.call(null,G__34966));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35502,f_35496], null),canonical_f_35504], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35502),canonical_f_35504);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35502),canonical_f_35504);
}


var G__35505 = seq__34887_35497;
var G__35506 = chunk__34889_35498;
var G__35507 = count__34890_35499;
var G__35508 = (i__34891_35500 + (1));
seq__34887_35497 = G__35505;
chunk__34889_35498 = G__35506;
count__34890_35499 = G__35507;
i__34891_35500 = G__35508;
continue;
} else {
var temp__5735__auto___35509 = cljs.core.seq(seq__34887_35497);
if(temp__5735__auto___35509){
var seq__34887_35510__$1 = temp__5735__auto___35509;
if(cljs.core.chunked_seq_QMARK_(seq__34887_35510__$1)){
var c__4609__auto___35511 = cljs.core.chunk_first(seq__34887_35510__$1);
var G__35512 = cljs.core.chunk_rest(seq__34887_35510__$1);
var G__35513 = c__4609__auto___35511;
var G__35514 = cljs.core.count(c__4609__auto___35511);
var G__35515 = (0);
seq__34887_35497 = G__35512;
chunk__34889_35498 = G__35513;
count__34890_35499 = G__35514;
i__34891_35500 = G__35515;
continue;
} else {
var vec__34967_35516 = cljs.core.first(seq__34887_35510__$1);
var actual_type_35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34967_35516,(0),null);
var factory_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34967_35516,(1),null);
var canonical_f_35519 = (function (){var G__34975 = (factory_35518.cljs$core$IFn$_invoke$arity$1 ? factory_35518.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35518.call(null,f_35496));
var fexpr__34974 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34974.cljs$core$IFn$_invoke$arity$1 ? fexpr__34974.cljs$core$IFn$_invoke$arity$1(G__34975) : fexpr__34974.call(null,G__34975));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35517,f_35496], null),canonical_f_35519], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35517),canonical_f_35519);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35517),canonical_f_35519);
}


var G__35520 = cljs.core.next(seq__34887_35510__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__34887_35497 = G__35520;
chunk__34889_35498 = G__35521;
count__34890_35499 = G__35522;
i__34891_35500 = G__35523;
continue;
}
} else {
}
}
break;
}

var G__35524 = seq__34877_35490;
var G__35525 = chunk__34884_35491;
var G__35526 = count__34885_35492;
var G__35527 = (i__34886_35493 + (1));
seq__34877_35490 = G__35524;
chunk__34884_35491 = G__35525;
count__34885_35492 = G__35526;
i__34886_35493 = G__35527;
continue;
} else {
var temp__5735__auto___35528 = cljs.core.seq(seq__34877_35490);
if(temp__5735__auto___35528){
var seq__34877_35529__$1 = temp__5735__auto___35528;
if(cljs.core.chunked_seq_QMARK_(seq__34877_35529__$1)){
var c__4609__auto___35532 = cljs.core.chunk_first(seq__34877_35529__$1);
var G__35533 = cljs.core.chunk_rest(seq__34877_35529__$1);
var G__35534 = c__4609__auto___35532;
var G__35535 = cljs.core.count(c__4609__auto___35532);
var G__35536 = (0);
seq__34877_35490 = G__35533;
chunk__34884_35491 = G__35534;
count__34885_35492 = G__35535;
i__34886_35493 = G__35536;
continue;
} else {
var vec__34976_35537 = cljs.core.first(seq__34877_35529__$1);
var orig_type_35538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35537,(0),null);
var f_35539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35537,(1),null);
var seq__34878_35542 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35538,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35538,cljs.core.identity])));
var chunk__34880_35543 = null;
var count__34881_35544 = (0);
var i__34882_35545 = (0);
while(true){
if((i__34882_35545 < count__34881_35544)){
var vec__34989_35547 = chunk__34880_35543.cljs$core$IIndexed$_nth$arity$2(null,i__34882_35545);
var actual_type_35548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989_35547,(0),null);
var factory_35549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989_35547,(1),null);
var canonical_f_35550 = (function (){var G__34993 = (factory_35549.cljs$core$IFn$_invoke$arity$1 ? factory_35549.cljs$core$IFn$_invoke$arity$1(f_35539) : factory_35549.call(null,f_35539));
var fexpr__34992 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34992.cljs$core$IFn$_invoke$arity$1 ? fexpr__34992.cljs$core$IFn$_invoke$arity$1(G__34993) : fexpr__34992.call(null,G__34993));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35548,f_35539], null),canonical_f_35550], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35548),canonical_f_35550);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35548),canonical_f_35550);
}


var G__35552 = seq__34878_35542;
var G__35553 = chunk__34880_35543;
var G__35554 = count__34881_35544;
var G__35555 = (i__34882_35545 + (1));
seq__34878_35542 = G__35552;
chunk__34880_35543 = G__35553;
count__34881_35544 = G__35554;
i__34882_35545 = G__35555;
continue;
} else {
var temp__5735__auto___35556__$1 = cljs.core.seq(seq__34878_35542);
if(temp__5735__auto___35556__$1){
var seq__34878_35557__$1 = temp__5735__auto___35556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34878_35557__$1)){
var c__4609__auto___35558 = cljs.core.chunk_first(seq__34878_35557__$1);
var G__35559 = cljs.core.chunk_rest(seq__34878_35557__$1);
var G__35560 = c__4609__auto___35558;
var G__35561 = cljs.core.count(c__4609__auto___35558);
var G__35562 = (0);
seq__34878_35542 = G__35559;
chunk__34880_35543 = G__35560;
count__34881_35544 = G__35561;
i__34882_35545 = G__35562;
continue;
} else {
var vec__34994_35563 = cljs.core.first(seq__34878_35557__$1);
var actual_type_35564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35563,(0),null);
var factory_35565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35563,(1),null);
var canonical_f_35566 = (function (){var G__34998 = (factory_35565.cljs$core$IFn$_invoke$arity$1 ? factory_35565.cljs$core$IFn$_invoke$arity$1(f_35539) : factory_35565.call(null,f_35539));
var fexpr__34997 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34997.cljs$core$IFn$_invoke$arity$1 ? fexpr__34997.cljs$core$IFn$_invoke$arity$1(G__34998) : fexpr__34997.call(null,G__34998));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35564,f_35539], null),canonical_f_35566], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35564),canonical_f_35566);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35564),canonical_f_35566);
}


var G__35571 = cljs.core.next(seq__34878_35557__$1);
var G__35572 = null;
var G__35573 = (0);
var G__35574 = (0);
seq__34878_35542 = G__35571;
chunk__34880_35543 = G__35572;
count__34881_35544 = G__35573;
i__34882_35545 = G__35574;
continue;
}
} else {
}
}
break;
}

var G__35576 = cljs.core.next(seq__34877_35529__$1);
var G__35577 = null;
var G__35578 = (0);
var G__35579 = (0);
seq__34877_35490 = G__35576;
chunk__34884_35491 = G__35577;
count__34885_35492 = G__35578;
i__34886_35493 = G__35579;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34872){
var G__34873 = cljs.core.first(seq34872);
var seq34872__$1 = cljs.core.next(seq34872);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34873,seq34872__$1);
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
var len__4789__auto___35582 = arguments.length;
var i__4790__auto___35583 = (0);
while(true){
if((i__4790__auto___35583 < len__4789__auto___35582)){
args__4795__auto__.push((arguments[i__4790__auto___35583]));

var G__35584 = (i__4790__auto___35583 + (1));
i__4790__auto___35583 = G__35584;
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

var vec__35004_35590 = dommy.core.elem_and_selector(elem_sel);
var elem_35591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35004_35590,(0),null);
var selector_35592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35004_35590,(1),null);
var seq__35007_35594 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35014_35595 = null;
var count__35015_35596 = (0);
var i__35016_35597 = (0);
while(true){
if((i__35016_35597 < count__35015_35596)){
var vec__35082_35599 = chunk__35014_35595.cljs$core$IIndexed$_nth$arity$2(null,i__35016_35597);
var orig_type_35600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35599,(0),null);
var f_35601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35599,(1),null);
var seq__35017_35602 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35600,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35600,cljs.core.identity])));
var chunk__35019_35603 = null;
var count__35020_35604 = (0);
var i__35021_35605 = (0);
while(true){
if((i__35021_35605 < count__35020_35604)){
var vec__35113_35610 = chunk__35019_35603.cljs$core$IIndexed$_nth$arity$2(null,i__35021_35605);
var actual_type_35611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35610,(0),null);
var __35612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35610,(1),null);
var keys_35613 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35592,actual_type_35611,f_35601], null);
var canonical_f_35614 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35591),keys_35613);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35591,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35613], 0));

if(cljs.core.truth_(elem_35591.removeEventListener)){
elem_35591.removeEventListener(cljs.core.name(actual_type_35611),canonical_f_35614);
} else {
elem_35591.detachEvent(cljs.core.name(actual_type_35611),canonical_f_35614);
}


var G__35617 = seq__35017_35602;
var G__35618 = chunk__35019_35603;
var G__35619 = count__35020_35604;
var G__35620 = (i__35021_35605 + (1));
seq__35017_35602 = G__35617;
chunk__35019_35603 = G__35618;
count__35020_35604 = G__35619;
i__35021_35605 = G__35620;
continue;
} else {
var temp__5735__auto___35624 = cljs.core.seq(seq__35017_35602);
if(temp__5735__auto___35624){
var seq__35017_35626__$1 = temp__5735__auto___35624;
if(cljs.core.chunked_seq_QMARK_(seq__35017_35626__$1)){
var c__4609__auto___35627 = cljs.core.chunk_first(seq__35017_35626__$1);
var G__35628 = cljs.core.chunk_rest(seq__35017_35626__$1);
var G__35629 = c__4609__auto___35627;
var G__35630 = cljs.core.count(c__4609__auto___35627);
var G__35631 = (0);
seq__35017_35602 = G__35628;
chunk__35019_35603 = G__35629;
count__35020_35604 = G__35630;
i__35021_35605 = G__35631;
continue;
} else {
var vec__35116_35633 = cljs.core.first(seq__35017_35626__$1);
var actual_type_35634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35633,(0),null);
var __35635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35633,(1),null);
var keys_35637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35592,actual_type_35634,f_35601], null);
var canonical_f_35638 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35591),keys_35637);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35591,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35637], 0));

if(cljs.core.truth_(elem_35591.removeEventListener)){
elem_35591.removeEventListener(cljs.core.name(actual_type_35634),canonical_f_35638);
} else {
elem_35591.detachEvent(cljs.core.name(actual_type_35634),canonical_f_35638);
}


var G__35642 = cljs.core.next(seq__35017_35626__$1);
var G__35643 = null;
var G__35644 = (0);
var G__35645 = (0);
seq__35017_35602 = G__35642;
chunk__35019_35603 = G__35643;
count__35020_35604 = G__35644;
i__35021_35605 = G__35645;
continue;
}
} else {
}
}
break;
}

var G__35647 = seq__35007_35594;
var G__35648 = chunk__35014_35595;
var G__35649 = count__35015_35596;
var G__35650 = (i__35016_35597 + (1));
seq__35007_35594 = G__35647;
chunk__35014_35595 = G__35648;
count__35015_35596 = G__35649;
i__35016_35597 = G__35650;
continue;
} else {
var temp__5735__auto___35651 = cljs.core.seq(seq__35007_35594);
if(temp__5735__auto___35651){
var seq__35007_35652__$1 = temp__5735__auto___35651;
if(cljs.core.chunked_seq_QMARK_(seq__35007_35652__$1)){
var c__4609__auto___35653 = cljs.core.chunk_first(seq__35007_35652__$1);
var G__35655 = cljs.core.chunk_rest(seq__35007_35652__$1);
var G__35656 = c__4609__auto___35653;
var G__35657 = cljs.core.count(c__4609__auto___35653);
var G__35658 = (0);
seq__35007_35594 = G__35655;
chunk__35014_35595 = G__35656;
count__35015_35596 = G__35657;
i__35016_35597 = G__35658;
continue;
} else {
var vec__35122_35662 = cljs.core.first(seq__35007_35652__$1);
var orig_type_35663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35662,(0),null);
var f_35664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35662,(1),null);
var seq__35008_35665 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35663,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35663,cljs.core.identity])));
var chunk__35010_35666 = null;
var count__35011_35667 = (0);
var i__35012_35668 = (0);
while(true){
if((i__35012_35668 < count__35011_35667)){
var vec__35132_35673 = chunk__35010_35666.cljs$core$IIndexed$_nth$arity$2(null,i__35012_35668);
var actual_type_35674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132_35673,(0),null);
var __35675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132_35673,(1),null);
var keys_35677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35592,actual_type_35674,f_35664], null);
var canonical_f_35678 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35591),keys_35677);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35591,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35677], 0));

if(cljs.core.truth_(elem_35591.removeEventListener)){
elem_35591.removeEventListener(cljs.core.name(actual_type_35674),canonical_f_35678);
} else {
elem_35591.detachEvent(cljs.core.name(actual_type_35674),canonical_f_35678);
}


var G__35682 = seq__35008_35665;
var G__35683 = chunk__35010_35666;
var G__35684 = count__35011_35667;
var G__35685 = (i__35012_35668 + (1));
seq__35008_35665 = G__35682;
chunk__35010_35666 = G__35683;
count__35011_35667 = G__35684;
i__35012_35668 = G__35685;
continue;
} else {
var temp__5735__auto___35686__$1 = cljs.core.seq(seq__35008_35665);
if(temp__5735__auto___35686__$1){
var seq__35008_35687__$1 = temp__5735__auto___35686__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35008_35687__$1)){
var c__4609__auto___35690 = cljs.core.chunk_first(seq__35008_35687__$1);
var G__35691 = cljs.core.chunk_rest(seq__35008_35687__$1);
var G__35692 = c__4609__auto___35690;
var G__35693 = cljs.core.count(c__4609__auto___35690);
var G__35694 = (0);
seq__35008_35665 = G__35691;
chunk__35010_35666 = G__35692;
count__35011_35667 = G__35693;
i__35012_35668 = G__35694;
continue;
} else {
var vec__35136_35696 = cljs.core.first(seq__35008_35687__$1);
var actual_type_35697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35696,(0),null);
var __35698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35696,(1),null);
var keys_35701 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35592,actual_type_35697,f_35664], null);
var canonical_f_35702 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35591),keys_35701);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35591,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35701], 0));

if(cljs.core.truth_(elem_35591.removeEventListener)){
elem_35591.removeEventListener(cljs.core.name(actual_type_35697),canonical_f_35702);
} else {
elem_35591.detachEvent(cljs.core.name(actual_type_35697),canonical_f_35702);
}


var G__35704 = cljs.core.next(seq__35008_35687__$1);
var G__35705 = null;
var G__35706 = (0);
var G__35707 = (0);
seq__35008_35665 = G__35704;
chunk__35010_35666 = G__35705;
count__35011_35667 = G__35706;
i__35012_35668 = G__35707;
continue;
}
} else {
}
}
break;
}

var G__35709 = cljs.core.next(seq__35007_35652__$1);
var G__35710 = null;
var G__35711 = (0);
var G__35712 = (0);
seq__35007_35594 = G__35709;
chunk__35014_35595 = G__35710;
count__35015_35596 = G__35711;
i__35016_35597 = G__35712;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35000){
var G__35001 = cljs.core.first(seq35000);
var seq35000__$1 = cljs.core.next(seq35000);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35001,seq35000__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35724 = arguments.length;
var i__4790__auto___35725 = (0);
while(true){
if((i__4790__auto___35725 < len__4789__auto___35724)){
args__4795__auto__.push((arguments[i__4790__auto___35725]));

var G__35726 = (i__4790__auto___35725 + (1));
i__4790__auto___35725 = G__35726;
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

var vec__35141_35730 = dommy.core.elem_and_selector(elem_sel);
var elem_35731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141_35730,(0),null);
var selector_35732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141_35730,(1),null);
var seq__35144_35736 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35145_35737 = null;
var count__35146_35738 = (0);
var i__35147_35739 = (0);
while(true){
if((i__35147_35739 < count__35146_35738)){
var vec__35154_35740 = chunk__35145_35737.cljs$core$IIndexed$_nth$arity$2(null,i__35147_35739);
var type_35741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35740,(0),null);
var f_35742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35740,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35741,((function (seq__35144_35736,chunk__35145_35737,count__35146_35738,i__35147_35739,vec__35154_35740,type_35741,f_35742,vec__35141_35730,elem_35731,selector_35732){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35741,dommy$core$this_fn], 0));

return (f_35742.cljs$core$IFn$_invoke$arity$1 ? f_35742.cljs$core$IFn$_invoke$arity$1(e) : f_35742.call(null,e));
});})(seq__35144_35736,chunk__35145_35737,count__35146_35738,i__35147_35739,vec__35154_35740,type_35741,f_35742,vec__35141_35730,elem_35731,selector_35732))
], 0));


var G__35748 = seq__35144_35736;
var G__35749 = chunk__35145_35737;
var G__35750 = count__35146_35738;
var G__35751 = (i__35147_35739 + (1));
seq__35144_35736 = G__35748;
chunk__35145_35737 = G__35749;
count__35146_35738 = G__35750;
i__35147_35739 = G__35751;
continue;
} else {
var temp__5735__auto___35753 = cljs.core.seq(seq__35144_35736);
if(temp__5735__auto___35753){
var seq__35144_35754__$1 = temp__5735__auto___35753;
if(cljs.core.chunked_seq_QMARK_(seq__35144_35754__$1)){
var c__4609__auto___35755 = cljs.core.chunk_first(seq__35144_35754__$1);
var G__35756 = cljs.core.chunk_rest(seq__35144_35754__$1);
var G__35757 = c__4609__auto___35755;
var G__35758 = cljs.core.count(c__4609__auto___35755);
var G__35759 = (0);
seq__35144_35736 = G__35756;
chunk__35145_35737 = G__35757;
count__35146_35738 = G__35758;
i__35147_35739 = G__35759;
continue;
} else {
var vec__35157_35763 = cljs.core.first(seq__35144_35754__$1);
var type_35764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157_35763,(0),null);
var f_35765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157_35763,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35764,((function (seq__35144_35736,chunk__35145_35737,count__35146_35738,i__35147_35739,vec__35157_35763,type_35764,f_35765,seq__35144_35754__$1,temp__5735__auto___35753,vec__35141_35730,elem_35731,selector_35732){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35764,dommy$core$this_fn], 0));

return (f_35765.cljs$core$IFn$_invoke$arity$1 ? f_35765.cljs$core$IFn$_invoke$arity$1(e) : f_35765.call(null,e));
});})(seq__35144_35736,chunk__35145_35737,count__35146_35738,i__35147_35739,vec__35157_35763,type_35764,f_35765,seq__35144_35754__$1,temp__5735__auto___35753,vec__35141_35730,elem_35731,selector_35732))
], 0));


var G__35769 = cljs.core.next(seq__35144_35754__$1);
var G__35770 = null;
var G__35771 = (0);
var G__35772 = (0);
seq__35144_35736 = G__35769;
chunk__35145_35737 = G__35770;
count__35146_35738 = G__35771;
i__35147_35739 = G__35772;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35139){
var G__35140 = cljs.core.first(seq35139);
var seq35139__$1 = cljs.core.next(seq35139);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35140,seq35139__$1);
}));


//# sourceMappingURL=dommy.core.js.map
