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
var vec__37997 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37998 = cljs.core.seq(vec__37997);
var first__37999 = cljs.core.first(seq__37998);
var seq__37998__$1 = cljs.core.next(seq__37998);
var tag = first__37999;
var body = seq__37998__$1;
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
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__38004(s__38005){
return (new cljs.core.LazySeq(null,(function (){
var s__38005__$1 = s__38005;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38005__$1);
if(temp__5735__auto__){
var s__38005__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38005__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38005__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38007 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38006 = (0);
while(true){
if((i__38006 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38006);
cljs.core.chunk_append(b__38007,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38232 = (i__38006 + (1));
i__38006 = G__38232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38007),sablono$core$update_arglists_$_iter__38004(cljs.core.chunk_rest(s__38005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38007),null);
}
} else {
var args = cljs.core.first(s__38005__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38004(cljs.core.rest(s__38005__$2)));
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
var iter__4582__auto__ = (function sablono$core$iter__38011(s__38012){
return (new cljs.core.LazySeq(null,(function (){
var s__38012__$1 = s__38012;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38012__$1);
if(temp__5735__auto__){
var s__38012__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38012__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38012__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38014 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38013 = (0);
while(true){
if((i__38013 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38013);
cljs.core.chunk_append(b__38014,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38236 = (i__38013 + (1));
i__38013 = G__38236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38014),sablono$core$iter__38011(cljs.core.chunk_rest(s__38012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38014),null);
}
} else {
var style = cljs.core.first(s__38012__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38011(cljs.core.rest(s__38012__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq38010){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38010));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__38015 = goog.dom.getDocument().body;
var G__38016 = (function (){var G__38017 = "script";
var G__38018 = ({"src": src});
return goog.dom.createDom(G__38017,G__38018);
})();
return goog.dom.appendChild(G__38015,G__38016);
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
sablono.core.link_to38019 = (function sablono$core$link_to38019(var_args){
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
return sablono.core.link_to38019.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to38019.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to38019.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to38019.cljs$lang$applyTo = (function (seq38020){
var G__38021 = cljs.core.first(seq38020);
var seq38020__$1 = cljs.core.next(seq38020);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38021,seq38020__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38019);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38022 = (function sablono$core$mail_to38022(var_args){
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
return sablono.core.mail_to38022.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to38022.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38025){
var vec__38026 = p__38025;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38026,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to38022.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to38022.cljs$lang$applyTo = (function (seq38023){
var G__38024 = cljs.core.first(seq38023);
var seq38023__$1 = cljs.core.next(seq38023);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38024,seq38023__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38022);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38029 = (function sablono$core$unordered_list38029(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list38029_$_iter__38030(s__38031){
return (new cljs.core.LazySeq(null,(function (){
var s__38031__$1 = s__38031;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38031__$1);
if(temp__5735__auto__){
var s__38031__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38031__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38031__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38033 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38032 = (0);
while(true){
if((i__38032 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38032);
cljs.core.chunk_append(b__38033,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38243 = (i__38032 + (1));
i__38032 = G__38243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38033),sablono$core$unordered_list38029_$_iter__38030(cljs.core.chunk_rest(s__38031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38033),null);
}
} else {
var x = cljs.core.first(s__38031__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38029_$_iter__38030(cljs.core.rest(s__38031__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38029);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38035 = (function sablono$core$ordered_list38035(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38035_$_iter__38037(s__38038){
return (new cljs.core.LazySeq(null,(function (){
var s__38038__$1 = s__38038;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38038__$1);
if(temp__5735__auto__){
var s__38038__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38038__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38038__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38040 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38039 = (0);
while(true){
if((i__38039 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38039);
cljs.core.chunk_append(b__38040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38244 = (i__38039 + (1));
i__38039 = G__38244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38040),sablono$core$ordered_list38035_$_iter__38037(cljs.core.chunk_rest(s__38038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38040),null);
}
} else {
var x = cljs.core.first(s__38038__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38035_$_iter__38037(cljs.core.rest(s__38038__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38035);
/**
 * Create an image element.
 */
sablono.core.image38046 = (function sablono$core$image38046(var_args){
var G__38049 = arguments.length;
switch (G__38049) {
case 1:
return sablono.core.image38046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38046.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38046.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38046.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38046);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38053_SHARP_,p2__38054_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38053_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38054_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38056_SHARP_,p2__38057_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38056_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38057_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38061 = arguments.length;
switch (G__38061) {
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
sablono.core.color_field38064 = (function sablono$core$color_field38064(var_args){
var G__38066 = arguments.length;
switch (G__38066) {
case 1:
return sablono.core.color_field38064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38064.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37981__auto__);
}));

(sablono.core.color_field38064.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.color_field38064.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38064);

/**
 * Creates a date input field.
 */
sablono.core.date_field38070 = (function sablono$core$date_field38070(var_args){
var G__38074 = arguments.length;
switch (G__38074) {
case 1:
return sablono.core.date_field38070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38070.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37981__auto__);
}));

(sablono.core.date_field38070.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.date_field38070.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38070);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38076 = (function sablono$core$datetime_field38076(var_args){
var G__38080 = arguments.length;
switch (G__38080) {
case 1:
return sablono.core.datetime_field38076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38076.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37981__auto__);
}));

(sablono.core.datetime_field38076.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.datetime_field38076.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38076);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38082 = (function sablono$core$datetime_local_field38082(var_args){
var G__38084 = arguments.length;
switch (G__38084) {
case 1:
return sablono.core.datetime_local_field38082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38082.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37981__auto__);
}));

(sablono.core.datetime_local_field38082.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.datetime_local_field38082.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38082);

/**
 * Creates a email input field.
 */
sablono.core.email_field38087 = (function sablono$core$email_field38087(var_args){
var G__38090 = arguments.length;
switch (G__38090) {
case 1:
return sablono.core.email_field38087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38087.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37981__auto__);
}));

(sablono.core.email_field38087.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.email_field38087.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38087);

/**
 * Creates a file input field.
 */
sablono.core.file_field38094 = (function sablono$core$file_field38094(var_args){
var G__38099 = arguments.length;
switch (G__38099) {
case 1:
return sablono.core.file_field38094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38094.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37981__auto__);
}));

(sablono.core.file_field38094.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.file_field38094.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38094);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38103 = (function sablono$core$hidden_field38103(var_args){
var G__38105 = arguments.length;
switch (G__38105) {
case 1:
return sablono.core.hidden_field38103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38103.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37981__auto__);
}));

(sablono.core.hidden_field38103.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.hidden_field38103.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38103);

/**
 * Creates a month input field.
 */
sablono.core.month_field38108 = (function sablono$core$month_field38108(var_args){
var G__38111 = arguments.length;
switch (G__38111) {
case 1:
return sablono.core.month_field38108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38108.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37981__auto__);
}));

(sablono.core.month_field38108.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.month_field38108.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38108);

/**
 * Creates a number input field.
 */
sablono.core.number_field38114 = (function sablono$core$number_field38114(var_args){
var G__38116 = arguments.length;
switch (G__38116) {
case 1:
return sablono.core.number_field38114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38114.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37981__auto__);
}));

(sablono.core.number_field38114.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.number_field38114.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38114);

/**
 * Creates a password input field.
 */
sablono.core.password_field38118 = (function sablono$core$password_field38118(var_args){
var G__38121 = arguments.length;
switch (G__38121) {
case 1:
return sablono.core.password_field38118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38118.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37981__auto__);
}));

(sablono.core.password_field38118.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.password_field38118.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38118);

/**
 * Creates a range input field.
 */
sablono.core.range_field38125 = (function sablono$core$range_field38125(var_args){
var G__38127 = arguments.length;
switch (G__38127) {
case 1:
return sablono.core.range_field38125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38125.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37981__auto__);
}));

(sablono.core.range_field38125.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.range_field38125.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38125);

/**
 * Creates a search input field.
 */
sablono.core.search_field38131 = (function sablono$core$search_field38131(var_args){
var G__38133 = arguments.length;
switch (G__38133) {
case 1:
return sablono.core.search_field38131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38131.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37981__auto__);
}));

(sablono.core.search_field38131.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.search_field38131.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38131);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38137 = (function sablono$core$tel_field38137(var_args){
var G__38140 = arguments.length;
switch (G__38140) {
case 1:
return sablono.core.tel_field38137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38137.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37981__auto__);
}));

(sablono.core.tel_field38137.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.tel_field38137.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38137);

/**
 * Creates a text input field.
 */
sablono.core.text_field38142 = (function sablono$core$text_field38142(var_args){
var G__38146 = arguments.length;
switch (G__38146) {
case 1:
return sablono.core.text_field38142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38142.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37981__auto__);
}));

(sablono.core.text_field38142.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.text_field38142.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38142);

/**
 * Creates a time input field.
 */
sablono.core.time_field38148 = (function sablono$core$time_field38148(var_args){
var G__38151 = arguments.length;
switch (G__38151) {
case 1:
return sablono.core.time_field38148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38148.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37981__auto__);
}));

(sablono.core.time_field38148.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.time_field38148.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38148);

/**
 * Creates a url input field.
 */
sablono.core.url_field38154 = (function sablono$core$url_field38154(var_args){
var G__38158 = arguments.length;
switch (G__38158) {
case 1:
return sablono.core.url_field38154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38154.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37981__auto__);
}));

(sablono.core.url_field38154.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.url_field38154.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38154);

/**
 * Creates a week input field.
 */
sablono.core.week_field38163 = (function sablono$core$week_field38163(var_args){
var G__38165 = arguments.length;
switch (G__38165) {
case 1:
return sablono.core.week_field38163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38163.cljs$core$IFn$_invoke$arity$1 = (function (name__37981__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37981__auto__);
}));

(sablono.core.week_field38163.cljs$core$IFn$_invoke$arity$2 = (function (name__37981__auto__,value__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37981__auto__,value__37982__auto__);
}));

(sablono.core.week_field38163.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38163);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38167 = (function sablono$core$check_box38167(var_args){
var G__38171 = arguments.length;
switch (G__38171) {
case 1:
return sablono.core.check_box38167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38167.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38167.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38167.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38167.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38167.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38167);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38175 = (function sablono$core$radio_button38175(var_args){
var G__38178 = arguments.length;
switch (G__38178) {
case 1:
return sablono.core.radio_button38175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38175.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38175.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38175.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38175.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38175.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38175);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38183 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38183);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38185 = (function sablono$core$select_options38185(coll){
var iter__4582__auto__ = (function sablono$core$select_options38185_$_iter__38186(s__38187){
return (new cljs.core.LazySeq(null,(function (){
var s__38187__$1 = s__38187;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38187__$1);
if(temp__5735__auto__){
var s__38187__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38187__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38187__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38189 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38188 = (0);
while(true){
if((i__38188 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38188);
cljs.core.chunk_append(b__38189,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38194 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38185.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38185.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38185.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38266 = (i__38188 + (1));
i__38188 = G__38266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38189),sablono$core$select_options38185_$_iter__38186(cljs.core.chunk_rest(s__38187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38189),null);
}
} else {
var x = cljs.core.first(s__38187__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38199 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38199,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38199,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38199,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38185.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38185.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38185.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38185_$_iter__38186(cljs.core.rest(s__38187__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38185);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38203 = (function sablono$core$drop_down38203(var_args){
var G__38205 = arguments.length;
switch (G__38205) {
case 2:
return sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38203.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38203);
/**
 * Creates a text area element.
 */
sablono.core.text_area38209 = (function sablono$core$text_area38209(var_args){
var G__38212 = arguments.length;
switch (G__38212) {
case 1:
return sablono.core.text_area38209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38209.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38209.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38209.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38209);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38214 = (function sablono$core$label38214(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38214);
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
var len__4789__auto___38269 = arguments.length;
var i__4790__auto___38270 = (0);
while(true){
if((i__4790__auto___38270 < len__4789__auto___38269)){
args__4795__auto__.push((arguments[i__4790__auto___38270]));

var G__38271 = (i__4790__auto___38270 + (1));
i__4790__auto___38270 = G__38271;
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
