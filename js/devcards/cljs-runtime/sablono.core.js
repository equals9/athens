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
var G__38186__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37956 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37957 = cljs.core.seq(vec__37956);
var first__37958 = cljs.core.first(seq__37957);
var seq__37957__$1 = cljs.core.next(seq__37957);
var tag = first__37958;
var body = seq__37957__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38191__i = 0, G__38191__a = new Array(arguments.length -  0);
while (G__38191__i < G__38191__a.length) {G__38191__a[G__38191__i] = arguments[G__38191__i + 0]; ++G__38191__i;}
  args = new cljs.core.IndexedSeq(G__38191__a,0,null);
} 
return G__38186__delegate.call(this,args);};
G__38186.cljs$lang$maxFixedArity = 0;
G__38186.cljs$lang$applyTo = (function (arglist__38192){
var args = cljs.core.seq(arglist__38192);
return G__38186__delegate(args);
});
G__38186.cljs$core$IFn$_invoke$arity$variadic = G__38186__delegate;
return G__38186;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37960(s__37961){
return (new cljs.core.LazySeq(null,(function (){
var s__37961__$1 = s__37961;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37961__$1);
if(temp__5735__auto__){
var s__37961__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37961__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37961__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37963 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37962 = (0);
while(true){
if((i__37962 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37962);
cljs.core.chunk_append(b__37963,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38194 = (i__37962 + (1));
i__37962 = G__38194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37963),sablono$core$update_arglists_$_iter__37960(cljs.core.chunk_rest(s__37961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37963),null);
}
} else {
var args = cljs.core.first(s__37961__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37960(cljs.core.rest(s__37961__$2)));
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
var len__4789__auto___38197 = arguments.length;
var i__4790__auto___38198 = (0);
while(true){
if((i__4790__auto___38198 < len__4789__auto___38197)){
args__4795__auto__.push((arguments[i__4790__auto___38198]));

var G__38200 = (i__4790__auto___38198 + (1));
i__4790__auto___38198 = G__38200;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37972(s__37973){
return (new cljs.core.LazySeq(null,(function (){
var s__37973__$1 = s__37973;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37973__$1);
if(temp__5735__auto__){
var s__37973__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37973__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37973__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37975 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37974 = (0);
while(true){
if((i__37974 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37974);
cljs.core.chunk_append(b__37975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38203 = (i__37974 + (1));
i__37974 = G__38203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37975),sablono$core$iter__37972(cljs.core.chunk_rest(s__37973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37975),null);
}
} else {
var style = cljs.core.first(s__37973__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37972(cljs.core.rest(s__37973__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37968){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37968));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37980 = goog.dom.getDocument().body;
var G__37981 = (function (){var G__37982 = "script";
var G__37983 = ({"src": src});
return goog.dom.createDom(G__37982,G__37983);
})();
return goog.dom.appendChild(G__37980,G__37981);
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
var len__4789__auto___38209 = arguments.length;
var i__4790__auto___38210 = (0);
while(true){
if((i__4790__auto___38210 < len__4789__auto___38209)){
args__4795__auto__.push((arguments[i__4790__auto___38210]));

var G__38212 = (i__4790__auto___38210 + (1));
i__4790__auto___38210 = G__38212;
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
sablono.core.mail_to37991 = (function sablono$core$mail_to37991(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38214 = arguments.length;
var i__4790__auto___38215 = (0);
while(true){
if((i__4790__auto___38215 < len__4789__auto___38214)){
args__4795__auto__.push((arguments[i__4790__auto___38215]));

var G__38217 = (i__4790__auto___38215 + (1));
i__4790__auto___38215 = G__38217;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37991.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37991.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37996){
var vec__37997 = p__37996;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37997,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37991.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37991.cljs$lang$applyTo = (function (seq37993){
var G__37994 = cljs.core.first(seq37993);
var seq37993__$1 = cljs.core.next(seq37993);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37994,seq37993__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37991);
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

var G__38221 = (i__38005 + (1));
i__38005 = G__38221;
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
sablono.core.ordered_list38010 = (function sablono$core$ordered_list38010(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38010_$_iter__38012(s__38013){
return (new cljs.core.LazySeq(null,(function (){
var s__38013__$1 = s__38013;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38013__$1);
if(temp__5735__auto__){
var s__38013__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38013__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38013__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38015 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38014 = (0);
while(true){
if((i__38014 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38014);
cljs.core.chunk_append(b__38015,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38224 = (i__38014 + (1));
i__38014 = G__38224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38015),sablono$core$ordered_list38010_$_iter__38012(cljs.core.chunk_rest(s__38013__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38015),null);
}
} else {
var x = cljs.core.first(s__38013__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38010_$_iter__38012(cljs.core.rest(s__38013__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38010);
/**
 * Create an image element.
 */
sablono.core.image38019 = (function sablono$core$image38019(var_args){
var G__38021 = arguments.length;
switch (G__38021) {
case 1:
return sablono.core.image38019.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38019.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38019.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38019.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38019.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38019);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38025_SHARP_,p2__38026_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38025_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38026_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38028_SHARP_,p2__38029_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38028_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38029_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38033 = arguments.length;
switch (G__38033) {
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
sablono.core.color_field38036 = (function sablono$core$color_field38036(var_args){
var G__38038 = arguments.length;
switch (G__38038) {
case 1:
return sablono.core.color_field38036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38036.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37944__auto__);
}));

(sablono.core.color_field38036.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.color_field38036.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38036);

/**
 * Creates a date input field.
 */
sablono.core.date_field38042 = (function sablono$core$date_field38042(var_args){
var G__38045 = arguments.length;
switch (G__38045) {
case 1:
return sablono.core.date_field38042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38042.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37944__auto__);
}));

(sablono.core.date_field38042.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.date_field38042.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38042);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38048 = (function sablono$core$datetime_field38048(var_args){
var G__38051 = arguments.length;
switch (G__38051) {
case 1:
return sablono.core.datetime_field38048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38048.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37944__auto__);
}));

(sablono.core.datetime_field38048.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.datetime_field38048.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38048);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38055 = (function sablono$core$datetime_local_field38055(var_args){
var G__38057 = arguments.length;
switch (G__38057) {
case 1:
return sablono.core.datetime_local_field38055.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38055.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38055.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37944__auto__);
}));

(sablono.core.datetime_local_field38055.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.datetime_local_field38055.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38055);

/**
 * Creates a email input field.
 */
sablono.core.email_field38059 = (function sablono$core$email_field38059(var_args){
var G__38062 = arguments.length;
switch (G__38062) {
case 1:
return sablono.core.email_field38059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38059.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37944__auto__);
}));

(sablono.core.email_field38059.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.email_field38059.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38059);

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

(sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37944__auto__);
}));

(sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37944__auto__,value__37945__auto__);
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

(sablono.core.hidden_field38066.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37944__auto__);
}));

(sablono.core.hidden_field38066.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37944__auto__,value__37945__auto__);
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

(sablono.core.month_field38069.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37944__auto__);
}));

(sablono.core.month_field38069.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37944__auto__,value__37945__auto__);
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

(sablono.core.number_field38072.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37944__auto__);
}));

(sablono.core.number_field38072.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37944__auto__,value__37945__auto__);
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

(sablono.core.password_field38075.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37944__auto__);
}));

(sablono.core.password_field38075.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37944__auto__,value__37945__auto__);
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

(sablono.core.range_field38078.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37944__auto__);
}));

(sablono.core.range_field38078.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37944__auto__,value__37945__auto__);
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

(sablono.core.search_field38081.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37944__auto__);
}));

(sablono.core.search_field38081.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.search_field38081.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38081);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38085 = (function sablono$core$tel_field38085(var_args){
var G__38087 = arguments.length;
switch (G__38087) {
case 1:
return sablono.core.tel_field38085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38085.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37944__auto__);
}));

(sablono.core.tel_field38085.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.tel_field38085.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38085);

/**
 * Creates a text input field.
 */
sablono.core.text_field38091 = (function sablono$core$text_field38091(var_args){
var G__38094 = arguments.length;
switch (G__38094) {
case 1:
return sablono.core.text_field38091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38091.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37944__auto__);
}));

(sablono.core.text_field38091.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.text_field38091.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38091);

/**
 * Creates a time input field.
 */
sablono.core.time_field38098 = (function sablono$core$time_field38098(var_args){
var G__38102 = arguments.length;
switch (G__38102) {
case 1:
return sablono.core.time_field38098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38098.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37944__auto__);
}));

(sablono.core.time_field38098.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.time_field38098.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38098);

/**
 * Creates a url input field.
 */
sablono.core.url_field38105 = (function sablono$core$url_field38105(var_args){
var G__38107 = arguments.length;
switch (G__38107) {
case 1:
return sablono.core.url_field38105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38105.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37944__auto__);
}));

(sablono.core.url_field38105.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.url_field38105.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38105);

/**
 * Creates a week input field.
 */
sablono.core.week_field38110 = (function sablono$core$week_field38110(var_args){
var G__38113 = arguments.length;
switch (G__38113) {
case 1:
return sablono.core.week_field38110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38110.cljs$core$IFn$_invoke$arity$1 = (function (name__37944__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37944__auto__);
}));

(sablono.core.week_field38110.cljs$core$IFn$_invoke$arity$2 = (function (name__37944__auto__,value__37945__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37944__auto__,value__37945__auto__);
}));

(sablono.core.week_field38110.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38110);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38115 = (function sablono$core$check_box38115(var_args){
var G__38117 = arguments.length;
switch (G__38117) {
case 1:
return sablono.core.check_box38115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38115.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38115.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38115.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38115.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38115.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38115);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38124 = (function sablono$core$radio_button38124(var_args){
var G__38126 = arguments.length;
switch (G__38126) {
case 1:
return sablono.core.radio_button38124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38124.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38124.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38124.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38124.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38124.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38124);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38130 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38130);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38132 = (function sablono$core$select_options38132(coll){
var iter__4582__auto__ = (function sablono$core$select_options38132_$_iter__38133(s__38134){
return (new cljs.core.LazySeq(null,(function (){
var s__38134__$1 = s__38134;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38134__$1);
if(temp__5735__auto__){
var s__38134__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38134__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38134__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38136 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38135 = (0);
while(true){
if((i__38135 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38135);
cljs.core.chunk_append(b__38136,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38140 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38132.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38132.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38132.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38266 = (i__38135 + (1));
i__38135 = G__38266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38136),sablono$core$select_options38132_$_iter__38133(cljs.core.chunk_rest(s__38134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38136),null);
}
} else {
var x = cljs.core.first(s__38134__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38147 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38147,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38147,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38147,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38132.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38132.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38132.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38132_$_iter__38133(cljs.core.rest(s__38134__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38132);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38153 = (function sablono$core$drop_down38153(var_args){
var G__38156 = arguments.length;
switch (G__38156) {
case 2:
return sablono.core.drop_down38153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38153.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38153.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38153.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38153.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38153.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38153);
/**
 * Creates a text area element.
 */
sablono.core.text_area38159 = (function sablono$core$text_area38159(var_args){
var G__38161 = arguments.length;
switch (G__38161) {
case 1:
return sablono.core.text_area38159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38159.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38159.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38159.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38159);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38165 = (function sablono$core$label38165(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38165);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38166 = (function sablono$core$submit_button38166(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38166);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38168 = (function sablono$core$reset_button38168(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38168);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38170 = (function sablono$core$form_to38170(var_args){
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
return sablono.core.form_to38170.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38170.cljs$core$IFn$_invoke$arity$variadic = (function (p__38176,body){
var vec__38177 = p__38176;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38177,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38177,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38182 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38183 = "_method";
var G__38184 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38182,G__38183,G__38184) : sablono.core.hidden_field.call(null,G__38182,G__38183,G__38184));
})()], null)),body));
}));

(sablono.core.form_to38170.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38170.cljs$lang$applyTo = (function (seq38171){
var G__38172 = cljs.core.first(seq38171);
var seq38171__$1 = cljs.core.next(seq38171);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38172,seq38171__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38170);

//# sourceMappingURL=sablono.core.js.map
