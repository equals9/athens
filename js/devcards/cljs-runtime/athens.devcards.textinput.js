goog.provide('athens.devcards.textinput');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('stylefy.core');
athens.devcards.textinput.textinput_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"transition-property","transition-property",2036650935),new cljs.core.Keyword(null,"transition-timing-property","transition-timing-property",-1592995783),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092)],[athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),"32px",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)),"2px 8px",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"4","4",-1197948085).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),new cljs.core.Keyword(null,"&:focus:hover","&:focus:hover",-1024682251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"8","8",1405994928).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS)], null)], null)], null),"box-shadow, border, background","ease","1px solid #C9C7C7","4px","100%","0.1s"]);
athens.devcards.textinput.input_wrap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"28px"], null)], null)], null)], null);
athens.devcards.textinput.input_icon = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"left","left",-399115937)],["translateY(-50%)",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),"50%",new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null)], null),"flex","absolute","none","6px"]);
athens.devcards.textinput.textinput = (function athens$devcards$textinput$textinput(p__60921){
var map__60922 = p__60921;
var map__60922__$1 = (((((!((map__60922 == null))))?(((((map__60922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60922):map__60922);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var defaultValue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(cljs.core.truth_(icon)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.textinput.input_wrap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.textinput.textinput_style,style], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),defaultValue,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.textinput.input_icon),icon], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.textinput.textinput_style,style], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),defaultValue,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null))], null);
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.textinput","athens.devcards.textinput",1732144125),new cljs.core.Keyword(null,"Input","Input",136491688)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Input",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.textinput !== 'undefined') && (typeof athens.devcards.textinput.t_athens$devcards$textinput60924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.textinput.t_athens$devcards$textinput60924 = (function (meta60925){
this.meta60925 = meta60925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.textinput.t_athens$devcards$textinput60924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60926,meta60925__$1){
var self__ = this;
var _60926__$1 = this;
return (new athens.devcards.textinput.t_athens$devcards$textinput60924(meta60925__$1));
}));

(athens.devcards.textinput.t_athens$devcards$textinput60924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60926){
var self__ = this;
var _60926__$1 = this;
return self__.meta60925;
}));

(athens.devcards.textinput.t_athens$devcards$textinput60924.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.textinput.t_athens$devcards$textinput60924.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.textinput.textinput,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"pink"], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.textinput.t_athens$devcards$textinput60924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60925","meta60925",1452669718,null)], null);
}));

(athens.devcards.textinput.t_athens$devcards$textinput60924.cljs$lang$type = true);

(athens.devcards.textinput.t_athens$devcards$textinput60924.cljs$lang$ctorStr = "athens.devcards.textinput/t_athens$devcards$textinput60924");

(athens.devcards.textinput.t_athens$devcards$textinput60924.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.textinput/t_athens$devcards$textinput60924");
}));

/**
 * Positional factory function for athens.devcards.textinput/t_athens$devcards$textinput60924.
 */
athens.devcards.textinput.__GT_t_athens$devcards$textinput60924 = (function athens$devcards$textinput$__GT_t_athens$devcards$textinput60924(meta60925){
return (new athens.devcards.textinput.t_athens$devcards$textinput60924(meta60925));
});

}

return (new athens.devcards.textinput.t_athens$devcards$textinput60924(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.textinput","athens.devcards.textinput",1732144125),new cljs.core.Keyword(null,"Input-with-icon","Input-with-icon",-603466174)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Input-with-icon",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.textinput !== 'undefined') && (typeof athens.devcards.textinput.t_athens$devcards$textinput60927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.textinput.t_athens$devcards$textinput60927 = (function (meta60928){
this.meta60928 = meta60928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.textinput.t_athens$devcards$textinput60927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60929,meta60928__$1){
var self__ = this;
var _60929__$1 = this;
return (new athens.devcards.textinput.t_athens$devcards$textinput60927(meta60928__$1));
}));

(athens.devcards.textinput.t_athens$devcards$textinput60927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60929){
var self__ = this;
var _60929__$1 = this;
return self__.meta60928;
}));

(athens.devcards.textinput.t_athens$devcards$textinput60927.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.textinput.t_athens$devcards$textinput60927.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.textinput.textinput,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"pink",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Face], null)], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.textinput.t_athens$devcards$textinput60927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60928","meta60928",803415482,null)], null);
}));

(athens.devcards.textinput.t_athens$devcards$textinput60927.cljs$lang$type = true);

(athens.devcards.textinput.t_athens$devcards$textinput60927.cljs$lang$ctorStr = "athens.devcards.textinput/t_athens$devcards$textinput60927");

(athens.devcards.textinput.t_athens$devcards$textinput60927.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.textinput/t_athens$devcards$textinput60927");
}));

/**
 * Positional factory function for athens.devcards.textinput/t_athens$devcards$textinput60927.
 */
athens.devcards.textinput.__GT_t_athens$devcards$textinput60927 = (function athens$devcards$textinput$__GT_t_athens$devcards$textinput60927(meta60928){
return (new athens.devcards.textinput.t_athens$devcards$textinput60927(meta60928));
});

}

return (new athens.devcards.textinput.t_athens$devcards$textinput60927(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.textinput.js.map
