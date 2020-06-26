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
var G__38168__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37957 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37958 = cljs.core.seq(vec__37957);
var first__37959 = cljs.core.first(seq__37958);
var seq__37958__$1 = cljs.core.next(seq__37958);
var tag = first__37959;
var body = seq__37958__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38172__i = 0, G__38172__a = new Array(arguments.length -  0);
while (G__38172__i < G__38172__a.length) {G__38172__a[G__38172__i] = arguments[G__38172__i + 0]; ++G__38172__i;}
  args = new cljs.core.IndexedSeq(G__38172__a,0,null);
} 
return G__38168__delegate.call(this,args);};
G__38168.cljs$lang$maxFixedArity = 0;
G__38168.cljs$lang$applyTo = (function (arglist__38174){
var args = cljs.core.seq(arglist__38174);
return G__38168__delegate(args);
});
G__38168.cljs$core$IFn$_invoke$arity$variadic = G__38168__delegate;
return G__38168;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37962(s__37963){
return (new cljs.core.LazySeq(null,(function (){
var s__37963__$1 = s__37963;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37963__$1);
if(temp__5735__auto__){
var s__37963__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37963__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37963__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37965 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37964 = (0);
while(true){
if((i__37964 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37964);
cljs.core.chunk_append(b__37965,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38176 = (i__37964 + (1));
i__37964 = G__38176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37965),sablono$core$update_arglists_$_iter__37962(cljs.core.chunk_rest(s__37963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37965),null);
}
} else {
var args = cljs.core.first(s__37963__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37962(cljs.core.rest(s__37963__$2)));
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
var len__4789__auto___38179 = arguments.length;
var i__4790__auto___38180 = (0);
while(true){
if((i__4790__auto___38180 < len__4789__auto___38179)){
args__4795__auto__.push((arguments[i__4790__auto___38180]));

var G__38181 = (i__4790__auto___38180 + (1));
i__4790__auto___38180 = G__38181;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37974(s__37975){
return (new cljs.core.LazySeq(null,(function (){
var s__37975__$1 = s__37975;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37975__$1);
if(temp__5735__auto__){
var s__37975__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37975__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37975__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37977 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37976 = (0);
while(true){
if((i__37976 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37976);
cljs.core.chunk_append(b__37977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38184 = (i__37976 + (1));
i__37976 = G__38184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37977),sablono$core$iter__37974(cljs.core.chunk_rest(s__37975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37977),null);
}
} else {
var style = cljs.core.first(s__37975__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37974(cljs.core.rest(s__37975__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37972){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37972));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37981 = goog.dom.getDocument().body;
var G__37982 = (function (){var G__37984 = "script";
var G__37985 = ({"src": src});
return goog.dom.createDom(G__37984,G__37985);
})();
return goog.dom.appendChild(G__37981,G__37982);
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
sablono.core.link_to37986 = (function sablono$core$link_to37986(var_args){
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
return sablono.core.link_to37986.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37986.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37986.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37986.cljs$lang$applyTo = (function (seq37987){
var G__37988 = cljs.core.first(seq37987);
var seq37987__$1 = cljs.core.next(seq37987);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37988,seq37987__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37986);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37992 = (function sablono$core$mail_to37992(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38190 = arguments.length;
var i__4790__auto___38191 = (0);
while(true){
if((i__4790__auto___38191 < len__4789__auto___38190)){
args__4795__auto__.push((arguments[i__4790__auto___38191]));

var G__38193 = (i__4790__auto___38191 + (1));
i__4790__auto___38191 = G__38193;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37992.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37992.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37996){
var vec__37998 = p__37996;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37998,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37992.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37992.cljs$lang$applyTo = (function (seq37993){
var G__37994 = cljs.core.first(seq37993);
var seq37993__$1 = cljs.core.next(seq37993);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37994,seq37993__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37992);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38002 = (function sablono$core$unordered_list38002(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list38002_$_iter__38003(s__38004){
return (new cljs.core.LazySeq(null,(function (){
var s__38004__$1 = s__38004;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38004__$1);
if(temp__5735__auto__){
var s__38004__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38004__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38004__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38006 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38005 = (0);
while(true){
if((i__38005 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38005);
cljs.core.chunk_append(b__38006,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38197 = (i__38005 + (1));
i__38005 = G__38197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38006),sablono$core$unordered_list38002_$_iter__38003(cljs.core.chunk_rest(s__38004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38006),null);
}
} else {
var x = cljs.core.first(s__38004__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38002_$_iter__38003(cljs.core.rest(s__38004__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38002);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38009 = (function sablono$core$ordered_list38009(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38009_$_iter__38011(s__38012){
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
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38013);
cljs.core.chunk_append(b__38014,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38201 = (i__38013 + (1));
i__38013 = G__38201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38014),sablono$core$ordered_list38009_$_iter__38011(cljs.core.chunk_rest(s__38012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38014),null);
}
} else {
var x = cljs.core.first(s__38012__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38009_$_iter__38011(cljs.core.rest(s__38012__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38009);
/**
 * Create an image element.
 */
sablono.core.image38017 = (function sablono$core$image38017(var_args){
var G__38020 = arguments.length;
switch (G__38020) {
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
var G__38036 = arguments.length;
switch (G__38036) {
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

(sablono.core.color_field38034.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37947__auto__);
}));

(sablono.core.color_field38034.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.color_field38034.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38034);

/**
 * Creates a date input field.
 */
sablono.core.date_field38038 = (function sablono$core$date_field38038(var_args){
var G__38041 = arguments.length;
switch (G__38041) {
case 1:
return sablono.core.date_field38038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38038.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37947__auto__);
}));

(sablono.core.date_field38038.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.date_field38038.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38038);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38044 = (function sablono$core$datetime_field38044(var_args){
var G__38047 = arguments.length;
switch (G__38047) {
case 1:
return sablono.core.datetime_field38044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38044.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37947__auto__);
}));

(sablono.core.datetime_field38044.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.datetime_field38044.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38044);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38048 = (function sablono$core$datetime_local_field38048(var_args){
var G__38051 = arguments.length;
switch (G__38051) {
case 1:
return sablono.core.datetime_local_field38048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38048.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37947__auto__);
}));

(sablono.core.datetime_local_field38048.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.datetime_local_field38048.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38048);

/**
 * Creates a email input field.
 */
sablono.core.email_field38054 = (function sablono$core$email_field38054(var_args){
var G__38056 = arguments.length;
switch (G__38056) {
case 1:
return sablono.core.email_field38054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38054.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37947__auto__);
}));

(sablono.core.email_field38054.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.email_field38054.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38054);

/**
 * Creates a file input field.
 */
sablono.core.file_field38058 = (function sablono$core$file_field38058(var_args){
var G__38061 = arguments.length;
switch (G__38061) {
case 1:
return sablono.core.file_field38058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38058.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37947__auto__);
}));

(sablono.core.file_field38058.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.file_field38058.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38058);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38064 = (function sablono$core$hidden_field38064(var_args){
var G__38066 = arguments.length;
switch (G__38066) {
case 1:
return sablono.core.hidden_field38064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38064.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37947__auto__);
}));

(sablono.core.hidden_field38064.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.hidden_field38064.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38064);

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

(sablono.core.month_field38069.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37947__auto__);
}));

(sablono.core.month_field38069.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37947__auto__,value__37948__auto__);
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

(sablono.core.number_field38072.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37947__auto__);
}));

(sablono.core.number_field38072.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37947__auto__,value__37948__auto__);
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

(sablono.core.password_field38075.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37947__auto__);
}));

(sablono.core.password_field38075.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37947__auto__,value__37948__auto__);
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

(sablono.core.range_field38078.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37947__auto__);
}));

(sablono.core.range_field38078.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37947__auto__,value__37948__auto__);
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

(sablono.core.search_field38081.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37947__auto__);
}));

(sablono.core.search_field38081.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37947__auto__,value__37948__auto__);
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

(sablono.core.tel_field38084.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37947__auto__);
}));

(sablono.core.tel_field38084.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.tel_field38084.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38084);

/**
 * Creates a text input field.
 */
sablono.core.text_field38087 = (function sablono$core$text_field38087(var_args){
var G__38089 = arguments.length;
switch (G__38089) {
case 1:
return sablono.core.text_field38087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38087.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37947__auto__);
}));

(sablono.core.text_field38087.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.text_field38087.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38087);

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

(sablono.core.time_field38090.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37947__auto__);
}));

(sablono.core.time_field38090.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37947__auto__,value__37948__auto__);
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

(sablono.core.url_field38093.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37947__auto__);
}));

(sablono.core.url_field38093.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.url_field38093.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38093);

/**
 * Creates a week input field.
 */
sablono.core.week_field38097 = (function sablono$core$week_field38097(var_args){
var G__38101 = arguments.length;
switch (G__38101) {
case 1:
return sablono.core.week_field38097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38097.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37947__auto__);
}));

(sablono.core.week_field38097.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.week_field38097.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38097);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38105 = (function sablono$core$check_box38105(var_args){
var G__38109 = arguments.length;
switch (G__38109) {
case 1:
return sablono.core.check_box38105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38105.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38105.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38105.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38105.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38105.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38105);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38113 = (function sablono$core$radio_button38113(var_args){
var G__38116 = arguments.length;
switch (G__38116) {
case 1:
return sablono.core.radio_button38113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38113.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38113.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38113.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38113.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38113.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38113);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38119 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38119);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38121 = (function sablono$core$select_options38121(coll){
var iter__4582__auto__ = (function sablono$core$select_options38121_$_iter__38122(s__38123){
return (new cljs.core.LazySeq(null,(function (){
var s__38123__$1 = s__38123;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38123__$1);
if(temp__5735__auto__){
var s__38123__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38123__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38123__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38125 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38124 = (0);
while(true){
if((i__38124 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38124);
cljs.core.chunk_append(b__38125,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38127 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38121.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38121.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38121.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38264 = (i__38124 + (1));
i__38124 = G__38264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38125),sablono$core$select_options38121_$_iter__38122(cljs.core.chunk_rest(s__38123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38125),null);
}
} else {
var x = cljs.core.first(s__38123__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38131 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38121.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38121.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38121.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38121_$_iter__38122(cljs.core.rest(s__38123__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38121);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38135 = (function sablono$core$drop_down38135(var_args){
var G__38137 = arguments.length;
switch (G__38137) {
case 2:
return sablono.core.drop_down38135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38135.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38135.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38135.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38135.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38135.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38135);
/**
 * Creates a text area element.
 */
sablono.core.text_area38142 = (function sablono$core$text_area38142(var_args){
var G__38144 = arguments.length;
switch (G__38144) {
case 1:
return sablono.core.text_area38142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38142.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38142.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38142.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38142);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38147 = (function sablono$core$label38147(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38147);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38148 = (function sablono$core$submit_button38148(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38148);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38150 = (function sablono$core$reset_button38150(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38150);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38152 = (function sablono$core$form_to38152(var_args){
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
return sablono.core.form_to38152.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38152.cljs$core$IFn$_invoke$arity$variadic = (function (p__38157,body){
var vec__38158 = p__38157;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38158,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38158,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38162 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38163 = "_method";
var G__38164 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38162,G__38163,G__38164) : sablono.core.hidden_field.call(null,G__38162,G__38163,G__38164));
})()], null)),body));
}));

(sablono.core.form_to38152.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38152.cljs$lang$applyTo = (function (seq38153){
var G__38154 = cljs.core.first(seq38153);
var seq38153__$1 = cljs.core.next(seq38153);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38154,seq38153__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38152);

//# sourceMappingURL=sablono.core.js.map
