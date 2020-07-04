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
var seq__34712_35098 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34713_35099 = null;
var count__34714_35100 = (0);
var i__34715_35101 = (0);
while(true){
if((i__34715_35101 < count__34714_35100)){
var vec__34722_35102 = chunk__34713_35099.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35101);
var k_35103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35102,(0),null);
var v_35104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35102,(1),null);
style.setProperty(dommy.utils.as_str(k_35103),v_35104);


var G__35105 = seq__34712_35098;
var G__35106 = chunk__34713_35099;
var G__35107 = count__34714_35100;
var G__35108 = (i__34715_35101 + (1));
seq__34712_35098 = G__35105;
chunk__34713_35099 = G__35106;
count__34714_35100 = G__35107;
i__34715_35101 = G__35108;
continue;
} else {
var temp__5735__auto___35109 = cljs.core.seq(seq__34712_35098);
if(temp__5735__auto___35109){
var seq__34712_35110__$1 = temp__5735__auto___35109;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35110__$1)){
var c__4609__auto___35111 = cljs.core.chunk_first(seq__34712_35110__$1);
var G__35112 = cljs.core.chunk_rest(seq__34712_35110__$1);
var G__35113 = c__4609__auto___35111;
var G__35114 = cljs.core.count(c__4609__auto___35111);
var G__35115 = (0);
seq__34712_35098 = G__35112;
chunk__34713_35099 = G__35113;
count__34714_35100 = G__35114;
i__34715_35101 = G__35115;
continue;
} else {
var vec__34725_35117 = cljs.core.first(seq__34712_35110__$1);
var k_35118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35117,(0),null);
var v_35119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35117,(1),null);
style.setProperty(dommy.utils.as_str(k_35118),v_35119);


var G__35123 = cljs.core.next(seq__34712_35110__$1);
var G__35124 = null;
var G__35125 = (0);
var G__35126 = (0);
seq__34712_35098 = G__35123;
chunk__34713_35099 = G__35124;
count__34714_35100 = G__35125;
i__34715_35101 = G__35126;
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
var len__4789__auto___35127 = arguments.length;
var i__4790__auto___35128 = (0);
while(true){
if((i__4790__auto___35128 < len__4789__auto___35127)){
args__4795__auto__.push((arguments[i__4790__auto___35128]));

var G__35129 = (i__4790__auto___35128 + (1));
i__4790__auto___35128 = G__35129;
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
var seq__34730_35130 = cljs.core.seq(keywords);
var chunk__34731_35131 = null;
var count__34732_35132 = (0);
var i__34733_35133 = (0);
while(true){
if((i__34733_35133 < count__34732_35132)){
var kw_35134 = chunk__34731_35131.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35133);
style.removeProperty(dommy.utils.as_str(kw_35134));


var G__35135 = seq__34730_35130;
var G__35136 = chunk__34731_35131;
var G__35137 = count__34732_35132;
var G__35138 = (i__34733_35133 + (1));
seq__34730_35130 = G__35135;
chunk__34731_35131 = G__35136;
count__34732_35132 = G__35137;
i__34733_35133 = G__35138;
continue;
} else {
var temp__5735__auto___35139 = cljs.core.seq(seq__34730_35130);
if(temp__5735__auto___35139){
var seq__34730_35140__$1 = temp__5735__auto___35139;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35140__$1)){
var c__4609__auto___35141 = cljs.core.chunk_first(seq__34730_35140__$1);
var G__35142 = cljs.core.chunk_rest(seq__34730_35140__$1);
var G__35143 = c__4609__auto___35141;
var G__35144 = cljs.core.count(c__4609__auto___35141);
var G__35145 = (0);
seq__34730_35130 = G__35142;
chunk__34731_35131 = G__35143;
count__34732_35132 = G__35144;
i__34733_35133 = G__35145;
continue;
} else {
var kw_35146 = cljs.core.first(seq__34730_35140__$1);
style.removeProperty(dommy.utils.as_str(kw_35146));


var G__35147 = cljs.core.next(seq__34730_35140__$1);
var G__35148 = null;
var G__35149 = (0);
var G__35150 = (0);
seq__34730_35130 = G__35147;
chunk__34731_35131 = G__35148;
count__34732_35132 = G__35149;
i__34733_35133 = G__35150;
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
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__34736_35154 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34737_35155 = null;
var count__34738_35156 = (0);
var i__34739_35157 = (0);
while(true){
if((i__34739_35157 < count__34738_35156)){
var vec__34746_35158 = chunk__34737_35155.cljs$core$IIndexed$_nth$arity$2(null,i__34739_35157);
var k_35159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746_35158,(0),null);
var v_35160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746_35158,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35159,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35160),"px"].join('')], 0));


var G__35162 = seq__34736_35154;
var G__35163 = chunk__34737_35155;
var G__35164 = count__34738_35156;
var G__35165 = (i__34739_35157 + (1));
seq__34736_35154 = G__35162;
chunk__34737_35155 = G__35163;
count__34738_35156 = G__35164;
i__34739_35157 = G__35165;
continue;
} else {
var temp__5735__auto___35166 = cljs.core.seq(seq__34736_35154);
if(temp__5735__auto___35166){
var seq__34736_35168__$1 = temp__5735__auto___35166;
if(cljs.core.chunked_seq_QMARK_(seq__34736_35168__$1)){
var c__4609__auto___35169 = cljs.core.chunk_first(seq__34736_35168__$1);
var G__35170 = cljs.core.chunk_rest(seq__34736_35168__$1);
var G__35171 = c__4609__auto___35169;
var G__35172 = cljs.core.count(c__4609__auto___35169);
var G__35173 = (0);
seq__34736_35154 = G__35170;
chunk__34737_35155 = G__35171;
count__34738_35156 = G__35172;
i__34739_35157 = G__35173;
continue;
} else {
var vec__34749_35178 = cljs.core.first(seq__34736_35168__$1);
var k_35179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749_35178,(0),null);
var v_35180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749_35178,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35179,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35180),"px"].join('')], 0));


var G__35187 = cljs.core.next(seq__34736_35168__$1);
var G__35188 = null;
var G__35189 = (0);
var G__35190 = (0);
seq__34736_35154 = G__35187;
chunk__34737_35155 = G__35188;
count__34738_35156 = G__35189;
i__34739_35157 = G__35190;
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
var len__4789__auto___35203 = arguments.length;
var i__4790__auto___35204 = (0);
while(true){
if((i__4790__auto___35204 < len__4789__auto___35203)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35204]));

var G__35205 = (i__4790__auto___35204 + (1));
i__4790__auto___35204 = G__35205;
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

var seq__34761_35206 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35207 = null;
var count__34763_35208 = (0);
var i__34764_35209 = (0);
while(true){
if((i__34764_35209 < count__34763_35208)){
var vec__34771_35210 = chunk__34762_35207.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35209);
var k_35211__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35210,(0),null);
var v_35212__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35210,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35211__$1,v_35212__$1);


var G__35213 = seq__34761_35206;
var G__35214 = chunk__34762_35207;
var G__35215 = count__34763_35208;
var G__35216 = (i__34764_35209 + (1));
seq__34761_35206 = G__35213;
chunk__34762_35207 = G__35214;
count__34763_35208 = G__35215;
i__34764_35209 = G__35216;
continue;
} else {
var temp__5735__auto___35217 = cljs.core.seq(seq__34761_35206);
if(temp__5735__auto___35217){
var seq__34761_35218__$1 = temp__5735__auto___35217;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35218__$1)){
var c__4609__auto___35219 = cljs.core.chunk_first(seq__34761_35218__$1);
var G__35220 = cljs.core.chunk_rest(seq__34761_35218__$1);
var G__35221 = c__4609__auto___35219;
var G__35222 = cljs.core.count(c__4609__auto___35219);
var G__35223 = (0);
seq__34761_35206 = G__35220;
chunk__34762_35207 = G__35221;
count__34763_35208 = G__35222;
i__34764_35209 = G__35223;
continue;
} else {
var vec__34774_35224 = cljs.core.first(seq__34761_35218__$1);
var k_35225__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35224,(0),null);
var v_35226__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35224,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35225__$1,v_35226__$1);


var G__35227 = cljs.core.next(seq__34761_35218__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34761_35206 = G__35227;
chunk__34762_35207 = G__35228;
count__34763_35208 = G__35229;
i__34764_35209 = G__35230;
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
var len__4789__auto___35233 = arguments.length;
var i__4790__auto___35234 = (0);
while(true){
if((i__4790__auto___35234 < len__4789__auto___35233)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35234]));

var G__35235 = (i__4790__auto___35234 + (1));
i__4790__auto___35234 = G__35235;
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
var k_35241__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(k_35241__$1) : fexpr__34782.call(null,k_35241__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35241__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34783_35247 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34784_35248 = null;
var count__34785_35249 = (0);
var i__34786_35250 = (0);
while(true){
if((i__34786_35250 < count__34785_35249)){
var k_35257__$1 = chunk__34784_35248.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35250);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35257__$1);


var G__35258 = seq__34783_35247;
var G__35259 = chunk__34784_35248;
var G__35260 = count__34785_35249;
var G__35261 = (i__34786_35250 + (1));
seq__34783_35247 = G__35258;
chunk__34784_35248 = G__35259;
count__34785_35249 = G__35260;
i__34786_35250 = G__35261;
continue;
} else {
var temp__5735__auto___35263 = cljs.core.seq(seq__34783_35247);
if(temp__5735__auto___35263){
var seq__34783_35264__$1 = temp__5735__auto___35263;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35264__$1)){
var c__4609__auto___35265 = cljs.core.chunk_first(seq__34783_35264__$1);
var G__35266 = cljs.core.chunk_rest(seq__34783_35264__$1);
var G__35267 = c__4609__auto___35265;
var G__35268 = cljs.core.count(c__4609__auto___35265);
var G__35269 = (0);
seq__34783_35247 = G__35266;
chunk__34784_35248 = G__35267;
count__34785_35249 = G__35268;
i__34786_35250 = G__35269;
continue;
} else {
var k_35274__$1 = cljs.core.first(seq__34783_35264__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35274__$1);


var G__35275 = cljs.core.next(seq__34783_35264__$1);
var G__35276 = null;
var G__35277 = (0);
var G__35278 = (0);
seq__34783_35247 = G__35275;
chunk__34784_35248 = G__35276;
count__34785_35249 = G__35277;
i__34786_35250 = G__35278;
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
var len__4789__auto___35281 = arguments.length;
var i__4790__auto___35282 = (0);
while(true){
if((i__4790__auto___35282 < len__4789__auto___35281)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35282]));

var G__35283 = (i__4790__auto___35282 + (1));
i__4790__auto___35282 = G__35283;
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
var temp__5733__auto___35287 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35287)){
var class_list_35288 = temp__5733__auto___35287;
var seq__34794_35289 = cljs.core.seq(classes__$1);
var chunk__34795_35290 = null;
var count__34796_35291 = (0);
var i__34797_35292 = (0);
while(true){
if((i__34797_35292 < count__34796_35291)){
var c_35293 = chunk__34795_35290.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35292);
class_list_35288.add(c_35293);


var G__35294 = seq__34794_35289;
var G__35295 = chunk__34795_35290;
var G__35296 = count__34796_35291;
var G__35297 = (i__34797_35292 + (1));
seq__34794_35289 = G__35294;
chunk__34795_35290 = G__35295;
count__34796_35291 = G__35296;
i__34797_35292 = G__35297;
continue;
} else {
var temp__5735__auto___35298 = cljs.core.seq(seq__34794_35289);
if(temp__5735__auto___35298){
var seq__34794_35299__$1 = temp__5735__auto___35298;
if(cljs.core.chunked_seq_QMARK_(seq__34794_35299__$1)){
var c__4609__auto___35300 = cljs.core.chunk_first(seq__34794_35299__$1);
var G__35301 = cljs.core.chunk_rest(seq__34794_35299__$1);
var G__35302 = c__4609__auto___35300;
var G__35303 = cljs.core.count(c__4609__auto___35300);
var G__35304 = (0);
seq__34794_35289 = G__35301;
chunk__34795_35290 = G__35302;
count__34796_35291 = G__35303;
i__34797_35292 = G__35304;
continue;
} else {
var c_35305 = cljs.core.first(seq__34794_35299__$1);
class_list_35288.add(c_35305);


var G__35306 = cljs.core.next(seq__34794_35299__$1);
var G__35307 = null;
var G__35308 = (0);
var G__35309 = (0);
seq__34794_35289 = G__35306;
chunk__34795_35290 = G__35307;
count__34796_35291 = G__35308;
i__34797_35292 = G__35309;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34798_35310 = cljs.core.seq(classes__$1);
var chunk__34799_35311 = null;
var count__34800_35312 = (0);
var i__34801_35313 = (0);
while(true){
if((i__34801_35313 < count__34800_35312)){
var c_35314 = chunk__34799_35311.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35313);
var class_name_35315 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35315,c_35314))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35315 === ""))?c_35314:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35315)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35314)].join('')));
}


var G__35316 = seq__34798_35310;
var G__35317 = chunk__34799_35311;
var G__35318 = count__34800_35312;
var G__35319 = (i__34801_35313 + (1));
seq__34798_35310 = G__35316;
chunk__34799_35311 = G__35317;
count__34800_35312 = G__35318;
i__34801_35313 = G__35319;
continue;
} else {
var temp__5735__auto___35320 = cljs.core.seq(seq__34798_35310);
if(temp__5735__auto___35320){
var seq__34798_35322__$1 = temp__5735__auto___35320;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35322__$1)){
var c__4609__auto___35323 = cljs.core.chunk_first(seq__34798_35322__$1);
var G__35324 = cljs.core.chunk_rest(seq__34798_35322__$1);
var G__35325 = c__4609__auto___35323;
var G__35326 = cljs.core.count(c__4609__auto___35323);
var G__35327 = (0);
seq__34798_35310 = G__35324;
chunk__34799_35311 = G__35325;
count__34800_35312 = G__35326;
i__34801_35313 = G__35327;
continue;
} else {
var c_35328 = cljs.core.first(seq__34798_35322__$1);
var class_name_35329 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35329,c_35328))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35329 === ""))?c_35328:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35329)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35328)].join('')));
}


var G__35330 = cljs.core.next(seq__34798_35322__$1);
var G__35331 = null;
var G__35332 = (0);
var G__35333 = (0);
seq__34798_35310 = G__35330;
chunk__34799_35311 = G__35331;
count__34800_35312 = G__35332;
i__34801_35313 = G__35333;
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
var seq__34802_35334 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34803_35335 = null;
var count__34804_35336 = (0);
var i__34805_35337 = (0);
while(true){
if((i__34805_35337 < count__34804_35336)){
var c_35339 = chunk__34803_35335.cljs$core$IIndexed$_nth$arity$2(null,i__34805_35337);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35339);


var G__35340 = seq__34802_35334;
var G__35341 = chunk__34803_35335;
var G__35342 = count__34804_35336;
var G__35343 = (i__34805_35337 + (1));
seq__34802_35334 = G__35340;
chunk__34803_35335 = G__35341;
count__34804_35336 = G__35342;
i__34805_35337 = G__35343;
continue;
} else {
var temp__5735__auto___35344 = cljs.core.seq(seq__34802_35334);
if(temp__5735__auto___35344){
var seq__34802_35345__$1 = temp__5735__auto___35344;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35345__$1)){
var c__4609__auto___35346 = cljs.core.chunk_first(seq__34802_35345__$1);
var G__35347 = cljs.core.chunk_rest(seq__34802_35345__$1);
var G__35348 = c__4609__auto___35346;
var G__35349 = cljs.core.count(c__4609__auto___35346);
var G__35350 = (0);
seq__34802_35334 = G__35347;
chunk__34803_35335 = G__35348;
count__34804_35336 = G__35349;
i__34805_35337 = G__35350;
continue;
} else {
var c_35351 = cljs.core.first(seq__34802_35345__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35351);


var G__35352 = cljs.core.next(seq__34802_35345__$1);
var G__35353 = null;
var G__35354 = (0);
var G__35355 = (0);
seq__34802_35334 = G__35352;
chunk__34803_35335 = G__35353;
count__34804_35336 = G__35354;
i__34805_35337 = G__35355;
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
var temp__5733__auto___35360 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35360)){
var class_list_35361 = temp__5733__auto___35360;
class_list_35361.remove(c__$1);
} else {
var class_name_35362 = dommy.core.class$(elem);
var new_class_name_35363 = dommy.utils.remove_class_str(class_name_35362,c__$1);
if((class_name_35362 === new_class_name_35363)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35363);
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


var G__35364 = seq__34811;
var G__35365 = chunk__34812;
var G__35366 = count__34813;
var G__35367 = (i__34814 + (1));
seq__34811 = G__35364;
chunk__34812 = G__35365;
count__34813 = G__35366;
i__34814 = G__35367;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34811);
if(temp__5735__auto__){
var seq__34811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35368 = cljs.core.chunk_rest(seq__34811__$1);
var G__35369 = c__4609__auto__;
var G__35370 = cljs.core.count(c__4609__auto__);
var G__35371 = (0);
seq__34811 = G__35368;
chunk__34812 = G__35369;
count__34813 = G__35370;
i__34814 = G__35371;
continue;
} else {
var c = cljs.core.first(seq__34811__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35372 = cljs.core.next(seq__34811__$1);
var G__35373 = null;
var G__35374 = (0);
var G__35375 = (0);
seq__34811 = G__35372;
chunk__34812 = G__35373;
count__34813 = G__35374;
i__34814 = G__35375;
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
var temp__5733__auto___35377 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35377)){
var class_list_35378 = temp__5733__auto___35377;
class_list_35378.toggle(c__$1);
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
var len__4789__auto___35382 = arguments.length;
var i__4790__auto___35383 = (0);
while(true){
if((i__4790__auto___35383 < len__4789__auto___35382)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35383]));

var G__35384 = (i__4790__auto___35383 + (1));
i__4790__auto___35383 = G__35384;
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
var seq__34827_35385 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34828_35386 = null;
var count__34829_35387 = (0);
var i__34830_35388 = (0);
while(true){
if((i__34830_35388 < count__34829_35387)){
var c_35389 = chunk__34828_35386.cljs$core$IIndexed$_nth$arity$2(null,i__34830_35388);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35389);


var G__35390 = seq__34827_35385;
var G__35391 = chunk__34828_35386;
var G__35392 = count__34829_35387;
var G__35393 = (i__34830_35388 + (1));
seq__34827_35385 = G__35390;
chunk__34828_35386 = G__35391;
count__34829_35387 = G__35392;
i__34830_35388 = G__35393;
continue;
} else {
var temp__5735__auto___35394 = cljs.core.seq(seq__34827_35385);
if(temp__5735__auto___35394){
var seq__34827_35395__$1 = temp__5735__auto___35394;
if(cljs.core.chunked_seq_QMARK_(seq__34827_35395__$1)){
var c__4609__auto___35396 = cljs.core.chunk_first(seq__34827_35395__$1);
var G__35397 = cljs.core.chunk_rest(seq__34827_35395__$1);
var G__35398 = c__4609__auto___35396;
var G__35399 = cljs.core.count(c__4609__auto___35396);
var G__35400 = (0);
seq__34827_35385 = G__35397;
chunk__34828_35386 = G__35398;
count__34829_35387 = G__35399;
i__34830_35388 = G__35400;
continue;
} else {
var c_35401 = cljs.core.first(seq__34827_35395__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35401);


var G__35402 = cljs.core.next(seq__34827_35395__$1);
var G__35403 = null;
var G__35404 = (0);
var G__35405 = (0);
seq__34827_35385 = G__35402;
chunk__34828_35386 = G__35403;
count__34829_35387 = G__35404;
i__34830_35388 = G__35405;
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
var len__4789__auto___35407 = arguments.length;
var i__4790__auto___35408 = (0);
while(true){
if((i__4790__auto___35408 < len__4789__auto___35407)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35408]));

var G__35409 = (i__4790__auto___35408 + (1));
i__4790__auto___35408 = G__35409;
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
var G__34836 = parent;
G__34836.insertBefore(child,parent.firstChild);

return G__34836;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34837_35410 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34838_35411 = null;
var count__34839_35412 = (0);
var i__34840_35413 = (0);
while(true){
if((i__34840_35413 < count__34839_35412)){
var c_35414 = chunk__34838_35411.cljs$core$IIndexed$_nth$arity$2(null,i__34840_35413);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35414);


var G__35415 = seq__34837_35410;
var G__35416 = chunk__34838_35411;
var G__35417 = count__34839_35412;
var G__35418 = (i__34840_35413 + (1));
seq__34837_35410 = G__35415;
chunk__34838_35411 = G__35416;
count__34839_35412 = G__35417;
i__34840_35413 = G__35418;
continue;
} else {
var temp__5735__auto___35419 = cljs.core.seq(seq__34837_35410);
if(temp__5735__auto___35419){
var seq__34837_35420__$1 = temp__5735__auto___35419;
if(cljs.core.chunked_seq_QMARK_(seq__34837_35420__$1)){
var c__4609__auto___35421 = cljs.core.chunk_first(seq__34837_35420__$1);
var G__35422 = cljs.core.chunk_rest(seq__34837_35420__$1);
var G__35423 = c__4609__auto___35421;
var G__35424 = cljs.core.count(c__4609__auto___35421);
var G__35425 = (0);
seq__34837_35410 = G__35422;
chunk__34838_35411 = G__35423;
count__34839_35412 = G__35424;
i__34840_35413 = G__35425;
continue;
} else {
var c_35426 = cljs.core.first(seq__34837_35420__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35426);


var G__35427 = cljs.core.next(seq__34837_35420__$1);
var G__35428 = null;
var G__35429 = (0);
var G__35430 = (0);
seq__34837_35410 = G__35427;
chunk__34838_35411 = G__35428;
count__34839_35412 = G__35429;
i__34840_35413 = G__35430;
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
var temp__5733__auto___35433 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35433)){
var next_35434 = temp__5733__auto___35433;
dommy.core.insert_before_BANG_(elem,next_35434);
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
var len__4789__auto___35439 = arguments.length;
var i__4790__auto___35440 = (0);
while(true){
if((i__4790__auto___35440 < len__4789__auto___35439)){
args__4795__auto__.push((arguments[i__4790__auto___35440]));

var G__35442 = (i__4790__auto___35440 + (1));
i__4790__auto___35440 = G__35442;
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
var len__4789__auto___35443 = arguments.length;
var i__4790__auto___35444 = (0);
while(true){
if((i__4790__auto___35444 < len__4789__auto___35443)){
args__4795__auto__.push((arguments[i__4790__auto___35444]));

var G__35445 = (i__4790__auto___35444 + (1));
i__4790__auto___35444 = G__35445;
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

var vec__34857_35446 = dommy.core.elem_and_selector(elem_sel);
var elem_35447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35446,(0),null);
var selector_35448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35446,(1),null);
var seq__34860_35449 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34867_35450 = null;
var count__34868_35451 = (0);
var i__34869_35452 = (0);
while(true){
if((i__34869_35452 < count__34868_35451)){
var vec__34922_35453 = chunk__34867_35450.cljs$core$IIndexed$_nth$arity$2(null,i__34869_35452);
var orig_type_35454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922_35453,(0),null);
var f_35455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922_35453,(1),null);
var seq__34870_35456 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35454,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35454,cljs.core.identity])));
var chunk__34872_35457 = null;
var count__34873_35458 = (0);
var i__34874_35459 = (0);
while(true){
if((i__34874_35459 < count__34873_35458)){
var vec__34938_35460 = chunk__34872_35457.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35459);
var actual_type_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34938_35460,(0),null);
var factory_35462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34938_35460,(1),null);
var canonical_f_35463 = (function (){var G__34942 = (factory_35462.cljs$core$IFn$_invoke$arity$1 ? factory_35462.cljs$core$IFn$_invoke$arity$1(f_35455) : factory_35462.call(null,f_35455));
var fexpr__34941 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34941.cljs$core$IFn$_invoke$arity$1 ? fexpr__34941.cljs$core$IFn$_invoke$arity$1(G__34942) : fexpr__34941.call(null,G__34942));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35461,f_35455], null),canonical_f_35463], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35461),canonical_f_35463);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35461),canonical_f_35463);
}


var G__35464 = seq__34870_35456;
var G__35465 = chunk__34872_35457;
var G__35466 = count__34873_35458;
var G__35467 = (i__34874_35459 + (1));
seq__34870_35456 = G__35464;
chunk__34872_35457 = G__35465;
count__34873_35458 = G__35466;
i__34874_35459 = G__35467;
continue;
} else {
var temp__5735__auto___35468 = cljs.core.seq(seq__34870_35456);
if(temp__5735__auto___35468){
var seq__34870_35469__$1 = temp__5735__auto___35468;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35469__$1)){
var c__4609__auto___35470 = cljs.core.chunk_first(seq__34870_35469__$1);
var G__35471 = cljs.core.chunk_rest(seq__34870_35469__$1);
var G__35472 = c__4609__auto___35470;
var G__35473 = cljs.core.count(c__4609__auto___35470);
var G__35474 = (0);
seq__34870_35456 = G__35471;
chunk__34872_35457 = G__35472;
count__34873_35458 = G__35473;
i__34874_35459 = G__35474;
continue;
} else {
var vec__34943_35475 = cljs.core.first(seq__34870_35469__$1);
var actual_type_35476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943_35475,(0),null);
var factory_35477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34943_35475,(1),null);
var canonical_f_35478 = (function (){var G__34947 = (factory_35477.cljs$core$IFn$_invoke$arity$1 ? factory_35477.cljs$core$IFn$_invoke$arity$1(f_35455) : factory_35477.call(null,f_35455));
var fexpr__34946 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34946.cljs$core$IFn$_invoke$arity$1 ? fexpr__34946.cljs$core$IFn$_invoke$arity$1(G__34947) : fexpr__34946.call(null,G__34947));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35476,f_35455], null),canonical_f_35478], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35476),canonical_f_35478);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35476),canonical_f_35478);
}


var G__35479 = cljs.core.next(seq__34870_35469__$1);
var G__35480 = null;
var G__35481 = (0);
var G__35482 = (0);
seq__34870_35456 = G__35479;
chunk__34872_35457 = G__35480;
count__34873_35458 = G__35481;
i__34874_35459 = G__35482;
continue;
}
} else {
}
}
break;
}

var G__35483 = seq__34860_35449;
var G__35484 = chunk__34867_35450;
var G__35485 = count__34868_35451;
var G__35486 = (i__34869_35452 + (1));
seq__34860_35449 = G__35483;
chunk__34867_35450 = G__35484;
count__34868_35451 = G__35485;
i__34869_35452 = G__35486;
continue;
} else {
var temp__5735__auto___35487 = cljs.core.seq(seq__34860_35449);
if(temp__5735__auto___35487){
var seq__34860_35488__$1 = temp__5735__auto___35487;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35488__$1)){
var c__4609__auto___35489 = cljs.core.chunk_first(seq__34860_35488__$1);
var G__35490 = cljs.core.chunk_rest(seq__34860_35488__$1);
var G__35491 = c__4609__auto___35489;
var G__35492 = cljs.core.count(c__4609__auto___35489);
var G__35493 = (0);
seq__34860_35449 = G__35490;
chunk__34867_35450 = G__35491;
count__34868_35451 = G__35492;
i__34869_35452 = G__35493;
continue;
} else {
var vec__34948_35494 = cljs.core.first(seq__34860_35488__$1);
var orig_type_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34948_35494,(0),null);
var f_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34948_35494,(1),null);
var seq__34861_35497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35495,cljs.core.identity])));
var chunk__34863_35498 = null;
var count__34864_35499 = (0);
var i__34865_35500 = (0);
while(true){
if((i__34865_35500 < count__34864_35499)){
var vec__34961_35501 = chunk__34863_35498.cljs$core$IIndexed$_nth$arity$2(null,i__34865_35500);
var actual_type_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34961_35501,(0),null);
var factory_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34961_35501,(1),null);
var canonical_f_35504 = (function (){var G__34965 = (factory_35503.cljs$core$IFn$_invoke$arity$1 ? factory_35503.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35503.call(null,f_35496));
var fexpr__34964 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34964.cljs$core$IFn$_invoke$arity$1 ? fexpr__34964.cljs$core$IFn$_invoke$arity$1(G__34965) : fexpr__34964.call(null,G__34965));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35502,f_35496], null),canonical_f_35504], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35502),canonical_f_35504);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35502),canonical_f_35504);
}


var G__35505 = seq__34861_35497;
var G__35506 = chunk__34863_35498;
var G__35507 = count__34864_35499;
var G__35508 = (i__34865_35500 + (1));
seq__34861_35497 = G__35505;
chunk__34863_35498 = G__35506;
count__34864_35499 = G__35507;
i__34865_35500 = G__35508;
continue;
} else {
var temp__5735__auto___35509__$1 = cljs.core.seq(seq__34861_35497);
if(temp__5735__auto___35509__$1){
var seq__34861_35510__$1 = temp__5735__auto___35509__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34861_35510__$1)){
var c__4609__auto___35511 = cljs.core.chunk_first(seq__34861_35510__$1);
var G__35512 = cljs.core.chunk_rest(seq__34861_35510__$1);
var G__35513 = c__4609__auto___35511;
var G__35514 = cljs.core.count(c__4609__auto___35511);
var G__35515 = (0);
seq__34861_35497 = G__35512;
chunk__34863_35498 = G__35513;
count__34864_35499 = G__35514;
i__34865_35500 = G__35515;
continue;
} else {
var vec__34966_35516 = cljs.core.first(seq__34861_35510__$1);
var actual_type_35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966_35516,(0),null);
var factory_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966_35516,(1),null);
var canonical_f_35519 = (function (){var G__34970 = (factory_35518.cljs$core$IFn$_invoke$arity$1 ? factory_35518.cljs$core$IFn$_invoke$arity$1(f_35496) : factory_35518.call(null,f_35496));
var fexpr__34969 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34969.cljs$core$IFn$_invoke$arity$1 ? fexpr__34969.cljs$core$IFn$_invoke$arity$1(G__34970) : fexpr__34969.call(null,G__34970));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35517,f_35496], null),canonical_f_35519], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35517),canonical_f_35519);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35517),canonical_f_35519);
}


var G__35520 = cljs.core.next(seq__34861_35510__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__34861_35497 = G__35520;
chunk__34863_35498 = G__35521;
count__34864_35499 = G__35522;
i__34865_35500 = G__35523;
continue;
}
} else {
}
}
break;
}

var G__35524 = cljs.core.next(seq__34860_35488__$1);
var G__35525 = null;
var G__35526 = (0);
var G__35527 = (0);
seq__34860_35449 = G__35524;
chunk__34867_35450 = G__35525;
count__34868_35451 = G__35526;
i__34869_35452 = G__35527;
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
var len__4789__auto___35528 = arguments.length;
var i__4790__auto___35529 = (0);
while(true){
if((i__4790__auto___35529 < len__4789__auto___35528)){
args__4795__auto__.push((arguments[i__4790__auto___35529]));

var G__35530 = (i__4790__auto___35529 + (1));
i__4790__auto___35529 = G__35530;
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

var vec__34976_35531 = dommy.core.elem_and_selector(elem_sel);
var elem_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35531,(0),null);
var selector_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35531,(1),null);
var seq__34979_35534 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34986_35535 = null;
var count__34987_35536 = (0);
var i__34988_35537 = (0);
while(true){
if((i__34988_35537 < count__34987_35536)){
var vec__35025_35538 = chunk__34986_35535.cljs$core$IIndexed$_nth$arity$2(null,i__34988_35537);
var orig_type_35539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025_35538,(0),null);
var f_35540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025_35538,(1),null);
var seq__34989_35541 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35539,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35539,cljs.core.identity])));
var chunk__34991_35542 = null;
var count__34992_35543 = (0);
var i__34993_35544 = (0);
while(true){
if((i__34993_35544 < count__34992_35543)){
var vec__35034_35545 = chunk__34991_35542.cljs$core$IIndexed$_nth$arity$2(null,i__34993_35544);
var actual_type_35546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35545,(0),null);
var __35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35545,(1),null);
var keys_35549 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35533,actual_type_35546,f_35540], null);
var canonical_f_35550 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35532),keys_35549);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35532,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35549], 0));

if(cljs.core.truth_(elem_35532.removeEventListener)){
elem_35532.removeEventListener(cljs.core.name(actual_type_35546),canonical_f_35550);
} else {
elem_35532.detachEvent(cljs.core.name(actual_type_35546),canonical_f_35550);
}


var G__35552 = seq__34989_35541;
var G__35553 = chunk__34991_35542;
var G__35554 = count__34992_35543;
var G__35555 = (i__34993_35544 + (1));
seq__34989_35541 = G__35552;
chunk__34991_35542 = G__35553;
count__34992_35543 = G__35554;
i__34993_35544 = G__35555;
continue;
} else {
var temp__5735__auto___35556 = cljs.core.seq(seq__34989_35541);
if(temp__5735__auto___35556){
var seq__34989_35557__$1 = temp__5735__auto___35556;
if(cljs.core.chunked_seq_QMARK_(seq__34989_35557__$1)){
var c__4609__auto___35558 = cljs.core.chunk_first(seq__34989_35557__$1);
var G__35559 = cljs.core.chunk_rest(seq__34989_35557__$1);
var G__35560 = c__4609__auto___35558;
var G__35561 = cljs.core.count(c__4609__auto___35558);
var G__35562 = (0);
seq__34989_35541 = G__35559;
chunk__34991_35542 = G__35560;
count__34992_35543 = G__35561;
i__34993_35544 = G__35562;
continue;
} else {
var vec__35041_35563 = cljs.core.first(seq__34989_35557__$1);
var actual_type_35564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041_35563,(0),null);
var __35565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041_35563,(1),null);
var keys_35566 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35533,actual_type_35564,f_35540], null);
var canonical_f_35567 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35532),keys_35566);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35532,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35566], 0));

if(cljs.core.truth_(elem_35532.removeEventListener)){
elem_35532.removeEventListener(cljs.core.name(actual_type_35564),canonical_f_35567);
} else {
elem_35532.detachEvent(cljs.core.name(actual_type_35564),canonical_f_35567);
}


var G__35568 = cljs.core.next(seq__34989_35557__$1);
var G__35569 = null;
var G__35570 = (0);
var G__35571 = (0);
seq__34989_35541 = G__35568;
chunk__34991_35542 = G__35569;
count__34992_35543 = G__35570;
i__34993_35544 = G__35571;
continue;
}
} else {
}
}
break;
}

var G__35573 = seq__34979_35534;
var G__35574 = chunk__34986_35535;
var G__35575 = count__34987_35536;
var G__35576 = (i__34988_35537 + (1));
seq__34979_35534 = G__35573;
chunk__34986_35535 = G__35574;
count__34987_35536 = G__35575;
i__34988_35537 = G__35576;
continue;
} else {
var temp__5735__auto___35577 = cljs.core.seq(seq__34979_35534);
if(temp__5735__auto___35577){
var seq__34979_35578__$1 = temp__5735__auto___35577;
if(cljs.core.chunked_seq_QMARK_(seq__34979_35578__$1)){
var c__4609__auto___35579 = cljs.core.chunk_first(seq__34979_35578__$1);
var G__35580 = cljs.core.chunk_rest(seq__34979_35578__$1);
var G__35581 = c__4609__auto___35579;
var G__35582 = cljs.core.count(c__4609__auto___35579);
var G__35583 = (0);
seq__34979_35534 = G__35580;
chunk__34986_35535 = G__35581;
count__34987_35536 = G__35582;
i__34988_35537 = G__35583;
continue;
} else {
var vec__35044_35584 = cljs.core.first(seq__34979_35578__$1);
var orig_type_35586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35044_35584,(0),null);
var f_35587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35044_35584,(1),null);
var seq__34980_35589 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35586,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35586,cljs.core.identity])));
var chunk__34982_35590 = null;
var count__34983_35591 = (0);
var i__34984_35592 = (0);
while(true){
if((i__34984_35592 < count__34983_35591)){
var vec__35056_35594 = chunk__34982_35590.cljs$core$IIndexed$_nth$arity$2(null,i__34984_35592);
var actual_type_35595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35594,(0),null);
var __35596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35594,(1),null);
var keys_35597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35533,actual_type_35595,f_35587], null);
var canonical_f_35598 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35532),keys_35597);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35532,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35597], 0));

if(cljs.core.truth_(elem_35532.removeEventListener)){
elem_35532.removeEventListener(cljs.core.name(actual_type_35595),canonical_f_35598);
} else {
elem_35532.detachEvent(cljs.core.name(actual_type_35595),canonical_f_35598);
}


var G__35599 = seq__34980_35589;
var G__35600 = chunk__34982_35590;
var G__35601 = count__34983_35591;
var G__35602 = (i__34984_35592 + (1));
seq__34980_35589 = G__35599;
chunk__34982_35590 = G__35600;
count__34983_35591 = G__35601;
i__34984_35592 = G__35602;
continue;
} else {
var temp__5735__auto___35603__$1 = cljs.core.seq(seq__34980_35589);
if(temp__5735__auto___35603__$1){
var seq__34980_35605__$1 = temp__5735__auto___35603__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34980_35605__$1)){
var c__4609__auto___35608 = cljs.core.chunk_first(seq__34980_35605__$1);
var G__35611 = cljs.core.chunk_rest(seq__34980_35605__$1);
var G__35612 = c__4609__auto___35608;
var G__35613 = cljs.core.count(c__4609__auto___35608);
var G__35614 = (0);
seq__34980_35589 = G__35611;
chunk__34982_35590 = G__35612;
count__34983_35591 = G__35613;
i__34984_35592 = G__35614;
continue;
} else {
var vec__35063_35615 = cljs.core.first(seq__34980_35605__$1);
var actual_type_35616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063_35615,(0),null);
var __35617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063_35615,(1),null);
var keys_35618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35533,actual_type_35616,f_35587], null);
var canonical_f_35619 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35532),keys_35618);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35532,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35618], 0));

if(cljs.core.truth_(elem_35532.removeEventListener)){
elem_35532.removeEventListener(cljs.core.name(actual_type_35616),canonical_f_35619);
} else {
elem_35532.detachEvent(cljs.core.name(actual_type_35616),canonical_f_35619);
}


var G__35621 = cljs.core.next(seq__34980_35605__$1);
var G__35622 = null;
var G__35623 = (0);
var G__35624 = (0);
seq__34980_35589 = G__35621;
chunk__34982_35590 = G__35622;
count__34983_35591 = G__35623;
i__34984_35592 = G__35624;
continue;
}
} else {
}
}
break;
}

var G__35626 = cljs.core.next(seq__34979_35578__$1);
var G__35627 = null;
var G__35628 = (0);
var G__35629 = (0);
seq__34979_35534 = G__35626;
chunk__34986_35535 = G__35627;
count__34987_35536 = G__35628;
i__34988_35537 = G__35629;
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
var len__4789__auto___35630 = arguments.length;
var i__4790__auto___35631 = (0);
while(true){
if((i__4790__auto___35631 < len__4789__auto___35630)){
args__4795__auto__.push((arguments[i__4790__auto___35631]));

var G__35632 = (i__4790__auto___35631 + (1));
i__4790__auto___35631 = G__35632;
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

var vec__35068_35635 = dommy.core.elem_and_selector(elem_sel);
var elem_35636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35635,(0),null);
var selector_35637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35635,(1),null);
var seq__35071_35638 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35072_35639 = null;
var count__35073_35640 = (0);
var i__35074_35641 = (0);
while(true){
if((i__35074_35641 < count__35073_35640)){
var vec__35081_35644 = chunk__35072_35639.cljs$core$IIndexed$_nth$arity$2(null,i__35074_35641);
var type_35645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081_35644,(0),null);
var f_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081_35644,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35645,((function (seq__35071_35638,chunk__35072_35639,count__35073_35640,i__35074_35641,vec__35081_35644,type_35645,f_35646,vec__35068_35635,elem_35636,selector_35637){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35645,dommy$core$this_fn], 0));

return (f_35646.cljs$core$IFn$_invoke$arity$1 ? f_35646.cljs$core$IFn$_invoke$arity$1(e) : f_35646.call(null,e));
});})(seq__35071_35638,chunk__35072_35639,count__35073_35640,i__35074_35641,vec__35081_35644,type_35645,f_35646,vec__35068_35635,elem_35636,selector_35637))
], 0));


var G__35647 = seq__35071_35638;
var G__35648 = chunk__35072_35639;
var G__35649 = count__35073_35640;
var G__35650 = (i__35074_35641 + (1));
seq__35071_35638 = G__35647;
chunk__35072_35639 = G__35648;
count__35073_35640 = G__35649;
i__35074_35641 = G__35650;
continue;
} else {
var temp__5735__auto___35652 = cljs.core.seq(seq__35071_35638);
if(temp__5735__auto___35652){
var seq__35071_35655__$1 = temp__5735__auto___35652;
if(cljs.core.chunked_seq_QMARK_(seq__35071_35655__$1)){
var c__4609__auto___35658 = cljs.core.chunk_first(seq__35071_35655__$1);
var G__35659 = cljs.core.chunk_rest(seq__35071_35655__$1);
var G__35660 = c__4609__auto___35658;
var G__35661 = cljs.core.count(c__4609__auto___35658);
var G__35662 = (0);
seq__35071_35638 = G__35659;
chunk__35072_35639 = G__35660;
count__35073_35640 = G__35661;
i__35074_35641 = G__35662;
continue;
} else {
var vec__35084_35663 = cljs.core.first(seq__35071_35655__$1);
var type_35664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084_35663,(0),null);
var f_35665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084_35663,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35664,((function (seq__35071_35638,chunk__35072_35639,count__35073_35640,i__35074_35641,vec__35084_35663,type_35664,f_35665,seq__35071_35655__$1,temp__5735__auto___35652,vec__35068_35635,elem_35636,selector_35637){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35664,dommy$core$this_fn], 0));

return (f_35665.cljs$core$IFn$_invoke$arity$1 ? f_35665.cljs$core$IFn$_invoke$arity$1(e) : f_35665.call(null,e));
});})(seq__35071_35638,chunk__35072_35639,count__35073_35640,i__35074_35641,vec__35084_35663,type_35664,f_35665,seq__35071_35655__$1,temp__5735__auto___35652,vec__35068_35635,elem_35636,selector_35637))
], 0));


var G__35669 = cljs.core.next(seq__35071_35655__$1);
var G__35670 = null;
var G__35671 = (0);
var G__35672 = (0);
seq__35071_35638 = G__35669;
chunk__35072_35639 = G__35670;
count__35073_35640 = G__35671;
i__35074_35641 = G__35672;
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
