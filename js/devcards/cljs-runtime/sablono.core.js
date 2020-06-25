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
var G__38196__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37970 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37971 = cljs.core.seq(vec__37970);
var first__37972 = cljs.core.first(seq__37971);
var seq__37971__$1 = cljs.core.next(seq__37971);
var tag = first__37972;
var body = seq__37971__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38197__i = 0, G__38197__a = new Array(arguments.length -  0);
while (G__38197__i < G__38197__a.length) {G__38197__a[G__38197__i] = arguments[G__38197__i + 0]; ++G__38197__i;}
  args = new cljs.core.IndexedSeq(G__38197__a,0,null);
} 
return G__38196__delegate.call(this,args);};
G__38196.cljs$lang$maxFixedArity = 0;
G__38196.cljs$lang$applyTo = (function (arglist__38198){
var args = cljs.core.seq(arglist__38198);
return G__38196__delegate(args);
});
G__38196.cljs$core$IFn$_invoke$arity$variadic = G__38196__delegate;
return G__38196;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37976(s__37977){
return (new cljs.core.LazySeq(null,(function (){
var s__37977__$1 = s__37977;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37977__$1);
if(temp__5735__auto__){
var s__37977__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37977__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37977__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37979 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37978 = (0);
while(true){
if((i__37978 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37978);
cljs.core.chunk_append(b__37979,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38200 = (i__37978 + (1));
i__37978 = G__38200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37979),sablono$core$update_arglists_$_iter__37976(cljs.core.chunk_rest(s__37977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37979),null);
}
} else {
var args = cljs.core.first(s__37977__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37976(cljs.core.rest(s__37977__$2)));
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
var len__4789__auto___38203 = arguments.length;
var i__4790__auto___38204 = (0);
while(true){
if((i__4790__auto___38204 < len__4789__auto___38203)){
args__4795__auto__.push((arguments[i__4790__auto___38204]));

var G__38205 = (i__4790__auto___38204 + (1));
i__4790__auto___38204 = G__38205;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37987(s__37988){
return (new cljs.core.LazySeq(null,(function (){
var s__37988__$1 = s__37988;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37988__$1);
if(temp__5735__auto__){
var s__37988__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37988__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37988__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37990 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37989 = (0);
while(true){
if((i__37989 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37989);
cljs.core.chunk_append(b__37990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38209 = (i__37989 + (1));
i__37989 = G__38209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37990),sablono$core$iter__37987(cljs.core.chunk_rest(s__37988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37990),null);
}
} else {
var style = cljs.core.first(s__37988__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37987(cljs.core.rest(s__37988__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37984){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37984));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37994 = goog.dom.getDocument().body;
var G__37995 = (function (){var G__37997 = "script";
var G__37998 = ({"src": src});
return goog.dom.createDom(G__37997,G__37998);
})();
return goog.dom.appendChild(G__37994,G__37995);
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
sablono.core.link_to38000 = (function sablono$core$link_to38000(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38212 = arguments.length;
var i__4790__auto___38213 = (0);
while(true){
if((i__4790__auto___38213 < len__4789__auto___38212)){
args__4795__auto__.push((arguments[i__4790__auto___38213]));

var G__38214 = (i__4790__auto___38213 + (1));
i__4790__auto___38213 = G__38214;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38000.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to38000.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to38000.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to38000.cljs$lang$applyTo = (function (seq38001){
var G__38002 = cljs.core.first(seq38001);
var seq38001__$1 = cljs.core.next(seq38001);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38002,seq38001__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38000);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38007 = (function sablono$core$mail_to38007(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38217 = arguments.length;
var i__4790__auto___38218 = (0);
while(true){
if((i__4790__auto___38218 < len__4789__auto___38217)){
args__4795__auto__.push((arguments[i__4790__auto___38218]));

var G__38220 = (i__4790__auto___38218 + (1));
i__4790__auto___38218 = G__38220;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38007.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to38007.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38012){
var vec__38013 = p__38012;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38013,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to38007.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to38007.cljs$lang$applyTo = (function (seq38008){
var G__38009 = cljs.core.first(seq38008);
var seq38008__$1 = cljs.core.next(seq38008);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38009,seq38008__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38007);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38019 = (function sablono$core$unordered_list38019(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list38019_$_iter__38021(s__38022){
return (new cljs.core.LazySeq(null,(function (){
var s__38022__$1 = s__38022;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38022__$1);
if(temp__5735__auto__){
var s__38022__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38022__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38022__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38024 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38023 = (0);
while(true){
if((i__38023 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38023);
cljs.core.chunk_append(b__38024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38226 = (i__38023 + (1));
i__38023 = G__38226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38024),sablono$core$unordered_list38019_$_iter__38021(cljs.core.chunk_rest(s__38022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38024),null);
}
} else {
var x = cljs.core.first(s__38022__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38019_$_iter__38021(cljs.core.rest(s__38022__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38019);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38027 = (function sablono$core$ordered_list38027(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38027_$_iter__38028(s__38029){
return (new cljs.core.LazySeq(null,(function (){
var s__38029__$1 = s__38029;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38029__$1);
if(temp__5735__auto__){
var s__38029__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38029__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38029__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38031 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38030 = (0);
while(true){
if((i__38030 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38030);
cljs.core.chunk_append(b__38031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38229 = (i__38030 + (1));
i__38030 = G__38229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38031),sablono$core$ordered_list38027_$_iter__38028(cljs.core.chunk_rest(s__38029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38031),null);
}
} else {
var x = cljs.core.first(s__38029__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38027_$_iter__38028(cljs.core.rest(s__38029__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38027);
/**
 * Create an image element.
 */
sablono.core.image38032 = (function sablono$core$image38032(var_args){
var G__38034 = arguments.length;
switch (G__38034) {
case 1:
return sablono.core.image38032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38032.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38032.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38032.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38032);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38035_SHARP_,p2__38036_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38035_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38036_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38037_SHARP_,p2__38038_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38037_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38038_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38040 = arguments.length;
switch (G__38040) {
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
sablono.core.color_field38041 = (function sablono$core$color_field38041(var_args){
var G__38043 = arguments.length;
switch (G__38043) {
case 1:
return sablono.core.color_field38041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38041.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37959__auto__);
}));

(sablono.core.color_field38041.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.color_field38041.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38041);

/**
 * Creates a date input field.
 */
sablono.core.date_field38044 = (function sablono$core$date_field38044(var_args){
var G__38046 = arguments.length;
switch (G__38046) {
case 1:
return sablono.core.date_field38044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38044.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37959__auto__);
}));

(sablono.core.date_field38044.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.date_field38044.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38044);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38047 = (function sablono$core$datetime_field38047(var_args){
var G__38049 = arguments.length;
switch (G__38049) {
case 1:
return sablono.core.datetime_field38047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38047.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37959__auto__);
}));

(sablono.core.datetime_field38047.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.datetime_field38047.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38047);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38050 = (function sablono$core$datetime_local_field38050(var_args){
var G__38053 = arguments.length;
switch (G__38053) {
case 1:
return sablono.core.datetime_local_field38050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38050.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37959__auto__);
}));

(sablono.core.datetime_local_field38050.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.datetime_local_field38050.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38050);

/**
 * Creates a email input field.
 */
sablono.core.email_field38056 = (function sablono$core$email_field38056(var_args){
var G__38059 = arguments.length;
switch (G__38059) {
case 1:
return sablono.core.email_field38056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38056.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37959__auto__);
}));

(sablono.core.email_field38056.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.email_field38056.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38056);

/**
 * Creates a file input field.
 */
sablono.core.file_field38062 = (function sablono$core$file_field38062(var_args){
var G__38066 = arguments.length;
switch (G__38066) {
case 1:
return sablono.core.file_field38062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38062.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37959__auto__);
}));

(sablono.core.file_field38062.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.file_field38062.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38062);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38069 = (function sablono$core$hidden_field38069(var_args){
var G__38072 = arguments.length;
switch (G__38072) {
case 1:
return sablono.core.hidden_field38069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38069.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37959__auto__);
}));

(sablono.core.hidden_field38069.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.hidden_field38069.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38069);

/**
 * Creates a month input field.
 */
sablono.core.month_field38074 = (function sablono$core$month_field38074(var_args){
var G__38077 = arguments.length;
switch (G__38077) {
case 1:
return sablono.core.month_field38074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38074.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37959__auto__);
}));

(sablono.core.month_field38074.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.month_field38074.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38074);

/**
 * Creates a number input field.
 */
sablono.core.number_field38079 = (function sablono$core$number_field38079(var_args){
var G__38082 = arguments.length;
switch (G__38082) {
case 1:
return sablono.core.number_field38079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38079.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37959__auto__);
}));

(sablono.core.number_field38079.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.number_field38079.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38079);

/**
 * Creates a password input field.
 */
sablono.core.password_field38083 = (function sablono$core$password_field38083(var_args){
var G__38086 = arguments.length;
switch (G__38086) {
case 1:
return sablono.core.password_field38083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38083.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37959__auto__);
}));

(sablono.core.password_field38083.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.password_field38083.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38083);

/**
 * Creates a range input field.
 */
sablono.core.range_field38089 = (function sablono$core$range_field38089(var_args){
var G__38091 = arguments.length;
switch (G__38091) {
case 1:
return sablono.core.range_field38089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38089.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37959__auto__);
}));

(sablono.core.range_field38089.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.range_field38089.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38089);

/**
 * Creates a search input field.
 */
sablono.core.search_field38096 = (function sablono$core$search_field38096(var_args){
var G__38098 = arguments.length;
switch (G__38098) {
case 1:
return sablono.core.search_field38096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38096.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37959__auto__);
}));

(sablono.core.search_field38096.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.search_field38096.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38096);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38100 = (function sablono$core$tel_field38100(var_args){
var G__38103 = arguments.length;
switch (G__38103) {
case 1:
return sablono.core.tel_field38100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38100.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37959__auto__);
}));

(sablono.core.tel_field38100.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.tel_field38100.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38100);

/**
 * Creates a text input field.
 */
sablono.core.text_field38105 = (function sablono$core$text_field38105(var_args){
var G__38107 = arguments.length;
switch (G__38107) {
case 1:
return sablono.core.text_field38105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38105.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37959__auto__);
}));

(sablono.core.text_field38105.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.text_field38105.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38105);

/**
 * Creates a time input field.
 */
sablono.core.time_field38110 = (function sablono$core$time_field38110(var_args){
var G__38113 = arguments.length;
switch (G__38113) {
case 1:
return sablono.core.time_field38110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38110.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37959__auto__);
}));

(sablono.core.time_field38110.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.time_field38110.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38110);

/**
 * Creates a url input field.
 */
sablono.core.url_field38117 = (function sablono$core$url_field38117(var_args){
var G__38120 = arguments.length;
switch (G__38120) {
case 1:
return sablono.core.url_field38117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38117.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37959__auto__);
}));

(sablono.core.url_field38117.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.url_field38117.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38117);

/**
 * Creates a week input field.
 */
sablono.core.week_field38125 = (function sablono$core$week_field38125(var_args){
var G__38128 = arguments.length;
switch (G__38128) {
case 1:
return sablono.core.week_field38125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38125.cljs$core$IFn$_invoke$arity$1 = (function (name__37959__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37959__auto__);
}));

(sablono.core.week_field38125.cljs$core$IFn$_invoke$arity$2 = (function (name__37959__auto__,value__37960__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37959__auto__,value__37960__auto__);
}));

(sablono.core.week_field38125.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38125);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38131 = (function sablono$core$check_box38131(var_args){
var G__38133 = arguments.length;
switch (G__38133) {
case 1:
return sablono.core.check_box38131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38131.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38131.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38131.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38131.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38131.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38131);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38137 = (function sablono$core$radio_button38137(var_args){
var G__38139 = arguments.length;
switch (G__38139) {
case 1:
return sablono.core.radio_button38137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38137.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38137.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38137.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38137.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38137.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38137);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38142 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38142);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38144 = (function sablono$core$select_options38144(coll){
var iter__4582__auto__ = (function sablono$core$select_options38144_$_iter__38146(s__38147){
return (new cljs.core.LazySeq(null,(function (){
var s__38147__$1 = s__38147;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38147__$1);
if(temp__5735__auto__){
var s__38147__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38147__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38147__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38149 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38148 = (0);
while(true){
if((i__38148 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38148);
cljs.core.chunk_append(b__38149,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38151 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38151,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38151,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38151,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38144.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38144.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38144.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38259 = (i__38148 + (1));
i__38148 = G__38259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38149),sablono$core$select_options38144_$_iter__38146(cljs.core.chunk_rest(s__38147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38149),null);
}
} else {
var x = cljs.core.first(s__38147__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38157 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38157,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38157,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38157,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38144.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38144.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38144.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38144_$_iter__38146(cljs.core.rest(s__38147__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38144);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38160 = (function sablono$core$drop_down38160(var_args){
var G__38163 = arguments.length;
switch (G__38163) {
case 2:
return sablono.core.drop_down38160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38160.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38160.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38160.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38160.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38160.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38160);
/**
 * Creates a text area element.
 */
sablono.core.text_area38167 = (function sablono$core$text_area38167(var_args){
var G__38170 = arguments.length;
switch (G__38170) {
case 1:
return sablono.core.text_area38167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38167.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38167.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38167.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38167);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38173 = (function sablono$core$label38173(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38173);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38174 = (function sablono$core$submit_button38174(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38174);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38176 = (function sablono$core$reset_button38176(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38176);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38178 = (function sablono$core$form_to38178(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38262 = arguments.length;
var i__4790__auto___38263 = (0);
while(true){
if((i__4790__auto___38263 < len__4789__auto___38262)){
args__4795__auto__.push((arguments[i__4790__auto___38263]));

var G__38264 = (i__4790__auto___38263 + (1));
i__4790__auto___38263 = G__38264;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38178.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38178.cljs$core$IFn$_invoke$arity$variadic = (function (p__38183,body){
var vec__38184 = p__38183;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38184,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38184,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38189 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38190 = "_method";
var G__38191 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38189,G__38190,G__38191) : sablono.core.hidden_field.call(null,G__38189,G__38190,G__38191));
})()], null)),body));
}));

(sablono.core.form_to38178.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38178.cljs$lang$applyTo = (function (seq38180){
var G__38181 = cljs.core.first(seq38180);
var seq38180__$1 = cljs.core.next(seq38180);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38181,seq38180__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38178);

//# sourceMappingURL=sablono.core.js.map
