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
var G__34722 = arguments.length;
switch (G__34722) {
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
var len__4789__auto___35165 = arguments.length;
var i__4790__auto___35166 = (0);
while(true){
if((i__4790__auto___35166 < len__4789__auto___35165)){
args__4795__auto__.push((arguments[i__4790__auto___35166]));

var G__35167 = (i__4790__auto___35166 + (1));
i__4790__auto___35166 = G__35167;
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
var seq__34726_35168 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34727_35169 = null;
var count__34728_35170 = (0);
var i__34729_35171 = (0);
while(true){
if((i__34729_35171 < count__34728_35170)){
var vec__34736_35172 = chunk__34727_35169.cljs$core$IIndexed$_nth$arity$2(null,i__34729_35171);
var k_35173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35172,(0),null);
var v_35174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35172,(1),null);
style.setProperty(dommy.utils.as_str(k_35173),v_35174);


var G__35175 = seq__34726_35168;
var G__35176 = chunk__34727_35169;
var G__35177 = count__34728_35170;
var G__35178 = (i__34729_35171 + (1));
seq__34726_35168 = G__35175;
chunk__34727_35169 = G__35176;
count__34728_35170 = G__35177;
i__34729_35171 = G__35178;
continue;
} else {
var temp__5735__auto___35179 = cljs.core.seq(seq__34726_35168);
if(temp__5735__auto___35179){
var seq__34726_35180__$1 = temp__5735__auto___35179;
if(cljs.core.chunked_seq_QMARK_(seq__34726_35180__$1)){
var c__4609__auto___35181 = cljs.core.chunk_first(seq__34726_35180__$1);
var G__35182 = cljs.core.chunk_rest(seq__34726_35180__$1);
var G__35183 = c__4609__auto___35181;
var G__35184 = cljs.core.count(c__4609__auto___35181);
var G__35185 = (0);
seq__34726_35168 = G__35182;
chunk__34727_35169 = G__35183;
count__34728_35170 = G__35184;
i__34729_35171 = G__35185;
continue;
} else {
var vec__34739_35186 = cljs.core.first(seq__34726_35180__$1);
var k_35187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35186,(0),null);
var v_35188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35186,(1),null);
style.setProperty(dommy.utils.as_str(k_35187),v_35188);


var G__35189 = cljs.core.next(seq__34726_35180__$1);
var G__35190 = null;
var G__35191 = (0);
var G__35192 = (0);
seq__34726_35168 = G__35189;
chunk__34727_35169 = G__35190;
count__34728_35170 = G__35191;
i__34729_35171 = G__35192;
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
var len__4789__auto___35195 = arguments.length;
var i__4790__auto___35196 = (0);
while(true){
if((i__4790__auto___35196 < len__4789__auto___35195)){
args__4795__auto__.push((arguments[i__4790__auto___35196]));

var G__35197 = (i__4790__auto___35196 + (1));
i__4790__auto___35196 = G__35197;
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
var seq__34745_35198 = cljs.core.seq(keywords);
var chunk__34746_35199 = null;
var count__34747_35200 = (0);
var i__34748_35201 = (0);
while(true){
if((i__34748_35201 < count__34747_35200)){
var kw_35202 = chunk__34746_35199.cljs$core$IIndexed$_nth$arity$2(null,i__34748_35201);
style.removeProperty(dommy.utils.as_str(kw_35202));


var G__35203 = seq__34745_35198;
var G__35204 = chunk__34746_35199;
var G__35205 = count__34747_35200;
var G__35206 = (i__34748_35201 + (1));
seq__34745_35198 = G__35203;
chunk__34746_35199 = G__35204;
count__34747_35200 = G__35205;
i__34748_35201 = G__35206;
continue;
} else {
var temp__5735__auto___35207 = cljs.core.seq(seq__34745_35198);
if(temp__5735__auto___35207){
var seq__34745_35208__$1 = temp__5735__auto___35207;
if(cljs.core.chunked_seq_QMARK_(seq__34745_35208__$1)){
var c__4609__auto___35209 = cljs.core.chunk_first(seq__34745_35208__$1);
var G__35210 = cljs.core.chunk_rest(seq__34745_35208__$1);
var G__35211 = c__4609__auto___35209;
var G__35212 = cljs.core.count(c__4609__auto___35209);
var G__35213 = (0);
seq__34745_35198 = G__35210;
chunk__34746_35199 = G__35211;
count__34747_35200 = G__35212;
i__34748_35201 = G__35213;
continue;
} else {
var kw_35215 = cljs.core.first(seq__34745_35208__$1);
style.removeProperty(dommy.utils.as_str(kw_35215));


var G__35217 = cljs.core.next(seq__34745_35208__$1);
var G__35218 = null;
var G__35219 = (0);
var G__35220 = (0);
seq__34745_35198 = G__35217;
chunk__34746_35199 = G__35218;
count__34747_35200 = G__35219;
i__34748_35201 = G__35220;
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
var len__4789__auto___35221 = arguments.length;
var i__4790__auto___35222 = (0);
while(true){
if((i__4790__auto___35222 < len__4789__auto___35221)){
args__4795__auto__.push((arguments[i__4790__auto___35222]));

var G__35223 = (i__4790__auto___35222 + (1));
i__4790__auto___35222 = G__35223;
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

var seq__34751_35224 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34752_35225 = null;
var count__34753_35226 = (0);
var i__34754_35227 = (0);
while(true){
if((i__34754_35227 < count__34753_35226)){
var vec__34761_35228 = chunk__34752_35225.cljs$core$IIndexed$_nth$arity$2(null,i__34754_35227);
var k_35229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35228,(0),null);
var v_35230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35228,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35229,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35230),"px"].join('')], 0));


var G__35231 = seq__34751_35224;
var G__35232 = chunk__34752_35225;
var G__35233 = count__34753_35226;
var G__35234 = (i__34754_35227 + (1));
seq__34751_35224 = G__35231;
chunk__34752_35225 = G__35232;
count__34753_35226 = G__35233;
i__34754_35227 = G__35234;
continue;
} else {
var temp__5735__auto___35235 = cljs.core.seq(seq__34751_35224);
if(temp__5735__auto___35235){
var seq__34751_35236__$1 = temp__5735__auto___35235;
if(cljs.core.chunked_seq_QMARK_(seq__34751_35236__$1)){
var c__4609__auto___35237 = cljs.core.chunk_first(seq__34751_35236__$1);
var G__35238 = cljs.core.chunk_rest(seq__34751_35236__$1);
var G__35239 = c__4609__auto___35237;
var G__35240 = cljs.core.count(c__4609__auto___35237);
var G__35241 = (0);
seq__34751_35224 = G__35238;
chunk__34752_35225 = G__35239;
count__34753_35226 = G__35240;
i__34754_35227 = G__35241;
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
seq__34751_35224 = G__35245;
chunk__34752_35225 = G__35246;
count__34753_35226 = G__35247;
i__34754_35227 = G__35248;
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
var temp__5733__auto___35310 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35310)){
var class_list_35311 = temp__5733__auto___35310;
var seq__34808_35312 = cljs.core.seq(classes__$1);
var chunk__34809_35313 = null;
var count__34810_35314 = (0);
var i__34811_35315 = (0);
while(true){
if((i__34811_35315 < count__34810_35314)){
var c_35317 = chunk__34809_35313.cljs$core$IIndexed$_nth$arity$2(null,i__34811_35315);
class_list_35311.add(c_35317);


var G__35318 = seq__34808_35312;
var G__35319 = chunk__34809_35313;
var G__35320 = count__34810_35314;
var G__35321 = (i__34811_35315 + (1));
seq__34808_35312 = G__35318;
chunk__34809_35313 = G__35319;
count__34810_35314 = G__35320;
i__34811_35315 = G__35321;
continue;
} else {
var temp__5735__auto___35322 = cljs.core.seq(seq__34808_35312);
if(temp__5735__auto___35322){
var seq__34808_35323__$1 = temp__5735__auto___35322;
if(cljs.core.chunked_seq_QMARK_(seq__34808_35323__$1)){
var c__4609__auto___35324 = cljs.core.chunk_first(seq__34808_35323__$1);
var G__35325 = cljs.core.chunk_rest(seq__34808_35323__$1);
var G__35326 = c__4609__auto___35324;
var G__35327 = cljs.core.count(c__4609__auto___35324);
var G__35328 = (0);
seq__34808_35312 = G__35325;
chunk__34809_35313 = G__35326;
count__34810_35314 = G__35327;
i__34811_35315 = G__35328;
continue;
} else {
var c_35329 = cljs.core.first(seq__34808_35323__$1);
class_list_35311.add(c_35329);


var G__35330 = cljs.core.next(seq__34808_35323__$1);
var G__35331 = null;
var G__35332 = (0);
var G__35333 = (0);
seq__34808_35312 = G__35330;
chunk__34809_35313 = G__35331;
count__34810_35314 = G__35332;
i__34811_35315 = G__35333;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34812_35334 = cljs.core.seq(classes__$1);
var chunk__34813_35335 = null;
var count__34814_35336 = (0);
var i__34815_35337 = (0);
while(true){
if((i__34815_35337 < count__34814_35336)){
var c_35338 = chunk__34813_35335.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35337);
var class_name_35339 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35339,c_35338))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35339 === ""))?c_35338:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35339)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35338)].join('')));
}


var G__35341 = seq__34812_35334;
var G__35342 = chunk__34813_35335;
var G__35343 = count__34814_35336;
var G__35344 = (i__34815_35337 + (1));
seq__34812_35334 = G__35341;
chunk__34813_35335 = G__35342;
count__34814_35336 = G__35343;
i__34815_35337 = G__35344;
continue;
} else {
var temp__5735__auto___35345 = cljs.core.seq(seq__34812_35334);
if(temp__5735__auto___35345){
var seq__34812_35346__$1 = temp__5735__auto___35345;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35346__$1)){
var c__4609__auto___35347 = cljs.core.chunk_first(seq__34812_35346__$1);
var G__35349 = cljs.core.chunk_rest(seq__34812_35346__$1);
var G__35350 = c__4609__auto___35347;
var G__35351 = cljs.core.count(c__4609__auto___35347);
var G__35352 = (0);
seq__34812_35334 = G__35349;
chunk__34813_35335 = G__35350;
count__34814_35336 = G__35351;
i__34815_35337 = G__35352;
continue;
} else {
var c_35354 = cljs.core.first(seq__34812_35346__$1);
var class_name_35355 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35355,c_35354))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35355 === ""))?c_35354:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35355)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35354)].join('')));
}


var G__35357 = cljs.core.next(seq__34812_35346__$1);
var G__35358 = null;
var G__35359 = (0);
var G__35360 = (0);
seq__34812_35334 = G__35357;
chunk__34813_35335 = G__35358;
count__34814_35336 = G__35359;
i__34815_35337 = G__35360;
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
var seq__34818_35361 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34819_35362 = null;
var count__34820_35363 = (0);
var i__34821_35364 = (0);
while(true){
if((i__34821_35364 < count__34820_35363)){
var c_35365 = chunk__34819_35362.cljs$core$IIndexed$_nth$arity$2(null,i__34821_35364);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35365);


var G__35366 = seq__34818_35361;
var G__35367 = chunk__34819_35362;
var G__35368 = count__34820_35363;
var G__35369 = (i__34821_35364 + (1));
seq__34818_35361 = G__35366;
chunk__34819_35362 = G__35367;
count__34820_35363 = G__35368;
i__34821_35364 = G__35369;
continue;
} else {
var temp__5735__auto___35371 = cljs.core.seq(seq__34818_35361);
if(temp__5735__auto___35371){
var seq__34818_35372__$1 = temp__5735__auto___35371;
if(cljs.core.chunked_seq_QMARK_(seq__34818_35372__$1)){
var c__4609__auto___35377 = cljs.core.chunk_first(seq__34818_35372__$1);
var G__35378 = cljs.core.chunk_rest(seq__34818_35372__$1);
var G__35379 = c__4609__auto___35377;
var G__35380 = cljs.core.count(c__4609__auto___35377);
var G__35381 = (0);
seq__34818_35361 = G__35378;
chunk__34819_35362 = G__35379;
count__34820_35363 = G__35380;
i__34821_35364 = G__35381;
continue;
} else {
var c_35382 = cljs.core.first(seq__34818_35372__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35382);


var G__35383 = cljs.core.next(seq__34818_35372__$1);
var G__35384 = null;
var G__35385 = (0);
var G__35386 = (0);
seq__34818_35361 = G__35383;
chunk__34819_35362 = G__35384;
count__34820_35363 = G__35385;
i__34821_35364 = G__35386;
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
var seq__34828 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34829 = null;
var count__34830 = (0);
var i__34831 = (0);
while(true){
if((i__34831 < count__34830)){
var c = chunk__34829.cljs$core$IIndexed$_nth$arity$2(null,i__34831);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35401 = seq__34828;
var G__35402 = chunk__34829;
var G__35403 = count__34830;
var G__35404 = (i__34831 + (1));
seq__34828 = G__35401;
chunk__34829 = G__35402;
count__34830 = G__35403;
i__34831 = G__35404;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34828);
if(temp__5735__auto__){
var seq__34828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34828__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34828__$1);
var G__35405 = cljs.core.chunk_rest(seq__34828__$1);
var G__35406 = c__4609__auto__;
var G__35407 = cljs.core.count(c__4609__auto__);
var G__35408 = (0);
seq__34828 = G__35405;
chunk__34829 = G__35406;
count__34830 = G__35407;
i__34831 = G__35408;
continue;
} else {
var c = cljs.core.first(seq__34828__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35412 = cljs.core.next(seq__34828__$1);
var G__35413 = null;
var G__35414 = (0);
var G__35415 = (0);
seq__34828 = G__35412;
chunk__34829 = G__35413;
count__34830 = G__35414;
i__34831 = G__35415;
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
var temp__5733__auto___35424 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35424)){
var class_list_35425 = temp__5733__auto___35424;
class_list_35425.toggle(c__$1);
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

var G__35488 = (i__4790__auto___35485 + (1));
i__4790__auto___35485 = G__35488;
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

var vec__34874_35491 = dommy.core.elem_and_selector(elem_sel);
var elem_35492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34874_35491,(0),null);
var selector_35493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34874_35491,(1),null);
var seq__34877_35495 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34884_35496 = null;
var count__34885_35497 = (0);
var i__34886_35498 = (0);
while(true){
if((i__34886_35498 < count__34885_35497)){
var vec__34946_35500 = chunk__34884_35496.cljs$core$IIndexed$_nth$arity$2(null,i__34886_35498);
var orig_type_35501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35500,(0),null);
var f_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35500,(1),null);
var seq__34887_35503 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35501,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35501,cljs.core.identity])));
var chunk__34889_35504 = null;
var count__34890_35505 = (0);
var i__34891_35506 = (0);
while(true){
if((i__34891_35506 < count__34890_35505)){
var vec__34966_35507 = chunk__34889_35504.cljs$core$IIndexed$_nth$arity$2(null,i__34891_35506);
var actual_type_35508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966_35507,(0),null);
var factory_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966_35507,(1),null);
var canonical_f_35510 = (function (){var G__34970 = (factory_35509.cljs$core$IFn$_invoke$arity$1 ? factory_35509.cljs$core$IFn$_invoke$arity$1(f_35502) : factory_35509.call(null,f_35502));
var fexpr__34969 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34969.cljs$core$IFn$_invoke$arity$1 ? fexpr__34969.cljs$core$IFn$_invoke$arity$1(G__34970) : fexpr__34969.call(null,G__34970));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35508,f_35502], null),canonical_f_35510], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35508),canonical_f_35510);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35508),canonical_f_35510);
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
var vec__34971_35526 = cljs.core.first(seq__34887_35520__$1);
var actual_type_35527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35526,(0),null);
var factory_35528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35526,(1),null);
var canonical_f_35529 = (function (){var G__34975 = (factory_35528.cljs$core$IFn$_invoke$arity$1 ? factory_35528.cljs$core$IFn$_invoke$arity$1(f_35502) : factory_35528.call(null,f_35502));
var fexpr__34974 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34974.cljs$core$IFn$_invoke$arity$1 ? fexpr__34974.cljs$core$IFn$_invoke$arity$1(G__34975) : fexpr__34974.call(null,G__34975));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35527,f_35502], null),canonical_f_35529], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35527),canonical_f_35529);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35527),canonical_f_35529);
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

var G__35537 = seq__34877_35495;
var G__35538 = chunk__34884_35496;
var G__35539 = count__34885_35497;
var G__35540 = (i__34886_35498 + (1));
seq__34877_35495 = G__35537;
chunk__34884_35496 = G__35538;
count__34885_35497 = G__35539;
i__34886_35498 = G__35540;
continue;
} else {
var temp__5735__auto___35541 = cljs.core.seq(seq__34877_35495);
if(temp__5735__auto___35541){
var seq__34877_35542__$1 = temp__5735__auto___35541;
if(cljs.core.chunked_seq_QMARK_(seq__34877_35542__$1)){
var c__4609__auto___35543 = cljs.core.chunk_first(seq__34877_35542__$1);
var G__35546 = cljs.core.chunk_rest(seq__34877_35542__$1);
var G__35547 = c__4609__auto___35543;
var G__35548 = cljs.core.count(c__4609__auto___35543);
var G__35549 = (0);
seq__34877_35495 = G__35546;
chunk__34884_35496 = G__35547;
count__34885_35497 = G__35548;
i__34886_35498 = G__35549;
continue;
} else {
var vec__34976_35554 = cljs.core.first(seq__34877_35542__$1);
var orig_type_35555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35554,(0),null);
var f_35556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35554,(1),null);
var seq__34878_35558 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35555,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35555,cljs.core.identity])));
var chunk__34880_35559 = null;
var count__34881_35560 = (0);
var i__34882_35561 = (0);
while(true){
if((i__34882_35561 < count__34881_35560)){
var vec__34990_35562 = chunk__34880_35559.cljs$core$IIndexed$_nth$arity$2(null,i__34882_35561);
var actual_type_35563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35562,(0),null);
var factory_35564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35562,(1),null);
var canonical_f_35567 = (function (){var G__34994 = (factory_35564.cljs$core$IFn$_invoke$arity$1 ? factory_35564.cljs$core$IFn$_invoke$arity$1(f_35556) : factory_35564.call(null,f_35556));
var fexpr__34993 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34993.cljs$core$IFn$_invoke$arity$1 ? fexpr__34993.cljs$core$IFn$_invoke$arity$1(G__34994) : fexpr__34993.call(null,G__34994));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35563,f_35556], null),canonical_f_35567], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35563),canonical_f_35567);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35563),canonical_f_35567);
}


var G__35570 = seq__34878_35558;
var G__35571 = chunk__34880_35559;
var G__35572 = count__34881_35560;
var G__35573 = (i__34882_35561 + (1));
seq__34878_35558 = G__35570;
chunk__34880_35559 = G__35571;
count__34881_35560 = G__35572;
i__34882_35561 = G__35573;
continue;
} else {
var temp__5735__auto___35579__$1 = cljs.core.seq(seq__34878_35558);
if(temp__5735__auto___35579__$1){
var seq__34878_35581__$1 = temp__5735__auto___35579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34878_35581__$1)){
var c__4609__auto___35582 = cljs.core.chunk_first(seq__34878_35581__$1);
var G__35583 = cljs.core.chunk_rest(seq__34878_35581__$1);
var G__35584 = c__4609__auto___35582;
var G__35585 = cljs.core.count(c__4609__auto___35582);
var G__35586 = (0);
seq__34878_35558 = G__35583;
chunk__34880_35559 = G__35584;
count__34881_35560 = G__35585;
i__34882_35561 = G__35586;
continue;
} else {
var vec__34997_35588 = cljs.core.first(seq__34878_35581__$1);
var actual_type_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34997_35588,(0),null);
var factory_35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34997_35588,(1),null);
var canonical_f_35591 = (function (){var G__35001 = (factory_35590.cljs$core$IFn$_invoke$arity$1 ? factory_35590.cljs$core$IFn$_invoke$arity$1(f_35556) : factory_35590.call(null,f_35556));
var fexpr__35000 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__35000.cljs$core$IFn$_invoke$arity$1 ? fexpr__35000.cljs$core$IFn$_invoke$arity$1(G__35001) : fexpr__35000.call(null,G__35001));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35589,f_35556], null),canonical_f_35591], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35589),canonical_f_35591);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35589),canonical_f_35591);
}


var G__35597 = cljs.core.next(seq__34878_35581__$1);
var G__35598 = null;
var G__35599 = (0);
var G__35600 = (0);
seq__34878_35558 = G__35597;
chunk__34880_35559 = G__35598;
count__34881_35560 = G__35599;
i__34882_35561 = G__35600;
continue;
}
} else {
}
}
break;
}

var G__35601 = cljs.core.next(seq__34877_35542__$1);
var G__35602 = null;
var G__35603 = (0);
var G__35604 = (0);
seq__34877_35495 = G__35601;
chunk__34884_35496 = G__35602;
count__34885_35497 = G__35603;
i__34886_35498 = G__35604;
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
var len__4789__auto___35609 = arguments.length;
var i__4790__auto___35610 = (0);
while(true){
if((i__4790__auto___35610 < len__4789__auto___35609)){
args__4795__auto__.push((arguments[i__4790__auto___35610]));

var G__35614 = (i__4790__auto___35610 + (1));
i__4790__auto___35610 = G__35614;
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

var vec__35006_35617 = dommy.core.elem_and_selector(elem_sel);
var elem_35618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35617,(0),null);
var selector_35619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35617,(1),null);
var seq__35009_35623 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35016_35624 = null;
var count__35017_35625 = (0);
var i__35018_35626 = (0);
while(true){
if((i__35018_35626 < count__35017_35625)){
var vec__35100_35627 = chunk__35016_35624.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35626);
var orig_type_35628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35100_35627,(0),null);
var f_35629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35100_35627,(1),null);
var seq__35019_35633 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35628,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35628,cljs.core.identity])));
var chunk__35021_35634 = null;
var count__35022_35635 = (0);
var i__35023_35636 = (0);
while(true){
if((i__35023_35636 < count__35022_35635)){
var vec__35113_35637 = chunk__35021_35634.cljs$core$IIndexed$_nth$arity$2(null,i__35023_35636);
var actual_type_35638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35637,(0),null);
var __35640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35637,(1),null);
var keys_35643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35619,actual_type_35638,f_35629], null);
var canonical_f_35644 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35618),keys_35643);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35618,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35643], 0));

if(cljs.core.truth_(elem_35618.removeEventListener)){
elem_35618.removeEventListener(cljs.core.name(actual_type_35638),canonical_f_35644);
} else {
elem_35618.detachEvent(cljs.core.name(actual_type_35638),canonical_f_35644);
}


var G__35651 = seq__35019_35633;
var G__35652 = chunk__35021_35634;
var G__35653 = count__35022_35635;
var G__35654 = (i__35023_35636 + (1));
seq__35019_35633 = G__35651;
chunk__35021_35634 = G__35652;
count__35022_35635 = G__35653;
i__35023_35636 = G__35654;
continue;
} else {
var temp__5735__auto___35658 = cljs.core.seq(seq__35019_35633);
if(temp__5735__auto___35658){
var seq__35019_35660__$1 = temp__5735__auto___35658;
if(cljs.core.chunked_seq_QMARK_(seq__35019_35660__$1)){
var c__4609__auto___35662 = cljs.core.chunk_first(seq__35019_35660__$1);
var G__35664 = cljs.core.chunk_rest(seq__35019_35660__$1);
var G__35665 = c__4609__auto___35662;
var G__35666 = cljs.core.count(c__4609__auto___35662);
var G__35667 = (0);
seq__35019_35633 = G__35664;
chunk__35021_35634 = G__35665;
count__35022_35635 = G__35666;
i__35023_35636 = G__35667;
continue;
} else {
var vec__35119_35668 = cljs.core.first(seq__35019_35660__$1);
var actual_type_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119_35668,(0),null);
var __35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119_35668,(1),null);
var keys_35672 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35619,actual_type_35669,f_35629], null);
var canonical_f_35673 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35618),keys_35672);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35618,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35672], 0));

if(cljs.core.truth_(elem_35618.removeEventListener)){
elem_35618.removeEventListener(cljs.core.name(actual_type_35669),canonical_f_35673);
} else {
elem_35618.detachEvent(cljs.core.name(actual_type_35669),canonical_f_35673);
}


var G__35676 = cljs.core.next(seq__35019_35660__$1);
var G__35677 = null;
var G__35678 = (0);
var G__35679 = (0);
seq__35019_35633 = G__35676;
chunk__35021_35634 = G__35677;
count__35022_35635 = G__35678;
i__35023_35636 = G__35679;
continue;
}
} else {
}
}
break;
}

var G__35682 = seq__35009_35623;
var G__35683 = chunk__35016_35624;
var G__35684 = count__35017_35625;
var G__35685 = (i__35018_35626 + (1));
seq__35009_35623 = G__35682;
chunk__35016_35624 = G__35683;
count__35017_35625 = G__35684;
i__35018_35626 = G__35685;
continue;
} else {
var temp__5735__auto___35687 = cljs.core.seq(seq__35009_35623);
if(temp__5735__auto___35687){
var seq__35009_35688__$1 = temp__5735__auto___35687;
if(cljs.core.chunked_seq_QMARK_(seq__35009_35688__$1)){
var c__4609__auto___35689 = cljs.core.chunk_first(seq__35009_35688__$1);
var G__35690 = cljs.core.chunk_rest(seq__35009_35688__$1);
var G__35691 = c__4609__auto___35689;
var G__35692 = cljs.core.count(c__4609__auto___35689);
var G__35693 = (0);
seq__35009_35623 = G__35690;
chunk__35016_35624 = G__35691;
count__35017_35625 = G__35692;
i__35018_35626 = G__35693;
continue;
} else {
var vec__35122_35697 = cljs.core.first(seq__35009_35688__$1);
var orig_type_35698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35697,(0),null);
var f_35699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35697,(1),null);
var seq__35010_35700 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35698,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35698,cljs.core.identity])));
var chunk__35012_35701 = null;
var count__35013_35702 = (0);
var i__35014_35703 = (0);
while(true){
if((i__35014_35703 < count__35013_35702)){
var vec__35133_35707 = chunk__35012_35701.cljs$core$IIndexed$_nth$arity$2(null,i__35014_35703);
var actual_type_35708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133_35707,(0),null);
var __35709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133_35707,(1),null);
var keys_35710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35619,actual_type_35708,f_35699], null);
var canonical_f_35711 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35618),keys_35710);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35618,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35710], 0));

if(cljs.core.truth_(elem_35618.removeEventListener)){
elem_35618.removeEventListener(cljs.core.name(actual_type_35708),canonical_f_35711);
} else {
elem_35618.detachEvent(cljs.core.name(actual_type_35708),canonical_f_35711);
}


var G__35715 = seq__35010_35700;
var G__35716 = chunk__35012_35701;
var G__35717 = count__35013_35702;
var G__35718 = (i__35014_35703 + (1));
seq__35010_35700 = G__35715;
chunk__35012_35701 = G__35716;
count__35013_35702 = G__35717;
i__35014_35703 = G__35718;
continue;
} else {
var temp__5735__auto___35721__$1 = cljs.core.seq(seq__35010_35700);
if(temp__5735__auto___35721__$1){
var seq__35010_35723__$1 = temp__5735__auto___35721__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35010_35723__$1)){
var c__4609__auto___35724 = cljs.core.chunk_first(seq__35010_35723__$1);
var G__35725 = cljs.core.chunk_rest(seq__35010_35723__$1);
var G__35726 = c__4609__auto___35724;
var G__35727 = cljs.core.count(c__4609__auto___35724);
var G__35728 = (0);
seq__35010_35700 = G__35725;
chunk__35012_35701 = G__35726;
count__35013_35702 = G__35727;
i__35014_35703 = G__35728;
continue;
} else {
var vec__35136_35730 = cljs.core.first(seq__35010_35723__$1);
var actual_type_35731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35730,(0),null);
var __35732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136_35730,(1),null);
var keys_35734 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35619,actual_type_35731,f_35699], null);
var canonical_f_35735 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35618),keys_35734);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35618,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35734], 0));

if(cljs.core.truth_(elem_35618.removeEventListener)){
elem_35618.removeEventListener(cljs.core.name(actual_type_35731),canonical_f_35735);
} else {
elem_35618.detachEvent(cljs.core.name(actual_type_35731),canonical_f_35735);
}


var G__35757 = cljs.core.next(seq__35010_35723__$1);
var G__35758 = null;
var G__35759 = (0);
var G__35760 = (0);
seq__35010_35700 = G__35757;
chunk__35012_35701 = G__35758;
count__35013_35702 = G__35759;
i__35014_35703 = G__35760;
continue;
}
} else {
}
}
break;
}

var G__35761 = cljs.core.next(seq__35009_35688__$1);
var G__35762 = null;
var G__35763 = (0);
var G__35764 = (0);
seq__35009_35623 = G__35761;
chunk__35016_35624 = G__35762;
count__35017_35625 = G__35763;
i__35018_35626 = G__35764;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35004){
var G__35005 = cljs.core.first(seq35004);
var seq35004__$1 = cljs.core.next(seq35004);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35005,seq35004__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35766 = arguments.length;
var i__4790__auto___35767 = (0);
while(true){
if((i__4790__auto___35767 < len__4789__auto___35766)){
args__4795__auto__.push((arguments[i__4790__auto___35767]));

var G__35769 = (i__4790__auto___35767 + (1));
i__4790__auto___35767 = G__35769;
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

var vec__35141_35771 = dommy.core.elem_and_selector(elem_sel);
var elem_35772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141_35771,(0),null);
var selector_35773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141_35771,(1),null);
var seq__35144_35775 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35145_35776 = null;
var count__35146_35777 = (0);
var i__35147_35778 = (0);
while(true){
if((i__35147_35778 < count__35146_35777)){
var vec__35154_35786 = chunk__35145_35776.cljs$core$IIndexed$_nth$arity$2(null,i__35147_35778);
var type_35787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35786,(0),null);
var f_35788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35786,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35787,((function (seq__35144_35775,chunk__35145_35776,count__35146_35777,i__35147_35778,vec__35154_35786,type_35787,f_35788,vec__35141_35771,elem_35772,selector_35773){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35787,dommy$core$this_fn], 0));

return (f_35788.cljs$core$IFn$_invoke$arity$1 ? f_35788.cljs$core$IFn$_invoke$arity$1(e) : f_35788.call(null,e));
});})(seq__35144_35775,chunk__35145_35776,count__35146_35777,i__35147_35778,vec__35154_35786,type_35787,f_35788,vec__35141_35771,elem_35772,selector_35773))
], 0));


var G__35798 = seq__35144_35775;
var G__35799 = chunk__35145_35776;
var G__35800 = count__35146_35777;
var G__35801 = (i__35147_35778 + (1));
seq__35144_35775 = G__35798;
chunk__35145_35776 = G__35799;
count__35146_35777 = G__35800;
i__35147_35778 = G__35801;
continue;
} else {
var temp__5735__auto___35804 = cljs.core.seq(seq__35144_35775);
if(temp__5735__auto___35804){
var seq__35144_35805__$1 = temp__5735__auto___35804;
if(cljs.core.chunked_seq_QMARK_(seq__35144_35805__$1)){
var c__4609__auto___35806 = cljs.core.chunk_first(seq__35144_35805__$1);
var G__35811 = cljs.core.chunk_rest(seq__35144_35805__$1);
var G__35812 = c__4609__auto___35806;
var G__35813 = cljs.core.count(c__4609__auto___35806);
var G__35814 = (0);
seq__35144_35775 = G__35811;
chunk__35145_35776 = G__35812;
count__35146_35777 = G__35813;
i__35147_35778 = G__35814;
continue;
} else {
var vec__35157_35816 = cljs.core.first(seq__35144_35805__$1);
var type_35817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157_35816,(0),null);
var f_35818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157_35816,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35817,((function (seq__35144_35775,chunk__35145_35776,count__35146_35777,i__35147_35778,vec__35157_35816,type_35817,f_35818,seq__35144_35805__$1,temp__5735__auto___35804,vec__35141_35771,elem_35772,selector_35773){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35817,dommy$core$this_fn], 0));

return (f_35818.cljs$core$IFn$_invoke$arity$1 ? f_35818.cljs$core$IFn$_invoke$arity$1(e) : f_35818.call(null,e));
});})(seq__35144_35775,chunk__35145_35776,count__35146_35777,i__35147_35778,vec__35157_35816,type_35817,f_35818,seq__35144_35805__$1,temp__5735__auto___35804,vec__35141_35771,elem_35772,selector_35773))
], 0));


var G__35828 = cljs.core.next(seq__35144_35805__$1);
var G__35829 = null;
var G__35830 = (0);
var G__35831 = (0);
seq__35144_35775 = G__35828;
chunk__35145_35776 = G__35829;
count__35146_35777 = G__35830;
i__35147_35778 = G__35831;
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
