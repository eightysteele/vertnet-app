goog.provide('one.browser.animation');
goog.require('cljs.core');
goog.require('one.core');
goog.require('one.core');
goog.require('one.core');
goog.require('one.color');
goog.require('one.color');
goog.require('one.color');
goog.require('one.color');
goog.require('clojure.browser.event');
goog.require('goog.fx.easing');
goog.require('domina.xpath');
goog.require('clojure.browser.dom');
goog.require('goog.fx.dom');
goog.require('goog.fx.AnimationQueue');
goog.require('goog.style');
goog.require('domina');
goog.require('goog.async.Delay');
goog.require('goog.string');
one.browser.animation._STAR_default_time_STAR_ = 1000;
/**
* Accepts a keyword, string or element and returns an
* element. Strings are assumed to be xpath format.
*/
one.browser.animation.get_element = (function get_element(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return domina.by_id.call(null,cljs.core.name.call(null,e));
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,e)))
{return cljs.core.first.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,e)));
} else
{if(cljs.core.truth_("﷐'else"))
{return e;
} else
{return null;
}
}
}
});
one.browser.animation.IPosition = {};
one.browser.animation.position = (function position(this$){
if(cljs.core.truth_((function (){var and__3546__auto____12811 = this$;

if(cljs.core.truth_(and__3546__auto____12811))
{return this$.one$browser$animation$IPosition$position;
} else
{return and__3546__auto____12811;
}
})()))
{return this$.one$browser$animation$IPosition$position(this$);
} else
{return (function (){var or__3548__auto____12812 = (one.browser.animation.position[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12812))
{return or__3548__auto____12812;
} else
{var or__3548__auto____12813 = (one.browser.animation.position["_"]);

if(cljs.core.truth_(or__3548__auto____12813))
{return or__3548__auto____12813;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.position",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IPosition$ = true;
Element.prototype.one$browser$animation$IPosition$position = (function (this$){
var p__12814 = cljs.core.js__GT_clj.call(null,goog.style.getPosition.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'x".call(null,p__12814),"﷐'y".call(null,p__12814)]);
});
Array.prototype.one$browser$animation$IPosition$ = true;
Array.prototype.one$browser$animation$IPosition$position = (function (this$){
return cljs.core.js__GT_clj.call(null,this$);
});
cljs.core.Vector.prototype.one$browser$animation$IPosition$ = true;
cljs.core.Vector.prototype.one$browser$animation$IPosition$position = (function (this$){
return this$;
});
one.browser.animation.IScroll = {};
one.browser.animation.scroll = (function scroll(this$){
if(cljs.core.truth_((function (){var and__3546__auto____12815 = this$;

if(cljs.core.truth_(and__3546__auto____12815))
{return this$.one$browser$animation$IScroll$scroll;
} else
{return and__3546__auto____12815;
}
})()))
{return this$.one$browser$animation$IScroll$scroll(this$);
} else
{return (function (){var or__3548__auto____12816 = (one.browser.animation.scroll[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12816))
{return or__3548__auto____12816;
} else
{var or__3548__auto____12817 = (one.browser.animation.scroll["_"]);

if(cljs.core.truth_(or__3548__auto____12817))
{return or__3548__auto____12817;
} else
{throw cljs.core.missing_protocol.call(null,"IScroll.scroll",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IScroll$ = true;
Element.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return cljs.core.Vector.fromArray([this$.scrollLeft,this$.scrollTop]);
});
cljs.core.Vector.prototype.one$browser$animation$IScroll$ = true;
cljs.core.Vector.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return this$;
});
Number.prototype.one$browser$animation$IScroll$ = true;
Number.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return cljs.core.Vector.fromArray([0,this$]);
});
one.browser.animation.ISize = {};
one.browser.animation.size = (function size(this$){
if(cljs.core.truth_((function (){var and__3546__auto____12818 = this$;

if(cljs.core.truth_(and__3546__auto____12818))
{return this$.one$browser$animation$ISize$size;
} else
{return and__3546__auto____12818;
}
})()))
{return this$.one$browser$animation$ISize$size(this$);
} else
{return (function (){var or__3548__auto____12819 = (one.browser.animation.size[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12819))
{return or__3548__auto____12819;
} else
{var or__3548__auto____12820 = (one.browser.animation.size["_"]);

if(cljs.core.truth_(or__3548__auto____12820))
{return or__3548__auto____12820;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.size",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.width = (function width(this$){
if(cljs.core.truth_((function (){var and__3546__auto____12821 = this$;

if(cljs.core.truth_(and__3546__auto____12821))
{return this$.one$browser$animation$ISize$width;
} else
{return and__3546__auto____12821;
}
})()))
{return this$.one$browser$animation$ISize$width(this$);
} else
{return (function (){var or__3548__auto____12822 = (one.browser.animation.width[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12822))
{return or__3548__auto____12822;
} else
{var or__3548__auto____12823 = (one.browser.animation.width["_"]);

if(cljs.core.truth_(or__3548__auto____12823))
{return or__3548__auto____12823;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.width",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.height = (function height(this$){
if(cljs.core.truth_((function (){var and__3546__auto____12824 = this$;

if(cljs.core.truth_(and__3546__auto____12824))
{return this$.one$browser$animation$ISize$height;
} else
{return and__3546__auto____12824;
}
})()))
{return this$.one$browser$animation$ISize$height(this$);
} else
{return (function (){var or__3548__auto____12825 = (one.browser.animation.height[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12825))
{return or__3548__auto____12825;
} else
{var or__3548__auto____12826 = (one.browser.animation.height["_"]);

if(cljs.core.truth_(or__3548__auto____12826))
{return or__3548__auto____12826;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.height",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$ISize$ = true;
Element.prototype.one$browser$animation$ISize$size = (function (this$){
var s__12827 = cljs.core.js__GT_clj.call(null,goog.style.getSize.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'width".call(null,s__12827),"﷐'height".call(null,s__12827)]);
});
Element.prototype.one$browser$animation$ISize$width = (function (this$){
return one.browser.animation.width.call(null,one.browser.animation.size.call(null,this$));
});
Element.prototype.one$browser$animation$ISize$height = (function (this$){
return one.browser.animation.height.call(null,one.browser.animation.size.call(null,this$));
});
cljs.core.Vector.prototype.one$browser$animation$ISize$ = true;
cljs.core.Vector.prototype.one$browser$animation$ISize$size = (function (this$){
return this$;
});
cljs.core.Vector.prototype.one$browser$animation$ISize$width = (function (this$){
return cljs.core.first.call(null,this$);
});
cljs.core.Vector.prototype.one$browser$animation$ISize$height = (function (this$){
return cljs.core.second.call(null,this$);
});
Number.prototype.one$browser$animation$ISize$ = true;
Number.prototype.one$browser$animation$ISize$size = (function (this$){
return cljs.core.Vector.fromArray([this$,this$]);
});
Number.prototype.one$browser$animation$ISize$width = (function (this$){
return this$;
});
Number.prototype.one$browser$animation$ISize$height = (function (this$){
return this$;
});
one.browser.animation.IOpacity = {};
one.browser.animation.opacity = (function opacity(this$){
if(cljs.core.truth_((function (){var and__3546__auto____12828 = this$;

if(cljs.core.truth_(and__3546__auto____12828))
{return this$.one$browser$animation$IOpacity$opacity;
} else
{return and__3546__auto____12828;
}
})()))
{return this$.one$browser$animation$IOpacity$opacity(this$);
} else
{return (function (){var or__3548__auto____12829 = (one.browser.animation.opacity[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12829))
{return or__3548__auto____12829;
} else
{var or__3548__auto____12830 = (one.browser.animation.opacity["_"]);

if(cljs.core.truth_(or__3548__auto____12830))
{return or__3548__auto____12830;
} else
{throw cljs.core.missing_protocol.call(null,"IOpacity.opacity",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IOpacity$ = true;
Element.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
return one.browser.animation.opacity.call(null,goog.style.getOpacity.call(null,this$));
});
Number.prototype.one$browser$animation$IOpacity$ = true;
Number.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
return this$;
});
String.prototype.one$browser$animation$IOpacity$ = true;
String.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
return parseFloat.call(null,this$);
});
goog.fx.AnimationQueue.prototype.one$core$Disposable$ = true;
goog.fx.AnimationQueue.prototype.one$core$Disposable$dispose = (function (this$){
return this$.dispose(cljs.core.List.EMPTY);
});
goog.fx.AnimationQueue.prototype.one$core$Startable$ = true;
goog.fx.AnimationQueue.prototype.one$core$Startable$start = (function (this$){
return this$.play(cljs.core.List.EMPTY);
});
goog.fx.dom.PredefinedEffect.prototype.clojure$browser$event$EventType$ = true;
goog.fx.dom.PredefinedEffect.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__12831){
var vec__12832__12833 = p__12831;
var k__12834 = cljs.core.nth.call(null,vec__12832__12833,0,null);
var v__12835 = cljs.core.nth.call(null,vec__12832__12833,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__12834.toLowerCase()),v__12835]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.fx.Animation.EventType))));
});
goog.fx.dom.PredefinedEffect.prototype.one$core$Disposable$ = true;
goog.fx.dom.PredefinedEffect.prototype.one$core$Disposable$dispose = (function (this$){
return this$.dispose(cljs.core.List.EMPTY);
});
goog.fx.dom.PredefinedEffect.prototype.one$core$Startable$ = true;
goog.fx.dom.PredefinedEffect.prototype.one$core$Startable$start = (function (this$){
return this$.play(cljs.core.List.EMPTY);
});
/**
* Get the acceleration function associated with a given
* keyword. Implementing this as a multimethod allows developers to add new
* functions and still represent effects as data.
*/
one.browser.animation.acceleration = (function (){var method_table__1524__auto____12836 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____12837 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____12838 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____12839 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____12840 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject(["﷐'default"],{"﷐'default":"﷐'ease-out"}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("acceleration",cljs.core.identity,"﷐'ease-out",hierarchy__1528__auto____12840,method_table__1524__auto____12836,prefer_table__1525__auto____12837,method_cache__1526__auto____12838,cached_hierarchy__1527__auto____12839));
})();
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'ease-out",(function (name){
return goog.fx.easing.easeOut;
}));
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'ease-in",(function (name){
return goog.fx.easing.easeIn;
}));
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'in-and-out",(function (name){
return goog.fx.easing.inAndOut;
}));
/**
* Given a map which represents an effect. Return the acceleration
* function or `nil`.
*/
one.browser.animation.accel = (function accel(m){
var temp__3698__auto____12841 = "﷐'accel".call(null,m);

if(cljs.core.truth_(temp__3698__auto____12841))
{var a__12842 = temp__3698__auto____12841;

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,a__12842)))
{return a__12842;
} else
{return one.browser.animation.acceleration.call(null,a__12842);
}
} else
{return null;
}
});


/**
* @constructor
* @param {*} effect
* @param {*} start
* @param {*} end
* @param {*} time
* @param {*} accel
* @param {*=} __meta 
* @param {*=} __extmap
*/
one.browser.animation.Effect = (function (effect,start,end,time,accel, __meta, __extmap){
this.effect = effect;
this.start = start;
this.end = end;
this.time = time;
this.accel = accel;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
one.browser.animation.Effect.prototype.one$browser$animation$IScroll$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IScroll$scroll = (function (this$){
var this__12845 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IHash$ = true;
one.browser.animation.Effect.prototype.cljs$core$IHash$_hash = (function (this__1337__auto__){
var this__12846 = this;
return cljs.core.hash_coll.call(null,this__1337__auto__);
});
one.browser.animation.Effect.prototype.cljs$core$ILookup$ = true;
one.browser.animation.Effect.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12872 = null;
var G__12872__12873 = (function (this__1342__auto__,k__1343__auto__){
var this__12847 = this;
return cljs.core._lookup.call(null,this__1342__auto__,k__1343__auto__,null);
});
var G__12872__12874 = (function (this__1344__auto__,k__1345__auto__,else__1346__auto__){
var this__12848 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'effect",this__12848.effect,"﷐'start",this__12848.start,"﷐'end",this__12848.end,"﷐'time",this__12848.time,"﷐'accel",this__12848.accel),this__12848.__extmap),k__1345__auto__,else__1346__auto__);
});
G__12872 = function(this__1344__auto__,k__1345__auto__,else__1346__auto__){
switch(arguments.length){
case  2 :
return G__12872__12873.call(this,this__1344__auto__,k__1345__auto__);
case  3 :
return G__12872__12874.call(this,this__1344__auto__,k__1345__auto__,else__1346__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12872;
})()
;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$ = true;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$_assoc = (function (this__1350__auto__,k__1351__auto__,G__12843){
var this__12849 = this;
var pred__12850__12853 = cljs.core.identical_QMARK_;
var expr__12851__12854 = k__1351__auto__;

if(cljs.core.truth_(pred__12850__12853.call(null,"﷐'effect",expr__12851__12854)))
{return (new one.browser.animation.Effect(G__12843,this__12849.start,this__12849.end,this__12849.time,this__12849.accel,this__12849.__meta,this__12849.__extmap));
} else
{if(cljs.core.truth_(pred__12850__12853.call(null,"﷐'start",expr__12851__12854)))
{return (new one.browser.animation.Effect(this__12849.effect,G__12843,this__12849.end,this__12849.time,this__12849.accel,this__12849.__meta,this__12849.__extmap));
} else
{if(cljs.core.truth_(pred__12850__12853.call(null,"﷐'end",expr__12851__12854)))
{return (new one.browser.animation.Effect(this__12849.effect,this__12849.start,G__12843,this__12849.time,this__12849.accel,this__12849.__meta,this__12849.__extmap));
} else
{if(cljs.core.truth_(pred__12850__12853.call(null,"﷐'time",expr__12851__12854)))
{return (new one.browser.animation.Effect(this__12849.effect,this__12849.start,this__12849.end,G__12843,this__12849.accel,this__12849.__meta,this__12849.__extmap));
} else
{if(cljs.core.truth_(pred__12850__12853.call(null,"﷐'accel",expr__12851__12854)))
{return (new one.browser.animation.Effect(this__12849.effect,this__12849.start,this__12849.end,this__12849.time,G__12843,this__12849.__meta,this__12849.__extmap));
} else
{return (new one.browser.animation.Effect(this__12849.effect,this__12849.start,this__12849.end,this__12849.time,this__12849.accel,this__12849.__meta,cljs.core.assoc.call(null,this__12849.__extmap,k__1351__auto__,G__12843)));
}
}
}
}
}
});
one.browser.animation.Effect.prototype.cljs$core$IRecord$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$_conj = (function (this__1348__auto__,entry__1349__auto__){
var this__12855 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__1349__auto__)))
{return cljs.core._assoc.call(null,this__1348__auto__,cljs.core._nth.call(null,entry__1349__auto__,0),cljs.core._nth.call(null,entry__1349__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__1348__auto__,entry__1349__auto__);
}
});
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$position = (function (this$){
var this__12856 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$ = true;
one.browser.animation.Effect.prototype.one$color$IColorSource$color = (function (this$){
var this__12857 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$bg_color = (function (this$){
var this__12858 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$ISeqable$ = true;
one.browser.animation.Effect.prototype.cljs$core$ISeqable$_seq = (function (this__1355__auto__){
var this__12859 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__12859.effect),cljs.core.vector.call(null,"﷐'start",this__12859.start),cljs.core.vector.call(null,"﷐'end",this__12859.end),cljs.core.vector.call(null,"﷐'time",this__12859.time),cljs.core.vector.call(null,"﷐'accel",this__12859.accel)]),this__12859.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IPrintable$ = true;
one.browser.animation.Effect.prototype.cljs$core$IPrintable$_pr_seq = (function (this__1357__auto__,opts__1358__auto__){
var this__12860 = this;
var pr_pair__1359__auto____12861 = (function (keyval__1360__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__1358__auto__,keyval__1360__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__1359__auto____12861,cljs.core.str.call(null,"#","one.browser.animation.Effect","{"),", ","}",opts__1358__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__12860.effect),cljs.core.vector.call(null,"﷐'start",this__12860.start),cljs.core.vector.call(null,"﷐'end",this__12860.end),cljs.core.vector.call(null,"﷐'time",this__12860.time),cljs.core.vector.call(null,"﷐'accel",this__12860.accel)]),this__12860.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$ICounted$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICounted$_count = (function (this__1347__auto__){
var this__12862 = this;
return (5 + cljs.core.count.call(null,this__12862.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IEquiv$ = true;
one.browser.animation.Effect.prototype.cljs$core$IEquiv$_equiv = (function (this__1338__auto__,other__1339__auto__){
var this__12863 = this;
var and__3546__auto____12864 = (this__1338__auto__.constructor === other__1339__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____12864))
{return cljs.core.equiv_map.call(null,this__1338__auto__,other__1339__auto__);
} else
{return and__3546__auto____12864;
}
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$ISize$size = (function (this$){
var this__12865 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$width = (function (this$){
var this__12866 = this;
return one.browser.animation.width.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$height = (function (this$){
var this__12867 = this;
return one.browser.animation.height.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$_with_meta = (function (this__1341__auto__,G__12843){
var this__12868 = this;
return (new one.browser.animation.Effect(this__12868.effect,this__12868.start,this__12868.end,this__12868.time,this__12868.accel,G__12843,this__12868.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMeta$_meta = (function (this__1340__auto__){
var this__12869 = this;
return this__12869.__meta;
});
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
var this__12871 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IMap$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMap$_dissoc = (function (this__1352__auto__,k__1353__auto__){
var this__12870 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'effect","﷐'start","﷐'end","﷐'accel","﷐'time"]),k__1353__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__1352__auto__),this__12870.__meta),k__1353__auto__);
} else
{return (new one.browser.animation.Effect(this__12870.effect,this__12870.start,this__12870.end,this__12870.time,this__12870.accel,this__12870.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__12870.__extmap,k__1353__auto__))));
}
});
one.browser.animation.__GT_Effect = (function __GT_Effect(effect,start,end,time,accel){
return (new one.browser.animation.Effect(effect,start,end,time,accel));
});
one.browser.animation.map__GT_Effect = (function map__GT_Effect(G__12844){
return (new one.browser.animation.Effect("﷐'effect".call(null,G__12844),"﷐'start".call(null,G__12844),"﷐'end".call(null,G__12844),"﷐'time".call(null,G__12844),"﷐'accel".call(null,G__12844),null,cljs.core.dissoc.call(null,G__12844,"﷐'effect","﷐'start","﷐'end","﷐'time","﷐'accel")));
});
/**
* Dispatch function for effect multimethods. Accepts an element and a
* map describing an effect and returns the effect name as a keyword.
*/
one.browser.animation.effect_dispatch = (function effect_dispatch(_,p__12876){
var map__12877__12878 = p__12876;
var map__12877__12879 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12877__12878))?cljs.core.apply.call(null,cljs.core.hash_map,map__12877__12878):map__12877__12878);
var effect__12880 = cljs.core.get.call(null,map__12877__12879,"﷐'effect");

return effect__12880;
});
/**
* Accepts an element and an effect map and returns a standardized
* effect map which must contain the four keys: `:start`, `:end`,
* `:time` and `:accel`.
* 
* The element argument can either be an HTML element or an effect map
* which describes the previous effect.
*/
one.browser.animation.standardize = (function (){var method_table__1524__auto____12881 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____12882 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____12883 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____12884 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____12885 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("standardize",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__1528__auto____12885,method_table__1524__auto____12881,prefer_table__1525__auto____12882,method_cache__1526__auto____12883,cached_hierarchy__1527__auto____12884));
})();
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'color",(function (element,m){
return (new one.browser.animation.Effect("﷐'color",one.color.color.call(null,(function (){var or__3548__auto____12886 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____12886))
{return or__3548__auto____12886;
} else
{return element;
}
})()),one.color.color.call(null,(function (){var or__3548__auto____12887 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____12887))
{return or__3548__auto____12887;
} else
{return element;
}
})()),(function (){var or__3548__auto____12888 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12888))
{return or__3548__auto____12888;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
/**
* Accepts an element and a map and returns an effect. The returned
* effect may be run or composed with other effects.
* 
* Available effects include: `:color`, `:fade`, `:fade-in`, `:fade-out`,
* `:fade-in-and-show`, `:fade-out-and-hide`, `:slide`, `:swipe`, `:bg-color`,
* `:resize`, `:resize-width` and `:resize-height`.
*/
one.browser.animation.effect = (function (){var method_table__1524__auto____12889 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____12890 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____12891 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____12892 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____12893 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("effect",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__1528__auto____12893,method_table__1524__auto____12889,prefer_table__1525__auto____12890,method_cache__1526__auto____12891,cached_hierarchy__1527__auto____12892));
})();
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'color",(function (element,m){
var map__12894__12895 = one.browser.animation.standardize.call(null,element,m);
var map__12894__12896 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12894__12895))?cljs.core.apply.call(null,cljs.core.hash_map,map__12894__12895):map__12894__12895);
var accel__12897 = cljs.core.get.call(null,map__12894__12896,"﷐'accel");
var time__12898 = cljs.core.get.call(null,map__12894__12896,"﷐'time");
var end__12899 = cljs.core.get.call(null,map__12894__12896,"﷐'end");
var start__12900 = cljs.core.get.call(null,map__12894__12896,"﷐'start");

return (new goog.fx.dom.ColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__12900)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__12899)),time__12898,accel__12897));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade",one.browser.animation.opacity.call(null,(function (){var or__3548__auto____12901 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____12901))
{return or__3548__auto____12901;
} else
{return element;
}
})()),one.browser.animation.opacity.call(null,"﷐'end".call(null,m)),(function (){var or__3548__auto____12902 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12902))
{return or__3548__auto____12902;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade",(function (element,m){
var map__12903__12904 = one.browser.animation.standardize.call(null,element,m);
var map__12903__12905 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12903__12904))?cljs.core.apply.call(null,cljs.core.hash_map,map__12903__12904):map__12903__12904);
var accel__12906 = cljs.core.get.call(null,map__12903__12905,"﷐'accel");
var time__12907 = cljs.core.get.call(null,map__12903__12905,"﷐'time");
var end__12908 = cljs.core.get.call(null,map__12903__12905,"﷐'end");
var start__12909 = cljs.core.get.call(null,map__12903__12905,"﷐'start");

return (new goog.fx.dom.Fade(element,start__12909,end__12908,time__12907,accel__12906));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in",0,1,(function (){var or__3548__auto____12910 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12910))
{return or__3548__auto____12910;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in",(function (element,m){
var map__12911__12912 = one.browser.animation.standardize.call(null,element,m);
var map__12911__12913 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12911__12912))?cljs.core.apply.call(null,cljs.core.hash_map,map__12911__12912):map__12911__12912);
var accel__12914 = cljs.core.get.call(null,map__12911__12913,"﷐'accel");
var time__12915 = cljs.core.get.call(null,map__12911__12913,"﷐'time");

return (new goog.fx.dom.FadeIn(element,time__12915,accel__12914));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out",1,0,(function (){var or__3548__auto____12916 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12916))
{return or__3548__auto____12916;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out",(function (element,m){
var map__12917__12918 = one.browser.animation.standardize.call(null,element,m);
var map__12917__12919 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12917__12918))?cljs.core.apply.call(null,cljs.core.hash_map,map__12917__12918):map__12917__12918);
var accel__12920 = cljs.core.get.call(null,map__12917__12919,"﷐'accel");
var time__12921 = cljs.core.get.call(null,map__12917__12919,"﷐'time");

return (new goog.fx.dom.FadeOut(element,time__12921,accel__12920));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in-and-show",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in-and-show",0,1,(function (){var or__3548__auto____12922 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12922))
{return or__3548__auto____12922;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in-and-show",(function (element,m){
var map__12923__12924 = one.browser.animation.standardize.call(null,element,m);
var map__12923__12925 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12923__12924))?cljs.core.apply.call(null,cljs.core.hash_map,map__12923__12924):map__12923__12924);
var accel__12926 = cljs.core.get.call(null,map__12923__12925,"﷐'accel");
var time__12927 = cljs.core.get.call(null,map__12923__12925,"﷐'time");

return (new goog.fx.dom.FadeInAndShow(element,time__12927,accel__12926));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out-and-hide",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out-and-hide",1,0,(function (){var or__3548__auto____12928 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12928))
{return or__3548__auto____12928;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out-and-hide",(function (element,m){
var map__12930__12931 = one.browser.animation.standardize.call(null,element,m);
var map__12930__12932 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12930__12931))?cljs.core.apply.call(null,cljs.core.hash_map,map__12930__12931):map__12930__12931);
var accel__12933 = cljs.core.get.call(null,map__12930__12932,"﷐'accel");
var time__12934 = cljs.core.get.call(null,map__12930__12932,"﷐'time");

return (new goog.fx.dom.FadeOutAndHide(element,time__12934,accel__12933));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'bg-color",(function (element,m){
var start__12936 = (function (){var or__3548__auto____12935 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____12935))
{return or__3548__auto____12935;
} else
{return element;
}
})();
var end__12938 = (function (){var or__3548__auto____12937 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____12937))
{return or__3548__auto____12937;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'bg-color",one.color.bg_color.call(null,start__12936),one.color.bg_color.call(null,end__12938),(function (){var or__3548__auto____12939 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12939))
{return or__3548__auto____12939;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'bg-color",(function (element,m){
var map__12940__12941 = one.browser.animation.standardize.call(null,element,m);
var map__12940__12942 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12940__12941))?cljs.core.apply.call(null,cljs.core.hash_map,map__12940__12941):map__12940__12941);
var accel__12943 = cljs.core.get.call(null,map__12940__12942,"﷐'accel");
var time__12944 = cljs.core.get.call(null,map__12940__12942,"﷐'time");
var end__12945 = cljs.core.get.call(null,map__12940__12942,"﷐'end");
var start__12946 = cljs.core.get.call(null,map__12940__12942,"﷐'start");

return (new goog.fx.dom.BgColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__12946)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__12945)),time__12944,accel__12943));
}));
/**
* Calculate the end of a slide based on the start value and the
* passed `:left`, `:right`, `:up` and `:down` values.
*/
one.browser.animation.calculate_slide_end = (function calculate_slide_end(p__12947,m){
var vec__12948__12949 = p__12947;
var x__12950 = cljs.core.nth.call(null,vec__12948__12949,0,null);
var y__12951 = cljs.core.nth.call(null,vec__12948__12949,1,null);

return cljs.core.vector.call(null,((x__12950 - "﷐'left".call(null,m,0)) + "﷐'right".call(null,m,0)),((y__12951 - "﷐'up".call(null,m,0)) + "﷐'down".call(null,m,0)));
});
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'slide",(function (element,m){
var start__12953 = one.browser.animation.position.call(null,(function (){var or__3548__auto____12952 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____12952))
{return or__3548__auto____12952;
} else
{return element;
}
})());
var end__12955 = (function (){var or__3548__auto____12954 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____12954))
{return or__3548__auto____12954;
} else
{return one.browser.animation.calculate_slide_end.call(null,start__12953,m);
}
})();

return (new one.browser.animation.Effect("﷐'slide",start__12953,end__12955,(function (){var or__3548__auto____12956 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12956))
{return or__3548__auto____12956;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'slide",(function (element,m){
var map__12957__12958 = one.browser.animation.standardize.call(null,element,m);
var map__12957__12959 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12957__12958))?cljs.core.apply.call(null,cljs.core.hash_map,map__12957__12958):map__12957__12958);
var accel__12960 = cljs.core.get.call(null,map__12957__12959,"﷐'accel");
var time__12961 = cljs.core.get.call(null,map__12957__12959,"﷐'time");
var end__12962 = cljs.core.get.call(null,map__12957__12959,"﷐'end");
var start__12963 = cljs.core.get.call(null,map__12957__12959,"﷐'start");

return (new goog.fx.dom.Slide(element,cljs.core.apply.call(null,cljs.core.array,start__12963),cljs.core.apply.call(null,cljs.core.array,end__12962),time__12961,accel__12960));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-height",(function (element,m){
var start__12966 = (function (){var temp__3698__auto____12964 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____12964))
{var h__12965 = temp__3698__auto____12964;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__12965)]);
} else
{return null;
}
})();
var end__12969 = (function (){var temp__3698__auto____12967 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____12967))
{var h__12968 = temp__3698__auto____12967;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__12968)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-height",one.browser.animation.size.call(null,(function (){var or__3548__auto____12970 = start__12966;

if(cljs.core.truth_(or__3548__auto____12970))
{return or__3548__auto____12970;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____12971 = end__12969;

if(cljs.core.truth_(or__3548__auto____12971))
{return or__3548__auto____12971;
} else
{return element;
}
})()),(function (){var or__3548__auto____12972 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12972))
{return or__3548__auto____12972;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-height",(function (element,m){
var map__12973__12974 = one.browser.animation.standardize.call(null,element,m);
var map__12973__12975 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12973__12974))?cljs.core.apply.call(null,cljs.core.hash_map,map__12973__12974):map__12973__12974);
var accel__12976 = cljs.core.get.call(null,map__12973__12975,"﷐'accel");
var time__12977 = cljs.core.get.call(null,map__12973__12975,"﷐'time");
var end__12978 = cljs.core.get.call(null,map__12973__12975,"﷐'end");
var start__12979 = cljs.core.get.call(null,map__12973__12975,"﷐'start");

return (new goog.fx.dom.ResizeHeight(element,one.browser.animation.height.call(null,start__12979),one.browser.animation.height.call(null,end__12978),time__12977,accel__12976));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-width",(function (element,m){
var start__12982 = (function (){var temp__3698__auto____12980 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____12980))
{var w__12981 = temp__3698__auto____12980;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__12981),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();
var end__12985 = (function (){var temp__3698__auto____12983 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____12983))
{var w__12984 = temp__3698__auto____12983;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__12984),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-width",one.browser.animation.size.call(null,(function (){var or__3548__auto____12986 = start__12982;

if(cljs.core.truth_(or__3548__auto____12986))
{return or__3548__auto____12986;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____12987 = end__12985;

if(cljs.core.truth_(or__3548__auto____12987))
{return or__3548__auto____12987;
} else
{return element;
}
})()),(function (){var or__3548__auto____12988 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12988))
{return or__3548__auto____12988;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-width",(function (element,m){
var map__12989__12990 = one.browser.animation.standardize.call(null,element,m);
var map__12989__12991 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12989__12990))?cljs.core.apply.call(null,cljs.core.hash_map,map__12989__12990):map__12989__12990);
var accel__12992 = cljs.core.get.call(null,map__12989__12991,"﷐'accel");
var time__12993 = cljs.core.get.call(null,map__12989__12991,"﷐'time");
var end__12994 = cljs.core.get.call(null,map__12989__12991,"﷐'end");
var start__12995 = cljs.core.get.call(null,map__12989__12991,"﷐'start");

return (new goog.fx.dom.ResizeWidth(element,one.browser.animation.width.call(null,start__12995),one.browser.animation.width.call(null,end__12994),time__12993,accel__12992));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize",(function (element,m){
return (new one.browser.animation.Effect("﷐'resize",one.browser.animation.size.call(null,(function (){var or__3548__auto____12996 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____12996))
{return or__3548__auto____12996;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____12997 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____12997))
{return or__3548__auto____12997;
} else
{return element;
}
})()),(function (){var or__3548__auto____12998 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____12998))
{return or__3548__auto____12998;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize",(function (element,m){
var map__12999__13000 = one.browser.animation.standardize.call(null,element,m);
var map__12999__13001 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12999__13000))?cljs.core.apply.call(null,cljs.core.hash_map,map__12999__13000):map__12999__13000);
var accel__13002 = cljs.core.get.call(null,map__12999__13001,"﷐'accel");
var time__13003 = cljs.core.get.call(null,map__12999__13001,"﷐'time");
var end__13004 = cljs.core.get.call(null,map__12999__13001,"﷐'end");
var start__13005 = cljs.core.get.call(null,map__12999__13001,"﷐'start");

return (new goog.fx.dom.Resize(element,cljs.core.apply.call(null,cljs.core.array,start__13005),cljs.core.apply.call(null,cljs.core.array,end__13004),time__13003,accel__13002));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'scroll",(function (element,m){
var start__13007 = (function (){var or__3548__auto____13006 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____13006))
{return or__3548__auto____13006;
} else
{return element;
}
})();
var end__13008 = "﷐'end".call(null,m);

return (new one.browser.animation.Effect("﷐'scroll",one.browser.animation.scroll.call(null,start__13007),one.browser.animation.scroll.call(null,end__13008),(function (){var or__3548__auto____13009 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____13009))
{return or__3548__auto____13009;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'scroll",(function (element,m){
var map__13010__13011 = one.browser.animation.standardize.call(null,element,m);
var map__13010__13012 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13010__13011))?cljs.core.apply.call(null,cljs.core.hash_map,map__13010__13011):map__13010__13011);
var accel__13013 = cljs.core.get.call(null,map__13010__13012,"﷐'accel");
var time__13014 = cljs.core.get.call(null,map__13010__13012,"﷐'time");
var end__13015 = cljs.core.get.call(null,map__13010__13012,"﷐'end");
var start__13016 = cljs.core.get.call(null,map__13010__13012,"﷐'start");

return (new goog.fx.dom.Scroll(element,cljs.core.apply.call(null,cljs.core.array,start__13016),cljs.core.apply.call(null,cljs.core.array,end__13015),time__13014,accel__13013));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'swipe",(function (element,m){
var start__13018 = (function (){var or__3548__auto____13017 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____13017))
{return or__3548__auto____13017;
} else
{return cljs.core.Vector.fromArray([0,0]);
}
})();
var end__13020 = (function (){var or__3548__auto____13019 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____13019))
{return or__3548__auto____13019;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'swipe",one.browser.animation.size.call(null,start__13018),one.browser.animation.size.call(null,end__13020),(function (){var or__3548__auto____13021 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____13021))
{return or__3548__auto____13021;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'swipe",(function (element,m){
var map__13022__13023 = one.browser.animation.standardize.call(null,element,m);
var map__13022__13024 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13022__13023))?cljs.core.apply.call(null,cljs.core.hash_map,map__13022__13023):map__13022__13023);
var accel__13025 = cljs.core.get.call(null,map__13022__13024,"﷐'accel");
var time__13026 = cljs.core.get.call(null,map__13022__13024,"﷐'time");
var end__13027 = cljs.core.get.call(null,map__13022__13024,"﷐'end");
var start__13028 = cljs.core.get.call(null,map__13022__13024,"﷐'start");

return (new goog.fx.dom.Swipe(element,cljs.core.apply.call(null,cljs.core.array,start__13028),cljs.core.apply.call(null,cljs.core.array,end__13027),time__13026,accel__13025));
}));
/**
* Cause the passed animations to run in parallel.
* @param {...*} var_args
*/
one.browser.animation.parallel = (function() { 
var parallel__delegate = function (effects){
var parallel__13029 = (new goog.fx.AnimationParallelQueue());

var G__13030__13031 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__13030__13031))
{var effect__13032 = cljs.core.first.call(null,G__13030__13031);
var G__13030__13033 = G__13030__13031;

while(true){
parallel__13029.add(effect__13032);
var temp__3698__auto____13034 = cljs.core.next.call(null,G__13030__13033);

if(cljs.core.truth_(temp__3698__auto____13034))
{var G__13030__13035 = temp__3698__auto____13034;

{
var G__13036 = cljs.core.first.call(null,G__13030__13035);
var G__13037 = G__13030__13035;
effect__13032 = G__13036;
G__13030__13033 = G__13037;
continue;
}
} else
{}
break;
}
} else
{}
return parallel__13029;
};
var parallel = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return parallel__delegate.call(this, effects);
};
parallel.cljs$lang$maxFixedArity = 0;
parallel.cljs$lang$applyTo = (function (arglist__13038){
var effects = cljs.core.seq( arglist__13038 );;
return parallel__delegate.call(this, effects);
});
return parallel;
})()
;
/**
* Cause the passed animations to be run in order.
* @param {...*} var_args
*/
one.browser.animation.serial = (function() { 
var serial__delegate = function (effects){
var serial__13039 = (new goog.fx.AnimationSerialQueue());

var G__13040__13041 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__13040__13041))
{var effect__13042 = cljs.core.first.call(null,G__13040__13041);
var G__13040__13043 = G__13040__13041;

while(true){
serial__13039.add(effect__13042);
var temp__3698__auto____13044 = cljs.core.next.call(null,G__13040__13043);

if(cljs.core.truth_(temp__3698__auto____13044))
{var G__13040__13045 = temp__3698__auto____13044;

{
var G__13046 = cljs.core.first.call(null,G__13040__13045);
var G__13047 = G__13040__13045;
effect__13042 = G__13046;
G__13040__13043 = G__13047;
continue;
}
} else
{}
break;
}
} else
{}
return serial__13039;
};
var serial = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return serial__delegate.call(this, effects);
};
serial.cljs$lang$maxFixedArity = 0;
serial.cljs$lang$applyTo = (function (arglist__13048){
var effects = cljs.core.seq( arglist__13048 );;
return serial__delegate.call(this, effects);
});
return serial;
})()
;
/**
* Mapping of specific effects to a more general category of
* effect. For example, there are multiple size and opacity
* effects. Within a single animation, each type of effect should
* influence subsequent effects of the same type.
*/
one.browser.animation.effect_types = cljs.core.ObjMap.fromObject(["﷐'fade-in","﷐'resize-height","﷐'fade-in-and-show","﷐'color","﷐'resize","﷐'slide","﷐'bg-color","﷐'resize-width","﷐'swipe","﷐'scroll","﷐'fade-out-and-hide","﷐'fade","﷐'fade-out"],{"﷐'fade-in":"﷐'opacity","﷐'resize-height":"﷐'size","﷐'fade-in-and-show":"﷐'opacity","﷐'color":"﷐'color","﷐'resize":"﷐'size","﷐'slide":"﷐'position","﷐'bg-color":"﷐'bg-color","﷐'resize-width":"﷐'size","﷐'swipe":"﷐'size","﷐'scroll":"﷐'scroll","﷐'fade-out-and-hide":"﷐'opacity","﷐'fade":"﷐'opacity","﷐'fade-out":"﷐'opacity"});
/**
* Standardize an effect within the scope of previous effects. Return
* a vector containing the new environment and the standardized
* effect. An effect may be a single map or a vector of maps
*/
one.browser.animation.standardize_in_env = (function standardize_in_env(element,env,effect){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,effect)))
{var coll__13050 = cljs.core.map.call(null,(function (p1__13049_SHARP_){
return standardize_in_env.call(null,element,env,p1__13049_SHARP_);
}),effect);

return cljs.core.Vector.fromArray([cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,cljs.core.first,coll__13050)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.second,coll__13050))]);
} else
{var effect_type__13051 = "﷐'effect".call(null,effect).call(null,one.browser.animation.effect_types);
var effect__13052 = one.browser.animation.standardize.call(null,cljs.core.get.call(null,env,effect_type__13051,element),effect);
var env__13053 = cljs.core.assoc.call(null,env,effect_type__13051,effect__13052);

return cljs.core.Vector.fromArray([env__13053,effect__13052]);
}
});
/**
* Accepts an element and a list of effects and vectors of effects and
* returns the same structure with all effect map standardized. Missing
* values will be calculated based on previous effects.
* @param {...*} var_args
*/
one.browser.animation.standardize_all_effects = (function() { 
var standardize_all_effects__delegate = function (element,effects){
var env__13054 = cljs.core.ObjMap.fromObject([],{});
var effects__13055 = effects;
var std_effects__13056 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,effects__13055)))
{var effect__13058 = cljs.core.first.call(null,effects__13055);
var vec__13057__13059 = one.browser.animation.standardize_in_env.call(null,element,env__13054,effect__13058);
var env__13060 = cljs.core.nth.call(null,vec__13057__13059,0,null);
var effect__13061 = cljs.core.nth.call(null,vec__13057__13059,1,null);

{
var G__13062 = env__13060;
var G__13063 = cljs.core.rest.call(null,effects__13055);
var G__13064 = cljs.core.conj.call(null,std_effects__13056,effect__13061);
env__13054 = G__13062;
effects__13055 = G__13063;
std_effects__13056 = G__13064;
continue;
}
} else
{return std_effects__13056;
}
break;
}
};
var standardize_all_effects = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return standardize_all_effects__delegate.call(this, element, effects);
};
standardize_all_effects.cljs$lang$maxFixedArity = 1;
standardize_all_effects.cljs$lang$applyTo = (function (arglist__13065){
var element = cljs.core.first(arglist__13065);
var effects = cljs.core.rest(arglist__13065);
return standardize_all_effects__delegate.call(this, element, effects);
});
return standardize_all_effects;
})()
;
/**
* Bind effects to an element returning an animation. Accepts an HTML
* element and any number of effects. Effects can be Maps or a Vector
* of Maps. Each effect is run in order. Each effect within a Vector is
* run in parallel.
* @param {...*} var_args
*/
one.browser.animation.bind = (function() { 
var bind__delegate = function (element,effects){
var element__13066 = one.browser.animation.get_element.call(null,element);
var effects__13067 = cljs.core.apply.call(null,one.browser.animation.standardize_all_effects,element__13066,effects);
var serial__13068 = (new goog.fx.AnimationSerialQueue());

var G__13069__13070 = cljs.core.seq.call(null,effects__13067);

if(cljs.core.truth_(G__13069__13070))
{var sequential_effect__13071 = cljs.core.first.call(null,G__13069__13070);
var G__13069__13072 = G__13069__13070;

while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,sequential_effect__13071)))
{var parallel__13073 = (new goog.fx.AnimationParallelQueue());

var G__13074__13075 = cljs.core.seq.call(null,sequential_effect__13071);

if(cljs.core.truth_(G__13074__13075))
{var parallel_effect__13076 = cljs.core.first.call(null,G__13074__13075);
var G__13074__13077 = G__13074__13075;

while(true){
parallel__13073.add(one.browser.animation.effect.call(null,element__13066,parallel_effect__13076));
var temp__3698__auto____13078 = cljs.core.next.call(null,G__13074__13077);

if(cljs.core.truth_(temp__3698__auto____13078))
{var G__13074__13079 = temp__3698__auto____13078;

{
var G__13082 = cljs.core.first.call(null,G__13074__13079);
var G__13083 = G__13074__13079;
parallel_effect__13076 = G__13082;
G__13074__13077 = G__13083;
continue;
}
} else
{}
break;
}
} else
{}
serial__13068.add(parallel__13073);
} else
{serial__13068.add(one.browser.animation.effect.call(null,element__13066,sequential_effect__13071));
}
var temp__3698__auto____13080 = cljs.core.next.call(null,G__13069__13072);

if(cljs.core.truth_(temp__3698__auto____13080))
{var G__13069__13081 = temp__3698__auto____13080;

{
var G__13084 = cljs.core.first.call(null,G__13069__13081);
var G__13085 = G__13069__13081;
sequential_effect__13071 = G__13084;
G__13069__13072 = G__13085;
continue;
}
} else
{}
break;
}
} else
{}
return serial__13068;
};
var bind = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bind__delegate.call(this, element, effects);
};
bind.cljs$lang$maxFixedArity = 1;
bind.cljs$lang$applyTo = (function (arglist__13086){
var element = cljs.core.first(arglist__13086);
var effects = cljs.core.rest(arglist__13086);
return bind__delegate.call(this, element, effects);
});
return bind;
})()
;
/**
* Source of unique animation ids.
*/
one.browser.animation.animation_id = cljs.core.atom.call(null,0);
/**
* Data structure which supports running animations
* sequentially which have been started by the play and play-animation
* functions.
*/
one.browser.animation.animation_queue = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["﷐'runner","﷐'running","﷐'next"],{"﷐'runner":null,"﷐'running":null,"﷐'next":cljs.core.Vector.fromArray([])}));
/**
* Add an animation to the `animation-queue`. If no runner is
* currently running animations then assign that job to the calling
* function by setting `:runner` to the passed `id` and putting the
* first animation to run under `:running`.
* 
* If a runner is already running then add this animation to the
* vector under `:next`.
*/
one.browser.animation.add_to_queue = (function add_to_queue(queue,id,animations){
var new_next__13087 = cljs.core.conj.call(null,"﷐'next".call(null,queue),animations);

if(cljs.core.truth_("﷐'runner".call(null,queue)))
{return cljs.core.assoc.call(null,queue,"﷐'next",new_next__13087);
} else
{return cljs.core.assoc.call(null,queue,"﷐'runner",id,"﷐'running",cljs.core.first.call(null,new_next__13087),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,new_next__13087)));
}
});
/**
* Record that the runner with `id` has finished running the
* animation. If there are more animations to run, move the next
* animation under the running key and remove it from `:next`. The same
* runner will continue running animations.
* 
* If there are no more animations to run, release the runner from duty
* by setting `:runner` to nil.
*/
one.browser.animation.record_finished_animation = (function record_finished_animation(queue,id){
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,"﷐'next".call(null,queue))))
{return cljs.core.assoc.call(null,queue,"﷐'runner",null,"﷐'running",null);
} else
{return cljs.core.assoc.call(null,queue,"﷐'running",cljs.core.first.call(null,"﷐'next".call(null,queue)),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,"﷐'next".call(null,queue))));
}
});
/**
* This function is called when the runner with `id` has finished
* running an animation. After updating the queue, if this runner is
* still the designated runner, then start running the next
* animation. If the animation which has completed has an associated
* `:after` function, run it.
*/
one.browser.animation.animation_finished = (function animation_finished(id,p__13088){
var map__13089__13090 = p__13088;
var map__13089__13091 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13089__13090))?cljs.core.apply.call(null,cljs.core.hash_map,map__13089__13090):map__13089__13090);
var after__13092 = cljs.core.get.call(null,map__13089__13091,"﷐'after");

var new_queue__13093 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.record_finished_animation,id);

if(cljs.core.truth_(after__13092))
{after__13092.call(null);
} else
{}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,new_queue__13093),id)))
{return one.browser.animation.play_animations.call(null,id,new_queue__13093);
} else
{return null;
}
});
/**
* Create the animation to run.
*/
one.browser.animation.make_animation = (function make_animation(p__13094){
var map__13095__13096 = p__13094;
var map__13095__13097 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13095__13096))?cljs.core.apply.call(null,cljs.core.hash_map,map__13095__13096):map__13095__13096);
var animation__13098 = cljs.core.get.call(null,map__13095__13097,"﷐'animation");
var element__13099 = cljs.core.get.call(null,map__13095__13097,"﷐'element");

if(cljs.core.truth_(element__13099))
{return one.browser.animation.bind.call(null,element__13099,animation__13098);
} else
{return animation__13098;
}
});
/**
* Called by a function which has been assigned the task of running
* animations until there are no more to run. `id` is the runner
* id. `queue` is the value of animation-queue after it was last
* updated. Runs any `:before` function then runs the
* animation. Arranges for `animation-finished` to be called when the
* animation is complete.
* 
* Implementation note: The delay is a hack to get around the fact that
* the `finish` event fires just before the animation has completed. The
* 100 ms delay gives the finished animation just enough time to
* complete before the next animation is started.
*/
one.browser.animation.play_animations = (function play_animations(id,queue){
var animation_map__13100 = "﷐'running".call(null,queue);
var animation__13101 = one.browser.animation.make_animation.call(null,animation_map__13100);

clojure.browser.event.listen_once.call(null,animation__13101,"finish",(function (){
return (new goog.async.Delay((function (){
return one.browser.animation.animation_finished.call(null,id,animation_map__13100);
}))).start(100);
}));
var temp__3698__auto____13102 = "﷐'before".call(null,animation_map__13100);

if(cljs.core.truth_(temp__3698__auto____13102))
{var before__13103 = temp__3698__auto____13102;

before__13103.call(null);
} else
{}
return one.core.start.call(null,animation__13101);
});
/**
* Accepts an element and an animation and ensures that this animation
* will be run after all other animations that have been started by
* this function or by `play-animation`. An optional map may also be
* passed which may contain the keys `:before` and `:after`. Use the `:before`
* key to provide a function which will be called just before
* the animation starts. Use the `:after` key to provide a function
* which will be called after the aniamtion is finished.
* 
* The `serial` function allows you to create animations which run in
* sequence. The `start` function will run these animations. If `start`
* is called to run an animation before a previous call to `start` has
* completed, the animations can conflict. This function should be used
* instead of `start` when you need to ensure that animations do not
* overlap.
*/
one.browser.animation.play = (function() {
var play = null;
var play__13114 = (function (element,animation){
return play.call(null,element,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play__13115 = (function (element,animation,p__13104){
var map__13105__13106 = p__13104;
var map__13105__13107 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13105__13106))?cljs.core.apply.call(null,cljs.core.hash_map,map__13105__13106):map__13105__13106);
var before__13108 = cljs.core.get.call(null,map__13105__13107,"﷐'before");
var after__13109 = cljs.core.get.call(null,map__13105__13107,"﷐'after");
var name__13110 = cljs.core.get.call(null,map__13105__13107,"﷐'name");

var id__13111 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_id,cljs.core.inc);
var animation__13112 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'id","﷐'element","﷐'animation","﷐'before","﷐'after"],{"﷐'name":name__13110,"﷐'id":id__13111,"﷐'element":element,"﷐'animation":animation,"﷐'before":before__13108,"﷐'after":after__13109});
var queue__13113 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.add_to_queue,id__13111,animation__13112);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,queue__13113),id__13111)))
{return one.browser.animation.play_animations.call(null,id__13111,queue__13113);
} else
{return null;
}
});
play = function(element,animation,p__13104){
switch(arguments.length){
case  2 :
return play__13114.call(this,element,animation);
case  3 :
return play__13115.call(this,element,animation,p__13104);
}
throw('Invalid arity: ' + arguments.length);
};
return play;
})()
;
/**
* Accepts an animation and an optional map and ensures that this
* animation will be run after all other animations that have been
* started by this function or by `play`. See documentation for `play`.
*/
one.browser.animation.play_animation = (function() {
var play_animation = null;
var play_animation__13117 = (function (animation){
return play_animation.call(null,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play_animation__13118 = (function (animation,opts){
return one.browser.animation.play.call(null,null,animation,opts);
});
play_animation = function(animation,opts){
switch(arguments.length){
case  1 :
return play_animation__13117.call(this,animation);
case  2 :
return play_animation__13118.call(this,animation,opts);
}
throw('Invalid arity: ' + arguments.length);
};
return play_animation;
})()
;
