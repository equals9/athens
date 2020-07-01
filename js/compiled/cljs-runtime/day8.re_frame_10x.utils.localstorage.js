goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__33475 = arguments.length;
switch (G__33475) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__33492 = cljs.core.seq(Object.keys(localStorage));
var chunk__33493 = null;
var count__33494 = (0);
var i__33495 = (0);
while(true){
if((i__33495 < count__33494)){
var k = chunk__33493.cljs$core$IIndexed$_nth$arity$2(null,i__33495);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33537 = seq__33492;
var G__33538 = chunk__33493;
var G__33539 = count__33494;
var G__33540 = (i__33495 + (1));
seq__33492 = G__33537;
chunk__33493 = G__33538;
count__33494 = G__33539;
i__33495 = G__33540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33492);
if(temp__5735__auto__){
var seq__33492__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33492__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33492__$1);
var G__33541 = cljs.core.chunk_rest(seq__33492__$1);
var G__33542 = c__4609__auto__;
var G__33543 = cljs.core.count(c__4609__auto__);
var G__33544 = (0);
seq__33492 = G__33541;
chunk__33493 = G__33542;
count__33494 = G__33543;
i__33495 = G__33544;
continue;
} else {
var k = cljs.core.first(seq__33492__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33549 = cljs.core.next(seq__33492__$1);
var G__33550 = null;
var G__33551 = (0);
var G__33552 = (0);
seq__33492 = G__33549;
chunk__33493 = G__33550;
count__33494 = G__33551;
i__33495 = G__33552;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
