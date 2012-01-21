goog.provide('one.color');
goog.require('cljs.core');
goog.require('one.core');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.color');
goog.require('goog.color.alpha');
one.color.IColor = {};
one.color.rgb = (function rgb(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6095 = this$;

if(cljs.core.truth_(and__3546__auto____6095))
{return this$.one$color$IColor$rgb;
} else
{return and__3546__auto____6095;
}
})()))
{return this$.one$color$IColor$rgb(this$);
} else
{return (function (){var or__3548__auto____6096 = (one.color.rgb[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6096))
{return or__3548__auto____6096;
} else
{var or__3548__auto____6097 = (one.color.rgb["_"]);

if(cljs.core.truth_(or__3548__auto____6097))
{return or__3548__auto____6097;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgb",this$);
}
}
})().call(null,this$);
}
});
one.color.rgba = (function rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6098 = this$;

if(cljs.core.truth_(and__3546__auto____6098))
{return this$.one$color$IColor$rgba;
} else
{return and__3546__auto____6098;
}
})()))
{return this$.one$color$IColor$rgba(this$);
} else
{return (function (){var or__3548__auto____6099 = (one.color.rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6099))
{return or__3548__auto____6099;
} else
{var or__3548__auto____6100 = (one.color.rgba["_"]);

if(cljs.core.truth_(or__3548__auto____6100))
{return or__3548__auto____6100;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.hex = (function hex(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6101 = this$;

if(cljs.core.truth_(and__3546__auto____6101))
{return this$.one$color$IColor$hex;
} else
{return and__3546__auto____6101;
}
})()))
{return this$.one$color$IColor$hex(this$);
} else
{return (function (){var or__3548__auto____6102 = (one.color.hex[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6102))
{return or__3548__auto____6102;
} else
{var or__3548__auto____6103 = (one.color.hex["_"]);

if(cljs.core.truth_(or__3548__auto____6103))
{return or__3548__auto____6103;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex",this$);
}
}
})().call(null,this$);
}
});
one.color.hex_rgba = (function hex_rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6104 = this$;

if(cljs.core.truth_(and__3546__auto____6104))
{return this$.one$color$IColor$hex_rgba;
} else
{return and__3546__auto____6104;
}
})()))
{return this$.one$color$IColor$hex_rgba(this$);
} else
{return (function (){var or__3548__auto____6105 = (one.color.hex_rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6105))
{return or__3548__auto____6105;
} else
{var or__3548__auto____6106 = (one.color.hex_rgba["_"]);

if(cljs.core.truth_(or__3548__auto____6106))
{return or__3548__auto____6106;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex-rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.alpha = (function alpha(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6107 = this$;

if(cljs.core.truth_(and__3546__auto____6107))
{return this$.one$color$IColor$alpha;
} else
{return and__3546__auto____6107;
}
})()))
{return this$.one$color$IColor$alpha(this$);
} else
{return (function (){var or__3548__auto____6108 = (one.color.alpha[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6108))
{return or__3548__auto____6108;
} else
{var or__3548__auto____6109 = (one.color.alpha["_"]);

if(cljs.core.truth_(or__3548__auto____6109))
{return or__3548__auto____6109;
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
var this__6112 = this;
return cljs.core.hash_coll.call(null,this__1337__auto__);
});
one.color.Color.prototype.cljs$core$ILookup$ = true;
one.color.Color.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6136 = null;
var G__6136__6137 = (function (this__1342__auto__,k__1343__auto__){
var this__6113 = this;
return cljs.core._lookup.call(null,this__1342__auto__,k__1343__auto__,null);
});
var G__6136__6138 = (function (this__1344__auto__,k__1345__auto__,else__1346__auto__){
var this__6114 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'r",this__6114.r,"﷐'g",this__6114.g,"﷐'b",this__6114.b,"﷐'a",this__6114.a),this__6114.__extmap),k__1345__auto__,else__1346__auto__);
});
G__6136 = function(this__1344__auto__,k__1345__auto__,else__1346__auto__){
switch(arguments.length){
case  2 :
return G__6136__6137.call(this,this__1344__auto__,k__1345__auto__);
case  3 :
return G__6136__6138.call(this,this__1344__auto__,k__1345__auto__,else__1346__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6136;
})()
;
one.color.Color.prototype.cljs$core$IAssociative$ = true;
one.color.Color.prototype.cljs$core$IAssociative$_assoc = (function (this__1350__auto__,k__1351__auto__,G__6110){
var this__6115 = this;
var pred__6116__6119 = cljs.core.identical_QMARK_;
var expr__6117__6120 = k__1351__auto__;

if(cljs.core.truth_(pred__6116__6119.call(null,"﷐'r",expr__6117__6120)))
{return (new one.color.Color(G__6110,this__6115.g,this__6115.b,this__6115.a,this__6115.__meta,this__6115.__extmap));
} else
{if(cljs.core.truth_(pred__6116__6119.call(null,"﷐'g",expr__6117__6120)))
{return (new one.color.Color(this__6115.r,G__6110,this__6115.b,this__6115.a,this__6115.__meta,this__6115.__extmap));
} else
{if(cljs.core.truth_(pred__6116__6119.call(null,"﷐'b",expr__6117__6120)))
{return (new one.color.Color(this__6115.r,this__6115.g,G__6110,this__6115.a,this__6115.__meta,this__6115.__extmap));
} else
{if(cljs.core.truth_(pred__6116__6119.call(null,"﷐'a",expr__6117__6120)))
{return (new one.color.Color(this__6115.r,this__6115.g,this__6115.b,G__6110,this__6115.__meta,this__6115.__extmap));
} else
{return (new one.color.Color(this__6115.r,this__6115.g,this__6115.b,this__6115.a,this__6115.__meta,cljs.core.assoc.call(null,this__6115.__extmap,k__1351__auto__,G__6110)));
}
}
}
}
});
one.color.Color.prototype.one$color$IColor$ = true;
one.color.Color.prototype.one$color$IColor$rgb = (function (_){
var this__6121 = this;
return cljs.core.Vector.fromArray([this__6121.r,this__6121.g,this__6121.b]);
});
one.color.Color.prototype.one$color$IColor$rgba = (function (_){
var this__6122 = this;
return cljs.core.Vector.fromArray([this__6122.r,this__6122.g,this__6122.b,this__6122.a]);
});
one.color.Color.prototype.one$color$IColor$hex = (function (_){
var this__6123 = this;
return goog.color.rgbArrayToHex.call(null,cljs.core.array.call(null,this__6123.r,this__6123.g,this__6123.b));
});
one.color.Color.prototype.one$color$IColor$hex_rgba = (function (_){
var this__6124 = this;
return goog.color.alpha.rgbaArrayToHex.call(null,cljs.core.array.call(null,this__6124.r,this__6124.g,this__6124.b,this__6124.a));
});
one.color.Color.prototype.one$color$IColor$alpha = (function (_){
var this__6125 = this;
return this__6125.a;
});
one.color.Color.prototype.cljs$core$IRecord$ = true;
one.color.Color.prototype.cljs$core$ICollection$ = true;
one.color.Color.prototype.cljs$core$ICollection$_conj = (function (this__1348__auto__,entry__1349__auto__){
var this__6126 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__1349__auto__)))
{return cljs.core._assoc.call(null,this__1348__auto__,cljs.core._nth.call(null,entry__1349__auto__,0),cljs.core._nth.call(null,entry__1349__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__1348__auto__,entry__1349__auto__);
}
});
one.color.Color.prototype.cljs$core$ISeqable$ = true;
one.color.Color.prototype.cljs$core$ISeqable$_seq = (function (this__1355__auto__){
var this__6127 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__6127.r),cljs.core.vector.call(null,"﷐'g",this__6127.g),cljs.core.vector.call(null,"﷐'b",this__6127.b),cljs.core.vector.call(null,"﷐'a",this__6127.a)]),this__6127.__extmap));
});
one.color.Color.prototype.cljs$core$IPrintable$ = true;
one.color.Color.prototype.cljs$core$IPrintable$_pr_seq = (function (this__1357__auto__,opts__1358__auto__){
var this__6128 = this;
var pr_pair__1359__auto____6129 = (function (keyval__1360__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__1358__auto__,keyval__1360__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__1359__auto____6129,cljs.core.str.call(null,"#","one.color.Color","{"),", ","}",opts__1358__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__6128.r),cljs.core.vector.call(null,"﷐'g",this__6128.g),cljs.core.vector.call(null,"﷐'b",this__6128.b),cljs.core.vector.call(null,"﷐'a",this__6128.a)]),this__6128.__extmap));
});
one.color.Color.prototype.cljs$core$ICounted$ = true;
one.color.Color.prototype.cljs$core$ICounted$_count = (function (this__1347__auto__){
var this__6130 = this;
return (4 + cljs.core.count.call(null,this__6130.__extmap));
});
one.color.Color.prototype.cljs$core$IEquiv$ = true;
one.color.Color.prototype.cljs$core$IEquiv$_equiv = (function (this__1338__auto__,other__1339__auto__){
var this__6131 = this;
var and__3546__auto____6132 = (this__1338__auto__.constructor === other__1339__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____6132))
{return cljs.core.equiv_map.call(null,this__1338__auto__,other__1339__auto__);
} else
{return and__3546__auto____6132;
}
});
one.color.Color.prototype.cljs$core$IWithMeta$ = true;
one.color.Color.prototype.cljs$core$IWithMeta$_with_meta = (function (this__1341__auto__,G__6110){
var this__6133 = this;
return (new one.color.Color(this__6133.r,this__6133.g,this__6133.b,this__6133.a,G__6110,this__6133.__extmap));
});
one.color.Color.prototype.cljs$core$IMeta$ = true;
one.color.Color.prototype.cljs$core$IMeta$_meta = (function (this__1340__auto__){
var this__6134 = this;
return this__6134.__meta;
});
one.color.Color.prototype.cljs$core$IMap$ = true;
one.color.Color.prototype.cljs$core$IMap$_dissoc = (function (this__1352__auto__,k__1353__auto__){
var this__6135 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'r","﷐'a","﷐'b","﷐'g"]),k__1353__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__1352__auto__),this__6135.__meta),k__1353__auto__);
} else
{return (new one.color.Color(this__6135.r,this__6135.g,this__6135.b,this__6135.a,this__6135.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__6135.__extmap,k__1353__auto__))));
}
});
one.color.__GT_Color = (function __GT_Color(r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
one.color.map__GT_Color = (function map__GT_Color(G__6111){
return (new one.color.Color("﷐'r".call(null,G__6111),"﷐'g".call(null,G__6111),"﷐'b".call(null,G__6111),"﷐'a".call(null,G__6111),null,cljs.core.dissoc.call(null,G__6111,"﷐'r","﷐'g","﷐'b","﷐'a")));
});
one.color.make_color = (function() {
var make_color = null;
var make_color__6140 = (function (r,g,b){
return make_color.call(null,r,g,b,1);
});
var make_color__6141 = (function (r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
make_color = function(r,g,b,a){
switch(arguments.length){
case  3 :
return make_color__6140.call(this,r,g,b);
case  4 :
return make_color__6141.call(this,r,g,b,a);
}
throw('Invalid arity: ' + arguments.length);
};
return make_color;
})()
;
one.color.IColorSource = {};
one.color.color = (function color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6143 = this$;

if(cljs.core.truth_(and__3546__auto____6143))
{return this$.one$color$IColorSource$color;
} else
{return and__3546__auto____6143;
}
})()))
{return this$.one$color$IColorSource$color(this$);
} else
{return (function (){var or__3548__auto____6144 = (one.color.color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6144))
{return or__3548__auto____6144;
} else
{var or__3548__auto____6145 = (one.color.color["_"]);

if(cljs.core.truth_(or__3548__auto____6145))
{return or__3548__auto____6145;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.color",this$);
}
}
})().call(null,this$);
}
});
one.color.bg_color = (function bg_color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6146 = this$;

if(cljs.core.truth_(and__3546__auto____6146))
{return this$.one$color$IColorSource$bg_color;
} else
{return and__3546__auto____6146;
}
})()))
{return this$.one$color$IColorSource$bg_color(this$);
} else
{return (function (){var or__3548__auto____6147 = (one.color.bg_color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6147))
{return or__3548__auto____6147;
} else
{var or__3548__auto____6148 = (one.color.bg_color["_"]);

if(cljs.core.truth_(or__3548__auto____6148))
{return or__3548__auto____6148;
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
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(function (){var c__6149 = goog.style.getBackgroundColor.call(null,this$);

try{return goog.color.parse.call(null,c__6149);
}catch (e6150){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e6150)))
{var e__6151 = e6150;

return goog.color.alpha.parse.call(null,c__6149);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e6150;
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
