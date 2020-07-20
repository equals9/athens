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
var G__41977__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41792 = cljs.core.seq(vec__41791);
var first__41793 = cljs.core.first(seq__41792);
var seq__41792__$1 = cljs.core.next(seq__41792);
var tag = first__41793;
var body = seq__41792__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41978__i = 0, G__41978__a = new Array(arguments.length -  0);
while (G__41978__i < G__41978__a.length) {G__41978__a[G__41978__i] = arguments[G__41978__i + 0]; ++G__41978__i;}
  args = new cljs.core.IndexedSeq(G__41978__a,0,null);
} 
return G__41977__delegate.call(this,args);};
G__41977.cljs$lang$maxFixedArity = 0;
G__41977.cljs$lang$applyTo = (function (arglist__41979){
var args = cljs.core.seq(arglist__41979);
return G__41977__delegate(args);
});
G__41977.cljs$core$IFn$_invoke$arity$variadic = G__41977__delegate;
return G__41977;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__41798(s__41799){
return (new cljs.core.LazySeq(null,(function (){
var s__41799__$1 = s__41799;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41799__$1);
if(temp__5735__auto__){
var s__41799__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41799__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41799__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41801 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41800 = (0);
while(true){
if((i__41800 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41800);
cljs.core.chunk_append(b__41801,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41980 = (i__41800 + (1));
i__41800 = G__41980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41801),sablono$core$update_arglists_$_iter__41798(cljs.core.chunk_rest(s__41799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41801),null);
}
} else {
var args = cljs.core.first(s__41799__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41798(cljs.core.rest(s__41799__$2)));
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
var len__4789__auto___41981 = arguments.length;
var i__4790__auto___41982 = (0);
while(true){
if((i__4790__auto___41982 < len__4789__auto___41981)){
args__4795__auto__.push((arguments[i__4790__auto___41982]));

var G__41983 = (i__4790__auto___41982 + (1));
i__4790__auto___41982 = G__41983;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__41821(s__41822){
return (new cljs.core.LazySeq(null,(function (){
var s__41822__$1 = s__41822;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41822__$1);
if(temp__5735__auto__){
var s__41822__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41822__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41822__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41824 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41823 = (0);
while(true){
if((i__41823 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41823);
cljs.core.chunk_append(b__41824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41984 = (i__41823 + (1));
i__41823 = G__41984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41824),sablono$core$iter__41821(cljs.core.chunk_rest(s__41822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41824),null);
}
} else {
var style = cljs.core.first(s__41822__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41821(cljs.core.rest(s__41822__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41807){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41807));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__41834 = goog.dom.getDocument().body;
var G__41835 = (function (){var G__41837 = "script";
var G__41838 = ({"src": src});
return goog.dom.createDom(G__41837,G__41838);
})();
return goog.dom.appendChild(G__41834,G__41835);
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
sablono.core.link_to41843 = (function sablono$core$link_to41843(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41985 = arguments.length;
var i__4790__auto___41986 = (0);
while(true){
if((i__4790__auto___41986 < len__4789__auto___41985)){
args__4795__auto__.push((arguments[i__4790__auto___41986]));

var G__41987 = (i__4790__auto___41986 + (1));
i__4790__auto___41986 = G__41987;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41843.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to41843.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41843.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41843.cljs$lang$applyTo = (function (seq41844){
var G__41845 = cljs.core.first(seq41844);
var seq41844__$1 = cljs.core.next(seq41844);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41845,seq41844__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41843);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41851 = (function sablono$core$mail_to41851(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41990 = arguments.length;
var i__4790__auto___41991 = (0);
while(true){
if((i__4790__auto___41991 < len__4789__auto___41990)){
args__4795__auto__.push((arguments[i__4790__auto___41991]));

var G__41992 = (i__4790__auto___41991 + (1));
i__4790__auto___41991 = G__41992;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41851.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to41851.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41854){
var vec__41856 = p__41854;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41856,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41851.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41851.cljs$lang$applyTo = (function (seq41852){
var G__41853 = cljs.core.first(seq41852);
var seq41852__$1 = cljs.core.next(seq41852);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41853,seq41852__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41851);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41864 = (function sablono$core$unordered_list41864(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list41864_$_iter__41865(s__41866){
return (new cljs.core.LazySeq(null,(function (){
var s__41866__$1 = s__41866;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41866__$1);
if(temp__5735__auto__){
var s__41866__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41866__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41866__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41868 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41867 = (0);
while(true){
if((i__41867 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41867);
cljs.core.chunk_append(b__41868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41994 = (i__41867 + (1));
i__41867 = G__41994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41868),sablono$core$unordered_list41864_$_iter__41865(cljs.core.chunk_rest(s__41866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41868),null);
}
} else {
var x = cljs.core.first(s__41866__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41864_$_iter__41865(cljs.core.rest(s__41866__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41864);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41875 = (function sablono$core$ordered_list41875(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list41875_$_iter__41876(s__41877){
return (new cljs.core.LazySeq(null,(function (){
var s__41877__$1 = s__41877;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41877__$1);
if(temp__5735__auto__){
var s__41877__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41877__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41877__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41879 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41878 = (0);
while(true){
if((i__41878 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41878);
cljs.core.chunk_append(b__41879,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41995 = (i__41878 + (1));
i__41878 = G__41995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41879),sablono$core$ordered_list41875_$_iter__41876(cljs.core.chunk_rest(s__41877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41879),null);
}
} else {
var x = cljs.core.first(s__41877__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41875_$_iter__41876(cljs.core.rest(s__41877__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41875);
/**
 * Create an image element.
 */
sablono.core.image41880 = (function sablono$core$image41880(var_args){
var G__41882 = arguments.length;
switch (G__41882) {
case 1:
return sablono.core.image41880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41880.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41880.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41880.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41880);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41883_SHARP_,p2__41884_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41883_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41884_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41885_SHARP_,p2__41886_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41885_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41886_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41888 = arguments.length;
switch (G__41888) {
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
sablono.core.color_field41889 = (function sablono$core$color_field41889(var_args){
var G__41891 = arguments.length;
switch (G__41891) {
case 1:
return sablono.core.color_field41889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41889.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41781__auto__);
}));

(sablono.core.color_field41889.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.color_field41889.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41889);

/**
 * Creates a date input field.
 */
sablono.core.date_field41892 = (function sablono$core$date_field41892(var_args){
var G__41894 = arguments.length;
switch (G__41894) {
case 1:
return sablono.core.date_field41892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41892.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41781__auto__);
}));

(sablono.core.date_field41892.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.date_field41892.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41892);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41895 = (function sablono$core$datetime_field41895(var_args){
var G__41897 = arguments.length;
switch (G__41897) {
case 1:
return sablono.core.datetime_field41895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41895.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41781__auto__);
}));

(sablono.core.datetime_field41895.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.datetime_field41895.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41895);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41898 = (function sablono$core$datetime_local_field41898(var_args){
var G__41900 = arguments.length;
switch (G__41900) {
case 1:
return sablono.core.datetime_local_field41898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41898.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41781__auto__);
}));

(sablono.core.datetime_local_field41898.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.datetime_local_field41898.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41898);

/**
 * Creates a email input field.
 */
sablono.core.email_field41901 = (function sablono$core$email_field41901(var_args){
var G__41903 = arguments.length;
switch (G__41903) {
case 1:
return sablono.core.email_field41901.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41901.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41901.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41781__auto__);
}));

(sablono.core.email_field41901.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.email_field41901.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41901);

/**
 * Creates a file input field.
 */
sablono.core.file_field41904 = (function sablono$core$file_field41904(var_args){
var G__41906 = arguments.length;
switch (G__41906) {
case 1:
return sablono.core.file_field41904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41904.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41781__auto__);
}));

(sablono.core.file_field41904.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.file_field41904.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41904);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41907 = (function sablono$core$hidden_field41907(var_args){
var G__41909 = arguments.length;
switch (G__41909) {
case 1:
return sablono.core.hidden_field41907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41907.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41781__auto__);
}));

(sablono.core.hidden_field41907.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.hidden_field41907.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41907);

/**
 * Creates a month input field.
 */
sablono.core.month_field41910 = (function sablono$core$month_field41910(var_args){
var G__41912 = arguments.length;
switch (G__41912) {
case 1:
return sablono.core.month_field41910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41910.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41781__auto__);
}));

(sablono.core.month_field41910.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.month_field41910.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41910);

/**
 * Creates a number input field.
 */
sablono.core.number_field41913 = (function sablono$core$number_field41913(var_args){
var G__41915 = arguments.length;
switch (G__41915) {
case 1:
return sablono.core.number_field41913.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41913.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41913.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41781__auto__);
}));

(sablono.core.number_field41913.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.number_field41913.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41913);

/**
 * Creates a password input field.
 */
sablono.core.password_field41916 = (function sablono$core$password_field41916(var_args){
var G__41918 = arguments.length;
switch (G__41918) {
case 1:
return sablono.core.password_field41916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41916.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41781__auto__);
}));

(sablono.core.password_field41916.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.password_field41916.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41916);

/**
 * Creates a range input field.
 */
sablono.core.range_field41919 = (function sablono$core$range_field41919(var_args){
var G__41921 = arguments.length;
switch (G__41921) {
case 1:
return sablono.core.range_field41919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41919.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41781__auto__);
}));

(sablono.core.range_field41919.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.range_field41919.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41919);

/**
 * Creates a search input field.
 */
sablono.core.search_field41922 = (function sablono$core$search_field41922(var_args){
var G__41924 = arguments.length;
switch (G__41924) {
case 1:
return sablono.core.search_field41922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41922.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41781__auto__);
}));

(sablono.core.search_field41922.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.search_field41922.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41922);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41925 = (function sablono$core$tel_field41925(var_args){
var G__41927 = arguments.length;
switch (G__41927) {
case 1:
return sablono.core.tel_field41925.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41925.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41925.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41781__auto__);
}));

(sablono.core.tel_field41925.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.tel_field41925.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41925);

/**
 * Creates a text input field.
 */
sablono.core.text_field41928 = (function sablono$core$text_field41928(var_args){
var G__41930 = arguments.length;
switch (G__41930) {
case 1:
return sablono.core.text_field41928.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41928.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41928.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41781__auto__);
}));

(sablono.core.text_field41928.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.text_field41928.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41928);

/**
 * Creates a time input field.
 */
sablono.core.time_field41931 = (function sablono$core$time_field41931(var_args){
var G__41933 = arguments.length;
switch (G__41933) {
case 1:
return sablono.core.time_field41931.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41931.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41931.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41781__auto__);
}));

(sablono.core.time_field41931.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.time_field41931.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41931);

/**
 * Creates a url input field.
 */
sablono.core.url_field41934 = (function sablono$core$url_field41934(var_args){
var G__41936 = arguments.length;
switch (G__41936) {
case 1:
return sablono.core.url_field41934.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41934.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41934.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41781__auto__);
}));

(sablono.core.url_field41934.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.url_field41934.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41934);

/**
 * Creates a week input field.
 */
sablono.core.week_field41937 = (function sablono$core$week_field41937(var_args){
var G__41939 = arguments.length;
switch (G__41939) {
case 1:
return sablono.core.week_field41937.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41937.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41937.cljs$core$IFn$_invoke$arity$1 = (function (name__41781__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41781__auto__);
}));

(sablono.core.week_field41937.cljs$core$IFn$_invoke$arity$2 = (function (name__41781__auto__,value__41782__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41781__auto__,value__41782__auto__);
}));

(sablono.core.week_field41937.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41937);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41940 = (function sablono$core$check_box41940(var_args){
var G__41942 = arguments.length;
switch (G__41942) {
case 1:
return sablono.core.check_box41940.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41940.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41940.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41940.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41940.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41940.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41940.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41940);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41943 = (function sablono$core$radio_button41943(var_args){
var G__41945 = arguments.length;
switch (G__41945) {
case 1:
return sablono.core.radio_button41943.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41943.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41943.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41943.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41943.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41943.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41943.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41943);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41946 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41946);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41947 = (function sablono$core$select_options41947(coll){
var iter__4582__auto__ = (function sablono$core$select_options41947_$_iter__41948(s__41949){
return (new cljs.core.LazySeq(null,(function (){
var s__41949__$1 = s__41949;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41949__$1);
if(temp__5735__auto__){
var s__41949__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41949__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41949__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41951 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41950 = (0);
while(true){
if((i__41950 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41950);
cljs.core.chunk_append(b__41951,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41952 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41947.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41947.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41947.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42023 = (i__41950 + (1));
i__41950 = G__42023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41951),sablono$core$select_options41947_$_iter__41948(cljs.core.chunk_rest(s__41949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41951),null);
}
} else {
var x = cljs.core.first(s__41949__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41955 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41955,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41955,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41955,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41947.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41947.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41947.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41947_$_iter__41948(cljs.core.rest(s__41949__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41947);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41958 = (function sablono$core$drop_down41958(var_args){
var G__41960 = arguments.length;
switch (G__41960) {
case 2:
return sablono.core.drop_down41958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41958.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41958.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41958.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41958.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41958.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41958);
/**
 * Creates a text area element.
 */
sablono.core.text_area41961 = (function sablono$core$text_area41961(var_args){
var G__41963 = arguments.length;
switch (G__41963) {
case 1:
return sablono.core.text_area41961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41961.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41961.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41961.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41961);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41964 = (function sablono$core$label41964(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41964);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41965 = (function sablono$core$submit_button41965(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41965);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41966 = (function sablono$core$reset_button41966(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41966);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41967 = (function sablono$core$form_to41967(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42042 = arguments.length;
var i__4790__auto___42043 = (0);
while(true){
if((i__4790__auto___42043 < len__4789__auto___42042)){
args__4795__auto__.push((arguments[i__4790__auto___42043]));

var G__42044 = (i__4790__auto___42043 + (1));
i__4790__auto___42043 = G__42044;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41967.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41967.cljs$core$IFn$_invoke$arity$variadic = (function (p__41970,body){
var vec__41971 = p__41970;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41971,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41971,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41974 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41975 = "_method";
var G__41976 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41974,G__41975,G__41976) : sablono.core.hidden_field.call(null,G__41974,G__41975,G__41976));
})()], null)),body));
}));

(sablono.core.form_to41967.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41967.cljs$lang$applyTo = (function (seq41968){
var G__41969 = cljs.core.first(seq41968);
var seq41968__$1 = cljs.core.next(seq41968);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41969,seq41968__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41967);

//# sourceMappingURL=sablono.core.js.map
