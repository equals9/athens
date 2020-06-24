goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('posh.reagent');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__46508__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46509__auto__;
}catch (e55700){var e = e55700;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"athena","athena",-1523991628),cljs.core.not(new cljs.core.Keyword(null,"athena","athena",-1523991628).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__46508__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = cljs.core.assoc_in((function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})(),(function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})(),(function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46509__auto__;
}catch (e55701){var e = e55701;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__46508__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = cljs.core.assoc_in((function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})(),(function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})(),(function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46509__auto__;
}catch (e55702){var e = e55702;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__46508__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = cljs.core.assoc_in((function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})(),(function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46509__auto__;
}catch (e55703){var e = e55703;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__55704){
var vec__55705 = p__55704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55705,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55705,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new cljs.core.Symbol(null,"uid","uid",192762127,null)));

var opts__46508__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})(),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),(function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new cljs.core.Symbol(null,"uid","uid",192762127,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46509__auto__;
}catch (e55708){var e = e55708;
throw e;
}}):(function (db,p__55709){
var vec__55710 = p__55709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55710,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55710,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),uid);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),(function (db,p__55713){
var vec__55714 = p__55713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55714,(0),null);
var map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55714,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),map);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),(function (db,p__55717){
var vec__55718 = p__55717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55718,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55718,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),uid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null));

var opts__46508__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46509__auto__;
}catch (e55721){var e = e55721;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),(function (_,p__55722){
var vec__55723 = p__55722;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55723,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55723,(1),null);
var datoms = athens.db.str_to_db_tx(json_str);
var new_db = datascript.core.db_with((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)),datoms);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new_db,new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920),(function (p__55726){
var map__55727 = p__55726;
var map__55727__$1 = (((((!((map__55727 == null))))?(((((map__55727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55727):map__55727);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55727__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5733__auto__ = localStorage.getItem("datascript/DB");
if(cljs.core.truth_(temp__5733__auto__)){
var stored = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),datascript.transit.read_transit_str(stored),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null)], null);
}
}));
athens.events.reindex = (function athens$events$reindex(blocks){
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("block","order","block/order",-1429282437),i);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),blocks)));
});
athens.events.reindex_parent = (function athens$events$reindex_parent(source,parent){
return athens.events.reindex(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55729_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(p1__55729_SHARP_),source);
}),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(parent)));
});
athens.events.reindex_target = (function athens$events$reindex_target(_source,target){
var target_entity = cljs.core.deref((function (){var G__55730 = athens.db.dsdb;
var G__55731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","order","block/order",-1429282437)], null)], null)], null);
var G__55732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__55730,G__55731,G__55732) : posh.reagent.pull.call(null,G__55730,G__55731,G__55732));
})());
return athens.events.reindex(cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2349),new cljs.core.Keyword("block","order","block/order",-1429282437),(-1)], null),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(target_entity)));
});
/**
 * takes in a block string and returns a parent with its children
 */
athens.events.get_parent = (function athens$events$get_parent(uid){
var parent_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__55733 = athens.db.dsdb;
var G__55734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_children","block/_children",1128070632)], null);
var G__55735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__55733,G__55734,G__55735) : posh.reagent.pull.call(null,G__55733,G__55734,G__55735));
})()))));
return cljs.core.deref((function (){var G__55736 = athens.db.dsdb;
var G__55737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437)], null)], null)], null);
var G__55738 = parent_eid;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__55736,G__55737,G__55738) : posh.reagent.pull.call(null,G__55736,G__55737,G__55738));
})());
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__55739){
var vec__55740 = p__55739;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55740,(0),null);
var map__55743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55740,(1),null);
var map__55743__$1 = (((((!((map__55743 == null))))?(((((map__55743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55743):map__55743);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55743__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55743__$1,new cljs.core.Keyword(null,"target","target",253001721));
var _kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55743__$1,new cljs.core.Keyword(null,"_kind","_kind",-1675922495));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),new cljs.core.Symbol(null,"parent-children","parent-children",-476726550,null),cljs.core.list(new cljs.core.Symbol(null,"reindex-parent","reindex-parent",-1868165072,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)),new cljs.core.Symbol(null,"_target-children","_target-children",1352621394,null),cljs.core.list(new cljs.core.Symbol(null,"reindex-target","reindex-target",2041174326,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"parent-children","parent-children",-476726550,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),cljs.core.list(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Symbol(null,"parent","parent",761652748,null)),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null)], null)], null)));

var opts__46508__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = (function (){var parent = (function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = athens.events.get_parent((function (){var opts__46508__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = source;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46509__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46509__auto__;
})();
var parent_children = (function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = athens.events.reindex_parent((function (){var opts__46508__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = source;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46509__auto__;
})(),(function (){var opts__46508__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = parent;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46509__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reindex-parent","reindex-parent",-1868165072,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46509__auto__;
})();
var _target_children = (function (){var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = athens.events.reindex_target((function (){var opts__46508__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = source;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46509__auto__;
})(),(function (){var opts__46508__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = target;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46509__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reindex-target","reindex-target",2041174326,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46509__auto__;
})();
var opts__46508__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46509__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source], null),new cljs.core.Keyword("block","children","block/children",-1040716209),parent_children], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source], null)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"parent-children","parent-children",-476726550,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),cljs.core.list(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Symbol(null,"parent","parent",761652748,null)),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46509__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46509__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),new cljs.core.Symbol(null,"parent-children","parent-children",-476726550,null),cljs.core.list(new cljs.core.Symbol(null,"reindex-parent","reindex-parent",-1868165072,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)),new cljs.core.Symbol(null,"_target-children","_target-children",1352621394,null),cljs.core.list(new cljs.core.Symbol(null,"reindex-target","reindex-target",2041174326,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"parent-children","parent-children",-476726550,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),cljs.core.list(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Symbol(null,"parent","parent",761652748,null)),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46509__auto__;
}catch (e55745){var e = e55745;
throw e;
}}):(function (_,p__55746){
var vec__55747 = p__55746;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55747,(0),null);
var map__55750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55747,(1),null);
var map__55750__$1 = (((((!((map__55750 == null))))?(((((map__55750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55750):map__55750);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55750__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55750__$1,new cljs.core.Keyword(null,"target","target",253001721));
var _kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55750__$1,new cljs.core.Keyword(null,"_kind","_kind",-1675922495));
var parent = athens.events.get_parent(source);
var parent_children = athens.events.reindex_parent(source,parent);
var _target_children = athens.events.reindex_target(source,target);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source], null),new cljs.core.Keyword("block","children","block/children",-1040716209),parent_children], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source], null)], null)], null)], null);
})));

//# sourceMappingURL=athens.events.js.map
