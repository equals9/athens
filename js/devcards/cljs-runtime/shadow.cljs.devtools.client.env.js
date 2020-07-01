goog.provide('shadow.cljs.devtools.client.env');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.pprint');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.devtools.client.env.module_loaded = (function shadow$cljs$devtools$client$env$module_loaded(name){
return shadow.cljs.devtools.client.env.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
shadow.cljs.devtools.client.env.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$env$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.env.active_modules_ref),module);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.runtime_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.runtime_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.enabled = goog.define("shadow.cljs.devtools.client.env.enabled",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.autoload = goog.define("shadow.cljs.devtools.client.env.autoload",true);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.module_format = goog.define("shadow.cljs.devtools.client.env.module_format","goog");
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.reload_with_state = goog.define("shadow.cljs.devtools.client.env.reload_with_state",false);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.build_id = goog.define("shadow.cljs.devtools.client.env.build_id","");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.proc_id = goog.define("shadow.cljs.devtools.client.env.proc_id","");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.server_host = goog.define("shadow.cljs.devtools.client.env.server_host","");
/**
 * @define {number}
 */
shadow.cljs.devtools.client.env.server_port = goog.define("shadow.cljs.devtools.client.env.server_port",(8200));
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.repl_pprint = goog.define("shadow.cljs.devtools.client.env.repl_pprint",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.use_document_host = goog.define("shadow.cljs.devtools.client.env.use_document_host",true);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.devtools_url = goog.define("shadow.cljs.devtools.client.env.devtools_url","");
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.ssl = goog.define("shadow.cljs.devtools.client.env.ssl",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.ignore_warnings = goog.define("shadow.cljs.devtools.client.env.ignore_warnings",false);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.log_style = goog.define("shadow.cljs.devtools.client.env.log_style","font-weight: bold;");
shadow.cljs.devtools.client.env.devtools_info = (function shadow$cljs$devtools$client$env$devtools_info(){
return ({"server-port": shadow.cljs.devtools.client.env.server_port, "server-host": shadow.cljs.devtools.client.env.server_host, "build-id": shadow.cljs.devtools.client.env.build_id, "proc-id": shadow.cljs.devtools.client.env.proc_id, "runtime-id": shadow.cljs.devtools.client.env.runtime_id});
});
shadow.cljs.devtools.client.env.get_server_host = (function shadow$cljs$devtools$client$env$get_server_host(){
if(cljs.core.truth_(((shadow.cljs.devtools.client.env.use_document_host)?(function (){var and__4174__auto__ = goog.global.document;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = goog.global.document.location;
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.seq(goog.global.document.location.hostname);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})():false))){
return document.location.hostname;
} else {
if(cljs.core.seq(shadow.cljs.devtools.client.env.server_host)){
return shadow.cljs.devtools.client.env.server_host;
} else {
return "localhost";

}
}
});
shadow.cljs.devtools.client.env.get_url_base = (function shadow$cljs$devtools$client$env$get_url_base(){
if(cljs.core.seq(shadow.cljs.devtools.client.env.devtools_url)){
return shadow.cljs.devtools.client.env.devtools_url;
} else {
return ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_server_host()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port)].join('');
}
});
shadow.cljs.devtools.client.env.get_ws_url_base = (function shadow$cljs$devtools$client$env$get_ws_url_base(){
return clojure.string.replace(shadow.cljs.devtools.client.env.get_url_base(),/^http/,"ws");
});
shadow.cljs.devtools.client.env.ws_url = (function shadow$cljs$devtools$client$env$ws_url(runtime_type){
if((runtime_type instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? runtime-type)"));
}

return [shadow.cljs.devtools.client.env.get_ws_url_base(),"/ws/worker/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id,"/",cljs.core.name(runtime_type)].join('');
});
shadow.cljs.devtools.client.env.ws_listener_url = (function shadow$cljs$devtools$client$env$ws_listener_url(client_type){
return [shadow.cljs.devtools.client.env.get_ws_url_base(),"/ws/listener/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id].join('');
});
shadow.cljs.devtools.client.env.files_url = (function shadow$cljs$devtools$client$env$files_url(){
return [shadow.cljs.devtools.client.env.get_url_base(),"/worker/files/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id].join('');
});
shadow.cljs.devtools.client.env.repl_print_fn = (((!(shadow.cljs.devtools.client.env.repl_pprint)))?cljs.core.pr_str:(function shadow$cljs$devtools$client$env$repl_pprint(obj){
var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60183_60242 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60184_60243 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60185_60244 = true;
var _STAR_print_fn_STAR__temp_val__60186_60245 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60185_60244);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60186_60245);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60184_60243);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60183_60242);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}));
shadow.cljs.devtools.client.env.repl_error = (function shadow$cljs$devtools$client$env$repl_error(e){
var G__60187 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","invoke-error","repl/invoke-error",839951858),new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
if(cljs.core.truth_(e.hasOwnProperty("stack"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60187,new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack);
} else {
return G__60187;
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.repl_results_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.repl_results_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.cljs.devtools.client.env.repl_call = (function shadow$cljs$devtools$client$env$repl_call(repl_expr,repl_error){
try{var result_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","result","repl/result",1421065572),new cljs.core.Keyword(null,"result-id","result-id",-2004530966),result_id], null);
var start = Date.now();
var ret = (repl_expr.cljs$core$IFn$_invoke$arity$0 ? repl_expr.cljs$core$IFn$_invoke$arity$0() : repl_expr.call(null));
var runtime = (Date.now() - start);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.repl_results_ref,cljs.core.assoc,result_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now(),new cljs.core.Keyword(null,"result","result",1415092211),ret], null));

(cljs.core._STAR_3 = cljs.core._STAR_2);

(cljs.core._STAR_2 = cljs.core._STAR_1);

(cljs.core._STAR_1 = ret);

try{var printed = (shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1(ret) : shadow.cljs.devtools.client.env.repl_print_fn.call(null,ret));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.repl_results_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result_id,new cljs.core.Keyword(null,"printed","printed",1871492381)], null),printed);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"value","value",305978217),printed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ms","ms",-1152709733),runtime], 0));
}catch (e60189){var e = e60189;
console.log("encoding of result failed",e,ret);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),"ENCODING FAILED, check host console");
}}catch (e60188){var e = e60188;
(cljs.core._STAR_e = e);

return (repl_error.cljs$core$IFn$_invoke$arity$1 ? repl_error.cljs$core$IFn$_invoke$arity$1(e) : repl_error.call(null,e));
}});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.reset_print_fn_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.reset_print_fn_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.env.set_print_fns_BANG_ = (function shadow$cljs$devtools$client$env$set_print_fns_BANG_(msg_fn){
var original_print_fn = cljs.core._STAR_print_fn_STAR_;
var original_print_err_fn = cljs.core._STAR_print_err_fn_STAR_;
cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.reset_print_fn_ref,(function shadow$cljs$devtools$client$env$set_print_fns_BANG__$_reset_print_fns_BANG_(){
cljs.core.set_print_fn_BANG_(original_print_fn);

return cljs.core.set_print_err_fn_BANG_(original_print_err_fn);
}));

cljs.core.set_print_fn_BANG_((function() { 
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate = function (args){
var G__60190_60246 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","out","repl/out",-905715102),new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",args)], null);
(msg_fn.cljs$core$IFn$_invoke$arity$1 ? msg_fn.cljs$core$IFn$_invoke$arity$1(G__60190_60246) : msg_fn.call(null,G__60190_60246));

if(cljs.core.truth_(original_print_fn)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(original_print_fn,args);
} else {
return null;
}
};
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60247__i = 0, G__60247__a = new Array(arguments.length -  0);
while (G__60247__i < G__60247__a.length) {G__60247__a[G__60247__i] = arguments[G__60247__i + 0]; ++G__60247__i;}
  args = new cljs.core.IndexedSeq(G__60247__a,0,null);
} 
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate.call(this,args);};
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$lang$maxFixedArity = 0;
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$lang$applyTo = (function (arglist__60248){
var args = cljs.core.seq(arglist__60248);
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate(args);
});
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate;
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn;
})()
);

return cljs.core.set_print_err_fn_BANG_((function() { 
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate = function (args){
var G__60191_60249 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","err","repl/err",-2086562244),new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",args)], null);
(msg_fn.cljs$core$IFn$_invoke$arity$1 ? msg_fn.cljs$core$IFn$_invoke$arity$1(G__60191_60249) : msg_fn.call(null,G__60191_60249));

if(cljs.core.truth_(original_print_err_fn)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(original_print_err_fn,args);
} else {
return null;
}
};
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60250__i = 0, G__60250__a = new Array(arguments.length -  0);
while (G__60250__i < G__60250__a.length) {G__60250__a[G__60250__i] = arguments[G__60250__i + 0]; ++G__60250__i;}
  args = new cljs.core.IndexedSeq(G__60250__a,0,null);
} 
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate.call(this,args);};
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$lang$maxFixedArity = 0;
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$lang$applyTo = (function (arglist__60251){
var args = cljs.core.seq(arglist__60251);
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate(args);
});
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$core$IFn$_invoke$arity$variadic = shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate;
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn;
})()
);
});
shadow.cljs.devtools.client.env.reset_print_fns_BANG_ = (function shadow$cljs$devtools$client$env$reset_print_fns_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.env.reset_print_fn_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
(x.cljs$core$IFn$_invoke$arity$0 ? x.cljs$core$IFn$_invoke$arity$0() : x.call(null));

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.reset_print_fn_ref,null);
} else {
return null;
}
});
shadow.cljs.devtools.client.env.async_ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("repl","session-start","repl/session-start",-1824978454),null,new cljs.core.Keyword("repl","init","repl/init",-1883779019),null,new cljs.core.Keyword("repl","require","repl/require",-497010086),null], null), null);
shadow.cljs.devtools.client.env.repl_queue_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.repl_queue_arr !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.repl_queue_arr = [];
}
shadow.cljs.devtools.client.env.process_next_BANG_ = (function shadow$cljs$devtools$client$env$process_next_BANG_(){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.env.repl_queue_ref))){
return null;
} else {
var temp__5739__auto__ = shadow.cljs.devtools.client.env.repl_queue_arr.shift();
if((temp__5739__auto__ == null)){
return null;
} else {
var task = temp__5739__auto__;
cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.repl_queue_ref,true);

return (task.cljs$core$IFn$_invoke$arity$0 ? task.cljs$core$IFn$_invoke$arity$0() : task.call(null));
}
}
});
shadow.cljs.devtools.client.env.done_BANG_ = (function shadow$cljs$devtools$client$env$done_BANG_(){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.repl_queue_ref,false);

return shadow.cljs.devtools.client.env.process_next_BANG_();
});
shadow.cljs.devtools.client.env.process_ws_msg = (function shadow$cljs$devtools$client$env$process_ws_msg(text,handler){
var _STAR_default_data_reader_fn_STAR__orig_val__60192 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
var _STAR_default_data_reader_fn_STAR__temp_val__60193 = (function (tag,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tagged-literal","tagged-literal",1758013066),tag,value], null);
});
(cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR__temp_val__60193);

try{try{var msg_60252 = cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
shadow.cljs.devtools.client.env.repl_queue_arr.push((function (){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(msg_60252,shadow.cljs.devtools.client.env.done_BANG_) : handler.call(null,msg_60252,shadow.cljs.devtools.client.env.done_BANG_));
}));

return shadow.cljs.devtools.client.env.process_next_BANG_();
}catch (e60194){var e = e60194;
console.warn("failed to parse websocket message",text,e);

throw e;
}}finally {(cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR__orig_val__60192);
}});
shadow.cljs.devtools.client.env.make_task_fn = (function shadow$cljs$devtools$client$env$make_task_fn(p__60195,p__60196){
var map__60197 = p__60195;
var map__60197__$1 = (((((!((map__60197 == null))))?(((((map__60197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60197):map__60197);
var log_missing_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60197__$1,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765));
var log_call_async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60197__$1,new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192));
var log_call = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60197__$1,new cljs.core.Keyword(null,"log-call","log-call",412404391));
var map__60198 = p__60196;
var map__60198__$1 = (((((!((map__60198 == null))))?(((((map__60198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60198):map__60198);
var fn_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60198__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60198__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60198__$1,new cljs.core.Keyword(null,"async","async",1050769601));
return (function (next){
try{var fn_obj = goog.getObjectByName(fn_str,$CLJS);
if((fn_obj == null)){
if(cljs.core.truth_(log_missing_fn)){
(log_missing_fn.cljs$core$IFn$_invoke$arity$1 ? log_missing_fn.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_missing_fn.call(null,fn_sym));
} else {
}

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
} else {
if(cljs.core.truth_(async)){
if(cljs.core.truth_(log_call_async)){
(log_call_async.cljs$core$IFn$_invoke$arity$1 ? log_call_async.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call_async.call(null,fn_sym));
} else {
}

return (fn_obj.cljs$core$IFn$_invoke$arity$1 ? fn_obj.cljs$core$IFn$_invoke$arity$1(next) : fn_obj.call(null,next));
} else {
if(cljs.core.truth_(log_call)){
(log_call.cljs$core$IFn$_invoke$arity$1 ? log_call.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call.call(null,fn_sym));
} else {
}

(fn_obj.cljs$core$IFn$_invoke$arity$0 ? fn_obj.cljs$core$IFn$_invoke$arity$0() : fn_obj.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));

}
}
}catch (e60201){var ex = e60201;
console.warn("error when calling lifecycle function",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym),ex);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}});
});
shadow.cljs.devtools.client.env.do_js_reload_STAR_ = (function shadow$cljs$devtools$client$env$do_js_reload_STAR_(failure_fn,p__60202){
var vec__60203 = p__60202;
var seq__60204 = cljs.core.seq(vec__60203);
var first__60205 = cljs.core.first(seq__60204);
var seq__60204__$1 = cljs.core.next(seq__60204);
var task = first__60205;
var remaining_tasks = seq__60204__$1;
if(cljs.core.truth_(task)){
try{var G__60207 = (function (){
return (shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$2 ? shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$2(failure_fn,remaining_tasks) : shadow.cljs.devtools.client.env.do_js_reload_STAR_.call(null,failure_fn,remaining_tasks));
});
return (task.cljs$core$IFn$_invoke$arity$1 ? task.cljs$core$IFn$_invoke$arity$1(G__60207) : task.call(null,G__60207));
}catch (e60206){var e = e60206;
return (failure_fn.cljs$core$IFn$_invoke$arity$3 ? failure_fn.cljs$core$IFn$_invoke$arity$3(e,task,remaining_tasks) : failure_fn.call(null,e,task,remaining_tasks));
}} else {
return null;
}
});
/**
 * should pass the :build-complete message and an additional callback
 * which performs the actual loading of the code (sync)
 * will call all before/after callbacks in order
 */
shadow.cljs.devtools.client.env.do_js_reload = (function shadow$cljs$devtools$client$env$do_js_reload(var_args){
var G__60211 = arguments.length;
switch (G__60211) {
case 2:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2 = (function (msg,load_code_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(msg,load_code_fn,(function (){
return null;
}));
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3 = (function (msg,load_code_fn,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(msg,load_code_fn,complete_fn,(function (error,task,remaining){
return console.warn("JS reload failed",error);
}));
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4 = (function (p__60212,load_code_fn,complete_fn,failure_fn){
var map__60213 = p__60212;
var map__60213__$1 = (((((!((map__60213 == null))))?(((((map__60213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60213):map__60213);
var msg = map__60213__$1;
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60213__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var load_tasks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60208_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__60208_SHARP_);
}),new cljs.core.Keyword(null,"before-load","before-load",-2060117064).cljs$core$IFn$_invoke$arity$1(reload_info)))),(function (next){
(load_code_fn.cljs$core$IFn$_invoke$arity$0 ? load_code_fn.cljs$core$IFn$_invoke$arity$0() : load_code_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__60209_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__60209_SHARP_);
})),new cljs.core.Keyword(null,"after-load","after-load",-1278503285).cljs$core$IFn$_invoke$arity$1(reload_info)),(function (next){
(complete_fn.cljs$core$IFn$_invoke$arity$0 ? complete_fn.cljs$core$IFn$_invoke$arity$0() : complete_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}));
return shadow.cljs.devtools.client.env.do_js_reload_STAR_(failure_fn,load_tasks);
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$lang$maxFixedArity = 4);

shadow.cljs.devtools.client.env.before_load_src = (function shadow$cljs$devtools$client$env$before_load_src(p__60215){
var map__60216 = p__60215;
var map__60216__$1 = (((((!((map__60216 == null))))?(((((map__60216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60216):map__60216);
var src = map__60216__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60216__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60216__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),type)){
var seq__60218 = cljs.core.seq(goog.global.SHADOW_NS_RESET);
var chunk__60219 = null;
var count__60220 = (0);
var i__60221 = (0);
while(true){
if((i__60221 < count__60220)){
var x = chunk__60219.cljs$core$IIndexed$_nth$arity$2(null,i__60221);
(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(ns) : x.call(null,ns));


var G__60254 = seq__60218;
var G__60255 = chunk__60219;
var G__60256 = count__60220;
var G__60257 = (i__60221 + (1));
seq__60218 = G__60254;
chunk__60219 = G__60255;
count__60220 = G__60256;
i__60221 = G__60257;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60218);
if(temp__5735__auto__){
var seq__60218__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60218__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60218__$1);
var G__60258 = cljs.core.chunk_rest(seq__60218__$1);
var G__60259 = c__4609__auto__;
var G__60260 = cljs.core.count(c__4609__auto__);
var G__60261 = (0);
seq__60218 = G__60258;
chunk__60219 = G__60259;
count__60220 = G__60260;
i__60221 = G__60261;
continue;
} else {
var x = cljs.core.first(seq__60218__$1);
(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(ns) : x.call(null,ns));


var G__60262 = cljs.core.next(seq__60218__$1);
var G__60263 = null;
var G__60264 = (0);
var G__60265 = (0);
seq__60218 = G__60262;
chunk__60219 = G__60263;
count__60220 = G__60264;
i__60221 = G__60265;
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
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.custom_msg_subscribers_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.custom_msg_subscribers_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.cljs.devtools.client.env.subscribe_BANG_ = (function shadow$cljs$devtools$client$env$subscribe_BANG_(sub_id,callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.custom_msg_subscribers_ref,cljs.core.assoc,sub_id,callback);
});
shadow.cljs.devtools.client.env.publish_BANG_ = (function shadow$cljs$devtools$client$env$publish_BANG_(msg){
var seq__60222 = cljs.core.seq(cljs.core.deref(shadow.cljs.devtools.client.env.custom_msg_subscribers_ref));
var chunk__60223 = null;
var count__60224 = (0);
var i__60225 = (0);
while(true){
if((i__60225 < count__60224)){
var vec__60234 = chunk__60223.cljs$core$IIndexed$_nth$arity$2(null,i__60225);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60234,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60234,(1),null);
try{(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(msg) : callback.call(null,msg));
}catch (e60237){var e_60266 = e60237;
console.warn("failed to handle custom msg",id,msg);
}

var G__60267 = seq__60222;
var G__60268 = chunk__60223;
var G__60269 = count__60224;
var G__60270 = (i__60225 + (1));
seq__60222 = G__60267;
chunk__60223 = G__60268;
count__60224 = G__60269;
i__60225 = G__60270;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60222);
if(temp__5735__auto__){
var seq__60222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60222__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60222__$1);
var G__60271 = cljs.core.chunk_rest(seq__60222__$1);
var G__60272 = c__4609__auto__;
var G__60273 = cljs.core.count(c__4609__auto__);
var G__60274 = (0);
seq__60222 = G__60271;
chunk__60223 = G__60272;
count__60224 = G__60273;
i__60225 = G__60274;
continue;
} else {
var vec__60238 = cljs.core.first(seq__60222__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60238,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60238,(1),null);
try{(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(msg) : callback.call(null,msg));
}catch (e60241){var e_60275 = e60241;
console.warn("failed to handle custom msg",id,msg);
}

var G__60276 = cljs.core.next(seq__60222__$1);
var G__60277 = null;
var G__60278 = (0);
var G__60279 = (0);
seq__60222 = G__60276;
chunk__60223 = G__60277;
count__60224 = G__60278;
i__60225 = G__60279;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.cljs.devtools.client.env.js.map
