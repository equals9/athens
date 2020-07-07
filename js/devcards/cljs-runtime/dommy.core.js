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
var len__4789__auto___35168 = arguments.length;
var i__4790__auto___35170 = (0);
while(true){
if((i__4790__auto___35170 < len__4789__auto___35168)){
args__4795__auto__.push((arguments[i__4790__auto___35170]));

var G__35171 = (i__4790__auto___35170 + (1));
i__4790__auto___35170 = G__35171;
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
var seq__34730_35172 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34731_35173 = null;
var count__34732_35174 = (0);
var i__34733_35175 = (0);
while(true){
if((i__34733_35175 < count__34732_35174)){
var vec__34740_35176 = chunk__34731_35173.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35175);
var k_35177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34740_35176,(0),null);
var v_35178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34740_35176,(1),null);
style.setProperty(dommy.utils.as_str(k_35177),v_35178);


var G__35179 = seq__34730_35172;
var G__35180 = chunk__34731_35173;
var G__35181 = count__34732_35174;
var G__35182 = (i__34733_35175 + (1));
seq__34730_35172 = G__35179;
chunk__34731_35173 = G__35180;
count__34732_35174 = G__35181;
i__34733_35175 = G__35182;
continue;
} else {
var temp__5735__auto___35183 = cljs.core.seq(seq__34730_35172);
if(temp__5735__auto___35183){
var seq__34730_35184__$1 = temp__5735__auto___35183;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35184__$1)){
var c__4609__auto___35185 = cljs.core.chunk_first(seq__34730_35184__$1);
var G__35186 = cljs.core.chunk_rest(seq__34730_35184__$1);
var G__35187 = c__4609__auto___35185;
var G__35188 = cljs.core.count(c__4609__auto___35185);
var G__35189 = (0);
seq__34730_35172 = G__35186;
chunk__34731_35173 = G__35187;
count__34732_35174 = G__35188;
i__34733_35175 = G__35189;
continue;
} else {
var vec__34743_35190 = cljs.core.first(seq__34730_35184__$1);
var k_35191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34743_35190,(0),null);
var v_35192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34743_35190,(1),null);
style.setProperty(dommy.utils.as_str(k_35191),v_35192);


var G__35193 = cljs.core.next(seq__34730_35184__$1);
var G__35194 = null;
var G__35195 = (0);
var G__35196 = (0);
seq__34730_35172 = G__35193;
chunk__34731_35173 = G__35194;
count__34732_35174 = G__35195;
i__34733_35175 = G__35196;
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
var len__4789__auto___35197 = arguments.length;
var i__4790__auto___35198 = (0);
while(true){
if((i__4790__auto___35198 < len__4789__auto___35197)){
args__4795__auto__.push((arguments[i__4790__auto___35198]));

var G__35199 = (i__4790__auto___35198 + (1));
i__4790__auto___35198 = G__35199;
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
var seq__34749_35200 = cljs.core.seq(keywords);
var chunk__34750_35201 = null;
var count__34751_35202 = (0);
var i__34752_35203 = (0);
while(true){
if((i__34752_35203 < count__34751_35202)){
var kw_35205 = chunk__34750_35201.cljs$core$IIndexed$_nth$arity$2(null,i__34752_35203);
style.removeProperty(dommy.utils.as_str(kw_35205));


var G__35207 = seq__34749_35200;
var G__35208 = chunk__34750_35201;
var G__35209 = count__34751_35202;
var G__35210 = (i__34752_35203 + (1));
seq__34749_35200 = G__35207;
chunk__34750_35201 = G__35208;
count__34751_35202 = G__35209;
i__34752_35203 = G__35210;
continue;
} else {
var temp__5735__auto___35211 = cljs.core.seq(seq__34749_35200);
if(temp__5735__auto___35211){
var seq__34749_35212__$1 = temp__5735__auto___35211;
if(cljs.core.chunked_seq_QMARK_(seq__34749_35212__$1)){
var c__4609__auto___35213 = cljs.core.chunk_first(seq__34749_35212__$1);
var G__35214 = cljs.core.chunk_rest(seq__34749_35212__$1);
var G__35215 = c__4609__auto___35213;
var G__35216 = cljs.core.count(c__4609__auto___35213);
var G__35217 = (0);
seq__34749_35200 = G__35214;
chunk__34750_35201 = G__35215;
count__34751_35202 = G__35216;
i__34752_35203 = G__35217;
continue;
} else {
var kw_35218 = cljs.core.first(seq__34749_35212__$1);
style.removeProperty(dommy.utils.as_str(kw_35218));


var G__35219 = cljs.core.next(seq__34749_35212__$1);
var G__35220 = null;
var G__35221 = (0);
var G__35222 = (0);
seq__34749_35200 = G__35219;
chunk__34750_35201 = G__35220;
count__34751_35202 = G__35221;
i__34752_35203 = G__35222;
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
var len__4789__auto___35223 = arguments.length;
var i__4790__auto___35224 = (0);
while(true){
if((i__4790__auto___35224 < len__4789__auto___35223)){
args__4795__auto__.push((arguments[i__4790__auto___35224]));

var G__35225 = (i__4790__auto___35224 + (1));
i__4790__auto___35224 = G__35225;
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

var seq__34755_35228 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34756_35229 = null;
var count__34757_35230 = (0);
var i__34758_35231 = (0);
while(true){
if((i__34758_35231 < count__34757_35230)){
var vec__34765_35232 = chunk__34756_35229.cljs$core$IIndexed$_nth$arity$2(null,i__34758_35231);
var k_35233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765_35232,(0),null);
var v_35234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765_35232,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35233,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35234),"px"].join('')], 0));


var G__35235 = seq__34755_35228;
var G__35236 = chunk__34756_35229;
var G__35237 = count__34757_35230;
var G__35238 = (i__34758_35231 + (1));
seq__34755_35228 = G__35235;
chunk__34756_35229 = G__35236;
count__34757_35230 = G__35237;
i__34758_35231 = G__35238;
continue;
} else {
var temp__5735__auto___35239 = cljs.core.seq(seq__34755_35228);
if(temp__5735__auto___35239){
var seq__34755_35240__$1 = temp__5735__auto___35239;
if(cljs.core.chunked_seq_QMARK_(seq__34755_35240__$1)){
var c__4609__auto___35241 = cljs.core.chunk_first(seq__34755_35240__$1);
var G__35242 = cljs.core.chunk_rest(seq__34755_35240__$1);
var G__35243 = c__4609__auto___35241;
var G__35244 = cljs.core.count(c__4609__auto___35241);
var G__35245 = (0);
seq__34755_35228 = G__35242;
chunk__34756_35229 = G__35243;
count__34757_35230 = G__35244;
i__34758_35231 = G__35245;
continue;
} else {
var vec__34768_35246 = cljs.core.first(seq__34755_35240__$1);
var k_35247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768_35246,(0),null);
var v_35248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768_35246,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35247,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35248),"px"].join('')], 0));


var G__35249 = cljs.core.next(seq__34755_35240__$1);
var G__35250 = null;
var G__35251 = (0);
var G__35252 = (0);
seq__34755_35228 = G__35249;
chunk__34756_35229 = G__35250;
count__34757_35230 = G__35251;
i__34758_35231 = G__35252;
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
var len__4789__auto___35254 = arguments.length;
var i__4790__auto___35255 = (0);
while(true){
if((i__4790__auto___35255 < len__4789__auto___35254)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35255]));

var G__35256 = (i__4790__auto___35255 + (1));
i__4790__auto___35255 = G__35256;
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

var seq__34779_35257 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34780_35258 = null;
var count__34781_35259 = (0);
var i__34782_35260 = (0);
while(true){
if((i__34782_35260 < count__34781_35259)){
var vec__34789_35261 = chunk__34780_35258.cljs$core$IIndexed$_nth$arity$2(null,i__34782_35260);
var k_35262__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35261,(0),null);
var v_35263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35261,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35262__$1,v_35263__$1);


var G__35264 = seq__34779_35257;
var G__35265 = chunk__34780_35258;
var G__35266 = count__34781_35259;
var G__35267 = (i__34782_35260 + (1));
seq__34779_35257 = G__35264;
chunk__34780_35258 = G__35265;
count__34781_35259 = G__35266;
i__34782_35260 = G__35267;
continue;
} else {
var temp__5735__auto___35268 = cljs.core.seq(seq__34779_35257);
if(temp__5735__auto___35268){
var seq__34779_35269__$1 = temp__5735__auto___35268;
if(cljs.core.chunked_seq_QMARK_(seq__34779_35269__$1)){
var c__4609__auto___35270 = cljs.core.chunk_first(seq__34779_35269__$1);
var G__35271 = cljs.core.chunk_rest(seq__34779_35269__$1);
var G__35272 = c__4609__auto___35270;
var G__35273 = cljs.core.count(c__4609__auto___35270);
var G__35274 = (0);
seq__34779_35257 = G__35271;
chunk__34780_35258 = G__35272;
count__34781_35259 = G__35273;
i__34782_35260 = G__35274;
continue;
} else {
var vec__34792_35275 = cljs.core.first(seq__34779_35269__$1);
var k_35276__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_35275,(0),null);
var v_35277__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_35275,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35276__$1,v_35277__$1);


var G__35278 = cljs.core.next(seq__34779_35269__$1);
var G__35279 = null;
var G__35280 = (0);
var G__35281 = (0);
seq__34779_35257 = G__35278;
chunk__34780_35258 = G__35279;
count__34781_35259 = G__35280;
i__34782_35260 = G__35281;
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
var len__4789__auto___35283 = arguments.length;
var i__4790__auto___35284 = (0);
while(true){
if((i__4790__auto___35284 < len__4789__auto___35283)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35284]));

var G__35285 = (i__4790__auto___35284 + (1));
i__4790__auto___35284 = G__35285;
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
var k_35286__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34800 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34800.cljs$core$IFn$_invoke$arity$1 ? fexpr__34800.cljs$core$IFn$_invoke$arity$1(k_35286__$1) : fexpr__34800.call(null,k_35286__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35286__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34801_35287 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34802_35288 = null;
var count__34803_35289 = (0);
var i__34804_35290 = (0);
while(true){
if((i__34804_35290 < count__34803_35289)){
var k_35291__$1 = chunk__34802_35288.cljs$core$IIndexed$_nth$arity$2(null,i__34804_35290);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35291__$1);


var G__35292 = seq__34801_35287;
var G__35293 = chunk__34802_35288;
var G__35294 = count__34803_35289;
var G__35295 = (i__34804_35290 + (1));
seq__34801_35287 = G__35292;
chunk__34802_35288 = G__35293;
count__34803_35289 = G__35294;
i__34804_35290 = G__35295;
continue;
} else {
var temp__5735__auto___35296 = cljs.core.seq(seq__34801_35287);
if(temp__5735__auto___35296){
var seq__34801_35297__$1 = temp__5735__auto___35296;
if(cljs.core.chunked_seq_QMARK_(seq__34801_35297__$1)){
var c__4609__auto___35298 = cljs.core.chunk_first(seq__34801_35297__$1);
var G__35299 = cljs.core.chunk_rest(seq__34801_35297__$1);
var G__35300 = c__4609__auto___35298;
var G__35301 = cljs.core.count(c__4609__auto___35298);
var G__35302 = (0);
seq__34801_35287 = G__35299;
chunk__34802_35288 = G__35300;
count__34803_35289 = G__35301;
i__34804_35290 = G__35302;
continue;
} else {
var k_35303__$1 = cljs.core.first(seq__34801_35297__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35303__$1);


var G__35304 = cljs.core.next(seq__34801_35297__$1);
var G__35305 = null;
var G__35306 = (0);
var G__35307 = (0);
seq__34801_35287 = G__35304;
chunk__34802_35288 = G__35305;
count__34803_35289 = G__35306;
i__34804_35290 = G__35307;
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
var len__4789__auto___35310 = arguments.length;
var i__4790__auto___35311 = (0);
while(true){
if((i__4790__auto___35311 < len__4789__auto___35310)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35311]));

var G__35312 = (i__4790__auto___35311 + (1));
i__4790__auto___35311 = G__35312;
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
var temp__5733__auto___35313 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35313)){
var class_list_35314 = temp__5733__auto___35313;
var seq__34812_35315 = cljs.core.seq(classes__$1);
var chunk__34813_35316 = null;
var count__34814_35317 = (0);
var i__34815_35318 = (0);
while(true){
if((i__34815_35318 < count__34814_35317)){
var c_35319 = chunk__34813_35316.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35318);
class_list_35314.add(c_35319);


var G__35320 = seq__34812_35315;
var G__35321 = chunk__34813_35316;
var G__35322 = count__34814_35317;
var G__35323 = (i__34815_35318 + (1));
seq__34812_35315 = G__35320;
chunk__34813_35316 = G__35321;
count__34814_35317 = G__35322;
i__34815_35318 = G__35323;
continue;
} else {
var temp__5735__auto___35324 = cljs.core.seq(seq__34812_35315);
if(temp__5735__auto___35324){
var seq__34812_35325__$1 = temp__5735__auto___35324;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35325__$1)){
var c__4609__auto___35326 = cljs.core.chunk_first(seq__34812_35325__$1);
var G__35327 = cljs.core.chunk_rest(seq__34812_35325__$1);
var G__35328 = c__4609__auto___35326;
var G__35329 = cljs.core.count(c__4609__auto___35326);
var G__35330 = (0);
seq__34812_35315 = G__35327;
chunk__34813_35316 = G__35328;
count__34814_35317 = G__35329;
i__34815_35318 = G__35330;
continue;
} else {
var c_35331 = cljs.core.first(seq__34812_35325__$1);
class_list_35314.add(c_35331);


var G__35332 = cljs.core.next(seq__34812_35325__$1);
var G__35333 = null;
var G__35334 = (0);
var G__35335 = (0);
seq__34812_35315 = G__35332;
chunk__34813_35316 = G__35333;
count__34814_35317 = G__35334;
i__34815_35318 = G__35335;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34816_35336 = cljs.core.seq(classes__$1);
var chunk__34817_35337 = null;
var count__34818_35338 = (0);
var i__34819_35339 = (0);
while(true){
if((i__34819_35339 < count__34818_35338)){
var c_35340 = chunk__34817_35337.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35339);
var class_name_35341 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35341,c_35340))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35341 === ""))?c_35340:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35341)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35340)].join('')));
}


var G__35342 = seq__34816_35336;
var G__35343 = chunk__34817_35337;
var G__35344 = count__34818_35338;
var G__35345 = (i__34819_35339 + (1));
seq__34816_35336 = G__35342;
chunk__34817_35337 = G__35343;
count__34818_35338 = G__35344;
i__34819_35339 = G__35345;
continue;
} else {
var temp__5735__auto___35346 = cljs.core.seq(seq__34816_35336);
if(temp__5735__auto___35346){
var seq__34816_35347__$1 = temp__5735__auto___35346;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35347__$1)){
var c__4609__auto___35348 = cljs.core.chunk_first(seq__34816_35347__$1);
var G__35349 = cljs.core.chunk_rest(seq__34816_35347__$1);
var G__35350 = c__4609__auto___35348;
var G__35351 = cljs.core.count(c__4609__auto___35348);
var G__35352 = (0);
seq__34816_35336 = G__35349;
chunk__34817_35337 = G__35350;
count__34818_35338 = G__35351;
i__34819_35339 = G__35352;
continue;
} else {
var c_35353 = cljs.core.first(seq__34816_35347__$1);
var class_name_35354 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35354,c_35353))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35354 === ""))?c_35353:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35354)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35353)].join('')));
}


var G__35355 = cljs.core.next(seq__34816_35347__$1);
var G__35356 = null;
var G__35357 = (0);
var G__35358 = (0);
seq__34816_35336 = G__35355;
chunk__34817_35337 = G__35356;
count__34818_35338 = G__35357;
i__34819_35339 = G__35358;
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
var seq__34820_35360 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34821_35361 = null;
var count__34822_35362 = (0);
var i__34823_35363 = (0);
while(true){
if((i__34823_35363 < count__34822_35362)){
var c_35364 = chunk__34821_35361.cljs$core$IIndexed$_nth$arity$2(null,i__34823_35363);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35364);


var G__35365 = seq__34820_35360;
var G__35366 = chunk__34821_35361;
var G__35367 = count__34822_35362;
var G__35368 = (i__34823_35363 + (1));
seq__34820_35360 = G__35365;
chunk__34821_35361 = G__35366;
count__34822_35362 = G__35367;
i__34823_35363 = G__35368;
continue;
} else {
var temp__5735__auto___35370 = cljs.core.seq(seq__34820_35360);
if(temp__5735__auto___35370){
var seq__34820_35371__$1 = temp__5735__auto___35370;
if(cljs.core.chunked_seq_QMARK_(seq__34820_35371__$1)){
var c__4609__auto___35372 = cljs.core.chunk_first(seq__34820_35371__$1);
var G__35373 = cljs.core.chunk_rest(seq__34820_35371__$1);
var G__35374 = c__4609__auto___35372;
var G__35375 = cljs.core.count(c__4609__auto___35372);
var G__35376 = (0);
seq__34820_35360 = G__35373;
chunk__34821_35361 = G__35374;
count__34822_35362 = G__35375;
i__34823_35363 = G__35376;
continue;
} else {
var c_35377 = cljs.core.first(seq__34820_35371__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35377);


var G__35378 = cljs.core.next(seq__34820_35371__$1);
var G__35379 = null;
var G__35380 = (0);
var G__35381 = (0);
seq__34820_35360 = G__35378;
chunk__34821_35361 = G__35379;
count__34822_35362 = G__35380;
i__34823_35363 = G__35381;
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
var G__34831 = arguments.length;
switch (G__34831) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35384 = arguments.length;
var i__4790__auto___35385 = (0);
while(true){
if((i__4790__auto___35385 < len__4789__auto___35384)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35385]));

var G__35386 = (i__4790__auto___35385 + (1));
i__4790__auto___35385 = G__35386;
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
var temp__5733__auto___35389 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35389)){
var class_list_35390 = temp__5733__auto___35389;
class_list_35390.remove(c__$1);
} else {
var class_name_35391 = dommy.core.class$(elem);
var new_class_name_35392 = dommy.utils.remove_class_str(class_name_35391,c__$1);
if((class_name_35391 === new_class_name_35392)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35392);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34832 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34833 = null;
var count__34834 = (0);
var i__34835 = (0);
while(true){
if((i__34835 < count__34834)){
var c = chunk__34833.cljs$core$IIndexed$_nth$arity$2(null,i__34835);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35394 = seq__34832;
var G__35395 = chunk__34833;
var G__35396 = count__34834;
var G__35397 = (i__34835 + (1));
seq__34832 = G__35394;
chunk__34833 = G__35395;
count__34834 = G__35396;
i__34835 = G__35397;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34832);
if(temp__5735__auto__){
var seq__34832__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34832__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34832__$1);
var G__35399 = cljs.core.chunk_rest(seq__34832__$1);
var G__35400 = c__4609__auto__;
var G__35401 = cljs.core.count(c__4609__auto__);
var G__35402 = (0);
seq__34832 = G__35399;
chunk__34833 = G__35400;
count__34834 = G__35401;
i__34835 = G__35402;
continue;
} else {
var c = cljs.core.first(seq__34832__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35407 = cljs.core.next(seq__34832__$1);
var G__35408 = null;
var G__35409 = (0);
var G__35410 = (0);
seq__34832 = G__35407;
chunk__34833 = G__35408;
count__34834 = G__35409;
i__34835 = G__35410;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34828){
var G__34829 = cljs.core.first(seq34828);
var seq34828__$1 = cljs.core.next(seq34828);
var G__34830 = cljs.core.first(seq34828__$1);
var seq34828__$2 = cljs.core.next(seq34828__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34829,G__34830,seq34828__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34837 = arguments.length;
switch (G__34837) {
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
var G__34839 = arguments.length;
switch (G__34839) {
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
var G__34841 = arguments.length;
switch (G__34841) {
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
var G__34846 = arguments.length;
switch (G__34846) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35433 = arguments.length;
var i__4790__auto___35434 = (0);
while(true){
if((i__4790__auto___35434 < len__4789__auto___35433)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35434]));

var G__35435 = (i__4790__auto___35434 + (1));
i__4790__auto___35434 = G__35435;
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
var G__34847 = parent;
G__34847.appendChild(child);

return G__34847;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34848_35436 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34849_35437 = null;
var count__34850_35438 = (0);
var i__34851_35439 = (0);
while(true){
if((i__34851_35439 < count__34850_35438)){
var c_35440 = chunk__34849_35437.cljs$core$IIndexed$_nth$arity$2(null,i__34851_35439);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35440);


var G__35441 = seq__34848_35436;
var G__35442 = chunk__34849_35437;
var G__35443 = count__34850_35438;
var G__35444 = (i__34851_35439 + (1));
seq__34848_35436 = G__35441;
chunk__34849_35437 = G__35442;
count__34850_35438 = G__35443;
i__34851_35439 = G__35444;
continue;
} else {
var temp__5735__auto___35445 = cljs.core.seq(seq__34848_35436);
if(temp__5735__auto___35445){
var seq__34848_35446__$1 = temp__5735__auto___35445;
if(cljs.core.chunked_seq_QMARK_(seq__34848_35446__$1)){
var c__4609__auto___35447 = cljs.core.chunk_first(seq__34848_35446__$1);
var G__35448 = cljs.core.chunk_rest(seq__34848_35446__$1);
var G__35449 = c__4609__auto___35447;
var G__35450 = cljs.core.count(c__4609__auto___35447);
var G__35451 = (0);
seq__34848_35436 = G__35448;
chunk__34849_35437 = G__35449;
count__34850_35438 = G__35450;
i__34851_35439 = G__35451;
continue;
} else {
var c_35452 = cljs.core.first(seq__34848_35446__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35452);


var G__35453 = cljs.core.next(seq__34848_35446__$1);
var G__35454 = null;
var G__35455 = (0);
var G__35456 = (0);
seq__34848_35436 = G__35453;
chunk__34849_35437 = G__35454;
count__34850_35438 = G__35455;
i__34851_35439 = G__35456;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34843){
var G__34844 = cljs.core.first(seq34843);
var seq34843__$1 = cljs.core.next(seq34843);
var G__34845 = cljs.core.first(seq34843__$1);
var seq34843__$2 = cljs.core.next(seq34843__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34844,G__34845,seq34843__$2);
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
var len__4789__auto___35458 = arguments.length;
var i__4790__auto___35459 = (0);
while(true){
if((i__4790__auto___35459 < len__4789__auto___35458)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35459]));

var G__35460 = (i__4790__auto___35459 + (1));
i__4790__auto___35459 = G__35460;
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
var seq__34858_35461 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34859_35462 = null;
var count__34860_35463 = (0);
var i__34861_35464 = (0);
while(true){
if((i__34861_35464 < count__34860_35463)){
var c_35465 = chunk__34859_35462.cljs$core$IIndexed$_nth$arity$2(null,i__34861_35464);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35465);


var G__35466 = seq__34858_35461;
var G__35467 = chunk__34859_35462;
var G__35468 = count__34860_35463;
var G__35469 = (i__34861_35464 + (1));
seq__34858_35461 = G__35466;
chunk__34859_35462 = G__35467;
count__34860_35463 = G__35468;
i__34861_35464 = G__35469;
continue;
} else {
var temp__5735__auto___35470 = cljs.core.seq(seq__34858_35461);
if(temp__5735__auto___35470){
var seq__34858_35471__$1 = temp__5735__auto___35470;
if(cljs.core.chunked_seq_QMARK_(seq__34858_35471__$1)){
var c__4609__auto___35472 = cljs.core.chunk_first(seq__34858_35471__$1);
var G__35473 = cljs.core.chunk_rest(seq__34858_35471__$1);
var G__35474 = c__4609__auto___35472;
var G__35475 = cljs.core.count(c__4609__auto___35472);
var G__35476 = (0);
seq__34858_35461 = G__35473;
chunk__34859_35462 = G__35474;
count__34860_35463 = G__35475;
i__34861_35464 = G__35476;
continue;
} else {
var c_35477 = cljs.core.first(seq__34858_35471__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35477);


var G__35478 = cljs.core.next(seq__34858_35471__$1);
var G__35479 = null;
var G__35480 = (0);
var G__35481 = (0);
seq__34858_35461 = G__35478;
chunk__34859_35462 = G__35479;
count__34860_35463 = G__35480;
i__34861_35464 = G__35481;
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
var temp__5733__auto___35482 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35482)){
var next_35483 = temp__5733__auto___35482;
dommy.core.insert_before_BANG_(elem,next_35483);
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
var G__34866 = arguments.length;
switch (G__34866) {
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
var G__34867 = p;
G__34867.removeChild(elem);

return G__34867;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34868){
var vec__34869 = p__34868;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34869,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34869,(1),null);
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
var len__4789__auto___35485 = arguments.length;
var i__4790__auto___35486 = (0);
while(true){
if((i__4790__auto___35486 < len__4789__auto___35485)){
args__4795__auto__.push((arguments[i__4790__auto___35486]));

var G__35487 = (i__4790__auto___35486 + (1));
i__4790__auto___35486 = G__35487;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34872){
var G__34873 = cljs.core.first(seq34872);
var seq34872__$1 = cljs.core.next(seq34872);
var G__34874 = cljs.core.first(seq34872__$1);
var seq34872__$2 = cljs.core.next(seq34872__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34873,G__34874,seq34872__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34875 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34875.cljs$core$IFn$_invoke$arity$1 ? fexpr__34875.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34875.call(null,elem_sel));
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
var len__4789__auto___35488 = arguments.length;
var i__4790__auto___35489 = (0);
while(true){
if((i__4790__auto___35489 < len__4789__auto___35488)){
args__4795__auto__.push((arguments[i__4790__auto___35489]));

var G__35490 = (i__4790__auto___35489 + (1));
i__4790__auto___35489 = G__35490;
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

var vec__34878_35491 = dommy.core.elem_and_selector(elem_sel);
var elem_35492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878_35491,(0),null);
var selector_35493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878_35491,(1),null);
var seq__34881_35494 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34888_35495 = null;
var count__34889_35496 = (0);
var i__34890_35497 = (0);
while(true){
if((i__34890_35497 < count__34889_35496)){
var vec__34950_35498 = chunk__34888_35495.cljs$core$IIndexed$_nth$arity$2(null,i__34890_35497);
var orig_type_35499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34950_35498,(0),null);
var f_35500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34950_35498,(1),null);
var seq__34891_35501 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35499,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35499,cljs.core.identity])));
var chunk__34893_35502 = null;
var count__34894_35503 = (0);
var i__34895_35504 = (0);
while(true){
if((i__34895_35504 < count__34894_35503)){
var vec__34970_35505 = chunk__34893_35502.cljs$core$IIndexed$_nth$arity$2(null,i__34895_35504);
var actual_type_35506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970_35505,(0),null);
var factory_35507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970_35505,(1),null);
var canonical_f_35508 = (function (){var G__34974 = (factory_35507.cljs$core$IFn$_invoke$arity$1 ? factory_35507.cljs$core$IFn$_invoke$arity$1(f_35500) : factory_35507.call(null,f_35500));
var fexpr__34973 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34973.cljs$core$IFn$_invoke$arity$1 ? fexpr__34973.cljs$core$IFn$_invoke$arity$1(G__34974) : fexpr__34973.call(null,G__34974));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35506,f_35500], null),canonical_f_35508], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35506),canonical_f_35508);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35506),canonical_f_35508);
}


var G__35509 = seq__34891_35501;
var G__35510 = chunk__34893_35502;
var G__35511 = count__34894_35503;
var G__35512 = (i__34895_35504 + (1));
seq__34891_35501 = G__35509;
chunk__34893_35502 = G__35510;
count__34894_35503 = G__35511;
i__34895_35504 = G__35512;
continue;
} else {
var temp__5735__auto___35513 = cljs.core.seq(seq__34891_35501);
if(temp__5735__auto___35513){
var seq__34891_35514__$1 = temp__5735__auto___35513;
if(cljs.core.chunked_seq_QMARK_(seq__34891_35514__$1)){
var c__4609__auto___35515 = cljs.core.chunk_first(seq__34891_35514__$1);
var G__35516 = cljs.core.chunk_rest(seq__34891_35514__$1);
var G__35517 = c__4609__auto___35515;
var G__35518 = cljs.core.count(c__4609__auto___35515);
var G__35519 = (0);
seq__34891_35501 = G__35516;
chunk__34893_35502 = G__35517;
count__34894_35503 = G__35518;
i__34895_35504 = G__35519;
continue;
} else {
var vec__34975_35520 = cljs.core.first(seq__34891_35514__$1);
var actual_type_35521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35520,(0),null);
var factory_35522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35520,(1),null);
var canonical_f_35523 = (function (){var G__34979 = (factory_35522.cljs$core$IFn$_invoke$arity$1 ? factory_35522.cljs$core$IFn$_invoke$arity$1(f_35500) : factory_35522.call(null,f_35500));
var fexpr__34978 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35521,f_35500], null),canonical_f_35523], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35521),canonical_f_35523);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35521),canonical_f_35523);
}


var G__35524 = cljs.core.next(seq__34891_35514__$1);
var G__35525 = null;
var G__35526 = (0);
var G__35527 = (0);
seq__34891_35501 = G__35524;
chunk__34893_35502 = G__35525;
count__34894_35503 = G__35526;
i__34895_35504 = G__35527;
continue;
}
} else {
}
}
break;
}

var G__35528 = seq__34881_35494;
var G__35529 = chunk__34888_35495;
var G__35530 = count__34889_35496;
var G__35531 = (i__34890_35497 + (1));
seq__34881_35494 = G__35528;
chunk__34888_35495 = G__35529;
count__34889_35496 = G__35530;
i__34890_35497 = G__35531;
continue;
} else {
var temp__5735__auto___35532 = cljs.core.seq(seq__34881_35494);
if(temp__5735__auto___35532){
var seq__34881_35533__$1 = temp__5735__auto___35532;
if(cljs.core.chunked_seq_QMARK_(seq__34881_35533__$1)){
var c__4609__auto___35534 = cljs.core.chunk_first(seq__34881_35533__$1);
var G__35535 = cljs.core.chunk_rest(seq__34881_35533__$1);
var G__35536 = c__4609__auto___35534;
var G__35537 = cljs.core.count(c__4609__auto___35534);
var G__35538 = (0);
seq__34881_35494 = G__35535;
chunk__34888_35495 = G__35536;
count__34889_35496 = G__35537;
i__34890_35497 = G__35538;
continue;
} else {
var vec__34980_35539 = cljs.core.first(seq__34881_35533__$1);
var orig_type_35540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35539,(0),null);
var f_35541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35539,(1),null);
var seq__34882_35542 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35540,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35540,cljs.core.identity])));
var chunk__34884_35543 = null;
var count__34885_35544 = (0);
var i__34886_35545 = (0);
while(true){
if((i__34886_35545 < count__34885_35544)){
var vec__34994_35546 = chunk__34884_35543.cljs$core$IIndexed$_nth$arity$2(null,i__34886_35545);
var actual_type_35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35546,(0),null);
var factory_35548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35546,(1),null);
var canonical_f_35549 = (function (){var G__34998 = (factory_35548.cljs$core$IFn$_invoke$arity$1 ? factory_35548.cljs$core$IFn$_invoke$arity$1(f_35541) : factory_35548.call(null,f_35541));
var fexpr__34997 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__34997.cljs$core$IFn$_invoke$arity$1 ? fexpr__34997.cljs$core$IFn$_invoke$arity$1(G__34998) : fexpr__34997.call(null,G__34998));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35547,f_35541], null),canonical_f_35549], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35547),canonical_f_35549);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35547),canonical_f_35549);
}


var G__35550 = seq__34882_35542;
var G__35551 = chunk__34884_35543;
var G__35552 = count__34885_35544;
var G__35553 = (i__34886_35545 + (1));
seq__34882_35542 = G__35550;
chunk__34884_35543 = G__35551;
count__34885_35544 = G__35552;
i__34886_35545 = G__35553;
continue;
} else {
var temp__5735__auto___35554__$1 = cljs.core.seq(seq__34882_35542);
if(temp__5735__auto___35554__$1){
var seq__34882_35555__$1 = temp__5735__auto___35554__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34882_35555__$1)){
var c__4609__auto___35556 = cljs.core.chunk_first(seq__34882_35555__$1);
var G__35557 = cljs.core.chunk_rest(seq__34882_35555__$1);
var G__35558 = c__4609__auto___35556;
var G__35559 = cljs.core.count(c__4609__auto___35556);
var G__35560 = (0);
seq__34882_35542 = G__35557;
chunk__34884_35543 = G__35558;
count__34885_35544 = G__35559;
i__34886_35545 = G__35560;
continue;
} else {
var vec__35001_35561 = cljs.core.first(seq__34882_35555__$1);
var actual_type_35562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35561,(0),null);
var factory_35563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35561,(1),null);
var canonical_f_35564 = (function (){var G__35005 = (factory_35563.cljs$core$IFn$_invoke$arity$1 ? factory_35563.cljs$core$IFn$_invoke$arity$1(f_35541) : factory_35563.call(null,f_35541));
var fexpr__35004 = (cljs.core.truth_(selector_35493)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35492,selector_35493):cljs.core.identity);
return (fexpr__35004.cljs$core$IFn$_invoke$arity$1 ? fexpr__35004.cljs$core$IFn$_invoke$arity$1(G__35005) : fexpr__35004.call(null,G__35005));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35492,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35493,actual_type_35562,f_35541], null),canonical_f_35564], 0));

if(cljs.core.truth_(elem_35492.addEventListener)){
elem_35492.addEventListener(cljs.core.name(actual_type_35562),canonical_f_35564);
} else {
elem_35492.attachEvent(cljs.core.name(actual_type_35562),canonical_f_35564);
}


var G__35565 = cljs.core.next(seq__34882_35555__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__34882_35542 = G__35565;
chunk__34884_35543 = G__35566;
count__34885_35544 = G__35567;
i__34886_35545 = G__35568;
continue;
}
} else {
}
}
break;
}

var G__35569 = cljs.core.next(seq__34881_35533__$1);
var G__35570 = null;
var G__35571 = (0);
var G__35572 = (0);
seq__34881_35494 = G__35569;
chunk__34888_35495 = G__35570;
count__34889_35496 = G__35571;
i__34890_35497 = G__35572;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34876){
var G__34877 = cljs.core.first(seq34876);
var seq34876__$1 = cljs.core.next(seq34876);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34877,seq34876__$1);
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
var len__4789__auto___35573 = arguments.length;
var i__4790__auto___35574 = (0);
while(true){
if((i__4790__auto___35574 < len__4789__auto___35573)){
args__4795__auto__.push((arguments[i__4790__auto___35574]));

var G__35575 = (i__4790__auto___35574 + (1));
i__4790__auto___35574 = G__35575;
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

var vec__35010_35576 = dommy.core.elem_and_selector(elem_sel);
var elem_35577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35576,(0),null);
var selector_35578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35576,(1),null);
var seq__35013_35579 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35020_35580 = null;
var count__35021_35581 = (0);
var i__35022_35582 = (0);
while(true){
if((i__35022_35582 < count__35021_35581)){
var vec__35108_35583 = chunk__35020_35580.cljs$core$IIndexed$_nth$arity$2(null,i__35022_35582);
var orig_type_35584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35583,(0),null);
var f_35585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35583,(1),null);
var seq__35023_35586 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35584,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35584,cljs.core.identity])));
var chunk__35025_35587 = null;
var count__35026_35588 = (0);
var i__35027_35589 = (0);
while(true){
if((i__35027_35589 < count__35026_35588)){
var vec__35120_35590 = chunk__35025_35587.cljs$core$IIndexed$_nth$arity$2(null,i__35027_35589);
var actual_type_35591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35120_35590,(0),null);
var __35592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35120_35590,(1),null);
var keys_35595 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35578,actual_type_35591,f_35585], null);
var canonical_f_35596 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35577),keys_35595);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35577,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35595], 0));

if(cljs.core.truth_(elem_35577.removeEventListener)){
elem_35577.removeEventListener(cljs.core.name(actual_type_35591),canonical_f_35596);
} else {
elem_35577.detachEvent(cljs.core.name(actual_type_35591),canonical_f_35596);
}


var G__35598 = seq__35023_35586;
var G__35599 = chunk__35025_35587;
var G__35600 = count__35026_35588;
var G__35601 = (i__35027_35589 + (1));
seq__35023_35586 = G__35598;
chunk__35025_35587 = G__35599;
count__35026_35588 = G__35600;
i__35027_35589 = G__35601;
continue;
} else {
var temp__5735__auto___35603 = cljs.core.seq(seq__35023_35586);
if(temp__5735__auto___35603){
var seq__35023_35604__$1 = temp__5735__auto___35603;
if(cljs.core.chunked_seq_QMARK_(seq__35023_35604__$1)){
var c__4609__auto___35605 = cljs.core.chunk_first(seq__35023_35604__$1);
var G__35607 = cljs.core.chunk_rest(seq__35023_35604__$1);
var G__35608 = c__4609__auto___35605;
var G__35609 = cljs.core.count(c__4609__auto___35605);
var G__35610 = (0);
seq__35023_35586 = G__35607;
chunk__35025_35587 = G__35608;
count__35026_35588 = G__35609;
i__35027_35589 = G__35610;
continue;
} else {
var vec__35124_35611 = cljs.core.first(seq__35023_35604__$1);
var actual_type_35612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124_35611,(0),null);
var __35613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124_35611,(1),null);
var keys_35615 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35578,actual_type_35612,f_35585], null);
var canonical_f_35616 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35577),keys_35615);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35577,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35615], 0));

if(cljs.core.truth_(elem_35577.removeEventListener)){
elem_35577.removeEventListener(cljs.core.name(actual_type_35612),canonical_f_35616);
} else {
elem_35577.detachEvent(cljs.core.name(actual_type_35612),canonical_f_35616);
}


var G__35617 = cljs.core.next(seq__35023_35604__$1);
var G__35618 = null;
var G__35619 = (0);
var G__35620 = (0);
seq__35023_35586 = G__35617;
chunk__35025_35587 = G__35618;
count__35026_35588 = G__35619;
i__35027_35589 = G__35620;
continue;
}
} else {
}
}
break;
}

var G__35621 = seq__35013_35579;
var G__35622 = chunk__35020_35580;
var G__35623 = count__35021_35581;
var G__35624 = (i__35022_35582 + (1));
seq__35013_35579 = G__35621;
chunk__35020_35580 = G__35622;
count__35021_35581 = G__35623;
i__35022_35582 = G__35624;
continue;
} else {
var temp__5735__auto___35625 = cljs.core.seq(seq__35013_35579);
if(temp__5735__auto___35625){
var seq__35013_35626__$1 = temp__5735__auto___35625;
if(cljs.core.chunked_seq_QMARK_(seq__35013_35626__$1)){
var c__4609__auto___35627 = cljs.core.chunk_first(seq__35013_35626__$1);
var G__35628 = cljs.core.chunk_rest(seq__35013_35626__$1);
var G__35629 = c__4609__auto___35627;
var G__35630 = cljs.core.count(c__4609__auto___35627);
var G__35631 = (0);
seq__35013_35579 = G__35628;
chunk__35020_35580 = G__35629;
count__35021_35581 = G__35630;
i__35022_35582 = G__35631;
continue;
} else {
var vec__35128_35632 = cljs.core.first(seq__35013_35626__$1);
var orig_type_35633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35128_35632,(0),null);
var f_35634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35128_35632,(1),null);
var seq__35014_35635 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35633,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35633,cljs.core.identity])));
var chunk__35016_35636 = null;
var count__35017_35637 = (0);
var i__35018_35638 = (0);
while(true){
if((i__35018_35638 < count__35017_35637)){
var vec__35137_35640 = chunk__35016_35636.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35638);
var actual_type_35641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137_35640,(0),null);
var __35642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137_35640,(1),null);
var keys_35646 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35578,actual_type_35641,f_35634], null);
var canonical_f_35647 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35577),keys_35646);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35577,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35646], 0));

if(cljs.core.truth_(elem_35577.removeEventListener)){
elem_35577.removeEventListener(cljs.core.name(actual_type_35641),canonical_f_35647);
} else {
elem_35577.detachEvent(cljs.core.name(actual_type_35641),canonical_f_35647);
}


var G__35648 = seq__35014_35635;
var G__35649 = chunk__35016_35636;
var G__35650 = count__35017_35637;
var G__35651 = (i__35018_35638 + (1));
seq__35014_35635 = G__35648;
chunk__35016_35636 = G__35649;
count__35017_35637 = G__35650;
i__35018_35638 = G__35651;
continue;
} else {
var temp__5735__auto___35652__$1 = cljs.core.seq(seq__35014_35635);
if(temp__5735__auto___35652__$1){
var seq__35014_35653__$1 = temp__5735__auto___35652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35014_35653__$1)){
var c__4609__auto___35656 = cljs.core.chunk_first(seq__35014_35653__$1);
var G__35657 = cljs.core.chunk_rest(seq__35014_35653__$1);
var G__35658 = c__4609__auto___35656;
var G__35659 = cljs.core.count(c__4609__auto___35656);
var G__35660 = (0);
seq__35014_35635 = G__35657;
chunk__35016_35636 = G__35658;
count__35017_35637 = G__35659;
i__35018_35638 = G__35660;
continue;
} else {
var vec__35140_35662 = cljs.core.first(seq__35014_35653__$1);
var actual_type_35663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35662,(0),null);
var __35664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35662,(1),null);
var keys_35665 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35578,actual_type_35663,f_35634], null);
var canonical_f_35666 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35577),keys_35665);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35577,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35665], 0));

if(cljs.core.truth_(elem_35577.removeEventListener)){
elem_35577.removeEventListener(cljs.core.name(actual_type_35663),canonical_f_35666);
} else {
elem_35577.detachEvent(cljs.core.name(actual_type_35663),canonical_f_35666);
}


var G__35667 = cljs.core.next(seq__35014_35653__$1);
var G__35668 = null;
var G__35669 = (0);
var G__35670 = (0);
seq__35014_35635 = G__35667;
chunk__35016_35636 = G__35668;
count__35017_35637 = G__35669;
i__35018_35638 = G__35670;
continue;
}
} else {
}
}
break;
}

var G__35671 = cljs.core.next(seq__35013_35626__$1);
var G__35672 = null;
var G__35673 = (0);
var G__35674 = (0);
seq__35013_35579 = G__35671;
chunk__35020_35580 = G__35672;
count__35021_35581 = G__35673;
i__35022_35582 = G__35674;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35008){
var G__35009 = cljs.core.first(seq35008);
var seq35008__$1 = cljs.core.next(seq35008);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35009,seq35008__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35682 = arguments.length;
var i__4790__auto___35683 = (0);
while(true){
if((i__4790__auto___35683 < len__4789__auto___35682)){
args__4795__auto__.push((arguments[i__4790__auto___35683]));

var G__35684 = (i__4790__auto___35683 + (1));
i__4790__auto___35683 = G__35684;
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

var vec__35145_35687 = dommy.core.elem_and_selector(elem_sel);
var elem_35688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35145_35687,(0),null);
var selector_35689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35145_35687,(1),null);
var seq__35148_35692 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35149_35693 = null;
var count__35150_35694 = (0);
var i__35151_35695 = (0);
while(true){
if((i__35151_35695 < count__35150_35694)){
var vec__35158_35696 = chunk__35149_35693.cljs$core$IIndexed$_nth$arity$2(null,i__35151_35695);
var type_35697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35158_35696,(0),null);
var f_35698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35158_35696,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35697,((function (seq__35148_35692,chunk__35149_35693,count__35150_35694,i__35151_35695,vec__35158_35696,type_35697,f_35698,vec__35145_35687,elem_35688,selector_35689){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35697,dommy$core$this_fn], 0));

return (f_35698.cljs$core$IFn$_invoke$arity$1 ? f_35698.cljs$core$IFn$_invoke$arity$1(e) : f_35698.call(null,e));
});})(seq__35148_35692,chunk__35149_35693,count__35150_35694,i__35151_35695,vec__35158_35696,type_35697,f_35698,vec__35145_35687,elem_35688,selector_35689))
], 0));


var G__35704 = seq__35148_35692;
var G__35705 = chunk__35149_35693;
var G__35706 = count__35150_35694;
var G__35707 = (i__35151_35695 + (1));
seq__35148_35692 = G__35704;
chunk__35149_35693 = G__35705;
count__35150_35694 = G__35706;
i__35151_35695 = G__35707;
continue;
} else {
var temp__5735__auto___35709 = cljs.core.seq(seq__35148_35692);
if(temp__5735__auto___35709){
var seq__35148_35710__$1 = temp__5735__auto___35709;
if(cljs.core.chunked_seq_QMARK_(seq__35148_35710__$1)){
var c__4609__auto___35711 = cljs.core.chunk_first(seq__35148_35710__$1);
var G__35712 = cljs.core.chunk_rest(seq__35148_35710__$1);
var G__35713 = c__4609__auto___35711;
var G__35714 = cljs.core.count(c__4609__auto___35711);
var G__35715 = (0);
seq__35148_35692 = G__35712;
chunk__35149_35693 = G__35713;
count__35150_35694 = G__35714;
i__35151_35695 = G__35715;
continue;
} else {
var vec__35161_35717 = cljs.core.first(seq__35148_35710__$1);
var type_35718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35161_35717,(0),null);
var f_35719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35161_35717,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35718,((function (seq__35148_35692,chunk__35149_35693,count__35150_35694,i__35151_35695,vec__35161_35717,type_35718,f_35719,seq__35148_35710__$1,temp__5735__auto___35709,vec__35145_35687,elem_35688,selector_35689){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35718,dommy$core$this_fn], 0));

return (f_35719.cljs$core$IFn$_invoke$arity$1 ? f_35719.cljs$core$IFn$_invoke$arity$1(e) : f_35719.call(null,e));
});})(seq__35148_35692,chunk__35149_35693,count__35150_35694,i__35151_35695,vec__35161_35717,type_35718,f_35719,seq__35148_35710__$1,temp__5735__auto___35709,vec__35145_35687,elem_35688,selector_35689))
], 0));


var G__35724 = cljs.core.next(seq__35148_35710__$1);
var G__35725 = null;
var G__35726 = (0);
var G__35727 = (0);
seq__35148_35692 = G__35724;
chunk__35149_35693 = G__35725;
count__35150_35694 = G__35726;
i__35151_35695 = G__35727;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35143){
var G__35144 = cljs.core.first(seq35143);
var seq35143__$1 = cljs.core.next(seq35143);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35144,seq35143__$1);
}));


//# sourceMappingURL=dommy.core.js.map
