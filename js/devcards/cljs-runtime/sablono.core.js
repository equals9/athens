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
var G__38142__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37929 = cljs.core.seq(vec__37928);
var first__37930 = cljs.core.first(seq__37929);
var seq__37929__$1 = cljs.core.next(seq__37929);
var tag = first__37930;
var body = seq__37929__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38146__i = 0, G__38146__a = new Array(arguments.length -  0);
while (G__38146__i < G__38146__a.length) {G__38146__a[G__38146__i] = arguments[G__38146__i + 0]; ++G__38146__i;}
  args = new cljs.core.IndexedSeq(G__38146__a,0,null);
} 
return G__38142__delegate.call(this,args);};
G__38142.cljs$lang$maxFixedArity = 0;
G__38142.cljs$lang$applyTo = (function (arglist__38147){
var args = cljs.core.seq(arglist__38147);
return G__38142__delegate(args);
});
G__38142.cljs$core$IFn$_invoke$arity$variadic = G__38142__delegate;
return G__38142;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37934(s__37935){
return (new cljs.core.LazySeq(null,(function (){
var s__37935__$1 = s__37935;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37935__$1);
if(temp__5735__auto__){
var s__37935__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37935__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37935__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37937 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37936 = (0);
while(true){
if((i__37936 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37936);
cljs.core.chunk_append(b__37937,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38151 = (i__37936 + (1));
i__37936 = G__38151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37937),sablono$core$update_arglists_$_iter__37934(cljs.core.chunk_rest(s__37935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37937),null);
}
} else {
var args = cljs.core.first(s__37935__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37934(cljs.core.rest(s__37935__$2)));
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
var len__4789__auto___38152 = arguments.length;
var i__4790__auto___38153 = (0);
while(true){
if((i__4790__auto___38153 < len__4789__auto___38152)){
args__4795__auto__.push((arguments[i__4790__auto___38153]));

var G__38155 = (i__4790__auto___38153 + (1));
i__4790__auto___38153 = G__38155;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37947(s__37948){
return (new cljs.core.LazySeq(null,(function (){
var s__37948__$1 = s__37948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37948__$1);
if(temp__5735__auto__){
var s__37948__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37948__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37948__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37950 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37949 = (0);
while(true){
if((i__37949 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37949);
cljs.core.chunk_append(b__37950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38158 = (i__37949 + (1));
i__37949 = G__38158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37950),sablono$core$iter__37947(cljs.core.chunk_rest(s__37948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37950),null);
}
} else {
var style = cljs.core.first(s__37948__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37947(cljs.core.rest(s__37948__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37944){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37944));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37954 = goog.dom.getDocument().body;
var G__37955 = (function (){var G__37957 = "script";
var G__37958 = ({"src": src});
return goog.dom.createDom(G__37957,G__37958);
})();
return goog.dom.appendChild(G__37954,G__37955);
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
sablono.core.link_to37961 = (function sablono$core$link_to37961(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38160 = arguments.length;
var i__4790__auto___38162 = (0);
while(true){
if((i__4790__auto___38162 < len__4789__auto___38160)){
args__4795__auto__.push((arguments[i__4790__auto___38162]));

var G__38163 = (i__4790__auto___38162 + (1));
i__4790__auto___38162 = G__38163;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37961.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37961.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37961.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37961.cljs$lang$applyTo = (function (seq37962){
var G__37963 = cljs.core.first(seq37962);
var seq37962__$1 = cljs.core.next(seq37962);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37963,seq37962__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37961);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37967 = (function sablono$core$mail_to37967(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38168 = arguments.length;
var i__4790__auto___38169 = (0);
while(true){
if((i__4790__auto___38169 < len__4789__auto___38168)){
args__4795__auto__.push((arguments[i__4790__auto___38169]));

var G__38171 = (i__4790__auto___38169 + (1));
i__4790__auto___38169 = G__38171;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37967.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37967.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37971){
var vec__37972 = p__37971;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37972,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37967.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37967.cljs$lang$applyTo = (function (seq37968){
var G__37969 = cljs.core.first(seq37968);
var seq37968__$1 = cljs.core.next(seq37968);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37969,seq37968__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37967);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37978 = (function sablono$core$unordered_list37978(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list37978_$_iter__37979(s__37980){
return (new cljs.core.LazySeq(null,(function (){
var s__37980__$1 = s__37980;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37980__$1);
if(temp__5735__auto__){
var s__37980__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37980__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37980__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37982 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37981 = (0);
while(true){
if((i__37981 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37981);
cljs.core.chunk_append(b__37982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38175 = (i__37981 + (1));
i__37981 = G__38175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37982),sablono$core$unordered_list37978_$_iter__37979(cljs.core.chunk_rest(s__37980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37982),null);
}
} else {
var x = cljs.core.first(s__37980__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37978_$_iter__37979(cljs.core.rest(s__37980__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list37978);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37986 = (function sablono$core$ordered_list37986(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list37986_$_iter__37987(s__37988){
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
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37989);
cljs.core.chunk_append(b__37990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38178 = (i__37989 + (1));
i__37989 = G__38178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37990),sablono$core$ordered_list37986_$_iter__37987(cljs.core.chunk_rest(s__37988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37990),null);
}
} else {
var x = cljs.core.first(s__37988__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37986_$_iter__37987(cljs.core.rest(s__37988__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list37986);
/**
 * Create an image element.
 */
sablono.core.image37993 = (function sablono$core$image37993(var_args){
var G__37995 = arguments.length;
switch (G__37995) {
case 1:
return sablono.core.image37993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image37993.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image37993.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image37993.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image37993);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37996_SHARP_,p2__37997_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37996_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37997_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38000_SHARP_,p2__38001_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38000_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38001_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38008 = arguments.length;
switch (G__38008) {
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
sablono.core.color_field38012 = (function sablono$core$color_field38012(var_args){
var G__38015 = arguments.length;
switch (G__38015) {
case 1:
return sablono.core.color_field38012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38012.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37915__auto__);
}));

(sablono.core.color_field38012.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.color_field38012.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38012);

/**
 * Creates a date input field.
 */
sablono.core.date_field38017 = (function sablono$core$date_field38017(var_args){
var G__38020 = arguments.length;
switch (G__38020) {
case 1:
return sablono.core.date_field38017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38017.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37915__auto__);
}));

(sablono.core.date_field38017.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.date_field38017.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38017);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38022 = (function sablono$core$datetime_field38022(var_args){
var G__38025 = arguments.length;
switch (G__38025) {
case 1:
return sablono.core.datetime_field38022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38022.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37915__auto__);
}));

(sablono.core.datetime_field38022.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.datetime_field38022.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38022);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38027 = (function sablono$core$datetime_local_field38027(var_args){
var G__38030 = arguments.length;
switch (G__38030) {
case 1:
return sablono.core.datetime_local_field38027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38027.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37915__auto__);
}));

(sablono.core.datetime_local_field38027.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.datetime_local_field38027.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38027);

/**
 * Creates a email input field.
 */
sablono.core.email_field38032 = (function sablono$core$email_field38032(var_args){
var G__38035 = arguments.length;
switch (G__38035) {
case 1:
return sablono.core.email_field38032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38032.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37915__auto__);
}));

(sablono.core.email_field38032.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.email_field38032.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38032);

/**
 * Creates a file input field.
 */
sablono.core.file_field38037 = (function sablono$core$file_field38037(var_args){
var G__38040 = arguments.length;
switch (G__38040) {
case 1:
return sablono.core.file_field38037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38037.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37915__auto__);
}));

(sablono.core.file_field38037.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.file_field38037.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38037);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38043 = (function sablono$core$hidden_field38043(var_args){
var G__38046 = arguments.length;
switch (G__38046) {
case 1:
return sablono.core.hidden_field38043.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38043.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38043.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37915__auto__);
}));

(sablono.core.hidden_field38043.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.hidden_field38043.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38043);

/**
 * Creates a month input field.
 */
sablono.core.month_field38050 = (function sablono$core$month_field38050(var_args){
var G__38052 = arguments.length;
switch (G__38052) {
case 1:
return sablono.core.month_field38050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38050.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37915__auto__);
}));

(sablono.core.month_field38050.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.month_field38050.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38050);

/**
 * Creates a number input field.
 */
sablono.core.number_field38055 = (function sablono$core$number_field38055(var_args){
var G__38057 = arguments.length;
switch (G__38057) {
case 1:
return sablono.core.number_field38055.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38055.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38055.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37915__auto__);
}));

(sablono.core.number_field38055.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.number_field38055.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38055);

/**
 * Creates a password input field.
 */
sablono.core.password_field38059 = (function sablono$core$password_field38059(var_args){
var G__38061 = arguments.length;
switch (G__38061) {
case 1:
return sablono.core.password_field38059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38059.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37915__auto__);
}));

(sablono.core.password_field38059.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.password_field38059.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38059);

/**
 * Creates a range input field.
 */
sablono.core.range_field38063 = (function sablono$core$range_field38063(var_args){
var G__38066 = arguments.length;
switch (G__38066) {
case 1:
return sablono.core.range_field38063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38063.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37915__auto__);
}));

(sablono.core.range_field38063.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.range_field38063.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38063);

/**
 * Creates a search input field.
 */
sablono.core.search_field38067 = (function sablono$core$search_field38067(var_args){
var G__38070 = arguments.length;
switch (G__38070) {
case 1:
return sablono.core.search_field38067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38067.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37915__auto__);
}));

(sablono.core.search_field38067.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.search_field38067.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38067);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38072 = (function sablono$core$tel_field38072(var_args){
var G__38075 = arguments.length;
switch (G__38075) {
case 1:
return sablono.core.tel_field38072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38072.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37915__auto__);
}));

(sablono.core.tel_field38072.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.tel_field38072.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38072);

/**
 * Creates a text input field.
 */
sablono.core.text_field38079 = (function sablono$core$text_field38079(var_args){
var G__38081 = arguments.length;
switch (G__38081) {
case 1:
return sablono.core.text_field38079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38079.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37915__auto__);
}));

(sablono.core.text_field38079.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.text_field38079.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38079);

/**
 * Creates a time input field.
 */
sablono.core.time_field38085 = (function sablono$core$time_field38085(var_args){
var G__38088 = arguments.length;
switch (G__38088) {
case 1:
return sablono.core.time_field38085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38085.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37915__auto__);
}));

(sablono.core.time_field38085.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.time_field38085.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38085);

/**
 * Creates a url input field.
 */
sablono.core.url_field38091 = (function sablono$core$url_field38091(var_args){
var G__38093 = arguments.length;
switch (G__38093) {
case 1:
return sablono.core.url_field38091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38091.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37915__auto__);
}));

(sablono.core.url_field38091.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.url_field38091.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38091);

/**
 * Creates a week input field.
 */
sablono.core.week_field38095 = (function sablono$core$week_field38095(var_args){
var G__38098 = arguments.length;
switch (G__38098) {
case 1:
return sablono.core.week_field38095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38095.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37915__auto__);
}));

(sablono.core.week_field38095.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.week_field38095.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38095);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38099 = (function sablono$core$check_box38099(var_args){
var G__38101 = arguments.length;
switch (G__38101) {
case 1:
return sablono.core.check_box38099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38099.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38099.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38099.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38099.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38099.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38099);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38102 = (function sablono$core$radio_button38102(var_args){
var G__38104 = arguments.length;
switch (G__38104) {
case 1:
return sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38102.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38102);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38105 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38105);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38106 = (function sablono$core$select_options38106(coll){
var iter__4582__auto__ = (function sablono$core$select_options38106_$_iter__38107(s__38108){
return (new cljs.core.LazySeq(null,(function (){
var s__38108__$1 = s__38108;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38108__$1);
if(temp__5735__auto__){
var s__38108__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38108__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38108__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38110 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38109 = (0);
while(true){
if((i__38109 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38109);
cljs.core.chunk_append(b__38110,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38111 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38111,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38111,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38111,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38106.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38251 = (i__38109 + (1));
i__38109 = G__38251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38110),sablono$core$select_options38106_$_iter__38107(cljs.core.chunk_rest(s__38108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38110),null);
}
} else {
var x = cljs.core.first(s__38108__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38114 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38106.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38106_$_iter__38107(cljs.core.rest(s__38108__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38106);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38117 = (function sablono$core$drop_down38117(var_args){
var G__38119 = arguments.length;
switch (G__38119) {
case 2:
return sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38117.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38117);
/**
 * Creates a text area element.
 */
sablono.core.text_area38120 = (function sablono$core$text_area38120(var_args){
var G__38122 = arguments.length;
switch (G__38122) {
case 1:
return sablono.core.text_area38120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38120.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38120.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38120.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38120);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38123 = (function sablono$core$label38123(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38123);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38124 = (function sablono$core$submit_button38124(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38124);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38125 = (function sablono$core$reset_button38125(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38125);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38126 = (function sablono$core$form_to38126(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38264 = arguments.length;
var i__4790__auto___38265 = (0);
while(true){
if((i__4790__auto___38265 < len__4789__auto___38264)){
args__4795__auto__.push((arguments[i__4790__auto___38265]));

var G__38267 = (i__4790__auto___38265 + (1));
i__4790__auto___38265 = G__38267;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38126.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38126.cljs$core$IFn$_invoke$arity$variadic = (function (p__38131,body){
var vec__38132 = p__38131;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38136 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38137 = "_method";
var G__38138 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38136,G__38137,G__38138) : sablono.core.hidden_field.call(null,G__38136,G__38137,G__38138));
})()], null)),body));
}));

(sablono.core.form_to38126.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38126.cljs$lang$applyTo = (function (seq38127){
var G__38128 = cljs.core.first(seq38127);
var seq38127__$1 = cljs.core.next(seq38127);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38128,seq38127__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38126);

//# sourceMappingURL=sablono.core.js.map
