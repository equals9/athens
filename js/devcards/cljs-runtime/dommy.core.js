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
var len__4789__auto___35107 = arguments.length;
var i__4790__auto___35108 = (0);
while(true){
if((i__4790__auto___35108 < len__4789__auto___35107)){
args__4795__auto__.push((arguments[i__4790__auto___35108]));

var G__35110 = (i__4790__auto___35108 + (1));
i__4790__auto___35108 = G__35110;
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
var seq__34726_35112 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34727_35113 = null;
var count__34728_35114 = (0);
var i__34729_35115 = (0);
while(true){
if((i__34729_35115 < count__34728_35114)){
var vec__34736_35116 = chunk__34727_35113.cljs$core$IIndexed$_nth$arity$2(null,i__34729_35115);
var k_35117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35116,(0),null);
var v_35118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35116,(1),null);
style.setProperty(dommy.utils.as_str(k_35117),v_35118);


var G__35119 = seq__34726_35112;
var G__35120 = chunk__34727_35113;
var G__35121 = count__34728_35114;
var G__35122 = (i__34729_35115 + (1));
seq__34726_35112 = G__35119;
chunk__34727_35113 = G__35120;
count__34728_35114 = G__35121;
i__34729_35115 = G__35122;
continue;
} else {
var temp__5735__auto___35123 = cljs.core.seq(seq__34726_35112);
if(temp__5735__auto___35123){
var seq__34726_35124__$1 = temp__5735__auto___35123;
if(cljs.core.chunked_seq_QMARK_(seq__34726_35124__$1)){
var c__4609__auto___35125 = cljs.core.chunk_first(seq__34726_35124__$1);
var G__35126 = cljs.core.chunk_rest(seq__34726_35124__$1);
var G__35127 = c__4609__auto___35125;
var G__35128 = cljs.core.count(c__4609__auto___35125);
var G__35129 = (0);
seq__34726_35112 = G__35126;
chunk__34727_35113 = G__35127;
count__34728_35114 = G__35128;
i__34729_35115 = G__35129;
continue;
} else {
var vec__34739_35130 = cljs.core.first(seq__34726_35124__$1);
var k_35131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35130,(0),null);
var v_35132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35130,(1),null);
style.setProperty(dommy.utils.as_str(k_35131),v_35132);


var G__35133 = cljs.core.next(seq__34726_35124__$1);
var G__35134 = null;
var G__35135 = (0);
var G__35136 = (0);
seq__34726_35112 = G__35133;
chunk__34727_35113 = G__35134;
count__34728_35114 = G__35135;
i__34729_35115 = G__35136;
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
var len__4789__auto___35137 = arguments.length;
var i__4790__auto___35138 = (0);
while(true){
if((i__4790__auto___35138 < len__4789__auto___35137)){
args__4795__auto__.push((arguments[i__4790__auto___35138]));

var G__35139 = (i__4790__auto___35138 + (1));
i__4790__auto___35138 = G__35139;
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
var seq__34744_35140 = cljs.core.seq(keywords);
var chunk__34745_35141 = null;
var count__34746_35142 = (0);
var i__34747_35143 = (0);
while(true){
if((i__34747_35143 < count__34746_35142)){
var kw_35144 = chunk__34745_35141.cljs$core$IIndexed$_nth$arity$2(null,i__34747_35143);
style.removeProperty(dommy.utils.as_str(kw_35144));


var G__35145 = seq__34744_35140;
var G__35146 = chunk__34745_35141;
var G__35147 = count__34746_35142;
var G__35148 = (i__34747_35143 + (1));
seq__34744_35140 = G__35145;
chunk__34745_35141 = G__35146;
count__34746_35142 = G__35147;
i__34747_35143 = G__35148;
continue;
} else {
var temp__5735__auto___35150 = cljs.core.seq(seq__34744_35140);
if(temp__5735__auto___35150){
var seq__34744_35153__$1 = temp__5735__auto___35150;
if(cljs.core.chunked_seq_QMARK_(seq__34744_35153__$1)){
var c__4609__auto___35154 = cljs.core.chunk_first(seq__34744_35153__$1);
var G__35156 = cljs.core.chunk_rest(seq__34744_35153__$1);
var G__35157 = c__4609__auto___35154;
var G__35158 = cljs.core.count(c__4609__auto___35154);
var G__35159 = (0);
seq__34744_35140 = G__35156;
chunk__34745_35141 = G__35157;
count__34746_35142 = G__35158;
i__34747_35143 = G__35159;
continue;
} else {
var kw_35160 = cljs.core.first(seq__34744_35153__$1);
style.removeProperty(dommy.utils.as_str(kw_35160));


var G__35161 = cljs.core.next(seq__34744_35153__$1);
var G__35162 = null;
var G__35163 = (0);
var G__35164 = (0);
seq__34744_35140 = G__35161;
chunk__34745_35141 = G__35162;
count__34746_35142 = G__35163;
i__34747_35143 = G__35164;
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
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__34750_35169 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34751_35170 = null;
var count__34752_35171 = (0);
var i__34753_35172 = (0);
while(true){
if((i__34753_35172 < count__34752_35171)){
var vec__34760_35173 = chunk__34751_35170.cljs$core$IIndexed$_nth$arity$2(null,i__34753_35172);
var k_35174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760_35173,(0),null);
var v_35175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760_35173,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35174,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35175),"px"].join('')], 0));


var G__35181 = seq__34750_35169;
var G__35182 = chunk__34751_35170;
var G__35183 = count__34752_35171;
var G__35184 = (i__34753_35172 + (1));
seq__34750_35169 = G__35181;
chunk__34751_35170 = G__35182;
count__34752_35171 = G__35183;
i__34753_35172 = G__35184;
continue;
} else {
var temp__5735__auto___35190 = cljs.core.seq(seq__34750_35169);
if(temp__5735__auto___35190){
var seq__34750_35191__$1 = temp__5735__auto___35190;
if(cljs.core.chunked_seq_QMARK_(seq__34750_35191__$1)){
var c__4609__auto___35193 = cljs.core.chunk_first(seq__34750_35191__$1);
var G__35194 = cljs.core.chunk_rest(seq__34750_35191__$1);
var G__35195 = c__4609__auto___35193;
var G__35196 = cljs.core.count(c__4609__auto___35193);
var G__35197 = (0);
seq__34750_35169 = G__35194;
chunk__34751_35170 = G__35195;
count__34752_35171 = G__35196;
i__34753_35172 = G__35197;
continue;
} else {
var vec__34763_35204 = cljs.core.first(seq__34750_35191__$1);
var k_35205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763_35204,(0),null);
var v_35206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763_35204,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35205,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35206),"px"].join('')], 0));


var G__35212 = cljs.core.next(seq__34750_35191__$1);
var G__35213 = null;
var G__35214 = (0);
var G__35215 = (0);
seq__34750_35169 = G__35212;
chunk__34751_35170 = G__35213;
count__34752_35171 = G__35214;
i__34753_35172 = G__35215;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34748){
var G__34749 = cljs.core.first(seq34748);
var seq34748__$1 = cljs.core.next(seq34748);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34749,seq34748__$1);
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
var len__4789__auto___35217 = arguments.length;
var i__4790__auto___35218 = (0);
while(true){
if((i__4790__auto___35218 < len__4789__auto___35217)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35218]));

var G__35219 = (i__4790__auto___35218 + (1));
i__4790__auto___35218 = G__35219;
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

var seq__34775_35220 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34776_35221 = null;
var count__34777_35222 = (0);
var i__34778_35223 = (0);
while(true){
if((i__34778_35223 < count__34777_35222)){
var vec__34785_35224 = chunk__34776_35221.cljs$core$IIndexed$_nth$arity$2(null,i__34778_35223);
var k_35225__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35224,(0),null);
var v_35226__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35224,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35225__$1,v_35226__$1);


var G__35228 = seq__34775_35220;
var G__35229 = chunk__34776_35221;
var G__35230 = count__34777_35222;
var G__35231 = (i__34778_35223 + (1));
seq__34775_35220 = G__35228;
chunk__34776_35221 = G__35229;
count__34777_35222 = G__35230;
i__34778_35223 = G__35231;
continue;
} else {
var temp__5735__auto___35236 = cljs.core.seq(seq__34775_35220);
if(temp__5735__auto___35236){
var seq__34775_35237__$1 = temp__5735__auto___35236;
if(cljs.core.chunked_seq_QMARK_(seq__34775_35237__$1)){
var c__4609__auto___35239 = cljs.core.chunk_first(seq__34775_35237__$1);
var G__35240 = cljs.core.chunk_rest(seq__34775_35237__$1);
var G__35241 = c__4609__auto___35239;
var G__35242 = cljs.core.count(c__4609__auto___35239);
var G__35243 = (0);
seq__34775_35220 = G__35240;
chunk__34776_35221 = G__35241;
count__34777_35222 = G__35242;
i__34778_35223 = G__35243;
continue;
} else {
var vec__34788_35244 = cljs.core.first(seq__34775_35237__$1);
var k_35245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35244,(0),null);
var v_35246__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35244,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35245__$1,v_35246__$1);


var G__35251 = cljs.core.next(seq__34775_35237__$1);
var G__35252 = null;
var G__35253 = (0);
var G__35254 = (0);
seq__34775_35220 = G__35251;
chunk__34776_35221 = G__35252;
count__34777_35222 = G__35253;
i__34778_35223 = G__35254;
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
var len__4789__auto___35268 = arguments.length;
var i__4790__auto___35269 = (0);
while(true){
if((i__4790__auto___35269 < len__4789__auto___35268)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35269]));

var G__35270 = (i__4790__auto___35269 + (1));
i__4790__auto___35269 = G__35270;
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
var k_35271__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34796.cljs$core$IFn$_invoke$arity$1 ? fexpr__34796.cljs$core$IFn$_invoke$arity$1(k_35271__$1) : fexpr__34796.call(null,k_35271__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35271__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34797_35272 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34798_35273 = null;
var count__34799_35274 = (0);
var i__34800_35275 = (0);
while(true){
if((i__34800_35275 < count__34799_35274)){
var k_35276__$1 = chunk__34798_35273.cljs$core$IIndexed$_nth$arity$2(null,i__34800_35275);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35276__$1);


var G__35277 = seq__34797_35272;
var G__35278 = chunk__34798_35273;
var G__35279 = count__34799_35274;
var G__35280 = (i__34800_35275 + (1));
seq__34797_35272 = G__35277;
chunk__34798_35273 = G__35278;
count__34799_35274 = G__35279;
i__34800_35275 = G__35280;
continue;
} else {
var temp__5735__auto___35281 = cljs.core.seq(seq__34797_35272);
if(temp__5735__auto___35281){
var seq__34797_35282__$1 = temp__5735__auto___35281;
if(cljs.core.chunked_seq_QMARK_(seq__34797_35282__$1)){
var c__4609__auto___35283 = cljs.core.chunk_first(seq__34797_35282__$1);
var G__35284 = cljs.core.chunk_rest(seq__34797_35282__$1);
var G__35285 = c__4609__auto___35283;
var G__35286 = cljs.core.count(c__4609__auto___35283);
var G__35287 = (0);
seq__34797_35272 = G__35284;
chunk__34798_35273 = G__35285;
count__34799_35274 = G__35286;
i__34800_35275 = G__35287;
continue;
} else {
var k_35288__$1 = cljs.core.first(seq__34797_35282__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35288__$1);


var G__35289 = cljs.core.next(seq__34797_35282__$1);
var G__35290 = null;
var G__35291 = (0);
var G__35292 = (0);
seq__34797_35272 = G__35289;
chunk__34798_35273 = G__35290;
count__34799_35274 = G__35291;
i__34800_35275 = G__35292;
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
var len__4789__auto___35298 = arguments.length;
var i__4790__auto___35299 = (0);
while(true){
if((i__4790__auto___35299 < len__4789__auto___35298)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35299]));

var G__35300 = (i__4790__auto___35299 + (1));
i__4790__auto___35299 = G__35300;
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
var temp__5733__auto___35301 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35301)){
var class_list_35302 = temp__5733__auto___35301;
var seq__34808_35304 = cljs.core.seq(classes__$1);
var chunk__34809_35305 = null;
var count__34810_35306 = (0);
var i__34811_35307 = (0);
while(true){
if((i__34811_35307 < count__34810_35306)){
var c_35308 = chunk__34809_35305.cljs$core$IIndexed$_nth$arity$2(null,i__34811_35307);
class_list_35302.add(c_35308);


var G__35309 = seq__34808_35304;
var G__35310 = chunk__34809_35305;
var G__35311 = count__34810_35306;
var G__35312 = (i__34811_35307 + (1));
seq__34808_35304 = G__35309;
chunk__34809_35305 = G__35310;
count__34810_35306 = G__35311;
i__34811_35307 = G__35312;
continue;
} else {
var temp__5735__auto___35313 = cljs.core.seq(seq__34808_35304);
if(temp__5735__auto___35313){
var seq__34808_35314__$1 = temp__5735__auto___35313;
if(cljs.core.chunked_seq_QMARK_(seq__34808_35314__$1)){
var c__4609__auto___35315 = cljs.core.chunk_first(seq__34808_35314__$1);
var G__35316 = cljs.core.chunk_rest(seq__34808_35314__$1);
var G__35317 = c__4609__auto___35315;
var G__35318 = cljs.core.count(c__4609__auto___35315);
var G__35319 = (0);
seq__34808_35304 = G__35316;
chunk__34809_35305 = G__35317;
count__34810_35306 = G__35318;
i__34811_35307 = G__35319;
continue;
} else {
var c_35320 = cljs.core.first(seq__34808_35314__$1);
class_list_35302.add(c_35320);


var G__35322 = cljs.core.next(seq__34808_35314__$1);
var G__35323 = null;
var G__35324 = (0);
var G__35325 = (0);
seq__34808_35304 = G__35322;
chunk__34809_35305 = G__35323;
count__34810_35306 = G__35324;
i__34811_35307 = G__35325;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34812_35326 = cljs.core.seq(classes__$1);
var chunk__34813_35327 = null;
var count__34814_35328 = (0);
var i__34815_35329 = (0);
while(true){
if((i__34815_35329 < count__34814_35328)){
var c_35330 = chunk__34813_35327.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35329);
var class_name_35331 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35331,c_35330))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35331 === ""))?c_35330:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35331)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35330)].join('')));
}


var G__35332 = seq__34812_35326;
var G__35333 = chunk__34813_35327;
var G__35334 = count__34814_35328;
var G__35335 = (i__34815_35329 + (1));
seq__34812_35326 = G__35332;
chunk__34813_35327 = G__35333;
count__34814_35328 = G__35334;
i__34815_35329 = G__35335;
continue;
} else {
var temp__5735__auto___35336 = cljs.core.seq(seq__34812_35326);
if(temp__5735__auto___35336){
var seq__34812_35337__$1 = temp__5735__auto___35336;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35337__$1)){
var c__4609__auto___35338 = cljs.core.chunk_first(seq__34812_35337__$1);
var G__35339 = cljs.core.chunk_rest(seq__34812_35337__$1);
var G__35340 = c__4609__auto___35338;
var G__35341 = cljs.core.count(c__4609__auto___35338);
var G__35342 = (0);
seq__34812_35326 = G__35339;
chunk__34813_35327 = G__35340;
count__34814_35328 = G__35341;
i__34815_35329 = G__35342;
continue;
} else {
var c_35343 = cljs.core.first(seq__34812_35337__$1);
var class_name_35344 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35344,c_35343))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35344 === ""))?c_35343:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35344)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35343)].join('')));
}


var G__35345 = cljs.core.next(seq__34812_35337__$1);
var G__35346 = null;
var G__35347 = (0);
var G__35348 = (0);
seq__34812_35326 = G__35345;
chunk__34813_35327 = G__35346;
count__34814_35328 = G__35347;
i__34815_35329 = G__35348;
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
var seq__34816_35349 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34817_35350 = null;
var count__34818_35351 = (0);
var i__34819_35352 = (0);
while(true){
if((i__34819_35352 < count__34818_35351)){
var c_35353 = chunk__34817_35350.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35352);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35353);


var G__35354 = seq__34816_35349;
var G__35355 = chunk__34817_35350;
var G__35356 = count__34818_35351;
var G__35357 = (i__34819_35352 + (1));
seq__34816_35349 = G__35354;
chunk__34817_35350 = G__35355;
count__34818_35351 = G__35356;
i__34819_35352 = G__35357;
continue;
} else {
var temp__5735__auto___35358 = cljs.core.seq(seq__34816_35349);
if(temp__5735__auto___35358){
var seq__34816_35359__$1 = temp__5735__auto___35358;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35359__$1)){
var c__4609__auto___35360 = cljs.core.chunk_first(seq__34816_35359__$1);
var G__35361 = cljs.core.chunk_rest(seq__34816_35359__$1);
var G__35362 = c__4609__auto___35360;
var G__35363 = cljs.core.count(c__4609__auto___35360);
var G__35364 = (0);
seq__34816_35349 = G__35361;
chunk__34817_35350 = G__35362;
count__34818_35351 = G__35363;
i__34819_35352 = G__35364;
continue;
} else {
var c_35365 = cljs.core.first(seq__34816_35359__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35365);


var G__35366 = cljs.core.next(seq__34816_35359__$1);
var G__35367 = null;
var G__35368 = (0);
var G__35369 = (0);
seq__34816_35349 = G__35366;
chunk__34817_35350 = G__35367;
count__34818_35351 = G__35368;
i__34819_35352 = G__35369;
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
var len__4789__auto___35371 = arguments.length;
var i__4790__auto___35372 = (0);
while(true){
if((i__4790__auto___35372 < len__4789__auto___35371)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35372]));

var G__35373 = (i__4790__auto___35372 + (1));
i__4790__auto___35372 = G__35373;
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
var temp__5733__auto___35374 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35374)){
var class_list_35375 = temp__5733__auto___35374;
class_list_35375.remove(c__$1);
} else {
var class_name_35376 = dommy.core.class$(elem);
var new_class_name_35377 = dommy.utils.remove_class_str(class_name_35376,c__$1);
if((class_name_35376 === new_class_name_35377)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35377);
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


var G__35378 = seq__34825;
var G__35379 = chunk__34826;
var G__35380 = count__34827;
var G__35381 = (i__34828 + (1));
seq__34825 = G__35378;
chunk__34826 = G__35379;
count__34827 = G__35380;
i__34828 = G__35381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34825);
if(temp__5735__auto__){
var seq__34825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34825__$1);
var G__35382 = cljs.core.chunk_rest(seq__34825__$1);
var G__35383 = c__4609__auto__;
var G__35384 = cljs.core.count(c__4609__auto__);
var G__35385 = (0);
seq__34825 = G__35382;
chunk__34826 = G__35383;
count__34827 = G__35384;
i__34828 = G__35385;
continue;
} else {
var c = cljs.core.first(seq__34825__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35386 = cljs.core.next(seq__34825__$1);
var G__35387 = null;
var G__35388 = (0);
var G__35389 = (0);
seq__34825 = G__35386;
chunk__34826 = G__35387;
count__34827 = G__35388;
i__34828 = G__35389;
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
var temp__5733__auto___35391 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35391)){
var class_list_35392 = temp__5733__auto___35391;
class_list_35392.toggle(c__$1);
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
var G__34834 = arguments.length;
switch (G__34834) {
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
var G__34839 = arguments.length;
switch (G__34839) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35396 = arguments.length;
var i__4790__auto___35397 = (0);
while(true){
if((i__4790__auto___35397 < len__4789__auto___35396)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35397]));

var G__35398 = (i__4790__auto___35397 + (1));
i__4790__auto___35397 = G__35398;
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
var G__34840 = parent;
G__34840.appendChild(child);

return G__34840;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34841_35399 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34842_35400 = null;
var count__34843_35401 = (0);
var i__34844_35402 = (0);
while(true){
if((i__34844_35402 < count__34843_35401)){
var c_35403 = chunk__34842_35400.cljs$core$IIndexed$_nth$arity$2(null,i__34844_35402);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35403);


var G__35404 = seq__34841_35399;
var G__35405 = chunk__34842_35400;
var G__35406 = count__34843_35401;
var G__35407 = (i__34844_35402 + (1));
seq__34841_35399 = G__35404;
chunk__34842_35400 = G__35405;
count__34843_35401 = G__35406;
i__34844_35402 = G__35407;
continue;
} else {
var temp__5735__auto___35408 = cljs.core.seq(seq__34841_35399);
if(temp__5735__auto___35408){
var seq__34841_35409__$1 = temp__5735__auto___35408;
if(cljs.core.chunked_seq_QMARK_(seq__34841_35409__$1)){
var c__4609__auto___35410 = cljs.core.chunk_first(seq__34841_35409__$1);
var G__35411 = cljs.core.chunk_rest(seq__34841_35409__$1);
var G__35412 = c__4609__auto___35410;
var G__35413 = cljs.core.count(c__4609__auto___35410);
var G__35414 = (0);
seq__34841_35399 = G__35411;
chunk__34842_35400 = G__35412;
count__34843_35401 = G__35413;
i__34844_35402 = G__35414;
continue;
} else {
var c_35415 = cljs.core.first(seq__34841_35409__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35415);


var G__35416 = cljs.core.next(seq__34841_35409__$1);
var G__35417 = null;
var G__35418 = (0);
var G__35419 = (0);
seq__34841_35399 = G__35416;
chunk__34842_35400 = G__35417;
count__34843_35401 = G__35418;
i__34844_35402 = G__35419;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34836){
var G__34837 = cljs.core.first(seq34836);
var seq34836__$1 = cljs.core.next(seq34836);
var G__34838 = cljs.core.first(seq34836__$1);
var seq34836__$2 = cljs.core.next(seq34836__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34837,G__34838,seq34836__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34849 = arguments.length;
switch (G__34849) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35421 = arguments.length;
var i__4790__auto___35422 = (0);
while(true){
if((i__4790__auto___35422 < len__4789__auto___35421)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35422]));

var G__35423 = (i__4790__auto___35422 + (1));
i__4790__auto___35422 = G__35423;
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
var G__34850 = parent;
G__34850.insertBefore(child,parent.firstChild);

return G__34850;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34851_35424 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34852_35425 = null;
var count__34853_35426 = (0);
var i__34854_35427 = (0);
while(true){
if((i__34854_35427 < count__34853_35426)){
var c_35428 = chunk__34852_35425.cljs$core$IIndexed$_nth$arity$2(null,i__34854_35427);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35428);


var G__35429 = seq__34851_35424;
var G__35430 = chunk__34852_35425;
var G__35431 = count__34853_35426;
var G__35432 = (i__34854_35427 + (1));
seq__34851_35424 = G__35429;
chunk__34852_35425 = G__35430;
count__34853_35426 = G__35431;
i__34854_35427 = G__35432;
continue;
} else {
var temp__5735__auto___35433 = cljs.core.seq(seq__34851_35424);
if(temp__5735__auto___35433){
var seq__34851_35436__$1 = temp__5735__auto___35433;
if(cljs.core.chunked_seq_QMARK_(seq__34851_35436__$1)){
var c__4609__auto___35437 = cljs.core.chunk_first(seq__34851_35436__$1);
var G__35438 = cljs.core.chunk_rest(seq__34851_35436__$1);
var G__35439 = c__4609__auto___35437;
var G__35440 = cljs.core.count(c__4609__auto___35437);
var G__35441 = (0);
seq__34851_35424 = G__35438;
chunk__34852_35425 = G__35439;
count__34853_35426 = G__35440;
i__34854_35427 = G__35441;
continue;
} else {
var c_35442 = cljs.core.first(seq__34851_35436__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35442);


var G__35443 = cljs.core.next(seq__34851_35436__$1);
var G__35444 = null;
var G__35445 = (0);
var G__35446 = (0);
seq__34851_35424 = G__35443;
chunk__34852_35425 = G__35444;
count__34853_35426 = G__35445;
i__34854_35427 = G__35446;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34846){
var G__34847 = cljs.core.first(seq34846);
var seq34846__$1 = cljs.core.next(seq34846);
var G__34848 = cljs.core.first(seq34846__$1);
var seq34846__$2 = cljs.core.next(seq34846__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34847,G__34848,seq34846__$2);
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
var temp__5733__auto___35447 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35447)){
var next_35448 = temp__5733__auto___35447;
dommy.core.insert_before_BANG_(elem,next_35448);
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
var G__34857 = arguments.length;
switch (G__34857) {
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
var G__34858 = p;
G__34858.removeChild(elem);

return G__34858;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34859){
var vec__34860 = p__34859;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860,(1),null);
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
var len__4789__auto___35454 = arguments.length;
var i__4790__auto___35455 = (0);
while(true){
if((i__4790__auto___35455 < len__4789__auto___35454)){
args__4795__auto__.push((arguments[i__4790__auto___35455]));

var G__35456 = (i__4790__auto___35455 + (1));
i__4790__auto___35455 = G__35456;
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
var len__4789__auto___35457 = arguments.length;
var i__4790__auto___35458 = (0);
while(true){
if((i__4790__auto___35458 < len__4789__auto___35457)){
args__4795__auto__.push((arguments[i__4790__auto___35458]));

var G__35459 = (i__4790__auto___35458 + (1));
i__4790__auto___35458 = G__35459;
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

var vec__34871_35460 = dommy.core.elem_and_selector(elem_sel);
var elem_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35460,(0),null);
var selector_35462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35460,(1),null);
var seq__34874_35463 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34881_35464 = null;
var count__34882_35465 = (0);
var i__34883_35466 = (0);
while(true){
if((i__34883_35466 < count__34882_35465)){
var vec__34936_35467 = chunk__34881_35464.cljs$core$IIndexed$_nth$arity$2(null,i__34883_35466);
var orig_type_35468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34936_35467,(0),null);
var f_35469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34936_35467,(1),null);
var seq__34884_35470 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35468,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35468,cljs.core.identity])));
var chunk__34886_35471 = null;
var count__34887_35472 = (0);
var i__34888_35473 = (0);
while(true){
if((i__34888_35473 < count__34887_35472)){
var vec__34949_35474 = chunk__34886_35471.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35473);
var actual_type_35475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34949_35474,(0),null);
var factory_35476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34949_35474,(1),null);
var canonical_f_35477 = (function (){var G__34953 = (factory_35476.cljs$core$IFn$_invoke$arity$1 ? factory_35476.cljs$core$IFn$_invoke$arity$1(f_35469) : factory_35476.call(null,f_35469));
var fexpr__34952 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34952.cljs$core$IFn$_invoke$arity$1 ? fexpr__34952.cljs$core$IFn$_invoke$arity$1(G__34953) : fexpr__34952.call(null,G__34953));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35475,f_35469], null),canonical_f_35477], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35475),canonical_f_35477);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35475),canonical_f_35477);
}


var G__35478 = seq__34884_35470;
var G__35479 = chunk__34886_35471;
var G__35480 = count__34887_35472;
var G__35481 = (i__34888_35473 + (1));
seq__34884_35470 = G__35478;
chunk__34886_35471 = G__35479;
count__34887_35472 = G__35480;
i__34888_35473 = G__35481;
continue;
} else {
var temp__5735__auto___35482 = cljs.core.seq(seq__34884_35470);
if(temp__5735__auto___35482){
var seq__34884_35483__$1 = temp__5735__auto___35482;
if(cljs.core.chunked_seq_QMARK_(seq__34884_35483__$1)){
var c__4609__auto___35484 = cljs.core.chunk_first(seq__34884_35483__$1);
var G__35485 = cljs.core.chunk_rest(seq__34884_35483__$1);
var G__35486 = c__4609__auto___35484;
var G__35487 = cljs.core.count(c__4609__auto___35484);
var G__35488 = (0);
seq__34884_35470 = G__35485;
chunk__34886_35471 = G__35486;
count__34887_35472 = G__35487;
i__34888_35473 = G__35488;
continue;
} else {
var vec__34954_35489 = cljs.core.first(seq__34884_35483__$1);
var actual_type_35490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34954_35489,(0),null);
var factory_35491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34954_35489,(1),null);
var canonical_f_35492 = (function (){var G__34958 = (factory_35491.cljs$core$IFn$_invoke$arity$1 ? factory_35491.cljs$core$IFn$_invoke$arity$1(f_35469) : factory_35491.call(null,f_35469));
var fexpr__34957 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34957.cljs$core$IFn$_invoke$arity$1 ? fexpr__34957.cljs$core$IFn$_invoke$arity$1(G__34958) : fexpr__34957.call(null,G__34958));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35490,f_35469], null),canonical_f_35492], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35490),canonical_f_35492);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35490),canonical_f_35492);
}


var G__35493 = cljs.core.next(seq__34884_35483__$1);
var G__35494 = null;
var G__35495 = (0);
var G__35496 = (0);
seq__34884_35470 = G__35493;
chunk__34886_35471 = G__35494;
count__34887_35472 = G__35495;
i__34888_35473 = G__35496;
continue;
}
} else {
}
}
break;
}

var G__35497 = seq__34874_35463;
var G__35498 = chunk__34881_35464;
var G__35499 = count__34882_35465;
var G__35500 = (i__34883_35466 + (1));
seq__34874_35463 = G__35497;
chunk__34881_35464 = G__35498;
count__34882_35465 = G__35499;
i__34883_35466 = G__35500;
continue;
} else {
var temp__5735__auto___35501 = cljs.core.seq(seq__34874_35463);
if(temp__5735__auto___35501){
var seq__34874_35502__$1 = temp__5735__auto___35501;
if(cljs.core.chunked_seq_QMARK_(seq__34874_35502__$1)){
var c__4609__auto___35503 = cljs.core.chunk_first(seq__34874_35502__$1);
var G__35504 = cljs.core.chunk_rest(seq__34874_35502__$1);
var G__35505 = c__4609__auto___35503;
var G__35506 = cljs.core.count(c__4609__auto___35503);
var G__35507 = (0);
seq__34874_35463 = G__35504;
chunk__34881_35464 = G__35505;
count__34882_35465 = G__35506;
i__34883_35466 = G__35507;
continue;
} else {
var vec__34959_35508 = cljs.core.first(seq__34874_35502__$1);
var orig_type_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34959_35508,(0),null);
var f_35510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34959_35508,(1),null);
var seq__34875_35511 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35509,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35509,cljs.core.identity])));
var chunk__34877_35512 = null;
var count__34878_35513 = (0);
var i__34879_35514 = (0);
while(true){
if((i__34879_35514 < count__34878_35513)){
var vec__34975_35515 = chunk__34877_35512.cljs$core$IIndexed$_nth$arity$2(null,i__34879_35514);
var actual_type_35516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35515,(0),null);
var factory_35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35515,(1),null);
var canonical_f_35518 = (function (){var G__34979 = (factory_35517.cljs$core$IFn$_invoke$arity$1 ? factory_35517.cljs$core$IFn$_invoke$arity$1(f_35510) : factory_35517.call(null,f_35510));
var fexpr__34978 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35516,f_35510], null),canonical_f_35518], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35516),canonical_f_35518);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35516),canonical_f_35518);
}


var G__35519 = seq__34875_35511;
var G__35520 = chunk__34877_35512;
var G__35521 = count__34878_35513;
var G__35522 = (i__34879_35514 + (1));
seq__34875_35511 = G__35519;
chunk__34877_35512 = G__35520;
count__34878_35513 = G__35521;
i__34879_35514 = G__35522;
continue;
} else {
var temp__5735__auto___35523__$1 = cljs.core.seq(seq__34875_35511);
if(temp__5735__auto___35523__$1){
var seq__34875_35524__$1 = temp__5735__auto___35523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34875_35524__$1)){
var c__4609__auto___35525 = cljs.core.chunk_first(seq__34875_35524__$1);
var G__35526 = cljs.core.chunk_rest(seq__34875_35524__$1);
var G__35527 = c__4609__auto___35525;
var G__35528 = cljs.core.count(c__4609__auto___35525);
var G__35529 = (0);
seq__34875_35511 = G__35526;
chunk__34877_35512 = G__35527;
count__34878_35513 = G__35528;
i__34879_35514 = G__35529;
continue;
} else {
var vec__34980_35530 = cljs.core.first(seq__34875_35524__$1);
var actual_type_35531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35530,(0),null);
var factory_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35530,(1),null);
var canonical_f_35533 = (function (){var G__34984 = (factory_35532.cljs$core$IFn$_invoke$arity$1 ? factory_35532.cljs$core$IFn$_invoke$arity$1(f_35510) : factory_35532.call(null,f_35510));
var fexpr__34983 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35531,f_35510], null),canonical_f_35533], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35531),canonical_f_35533);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35531),canonical_f_35533);
}


var G__35534 = cljs.core.next(seq__34875_35524__$1);
var G__35535 = null;
var G__35536 = (0);
var G__35537 = (0);
seq__34875_35511 = G__35534;
chunk__34877_35512 = G__35535;
count__34878_35513 = G__35536;
i__34879_35514 = G__35537;
continue;
}
} else {
}
}
break;
}

var G__35538 = cljs.core.next(seq__34874_35502__$1);
var G__35539 = null;
var G__35540 = (0);
var G__35541 = (0);
seq__34874_35463 = G__35538;
chunk__34881_35464 = G__35539;
count__34882_35465 = G__35540;
i__34883_35466 = G__35541;
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
var len__4789__auto___35542 = arguments.length;
var i__4790__auto___35543 = (0);
while(true){
if((i__4790__auto___35543 < len__4789__auto___35542)){
args__4795__auto__.push((arguments[i__4790__auto___35543]));

var G__35544 = (i__4790__auto___35543 + (1));
i__4790__auto___35543 = G__35544;
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

var vec__34987_35545 = dommy.core.elem_and_selector(elem_sel);
var elem_35546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35545,(0),null);
var selector_35547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35545,(1),null);
var seq__34990_35548 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34997_35549 = null;
var count__34998_35550 = (0);
var i__34999_35551 = (0);
while(true){
if((i__34999_35551 < count__34998_35550)){
var vec__35039_35552 = chunk__34997_35549.cljs$core$IIndexed$_nth$arity$2(null,i__34999_35551);
var orig_type_35553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35039_35552,(0),null);
var f_35554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35039_35552,(1),null);
var seq__35000_35555 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35553,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35553,cljs.core.identity])));
var chunk__35002_35556 = null;
var count__35003_35557 = (0);
var i__35004_35558 = (0);
while(true){
if((i__35004_35558 < count__35003_35557)){
var vec__35048_35559 = chunk__35002_35556.cljs$core$IIndexed$_nth$arity$2(null,i__35004_35558);
var actual_type_35560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35048_35559,(0),null);
var __35561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35048_35559,(1),null);
var keys_35562 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35547,actual_type_35560,f_35554], null);
var canonical_f_35563 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35546),keys_35562);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35546,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35562], 0));

if(cljs.core.truth_(elem_35546.removeEventListener)){
elem_35546.removeEventListener(cljs.core.name(actual_type_35560),canonical_f_35563);
} else {
elem_35546.detachEvent(cljs.core.name(actual_type_35560),canonical_f_35563);
}


var G__35565 = seq__35000_35555;
var G__35566 = chunk__35002_35556;
var G__35567 = count__35003_35557;
var G__35568 = (i__35004_35558 + (1));
seq__35000_35555 = G__35565;
chunk__35002_35556 = G__35566;
count__35003_35557 = G__35567;
i__35004_35558 = G__35568;
continue;
} else {
var temp__5735__auto___35570 = cljs.core.seq(seq__35000_35555);
if(temp__5735__auto___35570){
var seq__35000_35571__$1 = temp__5735__auto___35570;
if(cljs.core.chunked_seq_QMARK_(seq__35000_35571__$1)){
var c__4609__auto___35572 = cljs.core.chunk_first(seq__35000_35571__$1);
var G__35573 = cljs.core.chunk_rest(seq__35000_35571__$1);
var G__35574 = c__4609__auto___35572;
var G__35575 = cljs.core.count(c__4609__auto___35572);
var G__35576 = (0);
seq__35000_35555 = G__35573;
chunk__35002_35556 = G__35574;
count__35003_35557 = G__35575;
i__35004_35558 = G__35576;
continue;
} else {
var vec__35051_35577 = cljs.core.first(seq__35000_35571__$1);
var actual_type_35578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051_35577,(0),null);
var __35579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051_35577,(1),null);
var keys_35580 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35547,actual_type_35578,f_35554], null);
var canonical_f_35581 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35546),keys_35580);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35546,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35580], 0));

if(cljs.core.truth_(elem_35546.removeEventListener)){
elem_35546.removeEventListener(cljs.core.name(actual_type_35578),canonical_f_35581);
} else {
elem_35546.detachEvent(cljs.core.name(actual_type_35578),canonical_f_35581);
}


var G__35582 = cljs.core.next(seq__35000_35571__$1);
var G__35583 = null;
var G__35584 = (0);
var G__35585 = (0);
seq__35000_35555 = G__35582;
chunk__35002_35556 = G__35583;
count__35003_35557 = G__35584;
i__35004_35558 = G__35585;
continue;
}
} else {
}
}
break;
}

var G__35586 = seq__34990_35548;
var G__35587 = chunk__34997_35549;
var G__35588 = count__34998_35550;
var G__35589 = (i__34999_35551 + (1));
seq__34990_35548 = G__35586;
chunk__34997_35549 = G__35587;
count__34998_35550 = G__35588;
i__34999_35551 = G__35589;
continue;
} else {
var temp__5735__auto___35590 = cljs.core.seq(seq__34990_35548);
if(temp__5735__auto___35590){
var seq__34990_35591__$1 = temp__5735__auto___35590;
if(cljs.core.chunked_seq_QMARK_(seq__34990_35591__$1)){
var c__4609__auto___35592 = cljs.core.chunk_first(seq__34990_35591__$1);
var G__35593 = cljs.core.chunk_rest(seq__34990_35591__$1);
var G__35594 = c__4609__auto___35592;
var G__35595 = cljs.core.count(c__4609__auto___35592);
var G__35596 = (0);
seq__34990_35548 = G__35593;
chunk__34997_35549 = G__35594;
count__34998_35550 = G__35595;
i__34999_35551 = G__35596;
continue;
} else {
var vec__35054_35597 = cljs.core.first(seq__34990_35591__$1);
var orig_type_35598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35597,(0),null);
var f_35599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35054_35597,(1),null);
var seq__34991_35600 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35598,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35598,cljs.core.identity])));
var chunk__34993_35601 = null;
var count__34994_35602 = (0);
var i__34995_35603 = (0);
while(true){
if((i__34995_35603 < count__34994_35602)){
var vec__35067_35605 = chunk__34993_35601.cljs$core$IIndexed$_nth$arity$2(null,i__34995_35603);
var actual_type_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067_35605,(0),null);
var __35607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067_35605,(1),null);
var keys_35608 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35547,actual_type_35606,f_35599], null);
var canonical_f_35609 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35546),keys_35608);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35546,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35608], 0));

if(cljs.core.truth_(elem_35546.removeEventListener)){
elem_35546.removeEventListener(cljs.core.name(actual_type_35606),canonical_f_35609);
} else {
elem_35546.detachEvent(cljs.core.name(actual_type_35606),canonical_f_35609);
}


var G__35612 = seq__34991_35600;
var G__35613 = chunk__34993_35601;
var G__35614 = count__34994_35602;
var G__35615 = (i__34995_35603 + (1));
seq__34991_35600 = G__35612;
chunk__34993_35601 = G__35613;
count__34994_35602 = G__35614;
i__34995_35603 = G__35615;
continue;
} else {
var temp__5735__auto___35617__$1 = cljs.core.seq(seq__34991_35600);
if(temp__5735__auto___35617__$1){
var seq__34991_35618__$1 = temp__5735__auto___35617__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34991_35618__$1)){
var c__4609__auto___35619 = cljs.core.chunk_first(seq__34991_35618__$1);
var G__35620 = cljs.core.chunk_rest(seq__34991_35618__$1);
var G__35621 = c__4609__auto___35619;
var G__35622 = cljs.core.count(c__4609__auto___35619);
var G__35623 = (0);
seq__34991_35600 = G__35620;
chunk__34993_35601 = G__35621;
count__34994_35602 = G__35622;
i__34995_35603 = G__35623;
continue;
} else {
var vec__35070_35624 = cljs.core.first(seq__34991_35618__$1);
var actual_type_35625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070_35624,(0),null);
var __35626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070_35624,(1),null);
var keys_35627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35547,actual_type_35625,f_35599], null);
var canonical_f_35628 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35546),keys_35627);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35546,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35627], 0));

if(cljs.core.truth_(elem_35546.removeEventListener)){
elem_35546.removeEventListener(cljs.core.name(actual_type_35625),canonical_f_35628);
} else {
elem_35546.detachEvent(cljs.core.name(actual_type_35625),canonical_f_35628);
}


var G__35634 = cljs.core.next(seq__34991_35618__$1);
var G__35635 = null;
var G__35636 = (0);
var G__35637 = (0);
seq__34991_35600 = G__35634;
chunk__34993_35601 = G__35635;
count__34994_35602 = G__35636;
i__34995_35603 = G__35637;
continue;
}
} else {
}
}
break;
}

var G__35638 = cljs.core.next(seq__34990_35591__$1);
var G__35639 = null;
var G__35640 = (0);
var G__35641 = (0);
seq__34990_35548 = G__35638;
chunk__34997_35549 = G__35639;
count__34998_35550 = G__35640;
i__34999_35551 = G__35641;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34985){
var G__34986 = cljs.core.first(seq34985);
var seq34985__$1 = cljs.core.next(seq34985);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34986,seq34985__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35642 = arguments.length;
var i__4790__auto___35644 = (0);
while(true){
if((i__4790__auto___35644 < len__4789__auto___35642)){
args__4795__auto__.push((arguments[i__4790__auto___35644]));

var G__35645 = (i__4790__auto___35644 + (1));
i__4790__auto___35644 = G__35645;
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

var vec__35078_35647 = dommy.core.elem_and_selector(elem_sel);
var elem_35648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35078_35647,(0),null);
var selector_35649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35078_35647,(1),null);
var seq__35081_35650 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35082_35651 = null;
var count__35083_35652 = (0);
var i__35084_35653 = (0);
while(true){
if((i__35084_35653 < count__35083_35652)){
var vec__35095_35655 = chunk__35082_35651.cljs$core$IIndexed$_nth$arity$2(null,i__35084_35653);
var type_35656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35655,(0),null);
var f_35657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35655,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35656,((function (seq__35081_35650,chunk__35082_35651,count__35083_35652,i__35084_35653,vec__35095_35655,type_35656,f_35657,vec__35078_35647,elem_35648,selector_35649){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35656,dommy$core$this_fn], 0));

return (f_35657.cljs$core$IFn$_invoke$arity$1 ? f_35657.cljs$core$IFn$_invoke$arity$1(e) : f_35657.call(null,e));
});})(seq__35081_35650,chunk__35082_35651,count__35083_35652,i__35084_35653,vec__35095_35655,type_35656,f_35657,vec__35078_35647,elem_35648,selector_35649))
], 0));


var G__35661 = seq__35081_35650;
var G__35662 = chunk__35082_35651;
var G__35663 = count__35083_35652;
var G__35664 = (i__35084_35653 + (1));
seq__35081_35650 = G__35661;
chunk__35082_35651 = G__35662;
count__35083_35652 = G__35663;
i__35084_35653 = G__35664;
continue;
} else {
var temp__5735__auto___35665 = cljs.core.seq(seq__35081_35650);
if(temp__5735__auto___35665){
var seq__35081_35666__$1 = temp__5735__auto___35665;
if(cljs.core.chunked_seq_QMARK_(seq__35081_35666__$1)){
var c__4609__auto___35668 = cljs.core.chunk_first(seq__35081_35666__$1);
var G__35669 = cljs.core.chunk_rest(seq__35081_35666__$1);
var G__35670 = c__4609__auto___35668;
var G__35671 = cljs.core.count(c__4609__auto___35668);
var G__35672 = (0);
seq__35081_35650 = G__35669;
chunk__35082_35651 = G__35670;
count__35083_35652 = G__35671;
i__35084_35653 = G__35672;
continue;
} else {
var vec__35098_35677 = cljs.core.first(seq__35081_35666__$1);
var type_35678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098_35677,(0),null);
var f_35679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098_35677,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35678,((function (seq__35081_35650,chunk__35082_35651,count__35083_35652,i__35084_35653,vec__35098_35677,type_35678,f_35679,seq__35081_35666__$1,temp__5735__auto___35665,vec__35078_35647,elem_35648,selector_35649){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35678,dommy$core$this_fn], 0));

return (f_35679.cljs$core$IFn$_invoke$arity$1 ? f_35679.cljs$core$IFn$_invoke$arity$1(e) : f_35679.call(null,e));
});})(seq__35081_35650,chunk__35082_35651,count__35083_35652,i__35084_35653,vec__35098_35677,type_35678,f_35679,seq__35081_35666__$1,temp__5735__auto___35665,vec__35078_35647,elem_35648,selector_35649))
], 0));


var G__35681 = cljs.core.next(seq__35081_35666__$1);
var G__35682 = null;
var G__35683 = (0);
var G__35684 = (0);
seq__35081_35650 = G__35681;
chunk__35082_35651 = G__35682;
count__35083_35652 = G__35683;
i__35084_35653 = G__35684;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35076){
var G__35077 = cljs.core.first(seq35076);
var seq35076__$1 = cljs.core.next(seq35076);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35077,seq35076__$1);
}));


//# sourceMappingURL=dommy.core.js.map
