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
var G__58019 = mode;
var G__58019__$1 = (((G__58019 instanceof cljs.core.Keyword))?G__58019.fqn:null);
switch (G__58019__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58019__$1)].join('')));

}
});
athens.devcards.data_browser.coll_rows = (function athens$devcards$data_browser$coll_rows(coll){
var row = (function (p__58020){
var vec__58021 = p__58020;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58021,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.data_browser.reverse_refs_for_attr = (function athens$devcards$data_browser$reverse_refs_for_attr(attr,eid){
var G__58024 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__58025 = cljs.core.deref(athens.db.dsdb);
var G__58026 = attr;
var G__58027 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__58024,G__58025,G__58026,G__58027) : datascript.core.q.call(null,G__58024,G__58025,G__58026,G__58027));
});
athens.devcards.data_browser.reverse_attr = (function athens$devcards$data_browser$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.data_browser.wrap_with_db_id = (function athens$devcards$data_browser$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.data_browser.reverse_refs = (function athens$devcards$data_browser$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$reverse_refs_$_iter__58031(s__58032){
return (new cljs.core.LazySeq(null,(function (){
var s__58032__$1 = s__58032;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58032__$1);
if(temp__5735__auto__){
var s__58032__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58032__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58032__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58034 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58033 = (0);
while(true){
if((i__58033 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58033);
cljs.core.chunk_append(b__58034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.wrap_with_db_id,athens.devcards.data_browser.reverse_refs_for_attr(attr,eid))], null));

var G__58105 = (i__58033 + (1));
i__58033 = G__58105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58034),athens$devcards$data_browser$reverse_refs_$_iter__58031(cljs.core.chunk_rest(s__58032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58034),null);
}
} else {
var attr = cljs.core.first(s__58032__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.wrap_with_db_id,athens.devcards.data_browser.reverse_refs_for_attr(attr,eid))], null),athens$devcards$data_browser$reverse_refs_$_iter__58031(cljs.core.rest(s__58032__$2)));
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
athens.devcards.data_browser.reverse_rows = (function athens$devcards$data_browser$reverse_rows(p__58035){
var map__58036 = p__58035;
var map__58036__$1 = (((((!((map__58036 == null))))?(((((map__58036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58036):map__58036);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58036__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.data_browser.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.data_browser.map_rows = (function athens$devcards$data_browser$map_rows(m){
var row = (function (p__58041){
var vec__58042 = p__58041;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58042,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.data_browser.reverse_rows(m)));
});
athens.devcards.data_browser.tuple_rows = (function athens$devcards$data_browser$tuple_rows(tuples){
var row = (function (p__58045){
var vec__58046 = p__58045;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58046,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58046,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.data_browser.maps_rows = (function athens$devcards$data_browser$maps_rows(ms){
var hs = athens.devcards.data_browser.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$data_browser$maps_rows_$_iter__58049(s__58050){
return (new cljs.core.LazySeq(null,(function (){
var s__58050__$1 = s__58050;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58050__$1);
if(temp__5735__auto__){
var s__58050__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58050__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58050__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58052 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58051 = (0);
while(true){
if((i__58051 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58051);
cljs.core.chunk_append(b__58052,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__58051,idx,c__4580__auto__,size__4581__auto__,b__58052,s__58050__$2,temp__5735__auto__,hs){
return (function athens$devcards$data_browser$maps_rows_$_iter__58049_$_iter__58053(s__58054){
return (new cljs.core.LazySeq(null,((function (i__58051,idx,c__4580__auto__,size__4581__auto__,b__58052,s__58050__$2,temp__5735__auto__,hs){
return (function (){
var s__58054__$1 = s__58054;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58054__$1);
if(temp__5735__auto____$1){
var s__58054__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58054__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58054__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58056 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58055 = (0);
while(true){
if((i__58055 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58055);
cljs.core.chunk_append(b__58056,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58106 = (i__58055 + (1));
i__58055 = G__58106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58056),athens$devcards$data_browser$maps_rows_$_iter__58049_$_iter__58053(cljs.core.chunk_rest(s__58054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58056),null);
}
} else {
var h = cljs.core.first(s__58054__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$data_browser$maps_rows_$_iter__58049_$_iter__58053(cljs.core.rest(s__58054__$2)));
}
} else {
return null;
}
break;
}
});})(i__58051,idx,c__4580__auto__,size__4581__auto__,b__58052,s__58050__$2,temp__5735__auto__,hs))
,null,null));
});})(i__58051,idx,c__4580__auto__,size__4581__auto__,b__58052,s__58050__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__58107 = (i__58051 + (1));
i__58051 = G__58107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58052),athens$devcards$data_browser$maps_rows_$_iter__58049(cljs.core.chunk_rest(s__58050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58052),null);
}
} else {
var idx = cljs.core.first(s__58050__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__58050__$2,temp__5735__auto__,hs){
return (function athens$devcards$data_browser$maps_rows_$_iter__58049_$_iter__58063(s__58064){
return (new cljs.core.LazySeq(null,(function (){
var s__58064__$1 = s__58064;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58064__$1);
if(temp__5735__auto____$1){
var s__58064__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58064__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58064__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58066 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58065 = (0);
while(true){
if((i__58065 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58065);
cljs.core.chunk_append(b__58066,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58108 = (i__58065 + (1));
i__58065 = G__58108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58066),athens$devcards$data_browser$maps_rows_$_iter__58049_$_iter__58063(cljs.core.chunk_rest(s__58064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58066),null);
}
} else {
var h = cljs.core.first(s__58064__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$data_browser$maps_rows_$_iter__58049_$_iter__58063(cljs.core.rest(s__58064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__58050__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$data_browser$maps_rows_$_iter__58049(cljs.core.rest(s__58050__$2)));
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
var G__58067 = mode;
var G__58067__$1 = (((G__58067 instanceof cljs.core.Keyword))?G__58067.fqn:null);
switch (G__58067__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58067__$1)].join('')));

}
});
athens.devcards.data_browser.cell = (function athens$devcards$data_browser$cell(p__58068){
var map__58069 = p__58068;
var map__58069__$1 = (((((!((map__58069 == null))))?(((((map__58069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58069):map__58069);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
});
athens.devcards.data_browser.table_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),garden.color.opacify(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.data_browser.footer_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null)], null);
athens.devcards.data_browser.table_view = (function athens$devcards$data_browser$table_view(data,mode,limit,p__58071){
var map__58072 = p__58071;
var map__58072__$1 = (((((!((map__58072 == null))))?(((((map__58072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58072):map__58072);
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58072__$1,new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.data_browser.cell);
var hs = athens.devcards.data_browser.headings(data,mode);
var rows = athens.devcards.data_browser.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.data_browser.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$table_view_$_iter__58074(s__58075){
return (new cljs.core.LazySeq(null,(function (){
var s__58075__$1 = s__58075;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58075__$1);
if(temp__5735__auto__){
var s__58075__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58075__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58075__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58077 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58076 = (0);
while(true){
if((i__58076 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58076);
cljs.core.chunk_append(b__58077,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__58110 = (i__58076 + (1));
i__58076 = G__58110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58077),athens$devcards$data_browser$table_view_$_iter__58074(cljs.core.chunk_rest(s__58075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58077),null);
}
} else {
var h = cljs.core.first(s__58075__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__58074(cljs.core.rest(s__58075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$table_view_$_iter__58078(s__58079){
return (new cljs.core.LazySeq(null,(function (){
var s__58079__$1 = s__58079;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58079__$1);
if(temp__5735__auto__){
var s__58079__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58079__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58079__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58081 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58080 = (0);
while(true){
if((i__58080 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58080);
cljs.core.chunk_append(b__58081,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__58080,row,c__4580__auto__,size__4581__auto__,b__58081,s__58079__$2,temp__5735__auto__,hs,rows,map__58072,map__58072__$1,cell_fn){
return (function athens$devcards$data_browser$table_view_$_iter__58078_$_iter__58082(s__58083){
return (new cljs.core.LazySeq(null,((function (i__58080,row,c__4580__auto__,size__4581__auto__,b__58081,s__58079__$2,temp__5735__auto__,hs,rows,map__58072,map__58072__$1,cell_fn){
return (function (){
var s__58083__$1 = s__58083;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58083__$1);
if(temp__5735__auto____$1){
var s__58083__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58083__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58083__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58085 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58084 = (0);
while(true){
if((i__58084 < size__4581__auto____$1)){
var map__58086 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58084);
var map__58086__$1 = (((((!((map__58086 == null))))?(((((map__58086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58086):map__58086);
var c = map__58086__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58086__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58086__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58085,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58111 = (i__58084 + (1));
i__58084 = G__58111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58085),athens$devcards$data_browser$table_view_$_iter__58078_$_iter__58082(cljs.core.chunk_rest(s__58083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58085),null);
}
} else {
var map__58088 = cljs.core.first(s__58083__$2);
var map__58088__$1 = (((((!((map__58088 == null))))?(((((map__58088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58088):map__58088);
var c = map__58088__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58088__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58088__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__58078_$_iter__58082(cljs.core.rest(s__58083__$2)));
}
} else {
return null;
}
break;
}
});})(i__58080,row,c__4580__auto__,size__4581__auto__,b__58081,s__58079__$2,temp__5735__auto__,hs,rows,map__58072,map__58072__$1,cell_fn))
,null,null));
});})(i__58080,row,c__4580__auto__,size__4581__auto__,b__58081,s__58079__$2,temp__5735__auto__,hs,rows,map__58072,map__58072__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__58112 = (i__58080 + (1));
i__58080 = G__58112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58081),athens$devcards$data_browser$table_view_$_iter__58078(cljs.core.chunk_rest(s__58079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58081),null);
}
} else {
var row = cljs.core.first(s__58079__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__58079__$2,temp__5735__auto__,hs,rows,map__58072,map__58072__$1,cell_fn){
return (function athens$devcards$data_browser$table_view_$_iter__58078_$_iter__58090(s__58091){
return (new cljs.core.LazySeq(null,(function (){
var s__58091__$1 = s__58091;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58091__$1);
if(temp__5735__auto____$1){
var s__58091__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58091__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58091__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58093 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58092 = (0);
while(true){
if((i__58092 < size__4581__auto__)){
var map__58094 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58092);
var map__58094__$1 = (((((!((map__58094 == null))))?(((((map__58094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58094):map__58094);
var c = map__58094__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58093,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58113 = (i__58092 + (1));
i__58092 = G__58113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58093),athens$devcards$data_browser$table_view_$_iter__58078_$_iter__58090(cljs.core.chunk_rest(s__58091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58093),null);
}
} else {
var map__58096 = cljs.core.first(s__58091__$2);
var map__58096__$1 = (((((!((map__58096 == null))))?(((((map__58096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58096):map__58096);
var c = map__58096__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58096__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58096__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__58078_$_iter__58090(cljs.core.rest(s__58091__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__58079__$2,temp__5735__auto__,hs,rows,map__58072,map__58072__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$data_browser$table_view_$_iter__58078(cljs.core.rest(s__58079__$2)));
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
var len__4789__auto___58114 = arguments.length;
var i__4790__auto___58115 = (0);
while(true){
if((i__4790__auto___58115 < len__4789__auto___58114)){
args__4795__auto__.push((arguments[i__4790__auto___58115]));

var G__58116 = (i__4790__auto___58115 + (1));
i__4790__auto___58115 = G__58116;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.devcards.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.devcards.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic = (function (_,p__58100){
var vec__58101 = p__58100;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58101,(0),null);
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
var increase_limit = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
});
return (function() { 
var G__58117__delegate = function (result,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.data_browser.coll_of_maps_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.deref(limit),opts):((((cljs.core.associative_QMARK_(result)) && ((!(cljs.core.sequential_QMARK_(result))))))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref(limit),opts):((athens.devcards.data_browser.tuples_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.deref(limit),opts):((cljs.core.coll_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.deref(limit),opts):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.data_browser.footer_style),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((cljs.core.deref(limit) < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(limit))," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increase_limit,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
};
var G__58117 = function (result,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__58118__i = 0, G__58118__a = new Array(arguments.length -  1);
while (G__58118__i < G__58118__a.length) {G__58118__a[G__58118__i] = arguments[G__58118__i + 1]; ++G__58118__i;}
  ___$1 = new cljs.core.IndexedSeq(G__58118__a,0,null);
} 
return G__58117__delegate.call(this,result,___$1);};
G__58117.cljs$lang$maxFixedArity = 1;
G__58117.cljs$lang$applyTo = (function (arglist__58119){
var result = cljs.core.first(arglist__58119);
var ___$1 = cljs.core.rest(arglist__58119);
return G__58117__delegate(result,___$1);
});
G__58117.cljs$core$IFn$_invoke$arity$variadic = G__58117__delegate;
return G__58117;
})()
;
}));

(athens.devcards.data_browser.browser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.devcards.data_browser.browser.cljs$lang$applyTo = (function (seq58098){
var G__58099 = cljs.core.first(seq58098);
var seq58098__$1 = cljs.core.next(seq58098);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58099,seq58098__$1);
}));


//# sourceMappingURL=athens.devcards.data_browser.js.map
