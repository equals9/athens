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
var seq__34726_35179__$1 = temp__5735__auto___35177;
if(cljs.core.chunked_seq_QMARK_(seq__34726_35179__$1)){
var c__4609__auto___35180 = cljs.core.chunk_first(seq__34726_35179__$1);
var G__35182 = cljs.core.chunk_rest(seq__34726_35179__$1);
var G__35183 = c__4609__auto___35180;
var G__35184 = cljs.core.count(c__4609__auto___35180);
var G__35185 = (0);
seq__34726_35166 = G__35182;
chunk__34727_35167 = G__35183;
count__34728_35168 = G__35184;
i__34729_35169 = G__35185;
continue;
} else {
var vec__34739_35186 = cljs.core.first(seq__34726_35179__$1);
var k_35187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35186,(0),null);
var v_35188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35186,(1),null);
style.setProperty(dommy.utils.as_str(k_35187),v_35188);


var G__35189 = cljs.core.next(seq__34726_35179__$1);
var G__35190 = null;
var G__35191 = (0);
var G__35192 = (0);
seq__34726_35166 = G__35189;
chunk__34727_35167 = G__35190;
count__34728_35168 = G__35191;
i__34729_35169 = G__35192;
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
var len__4789__auto___35193 = arguments.length;
var i__4790__auto___35194 = (0);
while(true){
if((i__4790__auto___35194 < len__4789__auto___35193)){
args__4795__auto__.push((arguments[i__4790__auto___35194]));

var G__35195 = (i__4790__auto___35194 + (1));
i__4790__auto___35194 = G__35195;
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
var len__4789__auto___35219 = arguments.length;
var i__4790__auto___35220 = (0);
while(true){
if((i__4790__auto___35220 < len__4789__auto___35219)){
args__4795__auto__.push((arguments[i__4790__auto___35220]));

var G__35221 = (i__4790__auto___35220 + (1));
i__4790__auto___35220 = G__35221;
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

var seq__34751_35222 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34752_35223 = null;
var count__34753_35224 = (0);
var i__34754_35225 = (0);
while(true){
if((i__34754_35225 < count__34753_35224)){
var vec__34761_35226 = chunk__34752_35223.cljs$core$IIndexed$_nth$arity$2(null,i__34754_35225);
var k_35227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35226,(0),null);
var v_35228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35226,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35227,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35228),"px"].join('')], 0));


var G__35230 = seq__34751_35222;
var G__35231 = chunk__34752_35223;
var G__35232 = count__34753_35224;
var G__35233 = (i__34754_35225 + (1));
seq__34751_35222 = G__35230;
chunk__34752_35223 = G__35231;
count__34753_35224 = G__35232;
i__34754_35225 = G__35233;
continue;
} else {
var temp__5735__auto___35235 = cljs.core.seq(seq__34751_35222);
if(temp__5735__auto___35235){
var seq__34751_35236__$1 = temp__5735__auto___35235;
if(cljs.core.chunked_seq_QMARK_(seq__34751_35236__$1)){
var c__4609__auto___35237 = cljs.core.chunk_first(seq__34751_35236__$1);
var G__35238 = cljs.core.chunk_rest(seq__34751_35236__$1);
var G__35239 = c__4609__auto___35237;
var G__35240 = cljs.core.count(c__4609__auto___35237);
var G__35241 = (0);
seq__34751_35222 = G__35238;
chunk__34752_35223 = G__35239;
count__34753_35224 = G__35240;
i__34754_35225 = G__35241;
continue;
} else {
var vec__34764_35242 = cljs.core.first(seq__34751_35236__$1);
var k_35243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35242,(0),null);
var v_35244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35242,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35243,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35244),"px"].join('')], 0));


var G__35245 = cljs.core.next(seq__34751_35236__$1);
var G__35246 = null;
var G__35247 = (0);
var G__35248 = (0);
seq__34751_35222 = G__35245;
chunk__34752_35223 = G__35246;
count__34753_35224 = G__35247;
i__34754_35225 = G__35248;
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
var len__4789__auto___35250 = arguments.length;
var i__4790__auto___35251 = (0);
while(true){
if((i__4790__auto___35251 < len__4789__auto___35250)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35251]));

var G__35252 = (i__4790__auto___35251 + (1));
i__4790__auto___35251 = G__35252;
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
var c__4609__auto___35345 = cljs.core.chunk_first(seq__34812_35343__$1);
var G__35346 = cljs.core.chunk_rest(seq__34812_35343__$1);
var G__35347 = c__4609__auto___35345;
var G__35348 = cljs.core.count(c__4609__auto___35345);
var G__35349 = (0);
seq__34812_35332 = G__35346;
chunk__34813_35333 = G__35347;
count__34814_35334 = G__35348;
i__34815_35335 = G__35349;
continue;
} else {
var c_35350 = cljs.core.first(seq__34812_35343__$1);
var class_name_35351 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35351,c_35350))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35351 === ""))?c_35350:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35351)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35350)].join('')));
}


var G__35352 = cljs.core.next(seq__34812_35343__$1);
var G__35353 = null;
var G__35354 = (0);
var G__35355 = (0);
seq__34812_35332 = G__35352;
chunk__34813_35333 = G__35353;
count__34814_35334 = G__35354;
i__34815_35335 = G__35355;
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
var seq__34819_35357 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34820_35358 = null;
var count__34821_35359 = (0);
var i__34822_35360 = (0);
while(true){
if((i__34822_35360 < count__34821_35359)){
var c_35361 = chunk__34820_35358.cljs$core$IIndexed$_nth$arity$2(null,i__34822_35360);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35361);


var G__35362 = seq__34819_35357;
var G__35363 = chunk__34820_35358;
var G__35364 = count__34821_35359;
var G__35365 = (i__34822_35360 + (1));
seq__34819_35357 = G__35362;
chunk__34820_35358 = G__35363;
count__34821_35359 = G__35364;
i__34822_35360 = G__35365;
continue;
} else {
var temp__5735__auto___35366 = cljs.core.seq(seq__34819_35357);
if(temp__5735__auto___35366){
var seq__34819_35367__$1 = temp__5735__auto___35366;
if(cljs.core.chunked_seq_QMARK_(seq__34819_35367__$1)){
var c__4609__auto___35368 = cljs.core.chunk_first(seq__34819_35367__$1);
var G__35369 = cljs.core.chunk_rest(seq__34819_35367__$1);
var G__35370 = c__4609__auto___35368;
var G__35371 = cljs.core.count(c__4609__auto___35368);
var G__35372 = (0);
seq__34819_35357 = G__35369;
chunk__34820_35358 = G__35370;
count__34821_35359 = G__35371;
i__34822_35360 = G__35372;
continue;
} else {
var c_35373 = cljs.core.first(seq__34819_35367__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35373);


var G__35374 = cljs.core.next(seq__34819_35367__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__34819_35357 = G__35374;
chunk__34820_35358 = G__35375;
count__34821_35359 = G__35376;
i__34822_35360 = G__35377;
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
var len__4789__auto___35381 = arguments.length;
var i__4790__auto___35382 = (0);
while(true){
if((i__4790__auto___35382 < len__4789__auto___35381)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35382]));

var G__35384 = (i__4790__auto___35382 + (1));
i__4790__auto___35382 = G__35384;
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
var temp__5733__auto___35386 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35386)){
var class_list_35387 = temp__5733__auto___35386;
class_list_35387.remove(c__$1);
} else {
var class_name_35388 = dommy.core.class$(elem);
var new_class_name_35389 = dommy.utils.remove_class_str(class_name_35388,c__$1);
if((class_name_35388 === new_class_name_35389)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35389);
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


var G__35395 = seq__34828;
var G__35396 = chunk__34829;
var G__35397 = count__34830;
var G__35398 = (i__34831 + (1));
seq__34828 = G__35395;
chunk__34829 = G__35396;
count__34830 = G__35397;
i__34831 = G__35398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34828);
if(temp__5735__auto__){
var seq__34828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34828__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34828__$1);
var G__35399 = cljs.core.chunk_rest(seq__34828__$1);
var G__35400 = c__4609__auto__;
var G__35401 = cljs.core.count(c__4609__auto__);
var G__35402 = (0);
seq__34828 = G__35399;
chunk__34829 = G__35400;
count__34830 = G__35401;
i__34831 = G__35402;
continue;
} else {
var c = cljs.core.first(seq__34828__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35403 = cljs.core.next(seq__34828__$1);
var G__35404 = null;
var G__35405 = (0);
var G__35406 = (0);
seq__34828 = G__35403;
chunk__34829 = G__35404;
count__34830 = G__35405;
i__34831 = G__35406;
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
var temp__5733__auto___35414 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35414)){
var class_list_35415 = temp__5733__auto___35414;
class_list_35415.toggle(c__$1);
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
var len__4789__auto___35429 = arguments.length;
var i__4790__auto___35430 = (0);
while(true){
if((i__4790__auto___35430 < len__4789__auto___35429)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35430]));

var G__35431 = (i__4790__auto___35430 + (1));
i__4790__auto___35430 = G__35431;
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
var G__34862 = arguments.length;
switch (G__34862) {
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

var vec__34877_35487 = dommy.core.elem_and_selector(elem_sel);
var elem_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34877_35487,(0),null);
var selector_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34877_35487,(1),null);
var seq__34880_35490 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34887_35491 = null;
var count__34888_35492 = (0);
var i__34889_35493 = (0);
while(true){
if((i__34889_35493 < count__34888_35492)){
var vec__34946_35494 = chunk__34887_35491.cljs$core$IIndexed$_nth$arity$2(null,i__34889_35493);
var orig_type_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35494,(0),null);
var f_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35494,(1),null);
var seq__34890_35497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35495,cljs.core.identity])));
var chunk__34892_35498 = null;
var count__34893_35499 = (0);
var i__34894_35500 = (0);
while(true){
if((i__34894_35500 < count__34893_35499)){
var vec__34966_35501 = chunk__34892_35498.cljs$core$IIndexed$_nth$arity$2(null,i__34894_35500);
var actual_type_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966_35501,(0),null);
var factory_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966_35501,(1),null);
var canonical_f_35504 = (function (){var G__34970 = (factory_35503.cljs$core$IFn$_invoke$arity$1 ? factory_35503.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35503.call(null,f_35496));
var fexpr__34969 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34969.cljs$core$IFn$_invoke$arity$1 ? fexpr__34969.cljs$core$IFn$_invoke$arity$1(G__34970) : fexpr__34969.call(null,G__34970));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35502,f_35496], null),canonical_f_35504], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35502),canonical_f_35504);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35502),canonical_f_35504);
}


var G__35509 = seq__34890_35497;
var G__35510 = chunk__34892_35498;
var G__35511 = count__34893_35499;
var G__35512 = (i__34894_35500 + (1));
seq__34890_35497 = G__35509;
chunk__34892_35498 = G__35510;
count__34893_35499 = G__35511;
i__34894_35500 = G__35512;
continue;
} else {
var temp__5735__auto___35513 = cljs.core.seq(seq__34890_35497);
if(temp__5735__auto___35513){
var seq__34890_35515__$1 = temp__5735__auto___35513;
if(cljs.core.chunked_seq_QMARK_(seq__34890_35515__$1)){
var c__4609__auto___35516 = cljs.core.chunk_first(seq__34890_35515__$1);
var G__35518 = cljs.core.chunk_rest(seq__34890_35515__$1);
var G__35519 = c__4609__auto___35516;
var G__35520 = cljs.core.count(c__4609__auto___35516);
var G__35521 = (0);
seq__34890_35497 = G__35518;
chunk__34892_35498 = G__35519;
count__34893_35499 = G__35520;
i__34894_35500 = G__35521;
continue;
} else {
var vec__34971_35522 = cljs.core.first(seq__34890_35515__$1);
var actual_type_35523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35522,(0),null);
var factory_35524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35522,(1),null);
var canonical_f_35525 = (function (){var G__34975 = (factory_35524.cljs$core$IFn$_invoke$arity$1 ? factory_35524.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35524.call(null,f_35496));
var fexpr__34974 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34974.cljs$core$IFn$_invoke$arity$1 ? fexpr__34974.cljs$core$IFn$_invoke$arity$1(G__34975) : fexpr__34974.call(null,G__34975));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35523,f_35496], null),canonical_f_35525], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35523),canonical_f_35525);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35523),canonical_f_35525);
}


var G__35526 = cljs.core.next(seq__34890_35515__$1);
var G__35527 = null;
var G__35528 = (0);
var G__35529 = (0);
seq__34890_35497 = G__35526;
chunk__34892_35498 = G__35527;
count__34893_35499 = G__35528;
i__34894_35500 = G__35529;
continue;
}
} else {
}
}
break;
}

var G__35530 = seq__34880_35490;
var G__35531 = chunk__34887_35491;
var G__35532 = count__34888_35492;
var G__35533 = (i__34889_35493 + (1));
seq__34880_35490 = G__35530;
chunk__34887_35491 = G__35531;
count__34888_35492 = G__35532;
i__34889_35493 = G__35533;
continue;
} else {
var temp__5735__auto___35535 = cljs.core.seq(seq__34880_35490);
if(temp__5735__auto___35535){
var seq__34880_35537__$1 = temp__5735__auto___35535;
if(cljs.core.chunked_seq_QMARK_(seq__34880_35537__$1)){
var c__4609__auto___35540 = cljs.core.chunk_first(seq__34880_35537__$1);
var G__35541 = cljs.core.chunk_rest(seq__34880_35537__$1);
var G__35542 = c__4609__auto___35540;
var G__35543 = cljs.core.count(c__4609__auto___35540);
var G__35544 = (0);
seq__34880_35490 = G__35541;
chunk__34887_35491 = G__35542;
count__34888_35492 = G__35543;
i__34889_35493 = G__35544;
continue;
} else {
var vec__34976_35545 = cljs.core.first(seq__34880_35537__$1);
var orig_type_35546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35545,(0),null);
var f_35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35545,(1),null);
var seq__34881_35548 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35546,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35546,cljs.core.identity])));
var chunk__34883_35549 = null;
var count__34884_35550 = (0);
var i__34885_35551 = (0);
while(true){
if((i__34885_35551 < count__34884_35550)){
var vec__34989_35555 = chunk__34883_35549.cljs$core$IIndexed$_nth$arity$2(null,i__34885_35551);
var actual_type_35556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989_35555,(0),null);
var factory_35557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989_35555,(1),null);
var canonical_f_35558 = (function (){var G__34993 = (factory_35557.cljs$core$IFn$_invoke$arity$1 ? factory_35557.cljs$core$IFn$_invoke$arity$1(f_35547) : factory_35557.call(null,f_35547));
var fexpr__34992 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34992.cljs$core$IFn$_invoke$arity$1 ? fexpr__34992.cljs$core$IFn$_invoke$arity$1(G__34993) : fexpr__34992.call(null,G__34993));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35556,f_35547], null),canonical_f_35558], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35556),canonical_f_35558);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35556),canonical_f_35558);
}


var G__35561 = seq__34881_35548;
var G__35562 = chunk__34883_35549;
var G__35563 = count__34884_35550;
var G__35564 = (i__34885_35551 + (1));
seq__34881_35548 = G__35561;
chunk__34883_35549 = G__35562;
count__34884_35550 = G__35563;
i__34885_35551 = G__35564;
continue;
} else {
var temp__5735__auto___35569__$1 = cljs.core.seq(seq__34881_35548);
if(temp__5735__auto___35569__$1){
var seq__34881_35570__$1 = temp__5735__auto___35569__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34881_35570__$1)){
var c__4609__auto___35572 = cljs.core.chunk_first(seq__34881_35570__$1);
var G__35573 = cljs.core.chunk_rest(seq__34881_35570__$1);
var G__35574 = c__4609__auto___35572;
var G__35575 = cljs.core.count(c__4609__auto___35572);
var G__35576 = (0);
seq__34881_35548 = G__35573;
chunk__34883_35549 = G__35574;
count__34884_35550 = G__35575;
i__34885_35551 = G__35576;
continue;
} else {
var vec__34995_35577 = cljs.core.first(seq__34881_35570__$1);
var actual_type_35578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34995_35577,(0),null);
var factory_35579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34995_35577,(1),null);
var canonical_f_35582 = (function (){var G__34999 = (factory_35579.cljs$core$IFn$_invoke$arity$1 ? factory_35579.cljs$core$IFn$_invoke$arity$1(f_35547) : factory_35579.call(null,f_35547));
var fexpr__34998 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34998.cljs$core$IFn$_invoke$arity$1 ? fexpr__34998.cljs$core$IFn$_invoke$arity$1(G__34999) : fexpr__34998.call(null,G__34999));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35578,f_35547], null),canonical_f_35582], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35578),canonical_f_35582);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35578),canonical_f_35582);
}


var G__35585 = cljs.core.next(seq__34881_35570__$1);
var G__35586 = null;
var G__35587 = (0);
var G__35588 = (0);
seq__34881_35548 = G__35585;
chunk__34883_35549 = G__35586;
count__34884_35550 = G__35587;
i__34885_35551 = G__35588;
continue;
}
} else {
}
}
break;
}

var G__35589 = cljs.core.next(seq__34880_35537__$1);
var G__35590 = null;
var G__35591 = (0);
var G__35592 = (0);
seq__34880_35490 = G__35589;
chunk__34887_35491 = G__35590;
count__34888_35492 = G__35591;
i__34889_35493 = G__35592;
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
var len__4789__auto___35600 = arguments.length;
var i__4790__auto___35601 = (0);
while(true){
if((i__4790__auto___35601 < len__4789__auto___35600)){
args__4795__auto__.push((arguments[i__4790__auto___35601]));

var G__35604 = (i__4790__auto___35601 + (1));
i__4790__auto___35601 = G__35604;
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

var vec__35006_35608 = dommy.core.elem_and_selector(elem_sel);
var elem_35609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35608,(0),null);
var selector_35610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35608,(1),null);
var seq__35009_35611 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35016_35612 = null;
var count__35017_35613 = (0);
var i__35018_35614 = (0);
while(true){
if((i__35018_35614 < count__35017_35613)){
var vec__35082_35617 = chunk__35016_35612.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35614);
var orig_type_35618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35617,(0),null);
var f_35619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35617,(1),null);
var seq__35019_35622 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35618,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35618,cljs.core.identity])));
var chunk__35021_35623 = null;
var count__35022_35624 = (0);
var i__35023_35625 = (0);
while(true){
if((i__35023_35625 < count__35022_35624)){
var vec__35109_35629 = chunk__35021_35623.cljs$core$IIndexed$_nth$arity$2(null,i__35023_35625);
var actual_type_35630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35109_35629,(0),null);
var __35631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35109_35629,(1),null);
var keys_35634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35610,actual_type_35630,f_35619], null);
var canonical_f_35635 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35609),keys_35634);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35609,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35634], 0));

if(cljs.core.truth_(elem_35609.removeEventListener)){
elem_35609.removeEventListener(cljs.core.name(actual_type_35630),canonical_f_35635);
} else {
elem_35609.detachEvent(cljs.core.name(actual_type_35630),canonical_f_35635);
}


var G__35639 = seq__35019_35622;
var G__35640 = chunk__35021_35623;
var G__35641 = count__35022_35624;
var G__35642 = (i__35023_35625 + (1));
seq__35019_35622 = G__35639;
chunk__35021_35623 = G__35640;
count__35022_35624 = G__35641;
i__35023_35625 = G__35642;
continue;
} else {
var temp__5735__auto___35643 = cljs.core.seq(seq__35019_35622);
if(temp__5735__auto___35643){
var seq__35019_35644__$1 = temp__5735__auto___35643;
if(cljs.core.chunked_seq_QMARK_(seq__35019_35644__$1)){
var c__4609__auto___35647 = cljs.core.chunk_first(seq__35019_35644__$1);
var G__35649 = cljs.core.chunk_rest(seq__35019_35644__$1);
var G__35650 = c__4609__auto___35647;
var G__35651 = cljs.core.count(c__4609__auto___35647);
var G__35652 = (0);
seq__35019_35622 = G__35649;
chunk__35021_35623 = G__35650;
count__35022_35624 = G__35651;
i__35023_35625 = G__35652;
continue;
} else {
var vec__35116_35653 = cljs.core.first(seq__35019_35644__$1);
var actual_type_35654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35653,(0),null);
var __35655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35653,(1),null);
var keys_35659 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35610,actual_type_35654,f_35619], null);
var canonical_f_35660 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35609),keys_35659);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35609,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35659], 0));

if(cljs.core.truth_(elem_35609.removeEventListener)){
elem_35609.removeEventListener(cljs.core.name(actual_type_35654),canonical_f_35660);
} else {
elem_35609.detachEvent(cljs.core.name(actual_type_35654),canonical_f_35660);
}


var G__35662 = cljs.core.next(seq__35019_35644__$1);
var G__35663 = null;
var G__35664 = (0);
var G__35665 = (0);
seq__35019_35622 = G__35662;
chunk__35021_35623 = G__35663;
count__35022_35624 = G__35664;
i__35023_35625 = G__35665;
continue;
}
} else {
}
}
break;
}

var G__35671 = seq__35009_35611;
var G__35672 = chunk__35016_35612;
var G__35673 = count__35017_35613;
var G__35674 = (i__35018_35614 + (1));
seq__35009_35611 = G__35671;
chunk__35016_35612 = G__35672;
count__35017_35613 = G__35673;
i__35018_35614 = G__35674;
continue;
} else {
var temp__5735__auto___35678 = cljs.core.seq(seq__35009_35611);
if(temp__5735__auto___35678){
var seq__35009_35680__$1 = temp__5735__auto___35678;
if(cljs.core.chunked_seq_QMARK_(seq__35009_35680__$1)){
var c__4609__auto___35682 = cljs.core.chunk_first(seq__35009_35680__$1);
var G__35684 = cljs.core.chunk_rest(seq__35009_35680__$1);
var G__35685 = c__4609__auto___35682;
var G__35686 = cljs.core.count(c__4609__auto___35682);
var G__35687 = (0);
seq__35009_35611 = G__35684;
chunk__35016_35612 = G__35685;
count__35017_35613 = G__35686;
i__35018_35614 = G__35687;
continue;
} else {
var vec__35119_35688 = cljs.core.first(seq__35009_35680__$1);
var orig_type_35689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119_35688,(0),null);
var f_35690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119_35688,(1),null);
var seq__35010_35693 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35689,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35689,cljs.core.identity])));
var chunk__35012_35694 = null;
var count__35013_35695 = (0);
var i__35014_35696 = (0);
while(true){
if((i__35014_35696 < count__35013_35695)){
var vec__35131_35698 = chunk__35012_35694.cljs$core$IIndexed$_nth$arity$2(null,i__35014_35696);
var actual_type_35699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131_35698,(0),null);
var __35700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131_35698,(1),null);
var keys_35703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35610,actual_type_35699,f_35690], null);
var canonical_f_35704 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35609),keys_35703);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35609,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35703], 0));

if(cljs.core.truth_(elem_35609.removeEventListener)){
elem_35609.removeEventListener(cljs.core.name(actual_type_35699),canonical_f_35704);
} else {
elem_35609.detachEvent(cljs.core.name(actual_type_35699),canonical_f_35704);
}


var G__35708 = seq__35010_35693;
var G__35709 = chunk__35012_35694;
var G__35710 = count__35013_35695;
var G__35711 = (i__35014_35696 + (1));
seq__35010_35693 = G__35708;
chunk__35012_35694 = G__35709;
count__35013_35695 = G__35710;
i__35014_35696 = G__35711;
continue;
} else {
var temp__5735__auto___35713__$1 = cljs.core.seq(seq__35010_35693);
if(temp__5735__auto___35713__$1){
var seq__35010_35714__$1 = temp__5735__auto___35713__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35010_35714__$1)){
var c__4609__auto___35715 = cljs.core.chunk_first(seq__35010_35714__$1);
var G__35717 = cljs.core.chunk_rest(seq__35010_35714__$1);
var G__35718 = c__4609__auto___35715;
var G__35719 = cljs.core.count(c__4609__auto___35715);
var G__35720 = (0);
seq__35010_35693 = G__35717;
chunk__35012_35694 = G__35718;
count__35013_35695 = G__35719;
i__35014_35696 = G__35720;
continue;
} else {
var vec__35135_35723 = cljs.core.first(seq__35010_35714__$1);
var actual_type_35724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35135_35723,(0),null);
var __35725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35135_35723,(1),null);
var keys_35726 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35610,actual_type_35724,f_35690], null);
var canonical_f_35727 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35609),keys_35726);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35609,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35726], 0));

if(cljs.core.truth_(elem_35609.removeEventListener)){
elem_35609.removeEventListener(cljs.core.name(actual_type_35724),canonical_f_35727);
} else {
elem_35609.detachEvent(cljs.core.name(actual_type_35724),canonical_f_35727);
}


var G__35731 = cljs.core.next(seq__35010_35714__$1);
var G__35732 = null;
var G__35733 = (0);
var G__35734 = (0);
seq__35010_35693 = G__35731;
chunk__35012_35694 = G__35732;
count__35013_35695 = G__35733;
i__35014_35696 = G__35734;
continue;
}
} else {
}
}
break;
}

var G__35738 = cljs.core.next(seq__35009_35680__$1);
var G__35739 = null;
var G__35740 = (0);
var G__35741 = (0);
seq__35009_35611 = G__35738;
chunk__35016_35612 = G__35739;
count__35017_35613 = G__35740;
i__35018_35614 = G__35741;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35002){
var G__35003 = cljs.core.first(seq35002);
var seq35002__$1 = cljs.core.next(seq35002);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35003,seq35002__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35744 = arguments.length;
var i__4790__auto___35745 = (0);
while(true){
if((i__4790__auto___35745 < len__4789__auto___35744)){
args__4795__auto__.push((arguments[i__4790__auto___35745]));

var G__35746 = (i__4790__auto___35745 + (1));
i__4790__auto___35745 = G__35746;
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

var vec__35141_35769 = dommy.core.elem_and_selector(elem_sel);
var elem_35770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141_35769,(0),null);
var selector_35771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141_35769,(1),null);
var seq__35144_35773 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35145_35774 = null;
var count__35146_35775 = (0);
var i__35147_35776 = (0);
while(true){
if((i__35147_35776 < count__35146_35775)){
var vec__35154_35777 = chunk__35145_35774.cljs$core$IIndexed$_nth$arity$2(null,i__35147_35776);
var type_35778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35777,(0),null);
var f_35779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35777,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35778,((function (seq__35144_35773,chunk__35145_35774,count__35146_35775,i__35147_35776,vec__35154_35777,type_35778,f_35779,vec__35141_35769,elem_35770,selector_35771){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35778,dommy$core$this_fn], 0));

return (f_35779.cljs$core$IFn$_invoke$arity$1 ? f_35779.cljs$core$IFn$_invoke$arity$1(e) : f_35779.call(null,e));
});})(seq__35144_35773,chunk__35145_35774,count__35146_35775,i__35147_35776,vec__35154_35777,type_35778,f_35779,vec__35141_35769,elem_35770,selector_35771))
], 0));


var G__35783 = seq__35144_35773;
var G__35784 = chunk__35145_35774;
var G__35785 = count__35146_35775;
var G__35786 = (i__35147_35776 + (1));
seq__35144_35773 = G__35783;
chunk__35145_35774 = G__35784;
count__35146_35775 = G__35785;
i__35147_35776 = G__35786;
continue;
} else {
var temp__5735__auto___35793 = cljs.core.seq(seq__35144_35773);
if(temp__5735__auto___35793){
var seq__35144_35795__$1 = temp__5735__auto___35793;
if(cljs.core.chunked_seq_QMARK_(seq__35144_35795__$1)){
var c__4609__auto___35796 = cljs.core.chunk_first(seq__35144_35795__$1);
var G__35798 = cljs.core.chunk_rest(seq__35144_35795__$1);
var G__35799 = c__4609__auto___35796;
var G__35800 = cljs.core.count(c__4609__auto___35796);
var G__35801 = (0);
seq__35144_35773 = G__35798;
chunk__35145_35774 = G__35799;
count__35146_35775 = G__35800;
i__35147_35776 = G__35801;
continue;
} else {
var vec__35157_35802 = cljs.core.first(seq__35144_35795__$1);
var type_35803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157_35802,(0),null);
var f_35804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157_35802,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35803,((function (seq__35144_35773,chunk__35145_35774,count__35146_35775,i__35147_35776,vec__35157_35802,type_35803,f_35804,seq__35144_35795__$1,temp__5735__auto___35793,vec__35141_35769,elem_35770,selector_35771){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35803,dommy$core$this_fn], 0));

return (f_35804.cljs$core$IFn$_invoke$arity$1 ? f_35804.cljs$core$IFn$_invoke$arity$1(e) : f_35804.call(null,e));
});})(seq__35144_35773,chunk__35145_35774,count__35146_35775,i__35147_35776,vec__35157_35802,type_35803,f_35804,seq__35144_35795__$1,temp__5735__auto___35793,vec__35141_35769,elem_35770,selector_35771))
], 0));


var G__35816 = cljs.core.next(seq__35144_35795__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35144_35773 = G__35816;
chunk__35145_35774 = G__35817;
count__35146_35775 = G__35818;
i__35147_35776 = G__35819;
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
