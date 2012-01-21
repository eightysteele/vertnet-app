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
if(cljs.core.truth_((function (){var and__3546__auto____4986 = this$;

if(cljs.core.truth_(and__3546__auto____4986))
{return this$.one$browser$animation$IPosition$position;
} else
{return and__3546__auto____4986;
}
})()))
{return this$.one$browser$animation$IPosition$position(this$);
} else
{return (function (){var or__3548__auto____4987 = (one.browser.animation.position[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4987))
{return or__3548__auto____4987;
} else
{var or__3548__auto____4988 = (one.browser.animation.position["_"]);

if(cljs.core.truth_(or__3548__auto____4988))
{return or__3548__auto____4988;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.position",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IPosition$ = true;
Element.prototype.one$browser$animation$IPosition$position = (function (this$){
var p__4989 = cljs.core.js__GT_clj.call(null,goog.style.getPosition.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'x".call(null,p__4989),"﷐'y".call(null,p__4989)]);
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
if(cljs.core.truth_((function (){var and__3546__auto____4990 = this$;

if(cljs.core.truth_(and__3546__auto____4990))
{return this$.one$browser$animation$IScroll$scroll;
} else
{return and__3546__auto____4990;
}
})()))
{return this$.one$browser$animation$IScroll$scroll(this$);
} else
{return (function (){var or__3548__auto____4991 = (one.browser.animation.scroll[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4991))
{return or__3548__auto____4991;
} else
{var or__3548__auto____4992 = (one.browser.animation.scroll["_"]);

if(cljs.core.truth_(or__3548__auto____4992))
{return or__3548__auto____4992;
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
if(cljs.core.truth_((function (){var and__3546__auto____4993 = this$;

if(cljs.core.truth_(and__3546__auto____4993))
{return this$.one$browser$animation$ISize$size;
} else
{return and__3546__auto____4993;
}
})()))
{return this$.one$browser$animation$ISize$size(this$);
} else
{return (function (){var or__3548__auto____4994 = (one.browser.animation.size[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4994))
{return or__3548__auto____4994;
} else
{var or__3548__auto____4995 = (one.browser.animation.size["_"]);

if(cljs.core.truth_(or__3548__auto____4995))
{return or__3548__auto____4995;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.size",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.width = (function width(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4996 = this$;

if(cljs.core.truth_(and__3546__auto____4996))
{return this$.one$browser$animation$ISize$width;
} else
{return and__3546__auto____4996;
}
})()))
{return this$.one$browser$animation$ISize$width(this$);
} else
{return (function (){var or__3548__auto____4997 = (one.browser.animation.width[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4997))
{return or__3548__auto____4997;
} else
{var or__3548__auto____4998 = (one.browser.animation.width["_"]);

if(cljs.core.truth_(or__3548__auto____4998))
{return or__3548__auto____4998;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.width",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.height = (function height(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4999 = this$;

if(cljs.core.truth_(and__3546__auto____4999))
{return this$.one$browser$animation$ISize$height;
} else
{return and__3546__auto____4999;
}
})()))
{return this$.one$browser$animation$ISize$height(this$);
} else
{return (function (){var or__3548__auto____5000 = (one.browser.animation.height[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5000))
{return or__3548__auto____5000;
} else
{var or__3548__auto____5001 = (one.browser.animation.height["_"]);

if(cljs.core.truth_(or__3548__auto____5001))
{return or__3548__auto____5001;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.height",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$ISize$ = true;
Element.prototype.one$browser$animation$ISize$size = (function (this$){
var s__5002 = cljs.core.js__GT_clj.call(null,goog.style.getSize.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'width".call(null,s__5002),"﷐'height".call(null,s__5002)]);
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
if(cljs.core.truth_((function (){var and__3546__auto____5003 = this$;

if(cljs.core.truth_(and__3546__auto____5003))
{return this$.one$browser$animation$IOpacity$opacity;
} else
{return and__3546__auto____5003;
}
})()))
{return this$.one$browser$animation$IOpacity$opacity(this$);
} else
{return (function (){var or__3548__auto____5004 = (one.browser.animation.opacity[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5004))
{return or__3548__auto____5004;
} else
{var or__3548__auto____5005 = (one.browser.animation.opacity["_"]);

if(cljs.core.truth_(or__3548__auto____5005))
{return or__3548__auto____5005;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5006){
var vec__5007__5008 = p__5006;
var k__5009 = cljs.core.nth.call(null,vec__5007__5008,0,null);
var v__5010 = cljs.core.nth.call(null,vec__5007__5008,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5009.toLowerCase()),v__5010]);
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
one.browser.animation.acceleration = (function (){var method_table__1524__auto____5011 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5012 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5013 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5014 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5015 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject(["﷐'default"],{"﷐'default":"﷐'ease-out"}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("acceleration",cljs.core.identity,"﷐'ease-out",hierarchy__1528__auto____5015,method_table__1524__auto____5011,prefer_table__1525__auto____5012,method_cache__1526__auto____5013,cached_hierarchy__1527__auto____5014));
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
var temp__3698__auto____5016 = "﷐'accel".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5016))
{var a__5017 = temp__3698__auto____5016;

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,a__5017)))
{return a__5017;
} else
{return one.browser.animation.acceleration.call(null,a__5017);
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
var this__5020 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IHash$ = true;
one.browser.animation.Effect.prototype.cljs$core$IHash$_hash = (function (this__1337__auto__){
var this__5021 = this;
return cljs.core.hash_coll.call(null,this__1337__auto__);
});
one.browser.animation.Effect.prototype.cljs$core$ILookup$ = true;
one.browser.animation.Effect.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5047 = null;
var G__5047__5048 = (function (this__1342__auto__,k__1343__auto__){
var this__5022 = this;
return cljs.core._lookup.call(null,this__1342__auto__,k__1343__auto__,null);
});
var G__5047__5049 = (function (this__1344__auto__,k__1345__auto__,else__1346__auto__){
var this__5023 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'effect",this__5023.effect,"﷐'start",this__5023.start,"﷐'end",this__5023.end,"﷐'time",this__5023.time,"﷐'accel",this__5023.accel),this__5023.__extmap),k__1345__auto__,else__1346__auto__);
});
G__5047 = function(this__1344__auto__,k__1345__auto__,else__1346__auto__){
switch(arguments.length){
case  2 :
return G__5047__5048.call(this,this__1344__auto__,k__1345__auto__);
case  3 :
return G__5047__5049.call(this,this__1344__auto__,k__1345__auto__,else__1346__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5047;
})()
;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$ = true;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$_assoc = (function (this__1350__auto__,k__1351__auto__,G__5018){
var this__5024 = this;
var pred__5025__5028 = cljs.core.identical_QMARK_;
var expr__5026__5029 = k__1351__auto__;

if(cljs.core.truth_(pred__5025__5028.call(null,"﷐'effect",expr__5026__5029)))
{return (new one.browser.animation.Effect(G__5018,this__5024.start,this__5024.end,this__5024.time,this__5024.accel,this__5024.__meta,this__5024.__extmap));
} else
{if(cljs.core.truth_(pred__5025__5028.call(null,"﷐'start",expr__5026__5029)))
{return (new one.browser.animation.Effect(this__5024.effect,G__5018,this__5024.end,this__5024.time,this__5024.accel,this__5024.__meta,this__5024.__extmap));
} else
{if(cljs.core.truth_(pred__5025__5028.call(null,"﷐'end",expr__5026__5029)))
{return (new one.browser.animation.Effect(this__5024.effect,this__5024.start,G__5018,this__5024.time,this__5024.accel,this__5024.__meta,this__5024.__extmap));
} else
{if(cljs.core.truth_(pred__5025__5028.call(null,"﷐'time",expr__5026__5029)))
{return (new one.browser.animation.Effect(this__5024.effect,this__5024.start,this__5024.end,G__5018,this__5024.accel,this__5024.__meta,this__5024.__extmap));
} else
{if(cljs.core.truth_(pred__5025__5028.call(null,"﷐'accel",expr__5026__5029)))
{return (new one.browser.animation.Effect(this__5024.effect,this__5024.start,this__5024.end,this__5024.time,G__5018,this__5024.__meta,this__5024.__extmap));
} else
{return (new one.browser.animation.Effect(this__5024.effect,this__5024.start,this__5024.end,this__5024.time,this__5024.accel,this__5024.__meta,cljs.core.assoc.call(null,this__5024.__extmap,k__1351__auto__,G__5018)));
}
}
}
}
}
});
one.browser.animation.Effect.prototype.cljs$core$IRecord$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$_conj = (function (this__1348__auto__,entry__1349__auto__){
var this__5030 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__1349__auto__)))
{return cljs.core._assoc.call(null,this__1348__auto__,cljs.core._nth.call(null,entry__1349__auto__,0),cljs.core._nth.call(null,entry__1349__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__1348__auto__,entry__1349__auto__);
}
});
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$position = (function (this$){
var this__5031 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$ = true;
one.browser.animation.Effect.prototype.one$color$IColorSource$color = (function (this$){
var this__5032 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$bg_color = (function (this$){
var this__5033 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$ISeqable$ = true;
one.browser.animation.Effect.prototype.cljs$core$ISeqable$_seq = (function (this__1355__auto__){
var this__5034 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__5034.effect),cljs.core.vector.call(null,"﷐'start",this__5034.start),cljs.core.vector.call(null,"﷐'end",this__5034.end),cljs.core.vector.call(null,"﷐'time",this__5034.time),cljs.core.vector.call(null,"﷐'accel",this__5034.accel)]),this__5034.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IPrintable$ = true;
one.browser.animation.Effect.prototype.cljs$core$IPrintable$_pr_seq = (function (this__1357__auto__,opts__1358__auto__){
var this__5035 = this;
var pr_pair__1359__auto____5036 = (function (keyval__1360__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__1358__auto__,keyval__1360__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__1359__auto____5036,cljs.core.str.call(null,"#","one.browser.animation.Effect","{"),", ","}",opts__1358__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__5035.effect),cljs.core.vector.call(null,"﷐'start",this__5035.start),cljs.core.vector.call(null,"﷐'end",this__5035.end),cljs.core.vector.call(null,"﷐'time",this__5035.time),cljs.core.vector.call(null,"﷐'accel",this__5035.accel)]),this__5035.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$ICounted$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICounted$_count = (function (this__1347__auto__){
var this__5037 = this;
return (5 + cljs.core.count.call(null,this__5037.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IEquiv$ = true;
one.browser.animation.Effect.prototype.cljs$core$IEquiv$_equiv = (function (this__1338__auto__,other__1339__auto__){
var this__5038 = this;
var and__3546__auto____5039 = (this__1338__auto__.constructor === other__1339__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____5039))
{return cljs.core.equiv_map.call(null,this__1338__auto__,other__1339__auto__);
} else
{return and__3546__auto____5039;
}
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$ISize$size = (function (this$){
var this__5040 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$width = (function (this$){
var this__5041 = this;
return one.browser.animation.width.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$height = (function (this$){
var this__5042 = this;
return one.browser.animation.height.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$_with_meta = (function (this__1341__auto__,G__5018){
var this__5043 = this;
return (new one.browser.animation.Effect(this__5043.effect,this__5043.start,this__5043.end,this__5043.time,this__5043.accel,G__5018,this__5043.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMeta$_meta = (function (this__1340__auto__){
var this__5044 = this;
return this__5044.__meta;
});
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
var this__5046 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IMap$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMap$_dissoc = (function (this__1352__auto__,k__1353__auto__){
var this__5045 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'effect","﷐'start","﷐'end","﷐'accel","﷐'time"]),k__1353__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__1352__auto__),this__5045.__meta),k__1353__auto__);
} else
{return (new one.browser.animation.Effect(this__5045.effect,this__5045.start,this__5045.end,this__5045.time,this__5045.accel,this__5045.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__5045.__extmap,k__1353__auto__))));
}
});
one.browser.animation.__GT_Effect = (function __GT_Effect(effect,start,end,time,accel){
return (new one.browser.animation.Effect(effect,start,end,time,accel));
});
one.browser.animation.map__GT_Effect = (function map__GT_Effect(G__5019){
return (new one.browser.animation.Effect("﷐'effect".call(null,G__5019),"﷐'start".call(null,G__5019),"﷐'end".call(null,G__5019),"﷐'time".call(null,G__5019),"﷐'accel".call(null,G__5019),null,cljs.core.dissoc.call(null,G__5019,"﷐'effect","﷐'start","﷐'end","﷐'time","﷐'accel")));
});
/**
* Dispatch function for effect multimethods. Accepts an element and a
* map describing an effect and returns the effect name as a keyword.
*/
one.browser.animation.effect_dispatch = (function effect_dispatch(_,p__5051){
var map__5052__5053 = p__5051;
var map__5052__5054 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5052__5053))?cljs.core.apply.call(null,cljs.core.hash_map,map__5052__5053):map__5052__5053);
var effect__5055 = cljs.core.get.call(null,map__5052__5054,"﷐'effect");

return effect__5055;
});
/**
* Accepts an element and an effect map and returns a standardized
* effect map which must contain the four keys: `:start`, `:end`,
* `:time` and `:accel`.
* 
* The element argument can either be an HTML element or an effect map
* which describes the previous effect.
*/
one.browser.animation.standardize = (function (){var method_table__1524__auto____5056 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5057 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5058 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5059 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5060 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("standardize",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__1528__auto____5060,method_table__1524__auto____5056,prefer_table__1525__auto____5057,method_cache__1526__auto____5058,cached_hierarchy__1527__auto____5059));
})();
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'color",(function (element,m){
return (new one.browser.animation.Effect("﷐'color",one.color.color.call(null,(function (){var or__3548__auto____5061 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5061))
{return or__3548__auto____5061;
} else
{return element;
}
})()),one.color.color.call(null,(function (){var or__3548__auto____5062 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5062))
{return or__3548__auto____5062;
} else
{return element;
}
})()),(function (){var or__3548__auto____5063 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5063))
{return or__3548__auto____5063;
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
one.browser.animation.effect = (function (){var method_table__1524__auto____5064 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__1525__auto____5065 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__1526__auto____5066 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__1527__auto____5067 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__1528__auto____5068 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("effect",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__1528__auto____5068,method_table__1524__auto____5064,prefer_table__1525__auto____5065,method_cache__1526__auto____5066,cached_hierarchy__1527__auto____5067));
})();
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'color",(function (element,m){
var map__5069__5070 = one.browser.animation.standardize.call(null,element,m);
var map__5069__5071 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5069__5070))?cljs.core.apply.call(null,cljs.core.hash_map,map__5069__5070):map__5069__5070);
var accel__5072 = cljs.core.get.call(null,map__5069__5071,"﷐'accel");
var time__5073 = cljs.core.get.call(null,map__5069__5071,"﷐'time");
var end__5074 = cljs.core.get.call(null,map__5069__5071,"﷐'end");
var start__5075 = cljs.core.get.call(null,map__5069__5071,"﷐'start");

return (new goog.fx.dom.ColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__5075)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__5074)),time__5073,accel__5072));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade",one.browser.animation.opacity.call(null,(function (){var or__3548__auto____5076 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5076))
{return or__3548__auto____5076;
} else
{return element;
}
})()),one.browser.animation.opacity.call(null,"﷐'end".call(null,m)),(function (){var or__3548__auto____5077 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5077))
{return or__3548__auto____5077;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade",(function (element,m){
var map__5078__5079 = one.browser.animation.standardize.call(null,element,m);
var map__5078__5080 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5078__5079))?cljs.core.apply.call(null,cljs.core.hash_map,map__5078__5079):map__5078__5079);
var accel__5081 = cljs.core.get.call(null,map__5078__5080,"﷐'accel");
var time__5082 = cljs.core.get.call(null,map__5078__5080,"﷐'time");
var end__5083 = cljs.core.get.call(null,map__5078__5080,"﷐'end");
var start__5084 = cljs.core.get.call(null,map__5078__5080,"﷐'start");

return (new goog.fx.dom.Fade(element,start__5084,end__5083,time__5082,accel__5081));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in",0,1,(function (){var or__3548__auto____5085 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5085))
{return or__3548__auto____5085;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in",(function (element,m){
var map__5086__5087 = one.browser.animation.standardize.call(null,element,m);
var map__5086__5088 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5086__5087))?cljs.core.apply.call(null,cljs.core.hash_map,map__5086__5087):map__5086__5087);
var accel__5089 = cljs.core.get.call(null,map__5086__5088,"﷐'accel");
var time__5090 = cljs.core.get.call(null,map__5086__5088,"﷐'time");

return (new goog.fx.dom.FadeIn(element,time__5090,accel__5089));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out",1,0,(function (){var or__3548__auto____5091 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5091))
{return or__3548__auto____5091;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out",(function (element,m){
var map__5092__5093 = one.browser.animation.standardize.call(null,element,m);
var map__5092__5094 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5092__5093))?cljs.core.apply.call(null,cljs.core.hash_map,map__5092__5093):map__5092__5093);
var accel__5095 = cljs.core.get.call(null,map__5092__5094,"﷐'accel");
var time__5096 = cljs.core.get.call(null,map__5092__5094,"﷐'time");

return (new goog.fx.dom.FadeOut(element,time__5096,accel__5095));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in-and-show",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in-and-show",0,1,(function (){var or__3548__auto____5097 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5097))
{return or__3548__auto____5097;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in-and-show",(function (element,m){
var map__5098__5099 = one.browser.animation.standardize.call(null,element,m);
var map__5098__5100 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5098__5099))?cljs.core.apply.call(null,cljs.core.hash_map,map__5098__5099):map__5098__5099);
var accel__5101 = cljs.core.get.call(null,map__5098__5100,"﷐'accel");
var time__5102 = cljs.core.get.call(null,map__5098__5100,"﷐'time");

return (new goog.fx.dom.FadeInAndShow(element,time__5102,accel__5101));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out-and-hide",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out-and-hide",1,0,(function (){var or__3548__auto____5103 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5103))
{return or__3548__auto____5103;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out-and-hide",(function (element,m){
var map__5105__5106 = one.browser.animation.standardize.call(null,element,m);
var map__5105__5107 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5105__5106))?cljs.core.apply.call(null,cljs.core.hash_map,map__5105__5106):map__5105__5106);
var accel__5108 = cljs.core.get.call(null,map__5105__5107,"﷐'accel");
var time__5109 = cljs.core.get.call(null,map__5105__5107,"﷐'time");

return (new goog.fx.dom.FadeOutAndHide(element,time__5109,accel__5108));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'bg-color",(function (element,m){
var start__5111 = (function (){var or__3548__auto____5110 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5110))
{return or__3548__auto____5110;
} else
{return element;
}
})();
var end__5113 = (function (){var or__3548__auto____5112 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5112))
{return or__3548__auto____5112;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'bg-color",one.color.bg_color.call(null,start__5111),one.color.bg_color.call(null,end__5113),(function (){var or__3548__auto____5114 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5114))
{return or__3548__auto____5114;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'bg-color",(function (element,m){
var map__5115__5116 = one.browser.animation.standardize.call(null,element,m);
var map__5115__5117 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5115__5116))?cljs.core.apply.call(null,cljs.core.hash_map,map__5115__5116):map__5115__5116);
var accel__5118 = cljs.core.get.call(null,map__5115__5117,"﷐'accel");
var time__5119 = cljs.core.get.call(null,map__5115__5117,"﷐'time");
var end__5120 = cljs.core.get.call(null,map__5115__5117,"﷐'end");
var start__5121 = cljs.core.get.call(null,map__5115__5117,"﷐'start");

return (new goog.fx.dom.BgColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__5121)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__5120)),time__5119,accel__5118));
}));
/**
* Calculate the end of a slide based on the start value and the
* passed `:left`, `:right`, `:up` and `:down` values.
*/
one.browser.animation.calculate_slide_end = (function calculate_slide_end(p__5122,m){
var vec__5123__5124 = p__5122;
var x__5125 = cljs.core.nth.call(null,vec__5123__5124,0,null);
var y__5126 = cljs.core.nth.call(null,vec__5123__5124,1,null);

return cljs.core.vector.call(null,((x__5125 - "﷐'left".call(null,m,0)) + "﷐'right".call(null,m,0)),((y__5126 - "﷐'up".call(null,m,0)) + "﷐'down".call(null,m,0)));
});
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'slide",(function (element,m){
var start__5128 = one.browser.animation.position.call(null,(function (){var or__3548__auto____5127 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5127))
{return or__3548__auto____5127;
} else
{return element;
}
})());
var end__5130 = (function (){var or__3548__auto____5129 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5129))
{return or__3548__auto____5129;
} else
{return one.browser.animation.calculate_slide_end.call(null,start__5128,m);
}
})();

return (new one.browser.animation.Effect("﷐'slide",start__5128,end__5130,(function (){var or__3548__auto____5131 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5131))
{return or__3548__auto____5131;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'slide",(function (element,m){
var map__5132__5133 = one.browser.animation.standardize.call(null,element,m);
var map__5132__5134 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5132__5133))?cljs.core.apply.call(null,cljs.core.hash_map,map__5132__5133):map__5132__5133);
var accel__5135 = cljs.core.get.call(null,map__5132__5134,"﷐'accel");
var time__5136 = cljs.core.get.call(null,map__5132__5134,"﷐'time");
var end__5137 = cljs.core.get.call(null,map__5132__5134,"﷐'end");
var start__5138 = cljs.core.get.call(null,map__5132__5134,"﷐'start");

return (new goog.fx.dom.Slide(element,cljs.core.apply.call(null,cljs.core.array,start__5138),cljs.core.apply.call(null,cljs.core.array,end__5137),time__5136,accel__5135));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-height",(function (element,m){
var start__5141 = (function (){var temp__3698__auto____5139 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5139))
{var h__5140 = temp__3698__auto____5139;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__5140)]);
} else
{return null;
}
})();
var end__5144 = (function (){var temp__3698__auto____5142 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5142))
{var h__5143 = temp__3698__auto____5142;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__5143)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-height",one.browser.animation.size.call(null,(function (){var or__3548__auto____5145 = start__5141;

if(cljs.core.truth_(or__3548__auto____5145))
{return or__3548__auto____5145;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5146 = end__5144;

if(cljs.core.truth_(or__3548__auto____5146))
{return or__3548__auto____5146;
} else
{return element;
}
})()),(function (){var or__3548__auto____5147 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5147))
{return or__3548__auto____5147;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-height",(function (element,m){
var map__5148__5149 = one.browser.animation.standardize.call(null,element,m);
var map__5148__5150 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5148__5149))?cljs.core.apply.call(null,cljs.core.hash_map,map__5148__5149):map__5148__5149);
var accel__5151 = cljs.core.get.call(null,map__5148__5150,"﷐'accel");
var time__5152 = cljs.core.get.call(null,map__5148__5150,"﷐'time");
var end__5153 = cljs.core.get.call(null,map__5148__5150,"﷐'end");
var start__5154 = cljs.core.get.call(null,map__5148__5150,"﷐'start");

return (new goog.fx.dom.ResizeHeight(element,one.browser.animation.height.call(null,start__5154),one.browser.animation.height.call(null,end__5153),time__5152,accel__5151));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-width",(function (element,m){
var start__5157 = (function (){var temp__3698__auto____5155 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5155))
{var w__5156 = temp__3698__auto____5155;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__5156),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();
var end__5160 = (function (){var temp__3698__auto____5158 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5158))
{var w__5159 = temp__3698__auto____5158;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__5159),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-width",one.browser.animation.size.call(null,(function (){var or__3548__auto____5161 = start__5157;

if(cljs.core.truth_(or__3548__auto____5161))
{return or__3548__auto____5161;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5162 = end__5160;

if(cljs.core.truth_(or__3548__auto____5162))
{return or__3548__auto____5162;
} else
{return element;
}
})()),(function (){var or__3548__auto____5163 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5163))
{return or__3548__auto____5163;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-width",(function (element,m){
var map__5164__5165 = one.browser.animation.standardize.call(null,element,m);
var map__5164__5166 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5164__5165))?cljs.core.apply.call(null,cljs.core.hash_map,map__5164__5165):map__5164__5165);
var accel__5167 = cljs.core.get.call(null,map__5164__5166,"﷐'accel");
var time__5168 = cljs.core.get.call(null,map__5164__5166,"﷐'time");
var end__5169 = cljs.core.get.call(null,map__5164__5166,"﷐'end");
var start__5170 = cljs.core.get.call(null,map__5164__5166,"﷐'start");

return (new goog.fx.dom.ResizeWidth(element,one.browser.animation.width.call(null,start__5170),one.browser.animation.width.call(null,end__5169),time__5168,accel__5167));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize",(function (element,m){
return (new one.browser.animation.Effect("﷐'resize",one.browser.animation.size.call(null,(function (){var or__3548__auto____5171 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5171))
{return or__3548__auto____5171;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5172 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5172))
{return or__3548__auto____5172;
} else
{return element;
}
})()),(function (){var or__3548__auto____5173 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5173))
{return or__3548__auto____5173;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize",(function (element,m){
var map__5174__5175 = one.browser.animation.standardize.call(null,element,m);
var map__5174__5176 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5174__5175))?cljs.core.apply.call(null,cljs.core.hash_map,map__5174__5175):map__5174__5175);
var accel__5177 = cljs.core.get.call(null,map__5174__5176,"﷐'accel");
var time__5178 = cljs.core.get.call(null,map__5174__5176,"﷐'time");
var end__5179 = cljs.core.get.call(null,map__5174__5176,"﷐'end");
var start__5180 = cljs.core.get.call(null,map__5174__5176,"﷐'start");

return (new goog.fx.dom.Resize(element,cljs.core.apply.call(null,cljs.core.array,start__5180),cljs.core.apply.call(null,cljs.core.array,end__5179),time__5178,accel__5177));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'scroll",(function (element,m){
var start__5182 = (function (){var or__3548__auto____5181 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5181))
{return or__3548__auto____5181;
} else
{return element;
}
})();
var end__5183 = "﷐'end".call(null,m);

return (new one.browser.animation.Effect("﷐'scroll",one.browser.animation.scroll.call(null,start__5182),one.browser.animation.scroll.call(null,end__5183),(function (){var or__3548__auto____5184 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5184))
{return or__3548__auto____5184;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'scroll",(function (element,m){
var map__5185__5186 = one.browser.animation.standardize.call(null,element,m);
var map__5185__5187 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5185__5186))?cljs.core.apply.call(null,cljs.core.hash_map,map__5185__5186):map__5185__5186);
var accel__5188 = cljs.core.get.call(null,map__5185__5187,"﷐'accel");
var time__5189 = cljs.core.get.call(null,map__5185__5187,"﷐'time");
var end__5190 = cljs.core.get.call(null,map__5185__5187,"﷐'end");
var start__5191 = cljs.core.get.call(null,map__5185__5187,"﷐'start");

return (new goog.fx.dom.Scroll(element,cljs.core.apply.call(null,cljs.core.array,start__5191),cljs.core.apply.call(null,cljs.core.array,end__5190),time__5189,accel__5188));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'swipe",(function (element,m){
var start__5193 = (function (){var or__3548__auto____5192 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5192))
{return or__3548__auto____5192;
} else
{return cljs.core.Vector.fromArray([0,0]);
}
})();
var end__5195 = (function (){var or__3548__auto____5194 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5194))
{return or__3548__auto____5194;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'swipe",one.browser.animation.size.call(null,start__5193),one.browser.animation.size.call(null,end__5195),(function (){var or__3548__auto____5196 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5196))
{return or__3548__auto____5196;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'swipe",(function (element,m){
var map__5197__5198 = one.browser.animation.standardize.call(null,element,m);
var map__5197__5199 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5197__5198))?cljs.core.apply.call(null,cljs.core.hash_map,map__5197__5198):map__5197__5198);
var accel__5200 = cljs.core.get.call(null,map__5197__5199,"﷐'accel");
var time__5201 = cljs.core.get.call(null,map__5197__5199,"﷐'time");
var end__5202 = cljs.core.get.call(null,map__5197__5199,"﷐'end");
var start__5203 = cljs.core.get.call(null,map__5197__5199,"﷐'start");

return (new goog.fx.dom.Swipe(element,cljs.core.apply.call(null,cljs.core.array,start__5203),cljs.core.apply.call(null,cljs.core.array,end__5202),time__5201,accel__5200));
}));
/**
* Cause the passed animations to run in parallel.
* @param {...*} var_args
*/
one.browser.animation.parallel = (function() { 
var parallel__delegate = function (effects){
var parallel__5204 = (new goog.fx.AnimationParallelQueue());

var G__5205__5206 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__5205__5206))
{var effect__5207 = cljs.core.first.call(null,G__5205__5206);
var G__5205__5208 = G__5205__5206;

while(true){
parallel__5204.add(effect__5207);
var temp__3698__auto____5209 = cljs.core.next.call(null,G__5205__5208);

if(cljs.core.truth_(temp__3698__auto____5209))
{var G__5205__5210 = temp__3698__auto____5209;

{
var G__5211 = cljs.core.first.call(null,G__5205__5210);
var G__5212 = G__5205__5210;
effect__5207 = G__5211;
G__5205__5208 = G__5212;
continue;
}
} else
{}
break;
}
} else
{}
return parallel__5204;
};
var parallel = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return parallel__delegate.call(this, effects);
};
parallel.cljs$lang$maxFixedArity = 0;
parallel.cljs$lang$applyTo = (function (arglist__5213){
var effects = cljs.core.seq( arglist__5213 );;
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
var serial__5214 = (new goog.fx.AnimationSerialQueue());

var G__5215__5216 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__5215__5216))
{var effect__5217 = cljs.core.first.call(null,G__5215__5216);
var G__5215__5218 = G__5215__5216;

while(true){
serial__5214.add(effect__5217);
var temp__3698__auto____5219 = cljs.core.next.call(null,G__5215__5218);

if(cljs.core.truth_(temp__3698__auto____5219))
{var G__5215__5220 = temp__3698__auto____5219;

{
var G__5221 = cljs.core.first.call(null,G__5215__5220);
var G__5222 = G__5215__5220;
effect__5217 = G__5221;
G__5215__5218 = G__5222;
continue;
}
} else
{}
break;
}
} else
{}
return serial__5214;
};
var serial = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return serial__delegate.call(this, effects);
};
serial.cljs$lang$maxFixedArity = 0;
serial.cljs$lang$applyTo = (function (arglist__5223){
var effects = cljs.core.seq( arglist__5223 );;
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
{var coll__5225 = cljs.core.map.call(null,(function (p1__5224_SHARP_){
return standardize_in_env.call(null,element,env,p1__5224_SHARP_);
}),effect);

return cljs.core.Vector.fromArray([cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,cljs.core.first,coll__5225)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.second,coll__5225))]);
} else
{var effect_type__5226 = "﷐'effect".call(null,effect).call(null,one.browser.animation.effect_types);
var effect__5227 = one.browser.animation.standardize.call(null,cljs.core.get.call(null,env,effect_type__5226,element),effect);
var env__5228 = cljs.core.assoc.call(null,env,effect_type__5226,effect__5227);

return cljs.core.Vector.fromArray([env__5228,effect__5227]);
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
var env__5229 = cljs.core.ObjMap.fromObject([],{});
var effects__5230 = effects;
var std_effects__5231 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,effects__5230)))
{var effect__5233 = cljs.core.first.call(null,effects__5230);
var vec__5232__5234 = one.browser.animation.standardize_in_env.call(null,element,env__5229,effect__5233);
var env__5235 = cljs.core.nth.call(null,vec__5232__5234,0,null);
var effect__5236 = cljs.core.nth.call(null,vec__5232__5234,1,null);

{
var G__5237 = env__5235;
var G__5238 = cljs.core.rest.call(null,effects__5230);
var G__5239 = cljs.core.conj.call(null,std_effects__5231,effect__5236);
env__5229 = G__5237;
effects__5230 = G__5238;
std_effects__5231 = G__5239;
continue;
}
} else
{return std_effects__5231;
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
standardize_all_effects.cljs$lang$applyTo = (function (arglist__5240){
var element = cljs.core.first(arglist__5240);
var effects = cljs.core.rest(arglist__5240);
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
var element__5241 = one.browser.animation.get_element.call(null,element);
var effects__5242 = cljs.core.apply.call(null,one.browser.animation.standardize_all_effects,element__5241,effects);
var serial__5243 = (new goog.fx.AnimationSerialQueue());

var G__5244__5245 = cljs.core.seq.call(null,effects__5242);

if(cljs.core.truth_(G__5244__5245))
{var sequential_effect__5246 = cljs.core.first.call(null,G__5244__5245);
var G__5244__5247 = G__5244__5245;

while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,sequential_effect__5246)))
{var parallel__5248 = (new goog.fx.AnimationParallelQueue());

var G__5249__5250 = cljs.core.seq.call(null,sequential_effect__5246);

if(cljs.core.truth_(G__5249__5250))
{var parallel_effect__5251 = cljs.core.first.call(null,G__5249__5250);
var G__5249__5252 = G__5249__5250;

while(true){
parallel__5248.add(one.browser.animation.effect.call(null,element__5241,parallel_effect__5251));
var temp__3698__auto____5253 = cljs.core.next.call(null,G__5249__5252);

if(cljs.core.truth_(temp__3698__auto____5253))
{var G__5249__5254 = temp__3698__auto____5253;

{
var G__5257 = cljs.core.first.call(null,G__5249__5254);
var G__5258 = G__5249__5254;
parallel_effect__5251 = G__5257;
G__5249__5252 = G__5258;
continue;
}
} else
{}
break;
}
} else
{}
serial__5243.add(parallel__5248);
} else
{serial__5243.add(one.browser.animation.effect.call(null,element__5241,sequential_effect__5246));
}
var temp__3698__auto____5255 = cljs.core.next.call(null,G__5244__5247);

if(cljs.core.truth_(temp__3698__auto____5255))
{var G__5244__5256 = temp__3698__auto____5255;

{
var G__5259 = cljs.core.first.call(null,G__5244__5256);
var G__5260 = G__5244__5256;
sequential_effect__5246 = G__5259;
G__5244__5247 = G__5260;
continue;
}
} else
{}
break;
}
} else
{}
return serial__5243;
};
var bind = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bind__delegate.call(this, element, effects);
};
bind.cljs$lang$maxFixedArity = 1;
bind.cljs$lang$applyTo = (function (arglist__5261){
var element = cljs.core.first(arglist__5261);
var effects = cljs.core.rest(arglist__5261);
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
var new_next__5262 = cljs.core.conj.call(null,"﷐'next".call(null,queue),animations);

if(cljs.core.truth_("﷐'runner".call(null,queue)))
{return cljs.core.assoc.call(null,queue,"﷐'next",new_next__5262);
} else
{return cljs.core.assoc.call(null,queue,"﷐'runner",id,"﷐'running",cljs.core.first.call(null,new_next__5262),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,new_next__5262)));
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
one.browser.animation.animation_finished = (function animation_finished(id,p__5263){
var map__5264__5265 = p__5263;
var map__5264__5266 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5264__5265))?cljs.core.apply.call(null,cljs.core.hash_map,map__5264__5265):map__5264__5265);
var after__5267 = cljs.core.get.call(null,map__5264__5266,"﷐'after");

var new_queue__5268 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.record_finished_animation,id);

if(cljs.core.truth_(after__5267))
{after__5267.call(null);
} else
{}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,new_queue__5268),id)))
{return one.browser.animation.play_animations.call(null,id,new_queue__5268);
} else
{return null;
}
});
/**
* Create the animation to run.
*/
one.browser.animation.make_animation = (function make_animation(p__5269){
var map__5270__5271 = p__5269;
var map__5270__5272 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5270__5271))?cljs.core.apply.call(null,cljs.core.hash_map,map__5270__5271):map__5270__5271);
var animation__5273 = cljs.core.get.call(null,map__5270__5272,"﷐'animation");
var element__5274 = cljs.core.get.call(null,map__5270__5272,"﷐'element");

if(cljs.core.truth_(element__5274))
{return one.browser.animation.bind.call(null,element__5274,animation__5273);
} else
{return animation__5273;
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
var animation_map__5275 = "﷐'running".call(null,queue);
var animation__5276 = one.browser.animation.make_animation.call(null,animation_map__5275);

clojure.browser.event.listen_once.call(null,animation__5276,"finish",(function (){
return (new goog.async.Delay((function (){
return one.browser.animation.animation_finished.call(null,id,animation_map__5275);
}))).start(100);
}));
var temp__3698__auto____5277 = "﷐'before".call(null,animation_map__5275);

if(cljs.core.truth_(temp__3698__auto____5277))
{var before__5278 = temp__3698__auto____5277;

before__5278.call(null);
} else
{}
return one.core.start.call(null,animation__5276);
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
var play__5289 = (function (element,animation){
return play.call(null,element,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play__5290 = (function (element,animation,p__5279){
var map__5280__5281 = p__5279;
var map__5280__5282 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5280__5281))?cljs.core.apply.call(null,cljs.core.hash_map,map__5280__5281):map__5280__5281);
var before__5283 = cljs.core.get.call(null,map__5280__5282,"﷐'before");
var after__5284 = cljs.core.get.call(null,map__5280__5282,"﷐'after");
var name__5285 = cljs.core.get.call(null,map__5280__5282,"﷐'name");

var id__5286 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_id,cljs.core.inc);
var animation__5287 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'id","﷐'element","﷐'animation","﷐'before","﷐'after"],{"﷐'name":name__5285,"﷐'id":id__5286,"﷐'element":element,"﷐'animation":animation,"﷐'before":before__5283,"﷐'after":after__5284});
var queue__5288 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.add_to_queue,id__5286,animation__5287);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,queue__5288),id__5286)))
{return one.browser.animation.play_animations.call(null,id__5286,queue__5288);
} else
{return null;
}
});
play = function(element,animation,p__5279){
switch(arguments.length){
case  2 :
return play__5289.call(this,element,animation);
case  3 :
return play__5290.call(this,element,animation,p__5279);
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
var play_animation__5292 = (function (animation){
return play_animation.call(null,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play_animation__5293 = (function (animation,opts){
return one.browser.animation.play.call(null,null,animation,opts);
});
play_animation = function(animation,opts){
switch(arguments.length){
case  1 :
return play_animation__5292.call(this,animation);
case  2 :
return play_animation__5293.call(this,animation,opts);
}
throw('Invalid arity: ' + arguments.length);
};
return play_animation;
})()
;
