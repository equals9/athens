goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if(((typeof eid === 'number') || (cljs.core.sequential_QMARK_(eid)) || ((eid instanceof cljs.core.Keyword)))){
return datascript.db.entid(db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5735__auto__ = datascript.impl.entity.entid(db,eid);
if(cljs.core.truth_(temp__5735__auto__)){
var e = temp__5735__auto__;
var G__42469 = db;
var G__42470 = e;
var G__42471 = cljs.core.volatile_BANG_(false);
var G__42472 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__42469,G__42470,G__42471,G__42472) : datascript.impl.entity.__GT_Entity.call(null,G__42469,G__42470,G__42471,G__42472));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42473_SHARP_,p2__42474_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__42473_SHARP_,datascript.impl.entity.entity(db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__42474_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42475_SHARP_,p2__42476_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__42475_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__42476_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_(db,a)){
return datascript.impl.entity.entity(db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__5733__auto__ = cljs.core.not_empty(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__5733__auto__)){
var datoms = temp__5733__auto__;
if(datascript.db.component_QMARK_(db,attr)){
return datascript.impl.entity.entity(db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42477_SHARP_,p2__42478_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__42477_SHARP_,datascript.impl.entity.entity(db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__42478_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array(val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(e) : datascript.impl.entity.touch.call(null,e));

var iter__4582__auto__ = (function datascript$impl$entity$js_seq_$_iter__42481(s__42482){
return (new cljs.core.LazySeq(null,(function (){
var s__42482__$1 = s__42482;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42482__$1);
if(temp__5735__auto__){
var s__42482__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42482__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42482__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42484 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42483 = (0);
while(true){
if((i__42483 < size__4581__auto__)){
var vec__42488 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42483);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42488,(1),null);
cljs.core.chunk_append(b__42484,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__42604 = (i__42483 + (1));
i__42483 = G__42604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42484),datascript$impl$entity$js_seq_$_iter__42481(cljs.core.chunk_rest(s__42482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42484),null);
}
} else {
var vec__42497 = cljs.core.first(s__42482__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42497,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__42481(cljs.core.rest(s__42482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__42614 = null;
var G__42614__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__42503 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__42504 = null;
var count__42505 = (0);
var i__42506 = (0);
while(true){
if((i__42506 < count__42505)){
var vec__42513 = chunk__42504.cljs$core$IIndexed$_nth$arity$2(null,i__42506);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42513,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));


var G__42626 = seq__42503;
var G__42627 = chunk__42504;
var G__42628 = count__42505;
var G__42629 = (i__42506 + (1));
seq__42503 = G__42626;
chunk__42504 = G__42627;
count__42505 = G__42628;
i__42506 = G__42629;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42503);
if(temp__5735__auto__){
var seq__42503__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42503__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42503__$1);
var G__42630 = cljs.core.chunk_rest(seq__42503__$1);
var G__42631 = c__4609__auto__;
var G__42632 = cljs.core.count(c__4609__auto__);
var G__42633 = (0);
seq__42503 = G__42630;
chunk__42504 = G__42631;
count__42505 = G__42632;
i__42506 = G__42633;
continue;
} else {
var vec__42516 = cljs.core.first(seq__42503__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42516,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));


var G__42639 = cljs.core.next(seq__42503__$1);
var G__42640 = null;
var G__42641 = (0);
var G__42642 = (0);
seq__42503 = G__42639;
chunk__42504 = G__42640;
count__42505 = G__42641;
i__42506 = G__42642;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__42614__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__42519 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__42520 = null;
var count__42521 = (0);
var i__42522 = (0);
while(true){
if((i__42522 < count__42521)){
var vec__42529 = chunk__42520.cljs$core$IIndexed$_nth$arity$2(null,i__42522);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42529,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42529,(1),null);
f.call(use_as_this,v,a,this$);


var G__42647 = seq__42519;
var G__42648 = chunk__42520;
var G__42649 = count__42521;
var G__42650 = (i__42522 + (1));
seq__42519 = G__42647;
chunk__42520 = G__42648;
count__42521 = G__42649;
i__42522 = G__42650;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42519);
if(temp__5735__auto__){
var seq__42519__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42519__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42519__$1);
var G__42653 = cljs.core.chunk_rest(seq__42519__$1);
var G__42654 = c__4609__auto__;
var G__42655 = cljs.core.count(c__4609__auto__);
var G__42656 = (0);
seq__42519 = G__42653;
chunk__42520 = G__42654;
count__42521 = G__42655;
i__42522 = G__42656;
continue;
} else {
var vec__42532 = cljs.core.first(seq__42519__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42532,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42532,(1),null);
f.call(use_as_this,v,a,this$);


var G__42661 = cljs.core.next(seq__42519__$1);
var G__42662 = null;
var G__42663 = (0);
var G__42664 = (0);
seq__42519 = G__42661;
chunk__42520 = G__42662;
count__42521 = G__42663;
i__42522 = G__42664;
continue;
}
} else {
return null;
}
}
break;
}
});
G__42614 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__42614__1.call(this,f);
case 2:
return G__42614__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42614.cljs$core$IFn$_invoke$arity$1 = G__42614__1;
G__42614.cljs$core$IFn$_invoke$arity$2 = G__42614__2;
return G__42614;
})()
);

(datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,datascript.db.reverse_ref(attr),null));
} else {
var G__42535 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__42535);
} else {
return G__42535;
}
}
}
}));

(datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(this$));
}));

(datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
}));

(datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
}));

(datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$,other) : datascript.impl.entity.equiv_entity.call(null,this$,other));
}));

(datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return (!((this$.get(attr) == null)));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,not_found) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.count(cljs.core.deref(self__.cache));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.eid);
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$__$1,o) : datascript.impl.entity.equiv_entity.call(null,this$__$1,o));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),(function (){var G__42536 = this$__$1;
var G__42537 = k;
var G__42538 = new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353);
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__42536,G__42537,G__42538) : datascript.impl.entity.lookup_entity.call(null,G__42536,G__42537,G__42538));
})());
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.seq(cljs.core.deref(self__.cache));
}));

(datascript.impl.entity.Entity.prototype.call = (function (unused__10555__auto__){
var self__ = this;
var self__ = this;
var G__42539 = (arguments.length - (1));
switch (G__42539) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(datascript.impl.entity.Entity.prototype.apply = (function (self__,args42502){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42502)));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
}));

(datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
}));

(datascript.impl.entity.Entity.cljs$lang$type = true);

(datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity");

(datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"datascript.impl.entity/Entity");
}));

/**
 * Positional factory function for datascript.impl.entity/Entity.
 */
datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return (((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.eid,that.eid)));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var G__42541 = arguments.length;
switch (G__42541) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,attr,null);
}));

(datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity._lookup_backwards(this$.db,this$.eid,datascript.db.reverse_ref(attr),not_found);
} else {
var temp__5737__auto__ = (function (){var fexpr__42542 = cljs.core.deref(this$.cache);
return (fexpr__42542.cljs$core$IFn$_invoke$arity$1 ? fexpr__42542.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__42542.call(null,attr));
})();
if((temp__5737__auto__ == null)){
if(cljs.core.truth_(cljs.core.deref(this$.touched))){
return not_found;
} else {
var temp__5737__auto____$1 = cljs.core.not_empty(datascript.db._search(this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if((temp__5737__auto____$1 == null)){
return not_found;
} else {
var datoms = temp__5737__auto____$1;
var value = datascript.impl.entity.entity_attr(this$.db,attr,datoms);
cljs.core.vreset_BANG_(this$.cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(this$.cache),attr,value));

return value;
}
}
} else {
var v = temp__5737__auto__;
return v;
}
}
}
}));

(datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3);

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv((function (acc,a,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,((datascript.db.component_QMARK_(db,a))?((datascript.db.multival_QMARK_(db,a))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.touch,v)):(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(v) : datascript.impl.entity.touch.call(null,v))):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(datascript.impl.entity.entity_QMARK_(e)){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref(e.touched))){
} else {
var temp__5735__auto___42721 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5735__auto___42721)){
var datoms_42722 = temp__5735__auto___42721;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_42722)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity",datascript.impl.entity.Entity);

//# sourceMappingURL=datascript.impl.entity.js.map
