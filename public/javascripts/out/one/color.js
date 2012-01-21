goog.provide('one.color');
goog.require('cljs.core');
goog.require('one.core');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.color');
goog.require('goog.color.alpha');
one.color.IColor = {};
one.color.rgb = (function rgb(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5295 = this$;

if(cljs.core.truth_(and__3546__auto____5295))
{return this$.one$color$IColor$rgb;
} else
{return and__3546__auto____5295;
}
})()))
{return this$.one$color$IColor$rgb(this$);
} else
{return (function (){var or__3548__auto____5296 = (one.color.rgb[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5296))
{return or__3548__auto____5296;
} else
{var or__3548__auto____5297 = (one.color.rgb["_"]);

if(cljs.core.truth_(or__3548__auto____5297))
{return or__3548__auto____5297;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgb",this$);
}
}
})().call(null,this$);
}
});
one.color.rgba = (function rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5298 = this$;

if(cljs.core.truth_(and__3546__auto____5298))
{return this$.one$color$IColor$rgba;
} else
{return and__3546__auto____5298;
}
})()))
{return this$.one$color$IColor$rgba(this$);
} else
{return (function (){var or__3548__auto____5299 = (one.color.rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5299))
{return or__3548__auto____5299;
} else
{var or__3548__auto____5300 = (one.color.rgba["_"]);

if(cljs.core.truth_(or__3548__auto____5300))
{return or__3548__auto____5300;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.hex = (function hex(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5301 = this$;

if(cljs.core.truth_(and__3546__auto____5301))
{return this$.one$color$IColor$hex;
} else
{return and__3546__auto____5301;
}
})()))
{return this$.one$color$IColor$hex(this$);
} else
{return (function (){var or__3548__auto____5302 = (one.color.hex[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5302))
{return or__3548__auto____5302;
} else
{var or__3548__auto____5303 = (one.color.hex["_"]);

if(cljs.core.truth_(or__3548__auto____5303))
{return or__3548__auto____5303;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex",this$);
}
}
})().call(null,this$);
}
});
one.color.hex_rgba = (function hex_rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5304 = this$;

if(cljs.core.truth_(and__3546__auto____5304))
{return this$.one$color$IColor$hex_rgba;
} else
{return and__3546__auto____5304;
}
})()))
{return this$.one$color$IColor$hex_rgba(this$);
} else
{return (function (){var or__3548__auto____5305 = (one.color.hex_rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5305))
{return or__3548__auto____5305;
} else
{var or__3548__auto____5306 = (one.color.hex_rgba["_"]);

if(cljs.core.truth_(or__3548__auto____5306))
{return or__3548__auto____5306;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex-rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.alpha = (function alpha(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5307 = this$;

if(cljs.core.truth_(and__3546__auto____5307))
{return this$.one$color$IColor$alpha;
} else
{return and__3546__auto____5307;
}
})()))
{return this$.one$color$IColor$alpha(this$);
} else
{return (function (){var or__3548__auto____5308 = (one.color.alpha[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5308))
{return or__3548__auto____5308;
} else
{var or__3548__auto____5309 = (one.color.alpha["_"]);

if(cljs.core.truth_(or__3548__auto____5309))
{return or__3548__auto____5309;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.alpha",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} r
* @param {*} g
* @param {*} b
* @param {*} a
* @param {*=} __meta 
* @param {*=} __extmap
*/
one.color.Color = (function (r,g,b,a, __meta, __extmap){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
one.color.Color.prototype.cljs$core$IHash$ = true;
one.color.Color.prototype.cljs$core$IHash$_hash = (function (this__1337__auto__){
var this__5312 = this;
return cljs.core.hash_coll.call(null,this__1337__auto__);
});
one.color.Color.prototype.cljs$core$ILookup$ = true;
one.color.Color.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5336 = null;
var G__5336__5337 = (function (this__1342__auto__,k__1343__auto__){
var this__5313 = this;
return cljs.core._lookup.call(null,this__1342__auto__,k__1343__auto__,null);
});
var G__5336__5338 = (function (this__1344__auto__,k__1345__auto__,else__1346__auto__){
var this__5314 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'r",this__5314.r,"﷐'g",this__5314.g,"﷐'b",this__5314.b,"﷐'a",this__5314.a),this__5314.__extmap),k__1345__auto__,else__1346__auto__);
});
G__5336 = function(this__1344__auto__,k__1345__auto__,else__1346__auto__){
switch(arguments.length){
case  2 :
return G__5336__5337.call(this,this__1344__auto__,k__1345__auto__);
case  3 :
return G__5336__5338.call(this,this__1344__auto__,k__1345__auto__,else__1346__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5336;
})()
;
one.color.Color.prototype.cljs$core$IAssociative$ = true;
one.color.Color.prototype.cljs$core$IAssociative$_assoc = (function (this__1350__auto__,k__1351__auto__,G__5310){
var this__5315 = this;
var pred__5316__5319 = cljs.core.identical_QMARK_;
var expr__5317__5320 = k__1351__auto__;

if(cljs.core.truth_(pred__5316__5319.call(null,"﷐'r",expr__5317__5320)))
{return (new one.color.Color(G__5310,this__5315.g,this__5315.b,this__5315.a,this__5315.__meta,this__5315.__extmap));
} else
{if(cljs.core.truth_(pred__5316__5319.call(null,"﷐'g",expr__5317__5320)))
{return (new one.color.Color(this__5315.r,G__5310,this__5315.b,this__5315.a,this__5315.__meta,this__5315.__extmap));
} else
{if(cljs.core.truth_(pred__5316__5319.call(null,"﷐'b",expr__5317__5320)))
{return (new one.color.Color(this__5315.r,this__5315.g,G__5310,this__5315.a,this__5315.__meta,this__5315.__extmap));
} else
{if(cljs.core.truth_(pred__5316__5319.call(null,"﷐'a",expr__5317__5320)))
{return (new one.color.Color(this__5315.r,this__5315.g,this__5315.b,G__5310,this__5315.__meta,this__5315.__extmap));
} else
{return (new one.color.Color(this__5315.r,this__5315.g,this__5315.b,this__5315.a,this__5315.__meta,cljs.core.assoc.call(null,this__5315.__extmap,k__1351__auto__,G__5310)));
}
}
}
}
});
one.color.Color.prototype.one$color$IColor$ = true;
one.color.Color.prototype.one$color$IColor$rgb = (function (_){
var this__5321 = this;
return cljs.core.Vector.fromArray([this__5321.r,this__5321.g,this__5321.b]);
});
one.color.Color.prototype.one$color$IColor$rgba = (function (_){
var this__5322 = this;
return cljs.core.Vector.fromArray([this__5322.r,this__5322.g,this__5322.b,this__5322.a]);
});
one.color.Color.prototype.one$color$IColor$hex = (function (_){
var this__5323 = this;
return goog.color.rgbArrayToHex.call(null,cljs.core.array.call(null,this__5323.r,this__5323.g,this__5323.b));
});
one.color.Color.prototype.one$color$IColor$hex_rgba = (function (_){
var this__5324 = this;
return goog.color.alpha.rgbaArrayToHex.call(null,cljs.core.array.call(null,this__5324.r,this__5324.g,this__5324.b,this__5324.a));
});
one.color.Color.prototype.one$color$IColor$alpha = (function (_){
var this__5325 = this;
return this__5325.a;
});
one.color.Color.prototype.cljs$core$IRecord$ = true;
one.color.Color.prototype.cljs$core$ICollection$ = true;
one.color.Color.prototype.cljs$core$ICollection$_conj = (function (this__1348__auto__,entry__1349__auto__){
var this__5326 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__1349__auto__)))
{return cljs.core._assoc.call(null,this__1348__auto__,cljs.core._nth.call(null,entry__1349__auto__,0),cljs.core._nth.call(null,entry__1349__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__1348__auto__,entry__1349__auto__);
}
});
one.color.Color.prototype.cljs$core$ISeqable$ = true;
one.color.Color.prototype.cljs$core$ISeqable$_seq = (function (this__1355__auto__){
var this__5327 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__5327.r),cljs.core.vector.call(null,"﷐'g",this__5327.g),cljs.core.vector.call(null,"﷐'b",this__5327.b),cljs.core.vector.call(null,"﷐'a",this__5327.a)]),this__5327.__extmap));
});
one.color.Color.prototype.cljs$core$IPrintable$ = true;
one.color.Color.prototype.cljs$core$IPrintable$_pr_seq = (function (this__1357__auto__,opts__1358__auto__){
var this__5328 = this;
var pr_pair__1359__auto____5329 = (function (keyval__1360__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__1358__auto__,keyval__1360__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__1359__auto____5329,cljs.core.str.call(null,"#","one.color.Color","{"),", ","}",opts__1358__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__5328.r),cljs.core.vector.call(null,"﷐'g",this__5328.g),cljs.core.vector.call(null,"﷐'b",this__5328.b),cljs.core.vector.call(null,"﷐'a",this__5328.a)]),this__5328.__extmap));
});
one.color.Color.prototype.cljs$core$ICounted$ = true;
one.color.Color.prototype.cljs$core$ICounted$_count = (function (this__1347__auto__){
var this__5330 = this;
return (4 + cljs.core.count.call(null,this__5330.__extmap));
});
one.color.Color.prototype.cljs$core$IEquiv$ = true;
one.color.Color.prototype.cljs$core$IEquiv$_equiv = (function (this__1338__auto__,other__1339__auto__){
var this__5331 = this;
var and__3546__auto____5332 = (this__1338__auto__.constructor === other__1339__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____5332))
{return cljs.core.equiv_map.call(null,this__1338__auto__,other__1339__auto__);
} else
{return and__3546__auto____5332;
}
});
one.color.Color.prototype.cljs$core$IWithMeta$ = true;
one.color.Color.prototype.cljs$core$IWithMeta$_with_meta = (function (this__1341__auto__,G__5310){
var this__5333 = this;
return (new one.color.Color(this__5333.r,this__5333.g,this__5333.b,this__5333.a,G__5310,this__5333.__extmap));
});
one.color.Color.prototype.cljs$core$IMeta$ = true;
one.color.Color.prototype.cljs$core$IMeta$_meta = (function (this__1340__auto__){
var this__5334 = this;
return this__5334.__meta;
});
one.color.Color.prototype.cljs$core$IMap$ = true;
one.color.Color.prototype.cljs$core$IMap$_dissoc = (function (this__1352__auto__,k__1353__auto__){
var this__5335 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'r","﷐'a","﷐'b","﷐'g"]),k__1353__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__1352__auto__),this__5335.__meta),k__1353__auto__);
} else
{return (new one.color.Color(this__5335.r,this__5335.g,this__5335.b,this__5335.a,this__5335.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__5335.__extmap,k__1353__auto__))));
}
});
one.color.__GT_Color = (function __GT_Color(r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
one.color.map__GT_Color = (function map__GT_Color(G__5311){
return (new one.color.Color("﷐'r".call(null,G__5311),"﷐'g".call(null,G__5311),"﷐'b".call(null,G__5311),"﷐'a".call(null,G__5311),null,cljs.core.dissoc.call(null,G__5311,"﷐'r","﷐'g","﷐'b","﷐'a")));
});
one.color.make_color = (function() {
var make_color = null;
var make_color__5340 = (function (r,g,b){
return make_color.call(null,r,g,b,1);
});
var make_color__5341 = (function (r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
make_color = function(r,g,b,a){
switch(arguments.length){
case  3 :
return make_color__5340.call(this,r,g,b);
case  4 :
return make_color__5341.call(this,r,g,b,a);
}
throw('Invalid arity: ' + arguments.length);
};
return make_color;
})()
;
one.color.IColorSource = {};
one.color.color = (function color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5343 = this$;

if(cljs.core.truth_(and__3546__auto____5343))
{return this$.one$color$IColorSource$color;
} else
{return and__3546__auto____5343;
}
})()))
{return this$.one$color$IColorSource$color(this$);
} else
{return (function (){var or__3548__auto____5344 = (one.color.color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5344))
{return or__3548__auto____5344;
} else
{var or__3548__auto____5345 = (one.color.color["_"]);

if(cljs.core.truth_(or__3548__auto____5345))
{return or__3548__auto____5345;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.color",this$);
}
}
})().call(null,this$);
}
});
one.color.bg_color = (function bg_color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5346 = this$;

if(cljs.core.truth_(and__3546__auto____5346))
{return this$.one$color$IColorSource$bg_color;
} else
{return and__3546__auto____5346;
}
})()))
{return this$.one$color$IColorSource$bg_color(this$);
} else
{return (function (){var or__3548__auto____5347 = (one.color.bg_color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5347))
{return or__3548__auto____5347;
} else
{var or__3548__auto____5348 = (one.color.bg_color["_"]);

if(cljs.core.truth_(or__3548__auto____5348))
{return or__3548__auto____5348;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.bg-color",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$color$IColorSource$ = true;
Element.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,goog.color.parse.call(null,one.core.get_style.call(null,this$,"color")),"﷐'keywordize-keys",true));
});
Element.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(function (){var c__5349 = goog.style.getBackgroundColor.call(null,this$);

try{return goog.color.parse.call(null,c__5349);
}catch (e5350){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e5350)))
{var e__5351 = e5350;

return goog.color.alpha.parse.call(null,c__5349);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e5350;
} else
{return null;
}
}
}})(),"﷐'keywordize-keys",true));
});
cljs.core.ObjMap.prototype.one$color$IColorSource$ = true;
cljs.core.ObjMap.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,"﷐'hex".call(null,this$));
});
cljs.core.ObjMap.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,this$);
});
String.prototype.one$color$IColorSource$ = true;
String.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(cljs.core.truth_(goog.string.startsWith.call(null,this$,"#"))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$),7))?goog.color.hexToRgb.call(null,this$):(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$),9))?goog.color.alpha.hexToRgba.call(null,this$):null)):(cljs.core.truth_(goog.string.startsWith.call(null,this$,"rgba("))?goog.color.alpha.parse.call(null,this$):(cljs.core.truth_(goog.string.startsWith.call(null,this$,"rgb("))?goog.color.parseRgb.call(null,this$):null))),"﷐'keywordize-keys",true));
});
String.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,this$);
});
Array.prototype.one$color$IColorSource$ = true;
Array.prototype.one$color$IColorSource$color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,cljs.core.js__GT_clj.call(null,this$));
});
Array.prototype.one$color$IColorSource$bg_color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,cljs.core.js__GT_clj.call(null,this$));
});
cljs.core.Vector.prototype.one$color$IColorSource$ = true;
cljs.core.Vector.prototype.one$color$IColorSource$color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,this$);
});
cljs.core.Vector.prototype.one$color$IColorSource$bg_color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,this$);
});
one.color.Color.prototype.one$color$IColorSource$ = true;
one.color.Color.prototype.one$color$IColorSource$color = (function (this$){
return this$;
});
one.color.Color.prototype.one$color$IColorSource$bg_color = (function (this$){
return this$;
});
(one.color.IColorSource["null"] = true);
(one.color.color["null"] = (function (this$){
return one.color.make_color.call(null,0,0,0);
}));
(one.color.bg_color["null"] = (function (this$){
return one.color.make_color.call(null,0,0,0);
}));
