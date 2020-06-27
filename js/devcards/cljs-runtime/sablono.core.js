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
var G__38124__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37889 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37890 = cljs.core.seq(vec__37889);
var first__37891 = cljs.core.first(seq__37890);
var seq__37890__$1 = cljs.core.next(seq__37890);
var tag = first__37891;
var body = seq__37890__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38127__i = 0, G__38127__a = new Array(arguments.length -  0);
while (G__38127__i < G__38127__a.length) {G__38127__a[G__38127__i] = arguments[G__38127__i + 0]; ++G__38127__i;}
  args = new cljs.core.IndexedSeq(G__38127__a,0,null);
} 
return G__38124__delegate.call(this,args);};
G__38124.cljs$lang$maxFixedArity = 0;
G__38124.cljs$lang$applyTo = (function (arglist__38129){
var args = cljs.core.seq(arglist__38129);
return G__38124__delegate(args);
});
G__38124.cljs$core$IFn$_invoke$arity$variadic = G__38124__delegate;
return G__38124;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37894(s__37895){
return (new cljs.core.LazySeq(null,(function (){
var s__37895__$1 = s__37895;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37895__$1);
if(temp__5735__auto__){
var s__37895__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37895__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37895__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37897 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37896 = (0);
while(true){
if((i__37896 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37896);
cljs.core.chunk_append(b__37897,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38131 = (i__37896 + (1));
i__37896 = G__38131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37897),sablono$core$update_arglists_$_iter__37894(cljs.core.chunk_rest(s__37895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37897),null);
}
} else {
var args = cljs.core.first(s__37895__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37894(cljs.core.rest(s__37895__$2)));
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
var len__4789__auto___38134 = arguments.length;
var i__4790__auto___38135 = (0);
while(true){
if((i__4790__auto___38135 < len__4789__auto___38134)){
args__4795__auto__.push((arguments[i__4790__auto___38135]));

var G__38137 = (i__4790__auto___38135 + (1));
i__4790__auto___38135 = G__38137;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37907(s__37908){
return (new cljs.core.LazySeq(null,(function (){
var s__37908__$1 = s__37908;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37908__$1);
if(temp__5735__auto__){
var s__37908__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37908__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37908__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37910 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37909 = (0);
while(true){
if((i__37909 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37909);
cljs.core.chunk_append(b__37910,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38141 = (i__37909 + (1));
i__37909 = G__38141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37910),sablono$core$iter__37907(cljs.core.chunk_rest(s__37908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37910),null);
}
} else {
var style = cljs.core.first(s__37908__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37907(cljs.core.rest(s__37908__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37903){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37903));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37918 = goog.dom.getDocument().body;
var G__37919 = (function (){var G__37920 = "script";
var G__37921 = ({"src": src});
return goog.dom.createDom(G__37920,G__37921);
})();
return goog.dom.appendChild(G__37918,G__37919);
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
sablono.core.link_to37925 = (function sablono$core$link_to37925(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38144 = arguments.length;
var i__4790__auto___38145 = (0);
while(true){
if((i__4790__auto___38145 < len__4789__auto___38144)){
args__4795__auto__.push((arguments[i__4790__auto___38145]));

var G__38146 = (i__4790__auto___38145 + (1));
i__4790__auto___38145 = G__38146;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37925.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37925.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37925.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37925.cljs$lang$applyTo = (function (seq37927){
var G__37928 = cljs.core.first(seq37927);
var seq37927__$1 = cljs.core.next(seq37927);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37928,seq37927__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37925);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37933 = (function sablono$core$mail_to37933(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38147 = arguments.length;
var i__4790__auto___38148 = (0);
while(true){
if((i__4790__auto___38148 < len__4789__auto___38147)){
args__4795__auto__.push((arguments[i__4790__auto___38148]));

var G__38149 = (i__4790__auto___38148 + (1));
i__4790__auto___38148 = G__38149;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37933.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37933.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37937){
var vec__37938 = p__37937;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37938,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37933.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37933.cljs$lang$applyTo = (function (seq37934){
var G__37935 = cljs.core.first(seq37934);
var seq37934__$1 = cljs.core.next(seq37934);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37935,seq37934__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37933);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37944 = (function sablono$core$unordered_list37944(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list37944_$_iter__37946(s__37947){
return (new cljs.core.LazySeq(null,(function (){
var s__37947__$1 = s__37947;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37947__$1);
if(temp__5735__auto__){
var s__37947__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37947__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37947__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37949 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37948 = (0);
while(true){
if((i__37948 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37948);
cljs.core.chunk_append(b__37949,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38150 = (i__37948 + (1));
i__37948 = G__38150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37949),sablono$core$unordered_list37944_$_iter__37946(cljs.core.chunk_rest(s__37947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37949),null);
}
} else {
var x = cljs.core.first(s__37947__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37944_$_iter__37946(cljs.core.rest(s__37947__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list37944);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37952 = (function sablono$core$ordered_list37952(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list37952_$_iter__37953(s__37954){
return (new cljs.core.LazySeq(null,(function (){
var s__37954__$1 = s__37954;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37954__$1);
if(temp__5735__auto__){
var s__37954__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37954__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37954__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37956 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37955 = (0);
while(true){
if((i__37955 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37955);
cljs.core.chunk_append(b__37956,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38151 = (i__37955 + (1));
i__37955 = G__38151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37956),sablono$core$ordered_list37952_$_iter__37953(cljs.core.chunk_rest(s__37954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37956),null);
}
} else {
var x = cljs.core.first(s__37954__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37952_$_iter__37953(cljs.core.rest(s__37954__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list37952);
/**
 * Create an image element.
 */
sablono.core.image37957 = (function sablono$core$image37957(var_args){
var G__37959 = arguments.length;
switch (G__37959) {
case 1:
return sablono.core.image37957.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37957.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image37957.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image37957.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image37957.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image37957);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37960_SHARP_,p2__37961_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37960_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37961_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37963_SHARP_,p2__37964_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37963_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37964_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37966 = arguments.length;
switch (G__37966) {
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
sablono.core.color_field37968 = (function sablono$core$color_field37968(var_args){
var G__37970 = arguments.length;
switch (G__37970) {
case 1:
return sablono.core.color_field37968.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37968.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field37968.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37874__auto__);
}));

(sablono.core.color_field37968.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.color_field37968.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field37968);

/**
 * Creates a date input field.
 */
sablono.core.date_field37971 = (function sablono$core$date_field37971(var_args){
var G__37973 = arguments.length;
switch (G__37973) {
case 1:
return sablono.core.date_field37971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field37971.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37874__auto__);
}));

(sablono.core.date_field37971.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.date_field37971.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field37971);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37974 = (function sablono$core$datetime_field37974(var_args){
var G__37976 = arguments.length;
switch (G__37976) {
case 1:
return sablono.core.datetime_field37974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field37974.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37874__auto__);
}));

(sablono.core.datetime_field37974.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.datetime_field37974.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field37974);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37979 = (function sablono$core$datetime_local_field37979(var_args){
var G__37983 = arguments.length;
switch (G__37983) {
case 1:
return sablono.core.datetime_local_field37979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field37979.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37874__auto__);
}));

(sablono.core.datetime_local_field37979.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.datetime_local_field37979.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field37979);

/**
 * Creates a email input field.
 */
sablono.core.email_field37986 = (function sablono$core$email_field37986(var_args){
var G__37989 = arguments.length;
switch (G__37989) {
case 1:
return sablono.core.email_field37986.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37986.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field37986.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37874__auto__);
}));

(sablono.core.email_field37986.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.email_field37986.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field37986);

/**
 * Creates a file input field.
 */
sablono.core.file_field37994 = (function sablono$core$file_field37994(var_args){
var G__37998 = arguments.length;
switch (G__37998) {
case 1:
return sablono.core.file_field37994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field37994.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37874__auto__);
}));

(sablono.core.file_field37994.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.file_field37994.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field37994);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38001 = (function sablono$core$hidden_field38001(var_args){
var G__38004 = arguments.length;
switch (G__38004) {
case 1:
return sablono.core.hidden_field38001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38001.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37874__auto__);
}));

(sablono.core.hidden_field38001.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.hidden_field38001.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38001);

/**
 * Creates a month input field.
 */
sablono.core.month_field38006 = (function sablono$core$month_field38006(var_args){
var G__38008 = arguments.length;
switch (G__38008) {
case 1:
return sablono.core.month_field38006.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38006.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38006.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37874__auto__);
}));

(sablono.core.month_field38006.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.month_field38006.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38006);

/**
 * Creates a number input field.
 */
sablono.core.number_field38011 = (function sablono$core$number_field38011(var_args){
var G__38013 = arguments.length;
switch (G__38013) {
case 1:
return sablono.core.number_field38011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38011.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37874__auto__);
}));

(sablono.core.number_field38011.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.number_field38011.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38011);

/**
 * Creates a password input field.
 */
sablono.core.password_field38017 = (function sablono$core$password_field38017(var_args){
var G__38020 = arguments.length;
switch (G__38020) {
case 1:
return sablono.core.password_field38017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38017.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37874__auto__);
}));

(sablono.core.password_field38017.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.password_field38017.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38017);

/**
 * Creates a range input field.
 */
sablono.core.range_field38022 = (function sablono$core$range_field38022(var_args){
var G__38025 = arguments.length;
switch (G__38025) {
case 1:
return sablono.core.range_field38022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38022.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37874__auto__);
}));

(sablono.core.range_field38022.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.range_field38022.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38022);

/**
 * Creates a search input field.
 */
sablono.core.search_field38026 = (function sablono$core$search_field38026(var_args){
var G__38029 = arguments.length;
switch (G__38029) {
case 1:
return sablono.core.search_field38026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38026.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37874__auto__);
}));

(sablono.core.search_field38026.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.search_field38026.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38026);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38033 = (function sablono$core$tel_field38033(var_args){
var G__38035 = arguments.length;
switch (G__38035) {
case 1:
return sablono.core.tel_field38033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38033.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37874__auto__);
}));

(sablono.core.tel_field38033.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.tel_field38033.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38033);

/**
 * Creates a text input field.
 */
sablono.core.text_field38038 = (function sablono$core$text_field38038(var_args){
var G__38041 = arguments.length;
switch (G__38041) {
case 1:
return sablono.core.text_field38038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38038.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37874__auto__);
}));

(sablono.core.text_field38038.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.text_field38038.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38038);

/**
 * Creates a time input field.
 */
sablono.core.time_field38043 = (function sablono$core$time_field38043(var_args){
var G__38045 = arguments.length;
switch (G__38045) {
case 1:
return sablono.core.time_field38043.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38043.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38043.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37874__auto__);
}));

(sablono.core.time_field38043.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.time_field38043.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38043);

/**
 * Creates a url input field.
 */
sablono.core.url_field38047 = (function sablono$core$url_field38047(var_args){
var G__38049 = arguments.length;
switch (G__38049) {
case 1:
return sablono.core.url_field38047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38047.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37874__auto__);
}));

(sablono.core.url_field38047.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.url_field38047.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38047);

/**
 * Creates a week input field.
 */
sablono.core.week_field38052 = (function sablono$core$week_field38052(var_args){
var G__38055 = arguments.length;
switch (G__38055) {
case 1:
return sablono.core.week_field38052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38052.cljs$core$IFn$_invoke$arity$1 = (function (name__37874__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37874__auto__);
}));

(sablono.core.week_field38052.cljs$core$IFn$_invoke$arity$2 = (function (name__37874__auto__,value__37875__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37874__auto__,value__37875__auto__);
}));

(sablono.core.week_field38052.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38052);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38060 = (function sablono$core$check_box38060(var_args){
var G__38063 = arguments.length;
switch (G__38063) {
case 1:
return sablono.core.check_box38060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38060.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38060.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38060.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38060.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38060.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38060);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38067 = (function sablono$core$radio_button38067(var_args){
var G__38070 = arguments.length;
switch (G__38070) {
case 1:
return sablono.core.radio_button38067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38067.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38067.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38067.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38067.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38067.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38067);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38074 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38074);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38076 = (function sablono$core$select_options38076(coll){
var iter__4582__auto__ = (function sablono$core$select_options38076_$_iter__38077(s__38078){
return (new cljs.core.LazySeq(null,(function (){
var s__38078__$1 = s__38078;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38078__$1);
if(temp__5735__auto__){
var s__38078__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38078__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38078__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38080 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38079 = (0);
while(true){
if((i__38079 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38079);
cljs.core.chunk_append(b__38080,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38083 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38076.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38076.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38076.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38215 = (i__38079 + (1));
i__38079 = G__38215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38080),sablono$core$select_options38076_$_iter__38077(cljs.core.chunk_rest(s__38078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38080),null);
}
} else {
var x = cljs.core.first(s__38078__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38087 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38087,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38087,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38087,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38076.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38076.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38076.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38076_$_iter__38077(cljs.core.rest(s__38078__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38076);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38091 = (function sablono$core$drop_down38091(var_args){
var G__38095 = arguments.length;
switch (G__38095) {
case 2:
return sablono.core.drop_down38091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38091.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38091.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38091.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38091.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38091.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38091);
/**
 * Creates a text area element.
 */
sablono.core.text_area38098 = (function sablono$core$text_area38098(var_args){
var G__38100 = arguments.length;
switch (G__38100) {
case 1:
return sablono.core.text_area38098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38098.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38098.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38098.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38098);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38104 = (function sablono$core$label38104(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38104);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38107 = (function sablono$core$submit_button38107(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38107);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38108 = (function sablono$core$reset_button38108(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38108);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38110 = (function sablono$core$form_to38110(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38227 = arguments.length;
var i__4790__auto___38228 = (0);
while(true){
if((i__4790__auto___38228 < len__4789__auto___38227)){
args__4795__auto__.push((arguments[i__4790__auto___38228]));

var G__38230 = (i__4790__auto___38228 + (1));
i__4790__auto___38228 = G__38230;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38110.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38110.cljs$core$IFn$_invoke$arity$variadic = (function (p__38115,body){
var vec__38116 = p__38115;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38119 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38120 = "_method";
var G__38121 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38119,G__38120,G__38121) : sablono.core.hidden_field.call(null,G__38119,G__38120,G__38121));
})()], null)),body));
}));

(sablono.core.form_to38110.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38110.cljs$lang$applyTo = (function (seq38111){
var G__38112 = cljs.core.first(seq38111);
var seq38111__$1 = cljs.core.next(seq38111);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38112,seq38111__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38110);

//# sourceMappingURL=sablono.core.js.map
