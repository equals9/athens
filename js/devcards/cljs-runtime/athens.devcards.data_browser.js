goog.provide('athens.devcards.data_browser');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('garden.color');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.data_browser.attr_unique_QMARK_ = (function athens$devcards$data_browser$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.devcards.data_browser.attr_many_QMARK_ = (function athens$devcards$data_browser$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.devcards.data_browser.attr_ref_QMARK_ = (function athens$devcards$data_browser$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.devcards.data_browser.attr_reverse_QMARK_ = (function athens$devcards$data_browser$attr_reverse_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return clojure.string.starts_with_QMARK_(cljs.core.name(attr),"_");
} else {
return null;
}
});
athens.devcards.data_browser.headings = (function athens$devcards$data_browser$headings(data,mode){
var G__57991 = mode;
var G__57991__$1 = (((G__57991 instanceof cljs.core.Keyword))?G__57991.fqn:null);
switch (G__57991__$1) {
case "coll":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","val"], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","val"], null);

break;
case "tuples":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,data))));

break;
case "maps":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57991__$1)].join('')));

}
});
athens.devcards.data_browser.coll_rows = (function athens$devcards$data_browser$coll_rows(coll){
var row = (function (p__57992){
var vec__57993 = p__57992;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57993,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57993,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.data_browser.reverse_refs_for_attr = (function athens$devcards$data_browser$reverse_refs_for_attr(attr,eid){
var G__57996 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__57997 = cljs.core.deref(athens.db.dsdb);
var G__57998 = attr;
var G__57999 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__57996,G__57997,G__57998,G__57999) : datascript.core.q.call(null,G__57996,G__57997,G__57998,G__57999));
});
athens.devcards.data_browser.reverse_attr = (function athens$devcards$data_browser$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.data_browser.wrap_with_db_id = (function athens$devcards$data_browser$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.data_browser.reverse_refs = (function athens$devcards$data_browser$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$reverse_refs_$_iter__58000(s__58001){
return (new cljs.core.LazySeq(null,(function (){
var s__58001__$1 = s__58001;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58001__$1);
if(temp__5735__auto__){
var s__58001__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58001__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58001__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58003 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58002 = (0);
while(true){
if((i__58002 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58002);
cljs.core.chunk_append(b__58003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.wrap_with_db_id,athens.devcards.data_browser.reverse_refs_for_attr(attr,eid))], null));

var G__58071 = (i__58002 + (1));
i__58002 = G__58071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58003),athens$devcards$data_browser$reverse_refs_$_iter__58000(cljs.core.chunk_rest(s__58001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58003),null);
}
} else {
var attr = cljs.core.first(s__58001__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.wrap_with_db_id,athens.devcards.data_browser.reverse_refs_for_attr(attr,eid))], null),athens$devcards$data_browser$reverse_refs_$_iter__58000(cljs.core.rest(s__58001__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_attrs);
})());
});
athens.devcards.data_browser.reverse_rows = (function athens$devcards$data_browser$reverse_rows(p__58010){
var map__58011 = p__58010;
var map__58011__$1 = (((((!((map__58011 == null))))?(((((map__58011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58011):map__58011);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58011__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.data_browser.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.data_browser.map_rows = (function athens$devcards$data_browser$map_rows(m){
var row = (function (p__58013){
var vec__58014 = p__58013;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58014,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.data_browser.reverse_rows(m)));
});
athens.devcards.data_browser.tuple_rows = (function athens$devcards$data_browser$tuple_rows(tuples){
var row = (function (p__58017){
var vec__58018 = p__58017;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58018,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58018,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.data_browser.maps_rows = (function athens$devcards$data_browser$maps_rows(ms){
var hs = athens.devcards.data_browser.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$data_browser$maps_rows_$_iter__58021(s__58022){
return (new cljs.core.LazySeq(null,(function (){
var s__58022__$1 = s__58022;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58022__$1);
if(temp__5735__auto__){
var s__58022__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58022__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58022__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58024 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58023 = (0);
while(true){
if((i__58023 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58023);
cljs.core.chunk_append(b__58024,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__58023,idx,c__4580__auto__,size__4581__auto__,b__58024,s__58022__$2,temp__5735__auto__,hs){
return (function athens$devcards$data_browser$maps_rows_$_iter__58021_$_iter__58025(s__58026){
return (new cljs.core.LazySeq(null,((function (i__58023,idx,c__4580__auto__,size__4581__auto__,b__58024,s__58022__$2,temp__5735__auto__,hs){
return (function (){
var s__58026__$1 = s__58026;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58026__$1);
if(temp__5735__auto____$1){
var s__58026__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58026__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58026__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58028 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58027 = (0);
while(true){
if((i__58027 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58027);
cljs.core.chunk_append(b__58028,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58072 = (i__58027 + (1));
i__58027 = G__58072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58028),athens$devcards$data_browser$maps_rows_$_iter__58021_$_iter__58025(cljs.core.chunk_rest(s__58026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58028),null);
}
} else {
var h = cljs.core.first(s__58026__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$data_browser$maps_rows_$_iter__58021_$_iter__58025(cljs.core.rest(s__58026__$2)));
}
} else {
return null;
}
break;
}
});})(i__58023,idx,c__4580__auto__,size__4581__auto__,b__58024,s__58022__$2,temp__5735__auto__,hs))
,null,null));
});})(i__58023,idx,c__4580__auto__,size__4581__auto__,b__58024,s__58022__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__58073 = (i__58023 + (1));
i__58023 = G__58073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58024),athens$devcards$data_browser$maps_rows_$_iter__58021(cljs.core.chunk_rest(s__58022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58024),null);
}
} else {
var idx = cljs.core.first(s__58022__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__58022__$2,temp__5735__auto__,hs){
return (function athens$devcards$data_browser$maps_rows_$_iter__58021_$_iter__58029(s__58030){
return (new cljs.core.LazySeq(null,(function (){
var s__58030__$1 = s__58030;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58030__$1);
if(temp__5735__auto____$1){
var s__58030__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58030__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58030__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58032 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58031 = (0);
while(true){
if((i__58031 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58031);
cljs.core.chunk_append(b__58032,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58074 = (i__58031 + (1));
i__58031 = G__58074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58032),athens$devcards$data_browser$maps_rows_$_iter__58021_$_iter__58029(cljs.core.chunk_rest(s__58030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58032),null);
}
} else {
var h = cljs.core.first(s__58030__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$data_browser$maps_rows_$_iter__58021_$_iter__58029(cljs.core.rest(s__58030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__58022__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$data_browser$maps_rows_$_iter__58021(cljs.core.rest(s__58022__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms)));
});
athens.devcards.data_browser.get_rows = (function athens$devcards$data_browser$get_rows(data,mode){
var G__58033 = mode;
var G__58033__$1 = (((G__58033 instanceof cljs.core.Keyword))?G__58033.fqn:null);
switch (G__58033__$1) {
case "coll":
return athens.devcards.data_browser.coll_rows(data);

break;
case "map":
return athens.devcards.data_browser.map_rows(data);

break;
case "tuples":
return athens.devcards.data_browser.tuple_rows(data);

break;
case "maps":
return athens.devcards.data_browser.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58033__$1)].join('')));

}
});
athens.devcards.data_browser.cell = (function athens$devcards$data_browser$cell(p__58034){
var map__58035 = p__58034;
var map__58035__$1 = (((((!((map__58035 == null))))?(((((map__58035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58035):map__58035);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58035__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
});
athens.devcards.data_browser.table_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),garden.color.opacify(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.data_browser.footer_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null)], null);
athens.devcards.data_browser.table_view = (function athens$devcards$data_browser$table_view(data,mode,limit,p__58037){
var map__58038 = p__58037;
var map__58038__$1 = (((((!((map__58038 == null))))?(((((map__58038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58038):map__58038);
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58038__$1,new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.data_browser.cell);
var hs = athens.devcards.data_browser.headings(data,mode);
var rows = athens.devcards.data_browser.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.data_browser.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$table_view_$_iter__58040(s__58041){
return (new cljs.core.LazySeq(null,(function (){
var s__58041__$1 = s__58041;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58041__$1);
if(temp__5735__auto__){
var s__58041__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58041__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58041__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58043 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58042 = (0);
while(true){
if((i__58042 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58042);
cljs.core.chunk_append(b__58043,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__58076 = (i__58042 + (1));
i__58042 = G__58076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58043),athens$devcards$data_browser$table_view_$_iter__58040(cljs.core.chunk_rest(s__58041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58043),null);
}
} else {
var h = cljs.core.first(s__58041__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__58040(cljs.core.rest(s__58041__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$table_view_$_iter__58044(s__58045){
return (new cljs.core.LazySeq(null,(function (){
var s__58045__$1 = s__58045;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58045__$1);
if(temp__5735__auto__){
var s__58045__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58045__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58045__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58047 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58046 = (0);
while(true){
if((i__58046 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58046);
cljs.core.chunk_append(b__58047,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__58046,row,c__4580__auto__,size__4581__auto__,b__58047,s__58045__$2,temp__5735__auto__,hs,rows,map__58038,map__58038__$1,cell_fn){
return (function athens$devcards$data_browser$table_view_$_iter__58044_$_iter__58048(s__58049){
return (new cljs.core.LazySeq(null,((function (i__58046,row,c__4580__auto__,size__4581__auto__,b__58047,s__58045__$2,temp__5735__auto__,hs,rows,map__58038,map__58038__$1,cell_fn){
return (function (){
var s__58049__$1 = s__58049;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58049__$1);
if(temp__5735__auto____$1){
var s__58049__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58049__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58049__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58051 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58050 = (0);
while(true){
if((i__58050 < size__4581__auto____$1)){
var map__58052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58050);
var map__58052__$1 = (((((!((map__58052 == null))))?(((((map__58052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58052):map__58052);
var c = map__58052__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58051,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58077 = (i__58050 + (1));
i__58050 = G__58077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58051),athens$devcards$data_browser$table_view_$_iter__58044_$_iter__58048(cljs.core.chunk_rest(s__58049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58051),null);
}
} else {
var map__58054 = cljs.core.first(s__58049__$2);
var map__58054__$1 = (((((!((map__58054 == null))))?(((((map__58054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58054):map__58054);
var c = map__58054__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__58044_$_iter__58048(cljs.core.rest(s__58049__$2)));
}
} else {
return null;
}
break;
}
});})(i__58046,row,c__4580__auto__,size__4581__auto__,b__58047,s__58045__$2,temp__5735__auto__,hs,rows,map__58038,map__58038__$1,cell_fn))
,null,null));
});})(i__58046,row,c__4580__auto__,size__4581__auto__,b__58047,s__58045__$2,temp__5735__auto__,hs,rows,map__58038,map__58038__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__58078 = (i__58046 + (1));
i__58046 = G__58078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58047),athens$devcards$data_browser$table_view_$_iter__58044(cljs.core.chunk_rest(s__58045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58047),null);
}
} else {
var row = cljs.core.first(s__58045__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__58045__$2,temp__5735__auto__,hs,rows,map__58038,map__58038__$1,cell_fn){
return (function athens$devcards$data_browser$table_view_$_iter__58044_$_iter__58056(s__58057){
return (new cljs.core.LazySeq(null,(function (){
var s__58057__$1 = s__58057;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58057__$1);
if(temp__5735__auto____$1){
var s__58057__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58057__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58057__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58059 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58058 = (0);
while(true){
if((i__58058 < size__4581__auto__)){
var map__58060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58058);
var map__58060__$1 = (((((!((map__58060 == null))))?(((((map__58060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58060):map__58060);
var c = map__58060__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58060__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58060__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58059,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58079 = (i__58058 + (1));
i__58058 = G__58079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58059),athens$devcards$data_browser$table_view_$_iter__58044_$_iter__58056(cljs.core.chunk_rest(s__58057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58059),null);
}
} else {
var map__58062 = cljs.core.first(s__58057__$2);
var map__58062__$1 = (((((!((map__58062 == null))))?(((((map__58062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58062):map__58062);
var c = map__58062__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58062__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58062__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__58044_$_iter__58056(cljs.core.rest(s__58057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__58045__$2,temp__5735__auto__,hs,rows,map__58038,map__58038__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$data_browser$table_view_$_iter__58044(cljs.core.rest(s__58045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"map","map",1371690461)))?rows:cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,rows)));
})()], null)], null)], null);
});
athens.devcards.data_browser.coll_of_maps_QMARK_ = (function athens$devcards$data_browser$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.associative_QMARK_,x)) && ((!(cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)))));
});
athens.devcards.data_browser.tuples_QMARK_ = (function athens$devcards$data_browser$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)));
});
athens.devcards.data_browser.browser = (function athens$devcards$data_browser$browser(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58080 = arguments.length;
var i__4790__auto___58081 = (0);
while(true){
if((i__4790__auto___58081 < len__4789__auto___58080)){
args__4795__auto__.push((arguments[i__4790__auto___58081]));

var G__58082 = (i__4790__auto___58081 + (1));
i__4790__auto___58081 = G__58082;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.devcards.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.devcards.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic = (function (_,p__58066){
var vec__58067 = p__58066;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(0),null);
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
var increase_limit = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
});
return (function() { 
var G__58083__delegate = function (result,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.data_browser.coll_of_maps_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.deref(limit),opts):((((cljs.core.associative_QMARK_(result)) && ((!(cljs.core.sequential_QMARK_(result))))))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref(limit),opts):((athens.devcards.data_browser.tuples_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.deref(limit),opts):((cljs.core.coll_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.deref(limit),opts):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.data_browser.footer_style),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((cljs.core.deref(limit) < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(limit))," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increase_limit,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
};
var G__58083 = function (result,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__58084__i = 0, G__58084__a = new Array(arguments.length -  1);
while (G__58084__i < G__58084__a.length) {G__58084__a[G__58084__i] = arguments[G__58084__i + 1]; ++G__58084__i;}
  ___$1 = new cljs.core.IndexedSeq(G__58084__a,0,null);
} 
return G__58083__delegate.call(this,result,___$1);};
G__58083.cljs$lang$maxFixedArity = 1;
G__58083.cljs$lang$applyTo = (function (arglist__58085){
var result = cljs.core.first(arglist__58085);
var ___$1 = cljs.core.rest(arglist__58085);
return G__58083__delegate(result,___$1);
});
G__58083.cljs$core$IFn$_invoke$arity$variadic = G__58083__delegate;
return G__58083;
})()
;
}));

(athens.devcards.data_browser.browser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.devcards.data_browser.browser.cljs$lang$applyTo = (function (seq58064){
var G__58065 = cljs.core.first(seq58064);
var seq58064__$1 = cljs.core.next(seq58064);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58065,seq58064__$1);
}));


//# sourceMappingURL=athens.devcards.data_browser.js.map
