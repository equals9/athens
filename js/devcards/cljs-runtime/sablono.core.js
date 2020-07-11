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
var G__41730__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41544 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41545 = cljs.core.seq(vec__41544);
var first__41546 = cljs.core.first(seq__41545);
var seq__41545__$1 = cljs.core.next(seq__41545);
var tag = first__41546;
var body = seq__41545__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41731__i = 0, G__41731__a = new Array(arguments.length -  0);
while (G__41731__i < G__41731__a.length) {G__41731__a[G__41731__i] = arguments[G__41731__i + 0]; ++G__41731__i;}
  args = new cljs.core.IndexedSeq(G__41731__a,0,null);
} 
return G__41730__delegate.call(this,args);};
G__41730.cljs$lang$maxFixedArity = 0;
G__41730.cljs$lang$applyTo = (function (arglist__41732){
var args = cljs.core.seq(arglist__41732);
return G__41730__delegate(args);
});
G__41730.cljs$core$IFn$_invoke$arity$variadic = G__41730__delegate;
return G__41730;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__41551(s__41552){
return (new cljs.core.LazySeq(null,(function (){
var s__41552__$1 = s__41552;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41552__$1);
if(temp__5735__auto__){
var s__41552__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41552__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41552__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41554 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41553 = (0);
while(true){
if((i__41553 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41553);
cljs.core.chunk_append(b__41554,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41733 = (i__41553 + (1));
i__41553 = G__41733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41554),sablono$core$update_arglists_$_iter__41551(cljs.core.chunk_rest(s__41552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41554),null);
}
} else {
var args = cljs.core.first(s__41552__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41551(cljs.core.rest(s__41552__$2)));
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
var len__4789__auto___41734 = arguments.length;
var i__4790__auto___41735 = (0);
while(true){
if((i__4790__auto___41735 < len__4789__auto___41734)){
args__4795__auto__.push((arguments[i__4790__auto___41735]));

var G__41736 = (i__4790__auto___41735 + (1));
i__4790__auto___41735 = G__41736;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__41574(s__41575){
return (new cljs.core.LazySeq(null,(function (){
var s__41575__$1 = s__41575;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41575__$1);
if(temp__5735__auto__){
var s__41575__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41575__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41575__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41577 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41576 = (0);
while(true){
if((i__41576 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41576);
cljs.core.chunk_append(b__41577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41737 = (i__41576 + (1));
i__41576 = G__41737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41577),sablono$core$iter__41574(cljs.core.chunk_rest(s__41575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41577),null);
}
} else {
var style = cljs.core.first(s__41575__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41574(cljs.core.rest(s__41575__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41560){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41560));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__41585 = goog.dom.getDocument().body;
var G__41586 = (function (){var G__41587 = "script";
var G__41588 = ({"src": src});
return goog.dom.createDom(G__41587,G__41588);
})();
return goog.dom.appendChild(G__41585,G__41586);
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
sablono.core.link_to41594 = (function sablono$core$link_to41594(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41738 = arguments.length;
var i__4790__auto___41739 = (0);
while(true){
if((i__4790__auto___41739 < len__4789__auto___41738)){
args__4795__auto__.push((arguments[i__4790__auto___41739]));

var G__41740 = (i__4790__auto___41739 + (1));
i__4790__auto___41739 = G__41740;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41594.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to41594.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41594.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41594.cljs$lang$applyTo = (function (seq41597){
var G__41598 = cljs.core.first(seq41597);
var seq41597__$1 = cljs.core.next(seq41597);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41598,seq41597__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41594);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41604 = (function sablono$core$mail_to41604(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41741 = arguments.length;
var i__4790__auto___41742 = (0);
while(true){
if((i__4790__auto___41742 < len__4789__auto___41741)){
args__4795__auto__.push((arguments[i__4790__auto___41742]));

var G__41743 = (i__4790__auto___41742 + (1));
i__4790__auto___41742 = G__41743;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41604.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to41604.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41607){
var vec__41608 = p__41607;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41608,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41604.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41604.cljs$lang$applyTo = (function (seq41605){
var G__41606 = cljs.core.first(seq41605);
var seq41605__$1 = cljs.core.next(seq41605);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41606,seq41605__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41604);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41613 = (function sablono$core$unordered_list41613(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list41613_$_iter__41618(s__41619){
return (new cljs.core.LazySeq(null,(function (){
var s__41619__$1 = s__41619;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41619__$1);
if(temp__5735__auto__){
var s__41619__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41619__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41619__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41621 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41620 = (0);
while(true){
if((i__41620 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41620);
cljs.core.chunk_append(b__41621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41744 = (i__41620 + (1));
i__41620 = G__41744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41621),sablono$core$unordered_list41613_$_iter__41618(cljs.core.chunk_rest(s__41619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41621),null);
}
} else {
var x = cljs.core.first(s__41619__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41613_$_iter__41618(cljs.core.rest(s__41619__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41613);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41624 = (function sablono$core$ordered_list41624(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list41624_$_iter__41629(s__41630){
return (new cljs.core.LazySeq(null,(function (){
var s__41630__$1 = s__41630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41630__$1);
if(temp__5735__auto__){
var s__41630__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41630__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41630__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41632 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41631 = (0);
while(true){
if((i__41631 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41631);
cljs.core.chunk_append(b__41632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41745 = (i__41631 + (1));
i__41631 = G__41745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41632),sablono$core$ordered_list41624_$_iter__41629(cljs.core.chunk_rest(s__41630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41632),null);
}
} else {
var x = cljs.core.first(s__41630__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41624_$_iter__41629(cljs.core.rest(s__41630__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41624);
/**
 * Create an image element.
 */
sablono.core.image41633 = (function sablono$core$image41633(var_args){
var G__41635 = arguments.length;
switch (G__41635) {
case 1:
return sablono.core.image41633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41633.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41633.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41633.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41633);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41636_SHARP_,p2__41637_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41636_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41637_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41638_SHARP_,p2__41639_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41638_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41639_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41641 = arguments.length;
switch (G__41641) {
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
sablono.core.color_field41642 = (function sablono$core$color_field41642(var_args){
var G__41644 = arguments.length;
switch (G__41644) {
case 1:
return sablono.core.color_field41642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41642.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41534__auto__);
}));

(sablono.core.color_field41642.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.color_field41642.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41642);

/**
 * Creates a date input field.
 */
sablono.core.date_field41645 = (function sablono$core$date_field41645(var_args){
var G__41647 = arguments.length;
switch (G__41647) {
case 1:
return sablono.core.date_field41645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41645.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41534__auto__);
}));

(sablono.core.date_field41645.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.date_field41645.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41645);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41648 = (function sablono$core$datetime_field41648(var_args){
var G__41650 = arguments.length;
switch (G__41650) {
case 1:
return sablono.core.datetime_field41648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41648.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41534__auto__);
}));

(sablono.core.datetime_field41648.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.datetime_field41648.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41648);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41651 = (function sablono$core$datetime_local_field41651(var_args){
var G__41653 = arguments.length;
switch (G__41653) {
case 1:
return sablono.core.datetime_local_field41651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41651.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41534__auto__);
}));

(sablono.core.datetime_local_field41651.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.datetime_local_field41651.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41651);

/**
 * Creates a email input field.
 */
sablono.core.email_field41654 = (function sablono$core$email_field41654(var_args){
var G__41656 = arguments.length;
switch (G__41656) {
case 1:
return sablono.core.email_field41654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41654.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41534__auto__);
}));

(sablono.core.email_field41654.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.email_field41654.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41654);

/**
 * Creates a file input field.
 */
sablono.core.file_field41657 = (function sablono$core$file_field41657(var_args){
var G__41659 = arguments.length;
switch (G__41659) {
case 1:
return sablono.core.file_field41657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41657.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41534__auto__);
}));

(sablono.core.file_field41657.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.file_field41657.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41657);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41660 = (function sablono$core$hidden_field41660(var_args){
var G__41662 = arguments.length;
switch (G__41662) {
case 1:
return sablono.core.hidden_field41660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41660.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41534__auto__);
}));

(sablono.core.hidden_field41660.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.hidden_field41660.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41660);

/**
 * Creates a month input field.
 */
sablono.core.month_field41663 = (function sablono$core$month_field41663(var_args){
var G__41665 = arguments.length;
switch (G__41665) {
case 1:
return sablono.core.month_field41663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41663.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41534__auto__);
}));

(sablono.core.month_field41663.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.month_field41663.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41663);

/**
 * Creates a number input field.
 */
sablono.core.number_field41666 = (function sablono$core$number_field41666(var_args){
var G__41668 = arguments.length;
switch (G__41668) {
case 1:
return sablono.core.number_field41666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41666.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41534__auto__);
}));

(sablono.core.number_field41666.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.number_field41666.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41666);

/**
 * Creates a password input field.
 */
sablono.core.password_field41669 = (function sablono$core$password_field41669(var_args){
var G__41671 = arguments.length;
switch (G__41671) {
case 1:
return sablono.core.password_field41669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41669.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41534__auto__);
}));

(sablono.core.password_field41669.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.password_field41669.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41669);

/**
 * Creates a range input field.
 */
sablono.core.range_field41672 = (function sablono$core$range_field41672(var_args){
var G__41674 = arguments.length;
switch (G__41674) {
case 1:
return sablono.core.range_field41672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41672.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41534__auto__);
}));

(sablono.core.range_field41672.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.range_field41672.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41672);

/**
 * Creates a search input field.
 */
sablono.core.search_field41675 = (function sablono$core$search_field41675(var_args){
var G__41677 = arguments.length;
switch (G__41677) {
case 1:
return sablono.core.search_field41675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41675.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41534__auto__);
}));

(sablono.core.search_field41675.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.search_field41675.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41675);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41678 = (function sablono$core$tel_field41678(var_args){
var G__41680 = arguments.length;
switch (G__41680) {
case 1:
return sablono.core.tel_field41678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41678.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41534__auto__);
}));

(sablono.core.tel_field41678.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.tel_field41678.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41678);

/**
 * Creates a text input field.
 */
sablono.core.text_field41681 = (function sablono$core$text_field41681(var_args){
var G__41683 = arguments.length;
switch (G__41683) {
case 1:
return sablono.core.text_field41681.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41681.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41534__auto__);
}));

(sablono.core.text_field41681.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.text_field41681.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41681);

/**
 * Creates a time input field.
 */
sablono.core.time_field41684 = (function sablono$core$time_field41684(var_args){
var G__41686 = arguments.length;
switch (G__41686) {
case 1:
return sablono.core.time_field41684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41684.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41534__auto__);
}));

(sablono.core.time_field41684.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.time_field41684.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41684);

/**
 * Creates a url input field.
 */
sablono.core.url_field41687 = (function sablono$core$url_field41687(var_args){
var G__41689 = arguments.length;
switch (G__41689) {
case 1:
return sablono.core.url_field41687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41687.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41534__auto__);
}));

(sablono.core.url_field41687.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.url_field41687.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41687);

/**
 * Creates a week input field.
 */
sablono.core.week_field41690 = (function sablono$core$week_field41690(var_args){
var G__41692 = arguments.length;
switch (G__41692) {
case 1:
return sablono.core.week_field41690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41690.cljs$core$IFn$_invoke$arity$1 = (function (name__41534__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41534__auto__);
}));

(sablono.core.week_field41690.cljs$core$IFn$_invoke$arity$2 = (function (name__41534__auto__,value__41535__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41534__auto__,value__41535__auto__);
}));

(sablono.core.week_field41690.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41690);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41693 = (function sablono$core$check_box41693(var_args){
var G__41695 = arguments.length;
switch (G__41695) {
case 1:
return sablono.core.check_box41693.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41693.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41693.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41693.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41693.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41693.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41693.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41693);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41696 = (function sablono$core$radio_button41696(var_args){
var G__41698 = arguments.length;
switch (G__41698) {
case 1:
return sablono.core.radio_button41696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41696.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41696.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41696.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41696.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41696.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41696);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41699 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41699);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41700 = (function sablono$core$select_options41700(coll){
var iter__4582__auto__ = (function sablono$core$select_options41700_$_iter__41701(s__41702){
return (new cljs.core.LazySeq(null,(function (){
var s__41702__$1 = s__41702;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41702__$1);
if(temp__5735__auto__){
var s__41702__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41702__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41702__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41704 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41703 = (0);
while(true){
if((i__41703 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41703);
cljs.core.chunk_append(b__41704,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41705 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41705,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41705,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41705,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41700.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41700.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41700.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41776 = (i__41703 + (1));
i__41703 = G__41776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41704),sablono$core$select_options41700_$_iter__41701(cljs.core.chunk_rest(s__41702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41704),null);
}
} else {
var x = cljs.core.first(s__41702__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41708 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41708,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41708,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41708,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41700.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41700.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41700.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41700_$_iter__41701(cljs.core.rest(s__41702__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41700);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41711 = (function sablono$core$drop_down41711(var_args){
var G__41713 = arguments.length;
switch (G__41713) {
case 2:
return sablono.core.drop_down41711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41711.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41711.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41711.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41711.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41711.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41711);
/**
 * Creates a text area element.
 */
sablono.core.text_area41714 = (function sablono$core$text_area41714(var_args){
var G__41716 = arguments.length;
switch (G__41716) {
case 1:
return sablono.core.text_area41714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41714.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41714.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41714.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41714);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41717 = (function sablono$core$label41717(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41717);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41718 = (function sablono$core$submit_button41718(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41718);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41719 = (function sablono$core$reset_button41719(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41719);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41720 = (function sablono$core$form_to41720(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41779 = arguments.length;
var i__4790__auto___41780 = (0);
while(true){
if((i__4790__auto___41780 < len__4789__auto___41779)){
args__4795__auto__.push((arguments[i__4790__auto___41780]));

var G__41781 = (i__4790__auto___41780 + (1));
i__4790__auto___41780 = G__41781;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41720.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41720.cljs$core$IFn$_invoke$arity$variadic = (function (p__41723,body){
var vec__41724 = p__41723;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41724,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41724,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41727 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41728 = "_method";
var G__41729 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41727,G__41728,G__41729) : sablono.core.hidden_field.call(null,G__41727,G__41728,G__41729));
})()], null)),body));
}));

(sablono.core.form_to41720.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41720.cljs$lang$applyTo = (function (seq41721){
var G__41722 = cljs.core.first(seq41721);
var seq41721__$1 = cljs.core.next(seq41721);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41722,seq41721__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41720);

//# sourceMappingURL=sablono.core.js.map
