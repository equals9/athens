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
var G__34732 = arguments.length;
switch (G__34732) {
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
var G__34734 = arguments.length;
switch (G__34734) {
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
var G__34737 = arguments.length;
switch (G__34737) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34735_SHARP_){
return (!((p1__34735_SHARP_ === base)));
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
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__34740_35182 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34741_35183 = null;
var count__34742_35184 = (0);
var i__34743_35185 = (0);
while(true){
if((i__34743_35185 < count__34742_35184)){
var vec__34750_35186 = chunk__34741_35183.cljs$core$IIndexed$_nth$arity$2(null,i__34743_35185);
var k_35187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35186,(0),null);
var v_35188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35186,(1),null);
style.setProperty(dommy.utils.as_str(k_35187),v_35188);


var G__35189 = seq__34740_35182;
var G__35190 = chunk__34741_35183;
var G__35191 = count__34742_35184;
var G__35192 = (i__34743_35185 + (1));
seq__34740_35182 = G__35189;
chunk__34741_35183 = G__35190;
count__34742_35184 = G__35191;
i__34743_35185 = G__35192;
continue;
} else {
var temp__5735__auto___35193 = cljs.core.seq(seq__34740_35182);
if(temp__5735__auto___35193){
var seq__34740_35194__$1 = temp__5735__auto___35193;
if(cljs.core.chunked_seq_QMARK_(seq__34740_35194__$1)){
var c__4609__auto___35195 = cljs.core.chunk_first(seq__34740_35194__$1);
var G__35196 = cljs.core.chunk_rest(seq__34740_35194__$1);
var G__35197 = c__4609__auto___35195;
var G__35198 = cljs.core.count(c__4609__auto___35195);
var G__35199 = (0);
seq__34740_35182 = G__35196;
chunk__34741_35183 = G__35197;
count__34742_35184 = G__35198;
i__34743_35185 = G__35199;
continue;
} else {
var vec__34753_35200 = cljs.core.first(seq__34740_35194__$1);
var k_35201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34753_35200,(0),null);
var v_35202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34753_35200,(1),null);
style.setProperty(dommy.utils.as_str(k_35201),v_35202);


var G__35203 = cljs.core.next(seq__34740_35194__$1);
var G__35204 = null;
var G__35205 = (0);
var G__35206 = (0);
seq__34740_35182 = G__35203;
chunk__34741_35183 = G__35204;
count__34742_35184 = G__35205;
i__34743_35185 = G__35206;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34738){
var G__34739 = cljs.core.first(seq34738);
var seq34738__$1 = cljs.core.next(seq34738);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34739,seq34738__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
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
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__34758_35210 = cljs.core.seq(keywords);
var chunk__34759_35211 = null;
var count__34760_35212 = (0);
var i__34761_35213 = (0);
while(true){
if((i__34761_35213 < count__34760_35212)){
var kw_35214 = chunk__34759_35211.cljs$core$IIndexed$_nth$arity$2(null,i__34761_35213);
style.removeProperty(dommy.utils.as_str(kw_35214));


var G__35215 = seq__34758_35210;
var G__35216 = chunk__34759_35211;
var G__35217 = count__34760_35212;
var G__35218 = (i__34761_35213 + (1));
seq__34758_35210 = G__35215;
chunk__34759_35211 = G__35216;
count__34760_35212 = G__35217;
i__34761_35213 = G__35218;
continue;
} else {
var temp__5735__auto___35219 = cljs.core.seq(seq__34758_35210);
if(temp__5735__auto___35219){
var seq__34758_35220__$1 = temp__5735__auto___35219;
if(cljs.core.chunked_seq_QMARK_(seq__34758_35220__$1)){
var c__4609__auto___35221 = cljs.core.chunk_first(seq__34758_35220__$1);
var G__35222 = cljs.core.chunk_rest(seq__34758_35220__$1);
var G__35223 = c__4609__auto___35221;
var G__35224 = cljs.core.count(c__4609__auto___35221);
var G__35225 = (0);
seq__34758_35210 = G__35222;
chunk__34759_35211 = G__35223;
count__34760_35212 = G__35224;
i__34761_35213 = G__35225;
continue;
} else {
var kw_35226 = cljs.core.first(seq__34758_35220__$1);
style.removeProperty(dommy.utils.as_str(kw_35226));


var G__35227 = cljs.core.next(seq__34758_35220__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34758_35210 = G__35227;
chunk__34759_35211 = G__35228;
count__34760_35212 = G__35229;
i__34761_35213 = G__35230;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34756){
var G__34757 = cljs.core.first(seq34756);
var seq34756__$1 = cljs.core.next(seq34756);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34757,seq34756__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35231 = arguments.length;
var i__4790__auto___35232 = (0);
while(true){
if((i__4790__auto___35232 < len__4789__auto___35231)){
args__4795__auto__.push((arguments[i__4790__auto___35232]));

var G__35233 = (i__4790__auto___35232 + (1));
i__4790__auto___35232 = G__35233;
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

var seq__34766_35234 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34767_35235 = null;
var count__34768_35236 = (0);
var i__34769_35237 = (0);
while(true){
if((i__34769_35237 < count__34768_35236)){
var vec__34776_35238 = chunk__34767_35235.cljs$core$IIndexed$_nth$arity$2(null,i__34769_35237);
var k_35239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776_35238,(0),null);
var v_35240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776_35238,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35239,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35240),"px"].join('')], 0));


var G__35241 = seq__34766_35234;
var G__35242 = chunk__34767_35235;
var G__35243 = count__34768_35236;
var G__35244 = (i__34769_35237 + (1));
seq__34766_35234 = G__35241;
chunk__34767_35235 = G__35242;
count__34768_35236 = G__35243;
i__34769_35237 = G__35244;
continue;
} else {
var temp__5735__auto___35245 = cljs.core.seq(seq__34766_35234);
if(temp__5735__auto___35245){
var seq__34766_35246__$1 = temp__5735__auto___35245;
if(cljs.core.chunked_seq_QMARK_(seq__34766_35246__$1)){
var c__4609__auto___35247 = cljs.core.chunk_first(seq__34766_35246__$1);
var G__35248 = cljs.core.chunk_rest(seq__34766_35246__$1);
var G__35249 = c__4609__auto___35247;
var G__35250 = cljs.core.count(c__4609__auto___35247);
var G__35251 = (0);
seq__34766_35234 = G__35248;
chunk__34767_35235 = G__35249;
count__34768_35236 = G__35250;
i__34769_35237 = G__35251;
continue;
} else {
var vec__34779_35252 = cljs.core.first(seq__34766_35246__$1);
var k_35253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779_35252,(0),null);
var v_35254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779_35252,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35253,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35254),"px"].join('')], 0));


var G__35255 = cljs.core.next(seq__34766_35246__$1);
var G__35256 = null;
var G__35257 = (0);
var G__35258 = (0);
seq__34766_35234 = G__35255;
chunk__34767_35235 = G__35256;
count__34768_35236 = G__35257;
i__34769_35237 = G__35258;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34764){
var G__34765 = cljs.core.first(seq34764);
var seq34764__$1 = cljs.core.next(seq34764);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34765,seq34764__$1);
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
var G__34788 = arguments.length;
switch (G__34788) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35260 = arguments.length;
var i__4790__auto___35261 = (0);
while(true){
if((i__4790__auto___35261 < len__4789__auto___35260)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35261]));

var G__35262 = (i__4790__auto___35261 + (1));
i__4790__auto___35261 = G__35262;
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
var G__34789 = elem;
(G__34789[k__$1] = v);

return G__34789;
} else {
var G__34790 = elem;
G__34790.setAttribute(k__$1,v);

return G__34790;
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

var seq__34791_35263 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34792_35264 = null;
var count__34793_35265 = (0);
var i__34794_35266 = (0);
while(true){
if((i__34794_35266 < count__34793_35265)){
var vec__34801_35269 = chunk__34792_35264.cljs$core$IIndexed$_nth$arity$2(null,i__34794_35266);
var k_35270__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35269,(0),null);
var v_35271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35269,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35270__$1,v_35271__$1);


var G__35272 = seq__34791_35263;
var G__35273 = chunk__34792_35264;
var G__35274 = count__34793_35265;
var G__35275 = (i__34794_35266 + (1));
seq__34791_35263 = G__35272;
chunk__34792_35264 = G__35273;
count__34793_35265 = G__35274;
i__34794_35266 = G__35275;
continue;
} else {
var temp__5735__auto___35276 = cljs.core.seq(seq__34791_35263);
if(temp__5735__auto___35276){
var seq__34791_35277__$1 = temp__5735__auto___35276;
if(cljs.core.chunked_seq_QMARK_(seq__34791_35277__$1)){
var c__4609__auto___35278 = cljs.core.chunk_first(seq__34791_35277__$1);
var G__35279 = cljs.core.chunk_rest(seq__34791_35277__$1);
var G__35280 = c__4609__auto___35278;
var G__35281 = cljs.core.count(c__4609__auto___35278);
var G__35282 = (0);
seq__34791_35263 = G__35279;
chunk__34792_35264 = G__35280;
count__34793_35265 = G__35281;
i__34794_35266 = G__35282;
continue;
} else {
var vec__34804_35283 = cljs.core.first(seq__34791_35277__$1);
var k_35284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35283,(0),null);
var v_35285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35283,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35284__$1,v_35285__$1);


var G__35286 = cljs.core.next(seq__34791_35277__$1);
var G__35287 = null;
var G__35288 = (0);
var G__35289 = (0);
seq__34791_35263 = G__35286;
chunk__34792_35264 = G__35287;
count__34793_35265 = G__35288;
i__34794_35266 = G__35289;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34784){
var G__34785 = cljs.core.first(seq34784);
var seq34784__$1 = cljs.core.next(seq34784);
var G__34786 = cljs.core.first(seq34784__$1);
var seq34784__$2 = cljs.core.next(seq34784__$1);
var G__34787 = cljs.core.first(seq34784__$2);
var seq34784__$3 = cljs.core.next(seq34784__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34785,G__34786,G__34787,seq34784__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34811 = arguments.length;
switch (G__34811) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35291 = arguments.length;
var i__4790__auto___35292 = (0);
while(true){
if((i__4790__auto___35292 < len__4789__auto___35291)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35292]));

var G__35293 = (i__4790__auto___35292 + (1));
i__4790__auto___35292 = G__35293;
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
var k_35294__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34812 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34812.cljs$core$IFn$_invoke$arity$1 ? fexpr__34812.cljs$core$IFn$_invoke$arity$1(k_35294__$1) : fexpr__34812.call(null,k_35294__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35294__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34813_35297 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34814_35298 = null;
var count__34815_35299 = (0);
var i__34816_35300 = (0);
while(true){
if((i__34816_35300 < count__34815_35299)){
var k_35301__$1 = chunk__34814_35298.cljs$core$IIndexed$_nth$arity$2(null,i__34816_35300);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35301__$1);


var G__35302 = seq__34813_35297;
var G__35303 = chunk__34814_35298;
var G__35304 = count__34815_35299;
var G__35305 = (i__34816_35300 + (1));
seq__34813_35297 = G__35302;
chunk__34814_35298 = G__35303;
count__34815_35299 = G__35304;
i__34816_35300 = G__35305;
continue;
} else {
var temp__5735__auto___35306 = cljs.core.seq(seq__34813_35297);
if(temp__5735__auto___35306){
var seq__34813_35307__$1 = temp__5735__auto___35306;
if(cljs.core.chunked_seq_QMARK_(seq__34813_35307__$1)){
var c__4609__auto___35308 = cljs.core.chunk_first(seq__34813_35307__$1);
var G__35309 = cljs.core.chunk_rest(seq__34813_35307__$1);
var G__35310 = c__4609__auto___35308;
var G__35311 = cljs.core.count(c__4609__auto___35308);
var G__35312 = (0);
seq__34813_35297 = G__35309;
chunk__34814_35298 = G__35310;
count__34815_35299 = G__35311;
i__34816_35300 = G__35312;
continue;
} else {
var k_35313__$1 = cljs.core.first(seq__34813_35307__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35313__$1);


var G__35314 = cljs.core.next(seq__34813_35307__$1);
var G__35315 = null;
var G__35316 = (0);
var G__35317 = (0);
seq__34813_35297 = G__35314;
chunk__34814_35298 = G__35315;
count__34815_35299 = G__35316;
i__34816_35300 = G__35317;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34808){
var G__34809 = cljs.core.first(seq34808);
var seq34808__$1 = cljs.core.next(seq34808);
var G__34810 = cljs.core.first(seq34808__$1);
var seq34808__$2 = cljs.core.next(seq34808__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34809,G__34810,seq34808__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34818 = arguments.length;
switch (G__34818) {
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
var G__34823 = arguments.length;
switch (G__34823) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35322 = arguments.length;
var i__4790__auto___35323 = (0);
while(true){
if((i__4790__auto___35323 < len__4789__auto___35322)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35323]));

var G__35324 = (i__4790__auto___35323 + (1));
i__4790__auto___35323 = G__35324;
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
var temp__5733__auto___35325 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35325)){
var class_list_35326 = temp__5733__auto___35325;
var seq__34824_35327 = cljs.core.seq(classes__$1);
var chunk__34825_35328 = null;
var count__34826_35329 = (0);
var i__34827_35330 = (0);
while(true){
if((i__34827_35330 < count__34826_35329)){
var c_35331 = chunk__34825_35328.cljs$core$IIndexed$_nth$arity$2(null,i__34827_35330);
class_list_35326.add(c_35331);


var G__35332 = seq__34824_35327;
var G__35333 = chunk__34825_35328;
var G__35334 = count__34826_35329;
var G__35335 = (i__34827_35330 + (1));
seq__34824_35327 = G__35332;
chunk__34825_35328 = G__35333;
count__34826_35329 = G__35334;
i__34827_35330 = G__35335;
continue;
} else {
var temp__5735__auto___35336 = cljs.core.seq(seq__34824_35327);
if(temp__5735__auto___35336){
var seq__34824_35337__$1 = temp__5735__auto___35336;
if(cljs.core.chunked_seq_QMARK_(seq__34824_35337__$1)){
var c__4609__auto___35338 = cljs.core.chunk_first(seq__34824_35337__$1);
var G__35339 = cljs.core.chunk_rest(seq__34824_35337__$1);
var G__35340 = c__4609__auto___35338;
var G__35341 = cljs.core.count(c__4609__auto___35338);
var G__35342 = (0);
seq__34824_35327 = G__35339;
chunk__34825_35328 = G__35340;
count__34826_35329 = G__35341;
i__34827_35330 = G__35342;
continue;
} else {
var c_35343 = cljs.core.first(seq__34824_35337__$1);
class_list_35326.add(c_35343);


var G__35344 = cljs.core.next(seq__34824_35337__$1);
var G__35345 = null;
var G__35346 = (0);
var G__35347 = (0);
seq__34824_35327 = G__35344;
chunk__34825_35328 = G__35345;
count__34826_35329 = G__35346;
i__34827_35330 = G__35347;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34828_35348 = cljs.core.seq(classes__$1);
var chunk__34829_35349 = null;
var count__34830_35350 = (0);
var i__34831_35351 = (0);
while(true){
if((i__34831_35351 < count__34830_35350)){
var c_35352 = chunk__34829_35349.cljs$core$IIndexed$_nth$arity$2(null,i__34831_35351);
var class_name_35353 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35353,c_35352))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35353 === ""))?c_35352:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35353)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35352)].join('')));
}


var G__35354 = seq__34828_35348;
var G__35355 = chunk__34829_35349;
var G__35356 = count__34830_35350;
var G__35357 = (i__34831_35351 + (1));
seq__34828_35348 = G__35354;
chunk__34829_35349 = G__35355;
count__34830_35350 = G__35356;
i__34831_35351 = G__35357;
continue;
} else {
var temp__5735__auto___35358 = cljs.core.seq(seq__34828_35348);
if(temp__5735__auto___35358){
var seq__34828_35359__$1 = temp__5735__auto___35358;
if(cljs.core.chunked_seq_QMARK_(seq__34828_35359__$1)){
var c__4609__auto___35360 = cljs.core.chunk_first(seq__34828_35359__$1);
var G__35361 = cljs.core.chunk_rest(seq__34828_35359__$1);
var G__35362 = c__4609__auto___35360;
var G__35363 = cljs.core.count(c__4609__auto___35360);
var G__35364 = (0);
seq__34828_35348 = G__35361;
chunk__34829_35349 = G__35362;
count__34830_35350 = G__35363;
i__34831_35351 = G__35364;
continue;
} else {
var c_35365 = cljs.core.first(seq__34828_35359__$1);
var class_name_35366 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35366,c_35365))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35366 === ""))?c_35365:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35366)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35365)].join('')));
}


var G__35367 = cljs.core.next(seq__34828_35359__$1);
var G__35368 = null;
var G__35369 = (0);
var G__35370 = (0);
seq__34828_35348 = G__35367;
chunk__34829_35349 = G__35368;
count__34830_35350 = G__35369;
i__34831_35351 = G__35370;
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
var seq__34832_35371 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34833_35372 = null;
var count__34834_35373 = (0);
var i__34835_35374 = (0);
while(true){
if((i__34835_35374 < count__34834_35373)){
var c_35375 = chunk__34833_35372.cljs$core$IIndexed$_nth$arity$2(null,i__34835_35374);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35375);


var G__35376 = seq__34832_35371;
var G__35377 = chunk__34833_35372;
var G__35378 = count__34834_35373;
var G__35379 = (i__34835_35374 + (1));
seq__34832_35371 = G__35376;
chunk__34833_35372 = G__35377;
count__34834_35373 = G__35378;
i__34835_35374 = G__35379;
continue;
} else {
var temp__5735__auto___35380 = cljs.core.seq(seq__34832_35371);
if(temp__5735__auto___35380){
var seq__34832_35381__$1 = temp__5735__auto___35380;
if(cljs.core.chunked_seq_QMARK_(seq__34832_35381__$1)){
var c__4609__auto___35382 = cljs.core.chunk_first(seq__34832_35381__$1);
var G__35383 = cljs.core.chunk_rest(seq__34832_35381__$1);
var G__35384 = c__4609__auto___35382;
var G__35385 = cljs.core.count(c__4609__auto___35382);
var G__35386 = (0);
seq__34832_35371 = G__35383;
chunk__34833_35372 = G__35384;
count__34834_35373 = G__35385;
i__34835_35374 = G__35386;
continue;
} else {
var c_35387 = cljs.core.first(seq__34832_35381__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35387);


var G__35388 = cljs.core.next(seq__34832_35381__$1);
var G__35389 = null;
var G__35390 = (0);
var G__35391 = (0);
seq__34832_35371 = G__35388;
chunk__34833_35372 = G__35389;
count__34834_35373 = G__35390;
i__34835_35374 = G__35391;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34820){
var G__34821 = cljs.core.first(seq34820);
var seq34820__$1 = cljs.core.next(seq34820);
var G__34822 = cljs.core.first(seq34820__$1);
var seq34820__$2 = cljs.core.next(seq34820__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34821,G__34822,seq34820__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34840 = arguments.length;
switch (G__34840) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35393 = arguments.length;
var i__4790__auto___35394 = (0);
while(true){
if((i__4790__auto___35394 < len__4789__auto___35393)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35394]));

var G__35395 = (i__4790__auto___35394 + (1));
i__4790__auto___35394 = G__35395;
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
var temp__5733__auto___35396 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35396)){
var class_list_35397 = temp__5733__auto___35396;
class_list_35397.remove(c__$1);
} else {
var class_name_35398 = dommy.core.class$(elem);
var new_class_name_35399 = dommy.utils.remove_class_str(class_name_35398,c__$1);
if((class_name_35398 === new_class_name_35399)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35399);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34841 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34842 = null;
var count__34843 = (0);
var i__34844 = (0);
while(true){
if((i__34844 < count__34843)){
var c = chunk__34842.cljs$core$IIndexed$_nth$arity$2(null,i__34844);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35400 = seq__34841;
var G__35401 = chunk__34842;
var G__35402 = count__34843;
var G__35403 = (i__34844 + (1));
seq__34841 = G__35400;
chunk__34842 = G__35401;
count__34843 = G__35402;
i__34844 = G__35403;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34841);
if(temp__5735__auto__){
var seq__34841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34841__$1);
var G__35404 = cljs.core.chunk_rest(seq__34841__$1);
var G__35405 = c__4609__auto__;
var G__35406 = cljs.core.count(c__4609__auto__);
var G__35407 = (0);
seq__34841 = G__35404;
chunk__34842 = G__35405;
count__34843 = G__35406;
i__34844 = G__35407;
continue;
} else {
var c = cljs.core.first(seq__34841__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35408 = cljs.core.next(seq__34841__$1);
var G__35409 = null;
var G__35410 = (0);
var G__35411 = (0);
seq__34841 = G__35408;
chunk__34842 = G__35409;
count__34843 = G__35410;
i__34844 = G__35411;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34837){
var G__34838 = cljs.core.first(seq34837);
var seq34837__$1 = cljs.core.next(seq34837);
var G__34839 = cljs.core.first(seq34837__$1);
var seq34837__$2 = cljs.core.next(seq34837__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34838,G__34839,seq34837__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34847 = arguments.length;
switch (G__34847) {
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
var temp__5733__auto___35413 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35413)){
var class_list_35414 = temp__5733__auto___35413;
class_list_35414.toggle(c__$1);
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
var G__34851 = arguments.length;
switch (G__34851) {
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
var G__34853 = arguments.length;
switch (G__34853) {
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
var G__34858 = arguments.length;
switch (G__34858) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35420 = arguments.length;
var i__4790__auto___35421 = (0);
while(true){
if((i__4790__auto___35421 < len__4789__auto___35420)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35421]));

var G__35422 = (i__4790__auto___35421 + (1));
i__4790__auto___35421 = G__35422;
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
var G__34859 = parent;
G__34859.appendChild(child);

return G__34859;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34860_35423 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34861_35424 = null;
var count__34862_35425 = (0);
var i__34863_35426 = (0);
while(true){
if((i__34863_35426 < count__34862_35425)){
var c_35427 = chunk__34861_35424.cljs$core$IIndexed$_nth$arity$2(null,i__34863_35426);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35427);


var G__35429 = seq__34860_35423;
var G__35430 = chunk__34861_35424;
var G__35431 = count__34862_35425;
var G__35432 = (i__34863_35426 + (1));
seq__34860_35423 = G__35429;
chunk__34861_35424 = G__35430;
count__34862_35425 = G__35431;
i__34863_35426 = G__35432;
continue;
} else {
var temp__5735__auto___35433 = cljs.core.seq(seq__34860_35423);
if(temp__5735__auto___35433){
var seq__34860_35434__$1 = temp__5735__auto___35433;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35434__$1)){
var c__4609__auto___35435 = cljs.core.chunk_first(seq__34860_35434__$1);
var G__35436 = cljs.core.chunk_rest(seq__34860_35434__$1);
var G__35437 = c__4609__auto___35435;
var G__35438 = cljs.core.count(c__4609__auto___35435);
var G__35439 = (0);
seq__34860_35423 = G__35436;
chunk__34861_35424 = G__35437;
count__34862_35425 = G__35438;
i__34863_35426 = G__35439;
continue;
} else {
var c_35441 = cljs.core.first(seq__34860_35434__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35441);


var G__35443 = cljs.core.next(seq__34860_35434__$1);
var G__35444 = null;
var G__35445 = (0);
var G__35446 = (0);
seq__34860_35423 = G__35443;
chunk__34861_35424 = G__35444;
count__34862_35425 = G__35445;
i__34863_35426 = G__35446;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34855){
var G__34856 = cljs.core.first(seq34855);
var seq34855__$1 = cljs.core.next(seq34855);
var G__34857 = cljs.core.first(seq34855__$1);
var seq34855__$2 = cljs.core.next(seq34855__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34856,G__34857,seq34855__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34868 = arguments.length;
switch (G__34868) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35449 = arguments.length;
var i__4790__auto___35450 = (0);
while(true){
if((i__4790__auto___35450 < len__4789__auto___35449)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35450]));

var G__35451 = (i__4790__auto___35450 + (1));
i__4790__auto___35450 = G__35451;
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
var G__34869 = parent;
G__34869.insertBefore(child,parent.firstChild);

return G__34869;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34870_35457 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34871_35458 = null;
var count__34872_35459 = (0);
var i__34873_35460 = (0);
while(true){
if((i__34873_35460 < count__34872_35459)){
var c_35461 = chunk__34871_35458.cljs$core$IIndexed$_nth$arity$2(null,i__34873_35460);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35461);


var G__35462 = seq__34870_35457;
var G__35463 = chunk__34871_35458;
var G__35464 = count__34872_35459;
var G__35465 = (i__34873_35460 + (1));
seq__34870_35457 = G__35462;
chunk__34871_35458 = G__35463;
count__34872_35459 = G__35464;
i__34873_35460 = G__35465;
continue;
} else {
var temp__5735__auto___35466 = cljs.core.seq(seq__34870_35457);
if(temp__5735__auto___35466){
var seq__34870_35468__$1 = temp__5735__auto___35466;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35468__$1)){
var c__4609__auto___35469 = cljs.core.chunk_first(seq__34870_35468__$1);
var G__35471 = cljs.core.chunk_rest(seq__34870_35468__$1);
var G__35472 = c__4609__auto___35469;
var G__35473 = cljs.core.count(c__4609__auto___35469);
var G__35474 = (0);
seq__34870_35457 = G__35471;
chunk__34871_35458 = G__35472;
count__34872_35459 = G__35473;
i__34873_35460 = G__35474;
continue;
} else {
var c_35475 = cljs.core.first(seq__34870_35468__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35475);


var G__35476 = cljs.core.next(seq__34870_35468__$1);
var G__35477 = null;
var G__35478 = (0);
var G__35479 = (0);
seq__34870_35457 = G__35476;
chunk__34871_35458 = G__35477;
count__34872_35459 = G__35478;
i__34873_35460 = G__35479;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34865){
var G__34866 = cljs.core.first(seq34865);
var seq34865__$1 = cljs.core.next(seq34865);
var G__34867 = cljs.core.first(seq34865__$1);
var seq34865__$2 = cljs.core.next(seq34865__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34866,G__34867,seq34865__$2);
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
var temp__5733__auto___35483 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35483)){
var next_35485 = temp__5733__auto___35483;
dommy.core.insert_before_BANG_(elem,next_35485);
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
var G__34875 = arguments.length;
switch (G__34875) {
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
var G__34876 = p;
G__34876.removeChild(elem);

return G__34876;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34877){
var vec__34878 = p__34877;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(1),null);
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
var len__4789__auto___35497 = arguments.length;
var i__4790__auto___35498 = (0);
while(true){
if((i__4790__auto___35498 < len__4789__auto___35497)){
args__4795__auto__.push((arguments[i__4790__auto___35498]));

var G__35499 = (i__4790__auto___35498 + (1));
i__4790__auto___35498 = G__35499;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34881){
var G__34882 = cljs.core.first(seq34881);
var seq34881__$1 = cljs.core.next(seq34881);
var G__34883 = cljs.core.first(seq34881__$1);
var seq34881__$2 = cljs.core.next(seq34881__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34882,G__34883,seq34881__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34884 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34884.cljs$core$IFn$_invoke$arity$1 ? fexpr__34884.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34884.call(null,elem_sel));
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
var len__4789__auto___35500 = arguments.length;
var i__4790__auto___35501 = (0);
while(true){
if((i__4790__auto___35501 < len__4789__auto___35500)){
args__4795__auto__.push((arguments[i__4790__auto___35501]));

var G__35502 = (i__4790__auto___35501 + (1));
i__4790__auto___35501 = G__35502;
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

var vec__34890_35503 = dommy.core.elem_and_selector(elem_sel);
var elem_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34890_35503,(0),null);
var selector_35505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34890_35503,(1),null);
var seq__34893_35506 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34900_35507 = null;
var count__34901_35508 = (0);
var i__34902_35509 = (0);
while(true){
if((i__34902_35509 < count__34901_35508)){
var vec__34958_35510 = chunk__34900_35507.cljs$core$IIndexed$_nth$arity$2(null,i__34902_35509);
var orig_type_35511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958_35510,(0),null);
var f_35512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958_35510,(1),null);
var seq__34903_35513 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35511,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35511,cljs.core.identity])));
var chunk__34905_35514 = null;
var count__34906_35515 = (0);
var i__34907_35516 = (0);
while(true){
if((i__34907_35516 < count__34906_35515)){
var vec__34971_35517 = chunk__34905_35514.cljs$core$IIndexed$_nth$arity$2(null,i__34907_35516);
var actual_type_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35517,(0),null);
var factory_35519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35517,(1),null);
var canonical_f_35520 = (function (){var G__34975 = (factory_35519.cljs$core$IFn$_invoke$arity$1 ? factory_35519.cljs$core$IFn$_invoke$arity$1(f_35512) : factory_35519.call(null,f_35512));
var fexpr__34974 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__34974.cljs$core$IFn$_invoke$arity$1 ? fexpr__34974.cljs$core$IFn$_invoke$arity$1(G__34975) : fexpr__34974.call(null,G__34975));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35518,f_35512], null),canonical_f_35520], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35518),canonical_f_35520);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35518),canonical_f_35520);
}


var G__35521 = seq__34903_35513;
var G__35522 = chunk__34905_35514;
var G__35523 = count__34906_35515;
var G__35524 = (i__34907_35516 + (1));
seq__34903_35513 = G__35521;
chunk__34905_35514 = G__35522;
count__34906_35515 = G__35523;
i__34907_35516 = G__35524;
continue;
} else {
var temp__5735__auto___35525 = cljs.core.seq(seq__34903_35513);
if(temp__5735__auto___35525){
var seq__34903_35526__$1 = temp__5735__auto___35525;
if(cljs.core.chunked_seq_QMARK_(seq__34903_35526__$1)){
var c__4609__auto___35527 = cljs.core.chunk_first(seq__34903_35526__$1);
var G__35528 = cljs.core.chunk_rest(seq__34903_35526__$1);
var G__35529 = c__4609__auto___35527;
var G__35530 = cljs.core.count(c__4609__auto___35527);
var G__35531 = (0);
seq__34903_35513 = G__35528;
chunk__34905_35514 = G__35529;
count__34906_35515 = G__35530;
i__34907_35516 = G__35531;
continue;
} else {
var vec__34976_35532 = cljs.core.first(seq__34903_35526__$1);
var actual_type_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35532,(0),null);
var factory_35534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35532,(1),null);
var canonical_f_35535 = (function (){var G__34980 = (factory_35534.cljs$core$IFn$_invoke$arity$1 ? factory_35534.cljs$core$IFn$_invoke$arity$1(f_35512) : factory_35534.call(null,f_35512));
var fexpr__34979 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__34979.cljs$core$IFn$_invoke$arity$1 ? fexpr__34979.cljs$core$IFn$_invoke$arity$1(G__34980) : fexpr__34979.call(null,G__34980));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35533,f_35512], null),canonical_f_35535], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35533),canonical_f_35535);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35533),canonical_f_35535);
}


var G__35536 = cljs.core.next(seq__34903_35526__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__34903_35513 = G__35536;
chunk__34905_35514 = G__35537;
count__34906_35515 = G__35538;
i__34907_35516 = G__35539;
continue;
}
} else {
}
}
break;
}

var G__35540 = seq__34893_35506;
var G__35541 = chunk__34900_35507;
var G__35542 = count__34901_35508;
var G__35543 = (i__34902_35509 + (1));
seq__34893_35506 = G__35540;
chunk__34900_35507 = G__35541;
count__34901_35508 = G__35542;
i__34902_35509 = G__35543;
continue;
} else {
var temp__5735__auto___35544 = cljs.core.seq(seq__34893_35506);
if(temp__5735__auto___35544){
var seq__34893_35545__$1 = temp__5735__auto___35544;
if(cljs.core.chunked_seq_QMARK_(seq__34893_35545__$1)){
var c__4609__auto___35546 = cljs.core.chunk_first(seq__34893_35545__$1);
var G__35547 = cljs.core.chunk_rest(seq__34893_35545__$1);
var G__35548 = c__4609__auto___35546;
var G__35549 = cljs.core.count(c__4609__auto___35546);
var G__35550 = (0);
seq__34893_35506 = G__35547;
chunk__34900_35507 = G__35548;
count__34901_35508 = G__35549;
i__34902_35509 = G__35550;
continue;
} else {
var vec__34981_35551 = cljs.core.first(seq__34893_35545__$1);
var orig_type_35552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34981_35551,(0),null);
var f_35553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34981_35551,(1),null);
var seq__34894_35554 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35552,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35552,cljs.core.identity])));
var chunk__34896_35555 = null;
var count__34897_35556 = (0);
var i__34898_35557 = (0);
while(true){
if((i__34898_35557 < count__34897_35556)){
var vec__34998_35558 = chunk__34896_35555.cljs$core$IIndexed$_nth$arity$2(null,i__34898_35557);
var actual_type_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34998_35558,(0),null);
var factory_35560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34998_35558,(1),null);
var canonical_f_35561 = (function (){var G__35002 = (factory_35560.cljs$core$IFn$_invoke$arity$1 ? factory_35560.cljs$core$IFn$_invoke$arity$1(f_35553) : factory_35560.call(null,f_35553));
var fexpr__35001 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__35001.cljs$core$IFn$_invoke$arity$1 ? fexpr__35001.cljs$core$IFn$_invoke$arity$1(G__35002) : fexpr__35001.call(null,G__35002));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35559,f_35553], null),canonical_f_35561], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35559),canonical_f_35561);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35559),canonical_f_35561);
}


var G__35562 = seq__34894_35554;
var G__35563 = chunk__34896_35555;
var G__35564 = count__34897_35556;
var G__35565 = (i__34898_35557 + (1));
seq__34894_35554 = G__35562;
chunk__34896_35555 = G__35563;
count__34897_35556 = G__35564;
i__34898_35557 = G__35565;
continue;
} else {
var temp__5735__auto___35566__$1 = cljs.core.seq(seq__34894_35554);
if(temp__5735__auto___35566__$1){
var seq__34894_35567__$1 = temp__5735__auto___35566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34894_35567__$1)){
var c__4609__auto___35568 = cljs.core.chunk_first(seq__34894_35567__$1);
var G__35569 = cljs.core.chunk_rest(seq__34894_35567__$1);
var G__35570 = c__4609__auto___35568;
var G__35571 = cljs.core.count(c__4609__auto___35568);
var G__35572 = (0);
seq__34894_35554 = G__35569;
chunk__34896_35555 = G__35570;
count__34897_35556 = G__35571;
i__34898_35557 = G__35572;
continue;
} else {
var vec__35003_35573 = cljs.core.first(seq__34894_35567__$1);
var actual_type_35574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35003_35573,(0),null);
var factory_35575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35003_35573,(1),null);
var canonical_f_35576 = (function (){var G__35010 = (factory_35575.cljs$core$IFn$_invoke$arity$1 ? factory_35575.cljs$core$IFn$_invoke$arity$1(f_35553) : factory_35575.call(null,f_35553));
var fexpr__35009 = (cljs.core.truth_(selector_35505)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35504,selector_35505):cljs.core.identity);
return (fexpr__35009.cljs$core$IFn$_invoke$arity$1 ? fexpr__35009.cljs$core$IFn$_invoke$arity$1(G__35010) : fexpr__35009.call(null,G__35010));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35504,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35505,actual_type_35574,f_35553], null),canonical_f_35576], 0));

if(cljs.core.truth_(elem_35504.addEventListener)){
elem_35504.addEventListener(cljs.core.name(actual_type_35574),canonical_f_35576);
} else {
elem_35504.attachEvent(cljs.core.name(actual_type_35574),canonical_f_35576);
}


var G__35577 = cljs.core.next(seq__34894_35567__$1);
var G__35578 = null;
var G__35579 = (0);
var G__35580 = (0);
seq__34894_35554 = G__35577;
chunk__34896_35555 = G__35578;
count__34897_35556 = G__35579;
i__34898_35557 = G__35580;
continue;
}
} else {
}
}
break;
}

var G__35581 = cljs.core.next(seq__34893_35545__$1);
var G__35582 = null;
var G__35583 = (0);
var G__35584 = (0);
seq__34893_35506 = G__35581;
chunk__34900_35507 = G__35582;
count__34901_35508 = G__35583;
i__34902_35509 = G__35584;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34885){
var G__34886 = cljs.core.first(seq34885);
var seq34885__$1 = cljs.core.next(seq34885);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34886,seq34885__$1);
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
var i__4790__auto___35586 = (0);
while(true){
if((i__4790__auto___35586 < len__4789__auto___35585)){
args__4795__auto__.push((arguments[i__4790__auto___35586]));

var G__35587 = (i__4790__auto___35586 + (1));
i__4790__auto___35586 = G__35587;
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

var vec__35017_35588 = dommy.core.elem_and_selector(elem_sel);
var elem_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35588,(0),null);
var selector_35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35588,(1),null);
var seq__35020_35591 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35027_35592 = null;
var count__35028_35593 = (0);
var i__35029_35594 = (0);
while(true){
if((i__35029_35594 < count__35028_35593)){
var vec__35071_35595 = chunk__35027_35592.cljs$core$IIndexed$_nth$arity$2(null,i__35029_35594);
var orig_type_35596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071_35595,(0),null);
var f_35597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071_35595,(1),null);
var seq__35030_35598 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35596,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35596,cljs.core.identity])));
var chunk__35032_35599 = null;
var count__35033_35601 = (0);
var i__35034_35602 = (0);
while(true){
if((i__35034_35602 < count__35033_35601)){
var vec__35080_35604 = chunk__35032_35599.cljs$core$IIndexed$_nth$arity$2(null,i__35034_35602);
var actual_type_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35604,(0),null);
var __35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35604,(1),null);
var keys_35609 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35590,actual_type_35605,f_35597], null);
var canonical_f_35610 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35589),keys_35609);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35589,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35609], 0));

if(cljs.core.truth_(elem_35589.removeEventListener)){
elem_35589.removeEventListener(cljs.core.name(actual_type_35605),canonical_f_35610);
} else {
elem_35589.detachEvent(cljs.core.name(actual_type_35605),canonical_f_35610);
}


var G__35613 = seq__35030_35598;
var G__35614 = chunk__35032_35599;
var G__35615 = count__35033_35601;
var G__35616 = (i__35034_35602 + (1));
seq__35030_35598 = G__35613;
chunk__35032_35599 = G__35614;
count__35033_35601 = G__35615;
i__35034_35602 = G__35616;
continue;
} else {
var temp__5735__auto___35617 = cljs.core.seq(seq__35030_35598);
if(temp__5735__auto___35617){
var seq__35030_35618__$1 = temp__5735__auto___35617;
if(cljs.core.chunked_seq_QMARK_(seq__35030_35618__$1)){
var c__4609__auto___35619 = cljs.core.chunk_first(seq__35030_35618__$1);
var G__35620 = cljs.core.chunk_rest(seq__35030_35618__$1);
var G__35621 = c__4609__auto___35619;
var G__35622 = cljs.core.count(c__4609__auto___35619);
var G__35623 = (0);
seq__35030_35598 = G__35620;
chunk__35032_35599 = G__35621;
count__35033_35601 = G__35622;
i__35034_35602 = G__35623;
continue;
} else {
var vec__35087_35624 = cljs.core.first(seq__35030_35618__$1);
var actual_type_35625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35624,(0),null);
var __35626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35624,(1),null);
var keys_35627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35590,actual_type_35625,f_35597], null);
var canonical_f_35628 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35589),keys_35627);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35589,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35627], 0));

if(cljs.core.truth_(elem_35589.removeEventListener)){
elem_35589.removeEventListener(cljs.core.name(actual_type_35625),canonical_f_35628);
} else {
elem_35589.detachEvent(cljs.core.name(actual_type_35625),canonical_f_35628);
}


var G__35629 = cljs.core.next(seq__35030_35618__$1);
var G__35630 = null;
var G__35631 = (0);
var G__35632 = (0);
seq__35030_35598 = G__35629;
chunk__35032_35599 = G__35630;
count__35033_35601 = G__35631;
i__35034_35602 = G__35632;
continue;
}
} else {
}
}
break;
}

var G__35634 = seq__35020_35591;
var G__35635 = chunk__35027_35592;
var G__35636 = count__35028_35593;
var G__35637 = (i__35029_35594 + (1));
seq__35020_35591 = G__35634;
chunk__35027_35592 = G__35635;
count__35028_35593 = G__35636;
i__35029_35594 = G__35637;
continue;
} else {
var temp__5735__auto___35640 = cljs.core.seq(seq__35020_35591);
if(temp__5735__auto___35640){
var seq__35020_35641__$1 = temp__5735__auto___35640;
if(cljs.core.chunked_seq_QMARK_(seq__35020_35641__$1)){
var c__4609__auto___35643 = cljs.core.chunk_first(seq__35020_35641__$1);
var G__35644 = cljs.core.chunk_rest(seq__35020_35641__$1);
var G__35645 = c__4609__auto___35643;
var G__35646 = cljs.core.count(c__4609__auto___35643);
var G__35647 = (0);
seq__35020_35591 = G__35644;
chunk__35027_35592 = G__35645;
count__35028_35593 = G__35646;
i__35029_35594 = G__35647;
continue;
} else {
var vec__35090_35648 = cljs.core.first(seq__35020_35641__$1);
var orig_type_35649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35648,(0),null);
var f_35650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35648,(1),null);
var seq__35021_35651 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35649,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35649,cljs.core.identity])));
var chunk__35023_35652 = null;
var count__35024_35653 = (0);
var i__35025_35654 = (0);
while(true){
if((i__35025_35654 < count__35024_35653)){
var vec__35122_35658 = chunk__35023_35652.cljs$core$IIndexed$_nth$arity$2(null,i__35025_35654);
var actual_type_35659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35658,(0),null);
var __35660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122_35658,(1),null);
var keys_35661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35590,actual_type_35659,f_35650], null);
var canonical_f_35662 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35589),keys_35661);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35589,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35661], 0));

if(cljs.core.truth_(elem_35589.removeEventListener)){
elem_35589.removeEventListener(cljs.core.name(actual_type_35659),canonical_f_35662);
} else {
elem_35589.detachEvent(cljs.core.name(actual_type_35659),canonical_f_35662);
}


var G__35663 = seq__35021_35651;
var G__35664 = chunk__35023_35652;
var G__35665 = count__35024_35653;
var G__35666 = (i__35025_35654 + (1));
seq__35021_35651 = G__35663;
chunk__35023_35652 = G__35664;
count__35024_35653 = G__35665;
i__35025_35654 = G__35666;
continue;
} else {
var temp__5735__auto___35667__$1 = cljs.core.seq(seq__35021_35651);
if(temp__5735__auto___35667__$1){
var seq__35021_35670__$1 = temp__5735__auto___35667__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35021_35670__$1)){
var c__4609__auto___35674 = cljs.core.chunk_first(seq__35021_35670__$1);
var G__35676 = cljs.core.chunk_rest(seq__35021_35670__$1);
var G__35677 = c__4609__auto___35674;
var G__35678 = cljs.core.count(c__4609__auto___35674);
var G__35679 = (0);
seq__35021_35651 = G__35676;
chunk__35023_35652 = G__35677;
count__35024_35653 = G__35678;
i__35025_35654 = G__35679;
continue;
} else {
var vec__35125_35681 = cljs.core.first(seq__35021_35670__$1);
var actual_type_35682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125_35681,(0),null);
var __35683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125_35681,(1),null);
var keys_35684 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35590,actual_type_35682,f_35650], null);
var canonical_f_35685 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35589),keys_35684);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35589,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35684], 0));

if(cljs.core.truth_(elem_35589.removeEventListener)){
elem_35589.removeEventListener(cljs.core.name(actual_type_35682),canonical_f_35685);
} else {
elem_35589.detachEvent(cljs.core.name(actual_type_35682),canonical_f_35685);
}


var G__35690 = cljs.core.next(seq__35021_35670__$1);
var G__35691 = null;
var G__35692 = (0);
var G__35693 = (0);
seq__35021_35651 = G__35690;
chunk__35023_35652 = G__35691;
count__35024_35653 = G__35692;
i__35025_35654 = G__35693;
continue;
}
} else {
}
}
break;
}

var G__35694 = cljs.core.next(seq__35020_35641__$1);
var G__35695 = null;
var G__35696 = (0);
var G__35697 = (0);
seq__35020_35591 = G__35694;
chunk__35027_35592 = G__35695;
count__35028_35593 = G__35696;
i__35029_35594 = G__35697;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35011){
var G__35012 = cljs.core.first(seq35011);
var seq35011__$1 = cljs.core.next(seq35011);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35012,seq35011__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35703 = arguments.length;
var i__4790__auto___35705 = (0);
while(true){
if((i__4790__auto___35705 < len__4789__auto___35703)){
args__4795__auto__.push((arguments[i__4790__auto___35705]));

var G__35706 = (i__4790__auto___35705 + (1));
i__4790__auto___35705 = G__35706;
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

var vec__35148_35710 = dommy.core.elem_and_selector(elem_sel);
var elem_35711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35148_35710,(0),null);
var selector_35712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35148_35710,(1),null);
var seq__35151_35715 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35152_35716 = null;
var count__35153_35717 = (0);
var i__35154_35718 = (0);
while(true){
if((i__35154_35718 < count__35153_35717)){
var vec__35165_35720 = chunk__35152_35716.cljs$core$IIndexed$_nth$arity$2(null,i__35154_35718);
var type_35721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35165_35720,(0),null);
var f_35722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35165_35720,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35721,((function (seq__35151_35715,chunk__35152_35716,count__35153_35717,i__35154_35718,vec__35165_35720,type_35721,f_35722,vec__35148_35710,elem_35711,selector_35712){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35721,dommy$core$this_fn], 0));

return (f_35722.cljs$core$IFn$_invoke$arity$1 ? f_35722.cljs$core$IFn$_invoke$arity$1(e) : f_35722.call(null,e));
});})(seq__35151_35715,chunk__35152_35716,count__35153_35717,i__35154_35718,vec__35165_35720,type_35721,f_35722,vec__35148_35710,elem_35711,selector_35712))
], 0));


var G__35727 = seq__35151_35715;
var G__35728 = chunk__35152_35716;
var G__35729 = count__35153_35717;
var G__35730 = (i__35154_35718 + (1));
seq__35151_35715 = G__35727;
chunk__35152_35716 = G__35728;
count__35153_35717 = G__35729;
i__35154_35718 = G__35730;
continue;
} else {
var temp__5735__auto___35731 = cljs.core.seq(seq__35151_35715);
if(temp__5735__auto___35731){
var seq__35151_35732__$1 = temp__5735__auto___35731;
if(cljs.core.chunked_seq_QMARK_(seq__35151_35732__$1)){
var c__4609__auto___35736 = cljs.core.chunk_first(seq__35151_35732__$1);
var G__35737 = cljs.core.chunk_rest(seq__35151_35732__$1);
var G__35738 = c__4609__auto___35736;
var G__35739 = cljs.core.count(c__4609__auto___35736);
var G__35740 = (0);
seq__35151_35715 = G__35737;
chunk__35152_35716 = G__35738;
count__35153_35717 = G__35739;
i__35154_35718 = G__35740;
continue;
} else {
var vec__35168_35743 = cljs.core.first(seq__35151_35732__$1);
var type_35744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168_35743,(0),null);
var f_35745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168_35743,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35744,((function (seq__35151_35715,chunk__35152_35716,count__35153_35717,i__35154_35718,vec__35168_35743,type_35744,f_35745,seq__35151_35732__$1,temp__5735__auto___35731,vec__35148_35710,elem_35711,selector_35712){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35744,dommy$core$this_fn], 0));

return (f_35745.cljs$core$IFn$_invoke$arity$1 ? f_35745.cljs$core$IFn$_invoke$arity$1(e) : f_35745.call(null,e));
});})(seq__35151_35715,chunk__35152_35716,count__35153_35717,i__35154_35718,vec__35168_35743,type_35744,f_35745,seq__35151_35732__$1,temp__5735__auto___35731,vec__35148_35710,elem_35711,selector_35712))
], 0));


var G__35749 = cljs.core.next(seq__35151_35732__$1);
var G__35750 = null;
var G__35751 = (0);
var G__35752 = (0);
seq__35151_35715 = G__35749;
chunk__35152_35716 = G__35750;
count__35153_35717 = G__35751;
i__35154_35718 = G__35752;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35133){
var G__35134 = cljs.core.first(seq35133);
var seq35133__$1 = cljs.core.next(seq35133);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35134,seq35133__$1);
}));


//# sourceMappingURL=dommy.core.js.map
