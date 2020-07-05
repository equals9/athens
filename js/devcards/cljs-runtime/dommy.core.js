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
var len__4789__auto___35191 = arguments.length;
var i__4790__auto___35192 = (0);
while(true){
if((i__4790__auto___35192 < len__4789__auto___35191)){
args__4795__auto__.push((arguments[i__4790__auto___35192]));

var G__35193 = (i__4790__auto___35192 + (1));
i__4790__auto___35192 = G__35193;
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
var seq__34744_35194 = cljs.core.seq(keywords);
var chunk__34745_35195 = null;
var count__34746_35196 = (0);
var i__34747_35197 = (0);
while(true){
if((i__34747_35197 < count__34746_35196)){
var kw_35198 = chunk__34745_35195.cljs$core$IIndexed$_nth$arity$2(null,i__34747_35197);
style.removeProperty(dommy.utils.as_str(kw_35198));


var G__35199 = seq__34744_35194;
var G__35200 = chunk__34745_35195;
var G__35201 = count__34746_35196;
var G__35202 = (i__34747_35197 + (1));
seq__34744_35194 = G__35199;
chunk__34745_35195 = G__35200;
count__34746_35196 = G__35201;
i__34747_35197 = G__35202;
continue;
} else {
var temp__5735__auto___35203 = cljs.core.seq(seq__34744_35194);
if(temp__5735__auto___35203){
var seq__34744_35204__$1 = temp__5735__auto___35203;
if(cljs.core.chunked_seq_QMARK_(seq__34744_35204__$1)){
var c__4609__auto___35205 = cljs.core.chunk_first(seq__34744_35204__$1);
var G__35206 = cljs.core.chunk_rest(seq__34744_35204__$1);
var G__35207 = c__4609__auto___35205;
var G__35208 = cljs.core.count(c__4609__auto___35205);
var G__35209 = (0);
seq__34744_35194 = G__35206;
chunk__34745_35195 = G__35207;
count__34746_35196 = G__35208;
i__34747_35197 = G__35209;
continue;
} else {
var kw_35210 = cljs.core.first(seq__34744_35204__$1);
style.removeProperty(dommy.utils.as_str(kw_35210));


var G__35211 = cljs.core.next(seq__34744_35204__$1);
var G__35212 = null;
var G__35213 = (0);
var G__35214 = (0);
seq__34744_35194 = G__35211;
chunk__34745_35195 = G__35212;
count__34746_35196 = G__35213;
i__34747_35197 = G__35214;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34742){
var G__34743 = cljs.core.first(seq34742);
var seq34742__$1 = cljs.core.next(seq34742);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34743,seq34742__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35215 = arguments.length;
var i__4790__auto___35216 = (0);
while(true){
if((i__4790__auto___35216 < len__4789__auto___35215)){
args__4795__auto__.push((arguments[i__4790__auto___35216]));

var G__35217 = (i__4790__auto___35216 + (1));
i__4790__auto___35216 = G__35217;
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

var seq__34751_35218 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34752_35219 = null;
var count__34753_35220 = (0);
var i__34754_35221 = (0);
while(true){
if((i__34754_35221 < count__34753_35220)){
var vec__34761_35222 = chunk__34752_35219.cljs$core$IIndexed$_nth$arity$2(null,i__34754_35221);
var k_35223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35222,(0),null);
var v_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35222,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35223,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35224),"px"].join('')], 0));


var G__35226 = seq__34751_35218;
var G__35227 = chunk__34752_35219;
var G__35228 = count__34753_35220;
var G__35229 = (i__34754_35221 + (1));
seq__34751_35218 = G__35226;
chunk__34752_35219 = G__35227;
count__34753_35220 = G__35228;
i__34754_35221 = G__35229;
continue;
} else {
var temp__5735__auto___35231 = cljs.core.seq(seq__34751_35218);
if(temp__5735__auto___35231){
var seq__34751_35232__$1 = temp__5735__auto___35231;
if(cljs.core.chunked_seq_QMARK_(seq__34751_35232__$1)){
var c__4609__auto___35233 = cljs.core.chunk_first(seq__34751_35232__$1);
var G__35234 = cljs.core.chunk_rest(seq__34751_35232__$1);
var G__35235 = c__4609__auto___35233;
var G__35236 = cljs.core.count(c__4609__auto___35233);
var G__35237 = (0);
seq__34751_35218 = G__35234;
chunk__34752_35219 = G__35235;
count__34753_35220 = G__35236;
i__34754_35221 = G__35237;
continue;
} else {
var vec__34764_35238 = cljs.core.first(seq__34751_35232__$1);
var k_35239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35238,(0),null);
var v_35240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35238,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35239,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35240),"px"].join('')], 0));


var G__35241 = cljs.core.next(seq__34751_35232__$1);
var G__35242 = null;
var G__35243 = (0);
var G__35244 = (0);
seq__34751_35218 = G__35241;
chunk__34752_35219 = G__35242;
count__34753_35220 = G__35243;
i__34754_35221 = G__35244;
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
var len__4789__auto___35246 = arguments.length;
var i__4790__auto___35247 = (0);
while(true){
if((i__4790__auto___35247 < len__4789__auto___35246)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35247]));

var G__35248 = (i__4790__auto___35247 + (1));
i__4790__auto___35247 = G__35248;
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

var seq__34775_35251 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34776_35252 = null;
var count__34777_35253 = (0);
var i__34778_35254 = (0);
while(true){
if((i__34778_35254 < count__34777_35253)){
var vec__34785_35255 = chunk__34776_35252.cljs$core$IIndexed$_nth$arity$2(null,i__34778_35254);
var k_35256__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35255,(0),null);
var v_35257__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35255,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35256__$1,v_35257__$1);


var G__35258 = seq__34775_35251;
var G__35259 = chunk__34776_35252;
var G__35260 = count__34777_35253;
var G__35261 = (i__34778_35254 + (1));
seq__34775_35251 = G__35258;
chunk__34776_35252 = G__35259;
count__34777_35253 = G__35260;
i__34778_35254 = G__35261;
continue;
} else {
var temp__5735__auto___35262 = cljs.core.seq(seq__34775_35251);
if(temp__5735__auto___35262){
var seq__34775_35263__$1 = temp__5735__auto___35262;
if(cljs.core.chunked_seq_QMARK_(seq__34775_35263__$1)){
var c__4609__auto___35264 = cljs.core.chunk_first(seq__34775_35263__$1);
var G__35265 = cljs.core.chunk_rest(seq__34775_35263__$1);
var G__35266 = c__4609__auto___35264;
var G__35267 = cljs.core.count(c__4609__auto___35264);
var G__35268 = (0);
seq__34775_35251 = G__35265;
chunk__34776_35252 = G__35266;
count__34777_35253 = G__35267;
i__34778_35254 = G__35268;
continue;
} else {
var vec__34788_35270 = cljs.core.first(seq__34775_35263__$1);
var k_35271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35270,(0),null);
var v_35272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35270,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35271__$1,v_35272__$1);


var G__35274 = cljs.core.next(seq__34775_35263__$1);
var G__35275 = null;
var G__35276 = (0);
var G__35277 = (0);
seq__34775_35251 = G__35274;
chunk__34776_35252 = G__35275;
count__34777_35253 = G__35276;
i__34778_35254 = G__35277;
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
var seq__34816_35355 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34817_35356 = null;
var count__34818_35357 = (0);
var i__34819_35358 = (0);
while(true){
if((i__34819_35358 < count__34818_35357)){
var c_35359 = chunk__34817_35356.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35358);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35359);


var G__35360 = seq__34816_35355;
var G__35361 = chunk__34817_35356;
var G__35362 = count__34818_35357;
var G__35363 = (i__34819_35358 + (1));
seq__34816_35355 = G__35360;
chunk__34817_35356 = G__35361;
count__34818_35357 = G__35362;
i__34819_35358 = G__35363;
continue;
} else {
var temp__5735__auto___35364 = cljs.core.seq(seq__34816_35355);
if(temp__5735__auto___35364){
var seq__34816_35365__$1 = temp__5735__auto___35364;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35365__$1)){
var c__4609__auto___35366 = cljs.core.chunk_first(seq__34816_35365__$1);
var G__35367 = cljs.core.chunk_rest(seq__34816_35365__$1);
var G__35368 = c__4609__auto___35366;
var G__35369 = cljs.core.count(c__4609__auto___35366);
var G__35370 = (0);
seq__34816_35355 = G__35367;
chunk__34817_35356 = G__35368;
count__34818_35357 = G__35369;
i__34819_35358 = G__35370;
continue;
} else {
var c_35371 = cljs.core.first(seq__34816_35365__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35371);


var G__35372 = cljs.core.next(seq__34816_35365__$1);
var G__35373 = null;
var G__35374 = (0);
var G__35375 = (0);
seq__34816_35355 = G__35372;
chunk__34817_35356 = G__35373;
count__34818_35357 = G__35374;
i__34819_35358 = G__35375;
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
var G__34824 = arguments.length;
switch (G__34824) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35377 = arguments.length;
var i__4790__auto___35378 = (0);
while(true){
if((i__4790__auto___35378 < len__4789__auto___35377)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35378]));

var G__35379 = (i__4790__auto___35378 + (1));
i__4790__auto___35378 = G__35379;
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
var temp__5733__auto___35381 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35381)){
var class_list_35382 = temp__5733__auto___35381;
class_list_35382.remove(c__$1);
} else {
var class_name_35383 = dommy.core.class$(elem);
var new_class_name_35384 = dommy.utils.remove_class_str(class_name_35383,c__$1);
if((class_name_35383 === new_class_name_35384)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35384);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34825 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34826 = null;
var count__34827 = (0);
var i__34828 = (0);
while(true){
if((i__34828 < count__34827)){
var c = chunk__34826.cljs$core$IIndexed$_nth$arity$2(null,i__34828);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35386 = seq__34825;
var G__35387 = chunk__34826;
var G__35388 = count__34827;
var G__35389 = (i__34828 + (1));
seq__34825 = G__35386;
chunk__34826 = G__35387;
count__34827 = G__35388;
i__34828 = G__35389;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34825);
if(temp__5735__auto__){
var seq__34825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34825__$1);
var G__35390 = cljs.core.chunk_rest(seq__34825__$1);
var G__35391 = c__4609__auto__;
var G__35392 = cljs.core.count(c__4609__auto__);
var G__35393 = (0);
seq__34825 = G__35390;
chunk__34826 = G__35391;
count__34827 = G__35392;
i__34828 = G__35393;
continue;
} else {
var c = cljs.core.first(seq__34825__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35395 = cljs.core.next(seq__34825__$1);
var G__35396 = null;
var G__35397 = (0);
var G__35398 = (0);
seq__34825 = G__35395;
chunk__34826 = G__35396;
count__34827 = G__35397;
i__34828 = G__35398;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34821){
var G__34822 = cljs.core.first(seq34821);
var seq34821__$1 = cljs.core.next(seq34821);
var G__34823 = cljs.core.first(seq34821__$1);
var seq34821__$2 = cljs.core.next(seq34821__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34822,G__34823,seq34821__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34830 = arguments.length;
switch (G__34830) {
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
var temp__5733__auto___35403 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35403)){
var class_list_35404 = temp__5733__auto___35403;
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
var G__34832 = arguments.length;
switch (G__34832) {
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
var G__34835 = arguments.length;
switch (G__34835) {
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
var G__34840 = arguments.length;
switch (G__34840) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35419 = arguments.length;
var i__4790__auto___35420 = (0);
while(true){
if((i__4790__auto___35420 < len__4789__auto___35419)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35420]));

var G__35421 = (i__4790__auto___35420 + (1));
i__4790__auto___35420 = G__35421;
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
var seq__34844_35425 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34845_35426 = null;
var count__34846_35427 = (0);
var i__34847_35428 = (0);
while(true){
if((i__34847_35428 < count__34846_35427)){
var c_35431 = chunk__34845_35426.cljs$core$IIndexed$_nth$arity$2(null,i__34847_35428);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35431);


var G__35432 = seq__34844_35425;
var G__35433 = chunk__34845_35426;
var G__35434 = count__34846_35427;
var G__35435 = (i__34847_35428 + (1));
seq__34844_35425 = G__35432;
chunk__34845_35426 = G__35433;
count__34846_35427 = G__35434;
i__34847_35428 = G__35435;
continue;
} else {
var temp__5735__auto___35436 = cljs.core.seq(seq__34844_35425);
if(temp__5735__auto___35436){
var seq__34844_35437__$1 = temp__5735__auto___35436;
if(cljs.core.chunked_seq_QMARK_(seq__34844_35437__$1)){
var c__4609__auto___35439 = cljs.core.chunk_first(seq__34844_35437__$1);
var G__35440 = cljs.core.chunk_rest(seq__34844_35437__$1);
var G__35441 = c__4609__auto___35439;
var G__35442 = cljs.core.count(c__4609__auto___35439);
var G__35443 = (0);
seq__34844_35425 = G__35440;
chunk__34845_35426 = G__35441;
count__34846_35427 = G__35442;
i__34847_35428 = G__35443;
continue;
} else {
var c_35448 = cljs.core.first(seq__34844_35437__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35448);


var G__35449 = cljs.core.next(seq__34844_35437__$1);
var G__35450 = null;
var G__35451 = (0);
var G__35452 = (0);
seq__34844_35425 = G__35449;
chunk__34845_35426 = G__35450;
count__34846_35427 = G__35451;
i__34847_35428 = G__35452;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34837){
var G__34838 = cljs.core.first(seq34837);
var seq34837__$1 = cljs.core.next(seq34837);
var G__34839 = cljs.core.first(seq34837__$1);
var seq34837__$2 = cljs.core.next(seq34837__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34838,G__34839,seq34837__$2);
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
var G__34860 = p;
G__34860.removeChild(elem);

return G__34860;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34861){
var vec__34862 = p__34861;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(1),null);
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34865){
var G__34866 = cljs.core.first(seq34865);
var seq34865__$1 = cljs.core.next(seq34865);
var G__34867 = cljs.core.first(seq34865__$1);
var seq34865__$2 = cljs.core.next(seq34865__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34866,G__34867,seq34865__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34868 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34868.cljs$core$IFn$_invoke$arity$1 ? fexpr__34868.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34868.call(null,elem_sel));
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

var vec__34871_35487 = dommy.core.elem_and_selector(elem_sel);
var elem_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35487,(0),null);
var selector_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35487,(1),null);
var seq__34874_35490 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34881_35491 = null;
var count__34882_35492 = (0);
var i__34883_35493 = (0);
while(true){
if((i__34883_35493 < count__34882_35492)){
var vec__34942_35494 = chunk__34881_35491.cljs$core$IIndexed$_nth$arity$2(null,i__34883_35493);
var orig_type_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34942_35494,(0),null);
var f_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34942_35494,(1),null);
var seq__34884_35497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35495,cljs.core.identity])));
var chunk__34886_35498 = null;
var count__34887_35499 = (0);
var i__34888_35500 = (0);
while(true){
if((i__34888_35500 < count__34887_35499)){
var vec__34955_35501 = chunk__34886_35498.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35500);
var actual_type_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35501,(0),null);
var factory_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35501,(1),null);
var canonical_f_35504 = (function (){var G__34959 = (factory_35503.cljs$core$IFn$_invoke$arity$1 ? factory_35503.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35503.call(null,f_35496));
var fexpr__34958 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34958.cljs$core$IFn$_invoke$arity$1 ? fexpr__34958.cljs$core$IFn$_invoke$arity$1(G__34959) : fexpr__34958.call(null,G__34959));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35502,f_35496], null),canonical_f_35504], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35502),canonical_f_35504);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35502),canonical_f_35504);
}


var G__35505 = seq__34884_35497;
var G__35506 = chunk__34886_35498;
var G__35507 = count__34887_35499;
var G__35508 = (i__34888_35500 + (1));
seq__34884_35497 = G__35505;
chunk__34886_35498 = G__35506;
count__34887_35499 = G__35507;
i__34888_35500 = G__35508;
continue;
} else {
var temp__5735__auto___35509 = cljs.core.seq(seq__34884_35497);
if(temp__5735__auto___35509){
var seq__34884_35510__$1 = temp__5735__auto___35509;
if(cljs.core.chunked_seq_QMARK_(seq__34884_35510__$1)){
var c__4609__auto___35511 = cljs.core.chunk_first(seq__34884_35510__$1);
var G__35512 = cljs.core.chunk_rest(seq__34884_35510__$1);
var G__35513 = c__4609__auto___35511;
var G__35514 = cljs.core.count(c__4609__auto___35511);
var G__35515 = (0);
seq__34884_35497 = G__35512;
chunk__34886_35498 = G__35513;
count__34887_35499 = G__35514;
i__34888_35500 = G__35515;
continue;
} else {
var vec__34960_35516 = cljs.core.first(seq__34884_35510__$1);
var actual_type_35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960_35516,(0),null);
var factory_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960_35516,(1),null);
var canonical_f_35519 = (function (){var G__34964 = (factory_35518.cljs$core$IFn$_invoke$arity$1 ? factory_35518.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35518.call(null,f_35496));
var fexpr__34963 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34963.cljs$core$IFn$_invoke$arity$1 ? fexpr__34963.cljs$core$IFn$_invoke$arity$1(G__34964) : fexpr__34963.call(null,G__34964));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35517,f_35496], null),canonical_f_35519], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35517),canonical_f_35519);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35517),canonical_f_35519);
}


var G__35520 = cljs.core.next(seq__34884_35510__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__34884_35497 = G__35520;
chunk__34886_35498 = G__35521;
count__34887_35499 = G__35522;
i__34888_35500 = G__35523;
continue;
}
} else {
}
}
break;
}

var G__35526 = seq__34874_35490;
var G__35527 = chunk__34881_35491;
var G__35528 = count__34882_35492;
var G__35529 = (i__34883_35493 + (1));
seq__34874_35490 = G__35526;
chunk__34881_35491 = G__35527;
count__34882_35492 = G__35528;
i__34883_35493 = G__35529;
continue;
} else {
var temp__5735__auto___35530 = cljs.core.seq(seq__34874_35490);
if(temp__5735__auto___35530){
var seq__34874_35532__$1 = temp__5735__auto___35530;
if(cljs.core.chunked_seq_QMARK_(seq__34874_35532__$1)){
var c__4609__auto___35534 = cljs.core.chunk_first(seq__34874_35532__$1);
var G__35535 = cljs.core.chunk_rest(seq__34874_35532__$1);
var G__35536 = c__4609__auto___35534;
var G__35537 = cljs.core.count(c__4609__auto___35534);
var G__35538 = (0);
seq__34874_35490 = G__35535;
chunk__34881_35491 = G__35536;
count__34882_35492 = G__35537;
i__34883_35493 = G__35538;
continue;
} else {
var vec__34965_35540 = cljs.core.first(seq__34874_35532__$1);
var orig_type_35541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35540,(0),null);
var f_35542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35540,(1),null);
var seq__34875_35544 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35541,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35541,cljs.core.identity])));
var chunk__34877_35545 = null;
var count__34878_35546 = (0);
var i__34879_35547 = (0);
while(true){
if((i__34879_35547 < count__34878_35546)){
var vec__34982_35548 = chunk__34877_35545.cljs$core$IIndexed$_nth$arity$2(null,i__34879_35547);
var actual_type_35549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35548,(0),null);
var factory_35550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35548,(1),null);
var canonical_f_35551 = (function (){var G__34986 = (factory_35550.cljs$core$IFn$_invoke$arity$1 ? factory_35550.cljs$core$IFn$_invoke$arity$1(f_35542) : factory_35550.call(null,f_35542));
var fexpr__34985 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34985.cljs$core$IFn$_invoke$arity$1 ? fexpr__34985.cljs$core$IFn$_invoke$arity$1(G__34986) : fexpr__34985.call(null,G__34986));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35549,f_35542], null),canonical_f_35551], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35549),canonical_f_35551);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35549),canonical_f_35551);
}


var G__35553 = seq__34875_35544;
var G__35554 = chunk__34877_35545;
var G__35555 = count__34878_35546;
var G__35556 = (i__34879_35547 + (1));
seq__34875_35544 = G__35553;
chunk__34877_35545 = G__35554;
count__34878_35546 = G__35555;
i__34879_35547 = G__35556;
continue;
} else {
var temp__5735__auto___35559__$1 = cljs.core.seq(seq__34875_35544);
if(temp__5735__auto___35559__$1){
var seq__34875_35561__$1 = temp__5735__auto___35559__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34875_35561__$1)){
var c__4609__auto___35562 = cljs.core.chunk_first(seq__34875_35561__$1);
var G__35563 = cljs.core.chunk_rest(seq__34875_35561__$1);
var G__35564 = c__4609__auto___35562;
var G__35565 = cljs.core.count(c__4609__auto___35562);
var G__35566 = (0);
seq__34875_35544 = G__35563;
chunk__34877_35545 = G__35564;
count__34878_35546 = G__35565;
i__34879_35547 = G__35566;
continue;
} else {
var vec__34987_35567 = cljs.core.first(seq__34875_35561__$1);
var actual_type_35568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35567,(0),null);
var factory_35569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35567,(1),null);
var canonical_f_35572 = (function (){var G__34991 = (factory_35569.cljs$core$IFn$_invoke$arity$1 ? factory_35569.cljs$core$IFn$_invoke$arity$1(f_35542) : factory_35569.call(null,f_35542));
var fexpr__34990 = (cljs.core.truth_(selector_35489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35488,selector_35489):cljs.core.identity);
return (fexpr__34990.cljs$core$IFn$_invoke$arity$1 ? fexpr__34990.cljs$core$IFn$_invoke$arity$1(G__34991) : fexpr__34990.call(null,G__34991));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35488,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35489,actual_type_35568,f_35542], null),canonical_f_35572], 0));

if(cljs.core.truth_(elem_35488.addEventListener)){
elem_35488.addEventListener(cljs.core.name(actual_type_35568),canonical_f_35572);
} else {
elem_35488.attachEvent(cljs.core.name(actual_type_35568),canonical_f_35572);
}


var G__35574 = cljs.core.next(seq__34875_35561__$1);
var G__35575 = null;
var G__35576 = (0);
var G__35577 = (0);
seq__34875_35544 = G__35574;
chunk__34877_35545 = G__35575;
count__34878_35546 = G__35576;
i__34879_35547 = G__35577;
continue;
}
} else {
}
}
break;
}

var G__35578 = cljs.core.next(seq__34874_35532__$1);
var G__35579 = null;
var G__35580 = (0);
var G__35581 = (0);
seq__34874_35490 = G__35578;
chunk__34881_35491 = G__35579;
count__34882_35492 = G__35580;
i__34883_35493 = G__35581;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34869){
var G__34870 = cljs.core.first(seq34869);
var seq34869__$1 = cljs.core.next(seq34869);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34870,seq34869__$1);
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
var len__4789__auto___35589 = arguments.length;
var i__4790__auto___35590 = (0);
while(true){
if((i__4790__auto___35590 < len__4789__auto___35589)){
args__4795__auto__.push((arguments[i__4790__auto___35590]));

var G__35591 = (i__4790__auto___35590 + (1));
i__4790__auto___35590 = G__35591;
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

var vec__35001_35596 = dommy.core.elem_and_selector(elem_sel);
var elem_35597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35596,(0),null);
var selector_35598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35596,(1),null);
var seq__35004_35599 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35011_35600 = null;
var count__35012_35601 = (0);
var i__35013_35602 = (0);
while(true){
if((i__35013_35602 < count__35012_35601)){
var vec__35055_35608 = chunk__35011_35600.cljs$core$IIndexed$_nth$arity$2(null,i__35013_35602);
var orig_type_35609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35608,(0),null);
var f_35610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35608,(1),null);
var seq__35014_35613 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35609,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35609,cljs.core.identity])));
var chunk__35016_35614 = null;
var count__35017_35615 = (0);
var i__35018_35616 = (0);
while(true){
if((i__35018_35616 < count__35017_35615)){
var vec__35068_35618 = chunk__35016_35614.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35616);
var actual_type_35619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35618,(0),null);
var __35620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35618,(1),null);
var keys_35624 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35598,actual_type_35619,f_35610], null);
var canonical_f_35625 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35597),keys_35624);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35597,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35624], 0));

if(cljs.core.truth_(elem_35597.removeEventListener)){
elem_35597.removeEventListener(cljs.core.name(actual_type_35619),canonical_f_35625);
} else {
elem_35597.detachEvent(cljs.core.name(actual_type_35619),canonical_f_35625);
}


var G__35627 = seq__35014_35613;
var G__35628 = chunk__35016_35614;
var G__35629 = count__35017_35615;
var G__35630 = (i__35018_35616 + (1));
seq__35014_35613 = G__35627;
chunk__35016_35614 = G__35628;
count__35017_35615 = G__35629;
i__35018_35616 = G__35630;
continue;
} else {
var temp__5735__auto___35632 = cljs.core.seq(seq__35014_35613);
if(temp__5735__auto___35632){
var seq__35014_35634__$1 = temp__5735__auto___35632;
if(cljs.core.chunked_seq_QMARK_(seq__35014_35634__$1)){
var c__4609__auto___35636 = cljs.core.chunk_first(seq__35014_35634__$1);
var G__35638 = cljs.core.chunk_rest(seq__35014_35634__$1);
var G__35639 = c__4609__auto___35636;
var G__35640 = cljs.core.count(c__4609__auto___35636);
var G__35641 = (0);
seq__35014_35613 = G__35638;
chunk__35016_35614 = G__35639;
count__35017_35615 = G__35640;
i__35018_35616 = G__35641;
continue;
} else {
var vec__35071_35642 = cljs.core.first(seq__35014_35634__$1);
var actual_type_35643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071_35642,(0),null);
var __35644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071_35642,(1),null);
var keys_35649 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35598,actual_type_35643,f_35610], null);
var canonical_f_35650 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35597),keys_35649);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35597,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35649], 0));

if(cljs.core.truth_(elem_35597.removeEventListener)){
elem_35597.removeEventListener(cljs.core.name(actual_type_35643),canonical_f_35650);
} else {
elem_35597.detachEvent(cljs.core.name(actual_type_35643),canonical_f_35650);
}


var G__35653 = cljs.core.next(seq__35014_35634__$1);
var G__35654 = null;
var G__35655 = (0);
var G__35656 = (0);
seq__35014_35613 = G__35653;
chunk__35016_35614 = G__35654;
count__35017_35615 = G__35655;
i__35018_35616 = G__35656;
continue;
}
} else {
}
}
break;
}

var G__35659 = seq__35004_35599;
var G__35660 = chunk__35011_35600;
var G__35661 = count__35012_35601;
var G__35662 = (i__35013_35602 + (1));
seq__35004_35599 = G__35659;
chunk__35011_35600 = G__35660;
count__35012_35601 = G__35661;
i__35013_35602 = G__35662;
continue;
} else {
var temp__5735__auto___35663 = cljs.core.seq(seq__35004_35599);
if(temp__5735__auto___35663){
var seq__35004_35664__$1 = temp__5735__auto___35663;
if(cljs.core.chunked_seq_QMARK_(seq__35004_35664__$1)){
var c__4609__auto___35667 = cljs.core.chunk_first(seq__35004_35664__$1);
var G__35668 = cljs.core.chunk_rest(seq__35004_35664__$1);
var G__35669 = c__4609__auto___35667;
var G__35670 = cljs.core.count(c__4609__auto___35667);
var G__35671 = (0);
seq__35004_35599 = G__35668;
chunk__35011_35600 = G__35669;
count__35012_35601 = G__35670;
i__35013_35602 = G__35671;
continue;
} else {
var vec__35086_35673 = cljs.core.first(seq__35004_35664__$1);
var orig_type_35674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35673,(0),null);
var f_35675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35673,(1),null);
var seq__35005_35679 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35674,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35674,cljs.core.identity])));
var chunk__35007_35680 = null;
var count__35008_35681 = (0);
var i__35009_35682 = (0);
while(true){
if((i__35009_35682 < count__35008_35681)){
var vec__35106_35683 = chunk__35007_35680.cljs$core$IIndexed$_nth$arity$2(null,i__35009_35682);
var actual_type_35684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106_35683,(0),null);
var __35685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106_35683,(1),null);
var keys_35688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35598,actual_type_35684,f_35675], null);
var canonical_f_35689 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35597),keys_35688);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35597,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35688], 0));

if(cljs.core.truth_(elem_35597.removeEventListener)){
elem_35597.removeEventListener(cljs.core.name(actual_type_35684),canonical_f_35689);
} else {
elem_35597.detachEvent(cljs.core.name(actual_type_35684),canonical_f_35689);
}


var G__35700 = seq__35005_35679;
var G__35701 = chunk__35007_35680;
var G__35702 = count__35008_35681;
var G__35703 = (i__35009_35682 + (1));
seq__35005_35679 = G__35700;
chunk__35007_35680 = G__35701;
count__35008_35681 = G__35702;
i__35009_35682 = G__35703;
continue;
} else {
var temp__5735__auto___35704__$1 = cljs.core.seq(seq__35005_35679);
if(temp__5735__auto___35704__$1){
var seq__35005_35705__$1 = temp__5735__auto___35704__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35005_35705__$1)){
var c__4609__auto___35706 = cljs.core.chunk_first(seq__35005_35705__$1);
var G__35709 = cljs.core.chunk_rest(seq__35005_35705__$1);
var G__35710 = c__4609__auto___35706;
var G__35711 = cljs.core.count(c__4609__auto___35706);
var G__35712 = (0);
seq__35005_35679 = G__35709;
chunk__35007_35680 = G__35710;
count__35008_35681 = G__35711;
i__35009_35682 = G__35712;
continue;
} else {
var vec__35115_35714 = cljs.core.first(seq__35005_35705__$1);
var actual_type_35715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35115_35714,(0),null);
var __35716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35115_35714,(1),null);
var keys_35720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35598,actual_type_35715,f_35675], null);
var canonical_f_35721 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35597),keys_35720);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35597,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35720], 0));

if(cljs.core.truth_(elem_35597.removeEventListener)){
elem_35597.removeEventListener(cljs.core.name(actual_type_35715),canonical_f_35721);
} else {
elem_35597.detachEvent(cljs.core.name(actual_type_35715),canonical_f_35721);
}


var G__35727 = cljs.core.next(seq__35005_35705__$1);
var G__35728 = null;
var G__35729 = (0);
var G__35730 = (0);
seq__35005_35679 = G__35727;
chunk__35007_35680 = G__35728;
count__35008_35681 = G__35729;
i__35009_35682 = G__35730;
continue;
}
} else {
}
}
break;
}

var G__35732 = cljs.core.next(seq__35004_35664__$1);
var G__35733 = null;
var G__35734 = (0);
var G__35735 = (0);
seq__35004_35599 = G__35732;
chunk__35011_35600 = G__35733;
count__35012_35601 = G__35734;
i__35013_35602 = G__35735;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34995){
var G__34996 = cljs.core.first(seq34995);
var seq34995__$1 = cljs.core.next(seq34995);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34996,seq34995__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35742 = arguments.length;
var i__4790__auto___35743 = (0);
while(true){
if((i__4790__auto___35743 < len__4789__auto___35742)){
args__4795__auto__.push((arguments[i__4790__auto___35743]));

var G__35744 = (i__4790__auto___35743 + (1));
i__4790__auto___35743 = G__35744;
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

var vec__35136_35747 = dommy.core.elem_and_selector(elem_sel);
var elem_35748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35747,(0),null);
var selector_35749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35747,(1),null);
var seq__35139_35771 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35140_35772 = null;
var count__35141_35773 = (0);
var i__35142_35774 = (0);
while(true){
if((i__35142_35774 < count__35141_35773)){
var vec__35152_35776 = chunk__35140_35772.cljs$core$IIndexed$_nth$arity$2(null,i__35142_35774);
var type_35777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35776,(0),null);
var f_35778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35776,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35777,((function (seq__35139_35771,chunk__35140_35772,count__35141_35773,i__35142_35774,vec__35152_35776,type_35777,f_35778,vec__35136_35747,elem_35748,selector_35749){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35777,dommy$core$this_fn], 0));

return (f_35778.cljs$core$IFn$_invoke$arity$1 ? f_35778.cljs$core$IFn$_invoke$arity$1(e) : f_35778.call(null,e));
});})(seq__35139_35771,chunk__35140_35772,count__35141_35773,i__35142_35774,vec__35152_35776,type_35777,f_35778,vec__35136_35747,elem_35748,selector_35749))
], 0));


var G__35781 = seq__35139_35771;
var G__35782 = chunk__35140_35772;
var G__35783 = count__35141_35773;
var G__35784 = (i__35142_35774 + (1));
seq__35139_35771 = G__35781;
chunk__35140_35772 = G__35782;
count__35141_35773 = G__35783;
i__35142_35774 = G__35784;
continue;
} else {
var temp__5735__auto___35785 = cljs.core.seq(seq__35139_35771);
if(temp__5735__auto___35785){
var seq__35139_35786__$1 = temp__5735__auto___35785;
if(cljs.core.chunked_seq_QMARK_(seq__35139_35786__$1)){
var c__4609__auto___35787 = cljs.core.chunk_first(seq__35139_35786__$1);
var G__35789 = cljs.core.chunk_rest(seq__35139_35786__$1);
var G__35790 = c__4609__auto___35787;
var G__35791 = cljs.core.count(c__4609__auto___35787);
var G__35792 = (0);
seq__35139_35771 = G__35789;
chunk__35140_35772 = G__35790;
count__35141_35773 = G__35791;
i__35142_35774 = G__35792;
continue;
} else {
var vec__35155_35800 = cljs.core.first(seq__35139_35786__$1);
var type_35801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35155_35800,(0),null);
var f_35802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35155_35800,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35801,((function (seq__35139_35771,chunk__35140_35772,count__35141_35773,i__35142_35774,vec__35155_35800,type_35801,f_35802,seq__35139_35786__$1,temp__5735__auto___35785,vec__35136_35747,elem_35748,selector_35749){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35801,dommy$core$this_fn], 0));

return (f_35802.cljs$core$IFn$_invoke$arity$1 ? f_35802.cljs$core$IFn$_invoke$arity$1(e) : f_35802.call(null,e));
});})(seq__35139_35771,chunk__35140_35772,count__35141_35773,i__35142_35774,vec__35155_35800,type_35801,f_35802,seq__35139_35786__$1,temp__5735__auto___35785,vec__35136_35747,elem_35748,selector_35749))
], 0));


var G__35814 = cljs.core.next(seq__35139_35786__$1);
var G__35815 = null;
var G__35816 = (0);
var G__35817 = (0);
seq__35139_35771 = G__35814;
chunk__35140_35772 = G__35815;
count__35141_35773 = G__35816;
i__35142_35774 = G__35817;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35134){
var G__35135 = cljs.core.first(seq35134);
var seq35134__$1 = cljs.core.next(seq35134);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35135,seq35134__$1);
}));


//# sourceMappingURL=dommy.core.js.map
