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
var G__38158__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37927 = cljs.core.seq(vec__37926);
var first__37928 = cljs.core.first(seq__37927);
var seq__37927__$1 = cljs.core.next(seq__37927);
var tag = first__37928;
var body = seq__37927__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38161__i = 0, G__38161__a = new Array(arguments.length -  0);
while (G__38161__i < G__38161__a.length) {G__38161__a[G__38161__i] = arguments[G__38161__i + 0]; ++G__38161__i;}
  args = new cljs.core.IndexedSeq(G__38161__a,0,null);
} 
return G__38158__delegate.call(this,args);};
G__38158.cljs$lang$maxFixedArity = 0;
G__38158.cljs$lang$applyTo = (function (arglist__38162){
var args = cljs.core.seq(arglist__38162);
return G__38158__delegate(args);
});
G__38158.cljs$core$IFn$_invoke$arity$variadic = G__38158__delegate;
return G__38158;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37931(s__37932){
return (new cljs.core.LazySeq(null,(function (){
var s__37932__$1 = s__37932;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37932__$1);
if(temp__5735__auto__){
var s__37932__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37932__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37932__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37934 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37933 = (0);
while(true){
if((i__37933 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37933);
cljs.core.chunk_append(b__37934,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38164 = (i__37933 + (1));
i__37933 = G__38164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37934),sablono$core$update_arglists_$_iter__37931(cljs.core.chunk_rest(s__37932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37934),null);
}
} else {
var args = cljs.core.first(s__37932__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37931(cljs.core.rest(s__37932__$2)));
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
var len__4789__auto___38166 = arguments.length;
var i__4790__auto___38168 = (0);
while(true){
if((i__4790__auto___38168 < len__4789__auto___38166)){
args__4795__auto__.push((arguments[i__4790__auto___38168]));

var G__38169 = (i__4790__auto___38168 + (1));
i__4790__auto___38168 = G__38169;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37945(s__37946){
return (new cljs.core.LazySeq(null,(function (){
var s__37946__$1 = s__37946;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37946__$1);
if(temp__5735__auto__){
var s__37946__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37946__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37946__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37948 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37947 = (0);
while(true){
if((i__37947 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37947);
cljs.core.chunk_append(b__37948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38174 = (i__37947 + (1));
i__37947 = G__38174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37948),sablono$core$iter__37945(cljs.core.chunk_rest(s__37946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37948),null);
}
} else {
var style = cljs.core.first(s__37946__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37945(cljs.core.rest(s__37946__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37942){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37942));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37953 = goog.dom.getDocument().body;
var G__37954 = (function (){var G__37956 = "script";
var G__37957 = ({"src": src});
return goog.dom.createDom(G__37956,G__37957);
})();
return goog.dom.appendChild(G__37953,G__37954);
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
sablono.core.link_to37958 = (function sablono$core$link_to37958(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38181 = arguments.length;
var i__4790__auto___38182 = (0);
while(true){
if((i__4790__auto___38182 < len__4789__auto___38181)){
args__4795__auto__.push((arguments[i__4790__auto___38182]));

var G__38183 = (i__4790__auto___38182 + (1));
i__4790__auto___38182 = G__38183;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37958.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37958.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37958.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37958.cljs$lang$applyTo = (function (seq37961){
var G__37962 = cljs.core.first(seq37961);
var seq37961__$1 = cljs.core.next(seq37961);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37962,seq37961__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37958);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37966 = (function sablono$core$mail_to37966(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38186 = arguments.length;
var i__4790__auto___38187 = (0);
while(true){
if((i__4790__auto___38187 < len__4789__auto___38186)){
args__4795__auto__.push((arguments[i__4790__auto___38187]));

var G__38188 = (i__4790__auto___38187 + (1));
i__4790__auto___38187 = G__38188;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37966.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37966.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37970){
var vec__37971 = p__37970;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37971,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37966.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37966.cljs$lang$applyTo = (function (seq37967){
var G__37968 = cljs.core.first(seq37967);
var seq37967__$1 = cljs.core.next(seq37967);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37968,seq37967__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37966);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37976 = (function sablono$core$unordered_list37976(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list37976_$_iter__37977(s__37978){
return (new cljs.core.LazySeq(null,(function (){
var s__37978__$1 = s__37978;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37978__$1);
if(temp__5735__auto__){
var s__37978__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37978__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37978__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37980 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37979 = (0);
while(true){
if((i__37979 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37979);
cljs.core.chunk_append(b__37980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38192 = (i__37979 + (1));
i__37979 = G__38192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37980),sablono$core$unordered_list37976_$_iter__37977(cljs.core.chunk_rest(s__37978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37980),null);
}
} else {
var x = cljs.core.first(s__37978__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37976_$_iter__37977(cljs.core.rest(s__37978__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list37976);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37985 = (function sablono$core$ordered_list37985(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list37985_$_iter__37986(s__37987){
return (new cljs.core.LazySeq(null,(function (){
var s__37987__$1 = s__37987;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37987__$1);
if(temp__5735__auto__){
var s__37987__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37987__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37987__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37989 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37988 = (0);
while(true){
if((i__37988 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37988);
cljs.core.chunk_append(b__37989,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38195 = (i__37988 + (1));
i__37988 = G__38195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37989),sablono$core$ordered_list37985_$_iter__37986(cljs.core.chunk_rest(s__37987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37989),null);
}
} else {
var x = cljs.core.first(s__37987__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37985_$_iter__37986(cljs.core.rest(s__37987__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list37985);
/**
 * Create an image element.
 */
sablono.core.image37991 = (function sablono$core$image37991(var_args){
var G__37994 = arguments.length;
switch (G__37994) {
case 1:
return sablono.core.image37991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image37991.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image37991.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image37991.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image37991);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37998_SHARP_,p2__37999_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37998_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37999_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38006 = arguments.length;
switch (G__38006) {
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
sablono.core.color_field38010 = (function sablono$core$color_field38010(var_args){
var G__38014 = arguments.length;
switch (G__38014) {
case 1:
return sablono.core.color_field38010.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38010.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38010.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37915__auto__);
}));

(sablono.core.color_field38010.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.color_field38010.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38010);

/**
 * Creates a date input field.
 */
sablono.core.date_field38017 = (function sablono$core$date_field38017(var_args){
var G__38019 = arguments.length;
switch (G__38019) {
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
sablono.core.datetime_field38021 = (function sablono$core$datetime_field38021(var_args){
var G__38024 = arguments.length;
switch (G__38024) {
case 1:
return sablono.core.datetime_field38021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38021.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37915__auto__);
}));

(sablono.core.datetime_field38021.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.datetime_field38021.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38021);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38027 = (function sablono$core$datetime_local_field38027(var_args){
var G__38029 = arguments.length;
switch (G__38029) {
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
sablono.core.email_field38033 = (function sablono$core$email_field38033(var_args){
var G__38035 = arguments.length;
switch (G__38035) {
case 1:
return sablono.core.email_field38033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38033.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37915__auto__);
}));

(sablono.core.email_field38033.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.email_field38033.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38033);

/**
 * Creates a file input field.
 */
sablono.core.file_field38037 = (function sablono$core$file_field38037(var_args){
var G__38041 = arguments.length;
switch (G__38041) {
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
sablono.core.hidden_field38044 = (function sablono$core$hidden_field38044(var_args){
var G__38046 = arguments.length;
switch (G__38046) {
case 1:
return sablono.core.hidden_field38044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38044.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37915__auto__);
}));

(sablono.core.hidden_field38044.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.hidden_field38044.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38044);

/**
 * Creates a month input field.
 */
sablono.core.month_field38050 = (function sablono$core$month_field38050(var_args){
var G__38053 = arguments.length;
switch (G__38053) {
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
var G__38058 = arguments.length;
switch (G__38058) {
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
sablono.core.password_field38061 = (function sablono$core$password_field38061(var_args){
var G__38063 = arguments.length;
switch (G__38063) {
case 1:
return sablono.core.password_field38061.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38061.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38061.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37915__auto__);
}));

(sablono.core.password_field38061.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.password_field38061.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38061);

/**
 * Creates a range input field.
 */
sablono.core.range_field38066 = (function sablono$core$range_field38066(var_args){
var G__38068 = arguments.length;
switch (G__38068) {
case 1:
return sablono.core.range_field38066.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38066.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38066.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37915__auto__);
}));

(sablono.core.range_field38066.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.range_field38066.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38066);

/**
 * Creates a search input field.
 */
sablono.core.search_field38072 = (function sablono$core$search_field38072(var_args){
var G__38075 = arguments.length;
switch (G__38075) {
case 1:
return sablono.core.search_field38072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38072.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37915__auto__);
}));

(sablono.core.search_field38072.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.search_field38072.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38072);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38078 = (function sablono$core$tel_field38078(var_args){
var G__38081 = arguments.length;
switch (G__38081) {
case 1:
return sablono.core.tel_field38078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38078.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37915__auto__);
}));

(sablono.core.tel_field38078.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.tel_field38078.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38078);

/**
 * Creates a text input field.
 */
sablono.core.text_field38085 = (function sablono$core$text_field38085(var_args){
var G__38087 = arguments.length;
switch (G__38087) {
case 1:
return sablono.core.text_field38085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38085.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37915__auto__);
}));

(sablono.core.text_field38085.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.text_field38085.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38085);

/**
 * Creates a time input field.
 */
sablono.core.time_field38090 = (function sablono$core$time_field38090(var_args){
var G__38092 = arguments.length;
switch (G__38092) {
case 1:
return sablono.core.time_field38090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38090.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37915__auto__);
}));

(sablono.core.time_field38090.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.time_field38090.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38090);

/**
 * Creates a url input field.
 */
sablono.core.url_field38093 = (function sablono$core$url_field38093(var_args){
var G__38095 = arguments.length;
switch (G__38095) {
case 1:
return sablono.core.url_field38093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38093.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37915__auto__);
}));

(sablono.core.url_field38093.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.url_field38093.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38093);

/**
 * Creates a week input field.
 */
sablono.core.week_field38096 = (function sablono$core$week_field38096(var_args){
var G__38098 = arguments.length;
switch (G__38098) {
case 1:
return sablono.core.week_field38096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38096.cljs$core$IFn$_invoke$arity$1 = (function (name__37915__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37915__auto__);
}));

(sablono.core.week_field38096.cljs$core$IFn$_invoke$arity$2 = (function (name__37915__auto__,value__37916__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37915__auto__,value__37916__auto__);
}));

(sablono.core.week_field38096.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38096);
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
cljs.core.chunk_append(b__38110,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38112 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38112,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38112,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38112,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38106.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38266 = (i__38109 + (1));
i__38109 = G__38266;
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
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38117 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38117,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38117,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38117,(2),null);
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
sablono.core.drop_down38123 = (function sablono$core$drop_down38123(var_args){
var G__38126 = arguments.length;
switch (G__38126) {
case 2:
return sablono.core.drop_down38123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38123.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38123.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38123.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38123.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38123.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38123);
/**
 * Creates a text area element.
 */
sablono.core.text_area38132 = (function sablono$core$text_area38132(var_args){
var G__38134 = arguments.length;
switch (G__38134) {
case 1:
return sablono.core.text_area38132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38132.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38132.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38132.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38132);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38137 = (function sablono$core$label38137(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38137);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38139 = (function sablono$core$submit_button38139(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38139);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38140 = (function sablono$core$reset_button38140(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38140);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38141 = (function sablono$core$form_to38141(var_args){
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
return sablono.core.form_to38141.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38141.cljs$core$IFn$_invoke$arity$variadic = (function (p__38147,body){
var vec__38148 = p__38147;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38153 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38154 = "_method";
var G__38155 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38153,G__38154,G__38155) : sablono.core.hidden_field.call(null,G__38153,G__38154,G__38155));
})()], null)),body));
}));

(sablono.core.form_to38141.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38141.cljs$lang$applyTo = (function (seq38143){
var G__38144 = cljs.core.first(seq38143);
var seq38143__$1 = cljs.core.next(seq38143);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38144,seq38143__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38141);

//# sourceMappingURL=sablono.core.js.map
