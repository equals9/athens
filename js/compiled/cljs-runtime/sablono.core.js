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
var G__50552__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__50366 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__50367 = cljs.core.seq(vec__50366);
var first__50368 = cljs.core.first(seq__50367);
var seq__50367__$1 = cljs.core.next(seq__50367);
var tag = first__50368;
var body = seq__50367__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__50552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50553__i = 0, G__50553__a = new Array(arguments.length -  0);
while (G__50553__i < G__50553__a.length) {G__50553__a[G__50553__i] = arguments[G__50553__i + 0]; ++G__50553__i;}
  args = new cljs.core.IndexedSeq(G__50553__a,0,null);
} 
return G__50552__delegate.call(this,args);};
G__50552.cljs$lang$maxFixedArity = 0;
G__50552.cljs$lang$applyTo = (function (arglist__50554){
var args = cljs.core.seq(arglist__50554);
return G__50552__delegate(args);
});
G__50552.cljs$core$IFn$_invoke$arity$variadic = G__50552__delegate;
return G__50552;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__50373(s__50374){
return (new cljs.core.LazySeq(null,(function (){
var s__50374__$1 = s__50374;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50374__$1);
if(temp__5735__auto__){
var s__50374__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50374__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50374__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50376 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50375 = (0);
while(true){
if((i__50375 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50375);
cljs.core.chunk_append(b__50376,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__50555 = (i__50375 + (1));
i__50375 = G__50555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50376),sablono$core$update_arglists_$_iter__50373(cljs.core.chunk_rest(s__50374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50376),null);
}
} else {
var args = cljs.core.first(s__50374__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__50373(cljs.core.rest(s__50374__$2)));
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
var len__4789__auto___50556 = arguments.length;
var i__4790__auto___50557 = (0);
while(true){
if((i__4790__auto___50557 < len__4789__auto___50556)){
args__4795__auto__.push((arguments[i__4790__auto___50557]));

var G__50558 = (i__4790__auto___50557 + (1));
i__4790__auto___50557 = G__50558;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__50384(s__50385){
return (new cljs.core.LazySeq(null,(function (){
var s__50385__$1 = s__50385;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50385__$1);
if(temp__5735__auto__){
var s__50385__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50385__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50385__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50387 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50386 = (0);
while(true){
if((i__50386 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50386);
cljs.core.chunk_append(b__50387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__50559 = (i__50386 + (1));
i__50386 = G__50559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50387),sablono$core$iter__50384(cljs.core.chunk_rest(s__50385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50387),null);
}
} else {
var style = cljs.core.first(s__50385__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__50384(cljs.core.rest(s__50385__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq50381){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50381));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__50406 = goog.dom.getDocument().body;
var G__50407 = (function (){var G__50408 = "script";
var G__50409 = ({"src": src});
return goog.dom.createDom(G__50408,G__50409);
})();
return goog.dom.appendChild(G__50406,G__50407);
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
sablono.core.link_to50411 = (function sablono$core$link_to50411(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50560 = arguments.length;
var i__4790__auto___50561 = (0);
while(true){
if((i__4790__auto___50561 < len__4789__auto___50560)){
args__4795__auto__.push((arguments[i__4790__auto___50561]));

var G__50562 = (i__4790__auto___50561 + (1));
i__4790__auto___50561 = G__50562;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to50411.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to50411.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to50411.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to50411.cljs$lang$applyTo = (function (seq50412){
var G__50413 = cljs.core.first(seq50412);
var seq50412__$1 = cljs.core.next(seq50412);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50413,seq50412__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to50411);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to50421 = (function sablono$core$mail_to50421(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50563 = arguments.length;
var i__4790__auto___50564 = (0);
while(true){
if((i__4790__auto___50564 < len__4789__auto___50563)){
args__4795__auto__.push((arguments[i__4790__auto___50564]));

var G__50565 = (i__4790__auto___50564 + (1));
i__4790__auto___50564 = G__50565;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to50421.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to50421.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__50429){
var vec__50430 = p__50429;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50430,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to50421.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to50421.cljs$lang$applyTo = (function (seq50422){
var G__50423 = cljs.core.first(seq50422);
var seq50422__$1 = cljs.core.next(seq50422);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50423,seq50422__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to50421);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list50433 = (function sablono$core$unordered_list50433(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list50433_$_iter__50434(s__50435){
return (new cljs.core.LazySeq(null,(function (){
var s__50435__$1 = s__50435;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50435__$1);
if(temp__5735__auto__){
var s__50435__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50435__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50435__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50437 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50436 = (0);
while(true){
if((i__50436 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50436);
cljs.core.chunk_append(b__50437,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__50568 = (i__50436 + (1));
i__50436 = G__50568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50437),sablono$core$unordered_list50433_$_iter__50434(cljs.core.chunk_rest(s__50435__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50437),null);
}
} else {
var x = cljs.core.first(s__50435__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list50433_$_iter__50434(cljs.core.rest(s__50435__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list50433);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list50440 = (function sablono$core$ordered_list50440(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list50440_$_iter__50441(s__50442){
return (new cljs.core.LazySeq(null,(function (){
var s__50442__$1 = s__50442;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50442__$1);
if(temp__5735__auto__){
var s__50442__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50442__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50442__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50444 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50443 = (0);
while(true){
if((i__50443 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50443);
cljs.core.chunk_append(b__50444,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__50570 = (i__50443 + (1));
i__50443 = G__50570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50444),sablono$core$ordered_list50440_$_iter__50441(cljs.core.chunk_rest(s__50442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50444),null);
}
} else {
var x = cljs.core.first(s__50442__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list50440_$_iter__50441(cljs.core.rest(s__50442__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list50440);
/**
 * Create an image element.
 */
sablono.core.image50449 = (function sablono$core$image50449(var_args){
var G__50453 = arguments.length;
switch (G__50453) {
case 1:
return sablono.core.image50449.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image50449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image50449.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image50449.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image50449.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image50449);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50458_SHARP_,p2__50459_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50458_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50459_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50460_SHARP_,p2__50461_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50460_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50461_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__50463 = arguments.length;
switch (G__50463) {
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
sablono.core.color_field50464 = (function sablono$core$color_field50464(var_args){
var G__50466 = arguments.length;
switch (G__50466) {
case 1:
return sablono.core.color_field50464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field50464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field50464.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50356__auto__);
}));

(sablono.core.color_field50464.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.color_field50464.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field50464);

/**
 * Creates a date input field.
 */
sablono.core.date_field50467 = (function sablono$core$date_field50467(var_args){
var G__50469 = arguments.length;
switch (G__50469) {
case 1:
return sablono.core.date_field50467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field50467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field50467.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50356__auto__);
}));

(sablono.core.date_field50467.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.date_field50467.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field50467);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field50470 = (function sablono$core$datetime_field50470(var_args){
var G__50472 = arguments.length;
switch (G__50472) {
case 1:
return sablono.core.datetime_field50470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field50470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field50470.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50356__auto__);
}));

(sablono.core.datetime_field50470.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.datetime_field50470.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field50470);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field50473 = (function sablono$core$datetime_local_field50473(var_args){
var G__50475 = arguments.length;
switch (G__50475) {
case 1:
return sablono.core.datetime_local_field50473.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field50473.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field50473.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50356__auto__);
}));

(sablono.core.datetime_local_field50473.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.datetime_local_field50473.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field50473);

/**
 * Creates a email input field.
 */
sablono.core.email_field50476 = (function sablono$core$email_field50476(var_args){
var G__50478 = arguments.length;
switch (G__50478) {
case 1:
return sablono.core.email_field50476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field50476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field50476.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50356__auto__);
}));

(sablono.core.email_field50476.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.email_field50476.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field50476);

/**
 * Creates a file input field.
 */
sablono.core.file_field50479 = (function sablono$core$file_field50479(var_args){
var G__50481 = arguments.length;
switch (G__50481) {
case 1:
return sablono.core.file_field50479.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field50479.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field50479.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50356__auto__);
}));

(sablono.core.file_field50479.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.file_field50479.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field50479);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field50482 = (function sablono$core$hidden_field50482(var_args){
var G__50484 = arguments.length;
switch (G__50484) {
case 1:
return sablono.core.hidden_field50482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field50482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field50482.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50356__auto__);
}));

(sablono.core.hidden_field50482.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.hidden_field50482.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field50482);

/**
 * Creates a month input field.
 */
sablono.core.month_field50485 = (function sablono$core$month_field50485(var_args){
var G__50487 = arguments.length;
switch (G__50487) {
case 1:
return sablono.core.month_field50485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field50485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field50485.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50356__auto__);
}));

(sablono.core.month_field50485.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.month_field50485.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field50485);

/**
 * Creates a number input field.
 */
sablono.core.number_field50488 = (function sablono$core$number_field50488(var_args){
var G__50490 = arguments.length;
switch (G__50490) {
case 1:
return sablono.core.number_field50488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field50488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field50488.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50356__auto__);
}));

(sablono.core.number_field50488.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.number_field50488.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field50488);

/**
 * Creates a password input field.
 */
sablono.core.password_field50491 = (function sablono$core$password_field50491(var_args){
var G__50493 = arguments.length;
switch (G__50493) {
case 1:
return sablono.core.password_field50491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field50491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field50491.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50356__auto__);
}));

(sablono.core.password_field50491.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.password_field50491.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field50491);

/**
 * Creates a range input field.
 */
sablono.core.range_field50494 = (function sablono$core$range_field50494(var_args){
var G__50496 = arguments.length;
switch (G__50496) {
case 1:
return sablono.core.range_field50494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field50494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field50494.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50356__auto__);
}));

(sablono.core.range_field50494.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.range_field50494.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field50494);

/**
 * Creates a search input field.
 */
sablono.core.search_field50497 = (function sablono$core$search_field50497(var_args){
var G__50499 = arguments.length;
switch (G__50499) {
case 1:
return sablono.core.search_field50497.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field50497.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field50497.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50356__auto__);
}));

(sablono.core.search_field50497.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.search_field50497.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field50497);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field50500 = (function sablono$core$tel_field50500(var_args){
var G__50502 = arguments.length;
switch (G__50502) {
case 1:
return sablono.core.tel_field50500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field50500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field50500.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50356__auto__);
}));

(sablono.core.tel_field50500.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.tel_field50500.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field50500);

/**
 * Creates a text input field.
 */
sablono.core.text_field50503 = (function sablono$core$text_field50503(var_args){
var G__50505 = arguments.length;
switch (G__50505) {
case 1:
return sablono.core.text_field50503.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field50503.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field50503.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50356__auto__);
}));

(sablono.core.text_field50503.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.text_field50503.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field50503);

/**
 * Creates a time input field.
 */
sablono.core.time_field50506 = (function sablono$core$time_field50506(var_args){
var G__50508 = arguments.length;
switch (G__50508) {
case 1:
return sablono.core.time_field50506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field50506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field50506.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50356__auto__);
}));

(sablono.core.time_field50506.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.time_field50506.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field50506);

/**
 * Creates a url input field.
 */
sablono.core.url_field50509 = (function sablono$core$url_field50509(var_args){
var G__50511 = arguments.length;
switch (G__50511) {
case 1:
return sablono.core.url_field50509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field50509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field50509.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50356__auto__);
}));

(sablono.core.url_field50509.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.url_field50509.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field50509);

/**
 * Creates a week input field.
 */
sablono.core.week_field50512 = (function sablono$core$week_field50512(var_args){
var G__50514 = arguments.length;
switch (G__50514) {
case 1:
return sablono.core.week_field50512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field50512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field50512.cljs$core$IFn$_invoke$arity$1 = (function (name__50356__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50356__auto__);
}));

(sablono.core.week_field50512.cljs$core$IFn$_invoke$arity$2 = (function (name__50356__auto__,value__50357__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50356__auto__,value__50357__auto__);
}));

(sablono.core.week_field50512.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field50512);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box50515 = (function sablono$core$check_box50515(var_args){
var G__50517 = arguments.length;
switch (G__50517) {
case 1:
return sablono.core.check_box50515.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box50515.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box50515.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box50515.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box50515.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box50515.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box50515.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box50515);
/**
 * Creates a radio button.
 */
sablono.core.radio_button50518 = (function sablono$core$radio_button50518(var_args){
var G__50520 = arguments.length;
switch (G__50520) {
case 1:
return sablono.core.radio_button50518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button50518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button50518.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button50518.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button50518.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button50518.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button50518.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button50518);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__50521 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__50521);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options50522 = (function sablono$core$select_options50522(coll){
var iter__4582__auto__ = (function sablono$core$select_options50522_$_iter__50523(s__50524){
return (new cljs.core.LazySeq(null,(function (){
var s__50524__$1 = s__50524;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50524__$1);
if(temp__5735__auto__){
var s__50524__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50524__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50524__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50526 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50525 = (0);
while(true){
if((i__50525 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50525);
cljs.core.chunk_append(b__50526,((cljs.core.sequential_QMARK_(x))?(function (){var vec__50527 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options50522.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options50522.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options50522.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__50598 = (i__50525 + (1));
i__50525 = G__50598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50526),sablono$core$select_options50522_$_iter__50523(cljs.core.chunk_rest(s__50524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50526),null);
}
} else {
var x = cljs.core.first(s__50524__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__50530 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50530,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50530,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50530,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options50522.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options50522.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options50522.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options50522_$_iter__50523(cljs.core.rest(s__50524__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options50522);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down50533 = (function sablono$core$drop_down50533(var_args){
var G__50535 = arguments.length;
switch (G__50535) {
case 2:
return sablono.core.drop_down50533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down50533.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down50533.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down50533.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down50533.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down50533.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down50533);
/**
 * Creates a text area element.
 */
sablono.core.text_area50536 = (function sablono$core$text_area50536(var_args){
var G__50538 = arguments.length;
switch (G__50538) {
case 1:
return sablono.core.text_area50536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area50536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area50536.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area50536.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area50536.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area50536);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label50539 = (function sablono$core$label50539(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label50539);
/**
 * Creates a submit button.
 */
sablono.core.submit_button50540 = (function sablono$core$submit_button50540(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button50540);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button50541 = (function sablono$core$reset_button50541(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button50541);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to50542 = (function sablono$core$form_to50542(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50601 = arguments.length;
var i__4790__auto___50602 = (0);
while(true){
if((i__4790__auto___50602 < len__4789__auto___50601)){
args__4795__auto__.push((arguments[i__4790__auto___50602]));

var G__50605 = (i__4790__auto___50602 + (1));
i__4790__auto___50602 = G__50605;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to50542.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to50542.cljs$core$IFn$_invoke$arity$variadic = (function (p__50545,body){
var vec__50546 = p__50545;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50546,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50546,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__50549 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__50550 = "_method";
var G__50551 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__50549,G__50550,G__50551) : sablono.core.hidden_field.call(null,G__50549,G__50550,G__50551));
})()], null)),body));
}));

(sablono.core.form_to50542.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to50542.cljs$lang$applyTo = (function (seq50543){
var G__50544 = cljs.core.first(seq50543);
var seq50543__$1 = cljs.core.next(seq50543);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50544,seq50543__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to50542);

//# sourceMappingURL=sablono.core.js.map
