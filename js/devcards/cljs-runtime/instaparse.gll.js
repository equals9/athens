goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('instaparse.util');
goog.require('goog.i18n.uChar');
instaparse.gll._STAR_diagnostic_char_lookahead_STAR_ = (10);

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__56837 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__56837__$1 = (((G__56837 instanceof cljs.core.Keyword))?G__56837.fqn:null);
switch (G__56837__$1) {
case "nt":
return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56837__$1)].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__56838 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__56838__$1 = (((G__56838 instanceof cljs.core.Keyword))?G__56838.fqn:null);
switch (G__56838__$1) {
case "nt":
return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_full_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_full_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_full_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_full_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_full_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_full_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_full_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_full_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_full_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56838__$1)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Failure = (function (index,reason,__meta,__extmap,__hash){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k56840,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__56844 = k56840;
var G__56844__$1 = (((G__56844 instanceof cljs.core.Keyword))?G__56844.fqn:null);
switch (G__56844__$1) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56840,else__4442__auto__);

}
}));

(instaparse.gll.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__56845){
var vec__56846 = p__56845;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56846,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56846,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#instaparse.gll.Failure{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
}));

(instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56839){
var self__ = this;
var G__56839__$1 = this;
return (new cljs.core.RecordIter((0),G__56839__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__56849 = (function (coll__4436__auto__){
return (-1140991288 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__56849(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56841,other56842){
var self__ = this;
var this56841__$1 = this;
return (((!((other56842 == null)))) && ((this56841__$1.constructor === other56842.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56841__$1.index,other56842.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56841__$1.reason,other56842.reason)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56841__$1.__extmap,other56842.__extmap)));
}));

(instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__56839){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__56850 = cljs.core.keyword_identical_QMARK_;
var expr__56851 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__56853 = new cljs.core.Keyword(null,"index","index",-1531685915);
var G__56854 = expr__56851;
return (pred__56850.cljs$core$IFn$_invoke$arity$2 ? pred__56850.cljs$core$IFn$_invoke$arity$2(G__56853,G__56854) : pred__56850.call(null,G__56853,G__56854));
})())){
return (new instaparse.gll.Failure(G__56839,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56855 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var G__56856 = expr__56851;
return (pred__56850.cljs$core$IFn$_invoke$arity$2 ? pred__56850.cljs$core$IFn$_invoke$arity$2(G__56855,G__56856) : pred__56850.call(null,G__56855,G__56856));
})())){
return (new instaparse.gll.Failure(self__.index,G__56839,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__56839),null));
}
}
}));

(instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason,null))], null),self__.__extmap));
}));

(instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__56839){
var self__ = this;
var this__4438__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__56839,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"reason","reason",-430220232,null)], null);
}));

(instaparse.gll.Failure.cljs$lang$type = true);

(instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"instaparse.gll/Failure",null,(1),null));
}));

(instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"instaparse.gll/Failure");
}));

/**
 * Positional factory function for instaparse.gll/Failure.
 */
instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

/**
 * Factory function for instaparse.gll/Failure, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__56843){
var extmap__4478__auto__ = (function (){var G__56857 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56843,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reason","reason",-2070751759)], 0));
if(cljs.core.record_QMARK_(G__56843)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56857);
} else {
return G__56857;
}
})();
return (new instaparse.gll.Failure(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__56843),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(G__56843),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

(instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write(writer,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56858_57015 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56859_57016 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56860_57017 = true;
var _STAR_print_fn_STAR__temp_val__56861_57018 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56860_57017);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56861_57018);

try{instaparse.failure.pprint_failure(fail__$1);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56859_57016);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56858_57015);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
}));
instaparse.gll.failure_type = cljs.core.type((new instaparse.gll.Failure(null,null,null,null,null)));
instaparse.gll.text__GT_segment = (function instaparse$gll$text__GT_segment(text){
return text;
});
instaparse.gll.sub_sequence = cljs.core.subs;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,__meta,__extmap,__hash){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.trace_QMARK_ = trace_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k56863,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__56867 = k56863;
var G__56867__$1 = (((G__56867 instanceof cljs.core.Keyword))?G__56867.fqn:null);
switch (G__56867__$1) {
case "grammar":
return self__.grammar;

break;
case "text":
return self__.text;

break;
case "segment":
return self__.segment;

break;
case "fail-index":
return self__.fail_index;

break;
case "node-builder":
return self__.node_builder;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "generation":
return self__.generation;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "msg-cache":
return self__.msg_cache;

break;
case "nodes":
return self__.nodes;

break;
case "success":
return self__.success;

break;
case "failure":
return self__.failure;

break;
case "trace?":
return self__.trace_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56863,else__4442__auto__);

}
}));

(instaparse.gll.Tramp.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__56868){
var vec__56869 = p__56868;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56869,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56869,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#instaparse.gll.Tramp{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_],null))], null),self__.__extmap));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56862){
var self__ = this;
var G__56862__$1 = this;
return (new cljs.core.RecordIter((0),G__56862__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__56872 = (function (coll__4436__auto__){
return (166878148 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__56872(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56864,other56865){
var self__ = this;
var this56864__$1 = this;
return (((!((other56865 == null)))) && ((this56864__$1.constructor === other56865.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.grammar,other56865.grammar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.text,other56865.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.segment,other56865.segment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.fail_index,other56865.fail_index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.node_builder,other56865.node_builder)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.stack,other56865.stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.next_stack,other56865.next_stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.generation,other56865.generation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.negative_listeners,other56865.negative_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.msg_cache,other56865.msg_cache)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.nodes,other56865.nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.success,other56865.success)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.failure,other56865.failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.trace_QMARK_,other56865.trace_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56864__$1.__extmap,other56865.__extmap)));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),null,new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"failure","failure",720415879),null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__56862){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__56873 = cljs.core.keyword_identical_QMARK_;
var expr__56874 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__56876 = new cljs.core.Keyword(null,"grammar","grammar",1881328267);
var G__56877 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56876,G__56877) : pred__56873.call(null,G__56876,G__56877));
})())){
return (new instaparse.gll.Tramp(G__56862,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56878 = new cljs.core.Keyword(null,"text","text",-1790561697);
var G__56879 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56878,G__56879) : pred__56873.call(null,G__56878,G__56879));
})())){
return (new instaparse.gll.Tramp(self__.grammar,G__56862,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56880 = new cljs.core.Keyword(null,"segment","segment",-964921196);
var G__56881 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56880,G__56881) : pred__56873.call(null,G__56880,G__56881));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__56862,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56882 = new cljs.core.Keyword(null,"fail-index","fail-index",248726923);
var G__56883 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56882,G__56883) : pred__56873.call(null,G__56882,G__56883));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__56862,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56884 = new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605);
var G__56885 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56884,G__56885) : pred__56873.call(null,G__56884,G__56885));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__56862,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56886 = new cljs.core.Keyword(null,"stack","stack",-793405930);
var G__56887 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56886,G__56887) : pred__56873.call(null,G__56886,G__56887));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__56862,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56888 = new cljs.core.Keyword(null,"next-stack","next-stack",-481930728);
var G__56889 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56888,G__56889) : pred__56873.call(null,G__56888,G__56889));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__56862,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56890 = new cljs.core.Keyword(null,"generation","generation",-2132542044);
var G__56891 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56890,G__56891) : pred__56873.call(null,G__56890,G__56891));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__56862,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56892 = new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092);
var G__56893 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56892,G__56893) : pred__56873.call(null,G__56892,G__56893));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__56862,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56894 = new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070);
var G__56895 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56894,G__56895) : pred__56873.call(null,G__56894,G__56895));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__56862,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56896 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805);
var G__56897 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56896,G__56897) : pred__56873.call(null,G__56896,G__56897));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__56862,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56898 = new cljs.core.Keyword(null,"success","success",1890645906);
var G__56899 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56898,G__56899) : pred__56873.call(null,G__56898,G__56899));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__56862,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56900 = new cljs.core.Keyword(null,"failure","failure",720415879);
var G__56901 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56900,G__56901) : pred__56873.call(null,G__56900,G__56901));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__56862,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56902 = new cljs.core.Keyword(null,"trace?","trace?",1730690679);
var G__56903 = expr__56874;
return (pred__56873.cljs$core$IFn$_invoke$arity$2 ? pred__56873.cljs$core$IFn$_invoke$arity$2(G__56902,G__56903) : pred__56873.call(null,G__56902,G__56903));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__56862,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__56862),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"success","success",1890645906),self__.success,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_,null))], null),self__.__extmap));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__56862){
var self__ = this;
var this__4438__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,G__56862,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"segment","segment",675610331,null),new cljs.core.Symbol(null,"fail-index","fail-index",1889258450,null),new cljs.core.Symbol(null,"node-builder","node-builder",-316031078,null),new cljs.core.Symbol(null,"stack","stack",847125597,null),new cljs.core.Symbol(null,"next-stack","next-stack",1158600799,null),new cljs.core.Symbol(null,"generation","generation",-492010517,null),new cljs.core.Symbol(null,"negative-listeners","negative-listeners",1695772619,null),new cljs.core.Symbol(null,"msg-cache","msg-cache",906756457,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"trace?","trace?",-923745090,null)], null);
}));

(instaparse.gll.Tramp.cljs$lang$type = true);

(instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"instaparse.gll/Tramp",null,(1),null));
}));

(instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"instaparse.gll/Tramp");
}));

/**
 * Positional factory function for instaparse.gll/Tramp.
 */
instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,null,null,null));
});

/**
 * Factory function for instaparse.gll/Tramp, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__56866){
var extmap__4478__auto__ = (function (){var G__56904 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56866,new cljs.core.Keyword(null,"grammar","grammar",1881328267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679)], 0));
if(cljs.core.record_QMARK_(G__56866)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56904);
} else {
return G__56904;
}
})();
return (new instaparse.gll.Tramp(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__56866),new cljs.core.Keyword(null,"trace?","trace?",1730690679).cljs$core$IFn$_invoke$arity$1(G__56866),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var G__56906 = arguments.length;
switch (G__56906) {
case 2:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = (function (grammar,text){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),(-1),null);
}));

(instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,segment,(-1),null);
}));

(instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),fail_index,node_builder);
}));

(instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map_by(cljs.core._GT_)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null))),false,null,null,null));
}));

(instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5);

instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap,__hash){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k56908,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__56912 = k56908;
var G__56912__$1 = (((G__56912 instanceof cljs.core.Keyword))?G__56912.fqn:null);
switch (G__56912__$1) {
case "listeners":
return self__.listeners;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "results":
return self__.results;

break;
case "full-results":
return self__.full_results;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56908,else__4442__auto__);

}
}));

(instaparse.gll.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__56913){
var vec__56914 = p__56913;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56914,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56914,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#instaparse.gll.Node{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
}));

(instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56907){
var self__ = this;
var G__56907__$1 = this;
return (new cljs.core.RecordIter((0),G__56907__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__56917 = (function (coll__4436__auto__){
return (-1610074144 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__56917(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56909,other56910){
var self__ = this;
var this56909__$1 = this;
return (((!((other56910 == null)))) && ((this56909__$1.constructor === other56910.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56909__$1.listeners,other56910.listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56909__$1.full_listeners,other56910.full_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56909__$1.results,other56910.results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56909__$1.full_results,other56910.full_results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56909__$1.__extmap,other56910.__extmap)));
}));

(instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-results","full-results",-1500225407),null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__56907){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__56918 = cljs.core.keyword_identical_QMARK_;
var expr__56919 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__56921 = new cljs.core.Keyword(null,"listeners","listeners",394544445);
var G__56922 = expr__56919;
return (pred__56918.cljs$core$IFn$_invoke$arity$2 ? pred__56918.cljs$core$IFn$_invoke$arity$2(G__56921,G__56922) : pred__56918.call(null,G__56921,G__56922));
})())){
return (new instaparse.gll.Node(G__56907,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56923 = new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827);
var G__56924 = expr__56919;
return (pred__56918.cljs$core$IFn$_invoke$arity$2 ? pred__56918.cljs$core$IFn$_invoke$arity$2(G__56923,G__56924) : pred__56918.call(null,G__56923,G__56924));
})())){
return (new instaparse.gll.Node(self__.listeners,G__56907,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56925 = new cljs.core.Keyword(null,"results","results",-1134170113);
var G__56926 = expr__56919;
return (pred__56918.cljs$core$IFn$_invoke$arity$2 ? pred__56918.cljs$core$IFn$_invoke$arity$2(G__56925,G__56926) : pred__56918.call(null,G__56925,G__56926));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__56907,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56927 = new cljs.core.Keyword(null,"full-results","full-results",-1500225407);
var G__56928 = expr__56919;
return (pred__56918.cljs$core$IFn$_invoke$arity$2 ? pred__56918.cljs$core$IFn$_invoke$arity$2(G__56927,G__56928) : pred__56918.call(null,G__56927,G__56928));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__56907,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__56907),null));
}
}
}
}
}));

(instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"results","results",-1134170113),self__.results,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results,null))], null),self__.__extmap));
}));

(instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__56907){
var self__ = this;
var this__4438__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__56907,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"full-listeners","full-listeners",1691153354,null),new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.Symbol(null,"full-results","full-results",140306120,null)], null);
}));

(instaparse.gll.Node.cljs$lang$type = true);

(instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"instaparse.gll/Node",null,(1),null));
}));

(instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"instaparse.gll/Node");
}));

/**
 * Positional factory function for instaparse.gll/Node.
 */
instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

/**
 * Factory function for instaparse.gll/Node, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__56911){
var extmap__4478__auto__ = (function (){var G__56929 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56911,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)], 0));
if(cljs.core.record_QMARK_(G__56911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56929);
} else {
return G__56929;
}
})();
return (new instaparse.gll.Node(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__56911),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(G__56911),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(G__56911),new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(G__56911),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(tramp);
var i = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache),k,(0));
var f = (function (){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(result) : listener.call(null,result));
});

if((c > cljs.core.deref(new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5735__auto__ = (function (){var fexpr__56930 = cljs.core.deref(nodes);
return (fexpr__56930.cljs$core$IFn$_invoke$arity$1 ? fexpr__56930.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__56930.call(null,node_key));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return (cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5735__auto__ = (function (){var fexpr__56931 = cljs.core.deref(nodes);
return (fexpr__56931.cljs$core$IFn$_invoke$arity$1 ? fexpr__56931.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__56931.call(null,node_key));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return (((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node))) > (0))));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5735__auto__ = (function (){var fexpr__56932 = cljs.core.deref(nodes);
return (fexpr__56932.cljs$core$IFn$_invoke$arity$1 ? fexpr__56932.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__56932.call(null,node_key));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return (((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node))) > (0))));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5735__auto__ = (function (){var fexpr__56933 = cljs.core.deref(nodes);
return (fexpr__56933.cljs$core$IFn$_invoke$arity$1 ? fexpr__56933.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__56933.call(null,node_key));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return (cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5733__auto__ = (function (){var fexpr__56934 = cljs.core.deref(nodes);
return (fexpr__56934.cljs$core$IFn$_invoke$arity$1 ? fexpr__56934.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__56934.call(null,node_key));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var node = temp__5733__auto__;
return node;
} else {
var node = instaparse.gll.make_node();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj))){
return cljs.core.with_meta(obj,metamap);
} else {
return obj;
}
});
/**
 * Pushes a result into the trampoline's node.
 * Categorizes as either result or full-result.
 * Schedules notification to all existing listeners of result
 * (Full listeners only get notified about full results)
 */
instaparse.gll.push_result = (function instaparse$gll$push_result(tramp,node_key,result){

var node = instaparse.gll.node_get(tramp,node_key);
var parser = (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1)));
var result__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"result","result",1415092211),null):result);
var result__$2 = (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__5733__auto__)){
var reduction_function = temp__5733__auto__;
return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1)], null)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);
var results = ((total_QMARK_)?new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node):new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.not((function (){var fexpr__56936 = cljs.core.deref(results);
return (fexpr__56936.cljs$core$IFn$_invoke$arity$1 ? fexpr__56936.cljs$core$IFn$_invoke$arity$1(result__$2) : fexpr__56936.call(null,result__$2));
})())){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result__$2);

var seq__56937_57099 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__56938_57100 = null;
var count__56939_57101 = (0);
var i__56940_57102 = (0);
while(true){
if((i__56940_57102 < count__56939_57101)){
var listener_57103 = chunk__56938_57100.cljs$core$IIndexed$_nth$arity$2(null,i__56940_57102);
instaparse.gll.push_message(tramp,listener_57103,result__$2);


var G__57104 = seq__56937_57099;
var G__57105 = chunk__56938_57100;
var G__57106 = count__56939_57101;
var G__57107 = (i__56940_57102 + (1));
seq__56937_57099 = G__57104;
chunk__56938_57100 = G__57105;
count__56939_57101 = G__57106;
i__56940_57102 = G__57107;
continue;
} else {
var temp__5735__auto___57108 = cljs.core.seq(seq__56937_57099);
if(temp__5735__auto___57108){
var seq__56937_57109__$1 = temp__5735__auto___57108;
if(cljs.core.chunked_seq_QMARK_(seq__56937_57109__$1)){
var c__4609__auto___57110 = cljs.core.chunk_first(seq__56937_57109__$1);
var G__57111 = cljs.core.chunk_rest(seq__56937_57109__$1);
var G__57112 = c__4609__auto___57110;
var G__57113 = cljs.core.count(c__4609__auto___57110);
var G__57114 = (0);
seq__56937_57099 = G__57111;
chunk__56938_57100 = G__57112;
count__56939_57101 = G__57113;
i__56940_57102 = G__57114;
continue;
} else {
var listener_57115 = cljs.core.first(seq__56937_57109__$1);
instaparse.gll.push_message(tramp,listener_57115,result__$2);


var G__57116 = cljs.core.next(seq__56937_57109__$1);
var G__57117 = null;
var G__57118 = (0);
var G__57119 = (0);
seq__56937_57099 = G__57116;
chunk__56938_57100 = G__57117;
count__56939_57101 = G__57118;
i__56940_57102 = G__57119;
continue;
}
} else {
}
}
break;
}

if(total_QMARK_){
var seq__56941 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__56942 = null;
var count__56943 = (0);
var i__56944 = (0);
while(true){
if((i__56944 < count__56943)){
var listener = chunk__56942.cljs$core$IIndexed$_nth$arity$2(null,i__56944);
instaparse.gll.push_message(tramp,listener,result__$2);


var G__57120 = seq__56941;
var G__57121 = chunk__56942;
var G__57122 = count__56943;
var G__57123 = (i__56944 + (1));
seq__56941 = G__57120;
chunk__56942 = G__57121;
count__56943 = G__57122;
i__56944 = G__57123;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56941);
if(temp__5735__auto__){
var seq__56941__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56941__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56941__$1);
var G__57124 = cljs.core.chunk_rest(seq__56941__$1);
var G__57125 = c__4609__auto__;
var G__57126 = cljs.core.count(c__4609__auto__);
var G__57127 = (0);
seq__56941 = G__57124;
chunk__56942 = G__57125;
count__56943 = G__57126;
i__56944 = G__57127;
continue;
} else {
var listener = cljs.core.first(seq__56941__$1);
instaparse.gll.push_message(tramp,listener,result__$2);


var G__57128 = cljs.core.next(seq__56941__$1);
var G__57129 = null;
var G__57130 = (0);
var G__57131 = (0);
seq__56941 = G__57128;
chunk__56942 = G__57129;
count__56943 = G__57130;
i__56944 = G__57131;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing results.
 * Initiates parse if necessary
 */
instaparse.gll.push_listener = (function instaparse$gll$push_listener(tramp,node_key,listener){
var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__56945_57132 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__56946_57133 = null;
var count__56947_57134 = (0);
var i__56948_57135 = (0);
while(true){
if((i__56948_57135 < count__56947_57134)){
var result_57136 = chunk__56946_57133.cljs$core$IIndexed$_nth$arity$2(null,i__56948_57135);
instaparse.gll.push_message(tramp,listener,result_57136);


var G__57137 = seq__56945_57132;
var G__57138 = chunk__56946_57133;
var G__57139 = count__56947_57134;
var G__57140 = (i__56948_57135 + (1));
seq__56945_57132 = G__57137;
chunk__56946_57133 = G__57138;
count__56947_57134 = G__57139;
i__56948_57135 = G__57140;
continue;
} else {
var temp__5735__auto___57141 = cljs.core.seq(seq__56945_57132);
if(temp__5735__auto___57141){
var seq__56945_57142__$1 = temp__5735__auto___57141;
if(cljs.core.chunked_seq_QMARK_(seq__56945_57142__$1)){
var c__4609__auto___57143 = cljs.core.chunk_first(seq__56945_57142__$1);
var G__57144 = cljs.core.chunk_rest(seq__56945_57142__$1);
var G__57145 = c__4609__auto___57143;
var G__57146 = cljs.core.count(c__4609__auto___57143);
var G__57147 = (0);
seq__56945_57132 = G__57144;
chunk__56946_57133 = G__57145;
count__56947_57134 = G__57146;
i__56948_57135 = G__57147;
continue;
} else {
var result_57148 = cljs.core.first(seq__56945_57142__$1);
instaparse.gll.push_message(tramp,listener,result_57148);


var G__57149 = cljs.core.next(seq__56945_57142__$1);
var G__57150 = null;
var G__57151 = (0);
var G__57152 = (0);
seq__56945_57132 = G__57149;
chunk__56946_57133 = G__57150;
count__56947_57134 = G__57151;
i__56948_57135 = G__57152;
continue;
}
} else {
}
}
break;
}

var seq__56949_57153 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__56950_57154 = null;
var count__56951_57155 = (0);
var i__56952_57156 = (0);
while(true){
if((i__56952_57156 < count__56951_57155)){
var result_57157 = chunk__56950_57154.cljs$core$IIndexed$_nth$arity$2(null,i__56952_57156);
instaparse.gll.push_message(tramp,listener,result_57157);


var G__57158 = seq__56949_57153;
var G__57159 = chunk__56950_57154;
var G__57160 = count__56951_57155;
var G__57161 = (i__56952_57156 + (1));
seq__56949_57153 = G__57158;
chunk__56950_57154 = G__57159;
count__56951_57155 = G__57160;
i__56952_57156 = G__57161;
continue;
} else {
var temp__5735__auto___57162 = cljs.core.seq(seq__56949_57153);
if(temp__5735__auto___57162){
var seq__56949_57163__$1 = temp__5735__auto___57162;
if(cljs.core.chunked_seq_QMARK_(seq__56949_57163__$1)){
var c__4609__auto___57164 = cljs.core.chunk_first(seq__56949_57163__$1);
var G__57165 = cljs.core.chunk_rest(seq__56949_57163__$1);
var G__57166 = c__4609__auto___57164;
var G__57167 = cljs.core.count(c__4609__auto___57164);
var G__57168 = (0);
seq__56949_57153 = G__57165;
chunk__56950_57154 = G__57166;
count__56951_57155 = G__57167;
i__56952_57156 = G__57168;
continue;
} else {
var result_57169 = cljs.core.first(seq__56949_57163__$1);
instaparse.gll.push_message(tramp,listener,result_57169);


var G__57170 = cljs.core.next(seq__56949_57163__$1);
var G__57171 = null;
var G__57172 = (0);
var G__57173 = (0);
seq__56949_57153 = G__57170;
chunk__56950_57154 = G__57171;
count__56951_57155 = G__57172;
i__56952_57156 = G__57173;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,(function (){
return instaparse.gll._parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
}));
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing full results.
 */
instaparse.gll.push_full_listener = (function instaparse$gll$push_full_listener(tramp,node_key,listener){
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__56953_57174 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__56954_57175 = null;
var count__56955_57176 = (0);
var i__56956_57177 = (0);
while(true){
if((i__56956_57177 < count__56955_57176)){
var result_57178 = chunk__56954_57175.cljs$core$IIndexed$_nth$arity$2(null,i__56956_57177);
instaparse.gll.push_message(tramp,listener,result_57178);


var G__57179 = seq__56953_57174;
var G__57180 = chunk__56954_57175;
var G__57181 = count__56955_57176;
var G__57182 = (i__56956_57177 + (1));
seq__56953_57174 = G__57179;
chunk__56954_57175 = G__57180;
count__56955_57176 = G__57181;
i__56956_57177 = G__57182;
continue;
} else {
var temp__5735__auto___57183 = cljs.core.seq(seq__56953_57174);
if(temp__5735__auto___57183){
var seq__56953_57184__$1 = temp__5735__auto___57183;
if(cljs.core.chunked_seq_QMARK_(seq__56953_57184__$1)){
var c__4609__auto___57185 = cljs.core.chunk_first(seq__56953_57184__$1);
var G__57186 = cljs.core.chunk_rest(seq__56953_57184__$1);
var G__57187 = c__4609__auto___57185;
var G__57188 = cljs.core.count(c__4609__auto___57185);
var G__57189 = (0);
seq__56953_57174 = G__57186;
chunk__56954_57175 = G__57187;
count__56955_57176 = G__57188;
i__56956_57177 = G__57189;
continue;
} else {
var result_57190 = cljs.core.first(seq__56953_57184__$1);
instaparse.gll.push_message(tramp,listener,result_57190);


var G__57191 = cljs.core.next(seq__56953_57184__$1);
var G__57192 = null;
var G__57193 = (0);
var G__57194 = (0);
seq__56953_57174 = G__57191;
chunk__56954_57175 = G__57192;
count__56955_57176 = G__57193;
i__56956_57177 = G__57194;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,(function (){
return instaparse.gll._full_parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
}));
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),instaparse.gll.merge_negative_listeners,cljs.core.PersistentArrayMap.createAsIfByAssoc([(creator.cljs$core$IFn$_invoke$arity$1 ? creator.cljs$core$IFn$_invoke$arity$1((0)) : creator.call(null,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)]));
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp),(function (failure){
var current_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure);
var G__56957 = cljs.core.compare(index,current_index);
switch (G__56957) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56957)].join('')));

}
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(tramp))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__56958 = new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(tramp);
var G__56959 = new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607);
var G__56960 = (function (){var G__56963 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var G__56964 = index;
return (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(G__56963,G__56964) : instaparse.gll.sub_sequence.call(null,G__56963,G__56964));
})();
var G__56961 = index;
var G__56962 = cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp));
return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__56958,G__56959,G__56960,G__56961,G__56962) : instaparse.gll.build_node_with_meta.call(null,G__56958,G__56959,G__56960,G__56961,G__56962));
})(),cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(stack){
var top = cljs.core.peek(cljs.core.deref(stack));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.pop);

return (top.cljs$core$IFn$_invoke$arity$0 ? top.cljs$core$IFn$_invoke$arity$0() : top.call(null));
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var G__56966 = arguments.length;
switch (G__56966) {
case 1:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = (function (tramp){
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,null);
}));

(instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp)))){

return cljs.core.cons(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp))),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp),null);

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count(cljs.core.deref(stack)) > (0))){
instaparse.gll.step(stack);

var G__57197 = tramp;
var G__57198 = found_result_QMARK_;
tramp = G__57197;
found_result_QMARK_ = G__57198;
continue;
} else {
if((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp))) > (0))){
var vec__56967 = cljs.core.first(cljs.core.deref(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp)));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(0),null);
var listeners = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(1),null);
var listener = cljs.core.peek(listeners);

(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(listeners),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.dissoc,index);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.pop);
}

var G__57199 = tramp;
var G__57200 = found_result_QMARK_;
tramp = G__57199;
found_result_QMARK_ = G__57200;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp);
cljs.core.reset_BANG_(stack,cljs.core.deref(next_stack));

cljs.core.reset_BANG_(next_stack,cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.inc);

var G__57201 = tramp;
var G__57202 = null;
tramp = G__57201;
found_result_QMARK_ = G__57202;
continue;
} else {
return null;

}
}
}
}
break;
}
}));

(instaparse.gll.run.cljs$lang$maxFixedArity = 2);

instaparse.gll.NodeListener = (function instaparse$gll$NodeListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0)))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__56970 = result;
var map__56970__$1 = (((((!((map__56970 == null))))?(((((map__56970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56970):map__56970);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56970__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56970__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__56972 = new_results_so_far;
var G__56973 = cljs.core.next(parser_sequence);
var G__56974 = node_key;
var G__56975 = tramp;
return (instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4(G__56972,G__56973,G__56974,G__56975) : instaparse.gll.CatListener.call(null,G__56972,G__56973,G__56974,G__56975));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__56976 = result;
var map__56976__$1 = (((((!((map__56976 == null))))?(((((map__56976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56976):map__56976);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56976__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56976__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(instaparse.reduction.singleton_QMARK_(parser_sequence)){
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__56978 = new_results_so_far;
var G__56979 = cljs.core.next(parser_sequence);
var G__56980 = node_key;
var G__56981 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__56978,G__56979,G__56980,G__56981) : instaparse.gll.CatFullListener.call(null,G__56978,G__56979,G__56980,G__56981));
})());
} else {
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__56982 = new_results_so_far;
var G__56983 = cljs.core.next(parser_sequence);
var G__56984 = node_key;
var G__56985 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__56982,G__56983,G__56984,G__56985) : instaparse.gll.CatFullListener.call(null,G__56982,G__56983,G__56984,G__56985));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__56986 = result;
var map__56986__$1 = (((((!((map__56986 == null))))?(((((map__56986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56986):map__56986);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56986__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56986__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));

return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__56988 = result;
var map__56988__$1 = (((((!((map__56988 == null))))?(((((map__56988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56988):map__56988);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56988__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56988__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__56990 = result;
var map__56990__$1 = (((((!((map__56990 == null))))?(((((map__56990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56990):map__56990);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56990__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56990__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if((((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n)))){
instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
}

if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__56992 = result;
var map__56992__$1 = (((((!((map__56992 == null))))?(((((map__56992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56992):map__56992);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56992__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56992__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
if((((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepFullListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp),result);
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4276__auto__ = cljs.core.count(text);
var y__4277__auto__ = (index + cljs.core.count(string));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4276__auto__ = cljs.core.count(text);
var y__4277__auto__ = (index + cljs.core.count(string));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4276__auto__ = cljs.core.count(text);
var y__4277__auto__ = (index + cljs.core.count(string));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(instaparse.gll.equals_ignore_case(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4276__auto__ = cljs.core.count(text);
var y__4277__auto__ = (index + cljs.core.count(string));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (instaparse.gll.equals_ignore_case(string,head)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.single_char_code_at = (function instaparse$gll$single_char_code_at(text,index){
return text.charCodeAt(index);
});
instaparse.gll.unicode_code_point_at = (function instaparse$gll$unicode_code_point_at(text,index){
var G__56994 = text;
var G__56995 = (index | (0));
return goog.i18n.uChar.getCodePointAround(G__56994,G__56995);
});
instaparse.gll.code_point__GT_chars = (function instaparse$gll$code_point__GT_chars(code_point){
return goog.i18n.uChar.fromCharCode(code_point);
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if((((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code)),(index + (1))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if((((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,(index + cljs.core.count(char_string))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count(text);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),end)) && ((((lo <= code)) && ((code <= hi)))))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code)),end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + cljs.core.count(char_string)),end)) && ((((lo <= code_point)) && ((code_point <= hi)))))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null),new cljs.core.Keyword(null,"full","full",436801220),true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,["g",instaparse.util.regexp_flags(regexp)].join('')));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__4174__auto__ = m;
if(cljs.core.truth_(and__4174__auto__)){
return (m.index === (0));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.first(m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,(index + cljs.core.count(match))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
var desired_length = (cljs.core.count(text) - index);
if(cljs.core.truth_((function (){var and__4174__auto__ = match;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(match),desired_length);
} else {
return and__4174__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,cljs.core.count(text)));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.cat_parse = (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.cat_full_parse = (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_parse = (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_full_parse = (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.rep_parse = (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.rep_full_parse = (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.star_parse = (function instaparse$gll$star_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.star_full_parse = (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__56996 = cljs.core.seq(parsers);
var chunk__56997 = null;
var count__56998 = (0);
var i__56999 = (0);
while(true){
if((i__56999 < count__56998)){
var parser = chunk__56997.cljs$core$IIndexed$_nth$arity$2(null,i__56999);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__57222 = seq__56996;
var G__57223 = chunk__56997;
var G__57224 = count__56998;
var G__57225 = (i__56999 + (1));
seq__56996 = G__57222;
chunk__56997 = G__57223;
count__56998 = G__57224;
i__56999 = G__57225;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56996);
if(temp__5735__auto__){
var seq__56996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56996__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56996__$1);
var G__57229 = cljs.core.chunk_rest(seq__56996__$1);
var G__57230 = c__4609__auto__;
var G__57231 = cljs.core.count(c__4609__auto__);
var G__57232 = (0);
seq__56996 = G__57229;
chunk__56997 = G__57230;
count__56998 = G__57231;
i__56999 = G__57232;
continue;
} else {
var parser = cljs.core.first(seq__56996__$1);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__57234 = cljs.core.next(seq__56996__$1);
var G__57235 = null;
var G__57236 = (0);
var G__57237 = (0);
seq__56996 = G__57234;
chunk__56997 = G__57235;
count__56998 = G__57236;
i__56999 = G__57237;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.alt_full_parse = (function instaparse$gll$alt_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__57000 = cljs.core.seq(parsers);
var chunk__57001 = null;
var count__57002 = (0);
var i__57003 = (0);
while(true){
if((i__57003 < count__57002)){
var parser = chunk__57001.cljs$core$IIndexed$_nth$arity$2(null,i__57003);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__57239 = seq__57000;
var G__57240 = chunk__57001;
var G__57241 = count__57002;
var G__57242 = (i__57003 + (1));
seq__57000 = G__57239;
chunk__57001 = G__57240;
count__57002 = G__57241;
i__57003 = G__57242;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57000);
if(temp__5735__auto__){
var seq__57000__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57000__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57000__$1);
var G__57244 = cljs.core.chunk_rest(seq__57000__$1);
var G__57245 = c__4609__auto__;
var G__57246 = cljs.core.count(c__4609__auto__);
var G__57247 = (0);
seq__57000 = G__57244;
chunk__57001 = G__57245;
count__57002 = G__57246;
i__57003 = G__57247;
continue;
} else {
var parser = cljs.core.first(seq__57000__$1);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__57248 = cljs.core.next(seq__57000__$1);
var G__57249 = null;
var G__57250 = (0);
var G__57251 = (0);
seq__57000 = G__57248;
chunk__57001 = G__57249;
count__57002 = G__57250;
i__57003 = G__57251;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.ordered_alt_parse = (function instaparse$gll$ordered_alt_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,(function (){
return instaparse.gll.push_listener(tramp,node_key_parser2,listener);
}));
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,(function (){
return instaparse.gll.push_full_listener(tramp,node_key_parser2,listener);
}));
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse(this$,index,tramp);
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387)], null));
} else {
instaparse.gll.push_listener(tramp,node_key,(function (){var fail_send = (new cljs.core.Delay((function (){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NOT","NOT",-1689245341),instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)], null)], null));
}),null));
return (function (result){
return cljs.core.force(fail_send);
});
})());

return instaparse.gll.push_negative_listener(tramp,node_key,(function (){
if(cljs.core.not(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return null;
}
}));
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"Epsilon","Epsilon",133418452),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
} else {
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5733__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5733__auto__)){
var all_parses = temp__5733__auto__;
return all_parses;
} else {
return cljs.core.with_meta(cljs.core.List.EMPTY,instaparse.failure.augment_failure(cljs.core.deref(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp)),text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5733__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5733__auto__)){
var all_parses = temp__5733__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.failure.augment_failure(cljs.core.deref(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp)),text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta((node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(tag,content) : node_builder.call(null,tag,content)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),start,new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta(node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),text,(0),cljs.core.count(text));
var build_start_node = instaparse.gll.build_node_with_meta(node_builder,start,build_failure_node,(0),cljs.core.count(text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5733__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5733__auto__)){
var all_parses = temp__5733__auto__;
return all_parses;
} else {
return (new cljs.core.List(null,instaparse.gll.build_total_failure_node(node_builder,start,text),null,(1),null));
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metamap,cljs.core.meta(obj)], 0)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses(grammar,start,text,partial_QMARK_);
if(cljs.core.seq(all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parses_total_after_fail(grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(all_parses)),partial_QMARK_,node_builder),cljs.core.meta(all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5733__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5733__auto__)){
var all_parses = temp__5733__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.gll.build_total_failure_node(node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse(grammar,start,text,partial_QMARK_);
if((!((result instanceof instaparse.gll.Failure)))){
return result;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parse_total_after_fail(grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});

//# sourceMappingURL=instaparse.gll.js.map
