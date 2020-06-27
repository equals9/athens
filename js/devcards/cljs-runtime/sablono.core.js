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
var G__38180__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37955 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37956 = cljs.core.seq(vec__37955);
var first__37957 = cljs.core.first(seq__37956);
var seq__37956__$1 = cljs.core.next(seq__37956);
var tag = first__37957;
var body = seq__37956__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38182__i = 0, G__38182__a = new Array(arguments.length -  0);
while (G__38182__i < G__38182__a.length) {G__38182__a[G__38182__i] = arguments[G__38182__i + 0]; ++G__38182__i;}
  args = new cljs.core.IndexedSeq(G__38182__a,0,null);
} 
return G__38180__delegate.call(this,args);};
G__38180.cljs$lang$maxFixedArity = 0;
G__38180.cljs$lang$applyTo = (function (arglist__38184){
var args = cljs.core.seq(arglist__38184);
return G__38180__delegate(args);
});
G__38180.cljs$core$IFn$_invoke$arity$variadic = G__38180__delegate;
return G__38180;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37958(s__37959){
return (new cljs.core.LazySeq(null,(function (){
var s__37959__$1 = s__37959;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37959__$1);
if(temp__5735__auto__){
var s__37959__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37959__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37959__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37961 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37960 = (0);
while(true){
if((i__37960 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37960);
cljs.core.chunk_append(b__37961,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38188 = (i__37960 + (1));
i__37960 = G__38188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37961),sablono$core$update_arglists_$_iter__37958(cljs.core.chunk_rest(s__37959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37961),null);
}
} else {
var args = cljs.core.first(s__37959__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37958(cljs.core.rest(s__37959__$2)));
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
var len__4789__auto___38190 = arguments.length;
var i__4790__auto___38191 = (0);
while(true){
if((i__4790__auto___38191 < len__4789__auto___38190)){
args__4795__auto__.push((arguments[i__4790__auto___38191]));

var G__38192 = (i__4790__auto___38191 + (1));
i__4790__auto___38191 = G__38192;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37967(s__37968){
return (new cljs.core.LazySeq(null,(function (){
var s__37968__$1 = s__37968;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37968__$1);
if(temp__5735__auto__){
var s__37968__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37968__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37968__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37970 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37969 = (0);
while(true){
if((i__37969 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37969);
cljs.core.chunk_append(b__37970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38196 = (i__37969 + (1));
i__37969 = G__38196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37970),sablono$core$iter__37967(cljs.core.chunk_rest(s__37968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37970),null);
}
} else {
var style = cljs.core.first(s__37968__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37967(cljs.core.rest(s__37968__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37964){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37964));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37977 = goog.dom.getDocument().body;
var G__37978 = (function (){var G__37979 = "script";
var G__37980 = ({"src": src});
return goog.dom.createDom(G__37979,G__37980);
})();
return goog.dom.appendChild(G__37977,G__37978);
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
sablono.core.link_to37983 = (function sablono$core$link_to37983(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38200 = arguments.length;
var i__4790__auto___38201 = (0);
while(true){
if((i__4790__auto___38201 < len__4789__auto___38200)){
args__4795__auto__.push((arguments[i__4790__auto___38201]));

var G__38203 = (i__4790__auto___38201 + (1));
i__4790__auto___38201 = G__38203;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37983.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37983.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37983.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37983.cljs$lang$applyTo = (function (seq37985){
var G__37986 = cljs.core.first(seq37985);
var seq37985__$1 = cljs.core.next(seq37985);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37986,seq37985__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37983);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37989 = (function sablono$core$mail_to37989(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38205 = arguments.length;
var i__4790__auto___38206 = (0);
while(true){
if((i__4790__auto___38206 < len__4789__auto___38205)){
args__4795__auto__.push((arguments[i__4790__auto___38206]));

var G__38208 = (i__4790__auto___38206 + (1));
i__4790__auto___38206 = G__38208;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37989.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37989.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37994){
var vec__37995 = p__37994;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37995,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37989.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37989.cljs$lang$applyTo = (function (seq37990){
var G__37991 = cljs.core.first(seq37990);
var seq37990__$1 = cljs.core.next(seq37990);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37991,seq37990__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37989);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37999 = (function sablono$core$unordered_list37999(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list37999_$_iter__38001(s__38002){
return (new cljs.core.LazySeq(null,(function (){
var s__38002__$1 = s__38002;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38002__$1);
if(temp__5735__auto__){
var s__38002__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38002__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38002__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38004 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38003 = (0);
while(true){
if((i__38003 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38003);
cljs.core.chunk_append(b__38004,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38214 = (i__38003 + (1));
i__38003 = G__38214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38004),sablono$core$unordered_list37999_$_iter__38001(cljs.core.chunk_rest(s__38002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38004),null);
}
} else {
var x = cljs.core.first(s__38002__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37999_$_iter__38001(cljs.core.rest(s__38002__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list37999);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38008 = (function sablono$core$ordered_list38008(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38008_$_iter__38009(s__38010){
return (new cljs.core.LazySeq(null,(function (){
var s__38010__$1 = s__38010;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38010__$1);
if(temp__5735__auto__){
var s__38010__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38010__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38010__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38012 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38011 = (0);
while(true){
if((i__38011 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38011);
cljs.core.chunk_append(b__38012,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38218 = (i__38011 + (1));
i__38011 = G__38218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38012),sablono$core$ordered_list38008_$_iter__38009(cljs.core.chunk_rest(s__38010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38012),null);
}
} else {
var x = cljs.core.first(s__38010__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38008_$_iter__38009(cljs.core.rest(s__38010__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38008);
/**
 * Create an image element.
 */
sablono.core.image38017 = (function sablono$core$image38017(var_args){
var G__38019 = arguments.length;
switch (G__38019) {
case 1:
return sablono.core.image38017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38017.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38017.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38017.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38017);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38023_SHARP_,p2__38024_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38023_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38024_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38026_SHARP_,p2__38027_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38026_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38027_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38031 = arguments.length;
switch (G__38031) {
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
sablono.core.color_field38034 = (function sablono$core$color_field38034(var_args){
var G__38037 = arguments.length;
switch (G__38037) {
case 1:
return sablono.core.color_field38034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38034.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37940__auto__);
}));

(sablono.core.color_field38034.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.color_field38034.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38034);

/**
 * Creates a date input field.
 */
sablono.core.date_field38039 = (function sablono$core$date_field38039(var_args){
var G__38042 = arguments.length;
switch (G__38042) {
case 1:
return sablono.core.date_field38039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38039.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37940__auto__);
}));

(sablono.core.date_field38039.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.date_field38039.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38039);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38046 = (function sablono$core$datetime_field38046(var_args){
var G__38048 = arguments.length;
switch (G__38048) {
case 1:
return sablono.core.datetime_field38046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38046.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37940__auto__);
}));

(sablono.core.datetime_field38046.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.datetime_field38046.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38046);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38051 = (function sablono$core$datetime_local_field38051(var_args){
var G__38055 = arguments.length;
switch (G__38055) {
case 1:
return sablono.core.datetime_local_field38051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38051.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37940__auto__);
}));

(sablono.core.datetime_local_field38051.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.datetime_local_field38051.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38051);

/**
 * Creates a email input field.
 */
sablono.core.email_field38058 = (function sablono$core$email_field38058(var_args){
var G__38060 = arguments.length;
switch (G__38060) {
case 1:
return sablono.core.email_field38058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38058.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37940__auto__);
}));

(sablono.core.email_field38058.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.email_field38058.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38058);

/**
 * Creates a file input field.
 */
sablono.core.file_field38063 = (function sablono$core$file_field38063(var_args){
var G__38065 = arguments.length;
switch (G__38065) {
case 1:
return sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37940__auto__);
}));

(sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.file_field38063.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38063);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38066 = (function sablono$core$hidden_field38066(var_args){
var G__38068 = arguments.length;
switch (G__38068) {
case 1:
return sablono.core.hidden_field38066.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38066.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38066.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37940__auto__);
}));

(sablono.core.hidden_field38066.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.hidden_field38066.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38066);

/**
 * Creates a month input field.
 */
sablono.core.month_field38069 = (function sablono$core$month_field38069(var_args){
var G__38071 = arguments.length;
switch (G__38071) {
case 1:
return sablono.core.month_field38069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38069.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37940__auto__);
}));

(sablono.core.month_field38069.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.month_field38069.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38069);

/**
 * Creates a number input field.
 */
sablono.core.number_field38072 = (function sablono$core$number_field38072(var_args){
var G__38074 = arguments.length;
switch (G__38074) {
case 1:
return sablono.core.number_field38072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38072.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37940__auto__);
}));

(sablono.core.number_field38072.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.number_field38072.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38072);

/**
 * Creates a password input field.
 */
sablono.core.password_field38075 = (function sablono$core$password_field38075(var_args){
var G__38077 = arguments.length;
switch (G__38077) {
case 1:
return sablono.core.password_field38075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38075.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37940__auto__);
}));

(sablono.core.password_field38075.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.password_field38075.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38075);

/**
 * Creates a range input field.
 */
sablono.core.range_field38078 = (function sablono$core$range_field38078(var_args){
var G__38080 = arguments.length;
switch (G__38080) {
case 1:
return sablono.core.range_field38078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38078.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37940__auto__);
}));

(sablono.core.range_field38078.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.range_field38078.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38078);

/**
 * Creates a search input field.
 */
sablono.core.search_field38081 = (function sablono$core$search_field38081(var_args){
var G__38083 = arguments.length;
switch (G__38083) {
case 1:
return sablono.core.search_field38081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38081.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37940__auto__);
}));

(sablono.core.search_field38081.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.search_field38081.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38081);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38084 = (function sablono$core$tel_field38084(var_args){
var G__38086 = arguments.length;
switch (G__38086) {
case 1:
return sablono.core.tel_field38084.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38084.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38084.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37940__auto__);
}));

(sablono.core.tel_field38084.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.tel_field38084.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38084);

/**
 * Creates a text input field.
 */
sablono.core.text_field38088 = (function sablono$core$text_field38088(var_args){
var G__38091 = arguments.length;
switch (G__38091) {
case 1:
return sablono.core.text_field38088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38088.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37940__auto__);
}));

(sablono.core.text_field38088.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.text_field38088.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38088);

/**
 * Creates a time input field.
 */
sablono.core.time_field38094 = (function sablono$core$time_field38094(var_args){
var G__38098 = arguments.length;
switch (G__38098) {
case 1:
return sablono.core.time_field38094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38094.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37940__auto__);
}));

(sablono.core.time_field38094.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.time_field38094.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38094);

/**
 * Creates a url input field.
 */
sablono.core.url_field38102 = (function sablono$core$url_field38102(var_args){
var G__38105 = arguments.length;
switch (G__38105) {
case 1:
return sablono.core.url_field38102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38102.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37940__auto__);
}));

(sablono.core.url_field38102.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.url_field38102.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38102);

/**
 * Creates a week input field.
 */
sablono.core.week_field38108 = (function sablono$core$week_field38108(var_args){
var G__38110 = arguments.length;
switch (G__38110) {
case 1:
return sablono.core.week_field38108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38108.cljs$core$IFn$_invoke$arity$1 = (function (name__37940__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37940__auto__);
}));

(sablono.core.week_field38108.cljs$core$IFn$_invoke$arity$2 = (function (name__37940__auto__,value__37941__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37940__auto__,value__37941__auto__);
}));

(sablono.core.week_field38108.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38108);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38113 = (function sablono$core$check_box38113(var_args){
var G__38116 = arguments.length;
switch (G__38116) {
case 1:
return sablono.core.check_box38113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38113.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38113.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38113.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38113.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38113.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38113);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38118 = (function sablono$core$radio_button38118(var_args){
var G__38121 = arguments.length;
switch (G__38121) {
case 1:
return sablono.core.radio_button38118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38118.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38118.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38118.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38118.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38118.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38118);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38127 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38127);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38128 = (function sablono$core$select_options38128(coll){
var iter__4582__auto__ = (function sablono$core$select_options38128_$_iter__38131(s__38132){
return (new cljs.core.LazySeq(null,(function (){
var s__38132__$1 = s__38132;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38132__$1);
if(temp__5735__auto__){
var s__38132__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38132__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38132__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38134 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38133 = (0);
while(true){
if((i__38133 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38133);
cljs.core.chunk_append(b__38134,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38136 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38128.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38128.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38128.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38266 = (i__38133 + (1));
i__38133 = G__38266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38134),sablono$core$select_options38128_$_iter__38131(cljs.core.chunk_rest(s__38132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38134),null);
}
} else {
var x = cljs.core.first(s__38132__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38140 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38128.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38128.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38128.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38128_$_iter__38131(cljs.core.rest(s__38132__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38128);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38145 = (function sablono$core$drop_down38145(var_args){
var G__38148 = arguments.length;
switch (G__38148) {
case 2:
return sablono.core.drop_down38145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38145.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38145.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38145.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38145.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38145.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38145);
/**
 * Creates a text area element.
 */
sablono.core.text_area38153 = (function sablono$core$text_area38153(var_args){
var G__38156 = arguments.length;
switch (G__38156) {
case 1:
return sablono.core.text_area38153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38153.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38153.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38153.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38153);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38160 = (function sablono$core$label38160(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38160);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38162 = (function sablono$core$submit_button38162(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38162);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38164 = (function sablono$core$reset_button38164(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38164);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38166 = (function sablono$core$form_to38166(var_args){
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
return sablono.core.form_to38166.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38166.cljs$core$IFn$_invoke$arity$variadic = (function (p__38171,body){
var vec__38172 = p__38171;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38172,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38172,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38175 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38176 = "_method";
var G__38177 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38175,G__38176,G__38177) : sablono.core.hidden_field.call(null,G__38175,G__38176,G__38177));
})()], null)),body));
}));

(sablono.core.form_to38166.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38166.cljs$lang$applyTo = (function (seq38168){
var G__38169 = cljs.core.first(seq38168);
var seq38168__$1 = cljs.core.next(seq38168);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38169,seq38168__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38166);

//# sourceMappingURL=sablono.core.js.map
