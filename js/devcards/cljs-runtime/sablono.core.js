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
var G__38129__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37916 = cljs.core.seq(vec__37915);
var first__37917 = cljs.core.first(seq__37916);
var seq__37916__$1 = cljs.core.next(seq__37916);
var tag = first__37917;
var body = seq__37916__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38130__i = 0, G__38130__a = new Array(arguments.length -  0);
while (G__38130__i < G__38130__a.length) {G__38130__a[G__38130__i] = arguments[G__38130__i + 0]; ++G__38130__i;}
  args = new cljs.core.IndexedSeq(G__38130__a,0,null);
} 
return G__38129__delegate.call(this,args);};
G__38129.cljs$lang$maxFixedArity = 0;
G__38129.cljs$lang$applyTo = (function (arglist__38131){
var args = cljs.core.seq(arglist__38131);
return G__38129__delegate(args);
});
G__38129.cljs$core$IFn$_invoke$arity$variadic = G__38129__delegate;
return G__38129;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37919(s__37920){
return (new cljs.core.LazySeq(null,(function (){
var s__37920__$1 = s__37920;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37920__$1);
if(temp__5735__auto__){
var s__37920__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37920__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37920__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37922 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37921 = (0);
while(true){
if((i__37921 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37921);
cljs.core.chunk_append(b__37922,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38132 = (i__37921 + (1));
i__37921 = G__38132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37922),sablono$core$update_arglists_$_iter__37919(cljs.core.chunk_rest(s__37920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37922),null);
}
} else {
var args = cljs.core.first(s__37920__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37919(cljs.core.rest(s__37920__$2)));
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
var len__4789__auto___38133 = arguments.length;
var i__4790__auto___38134 = (0);
while(true){
if((i__4790__auto___38134 < len__4789__auto___38133)){
args__4795__auto__.push((arguments[i__4790__auto___38134]));

var G__38135 = (i__4790__auto___38134 + (1));
i__4790__auto___38134 = G__38135;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37924(s__37925){
return (new cljs.core.LazySeq(null,(function (){
var s__37925__$1 = s__37925;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37925__$1);
if(temp__5735__auto__){
var s__37925__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37925__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37925__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37927 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37926 = (0);
while(true){
if((i__37926 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37926);
cljs.core.chunk_append(b__37927,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38137 = (i__37926 + (1));
i__37926 = G__38137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37927),sablono$core$iter__37924(cljs.core.chunk_rest(s__37925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37927),null);
}
} else {
var style = cljs.core.first(s__37925__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37924(cljs.core.rest(s__37925__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37923){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37923));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37928 = goog.dom.getDocument().body;
var G__37929 = (function (){var G__37931 = "script";
var G__37932 = ({"src": src});
return goog.dom.createDom(G__37931,G__37932);
})();
return goog.dom.appendChild(G__37928,G__37929);
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
sablono.core.link_to37934 = (function sablono$core$link_to37934(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38141 = arguments.length;
var i__4790__auto___38142 = (0);
while(true){
if((i__4790__auto___38142 < len__4789__auto___38141)){
args__4795__auto__.push((arguments[i__4790__auto___38142]));

var G__38143 = (i__4790__auto___38142 + (1));
i__4790__auto___38142 = G__38143;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37934.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37934.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37934.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37934.cljs$lang$applyTo = (function (seq37936){
var G__37937 = cljs.core.first(seq37936);
var seq37936__$1 = cljs.core.next(seq37936);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37937,seq37936__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37934);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37942 = (function sablono$core$mail_to37942(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38148 = arguments.length;
var i__4790__auto___38149 = (0);
while(true){
if((i__4790__auto___38149 < len__4789__auto___38148)){
args__4795__auto__.push((arguments[i__4790__auto___38149]));

var G__38150 = (i__4790__auto___38149 + (1));
i__4790__auto___38149 = G__38150;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37942.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37942.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37947){
var vec__37948 = p__37947;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37948,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37942.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37942.cljs$lang$applyTo = (function (seq37943){
var G__37944 = cljs.core.first(seq37943);
var seq37943__$1 = cljs.core.next(seq37943);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37944,seq37943__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37942);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37955 = (function sablono$core$unordered_list37955(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list37955_$_iter__37956(s__37957){
return (new cljs.core.LazySeq(null,(function (){
var s__37957__$1 = s__37957;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37957__$1);
if(temp__5735__auto__){
var s__37957__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37957__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37957__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37959 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37958 = (0);
while(true){
if((i__37958 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37958);
cljs.core.chunk_append(b__37959,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38155 = (i__37958 + (1));
i__37958 = G__38155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37959),sablono$core$unordered_list37955_$_iter__37956(cljs.core.chunk_rest(s__37957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37959),null);
}
} else {
var x = cljs.core.first(s__37957__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37955_$_iter__37956(cljs.core.rest(s__37957__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list37955);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37963 = (function sablono$core$ordered_list37963(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list37963_$_iter__37964(s__37965){
return (new cljs.core.LazySeq(null,(function (){
var s__37965__$1 = s__37965;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37965__$1);
if(temp__5735__auto__){
var s__37965__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37965__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37965__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37967 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37966 = (0);
while(true){
if((i__37966 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37966);
cljs.core.chunk_append(b__37967,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38159 = (i__37966 + (1));
i__37966 = G__38159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37967),sablono$core$ordered_list37963_$_iter__37964(cljs.core.chunk_rest(s__37965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37967),null);
}
} else {
var x = cljs.core.first(s__37965__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37963_$_iter__37964(cljs.core.rest(s__37965__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list37963);
/**
 * Create an image element.
 */
sablono.core.image37971 = (function sablono$core$image37971(var_args){
var G__37973 = arguments.length;
switch (G__37973) {
case 1:
return sablono.core.image37971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image37971.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image37971.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image37971.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image37971);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37977_SHARP_,p2__37978_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37977_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37978_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37979_SHARP_,p2__37980_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37979_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37980_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37984 = arguments.length;
switch (G__37984) {
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
sablono.core.color_field37986 = (function sablono$core$color_field37986(var_args){
var G__37989 = arguments.length;
switch (G__37989) {
case 1:
return sablono.core.color_field37986.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37986.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field37986.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37906__auto__);
}));

(sablono.core.color_field37986.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.color_field37986.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field37986);

/**
 * Creates a date input field.
 */
sablono.core.date_field37993 = (function sablono$core$date_field37993(var_args){
var G__37995 = arguments.length;
switch (G__37995) {
case 1:
return sablono.core.date_field37993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field37993.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37906__auto__);
}));

(sablono.core.date_field37993.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.date_field37993.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field37993);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37998 = (function sablono$core$datetime_field37998(var_args){
var G__38000 = arguments.length;
switch (G__38000) {
case 1:
return sablono.core.datetime_field37998.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37998.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field37998.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37906__auto__);
}));

(sablono.core.datetime_field37998.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.datetime_field37998.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field37998);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38002 = (function sablono$core$datetime_local_field38002(var_args){
var G__38004 = arguments.length;
switch (G__38004) {
case 1:
return sablono.core.datetime_local_field38002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38002.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37906__auto__);
}));

(sablono.core.datetime_local_field38002.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.datetime_local_field38002.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38002);

/**
 * Creates a email input field.
 */
sablono.core.email_field38006 = (function sablono$core$email_field38006(var_args){
var G__38008 = arguments.length;
switch (G__38008) {
case 1:
return sablono.core.email_field38006.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38006.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38006.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37906__auto__);
}));

(sablono.core.email_field38006.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.email_field38006.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38006);

/**
 * Creates a file input field.
 */
sablono.core.file_field38010 = (function sablono$core$file_field38010(var_args){
var G__38012 = arguments.length;
switch (G__38012) {
case 1:
return sablono.core.file_field38010.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38010.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38010.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37906__auto__);
}));

(sablono.core.file_field38010.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.file_field38010.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38010);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38015 = (function sablono$core$hidden_field38015(var_args){
var G__38018 = arguments.length;
switch (G__38018) {
case 1:
return sablono.core.hidden_field38015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38015.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37906__auto__);
}));

(sablono.core.hidden_field38015.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.hidden_field38015.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38015);

/**
 * Creates a month input field.
 */
sablono.core.month_field38022 = (function sablono$core$month_field38022(var_args){
var G__38025 = arguments.length;
switch (G__38025) {
case 1:
return sablono.core.month_field38022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38022.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37906__auto__);
}));

(sablono.core.month_field38022.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.month_field38022.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38022);

/**
 * Creates a number input field.
 */
sablono.core.number_field38027 = (function sablono$core$number_field38027(var_args){
var G__38031 = arguments.length;
switch (G__38031) {
case 1:
return sablono.core.number_field38027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38027.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37906__auto__);
}));

(sablono.core.number_field38027.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.number_field38027.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38027);

/**
 * Creates a password input field.
 */
sablono.core.password_field38033 = (function sablono$core$password_field38033(var_args){
var G__38036 = arguments.length;
switch (G__38036) {
case 1:
return sablono.core.password_field38033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38033.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37906__auto__);
}));

(sablono.core.password_field38033.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.password_field38033.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38033);

/**
 * Creates a range input field.
 */
sablono.core.range_field38038 = (function sablono$core$range_field38038(var_args){
var G__38040 = arguments.length;
switch (G__38040) {
case 1:
return sablono.core.range_field38038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38038.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37906__auto__);
}));

(sablono.core.range_field38038.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.range_field38038.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38038);

/**
 * Creates a search input field.
 */
sablono.core.search_field38042 = (function sablono$core$search_field38042(var_args){
var G__38044 = arguments.length;
switch (G__38044) {
case 1:
return sablono.core.search_field38042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38042.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37906__auto__);
}));

(sablono.core.search_field38042.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.search_field38042.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38042);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38047 = (function sablono$core$tel_field38047(var_args){
var G__38050 = arguments.length;
switch (G__38050) {
case 1:
return sablono.core.tel_field38047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38047.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37906__auto__);
}));

(sablono.core.tel_field38047.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.tel_field38047.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38047);

/**
 * Creates a text input field.
 */
sablono.core.text_field38052 = (function sablono$core$text_field38052(var_args){
var G__38055 = arguments.length;
switch (G__38055) {
case 1:
return sablono.core.text_field38052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38052.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37906__auto__);
}));

(sablono.core.text_field38052.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.text_field38052.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38052);

/**
 * Creates a time input field.
 */
sablono.core.time_field38057 = (function sablono$core$time_field38057(var_args){
var G__38061 = arguments.length;
switch (G__38061) {
case 1:
return sablono.core.time_field38057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38057.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37906__auto__);
}));

(sablono.core.time_field38057.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.time_field38057.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38057);

/**
 * Creates a url input field.
 */
sablono.core.url_field38063 = (function sablono$core$url_field38063(var_args){
var G__38066 = arguments.length;
switch (G__38066) {
case 1:
return sablono.core.url_field38063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38063.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37906__auto__);
}));

(sablono.core.url_field38063.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.url_field38063.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38063);

/**
 * Creates a week input field.
 */
sablono.core.week_field38069 = (function sablono$core$week_field38069(var_args){
var G__38072 = arguments.length;
switch (G__38072) {
case 1:
return sablono.core.week_field38069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38069.cljs$core$IFn$_invoke$arity$1 = (function (name__37906__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37906__auto__);
}));

(sablono.core.week_field38069.cljs$core$IFn$_invoke$arity$2 = (function (name__37906__auto__,value__37907__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37906__auto__,value__37907__auto__);
}));

(sablono.core.week_field38069.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38069);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38075 = (function sablono$core$check_box38075(var_args){
var G__38078 = arguments.length;
switch (G__38078) {
case 1:
return sablono.core.check_box38075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38075.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38075.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38075.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38075.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38075.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38075);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38081 = (function sablono$core$radio_button38081(var_args){
var G__38083 = arguments.length;
switch (G__38083) {
case 1:
return sablono.core.radio_button38081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38081.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38081.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38081.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38081.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38081.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38081);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38088 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38088);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38090 = (function sablono$core$select_options38090(coll){
var iter__4582__auto__ = (function sablono$core$select_options38090_$_iter__38092(s__38093){
return (new cljs.core.LazySeq(null,(function (){
var s__38093__$1 = s__38093;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38093__$1);
if(temp__5735__auto__){
var s__38093__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38093__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38093__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38095 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38094 = (0);
while(true){
if((i__38094 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38094);
cljs.core.chunk_append(b__38095,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38098 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38098,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38098,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38098,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38090.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38090.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38090.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38232 = (i__38094 + (1));
i__38094 = G__38232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38095),sablono$core$select_options38090_$_iter__38092(cljs.core.chunk_rest(s__38093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38095),null);
}
} else {
var x = cljs.core.first(s__38093__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38104 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38090.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38090.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38090.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38090_$_iter__38092(cljs.core.rest(s__38093__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38090);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38108 = (function sablono$core$drop_down38108(var_args){
var G__38110 = arguments.length;
switch (G__38110) {
case 2:
return sablono.core.drop_down38108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38108.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38108.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38108.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38108.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38108.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38108);
/**
 * Creates a text area element.
 */
sablono.core.text_area38113 = (function sablono$core$text_area38113(var_args){
var G__38115 = arguments.length;
switch (G__38115) {
case 1:
return sablono.core.text_area38113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38113.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38113.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38113.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38113);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38116 = (function sablono$core$label38116(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38116);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38117 = (function sablono$core$submit_button38117(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38117);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38118 = (function sablono$core$reset_button38118(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38118);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38119 = (function sablono$core$form_to38119(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38248 = arguments.length;
var i__4790__auto___38249 = (0);
while(true){
if((i__4790__auto___38249 < len__4789__auto___38248)){
args__4795__auto__.push((arguments[i__4790__auto___38249]));

var G__38251 = (i__4790__auto___38249 + (1));
i__4790__auto___38249 = G__38251;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38119.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38119.cljs$core$IFn$_invoke$arity$variadic = (function (p__38122,body){
var vec__38123 = p__38122;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38123,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38123,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38126 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38127 = "_method";
var G__38128 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38126,G__38127,G__38128) : sablono.core.hidden_field.call(null,G__38126,G__38127,G__38128));
})()], null)),body));
}));

(sablono.core.form_to38119.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38119.cljs$lang$applyTo = (function (seq38120){
var G__38121 = cljs.core.first(seq38120);
var seq38120__$1 = cljs.core.next(seq38120);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38121,seq38120__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38119);

//# sourceMappingURL=sablono.core.js.map
