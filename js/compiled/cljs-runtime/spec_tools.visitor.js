goog.provide('spec_tools.visitor');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
goog.require('spec_tools.form');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form(spec);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))){
if(cljs.core.seq_QMARK_(form)){
return spec_tools.impl.normalize_symbol(cljs.core.first(form));
} else {
return (spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3(form,accept,options) : spec_tools.visitor.spec_dispatch.call(null,form,accept,options));
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_(spec)){
return new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
} else {
if(cljs.core.seq_QMARK_(spec)){
return spec_tools.impl.normalize_symbol(cljs.core.first(spec_tools.impl.strip_fn_if_needed(spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol(spec);
} else {
return spec_tools.impl.normalize_symbol((spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.form.resolve_form.call(null,spec)));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55926 = cljs.core.get_global_hierarchy;
return (fexpr__55926.cljs$core$IFn$_invoke$arity$0 ? fexpr__55926.cljs$core$IFn$_invoke$arity$0() : fexpr__55926.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__55928 = arguments.length;
switch (G__55928) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__55929){
var map__55930 = p__55929;
var map__55930__$1 = (((((!((map__55930 == null))))?(((((map__55930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55930):map__55930);
var options = map__55930__$1;
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55930__$1,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632));
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return (spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(spec,accept,options__$1) : spec_tools.visitor.visit_spec.call(null,spec,accept,options__$1));
} else {
return (spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(null,accept,options) : spec_tools.visitor.visit_spec.call(null,null,accept,options));
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (spec,accept,options){
var G__55932 = new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
var G__55933 = spec;
var G__55934 = cljs.core.vec((((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form(spec):spec));
var G__55935 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55932,G__55933,G__55934,G__55935) : accept.call(null,G__55932,G__55933,G__55934,G__55935));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__55937 = new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null);
var G__55938 = spec;
var G__55939 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55936_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55936_SHARP_,accept,options);
}),keys);
var G__55940 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55937,G__55938,G__55939,G__55940) : accept.call(null,G__55937,G__55938,G__55939,G__55940));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (spec,accept,options){
var vec__55942 = spec_tools.impl.extract_form(spec);
var seq__55943 = cljs.core.seq(vec__55942);
var first__55944 = cljs.core.first(seq__55943);
var seq__55943__$1 = cljs.core.next(seq__55943);
var _ = first__55944;
var map__55945 = seq__55943__$1;
var map__55945__$1 = (((((!((map__55945 == null))))?(((((map__55945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55945):map__55945);
var inner_spec_map = map__55945__$1;
var G__55947 = new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null);
var G__55948 = spec;
var G__55949 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55941_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55941_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__55950 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55947,G__55948,G__55949,G__55950) : accept.call(null,G__55947,G__55948,G__55949,G__55950));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (spec,accept,options){
var vec__55952 = spec_tools.impl.extract_form(spec);
var seq__55953 = cljs.core.seq(vec__55952);
var first__55954 = cljs.core.first(seq__55953);
var seq__55953__$1 = cljs.core.next(seq__55953);
var _ = first__55954;
var inner_specs = seq__55953__$1;
var G__55955 = new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null);
var G__55956 = spec;
var G__55957 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55951_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55951_SHARP_,accept,options);
}),inner_specs);
var G__55958 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55955,G__55956,G__55957,G__55958) : accept.call(null,G__55955,G__55956,G__55957,G__55958));
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__55960 = spec_tools.impl.extract_form(spec);
var seq__55961 = cljs.core.seq(vec__55960);
var first__55962 = cljs.core.first(seq__55961);
var seq__55961__$1 = cljs.core.next(seq__55961);
var _ = first__55962;
var inner_specs = seq__55961__$1;
var G__55967 = new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null);
var G__55968 = spec;
var G__55969 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55959_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55959_SHARP_,accept,options);
}),inner_specs);
var G__55970 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55967,G__55968,G__55969,G__55970) : accept.call(null,G__55967,G__55968,G__55969,G__55970));
});
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (spec,accept,options){
var vec__55986 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55986,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55986,(1),null);
var G__55992 = new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null);
var G__55993 = spec;
var G__55994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__55995 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__55992,G__55993,G__55994,G__55995) : accept.call(null,G__55992,G__55993,G__55994,G__55995));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),(function (spec,accept,options){
var vec__56002 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56002,(0),null);
var inner_spec1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56002,(1),null);
var inner_spec2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56002,(2),null);
var G__56005 = new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null);
var G__56006 = spec;
var G__56007 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55997_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__55997_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null));
var G__56008 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56005,G__56006,G__56007,G__56008) : accept.call(null,G__56005,G__56006,G__56007,G__56008));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (spec,accept,options){
var form = spec_tools.impl.extract_form(spec);
var pred = cljs.core.second(form);
var map__56009 = spec_tools.parse.parse_spec(form);
var map__56009__$1 = (((((!((map__56009 == null))))?(((((map__56009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56009):map__56009);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56009__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch = (function (){var G__56011 = type;
var G__56011__$1 = (((G__56011 instanceof cljs.core.Keyword))?G__56011.fqn:null);
switch (G__56011__$1) {
case "map-of":
return new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);

break;
case "set":
return new cljs.core.Keyword("spec-tools.visitor","set-of","spec-tools.visitor/set-of",983982444);

break;
case "vector":
return new cljs.core.Keyword("spec-tools.visitor","vector-of","spec-tools.visitor/vector-of",-1693991985);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56011__$1)].join('')));

}
})();
var G__56012 = dispatch;
var G__56013 = spec;
var G__56014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(pred,accept,options)], null);
var G__56015 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56012,G__56013,G__56014,G__56015) : accept.call(null,G__56012,G__56013,G__56014,G__56015));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (spec,accept,options){
var vec__56017 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56017,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56017,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56017,(2),null);
var G__56020 = new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);
var G__56021 = spec;
var G__56022 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56016_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56016_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var G__56023 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56020,G__56021,G__56022,G__56023) : accept.call(null,G__56020,G__56021,G__56022,G__56023));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),(function (spec,accept,options){
var vec__56024 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56024,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56024,(1),null);
var G__56027 = new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null);
var G__56028 = spec;
var G__56029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56030 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56027,G__56028,G__56029,G__56030) : accept.call(null,G__56027,G__56028,G__56029,G__56030));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),(function (spec,accept,options){
var vec__56032 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56032,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56032,(1),null);
var G__56035 = new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null);
var G__56036 = spec;
var G__56037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56038 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56035,G__56036,G__56037,G__56038) : accept.call(null,G__56035,G__56036,G__56037,G__56038));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),(function (spec,accept,options){
var vec__56039 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56039,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56039,(1),null);
var G__56042 = new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null);
var G__56043 = spec;
var G__56045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56046 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56042,G__56043,G__56045,G__56046) : accept.call(null,G__56042,G__56043,G__56045,G__56046));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (spec,accept,options){
var vec__56048 = spec_tools.impl.extract_form(spec);
var seq__56049 = cljs.core.seq(vec__56048);
var first__56050 = cljs.core.first(seq__56049);
var seq__56049__$1 = cljs.core.next(seq__56049);
var _ = first__56050;
var map__56051 = seq__56049__$1;
var map__56051__$1 = (((((!((map__56051 == null))))?(((((map__56051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56051):map__56051);
var inner_spec_map = map__56051__$1;
var G__56053 = new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null);
var G__56054 = spec;
var G__56055 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56047_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56047_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__56056 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56053,G__56054,G__56055,G__56056) : accept.call(null,G__56053,G__56054,G__56055,G__56056));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (spec,accept,options){
var vec__56058 = spec_tools.impl.extract_form(spec);
var seq__56059 = cljs.core.seq(vec__56058);
var first__56060 = cljs.core.first(seq__56059);
var seq__56059__$1 = cljs.core.next(seq__56059);
var _ = first__56060;
var map__56061 = seq__56059__$1;
var map__56061__$1 = (((((!((map__56061 == null))))?(((((map__56061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56061):map__56061);
var inner_spec_map = map__56061__$1;
var G__56063 = new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null);
var G__56064 = spec;
var G__56065 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56057_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56057_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__56066 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56063,G__56064,G__56065,G__56066) : accept.call(null,G__56063,G__56064,G__56065,G__56066));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),(function (spec,accept,options){
var vec__56067 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56067,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56067,(1),null);
var G__56070 = new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null);
var G__56071 = spec;
var G__56072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56073 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56070,G__56071,G__56072,G__56073) : accept.call(null,G__56070,G__56071,G__56072,G__56073));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (spec,accept,options){
var vec__56075 = spec_tools.impl.extract_form(spec);
var seq__56076 = cljs.core.seq(vec__56075);
var first__56077 = cljs.core.first(seq__56076);
var seq__56076__$1 = cljs.core.next(seq__56076);
var _ = first__56077;
var inner_specs = seq__56076__$1;
var G__56078 = new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null);
var G__56079 = spec;
var G__56080 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56074_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56074_SHARP_,accept,options);
}),inner_specs);
var G__56081 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56078,G__56079,G__56080,G__56081) : accept.call(null,G__56078,G__56079,G__56080,G__56081));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__56083 = new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null);
var G__56084 = spec;
var G__56085 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56082_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56082_SHARP_,accept,options);
}),keys);
var G__56086 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56083,G__56084,G__56085,G__56086) : accept.call(null,G__56083,G__56084,G__56085,G__56086));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (spec,accept,options){
var vec__56087 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56087,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56087,(1),null);
var G__56090 = new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null);
var G__56091 = spec;
var G__56092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56093 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56090,G__56091,G__56092,G__56093) : accept.call(null,G__56090,G__56091,G__56092,G__56093));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (spec,accept,options){
var vec__56094 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56094,(0),null);
var map__56097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56094,(1),null);
var map__56097__$1 = (((((!((map__56097 == null))))?(((((map__56097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56097):map__56097);
var inner_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56097__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var G__56099 = new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200);
var G__56100 = spec;
var G__56101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56102 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56099,G__56100,G__56101,G__56102) : accept.call(null,G__56099,G__56100,G__56101,G__56102));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),(function (spec,accept,options){
var G__56103 = spec_tools.visitor.spec_dispatch(spec,accept,options);
var G__56104 = spec;
var G__56105 = null;
var G__56106 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56103,G__56104,G__56105,G__56106) : accept.call(null,G__56103,G__56104,G__56105,G__56106));
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5733__auto__ = cljs.spec.alpha.get_spec(spec);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref(specs);
}
});
});

//# sourceMappingURL=spec_tools.visitor.js.map
