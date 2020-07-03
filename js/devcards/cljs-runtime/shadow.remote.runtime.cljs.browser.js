goog.provide('shadow.remote.runtime.cljs.browser');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('shadow.cljs.devtools.client.env');
goog.require('goog.net.XhrIo');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.shared');
goog.require('shadow.remote.runtime.cljs.env');
goog.require('shadow.remote.runtime.cljs.js_builtins');
goog.require('shadow.remote.runtime.tap_support');
goog.require('shadow.remote.runtime.obj_support');
goog.require('shadow.remote.runtime.eval_support');
shadow.remote.runtime.cljs.browser.transit_read = (function shadow$remote$runtime$cljs$browser$transit_read(data){
var t = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(t,data);
});
shadow.remote.runtime.cljs.browser.transit_str = (function shadow$remote$runtime$cljs$browser$transit_str(obj){
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write(w,obj);
});
shadow.remote.runtime.cljs.browser.abort_BANG_ = (function shadow$remote$runtime$cljs$browser$abort_BANG_(p__60811,action,ex){
var map__60812 = p__60811;
var map__60812__$1 = (((((!((map__60812 == null))))?(((((map__60812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60812):map__60812);
var state = map__60812__$1;
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60812__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__60814 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"failed","failed",-1397425762),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"ex","ex",-1413771341),ex,new cljs.core.Keyword(null,"ex-action","ex-action",672251553),action], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__60814) : callback.call(null,G__60814));
});
shadow.remote.runtime.cljs.browser.interpret_action = (function shadow$remote$runtime$cljs$browser$interpret_action(p__60815,p__60816){
var map__60817 = p__60815;
var map__60817__$1 = (((((!((map__60817 == null))))?(((((map__60817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60817):map__60817);
var state = map__60817__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60817__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60818 = p__60816;
var map__60818__$1 = (((((!((map__60818 == null))))?(((((map__60818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60818):map__60818);
var action = map__60818__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60818__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__60821 = type;
var G__60821__$1 = (((G__60821 instanceof cljs.core.Keyword))?G__60821.fqn:null);
switch (G__60821__$1) {
case "repl/invoke":
var map__60822 = action;
var map__60822__$1 = (((((!((map__60822 == null))))?(((((map__60822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60822):map__60822);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60822__$1,new cljs.core.Keyword(null,"js","js",1768080579));
try{var res = runtime.eval_js(js);
var G__60825 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"eval-results","eval-results",553789722),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),res,new cljs.core.Keyword(null,"action","action",-811238024),action], null));
return (shadow.remote.runtime.cljs.browser.interpret_actions.cljs$core$IFn$_invoke$arity$1 ? shadow.remote.runtime.cljs.browser.interpret_actions.cljs$core$IFn$_invoke$arity$1(G__60825) : shadow.remote.runtime.cljs.browser.interpret_actions.call(null,G__60825));
}catch (e60824){var ex = e60824;
return shadow.remote.runtime.cljs.browser.abort_BANG_(state,action,ex);
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60821__$1)].join('')));

}
});
shadow.remote.runtime.cljs.browser.interpret_actions = (function shadow$remote$runtime$cljs$browser$interpret_actions(p__60826){
var map__60827 = p__60826;
var map__60827__$1 = (((((!((map__60827 == null))))?(((((map__60827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60827):map__60827);
var state = map__60827__$1;
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60827__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
if(cljs.core.empty_QMARK_(actions)){
var fexpr__60829 = new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(state);
return (fexpr__60829.cljs$core$IFn$_invoke$arity$1 ? fexpr__60829.cljs$core$IFn$_invoke$arity$1(state) : fexpr__60829.call(null,state));
} else {
var map__60830 = cljs.core.first(actions);
var map__60830__$1 = (((((!((map__60830 == null))))?(((((map__60830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60830):map__60830);
var action = map__60830__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60830__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.rest);
return shadow.remote.runtime.cljs.browser.interpret_action(state__$1,action);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {shadow.remote.runtime.api.IRuntime}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.remote.runtime.cljs.browser.BrowserRuntime = (function (ws,state_ref,__meta,__extmap,__hash){
this.ws = ws;
this.state_ref = state_ref;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.eval_js = (function (code){
var self__ = this;
var this$ = this;
return (0,eval)(code);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.eval_cljs = (function (msg,callback){
var self__ = this;
var this$ = this;
var G__60837 = [shadow.cljs.devtools.client.env.get_url_base(),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__60838 = (function (res){
var req = this;
var map__60842 = shadow.remote.runtime.cljs.browser.transit_read(req.getResponseText());
var map__60842__$1 = (((((!((map__60842 == null))))?(((((map__60842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60842):map__60842);
var result = map__60842__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60842__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("repl","actions","repl/actions",-809718877),type)))){
var G__60844 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"failed","failed",-1397425762),true,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__60844) : callback.call(null,G__60844));
} else {
return shadow.remote.runtime.cljs.browser.interpret_actions(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),this$,new cljs.core.Keyword(null,"callback","callback",-705136228),callback,new cljs.core.Keyword(null,"input","input",556931961),msg,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"eval-results","eval-results",553789722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null));
}
});
var G__60839 = "POST";
var G__60840 = shadow.remote.runtime.cljs.browser.transit_str(msg);
var G__60841 = ({"content-type": "application/transit+json; charset=utf-8"});
return goog.net.XhrIo.send(G__60837,G__60838,G__60839,G__60840,G__60841);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k60833,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__60845 = k60833;
var G__60845__$1 = (((G__60845 instanceof cljs.core.Keyword))?G__60845.fqn:null);
switch (G__60845__$1) {
case "ws":
return self__.ws;

break;
case "state-ref":
return self__.state_ref;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60833,else__4442__auto__);

}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__60846){
var vec__60847 = p__60846;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60847,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60847,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.remote.runtime.cljs.browser.BrowserRuntime{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws","ws",86841443),self__.ws],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),self__.state_ref],null))], null),self__.__extmap));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60832){
var self__ = this;
var G__60832__$1 = this;
return (new cljs.core.RecordIter((0),G__60832__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"state-ref","state-ref",2127874952)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,self__.state_ref,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__60850 = (function (coll__4436__auto__){
return (725844968 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__60850(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60834,other60835){
var self__ = this;
var this60834__$1 = this;
return (((!((other60835 == null)))) && ((this60834__$1.constructor === other60835.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60834__$1.ws,other60835.ws)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60834__$1.state_ref,other60835.state_ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60834__$1.__extmap,other60835.__extmap)));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.shadow$remote$runtime$api$IRuntime$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2 = (function (runtime,msg){
var self__ = this;
var runtime__$1 = this;
return self__.ws.send(shadow.remote.runtime.cljs.browser.transit_str(msg));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.shadow$remote$runtime$api$IRuntime$add_extension$arity$3 = (function (runtime,key,spec){
var self__ = this;
var runtime__$1 = this;
return shadow.remote.runtime.shared.add_extension(runtime__$1,key,spec);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.shadow$remote$runtime$api$IRuntime$del_extension$arity$2 = (function (runtime,key){
var self__ = this;
var runtime__$1 = this;
return shadow.remote.runtime.shared.del_extension(runtime__$1,key);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,self__.state_ref,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__60832){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__60851 = cljs.core.keyword_identical_QMARK_;
var expr__60852 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__60854 = new cljs.core.Keyword(null,"ws","ws",86841443);
var G__60855 = expr__60852;
return (pred__60851.cljs$core$IFn$_invoke$arity$2 ? pred__60851.cljs$core$IFn$_invoke$arity$2(G__60854,G__60855) : pred__60851.call(null,G__60854,G__60855));
})())){
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(G__60832,self__.state_ref,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__60856 = new cljs.core.Keyword(null,"state-ref","state-ref",2127874952);
var G__60857 = expr__60852;
return (pred__60851.cljs$core$IFn$_invoke$arity$2 ? pred__60851.cljs$core$IFn$_invoke$arity$2(G__60856,G__60857) : pred__60851.call(null,G__60856,G__60857));
})())){
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,G__60832,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,self__.state_ref,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__60832),null));
}
}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws","ws",86841443),self__.ws,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),self__.state_ref,null))], null),self__.__extmap));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__60832){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,self__.state_ref,G__60832,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws","ws",1727372970,null),new cljs.core.Symbol(null,"state-ref","state-ref",-526560817,null)], null);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.cljs$lang$type = true);

(shadow.remote.runtime.cljs.browser.BrowserRuntime.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.remote.runtime.cljs.browser/BrowserRuntime",null,(1),null));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.remote.runtime.cljs.browser/BrowserRuntime");
}));

/**
 * Positional factory function for shadow.remote.runtime.cljs.browser/BrowserRuntime.
 */
shadow.remote.runtime.cljs.browser.__GT_BrowserRuntime = (function shadow$remote$runtime$cljs$browser$__GT_BrowserRuntime(ws,state_ref){
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(ws,state_ref,null,null,null));
});

/**
 * Factory function for shadow.remote.runtime.cljs.browser/BrowserRuntime, taking a map of keywords to field values.
 */
shadow.remote.runtime.cljs.browser.map__GT_BrowserRuntime = (function shadow$remote$runtime$cljs$browser$map__GT_BrowserRuntime(G__60836){
var extmap__4478__auto__ = (function (){var G__60858 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60836,new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state-ref","state-ref",2127874952)], 0));
if(cljs.core.record_QMARK_(G__60836)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60858);
} else {
return G__60858;
}
})();
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(G__60836),new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(G__60836),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.remote.runtime.cljs.browser.start = (function shadow$remote$runtime$cljs$browser$start(){
var temp__5737__auto__ = cljs.core.deref(shadow.remote.runtime.cljs.env.runtime_ref);
if((temp__5737__auto__ == null)){
var ws_url = [shadow.cljs.devtools.client.env.get_ws_url_base(),"/api/runtime"].join('');
var socket = (new WebSocket(ws_url));
var state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var runtime = (function (){var G__60859 = (new shadow.remote.runtime.cljs.browser.BrowserRuntime(socket,state_ref,null,null,null));
shadow.remote.runtime.shared.add_defaults(G__60859);

return G__60859;
})();
var obj_support = shadow.remote.runtime.obj_support.start(runtime);
var tap_support = shadow.remote.runtime.tap_support.start(runtime,obj_support);
var eval_support = shadow.remote.runtime.eval_support.start(runtime,obj_support);
var stop = (function (){
shadow.remote.runtime.tap_support.stop(tap_support);

shadow.remote.runtime.obj_support.stop(obj_support);

shadow.remote.runtime.eval_support.stop(eval_support);

return socket.close();
});
cljs.core.reset_BANG_(shadow.remote.runtime.cljs.env.runtime_ref,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-support","tap-support",80346439),tap_support,new cljs.core.Keyword(null,"eval-support","eval-support",-1581799533),eval_support,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop], null));

socket.addEventListener("message",(function (e){
return shadow.remote.runtime.shared.process(runtime,shadow.remote.runtime.cljs.browser.transit_read(e.data));
}));

socket.addEventListener("open",(function (e){
return null;
}));

socket.addEventListener("close",(function (e){
return stop();
}));

return socket.addEventListener("error",(function (e){
console.warn("tap-socket error",e);

return stop();
}));
} else {
var map__60860 = temp__5737__auto__;
var map__60860__$1 = (((((!((map__60860 == null))))?(((((map__60860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60860):map__60860);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60860__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
(stop.cljs$core$IFn$_invoke$arity$0 ? stop.cljs$core$IFn$_invoke$arity$0() : stop.call(null));

cljs.core.reset_BANG_(shadow.remote.runtime.cljs.env.runtime_ref,null);

return setTimeout(shadow.remote.runtime.cljs.browser.start,(10));
}
});
shadow.remote.runtime.cljs.browser.start();

//# sourceMappingURL=shadow.remote.runtime.cljs.browser.js.map
