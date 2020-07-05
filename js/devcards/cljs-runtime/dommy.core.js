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
var i__4790__auto___35217 = (0);
while(true){
if((i__4790__auto___35217 < len__4789__auto___35215)){
args__4795__auto__.push((arguments[i__4790__auto___35217]));

var G__35219 = (i__4790__auto___35217 + (1));
i__4790__auto___35217 = G__35219;
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


var G__35227 = seq__34751_35220;
var G__35228 = chunk__34752_35221;
var G__35229 = count__34753_35222;
var G__35230 = (i__34754_35223 + (1));
seq__34751_35220 = G__35227;
chunk__34752_35221 = G__35228;
count__34753_35222 = G__35229;
i__34754_35223 = G__35230;
continue;
} else {
var temp__5735__auto___35231 = cljs.core.seq(seq__34751_35220);
if(temp__5735__auto___35231){
var seq__34751_35232__$1 = temp__5735__auto___35231;
if(cljs.core.chunked_seq_QMARK_(seq__34751_35232__$1)){
var c__4609__auto___35233 = cljs.core.chunk_first(seq__34751_35232__$1);
var G__35234 = cljs.core.chunk_rest(seq__34751_35232__$1);
var G__35235 = c__4609__auto___35233;
var G__35236 = cljs.core.count(c__4609__auto___35233);
var G__35237 = (0);
seq__34751_35220 = G__35234;
chunk__34752_35221 = G__35235;
count__34753_35222 = G__35236;
i__34754_35223 = G__35237;
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
seq__34751_35220 = G__35241;
chunk__34752_35221 = G__35242;
count__34753_35222 = G__35243;
i__34754_35223 = G__35244;
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
var len__4789__auto___35248 = arguments.length;
var i__4790__auto___35249 = (0);
while(true){
if((i__4790__auto___35249 < len__4789__auto___35248)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35249]));

var G__35250 = (i__4790__auto___35249 + (1));
i__4790__auto___35249 = G__35250;
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
var seq__34816_35355 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34817_35356 = null;
var count__34818_35357 = (0);
var i__34819_35358 = (0);
while(true){
if((i__34819_35358 < count__34818_35357)){
var c_35360 = chunk__34817_35356.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35358);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35360);


var G__35361 = seq__34816_35355;
var G__35362 = chunk__34817_35356;
var G__35363 = count__34818_35357;
var G__35364 = (i__34819_35358 + (1));
seq__34816_35355 = G__35361;
chunk__34817_35356 = G__35362;
count__34818_35357 = G__35363;
i__34819_35358 = G__35364;
continue;
} else {
var temp__5735__auto___35366 = cljs.core.seq(seq__34816_35355);
if(temp__5735__auto___35366){
var seq__34816_35367__$1 = temp__5735__auto___35366;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35367__$1)){
var c__4609__auto___35368 = cljs.core.chunk_first(seq__34816_35367__$1);
var G__35369 = cljs.core.chunk_rest(seq__34816_35367__$1);
var G__35370 = c__4609__auto___35368;
var G__35371 = cljs.core.count(c__4609__auto___35368);
var G__35372 = (0);
seq__34816_35355 = G__35369;
chunk__34817_35356 = G__35370;
count__34818_35357 = G__35371;
i__34819_35358 = G__35372;
continue;
} else {
var c_35373 = cljs.core.first(seq__34816_35367__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35373);


var G__35374 = cljs.core.next(seq__34816_35367__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__34816_35355 = G__35374;
chunk__34817_35356 = G__35375;
count__34818_35357 = G__35376;
i__34819_35358 = G__35377;
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
var len__4789__auto___35380 = arguments.length;
var i__4790__auto___35381 = (0);
while(true){
if((i__4790__auto___35381 < len__4789__auto___35380)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35381]));

var G__35383 = (i__4790__auto___35381 + (1));
i__4790__auto___35381 = G__35383;
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
var seq__34825 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34826 = null;
var count__34827 = (0);
var i__34828 = (0);
while(true){
if((i__34828 < count__34827)){
var c = chunk__34826.cljs$core$IIndexed$_nth$arity$2(null,i__34828);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35395 = seq__34825;
var G__35396 = chunk__34826;
var G__35397 = count__34827;
var G__35398 = (i__34828 + (1));
seq__34825 = G__35395;
chunk__34826 = G__35396;
count__34827 = G__35397;
i__34828 = G__35398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34825);
if(temp__5735__auto__){
var seq__34825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34825__$1);
var G__35399 = cljs.core.chunk_rest(seq__34825__$1);
var G__35400 = c__4609__auto__;
var G__35401 = cljs.core.count(c__4609__auto__);
var G__35402 = (0);
seq__34825 = G__35399;
chunk__34826 = G__35400;
count__34827 = G__35401;
i__34828 = G__35402;
continue;
} else {
var c = cljs.core.first(seq__34825__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35403 = cljs.core.next(seq__34825__$1);
var G__35404 = null;
var G__35405 = (0);
var G__35406 = (0);
seq__34825 = G__35403;
chunk__34826 = G__35404;
count__34827 = G__35405;
i__34828 = G__35406;
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
var temp__5733__auto___35412 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35412)){
var class_list_35413 = temp__5733__auto___35412;
class_list_35413.toggle(c__$1);
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
var G__34833 = arguments.length;
switch (G__34833) {
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
var fexpr__34870 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34870.cljs$core$IFn$_invoke$arity$1 ? fexpr__34870.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34870.call(null,elem_sel));
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

var vec__34874_35489 = dommy.core.elem_and_selector(elem_sel);
var elem_35490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34874_35489,(0),null);
var selector_35491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34874_35489,(1),null);
var seq__34877_35493 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34884_35494 = null;
var count__34885_35495 = (0);
var i__34886_35496 = (0);
while(true){
if((i__34886_35496 < count__34885_35495)){
var vec__34942_35498 = chunk__34884_35494.cljs$core$IIndexed$_nth$arity$2(null,i__34886_35496);
var orig_type_35499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34942_35498,(0),null);
var f_35500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34942_35498,(1),null);
var seq__34887_35503 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35499,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35499,cljs.core.identity])));
var chunk__34889_35504 = null;
var count__34890_35505 = (0);
var i__34891_35506 = (0);
while(true){
if((i__34891_35506 < count__34890_35505)){
var vec__34955_35507 = chunk__34889_35504.cljs$core$IIndexed$_nth$arity$2(null,i__34891_35506);
var actual_type_35508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35507,(0),null);
var factory_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35507,(1),null);
var canonical_f_35510 = (function (){var G__34959 = (factory_35509.cljs$core$IFn$_invoke$arity$1 ? factory_35509.cljs$core$IFn$_invoke$arity$1(f_35500) : factory_35509.call(null,f_35500));
var fexpr__34958 = (cljs.core.truth_(selector_35491)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35490,selector_35491):cljs.core.identity);
return (fexpr__34958.cljs$core$IFn$_invoke$arity$1 ? fexpr__34958.cljs$core$IFn$_invoke$arity$1(G__34959) : fexpr__34958.call(null,G__34959));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35490,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35491,actual_type_35508,f_35500], null),canonical_f_35510], 0));

if(cljs.core.truth_(elem_35490.addEventListener)){
elem_35490.addEventListener(cljs.core.name(actual_type_35508),canonical_f_35510);
} else {
elem_35490.attachEvent(cljs.core.name(actual_type_35508),canonical_f_35510);
}


var G__35512 = seq__34887_35503;
var G__35513 = chunk__34889_35504;
var G__35514 = count__34890_35505;
var G__35515 = (i__34891_35506 + (1));
seq__34887_35503 = G__35512;
chunk__34889_35504 = G__35513;
count__34890_35505 = G__35514;
i__34891_35506 = G__35515;
continue;
} else {
var temp__5735__auto___35518 = cljs.core.seq(seq__34887_35503);
if(temp__5735__auto___35518){
var seq__34887_35520__$1 = temp__5735__auto___35518;
if(cljs.core.chunked_seq_QMARK_(seq__34887_35520__$1)){
var c__4609__auto___35521 = cljs.core.chunk_first(seq__34887_35520__$1);
var G__35522 = cljs.core.chunk_rest(seq__34887_35520__$1);
var G__35523 = c__4609__auto___35521;
var G__35524 = cljs.core.count(c__4609__auto___35521);
var G__35525 = (0);
seq__34887_35503 = G__35522;
chunk__34889_35504 = G__35523;
count__34890_35505 = G__35524;
i__34891_35506 = G__35525;
continue;
} else {
var vec__34960_35526 = cljs.core.first(seq__34887_35520__$1);
var actual_type_35527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960_35526,(0),null);
var factory_35528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960_35526,(1),null);
var canonical_f_35532 = (function (){var G__34964 = (factory_35528.cljs$core$IFn$_invoke$arity$1 ? factory_35528.cljs$core$IFn$_invoke$arity$1(f_35500) : factory_35528.call(null,f_35500));
var fexpr__34963 = (cljs.core.truth_(selector_35491)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35490,selector_35491):cljs.core.identity);
return (fexpr__34963.cljs$core$IFn$_invoke$arity$1 ? fexpr__34963.cljs$core$IFn$_invoke$arity$1(G__34964) : fexpr__34963.call(null,G__34964));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35490,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35491,actual_type_35527,f_35500], null),canonical_f_35532], 0));

if(cljs.core.truth_(elem_35490.addEventListener)){
elem_35490.addEventListener(cljs.core.name(actual_type_35527),canonical_f_35532);
} else {
elem_35490.attachEvent(cljs.core.name(actual_type_35527),canonical_f_35532);
}


var G__35533 = cljs.core.next(seq__34887_35520__$1);
var G__35534 = null;
var G__35535 = (0);
var G__35536 = (0);
seq__34887_35503 = G__35533;
chunk__34889_35504 = G__35534;
count__34890_35505 = G__35535;
i__34891_35506 = G__35536;
continue;
}
} else {
}
}
break;
}

var G__35537 = seq__34877_35493;
var G__35538 = chunk__34884_35494;
var G__35539 = count__34885_35495;
var G__35540 = (i__34886_35496 + (1));
seq__34877_35493 = G__35537;
chunk__34884_35494 = G__35538;
count__34885_35495 = G__35539;
i__34886_35496 = G__35540;
continue;
} else {
var temp__5735__auto___35546 = cljs.core.seq(seq__34877_35493);
if(temp__5735__auto___35546){
var seq__34877_35548__$1 = temp__5735__auto___35546;
if(cljs.core.chunked_seq_QMARK_(seq__34877_35548__$1)){
var c__4609__auto___35550 = cljs.core.chunk_first(seq__34877_35548__$1);
var G__35551 = cljs.core.chunk_rest(seq__34877_35548__$1);
var G__35552 = c__4609__auto___35550;
var G__35553 = cljs.core.count(c__4609__auto___35550);
var G__35554 = (0);
seq__34877_35493 = G__35551;
chunk__34884_35494 = G__35552;
count__34885_35495 = G__35553;
i__34886_35496 = G__35554;
continue;
} else {
var vec__34969_35555 = cljs.core.first(seq__34877_35548__$1);
var orig_type_35556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35555,(0),null);
var f_35557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35555,(1),null);
var seq__34878_35560 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35556,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35556,cljs.core.identity])));
var chunk__34880_35561 = null;
var count__34881_35562 = (0);
var i__34882_35563 = (0);
while(true){
if((i__34882_35563 < count__34881_35562)){
var vec__34982_35566 = chunk__34880_35561.cljs$core$IIndexed$_nth$arity$2(null,i__34882_35563);
var actual_type_35567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35566,(0),null);
var factory_35568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35566,(1),null);
var canonical_f_35569 = (function (){var G__34986 = (factory_35568.cljs$core$IFn$_invoke$arity$1 ? factory_35568.cljs$core$IFn$_invoke$arity$1(f_35557) : factory_35568.call(null,f_35557));
var fexpr__34985 = (cljs.core.truth_(selector_35491)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35490,selector_35491):cljs.core.identity);
return (fexpr__34985.cljs$core$IFn$_invoke$arity$1 ? fexpr__34985.cljs$core$IFn$_invoke$arity$1(G__34986) : fexpr__34985.call(null,G__34986));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35490,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35491,actual_type_35567,f_35557], null),canonical_f_35569], 0));

if(cljs.core.truth_(elem_35490.addEventListener)){
elem_35490.addEventListener(cljs.core.name(actual_type_35567),canonical_f_35569);
} else {
elem_35490.attachEvent(cljs.core.name(actual_type_35567),canonical_f_35569);
}


var G__35577 = seq__34878_35560;
var G__35578 = chunk__34880_35561;
var G__35579 = count__34881_35562;
var G__35580 = (i__34882_35563 + (1));
seq__34878_35560 = G__35577;
chunk__34880_35561 = G__35578;
count__34881_35562 = G__35579;
i__34882_35563 = G__35580;
continue;
} else {
var temp__5735__auto___35583__$1 = cljs.core.seq(seq__34878_35560);
if(temp__5735__auto___35583__$1){
var seq__34878_35586__$1 = temp__5735__auto___35583__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34878_35586__$1)){
var c__4609__auto___35587 = cljs.core.chunk_first(seq__34878_35586__$1);
var G__35588 = cljs.core.chunk_rest(seq__34878_35586__$1);
var G__35589 = c__4609__auto___35587;
var G__35590 = cljs.core.count(c__4609__auto___35587);
var G__35591 = (0);
seq__34878_35560 = G__35588;
chunk__34880_35561 = G__35589;
count__34881_35562 = G__35590;
i__34882_35563 = G__35591;
continue;
} else {
var vec__34990_35593 = cljs.core.first(seq__34878_35586__$1);
var actual_type_35594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35593,(0),null);
var factory_35595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35593,(1),null);
var canonical_f_35596 = (function (){var G__34994 = (factory_35595.cljs$core$IFn$_invoke$arity$1 ? factory_35595.cljs$core$IFn$_invoke$arity$1(f_35557) : factory_35595.call(null,f_35557));
var fexpr__34993 = (cljs.core.truth_(selector_35491)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35490,selector_35491):cljs.core.identity);
return (fexpr__34993.cljs$core$IFn$_invoke$arity$1 ? fexpr__34993.cljs$core$IFn$_invoke$arity$1(G__34994) : fexpr__34993.call(null,G__34994));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35490,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35491,actual_type_35594,f_35557], null),canonical_f_35596], 0));

if(cljs.core.truth_(elem_35490.addEventListener)){
elem_35490.addEventListener(cljs.core.name(actual_type_35594),canonical_f_35596);
} else {
elem_35490.attachEvent(cljs.core.name(actual_type_35594),canonical_f_35596);
}


var G__35605 = cljs.core.next(seq__34878_35586__$1);
var G__35606 = null;
var G__35607 = (0);
var G__35608 = (0);
seq__34878_35560 = G__35605;
chunk__34880_35561 = G__35606;
count__34881_35562 = G__35607;
i__34882_35563 = G__35608;
continue;
}
} else {
}
}
break;
}

var G__35610 = cljs.core.next(seq__34877_35548__$1);
var G__35611 = null;
var G__35612 = (0);
var G__35613 = (0);
seq__34877_35493 = G__35610;
chunk__34884_35494 = G__35611;
count__34885_35495 = G__35612;
i__34886_35496 = G__35613;
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
var len__4789__auto___35618 = arguments.length;
var i__4790__auto___35620 = (0);
while(true){
if((i__4790__auto___35620 < len__4789__auto___35618)){
args__4795__auto__.push((arguments[i__4790__auto___35620]));

var G__35622 = (i__4790__auto___35620 + (1));
i__4790__auto___35620 = G__35622;
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

var vec__35001_35626 = dommy.core.elem_and_selector(elem_sel);
var elem_35627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35626,(0),null);
var selector_35628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35626,(1),null);
var seq__35004_35632 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35011_35633 = null;
var count__35012_35634 = (0);
var i__35013_35635 = (0);
while(true){
if((i__35013_35635 < count__35012_35634)){
var vec__35055_35643 = chunk__35011_35633.cljs$core$IIndexed$_nth$arity$2(null,i__35013_35635);
var orig_type_35644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35643,(0),null);
var f_35645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35643,(1),null);
var seq__35014_35648 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35644,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35644,cljs.core.identity])));
var chunk__35016_35649 = null;
var count__35017_35650 = (0);
var i__35018_35651 = (0);
while(true){
if((i__35018_35651 < count__35017_35650)){
var vec__35068_35656 = chunk__35016_35649.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35651);
var actual_type_35657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35656,(0),null);
var __35658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35656,(1),null);
var keys_35661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35628,actual_type_35657,f_35645], null);
var canonical_f_35662 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35627),keys_35661);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35627,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35661], 0));

if(cljs.core.truth_(elem_35627.removeEventListener)){
elem_35627.removeEventListener(cljs.core.name(actual_type_35657),canonical_f_35662);
} else {
elem_35627.detachEvent(cljs.core.name(actual_type_35657),canonical_f_35662);
}


var G__35666 = seq__35014_35648;
var G__35667 = chunk__35016_35649;
var G__35668 = count__35017_35650;
var G__35669 = (i__35018_35651 + (1));
seq__35014_35648 = G__35666;
chunk__35016_35649 = G__35667;
count__35017_35650 = G__35668;
i__35018_35651 = G__35669;
continue;
} else {
var temp__5735__auto___35673 = cljs.core.seq(seq__35014_35648);
if(temp__5735__auto___35673){
var seq__35014_35674__$1 = temp__5735__auto___35673;
if(cljs.core.chunked_seq_QMARK_(seq__35014_35674__$1)){
var c__4609__auto___35675 = cljs.core.chunk_first(seq__35014_35674__$1);
var G__35676 = cljs.core.chunk_rest(seq__35014_35674__$1);
var G__35677 = c__4609__auto___35675;
var G__35678 = cljs.core.count(c__4609__auto___35675);
var G__35679 = (0);
seq__35014_35648 = G__35676;
chunk__35016_35649 = G__35677;
count__35017_35650 = G__35678;
i__35018_35651 = G__35679;
continue;
} else {
var vec__35073_35683 = cljs.core.first(seq__35014_35674__$1);
var actual_type_35684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073_35683,(0),null);
var __35685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073_35683,(1),null);
var keys_35689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35628,actual_type_35684,f_35645], null);
var canonical_f_35690 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35627),keys_35689);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35627,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35689], 0));

if(cljs.core.truth_(elem_35627.removeEventListener)){
elem_35627.removeEventListener(cljs.core.name(actual_type_35684),canonical_f_35690);
} else {
elem_35627.detachEvent(cljs.core.name(actual_type_35684),canonical_f_35690);
}


var G__35693 = cljs.core.next(seq__35014_35674__$1);
var G__35694 = null;
var G__35695 = (0);
var G__35696 = (0);
seq__35014_35648 = G__35693;
chunk__35016_35649 = G__35694;
count__35017_35650 = G__35695;
i__35018_35651 = G__35696;
continue;
}
} else {
}
}
break;
}

var G__35697 = seq__35004_35632;
var G__35698 = chunk__35011_35633;
var G__35699 = count__35012_35634;
var G__35700 = (i__35013_35635 + (1));
seq__35004_35632 = G__35697;
chunk__35011_35633 = G__35698;
count__35012_35634 = G__35699;
i__35013_35635 = G__35700;
continue;
} else {
var temp__5735__auto___35722 = cljs.core.seq(seq__35004_35632);
if(temp__5735__auto___35722){
var seq__35004_35723__$1 = temp__5735__auto___35722;
if(cljs.core.chunked_seq_QMARK_(seq__35004_35723__$1)){
var c__4609__auto___35724 = cljs.core.chunk_first(seq__35004_35723__$1);
var G__35725 = cljs.core.chunk_rest(seq__35004_35723__$1);
var G__35726 = c__4609__auto___35724;
var G__35727 = cljs.core.count(c__4609__auto___35724);
var G__35728 = (0);
seq__35004_35632 = G__35725;
chunk__35011_35633 = G__35726;
count__35012_35634 = G__35727;
i__35013_35635 = G__35728;
continue;
} else {
var vec__35097_35730 = cljs.core.first(seq__35004_35723__$1);
var orig_type_35731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097_35730,(0),null);
var f_35732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097_35730,(1),null);
var seq__35005_35734 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35731,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35731,cljs.core.identity])));
var chunk__35007_35735 = null;
var count__35008_35736 = (0);
var i__35009_35737 = (0);
while(true){
if((i__35009_35737 < count__35008_35736)){
var vec__35107_35739 = chunk__35007_35735.cljs$core$IIndexed$_nth$arity$2(null,i__35009_35737);
var actual_type_35740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107_35739,(0),null);
var __35741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107_35739,(1),null);
var keys_35742 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35628,actual_type_35740,f_35732], null);
var canonical_f_35743 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35627),keys_35742);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35627,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35742], 0));

if(cljs.core.truth_(elem_35627.removeEventListener)){
elem_35627.removeEventListener(cljs.core.name(actual_type_35740),canonical_f_35743);
} else {
elem_35627.detachEvent(cljs.core.name(actual_type_35740),canonical_f_35743);
}


var G__35753 = seq__35005_35734;
var G__35754 = chunk__35007_35735;
var G__35755 = count__35008_35736;
var G__35756 = (i__35009_35737 + (1));
seq__35005_35734 = G__35753;
chunk__35007_35735 = G__35754;
count__35008_35736 = G__35755;
i__35009_35737 = G__35756;
continue;
} else {
var temp__5735__auto___35758__$1 = cljs.core.seq(seq__35005_35734);
if(temp__5735__auto___35758__$1){
var seq__35005_35759__$1 = temp__5735__auto___35758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35005_35759__$1)){
var c__4609__auto___35760 = cljs.core.chunk_first(seq__35005_35759__$1);
var G__35767 = cljs.core.chunk_rest(seq__35005_35759__$1);
var G__35768 = c__4609__auto___35760;
var G__35769 = cljs.core.count(c__4609__auto___35760);
var G__35770 = (0);
seq__35005_35734 = G__35767;
chunk__35007_35735 = G__35768;
count__35008_35736 = G__35769;
i__35009_35737 = G__35770;
continue;
} else {
var vec__35122_35774 = cljs.core.first(seq__35005_35759__$1);
var actual_type_35775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35774,(0),null);
var __35776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35774,(1),null);
var keys_35777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35628,actual_type_35775,f_35732], null);
var canonical_f_35778 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35627),keys_35777);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35627,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35777], 0));

if(cljs.core.truth_(elem_35627.removeEventListener)){
elem_35627.removeEventListener(cljs.core.name(actual_type_35775),canonical_f_35778);
} else {
elem_35627.detachEvent(cljs.core.name(actual_type_35775),canonical_f_35778);
}


var G__35781 = cljs.core.next(seq__35005_35759__$1);
var G__35782 = null;
var G__35783 = (0);
var G__35784 = (0);
seq__35005_35734 = G__35781;
chunk__35007_35735 = G__35782;
count__35008_35736 = G__35783;
i__35009_35737 = G__35784;
continue;
}
} else {
}
}
break;
}

var G__35787 = cljs.core.next(seq__35004_35723__$1);
var G__35788 = null;
var G__35789 = (0);
var G__35790 = (0);
seq__35004_35632 = G__35787;
chunk__35011_35633 = G__35788;
count__35012_35634 = G__35789;
i__35013_35635 = G__35790;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34999){
var G__35000 = cljs.core.first(seq34999);
var seq34999__$1 = cljs.core.next(seq34999);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35000,seq34999__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35797 = arguments.length;
var i__4790__auto___35799 = (0);
while(true){
if((i__4790__auto___35799 < len__4789__auto___35797)){
args__4795__auto__.push((arguments[i__4790__auto___35799]));

var G__35803 = (i__4790__auto___35799 + (1));
i__4790__auto___35799 = G__35803;
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

var vec__35136_35812 = dommy.core.elem_and_selector(elem_sel);
var elem_35813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35812,(0),null);
var selector_35814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35812,(1),null);
var seq__35139_35820 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35140_35821 = null;
var count__35141_35822 = (0);
var i__35142_35823 = (0);
while(true){
if((i__35142_35823 < count__35141_35822)){
var vec__35152_35828 = chunk__35140_35821.cljs$core$IIndexed$_nth$arity$2(null,i__35142_35823);
var type_35830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35828,(0),null);
var f_35831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35828,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35830,((function (seq__35139_35820,chunk__35140_35821,count__35141_35822,i__35142_35823,vec__35152_35828,type_35830,f_35831,vec__35136_35812,elem_35813,selector_35814){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35830,dommy$core$this_fn], 0));

return (f_35831.cljs$core$IFn$_invoke$arity$1 ? f_35831.cljs$core$IFn$_invoke$arity$1(e) : f_35831.call(null,e));
});})(seq__35139_35820,chunk__35140_35821,count__35141_35822,i__35142_35823,vec__35152_35828,type_35830,f_35831,vec__35136_35812,elem_35813,selector_35814))
], 0));


var G__35839 = seq__35139_35820;
var G__35840 = chunk__35140_35821;
var G__35841 = count__35141_35822;
var G__35842 = (i__35142_35823 + (1));
seq__35139_35820 = G__35839;
chunk__35140_35821 = G__35840;
count__35141_35822 = G__35841;
i__35142_35823 = G__35842;
continue;
} else {
var temp__5735__auto___35843 = cljs.core.seq(seq__35139_35820);
if(temp__5735__auto___35843){
var seq__35139_35844__$1 = temp__5735__auto___35843;
if(cljs.core.chunked_seq_QMARK_(seq__35139_35844__$1)){
var c__4609__auto___35845 = cljs.core.chunk_first(seq__35139_35844__$1);
var G__35848 = cljs.core.chunk_rest(seq__35139_35844__$1);
var G__35849 = c__4609__auto___35845;
var G__35850 = cljs.core.count(c__4609__auto___35845);
var G__35851 = (0);
seq__35139_35820 = G__35848;
chunk__35140_35821 = G__35849;
count__35141_35822 = G__35850;
i__35142_35823 = G__35851;
continue;
} else {
var vec__35156_35852 = cljs.core.first(seq__35139_35844__$1);
var type_35853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156_35852,(0),null);
var f_35854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156_35852,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35853,((function (seq__35139_35820,chunk__35140_35821,count__35141_35822,i__35142_35823,vec__35156_35852,type_35853,f_35854,seq__35139_35844__$1,temp__5735__auto___35843,vec__35136_35812,elem_35813,selector_35814){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35853,dommy$core$this_fn], 0));

return (f_35854.cljs$core$IFn$_invoke$arity$1 ? f_35854.cljs$core$IFn$_invoke$arity$1(e) : f_35854.call(null,e));
});})(seq__35139_35820,chunk__35140_35821,count__35141_35822,i__35142_35823,vec__35156_35852,type_35853,f_35854,seq__35139_35844__$1,temp__5735__auto___35843,vec__35136_35812,elem_35813,selector_35814))
], 0));


var G__35862 = cljs.core.next(seq__35139_35844__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__35139_35820 = G__35862;
chunk__35140_35821 = G__35863;
count__35141_35822 = G__35864;
i__35142_35823 = G__35865;
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
