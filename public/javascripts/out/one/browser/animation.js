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
if(cljs.core.truth_((function (){var and__3546__auto____5786 = this$;

if(cljs.core.truth_(and__3546__auto____5786))
{return this$.one$browser$animation$IPosition$position;
} else
{return and__3546__auto____5786;
}
})()))
{return this$.one$browser$animation$IPosition$position(this$);
} else
{return (function (){var or__3548__auto____5787 = (one.browser.animation.position[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5787))
{return or__3548__auto____5787;
} else
{var or__3548__auto____5788 = (one.browser.animation.position["_"]);

if(cljs.core.truth_(or__3548__auto____5788))
{return or__3548__auto____5788;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.position",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IPosition$ = true;
Element.prototype.one$browser$animation$IPosition$position = (function (this$){
var p__5789 = cljs.core.js__GT_clj.call(null,goog.style.getPosition.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'x".call(null,p__5789),"﷐'y".call(null,p__5789)]);
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
if(cljs.core.truth_((function (){var and__3546__auto____5790 = this$;

if(cljs.core.truth_(and__3546__auto____5790))
{return this$.one$browser$animation$IScroll$scroll;
} else
{return and__3546__auto____5790;
}
})()))
{return this$.one$browser$animation$IScroll$scroll(this$);
} else
{return (function (){var or__3548__auto____5791 = (one.browser.animation.scroll[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5791))
{return or__3548__auto____5791;
} else
{var or__3548__auto____5792 = (one.browser.animation.scroll["_"]);

if(cljs.core.truth_(or__3548__auto____5792))
{return or__3548__auto____5792;
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
if(cljs.core.truth_((function (){var and__3546__auto____5793 = this$;

if(cljs.core.truth_(and__3546__auto____5793))
{return this$.one$browser$animation$ISize$size;
} else
{return and__3546__auto____5793;
}
})()))
{return this$.one$browser$animation$ISize$size(this$);
} else
{return (function (){var or__3548__auto____5794 = (one.browser.animation.size[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5794))
{return or__3548__auto____5794;
} else
{var or__3548__auto____5795 = (one.browser.animation.size["_"]);

if(cljs.core.truth_(or__3548__auto____5795))
{return or__3548__auto____5795;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.size",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.width = (function width(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5796 = this$;

if(cljs.core.truth_(and__3546__auto____5796))
{return this$.one$browser$animation$ISize$width;
} else
{return and__3546__auto____5796;
}
})()))
{return this$.one$browser$animation$ISize$width(this$);
} else
{return (function (){var or__3548__auto____5797 = (one.browser.animation.width[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5797))
{return or__3548__auto____5797;
} else
{var or__3548__auto____5798 = (one.browser.animation.width["_"]);

if(cljs.core.truth_(or__3548__auto____5798))
{return or__3548__auto____5798;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.width",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.height = (function height(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5799 = this$;

if(cljs.core.truth_(and__3546__auto____5799))
{return this$.one$browser$animation$ISize$height;
} else
{return and__3546__auto____5799;
}
})()))
{return this$.one$browser$animation$ISize$height(this$);
} else
{return (function (){var or__3548__auto____5800 = (one.browser.animation.height[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5800))
{return or__3548__auto____5800;
} else
{var or__3548__auto____5801 = (one.browser.animation.height["_"]);

if(cljs.core.truth_(or__3548__auto____5801))
{return or__3548__auto____5801;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.height",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$ISize$ = true;
Element.prototype.one$browser$animation$ISize$size = (function (this$){
var s__5802 = cljs.core.js__GT_clj.call(null,goog.style.getSize.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'width".call(null,s__5802),"﷐'height".call(null,s__5802)]);
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
if(cljs.core.truth_((function (){var and__3546__auto____5803 = this$;

if(cljs.core.truth_(and__3546__auto____5803))
{return this$.one$browser$animation$IOpacity$opacity;
} else
{return and__3546__auto____5803;
}
})()))
{return this$.one$browser$animation$IOpacity$opacity(this$);
} else
{return (function (){var or__3548__auto____5804 = (one.browser.animation.opacity[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5804))
{return or__3548__auto____5804;
} else
{var or__3548__auto____5805 = (one.browser.animation.opacity["_"]);

if(cljs.core.truth_(or__3548__auto____5805))
{return or__3548__auto____5805;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5806){
var vec__5807__5808 = p__5806;
var k__5809 = cljs.core.nth.call(null,vec__5807__5808,0,null);
var v__5810 = cljs.core.nth.call(null,vec__5807__5808,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5809.toLowerCase()),v__5810]);
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
one.browser.animation.acceleration = (function (){var method_table__1524__auto____5811 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5812 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5813 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5814 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5815 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject(["﷐'default"],{"﷐'default":"﷐'ease-out"}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("acceleration",cljs.core.identity,"﷐'ease-out",hierarchy__1528__auto____5815,method_table__1524__auto____5811,prefer_table__1525__auto____5812,method_cache__1526__auto____5813,cached_hierarchy__1527__auto____5814));
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
var temp__3698__auto____5816 = "﷐'accel".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5816))
{var a__5817 = temp__3698__auto____5816;

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,a__5817)))
{return a__5817;
} else
{return one.browser.animation.acceleration.call(null,a__5817);
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
var this__5820 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IHash$ = true;
one.browser.animation.Effect.prototype.cljs$core$IHash$_hash = (function (this__1337__auto__){
var this__5821 = this;
return cljs.core.hash_coll.call(null,this__1337__auto__);
});
one.browser.animation.Effect.prototype.cljs$core$ILookup$ = true;
one.browser.animation.Effect.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5847 = null;
var G__5847__5848 = (function (this__1342__auto__,k__1343__auto__){
var this__5822 = this;
return cljs.core._lookup.call(null,this__1342__auto__,k__1343__auto__,null);
});
var G__5847__5849 = (function (this__1344__auto__,k__1345__auto__,else__1346__auto__){
var this__5823 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'effect",this__5823.effect,"﷐'start",this__5823.start,"﷐'end",this__5823.end,"﷐'time",this__5823.time,"﷐'accel",this__5823.accel),this__5823.__extmap),k__1345__auto__,else__1346__auto__);
});
G__5847 = function(this__1344__auto__,k__1345__auto__,else__1346__auto__){
switch(arguments.length){
case  2 :
return G__5847__5848.call(this,this__1344__auto__,k__1345__auto__);
case  3 :
return G__5847__5849.call(this,this__1344__auto__,k__1345__auto__,else__1346__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5847;
})()
;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$ = true;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$_assoc = (function (this__1350__auto__,k__1351__auto__,G__5818){
var this__5824 = this;
var pred__5825__5828 = cljs.core.identical_QMARK_;
var expr__5826__5829 = k__1351__auto__;

if(cljs.core.truth_(pred__5825__5828.call(null,"﷐'effect",expr__5826__5829)))
{return (new one.browser.animation.Effect(G__5818,this__5824.start,this__5824.end,this__5824.time,this__5824.accel,this__5824.__meta,this__5824.__extmap));
} else
{if(cljs.core.truth_(pred__5825__5828.call(null,"﷐'start",expr__5826__5829)))
{return (new one.browser.animation.Effect(this__5824.effect,G__5818,this__5824.end,this__5824.time,this__5824.accel,this__5824.__meta,this__5824.__extmap));
} else
{if(cljs.core.truth_(pred__5825__5828.call(null,"﷐'end",expr__5826__5829)))
{return (new one.browser.animation.Effect(this__5824.effect,this__5824.start,G__5818,this__5824.time,this__5824.accel,this__5824.__meta,this__5824.__extmap));
} else
{if(cljs.core.truth_(pred__5825__5828.call(null,"﷐'time",expr__5826__5829)))
{return (new one.browser.animation.Effect(this__5824.effect,this__5824.start,this__5824.end,G__5818,this__5824.accel,this__5824.__meta,this__5824.__extmap));
} else
{if(cljs.core.truth_(pred__5825__5828.call(null,"﷐'accel",expr__5826__5829)))
{return (new one.browser.animation.Effect(this__5824.effect,this__5824.start,this__5824.end,this__5824.time,G__5818,this__5824.__meta,this__5824.__extmap));
} else
{return (new one.browser.animation.Effect(this__5824.effect,this__5824.start,this__5824.end,this__5824.time,this__5824.accel,this__5824.__meta,cljs.core.assoc.call(null,this__5824.__extmap,k__1351__auto__,G__5818)));
}
}
}
}
}
});
one.browser.animation.Effect.prototype.cljs$core$IRecord$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$_conj = (function (this__1348__auto__,entry__1349__auto__){
var this__5830 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__1349__auto__)))
{return cljs.core._assoc.call(null,this__1348__auto__,cljs.core._nth.call(null,entry__1349__auto__,0),cljs.core._nth.call(null,entry__1349__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__1348__auto__,entry__1349__auto__);
}
});
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$position = (function (this$){
var this__5831 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$ = true;
one.browser.animation.Effect.prototype.one$color$IColorSource$color = (function (this$){
var this__5832 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$bg_color = (function (this$){
var this__5833 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$ISeqable$ = true;
one.browser.animation.Effect.prototype.cljs$core$ISeqable$_seq = (function (this__1355__auto__){
var this__5834 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__5834.effect),cljs.core.vector.call(null,"﷐'start",this__5834.start),cljs.core.vector.call(null,"﷐'end",this__5834.end),cljs.core.vector.call(null,"﷐'time",this__5834.time),cljs.core.vector.call(null,"﷐'accel",this__5834.accel)]),this__5834.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IPrintable$ = true;
one.browser.animation.Effect.prototype.cljs$core$IPrintable$_pr_seq = (function (this__1357__auto__,opts__1358__auto__){
var this__5835 = this;
var pr_pair__1359__auto____5836 = (function (keyval__1360__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__1358__auto__,keyval__1360__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__1359__auto____5836,cljs.core.str.call(null,"#","one.browser.animation.Effect","{"),", ","}",opts__1358__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__5835.effect),cljs.core.vector.call(null,"﷐'start",this__5835.start),cljs.core.vector.call(null,"﷐'end",this__5835.end),cljs.core.vector.call(null,"﷐'time",this__5835.time),cljs.core.vector.call(null,"﷐'accel",this__5835.accel)]),this__5835.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$ICounted$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICounted$_count = (function (this__1347__auto__){
var this__5837 = this;
return (5 + cljs.core.count.call(null,this__5837.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IEquiv$ = true;
one.browser.animation.Effect.prototype.cljs$core$IEquiv$_equiv = (function (this__1338__auto__,other__1339__auto__){
var this__5838 = this;
var and__3546__auto____5839 = (this__1338__auto__.constructor === other__1339__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____5839))
{return cljs.core.equiv_map.call(null,this__1338__auto__,other__1339__auto__);
} else
{return and__3546__auto____5839;
}
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$ISize$size = (function (this$){
var this__5840 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$width = (function (this$){
var this__5841 = this;
return one.browser.animation.width.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$height = (function (this$){
var this__5842 = this;
return one.browser.animation.height.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$_with_meta = (function (this__1341__auto__,G__5818){
var this__5843 = this;
return (new one.browser.animation.Effect(this__5843.effect,this__5843.start,this__5843.end,this__5843.time,this__5843.accel,G__5818,this__5843.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMeta$_meta = (function (this__1340__auto__){
var this__5844 = this;
return this__5844.__meta;
});
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
var this__5846 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IMap$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMap$_dissoc = (function (this__1352__auto__,k__1353__auto__){
var this__5845 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'effect","﷐'start","﷐'end","﷐'accel","﷐'time"]),k__1353__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__1352__auto__),this__5845.__meta),k__1353__auto__);
} else
{return (new one.browser.animation.Effect(this__5845.effect,this__5845.start,this__5845.end,this__5845.time,this__5845.accel,this__5845.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__5845.__extmap,k__1353__auto__))));
}
});
one.browser.animation.__GT_Effect = (function __GT_Effect(effect,start,end,time,accel){
return (new one.browser.animation.Effect(effect,start,end,time,accel));
});
one.browser.animation.map__GT_Effect = (function map__GT_Effect(G__5819){
return (new one.browser.animation.Effect("﷐'effect".call(null,G__5819),"﷐'start".call(null,G__5819),"﷐'end".call(null,G__5819),"﷐'time".call(null,G__5819),"﷐'accel".call(null,G__5819),null,cljs.core.dissoc.call(null,G__5819,"﷐'effect","﷐'start","﷐'end","﷐'time","﷐'accel")));
});
/**
* Dispatch function for effect multimethods. Accepts an element and a
* map describing an effect and returns the effect name as a keyword.
*/
one.browser.animation.effect_dispatch = (function effect_dispatch(_,p__5851){
var map__5852__5853 = p__5851;
var map__5852__5854 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5852__5853))?cljs.core.apply.call(null,cljs.core.hash_map,map__5852__5853):map__5852__5853);
var effect__5855 = cljs.core.get.call(null,map__5852__5854,"﷐'effect");

return effect__5855;
});
/**
* Accepts an element and an effect map and returns a standardized
* effect map which must contain the four keys: `:start`, `:end`,
* `:time` and `:accel`.
* 
* The element argument can either be an HTML element or an effect map
* which describes the previous effect.
*/
one.browser.animation.standardize = (function (){var method_table__1524__auto____5856 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5857 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5858 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5859 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5860 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("standardize",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__1528__auto____5860,method_table__1524__auto____5856,prefer_table__1525__auto____5857,method_cache__1526__auto____5858,cached_hierarchy__1527__auto____5859));
})();
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'color",(function (element,m){
return (new one.browser.animation.Effect("﷐'color",one.color.color.call(null,(function (){var or__3548__auto____5861 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5861))
{return or__3548__auto____5861;
} else
{return element;
}
})()),one.color.color.call(null,(function (){var or__3548__auto____5862 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5862))
{return or__3548__auto____5862;
} else
{return element;
}
})()),(function (){var or__3548__auto____5863 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5863))
{return or__3548__auto____5863;
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
one.browser.animation.effect = (function (){var method_table__1524__auto____5864 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5865 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5866 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5867 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5868 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("effect",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__1528__auto____5868,method_table__1524__auto____5864,prefer_table__1525__auto____5865,method_cache__1526__auto____5866,cached_hierarchy__1527__auto____5867));
})();
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'color",(function (element,m){
var map__5869__5870 = one.browser.animation.standardize.call(null,element,m);
var map__5869__5871 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5869__5870))?cljs.core.apply.call(null,cljs.core.hash_map,map__5869__5870):map__5869__5870);
var accel__5872 = cljs.core.get.call(null,map__5869__5871,"﷐'accel");
var time__5873 = cljs.core.get.call(null,map__5869__5871,"﷐'time");
var end__5874 = cljs.core.get.call(null,map__5869__5871,"﷐'end");
var start__5875 = cljs.core.get.call(null,map__5869__5871,"﷐'start");

return (new goog.fx.dom.ColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__5875)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__5874)),time__5873,accel__5872));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade",one.browser.animation.opacity.call(null,(function (){var or__3548__auto____5876 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5876))
{return or__3548__auto____5876;
} else
{return element;
}
})()),one.browser.animation.opacity.call(null,"﷐'end".call(null,m)),(function (){var or__3548__auto____5877 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5877))
{return or__3548__auto____5877;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade",(function (element,m){
var map__5878__5879 = one.browser.animation.standardize.call(null,element,m);
var map__5878__5880 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5878__5879))?cljs.core.apply.call(null,cljs.core.hash_map,map__5878__5879):map__5878__5879);
var accel__5881 = cljs.core.get.call(null,map__5878__5880,"﷐'accel");
var time__5882 = cljs.core.get.call(null,map__5878__5880,"﷐'time");
var end__5883 = cljs.core.get.call(null,map__5878__5880,"﷐'end");
var start__5884 = cljs.core.get.call(null,map__5878__5880,"﷐'start");

return (new goog.fx.dom.Fade(element,start__5884,end__5883,time__5882,accel__5881));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in",0,1,(function (){var or__3548__auto____5885 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5885))
{return or__3548__auto____5885;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in",(function (element,m){
var map__5886__5887 = one.browser.animation.standardize.call(null,element,m);
var map__5886__5888 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5886__5887))?cljs.core.apply.call(null,cljs.core.hash_map,map__5886__5887):map__5886__5887);
var accel__5889 = cljs.core.get.call(null,map__5886__5888,"﷐'accel");
var time__5890 = cljs.core.get.call(null,map__5886__5888,"﷐'time");

return (new goog.fx.dom.FadeIn(element,time__5890,accel__5889));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out",1,0,(function (){var or__3548__auto____5891 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5891))
{return or__3548__auto____5891;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out",(function (element,m){
var map__5892__5893 = one.browser.animation.standardize.call(null,element,m);
var map__5892__5894 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5892__5893))?cljs.core.apply.call(null,cljs.core.hash_map,map__5892__5893):map__5892__5893);
var accel__5895 = cljs.core.get.call(null,map__5892__5894,"﷐'accel");
var time__5896 = cljs.core.get.call(null,map__5892__5894,"﷐'time");

return (new goog.fx.dom.FadeOut(element,time__5896,accel__5895));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in-and-show",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in-and-show",0,1,(function (){var or__3548__auto____5897 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5897))
{return or__3548__auto____5897;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in-and-show",(function (element,m){
var map__5898__5899 = one.browser.animation.standardize.call(null,element,m);
var map__5898__5900 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5898__5899))?cljs.core.apply.call(null,cljs.core.hash_map,map__5898__5899):map__5898__5899);
var accel__5901 = cljs.core.get.call(null,map__5898__5900,"﷐'accel");
var time__5902 = cljs.core.get.call(null,map__5898__5900,"﷐'time");

return (new goog.fx.dom.FadeInAndShow(element,time__5902,accel__5901));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out-and-hide",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out-and-hide",1,0,(function (){var or__3548__auto____5903 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5903))
{return or__3548__auto____5903;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out-and-hide",(function (element,m){
var map__5905__5906 = one.browser.animation.standardize.call(null,element,m);
var map__5905__5907 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5905__5906))?cljs.core.apply.call(null,cljs.core.hash_map,map__5905__5906):map__5905__5906);
var accel__5908 = cljs.core.get.call(null,map__5905__5907,"﷐'accel");
var time__5909 = cljs.core.get.call(null,map__5905__5907,"﷐'time");

return (new goog.fx.dom.FadeOutAndHide(element,time__5909,accel__5908));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'bg-color",(function (element,m){
var start__5911 = (function (){var or__3548__auto____5910 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5910))
{return or__3548__auto____5910;
} else
{return element;
}
})();
var end__5913 = (function (){var or__3548__auto____5912 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5912))
{return or__3548__auto____5912;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'bg-color",one.color.bg_color.call(null,start__5911),one.color.bg_color.call(null,end__5913),(function (){var or__3548__auto____5914 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5914))
{return or__3548__auto____5914;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'bg-color",(function (element,m){
var map__5915__5916 = one.browser.animation.standardize.call(null,element,m);
var map__5915__5917 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5915__5916))?cljs.core.apply.call(null,cljs.core.hash_map,map__5915__5916):map__5915__5916);
var accel__5918 = cljs.core.get.call(null,map__5915__5917,"﷐'accel");
var time__5919 = cljs.core.get.call(null,map__5915__5917,"﷐'time");
var end__5920 = cljs.core.get.call(null,map__5915__5917,"﷐'end");
var start__5921 = cljs.core.get.call(null,map__5915__5917,"﷐'start");

return (new goog.fx.dom.BgColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__5921)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__5920)),time__5919,accel__5918));
}));
/**
* Calculate the end of a slide based on the start value and the
* passed `:left`, `:right`, `:up` and `:down` values.
*/
one.browser.animation.calculate_slide_end = (function calculate_slide_end(p__5922,m){
var vec__5923__5924 = p__5922;
var x__5925 = cljs.core.nth.call(null,vec__5923__5924,0,null);
var y__5926 = cljs.core.nth.call(null,vec__5923__5924,1,null);

return cljs.core.vector.call(null,((x__5925 - "﷐'left".call(null,m,0)) + "﷐'right".call(null,m,0)),((y__5926 - "﷐'up".call(null,m,0)) + "﷐'down".call(null,m,0)));
});
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'slide",(function (element,m){
var start__5928 = one.browser.animation.position.call(null,(function (){var or__3548__auto____5927 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5927))
{return or__3548__auto____5927;
} else
{return element;
}
})());
var end__5930 = (function (){var or__3548__auto____5929 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5929))
{return or__3548__auto____5929;
} else
{return one.browser.animation.calculate_slide_end.call(null,start__5928,m);
}
})();

return (new one.browser.animation.Effect("﷐'slide",start__5928,end__5930,(function (){var or__3548__auto____5931 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5931))
{return or__3548__auto____5931;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'slide",(function (element,m){
var map__5932__5933 = one.browser.animation.standardize.call(null,element,m);
var map__5932__5934 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5932__5933))?cljs.core.apply.call(null,cljs.core.hash_map,map__5932__5933):map__5932__5933);
var accel__5935 = cljs.core.get.call(null,map__5932__5934,"﷐'accel");
var time__5936 = cljs.core.get.call(null,map__5932__5934,"﷐'time");
var end__5937 = cljs.core.get.call(null,map__5932__5934,"﷐'end");
var start__5938 = cljs.core.get.call(null,map__5932__5934,"﷐'start");

return (new goog.fx.dom.Slide(element,cljs.core.apply.call(null,cljs.core.array,start__5938),cljs.core.apply.call(null,cljs.core.array,end__5937),time__5936,accel__5935));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-height",(function (element,m){
var start__5941 = (function (){var temp__3698__auto____5939 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5939))
{var h__5940 = temp__3698__auto____5939;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__5940)]);
} else
{return null;
}
})();
var end__5944 = (function (){var temp__3698__auto____5942 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5942))
{var h__5943 = temp__3698__auto____5942;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__5943)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-height",one.browser.animation.size.call(null,(function (){var or__3548__auto____5945 = start__5941;

if(cljs.core.truth_(or__3548__auto____5945))
{return or__3548__auto____5945;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5946 = end__5944;

if(cljs.core.truth_(or__3548__auto____5946))
{return or__3548__auto____5946;
} else
{return element;
}
})()),(function (){var or__3548__auto____5947 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5947))
{return or__3548__auto____5947;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-height",(function (element,m){
var map__5948__5949 = one.browser.animation.standardize.call(null,element,m);
var map__5948__5950 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5948__5949))?cljs.core.apply.call(null,cljs.core.hash_map,map__5948__5949):map__5948__5949);
var accel__5951 = cljs.core.get.call(null,map__5948__5950,"﷐'accel");
var time__5952 = cljs.core.get.call(null,map__5948__5950,"﷐'time");
var end__5953 = cljs.core.get.call(null,map__5948__5950,"﷐'end");
var start__5954 = cljs.core.get.call(null,map__5948__5950,"﷐'start");

return (new goog.fx.dom.ResizeHeight(element,one.browser.animation.height.call(null,start__5954),one.browser.animation.height.call(null,end__5953),time__5952,accel__5951));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-width",(function (element,m){
var start__5957 = (function (){var temp__3698__auto____5955 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5955))
{var w__5956 = temp__3698__auto____5955;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__5956),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();
var end__5960 = (function (){var temp__3698__auto____5958 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5958))
{var w__5959 = temp__3698__auto____5958;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__5959),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-width",one.browser.animation.size.call(null,(function (){var or__3548__auto____5961 = start__5957;

if(cljs.core.truth_(or__3548__auto____5961))
{return or__3548__auto____5961;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5962 = end__5960;

if(cljs.core.truth_(or__3548__auto____5962))
{return or__3548__auto____5962;
} else
{return element;
}
})()),(function (){var or__3548__auto____5963 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5963))
{return or__3548__auto____5963;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-width",(function (element,m){
var map__5964__5965 = one.browser.animation.standardize.call(null,element,m);
var map__5964__5966 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5964__5965))?cljs.core.apply.call(null,cljs.core.hash_map,map__5964__5965):map__5964__5965);
var accel__5967 = cljs.core.get.call(null,map__5964__5966,"﷐'accel");
var time__5968 = cljs.core.get.call(null,map__5964__5966,"﷐'time");
var end__5969 = cljs.core.get.call(null,map__5964__5966,"﷐'end");
var start__5970 = cljs.core.get.call(null,map__5964__5966,"﷐'start");

return (new goog.fx.dom.ResizeWidth(element,one.browser.animation.width.call(null,start__5970),one.browser.animation.width.call(null,end__5969),time__5968,accel__5967));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize",(function (element,m){
return (new one.browser.animation.Effect("﷐'resize",one.browser.animation.size.call(null,(function (){var or__3548__auto____5971 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5971))
{return or__3548__auto____5971;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5972 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5972))
{return or__3548__auto____5972;
} else
{return element;
}
})()),(function (){var or__3548__auto____5973 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5973))
{return or__3548__auto____5973;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize",(function (element,m){
var map__5974__5975 = one.browser.animation.standardize.call(null,element,m);
var map__5974__5976 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5974__5975))?cljs.core.apply.call(null,cljs.core.hash_map,map__5974__5975):map__5974__5975);
var accel__5977 = cljs.core.get.call(null,map__5974__5976,"﷐'accel");
var time__5978 = cljs.core.get.call(null,map__5974__5976,"﷐'time");
var end__5979 = cljs.core.get.call(null,map__5974__5976,"﷐'end");
var start__5980 = cljs.core.get.call(null,map__5974__5976,"﷐'start");

return (new goog.fx.dom.Resize(element,cljs.core.apply.call(null,cljs.core.array,start__5980),cljs.core.apply.call(null,cljs.core.array,end__5979),time__5978,accel__5977));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'scroll",(function (element,m){
var start__5982 = (function (){var or__3548__auto____5981 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5981))
{return or__3548__auto____5981;
} else
{return element;
}
})();
var end__5983 = "﷐'end".call(null,m);

return (new one.browser.animation.Effect("﷐'scroll",one.browser.animation.scroll.call(null,start__5982),one.browser.animation.scroll.call(null,end__5983),(function (){var or__3548__auto____5984 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5984))
{return or__3548__auto____5984;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'scroll",(function (element,m){
var map__5985__5986 = one.browser.animation.standardize.call(null,element,m);
var map__5985__5987 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5985__5986))?cljs.core.apply.call(null,cljs.core.hash_map,map__5985__5986):map__5985__5986);
var accel__5988 = cljs.core.get.call(null,map__5985__5987,"﷐'accel");
var time__5989 = cljs.core.get.call(null,map__5985__5987,"﷐'time");
var end__5990 = cljs.core.get.call(null,map__5985__5987,"﷐'end");
var start__5991 = cljs.core.get.call(null,map__5985__5987,"﷐'start");

return (new goog.fx.dom.Scroll(element,cljs.core.apply.call(null,cljs.core.array,start__5991),cljs.core.apply.call(null,cljs.core.array,end__5990),time__5989,accel__5988));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'swipe",(function (element,m){
var start__5993 = (function (){var or__3548__auto____5992 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5992))
{return or__3548__auto____5992;
} else
{return cljs.core.Vector.fromArray([0,0]);
}
})();
var end__5995 = (function (){var or__3548__auto____5994 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5994))
{return or__3548__auto____5994;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'swipe",one.browser.animation.size.call(null,start__5993),one.browser.animation.size.call(null,end__5995),(function (){var or__3548__auto____5996 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5996))
{return or__3548__auto____5996;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'swipe",(function (element,m){
var map__5997__5998 = one.browser.animation.standardize.call(null,element,m);
var map__5997__5999 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5997__5998))?cljs.core.apply.call(null,cljs.core.hash_map,map__5997__5998):map__5997__5998);
var accel__6000 = cljs.core.get.call(null,map__5997__5999,"﷐'accel");
var time__6001 = cljs.core.get.call(null,map__5997__5999,"﷐'time");
var end__6002 = cljs.core.get.call(null,map__5997__5999,"﷐'end");
var start__6003 = cljs.core.get.call(null,map__5997__5999,"﷐'start");

return (new goog.fx.dom.Swipe(element,cljs.core.apply.call(null,cljs.core.array,start__6003),cljs.core.apply.call(null,cljs.core.array,end__6002),time__6001,accel__6000));
}));
/**
* Cause the passed animations to run in parallel.
* @param {...*} var_args
*/
one.browser.animation.parallel = (function() { 
var parallel__delegate = function (effects){
var parallel__6004 = (new goog.fx.AnimationParallelQueue());

var G__6005__6006 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__6005__6006))
{var effect__6007 = cljs.core.first.call(null,G__6005__6006);
var G__6005__6008 = G__6005__6006;

while(true){
parallel__6004.add(effect__6007);
var temp__3698__auto____6009 = cljs.core.next.call(null,G__6005__6008);

if(cljs.core.truth_(temp__3698__auto____6009))
{var G__6005__6010 = temp__3698__auto____6009;

{
var G__6011 = cljs.core.first.call(null,G__6005__6010);
var G__6012 = G__6005__6010;
effect__6007 = G__6011;
G__6005__6008 = G__6012;
continue;
}
} else
{}
break;
}
} else
{}
return parallel__6004;
};
var parallel = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return parallel__delegate.call(this, effects);
};
parallel.cljs$lang$maxFixedArity = 0;
parallel.cljs$lang$applyTo = (function (arglist__6013){
var effects = cljs.core.seq( arglist__6013 );;
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
var serial__6014 = (new goog.fx.AnimationSerialQueue());

var G__6015__6016 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__6015__6016))
{var effect__6017 = cljs.core.first.call(null,G__6015__6016);
var G__6015__6018 = G__6015__6016;

while(true){
serial__6014.add(effect__6017);
var temp__3698__auto____6019 = cljs.core.next.call(null,G__6015__6018);

if(cljs.core.truth_(temp__3698__auto____6019))
{var G__6015__6020 = temp__3698__auto____6019;

{
var G__6021 = cljs.core.first.call(null,G__6015__6020);
var G__6022 = G__6015__6020;
effect__6017 = G__6021;
G__6015__6018 = G__6022;
continue;
}
} else
{}
break;
}
} else
{}
return serial__6014;
};
var serial = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return serial__delegate.call(this, effects);
};
serial.cljs$lang$maxFixedArity = 0;
serial.cljs$lang$applyTo = (function (arglist__6023){
var effects = cljs.core.seq( arglist__6023 );;
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
{var coll__6025 = cljs.core.map.call(null,(function (p1__6024_SHARP_){
return standardize_in_env.call(null,element,env,p1__6024_SHARP_);
}),effect);

return cljs.core.Vector.fromArray([cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,cljs.core.first,coll__6025)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.second,coll__6025))]);
} else
{var effect_type__6026 = "﷐'effect".call(null,effect).call(null,one.browser.animation.effect_types);
var effect__6027 = one.browser.animation.standardize.call(null,cljs.core.get.call(null,env,effect_type__6026,element),effect);
var env__6028 = cljs.core.assoc.call(null,env,effect_type__6026,effect__6027);

return cljs.core.Vector.fromArray([env__6028,effect__6027]);
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
var env__6029 = cljs.core.ObjMap.fromObject([],{});
var effects__6030 = effects;
var std_effects__6031 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,effects__6030)))
{var effect__6033 = cljs.core.first.call(null,effects__6030);
var vec__6032__6034 = one.browser.animation.standardize_in_env.call(null,element,env__6029,effect__6033);
var env__6035 = cljs.core.nth.call(null,vec__6032__6034,0,null);
var effect__6036 = cljs.core.nth.call(null,vec__6032__6034,1,null);

{
var G__6037 = env__6035;
var G__6038 = cljs.core.rest.call(null,effects__6030);
var G__6039 = cljs.core.conj.call(null,std_effects__6031,effect__6036);
env__6029 = G__6037;
effects__6030 = G__6038;
std_effects__6031 = G__6039;
continue;
}
} else
{return std_effects__6031;
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
standardize_all_effects.cljs$lang$applyTo = (function (arglist__6040){
var element = cljs.core.first(arglist__6040);
var effects = cljs.core.rest(arglist__6040);
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
var element__6041 = one.browser.animation.get_element.call(null,element);
var effects__6042 = cljs.core.apply.call(null,one.browser.animation.standardize_all_effects,element__6041,effects);
var serial__6043 = (new goog.fx.AnimationSerialQueue());

var G__6044__6045 = cljs.core.seq.call(null,effects__6042);

if(cljs.core.truth_(G__6044__6045))
{var sequential_effect__6046 = cljs.core.first.call(null,G__6044__6045);
var G__6044__6047 = G__6044__6045;

while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,sequential_effect__6046)))
{var parallel__6048 = (new goog.fx.AnimationParallelQueue());

var G__6049__6050 = cljs.core.seq.call(null,sequential_effect__6046);

if(cljs.core.truth_(G__6049__6050))
{var parallel_effect__6051 = cljs.core.first.call(null,G__6049__6050);
var G__6049__6052 = G__6049__6050;

while(true){
parallel__6048.add(one.browser.animation.effect.call(null,element__6041,parallel_effect__6051));
var temp__3698__auto____6053 = cljs.core.next.call(null,G__6049__6052);

if(cljs.core.truth_(temp__3698__auto____6053))
{var G__6049__6054 = temp__3698__auto____6053;

{
var G__6057 = cljs.core.first.call(null,G__6049__6054);
var G__6058 = G__6049__6054;
parallel_effect__6051 = G__6057;
G__6049__6052 = G__6058;
continue;
}
} else
{}
break;
}
} else
{}
serial__6043.add(parallel__6048);
} else
{serial__6043.add(one.browser.animation.effect.call(null,element__6041,sequential_effect__6046));
}
var temp__3698__auto____6055 = cljs.core.next.call(null,G__6044__6047);

if(cljs.core.truth_(temp__3698__auto____6055))
{var G__6044__6056 = temp__3698__auto____6055;

{
var G__6059 = cljs.core.first.call(null,G__6044__6056);
var G__6060 = G__6044__6056;
sequential_effect__6046 = G__6059;
G__6044__6047 = G__6060;
continue;
}
} else
{}
break;
}
} else
{}
return serial__6043;
};
var bind = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bind__delegate.call(this, element, effects);
};
bind.cljs$lang$maxFixedArity = 1;
bind.cljs$lang$applyTo = (function (arglist__6061){
var element = cljs.core.first(arglist__6061);
var effects = cljs.core.rest(arglist__6061);
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
var new_next__6062 = cljs.core.conj.call(null,"﷐'next".call(null,queue),animations);

if(cljs.core.truth_("﷐'runner".call(null,queue)))
{return cljs.core.assoc.call(null,queue,"﷐'next",new_next__6062);
} else
{return cljs.core.assoc.call(null,queue,"﷐'runner",id,"﷐'running",cljs.core.first.call(null,new_next__6062),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,new_next__6062)));
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
one.browser.animation.animation_finished = (function animation_finished(id,p__6063){
var map__6064__6065 = p__6063;
var map__6064__6066 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6064__6065))?cljs.core.apply.call(null,cljs.core.hash_map,map__6064__6065):map__6064__6065);
var after__6067 = cljs.core.get.call(null,map__6064__6066,"﷐'after");

var new_queue__6068 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.record_finished_animation,id);

if(cljs.core.truth_(after__6067))
{after__6067.call(null);
} else
{}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,new_queue__6068),id)))
{return one.browser.animation.play_animations.call(null,id,new_queue__6068);
} else
{return null;
}
});
/**
* Create the animation to run.
*/
one.browser.animation.make_animation = (function make_animation(p__6069){
var map__6070__6071 = p__6069;
var map__6070__6072 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6070__6071))?cljs.core.apply.call(null,cljs.core.hash_map,map__6070__6071):map__6070__6071);
var animation__6073 = cljs.core.get.call(null,map__6070__6072,"﷐'animation");
var element__6074 = cljs.core.get.call(null,map__6070__6072,"﷐'element");

if(cljs.core.truth_(element__6074))
{return one.browser.animation.bind.call(null,element__6074,animation__6073);
} else
{return animation__6073;
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
var animation_map__6075 = "﷐'running".call(null,queue);
var animation__6076 = one.browser.animation.make_animation.call(null,animation_map__6075);

clojure.browser.event.listen_once.call(null,animation__6076,"finish",(function (){
return (new goog.async.Delay((function (){
return one.browser.animation.animation_finished.call(null,id,animation_map__6075);
}))).start(100);
}));
var temp__3698__auto____6077 = "﷐'before".call(null,animation_map__6075);

if(cljs.core.truth_(temp__3698__auto____6077))
{var before__6078 = temp__3698__auto____6077;

before__6078.call(null);
} else
{}
return one.core.start.call(null,animation__6076);
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
var play__6089 = (function (element,animation){
return play.call(null,element,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play__6090 = (function (element,animation,p__6079){
var map__6080__6081 = p__6079;
var map__6080__6082 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6080__6081))?cljs.core.apply.call(null,cljs.core.hash_map,map__6080__6081):map__6080__6081);
var before__6083 = cljs.core.get.call(null,map__6080__6082,"﷐'before");
var after__6084 = cljs.core.get.call(null,map__6080__6082,"﷐'after");
var name__6085 = cljs.core.get.call(null,map__6080__6082,"﷐'name");

var id__6086 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_id,cljs.core.inc);
var animation__6087 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'id","﷐'element","﷐'animation","﷐'before","﷐'after"],{"﷐'name":name__6085,"﷐'id":id__6086,"﷐'element":element,"﷐'animation":animation,"﷐'before":before__6083,"﷐'after":after__6084});
var queue__6088 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.add_to_queue,id__6086,animation__6087);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,queue__6088),id__6086)))
{return one.browser.animation.play_animations.call(null,id__6086,queue__6088);
} else
{return null;
}
});
play = function(element,animation,p__6079){
switch(arguments.length){
case  2 :
return play__6089.call(this,element,animation);
case  3 :
return play__6090.call(this,element,animation,p__6079);
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
var play_animation__6092 = (function (animation){
return play_animation.call(null,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play_animation__6093 = (function (animation,opts){
return one.browser.animation.play.call(null,null,animation,opts);
});
play_animation = function(animation,opts){
switch(arguments.length){
case  1 :
return play_animation__6092.call(this,animation);
case  2 :
return play_animation__6093.call(this,animation,opts);
}
throw('Invalid arity: ' + arguments.length);
};
return play_animation;
})()
;
