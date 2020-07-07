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
var G__34720 = arguments.length;
switch (G__34720) {
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
var G__34722 = arguments.length;
switch (G__34722) {
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
var G__34725 = arguments.length;
switch (G__34725) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34723_SHARP_){
return (!((p1__34723_SHARP_ === base)));
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
var len__4789__auto___35162 = arguments.length;
var i__4790__auto___35163 = (0);
while(true){
if((i__4790__auto___35163 < len__4789__auto___35162)){
args__4795__auto__.push((arguments[i__4790__auto___35163]));

var G__35164 = (i__4790__auto___35163 + (1));
i__4790__auto___35163 = G__35164;
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
var seq__34730_35165 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34731_35166 = null;
var count__34732_35167 = (0);
var i__34733_35168 = (0);
while(true){
if((i__34733_35168 < count__34732_35167)){
var vec__34740_35169 = chunk__34731_35166.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35168);
var k_35170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34740_35169,(0),null);
var v_35171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34740_35169,(1),null);
style.setProperty(dommy.utils.as_str(k_35170),v_35171);


var G__35172 = seq__34730_35165;
var G__35173 = chunk__34731_35166;
var G__35174 = count__34732_35167;
var G__35175 = (i__34733_35168 + (1));
seq__34730_35165 = G__35172;
chunk__34731_35166 = G__35173;
count__34732_35167 = G__35174;
i__34733_35168 = G__35175;
continue;
} else {
var temp__5735__auto___35177 = cljs.core.seq(seq__34730_35165);
if(temp__5735__auto___35177){
var seq__34730_35180__$1 = temp__5735__auto___35177;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35180__$1)){
var c__4609__auto___35181 = cljs.core.chunk_first(seq__34730_35180__$1);
var G__35182 = cljs.core.chunk_rest(seq__34730_35180__$1);
var G__35183 = c__4609__auto___35181;
var G__35184 = cljs.core.count(c__4609__auto___35181);
var G__35185 = (0);
seq__34730_35165 = G__35182;
chunk__34731_35166 = G__35183;
count__34732_35167 = G__35184;
i__34733_35168 = G__35185;
continue;
} else {
var vec__34743_35186 = cljs.core.first(seq__34730_35180__$1);
var k_35187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34743_35186,(0),null);
var v_35188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34743_35186,(1),null);
style.setProperty(dommy.utils.as_str(k_35187),v_35188);


var G__35189 = cljs.core.next(seq__34730_35180__$1);
var G__35190 = null;
var G__35191 = (0);
var G__35192 = (0);
seq__34730_35165 = G__35189;
chunk__34731_35166 = G__35190;
count__34732_35167 = G__35191;
i__34733_35168 = G__35192;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34728){
var G__34729 = cljs.core.first(seq34728);
var seq34728__$1 = cljs.core.next(seq34728);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34729,seq34728__$1);
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
var seq__34749_35196 = cljs.core.seq(keywords);
var chunk__34750_35197 = null;
var count__34751_35198 = (0);
var i__34752_35199 = (0);
while(true){
if((i__34752_35199 < count__34751_35198)){
var kw_35200 = chunk__34750_35197.cljs$core$IIndexed$_nth$arity$2(null,i__34752_35199);
style.removeProperty(dommy.utils.as_str(kw_35200));


var G__35201 = seq__34749_35196;
var G__35202 = chunk__34750_35197;
var G__35203 = count__34751_35198;
var G__35204 = (i__34752_35199 + (1));
seq__34749_35196 = G__35201;
chunk__34750_35197 = G__35202;
count__34751_35198 = G__35203;
i__34752_35199 = G__35204;
continue;
} else {
var temp__5735__auto___35206 = cljs.core.seq(seq__34749_35196);
if(temp__5735__auto___35206){
var seq__34749_35207__$1 = temp__5735__auto___35206;
if(cljs.core.chunked_seq_QMARK_(seq__34749_35207__$1)){
var c__4609__auto___35208 = cljs.core.chunk_first(seq__34749_35207__$1);
var G__35209 = cljs.core.chunk_rest(seq__34749_35207__$1);
var G__35210 = c__4609__auto___35208;
var G__35211 = cljs.core.count(c__4609__auto___35208);
var G__35212 = (0);
seq__34749_35196 = G__35209;
chunk__34750_35197 = G__35210;
count__34751_35198 = G__35211;
i__34752_35199 = G__35212;
continue;
} else {
var kw_35213 = cljs.core.first(seq__34749_35207__$1);
style.removeProperty(dommy.utils.as_str(kw_35213));


var G__35214 = cljs.core.next(seq__34749_35207__$1);
var G__35215 = null;
var G__35216 = (0);
var G__35217 = (0);
seq__34749_35196 = G__35214;
chunk__34750_35197 = G__35215;
count__34751_35198 = G__35216;
i__34752_35199 = G__35217;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34746){
var G__34747 = cljs.core.first(seq34746);
var seq34746__$1 = cljs.core.next(seq34746);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34747,seq34746__$1);
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

var seq__34755_35222 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34756_35223 = null;
var count__34757_35224 = (0);
var i__34758_35225 = (0);
while(true){
if((i__34758_35225 < count__34757_35224)){
var vec__34765_35226 = chunk__34756_35223.cljs$core$IIndexed$_nth$arity$2(null,i__34758_35225);
var k_35227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765_35226,(0),null);
var v_35228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765_35226,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35227,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35228),"px"].join('')], 0));


var G__35229 = seq__34755_35222;
var G__35230 = chunk__34756_35223;
var G__35231 = count__34757_35224;
var G__35232 = (i__34758_35225 + (1));
seq__34755_35222 = G__35229;
chunk__34756_35223 = G__35230;
count__34757_35224 = G__35231;
i__34758_35225 = G__35232;
continue;
} else {
var temp__5735__auto___35233 = cljs.core.seq(seq__34755_35222);
if(temp__5735__auto___35233){
var seq__34755_35234__$1 = temp__5735__auto___35233;
if(cljs.core.chunked_seq_QMARK_(seq__34755_35234__$1)){
var c__4609__auto___35235 = cljs.core.chunk_first(seq__34755_35234__$1);
var G__35236 = cljs.core.chunk_rest(seq__34755_35234__$1);
var G__35237 = c__4609__auto___35235;
var G__35238 = cljs.core.count(c__4609__auto___35235);
var G__35239 = (0);
seq__34755_35222 = G__35236;
chunk__34756_35223 = G__35237;
count__34757_35224 = G__35238;
i__34758_35225 = G__35239;
continue;
} else {
var vec__34768_35240 = cljs.core.first(seq__34755_35234__$1);
var k_35241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768_35240,(0),null);
var v_35242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768_35240,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35241,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35242),"px"].join('')], 0));


var G__35243 = cljs.core.next(seq__34755_35234__$1);
var G__35244 = null;
var G__35245 = (0);
var G__35246 = (0);
seq__34755_35222 = G__35243;
chunk__34756_35223 = G__35244;
count__34757_35224 = G__35245;
i__34758_35225 = G__35246;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34753){
var G__34754 = cljs.core.first(seq34753);
var seq34753__$1 = cljs.core.next(seq34753);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34754,seq34753__$1);
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
var G__34776 = arguments.length;
switch (G__34776) {
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
var G__34777 = elem;
(G__34777[k__$1] = v);

return G__34777;
} else {
var G__34778 = elem;
G__34778.setAttribute(k__$1,v);

return G__34778;
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

var seq__34779_35251 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34780_35252 = null;
var count__34781_35253 = (0);
var i__34782_35254 = (0);
while(true){
if((i__34782_35254 < count__34781_35253)){
var vec__34789_35255 = chunk__34780_35252.cljs$core$IIndexed$_nth$arity$2(null,i__34782_35254);
var k_35256__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35255,(0),null);
var v_35257__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35255,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35256__$1,v_35257__$1);


var G__35258 = seq__34779_35251;
var G__35259 = chunk__34780_35252;
var G__35260 = count__34781_35253;
var G__35261 = (i__34782_35254 + (1));
seq__34779_35251 = G__35258;
chunk__34780_35252 = G__35259;
count__34781_35253 = G__35260;
i__34782_35254 = G__35261;
continue;
} else {
var temp__5735__auto___35262 = cljs.core.seq(seq__34779_35251);
if(temp__5735__auto___35262){
var seq__34779_35263__$1 = temp__5735__auto___35262;
if(cljs.core.chunked_seq_QMARK_(seq__34779_35263__$1)){
var c__4609__auto___35264 = cljs.core.chunk_first(seq__34779_35263__$1);
var G__35265 = cljs.core.chunk_rest(seq__34779_35263__$1);
var G__35266 = c__4609__auto___35264;
var G__35267 = cljs.core.count(c__4609__auto___35264);
var G__35268 = (0);
seq__34779_35251 = G__35265;
chunk__34780_35252 = G__35266;
count__34781_35253 = G__35267;
i__34782_35254 = G__35268;
continue;
} else {
var vec__34792_35269 = cljs.core.first(seq__34779_35263__$1);
var k_35270__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_35269,(0),null);
var v_35271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_35269,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35270__$1,v_35271__$1);


var G__35272 = cljs.core.next(seq__34779_35263__$1);
var G__35273 = null;
var G__35274 = (0);
var G__35275 = (0);
seq__34779_35251 = G__35272;
chunk__34780_35252 = G__35273;
count__34781_35253 = G__35274;
i__34782_35254 = G__35275;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34772){
var G__34773 = cljs.core.first(seq34772);
var seq34772__$1 = cljs.core.next(seq34772);
var G__34774 = cljs.core.first(seq34772__$1);
var seq34772__$2 = cljs.core.next(seq34772__$1);
var G__34775 = cljs.core.first(seq34772__$2);
var seq34772__$3 = cljs.core.next(seq34772__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34773,G__34774,G__34775,seq34772__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34799 = arguments.length;
switch (G__34799) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35277 = arguments.length;
var i__4790__auto___35278 = (0);
while(true){
if((i__4790__auto___35278 < len__4789__auto___35277)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35278]));

var G__35279 = (i__4790__auto___35278 + (1));
i__4790__auto___35278 = G__35279;
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
var k_35280__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34800 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34800.cljs$core$IFn$_invoke$arity$1 ? fexpr__34800.cljs$core$IFn$_invoke$arity$1(k_35280__$1) : fexpr__34800.call(null,k_35280__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35280__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34801_35281 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34802_35282 = null;
var count__34803_35283 = (0);
var i__34804_35284 = (0);
while(true){
if((i__34804_35284 < count__34803_35283)){
var k_35285__$1 = chunk__34802_35282.cljs$core$IIndexed$_nth$arity$2(null,i__34804_35284);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35285__$1);


var G__35286 = seq__34801_35281;
var G__35287 = chunk__34802_35282;
var G__35288 = count__34803_35283;
var G__35289 = (i__34804_35284 + (1));
seq__34801_35281 = G__35286;
chunk__34802_35282 = G__35287;
count__34803_35283 = G__35288;
i__34804_35284 = G__35289;
continue;
} else {
var temp__5735__auto___35290 = cljs.core.seq(seq__34801_35281);
if(temp__5735__auto___35290){
var seq__34801_35291__$1 = temp__5735__auto___35290;
if(cljs.core.chunked_seq_QMARK_(seq__34801_35291__$1)){
var c__4609__auto___35292 = cljs.core.chunk_first(seq__34801_35291__$1);
var G__35293 = cljs.core.chunk_rest(seq__34801_35291__$1);
var G__35294 = c__4609__auto___35292;
var G__35295 = cljs.core.count(c__4609__auto___35292);
var G__35296 = (0);
seq__34801_35281 = G__35293;
chunk__34802_35282 = G__35294;
count__34803_35283 = G__35295;
i__34804_35284 = G__35296;
continue;
} else {
var k_35297__$1 = cljs.core.first(seq__34801_35291__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35297__$1);


var G__35298 = cljs.core.next(seq__34801_35291__$1);
var G__35299 = null;
var G__35300 = (0);
var G__35301 = (0);
seq__34801_35281 = G__35298;
chunk__34802_35282 = G__35299;
count__34803_35283 = G__35300;
i__34804_35284 = G__35301;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34796){
var G__34797 = cljs.core.first(seq34796);
var seq34796__$1 = cljs.core.next(seq34796);
var G__34798 = cljs.core.first(seq34796__$1);
var seq34796__$2 = cljs.core.next(seq34796__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34797,G__34798,seq34796__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34806 = arguments.length;
switch (G__34806) {
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
var G__34811 = arguments.length;
switch (G__34811) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35304 = arguments.length;
var i__4790__auto___35305 = (0);
while(true){
if((i__4790__auto___35305 < len__4789__auto___35304)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35305]));

var G__35306 = (i__4790__auto___35305 + (1));
i__4790__auto___35305 = G__35306;
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
var temp__5733__auto___35307 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35307)){
var class_list_35308 = temp__5733__auto___35307;
var seq__34812_35309 = cljs.core.seq(classes__$1);
var chunk__34813_35310 = null;
var count__34814_35311 = (0);
var i__34815_35312 = (0);
while(true){
if((i__34815_35312 < count__34814_35311)){
var c_35313 = chunk__34813_35310.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35312);
class_list_35308.add(c_35313);


var G__35314 = seq__34812_35309;
var G__35315 = chunk__34813_35310;
var G__35316 = count__34814_35311;
var G__35317 = (i__34815_35312 + (1));
seq__34812_35309 = G__35314;
chunk__34813_35310 = G__35315;
count__34814_35311 = G__35316;
i__34815_35312 = G__35317;
continue;
} else {
var temp__5735__auto___35318 = cljs.core.seq(seq__34812_35309);
if(temp__5735__auto___35318){
var seq__34812_35319__$1 = temp__5735__auto___35318;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35319__$1)){
var c__4609__auto___35320 = cljs.core.chunk_first(seq__34812_35319__$1);
var G__35321 = cljs.core.chunk_rest(seq__34812_35319__$1);
var G__35322 = c__4609__auto___35320;
var G__35323 = cljs.core.count(c__4609__auto___35320);
var G__35324 = (0);
seq__34812_35309 = G__35321;
chunk__34813_35310 = G__35322;
count__34814_35311 = G__35323;
i__34815_35312 = G__35324;
continue;
} else {
var c_35325 = cljs.core.first(seq__34812_35319__$1);
class_list_35308.add(c_35325);


var G__35326 = cljs.core.next(seq__34812_35319__$1);
var G__35327 = null;
var G__35328 = (0);
var G__35329 = (0);
seq__34812_35309 = G__35326;
chunk__34813_35310 = G__35327;
count__34814_35311 = G__35328;
i__34815_35312 = G__35329;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34816_35330 = cljs.core.seq(classes__$1);
var chunk__34817_35331 = null;
var count__34818_35332 = (0);
var i__34819_35333 = (0);
while(true){
if((i__34819_35333 < count__34818_35332)){
var c_35334 = chunk__34817_35331.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35333);
var class_name_35335 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35335,c_35334))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35335 === ""))?c_35334:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35335)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35334)].join('')));
}


var G__35336 = seq__34816_35330;
var G__35337 = chunk__34817_35331;
var G__35338 = count__34818_35332;
var G__35339 = (i__34819_35333 + (1));
seq__34816_35330 = G__35336;
chunk__34817_35331 = G__35337;
count__34818_35332 = G__35338;
i__34819_35333 = G__35339;
continue;
} else {
var temp__5735__auto___35340 = cljs.core.seq(seq__34816_35330);
if(temp__5735__auto___35340){
var seq__34816_35341__$1 = temp__5735__auto___35340;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35341__$1)){
var c__4609__auto___35342 = cljs.core.chunk_first(seq__34816_35341__$1);
var G__35343 = cljs.core.chunk_rest(seq__34816_35341__$1);
var G__35344 = c__4609__auto___35342;
var G__35345 = cljs.core.count(c__4609__auto___35342);
var G__35346 = (0);
seq__34816_35330 = G__35343;
chunk__34817_35331 = G__35344;
count__34818_35332 = G__35345;
i__34819_35333 = G__35346;
continue;
} else {
var c_35347 = cljs.core.first(seq__34816_35341__$1);
var class_name_35348 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35348,c_35347))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35348 === ""))?c_35347:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35348)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35347)].join('')));
}


var G__35349 = cljs.core.next(seq__34816_35341__$1);
var G__35350 = null;
var G__35351 = (0);
var G__35352 = (0);
seq__34816_35330 = G__35349;
chunk__34817_35331 = G__35350;
count__34818_35332 = G__35351;
i__34819_35333 = G__35352;
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
var seq__34820_35353 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34821_35354 = null;
var count__34822_35355 = (0);
var i__34823_35356 = (0);
while(true){
if((i__34823_35356 < count__34822_35355)){
var c_35357 = chunk__34821_35354.cljs$core$IIndexed$_nth$arity$2(null,i__34823_35356);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35357);


var G__35358 = seq__34820_35353;
var G__35359 = chunk__34821_35354;
var G__35360 = count__34822_35355;
var G__35361 = (i__34823_35356 + (1));
seq__34820_35353 = G__35358;
chunk__34821_35354 = G__35359;
count__34822_35355 = G__35360;
i__34823_35356 = G__35361;
continue;
} else {
var temp__5735__auto___35362 = cljs.core.seq(seq__34820_35353);
if(temp__5735__auto___35362){
var seq__34820_35363__$1 = temp__5735__auto___35362;
if(cljs.core.chunked_seq_QMARK_(seq__34820_35363__$1)){
var c__4609__auto___35364 = cljs.core.chunk_first(seq__34820_35363__$1);
var G__35365 = cljs.core.chunk_rest(seq__34820_35363__$1);
var G__35366 = c__4609__auto___35364;
var G__35367 = cljs.core.count(c__4609__auto___35364);
var G__35368 = (0);
seq__34820_35353 = G__35365;
chunk__34821_35354 = G__35366;
count__34822_35355 = G__35367;
i__34823_35356 = G__35368;
continue;
} else {
var c_35369 = cljs.core.first(seq__34820_35363__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35369);


var G__35370 = cljs.core.next(seq__34820_35363__$1);
var G__35371 = null;
var G__35372 = (0);
var G__35373 = (0);
seq__34820_35353 = G__35370;
chunk__34821_35354 = G__35371;
count__34822_35355 = G__35372;
i__34823_35356 = G__35373;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34808){
var G__34809 = cljs.core.first(seq34808);
var seq34808__$1 = cljs.core.next(seq34808);
var G__34810 = cljs.core.first(seq34808__$1);
var seq34808__$2 = cljs.core.next(seq34808__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34809,G__34810,seq34808__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34828 = arguments.length;
switch (G__34828) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35375 = arguments.length;
var i__4790__auto___35376 = (0);
while(true){
if((i__4790__auto___35376 < len__4789__auto___35375)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35376]));

var G__35377 = (i__4790__auto___35376 + (1));
i__4790__auto___35376 = G__35377;
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
var temp__5733__auto___35380 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35380)){
var class_list_35381 = temp__5733__auto___35380;
class_list_35381.remove(c__$1);
} else {
var class_name_35382 = dommy.core.class$(elem);
var new_class_name_35383 = dommy.utils.remove_class_str(class_name_35382,c__$1);
if((class_name_35382 === new_class_name_35383)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35383);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34829 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34830 = null;
var count__34831 = (0);
var i__34832 = (0);
while(true){
if((i__34832 < count__34831)){
var c = chunk__34830.cljs$core$IIndexed$_nth$arity$2(null,i__34832);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35384 = seq__34829;
var G__35385 = chunk__34830;
var G__35386 = count__34831;
var G__35387 = (i__34832 + (1));
seq__34829 = G__35384;
chunk__34830 = G__35385;
count__34831 = G__35386;
i__34832 = G__35387;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34829);
if(temp__5735__auto__){
var seq__34829__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34829__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34829__$1);
var G__35388 = cljs.core.chunk_rest(seq__34829__$1);
var G__35389 = c__4609__auto__;
var G__35390 = cljs.core.count(c__4609__auto__);
var G__35391 = (0);
seq__34829 = G__35388;
chunk__34830 = G__35389;
count__34831 = G__35390;
i__34832 = G__35391;
continue;
} else {
var c = cljs.core.first(seq__34829__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35392 = cljs.core.next(seq__34829__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__34829 = G__35392;
chunk__34830 = G__35393;
count__34831 = G__35394;
i__34832 = G__35395;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34825){
var G__34826 = cljs.core.first(seq34825);
var seq34825__$1 = cljs.core.next(seq34825);
var G__34827 = cljs.core.first(seq34825__$1);
var seq34825__$2 = cljs.core.next(seq34825__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34826,G__34827,seq34825__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34834 = arguments.length;
switch (G__34834) {
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
var temp__5733__auto___35397 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35397)){
var class_list_35398 = temp__5733__auto___35397;
class_list_35398.toggle(c__$1);
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
var G__34836 = arguments.length;
switch (G__34836) {
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
var G__34838 = arguments.length;
switch (G__34838) {
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
var G__34844 = arguments.length;
switch (G__34844) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35406 = arguments.length;
var i__4790__auto___35407 = (0);
while(true){
if((i__4790__auto___35407 < len__4789__auto___35406)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35407]));

var G__35408 = (i__4790__auto___35407 + (1));
i__4790__auto___35407 = G__35408;
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
var G__34845 = parent;
G__34845.appendChild(child);

return G__34845;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34848_35409 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34849_35410 = null;
var count__34850_35411 = (0);
var i__34851_35412 = (0);
while(true){
if((i__34851_35412 < count__34850_35411)){
var c_35413 = chunk__34849_35410.cljs$core$IIndexed$_nth$arity$2(null,i__34851_35412);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35413);


var G__35414 = seq__34848_35409;
var G__35415 = chunk__34849_35410;
var G__35416 = count__34850_35411;
var G__35417 = (i__34851_35412 + (1));
seq__34848_35409 = G__35414;
chunk__34849_35410 = G__35415;
count__34850_35411 = G__35416;
i__34851_35412 = G__35417;
continue;
} else {
var temp__5735__auto___35418 = cljs.core.seq(seq__34848_35409);
if(temp__5735__auto___35418){
var seq__34848_35419__$1 = temp__5735__auto___35418;
if(cljs.core.chunked_seq_QMARK_(seq__34848_35419__$1)){
var c__4609__auto___35420 = cljs.core.chunk_first(seq__34848_35419__$1);
var G__35421 = cljs.core.chunk_rest(seq__34848_35419__$1);
var G__35422 = c__4609__auto___35420;
var G__35423 = cljs.core.count(c__4609__auto___35420);
var G__35424 = (0);
seq__34848_35409 = G__35421;
chunk__34849_35410 = G__35422;
count__34850_35411 = G__35423;
i__34851_35412 = G__35424;
continue;
} else {
var c_35425 = cljs.core.first(seq__34848_35419__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35425);


var G__35426 = cljs.core.next(seq__34848_35419__$1);
var G__35427 = null;
var G__35428 = (0);
var G__35429 = (0);
seq__34848_35409 = G__35426;
chunk__34849_35410 = G__35427;
count__34850_35411 = G__35428;
i__34851_35412 = G__35429;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34841){
var G__34842 = cljs.core.first(seq34841);
var seq34841__$1 = cljs.core.next(seq34841);
var G__34843 = cljs.core.first(seq34841__$1);
var seq34841__$2 = cljs.core.next(seq34841__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34842,G__34843,seq34841__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34856 = arguments.length;
switch (G__34856) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35431 = arguments.length;
var i__4790__auto___35432 = (0);
while(true){
if((i__4790__auto___35432 < len__4789__auto___35431)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35432]));

var G__35433 = (i__4790__auto___35432 + (1));
i__4790__auto___35432 = G__35433;
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
var G__34857 = parent;
G__34857.insertBefore(child,parent.firstChild);

return G__34857;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34858_35434 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34859_35435 = null;
var count__34860_35436 = (0);
var i__34861_35437 = (0);
while(true){
if((i__34861_35437 < count__34860_35436)){
var c_35438 = chunk__34859_35435.cljs$core$IIndexed$_nth$arity$2(null,i__34861_35437);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35438);


var G__35439 = seq__34858_35434;
var G__35440 = chunk__34859_35435;
var G__35441 = count__34860_35436;
var G__35442 = (i__34861_35437 + (1));
seq__34858_35434 = G__35439;
chunk__34859_35435 = G__35440;
count__34860_35436 = G__35441;
i__34861_35437 = G__35442;
continue;
} else {
var temp__5735__auto___35443 = cljs.core.seq(seq__34858_35434);
if(temp__5735__auto___35443){
var seq__34858_35444__$1 = temp__5735__auto___35443;
if(cljs.core.chunked_seq_QMARK_(seq__34858_35444__$1)){
var c__4609__auto___35445 = cljs.core.chunk_first(seq__34858_35444__$1);
var G__35446 = cljs.core.chunk_rest(seq__34858_35444__$1);
var G__35447 = c__4609__auto___35445;
var G__35448 = cljs.core.count(c__4609__auto___35445);
var G__35449 = (0);
seq__34858_35434 = G__35446;
chunk__34859_35435 = G__35447;
count__34860_35436 = G__35448;
i__34861_35437 = G__35449;
continue;
} else {
var c_35450 = cljs.core.first(seq__34858_35444__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35450);


var G__35451 = cljs.core.next(seq__34858_35444__$1);
var G__35452 = null;
var G__35453 = (0);
var G__35454 = (0);
seq__34858_35434 = G__35451;
chunk__34859_35435 = G__35452;
count__34860_35436 = G__35453;
i__34861_35437 = G__35454;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34853){
var G__34854 = cljs.core.first(seq34853);
var seq34853__$1 = cljs.core.next(seq34853);
var G__34855 = cljs.core.first(seq34853__$1);
var seq34853__$2 = cljs.core.next(seq34853__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34854,G__34855,seq34853__$2);
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
var temp__5733__auto___35455 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35455)){
var next_35456 = temp__5733__auto___35455;
dommy.core.insert_before_BANG_(elem,next_35456);
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
var G__34863 = arguments.length;
switch (G__34863) {
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
var G__34864 = p;
G__34864.removeChild(elem);

return G__34864;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34865){
var vec__34866 = p__34865;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34866,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34866,(1),null);
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
var len__4789__auto___35458 = arguments.length;
var i__4790__auto___35459 = (0);
while(true){
if((i__4790__auto___35459 < len__4789__auto___35458)){
args__4795__auto__.push((arguments[i__4790__auto___35459]));

var G__35460 = (i__4790__auto___35459 + (1));
i__4790__auto___35459 = G__35460;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34869){
var G__34870 = cljs.core.first(seq34869);
var seq34869__$1 = cljs.core.next(seq34869);
var G__34871 = cljs.core.first(seq34869__$1);
var seq34869__$2 = cljs.core.next(seq34869__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34870,G__34871,seq34869__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34872 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34872.cljs$core$IFn$_invoke$arity$1 ? fexpr__34872.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34872.call(null,elem_sel));
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
var len__4789__auto___35461 = arguments.length;
var i__4790__auto___35462 = (0);
while(true){
if((i__4790__auto___35462 < len__4789__auto___35461)){
args__4795__auto__.push((arguments[i__4790__auto___35462]));

var G__35463 = (i__4790__auto___35462 + (1));
i__4790__auto___35462 = G__35463;
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

var vec__34875_35464 = dommy.core.elem_and_selector(elem_sel);
var elem_35465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875_35464,(0),null);
var selector_35466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875_35464,(1),null);
var seq__34878_35467 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34885_35468 = null;
var count__34886_35469 = (0);
var i__34887_35470 = (0);
while(true){
if((i__34887_35470 < count__34886_35469)){
var vec__34943_35471 = chunk__34885_35468.cljs$core$IIndexed$_nth$arity$2(null,i__34887_35470);
var orig_type_35472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943_35471,(0),null);
var f_35473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943_35471,(1),null);
var seq__34888_35474 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35472,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35472,cljs.core.identity])));
var chunk__34890_35475 = null;
var count__34891_35476 = (0);
var i__34892_35477 = (0);
while(true){
if((i__34892_35477 < count__34891_35476)){
var vec__34956_35478 = chunk__34890_35475.cljs$core$IIndexed$_nth$arity$2(null,i__34892_35477);
var actual_type_35479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34956_35478,(0),null);
var factory_35480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34956_35478,(1),null);
var canonical_f_35482 = (function (){var G__34960 = (factory_35480.cljs$core$IFn$_invoke$arity$1 ? factory_35480.cljs$core$IFn$_invoke$arity$1(f_35473) : factory_35480.call(null,f_35473));
var fexpr__34959 = (cljs.core.truth_(selector_35466)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35465,selector_35466):cljs.core.identity);
return (fexpr__34959.cljs$core$IFn$_invoke$arity$1 ? fexpr__34959.cljs$core$IFn$_invoke$arity$1(G__34960) : fexpr__34959.call(null,G__34960));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35465,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35466,actual_type_35479,f_35473], null),canonical_f_35482], 0));

if(cljs.core.truth_(elem_35465.addEventListener)){
elem_35465.addEventListener(cljs.core.name(actual_type_35479),canonical_f_35482);
} else {
elem_35465.attachEvent(cljs.core.name(actual_type_35479),canonical_f_35482);
}


var G__35484 = seq__34888_35474;
var G__35485 = chunk__34890_35475;
var G__35486 = count__34891_35476;
var G__35487 = (i__34892_35477 + (1));
seq__34888_35474 = G__35484;
chunk__34890_35475 = G__35485;
count__34891_35476 = G__35486;
i__34892_35477 = G__35487;
continue;
} else {
var temp__5735__auto___35488 = cljs.core.seq(seq__34888_35474);
if(temp__5735__auto___35488){
var seq__34888_35489__$1 = temp__5735__auto___35488;
if(cljs.core.chunked_seq_QMARK_(seq__34888_35489__$1)){
var c__4609__auto___35490 = cljs.core.chunk_first(seq__34888_35489__$1);
var G__35491 = cljs.core.chunk_rest(seq__34888_35489__$1);
var G__35492 = c__4609__auto___35490;
var G__35493 = cljs.core.count(c__4609__auto___35490);
var G__35494 = (0);
seq__34888_35474 = G__35491;
chunk__34890_35475 = G__35492;
count__34891_35476 = G__35493;
i__34892_35477 = G__35494;
continue;
} else {
var vec__34961_35495 = cljs.core.first(seq__34888_35489__$1);
var actual_type_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34961_35495,(0),null);
var factory_35497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34961_35495,(1),null);
var canonical_f_35498 = (function (){var G__34965 = (factory_35497.cljs$core$IFn$_invoke$arity$1 ? factory_35497.cljs$core$IFn$_invoke$arity$1(f_35473) : factory_35497.call(null,f_35473));
var fexpr__34964 = (cljs.core.truth_(selector_35466)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35465,selector_35466):cljs.core.identity);
return (fexpr__34964.cljs$core$IFn$_invoke$arity$1 ? fexpr__34964.cljs$core$IFn$_invoke$arity$1(G__34965) : fexpr__34964.call(null,G__34965));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35465,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35466,actual_type_35496,f_35473], null),canonical_f_35498], 0));

if(cljs.core.truth_(elem_35465.addEventListener)){
elem_35465.addEventListener(cljs.core.name(actual_type_35496),canonical_f_35498);
} else {
elem_35465.attachEvent(cljs.core.name(actual_type_35496),canonical_f_35498);
}


var G__35500 = cljs.core.next(seq__34888_35489__$1);
var G__35501 = null;
var G__35502 = (0);
var G__35503 = (0);
seq__34888_35474 = G__35500;
chunk__34890_35475 = G__35501;
count__34891_35476 = G__35502;
i__34892_35477 = G__35503;
continue;
}
} else {
}
}
break;
}

var G__35504 = seq__34878_35467;
var G__35505 = chunk__34885_35468;
var G__35506 = count__34886_35469;
var G__35507 = (i__34887_35470 + (1));
seq__34878_35467 = G__35504;
chunk__34885_35468 = G__35505;
count__34886_35469 = G__35506;
i__34887_35470 = G__35507;
continue;
} else {
var temp__5735__auto___35509 = cljs.core.seq(seq__34878_35467);
if(temp__5735__auto___35509){
var seq__34878_35511__$1 = temp__5735__auto___35509;
if(cljs.core.chunked_seq_QMARK_(seq__34878_35511__$1)){
var c__4609__auto___35512 = cljs.core.chunk_first(seq__34878_35511__$1);
var G__35513 = cljs.core.chunk_rest(seq__34878_35511__$1);
var G__35514 = c__4609__auto___35512;
var G__35515 = cljs.core.count(c__4609__auto___35512);
var G__35516 = (0);
seq__34878_35467 = G__35513;
chunk__34885_35468 = G__35514;
count__34886_35469 = G__35515;
i__34887_35470 = G__35516;
continue;
} else {
var vec__34969_35518 = cljs.core.first(seq__34878_35511__$1);
var orig_type_35519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35518,(0),null);
var f_35520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35518,(1),null);
var seq__34879_35521 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35519,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35519,cljs.core.identity])));
var chunk__34881_35522 = null;
var count__34882_35523 = (0);
var i__34883_35524 = (0);
while(true){
if((i__34883_35524 < count__34882_35523)){
var vec__34982_35525 = chunk__34881_35522.cljs$core$IIndexed$_nth$arity$2(null,i__34883_35524);
var actual_type_35526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35525,(0),null);
var factory_35527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35525,(1),null);
var canonical_f_35528 = (function (){var G__34986 = (factory_35527.cljs$core$IFn$_invoke$arity$1 ? factory_35527.cljs$core$IFn$_invoke$arity$1(f_35520) : factory_35527.call(null,f_35520));
var fexpr__34985 = (cljs.core.truth_(selector_35466)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35465,selector_35466):cljs.core.identity);
return (fexpr__34985.cljs$core$IFn$_invoke$arity$1 ? fexpr__34985.cljs$core$IFn$_invoke$arity$1(G__34986) : fexpr__34985.call(null,G__34986));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35465,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35466,actual_type_35526,f_35520], null),canonical_f_35528], 0));

if(cljs.core.truth_(elem_35465.addEventListener)){
elem_35465.addEventListener(cljs.core.name(actual_type_35526),canonical_f_35528);
} else {
elem_35465.attachEvent(cljs.core.name(actual_type_35526),canonical_f_35528);
}


var G__35534 = seq__34879_35521;
var G__35535 = chunk__34881_35522;
var G__35536 = count__34882_35523;
var G__35537 = (i__34883_35524 + (1));
seq__34879_35521 = G__35534;
chunk__34881_35522 = G__35535;
count__34882_35523 = G__35536;
i__34883_35524 = G__35537;
continue;
} else {
var temp__5735__auto___35538__$1 = cljs.core.seq(seq__34879_35521);
if(temp__5735__auto___35538__$1){
var seq__34879_35539__$1 = temp__5735__auto___35538__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34879_35539__$1)){
var c__4609__auto___35540 = cljs.core.chunk_first(seq__34879_35539__$1);
var G__35541 = cljs.core.chunk_rest(seq__34879_35539__$1);
var G__35542 = c__4609__auto___35540;
var G__35543 = cljs.core.count(c__4609__auto___35540);
var G__35544 = (0);
seq__34879_35521 = G__35541;
chunk__34881_35522 = G__35542;
count__34882_35523 = G__35543;
i__34883_35524 = G__35544;
continue;
} else {
var vec__34987_35546 = cljs.core.first(seq__34879_35539__$1);
var actual_type_35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35546,(0),null);
var factory_35548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35546,(1),null);
var canonical_f_35550 = (function (){var G__34991 = (factory_35548.cljs$core$IFn$_invoke$arity$1 ? factory_35548.cljs$core$IFn$_invoke$arity$1(f_35520) : factory_35548.call(null,f_35520));
var fexpr__34990 = (cljs.core.truth_(selector_35466)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35465,selector_35466):cljs.core.identity);
return (fexpr__34990.cljs$core$IFn$_invoke$arity$1 ? fexpr__34990.cljs$core$IFn$_invoke$arity$1(G__34991) : fexpr__34990.call(null,G__34991));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35465,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35466,actual_type_35547,f_35520], null),canonical_f_35550], 0));

if(cljs.core.truth_(elem_35465.addEventListener)){
elem_35465.addEventListener(cljs.core.name(actual_type_35547),canonical_f_35550);
} else {
elem_35465.attachEvent(cljs.core.name(actual_type_35547),canonical_f_35550);
}


var G__35551 = cljs.core.next(seq__34879_35539__$1);
var G__35552 = null;
var G__35553 = (0);
var G__35554 = (0);
seq__34879_35521 = G__35551;
chunk__34881_35522 = G__35552;
count__34882_35523 = G__35553;
i__34883_35524 = G__35554;
continue;
}
} else {
}
}
break;
}

var G__35555 = cljs.core.next(seq__34878_35511__$1);
var G__35556 = null;
var G__35557 = (0);
var G__35558 = (0);
seq__34878_35467 = G__35555;
chunk__34885_35468 = G__35556;
count__34886_35469 = G__35557;
i__34887_35470 = G__35558;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34873){
var G__34874 = cljs.core.first(seq34873);
var seq34873__$1 = cljs.core.next(seq34873);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34874,seq34873__$1);
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
var len__4789__auto___35563 = arguments.length;
var i__4790__auto___35564 = (0);
while(true){
if((i__4790__auto___35564 < len__4789__auto___35563)){
args__4795__auto__.push((arguments[i__4790__auto___35564]));

var G__35565 = (i__4790__auto___35564 + (1));
i__4790__auto___35564 = G__35565;
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

var vec__34994_35567 = dommy.core.elem_and_selector(elem_sel);
var elem_35568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35567,(0),null);
var selector_35569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35567,(1),null);
var seq__34997_35574 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35004_35575 = null;
var count__35005_35576 = (0);
var i__35006_35577 = (0);
while(true){
if((i__35006_35577 < count__35005_35576)){
var vec__35054_35578 = chunk__35004_35575.cljs$core$IIndexed$_nth$arity$2(null,i__35006_35577);
var orig_type_35579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35578,(0),null);
var f_35580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35578,(1),null);
var seq__35007_35581 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35579,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35579,cljs.core.identity])));
var chunk__35009_35582 = null;
var count__35010_35583 = (0);
var i__35011_35584 = (0);
while(true){
if((i__35011_35584 < count__35010_35583)){
var vec__35063_35588 = chunk__35009_35582.cljs$core$IIndexed$_nth$arity$2(null,i__35011_35584);
var actual_type_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063_35588,(0),null);
var __35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063_35588,(1),null);
var keys_35593 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35569,actual_type_35589,f_35580], null);
var canonical_f_35594 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35568),keys_35593);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35568,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35593], 0));

if(cljs.core.truth_(elem_35568.removeEventListener)){
elem_35568.removeEventListener(cljs.core.name(actual_type_35589),canonical_f_35594);
} else {
elem_35568.detachEvent(cljs.core.name(actual_type_35589),canonical_f_35594);
}


var G__35595 = seq__35007_35581;
var G__35596 = chunk__35009_35582;
var G__35597 = count__35010_35583;
var G__35598 = (i__35011_35584 + (1));
seq__35007_35581 = G__35595;
chunk__35009_35582 = G__35596;
count__35010_35583 = G__35597;
i__35011_35584 = G__35598;
continue;
} else {
var temp__5735__auto___35599 = cljs.core.seq(seq__35007_35581);
if(temp__5735__auto___35599){
var seq__35007_35600__$1 = temp__5735__auto___35599;
if(cljs.core.chunked_seq_QMARK_(seq__35007_35600__$1)){
var c__4609__auto___35601 = cljs.core.chunk_first(seq__35007_35600__$1);
var G__35602 = cljs.core.chunk_rest(seq__35007_35600__$1);
var G__35603 = c__4609__auto___35601;
var G__35604 = cljs.core.count(c__4609__auto___35601);
var G__35605 = (0);
seq__35007_35581 = G__35602;
chunk__35009_35582 = G__35603;
count__35010_35583 = G__35604;
i__35011_35584 = G__35605;
continue;
} else {
var vec__35066_35606 = cljs.core.first(seq__35007_35600__$1);
var actual_type_35607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35066_35606,(0),null);
var __35608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35066_35606,(1),null);
var keys_35609 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35569,actual_type_35607,f_35580], null);
var canonical_f_35610 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35568),keys_35609);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35568,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35609], 0));

if(cljs.core.truth_(elem_35568.removeEventListener)){
elem_35568.removeEventListener(cljs.core.name(actual_type_35607),canonical_f_35610);
} else {
elem_35568.detachEvent(cljs.core.name(actual_type_35607),canonical_f_35610);
}


var G__35611 = cljs.core.next(seq__35007_35600__$1);
var G__35612 = null;
var G__35613 = (0);
var G__35614 = (0);
seq__35007_35581 = G__35611;
chunk__35009_35582 = G__35612;
count__35010_35583 = G__35613;
i__35011_35584 = G__35614;
continue;
}
} else {
}
}
break;
}

var G__35615 = seq__34997_35574;
var G__35616 = chunk__35004_35575;
var G__35617 = count__35005_35576;
var G__35618 = (i__35006_35577 + (1));
seq__34997_35574 = G__35615;
chunk__35004_35575 = G__35616;
count__35005_35576 = G__35617;
i__35006_35577 = G__35618;
continue;
} else {
var temp__5735__auto___35619 = cljs.core.seq(seq__34997_35574);
if(temp__5735__auto___35619){
var seq__34997_35620__$1 = temp__5735__auto___35619;
if(cljs.core.chunked_seq_QMARK_(seq__34997_35620__$1)){
var c__4609__auto___35621 = cljs.core.chunk_first(seq__34997_35620__$1);
var G__35622 = cljs.core.chunk_rest(seq__34997_35620__$1);
var G__35623 = c__4609__auto___35621;
var G__35624 = cljs.core.count(c__4609__auto___35621);
var G__35625 = (0);
seq__34997_35574 = G__35622;
chunk__35004_35575 = G__35623;
count__35005_35576 = G__35624;
i__35006_35577 = G__35625;
continue;
} else {
var vec__35069_35626 = cljs.core.first(seq__34997_35620__$1);
var orig_type_35627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35069_35626,(0),null);
var f_35628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35069_35626,(1),null);
var seq__34998_35629 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35627,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35627,cljs.core.identity])));
var chunk__35000_35630 = null;
var count__35001_35631 = (0);
var i__35002_35632 = (0);
while(true){
if((i__35002_35632 < count__35001_35631)){
var vec__35079_35633 = chunk__35000_35630.cljs$core$IIndexed$_nth$arity$2(null,i__35002_35632);
var actual_type_35634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35079_35633,(0),null);
var __35635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35079_35633,(1),null);
var keys_35636 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35569,actual_type_35634,f_35628], null);
var canonical_f_35637 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35568),keys_35636);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35568,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35636], 0));

if(cljs.core.truth_(elem_35568.removeEventListener)){
elem_35568.removeEventListener(cljs.core.name(actual_type_35634),canonical_f_35637);
} else {
elem_35568.detachEvent(cljs.core.name(actual_type_35634),canonical_f_35637);
}


var G__35638 = seq__34998_35629;
var G__35639 = chunk__35000_35630;
var G__35640 = count__35001_35631;
var G__35641 = (i__35002_35632 + (1));
seq__34998_35629 = G__35638;
chunk__35000_35630 = G__35639;
count__35001_35631 = G__35640;
i__35002_35632 = G__35641;
continue;
} else {
var temp__5735__auto___35642__$1 = cljs.core.seq(seq__34998_35629);
if(temp__5735__auto___35642__$1){
var seq__34998_35643__$1 = temp__5735__auto___35642__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34998_35643__$1)){
var c__4609__auto___35644 = cljs.core.chunk_first(seq__34998_35643__$1);
var G__35645 = cljs.core.chunk_rest(seq__34998_35643__$1);
var G__35646 = c__4609__auto___35644;
var G__35647 = cljs.core.count(c__4609__auto___35644);
var G__35648 = (0);
seq__34998_35629 = G__35645;
chunk__35000_35630 = G__35646;
count__35001_35631 = G__35647;
i__35002_35632 = G__35648;
continue;
} else {
var vec__35084_35649 = cljs.core.first(seq__34998_35643__$1);
var actual_type_35650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084_35649,(0),null);
var __35651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084_35649,(1),null);
var keys_35652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35569,actual_type_35650,f_35628], null);
var canonical_f_35653 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35568),keys_35652);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35568,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35652], 0));

if(cljs.core.truth_(elem_35568.removeEventListener)){
elem_35568.removeEventListener(cljs.core.name(actual_type_35650),canonical_f_35653);
} else {
elem_35568.detachEvent(cljs.core.name(actual_type_35650),canonical_f_35653);
}


var G__35654 = cljs.core.next(seq__34998_35643__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__34998_35629 = G__35654;
chunk__35000_35630 = G__35655;
count__35001_35631 = G__35656;
i__35002_35632 = G__35657;
continue;
}
} else {
}
}
break;
}

var G__35658 = cljs.core.next(seq__34997_35620__$1);
var G__35659 = null;
var G__35660 = (0);
var G__35661 = (0);
seq__34997_35574 = G__35658;
chunk__35004_35575 = G__35659;
count__35005_35576 = G__35660;
i__35006_35577 = G__35661;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34992){
var G__34993 = cljs.core.first(seq34992);
var seq34992__$1 = cljs.core.next(seq34992);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34993,seq34992__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
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
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__35091_35665 = dommy.core.elem_and_selector(elem_sel);
var elem_35666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091_35665,(0),null);
var selector_35667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091_35665,(1),null);
var seq__35094_35668 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35095_35669 = null;
var count__35096_35670 = (0);
var i__35097_35671 = (0);
while(true){
if((i__35097_35671 < count__35096_35670)){
var vec__35108_35672 = chunk__35095_35669.cljs$core$IIndexed$_nth$arity$2(null,i__35097_35671);
var type_35673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35672,(0),null);
var f_35674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35672,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35673,((function (seq__35094_35668,chunk__35095_35669,count__35096_35670,i__35097_35671,vec__35108_35672,type_35673,f_35674,vec__35091_35665,elem_35666,selector_35667){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35673,dommy$core$this_fn], 0));

return (f_35674.cljs$core$IFn$_invoke$arity$1 ? f_35674.cljs$core$IFn$_invoke$arity$1(e) : f_35674.call(null,e));
});})(seq__35094_35668,chunk__35095_35669,count__35096_35670,i__35097_35671,vec__35108_35672,type_35673,f_35674,vec__35091_35665,elem_35666,selector_35667))
], 0));


var G__35675 = seq__35094_35668;
var G__35676 = chunk__35095_35669;
var G__35677 = count__35096_35670;
var G__35678 = (i__35097_35671 + (1));
seq__35094_35668 = G__35675;
chunk__35095_35669 = G__35676;
count__35096_35670 = G__35677;
i__35097_35671 = G__35678;
continue;
} else {
var temp__5735__auto___35679 = cljs.core.seq(seq__35094_35668);
if(temp__5735__auto___35679){
var seq__35094_35680__$1 = temp__5735__auto___35679;
if(cljs.core.chunked_seq_QMARK_(seq__35094_35680__$1)){
var c__4609__auto___35681 = cljs.core.chunk_first(seq__35094_35680__$1);
var G__35682 = cljs.core.chunk_rest(seq__35094_35680__$1);
var G__35683 = c__4609__auto___35681;
var G__35684 = cljs.core.count(c__4609__auto___35681);
var G__35685 = (0);
seq__35094_35668 = G__35682;
chunk__35095_35669 = G__35683;
count__35096_35670 = G__35684;
i__35097_35671 = G__35685;
continue;
} else {
var vec__35111_35686 = cljs.core.first(seq__35094_35680__$1);
var type_35687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111_35686,(0),null);
var f_35688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111_35686,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35687,((function (seq__35094_35668,chunk__35095_35669,count__35096_35670,i__35097_35671,vec__35111_35686,type_35687,f_35688,seq__35094_35680__$1,temp__5735__auto___35679,vec__35091_35665,elem_35666,selector_35667){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35687,dommy$core$this_fn], 0));

return (f_35688.cljs$core$IFn$_invoke$arity$1 ? f_35688.cljs$core$IFn$_invoke$arity$1(e) : f_35688.call(null,e));
});})(seq__35094_35668,chunk__35095_35669,count__35096_35670,i__35097_35671,vec__35111_35686,type_35687,f_35688,seq__35094_35680__$1,temp__5735__auto___35679,vec__35091_35665,elem_35666,selector_35667))
], 0));


var G__35689 = cljs.core.next(seq__35094_35680__$1);
var G__35690 = null;
var G__35691 = (0);
var G__35692 = (0);
seq__35094_35668 = G__35689;
chunk__35095_35669 = G__35690;
count__35096_35670 = G__35691;
i__35097_35671 = G__35692;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35089){
var G__35090 = cljs.core.first(seq35089);
var seq35089__$1 = cljs.core.next(seq35089);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35090,seq35089__$1);
}));


//# sourceMappingURL=dommy.core.js.map
