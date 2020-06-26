goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__38229__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__38096 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__38097 = cljs.core.seq(vec__38096);
var first__38098 = cljs.core.first(seq__38097);
var seq__38097__$1 = cljs.core.next(seq__38097);
var tag = first__38098;
var body = seq__38097__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38230__i = 0, G__38230__a = new Array(arguments.length -  0);
while (G__38230__i < G__38230__a.length) {G__38230__a[G__38230__i] = arguments[G__38230__i + 0]; ++G__38230__i;}
  args = new cljs.core.IndexedSeq(G__38230__a,0,null);
} 
return G__38229__delegate.call(this,args);};
G__38229.cljs$lang$maxFixedArity = 0;
G__38229.cljs$lang$applyTo = (function (arglist__38231){
var args = cljs.core.seq(arglist__38231);
return G__38229__delegate(args);
});
G__38229.cljs$core$IFn$_invoke$arity$variadic = G__38229__delegate;
return G__38229;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__38099(s__38100){
return (new cljs.core.LazySeq(null,(function (){
var s__38100__$1 = s__38100;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38100__$1);
if(temp__5735__auto__){
var s__38100__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38100__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38100__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38102 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38101 = (0);
while(true){
if((i__38101 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38101);
cljs.core.chunk_append(b__38102,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38232 = (i__38101 + (1));
i__38101 = G__38232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38102),sablono$core$update_arglists_$_iter__38099(cljs.core.chunk_rest(s__38100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38102),null);
}
} else {
var args = cljs.core.first(s__38100__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38099(cljs.core.rest(s__38100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38233 = arguments.length;
var i__4790__auto___38234 = (0);
while(true){
if((i__4790__auto___38234 < len__4789__auto___38233)){
args__4795__auto__.push((arguments[i__4790__auto___38234]));

var G__38235 = (i__4790__auto___38234 + (1));
i__4790__auto___38234 = G__38235;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__38104(s__38105){
return (new cljs.core.LazySeq(null,(function (){
var s__38105__$1 = s__38105;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38105__$1);
if(temp__5735__auto__){
var s__38105__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38105__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38105__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38107 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38106 = (0);
while(true){
if((i__38106 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38106);
cljs.core.chunk_append(b__38107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38236 = (i__38106 + (1));
i__38106 = G__38236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38107),sablono$core$iter__38104(cljs.core.chunk_rest(s__38105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38107),null);
}
} else {
var style = cljs.core.first(s__38105__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38104(cljs.core.rest(s__38105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq38103){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38103));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__38108 = goog.dom.getDocument().body;
var G__38109 = (function (){var G__38110 = "script";
var G__38111 = ({"src": src});
return goog.dom.createDom(G__38110,G__38111);
})();
return goog.dom.appendChild(G__38108,G__38109);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to38112 = (function sablono$core$link_to38112(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38237 = arguments.length;
var i__4790__auto___38238 = (0);
while(true){
if((i__4790__auto___38238 < len__4789__auto___38237)){
args__4795__auto__.push((arguments[i__4790__auto___38238]));

var G__38239 = (i__4790__auto___38238 + (1));
i__4790__auto___38238 = G__38239;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38112.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to38112.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to38112.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to38112.cljs$lang$applyTo = (function (seq38113){
var G__38114 = cljs.core.first(seq38113);
var seq38113__$1 = cljs.core.next(seq38113);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38114,seq38113__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38112);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38115 = (function sablono$core$mail_to38115(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38240 = arguments.length;
var i__4790__auto___38241 = (0);
while(true){
if((i__4790__auto___38241 < len__4789__auto___38240)){
args__4795__auto__.push((arguments[i__4790__auto___38241]));

var G__38242 = (i__4790__auto___38241 + (1));
i__4790__auto___38241 = G__38242;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38115.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to38115.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38118){
var vec__38119 = p__38118;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38119,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to38115.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to38115.cljs$lang$applyTo = (function (seq38116){
var G__38117 = cljs.core.first(seq38116);
var seq38116__$1 = cljs.core.next(seq38116);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38117,seq38116__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38115);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38122 = (function sablono$core$unordered_list38122(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list38122_$_iter__38123(s__38124){
return (new cljs.core.LazySeq(null,(function (){
var s__38124__$1 = s__38124;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38124__$1);
if(temp__5735__auto__){
var s__38124__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38124__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38124__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38126 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38125 = (0);
while(true){
if((i__38125 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38125);
cljs.core.chunk_append(b__38126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38243 = (i__38125 + (1));
i__38125 = G__38243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38126),sablono$core$unordered_list38122_$_iter__38123(cljs.core.chunk_rest(s__38124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38126),null);
}
} else {
var x = cljs.core.first(s__38124__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38122_$_iter__38123(cljs.core.rest(s__38124__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38122);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38127 = (function sablono$core$ordered_list38127(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38127_$_iter__38128(s__38129){
return (new cljs.core.LazySeq(null,(function (){
var s__38129__$1 = s__38129;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38129__$1);
if(temp__5735__auto__){
var s__38129__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38129__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38129__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38131 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38130 = (0);
while(true){
if((i__38130 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38130);
cljs.core.chunk_append(b__38131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38244 = (i__38130 + (1));
i__38130 = G__38244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38131),sablono$core$ordered_list38127_$_iter__38128(cljs.core.chunk_rest(s__38129__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38131),null);
}
} else {
var x = cljs.core.first(s__38129__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38127_$_iter__38128(cljs.core.rest(s__38129__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38127);
/**
 * Create an image element.
 */
sablono.core.image38132 = (function sablono$core$image38132(var_args){
var G__38134 = arguments.length;
switch (G__38134) {
case 1:
return sablono.core.image38132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38132.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38132.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38132.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38132);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38135_SHARP_,p2__38136_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38135_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38136_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38137_SHARP_,p2__38138_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38137_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38138_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38140 = arguments.length;
switch (G__38140) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field38141 = (function sablono$core$color_field38141(var_args){
var G__38143 = arguments.length;
switch (G__38143) {
case 1:
return sablono.core.color_field38141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38141.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38088__auto__);
}));

(sablono.core.color_field38141.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.color_field38141.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38141);

/**
 * Creates a date input field.
 */
sablono.core.date_field38144 = (function sablono$core$date_field38144(var_args){
var G__38146 = arguments.length;
switch (G__38146) {
case 1:
return sablono.core.date_field38144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38144.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38088__auto__);
}));

(sablono.core.date_field38144.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.date_field38144.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38144);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38147 = (function sablono$core$datetime_field38147(var_args){
var G__38149 = arguments.length;
switch (G__38149) {
case 1:
return sablono.core.datetime_field38147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38147.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38088__auto__);
}));

(sablono.core.datetime_field38147.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.datetime_field38147.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38147);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38150 = (function sablono$core$datetime_local_field38150(var_args){
var G__38152 = arguments.length;
switch (G__38152) {
case 1:
return sablono.core.datetime_local_field38150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38150.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38088__auto__);
}));

(sablono.core.datetime_local_field38150.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.datetime_local_field38150.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38150);

/**
 * Creates a email input field.
 */
sablono.core.email_field38153 = (function sablono$core$email_field38153(var_args){
var G__38155 = arguments.length;
switch (G__38155) {
case 1:
return sablono.core.email_field38153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38153.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38088__auto__);
}));

(sablono.core.email_field38153.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.email_field38153.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38153);

/**
 * Creates a file input field.
 */
sablono.core.file_field38156 = (function sablono$core$file_field38156(var_args){
var G__38158 = arguments.length;
switch (G__38158) {
case 1:
return sablono.core.file_field38156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38156.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38088__auto__);
}));

(sablono.core.file_field38156.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.file_field38156.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38156);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38159 = (function sablono$core$hidden_field38159(var_args){
var G__38161 = arguments.length;
switch (G__38161) {
case 1:
return sablono.core.hidden_field38159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38159.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38088__auto__);
}));

(sablono.core.hidden_field38159.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.hidden_field38159.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38159);

/**
 * Creates a month input field.
 */
sablono.core.month_field38162 = (function sablono$core$month_field38162(var_args){
var G__38164 = arguments.length;
switch (G__38164) {
case 1:
return sablono.core.month_field38162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38162.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38088__auto__);
}));

(sablono.core.month_field38162.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.month_field38162.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38162);

/**
 * Creates a number input field.
 */
sablono.core.number_field38165 = (function sablono$core$number_field38165(var_args){
var G__38167 = arguments.length;
switch (G__38167) {
case 1:
return sablono.core.number_field38165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38165.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38088__auto__);
}));

(sablono.core.number_field38165.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.number_field38165.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38165);

/**
 * Creates a password input field.
 */
sablono.core.password_field38168 = (function sablono$core$password_field38168(var_args){
var G__38170 = arguments.length;
switch (G__38170) {
case 1:
return sablono.core.password_field38168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38168.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38088__auto__);
}));

(sablono.core.password_field38168.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.password_field38168.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38168);

/**
 * Creates a range input field.
 */
sablono.core.range_field38171 = (function sablono$core$range_field38171(var_args){
var G__38173 = arguments.length;
switch (G__38173) {
case 1:
return sablono.core.range_field38171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38171.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38088__auto__);
}));

(sablono.core.range_field38171.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.range_field38171.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38171);

/**
 * Creates a search input field.
 */
sablono.core.search_field38174 = (function sablono$core$search_field38174(var_args){
var G__38176 = arguments.length;
switch (G__38176) {
case 1:
return sablono.core.search_field38174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38174.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38088__auto__);
}));

(sablono.core.search_field38174.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.search_field38174.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38174);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38177 = (function sablono$core$tel_field38177(var_args){
var G__38179 = arguments.length;
switch (G__38179) {
case 1:
return sablono.core.tel_field38177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38177.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38088__auto__);
}));

(sablono.core.tel_field38177.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.tel_field38177.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38177);

/**
 * Creates a text input field.
 */
sablono.core.text_field38180 = (function sablono$core$text_field38180(var_args){
var G__38182 = arguments.length;
switch (G__38182) {
case 1:
return sablono.core.text_field38180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38180.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38088__auto__);
}));

(sablono.core.text_field38180.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.text_field38180.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38180);

/**
 * Creates a time input field.
 */
sablono.core.time_field38183 = (function sablono$core$time_field38183(var_args){
var G__38185 = arguments.length;
switch (G__38185) {
case 1:
return sablono.core.time_field38183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38183.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38088__auto__);
}));

(sablono.core.time_field38183.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.time_field38183.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38183);

/**
 * Creates a url input field.
 */
sablono.core.url_field38186 = (function sablono$core$url_field38186(var_args){
var G__38188 = arguments.length;
switch (G__38188) {
case 1:
return sablono.core.url_field38186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38186.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38088__auto__);
}));

(sablono.core.url_field38186.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.url_field38186.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38186);

/**
 * Creates a week input field.
 */
sablono.core.week_field38189 = (function sablono$core$week_field38189(var_args){
var G__38191 = arguments.length;
switch (G__38191) {
case 1:
return sablono.core.week_field38189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38189.cljs$core$IFn$_invoke$arity$1 = (function (name__38088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38088__auto__);
}));

(sablono.core.week_field38189.cljs$core$IFn$_invoke$arity$2 = (function (name__38088__auto__,value__38089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38088__auto__,value__38089__auto__);
}));

(sablono.core.week_field38189.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38189);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38192 = (function sablono$core$check_box38192(var_args){
var G__38194 = arguments.length;
switch (G__38194) {
case 1:
return sablono.core.check_box38192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38192.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38192.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38192.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38192.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38192.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38192);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38195 = (function sablono$core$radio_button38195(var_args){
var G__38197 = arguments.length;
switch (G__38197) {
case 1:
return sablono.core.radio_button38195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38195.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38195.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38195.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38195.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38195.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38195);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38198 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38198);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38199 = (function sablono$core$select_options38199(coll){
var iter__4582__auto__ = (function sablono$core$select_options38199_$_iter__38200(s__38201){
return (new cljs.core.LazySeq(null,(function (){
var s__38201__$1 = s__38201;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38201__$1);
if(temp__5735__auto__){
var s__38201__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38201__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38201__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38203 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38202 = (0);
while(true){
if((i__38202 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38202);
cljs.core.chunk_append(b__38203,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38204 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38199.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38199.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38199.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38321 = (i__38202 + (1));
i__38202 = G__38321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38203),sablono$core$select_options38199_$_iter__38200(cljs.core.chunk_rest(s__38201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38203),null);
}
} else {
var x = cljs.core.first(s__38201__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38207 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38207,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38207,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38207,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38199.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38199.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38199.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38199_$_iter__38200(cljs.core.rest(s__38201__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38199);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38210 = (function sablono$core$drop_down38210(var_args){
var G__38212 = arguments.length;
switch (G__38212) {
case 2:
return sablono.core.drop_down38210.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38210.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38210.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38210.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38210.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38210.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38210);
/**
 * Creates a text area element.
 */
sablono.core.text_area38213 = (function sablono$core$text_area38213(var_args){
var G__38215 = arguments.length;
switch (G__38215) {
case 1:
return sablono.core.text_area38213.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38213.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38213.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38213.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38213);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38216 = (function sablono$core$label38216(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38216);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38217 = (function sablono$core$submit_button38217(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38217);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38218 = (function sablono$core$reset_button38218(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38218);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38219 = (function sablono$core$form_to38219(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38324 = arguments.length;
var i__4790__auto___38325 = (0);
while(true){
if((i__4790__auto___38325 < len__4789__auto___38324)){
args__4795__auto__.push((arguments[i__4790__auto___38325]));

var G__38326 = (i__4790__auto___38325 + (1));
i__4790__auto___38325 = G__38326;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38219.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38219.cljs$core$IFn$_invoke$arity$variadic = (function (p__38222,body){
var vec__38223 = p__38222;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38223,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38223,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38226 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38227 = "_method";
var G__38228 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38226,G__38227,G__38228) : sablono.core.hidden_field.call(null,G__38226,G__38227,G__38228));
})()], null)),body));
}));

(sablono.core.form_to38219.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38219.cljs$lang$applyTo = (function (seq38220){
var G__38221 = cljs.core.first(seq38220);
var seq38220__$1 = cljs.core.next(seq38220);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38221,seq38220__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38219);

//# sourceMappingURL=sablono.core.js.map
