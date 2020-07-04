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
var len__4789__auto___35095 = arguments.length;
var i__4790__auto___35096 = (0);
while(true){
if((i__4790__auto___35096 < len__4789__auto___35095)){
args__4795__auto__.push((arguments[i__4790__auto___35096]));

var G__35097 = (i__4790__auto___35096 + (1));
i__4790__auto___35096 = G__35097;
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
var seq__34712_35101 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34713_35102 = null;
var count__34714_35103 = (0);
var i__34715_35104 = (0);
while(true){
if((i__34715_35104 < count__34714_35103)){
var vec__34722_35106 = chunk__34713_35102.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35104);
var k_35107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35106,(0),null);
var v_35108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35106,(1),null);
style.setProperty(dommy.utils.as_str(k_35107),v_35108);


var G__35109 = seq__34712_35101;
var G__35110 = chunk__34713_35102;
var G__35111 = count__34714_35103;
var G__35112 = (i__34715_35104 + (1));
seq__34712_35101 = G__35109;
chunk__34713_35102 = G__35110;
count__34714_35103 = G__35111;
i__34715_35104 = G__35112;
continue;
} else {
var temp__5735__auto___35113 = cljs.core.seq(seq__34712_35101);
if(temp__5735__auto___35113){
var seq__34712_35114__$1 = temp__5735__auto___35113;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35114__$1)){
var c__4609__auto___35115 = cljs.core.chunk_first(seq__34712_35114__$1);
var G__35116 = cljs.core.chunk_rest(seq__34712_35114__$1);
var G__35117 = c__4609__auto___35115;
var G__35118 = cljs.core.count(c__4609__auto___35115);
var G__35119 = (0);
seq__34712_35101 = G__35116;
chunk__34713_35102 = G__35117;
count__34714_35103 = G__35118;
i__34715_35104 = G__35119;
continue;
} else {
var vec__34725_35120 = cljs.core.first(seq__34712_35114__$1);
var k_35121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35120,(0),null);
var v_35122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35120,(1),null);
style.setProperty(dommy.utils.as_str(k_35121),v_35122);


var G__35123 = cljs.core.next(seq__34712_35114__$1);
var G__35124 = null;
var G__35125 = (0);
var G__35126 = (0);
seq__34712_35101 = G__35123;
chunk__34713_35102 = G__35124;
count__34714_35103 = G__35125;
i__34715_35104 = G__35126;
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
var len__4789__auto___35129 = arguments.length;
var i__4790__auto___35130 = (0);
while(true){
if((i__4790__auto___35130 < len__4789__auto___35129)){
args__4795__auto__.push((arguments[i__4790__auto___35130]));

var G__35135 = (i__4790__auto___35130 + (1));
i__4790__auto___35130 = G__35135;
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
var seq__34730_35143 = cljs.core.seq(keywords);
var chunk__34731_35144 = null;
var count__34732_35145 = (0);
var i__34733_35146 = (0);
while(true){
if((i__34733_35146 < count__34732_35145)){
var kw_35152 = chunk__34731_35144.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35146);
style.removeProperty(dommy.utils.as_str(kw_35152));


var G__35154 = seq__34730_35143;
var G__35155 = chunk__34731_35144;
var G__35156 = count__34732_35145;
var G__35157 = (i__34733_35146 + (1));
seq__34730_35143 = G__35154;
chunk__34731_35144 = G__35155;
count__34732_35145 = G__35156;
i__34733_35146 = G__35157;
continue;
} else {
var temp__5735__auto___35162 = cljs.core.seq(seq__34730_35143);
if(temp__5735__auto___35162){
var seq__34730_35163__$1 = temp__5735__auto___35162;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35163__$1)){
var c__4609__auto___35164 = cljs.core.chunk_first(seq__34730_35163__$1);
var G__35165 = cljs.core.chunk_rest(seq__34730_35163__$1);
var G__35166 = c__4609__auto___35164;
var G__35167 = cljs.core.count(c__4609__auto___35164);
var G__35168 = (0);
seq__34730_35143 = G__35165;
chunk__34731_35144 = G__35166;
count__34732_35145 = G__35167;
i__34733_35146 = G__35168;
continue;
} else {
var kw_35169 = cljs.core.first(seq__34730_35163__$1);
style.removeProperty(dommy.utils.as_str(kw_35169));


var G__35170 = cljs.core.next(seq__34730_35163__$1);
var G__35171 = null;
var G__35172 = (0);
var G__35173 = (0);
seq__34730_35143 = G__35170;
chunk__34731_35144 = G__35171;
count__34732_35145 = G__35172;
i__34733_35146 = G__35173;
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
var len__4789__auto___35174 = arguments.length;
var i__4790__auto___35175 = (0);
while(true){
if((i__4790__auto___35175 < len__4789__auto___35174)){
args__4795__auto__.push((arguments[i__4790__auto___35175]));

var G__35176 = (i__4790__auto___35175 + (1));
i__4790__auto___35175 = G__35176;
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

var seq__34736_35177 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34737_35178 = null;
var count__34738_35179 = (0);
var i__34739_35180 = (0);
while(true){
if((i__34739_35180 < count__34738_35179)){
var vec__34746_35181 = chunk__34737_35178.cljs$core$IIndexed$_nth$arity$2(null,i__34739_35180);
var k_35182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746_35181,(0),null);
var v_35183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746_35181,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35182,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35183),"px"].join('')], 0));


var G__35185 = seq__34736_35177;
var G__35186 = chunk__34737_35178;
var G__35187 = count__34738_35179;
var G__35188 = (i__34739_35180 + (1));
seq__34736_35177 = G__35185;
chunk__34737_35178 = G__35186;
count__34738_35179 = G__35187;
i__34739_35180 = G__35188;
continue;
} else {
var temp__5735__auto___35189 = cljs.core.seq(seq__34736_35177);
if(temp__5735__auto___35189){
var seq__34736_35194__$1 = temp__5735__auto___35189;
if(cljs.core.chunked_seq_QMARK_(seq__34736_35194__$1)){
var c__4609__auto___35195 = cljs.core.chunk_first(seq__34736_35194__$1);
var G__35197 = cljs.core.chunk_rest(seq__34736_35194__$1);
var G__35198 = c__4609__auto___35195;
var G__35199 = cljs.core.count(c__4609__auto___35195);
var G__35200 = (0);
seq__34736_35177 = G__35197;
chunk__34737_35178 = G__35198;
count__34738_35179 = G__35199;
i__34739_35180 = G__35200;
continue;
} else {
var vec__34750_35201 = cljs.core.first(seq__34736_35194__$1);
var k_35202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35201,(0),null);
var v_35203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35201,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35202,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35203),"px"].join('')], 0));


var G__35208 = cljs.core.next(seq__34736_35194__$1);
var G__35209 = null;
var G__35210 = (0);
var G__35211 = (0);
seq__34736_35177 = G__35208;
chunk__34737_35178 = G__35209;
count__34738_35179 = G__35210;
i__34739_35180 = G__35211;
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
var len__4789__auto___35225 = arguments.length;
var i__4790__auto___35226 = (0);
while(true){
if((i__4790__auto___35226 < len__4789__auto___35225)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35226]));

var G__35227 = (i__4790__auto___35226 + (1));
i__4790__auto___35226 = G__35227;
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

var seq__34761_35228 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35229 = null;
var count__34763_35230 = (0);
var i__34764_35231 = (0);
while(true){
if((i__34764_35231 < count__34763_35230)){
var vec__34771_35232 = chunk__34762_35229.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35231);
var k_35233__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35232,(0),null);
var v_35234__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35232,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35233__$1,v_35234__$1);


var G__35235 = seq__34761_35228;
var G__35236 = chunk__34762_35229;
var G__35237 = count__34763_35230;
var G__35238 = (i__34764_35231 + (1));
seq__34761_35228 = G__35235;
chunk__34762_35229 = G__35236;
count__34763_35230 = G__35237;
i__34764_35231 = G__35238;
continue;
} else {
var temp__5735__auto___35239 = cljs.core.seq(seq__34761_35228);
if(temp__5735__auto___35239){
var seq__34761_35241__$1 = temp__5735__auto___35239;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35241__$1)){
var c__4609__auto___35242 = cljs.core.chunk_first(seq__34761_35241__$1);
var G__35245 = cljs.core.chunk_rest(seq__34761_35241__$1);
var G__35246 = c__4609__auto___35242;
var G__35247 = cljs.core.count(c__4609__auto___35242);
var G__35248 = (0);
seq__34761_35228 = G__35245;
chunk__34762_35229 = G__35246;
count__34763_35230 = G__35247;
i__34764_35231 = G__35248;
continue;
} else {
var vec__34774_35249 = cljs.core.first(seq__34761_35241__$1);
var k_35250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35249,(0),null);
var v_35251__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35249,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35250__$1,v_35251__$1);


var G__35252 = cljs.core.next(seq__34761_35241__$1);
var G__35253 = null;
var G__35254 = (0);
var G__35255 = (0);
seq__34761_35228 = G__35252;
chunk__34762_35229 = G__35253;
count__34763_35230 = G__35254;
i__34764_35231 = G__35255;
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
var len__4789__auto___35257 = arguments.length;
var i__4790__auto___35258 = (0);
while(true){
if((i__4790__auto___35258 < len__4789__auto___35257)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35258]));

var G__35259 = (i__4790__auto___35258 + (1));
i__4790__auto___35258 = G__35259;
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
var k_35261__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(k_35261__$1) : fexpr__34782.call(null,k_35261__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35261__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34783_35263 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34784_35264 = null;
var count__34785_35265 = (0);
var i__34786_35266 = (0);
while(true){
if((i__34786_35266 < count__34785_35265)){
var k_35267__$1 = chunk__34784_35264.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35266);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35267__$1);


var G__35268 = seq__34783_35263;
var G__35269 = chunk__34784_35264;
var G__35270 = count__34785_35265;
var G__35271 = (i__34786_35266 + (1));
seq__34783_35263 = G__35268;
chunk__34784_35264 = G__35269;
count__34785_35265 = G__35270;
i__34786_35266 = G__35271;
continue;
} else {
var temp__5735__auto___35272 = cljs.core.seq(seq__34783_35263);
if(temp__5735__auto___35272){
var seq__34783_35273__$1 = temp__5735__auto___35272;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35273__$1)){
var c__4609__auto___35274 = cljs.core.chunk_first(seq__34783_35273__$1);
var G__35275 = cljs.core.chunk_rest(seq__34783_35273__$1);
var G__35276 = c__4609__auto___35274;
var G__35277 = cljs.core.count(c__4609__auto___35274);
var G__35278 = (0);
seq__34783_35263 = G__35275;
chunk__34784_35264 = G__35276;
count__34785_35265 = G__35277;
i__34786_35266 = G__35278;
continue;
} else {
var k_35279__$1 = cljs.core.first(seq__34783_35273__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35279__$1);


var G__35280 = cljs.core.next(seq__34783_35273__$1);
var G__35281 = null;
var G__35282 = (0);
var G__35283 = (0);
seq__34783_35263 = G__35280;
chunk__34784_35264 = G__35281;
count__34785_35265 = G__35282;
i__34786_35266 = G__35283;
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
var len__4789__auto___35286 = arguments.length;
var i__4790__auto___35287 = (0);
while(true){
if((i__4790__auto___35287 < len__4789__auto___35286)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35287]));

var G__35288 = (i__4790__auto___35287 + (1));
i__4790__auto___35287 = G__35288;
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
var temp__5733__auto___35289 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35289)){
var class_list_35290 = temp__5733__auto___35289;
var seq__34794_35291 = cljs.core.seq(classes__$1);
var chunk__34795_35292 = null;
var count__34796_35293 = (0);
var i__34797_35294 = (0);
while(true){
if((i__34797_35294 < count__34796_35293)){
var c_35295 = chunk__34795_35292.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35294);
class_list_35290.add(c_35295);


var G__35296 = seq__34794_35291;
var G__35297 = chunk__34795_35292;
var G__35298 = count__34796_35293;
var G__35299 = (i__34797_35294 + (1));
seq__34794_35291 = G__35296;
chunk__34795_35292 = G__35297;
count__34796_35293 = G__35298;
i__34797_35294 = G__35299;
continue;
} else {
var temp__5735__auto___35300 = cljs.core.seq(seq__34794_35291);
if(temp__5735__auto___35300){
var seq__34794_35301__$1 = temp__5735__auto___35300;
if(cljs.core.chunked_seq_QMARK_(seq__34794_35301__$1)){
var c__4609__auto___35302 = cljs.core.chunk_first(seq__34794_35301__$1);
var G__35303 = cljs.core.chunk_rest(seq__34794_35301__$1);
var G__35304 = c__4609__auto___35302;
var G__35305 = cljs.core.count(c__4609__auto___35302);
var G__35306 = (0);
seq__34794_35291 = G__35303;
chunk__34795_35292 = G__35304;
count__34796_35293 = G__35305;
i__34797_35294 = G__35306;
continue;
} else {
var c_35307 = cljs.core.first(seq__34794_35301__$1);
class_list_35290.add(c_35307);


var G__35308 = cljs.core.next(seq__34794_35301__$1);
var G__35309 = null;
var G__35310 = (0);
var G__35311 = (0);
seq__34794_35291 = G__35308;
chunk__34795_35292 = G__35309;
count__34796_35293 = G__35310;
i__34797_35294 = G__35311;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34798_35312 = cljs.core.seq(classes__$1);
var chunk__34799_35313 = null;
var count__34800_35314 = (0);
var i__34801_35315 = (0);
while(true){
if((i__34801_35315 < count__34800_35314)){
var c_35316 = chunk__34799_35313.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35315);
var class_name_35317 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35317,c_35316))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35317 === ""))?c_35316:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35317)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35316)].join('')));
}


var G__35318 = seq__34798_35312;
var G__35319 = chunk__34799_35313;
var G__35320 = count__34800_35314;
var G__35321 = (i__34801_35315 + (1));
seq__34798_35312 = G__35318;
chunk__34799_35313 = G__35319;
count__34800_35314 = G__35320;
i__34801_35315 = G__35321;
continue;
} else {
var temp__5735__auto___35322 = cljs.core.seq(seq__34798_35312);
if(temp__5735__auto___35322){
var seq__34798_35323__$1 = temp__5735__auto___35322;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35323__$1)){
var c__4609__auto___35324 = cljs.core.chunk_first(seq__34798_35323__$1);
var G__35325 = cljs.core.chunk_rest(seq__34798_35323__$1);
var G__35326 = c__4609__auto___35324;
var G__35327 = cljs.core.count(c__4609__auto___35324);
var G__35328 = (0);
seq__34798_35312 = G__35325;
chunk__34799_35313 = G__35326;
count__34800_35314 = G__35327;
i__34801_35315 = G__35328;
continue;
} else {
var c_35329 = cljs.core.first(seq__34798_35323__$1);
var class_name_35330 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35330,c_35329))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35330 === ""))?c_35329:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35330)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35329)].join('')));
}


var G__35331 = cljs.core.next(seq__34798_35323__$1);
var G__35332 = null;
var G__35333 = (0);
var G__35334 = (0);
seq__34798_35312 = G__35331;
chunk__34799_35313 = G__35332;
count__34800_35314 = G__35333;
i__34801_35315 = G__35334;
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
var seq__34802_35335 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34803_35336 = null;
var count__34804_35337 = (0);
var i__34805_35338 = (0);
while(true){
if((i__34805_35338 < count__34804_35337)){
var c_35339 = chunk__34803_35336.cljs$core$IIndexed$_nth$arity$2(null,i__34805_35338);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35339);


var G__35340 = seq__34802_35335;
var G__35341 = chunk__34803_35336;
var G__35342 = count__34804_35337;
var G__35343 = (i__34805_35338 + (1));
seq__34802_35335 = G__35340;
chunk__34803_35336 = G__35341;
count__34804_35337 = G__35342;
i__34805_35338 = G__35343;
continue;
} else {
var temp__5735__auto___35344 = cljs.core.seq(seq__34802_35335);
if(temp__5735__auto___35344){
var seq__34802_35345__$1 = temp__5735__auto___35344;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35345__$1)){
var c__4609__auto___35346 = cljs.core.chunk_first(seq__34802_35345__$1);
var G__35347 = cljs.core.chunk_rest(seq__34802_35345__$1);
var G__35348 = c__4609__auto___35346;
var G__35349 = cljs.core.count(c__4609__auto___35346);
var G__35350 = (0);
seq__34802_35335 = G__35347;
chunk__34803_35336 = G__35348;
count__34804_35337 = G__35349;
i__34805_35338 = G__35350;
continue;
} else {
var c_35351 = cljs.core.first(seq__34802_35345__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35351);


var G__35352 = cljs.core.next(seq__34802_35345__$1);
var G__35353 = null;
var G__35354 = (0);
var G__35355 = (0);
seq__34802_35335 = G__35352;
chunk__34803_35336 = G__35353;
count__34804_35337 = G__35354;
i__34805_35338 = G__35355;
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
var len__4789__auto___35357 = arguments.length;
var i__4790__auto___35358 = (0);
while(true){
if((i__4790__auto___35358 < len__4789__auto___35357)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35358]));

var G__35359 = (i__4790__auto___35358 + (1));
i__4790__auto___35358 = G__35359;
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
var temp__5733__auto___35362 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35362)){
var class_list_35363 = temp__5733__auto___35362;
class_list_35363.remove(c__$1);
} else {
var class_name_35364 = dommy.core.class$(elem);
var new_class_name_35365 = dommy.utils.remove_class_str(class_name_35364,c__$1);
if((class_name_35364 === new_class_name_35365)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35365);
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


var G__35366 = seq__34811;
var G__35367 = chunk__34812;
var G__35368 = count__34813;
var G__35369 = (i__34814 + (1));
seq__34811 = G__35366;
chunk__34812 = G__35367;
count__34813 = G__35368;
i__34814 = G__35369;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34811);
if(temp__5735__auto__){
var seq__34811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35370 = cljs.core.chunk_rest(seq__34811__$1);
var G__35371 = c__4609__auto__;
var G__35372 = cljs.core.count(c__4609__auto__);
var G__35373 = (0);
seq__34811 = G__35370;
chunk__34812 = G__35371;
count__34813 = G__35372;
i__34814 = G__35373;
continue;
} else {
var c = cljs.core.first(seq__34811__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35374 = cljs.core.next(seq__34811__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__34811 = G__35374;
chunk__34812 = G__35375;
count__34813 = G__35376;
i__34814 = G__35377;
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
var temp__5733__auto___35381 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35381)){
var class_list_35382 = temp__5733__auto___35381;
class_list_35382.toggle(c__$1);
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
var G__34820 = arguments.length;
switch (G__34820) {
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
var G__34825 = arguments.length;
switch (G__34825) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35388 = arguments.length;
var i__4790__auto___35389 = (0);
while(true){
if((i__4790__auto___35389 < len__4789__auto___35388)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35389]));

var G__35390 = (i__4790__auto___35389 + (1));
i__4790__auto___35389 = G__35390;
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
var G__34826 = parent;
G__34826.appendChild(child);

return G__34826;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34827_35391 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34828_35392 = null;
var count__34829_35393 = (0);
var i__34830_35394 = (0);
while(true){
if((i__34830_35394 < count__34829_35393)){
var c_35395 = chunk__34828_35392.cljs$core$IIndexed$_nth$arity$2(null,i__34830_35394);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35395);


var G__35396 = seq__34827_35391;
var G__35397 = chunk__34828_35392;
var G__35398 = count__34829_35393;
var G__35399 = (i__34830_35394 + (1));
seq__34827_35391 = G__35396;
chunk__34828_35392 = G__35397;
count__34829_35393 = G__35398;
i__34830_35394 = G__35399;
continue;
} else {
var temp__5735__auto___35400 = cljs.core.seq(seq__34827_35391);
if(temp__5735__auto___35400){
var seq__34827_35401__$1 = temp__5735__auto___35400;
if(cljs.core.chunked_seq_QMARK_(seq__34827_35401__$1)){
var c__4609__auto___35402 = cljs.core.chunk_first(seq__34827_35401__$1);
var G__35403 = cljs.core.chunk_rest(seq__34827_35401__$1);
var G__35404 = c__4609__auto___35402;
var G__35405 = cljs.core.count(c__4609__auto___35402);
var G__35406 = (0);
seq__34827_35391 = G__35403;
chunk__34828_35392 = G__35404;
count__34829_35393 = G__35405;
i__34830_35394 = G__35406;
continue;
} else {
var c_35407 = cljs.core.first(seq__34827_35401__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35407);


var G__35408 = cljs.core.next(seq__34827_35401__$1);
var G__35409 = null;
var G__35410 = (0);
var G__35411 = (0);
seq__34827_35391 = G__35408;
chunk__34828_35392 = G__35409;
count__34829_35393 = G__35410;
i__34830_35394 = G__35411;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34822){
var G__34823 = cljs.core.first(seq34822);
var seq34822__$1 = cljs.core.next(seq34822);
var G__34824 = cljs.core.first(seq34822__$1);
var seq34822__$2 = cljs.core.next(seq34822__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34823,G__34824,seq34822__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34835 = arguments.length;
switch (G__34835) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35413 = arguments.length;
var i__4790__auto___35414 = (0);
while(true){
if((i__4790__auto___35414 < len__4789__auto___35413)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35414]));

var G__35415 = (i__4790__auto___35414 + (1));
i__4790__auto___35414 = G__35415;
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
var G__34837 = parent;
G__34837.insertBefore(child,parent.firstChild);

return G__34837;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34838_35416 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34839_35417 = null;
var count__34840_35418 = (0);
var i__34841_35419 = (0);
while(true){
if((i__34841_35419 < count__34840_35418)){
var c_35420 = chunk__34839_35417.cljs$core$IIndexed$_nth$arity$2(null,i__34841_35419);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35420);


var G__35421 = seq__34838_35416;
var G__35422 = chunk__34839_35417;
var G__35423 = count__34840_35418;
var G__35424 = (i__34841_35419 + (1));
seq__34838_35416 = G__35421;
chunk__34839_35417 = G__35422;
count__34840_35418 = G__35423;
i__34841_35419 = G__35424;
continue;
} else {
var temp__5735__auto___35425 = cljs.core.seq(seq__34838_35416);
if(temp__5735__auto___35425){
var seq__34838_35426__$1 = temp__5735__auto___35425;
if(cljs.core.chunked_seq_QMARK_(seq__34838_35426__$1)){
var c__4609__auto___35427 = cljs.core.chunk_first(seq__34838_35426__$1);
var G__35428 = cljs.core.chunk_rest(seq__34838_35426__$1);
var G__35429 = c__4609__auto___35427;
var G__35430 = cljs.core.count(c__4609__auto___35427);
var G__35431 = (0);
seq__34838_35416 = G__35428;
chunk__34839_35417 = G__35429;
count__34840_35418 = G__35430;
i__34841_35419 = G__35431;
continue;
} else {
var c_35432 = cljs.core.first(seq__34838_35426__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35432);


var G__35433 = cljs.core.next(seq__34838_35426__$1);
var G__35434 = null;
var G__35435 = (0);
var G__35436 = (0);
seq__34838_35416 = G__35433;
chunk__34839_35417 = G__35434;
count__34840_35418 = G__35435;
i__34841_35419 = G__35436;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34832){
var G__34833 = cljs.core.first(seq34832);
var seq34832__$1 = cljs.core.next(seq34832);
var G__34834 = cljs.core.first(seq34832__$1);
var seq34832__$2 = cljs.core.next(seq34832__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34833,G__34834,seq34832__$2);
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
var temp__5733__auto___35437 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35437)){
var next_35438 = temp__5733__auto___35437;
dommy.core.insert_before_BANG_(elem,next_35438);
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
var len__4789__auto___35440 = arguments.length;
var i__4790__auto___35441 = (0);
while(true){
if((i__4790__auto___35441 < len__4789__auto___35440)){
args__4795__auto__.push((arguments[i__4790__auto___35441]));

var G__35442 = (i__4790__auto___35441 + (1));
i__4790__auto___35441 = G__35442;
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
var len__4789__auto___35445 = arguments.length;
var i__4790__auto___35446 = (0);
while(true){
if((i__4790__auto___35446 < len__4789__auto___35445)){
args__4795__auto__.push((arguments[i__4790__auto___35446]));

var G__35447 = (i__4790__auto___35446 + (1));
i__4790__auto___35446 = G__35447;
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

var vec__34857_35448 = dommy.core.elem_and_selector(elem_sel);
var elem_35449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35448,(0),null);
var selector_35450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35448,(1),null);
var seq__34860_35452 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34867_35453 = null;
var count__34868_35454 = (0);
var i__34869_35455 = (0);
while(true){
if((i__34869_35455 < count__34868_35454)){
var vec__34922_35456 = chunk__34867_35453.cljs$core$IIndexed$_nth$arity$2(null,i__34869_35455);
var orig_type_35457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922_35456,(0),null);
var f_35458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922_35456,(1),null);
var seq__34870_35460 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35457,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35457,cljs.core.identity])));
var chunk__34872_35461 = null;
var count__34873_35462 = (0);
var i__34874_35463 = (0);
while(true){
if((i__34874_35463 < count__34873_35462)){
var vec__34938_35465 = chunk__34872_35461.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35463);
var actual_type_35466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34938_35465,(0),null);
var factory_35467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34938_35465,(1),null);
var canonical_f_35469 = (function (){var G__34942 = (factory_35467.cljs$core$IFn$_invoke$arity$1 ? factory_35467.cljs$core$IFn$_invoke$arity$1(f_35458) : factory_35467.call(null,f_35458));
var fexpr__34941 = (cljs.core.truth_(selector_35450)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35449,selector_35450):cljs.core.identity);
return (fexpr__34941.cljs$core$IFn$_invoke$arity$1 ? fexpr__34941.cljs$core$IFn$_invoke$arity$1(G__34942) : fexpr__34941.call(null,G__34942));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35449,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35450,actual_type_35466,f_35458], null),canonical_f_35469], 0));

if(cljs.core.truth_(elem_35449.addEventListener)){
elem_35449.addEventListener(cljs.core.name(actual_type_35466),canonical_f_35469);
} else {
elem_35449.attachEvent(cljs.core.name(actual_type_35466),canonical_f_35469);
}


var G__35470 = seq__34870_35460;
var G__35471 = chunk__34872_35461;
var G__35472 = count__34873_35462;
var G__35473 = (i__34874_35463 + (1));
seq__34870_35460 = G__35470;
chunk__34872_35461 = G__35471;
count__34873_35462 = G__35472;
i__34874_35463 = G__35473;
continue;
} else {
var temp__5735__auto___35475 = cljs.core.seq(seq__34870_35460);
if(temp__5735__auto___35475){
var seq__34870_35476__$1 = temp__5735__auto___35475;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35476__$1)){
var c__4609__auto___35481 = cljs.core.chunk_first(seq__34870_35476__$1);
var G__35482 = cljs.core.chunk_rest(seq__34870_35476__$1);
var G__35483 = c__4609__auto___35481;
var G__35484 = cljs.core.count(c__4609__auto___35481);
var G__35485 = (0);
seq__34870_35460 = G__35482;
chunk__34872_35461 = G__35483;
count__34873_35462 = G__35484;
i__34874_35463 = G__35485;
continue;
} else {
var vec__34943_35486 = cljs.core.first(seq__34870_35476__$1);
var actual_type_35487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943_35486,(0),null);
var factory_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943_35486,(1),null);
var canonical_f_35489 = (function (){var G__34947 = (factory_35488.cljs$core$IFn$_invoke$arity$1 ? factory_35488.cljs$core$IFn$_invoke$arity$1(f_35458) : factory_35488.call(null,f_35458));
var fexpr__34946 = (cljs.core.truth_(selector_35450)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35449,selector_35450):cljs.core.identity);
return (fexpr__34946.cljs$core$IFn$_invoke$arity$1 ? fexpr__34946.cljs$core$IFn$_invoke$arity$1(G__34947) : fexpr__34946.call(null,G__34947));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35449,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35450,actual_type_35487,f_35458], null),canonical_f_35489], 0));

if(cljs.core.truth_(elem_35449.addEventListener)){
elem_35449.addEventListener(cljs.core.name(actual_type_35487),canonical_f_35489);
} else {
elem_35449.attachEvent(cljs.core.name(actual_type_35487),canonical_f_35489);
}


var G__35492 = cljs.core.next(seq__34870_35476__$1);
var G__35493 = null;
var G__35494 = (0);
var G__35495 = (0);
seq__34870_35460 = G__35492;
chunk__34872_35461 = G__35493;
count__34873_35462 = G__35494;
i__34874_35463 = G__35495;
continue;
}
} else {
}
}
break;
}

var G__35496 = seq__34860_35452;
var G__35497 = chunk__34867_35453;
var G__35498 = count__34868_35454;
var G__35499 = (i__34869_35455 + (1));
seq__34860_35452 = G__35496;
chunk__34867_35453 = G__35497;
count__34868_35454 = G__35498;
i__34869_35455 = G__35499;
continue;
} else {
var temp__5735__auto___35500 = cljs.core.seq(seq__34860_35452);
if(temp__5735__auto___35500){
var seq__34860_35501__$1 = temp__5735__auto___35500;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35501__$1)){
var c__4609__auto___35502 = cljs.core.chunk_first(seq__34860_35501__$1);
var G__35503 = cljs.core.chunk_rest(seq__34860_35501__$1);
var G__35504 = c__4609__auto___35502;
var G__35505 = cljs.core.count(c__4609__auto___35502);
var G__35506 = (0);
seq__34860_35452 = G__35503;
chunk__34867_35453 = G__35504;
count__34868_35454 = G__35505;
i__34869_35455 = G__35506;
continue;
} else {
var vec__34948_35508 = cljs.core.first(seq__34860_35501__$1);
var orig_type_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34948_35508,(0),null);
var f_35510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34948_35508,(1),null);
var seq__34861_35512 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35509,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35509,cljs.core.identity])));
var chunk__34863_35513 = null;
var count__34864_35514 = (0);
var i__34865_35515 = (0);
while(true){
if((i__34865_35515 < count__34864_35514)){
var vec__34961_35518 = chunk__34863_35513.cljs$core$IIndexed$_nth$arity$2(null,i__34865_35515);
var actual_type_35519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34961_35518,(0),null);
var factory_35520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34961_35518,(1),null);
var canonical_f_35521 = (function (){var G__34965 = (factory_35520.cljs$core$IFn$_invoke$arity$1 ? factory_35520.cljs$core$IFn$_invoke$arity$1(f_35510) : factory_35520.call(null,f_35510));
var fexpr__34964 = (cljs.core.truth_(selector_35450)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35449,selector_35450):cljs.core.identity);
return (fexpr__34964.cljs$core$IFn$_invoke$arity$1 ? fexpr__34964.cljs$core$IFn$_invoke$arity$1(G__34965) : fexpr__34964.call(null,G__34965));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35449,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35450,actual_type_35519,f_35510], null),canonical_f_35521], 0));

if(cljs.core.truth_(elem_35449.addEventListener)){
elem_35449.addEventListener(cljs.core.name(actual_type_35519),canonical_f_35521);
} else {
elem_35449.attachEvent(cljs.core.name(actual_type_35519),canonical_f_35521);
}


var G__35527 = seq__34861_35512;
var G__35528 = chunk__34863_35513;
var G__35529 = count__34864_35514;
var G__35530 = (i__34865_35515 + (1));
seq__34861_35512 = G__35527;
chunk__34863_35513 = G__35528;
count__34864_35514 = G__35529;
i__34865_35515 = G__35530;
continue;
} else {
var temp__5735__auto___35531__$1 = cljs.core.seq(seq__34861_35512);
if(temp__5735__auto___35531__$1){
var seq__34861_35532__$1 = temp__5735__auto___35531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34861_35532__$1)){
var c__4609__auto___35533 = cljs.core.chunk_first(seq__34861_35532__$1);
var G__35534 = cljs.core.chunk_rest(seq__34861_35532__$1);
var G__35535 = c__4609__auto___35533;
var G__35536 = cljs.core.count(c__4609__auto___35533);
var G__35537 = (0);
seq__34861_35512 = G__35534;
chunk__34863_35513 = G__35535;
count__34864_35514 = G__35536;
i__34865_35515 = G__35537;
continue;
} else {
var vec__34966_35541 = cljs.core.first(seq__34861_35532__$1);
var actual_type_35542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966_35541,(0),null);
var factory_35543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966_35541,(1),null);
var canonical_f_35546 = (function (){var G__34970 = (factory_35543.cljs$core$IFn$_invoke$arity$1 ? factory_35543.cljs$core$IFn$_invoke$arity$1(f_35510) : factory_35543.call(null,f_35510));
var fexpr__34969 = (cljs.core.truth_(selector_35450)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35449,selector_35450):cljs.core.identity);
return (fexpr__34969.cljs$core$IFn$_invoke$arity$1 ? fexpr__34969.cljs$core$IFn$_invoke$arity$1(G__34970) : fexpr__34969.call(null,G__34970));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35449,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35450,actual_type_35542,f_35510], null),canonical_f_35546], 0));

if(cljs.core.truth_(elem_35449.addEventListener)){
elem_35449.addEventListener(cljs.core.name(actual_type_35542),canonical_f_35546);
} else {
elem_35449.attachEvent(cljs.core.name(actual_type_35542),canonical_f_35546);
}


var G__35547 = cljs.core.next(seq__34861_35532__$1);
var G__35548 = null;
var G__35549 = (0);
var G__35550 = (0);
seq__34861_35512 = G__35547;
chunk__34863_35513 = G__35548;
count__34864_35514 = G__35549;
i__34865_35515 = G__35550;
continue;
}
} else {
}
}
break;
}

var G__35551 = cljs.core.next(seq__34860_35501__$1);
var G__35552 = null;
var G__35553 = (0);
var G__35554 = (0);
seq__34860_35452 = G__35551;
chunk__34867_35453 = G__35552;
count__34868_35454 = G__35553;
i__34869_35455 = G__35554;
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
var len__4789__auto___35555 = arguments.length;
var i__4790__auto___35556 = (0);
while(true){
if((i__4790__auto___35556 < len__4789__auto___35555)){
args__4795__auto__.push((arguments[i__4790__auto___35556]));

var G__35557 = (i__4790__auto___35556 + (1));
i__4790__auto___35556 = G__35557;
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

var vec__34973_35558 = dommy.core.elem_and_selector(elem_sel);
var elem_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35558,(0),null);
var selector_35560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35558,(1),null);
var seq__34976_35561 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34983_35562 = null;
var count__34984_35563 = (0);
var i__34985_35564 = (0);
while(true){
if((i__34985_35564 < count__34984_35563)){
var vec__35025_35565 = chunk__34983_35562.cljs$core$IIndexed$_nth$arity$2(null,i__34985_35564);
var orig_type_35566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025_35565,(0),null);
var f_35567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025_35565,(1),null);
var seq__34986_35568 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35566,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35566,cljs.core.identity])));
var chunk__34988_35569 = null;
var count__34989_35570 = (0);
var i__34990_35571 = (0);
while(true){
if((i__34990_35571 < count__34989_35570)){
var vec__35034_35572 = chunk__34988_35569.cljs$core$IIndexed$_nth$arity$2(null,i__34990_35571);
var actual_type_35573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35572,(0),null);
var __35574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35572,(1),null);
var keys_35575 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35560,actual_type_35573,f_35567], null);
var canonical_f_35576 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35559),keys_35575);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35559,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35575], 0));

if(cljs.core.truth_(elem_35559.removeEventListener)){
elem_35559.removeEventListener(cljs.core.name(actual_type_35573),canonical_f_35576);
} else {
elem_35559.detachEvent(cljs.core.name(actual_type_35573),canonical_f_35576);
}


var G__35577 = seq__34986_35568;
var G__35578 = chunk__34988_35569;
var G__35579 = count__34989_35570;
var G__35580 = (i__34990_35571 + (1));
seq__34986_35568 = G__35577;
chunk__34988_35569 = G__35578;
count__34989_35570 = G__35579;
i__34990_35571 = G__35580;
continue;
} else {
var temp__5735__auto___35581 = cljs.core.seq(seq__34986_35568);
if(temp__5735__auto___35581){
var seq__34986_35582__$1 = temp__5735__auto___35581;
if(cljs.core.chunked_seq_QMARK_(seq__34986_35582__$1)){
var c__4609__auto___35583 = cljs.core.chunk_first(seq__34986_35582__$1);
var G__35584 = cljs.core.chunk_rest(seq__34986_35582__$1);
var G__35585 = c__4609__auto___35583;
var G__35586 = cljs.core.count(c__4609__auto___35583);
var G__35587 = (0);
seq__34986_35568 = G__35584;
chunk__34988_35569 = G__35585;
count__34989_35570 = G__35586;
i__34990_35571 = G__35587;
continue;
} else {
var vec__35041_35588 = cljs.core.first(seq__34986_35582__$1);
var actual_type_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041_35588,(0),null);
var __35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041_35588,(1),null);
var keys_35591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35560,actual_type_35589,f_35567], null);
var canonical_f_35592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35559),keys_35591);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35559,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35591], 0));

if(cljs.core.truth_(elem_35559.removeEventListener)){
elem_35559.removeEventListener(cljs.core.name(actual_type_35589),canonical_f_35592);
} else {
elem_35559.detachEvent(cljs.core.name(actual_type_35589),canonical_f_35592);
}


var G__35593 = cljs.core.next(seq__34986_35582__$1);
var G__35594 = null;
var G__35595 = (0);
var G__35596 = (0);
seq__34986_35568 = G__35593;
chunk__34988_35569 = G__35594;
count__34989_35570 = G__35595;
i__34990_35571 = G__35596;
continue;
}
} else {
}
}
break;
}

var G__35597 = seq__34976_35561;
var G__35598 = chunk__34983_35562;
var G__35599 = count__34984_35563;
var G__35600 = (i__34985_35564 + (1));
seq__34976_35561 = G__35597;
chunk__34983_35562 = G__35598;
count__34984_35563 = G__35599;
i__34985_35564 = G__35600;
continue;
} else {
var temp__5735__auto___35601 = cljs.core.seq(seq__34976_35561);
if(temp__5735__auto___35601){
var seq__34976_35602__$1 = temp__5735__auto___35601;
if(cljs.core.chunked_seq_QMARK_(seq__34976_35602__$1)){
var c__4609__auto___35603 = cljs.core.chunk_first(seq__34976_35602__$1);
var G__35604 = cljs.core.chunk_rest(seq__34976_35602__$1);
var G__35605 = c__4609__auto___35603;
var G__35606 = cljs.core.count(c__4609__auto___35603);
var G__35607 = (0);
seq__34976_35561 = G__35604;
chunk__34983_35562 = G__35605;
count__34984_35563 = G__35606;
i__34985_35564 = G__35607;
continue;
} else {
var vec__35044_35608 = cljs.core.first(seq__34976_35602__$1);
var orig_type_35609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35044_35608,(0),null);
var f_35610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35044_35608,(1),null);
var seq__34977_35611 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35609,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35609,cljs.core.identity])));
var chunk__34979_35612 = null;
var count__34980_35613 = (0);
var i__34981_35614 = (0);
while(true){
if((i__34981_35614 < count__34980_35613)){
var vec__35056_35615 = chunk__34979_35612.cljs$core$IIndexed$_nth$arity$2(null,i__34981_35614);
var actual_type_35616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35615,(0),null);
var __35617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35615,(1),null);
var keys_35618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35560,actual_type_35616,f_35610], null);
var canonical_f_35619 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35559),keys_35618);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35559,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35618], 0));

if(cljs.core.truth_(elem_35559.removeEventListener)){
elem_35559.removeEventListener(cljs.core.name(actual_type_35616),canonical_f_35619);
} else {
elem_35559.detachEvent(cljs.core.name(actual_type_35616),canonical_f_35619);
}


var G__35620 = seq__34977_35611;
var G__35621 = chunk__34979_35612;
var G__35622 = count__34980_35613;
var G__35623 = (i__34981_35614 + (1));
seq__34977_35611 = G__35620;
chunk__34979_35612 = G__35621;
count__34980_35613 = G__35622;
i__34981_35614 = G__35623;
continue;
} else {
var temp__5735__auto___35624__$1 = cljs.core.seq(seq__34977_35611);
if(temp__5735__auto___35624__$1){
var seq__34977_35625__$1 = temp__5735__auto___35624__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34977_35625__$1)){
var c__4609__auto___35626 = cljs.core.chunk_first(seq__34977_35625__$1);
var G__35627 = cljs.core.chunk_rest(seq__34977_35625__$1);
var G__35628 = c__4609__auto___35626;
var G__35629 = cljs.core.count(c__4609__auto___35626);
var G__35630 = (0);
seq__34977_35611 = G__35627;
chunk__34979_35612 = G__35628;
count__34980_35613 = G__35629;
i__34981_35614 = G__35630;
continue;
} else {
var vec__35059_35631 = cljs.core.first(seq__34977_35625__$1);
var actual_type_35632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35631,(0),null);
var __35633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35631,(1),null);
var keys_35634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35560,actual_type_35632,f_35610], null);
var canonical_f_35635 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35559),keys_35634);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35559,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35634], 0));

if(cljs.core.truth_(elem_35559.removeEventListener)){
elem_35559.removeEventListener(cljs.core.name(actual_type_35632),canonical_f_35635);
} else {
elem_35559.detachEvent(cljs.core.name(actual_type_35632),canonical_f_35635);
}


var G__35636 = cljs.core.next(seq__34977_35625__$1);
var G__35637 = null;
var G__35638 = (0);
var G__35639 = (0);
seq__34977_35611 = G__35636;
chunk__34979_35612 = G__35637;
count__34980_35613 = G__35638;
i__34981_35614 = G__35639;
continue;
}
} else {
}
}
break;
}

var G__35640 = cljs.core.next(seq__34976_35602__$1);
var G__35641 = null;
var G__35642 = (0);
var G__35643 = (0);
seq__34976_35561 = G__35640;
chunk__34983_35562 = G__35641;
count__34984_35563 = G__35642;
i__34985_35564 = G__35643;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34971){
var G__34972 = cljs.core.first(seq34971);
var seq34971__$1 = cljs.core.next(seq34971);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34972,seq34971__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35644 = arguments.length;
var i__4790__auto___35645 = (0);
while(true){
if((i__4790__auto___35645 < len__4789__auto___35644)){
args__4795__auto__.push((arguments[i__4790__auto___35645]));

var G__35646 = (i__4790__auto___35645 + (1));
i__4790__auto___35645 = G__35646;
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

var vec__35068_35647 = dommy.core.elem_and_selector(elem_sel);
var elem_35648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35647,(0),null);
var selector_35649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35647,(1),null);
var seq__35071_35650 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35072_35651 = null;
var count__35073_35652 = (0);
var i__35074_35653 = (0);
while(true){
if((i__35074_35653 < count__35073_35652)){
var vec__35081_35654 = chunk__35072_35651.cljs$core$IIndexed$_nth$arity$2(null,i__35074_35653);
var type_35655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081_35654,(0),null);
var f_35656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081_35654,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35655,((function (seq__35071_35650,chunk__35072_35651,count__35073_35652,i__35074_35653,vec__35081_35654,type_35655,f_35656,vec__35068_35647,elem_35648,selector_35649){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35655,dommy$core$this_fn], 0));

return (f_35656.cljs$core$IFn$_invoke$arity$1 ? f_35656.cljs$core$IFn$_invoke$arity$1(e) : f_35656.call(null,e));
});})(seq__35071_35650,chunk__35072_35651,count__35073_35652,i__35074_35653,vec__35081_35654,type_35655,f_35656,vec__35068_35647,elem_35648,selector_35649))
], 0));


var G__35657 = seq__35071_35650;
var G__35658 = chunk__35072_35651;
var G__35659 = count__35073_35652;
var G__35660 = (i__35074_35653 + (1));
seq__35071_35650 = G__35657;
chunk__35072_35651 = G__35658;
count__35073_35652 = G__35659;
i__35074_35653 = G__35660;
continue;
} else {
var temp__5735__auto___35661 = cljs.core.seq(seq__35071_35650);
if(temp__5735__auto___35661){
var seq__35071_35662__$1 = temp__5735__auto___35661;
if(cljs.core.chunked_seq_QMARK_(seq__35071_35662__$1)){
var c__4609__auto___35663 = cljs.core.chunk_first(seq__35071_35662__$1);
var G__35664 = cljs.core.chunk_rest(seq__35071_35662__$1);
var G__35665 = c__4609__auto___35663;
var G__35666 = cljs.core.count(c__4609__auto___35663);
var G__35667 = (0);
seq__35071_35650 = G__35664;
chunk__35072_35651 = G__35665;
count__35073_35652 = G__35666;
i__35074_35653 = G__35667;
continue;
} else {
var vec__35084_35668 = cljs.core.first(seq__35071_35662__$1);
var type_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084_35668,(0),null);
var f_35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084_35668,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,((function (seq__35071_35650,chunk__35072_35651,count__35073_35652,i__35074_35653,vec__35084_35668,type_35669,f_35670,seq__35071_35662__$1,temp__5735__auto___35661,vec__35068_35647,elem_35648,selector_35649){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,dommy$core$this_fn], 0));

return (f_35670.cljs$core$IFn$_invoke$arity$1 ? f_35670.cljs$core$IFn$_invoke$arity$1(e) : f_35670.call(null,e));
});})(seq__35071_35650,chunk__35072_35651,count__35073_35652,i__35074_35653,vec__35084_35668,type_35669,f_35670,seq__35071_35662__$1,temp__5735__auto___35661,vec__35068_35647,elem_35648,selector_35649))
], 0));


var G__35671 = cljs.core.next(seq__35071_35662__$1);
var G__35672 = null;
var G__35673 = (0);
var G__35674 = (0);
seq__35071_35650 = G__35671;
chunk__35072_35651 = G__35672;
count__35073_35652 = G__35673;
i__35074_35653 = G__35674;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35066){
var G__35067 = cljs.core.first(seq35066);
var seq35066__$1 = cljs.core.next(seq35066);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35067,seq35066__$1);
}));


//# sourceMappingURL=dommy.core.js.map
