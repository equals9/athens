goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._header[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._header["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._has_body[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._has_body["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._body[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._body["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23477 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23477["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23478 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23478["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23479 = temp__5733__auto____$2;
return (o23479["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23480 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23480["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23481 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23481["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23482 = temp__5733__auto____$2;
return (o23482["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23483 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23483["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23484 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23484["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23485 = temp__5733__auto____$2;
return (o23485["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23486 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23486["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23487 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23487["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23488 = temp__5733__auto____$2;
return (o23488["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23489 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23489["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23490 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23490["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23491 = temp__5733__auto____$2;
return (o23491["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23492 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23492["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23493 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23493["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23494 = temp__5733__auto____$2;
return (o23494["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23495 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23495["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23496 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23496["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23497 = temp__5733__auto____$2;
return (o23497["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23548 = arguments.length;
var i__4790__auto___23549 = (0);
while(true){
if((i__4790__auto___23549 < len__4789__auto___23548)){
args__4795__auto__.push((arguments[i__4790__auto___23549]));

var G__23550 = (i__4790__auto___23549 + (1));
i__4790__auto___23549 = G__23550;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq23498){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23498));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23551 = arguments.length;
var i__4790__auto___23552 = (0);
while(true){
if((i__4790__auto___23552 < len__4789__auto___23551)){
args__4795__auto__.push((arguments[i__4790__auto___23552]));

var G__23553 = (i__4790__auto___23552 + (1));
i__4790__auto___23552 = G__23553;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq23499){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23499));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23554 = arguments.length;
var i__4790__auto___23555 = (0);
while(true){
if((i__4790__auto___23555 < len__4789__auto___23554)){
args__4795__auto__.push((arguments[i__4790__auto___23555]));

var G__23556 = (i__4790__auto___23555 + (1));
i__4790__auto___23555 = G__23556;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq23501){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23501));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23557 = arguments.length;
var i__4790__auto___23558 = (0);
while(true){
if((i__4790__auto___23558 < len__4789__auto___23557)){
args__4795__auto__.push((arguments[i__4790__auto___23558]));

var G__23559 = (i__4790__auto___23558 + (1));
i__4790__auto___23558 = G__23559;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq23503){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23503));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23560 = arguments.length;
var i__4790__auto___23561 = (0);
while(true){
if((i__4790__auto___23561 < len__4789__auto___23560)){
args__4795__auto__.push((arguments[i__4790__auto___23561]));

var G__23564 = (i__4790__auto___23561 + (1));
i__4790__auto___23561 = G__23564;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq23507){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23507));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23568 = arguments.length;
var i__4790__auto___23569 = (0);
while(true){
if((i__4790__auto___23569 < len__4789__auto___23568)){
args__4795__auto__.push((arguments[i__4790__auto___23569]));

var G__23570 = (i__4790__auto___23569 + (1));
i__4790__auto___23569 = G__23570;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq23508){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23508));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23571 = arguments.length;
var i__4790__auto___23572 = (0);
while(true){
if((i__4790__auto___23572 < len__4789__auto___23571)){
args__4795__auto__.push((arguments[i__4790__auto___23572]));

var G__23573 = (i__4790__auto___23572 + (1));
i__4790__auto___23572 = G__23573;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq23516){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23516));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23577 = arguments.length;
var i__4790__auto___23578 = (0);
while(true){
if((i__4790__auto___23578 < len__4789__auto___23577)){
args__4795__auto__.push((arguments[i__4790__auto___23578]));

var G__23579 = (i__4790__auto___23578 + (1));
i__4790__auto___23578 = G__23579;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__23524){
var vec__23525 = p__23524;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23525,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__23517_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__23517_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq23518){
var G__23519 = cljs.core.first(seq23518);
var seq23518__$1 = cljs.core.next(seq23518);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23519,seq23518__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__23528 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__23529 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__23530 = (function (){var G__23531 = new cljs.core.Keyword(null,"li","li",723558921);
var G__23532 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__23533 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__23531,G__23532,G__23533) : devtools.format.make_template_fn.call(null,G__23531,G__23532,G__23533));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__23528,G__23529,G__23530) : devtools.format.make_template_fn.call(null,G__23528,G__23529,G__23530));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23583 = arguments.length;
var i__4790__auto___23584 = (0);
while(true){
if((i__4790__auto___23584 < len__4789__auto___23583)){
args__4795__auto__.push((arguments[i__4790__auto___23584]));

var G__23585 = (i__4790__auto___23584 + (1));
i__4790__auto___23584 = G__23585;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq23534){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23534));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23594 = arguments.length;
var i__4790__auto___23595 = (0);
while(true){
if((i__4790__auto___23595 < len__4789__auto___23594)){
args__4795__auto__.push((arguments[i__4790__auto___23595]));

var G__23596 = (i__4790__auto___23595 + (1));
i__4790__auto___23595 = G__23596;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq23536){
var G__23537 = cljs.core.first(seq23536);
var seq23536__$1 = cljs.core.next(seq23536);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23537,seq23536__$1);
}));


//# sourceMappingURL=devtools.format.js.map
