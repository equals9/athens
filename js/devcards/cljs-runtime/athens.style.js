goog.provide('athens.style');
goog.require('cljs.core');
goog.require('garden.color');
goog.require('stylefy.core');
athens.style.COLORS = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"background-plus-2","background-plus-2",-2111504159),new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background-plus-1","background-plus-1",-1065812304),new cljs.core.Keyword(null,"warning-color","warning-color",924289810),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"confirmation-color","confirmation-color",346216600),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680),new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)],["#333","#AAA","#2399E7","#111","#1A1A1A","#222","#DE3C21","hsla(32, 81%, 90%, 0.08)","#189E36","#BABABA","#FBBE63","#151515"]);
athens.style.THEME_LIGHT = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"background-plus-2","background-plus-2",-2111504159),new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background-plus-1","background-plus-1",-1065812304),new cljs.core.Keyword(null,"warning-color","warning-color",924289810),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"confirmation-color","confirmation-color",346216600),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680),new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)],["#FFFFFF","#433F38","#0075E1","#EFEDEB","#FFFFFF","#FFFFFF","#D20000","hsla(32, 81%, 10%, 0.08)","#009E23","#322F38","#F9A132","#FAF8F6"]);
athens.style.THEME_DARK = athens.style.COLORS;
athens.style.HSL_COLORS = cljs.core.reduce_kv((function (p1__39291_SHARP_,p2__39292_SHARP_,p3__39293_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39291_SHARP_,p2__39292_SHARP_,garden.color.hex__GT_hsl(p3__39293_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,athens.style.COLORS);
athens.style.DEPTH_SHADOWS = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"4","4",-1197948085),"0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"8","8",1405994928),"0px 3.2px 7.2px rgba(0, 0, 0, 0.13), 0px 0.6px 1.8px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"16","16",1354114028),"0px 6.4px 14.4px rgba(0, 0, 0, 0.13), 0px 1.2px 3.6px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"64","64",977820579),"0px 24px 60px rgba(0, 0, 0, 0.15), 0px 5px 12px rgba(0, 0, 0, 0.1)"], null);
athens.style.OPACITIES = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975),0.1,new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971),0.25,new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190),0.5,new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703),0.75,new cljs.core.Keyword(null,"opacity-higher","opacity-higher",413124730),0.85], null);
athens.style.ZINDICES = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"zindex-dropdown","zindex-dropdown",116119971),(1000),new cljs.core.Keyword(null,"zindex-sticky","zindex-sticky",-909898418),(1020),new cljs.core.Keyword(null,"zindex-fixed","zindex-fixed",20766244),(1030),new cljs.core.Keyword(null,"zindex-modal-backdrop","zindex-modal-backdrop",-1478827407),(1040),new cljs.core.Keyword(null,"zindex-modal","zindex-modal",1311705508),(1050),new cljs.core.Keyword(null,"zindex-popover","zindex-popover",638767426),(1060),new cljs.core.Keyword(null,"zindex-tooltip","zindex-tooltip",-1720095537),(1070)], null);
athens.style.return_color = (function athens$style$return_color(c){
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(athens.style.COLORS) : c.call(null,athens.style.COLORS));
});
athens.style.return_color_with_alpha = (function athens$style$return_color_with_alpha(c,a){
if((a instanceof cljs.core.Keyword)){
return garden.color.opacify((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS) : c.call(null,athens.style.HSL_COLORS)),a.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES));
} else {
return garden.color.opacify((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS) : c.call(null,athens.style.HSL_COLORS)),a);
}
});
athens.style.color = (function athens$style$color(var_args){
var G__39304 = arguments.length;
switch (G__39304) {
case 1:
return athens.style.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.style.color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.style.color.cljs$core$IFn$_invoke$arity$1 = (function (c){
return athens.style.return_color(c);
}));

(athens.style.color.cljs$core$IFn$_invoke$arity$2 = (function (c,a){
return athens.style.return_color_with_alpha(c,a);
}));

(athens.style.color.cljs$lang$maxFixedArity = 2);

athens.style.base_styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-color","background-color",570434026)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans, Sans-Serif",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.5",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.3",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3.125em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2.375em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.75em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.02em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3125em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1em",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.08em",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".MuiSvgIcon-root",".MuiSvgIcon-root",2093876191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"inherit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"inherit",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.85em",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.05em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 0.25rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)], null)], null)], null);
athens.style.app_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vw"], null);
/**
 * Maps theme keys to css variable keys.
 */
athens.style.remap_theme_keys = (function athens$style$remap_theme_keys(theme){
return cljs.core.reduce_kv((function (m,k,v){
var css_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(k))].join(''));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,css_k,v);
}),cljs.core.PersistentArrayMap.EMPTY,theme);
});
stylefy.core.tag("html",athens.style.base_styles);
stylefy.core.tag(":root",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style.remap_theme_keys(athens.style.THEME_LIGHT),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefers-color-scheme","prefers-color-scheme",-1885369990),"dark"], null),athens.style.remap_theme_keys(athens.style.THEME_DARK)])], null)], 0)));
stylefy.core.tag("*",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null));

//# sourceMappingURL=athens.style.js.map
