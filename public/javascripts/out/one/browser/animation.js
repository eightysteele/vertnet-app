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
if(cljs.core.truth_((function (){var and__3546__auto____15339 = this$;

if(cljs.core.truth_(and__3546__auto____15339))
{return this$.one$browser$animation$IPosition$position;
} else
{return and__3546__auto____15339;
}
})()))
{return this$.one$browser$animation$IPosition$position(this$);
} else
{return (function (){var or__3548__auto____15340 = (one.browser.animation.position[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15340))
{return or__3548__auto____15340;
} else
{var or__3548__auto____15341 = (one.browser.animation.position["_"]);

if(cljs.core.truth_(or__3548__auto____15341))
{return or__3548__auto____15341;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.position",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IPosition$ = true;
Element.prototype.one$browser$animation$IPosition$position = (function (this$){
var p__15342 = cljs.core.js__GT_clj.call(null,goog.style.getPosition.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'x".call(null,p__15342),"﷐'y".call(null,p__15342)]);
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
if(cljs.core.truth_((function (){var and__3546__auto____15343 = this$;

if(cljs.core.truth_(and__3546__auto____15343))
{return this$.one$browser$animation$IScroll$scroll;
} else
{return and__3546__auto____15343;
}
})()))
{return this$.one$browser$animation$IScroll$scroll(this$);
} else
{return (function (){var or__3548__auto____15344 = (one.browser.animation.scroll[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15344))
{return or__3548__auto____15344;
} else
{var or__3548__auto____15345 = (one.browser.animation.scroll["_"]);

if(cljs.core.truth_(or__3548__auto____15345))
{return or__3548__auto____15345;
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
if(cljs.core.truth_((function (){var and__3546__auto____15346 = this$;

if(cljs.core.truth_(and__3546__auto____15346))
{return this$.one$browser$animation$ISize$size;
} else
{return and__3546__auto____15346;
}
})()))
{return this$.one$browser$animation$ISize$size(this$);
} else
{return (function (){var or__3548__auto____15347 = (one.browser.animation.size[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15347))
{return or__3548__auto____15347;
} else
{var or__3548__auto____15348 = (one.browser.animation.size["_"]);

if(cljs.core.truth_(or__3548__auto____15348))
{return or__3548__auto____15348;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.size",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.width = (function width(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15349 = this$;

if(cljs.core.truth_(and__3546__auto____15349))
{return this$.one$browser$animation$ISize$width;
} else
{return and__3546__auto____15349;
}
})()))
{return this$.one$browser$animation$ISize$width(this$);
} else
{return (function (){var or__3548__auto____15350 = (one.browser.animation.width[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15350))
{return or__3548__auto____15350;
} else
{var or__3548__auto____15351 = (one.browser.animation.width["_"]);

if(cljs.core.truth_(or__3548__auto____15351))
{return or__3548__auto____15351;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.width",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.height = (function height(this$){
if(cljs.core.truth_((function (){var and__3546__auto____15352 = this$;

if(cljs.core.truth_(and__3546__auto____15352))
{return this$.one$browser$animation$ISize$height;
} else
{return and__3546__auto____15352;
}
})()))
{return this$.one$browser$animation$ISize$height(this$);
} else
{return (function (){var or__3548__auto____15353 = (one.browser.animation.height[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15353))
{return or__3548__auto____15353;
} else
{var or__3548__auto____15354 = (one.browser.animation.height["_"]);

if(cljs.core.truth_(or__3548__auto____15354))
{return or__3548__auto____15354;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.height",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$ISize$ = true;
Element.prototype.one$browser$animation$ISize$size = (function (this$){
var s__15355 = cljs.core.js__GT_clj.call(null,goog.style.getSize.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'width".call(null,s__15355),"﷐'height".call(null,s__15355)]);
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
if(cljs.core.truth_((function (){var and__3546__auto____15356 = this$;

if(cljs.core.truth_(and__3546__auto____15356))
{return this$.one$browser$animation$IOpacity$opacity;
} else
{return and__3546__auto____15356;
}
})()))
{return this$.one$browser$animation$IOpacity$opacity(this$);
} else
{return (function (){var or__3548__auto____15357 = (one.browser.animation.opacity[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____15357))
{return or__3548__auto____15357;
} else
{var or__3548__auto____15358 = (one.browser.animation.opacity["_"]);

if(cljs.core.truth_(or__3548__auto____15358))
{return or__3548__auto____15358;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__15359){
var vec__15360__15361 = p__15359;
var k__15362 = cljs.core.nth.call(null,vec__15360__15361,0,null);
var v__15363 = cljs.core.nth.call(null,vec__15360__15361,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__15362.toLowerCase()),v__15363]);
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
one.browser.animation.acceleration = (function (){var method_table__1524__auto____15364 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____15365 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____15366 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____15367 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____15368 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject(["﷐'default"],{"﷐'default":"﷐'ease-out"}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("acceleration",cljs.core.identity,"﷐'ease-out",hierarchy__1528__auto____15368,method_table__1524__auto____15364,prefer_table__1525__auto____15365,method_cache__1526__auto____15366,cached_hierarchy__1527__auto____15367));
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
var temp__3698__auto____15369 = "﷐'accel".call(null,m);

if(cljs.core.truth_(temp__3698__auto____15369))
{var a__15370 = temp__3698__auto____15369;

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,a__15370)))
{return a__15370;
} else
{return one.browser.animation.acceleration.call(null,a__15370);
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
var this__15373 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IHash$ = true;
one.browser.animation.Effect.prototype.cljs$core$IHash$_hash = (function (this__1337__auto__){
var this__15374 = this;
return cljs.core.hash_coll.call(null,this__1337__auto__);
});
one.browser.animation.Effect.prototype.cljs$core$ILookup$ = true;
one.browser.animation.Effect.prototype.cljs$core$ILookup$_lookup = (function() {
var G__15400 = null;
var G__15400__15401 = (function (this__1342__auto__,k__1343__auto__){
var this__15375 = this;
return cljs.core._lookup.call(null,this__1342__auto__,k__1343__auto__,null);
});
var G__15400__15402 = (function (this__1344__auto__,k__1345__auto__,else__1346__auto__){
var this__15376 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'effect",this__15376.effect,"﷐'start",this__15376.start,"﷐'end",this__15376.end,"﷐'time",this__15376.time,"﷐'accel",this__15376.accel),this__15376.__extmap),k__1345__auto__,else__1346__auto__);
});
G__15400 = function(this__1344__auto__,k__1345__auto__,else__1346__auto__){
switch(arguments.length){
case  2 :
return G__15400__15401.call(this,this__1344__auto__,k__1345__auto__);
case  3 :
return G__15400__15402.call(this,this__1344__auto__,k__1345__auto__,else__1346__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15400;
})()
;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$ = true;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$_assoc = (function (this__1350__auto__,k__1351__auto__,G__15371){
var this__15377 = this;
var pred__15378__15381 = cljs.core.identical_QMARK_;
var expr__15379__15382 = k__1351__auto__;

if(cljs.core.truth_(pred__15378__15381.call(null,"﷐'effect",expr__15379__15382)))
{return (new one.browser.animation.Effect(G__15371,this__15377.start,this__15377.end,this__15377.time,this__15377.accel,this__15377.__meta,this__15377.__extmap));
} else
{if(cljs.core.truth_(pred__15378__15381.call(null,"﷐'start",expr__15379__15382)))
{return (new one.browser.animation.Effect(this__15377.effect,G__15371,this__15377.end,this__15377.time,this__15377.accel,this__15377.__meta,this__15377.__extmap));
} else
{if(cljs.core.truth_(pred__15378__15381.call(null,"﷐'end",expr__15379__15382)))
{return (new one.browser.animation.Effect(this__15377.effect,this__15377.start,G__15371,this__15377.time,this__15377.accel,this__15377.__meta,this__15377.__extmap));
} else
{if(cljs.core.truth_(pred__15378__15381.call(null,"﷐'time",expr__15379__15382)))
{return (new one.browser.animation.Effect(this__15377.effect,this__15377.start,this__15377.end,G__15371,this__15377.accel,this__15377.__meta,this__15377.__extmap));
} else
{if(cljs.core.truth_(pred__15378__15381.call(null,"﷐'accel",expr__15379__15382)))
{return (new one.browser.animation.Effect(this__15377.effect,this__15377.start,this__15377.end,this__15377.time,G__15371,this__15377.__meta,this__15377.__extmap));
} else
{return (new one.browser.animation.Effect(this__15377.effect,this__15377.start,this__15377.end,this__15377.time,this__15377.accel,this__15377.__meta,cljs.core.assoc.call(null,this__15377.__extmap,k__1351__auto__,G__15371)));
}
}
}
}
}
});
one.browser.animation.Effect.prototype.cljs$core$IRecord$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$_conj = (function (this__1348__auto__,entry__1349__auto__){
var this__15383 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__1349__auto__)))
{return cljs.core._assoc.call(null,this__1348__auto__,cljs.core._nth.call(null,entry__1349__auto__,0),cljs.core._nth.call(null,entry__1349__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__1348__auto__,entry__1349__auto__);
}
});
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$position = (function (this$){
var this__15384 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$ = true;
one.browser.animation.Effect.prototype.one$color$IColorSource$color = (function (this$){
var this__15385 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$bg_color = (function (this$){
var this__15386 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$ISeqable$ = true;
one.browser.animation.Effect.prototype.cljs$core$ISeqable$_seq = (function (this__1355__auto__){
var this__15387 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__15387.effect),cljs.core.vector.call(null,"﷐'start",this__15387.start),cljs.core.vector.call(null,"﷐'end",this__15387.end),cljs.core.vector.call(null,"﷐'time",this__15387.time),cljs.core.vector.call(null,"﷐'accel",this__15387.accel)]),this__15387.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IPrintable$ = true;
one.browser.animation.Effect.prototype.cljs$core$IPrintable$_pr_seq = (function (this__1357__auto__,opts__1358__auto__){
var this__15388 = this;
var pr_pair__1359__auto____15389 = (function (keyval__1360__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__1358__auto__,keyval__1360__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__1359__auto____15389,cljs.core.str.call(null,"#","one.browser.animation.Effect","{"),", ","}",opts__1358__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__15388.effect),cljs.core.vector.call(null,"﷐'start",this__15388.start),cljs.core.vector.call(null,"﷐'end",this__15388.end),cljs.core.vector.call(null,"﷐'time",this__15388.time),cljs.core.vector.call(null,"﷐'accel",this__15388.accel)]),this__15388.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$ICounted$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICounted$_count = (function (this__1347__auto__){
var this__15390 = this;
return (5 + cljs.core.count.call(null,this__15390.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IEquiv$ = true;
one.browser.animation.Effect.prototype.cljs$core$IEquiv$_equiv = (function (this__1338__auto__,other__1339__auto__){
var this__15391 = this;
var and__3546__auto____15392 = (this__1338__auto__.constructor === other__1339__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____15392))
{return cljs.core.equiv_map.call(null,this__1338__auto__,other__1339__auto__);
} else
{return and__3546__auto____15392;
}
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$ISize$size = (function (this$){
var this__15393 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$width = (function (this$){
var this__15394 = this;
return one.browser.animation.width.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$height = (function (this$){
var this__15395 = this;
return one.browser.animation.height.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$_with_meta = (function (this__1341__auto__,G__15371){
var this__15396 = this;
return (new one.browser.animation.Effect(this__15396.effect,this__15396.start,this__15396.end,this__15396.time,this__15396.accel,G__15371,this__15396.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMeta$_meta = (function (this__1340__auto__){
var this__15397 = this;
return this__15397.__meta;
});
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
var this__15399 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IMap$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMap$_dissoc = (function (this__1352__auto__,k__1353__auto__){
var this__15398 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'effect","﷐'start","﷐'end","﷐'accel","﷐'time"]),k__1353__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__1352__auto__),this__15398.__meta),k__1353__auto__);
} else
{return (new one.browser.animation.Effect(this__15398.effect,this__15398.start,this__15398.end,this__15398.time,this__15398.accel,this__15398.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__15398.__extmap,k__1353__auto__))));
}
});
one.browser.animation.__GT_Effect = (function __GT_Effect(effect,start,end,time,accel){
return (new one.browser.animation.Effect(effect,start,end,time,accel));
});
one.browser.animation.map__GT_Effect = (function map__GT_Effect(G__15372){
return (new one.browser.animation.Effect("﷐'effect".call(null,G__15372),"﷐'start".call(null,G__15372),"﷐'end".call(null,G__15372),"﷐'time".call(null,G__15372),"﷐'accel".call(null,G__15372),null,cljs.core.dissoc.call(null,G__15372,"﷐'effect","﷐'start","﷐'end","﷐'time","﷐'accel")));
});
/**
* Dispatch function for effect multimethods. Accepts an element and a
* map describing an effect and returns the effect name as a keyword.
*/
one.browser.animation.effect_dispatch = (function effect_dispatch(_,p__15404){
var map__15405__15406 = p__15404;
var map__15405__15407 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15405__15406))?cljs.core.apply.call(null,cljs.core.hash_map,map__15405__15406):map__15405__15406);
var effect__15408 = cljs.core.get.call(null,map__15405__15407,"﷐'effect");

return effect__15408;
});
/**
* Accepts an element and an effect map and returns a standardized
* effect map which must contain the four keys: `:start`, `:end`,
* `:time` and `:accel`.
* 
* The element argument can either be an HTML element or an effect map
* which describes the previous effect.
*/
one.browser.animation.standardize = (function (){var method_table__1524__auto____15409 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____15410 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____15411 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____15412 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____15413 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("standardize",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__1528__auto____15413,method_table__1524__auto____15409,prefer_table__1525__auto____15410,method_cache__1526__auto____15411,cached_hierarchy__1527__auto____15412));
})();
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'color",(function (element,m){
return (new one.browser.animation.Effect("﷐'color",one.color.color.call(null,(function (){var or__3548__auto____15414 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____15414))
{return or__3548__auto____15414;
} else
{return element;
}
})()),one.color.color.call(null,(function (){var or__3548__auto____15415 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____15415))
{return or__3548__auto____15415;
} else
{return element;
}
})()),(function (){var or__3548__auto____15416 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15416))
{return or__3548__auto____15416;
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
one.browser.animation.effect = (function (){var method_table__1524__auto____15417 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____15418 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____15419 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____15420 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____15421 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("effect",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__1528__auto____15421,method_table__1524__auto____15417,prefer_table__1525__auto____15418,method_cache__1526__auto____15419,cached_hierarchy__1527__auto____15420));
})();
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'color",(function (element,m){
var map__15422__15423 = one.browser.animation.standardize.call(null,element,m);
var map__15422__15424 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15422__15423))?cljs.core.apply.call(null,cljs.core.hash_map,map__15422__15423):map__15422__15423);
var accel__15425 = cljs.core.get.call(null,map__15422__15424,"﷐'accel");
var time__15426 = cljs.core.get.call(null,map__15422__15424,"﷐'time");
var end__15427 = cljs.core.get.call(null,map__15422__15424,"﷐'end");
var start__15428 = cljs.core.get.call(null,map__15422__15424,"﷐'start");

return (new goog.fx.dom.ColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__15428)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__15427)),time__15426,accel__15425));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade",one.browser.animation.opacity.call(null,(function (){var or__3548__auto____15429 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____15429))
{return or__3548__auto____15429;
} else
{return element;
}
})()),one.browser.animation.opacity.call(null,"﷐'end".call(null,m)),(function (){var or__3548__auto____15430 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15430))
{return or__3548__auto____15430;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade",(function (element,m){
var map__15431__15432 = one.browser.animation.standardize.call(null,element,m);
var map__15431__15433 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15431__15432))?cljs.core.apply.call(null,cljs.core.hash_map,map__15431__15432):map__15431__15432);
var accel__15434 = cljs.core.get.call(null,map__15431__15433,"﷐'accel");
var time__15435 = cljs.core.get.call(null,map__15431__15433,"﷐'time");
var end__15436 = cljs.core.get.call(null,map__15431__15433,"﷐'end");
var start__15437 = cljs.core.get.call(null,map__15431__15433,"﷐'start");

return (new goog.fx.dom.Fade(element,start__15437,end__15436,time__15435,accel__15434));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in",0,1,(function (){var or__3548__auto____15438 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15438))
{return or__3548__auto____15438;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in",(function (element,m){
var map__15439__15440 = one.browser.animation.standardize.call(null,element,m);
var map__15439__15441 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15439__15440))?cljs.core.apply.call(null,cljs.core.hash_map,map__15439__15440):map__15439__15440);
var accel__15442 = cljs.core.get.call(null,map__15439__15441,"﷐'accel");
var time__15443 = cljs.core.get.call(null,map__15439__15441,"﷐'time");

return (new goog.fx.dom.FadeIn(element,time__15443,accel__15442));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out",1,0,(function (){var or__3548__auto____15444 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15444))
{return or__3548__auto____15444;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out",(function (element,m){
var map__15445__15446 = one.browser.animation.standardize.call(null,element,m);
var map__15445__15447 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15445__15446))?cljs.core.apply.call(null,cljs.core.hash_map,map__15445__15446):map__15445__15446);
var accel__15448 = cljs.core.get.call(null,map__15445__15447,"﷐'accel");
var time__15449 = cljs.core.get.call(null,map__15445__15447,"﷐'time");

return (new goog.fx.dom.FadeOut(element,time__15449,accel__15448));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in-and-show",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in-and-show",0,1,(function (){var or__3548__auto____15450 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15450))
{return or__3548__auto____15450;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in-and-show",(function (element,m){
var map__15451__15452 = one.browser.animation.standardize.call(null,element,m);
var map__15451__15453 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15451__15452))?cljs.core.apply.call(null,cljs.core.hash_map,map__15451__15452):map__15451__15452);
var accel__15454 = cljs.core.get.call(null,map__15451__15453,"﷐'accel");
var time__15455 = cljs.core.get.call(null,map__15451__15453,"﷐'time");

return (new goog.fx.dom.FadeInAndShow(element,time__15455,accel__15454));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out-and-hide",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out-and-hide",1,0,(function (){var or__3548__auto____15456 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15456))
{return or__3548__auto____15456;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out-and-hide",(function (element,m){
var map__15458__15459 = one.browser.animation.standardize.call(null,element,m);
var map__15458__15460 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15458__15459))?cljs.core.apply.call(null,cljs.core.hash_map,map__15458__15459):map__15458__15459);
var accel__15461 = cljs.core.get.call(null,map__15458__15460,"﷐'accel");
var time__15462 = cljs.core.get.call(null,map__15458__15460,"﷐'time");

return (new goog.fx.dom.FadeOutAndHide(element,time__15462,accel__15461));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'bg-color",(function (element,m){
var start__15464 = (function (){var or__3548__auto____15463 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____15463))
{return or__3548__auto____15463;
} else
{return element;
}
})();
var end__15466 = (function (){var or__3548__auto____15465 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____15465))
{return or__3548__auto____15465;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'bg-color",one.color.bg_color.call(null,start__15464),one.color.bg_color.call(null,end__15466),(function (){var or__3548__auto____15467 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15467))
{return or__3548__auto____15467;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'bg-color",(function (element,m){
var map__15468__15469 = one.browser.animation.standardize.call(null,element,m);
var map__15468__15470 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15468__15469))?cljs.core.apply.call(null,cljs.core.hash_map,map__15468__15469):map__15468__15469);
var accel__15471 = cljs.core.get.call(null,map__15468__15470,"﷐'accel");
var time__15472 = cljs.core.get.call(null,map__15468__15470,"﷐'time");
var end__15473 = cljs.core.get.call(null,map__15468__15470,"﷐'end");
var start__15474 = cljs.core.get.call(null,map__15468__15470,"﷐'start");

return (new goog.fx.dom.BgColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__15474)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__15473)),time__15472,accel__15471));
}));
/**
* Calculate the end of a slide based on the start value and the
* passed `:left`, `:right`, `:up` and `:down` values.
*/
one.browser.animation.calculate_slide_end = (function calculate_slide_end(p__15475,m){
var vec__15476__15477 = p__15475;
var x__15478 = cljs.core.nth.call(null,vec__15476__15477,0,null);
var y__15479 = cljs.core.nth.call(null,vec__15476__15477,1,null);

return cljs.core.vector.call(null,((x__15478 - "﷐'left".call(null,m,0)) + "﷐'right".call(null,m,0)),((y__15479 - "﷐'up".call(null,m,0)) + "﷐'down".call(null,m,0)));
});
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'slide",(function (element,m){
var start__15481 = one.browser.animation.position.call(null,(function (){var or__3548__auto____15480 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____15480))
{return or__3548__auto____15480;
} else
{return element;
}
})());
var end__15483 = (function (){var or__3548__auto____15482 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____15482))
{return or__3548__auto____15482;
} else
{return one.browser.animation.calculate_slide_end.call(null,start__15481,m);
}
})();

return (new one.browser.animation.Effect("﷐'slide",start__15481,end__15483,(function (){var or__3548__auto____15484 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15484))
{return or__3548__auto____15484;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'slide",(function (element,m){
var map__15485__15486 = one.browser.animation.standardize.call(null,element,m);
var map__15485__15487 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15485__15486))?cljs.core.apply.call(null,cljs.core.hash_map,map__15485__15486):map__15485__15486);
var accel__15488 = cljs.core.get.call(null,map__15485__15487,"﷐'accel");
var time__15489 = cljs.core.get.call(null,map__15485__15487,"﷐'time");
var end__15490 = cljs.core.get.call(null,map__15485__15487,"﷐'end");
var start__15491 = cljs.core.get.call(null,map__15485__15487,"﷐'start");

return (new goog.fx.dom.Slide(element,cljs.core.apply.call(null,cljs.core.array,start__15491),cljs.core.apply.call(null,cljs.core.array,end__15490),time__15489,accel__15488));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-height",(function (element,m){
var start__15494 = (function (){var temp__3698__auto____15492 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____15492))
{var h__15493 = temp__3698__auto____15492;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__15493)]);
} else
{return null;
}
})();
var end__15497 = (function (){var temp__3698__auto____15495 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____15495))
{var h__15496 = temp__3698__auto____15495;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__15496)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-height",one.browser.animation.size.call(null,(function (){var or__3548__auto____15498 = start__15494;

if(cljs.core.truth_(or__3548__auto____15498))
{return or__3548__auto____15498;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____15499 = end__15497;

if(cljs.core.truth_(or__3548__auto____15499))
{return or__3548__auto____15499;
} else
{return element;
}
})()),(function (){var or__3548__auto____15500 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15500))
{return or__3548__auto____15500;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-height",(function (element,m){
var map__15501__15502 = one.browser.animation.standardize.call(null,element,m);
var map__15501__15503 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15501__15502))?cljs.core.apply.call(null,cljs.core.hash_map,map__15501__15502):map__15501__15502);
var accel__15504 = cljs.core.get.call(null,map__15501__15503,"﷐'accel");
var time__15505 = cljs.core.get.call(null,map__15501__15503,"﷐'time");
var end__15506 = cljs.core.get.call(null,map__15501__15503,"﷐'end");
var start__15507 = cljs.core.get.call(null,map__15501__15503,"﷐'start");

return (new goog.fx.dom.ResizeHeight(element,one.browser.animation.height.call(null,start__15507),one.browser.animation.height.call(null,end__15506),time__15505,accel__15504));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-width",(function (element,m){
var start__15510 = (function (){var temp__3698__auto____15508 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____15508))
{var w__15509 = temp__3698__auto____15508;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__15509),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();
var end__15513 = (function (){var temp__3698__auto____15511 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____15511))
{var w__15512 = temp__3698__auto____15511;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__15512),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-width",one.browser.animation.size.call(null,(function (){var or__3548__auto____15514 = start__15510;

if(cljs.core.truth_(or__3548__auto____15514))
{return or__3548__auto____15514;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____15515 = end__15513;

if(cljs.core.truth_(or__3548__auto____15515))
{return or__3548__auto____15515;
} else
{return element;
}
})()),(function (){var or__3548__auto____15516 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15516))
{return or__3548__auto____15516;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-width",(function (element,m){
var map__15517__15518 = one.browser.animation.standardize.call(null,element,m);
var map__15517__15519 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15517__15518))?cljs.core.apply.call(null,cljs.core.hash_map,map__15517__15518):map__15517__15518);
var accel__15520 = cljs.core.get.call(null,map__15517__15519,"﷐'accel");
var time__15521 = cljs.core.get.call(null,map__15517__15519,"﷐'time");
var end__15522 = cljs.core.get.call(null,map__15517__15519,"﷐'end");
var start__15523 = cljs.core.get.call(null,map__15517__15519,"﷐'start");

return (new goog.fx.dom.ResizeWidth(element,one.browser.animation.width.call(null,start__15523),one.browser.animation.width.call(null,end__15522),time__15521,accel__15520));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize",(function (element,m){
return (new one.browser.animation.Effect("﷐'resize",one.browser.animation.size.call(null,(function (){var or__3548__auto____15524 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____15524))
{return or__3548__auto____15524;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____15525 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____15525))
{return or__3548__auto____15525;
} else
{return element;
}
})()),(function (){var or__3548__auto____15526 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15526))
{return or__3548__auto____15526;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize",(function (element,m){
var map__15527__15528 = one.browser.animation.standardize.call(null,element,m);
var map__15527__15529 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15527__15528))?cljs.core.apply.call(null,cljs.core.hash_map,map__15527__15528):map__15527__15528);
var accel__15530 = cljs.core.get.call(null,map__15527__15529,"﷐'accel");
var time__15531 = cljs.core.get.call(null,map__15527__15529,"﷐'time");
var end__15532 = cljs.core.get.call(null,map__15527__15529,"﷐'end");
var start__15533 = cljs.core.get.call(null,map__15527__15529,"﷐'start");

return (new goog.fx.dom.Resize(element,cljs.core.apply.call(null,cljs.core.array,start__15533),cljs.core.apply.call(null,cljs.core.array,end__15532),time__15531,accel__15530));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'scroll",(function (element,m){
var start__15535 = (function (){var or__3548__auto____15534 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____15534))
{return or__3548__auto____15534;
} else
{return element;
}
})();
var end__15536 = "﷐'end".call(null,m);

return (new one.browser.animation.Effect("﷐'scroll",one.browser.animation.scroll.call(null,start__15535),one.browser.animation.scroll.call(null,end__15536),(function (){var or__3548__auto____15537 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15537))
{return or__3548__auto____15537;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'scroll",(function (element,m){
var map__15538__15539 = one.browser.animation.standardize.call(null,element,m);
var map__15538__15540 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15538__15539))?cljs.core.apply.call(null,cljs.core.hash_map,map__15538__15539):map__15538__15539);
var accel__15541 = cljs.core.get.call(null,map__15538__15540,"﷐'accel");
var time__15542 = cljs.core.get.call(null,map__15538__15540,"﷐'time");
var end__15543 = cljs.core.get.call(null,map__15538__15540,"﷐'end");
var start__15544 = cljs.core.get.call(null,map__15538__15540,"﷐'start");

return (new goog.fx.dom.Scroll(element,cljs.core.apply.call(null,cljs.core.array,start__15544),cljs.core.apply.call(null,cljs.core.array,end__15543),time__15542,accel__15541));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'swipe",(function (element,m){
var start__15546 = (function (){var or__3548__auto____15545 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____15545))
{return or__3548__auto____15545;
} else
{return cljs.core.Vector.fromArray([0,0]);
}
})();
var end__15548 = (function (){var or__3548__auto____15547 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____15547))
{return or__3548__auto____15547;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'swipe",one.browser.animation.size.call(null,start__15546),one.browser.animation.size.call(null,end__15548),(function (){var or__3548__auto____15549 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____15549))
{return or__3548__auto____15549;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'swipe",(function (element,m){
var map__15550__15551 = one.browser.animation.standardize.call(null,element,m);
var map__15550__15552 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15550__15551))?cljs.core.apply.call(null,cljs.core.hash_map,map__15550__15551):map__15550__15551);
var accel__15553 = cljs.core.get.call(null,map__15550__15552,"﷐'accel");
var time__15554 = cljs.core.get.call(null,map__15550__15552,"﷐'time");
var end__15555 = cljs.core.get.call(null,map__15550__15552,"﷐'end");
var start__15556 = cljs.core.get.call(null,map__15550__15552,"﷐'start");

return (new goog.fx.dom.Swipe(element,cljs.core.apply.call(null,cljs.core.array,start__15556),cljs.core.apply.call(null,cljs.core.array,end__15555),time__15554,accel__15553));
}));
/**
* Cause the passed animations to run in parallel.
* @param {...*} var_args
*/
one.browser.animation.parallel = (function() { 
var parallel__delegate = function (effects){
var parallel__15557 = (new goog.fx.AnimationParallelQueue());

var G__15558__15559 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__15558__15559))
{var effect__15560 = cljs.core.first.call(null,G__15558__15559);
var G__15558__15561 = G__15558__15559;

while(true){
parallel__15557.add(effect__15560);
var temp__3698__auto____15562 = cljs.core.next.call(null,G__15558__15561);

if(cljs.core.truth_(temp__3698__auto____15562))
{var G__15558__15563 = temp__3698__auto____15562;

{
var G__15564 = cljs.core.first.call(null,G__15558__15563);
var G__15565 = G__15558__15563;
effect__15560 = G__15564;
G__15558__15561 = G__15565;
continue;
}
} else
{}
break;
}
} else
{}
return parallel__15557;
};
var parallel = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return parallel__delegate.call(this, effects);
};
parallel.cljs$lang$maxFixedArity = 0;
parallel.cljs$lang$applyTo = (function (arglist__15566){
var effects = cljs.core.seq( arglist__15566 );;
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
var serial__15567 = (new goog.fx.AnimationSerialQueue());

var G__15568__15569 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__15568__15569))
{var effect__15570 = cljs.core.first.call(null,G__15568__15569);
var G__15568__15571 = G__15568__15569;

while(true){
serial__15567.add(effect__15570);
var temp__3698__auto____15572 = cljs.core.next.call(null,G__15568__15571);

if(cljs.core.truth_(temp__3698__auto____15572))
{var G__15568__15573 = temp__3698__auto____15572;

{
var G__15574 = cljs.core.first.call(null,G__15568__15573);
var G__15575 = G__15568__15573;
effect__15570 = G__15574;
G__15568__15571 = G__15575;
continue;
}
} else
{}
break;
}
} else
{}
return serial__15567;
};
var serial = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return serial__delegate.call(this, effects);
};
serial.cljs$lang$maxFixedArity = 0;
serial.cljs$lang$applyTo = (function (arglist__15576){
var effects = cljs.core.seq( arglist__15576 );;
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
{var coll__15578 = cljs.core.map.call(null,(function (p1__15577_SHARP_){
return standardize_in_env.call(null,element,env,p1__15577_SHARP_);
}),effect);

return cljs.core.Vector.fromArray([cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,cljs.core.first,coll__15578)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.second,coll__15578))]);
} else
{var effect_type__15579 = "﷐'effect".call(null,effect).call(null,one.browser.animation.effect_types);
var effect__15580 = one.browser.animation.standardize.call(null,cljs.core.get.call(null,env,effect_type__15579,element),effect);
var env__15581 = cljs.core.assoc.call(null,env,effect_type__15579,effect__15580);

return cljs.core.Vector.fromArray([env__15581,effect__15580]);
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
var env__15582 = cljs.core.ObjMap.fromObject([],{});
var effects__15583 = effects;
var std_effects__15584 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,effects__15583)))
{var effect__15586 = cljs.core.first.call(null,effects__15583);
var vec__15585__15587 = one.browser.animation.standardize_in_env.call(null,element,env__15582,effect__15586);
var env__15588 = cljs.core.nth.call(null,vec__15585__15587,0,null);
var effect__15589 = cljs.core.nth.call(null,vec__15585__15587,1,null);

{
var G__15590 = env__15588;
var G__15591 = cljs.core.rest.call(null,effects__15583);
var G__15592 = cljs.core.conj.call(null,std_effects__15584,effect__15589);
env__15582 = G__15590;
effects__15583 = G__15591;
std_effects__15584 = G__15592;
continue;
}
} else
{return std_effects__15584;
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
standardize_all_effects.cljs$lang$applyTo = (function (arglist__15593){
var element = cljs.core.first(arglist__15593);
var effects = cljs.core.rest(arglist__15593);
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
var element__15594 = one.browser.animation.get_element.call(null,element);
var effects__15595 = cljs.core.apply.call(null,one.browser.animation.standardize_all_effects,element__15594,effects);
var serial__15596 = (new goog.fx.AnimationSerialQueue());

var G__15597__15598 = cljs.core.seq.call(null,effects__15595);

if(cljs.core.truth_(G__15597__15598))
{var sequential_effect__15599 = cljs.core.first.call(null,G__15597__15598);
var G__15597__15600 = G__15597__15598;

while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,sequential_effect__15599)))
{var parallel__15601 = (new goog.fx.AnimationParallelQueue());

var G__15602__15603 = cljs.core.seq.call(null,sequential_effect__15599);

if(cljs.core.truth_(G__15602__15603))
{var parallel_effect__15604 = cljs.core.first.call(null,G__15602__15603);
var G__15602__15605 = G__15602__15603;

while(true){
parallel__15601.add(one.browser.animation.effect.call(null,element__15594,parallel_effect__15604));
var temp__3698__auto____15606 = cljs.core.next.call(null,G__15602__15605);

if(cljs.core.truth_(temp__3698__auto____15606))
{var G__15602__15607 = temp__3698__auto____15606;

{
var G__15610 = cljs.core.first.call(null,G__15602__15607);
var G__15611 = G__15602__15607;
parallel_effect__15604 = G__15610;
G__15602__15605 = G__15611;
continue;
}
} else
{}
break;
}
} else
{}
serial__15596.add(parallel__15601);
} else
{serial__15596.add(one.browser.animation.effect.call(null,element__15594,sequential_effect__15599));
}
var temp__3698__auto____15608 = cljs.core.next.call(null,G__15597__15600);

if(cljs.core.truth_(temp__3698__auto____15608))
{var G__15597__15609 = temp__3698__auto____15608;

{
var G__15612 = cljs.core.first.call(null,G__15597__15609);
var G__15613 = G__15597__15609;
sequential_effect__15599 = G__15612;
G__15597__15600 = G__15613;
continue;
}
} else
{}
break;
}
} else
{}
return serial__15596;
};
var bind = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bind__delegate.call(this, element, effects);
};
bind.cljs$lang$maxFixedArity = 1;
bind.cljs$lang$applyTo = (function (arglist__15614){
var element = cljs.core.first(arglist__15614);
var effects = cljs.core.rest(arglist__15614);
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
var new_next__15615 = cljs.core.conj.call(null,"﷐'next".call(null,queue),animations);

if(cljs.core.truth_("﷐'runner".call(null,queue)))
{return cljs.core.assoc.call(null,queue,"﷐'next",new_next__15615);
} else
{return cljs.core.assoc.call(null,queue,"﷐'runner",id,"﷐'running",cljs.core.first.call(null,new_next__15615),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,new_next__15615)));
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
one.browser.animation.animation_finished = (function animation_finished(id,p__15616){
var map__15617__15618 = p__15616;
var map__15617__15619 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15617__15618))?cljs.core.apply.call(null,cljs.core.hash_map,map__15617__15618):map__15617__15618);
var after__15620 = cljs.core.get.call(null,map__15617__15619,"﷐'after");

var new_queue__15621 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.record_finished_animation,id);

if(cljs.core.truth_(after__15620))
{after__15620.call(null);
} else
{}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,new_queue__15621),id)))
{return one.browser.animation.play_animations.call(null,id,new_queue__15621);
} else
{return null;
}
});
/**
* Create the animation to run.
*/
one.browser.animation.make_animation = (function make_animation(p__15622){
var map__15623__15624 = p__15622;
var map__15623__15625 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15623__15624))?cljs.core.apply.call(null,cljs.core.hash_map,map__15623__15624):map__15623__15624);
var animation__15626 = cljs.core.get.call(null,map__15623__15625,"﷐'animation");
var element__15627 = cljs.core.get.call(null,map__15623__15625,"﷐'element");

if(cljs.core.truth_(element__15627))
{return one.browser.animation.bind.call(null,element__15627,animation__15626);
} else
{return animation__15626;
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
var animation_map__15628 = "﷐'running".call(null,queue);
var animation__15629 = one.browser.animation.make_animation.call(null,animation_map__15628);

clojure.browser.event.listen_once.call(null,animation__15629,"finish",(function (){
return (new goog.async.Delay((function (){
return one.browser.animation.animation_finished.call(null,id,animation_map__15628);
}))).start(100);
}));
var temp__3698__auto____15630 = "﷐'before".call(null,animation_map__15628);

if(cljs.core.truth_(temp__3698__auto____15630))
{var before__15631 = temp__3698__auto____15630;

before__15631.call(null);
} else
{}
return one.core.start.call(null,animation__15629);
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
var play__15642 = (function (element,animation){
return play.call(null,element,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play__15643 = (function (element,animation,p__15632){
var map__15633__15634 = p__15632;
var map__15633__15635 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15633__15634))?cljs.core.apply.call(null,cljs.core.hash_map,map__15633__15634):map__15633__15634);
var before__15636 = cljs.core.get.call(null,map__15633__15635,"﷐'before");
var after__15637 = cljs.core.get.call(null,map__15633__15635,"﷐'after");
var name__15638 = cljs.core.get.call(null,map__15633__15635,"﷐'name");

var id__15639 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_id,cljs.core.inc);
var animation__15640 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'id","﷐'element","﷐'animation","﷐'before","﷐'after"],{"﷐'name":name__15638,"﷐'id":id__15639,"﷐'element":element,"﷐'animation":animation,"﷐'before":before__15636,"﷐'after":after__15637});
var queue__15641 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.add_to_queue,id__15639,animation__15640);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,queue__15641),id__15639)))
{return one.browser.animation.play_animations.call(null,id__15639,queue__15641);
} else
{return null;
}
});
play = function(element,animation,p__15632){
switch(arguments.length){
case  2 :
return play__15642.call(this,element,animation);
case  3 :
return play__15643.call(this,element,animation,p__15632);
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
var play_animation__15645 = (function (animation){
return play_animation.call(null,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play_animation__15646 = (function (animation,opts){
return one.browser.animation.play.call(null,null,animation,opts);
});
play_animation = function(animation,opts){
switch(arguments.length){
case  1 :
return play_animation__15645.call(this,animation);
case  2 :
return play_animation__15646.call(this,animation,opts);
}
throw('Invalid arity: ' + arguments.length);
};
return play_animation;
})()
;
