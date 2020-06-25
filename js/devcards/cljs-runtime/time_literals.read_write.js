goog.provide('time_literals.read_write');
goog.require('cljs.core');
goog.require('java.time');
goog.require('cljs.reader');
time_literals.read_write.print_to_string = (function time_literals$read_write$print_to_string(t,o){
return ["#time/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),"\""].join('');
});
time_literals.read_write.print_period = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"period");
time_literals.read_write.print_date = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"date");
time_literals.read_write.print_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"date-time");
time_literals.read_write.print_zoned_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"zoned-date-time");
time_literals.read_write.print_offset_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"offset-time");
time_literals.read_write.print_instant = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"instant");
time_literals.read_write.print_offset_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"offset-date-time");
time_literals.read_write.print_zone = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"zone");
time_literals.read_write.print_day_of_week = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"day-of-week");
time_literals.read_write.print_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"time");
time_literals.read_write.print_month = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"month");
time_literals.read_write.print_month_day = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"month-day");
time_literals.read_write.print_duration = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"duration");
time_literals.read_write.print_year = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"year");
time_literals.read_write.print_year_month = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"year-month");
time_literals.read_write.print_time_literals_cljs_BANG_ = (function time_literals$read_write$print_time_literals_cljs_BANG_(){
(java.time.MonthDay.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.MonthDay.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_month_day.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_month_day.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_month_day.call(null,d__$1)));
}));

(java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_year_month.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_year_month.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_year_month.call(null,d__$1)));
}));

(java.time.Year.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_year.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_year.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_year.call(null,d__$1)));
}));

(java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_zoned_date_time.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_zoned_date_time.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_zoned_date_time.call(null,d__$1)));
}));

(java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_offset_time.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_offset_time.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_offset_time.call(null,d__$1)));
}));

(java.time.Instant.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_instant.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_instant.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_instant.call(null,d__$1)));
}));

(java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_zone.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_zone.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_zone.call(null,d__$1)));
}));

(java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_date.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_date.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_date.call(null,d__$1)));
}));

(java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_time.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_time.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_time.call(null,d__$1)));
}));

(java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_date_time.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_date_time.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_date_time.call(null,d__$1)));
}));

(java.time.Month.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Month.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_month.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_month.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_month.call(null,d__$1)));
}));

(java.time.Period.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_period.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_period.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_period.call(null,d__$1)));
}));

(java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_day_of_week.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_day_of_week.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_day_of_week.call(null,d__$1)));
}));

(java.time.Duration.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

return (java.time.Duration.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_duration.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_duration.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_duration.call(null,d__$1)));
}));
});
time_literals.read_write.print_time_literals_clj_BANG_ = (function time_literals$read_write$print_time_literals_clj_BANG_(){
return null;
});
time_literals.read_write.tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("time","instant","time/instant",-2013236992,null),new cljs.core.Symbol("time","duration","time/duration",-1273941668,null),new cljs.core.Symbol("time","offset-date-time","time/offset-date-time",-1254592482,null),new cljs.core.Symbol("time","day-of-week","time/day-of-week",-1018890461,null),new cljs.core.Symbol("time","time","time/time",-1246984162,null),new cljs.core.Symbol("time","year-month","time/year-month",-1840595535,null),new cljs.core.Symbol("time","offset-time","time/offset-time",-1026521346,null),new cljs.core.Symbol("time","period","time/period",1291634901,null),new cljs.core.Symbol("time","zoned-date-time","time/zoned-date-time",-2125640645,null),new cljs.core.Symbol("time","month","time/month",-324062169,null),new cljs.core.Symbol("time","date","time/date",179823674,null),new cljs.core.Symbol("time","year","time/year",1979222727,null),new cljs.core.Symbol("time","month-day","time/month-day",61138729,null),new cljs.core.Symbol("time","date-time","time/date-time",1814680468,null),new cljs.core.Symbol("time","zone","time/zone",-580695523,null)],[(function (t){
return java.time.Instant.parse(t);
}),(function (t){
return java.time.Duration.parse(t);
}),(function (t){
return java.time.OffsetDateTime.parse(t);
}),(function (t){
return java.time.DayOfWeek.valueOf(t);
}),(function (t){
return java.time.LocalTime.parse(t);
}),(function (t){
return java.time.YearMonth.parse(t);
}),(function (t){
return java.time.OffsetTime.parse(t);
}),(function (t){
return java.time.Period.parse(t);
}),(function (t){
return java.time.ZonedDateTime.parse(t);
}),(function (t){
return java.time.Month.valueOf(t);
}),(function (t){
return java.time.LocalDate.parse(t);
}),(function (t){
return java.time.Year.parse(t);
}),(function (t){
return java.time.MonthDay.parse(t);
}),(function (t){
return java.time.LocalDateTime.parse(t);
}),(function (t){
return java.time.ZoneId.of(t);
})]);
var seq__50435_50459 = cljs.core.seq(time_literals.read_write.tags);
var chunk__50436_50460 = null;
var count__50437_50461 = (0);
var i__50438_50462 = (0);
while(true){
if((i__50438_50462 < count__50437_50461)){
var vec__50445_50464 = chunk__50436_50460.cljs$core$IIndexed$_nth$arity$2(null,i__50438_50462);
var tag_50465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50445_50464,(0),null);
var read_fn_50466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50445_50464,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_50465,read_fn_50466);


var G__50470 = seq__50435_50459;
var G__50471 = chunk__50436_50460;
var G__50472 = count__50437_50461;
var G__50473 = (i__50438_50462 + (1));
seq__50435_50459 = G__50470;
chunk__50436_50460 = G__50471;
count__50437_50461 = G__50472;
i__50438_50462 = G__50473;
continue;
} else {
var temp__5735__auto___50474 = cljs.core.seq(seq__50435_50459);
if(temp__5735__auto___50474){
var seq__50435_50475__$1 = temp__5735__auto___50474;
if(cljs.core.chunked_seq_QMARK_(seq__50435_50475__$1)){
var c__4609__auto___50476 = cljs.core.chunk_first(seq__50435_50475__$1);
var G__50477 = cljs.core.chunk_rest(seq__50435_50475__$1);
var G__50478 = c__4609__auto___50476;
var G__50479 = cljs.core.count(c__4609__auto___50476);
var G__50480 = (0);
seq__50435_50459 = G__50477;
chunk__50436_50460 = G__50478;
count__50437_50461 = G__50479;
i__50438_50462 = G__50480;
continue;
} else {
var vec__50448_50481 = cljs.core.first(seq__50435_50475__$1);
var tag_50482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50448_50481,(0),null);
var read_fn_50483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50448_50481,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_50482,read_fn_50483);


var G__50484 = cljs.core.next(seq__50435_50475__$1);
var G__50485 = null;
var G__50486 = (0);
var G__50487 = (0);
seq__50435_50459 = G__50484;
chunk__50436_50460 = G__50485;
count__50437_50461 = G__50486;
i__50438_50462 = G__50487;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=time_literals.read_write.js.map
