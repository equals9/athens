goog.provide('tick.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('time_literals.read_write');
goog.require('cljc.java_time.local_date');
goog.require('cljc.java_time.local_date_time');
goog.require('cljc.java_time.local_time');
goog.require('cljc.java_time.clock');
goog.require('cljc.java_time.instant');
goog.require('cljc.java_time.zone_id');
goog.require('cljc.java_time.zone_offset');
goog.require('cljc.java_time.zoned_date_time');
goog.require('cljc.java_time.offset_date_time');
goog.require('cljc.java_time.duration');
goog.require('cljc.java_time.year_month');
goog.require('cljc.java_time.month');
goog.require('cljc.java_time.year');
goog.require('cljc.java_time.day_of_week');
goog.require('cljc.java_time.period');
goog.require('cljc.java_time.temporal.temporal_amount');
goog.require('cljc.java_time.temporal.temporal_adjusters');
goog.require('cljc.java_time.temporal.chrono_field');
goog.require('cljc.java_time.temporal.chrono_unit');
goog.require('java.time');
goog.require('java.time.temporal');
goog.require('cljs.java_time.extend_eq_and_compare');
time_literals.read_write.print_time_literals_clj_BANG_();

time_literals.read_write.print_time_literals_cljs_BANG_();
tick.core._STAR_clock_STAR_ = null;
tick.core.now = (function tick$core$now(){
if(cljs.core.truth_(tick.core._STAR_clock_STAR_)){
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1(tick.core._STAR_clock_STAR_);
} else {
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0();
}
});
tick.core.today = (function tick$core$today(){
if(cljs.core.truth_(tick.core._STAR_clock_STAR_)){
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1(tick.core._STAR_clock_STAR_);
} else {
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0();
}
});
tick.core.epoch = (function tick$core$epoch(){
return cljc.java_time.instant.epoch;
});

/**
 * @interface
 */
tick.core.ITimeReify = function(){};

/**
 * Set time be ON a date
 */
tick.core.on = (function tick$core$on(time,date){
if((((!((time == null)))) && ((!((time.tick$core$ITimeReify$on$arity$2 == null)))))){
return time.tick$core$ITimeReify$on$arity$2(time,date);
} else {
var x__4487__auto__ = (((time == null))?null:time);
var m__4488__auto__ = (tick.core.on[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(time,date) : m__4488__auto__.call(null,time,date));
} else {
var m__4485__auto__ = (tick.core.on["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(time,date) : m__4485__auto__.call(null,time,date));
} else {
throw cljs.core.missing_protocol("ITimeReify.on",time);
}
}
}
});

/**
 * Set date to be AT a time
 */
tick.core.at = (function tick$core$at(date,time){
if((((!((date == null)))) && ((!((date.tick$core$ITimeReify$at$arity$2 == null)))))){
return date.tick$core$ITimeReify$at$arity$2(date,time);
} else {
var x__4487__auto__ = (((date == null))?null:date);
var m__4488__auto__ = (tick.core.at[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(date,time) : m__4488__auto__.call(null,date,time));
} else {
var m__4485__auto__ = (tick.core.at["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(date,time) : m__4485__auto__.call(null,date,time));
} else {
throw cljs.core.missing_protocol("ITimeReify.at",date);
}
}
}
});

/**
 * Set a date-time to be in a time-zone
 */
tick.core.in$ = (function tick$core$in(dt,zone){
if((((!((dt == null)))) && ((!((dt.tick$core$ITimeReify$in$arity$2 == null)))))){
return dt.tick$core$ITimeReify$in$arity$2(dt,zone);
} else {
var x__4487__auto__ = (((dt == null))?null:dt);
var m__4488__auto__ = (tick.core.in$[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(dt,zone) : m__4488__auto__.call(null,dt,zone));
} else {
var m__4485__auto__ = (tick.core.in$["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(dt,zone) : m__4485__auto__.call(null,dt,zone));
} else {
throw cljs.core.missing_protocol("ITimeReify.in",dt);
}
}
}
});

/**
 * Set a date-time to be offset by an amount
 */
tick.core.offset_by = (function tick$core$offset_by(dt,amount){
if((((!((dt == null)))) && ((!((dt.tick$core$ITimeReify$offset_by$arity$2 == null)))))){
return dt.tick$core$ITimeReify$offset_by$arity$2(dt,amount);
} else {
var x__4487__auto__ = (((dt == null))?null:dt);
var m__4488__auto__ = (tick.core.offset_by[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(dt,amount) : m__4488__auto__.call(null,dt,amount));
} else {
var m__4485__auto__ = (tick.core.offset_by["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(dt,amount) : m__4485__auto__.call(null,dt,amount));
} else {
throw cljs.core.missing_protocol("ITimeReify.offset-by",dt);
}
}
}
});

tick.core.midnight = (function tick$core$midnight(var_args){
var G__58708 = arguments.length;
switch (G__58708) {
case 0:
return tick.core.midnight.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.midnight.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.local_time.midnight;
}));

(tick.core.midnight.cljs$core$IFn$_invoke$arity$1 = (function (date){
return tick.core.at(date,cljc.java_time.local_time.midnight);
}));

(tick.core.midnight.cljs$lang$maxFixedArity = 1);

tick.core.noon = (function tick$core$noon(var_args){
var G__58711 = arguments.length;
switch (G__58711) {
case 0:
return tick.core.noon.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.noon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.noon.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.local_time.noon;
}));

(tick.core.noon.cljs$core$IFn$_invoke$arity$1 = (function (date){
return tick.core.at(date,cljc.java_time.local_time.noon);
}));

(tick.core.noon.cljs$lang$maxFixedArity = 1);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("tick.core","instant","tick.core/instant",767438198),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("java.time","Instant","java.time/Instant",2105934508,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__58712_SHARP_){
return (p1__58712_SHARP_ instanceof java.time.Instant);
}));
tick.core.parse_day = (function tick$core$parse_day(input){
var pred__58714 = cljs.core.re_matches;
var expr__58715 = clojure.string.lower_case(input);
if(cljs.core.truth_((function (){var G__58717 = /^(mon)(day)?$/;
var G__58718 = expr__58715;
return (pred__58714.cljs$core$IFn$_invoke$arity$2 ? pred__58714.cljs$core$IFn$_invoke$arity$2(G__58717,G__58718) : pred__58714.call(null,G__58717,G__58718));
})())){
return cljc.java_time.day_of_week.monday;
} else {
if(cljs.core.truth_((function (){var G__58719 = /^(tue)(s|sday)?$/;
var G__58720 = expr__58715;
return (pred__58714.cljs$core$IFn$_invoke$arity$2 ? pred__58714.cljs$core$IFn$_invoke$arity$2(G__58719,G__58720) : pred__58714.call(null,G__58719,G__58720));
})())){
return cljc.java_time.day_of_week.tuesday;
} else {
if(cljs.core.truth_((function (){var G__58721 = /^(wed)(s|nesday)?$/;
var G__58722 = expr__58715;
return (pred__58714.cljs$core$IFn$_invoke$arity$2 ? pred__58714.cljs$core$IFn$_invoke$arity$2(G__58721,G__58722) : pred__58714.call(null,G__58721,G__58722));
})())){
return cljc.java_time.day_of_week.wednesday;
} else {
if(cljs.core.truth_((function (){var G__58723 = /^(thur)(s|sday)?$/;
var G__58724 = expr__58715;
return (pred__58714.cljs$core$IFn$_invoke$arity$2 ? pred__58714.cljs$core$IFn$_invoke$arity$2(G__58723,G__58724) : pred__58714.call(null,G__58723,G__58724));
})())){
return cljc.java_time.day_of_week.thursday;
} else {
if(cljs.core.truth_((function (){var G__58725 = /^(fri)(day)?$/;
var G__58726 = expr__58715;
return (pred__58714.cljs$core$IFn$_invoke$arity$2 ? pred__58714.cljs$core$IFn$_invoke$arity$2(G__58725,G__58726) : pred__58714.call(null,G__58725,G__58726));
})())){
return cljc.java_time.day_of_week.friday;
} else {
if(cljs.core.truth_((function (){var G__58727 = /^(sat)(urday)?$/;
var G__58728 = expr__58715;
return (pred__58714.cljs$core$IFn$_invoke$arity$2 ? pred__58714.cljs$core$IFn$_invoke$arity$2(G__58727,G__58728) : pred__58714.call(null,G__58727,G__58728));
})())){
return cljc.java_time.day_of_week.saturday;
} else {
if(cljs.core.truth_((function (){var G__58729 = /^(sun)(day)?$/;
var G__58730 = expr__58715;
return (pred__58714.cljs$core$IFn$_invoke$arity$2 ? pred__58714.cljs$core$IFn$_invoke$arity$2(G__58729,G__58730) : pred__58714.call(null,G__58729,G__58730));
})())){
return cljc.java_time.day_of_week.sunday;
} else {
return null;
}
}
}
}
}
}
}
});
tick.core.parse_month = (function tick$core$parse_month(input){
var pred__58731 = cljs.core.re_matches;
var expr__58732 = clojure.string.lower_case(input);
if(cljs.core.truth_((function (){var G__58734 = /^(jan)(uary)?$/;
var G__58735 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58734,G__58735) : pred__58731.call(null,G__58734,G__58735));
})())){
return cljc.java_time.month.january;
} else {
if(cljs.core.truth_((function (){var G__58736 = /^(feb)(ruary)?$/;
var G__58737 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58736,G__58737) : pred__58731.call(null,G__58736,G__58737));
})())){
return cljc.java_time.month.february;
} else {
if(cljs.core.truth_((function (){var G__58738 = /^(mar)(ch)?$/;
var G__58739 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58738,G__58739) : pred__58731.call(null,G__58738,G__58739));
})())){
return cljc.java_time.month.march;
} else {
if(cljs.core.truth_((function (){var G__58740 = /^(apr)(il)?$/;
var G__58741 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58740,G__58741) : pred__58731.call(null,G__58740,G__58741));
})())){
return cljc.java_time.month.april;
} else {
if(cljs.core.truth_((function (){var G__58742 = /^may$/;
var G__58743 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58742,G__58743) : pred__58731.call(null,G__58742,G__58743));
})())){
return cljc.java_time.month.may;
} else {
if(cljs.core.truth_((function (){var G__58744 = /^(jun)(e)?$/;
var G__58745 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58744,G__58745) : pred__58731.call(null,G__58744,G__58745));
})())){
return cljc.java_time.month.june;
} else {
if(cljs.core.truth_((function (){var G__58746 = /^(jul)(y)?$/;
var G__58747 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58746,G__58747) : pred__58731.call(null,G__58746,G__58747));
})())){
return cljc.java_time.month.july;
} else {
if(cljs.core.truth_((function (){var G__58748 = /^(aug)(ust)?$/;
var G__58749 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58748,G__58749) : pred__58731.call(null,G__58748,G__58749));
})())){
return cljc.java_time.month.august;
} else {
if(cljs.core.truth_((function (){var G__58750 = /^(sep)(tember)?$/;
var G__58751 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58750,G__58751) : pred__58731.call(null,G__58750,G__58751));
})())){
return cljc.java_time.month.september;
} else {
if(cljs.core.truth_((function (){var G__58752 = /^(oct)(ober)?$/;
var G__58753 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58752,G__58753) : pred__58731.call(null,G__58752,G__58753));
})())){
return cljc.java_time.month.october;
} else {
if(cljs.core.truth_((function (){var G__58754 = /^(nov)(ember)?$/;
var G__58755 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58754,G__58755) : pred__58731.call(null,G__58754,G__58755));
})())){
return cljc.java_time.month.november;
} else {
if(cljs.core.truth_((function (){var G__58756 = /^(dec)(ember)?$/;
var G__58757 = expr__58732;
return (pred__58731.cljs$core$IFn$_invoke$arity$2 ? pred__58731.cljs$core$IFn$_invoke$arity$2(G__58756,G__58757) : pred__58731.call(null,G__58756,G__58757));
})())){
return cljc.java_time.month.december;
} else {
return null;
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
});

/**
 * @interface
 */
tick.core.IParseable = function(){};

/**
 * Parse to most applicable instance.
 */
tick.core.parse = (function tick$core$parse(_){
if((((!((_ == null)))) && ((!((_.tick$core$IParseable$parse$arity$1 == null)))))){
return _.tick$core$IParseable$parse$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.parse[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.parse["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IParseable.parse",_);
}
}
}
});

tick.core.parse_int = (function tick$core$parse_int(x){
return Number(x);
});
goog.object.set(tick.core.IParseable,"string",true);

var G__58758_59141 = tick.core.parse;
var G__58759_59142 = "string";
var G__58760_59143 = (function (s){
var pred__58761 = cljs.core.re_matches;
var expr__58762 = s;
var temp__5733__auto__ = (function (){var G__58764 = /(\d{1,2})\s*(am|pm)/;
var G__58765 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58764,G__58765) : pred__58761.call(null,G__58764,G__58765));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var p__4544__auto__ = temp__5733__auto__;
var fexpr__58771 = (function (p__58772){
var vec__58773 = p__58772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58773,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58773,(1),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58773,(2),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2((function (){var G__58776 = tick.core.parse_int(h);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pm",ap)){
return (G__58776 + (12));
} else {
return G__58776;
}
})(),(0));
});
return fexpr__58771(p__4544__auto__);
} else {
var temp__5733__auto____$1 = (function (){var G__58777 = /(\d{1,2})/;
var G__58778 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58777,G__58778) : pred__58761.call(null,G__58777,G__58778));
})();
if(cljs.core.truth_(temp__5733__auto____$1)){
var p__4544__auto__ = temp__5733__auto____$1;
var fexpr__58783 = (function (p__58784){
var vec__58785 = p__58784;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58785,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58785,(1),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(tick.core.parse_int(h),(0));
});
return fexpr__58783(p__4544__auto__);
} else {
var temp__5733__auto____$2 = (function (){var G__58788 = /\d{2}:\d{2}\S*/;
var G__58789 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58788,G__58789) : pred__58761.call(null,G__58788,G__58789));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var p__4544__auto__ = temp__5733__auto____$2;
var fexpr__58790 = (function (s__$1){
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});
return fexpr__58790(p__4544__auto__);
} else {
var temp__5733__auto____$3 = (function (){var G__58791 = /(\d{1,2}):(\d{2})/;
var G__58792 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58791,G__58792) : pred__58761.call(null,G__58791,G__58792));
})();
if(cljs.core.truth_(temp__5733__auto____$3)){
var p__4544__auto__ = temp__5733__auto____$3;
var fexpr__58797 = (function (p__58798){
var vec__58799 = p__58798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58799,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58799,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58799,(2),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(tick.core.parse_int(h),tick.core.parse_int(m));
});
return fexpr__58797(p__4544__auto__);
} else {
var temp__5733__auto____$4 = (function (){var G__58802 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?Z/;
var G__58803 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58802,G__58803) : pred__58761.call(null,G__58802,G__58803));
})();
if(cljs.core.truth_(temp__5733__auto____$4)){
var p__4544__auto__ = temp__5733__auto____$4;
var fexpr__58804 = (function (s__$1){
return cljc.java_time.instant.parse(s__$1);
});
return fexpr__58804(p__4544__auto__);
} else {
var temp__5733__auto____$5 = (function (){var G__58805 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?[+-]\d{2}:\d{2}/;
var G__58806 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58805,G__58806) : pred__58761.call(null,G__58805,G__58806));
})();
if(cljs.core.truth_(temp__5733__auto____$5)){
var p__4544__auto__ = temp__5733__auto____$5;
var fexpr__58807 = (function (s__$1){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});
return fexpr__58807(p__4544__auto__);
} else {
var temp__5733__auto____$6 = (function (){var G__58808 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?[+-]\d{2}:\d{2}\[\w+\/\w+\]/;
var G__58809 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58808,G__58809) : pred__58761.call(null,G__58808,G__58809));
})();
if(cljs.core.truth_(temp__5733__auto____$6)){
var p__4544__auto__ = temp__5733__auto____$6;
var fexpr__58810 = (function (s__$1){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});
return fexpr__58810(p__4544__auto__);
} else {
var temp__5733__auto____$7 = (function (){var G__58811 = /\d{4}-\d{2}-\d{2}T\S*/;
var G__58812 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58811,G__58812) : pred__58761.call(null,G__58811,G__58812));
})();
if(cljs.core.truth_(temp__5733__auto____$7)){
var p__4544__auto__ = temp__5733__auto____$7;
var fexpr__58813 = (function (s__$1){
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});
return fexpr__58813(p__4544__auto__);
} else {
var temp__5733__auto____$8 = (function (){var G__58814 = /\d{4}-\d{2}-\d{2}/;
var G__58815 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58814,G__58815) : pred__58761.call(null,G__58814,G__58815));
})();
if(cljs.core.truth_(temp__5733__auto____$8)){
var p__4544__auto__ = temp__5733__auto____$8;
var fexpr__58816 = (function (s__$1){
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});
return fexpr__58816(p__4544__auto__);
} else {
var temp__5733__auto____$9 = (function (){var G__58817 = /\d{4}-\d{2}/;
var G__58818 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58817,G__58818) : pred__58761.call(null,G__58817,G__58818));
})();
if(cljs.core.truth_(temp__5733__auto____$9)){
var p__4544__auto__ = temp__5733__auto____$9;
var fexpr__58819 = (function (s__$1){
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});
return fexpr__58819(p__4544__auto__);
} else {
var temp__5733__auto____$10 = (function (){var G__58820 = /\d{4}/;
var G__58821 = expr__58762;
return (pred__58761.cljs$core$IFn$_invoke$arity$2 ? pred__58761.cljs$core$IFn$_invoke$arity$2(G__58820,G__58821) : pred__58761.call(null,G__58820,G__58821));
})();
if(cljs.core.truth_(temp__5733__auto____$10)){
var p__4544__auto__ = temp__5733__auto____$10;
var fexpr__58822 = (function (s__$1){
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});
return fexpr__58822(p__4544__auto__);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unparseable time string",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),s], null));
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
});
goog.object.set(G__58758_59141,G__58759_59142,G__58760_59143);

/**
 * @interface
 */
tick.core.IConversion = function(){};

/**
 * Make a java.util.Date instance.
 */
tick.core.inst = (function tick$core$inst(_){
if((((!((_ == null)))) && ((!((_.tick$core$IConversion$inst$arity$1 == null)))))){
return _.tick$core$IConversion$inst$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.inst[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.inst["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.inst",_);
}
}
}
});

/**
 * Make a java.time.Instant instance.
 */
tick.core.instant = (function tick$core$instant(_){
if((((!((_ == null)))) && ((!((_.tick$core$IConversion$instant$arity$1 == null)))))){
return _.tick$core$IConversion$instant$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.instant[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.instant["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.instant",_);
}
}
}
});

/**
 * Make a java.time.OffsetDateTime instance.
 */
tick.core.offset_date_time = (function tick$core$offset_date_time(_){
if((((!((_ == null)))) && ((!((_.tick$core$IConversion$offset_date_time$arity$1 == null)))))){
return _.tick$core$IConversion$offset_date_time$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.offset_date_time[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.offset_date_time["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.offset-date-time",_);
}
}
}
});

/**
 * Make a java.time.ZonedDateTime instance.
 */
tick.core.zoned_date_time = (function tick$core$zoned_date_time(_){
if((((!((_ == null)))) && ((!((_.tick$core$IConversion$zoned_date_time$arity$1 == null)))))){
return _.tick$core$IConversion$zoned_date_time$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.zoned_date_time[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.zoned_date_time["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.zoned-date-time",_);
}
}
}
});


/**
 * @interface
 */
tick.core.IExtraction = function(){};

/**
 * Make a java.time.LocalTime instance.
 */
tick.core.time = (function tick$core$time(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$time$arity$1 == null)))))){
return _.tick$core$IExtraction$time$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.time[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.time["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.time",_);
}
}
}
});

/**
 * Make a java.time.LocalDate instance.
 */
tick.core.date = (function tick$core$date(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$date$arity$1 == null)))))){
return _.tick$core$IExtraction$date$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.date[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.date["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.date",_);
}
}
}
});

/**
 * Make a java.time.LocalDateTime instance.
 */
tick.core.date_time = (function tick$core$date_time(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$date_time$arity$1 == null)))))){
return _.tick$core$IExtraction$date_time$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.date_time[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.date_time["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.date-time",_);
}
}
}
});

/**
 * Return the millisecond field of the given time
 */
tick.core.nanosecond = (function tick$core$nanosecond(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$nanosecond$arity$1 == null)))))){
return _.tick$core$IExtraction$nanosecond$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.nanosecond[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.nanosecond["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.nanosecond",_);
}
}
}
});

/**
 * Return the millisecond field of the given time
 */
tick.core.microsecond = (function tick$core$microsecond(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$microsecond$arity$1 == null)))))){
return _.tick$core$IExtraction$microsecond$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.microsecond[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.microsecond["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.microsecond",_);
}
}
}
});

/**
 * Return the millisecond field of the given time
 */
tick.core.millisecond = (function tick$core$millisecond(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$millisecond$arity$1 == null)))))){
return _.tick$core$IExtraction$millisecond$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.millisecond[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.millisecond["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.millisecond",_);
}
}
}
});

/**
 * Return the second field of the given time
 */
tick.core.second = (function tick$core$second(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$second$arity$1 == null)))))){
return _.tick$core$IExtraction$second$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.second[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.second["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.second",_);
}
}
}
});

/**
 * Return the minute field of the given time
 */
tick.core.minute = (function tick$core$minute(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$minute$arity$1 == null)))))){
return _.tick$core$IExtraction$minute$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.minute[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.minute["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.minute",_);
}
}
}
});

/**
 * Return the hour field of the given time
 */
tick.core.hour = (function tick$core$hour(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$hour$arity$1 == null)))))){
return _.tick$core$IExtraction$hour$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.hour[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.hour["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.hour",_);
}
}
}
});

/**
 * Make a java.time.DayOfWeek instance.
 */
tick.core.day_of_week = (function tick$core$day_of_week(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$day_of_week$arity$1 == null)))))){
return _.tick$core$IExtraction$day_of_week$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.day_of_week[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.day_of_week["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.day-of-week",_);
}
}
}
});

/**
 * Return value of the day in the month as an integer.
 */
tick.core.day_of_month = (function tick$core$day_of_month(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$day_of_month$arity$1 == null)))))){
return _.tick$core$IExtraction$day_of_month$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.day_of_month[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.day_of_month["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.day-of-month",_);
}
}
}
});

/**
 * Return value as integer
 */
tick.core.int$ = (function tick$core$int(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$int$arity$1 == null)))))){
return _.tick$core$IExtraction$int$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.int$[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.int$["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.int",_);
}
}
}
});

/**
 * Return value as long
 */
tick.core.long$ = (function tick$core$long(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$long$arity$1 == null)))))){
return _.tick$core$IExtraction$long$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.long$[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.long$["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.long",_);
}
}
}
});

/**
 * Make a java.time.Month instance.
 */
tick.core.month = (function tick$core$month(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$month$arity$1 == null)))))){
return _.tick$core$IExtraction$month$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.month[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.month["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.month",_);
}
}
}
});

/**
 * Make a java.time.Year instance.
 */
tick.core.year = (function tick$core$year(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$year$arity$1 == null)))))){
return _.tick$core$IExtraction$year$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.year[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.year["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.year",_);
}
}
}
});

/**
 * Make a java.time.YearMonth instance.
 */
tick.core.year_month = (function tick$core$year_month(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$year_month$arity$1 == null)))))){
return _.tick$core$IExtraction$year_month$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.year_month[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.year_month["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.year-month",_);
}
}
}
});

/**
 * Make a java.time.ZoneId instance.
 */
tick.core.zone = (function tick$core$zone(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$zone$arity$1 == null)))))){
return _.tick$core$IExtraction$zone$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.zone[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.zone["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.zone",_);
}
}
}
});

/**
 * Make a java.time.ZoneOffset instance.
 */
tick.core.zone_offset = (function tick$core$zone_offset(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$zone_offset$arity$1 == null)))))){
return _.tick$core$IExtraction$zone_offset$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.zone_offset[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.zone_offset["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.zone-offset",_);
}
}
}
});

tick.core.new_time = (function tick$core$new_time(var_args){
var G__58824 = arguments.length;
switch (G__58824) {
case 0:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.new_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.time(tick.core.now());
}));

(tick.core.new_time.cljs$core$IFn$_invoke$arity$2 = (function (hour,minute){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(hour,minute);
}));

(tick.core.new_time.cljs$core$IFn$_invoke$arity$3 = (function (hour,minute,second){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3(hour,minute,second);
}));

(tick.core.new_time.cljs$core$IFn$_invoke$arity$4 = (function (hour,minute,second,nano){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4(hour,minute,second,nano);
}));

(tick.core.new_time.cljs$lang$maxFixedArity = 4);

tick.core.new_date = (function tick$core$new_date(var_args){
var G__58826 = arguments.length;
switch (G__58826) {
case 0:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.new_date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.today();
}));

(tick.core.new_date.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day_of_month){
return cljc.java_time.local_date.of(year,month,day_of_month);
}));

(tick.core.new_date.cljs$core$IFn$_invoke$arity$2 = (function (year,day_of_year){
return cljc.java_time.local_date.of_year_day(year,day_of_year);
}));

(tick.core.new_date.cljs$core$IFn$_invoke$arity$1 = (function (epoch_day){
return cljc.java_time.local_date.of_epoch_day(epoch_day);
}));

(tick.core.new_date.cljs$lang$maxFixedArity = 3);

/**
 * Return the current zone, which can be overridden by the *clock* dynamic var
 */
tick.core.current_zone = (function tick$core$current_zone(){
var temp__5733__auto__ = tick.core._STAR_clock_STAR_;
if(cljs.core.truth_(temp__5733__auto__)){
var clk = temp__5733__auto__;
return cljc.java_time.clock.get_zone(clk);
} else {
return cljc.java_time.zone_id.system_default();
}
});
goog.object.set(tick.core.IConversion,"function",true);

var G__58827_59177 = tick.core.inst;
var G__58828_59178 = "function";
var G__58829_59179 = (function (f){
return tick.core.inst((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58827_59177,G__58828_59178,G__58829_59179);

var G__58830_59180 = tick.core.instant;
var G__58831_59181 = "function";
var G__58832_59182 = (function (f){
return tick.core.instant((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58830_59180,G__58831_59181,G__58832_59182);

var G__58833_59183 = tick.core.offset_date_time;
var G__58834_59184 = "function";
var G__58835_59185 = (function (f){
return tick.core.offset_date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58833_59183,G__58834_59184,G__58835_59185);

var G__58836_59186 = tick.core.zoned_date_time;
var G__58837_59187 = "function";
var G__58838_59188 = (function (f){
return tick.core.zoned_date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58836_59186,G__58837_59187,G__58838_59188);

(java.time.Instant.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$IConversion$inst$arity$1 = (function (i){
var i__$1 = this;
return (new Date(cljc.java_time.instant.to_epoch_milli(i__$1)));
}));

(java.time.Instant.prototype.tick$core$IConversion$instant$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.Instant.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.zoned_date_time(i__$1);
}));

(java.time.Instant.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2(i__$1,tick.core.current_zone());
}));

goog.object.set(tick.core.IConversion,"string",true);

var G__58839_59190 = tick.core.inst;
var G__58840_59191 = "string";
var G__58841_59192 = (function (s){
return tick.core.inst(tick.core.instant(s));
});
goog.object.set(G__58839_59190,G__58840_59191,G__58841_59192);

var G__58842_59193 = tick.core.instant;
var G__58843_59194 = "string";
var G__58844_59195 = (function (s){
return tick.core.instant(tick.core.parse(s));
});
goog.object.set(G__58842_59193,G__58843_59194,G__58844_59195);

var G__58845_59196 = tick.core.offset_date_time;
var G__58846_59197 = "string";
var G__58847_59198 = (function (s){
return tick.core.zoned_date_time(s);
});
goog.object.set(G__58845_59196,G__58846_59197,G__58847_59198);

var G__58848_59199 = tick.core.zoned_date_time;
var G__58849_59200 = "string";
var G__58850_59201 = (function (s){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1(s);
});
goog.object.set(G__58848_59199,G__58849_59200,G__58850_59201);

goog.object.set(tick.core.IConversion,"number",true);

var G__58851_59202 = tick.core.instant;
var G__58852_59203 = "number";
var G__58853_59204 = (function (n){
return cljc.java_time.instant.of_epoch_milli(n);
});
goog.object.set(G__58851_59202,G__58852_59203,G__58853_59204);

(java.time.LocalDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.inst(tick.core.zoned_date_time(ldt__$1));
}));

(java.time.LocalDateTime.prototype.tick$core$IConversion$instant$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.instant(tick.core.zoned_date_time(ldt__$1));
}));

(java.time.LocalDateTime.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.zoned_date_time(ldt__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return cljc.java_time.local_date_time.at_zone(ldt__$1,tick.core.current_zone());
}));

(Date.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$core$IConversion$inst$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));

(Date.prototype.tick$core$IConversion$instant$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.instant.of_epoch_milli(d__$1.getTime());
}));

(Date.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.zoned_date_time(tick.core.instant(d__$1));
}));

(Date.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.offset_date_time(tick.core.instant(d__$1));
}));

(java.time.OffsetDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (odt){
var odt__$1 = this;
return tick.core.inst(tick.core.instant(odt__$1));
}));

(java.time.OffsetDateTime.prototype.tick$core$IConversion$instant$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_instant(odt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
}));

(java.time.OffsetDateTime.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_zoned_date_time(odt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (zdt){
var zdt__$1 = this;
return tick.core.inst(tick.core.instant(zdt__$1));
}));

(java.time.ZonedDateTime.prototype.tick$core$IConversion$instant$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1.toInstant();
}));

(java.time.ZonedDateTime.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
}));

(java.time.ZonedDateTime.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
}));
(java.time.YearMonth.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$core$IExtraction$year_month$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
}));

(java.time.YearMonth.prototype.tick$core$IExtraction$month$arity$1 = (function (ym){
var ym__$1 = this;
return cljc.java_time.year_month.get_month(ym__$1);
}));

(java.time.YearMonth.prototype.tick$core$IExtraction$year$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.year(cljc.java_time.year_month.get_year(ym__$1));
}));

(java.time.Year.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$core$IExtraction$year$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
}));

(java.time.Year.prototype.tick$core$IExtraction$int$arity$1 = (function (y){
var y__$1 = this;
return cljc.java_time.year.get_value(y__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_time(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_date(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_date_time(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get(t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_second(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_minute(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_hour(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_day_of_week(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_day_of_month(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$month$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_month(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (zdt){
var zdt__$1 = this;
return tick.core.year(cljc.java_time.zoned_date_time.get_year(zdt__$1));
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$zone$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_zone(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_offset(zdt__$1);
}));

(java.time.Instant.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$IExtraction$time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.time(tick.core.zoned_date_time(i__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$date$arity$1 = (function (i){
var i__$1 = this;
return tick.core.date(tick.core.zoned_date_time(i__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$date_time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.date_time(tick.core.zoned_date_time(i__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.nanosecond(tick.core.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.microsecond(tick.core.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.millisecond(tick.core.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return tick.core.second(tick.core.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return tick.core.minute(tick.core.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return tick.core.hour(tick.core.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (i){
var i__$1 = this;
return tick.core.day_of_week(tick.core.date(i__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.day_of_month(tick.core.date(i__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$int$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.instant.get_nano(i__$1);
}));

(java.time.Instant.prototype.tick$core$IExtraction$long$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.instant.get_epoch_second(i__$1);
}));

(java.time.Instant.prototype.tick$core$IExtraction$month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.month(tick.core.date(i__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$year$arity$1 = (function (i){
var i__$1 = this;
return tick.core.year(tick.core.date(i__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$year_month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.year_month(tick.core.date(i__$1));
}));

(java.time.Instant.prototype.tick$core$IExtraction$zone$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1("UTC");
}));

(java.time.Instant.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zone_offset.utc;
}));

goog.object.set(tick.core.IExtraction,"object",true);

var G__58854_59209 = tick.core.int$;
var G__58855_59210 = "object";
var G__58856_59211 = (function (v){
return tick.core.parse_int(v);
});
goog.object.set(G__58854_59209,G__58855_59210,G__58856_59211);

var G__58857_59212 = tick.core.long$;
var G__58858_59213 = "object";
var G__58859_59214 = (function (v){
return tick.core.parse_int(v);
});
goog.object.set(G__58857_59212,G__58858_59213,G__58859_59214);

(Date.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$core$IExtraction$date$arity$1 = (function (d){
var d__$1 = this;
return tick.core.date(tick.core.zoned_date_time(tick.core.instant(d__$1)));
}));

(Date.prototype.tick$core$IExtraction$date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.date_time(tick.core.instant(d__$1));
}));

(Date.prototype.tick$core$IExtraction$year_month$arity$1 = (function (d){
var d__$1 = this;
return tick.core.year_month(tick.core.date(d__$1));
}));

(Date.prototype.tick$core$IExtraction$year$arity$1 = (function (d){
var d__$1 = this;
return tick.core.year(tick.core.date(d__$1));
}));

(java.time.ZoneId.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneId.prototype.tick$core$IExtraction$zone$arity$1 = (function (z){
var z__$1 = this;
return z__$1;
}));

(java.time.LocalDate.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$IExtraction$date$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));

(java.time.LocalDate.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.local_date.get_day_of_week(d__$1);
}));

(java.time.LocalDate.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.local_date.get_day_of_month(d__$1);
}));

(java.time.LocalDate.prototype.tick$core$IExtraction$month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.month.from(d__$1);
}));

(java.time.LocalDate.prototype.tick$core$IExtraction$year_month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.year_month.of(cljc.java_time.local_date.get_year(d__$1),cljc.java_time.local_date.get_month_value(d__$1));
}));

(java.time.LocalDate.prototype.tick$core$IExtraction$year$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.year.of(cljc.java_time.local_date.get_year(d__$1));
}));

goog.object.set(tick.core.IExtraction,"number",true);

var G__58860_59215 = tick.core.day_of_week;
var G__58861_59216 = "number";
var G__58862_59217 = (function (n){
return cljc.java_time.day_of_week.of(n);
});
goog.object.set(G__58860_59215,G__58861_59216,G__58862_59217);

var G__58863_59218 = tick.core.month;
var G__58864_59219 = "number";
var G__58865_59220 = (function (n){
return cljc.java_time.month.of(n);
});
goog.object.set(G__58863_59218,G__58864_59219,G__58865_59220);

var G__58866_59221 = tick.core.year;
var G__58867_59222 = "number";
var G__58868_59223 = (function (n){
return cljc.java_time.year.of(n);
});
goog.object.set(G__58866_59221,G__58867_59222,G__58868_59223);

var G__58869_59224 = tick.core.zone_offset;
var G__58870_59225 = "number";
var G__58871_59226 = (function (s){
return cljc.java_time.zone_offset.of_hours(s);
});
goog.object.set(G__58869_59224,G__58870_59225,G__58871_59226);

(java.time.ZoneOffset.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneOffset.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (z){
var z__$1 = this;
return z__$1;
}));

goog.object.set(tick.core.IExtraction,"string",true);

var G__58872_59227 = tick.core.time;
var G__58873_59228 = "string";
var G__58874_59229 = (function (s){
return tick.core.time(tick.core.parse(s));
});
goog.object.set(G__58872_59227,G__58873_59228,G__58874_59229);

var G__58875_59230 = tick.core.date;
var G__58876_59231 = "string";
var G__58877_59232 = (function (s){
return tick.core.date(tick.core.parse(s));
});
goog.object.set(G__58875_59230,G__58876_59231,G__58877_59232);

var G__58878_59233 = tick.core.date_time;
var G__58879_59234 = "string";
var G__58880_59235 = (function (s){
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1(s);
});
goog.object.set(G__58878_59233,G__58879_59234,G__58880_59235);

var G__58881_59236 = tick.core.day_of_week;
var G__58882_59237 = "string";
var G__58883_59238 = (function (s){
var or__4185__auto__ = tick.core.parse_day(s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return tick.core.day_of_week(tick.core.date(s));
}
});
goog.object.set(G__58881_59236,G__58882_59237,G__58883_59238);

var G__58884_59240 = tick.core.day_of_month;
var G__58885_59241 = "string";
var G__58886_59242 = (function (s){
return tick.core.day_of_month(tick.core.date(s));
});
goog.object.set(G__58884_59240,G__58885_59241,G__58886_59242);

var G__58887_59243 = tick.core.month;
var G__58888_59244 = "string";
var G__58889_59245 = (function (s){
var or__4185__auto__ = tick.core.parse_month(s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return tick.core.month(tick.core.date(s));
}
});
goog.object.set(G__58887_59243,G__58888_59244,G__58889_59245);

var G__58890_59247 = tick.core.year;
var G__58891_59248 = "string";
var G__58892_59249 = (function (s){
return tick.core.year(tick.core.parse(s));
});
goog.object.set(G__58890_59247,G__58891_59248,G__58892_59249);

var G__58893_59250 = tick.core.year_month;
var G__58894_59251 = "string";
var G__58895_59252 = (function (s){
return tick.core.year_month(tick.core.parse(s));
});
goog.object.set(G__58893_59250,G__58894_59251,G__58895_59252);

var G__58896_59253 = tick.core.zone;
var G__58897_59254 = "string";
var G__58898_59255 = (function (s){
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1(s);
});
goog.object.set(G__58896_59253,G__58897_59254,G__58898_59255);

var G__58899_59256 = tick.core.zone_offset;
var G__58900_59257 = "string";
var G__58901_59258 = (function (s){
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1(s);
});
goog.object.set(G__58899_59256,G__58900_59257,G__58901_59258);

var G__58902_59265 = tick.core.int$;
var G__58903_59266 = "string";
var G__58904_59267 = (function (s){
return cljc.java_time.instant.get_nano(tick.core.instant(s));
});
goog.object.set(G__58902_59265,G__58903_59266,G__58904_59267);

var G__58905_59268 = tick.core.long$;
var G__58906_59269 = "string";
var G__58907_59270 = (function (s){
return cljc.java_time.instant.get_epoch_second(tick.core.instant(s));
});
goog.object.set(G__58905_59268,G__58906_59269,G__58907_59270);

goog.object.set(tick.core.IExtraction,"function",true);

var G__58908_59271 = tick.core.time;
var G__58909_59272 = "function";
var G__58910_59273 = (function (f){
return tick.core.time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58908_59271,G__58909_59272,G__58910_59273);

var G__58911_59274 = tick.core.date;
var G__58912_59275 = "function";
var G__58913_59276 = (function (f){
return tick.core.date((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58911_59274,G__58912_59275,G__58913_59276);

var G__58914_59277 = tick.core.date_time;
var G__58915_59278 = "function";
var G__58916_59279 = (function (f){
return tick.core.date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58914_59277,G__58915_59278,G__58916_59279);

var G__58917_59280 = tick.core.nanosecond;
var G__58918_59281 = "function";
var G__58919_59282 = (function (f){
return tick.core.nanosecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58917_59280,G__58918_59281,G__58919_59282);

var G__58920_59283 = tick.core.microsecond;
var G__58921_59284 = "function";
var G__58922_59285 = (function (f){
return tick.core.microsecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58920_59283,G__58921_59284,G__58922_59285);

var G__58923_59286 = tick.core.millisecond;
var G__58924_59287 = "function";
var G__58925_59288 = (function (f){
return tick.core.millisecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58923_59286,G__58924_59287,G__58925_59288);

var G__58926_59289 = tick.core.second;
var G__58927_59290 = "function";
var G__58928_59291 = (function (f){
return tick.core.second((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58926_59289,G__58927_59290,G__58928_59291);

var G__58929_59292 = tick.core.minute;
var G__58930_59293 = "function";
var G__58931_59294 = (function (f){
return tick.core.minute((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58929_59292,G__58930_59293,G__58931_59294);

var G__58932_59295 = tick.core.hour;
var G__58933_59296 = "function";
var G__58934_59297 = (function (f){
return tick.core.hour((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58932_59295,G__58933_59296,G__58934_59297);

var G__58935_59298 = tick.core.day_of_week;
var G__58936_59299 = "function";
var G__58937_59300 = (function (f){
return tick.core.day_of_week((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58935_59298,G__58936_59299,G__58937_59300);

var G__58938_59301 = tick.core.day_of_month;
var G__58939_59302 = "function";
var G__58940_59303 = (function (f){
return tick.core.day_of_month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58938_59301,G__58939_59302,G__58940_59303);

var G__58941_59304 = tick.core.int$;
var G__58942_59305 = "function";
var G__58943_59306 = (function (f){
return tick.core.int$((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58941_59304,G__58942_59305,G__58943_59306);

var G__58944_59307 = tick.core.long$;
var G__58945_59308 = "function";
var G__58946_59309 = (function (f){
return tick.core.long$((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58944_59307,G__58945_59308,G__58946_59309);

var G__58947_59312 = tick.core.month;
var G__58948_59313 = "function";
var G__58949_59314 = (function (f){
return tick.core.month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58947_59312,G__58948_59313,G__58949_59314);

var G__58950_59315 = tick.core.year;
var G__58951_59316 = "function";
var G__58952_59317 = (function (f){
return tick.core.year((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58950_59315,G__58951_59316,G__58952_59317);

var G__58953_59320 = tick.core.year_month;
var G__58954_59321 = "function";
var G__58955_59322 = (function (f){
return tick.core.year_month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58953_59320,G__58954_59321,G__58955_59322);

var G__58956_59325 = tick.core.zone;
var G__58957_59326 = "function";
var G__58958_59327 = (function (f){
return tick.core.zone((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58956_59325,G__58957_59326,G__58958_59327);

var G__58959_59328 = tick.core.zone_offset;
var G__58960_59329 = "function";
var G__58961_59330 = (function (f){
return tick.core.zone_offset((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
goog.object.set(G__58959_59328,G__58960_59329,G__58961_59330);

(java.time.LocalTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$core$IExtraction$time$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
}));

(java.time.LocalTime.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
}));

(java.time.LocalTime.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
}));

(java.time.LocalTime.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
}));

(java.time.LocalTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_second(t__$1);
}));

(java.time.LocalTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_minute(t__$1);
}));

(java.time.LocalTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_hour(t__$1);
}));

(java.time.OffsetDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_time(odt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_date(odt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_date_time(odt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (odt){
var odt__$1 = this;
return tick.core.year(cljc.java_time.offset_date_time.get_year(odt__$1));
}));

(java.time.OffsetDateTime.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.get_offset(odt__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.to_local_time(dt__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.to_local_date(dt__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_second(t__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_minute(t__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_hour(t__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.day_of_week(tick.core.date(dt__$1));
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.day_of_month(tick.core.date(dt__$1));
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$year_month$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.year_month(tick.core.date(dt__$1));
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$month$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.get_month(dt__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.year(tick.core.date(dt__$1));
}));

(java.time.Month.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Month.prototype.tick$core$IExtraction$int$arity$1 = (function (m){
var m__$1 = this;
return cljc.java_time.month.get_value(m__$1);
}));

(java.time.DayOfWeek.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.DayOfWeek.prototype.tick$core$IExtraction$int$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.day_of_week.get_value(d__$1);
}));
tick.core.field_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"proleptic-month","proleptic-month",-746961920),new cljs.core.Keyword(null,"aligned-week-of-month","aligned-week-of-month",-1988230912),new cljs.core.Keyword(null,"clock-hour-of-ampm","clock-hour-of-ampm",-268394751),new cljs.core.Keyword(null,"epoch-day","epoch-day",-1151217791),new cljs.core.Keyword(null,"nano-of-second","nano-of-second",-1642935645),new cljs.core.Keyword(null,"aligned-week-of-year","aligned-week-of-year",70378276),new cljs.core.Keyword(null,"era","era",1165135812),new cljs.core.Keyword(null,"offset-seconds","offset-seconds",-695890139),new cljs.core.Keyword(null,"micro-of-day","micro-of-day",-1255932121),new cljs.core.Keyword(null,"minute-of-day","minute-of-day",558111464),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"ampm-of-day","ampm-of-day",-284051414),new cljs.core.Keyword(null,"clock-hour-of-day","clock-hour-of-day",370314698),new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"milli-of-second","milli-of-second",-1422144788),new cljs.core.Keyword(null,"instant-seconds","instant-seconds",1032794797),new cljs.core.Keyword(null,"micro-of-second","micro-of-second",1805992110),new cljs.core.Keyword(null,"aligned-day-of-week-in-month","aligned-day-of-week-in-month",-452127505),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),new cljs.core.Keyword(null,"year-of-era","year-of-era",682445876),new cljs.core.Keyword(null,"nano-of-day","nano-of-day",525361845),new cljs.core.Keyword(null,"hour-of-ampm","hour-of-ampm",1171096469),new cljs.core.Keyword(null,"second-of-minute","second-of-minute",222734326),new cljs.core.Keyword(null,"aligned-day-of-week-in-year","aligned-day-of-week-in-year",-931066377),new cljs.core.Keyword(null,"second-of-day","second-of-day",806277913),new cljs.core.Keyword(null,"milli-of-day","milli-of-day",-2024730021),new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478)],[cljc.java_time.temporal.chrono_field.proleptic_month,cljc.java_time.temporal.chrono_field.aligned_week_of_month,cljc.java_time.temporal.chrono_field.clock_hour_of_ampm,cljc.java_time.temporal.chrono_field.epoch_day,cljc.java_time.temporal.chrono_field.nano_of_second,cljc.java_time.temporal.chrono_field.aligned_week_of_year,cljc.java_time.temporal.chrono_field.era,cljc.java_time.temporal.chrono_field.offset_seconds,cljc.java_time.temporal.chrono_field.micro_of_day,cljc.java_time.temporal.chrono_field.minute_of_day,cljc.java_time.temporal.chrono_field.day_of_week,cljc.java_time.temporal.chrono_field.ampm_of_day,cljc.java_time.temporal.chrono_field.clock_hour_of_day,cljc.java_time.temporal.chrono_field.hour_of_day,cljc.java_time.temporal.chrono_field.month_of_year,cljc.java_time.temporal.chrono_field.milli_of_second,cljc.java_time.temporal.chrono_field.instant_seconds,cljc.java_time.temporal.chrono_field.micro_of_second,cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_month,cljc.java_time.temporal.chrono_field.day_of_month,cljc.java_time.temporal.chrono_field.year,cljc.java_time.temporal.chrono_field.day_of_year,cljc.java_time.temporal.chrono_field.year_of_era,cljc.java_time.temporal.chrono_field.nano_of_day,cljc.java_time.temporal.chrono_field.hour_of_ampm,cljc.java_time.temporal.chrono_field.second_of_minute,cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_year,cljc.java_time.temporal.chrono_field.second_of_day,cljc.java_time.temporal.chrono_field.milli_of_day,cljc.java_time.temporal.chrono_field.minute_of_hour]);

/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.ILookup}
*/
tick.core.FieldsLookup = (function (t){
this.t = t;
this.cljs$lang$protocol_mask$partition0$ = 8388864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tick.core.FieldsLookup.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__58962){
var vec__58963 = p__58962;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58963,(1),null);
var cf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,k);
if(cljs.core.truth_(self__.t.isSupported(cf))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,self__.t.getLong(cf)], null);
} else {
return null;
}
}),tick.core.field_map)));
}));

(tick.core.FieldsLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,fld){
var self__ = this;
var ___$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return self__.t.getLong(f);
} else {
return null;
}
}));

(tick.core.FieldsLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,fld,notfound){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
try{return self__.t.getLong(f);
}catch (e58966){if((e58966 instanceof Error)){
var e = e58966;
return notfound;
} else {
throw e58966;

}
}} else {
return notfound;
}
}));

(tick.core.FieldsLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null);
}));

(tick.core.FieldsLookup.cljs$lang$type = true);

(tick.core.FieldsLookup.cljs$lang$ctorStr = "tick.core/FieldsLookup");

(tick.core.FieldsLookup.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"tick.core/FieldsLookup");
}));

/**
 * Positional factory function for tick.core/FieldsLookup.
 */
tick.core.__GT_FieldsLookup = (function tick$core$__GT_FieldsLookup(t){
return (new tick.core.FieldsLookup(t));
});

tick.core.fields = (function tick$core$fields(t){
return tick.core.__GT_FieldsLookup(t);
});
/**
 * Adjust a temporal with an adjuster or field
 */
tick.core.with$ = (function tick$core$with(var_args){
var G__58968 = arguments.length;
switch (G__58968) {
case 2:
return tick.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (t,adj){
return t.with(adj);
}));

(tick.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (t,fld,new_value){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return t.with(f,new_value);
} else {
return null;
}
}));

(tick.core.with$.cljs$lang$maxFixedArity = 3);

tick.core.day_of_week_in_month = (function tick$core$day_of_week_in_month(var_args){
var G__58970 = arguments.length;
switch (G__58970) {
case 2:
return tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2 = (function (ordinal,dow){
return cljc.java_time.temporal.temporal_adjusters.day_of_week_in_month(ordinal,tick.core.day_of_week(dow));
}));

(tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$3 = (function (t,ordinal,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2(ordinal,dow));
}));

(tick.core.day_of_week_in_month.cljs$lang$maxFixedArity = 3);

tick.core.first_day_of_month = (function tick$core$first_day_of_month(var_args){
var G__58972 = arguments.length;
switch (G__58972) {
case 0:
return tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_month();
}));

(tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.first_day_of_month.cljs$lang$maxFixedArity = 1);

tick.core.first_day_of_next_month = (function tick$core$first_day_of_next_month(var_args){
var G__58974 = arguments.length;
switch (G__58974) {
case 0:
return tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_next_month();
}));

(tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.first_day_of_next_month.cljs$lang$maxFixedArity = 1);

tick.core.first_day_of_next_year = (function tick$core$first_day_of_next_year(var_args){
var G__58976 = arguments.length;
switch (G__58976) {
case 0:
return tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_next_year();
}));

(tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.first_day_of_next_year.cljs$lang$maxFixedArity = 1);

tick.core.first_day_of_year = (function tick$core$first_day_of_year(var_args){
var G__58978 = arguments.length;
switch (G__58978) {
case 0:
return tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_year();
}));

(tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.first_day_of_year.cljs$lang$maxFixedArity = 1);

tick.core.first_in_month = (function tick$core$first_in_month(var_args){
var G__58980 = arguments.length;
switch (G__58980) {
case 1:
return tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.first_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.first_in_month(tick.core.day_of_week(dow));
}));

(tick.core.first_in_month.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1(dow));
}));

(tick.core.first_in_month.cljs$lang$maxFixedArity = 2);

tick.core.last_day_of_month = (function tick$core$last_day_of_month(var_args){
var G__58982 = arguments.length;
switch (G__58982) {
case 0:
return tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.last_day_of_month();
}));

(tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.last_day_of_month.cljs$lang$maxFixedArity = 1);

tick.core.last_day_of_year = (function tick$core$last_day_of_year(var_args){
var G__58984 = arguments.length;
switch (G__58984) {
case 0:
return tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.last_day_of_year();
}));

(tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.last_day_of_year.cljs$lang$maxFixedArity = 1);

tick.core.last_in_month = (function tick$core$last_in_month(var_args){
var G__58986 = arguments.length;
switch (G__58986) {
case 1:
return tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.last_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.last_in_month(tick.core.day_of_week(dow));
}));

(tick.core.last_in_month.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1(dow));
}));

(tick.core.last_in_month.cljs$lang$maxFixedArity = 2);

tick.core.next = (function tick$core$next(var_args){
var G__58988 = arguments.length;
switch (G__58988) {
case 1:
return tick.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.next.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.next(tick.core.day_of_week(dow));
}));

(tick.core.next.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.next.cljs$core$IFn$_invoke$arity$1(dow));
}));

(tick.core.next.cljs$lang$maxFixedArity = 2);

tick.core.next_or_same = (function tick$core$next_or_same(var_args){
var G__58990 = arguments.length;
switch (G__58990) {
case 1:
return tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.next_or_same.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.next_or_same(tick.core.day_of_week(dow));
}));

(tick.core.next_or_same.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1(dow));
}));

(tick.core.next_or_same.cljs$lang$maxFixedArity = 2);

tick.core.previous = (function tick$core$previous(var_args){
var G__58992 = arguments.length;
switch (G__58992) {
case 1:
return tick.core.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.previous.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.previous(tick.core.day_of_week(dow));
}));

(tick.core.previous.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.previous.cljs$core$IFn$_invoke$arity$1(dow));
}));

(tick.core.previous.cljs$lang$maxFixedArity = 2);

tick.core.previous_or_same = (function tick$core$previous_or_same(var_args){
var G__58994 = arguments.length;
switch (G__58994) {
case 1:
return tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.previous_or_same(tick.core.day_of_week(dow));
}));

(tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1(dow));
}));

(tick.core.previous_or_same.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
tick.core.ITimeComparison = function(){};

/**
 * Is x before y?
 */
tick.core._LT_ = (function tick$core$_LT_(x,y){
if((((!((x == null)))) && ((!((x.tick$core$ITimeComparison$_LT_$arity$2 == null)))))){
return x.tick$core$ITimeComparison$_LT_$arity$2(x,y);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (tick.core._LT_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4488__auto__.call(null,x,y));
} else {
var m__4485__auto__ = (tick.core._LT_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4485__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.<",x);
}
}
}
});

/**
 * Is x before or at the same time as y?
 */
tick.core._LT__EQ_ = (function tick$core$_LT__EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$core$ITimeComparison$_LT__EQ_$arity$2 == null)))))){
return x.tick$core$ITimeComparison$_LT__EQ_$arity$2(x,y);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (tick.core._LT__EQ_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4488__auto__.call(null,x,y));
} else {
var m__4485__auto__ = (tick.core._LT__EQ_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4485__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.<=",x);
}
}
}
});

/**
 * Is x after y?
 */
tick.core._GT_ = (function tick$core$_GT_(x,y){
if((((!((x == null)))) && ((!((x.tick$core$ITimeComparison$_GT_$arity$2 == null)))))){
return x.tick$core$ITimeComparison$_GT_$arity$2(x,y);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (tick.core._GT_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4488__auto__.call(null,x,y));
} else {
var m__4485__auto__ = (tick.core._GT_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4485__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.>",x);
}
}
}
});

/**
 * Is x after or at the same time as y?
 */
tick.core._GT__EQ_ = (function tick$core$_GT__EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$core$ITimeComparison$_GT__EQ_$arity$2 == null)))))){
return x.tick$core$ITimeComparison$_GT__EQ_$arity$2(x,y);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (tick.core._GT__EQ_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4488__auto__.call(null,x,y));
} else {
var m__4485__auto__ = (tick.core._GT__EQ_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4485__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.>=",x);
}
}
}
});

(java.time.YearMonth.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
}));

(java.time.YearMonth.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
}));

(java.time.YearMonth.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
}));

(java.time.YearMonth.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
}));

(java.time.Year.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
}));

(java.time.Year.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
}));

(java.time.Year.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
}));

(java.time.Year.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
}));

(java.time.Instant.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
}));

(java.time.Instant.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
}));

(java.time.Instant.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
}));

(java.time.Instant.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
}));

(Date.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljs.core.compare(x__$1,y) < (0));
}));

(Date.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return (!((cljs.core.compare(x__$1,y) > (0))));
}));

(Date.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljs.core.compare(x__$1,y) > (0));
}));

(Date.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return (!((cljs.core.compare(x__$1,y) < (0))));
}));

(java.time.LocalDate.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
}));

(java.time.LocalDate.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
}));

(java.time.LocalDate.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
}));

(java.time.LocalDate.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
}));

(java.time.LocalTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
}));

(java.time.LocalTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
}));

(java.time.LocalTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
}));

(java.time.LocalTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
}));

(java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
}));

(java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
}));

(java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
}));

(java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
}));

(java.time.Duration.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return (x__$1.compareTo(y) < (0));
}));

(java.time.Duration.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return x__$1.compareTo(y);
}
}));

(java.time.Duration.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return (x__$1.compareTo(y) > (0));
}));

(java.time.Duration.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)) || ((x__$1.compareTo(y) > (0))));
}));
tick.core.unit_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nanos","nanos",-1777059258),new cljs.core.Keyword(null,"forever","forever",2103455015),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"half-days","half-days",-534088147),new cljs.core.Keyword(null,"micros","micros",420024622),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"centuries","centuries",-306410384),new cljs.core.Keyword(null,"decades","decades",-2105076367),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"eras","eras",1406613306),new cljs.core.Keyword(null,"millennia","millennia",2120675355),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"millis","millis",-1338288387)],[cljc.java_time.temporal.chrono_unit.nanos,cljc.java_time.temporal.chrono_unit.forever,cljc.java_time.temporal.chrono_unit.months,cljc.java_time.temporal.chrono_unit.days,cljc.java_time.temporal.chrono_unit.half_days,cljc.java_time.temporal.chrono_unit.micros,cljc.java_time.temporal.chrono_unit.seconds,cljc.java_time.temporal.chrono_unit.centuries,cljc.java_time.temporal.chrono_unit.decades,cljc.java_time.temporal.chrono_unit.hours,cljc.java_time.temporal.chrono_unit.years,cljc.java_time.temporal.chrono_unit.minutes,cljc.java_time.temporal.chrono_unit.eras,cljc.java_time.temporal.chrono_unit.millennia,cljc.java_time.temporal.chrono_unit.weeks,cljc.java_time.temporal.chrono_unit.millis]);
tick.core.reverse_unit_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,tick.core.unit_map)));
tick.core.units = (function tick$core$units(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function tick$core$units_$_iter__58995(s__58996){
return (new cljs.core.LazySeq(null,(function (){
var s__58996__$1 = s__58996;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58996__$1);
if(temp__5735__auto__){
var s__58996__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58996__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58996__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58998 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58997 = (0);
while(true){
if((i__58997 < size__4581__auto__)){
var tu = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58997);
var k = (tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1(tu) : tick.core.reverse_unit_map.call(null,tu));
if(cljs.core.truth_(k)){
cljs.core.chunk_append(b__58998,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,x.get(tu)], null));

var G__59420 = (i__58997 + (1));
i__58997 = G__59420;
continue;
} else {
var G__59421 = (i__58997 + (1));
i__58997 = G__59421;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58998),tick$core$units_$_iter__58995(cljs.core.chunk_rest(s__58996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58998),null);
}
} else {
var tu = cljs.core.first(s__58996__$2);
var k = (tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1(tu) : tick.core.reverse_unit_map.call(null,tu));
if(cljs.core.truth_(k)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,x.get(tu)], null),tick$core$units_$_iter__58995(cljs.core.rest(s__58996__$2)));
} else {
var G__59424 = cljs.core.rest(s__58996__$2);
s__58996__$1 = G__59424;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljc.java_time.temporal.temporal_amount.get_units(x));
})());
});
tick.core.truncate = (function tick$core$truncate(x,u){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.unit_map,u);
if(cljs.core.truth_(temp__5735__auto__)){
var u__$1 = temp__5735__auto__;
return x.truncatedTo(u__$1);
} else {
return null;
}
});

/**
 * @interface
 */
tick.core.ITimeLength = function(){};

/**
 * Return the given quantity in nanoseconds.
 */
tick.core.nanos = (function tick$core$nanos(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$nanos$arity$1 == null)))))){
return _.tick$core$ITimeLength$nanos$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.nanos[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.nanos["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.nanos",_);
}
}
}
});

/**
 * Return the given quantity in microseconds.
 */
tick.core.micros = (function tick$core$micros(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$micros$arity$1 == null)))))){
return _.tick$core$ITimeLength$micros$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.micros[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.micros["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.micros",_);
}
}
}
});

/**
 * Return the given quantity in milliseconds.
 */
tick.core.millis = (function tick$core$millis(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$millis$arity$1 == null)))))){
return _.tick$core$ITimeLength$millis$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.millis[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.millis["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.millis",_);
}
}
}
});

/**
 * Return the given quantity in seconds.
 */
tick.core.seconds = (function tick$core$seconds(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$seconds$arity$1 == null)))))){
return _.tick$core$ITimeLength$seconds$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.seconds[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.seconds["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.seconds",_);
}
}
}
});

/**
 * Return the given quantity in minutes.
 */
tick.core.minutes = (function tick$core$minutes(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$minutes$arity$1 == null)))))){
return _.tick$core$ITimeLength$minutes$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.minutes[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.minutes["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.minutes",_);
}
}
}
});

/**
 * Return the given quantity in hours.
 */
tick.core.hours = (function tick$core$hours(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$hours$arity$1 == null)))))){
return _.tick$core$ITimeLength$hours$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.hours[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.hours["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.hours",_);
}
}
}
});

/**
 * Return the given quantity in days.
 */
tick.core.days = (function tick$core$days(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$days$arity$1 == null)))))){
return _.tick$core$ITimeLength$days$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.days[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.days["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.days",_);
}
}
}
});

/**
 * Return the given quantity in months.
 */
tick.core.months = (function tick$core$months(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$months$arity$1 == null)))))){
return _.tick$core$ITimeLength$months$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.months[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.months["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.months",_);
}
}
}
});

/**
 * Return the given quantity in years.
 */
tick.core.years = (function tick$core$years(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$years$arity$1 == null)))))){
return _.tick$core$ITimeLength$years$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.years[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.years["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.years",_);
}
}
}
});

(java.time.Duration.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$core$IConversion$instant$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.instant.of_epoch_milli(tick.core.millis(d__$1));
}));

(java.time.Duration.prototype.tick$core$IConversion$inst$arity$1 = (function (d){
var d__$1 = this;
return tick.core.inst(tick.core.instant(d__$1));
}));
(java.time.Duration.prototype.tick$core$ITimeLength$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$core$ITimeLength$nanos$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toNanos();
}));

(java.time.Duration.prototype.tick$core$ITimeLength$micros$arity$1 = (function (d){
var d__$1 = this;
return (tick.core.nanos(d__$1) / (1000));
}));

(java.time.Duration.prototype.tick$core$ITimeLength$millis$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toMillis();
}));

(java.time.Duration.prototype.tick$core$ITimeLength$seconds$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.get_seconds(d__$1);
}));

(java.time.Duration.prototype.tick$core$ITimeLength$minutes$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toMinutes();
}));

(java.time.Duration.prototype.tick$core$ITimeLength$hours$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toHours();
}));

(java.time.Duration.prototype.tick$core$ITimeLength$days$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toDays();
}));

(java.time.Period.prototype.tick$core$ITimeLength$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.tick$core$ITimeLength$days$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_days(p__$1);
}));

(java.time.Period.prototype.tick$core$ITimeLength$months$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_months(p__$1);
}));

(java.time.Period.prototype.tick$core$ITimeLength$years$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_years(p__$1);
}));
tick.core.new_duration = (function tick$core$new_duration(n,u){
var unit = (tick.core.unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.unit_map.cljs$core$IFn$_invoke$arity$1(u) : tick.core.unit_map.call(null,u));
if(cljs.core.truth_(unit)){
} else {
throw (new Error(["Assert failed: ",["Not a unit: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)].join(''),"\n","unit"].join('')));
}

return cljc.java_time.duration.of(n,unit);
});
tick.core.new_period = (function tick$core$new_period(n,u){
var G__58999 = u;
var G__58999__$1 = (((G__58999 instanceof cljs.core.Keyword))?G__58999.fqn:null);
switch (G__58999__$1) {
case "days":
return cljc.java_time.period.of_days(n);

break;
case "weeks":
return cljc.java_time.period.of_weeks(n);

break;
case "months":
return cljc.java_time.period.of_months(n);

break;
case "years":
return cljc.java_time.period.of_years(n);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58999__$1)].join('')));

}
});
(java.time.Duration.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.zone_offset.of_total_seconds(tick.core.new_duration((1),new cljs.core.Keyword(null,"seconds","seconds",-445266194)));
}));
tick.core.current_clock = (function tick$core$current_clock(){
var or__4185__auto__ = tick.core._STAR_clock_STAR_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljc.java_time.clock.system_default_zone();
}
});

/**
 * @interface
 */
tick.core.IClock = function(){};

/**
 * Make a clock
 */
tick.core.clock = (function tick$core$clock(_){
if((((!((_ == null)))) && ((!((_.tick$core$IClock$clock$arity$1 == null)))))){
return _.tick$core$IClock$clock$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.clock[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.clock["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IClock.clock",_);
}
}
}
});

(java.time.Instant.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$IClock$clock$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.clock.fixed(i__$1,tick.core.current_zone());
}));

(java.time.ZonedDateTime.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$core$IClock$clock$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.clock.fixed(zdt__$1.toInstant(),cljc.java_time.zoned_date_time.get_zone(zdt__$1));
}));

goog.object.set(tick.core.IClock,"object",true);

var G__59000_59453 = tick.core.clock;
var G__59001_59454 = "object";
var G__59002_59455 = (function (o){
return tick.core.clock(tick.core.zoned_date_time(o));
});
goog.object.set(G__59000_59453,G__59001_59454,G__59002_59455);

(java.time.Clock.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$core$IClock$clock$arity$1 = (function (clk){
var clk__$1 = this;
return clk__$1;
}));

(java.time.ZoneId.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneId.prototype.tick$core$IClock$clock$arity$1 = (function (z){
var z__$1 = this;
return cljc.java_time.clock.system(z__$1);
}));

goog.object.set(tick.core.IClock,"string",true);

var G__59003_59456 = tick.core.clock;
var G__59004_59457 = "string";
var G__59005_59458 = (function (s){
return tick.core.clock(tick.core.parse(s));
});
goog.object.set(G__59003_59456,G__59004_59457,G__59005_59458);
tick.core.advance = (function tick$core$advance(var_args){
var G__59007 = arguments.length;
switch (G__59007) {
case 1:
return tick.core.advance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.advance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.advance.cljs$core$IFn$_invoke$arity$1 = (function (clk){
return tick.core.advance.cljs$core$IFn$_invoke$arity$2(clk,tick.core.new_duration((1),new cljs.core.Keyword(null,"seconds","seconds",-445266194)));
}));

(tick.core.advance.cljs$core$IFn$_invoke$arity$2 = (function (clk,dur){
return cljc.java_time.clock.tick(clk,dur);
}));

(tick.core.advance.cljs$lang$maxFixedArity = 2);

(java.time.Clock.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$core$IConversion$instant$arity$1 = (function (clk){
var clk__$1 = this;
return clk__$1.instant();
}));
(java.time.Clock.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$core$IExtraction$zone$arity$1 = (function (clk){
var clk__$1 = this;
return cljc.java_time.clock.get_zone(clk__$1);
}));
(java.time.Clock.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$core$ITimeReify$in$arity$2 = (function (clk,zone){
var clk__$1 = this;
return clk__$1.withZone(zone);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {tick.core.IClock}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tick.core.AtomicClock = (function (_STAR_clock,__meta,__extmap,__hash){
this._STAR_clock = _STAR_clock;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tick.core.AtomicClock.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(tick.core.AtomicClock.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k59009,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__59013 = k59009;
var G__59013__$1 = (((G__59013 instanceof cljs.core.Keyword))?G__59013.fqn:null);
switch (G__59013__$1) {
case "*clock":
return self__._STAR_clock;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59009,else__4442__auto__);

}
}));

(tick.core.AtomicClock.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__59014){
var vec__59015 = p__59014;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59015,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59015,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(tick.core.AtomicClock.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#tick.core.AtomicClock{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*clock","*clock",-1520020371),self__._STAR_clock],null))], null),self__.__extmap));
}));

(tick.core.AtomicClock.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59008){
var self__ = this;
var G__59008__$1 = this;
return (new cljs.core.RecordIter((0),G__59008__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*clock","*clock",-1520020371)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tick.core.AtomicClock.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(tick.core.AtomicClock.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,self__.__extmap,self__.__hash));
}));

(tick.core.AtomicClock.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(tick.core.AtomicClock.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__59018 = (function (coll__4436__auto__){
return (1122898333 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__59018(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(tick.core.AtomicClock.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59010,other59011){
var self__ = this;
var this59010__$1 = this;
return (((!((other59011 == null)))) && ((this59010__$1.constructor === other59011.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59010__$1._STAR_clock,other59011._STAR_clock)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59010__$1.__extmap,other59011.__extmap)));
}));

(tick.core.AtomicClock.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*clock","*clock",-1520020371),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(tick.core.AtomicClock.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__59008){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__59019 = cljs.core.keyword_identical_QMARK_;
var expr__59020 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__59022 = new cljs.core.Keyword(null,"*clock","*clock",-1520020371);
var G__59023 = expr__59020;
return (pred__59019.cljs$core$IFn$_invoke$arity$2 ? pred__59019.cljs$core$IFn$_invoke$arity$2(G__59022,G__59023) : pred__59019.call(null,G__59022,G__59023));
})())){
return (new tick.core.AtomicClock(G__59008,self__.__meta,self__.__extmap,null));
} else {
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__59008),null));
}
}));

(tick.core.AtomicClock.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*clock","*clock",-1520020371),self__._STAR_clock,null))], null),self__.__extmap));
}));

(tick.core.AtomicClock.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__59008){
var self__ = this;
var this__4438__auto____$1 = this;
return (new tick.core.AtomicClock(self__._STAR_clock,G__59008,self__.__extmap,self__.__hash));
}));

(tick.core.AtomicClock.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(tick.core.AtomicClock.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(tick.core.AtomicClock.prototype.tick$core$IClock$clock$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__._STAR_clock);
}));

(tick.core.AtomicClock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return tick.core.instant(cljs.core.deref(self__._STAR_clock));
}));

(tick.core.AtomicClock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*clock","*clock",120511156,null)], null);
}));

(tick.core.AtomicClock.cljs$lang$type = true);

(tick.core.AtomicClock.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"tick.core/AtomicClock",null,(1),null));
}));

(tick.core.AtomicClock.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"tick.core/AtomicClock");
}));

/**
 * Positional factory function for tick.core/AtomicClock.
 */
tick.core.__GT_AtomicClock = (function tick$core$__GT_AtomicClock(_STAR_clock){
return (new tick.core.AtomicClock(_STAR_clock,null,null,null));
});

/**
 * Factory function for tick.core/AtomicClock, taking a map of keywords to field values.
 */
tick.core.map__GT_AtomicClock = (function tick$core$map__GT_AtomicClock(G__59012){
var extmap__4478__auto__ = (function (){var G__59024 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59012,new cljs.core.Keyword(null,"*clock","*clock",-1520020371));
if(cljs.core.record_QMARK_(G__59012)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59024);
} else {
return G__59024;
}
})();
return (new tick.core.AtomicClock(new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(G__59012),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

tick.core.atom = (function tick$core$atom(var_args){
var G__59026 = arguments.length;
switch (G__59026) {
case 1:
return tick.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return tick.core.atom.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (clk){
return tick.core.__GT_AtomicClock(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(clk));
}));

(tick.core.atom.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.atom.cljs$core$IFn$_invoke$arity$1(tick.core.current_clock());
}));

(tick.core.atom.cljs$lang$maxFixedArity = 1);

tick.core.swap_BANG_ = (function tick$core$swap_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59491 = arguments.length;
var i__4790__auto___59492 = (0);
while(true){
if((i__4790__auto___59492 < len__4789__auto___59491)){
args__4795__auto__.push((arguments[i__4790__auto___59492]));

var G__59493 = (i__4790__auto___59492 + (1));
i__4790__auto___59492 = G__59493;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return tick.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(tick.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (at,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),f,args);
}));

(tick.core.swap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tick.core.swap_BANG_.cljs$lang$applyTo = (function (seq59027){
var G__59028 = cljs.core.first(seq59027);
var seq59027__$1 = cljs.core.next(seq59027);
var G__59029 = cljs.core.first(seq59027__$1);
var seq59027__$2 = cljs.core.next(seq59027__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59028,G__59029,seq59027__$2);
}));

tick.core.swap_vals_BANG_ = (function tick$core$swap_vals_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59494 = arguments.length;
var i__4790__auto___59495 = (0);
while(true){
if((i__4790__auto___59495 < len__4789__auto___59494)){
args__4795__auto__.push((arguments[i__4790__auto___59495]));

var G__59496 = (i__4790__auto___59495 + (1));
i__4790__auto___59495 = G__59496;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return tick.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(tick.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (at,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_vals_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),f,args);
}));

(tick.core.swap_vals_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tick.core.swap_vals_BANG_.cljs$lang$applyTo = (function (seq59030){
var G__59031 = cljs.core.first(seq59030);
var seq59030__$1 = cljs.core.next(seq59030);
var G__59032 = cljs.core.first(seq59030__$1);
var seq59030__$2 = cljs.core.next(seq59030__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59031,G__59032,seq59030__$2);
}));

tick.core.compare_and_set_BANG_ = (function tick$core$compare_and_set_BANG_(at,oldval,newval){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.compare_and_set_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),oldval,newval);
});
tick.core.reset_BANG_ = (function tick$core$reset_BANG_(at,newval){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),newval);
});
tick.core.reset_vals_BANG_ = (function tick$core$reset_vals_BANG_(at,newval){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_vals_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),newval);
});

/**
 * @interface
 */
tick.core.ITimeArithmetic = function(){};

/**
 * Add to time
 */
tick.core._PLUS_ = (function tick$core$_PLUS_(t,d){
if((((!((t == null)))) && ((!((t.tick$core$ITimeArithmetic$_PLUS_$arity$2 == null)))))){
return t.tick$core$ITimeArithmetic$_PLUS_$arity$2(t,d);
} else {
var x__4487__auto__ = (((t == null))?null:t);
var m__4488__auto__ = (tick.core._PLUS_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4488__auto__.call(null,t,d));
} else {
var m__4485__auto__ = (tick.core._PLUS_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4485__auto__.call(null,t,d));
} else {
throw cljs.core.missing_protocol("ITimeArithmetic.+",t);
}
}
}
});

/**
 * Subtract from time, or negate
 */
tick.core._ = (function tick$core$_(t,d){
if((((!((t == null)))) && ((!((t.tick$core$ITimeArithmetic$_$arity$2 == null)))))){
return t.tick$core$ITimeArithmetic$_$arity$2(t,d);
} else {
var x__4487__auto__ = (((t == null))?null:t);
var m__4488__auto__ = (tick.core._[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4488__auto__.call(null,t,d));
} else {
var m__4485__auto__ = (tick.core._["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4485__auto__.call(null,t,d));
} else {
throw cljs.core.missing_protocol("ITimeArithmetic.-",t);
}
}
}
});

tick.core.minus_ = (function tick$core$minus_(var_args){
var G__59034 = arguments.length;
switch (G__59034) {
case 1:
return tick.core.minus_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.minus_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.minus_.cljs$core$IFn$_invoke$arity$1 = (function (d){
return d.negated();
}));

(tick.core.minus_.cljs$core$IFn$_invoke$arity$2 = (function (t,d){
return t.minus(d);
}));

(tick.core.minus_.cljs$lang$maxFixedArity = 2);

goog.object.set(tick.core.ITimeArithmetic,"object",true);

var G__59035_59504 = tick.core._PLUS_;
var G__59036_59505 = "object";
var G__59037_59506 = (function (t,d){
return t.plus(d);
});
goog.object.set(G__59035_59504,G__59036_59505,G__59037_59506);

var G__59038_59507 = tick.core._;
var G__59039_59508 = "object";
var G__59040_59509 = (function (t,d){
return t.minus(d);
});
goog.object.set(G__59038_59507,G__59039_59508,G__59040_59509);
/**
 * Return the duration as a negative duration
 */
tick.core.negated = (function tick$core$negated(d){
return d.negated();
});

/**
 * @interface
 */
tick.core.ITimeShift = function(){};

/**
 * Increment time
 */
tick.core.forward_number = (function tick$core$forward_number(_,n){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeShift$forward_number$arity$2 == null)))))){
return _.tick$core$ITimeShift$forward_number$arity$2(_,n);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.forward_number[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4488__auto__.call(null,_,n));
} else {
var m__4485__auto__ = (tick.core.forward_number["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4485__auto__.call(null,_,n));
} else {
throw cljs.core.missing_protocol("ITimeShift.forward-number",_);
}
}
}
});

/**
 * Increment time
 */
tick.core.forward_duration = (function tick$core$forward_duration(_,d){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeShift$forward_duration$arity$2 == null)))))){
return _.tick$core$ITimeShift$forward_duration$arity$2(_,d);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.forward_duration[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4488__auto__.call(null,_,d));
} else {
var m__4485__auto__ = (tick.core.forward_duration["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4485__auto__.call(null,_,d));
} else {
throw cljs.core.missing_protocol("ITimeShift.forward-duration",_);
}
}
}
});

/**
 * Decrement time
 */
tick.core.backward_number = (function tick$core$backward_number(_,n){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeShift$backward_number$arity$2 == null)))))){
return _.tick$core$ITimeShift$backward_number$arity$2(_,n);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.backward_number[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4488__auto__.call(null,_,n));
} else {
var m__4485__auto__ = (tick.core.backward_number["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4485__auto__.call(null,_,n));
} else {
throw cljs.core.missing_protocol("ITimeShift.backward-number",_);
}
}
}
});

/**
 * Decrement time
 */
tick.core.backward_duration = (function tick$core$backward_duration(_,d){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeShift$backward_duration$arity$2 == null)))))){
return _.tick$core$ITimeShift$backward_duration$arity$2(_,d);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.backward_duration[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4488__auto__.call(null,_,d));
} else {
var m__4485__auto__ = (tick.core.backward_duration["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4485__auto__.call(null,_,d));
} else {
throw cljs.core.missing_protocol("ITimeShift.backward-duration",_);
}
}
}
});

(java.time.YearMonth.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$core$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.plusMonths(n);
}));

(java.time.YearMonth.prototype.tick$core$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.minusMonths(n);
}));

(java.time.YearMonth.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
}));

(java.time.YearMonth.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
}));

(java.time.Year.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$core$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.plusYears(n);
}));

(java.time.Year.prototype.tick$core$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.minusYears(n);
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
}));

(java.time.Instant.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
}));

(java.time.Instant.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
}));

(Date.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return tick.core.instant(t__$1).plus(d);
}));

(Date.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return tick.core.instant(t__$1).minus(d);
}));

(java.time.LocalDate.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.plusDays(n);
}));

(java.time.LocalDate.prototype.tick$core$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.minusDays(n);
}));

(java.time.LocalDate.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
}));

(java.time.LocalDate.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
}));

(java.time.LocalTime.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
}));

(java.time.LocalTime.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
}));

(java.time.OffsetDateTime.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
}));

(java.time.OffsetDateTime.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
}));

(java.time.Clock.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (clk,d){
var clk__$1 = this;
return cljc.java_time.clock.offset(clk__$1,d);
}));

(java.time.Clock.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (clk,d){
var clk__$1 = this;
return cljc.java_time.clock.offset(clk__$1,tick.core.negated(d));
}));
tick.core._GT__GT_ = (function tick$core$_GT__GT_(t,n_or_d){
if(typeof n_or_d === 'number'){
return tick.core.forward_number(t,n_or_d);
} else {
return tick.core.forward_duration(t,n_or_d);
}
});
tick.core._LT__LT_ = (function tick$core$_LT__LT_(t,n_or_d){
if(typeof n_or_d === 'number'){
return tick.core.backward_number(t,n_or_d);
} else {
return tick.core.backward_duration(t,n_or_d);
}
});

/**
 * @interface
 */
tick.core.ITimeRangeable = function(){};

/**
 * Returns a lazy seq of times from start (inclusive) to end (exclusive, nil means forever), by step, where start defaults to 0, step to 1, and end to infinity.
 */
tick.core.range = (function tick$core$range(var_args){
var G__59042 = arguments.length;
switch (G__59042) {
case 1:
return tick.core.range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.core.range.cljs$core$IFn$_invoke$arity$1 = (function (from){
if((((!((from == null)))) && ((!((from.tick$core$ITimeRangeable$range$arity$1 == null)))))){
return from.tick$core$ITimeRangeable$range$arity$1(from);
} else {
var x__4487__auto__ = (((from == null))?null:from);
var m__4488__auto__ = (tick.core.range[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(from) : m__4488__auto__.call(null,from));
} else {
var m__4485__auto__ = (tick.core.range["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(from) : m__4485__auto__.call(null,from));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
}
}));

(tick.core.range.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
if((((!((from == null)))) && ((!((from.tick$core$ITimeRangeable$range$arity$2 == null)))))){
return from.tick$core$ITimeRangeable$range$arity$2(from,to);
} else {
var x__4487__auto__ = (((from == null))?null:from);
var m__4488__auto__ = (tick.core.range[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(from,to) : m__4488__auto__.call(null,from,to));
} else {
var m__4485__auto__ = (tick.core.range["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(from,to) : m__4485__auto__.call(null,from,to));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
}
}));

(tick.core.range.cljs$core$IFn$_invoke$arity$3 = (function (from,to,step){
if((((!((from == null)))) && ((!((from.tick$core$ITimeRangeable$range$arity$3 == null)))))){
return from.tick$core$ITimeRangeable$range$arity$3(from,to,step);
} else {
var x__4487__auto__ = (((from == null))?null:from);
var m__4488__auto__ = (tick.core.range[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(from,to,step) : m__4488__auto__.call(null,from,to,step));
} else {
var m__4485__auto__ = (tick.core.range["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(from,to,step) : m__4485__auto__.call(null,from,to,step));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
}
}));

(tick.core.range.cljs$lang$maxFixedArity = 3);


tick.core.greater = (function tick$core$greater(x,y){
if((cljs.core.compare(x,y) < (0))){
return y;
} else {
return x;
}
});
tick.core.max = (function tick$core$max(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59516 = arguments.length;
var i__4790__auto___59517 = (0);
while(true){
if((i__4790__auto___59517 < len__4789__auto___59516)){
args__4795__auto__.push((arguments[i__4790__auto___59517]));

var G__59518 = (i__4790__auto___59517 + (1));
i__4790__auto___59517 = G__59518;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return tick.core.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(tick.core.max.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__59043_SHARP_,p2__59044_SHARP_){
return tick.core.greater(p1__59043_SHARP_,p2__59044_SHARP_);
}),arg,args);
}));

(tick.core.max.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.core.max.cljs$lang$applyTo = (function (seq59045){
var G__59046 = cljs.core.first(seq59045);
var seq59045__$1 = cljs.core.next(seq59045);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59046,seq59045__$1);
}));

tick.core.lesser = (function tick$core$lesser(x,y){
if((cljs.core.compare(x,y) < (0))){
return x;
} else {
return y;
}
});
tick.core.min = (function tick$core$min(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59519 = arguments.length;
var i__4790__auto___59520 = (0);
while(true){
if((i__4790__auto___59520 < len__4789__auto___59519)){
args__4795__auto__.push((arguments[i__4790__auto___59520]));

var G__59521 = (i__4790__auto___59520 + (1));
i__4790__auto___59520 = G__59521;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(tick.core.min.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__59047_SHARP_,p2__59048_SHARP_){
return tick.core.lesser(p1__59047_SHARP_,p2__59048_SHARP_);
}),arg,args);
}));

(tick.core.min.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.core.min.cljs$lang$applyTo = (function (seq59049){
var G__59050 = cljs.core.first(seq59049);
var seq59049__$1 = cljs.core.next(seq59049);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59050,seq59049__$1);
}));

(java.time.Instant.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__59051_SHARP_){
return p1__59051_SHARP_.plusSeconds((1));
}),from__$1);
}));

(java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__59056 = cljs.core.iterate((function (p1__59052_SHARP_){
return p1__59052_SHARP_.plusSeconds((1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59053_SHARP_){
return tick.core._LT_(p1__59053_SHARP_,to);
}),G__59056);
} else {
return G__59056;
}
}));

(java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__59057 = cljs.core.iterate((function (p1__59054_SHARP_){
return p1__59054_SHARP_.plus(step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59055_SHARP_){
return tick.core._LT_(p1__59055_SHARP_,to);
}),G__59057);
} else {
return G__59057;
}
}));
(java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__59058_SHARP_){
return p1__59058_SHARP_.plusSeconds((1));
}),from__$1);
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__59063 = cljs.core.iterate((function (p1__59059_SHARP_){
return p1__59059_SHARP_.plusSeconds((1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59060_SHARP_){
return tick.core._LT_(p1__59060_SHARP_,to);
}),G__59063);
} else {
return G__59063;
}
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__59064 = cljs.core.iterate((function (p1__59061_SHARP_){
return p1__59061_SHARP_.plus(step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59062_SHARP_){
return tick.core._LT_(p1__59062_SHARP_,to);
}),G__59064);
} else {
return G__59064;
}
}));
(java.time.LocalDate.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__59065_SHARP_){
return p1__59065_SHARP_.plusDays((1));
}),from__$1);
}));

(java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__59070 = cljs.core.iterate((function (p1__59066_SHARP_){
return p1__59066_SHARP_.plusDays((1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59067_SHARP_){
return tick.core._LT_(p1__59067_SHARP_,to);
}),G__59070);
} else {
return G__59070;
}
}));

(java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__59071 = cljs.core.iterate((function (p1__59068_SHARP_){
return p1__59068_SHARP_.plusDays(step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59069_SHARP_){
return tick.core._LT_(p1__59069_SHARP_,to);
}),G__59071);
} else {
return G__59071;
}
}));
tick.core.inc = (function tick$core$inc(t){
return tick.core.forward_number(t,(1));
});
tick.core.dec = (function tick$core$dec(t){
return tick.core.backward_number(t,(1));
});
tick.core.tomorrow = (function tick$core$tomorrow(){
return tick.core.forward_number(tick.core.today(),(1));
});
tick.core.yesterday = (function tick$core$yesterday(){
return tick.core.backward_number(tick.core.today(),(1));
});
(java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__59072_SHARP_){
return p1__59072_SHARP_.plusSeconds((1));
}),from__$1);
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__59077 = cljs.core.iterate((function (p1__59073_SHARP_){
return p1__59073_SHARP_.plusSeconds((1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59074_SHARP_){
return tick.core._LT_(p1__59074_SHARP_,to);
}),G__59077);
} else {
return G__59077;
}
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__59078 = cljs.core.iterate((function (p1__59075_SHARP_){
return p1__59075_SHARP_.plus(step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59076_SHARP_){
return tick.core._LT_(p1__59076_SHARP_,to);
}),G__59078);
} else {
return G__59078;
}
}));
(java.time.YearMonth.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__59079_SHARP_){
return p1__59079_SHARP_.plusMonths((1));
}),from__$1);
}));

(java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__59084 = cljs.core.iterate((function (p1__59080_SHARP_){
return p1__59080_SHARP_.plusMonths((1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59081_SHARP_){
return tick.core._LT_(p1__59081_SHARP_,to);
}),G__59084);
} else {
return G__59084;
}
}));

(java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__59085 = cljs.core.iterate((function (p1__59082_SHARP_){
return p1__59082_SHARP_.plus(step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59083_SHARP_){
return tick.core._LT_(p1__59083_SHARP_,to);
}),G__59085);
} else {
return G__59085;
}
}));
(java.time.Year.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__59086_SHARP_){
return p1__59086_SHARP_.plusYears((1));
}),from__$1);
}));

(java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__59091 = cljs.core.iterate((function (p1__59087_SHARP_){
return p1__59087_SHARP_.plusYears((1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59088_SHARP_){
return tick.core._LT_(p1__59088_SHARP_,to);
}),G__59091);
} else {
return G__59091;
}
}));

(java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__59092 = cljs.core.iterate((function (p1__59089_SHARP_){
return p1__59089_SHARP_.plus(step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59090_SHARP_){
return tick.core._LT_(p1__59090_SHARP_,to);
}),G__59092);
} else {
return G__59092;
}
}));

/**
 * @interface
 */
tick.core.IDivisible = function(){};

/**
 * Divide time
 */
tick.core.divide = (function tick$core$divide(t,divisor){
if((((!((t == null)))) && ((!((t.tick$core$IDivisible$divide$arity$2 == null)))))){
return t.tick$core$IDivisible$divide$arity$2(t,divisor);
} else {
var x__4487__auto__ = (((t == null))?null:t);
var m__4488__auto__ = (tick.core.divide[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(t,divisor) : m__4488__auto__.call(null,t,divisor));
} else {
var m__4485__auto__ = (tick.core.divide["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(t,divisor) : m__4485__auto__.call(null,t,divisor));
} else {
throw cljs.core.missing_protocol("IDivisible.divide",t);
}
}
}
});

goog.object.set(tick.core.IDivisible,"string",true);

var G__59093_59525 = tick.core.divide;
var G__59094_59526 = "string";
var G__59095_59527 = (function (s,d){
return tick.core.divide(tick.core.parse(s),d);
});
goog.object.set(G__59093_59525,G__59094_59526,G__59095_59527);

/**
 * @interface
 */
tick.core.IDivisibleDuration = function(){};

/**
 * Divide a duration
 */
tick.core.divide_duration = (function tick$core$divide_duration(divisor,duration){
if((((!((divisor == null)))) && ((!((divisor.tick$core$IDivisibleDuration$divide_duration$arity$2 == null)))))){
return divisor.tick$core$IDivisibleDuration$divide_duration$arity$2(divisor,duration);
} else {
var x__4487__auto__ = (((divisor == null))?null:divisor);
var m__4488__auto__ = (tick.core.divide_duration[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(divisor,duration) : m__4488__auto__.call(null,divisor,duration));
} else {
var m__4485__auto__ = (tick.core.divide_duration["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(divisor,duration) : m__4485__auto__.call(null,divisor,duration));
} else {
throw cljs.core.missing_protocol("IDivisibleDuration.divide-duration",divisor);
}
}
}
});

goog.object.set(tick.core.IDivisibleDuration,"number",true);

var G__59096_59528 = tick.core.divide_duration;
var G__59097_59529 = "number";
var G__59098_59530 = (function (n,duration){
return duration.dividedBy(n);
});
goog.object.set(G__59096_59528,G__59097_59529,G__59098_59530);

(java.time.Duration.prototype.tick$core$IDivisibleDuration$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$core$IDivisibleDuration$divide_duration$arity$2 = (function (divisor,duration){
var divisor__$1 = this;
return (cljc.java_time.duration.get_seconds(duration) / cljc.java_time.duration.get_seconds(divisor__$1));
}));
(java.time.Duration.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$core$IDivisible$divide$arity$2 = (function (d,x){
var d__$1 = this;
return tick.core.divide_duration(x,d__$1);
}));

/**
 * @interface
 */
tick.core.ITimeSpan = function(){};

/**
 * Return the beginning of a span of time
 */
tick.core.beginning = (function tick$core$beginning(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeSpan$beginning$arity$1 == null)))))){
return _.tick$core$ITimeSpan$beginning$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.beginning[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.beginning["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpan.beginning",_);
}
}
}
});

/**
 * Return the end of a span of time
 */
tick.core.end = (function tick$core$end(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeSpan$end$arity$1 == null)))))){
return _.tick$core$ITimeSpan$end$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.end[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.end["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpan.end",_);
}
}
}
});

tick.core.duration = (function tick$core$duration(x){
return cljc.java_time.duration.between(tick.core.beginning(x),tick.core.end(x));
});
tick.core.beginning_composite = (function tick$core$beginning_composite(m){
var map__59099 = m;
var map__59099__$1 = (((((!((map__59099 == null))))?(((((map__59099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59099):map__59099);
var beginning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59099__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968));
var intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59099__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314));
if(cljs.core.truth_(intervals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),intervals));
} else {
return beginning;
}
});
tick.core.end_composite = (function tick$core$end_composite(m){
var map__59101 = m;
var map__59101__$1 = (((((!((map__59101 == null))))?(((((map__59101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59101):map__59101);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59101__$1,new cljs.core.Keyword("tick","end","tick/end",-269896517));
var intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59101__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314));
if(cljs.core.truth_(intervals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tick","end","tick/end",-269896517),intervals));
} else {
return end;
}
});
(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (m){
var m__$1 = this;
return tick.core.beginning_composite(m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$end$arity$1 = (function (m){
var m__$1 = this;
return tick.core.end_composite(m__$1);
}));
(cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (m){
var m__$1 = this;
return tick.core.beginning_composite(m__$1);
}));

(cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$end$arity$1 = (function (m){
var m__$1 = this;
return tick.core.end_composite(m__$1);
}));

/**
 * @interface
 */
tick.core.IBetween = function(){};

/**
 * Return the duration (or period) between two times
 */
tick.core.between = (function tick$core$between(v1,v2){
if((((!((v1 == null)))) && ((!((v1.tick$core$IBetween$between$arity$2 == null)))))){
return v1.tick$core$IBetween$between$arity$2(v1,v2);
} else {
var x__4487__auto__ = (((v1 == null))?null:v1);
var m__4488__auto__ = (tick.core.between[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__4488__auto__.call(null,v1,v2));
} else {
var m__4485__auto__ = (tick.core.between["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__4485__auto__.call(null,v1,v2));
} else {
throw cljs.core.missing_protocol("IBetween.between",v1);
}
}
}
});

(java.time.LocalDate.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.period.between(v1__$1,tick.core.date(v2));
}));

(java.time.LocalDateTime.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.core.date_time(v2));
}));

(java.time.Instant.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.core.instant(v2));
}));

goog.object.set(tick.core.IBetween,"string",true);

var G__59103_59538 = tick.core.between;
var G__59104_59539 = "string";
var G__59105_59540 = (function (v1,v2){
return tick.core.between(tick.core.parse(v1),tick.core.parse(v2));
});
goog.object.set(G__59103_59538,G__59104_59539,G__59105_59540);

(Date.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$core$IBetween$between$arity$2 = (function (x,y){
var x__$1 = this;
return tick.core.between(tick.core.instant(x__$1),tick.core.instant(y));
}));
/**
 * Does the span of time contain the given event? If the given event
 *   is itself a span, then t must wholly contain the beginning and end
 *   of the event.
 */
tick.core.coincident_QMARK_ = (function tick$core$coincident_QMARK_(t,event){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.compare(tick.core.beginning(t),tick.core.beginning(event)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.compare(tick.core.end(event),tick.core.end(t)))));
});
goog.object.set(tick.core.ITimeSpan,"null",true);

var G__59106_59543 = tick.core.beginning;
var G__59107_59544 = "null";
var G__59108_59545 = (function (_){
return null;
});
goog.object.set(G__59106_59543,G__59107_59544,G__59108_59545);

var G__59109_59546 = tick.core.end;
var G__59110_59547 = "null";
var G__59111_59548 = (function (_){
return null;
});
goog.object.set(G__59109_59546,G__59110_59547,G__59111_59548);

(java.time.YearMonth.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.beginning(ym__$1.atDay((1)));
}));

(java.time.YearMonth.prototype.tick$core$ITimeSpan$end$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.end(ym__$1.atEndOfMonth());
}));

(java.time.Year.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (year){
var year__$1 = this;
return tick.core.beginning(year__$1.atMonth((1)));
}));

(java.time.Year.prototype.tick$core$ITimeSpan$end$arity$1 = (function (year){
var year__$1 = this;
return tick.core.end(year__$1.atMonth((12)));
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.Instant.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.Instant.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(Date.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return tick.core.instant(i__$1);
}));

(Date.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return tick.core.instant(i__$1);
}));

(java.time.LocalDate.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (date){
var date__$1 = this;
return date__$1.atStartOfDay();
}));

(java.time.LocalDate.prototype.tick$core$ITimeSpan$end$arity$1 = (function (date){
var date__$1 = this;
return tick.core.inc(date__$1).atStartOfDay();
}));

goog.object.set(tick.core.ITimeSpan,"number",true);

var G__59112_59550 = tick.core.beginning;
var G__59113_59551 = "number";
var G__59114_59552 = (function (n){
return tick.core.beginning(tick.core.time(n));
});
goog.object.set(G__59112_59550,G__59113_59551,G__59114_59552);

var G__59115_59553 = tick.core.end;
var G__59116_59554 = "number";
var G__59117_59555 = (function (n){
return tick.core.end(tick.core.time(n));
});
goog.object.set(G__59115_59553,G__59116_59554,G__59117_59555);

goog.object.set(tick.core.ITimeSpan,"string",true);

var G__59118_59556 = tick.core.beginning;
var G__59119_59557 = "string";
var G__59120_59558 = (function (s){
return tick.core.beginning(tick.core.parse(s));
});
goog.object.set(G__59118_59556,G__59119_59557,G__59120_59558);

var G__59121_59559 = tick.core.end;
var G__59122_59560 = "string";
var G__59123_59561 = (function (s){
return tick.core.end(tick.core.parse(s));
});
goog.object.set(G__59121_59559,G__59122_59560,G__59123_59561);

(java.time.LocalTime.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(java.time.LocalTime.prototype.tick$core$ITimeSpan$end$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(java.time.OffsetDateTime.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.OffsetDateTime.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeSpan$end$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));
(java.time.LocalTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$core$ITimeReify$on$arity$2 = (function (t,date){
var t__$1 = this;
return date.atTime(t__$1);
}));

(java.time.OffsetTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetTime.prototype.tick$core$ITimeReify$on$arity$2 = (function (t,date){
var t__$1 = this;
return date.atTime(t__$1);
}));

(java.time.LocalDate.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$core$ITimeReify$at$arity$2 = (function (date,t){
var date__$1 = this;
return date__$1.atTime(tick.core.time(t));
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$ITimeReify$in$arity$2 = (function (ldt,z){
var ldt__$1 = this;
return ldt__$1.atZone(z);
}));

(java.time.LocalDateTime.prototype.tick$core$ITimeReify$offset_by$arity$2 = (function (ldt,offset){
var ldt__$1 = this;
return ldt__$1.atZone(tick.core.zone_offset(offset));
}));

(java.time.Instant.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2(t__$1,z);
}));

(java.time.Instant.prototype.tick$core$ITimeReify$offset_by$arity$2 = (function (t,offset){
var t__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2(t__$1,tick.core.zone_offset(offset));
}));

(java.time.ZonedDateTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return t__$1.withZoneSameInstant(tick.core.zone(z));
}));

(Date.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return tick.core.in$(tick.core.instant(t__$1),tick.core.zone(z));
}));

/**
 * @interface
 */
tick.core.ILocalTime = function(){};

/**
 * Is the time a java.time.LocalTime or java.time.LocalDateTime?
 */
tick.core.local_QMARK_ = (function tick$core$local_QMARK_(t){
if((((!((t == null)))) && ((!((t.tick$core$ILocalTime$local_QMARK_$arity$1 == null)))))){
return t.tick$core$ILocalTime$local_QMARK_$arity$1(t);
} else {
var x__4487__auto__ = (((t == null))?null:t);
var m__4488__auto__ = (tick.core.local_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__4488__auto__.call(null,t));
} else {
var m__4485__auto__ = (tick.core.local_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__4485__auto__.call(null,t));
} else {
throw cljs.core.missing_protocol("ILocalTime.local?",t);
}
}
}
});

(Date.prototype.tick$core$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$core$ILocalTime$local_QMARK_$arity$1 = (function (d){
var d__$1 = this;
return false;
}));

(java.time.Instant.prototype.tick$core$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$ILocalTime$local_QMARK_$arity$1 = (function (i){
var i__$1 = this;
return false;
}));

(java.time.LocalDateTime.prototype.tick$core$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$ILocalTime$local_QMARK_$arity$1 = (function (i){
var i__$1 = this;
return true;
}));

(java.time.LocalTime.prototype.tick$core$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$core$ILocalTime$local_QMARK_$arity$1 = (function (i){
var i__$1 = this;
return true;
}));

goog.object.set(tick.core.ILocalTime,"null",true);

var G__59124_59565 = tick.core.local_QMARK_;
var G__59125_59566 = "null";
var G__59126_59567 = (function (_){
return null;
});
goog.object.set(G__59124_59565,G__59125_59566,G__59126_59567);

/**
 * @interface
 */
tick.core.MinMax = function(){};

/**
 * Return the min
 */
tick.core.min_of_type = (function tick$core$min_of_type(_){
if((((!((_ == null)))) && ((!((_.tick$core$MinMax$min_of_type$arity$1 == null)))))){
return _.tick$core$MinMax$min_of_type$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.min_of_type[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.min_of_type["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("MinMax.min-of-type",_);
}
}
}
});

/**
 * Return the max
 */
tick.core.max_of_type = (function tick$core$max_of_type(_){
if((((!((_ == null)))) && ((!((_.tick$core$MinMax$max_of_type$arity$1 == null)))))){
return _.tick$core$MinMax$max_of_type$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (tick.core.max_of_type[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (tick.core.max_of_type["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("MinMax.max-of-type",_);
}
}
}
});

(java.time.LocalTime.prototype.tick$core$MinMax$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$core$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_time.min;
}));

(java.time.LocalTime.prototype.tick$core$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_time.max;
}));

(java.time.LocalDateTime.prototype.tick$core$MinMax$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$core$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_date_time.min;
}));

(java.time.LocalDateTime.prototype.tick$core$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_date_time.max;
}));

(java.time.Instant.prototype.tick$core$MinMax$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$core$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.instant.min;
}));

(java.time.Instant.prototype.tick$core$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.instant.max;
}));

goog.object.set(tick.core.MinMax,"null",true);

var G__59127_59571 = tick.core.min_of_type;
var G__59128_59572 = "null";
var G__59129_59573 = (function (_){
return cljc.java_time.instant.min;
});
goog.object.set(G__59127_59571,G__59128_59572,G__59129_59573);

var G__59130_59574 = tick.core.max_of_type;
var G__59131_59575 = "null";
var G__59132_59576 = (function (_){
return cljc.java_time.instant.max;
});
goog.object.set(G__59130_59574,G__59131_59575,G__59132_59576);
tick.core.ago = (function tick$core$ago(dur){
return tick.core.backward_duration(tick.core.now(),dur);
});
tick.core.hence = (function tick$core$hence(dur){
return tick.core.forward_duration(tick.core.now(),dur);
});
tick.core.midnight_QMARK_ = (function tick$core$midnight_QMARK_(t){
return cljc.java_time.duration.between(t,tick.core.beginning(tick.core.date(t))).isZero();
});

//# sourceMappingURL=tick.core.js.map
