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
var G__33603 = arguments.length;
switch (G__33603) {
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
var seq__33613 = cljs.core.seq(Object.keys(localStorage));
var chunk__33614 = null;
var count__33615 = (0);
var i__33616 = (0);
while(true){
if((i__33616 < count__33615)){
var k = chunk__33614.cljs$core$IIndexed$_nth$arity$2(null,i__33616);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33660 = seq__33613;
var G__33661 = chunk__33614;
var G__33662 = count__33615;
var G__33663 = (i__33616 + (1));
seq__33613 = G__33660;
chunk__33614 = G__33661;
count__33615 = G__33662;
i__33616 = G__33663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33613);
if(temp__5735__auto__){
var seq__33613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33613__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33613__$1);
var G__33668 = cljs.core.chunk_rest(seq__33613__$1);
var G__33669 = c__4609__auto__;
var G__33670 = cljs.core.count(c__4609__auto__);
var G__33671 = (0);
seq__33613 = G__33668;
chunk__33614 = G__33669;
count__33615 = G__33670;
i__33616 = G__33671;
continue;
} else {
var k = cljs.core.first(seq__33613__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33676 = cljs.core.next(seq__33613__$1);
var G__33677 = null;
var G__33678 = (0);
var G__33679 = (0);
seq__33613 = G__33676;
chunk__33614 = G__33677;
count__33615 = G__33678;
i__33616 = G__33679;
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
