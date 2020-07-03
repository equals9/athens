goog.provide('athens.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tick.alpha.api');
goog.require('tick.locale_en_us');
athens.util.gen_block_uid = (function athens$util$gen_block_uid(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(27));
});
athens.util.now_ts = (function athens$util$now_ts(){
return (new Date()).getTime();
});
athens.util.US_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("MM-dd-yyyy");
athens.util.title_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy");
athens.util.date_string = (function athens$util$date_string(ts){
if((ts < (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(unknown date)"], null);
} else {
var x = (new Date(ts));
var x__$1 = tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1(x);
var x__$2 = tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1(x__$1);
var x__$3 = tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL MM, yyyy h':'ma"),x__$2);
var x__$4 = clojure.string.replace(x__$3,/AM/,"am");
return clojure.string.replace(x__$4,/PM/,"pm");
}
});
/**
 * Returns today's date or a date OFFSET days before today
 */
athens.util.get_day = (function athens$util$get_day(var_args){
var G__55709 = arguments.length;
switch (G__55709) {
case 0:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.util.get_day.cljs$core$IFn$_invoke$arity$0 = (function (){
return athens.util.get_day.cljs$core$IFn$_invoke$arity$1((0));
}));

(athens.util.get_day.cljs$core$IFn$_invoke$arity$1 = (function (offset){
var day = tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(offset,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.US_format,day),new cljs.core.Keyword(null,"title","title",636505583),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.title_format,day)], null);
}));

(athens.util.get_day.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=athens.util.js.map
