goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38303_38311 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38304_38312 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38305_38313 = true;
var _STAR_print_fn_STAR__temp_val__38306_38314 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38305_38313);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38306_38314);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38304_38312);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38303_38311);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}catch (e38300){if((e38300 instanceof Error)){
var e1 = e38300;
try{return obj.toString();
}catch (e38301){if((e38301 instanceof Error)){
var e2 = e38301;
return "<<Un-printable Type>>";
} else {
throw e38301;

}
}} else {
throw e38300;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__38308 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__38309 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__38309);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__38308);
}});

//# sourceMappingURL=devcards.util.utils.js.map
